import { json, type ActionFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import { logger } from "../utils/logger";

interface AddToCartRequest {
  productId: string;
  variantId: string;
  quantity: number;
  width: number;
  height: number;
  material: string;
  price: number;
}

interface AddToCartResponse {
  success: boolean;
  cartId?: string;
  message?: string;
  error?: string;
}

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const { admin } = await authenticate.admin(request);
    
    if (request.method !== "POST") {
      return json({ success: false, error: "Method not allowed" }, { status: 405 });
    }

    const body: AddToCartRequest = await request.json();
    const { productId, variantId, quantity, width, height, material, price } = body;

    // Check if all required data is provided
    if (!productId || !variantId || !quantity) {
      return json<AddToCartResponse>({
        success: false,
        error: "Product ID, variant ID and quantity are required",
      }, { status: 400 });
    }

    // First make the temporary product active (so it can be added to cart)
    await admin.rest.put({
      path: `products/${productId}`,
      data: {
        product: {
          id: productId,
          status: "active", // Can be added to cart
          published_at: null, // Not visible in store
        }
      }
    });

    // Add to cart (using Shopify's cart line items API)
    const cart = await admin.rest.post({
      path: "carts",
      data: {
        cart: {
          line_items: [{
            product_id: parseInt(productId),
            variant_id: parseInt(variantId),
            quantity: quantity,
            properties: {
              "Width": `${width} cm`,
              "Height": `${height} cm`,
              "Material": material,
              "Custom Order": "Yes"
            }
          }]
        }
      }
    });

    const cartData = await cart.json();

    if (!cartData?.cart) {
      throw new Error("Failed to add to cart");
    }

    // Log record
    logger.info(`Product added to cart: ${productId}, ${width}x${height} ${material}`, {
      productId,
      variantId,
      quantity,
      width,
      height,
      material,
      price,
      cartId: cartData.cart.id
    }, "api.add-to-cart");

    return json<AddToCartResponse>({
      success: true,
      cartId: cartData.cart.id.toString(),
      message: "Ürün başarıyla sepete eklendi",
    });

  } catch (error) {
    logger.error("Sepete ekleme hatası", { error }, "api.add-to-cart");
    
    return json<AddToCartResponse>({
      success: false,
      error: "Ürün sepete eklenirken bir hata oluştu",
    }, { status: 500 });
  }
};
