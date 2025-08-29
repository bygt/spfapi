import { json, type ActionFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import { logger } from "../utils/logger";

interface CreateProductRequest {
  width: number;
  height: number;
  material: string;
  price: number;
  baseProductId?: string;
  customerEmail?: string;
}

interface CreateProductResponse {
  success: boolean;
  productId?: string;
  variantId?: string;
  message?: string;
  error?: string;
}

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const { admin } = await authenticate.admin(request);
    
    if (request.method !== "POST") {
      return json({ success: false, error: "Method not allowed" }, { status: 405 });
    }

    const body: CreateProductRequest = await request.json();
    const { width, height, material, price, baseProductId, customerEmail } = body;

    // Validation
    if (!width || !height || !material || !price) {
      return json<CreateProductResponse>({
        success: false,
        error: "Gerekli bilgiler eksik",
      }, { status: 400 });
    }

    // Temporary product name
    const productTitle = `Çerçeve ${width}×${height} - ${material.charAt(0).toUpperCase() + material.slice(1)}`;
    
    // Create temporary product
    const product = await admin.rest.post({
      path: "products",
      data: {
        product: {
          title: productTitle,
          body_html: `<p>Özel boyutlu çerçeve: ${width}×${height} cm, ${material} materyal</p>`,
          vendor: "Özel Sipariş",
          product_type: "Çerçeve",
          tags: ["geçici", "özel-boyut", "dinamik-fiyat"],
          status: "draft", // Not visible in the store
          variants: [
            {
              price: price.toString(),
              inventory_quantity: 1,
              inventory_management: "shopify",
              option1: `${width}×${height}`,
              option2: material,
              option3: "Özel Boyut",
            },
          ],
          options: [
            { name: "Boyut" },
            { name: "Materyal" },
            { name: "Tip" },
          ],
          metafields: [
            {
              namespace: "custom",
              key: "width",
              value: width.toString(),
              type: "number_integer",
            },
            {
              namespace: "custom",
              key: "height",
              value: height.toString(),
              type: "number_integer",
            },
            {
              namespace: "custom",
              key: "material",
              value: material,
              type: "single_line_text_field",
            },
            {
              namespace: "custom",
              key: "is_temporary",
              value: "true",
              type: "boolean",
            },
            {
              namespace: "custom",
              key: "created_at",
              value: new Date().toISOString(),
              type: "date_time",
            },
            {
              namespace: "custom",
              key: "expires_at",
              value: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // 2 saat sonra
              type: "date_time",
            },
            {
              namespace: "custom",
              key: "customer_email",
              value: customerEmail || "",
              type: "single_line_text_field",
            },
          ],
        }
      }
    });

    const productData = await product.json();
    if (!productData?.product) {
      throw new Error("Ürün oluşturulamadı");
    }

    const createdProduct = productData.product;
    const variantId = createdProduct.variants?.[0]?.id;

    // Log kaydı
    logger.info(`Geçici ürün oluşturuldu: ${createdProduct.id}, ${productTitle}, ${price}TL`, {
      productId: createdProduct.id,
      productTitle,
      price,
      width,
      height,
      material,
      customerEmail
    }, "api.create-product");

    // Geçici ürün kaydını veritabanına ekle (gerçek uygulamada)
    // await addTemporaryProductRecord({
    //   productId: createdProduct.id,
    //   variantId,
    //   width,
    //   height,
    //   material,
    //   price,
    //   expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000),
    //   customerEmail,
    // });

    return json<CreateProductResponse>({
      success: true,
      productId: createdProduct.id.toString(),
      variantId: variantId?.toString(),
      message: "Geçici ürün başarıyla oluşturuldu",
    });

  } catch (error) {
    logger.error("Ürün oluşturma hatası", { error }, "api.create-product");
    
    return json<CreateProductResponse>({
      success: false,
      error: "Ürün oluşturulurken bir hata oluştu",
    }, { status: 500 });
  }
};
