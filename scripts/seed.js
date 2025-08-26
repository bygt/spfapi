const mongoose = require('mongoose');
const User = require('../src/models/User');
const Category = require('../src/models/Category');
const Product = require('../src/models/Product');
require('dotenv').config();

// MongoDB bağlantısı
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/spfapi');
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
};

// Sample data
const sampleCategories = [
  {
    name: 'Elektronik',
    description: 'Elektronik ürünler',
    slug: 'elektronik',
    isActive: true,
    featured: true,
    sortOrder: 1
  },
  {
    name: 'Giyim',
    description: 'Giyim ürünleri',
    slug: 'giyim',
    isActive: true,
    featured: true,
    sortOrder: 2
  },
  {
    name: 'Ev & Yaşam',
    description: 'Ev ve yaşam ürünleri',
    slug: 'ev-yasam',
    isActive: true,
    featured: false,
    sortOrder: 3
  },
  {
    name: 'Spor',
    description: 'Spor ürünleri',
    slug: 'spor',
    isActive: true,
    featured: false,
    sortOrder: 4
  }
];

const sampleProducts = [
  {
    name: 'iPhone 15 Pro',
    description: 'Apple iPhone 15 Pro 128GB Titanium',
    shortDescription: 'En yeni iPhone modeli',
    sku: 'IPHONE15PRO128',
    price: 89999.99,
    compareAtPrice: 99999.99,
    costPrice: 75000.00,
    currency: 'TRY',
    brand: 'Apple',
    tags: ['telefon', 'akıllı telefon', 'iphone', 'apple'],
    images: [
      {
        url: 'https://example.com/iphone15pro1.jpg',
        alt: 'iPhone 15 Pro Ön',
        isPrimary: true
      },
      {
        url: 'https://example.com/iphone15pro2.jpg',
        alt: 'iPhone 15 Pro Arka',
        isPrimary: false
      }
    ],
    variants: [
      {
        name: 'Renk',
        value: 'Titanium',
        priceModifier: 0
      },
      {
        name: 'Renk',
        value: 'Natural Titanium',
        priceModifier: 0
      }
    ],
    inventory: {
      quantity: 50,
      lowStockThreshold: 10,
      trackQuantity: true,
      allowBackorder: false
    },
    shipping: {
      weight: 0.187,
      weightUnit: 'kg',
      dimensions: {
        length: 14.6,
        width: 7.1,
        height: 0.8,
        unit: 'cm'
      },
      freeShipping: true
    },
    seo: {
      metaTitle: 'iPhone 15 Pro - En Yeni iPhone Modeli',
      metaDescription: 'Apple iPhone 15 Pro 128GB Titanium, en yeni özellikler ve teknoloji',
      slug: 'iphone-15-pro-128gb-titanium'
    },
    status: 'active',
    featured: true
  },
  {
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Samsung Galaxy S24 Ultra 256GB Titanium Black',
    shortDescription: 'Samsung\'ın en güçlü telefonu',
    sku: 'SAMSUNGS24ULTRA256',
    price: 79999.99,
    compareAtPrice: 89999.99,
    costPrice: 65000.00,
    currency: 'TRY',
    brand: 'Samsung',
    tags: ['telefon', 'akıllı telefon', 'samsung', 'galaxy'],
    images: [
      {
        url: 'https://example.com/s24ultra1.jpg',
        alt: 'Samsung S24 Ultra Ön',
        isPrimary: true
      }
    ],
    variants: [
      {
        name: 'Renk',
        value: 'Titanium Black',
        priceModifier: 0
      }
    ],
    inventory: {
      quantity: 30,
      lowStockThreshold: 5,
      trackQuantity: true,
      allowBackorder: false
    },
    shipping: {
      weight: 0.232,
      weightUnit: 'kg',
      dimensions: {
        length: 16.3,
        width: 7.9,
        height: 0.9,
        unit: 'cm'
      },
      freeShipping: true
    },
    seo: {
      metaTitle: 'Samsung Galaxy S24 Ultra - En Güçlü Samsung',
      metaDescription: 'Samsung Galaxy S24 Ultra 256GB, en gelişmiş özellikler',
      slug: 'samsung-galaxy-s24-ultra-256gb'
    },
    status: 'active',
    featured: true
  },
  {
    name: 'Nike Air Max 270',
    description: 'Nike Air Max 270 Erkek Spor Ayakkabı',
    shortDescription: 'Rahat ve şık spor ayakkabı',
    sku: 'NIKEAIRMAX270',
    price: 2499.99,
    compareAtPrice: 2999.99,
    costPrice: 1800.00,
    currency: 'TRY',
    brand: 'Nike',
    tags: ['ayakkabı', 'spor', 'nike', 'air max'],
    images: [
      {
        url: 'https://example.com/nike2701.jpg',
        alt: 'Nike Air Max 270 Ön',
        isPrimary: true
      }
    ],
    variants: [
      {
        name: 'Beden',
        value: '42',
        priceModifier: 0
      },
      {
        name: 'Beden',
        value: '43',
        priceModifier: 0
      },
      {
        name: 'Beden',
        value: '44',
        priceModifier: 0
      }
    ],
    inventory: {
      quantity: 100,
      lowStockThreshold: 20,
      trackQuantity: true,
      allowBackorder: false
    },
    shipping: {
      weight: 0.8,
      weightUnit: 'kg',
      dimensions: {
        length: 30,
        width: 20,
        height: 15,
        unit: 'cm'
      },
      freeShipping: false
    },
    seo: {
      metaTitle: 'Nike Air Max 270 - Rahat Spor Ayakkabı',
      metaDescription: 'Nike Air Max 270 erkek spor ayakkabı, rahat ve şık tasarım',
      slug: 'nike-air-max-270-erkek-spor-ayakkabı'
    },
    status: 'active',
    featured: false
  }
];

