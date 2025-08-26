const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
    unique: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'],
    default: 'pending'
  },
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity must be at least 1']
    },
    price: {
      type: Number,
      required: true,
      min: [0, 'Price cannot be negative']
    },
    total: {
      type: Number,
      required: true,
      min: [0, 'Total cannot be negative']
    },
    variant: {
      name: String,
      value: String,
      priceModifier: Number
    }
  }],
  subtotal: {
    type: Number,
    required: true,
    min: [0, 'Subtotal cannot be negative']
  },
  tax: {
    type: Number,
    default: 0,
    min: [0, 'Tax cannot be negative']
  },
  shipping: {
    cost: {
      type: Number,
      default: 0,
      min: [0, 'Shipping cost cannot be negative']
    },
    method: String,
    trackingNumber: String,
    estimatedDelivery: Date
  },
  discount: {
    amount: {
      type: Number,
      default: 0,
      min: [0, 'Discount cannot be negative']
    },
    code: String,
    type: {
      type: String,
      enum: ['percentage', 'fixed'],
      default: 'fixed'
    }
  },
  total: {
    type: Number,
    required: true,
    min: [0, 'Total cannot be negative']
  },
  currency: {
    type: String,
    default: 'TRY',
    enum: ['TRY', 'USD', 'EUR', 'GBP']
  },
  billingAddress: {
    firstName: String,
    lastName: String,
    company: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
    phone: String
  },
  shippingAddress: {
    firstName: String,
    lastName: String,
    company: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
    phone: String
  },
  payment: {
    method: {
      type: String,
      enum: ['credit_card', 'bank_transfer', 'paypal', 'cash_on_delivery'],
      required: true
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending'
    },
    transactionId: String,
    paidAt: Date
  },
  notes: {
    customer: String,
    internal: String
  },
  tags: [String],
  source: {
    type: String,
    enum: ['web', 'mobile', 'admin', 'api'],
    default: 'web'
  }
}, {
  timestamps: true
});

// Indexes for better query performance
orderSchema.index({ orderNumber: 1 });
orderSchema.index({ user: 1 });
orderSchema.index({ status: 1 });
orderSchema.index({ createdAt: -1 });
orderSchema.index({ 'payment.status': 1 });
orderSchema.index({ total: 1 });

// Virtual for item count
orderSchema.virtual('itemCount').get(function() {
  return this.items.reduce((total, item) => total + item.quantity, 0);
});

// Virtual for isPaid
orderSchema.virtual('isPaid').get(function() {
  return this.payment.status === 'completed';
});

// Virtual for canCancel
orderSchema.virtual('canCancel').get(function() {
  return ['pending', 'confirmed', 'processing'].includes(this.status);
});

// Method to calculate totals
orderSchema.methods.calculateTotals = function() {
  this.subtotal = this.items.reduce((total, item) => total + item.total, 0);
  
  // Apply discount
  let discountAmount = 0;
  if (this.discount.amount > 0) {
    if (this.discount.type === 'percentage') {
      discountAmount = (this.subtotal * this.discount.amount) / 100;
    } else {
      discountAmount = this.discount.amount;
    }
  }
  
  // Calculate final total
  this.total = this.subtotal + this.tax + this.shipping.cost - discountAmount;
  
  return this;
};

// Method to update order status
orderSchema.methods.updateStatus = function(newStatus, notes = '') {
  const oldStatus = this.status;
  this.status = newStatus;
  
  if (notes) {
    this.notes.internal = (this.notes.internal || '') + `\n${new Date().toISOString()}: ${notes}`;
  }
  
  // Update payment status if order is delivered
  if (newStatus === 'delivered' && this.payment.status === 'pending') {
    this.payment.status = 'completed';
    this.payment.paidAt = new Date();
  }
  
  return this.save();
};

// Method to add item
orderSchema.methods.addItem = function(productId, quantity, price, variant = null) {
  const existingItem = this.items.find(item => 
    item.product.toString() === productId.toString() && 
    JSON.stringify(item.variant) === JSON.stringify(variant)
  );
  
  if (existingItem) {
    existingItem.quantity += quantity;
    existingItem.total = existingItem.quantity * existingItem.price;
  } else {
    this.items.push({
      product: productId,
      quantity,
      price,
      total: quantity * price,
      variant
    });
  }
  
  this.calculateTotals();
  return this.save();
};

// Method to remove item
orderSchema.methods.removeItem = function(itemId) {
  this.items = this.items.filter(item => item._id.toString() !== itemId.toString());
  this.calculateTotals();
  return this.save();
};

// Pre-save middleware to generate order number
orderSchema.pre('save', async function(next) {
  if (this.isNew && !this.orderNumber) {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    
    // Get count of orders for today
    const todayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const todayCount = await this.constructor.countDocuments({
      createdAt: { $gte: todayStart }
    });
    
    const sequence = (todayCount + 1).toString().padStart(4, '0');
    this.orderNumber = `ORD${year}${month}${day}${sequence}`;
  }
  
  // Calculate totals before saving
  this.calculateTotals();
  next();
});

// Ensure virtual fields are serialized
orderSchema.set('toJSON', { virtuals: true });
orderSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Order', orderSchema);
