import { json, type ActionFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";

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
    
    const products = await admin.product.list({
      limit: 250,
      status: "draft",
      tag: "geçici",
    });

    let deletedCount = 0;
    const productsToDelete: string[] = [];

    // Süresi dolmuş ürünleri filtrele
    for (const product of products.data.products) {
      const expiresAtMetafield = product.metafields?.find(
        (meta) => meta.key === "expires_at"
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
        await admin.product.delete(productId);
        deletedCount++;
        console.log(`Geçici ürün silindi: ${productId}`);
      } catch (deleteError) {
        console.error(`Ürün silinirken hata: ${productId}`, deleteError);
      }
    }

    // Log kaydı
    console.log(`Temizlik tamamlandı: ${deletedCount} ürün silindi`);

    return json<CleanupResponse>({
      success: true,
      deletedCount,
      message: `${deletedCount} geçici ürün başarıyla silindi`,
    });

  } catch (error) {
    console.error("Temizlik hatası:", error);
    
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
    const products = await admin.product.list({
      limit: 250,
      status: "draft",
      tag: "geçici",
    });

    const temporaryProducts = products.data.products.filter(product => {
      const isTemporaryMetafield = product.metafields?.find(
        (meta) => meta.key === "is_temporary"
      );
      return isTemporaryMetafield?.value === "true";
    });

    return json({
      success: true,
      temporaryProductCount: temporaryProducts.length,
      products: temporaryProducts.map(product => ({
        id: product.id,
        title: product.title,
        created_at: product.metafields?.find(meta => meta.key === "created_at")?.value,
        expires_at: product.metafields?.find(meta => meta.key === "expires_at")?.value,
      })),
    });

  } catch (error) {
    console.error("Ürün listesi hatası:", error);
    
    return json({
      success: false,
      error: "Ürün listesi alınırken hata oluştu",
    }, { status: 500 });
  }
};
