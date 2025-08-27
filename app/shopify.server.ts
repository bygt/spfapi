import { shopifyApp } from "@shopify/shopify-app-remix/server";
import { LATEST_API_VERSION, DeliveryMethod } from "@shopify/shopify-api";
import { MemorySessionStorage } from "@shopify/shopify-app-session-storage-memory";

const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY || "",
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: LATEST_API_VERSION,
  scopes: [
    "read_products",
    "write_products",
    "read_themes",
    "write_themes",
    "read_orders",
    "write_orders",
  ],
  appUrl: process.env.SHOPIFY_APP_URL || "",
  authPathPrefix: "/auth",
  sessionStorage: new MemorySessionStorage(),
  distribution: "app",
  isEmbedded: true,
  webhooks: {
    APP_UNINSTALLED: {
      deliveryMethod: DeliveryMethod.Http,
      callbackUrl: "/webhooks",
    },
  },
  hooks: {
    afterAuth: async (session) => {
      // Auth sonrası işlemler
      shopify.registerWebhooks({ session });
    },
  },
});

// Export the shopify instance and authenticate function
export default shopify;
export const authenticate = shopify.authenticate;
