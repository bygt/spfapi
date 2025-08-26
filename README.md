# SPF API - E-ticaret Backend

Modern e-ticaret uygulaması için Node.js, GraphQL ve MongoDB kullanarak geliştirilmiş backend API.

## 🚀 Özellikler

- **GraphQL API** - Apollo Server ile modern API tasarımı
- **MongoDB** - Mongoose ODM ile veritabanı yönetimi
- **JWT Authentication** - Güvenli kullanıcı kimlik doğrulama
- **Role-based Access Control** - Kullanıcı rolleri ve yetkilendirme
- **Comprehensive Models** - User, Product, Category, Order modelleri
- **Security Features** - Helmet, CORS, Rate Limiting
- **Scalable Architecture** - Modüler ve genişletilebilir yapı

## 🛠️ Teknolojiler

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Apollo Server** - GraphQL server
- **MongoDB** - NoSQL veritabanı
- **Mongoose** - MongoDB ODM
- **JWT** - JSON Web Tokens
- **bcryptjs** - Password hashing
- **GraphQL** - Query language

## 📁 Proje Yapısı

```
spfapi/
├── src/
│   ├── config/
│   │   └── database.js          # MongoDB bağlantı konfigürasyonu
│   ├── models/
│   │   ├── User.js              # Kullanıcı modeli
│   │   ├── Product.js           # Ürün modeli
│   │   ├── Category.js          # Kategori modeli
│   │   └── Order.js             # Sipariş modeli
│   ├── graphql/
│   │   ├── schema.js            # GraphQL şeması
│   │   └── resolvers.js         # GraphQL resolver'ları
│   └── server.js                # Ana server dosyası
├── package.json                  # Proje bağımlılıkları
└── README.md                     # Proje dokümantasyonu
```

## 🚀 Kurulum

### Gereksinimler

- Node.js (v18 veya üzeri)
- MongoDB (local veya cloud)
- npm veya yarn

### 1. Projeyi klonlayın

```bash
git clone <repository-url>
cd spfapi
```

### 2. Bağımlılıkları yükleyin

```bash
npm install
```

### 3. Environment değişkenlerini ayarlayın

`.env` dosyası oluşturun:

```env
# Server Configuration
PORT=4000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/spfapi

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d

# Security
BCRYPT_SALT_ROUNDS=12
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### 4. MongoDB'yi başlatın

Local MongoDB:
```bash
mongod
```

Veya MongoDB Atlas kullanın.

### 5. Uygulamayı başlatın

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## 📚 API Kullanımı

### GraphQL Endpoint

```
http://localhost:4000/graphql
```

### Health Check

```
GET http://localhost:4000/health
```

## 🔐 Authentication

API'yi kullanmak için JWT token gereklidir. Header'da şu şekilde gönderin:

```
Authorization: Bearer <your-jwt-token>
```

### Kullanıcı Kaydı

```graphql
mutation {
  register(input: {
    email: "user@example.com"
    password: "password123"
    firstName: "John"
    lastName: "Doe"
    phone: "+905551234567"
  }) {
    token
    user {
      _id
      email
      firstName
      lastName
    }
  }
}
```

### Giriş

```graphql
mutation {
  login(email: "user@example.com", password: "password123") {
    token
    user {
      _id
      email
      firstName
      lastName
    }
  }
}
```

## 🛍️ E-ticaret İşlemleri

### Ürün Listesi

```graphql
query {
  products(
    category: "category-id"
    status: active
    featured: true
    limit: 20
    offset: 0
  ) {
    products {
      _id
      name
      price
      description
      images {
        url
        alt
      }
      category {
        name
        slug
      }
    }
    totalCount
    hasNextPage
    hasPreviousPage
  }
}
```

### Kategori Ağacı

```graphql
query {
  categoryTree {
    _id
    name
    slug
    children {
      _id
      name
      slug
      children {
        _id
        name
        slug
      }
    }
  }
}
```

### Sipariş Oluşturma

```graphql
mutation {
  createOrder(input: {
    user: "user-id"
    items: [{
      product: "product-id"
      quantity: 2
      price: 99.99
    }]
    billingAddress: {
      type: home
      street: "123 Main St"
      city: "Istanbul"
      state: "Istanbul"
      postalCode: "34000"
      country: "Turkey"
      isDefault: true
    }
    shippingAddress: {
      type: home
      street: "123 Main St"
      city: "Istanbul"
      state: "Istanbul"
      postalCode: "34000"
      country: "Turkey"
      isDefault: true
    }
    payment: {
      method: credit_card
    }
  }) {
    _id
    orderNumber
    total
    status
    items {
      product {
        name
        price
      }
      quantity
      total
    }
  }
}
```

## 🔧 Geliştirme

### Yeni Model Ekleme

1. `src/models/` klasöründe yeni model dosyası oluşturun
2. `src/graphql/schema.js`'e GraphQL tiplerini ekleyin
3. `src/graphql/resolvers.js`'e resolver'ları ekleyin

### Test

```bash
npm test
```

### Linting

```bash
npm run lint
```

## 🚀 Production Deployment

### Environment Variables

Production için güvenli environment değişkenleri ayarlayın:

```env
NODE_ENV=production
JWT_SECRET=very-long-random-secret-key
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/spfapi
```

### PM2 ile Deployment

```bash
npm install -g pm2
pm2 start src/server.js --name "spfapi"
pm2 save
pm2 startup
```

### Docker ile Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 4000
CMD ["npm", "start"]
```

## 📊 Monitoring ve Logging

### Health Check

Uygulama sağlığını kontrol etmek için:

```
GET /health
```

### Logs

Uygulama logları console'da görüntülenir. Production'da log dosyalarına yönlendirin.

## 🔒 Güvenlik

- **JWT Authentication** - Güvenli token tabanlı kimlik doğrulama
- **Password Hashing** - bcrypt ile şifre hashleme
- **Rate Limiting** - API abuse koruması
- **CORS** - Cross-origin request koruması
- **Helmet** - Security headers
- **Input Validation** - GraphQL input validation

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📝 License

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

Proje hakkında sorularınız için issue açın veya iletişime geçin.

## 🎯 Roadmap

- [ ] File upload sistemi
- [ ] Email notifications
- [ ] Payment gateway entegrasyonu
- [ ] Real-time notifications (WebSocket)
- [ ] Admin dashboard
- [ ] Analytics ve reporting
- [ ] Multi-language support
- [ ] Mobile app API endpoints