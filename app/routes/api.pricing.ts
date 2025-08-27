import { json, type ActionFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";

interface PricingRequest {
  width: number;
  height: number;
  material: string;
  productId?: string;
}

interface PricingResponse {
  success: boolean;
  price: number;
  breakdown: {
    basePrice: number;
    materialPrice: number;
    dimensionCoefficient: number;
    area: number;
    dimensionRange: string;
  };
  error?: string;
}

// Fiyat hesaplama katsayıları
const PRICING_DATA = {
  dimensions: {
    "100-200": { min: 0, max: 20000, coefficient: 1.0, label: "100-200 cm²" },
    "201-400": { min: 20001, max: 80000, coefficient: 1.5, label: "201-400 cm²" },
    "401-600": { min: 80001, max: 240000, coefficient: 2.0, label: "401-600 cm²" },
    "601-800": { min: 240001, max: 480000, coefficient: 2.5, label: "601-800 cm²" },
    "801+": { min: 480001, max: Infinity, coefficient: 3.0, label: "801+ cm²" },
  },
  materials: {
    "ahşap": 50,
    "cam": 80,
    "metal": 120,
    "plastik": 30,
    "mdf": 40,
    "sunta": 25,
  },
};

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const { admin } = await authenticate.admin(request);
    
    if (request.method !== "POST") {
      return json({ success: false, error: "Method not allowed" }, { status: 405 });
    }

    const body: PricingRequest = await request.json();
    const { width, height, material } = body;

    // Validasyon
    if (!width || !height || !material) {
      return json<PricingResponse>({
        success: false,
        price: 0,
        breakdown: {
          basePrice: 0,
          materialPrice: 0,
          dimensionCoefficient: 0,
          area: 0,
          dimensionRange: "",
        },
        error: "Genişlik, yükseklik ve materyal bilgileri gereklidir",
      }, { status: 400 });
    }

    if (width <= 0 || height <= 0 || width > 1000 || height > 1000) {
      return json<PricingResponse>({
        success: false,
        price: 0,
        breakdown: {
          basePrice: 0,
          materialPrice: 0,
          dimensionCoefficient: 0,
          area: 0,
          dimensionRange: "",
        },
        error: "Geçersiz boyut değerleri. Boyutlar 1-1000 cm arasında olmalıdır",
      }, { status: 400 });
    }

    // Fiyat hesaplama
    const area = width * height;
    const basePrice = 25; // Temel fiyat
    
    // Materyal fiyatı
    const materialPrice = PRICING_DATA.materials[material.toLowerCase()] || 0;
    
    // Boyut katsayısı
    let dimensionCoefficient = 1.0;
    let dimensionRange = "";
    
    for (const [key, data] of Object.entries(PRICING_DATA.dimensions)) {
      if (area >= data.min && area <= data.max) {
        dimensionCoefficient = data.coefficient;
        dimensionRange = data.label;
        break;
      }
    }

    // Toplam fiyat hesaplama
    const totalPrice = Math.round((basePrice + materialPrice) * dimensionCoefficient);

    const response: PricingResponse = {
      success: true,
      price: totalPrice,
      breakdown: {
        basePrice,
        materialPrice,
        dimensionCoefficient,
        area,
        dimensionRange,
      },
    };

    // Log kaydı
    console.log(`Fiyat hesaplandı: ${width}x${height} ${material} = ${totalPrice}TL`);

    return json(response);

  } catch (error) {
    console.error("Fiyat hesaplama hatası:", error);
    
    return json<PricingResponse>({
      success: false,
      price: 0,
      breakdown: {
        basePrice: 0,
        materialPrice: 0,
        dimensionCoefficient: 0,
        area: 0,
        dimensionRange: "",
      },
      error: "Fiyat hesaplanırken bir hata oluştu",
    }, { status: 500 });
  }
};
