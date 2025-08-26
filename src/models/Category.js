const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category name is required'],
    trim: true,
    maxlength: [100, 'Category name cannot exceed 100 characters']
  },
  description: {
    type: String,
    maxlength: [500, 'Category description cannot exceed 500 characters']
  },
  slug: {
    type: String,
    required: [true, 'Category slug is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    default: null
  },
  level: {
    type: Number,
    default: 0,
    min: 0
  },
  path: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }],
  image: {
    url: String,
    alt: String
  },
  seo: {
    metaTitle: String,
    metaDescription: String,
    keywords: [String]
  },
  isActive: {
    type: Boolean,
    default: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  sortOrder: {
    type: Number,
    default: 0
  },
  productCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Indexes for better query performance
categorySchema.index({ slug: 1 });
categorySchema.index({ parent: 1 });
categorySchema.index({ level: 1 });
categorySchema.index({ isActive: 1 });
categorySchema.index({ featured: 1 });
categorySchema.index({ sortOrder: 1 });

// Virtual for full path name
categorySchema.virtual('fullPath').get(function() {
  if (this.path && this.path.length > 0) {
    return this.path.map(p => p.name).join(' > ') + ' > ' + this.name;
  }
  return this.name;
});

// Method to get children categories
categorySchema.methods.getChildren = async function() {
  return await this.model('Category').find({ parent: this._id, isActive: true }).sort('sortOrder');
};

// Method to get all descendants
categorySchema.methods.getDescendants = async function() {
  const descendants = [];
  const children = await this.getChildren();
  
  for (const child of children) {
    descendants.push(child);
    const childDescendants = await child.getDescendants();
    descendants.push(...childDescendants);
  }
  
  return descendants;
};

// Method to get ancestors
categorySchema.methods.getAncestors = async function() {
  const ancestors = [];
  let current = this;
  
  while (current.parent) {
    const parent = await this.model('Category').findById(current.parent);
    if (parent) {
      ancestors.unshift(parent);
      current = parent;
    } else {
      break;
    }
  }
  
  return ancestors;
};

// Method to update product count
categorySchema.methods.updateProductCount = async function() {
  const Product = mongoose.model('Product');
  const count = await Product.countDocuments({ 
    category: this._id, 
    status: 'active' 
  });
  
  this.productCount = count;
  return await this.save();
};

// Pre-save middleware to update level and path
categorySchema.pre('save', async function(next) {
  if (this.isModified('parent')) {
    if (this.parent) {
      const parent = await this.model('Category').findById(this.parent);
      if (parent) {
        this.level = parent.level + 1;
        this.path = [...parent.path, parent._id];
      }
    } else {
      this.level = 0;
      this.path = [];
    }
  }
  next();
});

// Ensure virtual fields are serialized
categorySchema.set('toJSON', { virtuals: true });
categorySchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Category', categorySchema);
