import { json, type ActionFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import { logger } from "../utils/logger";

interface CleanupResponse {
  success: boolean;
  deletedCount: number;
  message: string;
  error?: string;
}

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const { admin } = await authenticate.admin(request);
    
    if (request.method !== "POST") {
      return json({ success: false, error: "Method not allowed" }, { status: 405 });
    }

    // Geçici ürünleri bul (2 saatten eski olanlar)
    const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000);
    
    const products = await admin.rest.get({
      path: "products",
      query: {
        limit: "250",
        status: "draft",
        tag: "geçici"
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

    // Ürünleri sil
    for (const productId of productsToDelete) {
      try {
        await admin.rest.delete({
          path: `products/${productId}`
        });
        deletedCount++;
        logger.info(`Geçici ürün silindi: ${productId}`, { productId }, "api.cleanup");
      } catch (deleteError) {
        logger.error(`Ürün silinirken hata: ${productId}`, { productId, error: deleteError }, "api.cleanup");
      }
    }

    // Log kaydı
    logger.info(`Temizlik tamamlandı: ${deletedCount} ürün silindi`, { deletedCount }, "api.cleanup");

    return json<CleanupResponse>({
      success: true,
      deletedCount,
      message: `${deletedCount} geçici ürün başarıyla silindi`,
    });

  } catch (error) {
    logger.error("Temizlik hatası", { error }, "api.cleanup");
    
    return json<CleanupResponse>({
      success: false,
      deletedCount: 0,
      message: "Temizlik sırasında hata oluştu",
      error: error instanceof Error ? error.message : "Bilinmeyen hata",
    }, { status: 500 });
  }
};

// GET endpoint for manual cleanup trigger
export const loader = async ({ request }: ActionFunctionArgs) => {
  try {
    const { admin } = await authenticate.admin(request);
    
    // Geçici ürün sayısını getir
    const products = await admin.rest.get({
      path: "products",
      query: {
        limit: "250",
        status: "draft",
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

    return json({
      success: true,
      temporaryProductCount: temporaryProducts.length,
      products: temporaryProducts.map((product: any) => ({
        id: product.id,
        title: product.title,
        created_at: product.metafields?.find((meta: any) => meta.key === "created_at")?.value,
        expires_at: product.metafields?.find((meta: any) => meta.key === "expires_at")?.value,
      })),
    });

  } catch (error) {
    logger.error("Ürün listesi hatası", { error }, "api.cleanup");
    
    return json({
      success: false,
      error: "Ürün listesi alınırken hata oluştu",
    }, { status: 500 });
  }
};
