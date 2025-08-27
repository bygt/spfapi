/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "cjs",
  serverDependenciesToBundle: [
    /^@shopify\/shopify-app-remix.*/,
    /^@shopify\/shopify-app-session-storage.*/,
    /^@shopify\/shopify-api.*/,
  ],
};
