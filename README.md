# 🖼️ Dynamic Price Calculator - Shopify App

A Shopify app that creates custom-sized frames with dynamic pricing based on dimensions and materials. The app automatically creates temporary products, adds them to cart, and cleans them up after 2 hours.

## ✨ Features

- **Dynamic Pricing**: Calculate prices based on frame dimensions and materials
- **Temporary Products**: Automatically create and manage temporary products
- **Cart Integration**: Seamlessly add custom products to Shopify cart
- **Auto Cleanup**: Automatic removal of expired temporary products
- **Logging System**: Comprehensive logging and monitoring
- **Error Handling**: Advanced error management with retry logic
- **Scheduler**: Automated cleanup system

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Shopify Partner account
- Shopify store (development or production)

### 1. Local Development Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd spfapi

# Install dependencies
npm install

# Copy environment file
cp env.example .env
```

### 2. Environment Configuration

Edit `.env` file with your Shopify app credentials:

```env
# Shopify App Configuration
SHOPIFY_API_KEY=your_api_key_here
SHOPIFY_API_SECRET=your_api_secret_here
SHOPIFY_APP_URL=http://localhost:3000
SHOPIFY_SCOPES=write_products,write_orders,read_products,read_orders

# Optional: Scheduler API Key (for automated cleanup)
SCHEDULER_API_KEY=your_scheduler_key_here

# Database (if using external database)
DATABASE_URL=your_database_url_here
```

### 3. Shopify App Setup

#### Step 1: Create Shopify Partner Account
1. Go to [Shopify Partners](https://partners.shopify.com)
2. Sign up for a free account
3. Navigate to "Apps" → "Create app"

#### Step 2: Configure App Settings
1. **App name**: "Dynamic Price Calculator"
2. **App URL**: `http://localhost:3000`
3. **Allowed redirection URLs**: 
   - `http://localhost:3000/auth/callback`
   - `http://localhost:3000/auth/shopify/callback`

#### Step 3: Configure App Scopes
Enable these permissions:
- `write_products` - Create temporary products
- `write_orders` - Manage cart and orders
- `read_products` - Read existing products
- `read_orders` - Read order information

#### Step 4: Install App on Store
1. Go to "Test your app"
2. Select your development store
3. Install the app
4. Copy the API credentials to your `.env` file

### 4. Run the Application

```bash
# Start development server
npm run dev

# The app will be available at: http://localhost:3000
```

### 5. Theme Integration

#### Step 1: Access Theme Editor
1. In your Shopify admin, go to **Online Store** → **Themes**
2. Click **Customize** on your active theme

#### Step 2: Add App Block
1. Navigate to a product template
2. Click **Add section** → **Apps**
3. Select "Dynamic Price Calculator"
4. Configure the app block settings

#### Step 3: Hide Default Variant Selector
1. In the theme editor, find the product variant selector
2. Click on it and select **Hide**
3. This prevents conflicts with the custom app interface

### 6. Testing the App

#### Test Product Creation
1. Go to any product page with the app block
2. Enter dimensions (width × height)
3. Select material
4. Click "Calculate Price"
5. Verify the price calculation

#### Test Cart Integration
1. After price calculation, click "Add to Cart"
2. Check if the temporary product appears in cart
3. Verify custom properties (dimensions, material)

#### Test Auto Cleanup
1. Create a temporary product
2. Wait for 2 hours (or manually trigger cleanup)
3. Check if the product is automatically removed

## 🛠️ API Endpoints

### Core APIs
- `POST /api/create-product` - Create temporary product
- `POST /api/add-to-cart` - Add product to cart
- `GET /api/pricing` - Calculate product price
- `GET /api/cleanup` - Manual cleanup trigger

### Management APIs
- `GET /app/logs` - View system logs
- `GET /api/scheduler` - Check scheduler status
- `POST /api/scheduler` - Trigger cleanup (with API key)
- `POST /api/error-handler` - Handle errors

## 📁 Project Structure

```
spfapi/
├── app/
│   ├── routes/
│   │   ├── api.create-product.ts    # Product creation
│   │   ├── api.add-to-cart.ts       # Cart integration
│   │   ├── api.pricing.ts           # Price calculation
│   │   ├── api.cleanup.ts           # Manual cleanup
│   │   ├── api.scheduler.ts         # Auto cleanup
│   │   ├── api.error-handler.ts     # Error management
│   │   ├── app._index.tsx           # Main dashboard
│   │   └── app.logs.tsx             # Log viewer
│   ├── utils/
│   │   └── logger.ts                # Logging system
│   └── shopify.server.ts            # Shopify configuration
├── public/                           # Static assets
├── .env.example                     # Environment template
├── package.json                     # Dependencies
└── README.md                        # This file
```

## 🔧 Configuration Options

### Pricing Configuration
Edit `app/routes/api.pricing.ts` to modify:
- Base prices for different materials
- Price multipliers for dimensions
- Additional cost factors

### Cleanup Settings
Edit `app/routes/api.scheduler.ts` to adjust:
- Cleanup frequency (default: 5 minutes)
- Product expiration time (default: 2 hours)
- Maximum products per cleanup batch

### Logging Configuration
Edit `app/utils/logger.ts` to customize:
- Log retention period
- Log file size limits
- Error notification settings

## 📊 Monitoring & Maintenance

### Log Management
- Access logs at `/app/logs`
- Export logs for analysis
- Set up log rotation

### Performance Monitoring
- Monitor API response times
- Track temporary product creation rates
- Monitor cleanup job performance

### Regular Maintenance
- Review and clean old log files
- Monitor disk space usage
- Update dependencies regularly
  
## 🚀 Deployment

### Production Environment
1. Set up production server (Vercel, Netlify, or custom)
2. Update `SHOPIFY_APP_URL` to production URL
3. Configure production environment variables
4. Set up SSL certificates
5. Configure domain and DNS

### CI/CD Pipeline
1. Set up automated testing
2. Configure deployment triggers
3. Set up environment-specific configurations
4. Implement rollback procedures

## 📚 Additional Resources

- [Shopify App Development](https://shopify.dev/apps)
- [Remix Framework Documentation](https://remix.run/docs)
- [Shopify Admin API](https://shopify.dev/api/admin)
- [Shopify Theme Development](https://shopify.dev/themes)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 🆘 Support

For support and questions:
- Create an issue in the repository

---

**Happy coding! 🎉**
