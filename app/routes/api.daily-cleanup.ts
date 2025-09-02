import { json, type ActionFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import { logger } from "../utils/logger";

interface DailyCleanupResponse {
  success: boolean;
  deletedCount: number;
  totalScanned: number;
  message: string;
  error?: string;
}

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const { admin } = await authenticate.admin(request);
    
    if (request.method !== "POST") {
      return json({ success: false, error: "Method not allowed" }, { status: 405 });
    }

    // Check API key for security
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.DAILY_CLEANUP_API_KEY || "daily-cleanup-key"}`) {
      return json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    // Get ALL temporary products (regardless of age)
    const products = await admin.rest.get({
      path: "products",
      query: {
        limit: "250",
        status: "any",
        tag: "geçici"
      }
    });

    const productsData = await products.json();
    let deletedCount = 0;
    let totalScanned = productsData.products.length;
    const productsToDelete: string[] = [];

    // Find all temporary products (even if they should have been deleted earlier)
    for (const product of productsData.products) {
      const isTemporaryMetafield = product.metafields?.find(
        (meta: any) => meta.key === "is_temporary"
      );
      
      if (isTemporaryMetafield?.value === "true") {
        productsToDelete.push(product.id.toString());
      }
    }

    // Delete all temporary products found
    for (const productId of productsToDelete) {
      try {
        // Check if product is in any orders (for logging purposes)
        const orders = await admin.rest.get({
          path: "orders",
          query: {
            limit: "250",
            status: "any",
            fields: "id,line_items"
          }
        });

        const ordersData = await orders.json();
        let isInOrder = false;
        let orderIds: string[] = [];

        for (const order of ordersData.orders) {
          const hasProduct = order.line_items?.some((item: any) => 
            item.product_id?.toString() === productId
          );
          if (hasProduct) {
            isInOrder = true;
            orderIds.push(order.id.toString());
          }
        }

        // Delete the product
        await admin.rest.delete({
          path: `products/${productId}`
        });
        deletedCount++;
        
        if (isInOrder) {
          logger.info(`Daily cleanup: Product in orders deleted: ${productId}`, { 
            productId, 
            orderIds,
            note: "Order records not affected"
          }, "api.daily-cleanup");
        } else {
          logger.info(`Daily cleanup: Product deleted: ${productId}`, { productId }, "api.daily-cleanup");
        }
      } catch (deleteError) {
        logger.error(`Daily cleanup error deleting product: ${productId}`, { 
          productId, 
          error: deleteError 
        }, "api.daily-cleanup");
      }
    }

    // Log daily cleanup completion
    logger.info(`Daily cleanup completed: ${deletedCount}/${totalScanned} products deleted`, { 
      deletedCount, 
      totalScanned,
      timestamp: new Date().toISOString()
    }, "api.daily-cleanup");

    return json<DailyCleanupResponse>({
      success: true,
      deletedCount,
      totalScanned,
      message: `Günlük temizlik tamamlandı: ${deletedCount}/${totalScanned} geçici ürün silindi`,
    });

  } catch (error) {
    logger.error("Günlük temizlik hatası", { error }, "api.daily-cleanup");
    
    return json<DailyCleanupResponse>({
      success: false,
      deletedCount: 0,
      totalScanned: 0,
      message: "Günlük temizlik sırasında hata oluştu",
      error: error instanceof Error ? error.message : "Bilinmeyen hata",
    }, { status: 500 });
  }
};

// GET endpoint for daily cleanup status
export const loader = async ({ request }: ActionFunctionArgs) => {
  try {
    const { admin } = await authenticate.admin(request);
    
    // Get all temporary products
    const products = await admin.rest.get({
      path: "products",
      query: {
        limit: "250",
        status: "any",
        tag: "geçici"
      }
    });

    const productsData = await products.json();
    const temporaryProducts = productsData.products.filter((product: any) => {
      const isTemporaryMetafield = product.metafields?.find(
        (meta: any) => meta.key === "is_temporary"
      );
      return isTemporaryMetafield?.value === "true";
    });

    // Count expired products (older than 2 hours)
    const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000);
    const expiredCount = temporaryProducts.filter((product: any) => {
      const expiresAtMetafield = product.metafields?.find(
        (meta: any) => meta.key === "expires_at"
      );
      if (expiresAtMetafield?.value) {
        const expiresAt = new Date(expiresAtMetafield.value);
        return expiresAt < twoHoursAgo;
      }
      return false;
    }).length;

    // Count very old products (older than 24 hours)
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const veryOldCount = temporaryProducts.filter((product: any) => {
      const createdAtMetafield = product.metafields?.find(
        (meta: any) => meta.key === "created_at"
      );
      if (createdAtMetafield?.value) {
        const createdAt = new Date(createdAtMetafield.value);
        return createdAt < twentyFourHoursAgo;
      }
      return false;
    }).length;

    return json({
      success: true,
      totalTemporaryProducts: temporaryProducts.length,
      expiredProducts: expiredCount,
      veryOldProducts: veryOldCount,
      lastDailyCleanup: new Date().toISOString(),
      nextRecommendedCleanup: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    });

  } catch (error) {
    logger.error("Günlük temizlik durum hatası", { error }, "api.daily-cleanup");
    
    return json({
      success: false,
      error: "Günlük temizlik durumu alınırken hata oluştu",
    }, { status: 500 });
  }
};