const sampleUsers = [
  {
    email: 'admin@spfapi.com',
    password: 'admin123',
    firstName: 'Admin',
    lastName: 'User',
    phone: '+905551234567',
    role: 'admin',
    isActive: true,
    emailVerified: true
  },
  {
    email: 'customer@spfapi.com',
    password: 'customer123',
    firstName: 'Customer',
    lastName: 'User',
    phone: '+905551234568',
    role: 'customer',
    isActive: true,
    emailVerified: true
  }
];

// Seed function
const seedDatabase = async () => {
  try {
    console.log('🌱 Starting database seeding...');
    
    // Clear existing data
    await User.deleteMany({});
    await Category.deleteMany({});
    await Product.deleteMany({});
    console.log('🗑️ Cleared existing data');
    
    // Create categories
    const createdCategories = await Category.insertMany(sampleCategories);
    console.log(`✅ Created ${createdCategories.length} categories`);
    
    // Create users
    const createdUsers = await User.insertMany(sampleUsers);
    console.log(`✅ Created ${createdUsers.length} users`);
    
    // Create products with category references
    const electronicsCategory = createdCategories.find(cat => cat.slug === 'elektronik');
    const sporCategory = createdCategories.find(cat => cat.slug === 'spor');
    
    const productsWithCategories = sampleProducts.map(product => {
      if (product.name.includes('iPhone') || product.name.includes('Samsung')) {
        return { ...product, category: electronicsCategory._id };
      } else if (product.name.includes('Nike')) {
        return { ...product, category: sporCategory._id };
      }
      return product;
    });
    
    const createdProducts = await Product.insertMany(productsWithCategories);
    console.log(`✅ Created ${createdProducts.length} products`);
    
    // Update category product counts
    for (const category of createdCategories) {
      await category.updateProductCount();
    }
    
    console.log('🎉 Database seeding completed successfully!');
    console.log('\n📊 Sample Data Summary:');
    console.log(`- Users: ${createdUsers.length}`);
    console.log(`- Categories: ${createdCategories.length}`);
    console.log(`- Products: ${createdProducts.length}`);
    console.log('\n🔑 Admin Login:');
    console.log(`Email: admin@spfapi.com`);
    console.log(`Password: admin123`);
    console.log('\n👤 Customer Login:');
    console.log(`Email: customer@spfapi.com`);
    console.log(`Password: customer123`);
    
  } catch (error) {
    console.error('❌ Seeding failed:', error);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    process.exit(0);
  }
};

// Run seeding
if (require.main === module) {
  connectDB().then(seedDatabase);
}

module.exports = { seedDatabase };
