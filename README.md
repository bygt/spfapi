# Dinamik Fiyat Hesaplayıcı - Shopify App

Bu proje, Shopify mağazalarında ürün sayfalarındaki klasik varyant seçiciyi kaldırıp, kullanıcıdan boy, en ve materyal bilgilerini alarak dinamik fiyat hesaplayan ve geçici ürünler oluşturan bir Remix uygulamasıdır.

## 🚀 Özellikler

- **Dinamik Fiyat Hesaplama**: Boy, en ve materyal seçimine göre otomatik fiyat hesaplama
- **Geçici Ürün Oluşturma**: Seçimlere göre otomatik ürün varyantı oluşturma
- **Otomatik Temizlik**: 2 saat sonra geçici ürünleri otomatik silme
- **Tema Entegrasyonu**: Shopify temalarına kolay entegrasyon
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu arayüz
- **Gerçek Zamanlı Hesaplama**: Anlık fiyat güncellemeleri

## 🛠️ Teknolojiler

- **Frontend**: React, Remix, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Node.js, Remix
- **Shopify API**: Shopify Admin API, Product API
- **Database**: In-memory storage (production için veritabanı entegrasyonu mevcut)

## 📋 Gereksinimler

- Node.js 18.0.0 veya üzeri
- npm veya yarn
- Shopify Partner hesabı
- Shopify Development Store

## 🚀 Kurulum

### 1. Projeyi Klonlayın

```bash
git clone <repository-url>
cd spfapi
```

### 2. Bağımlılıkları Yükleyin

```bash
npm install
```

### 3. Ortam Değişkenlerini Ayarlayın

```bash
cp env.example .env
```

`.env` dosyasını düzenleyerek Shopify API bilgilerinizi ekleyin:

```env
SHOPIFY_API_KEY=your_api_key_here
SHOPIFY_API_SECRET=your_api_secret_here
SHOPIFY_APP_URL=https://your-app-domain.com
```

### 4. Shopify Partner Hesabında Uygulama Oluşturun

