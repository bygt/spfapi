import { json, type ActionFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import { logger } from "../utils/logger";

interface SchedulerResponse {
  success: boolean;
  deletedCount: number;
  message: string;
  nextRun?: string;
  error?: string;
}

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const { admin } = await authenticate.admin(request);
    
    if (request.method !== "POST") {
      return json({ success: false, error: "Method not allowed" }, { status: 405 });
    }

    // Check API key (for security)
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.SCHEDULER_API_KEY || "default-key"}`) {
      return json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    // Calculate 2 hours ago
    const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000);
    
    // Find temporary products
    const products = await admin.rest.get({
      path: "products",
      query: {
        limit: "250",
        status: "active",
        tag: "temporary"
      }
    });

    const productsData = await products.json();
    let deletedCount = 0;
    const productsToDelete: string[] = [];

    // Filter expired products
    for (const product of productsData.products) {
      const expiresAtMetafield = product.metafields?.find(
        (meta: any) => meta.key === "expires_at"
      );

      if (expiresAtMetafield?.value) {
        const expiresAt = new Date(expiresAtMetafield.value);
        if (expiresAt < twoHoursAgo) {
          productsToDelete.push(product.id.toString());
        }
      }
    }

    // Delete products
    for (const productId of productsToDelete) {
      try {
        await admin.rest.delete({
          path: `products/${productId}`
        });
        deletedCount++;
        logger.info(`Product deleted by scheduler: ${productId}`, { productId }, "api.scheduler");
      } catch (deleteError) {
        logger.error(`Error deleting product: ${productId}`, { productId, error: deleteError }, "api.scheduler");
      }
    }

    // Next run time (5 minutes later)
    const nextRun = new Date(Date.now() + 5 * 60 * 1000);

    // Log record
    logger.info(`Scheduler ran: ${deletedCount} products deleted`, { 
      deletedCount, 
      nextRun: nextRun.toISOString() 
    }, "api.scheduler");

    return json<SchedulerResponse>({
      success: true,
      deletedCount,
      message: `${deletedCount} geçici ürün otomatik olarak silindi`,
      nextRun: nextRun.toISOString(),
    });

  } catch (error) {
    logger.error("Zamanlayıcı hatası", { error }, "api.scheduler");
    
    return json<SchedulerResponse>({
      success: false,
      deletedCount: 0,
      message: "Zamanlayıcı sırasında hata oluştu",
      error: error instanceof Error ? error.message : "Bilinmeyen hata",
    }, { status: 500 });
  }
};

// GET endpoint for manual trigger
export const loader = async ({ request }: ActionFunctionArgs) => {
  try {
    const { admin } = await authenticate.admin(request);
    
    // Get temporary product count
    const products = await admin.rest.get({
      path: "products",
      query: {
        limit: "250",
        status: "active",
        tag: "temporary"
      }
    });

    const productsData = await products.json();
    const temporaryProducts = productsData.products.filter((product: any) => {
      const isTemporaryMetafield = product.metafields?.find(
        (meta: any) => meta.key === "is_temporary"
      );
      return isTemporaryMetafield?.value === "true";
    });

    // Count expired products
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

    return json({
      success: true,
      totalTemporaryProducts: temporaryProducts.length,
      expiredProducts: expiredCount,
      nextCleanup: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
    });

  } catch (error) {
    logger.error("Zamanlayıcı durum hatası", { error }, "api.scheduler");
    
    return json({
      success: false,
      error: "Zamanlayıcı durumu alınırken hata oluştu",
    }, { status: 500 });
  }
};
