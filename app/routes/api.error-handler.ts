import { json, type ActionFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import { logger } from "../utils/logger";

interface ErrorHandlerRequest {
  errorType: "duplicate_request" | "product_creation_failed" | "cart_addition_failed" | "validation_error";
  context: Record<string, any>;
  userMessage?: string;
}

interface ErrorHandlerResponse {
  success: boolean;
  message: string;
  retryAfter?: number;
  canRetry: boolean;
  error?: string;
}

// Cache to prevent duplicate requests
const requestCache = new Map<string, { timestamp: number; count: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes
const MAX_RETRIES = 3;

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const { admin } = await authenticate.admin(request);
    
    if (request.method !== "POST") {
      return json({ success: false, error: "Method not allowed" }, { status: 405 });
    }

    const body: ErrorHandlerRequest = await request.json();
    const { errorType, context, userMessage } = body;

    // Check for duplicate requests
    const requestKey = `${errorType}_${JSON.stringify(context)}`;
    const now = Date.now();
    const cached = requestCache.get(requestKey);

    if (cached && (now - cached.timestamp) < CACHE_TTL) {
      cached.count++;
      
      if (cached.count > MAX_RETRIES) {
        logger.warning(`Maximum retry count exceeded: ${errorType}`, {
          errorType,
          context,
          retryCount: cached.count
        }, "api.error-handler");

        return json<ErrorHandlerResponse>({
          success: false,
          message: "Too many attempts. Please try again later.",
          canRetry: false,
          retryAfter: Math.ceil((CACHE_TTL - (now - cached.timestamp)) / 1000)
        });
      }
    } else {
      requestCache.set(requestKey, { timestamp: now, count: 1 });
    }

    // Process based on error type
    let response: ErrorHandlerResponse;

    switch (errorType) {
      case "duplicate_request":
        response = {
          success: false,
          message: "Bu işlem zaten yapılıyor. Lütfen bekleyin.",
          canRetry: true,
          retryAfter: 30
        };
        break;

      case "product_creation_failed":
        response = {
          success: false,
          message: userMessage || "Ürün oluşturulamadı. Lütfen tekrar deneyin.",
          canRetry: true,
          retryAfter: 60
        };
        break;

      case "cart_addition_failed":
        response = {
          success: false,
          message: userMessage || "Sepete eklenemedi. Lütfen tekrar deneyin.",
          canRetry: true,
          retryAfter: 30
        };
        break;

      case "validation_error":
        response = {
          success: false,
          message: userMessage || "Geçersiz veri. Lütfen bilgileri kontrol edin.",
          canRetry: true,
          retryAfter: 0
        };
        break;

      default:
        response = {
          success: false,
          message: "Bilinmeyen hata tipi",
          canRetry: false
        };
    }

    // Log record
    logger.error(`Error processed: ${errorType}`, {
      errorType,
      context,
      userMessage,
      canRetry: response.canRetry,
      retryAfter: response.retryAfter
    }, "api.error-handler");

    return json(response);

  } catch (error) {
    logger.error("Hata işleyici hatası", { error }, "api.error-handler");
    
    return json<ErrorHandlerResponse>({
      success: false,
      message: "Hata işlenirken bir sorun oluştu",
      canRetry: false,
      error: error instanceof Error ? error.message : "Bilinmeyen hata",
    }, { status: 500 });
  }
};

// Clean cache (every 10 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of requestCache.entries()) {
    if (now - value.timestamp > CACHE_TTL) {
      requestCache.delete(key);
    }
  }
}, 10 * 60 * 1000);
