const User = require('../models/User');
const Product = require('../models/Product');
const Category = require('../models/Category');
const Order = require('../models/Order');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Helper function to get user from context
const getUserFromContext = (context) => {
  if (!context.req || !context.req.headers.authorization) {
    return null;
  }
  
  try {
    const token = context.req.headers.authorization.replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    return decoded.userId;
  } catch (error) {
    return null;
  }
};

// Helper function to check if user is admin
const isAdmin = async (userId) => {
  if (!userId) return false;
  const user = await User.findById(userId);
  return user && user.role === 'admin';
};

const resolvers = {
  Date: {
    __serialize(value) {
      return value.toISOString();
    }
  },

  Query: {
    // User queries
    me: async (_, __, context) => {
      const userId = getUserFromContext(context);
      if (!userId) throw new Error('Not authenticated');
      
      const user = await User.findById(userId).populate('wishlist');
      if (!user) throw new Error('User not found');
      
      return user;
    },

    user: async (_, { id }) => {
      const user = await User.findById(id).populate('wishlist');
      if (!user) throw new Error('User not found');
      return user;
    },

    users: async (_, { role, isActive }) => {
      const filter = {};
      if (role) filter.role = role;
      if (isActive !== undefined) filter.isActive = isActive;
      
      return await User.find(filter).populate('wishlist');
    },

    // Product queries
    products: async (_, { 
      category, 
      status, 
      featured, 
      search, 
      minPrice, 
      maxPrice, 
      limit = 20, 
      offset = 0,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    }) => {
      const filter = {};
      
      if (category) filter.category = category;
      if (status) filter.status = status;
      if (featured !== undefined) filter.featured = featured;
      if (search) {
        filter.$text = { $search: search };
      }
      if (minPrice || maxPrice) {
        filter.price = {};
        if (minPrice) filter.price.$gte = minPrice;
        if (maxPrice) filter.price.$lte = maxPrice;
      }

      const sort = {};
      sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

      const [products, totalCount] = await Promise.all([
        Product.find(filter)
          .populate('category')
          .populate('subcategory')
          .sort(sort)
          .limit(limit)
          .skip(offset),
        Product.countDocuments(filter)
      ]);

      return {
        products,
        totalCount,
        hasNextPage: offset + limit < totalCount,
        hasPreviousPage: offset > 0
      };
    },

    product: async (_, { id, slug }) => {
      let filter = {};
      if (id) filter._id = id;
      if (slug) filter['seo.slug'] = slug;
      
      const product = await Product.findOne(filter)
        .populate('category')
        .populate('subcategory');
      
      if (!product) throw new Error('Product not found');
      return product;
    },

    featuredProducts: async (_, { limit = 10 }) => {
      return await Product.find({ 
        featured: true, 
        status: 'active' 
      })
        .populate('category')
        .limit(limit);
    },

    // Category queries
    categories: async (_, { parent, isActive }) => {
      const filter = {};
      if (parent !== undefined) filter.parent = parent;
      if (isActive !== undefined) filter.isActive = isActive;
      
      return await Category.find(filter).sort('sortOrder');
    },

    category: async (_, { id, slug }) => {
      let filter = {};
      if (id) filter._id = id;
      if (slug) filter.slug = slug;
      
      const category = await Category.findOne(filter);
      if (!category) throw new Error('Category not found');
      return category;
    },

    categoryTree: async () => {
      return await Category.find({ parent: null, isActive: true })
        .populate({
          path: 'children',
          match: { isActive: true },
          populate: {
            path: 'children',
            match: { isActive: true }
          }
        })
        .sort('sortOrder');
    },

    // Order queries
    myOrders: async (_, { status }, context) => {
      const userId = getUserFromContext(context);
      if (!userId) throw new Error('Not authenticated');
      
      const filter = { user: userId };
      if (status) filter.status = status;
      
      return await Order.find(filter)
        .populate('items.product')
        .populate('user')
        .sort('-createdAt');
    },

    order: async (_, { id, orderNumber }, context) => {
      const userId = getUserFromContext(context);
      if (!userId) throw new Error('Not authenticated');
      
      let filter = {};
      if (id) filter._id = id;
      if (orderNumber) filter.orderNumber = orderNumber;
      filter.user = userId;
      
      const order = await Order.findOne(filter)
        .populate('items.product')
        .populate('user');
      
      if (!order) throw new Error('Order not found');
      return order;
    },

    orders: async (_, { user, status, startDate, endDate, limit = 20, offset = 0 }, context) => {
      const userId = getUserFromContext(context);
      if (!userId) throw new Error('Not authenticated');
      
      const isUserAdmin = await isAdmin(userId);
      if (!isUserAdmin) throw new Error('Access denied');
      
      const filter = {};
      if (user) filter.user = user;
      if (status) filter.status = status;
      if (startDate || endDate) {
        filter.createdAt = {};
        if (startDate) filter.createdAt.$gte = new Date(startDate);
        if (endDate) filter.createdAt.$lte = new Date(endDate);
      }
      
      const [orders, totalCount] = await Promise.all([
        Order.find(filter)
          .populate('items.product')
          .populate('user')
          .sort('-createdAt')
          .limit(limit)
          .skip(offset),
        Order.countDocuments(filter)
      ]);
      
      return {
        orders,
        totalCount,
        hasNextPage: offset + limit < totalCount,
        hasPreviousPage: offset > 0
      };
    }
  },

  Mutation: {
    // User mutations
    register: async (_, { input }) => {
      const { email, password, firstName, lastName, phone } = input;
      
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('User with this email already exists');
      }
      
      // Create new user
      const user = new User({
        email,
        password,
        firstName,
        lastName,
        phone
      });
      
      await user.save();
      
      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '7d' }
      );
      
      return {
        token,
        user: user.getPublicProfile()
      };
    },

    login: async (_, { email, password }) => {
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('Invalid credentials');
      }
      
      // Check password
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        throw new Error('Invalid credentials');
      }
      
      // Update last login
      user.lastLogin = new Date();
      await user.save();
      
      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '7d' }
      );
      
      return {
        token,
        user: user.getPublicProfile()
      };
    },

    updateProfile: async (_, { input }, context) => {
      const userId = getUserFromContext(context);
      if (!userId) throw new Error('Not authenticated');
      
      const user = await User.findById(userId);
      if (!user) throw new Error('User not found');
      
      // Update fields
      Object.keys(input).forEach(key => {
        if (input[key] !== undefined) {
          user[key] = input[key];
        }
      });
      
      await user.save();
      return user.getPublicProfile();
    },

    changePassword: async (_, { currentPassword, newPassword }, context) => {
      const userId = getUserFromContext(context);
      if (!userId) throw new Error('Not authenticated');
      
      const user = await User.findById(userId);
      if (!user) throw new Error('User not found');
      
      // Verify current password
      const isCurrentPasswordValid = await user.comparePassword(currentPassword);
      if (!isCurrentPasswordValid) {
        throw new Error('Current password is incorrect');
      }
      
      // Update password
      user.password = newPassword;
      await user.save();
      
      return user.getPublicProfile();
    },

    // Product mutations
    createProduct: async (_, { input }, context) => {
      const userId = getUserFromContext(context);
      if (!userId) throw new Error('Not authenticated');
      
      const isUserAdmin = await isAdmin(userId);
      if (!isUserAdmin) throw new Error('Access denied');
      
      const product = new Product(input);
      await product.save();
      
      return await product.populate('category');
    },

    updateProduct: async (_, { id, input }, context) => {
      const userId = getUserFromContext(context);
      if (!userId) throw new Error('Not authenticated');
      
      const isUserAdmin = await isAdmin(userId);
      if (!isUserAdmin) throw new Error('Access denied');
      
      const product = await Product.findById(id);
      if (!product) throw new Error('Product not found');
      
      Object.keys(input).forEach(key => {
        if (input[key] !== undefined) {
          product[key] = input[key];
        }
      });
      
      await product.save();
      return await product.populate('category');
    },

    deleteProduct: async (_, { id }, context) => {
      const userId = getUserFromContext(context);
      if (!userId) throw new Error('Not authenticated');
      
      const isUserAdmin = await isAdmin(userId);
      if (!isUserAdmin) throw new Error('Access denied');
      
      const product = await Product.findById(id);
      if (!product) throw new Error('Product not found');
      
      await Product.findByIdAndDelete(id);
      return true;
    },

    updateProductInventory: async (_, { id, quantity, operation }, context) => {
      const userId = getUserFromContext(context);
      if (!userId) throw new Error('Not authenticated');
      
      const isUserAdmin = await isAdmin(userId);
      if (!isUserAdmin) throw new Error('Access denied');
      
      const product = await Product.findById(id);
      if (!product) throw new Error('Product not found');
      
      await product.updateInventory(quantity, operation);
      return await product.populate('category');
    },

    // Category mutations
    createCategory: async (_, { input }, context) => {
      const userId = getUserFromContext(context);
      if (!userId) throw new Error('Not authenticated');
      
      const isUserAdmin = await isAdmin(userId);
      if (!isUserAdmin) throw new Error('Access denied');
      
      const category = new Category(input);
      await category.save();
      
      return category;
    },

    updateCategory: async (_, { id, input }, context) => {
      const userId = getUserFromContext(context);
      if (!userId) throw new Error('Not authenticated');
      
      const isUserAdmin = await isAdmin(userId);
      if (!isUserAdmin) throw new Error('Access denied');
      
      const category = await Category.findById(id);
      if (!category) throw new Error('Category not found');
      
      Object.keys(input).forEach(key => {
        if (input[key] !== undefined) {
          category[key] = input[key];
        }
      });
      
      await category.save();
      return category;
    },

    deleteCategory: async (_, { id }, context) => {
      const userId = getUserFromContext(context);
      if (!userId) throw new Error('Not authenticated');
      
      const isUserAdmin = await isAdmin(userId);
      if (!isUserAdmin) throw new Error('Access denied');
      
      const category = await Category.findById(id);
      if (!category) throw new Error('Category not found');
      
      // Check if category has products
      const productCount = await Product.countDocuments({ category: id });
      if (productCount > 0) {
        throw new Error('Cannot delete category with existing products');
      }
      
      await Category.findByIdAndDelete(id);
      return true;
    },

    // Order mutations
    createOrder: async (_, { input }, context) => {
      const userId = getUserFromContext(context);
      if (!userId) throw new Error('Not authenticated');
      
      // Verify user owns the order
      if (input.user !== userId) {
        const isUserAdmin = await isAdmin(userId);
        if (!isUserAdmin) throw new Error('Access denied');
      }
      
      const order = new Order(input);
      await order.save();
      
      return await order.populate('items.product').populate('user');
    },

    updateOrderStatus: async (_, { id, status, notes }, context) => {
      const userId = getUserFromContext(context);
      if (!userId) throw new Error('Not authenticated');
      
      const order = await Order.findById(id);
      if (!order) throw new Error('Order not found');
      
      // Check permissions
      if (order.user.toString() !== userId) {
        const isUserAdmin = await isAdmin(userId);
        if (!isUserAdmin) throw new Error('Access denied');
      }
      
      await order.updateStatus(status, notes);
      return await order.populate('items.product').populate('user');
    },

    cancelOrder: async (_, { id }, context) => {
      const userId = getUserFromContext(context);
      if (!userId) throw new Error('Not authenticated');
      
      const order = await Order.findById(id);
      if (!order) throw new Error('Order not found');
      
      // Check permissions
      if (order.user.toString() !== userId) {
        const isUserAdmin = await isAdmin(userId);
        if (!isUserAdmin) throw new Error('Access denied');
      }
      
      if (!order.canCancel) {
        throw new Error('Order cannot be cancelled');
      }
      
      await order.updateStatus('cancelled', 'Order cancelled by user');
      return await order.populate('items.product').populate('user');
    },

    // Wishlist mutations
    addToWishlist: async (_, { productId }, context) => {
      const userId = getUserFromContext(context);
      if (!userId) throw new Error('Not authenticated');
      
      const user = await User.findById(userId);
      if (!user) throw new Error('User not found');
      
      if (!user.wishlist.includes(productId)) {
        user.wishlist.push(productId);
        await user.save();
      }
      
      return await user.populate('wishlist');
    },

    removeFromWishlist: async (_, { productId }, context) => {
      const userId = getUserFromContext(context);
      if (!userId) throw new Error('Not authenticated');
      
      const user = await User.findById(userId);
      if (!user) throw new Error('User not found');
      
      user.wishlist = user.wishlist.filter(id => id.toString() !== productId);
      await user.save();
      
      return await user.populate('wishlist');
    }
  },

  // Field resolvers
  User: {
    wishlist: async (parent) => {
      if (parent.wishlist && parent.wishlist.length > 0) {
        return await Product.find({ _id: { $in: parent.wishlist } });
      }
      return [];
    }
  },

  Category: {
    children: async (parent) => {
      return await Category.find({ parent: parent._id, isActive: true }).sort('sortOrder');
    }
  },

  Order: {
    items: async (parent) => {
      if (parent.items && parent.items.length > 0) {
        return await Promise.all(
          parent.items.map(async (item) => {
            if (item.product && typeof item.product === 'object') {
              return item;
            }
            const populatedItem = item.toObject();
            populatedItem.product = await Product.findById(item.product);
            return populatedItem;
          })
        );
      }
      return [];
    }
  }
};

module.exports = resolvers;