1. [Shopify Partners](https://partners.shopify.com) hesabınıza giriş yapın
2. "Apps" > "Create app" seçin
3. App name: "Dinamik Fiyat Hesaplayıcı"
4. App URL: Uygulamanızın domain'i
5. Allowed redirection URLs ekleyin

### 5. Uygulamayı Çalıştırın

```bash
npm run dev
```

## 🔧 Konfigürasyon

### Shopify App Ayarları

`shopify.app.toml` dosyasını düzenleyin:

```toml
name = "Dinamik Fiyat Hesaplayıcı"
client_id = "your_client_id_here"
application_url = "https://your-app-domain.com"
embedded = true

[access_scopes]
scopes = "read_products,write_products,read_themes,write_themes,read_orders,write_orders"
```

### Fiyat Hesaplama Katsayıları

`app/routes/api.pricing.ts` dosyasında fiyat hesaplama mantığını özelleştirebilirsiniz:

```typescript
const PRICING_DATA = {
  dimensions: {
    "100-200": { min: 0, max: 20000, coefficient: 1.0, label: "100-200 cm²" },
    "201-400": { min: 20001, max: 80000, coefficient: 1.5, label: "201-400 cm²" },
    // ... diğer boyut aralıkları
  },
  materials: {
    "ahşap": 50,
    "cam": 80,
    "metal": 120,
    // ... diğer materyaller
  },
};
```

## 🎨 Tema Entegrasyonu

### 1. App Block Ekleme

1. Shopify Admin > Online Store > Themes
2. "Customize" butonuna tıklayın
3. Product template'i seçin
4. "Add block" > "Apps" > "Dinamik Fiyat Hesaplayıcı"
5. Bloğu istediğiniz konuma sürükleyin

### 2. Mevcut Varyant Seçiciyi Gizleme

CSS ile mevcut varyant seçiciyi gizleyin:

```css
.product-form__variants,
.product-form__input,
.product-form__buttons {
  display: none !important;
}
```

### 3. App Block Özelleştirme

`app/blocks/product-form.liquid` dosyasını düzenleyerek görünümü özelleştirebilirsiniz.

## 📊 API Endpoints

### Fiyat Hesaplama

```http
POST /api/pricing
Content-Type: application/json

{
  "width": 400,
  "height": 500,
  "material": "ahşap"
}
```

### Ürün Oluşturma

```http
POST /api/create-product
Content-Type: application/json

{
  "width": 400,
  "height": 500,
  "material": "ahşap",
  "price": 150
}
```

### Temizlik

```http
POST /api/cleanup
```

## 🔄 Otomatik Temizlik Sistemi

Uygulama, 2 saat sonra geçici ürünleri otomatik olarak siler:

- **Zamanlayıcı**: Her 5 dakikada bir çalışır
- **Filtreleme**: `geçici` etiketi ve `expires_at` metafield'ına göre
- **Güvenlik**: Siparişe girmiş ürünler de silinir (sipariş kaydı korunur)

## 📱 Kullanım

### 1. Ürün Sayfasında

1. Kullanıcı boy, en ve materyal seçer
2. Fiyat otomatik hesaplanır
3. "Sepete Ekle" butonuna tıklar
4. Geçici ürün oluşturulur ve sepete eklenir

### 2. Admin Paneli

- Uygulama ana sayfası: `/app`
- Geçici ürün listesi: `/api/cleanup` (GET)
- Manuel temizlik: `/api/cleanup` (POST)

## 🚨 Hata Yönetimi

- **Validasyon**: Boyut ve materyal kontrolü
- **API Hataları**: Shopify API hatalarını yakalama
- **Kullanıcı Geri Bildirimi**: Net hata mesajları
- **Loglama**: Detaylı log kayıtları

## 🔒 Güvenlik

- **Shopify Authentication**: OAuth 2.0 ile güvenli erişim
- **API Key Protection**: Environment variables ile koruma
- **Input Validation**: Kullanıcı girdisi validasyonu
- **Rate Limiting**: API çağrı limitleri

## 📈 Performans

- **Lazy Loading**: Gereksiz veri yüklemeyi önleme
- **Caching**: Fiyat hesaplama sonuçlarını önbellekleme
- **Optimized Queries**: Shopify API çağrılarını optimize etme
- **Background Processing**: Temizlik işlemlerini arka planda yapma

## 🧪 Test

### Manuel Test

1. Uygulamayı development store'a kurun
2. Ürün sayfasında form'u test edin
3. Farklı boyut ve materyal kombinasyonları deneyin
4. Sepete ekleme işlemini test edin
5. 2 saat sonra otomatik silme işlemini kontrol edin

### API Test

```bash
# Fiyat hesaplama testi
curl -X POST http://localhost:3000/api/pricing \
  -H "Content-Type: application/json" \
  -d '{"width": 400, "height": 500, "material": "ahşap"}'

# Temizlik testi
curl -X POST http://localhost:3000/api/cleanup
```

## 🚀 Production Deployment

### 1. Hosting

- **Vercel**: Remix uygulamaları için önerilen
- **Netlify**: Kolay deployment
- **AWS/GCP**: Özel sunucu çözümleri

### 2. Environment Variables

Production ortamında gerekli değişkenleri ayarlayın:

```env
NODE_ENV=production
SHOPIFY_API_KEY=your_production_api_key
SHOPIFY_API_SECRET=your_production_api_secret
SHOPIFY_APP_URL=https://your-production-domain.com
```

### 3. Database

Production için veritabanı entegrasyonu:

```typescript
// PostgreSQL, MySQL veya MongoDB entegrasyonu
import { Pool } from 'pg';
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
```

## 📝 Log ve İzleme

### Log Seviyeleri

- **INFO**: Normal işlemler
- **WARN**: Uyarılar
- **ERROR**: Hatalar
- **DEBUG**: Geliştirme bilgileri

### Metrikler

- Geçici ürün oluşturma sayısı
- Silinen ürün sayısı
- API response time
- Hata oranları

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🆘 Destek

- **Dokümantasyon**: Bu README dosyası
- **Issues**: GitHub Issues
- **Shopify Docs**: [Shopify App Development](https://shopify.dev/apps)

## 🔄 Güncellemeler

### v1.0.0
- İlk sürüm
- Temel dinamik fiyat hesaplama
- Geçici ürün oluşturma
- Otomatik temizlik sistemi

### Gelecek Özellikler
- Çoklu dil desteği
- Gelişmiş fiyat algoritmaları
- Bulk ürün oluşturma
- Analytics dashboard
- Email bildirimleri

---

**Not**: Bu uygulama Shopify Partner programı kapsamında geliştirilmiştir. Kullanım öncesi Shopify'ın güncel API dokümantasyonunu kontrol ediniz.