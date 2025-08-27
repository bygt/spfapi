var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// node_modules/@shopify/shopify-api/lib/types.js
var require_types = __commonJS({
  "node_modules/@shopify/shopify-api/lib/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.BillingReplacementBehavior = exports.BillingInterval = exports.privacyTopics = exports.ClientType = exports.ShopifyHeader = exports.LATEST_API_VERSION = exports.LIBRARY_NAME = exports.ApiVersion = exports.LogSeverity = void 0;
    var LogSeverity2;
    (function(LogSeverity3) {
      LogSeverity3[LogSeverity3.Error = 0] = "Error", LogSeverity3[LogSeverity3.Warning = 1] = "Warning", LogSeverity3[LogSeverity3.Info = 2] = "Info", LogSeverity3[LogSeverity3.Debug = 3] = "Debug";
    })(LogSeverity2 || (exports.LogSeverity = LogSeverity2 = {}));
    var ApiVersion2;
    (function(ApiVersion3) {
      ApiVersion3.October22 = "2022-10", ApiVersion3.January23 = "2023-01", ApiVersion3.April23 = "2023-04", ApiVersion3.July23 = "2023-07", ApiVersion3.October23 = "2023-10", ApiVersion3.January24 = "2024-01", ApiVersion3.April24 = "2024-04", ApiVersion3.Unstable = "unstable";
    })(ApiVersion2 || (exports.ApiVersion = ApiVersion2 = {}));
    exports.LIBRARY_NAME = "Shopify API Library";
    exports.LATEST_API_VERSION = ApiVersion2.April24;
    var ShopifyHeader2;
    (function(ShopifyHeader3) {
      ShopifyHeader3.AccessToken = "X-Shopify-Access-Token", ShopifyHeader3.ApiVersion = "X-Shopify-API-Version", ShopifyHeader3.Domain = "X-Shopify-Shop-Domain", ShopifyHeader3.Hmac = "X-Shopify-Hmac-Sha256", ShopifyHeader3.Topic = "X-Shopify-Topic", ShopifyHeader3.SubTopic = "X-Shopify-Sub-Topic", ShopifyHeader3.WebhookId = "X-Shopify-Webhook-Id", ShopifyHeader3.StorefrontPrivateToken = "Shopify-Storefront-Private-Token", ShopifyHeader3.StorefrontSDKVariant = "X-SDK-Variant", ShopifyHeader3.StorefrontSDKVersion = "X-SDK-Version";
    })(ShopifyHeader2 || (exports.ShopifyHeader = ShopifyHeader2 = {}));
    var ClientType2;
    (function(ClientType3) {
      ClientType3.Rest = "rest", ClientType3.Graphql = "graphql";
    })(ClientType2 || (exports.ClientType = ClientType2 = {}));
    exports.privacyTopics = [
      "CUSTOMERS_DATA_REQUEST",
      "CUSTOMERS_REDACT",
      "SHOP_REDACT"
    ];
    var BillingInterval2;
    (function(BillingInterval3) {
      BillingInterval3.OneTime = "ONE_TIME", BillingInterval3.Every30Days = "EVERY_30_DAYS", BillingInterval3.Annual = "ANNUAL", BillingInterval3.Usage = "USAGE";
    })(BillingInterval2 || (exports.BillingInterval = BillingInterval2 = {}));
    var BillingReplacementBehavior2;
    (function(BillingReplacementBehavior3) {
      BillingReplacementBehavior3.ApplyImmediately = "APPLY_IMMEDIATELY", BillingReplacementBehavior3.ApplyOnNextBillingCycle = "APPLY_ON_NEXT_BILLING_CYCLE", BillingReplacementBehavior3.Standard = "STANDARD";
    })(BillingReplacementBehavior2 || (exports.BillingReplacementBehavior = BillingReplacementBehavior2 = {}));
  }
});

// node_modules/@shopify/shopify-api/lib/error.js
var require_error = __commonJS({
  "node_modules/@shopify/shopify-api/lib/error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.FeatureDeprecatedError = exports.BillingError = exports.InvalidRequestError = exports.UnsupportedClientType = exports.MissingRequiredArgument = exports.SessionStorageError = exports.MissingWebhookCallbackError = exports.InvalidWebhookError = exports.InvalidSession = exports.CookieNotFound = exports.BotActivityDetected = exports.InvalidOAuthError = exports.GraphqlQueryError = exports.RestResourceError = exports.HttpThrottlingError = exports.HttpInternalError = exports.HttpRetriableError = exports.HttpResponseError = exports.HttpMaxRetriesError = exports.HttpRequestError = exports.PrivateAppError = exports.SafeCompareError = exports.InvalidDeliveryMethodError = exports.MissingJwtTokenError = exports.InvalidJwtError = exports.InvalidHostError = exports.InvalidShopError = exports.InvalidHmacError = exports.ShopifyError = void 0;
    var ShopifyError2 = class extends Error {
      constructor(...args) {
        super(...args), Object.setPrototypeOf(this, new.target.prototype);
      }
    };
    exports.ShopifyError = ShopifyError2;
    var InvalidHmacError2 = class extends ShopifyError2 {
    };
    exports.InvalidHmacError = InvalidHmacError2;
    var InvalidShopError2 = class extends ShopifyError2 {
    };
    exports.InvalidShopError = InvalidShopError2;
    var InvalidHostError2 = class extends ShopifyError2 {
    };
    exports.InvalidHostError = InvalidHostError2;
    var InvalidJwtError2 = class extends ShopifyError2 {
    };
    exports.InvalidJwtError = InvalidJwtError2;
    var MissingJwtTokenError2 = class extends ShopifyError2 {
    };
    exports.MissingJwtTokenError = MissingJwtTokenError2;
    var InvalidDeliveryMethodError2 = class extends ShopifyError2 {
    };
    exports.InvalidDeliveryMethodError = InvalidDeliveryMethodError2;
    var SafeCompareError2 = class extends ShopifyError2 {
    };
    exports.SafeCompareError = SafeCompareError2;
    var PrivateAppError2 = class extends ShopifyError2 {
    };
    exports.PrivateAppError = PrivateAppError2;
    var HttpRequestError2 = class extends ShopifyError2 {
    };
    exports.HttpRequestError = HttpRequestError2;
    var HttpMaxRetriesError2 = class extends ShopifyError2 {
    };
    exports.HttpMaxRetriesError = HttpMaxRetriesError2;
    var HttpResponseError2 = class extends ShopifyError2 {
      constructor({ message, code, statusText, body, headers }) {
        super(message), this.response = {
          code,
          statusText,
          body,
          headers
        };
      }
    };
    exports.HttpResponseError = HttpResponseError2;
    var HttpRetriableError2 = class extends HttpResponseError2 {
    };
    exports.HttpRetriableError = HttpRetriableError2;
    var HttpInternalError2 = class extends HttpRetriableError2 {
    };
    exports.HttpInternalError = HttpInternalError2;
    var HttpThrottlingError2 = class extends HttpRetriableError2 {
      constructor({ retryAfter, ...params }) {
        super(params), this.response.retryAfter = retryAfter;
      }
    };
    exports.HttpThrottlingError = HttpThrottlingError2;
    var RestResourceError2 = class extends ShopifyError2 {
    };
    exports.RestResourceError = RestResourceError2;
    var GraphqlQueryError2 = class extends ShopifyError2 {
      constructor({ message, response, headers, body }) {
        super(message), this.response = response, this.headers = headers, this.body = body;
      }
    };
    exports.GraphqlQueryError = GraphqlQueryError2;
    var InvalidOAuthError2 = class extends ShopifyError2 {
    };
    exports.InvalidOAuthError = InvalidOAuthError2;
    var BotActivityDetected2 = class extends ShopifyError2 {
    };
    exports.BotActivityDetected = BotActivityDetected2;
    var CookieNotFound2 = class extends ShopifyError2 {
    };
    exports.CookieNotFound = CookieNotFound2;
    var InvalidSession2 = class extends ShopifyError2 {
    };
    exports.InvalidSession = InvalidSession2;
    var InvalidWebhookError2 = class extends ShopifyError2 {
      constructor({ message, response }) {
        super(message), this.response = response;
      }
    };
    exports.InvalidWebhookError = InvalidWebhookError2;
    var MissingWebhookCallbackError2 = class extends InvalidWebhookError2 {
    };
    exports.MissingWebhookCallbackError = MissingWebhookCallbackError2;
    var SessionStorageError2 = class extends ShopifyError2 {
    };
    exports.SessionStorageError = SessionStorageError2;
    var MissingRequiredArgument2 = class extends ShopifyError2 {
    };
    exports.MissingRequiredArgument = MissingRequiredArgument2;
    var UnsupportedClientType2 = class extends ShopifyError2 {
    };
    exports.UnsupportedClientType = UnsupportedClientType2;
    var InvalidRequestError2 = class extends ShopifyError2 {
    };
    exports.InvalidRequestError = InvalidRequestError2;
    var BillingError2 = class extends ShopifyError2 {
      constructor({ message, errorData }) {
        super(message), this.message = message, this.errorData = errorData;
      }
    };
    exports.BillingError = BillingError2;
    var FeatureDeprecatedError2 = class extends ShopifyError2 {
    };
    exports.FeatureDeprecatedError = FeatureDeprecatedError2;
  }
});

// node_modules/@shopify/shopify-api/lib/version.js
var require_version = __commonJS({
  "node_modules/@shopify/shopify-api/lib/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.SHOPIFY_API_LIBRARY_VERSION = void 0;
    exports.SHOPIFY_API_LIBRARY_VERSION = "9.7.2";
  }
});

// node_modules/@shopify/shopify-api/lib/logger/log.js
var require_log = __commonJS({
  "node_modules/@shopify/shopify-api/lib/logger/log.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.log = void 0;
    var types_1 = require_types();
    function log2(config) {
      return function(severity, message, context = {}) {
        if (severity > config.logger.level)
          return;
        let prefix = [];
        config.logger.timestamps && prefix.push(`${(/* @__PURE__ */ new Date()).toISOString().slice(0, -5)}Z`);
        let packageString = context.package || "shopify-api";
        switch (delete context.package, severity) {
          case types_1.LogSeverity.Debug:
            packageString = `${packageString}/DEBUG`;
            break;
          case types_1.LogSeverity.Info:
            packageString = `${packageString}/INFO`;
            break;
          case types_1.LogSeverity.Warning:
            packageString = `${packageString}/WARNING`;
            break;
          case types_1.LogSeverity.Error:
            packageString = `${packageString}/ERROR`;
            break;
        }
        prefix.push(packageString);
        let contextParts = [];
        Object.entries(context).forEach(([key, value]) => {
          contextParts.push(`${key}: ${value}`);
        });
        let suffix = "";
        contextParts.length > 0 && (suffix = ` | {${contextParts.join(", ")}}`), config.logger.log(severity, `[${prefix.join("] [")}] ${message}${suffix}`);
      };
    }
    exports.log = log2;
  }
});

// node_modules/@shopify/shopify-api/lib/logger/index.js
var require_logger = __commonJS({
  "node_modules/@shopify/shopify-api/lib/logger/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.logger = void 0;
    var compare_versions_1 = require("compare-versions"), types_1 = require_types(), error_1 = require_error(), version_1 = require_version(), log_1 = require_log();
    function logger2(config) {
      let logFunction = (0, log_1.log)(config);
      return {
        log: logFunction,
        debug: async (message, context = {}) => logFunction(types_1.LogSeverity.Debug, message, context),
        info: async (message, context = {}) => logFunction(types_1.LogSeverity.Info, message, context),
        warning: async (message, context = {}) => logFunction(types_1.LogSeverity.Warning, message, context),
        error: async (message, context = {}) => logFunction(types_1.LogSeverity.Error, message, context),
        deprecated: deprecated2(logFunction)
      };
    }
    exports.logger = logger2;
    function deprecated2(logFunction) {
      return function(version, message) {
        if ((0, compare_versions_1.compare)(version_1.SHOPIFY_API_LIBRARY_VERSION, version, ">="))
          throw new error_1.FeatureDeprecatedError(`Feature was deprecated in version ${version}`);
        return logFunction(types_1.LogSeverity.Warning, `[Deprecated | ${version}] ${message}`);
      };
    }
  }
});

// node_modules/@shopify/shopify-api/rest/load-rest-resources.js
var require_load_rest_resources = __commonJS({
  "node_modules/@shopify/shopify-api/rest/load-rest-resources.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.loadRestResources = void 0;
    var logger_1 = require_logger();
    function loadRestResources2({ resources, config, RestClient: RestClient2 }) {
      let firstResource = Object.keys(resources)[0];
      return config.apiVersion !== resources[firstResource].apiVersion && (0, logger_1.logger)(config).warning(`Loading REST resources for API version ${resources[firstResource].apiVersion}, which doesn't match the default ${config.apiVersion}`), Object.fromEntries(Object.entries(resources).map(([name, resource]) => {
        class NewResource extends resource {
        }
        return NewResource.setClassProperties({
          Client: RestClient2,
          config
        }), Object.entries(NewResource.hasOne).map(([_attribute, klass]) => {
          klass.setClassProperties({
            Client: RestClient2,
            config
          });
        }), Object.entries(NewResource.hasMany).map(([_attribute, klass]) => {
          klass.setClassProperties({
            Client: RestClient2,
            config
          });
        }), Reflect.defineProperty(NewResource, "name", {
          value: name
        }), [name, NewResource];
      }));
    }
    exports.loadRestResources = loadRestResources2;
  }
});

// node_modules/@shopify/shopify-api/runtime/platform/types.js
var require_types2 = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/platform/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
  }
});

// node_modules/@shopify/shopify-api/runtime/platform/runtime-string.js
var require_runtime_string = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/platform/runtime-string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.setAbstractRuntimeString = exports.abstractRuntimeString = void 0;
    var abstractRuntimeString2 = () => {
      throw new Error("Missing adapter implementation for 'abstractRuntimeString' - make sure to import the appropriate adapter for your platform");
    };
    exports.abstractRuntimeString = abstractRuntimeString2;
    function setAbstractRuntimeString2(func) {
      exports.abstractRuntimeString = func;
    }
    exports.setAbstractRuntimeString = setAbstractRuntimeString2;
  }
});

// node_modules/@shopify/shopify-api/runtime/platform/index.js
var require_platform = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/platform/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var tslib_1 = require("tslib");
    tslib_1.__exportStar(require_types2(), exports);
    tslib_1.__exportStar(require_runtime_string(), exports);
  }
});

// node_modules/@shopify/shopify-api/future/flags.js
var require_flags = __commonJS({
  "node_modules/@shopify/shopify-api/future/flags.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.logDisabledFutureFlags = void 0;
    function logDisabledFutureFlags3(config, logger2) {
      if (!config._logDisabledFutureFlags)
        return;
      let logFlag = (flag, message) => logger2.info(`Future flag ${flag} is disabled.

  ${message}
`);
      config.future?.v10_lineItemBilling || logFlag("v10_lineItemBilling", "Enable this flag to use the new billing API, that supports multiple line items per plan.");
    }
    exports.logDisabledFutureFlags = logDisabledFutureFlags3;
  }
});

// node_modules/@shopify/shopify-api/lib/auth/scopes/index.js
var require_scopes = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/scopes/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.AuthScopes = void 0;
    var AuthScopes2 = class {
      constructor(scopes) {
        let scopesArray = [];
        typeof scopes == "string" ? scopesArray = scopes.split(new RegExp(`${AuthScopes2.SCOPE_DELIMITER}\\s*`)) : Array.isArray(scopes) ? scopesArray = scopes : scopes && (scopesArray = Array.from(scopes.expandedScopes)), scopesArray = scopesArray.map((scope) => scope.trim()).filter((scope) => scope.length);
        let impliedScopes = this.getImpliedScopes(scopesArray), scopeSet = new Set(scopesArray), impliedSet = new Set(impliedScopes);
        this.compressedScopes = new Set([...scopeSet].filter((x) => !impliedSet.has(x))), this.expandedScopes = /* @__PURE__ */ new Set([...scopeSet, ...impliedSet]);
      }
      /**
       * Checks whether the current set of scopes includes the given one.
       */
      has(scope) {
        let other;
        return scope instanceof AuthScopes2 ? other = scope : other = new AuthScopes2(scope), other.toArray().filter((x) => !this.expandedScopes.has(x)).length === 0;
      }
      /**
       * Checks whether the current set of scopes equals the given one.
       */
      equals(otherScopes) {
        let other;
        return otherScopes instanceof AuthScopes2 ? other = otherScopes : other = new AuthScopes2(otherScopes), this.compressedScopes.size === other.compressedScopes.size && this.toArray().filter((x) => !other.has(x)).length === 0;
      }
      /**
       * Returns a comma-separated string with the current set of scopes.
       */
      toString() {
        return this.toArray().join(AuthScopes2.SCOPE_DELIMITER);
      }
      /**
       * Returns an array with the current set of scopes.
       */
      toArray() {
        return [...this.compressedScopes];
      }
      getImpliedScopes(scopesArray) {
        return scopesArray.reduce((array, current) => {
          let matches = current.match(/^(unauthenticated_)?write_(.*)$/);
          return matches && array.push(`${matches[1] ? matches[1] : ""}read_${matches[2]}`), array;
        }, []);
      }
    };
    exports.AuthScopes = AuthScopes2;
    AuthScopes2.SCOPE_DELIMITER = ",";
  }
});

// node_modules/@shopify/shopify-api/lib/config.js
var require_config = __commonJS({
  "node_modules/@shopify/shopify-api/lib/config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.validateConfig = void 0;
    var error_1 = require_error(), types_1 = require_types(), scopes_1 = require_scopes(), logger_1 = require_logger();
    function validateConfig2(params) {
      let config = {
        apiKey: "",
        apiSecretKey: "",
        scopes: new scopes_1.AuthScopes([]),
        hostName: "",
        hostScheme: "https",
        apiVersion: types_1.LATEST_API_VERSION,
        isEmbeddedApp: !0,
        isCustomStoreApp: !1,
        logger: {
          log: defaultLogFunction2,
          level: types_1.LogSeverity.Info,
          httpRequests: !1,
          timestamps: !1
        },
        future: {},
        _logDisabledFutureFlags: !0
      }, mandatory = ["apiSecretKey", "hostName"];
      (!("isCustomStoreApp" in params) || !params.isCustomStoreApp) && (mandatory.push("apiKey"), mandatory.push("scopes")), "isCustomStoreApp" in params && params.isCustomStoreApp && (!("adminApiAccessToken" in params) || params.adminApiAccessToken?.length === 0) && mandatory.push("adminApiAccessToken");
      let missing = [];
      if (mandatory.forEach((key) => {
        notEmpty2(params[key]) || missing.push(key);
      }), missing.length)
        throw new error_1.ShopifyError(`Cannot initialize Shopify API Library. Missing values for: ${missing.join(", ")}`);
      let { hostScheme, isCustomStoreApp, adminApiAccessToken, userAgentPrefix, logger: logger2, privateAppStorefrontAccessToken, customShopDomains, billing, ...mandatoryParams } = params;
      return Object.assign(config, mandatoryParams, {
        hostName: params.hostName.replace(/\/$/, ""),
        scopes: params.scopes instanceof scopes_1.AuthScopes ? params.scopes : new scopes_1.AuthScopes(params.scopes),
        hostScheme: hostScheme ?? config.hostScheme,
        isCustomStoreApp: isCustomStoreApp ?? config.isCustomStoreApp,
        adminApiAccessToken: adminApiAccessToken ?? config.adminApiAccessToken,
        userAgentPrefix: userAgentPrefix ?? config.userAgentPrefix,
        logger: { ...config.logger, ...logger2 || {} },
        privateAppStorefrontAccessToken: privateAppStorefrontAccessToken ?? config.privateAppStorefrontAccessToken,
        customShopDomains: customShopDomains ?? config.customShopDomains,
        billing: billing ?? config.billing
      }), config.isCustomStoreApp && params.adminApiAccessToken === params.apiSecretKey && (0, logger_1.logger)(config).warning("adminApiAccessToken is set to the same value as apiSecretKey. adminApiAccessToken should be set to the Admin API access token for custom store apps; apiSecretKey should be set to the custom store app's API secret key."), config;
    }
    exports.validateConfig = validateConfig2;
    function notEmpty2(value) {
      return value == null ? !1 : typeof value == "string" || Array.isArray(value) ? value.length > 0 : !0;
    }
    function defaultLogFunction2(severity, message) {
      switch (severity) {
        case types_1.LogSeverity.Debug:
          console.debug(message);
          break;
        case types_1.LogSeverity.Info:
          console.log(message);
          break;
        case types_1.LogSeverity.Warning:
          console.warn(message);
          break;
        case types_1.LogSeverity.Error:
          console.error(message);
          break;
      }
    }
  }
});

// node_modules/@shopify/shopify-api/runtime/crypto/crypto.js
var require_crypto = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/crypto/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.crypto = exports.setCrypto = void 0;
    var cryptoVar2;
    try {
      exports.crypto = cryptoVar2 = crypto;
    } catch {
    }
    function setCrypto2(crypto2) {
      exports.crypto = cryptoVar2 = crypto2;
    }
    exports.setCrypto = setCrypto2;
  }
});

// node_modules/@shopify/shopify-api/runtime/crypto/types.js
var require_types3 = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/crypto/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.HashFormat = void 0;
    var HashFormat2;
    (function(HashFormat3) {
      HashFormat3.Base64 = "base64", HashFormat3.Hex = "hex";
    })(HashFormat2 || (exports.HashFormat = HashFormat2 = {}));
  }
});

// node_modules/@shopify/shopify-api/runtime/crypto/utils.js
var require_utils = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/crypto/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.hashString = exports.asBase64 = exports.asHex = exports.createSHA256HMAC = void 0;
    var error_1 = require_error(), crypto_1 = require_crypto(), types_1 = require_types3();
    async function createSHA256HMAC2(secret, payload, returnFormat = types_1.HashFormat.Base64) {
      let cryptoLib = typeof crypto_1.crypto?.webcrypto > "u" ? crypto_1.crypto : crypto_1.crypto.webcrypto, enc = new TextEncoder(), key = await cryptoLib.subtle.importKey("raw", enc.encode(secret), {
        name: "HMAC",
        hash: { name: "SHA-256" }
      }, !1, ["sign"]), signature = await cryptoLib.subtle.sign("HMAC", key, enc.encode(payload));
      return returnFormat === types_1.HashFormat.Base64 ? asBase642(signature) : asHex2(signature);
    }
    exports.createSHA256HMAC = createSHA256HMAC2;
    function asHex2(buffer) {
      return [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
    }
    exports.asHex = asHex2;
    var LookupTable2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function asBase642(buffer) {
      let output = "", input = new Uint8Array(buffer);
      for (let i = 0; i < input.length; ) {
        let byte1 = input[i++], byte2 = input[i++], byte3 = input[i++], enc1 = byte1 >> 2, enc2 = (byte1 & 3) << 4 | byte2 >> 4, enc3 = (byte2 & 15) << 2 | byte3 >> 6, enc4 = byte3 & 63;
        isNaN(byte2) && (enc3 = 64), isNaN(byte3) && (enc4 = 64), output += LookupTable2[enc1] + LookupTable2[enc2] + LookupTable2[enc3] + LookupTable2[enc4];
      }
      return output;
    }
    exports.asBase64 = asBase642;
    function hashString2(str, returnFormat) {
      let buffer = new TextEncoder().encode(str);
      switch (returnFormat) {
        case types_1.HashFormat.Base64:
          return asBase642(buffer);
        case types_1.HashFormat.Hex:
          return asHex2(buffer);
        default:
          throw new error_1.ShopifyError(`Unrecognized hash format '${returnFormat}'`);
      }
    }
    exports.hashString = hashString2;
  }
});

// node_modules/@shopify/shopify-api/runtime/http/utils.js
var require_utils2 = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/http/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.splitN = void 0;
    function splitN2(str, sep, maxNumParts) {
      let parts = str.split(sep), maxParts = Math.min(Math.abs(maxNumParts), parts.length);
      return [...parts.slice(0, maxParts - 1), parts.slice(maxParts - 1).join(sep)];
    }
    exports.splitN = splitN2;
  }
});

// node_modules/@shopify/shopify-api/runtime/http/headers.js
var require_headers = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/http/headers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.flatHeaders = exports.removeHeader = exports.canonicalizeHeaders = exports.addHeader = exports.setHeader = exports.getHeader = exports.getHeaders = exports.canonicalizeHeaderName = void 0;
    function canonicalizeHeaderName2(hdr) {
      return hdr.replace(/(^|-)(\w+)/g, (_fullMatch, start, letters) => start + letters.slice(0, 1).toUpperCase() + letters.slice(1).toLowerCase());
    }
    exports.canonicalizeHeaderName = canonicalizeHeaderName2;
    function getHeaders2(headers, needle_) {
      let result = [];
      if (!headers)
        return result;
      let needle = canonicalizeHeaderName2(needle_);
      for (let [key, values] of Object.entries(headers))
        canonicalizeHeaderName2(key) === needle && (Array.isArray(values) ? result.push(...values) : result.push(values));
      return result;
    }
    exports.getHeaders = getHeaders2;
    function getHeader2(headers, needle) {
      if (headers)
        return getHeaders2(headers, needle)?.[0];
    }
    exports.getHeader = getHeader2;
    function setHeader2(headers, key, value) {
      canonicalizeHeaders2(headers), headers[canonicalizeHeaderName2(key)] = [value];
    }
    exports.setHeader = setHeader2;
    function addHeader2(headers, key, value) {
      canonicalizeHeaders2(headers);
      let canonKey = canonicalizeHeaderName2(key), list = headers[canonKey];
      list ? Array.isArray(list) || (list = [list]) : list = [], headers[canonKey] = list, list.push(value);
    }
    exports.addHeader = addHeader2;
    function canonicalizeValue2(value) {
      return typeof value == "number" ? value.toString() : value;
    }
    function canonicalizeHeaders2(hdr) {
      for (let [key, values] of Object.entries(hdr)) {
        let canonKey = canonicalizeHeaderName2(key);
        hdr[canonKey] || (hdr[canonKey] = []), Array.isArray(hdr[canonKey]) || (hdr[canonKey] = [canonicalizeValue2(hdr[canonKey])]), key !== canonKey && (delete hdr[key], hdr[canonKey].push(...[values].flat().map((value) => canonicalizeValue2(value))));
      }
      return hdr;
    }
    exports.canonicalizeHeaders = canonicalizeHeaders2;
    function removeHeader2(headers, needle) {
      canonicalizeHeaders2(headers);
      let canonKey = canonicalizeHeaderName2(needle);
      delete headers[canonKey];
    }
    exports.removeHeader = removeHeader2;
    function flatHeaders2(headers) {
      return Object.entries(headers).flatMap(([header, values]) => Array.isArray(values) ? values.map((value) => [header, value]) : [[header, values]]);
    }
    exports.flatHeaders = flatHeaders2;
  }
});

// node_modules/@shopify/shopify-api/runtime/http/cookies.js
var require_cookies = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/http/cookies.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.Cookies = void 0;
    var utils_1 = require_utils(), utils_2 = require_utils2(), headers_1 = require_headers(), Cookies2 = class {
      static parseCookies(hdrs) {
        let entries = hdrs.filter((hdr) => hdr.trim().length > 0).map((cookieDef) => {
          let [keyval, ...opts] = cookieDef.split(";"), [name, value] = (0, utils_2.splitN)(keyval, "=", 2).map((value2) => value2.trim());
          return [
            name,
            {
              name,
              value,
              ...Object.fromEntries(opts.map((opt) => (0, utils_2.splitN)(opt, "=", 2).map((value2) => value2.trim())))
            }
          ];
        }), jar = Object.fromEntries(entries);
        for (let cookie of Object.values(jar))
          typeof cookie.expires == "string" && (cookie.expires = new Date(cookie.expires));
        return jar;
      }
      static encodeCookie(data) {
        let result = "";
        return result += `${data.name}=${data.value};`, result += Object.entries(data).filter(([key]) => !["name", "value", "expires"].includes(key)).map(([key, value]) => `${key}=${value}`).join("; "), data.expires && (result += ";", result += `expires=${data.expires.toUTCString()}`), result;
      }
      constructor(request2, response, { keys = [] } = {}) {
        this.response = response, this.receivedCookieJar = {}, this.outgoingCookieJar = {}, this.keys = [], keys && (this.keys = keys);
        let cookieReqHdr = (0, headers_1.getHeader)(request2.headers, "Cookie") ?? "";
        this.receivedCookieJar = Cookies2.parseCookies(cookieReqHdr.split(";"));
        let cookieResHdr = (0, headers_1.getHeaders)(response.headers, "Set-Cookie") ?? [];
        this.outgoingCookieJar = Cookies2.parseCookies(cookieResHdr);
      }
      toHeaders() {
        return Object.values(this.outgoingCookieJar).map((cookie) => Cookies2.encodeCookie(cookie));
      }
      updateHeader() {
        this.response.headers || (this.response.headers = {}), (0, headers_1.removeHeader)(this.response.headers, "Set-Cookie"), this.toHeaders().map((hdr) => (0, headers_1.addHeader)(this.response.headers, "Set-Cookie", hdr));
      }
      get(name) {
        return this.receivedCookieJar[name]?.value;
      }
      deleteCookie(name) {
        this.set(name, "", {
          path: "/",
          expires: /* @__PURE__ */ new Date(0)
        });
      }
      async getAndVerify(name) {
        let value = this.get(name);
        if (value && await this.isSignedCookieValid(name))
          return value;
      }
      get canSign() {
        return this.keys?.length > 0;
      }
      set(name, value, opts = {}) {
        this.outgoingCookieJar[name] = {
          ...opts,
          name,
          value
        }, this.updateHeader();
      }
      async setAndSign(name, value, opts = {}) {
        if (!this.canSign)
          throw Error("No keys provided for signing.");
        this.set(name, value, opts);
        let sigName = `${name}.sig`, signature = await (0, utils_1.createSHA256HMAC)(this.keys[0], value);
        this.set(sigName, signature, opts), this.updateHeader();
      }
      async isSignedCookieValid(cookieName) {
        let signedCookieName = `${cookieName}.sig`;
        if (!this.get(cookieName) || !this.get(signedCookieName))
          return this.deleteCookie(signedCookieName), this.deleteCookie(cookieName), !1;
        let value = this.get(cookieName), signature = this.get(signedCookieName);
        return (await Promise.all(this.keys.map((key) => (0, utils_1.createSHA256HMAC)(key, value)))).includes(signature) ? !0 : (this.deleteCookie(signedCookieName), this.deleteCookie(cookieName), !1);
      }
    };
    exports.Cookies = Cookies2;
  }
});

// node_modules/@shopify/shopify-api/runtime/http/types.js
var require_types4 = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/http/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
  }
});

// node_modules/@shopify/shopify-api/runtime/http/index.js
var require_http = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/http/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.setAbstractConvertHeadersFunc = exports.abstractConvertHeaders = exports.setAbstractConvertResponseFunc = exports.abstractConvertResponse = exports.setAbstractConvertIncomingResponseFunc = exports.abstractConvertIncomingResponse = exports.setAbstractConvertRequestFunc = exports.abstractConvertRequest = exports.setAbstractFetchFunc = exports.abstractFetch = exports.isOK = void 0;
    var tslib_1 = require("tslib");
    tslib_1.__exportStar(require_cookies(), exports);
    tslib_1.__exportStar(require_headers(), exports);
    tslib_1.__exportStar(require_utils2(), exports);
    tslib_1.__exportStar(require_types4(), exports);
    function isOK2(resp) {
      return resp.statusCode >= 200 && resp.statusCode <= 299;
    }
    exports.isOK = isOK2;
    var abstractFetch2 = () => {
      throw new Error("Missing adapter implementation for 'abstractFetch' - make sure to import the appropriate adapter for your platform");
    };
    exports.abstractFetch = abstractFetch2;
    function setAbstractFetchFunc2(func) {
      exports.abstractFetch = func;
    }
    exports.setAbstractFetchFunc = setAbstractFetchFunc2;
    var abstractConvertRequest2 = () => {
      throw new Error("Missing adapter implementation for 'abstractConvertRequest' - make sure to import the appropriate adapter for your platform");
    };
    exports.abstractConvertRequest = abstractConvertRequest2;
    function setAbstractConvertRequestFunc2(func) {
      exports.abstractConvertRequest = func;
    }
    exports.setAbstractConvertRequestFunc = setAbstractConvertRequestFunc2;
    var abstractConvertIncomingResponse2 = () => Promise.resolve({});
    exports.abstractConvertIncomingResponse = abstractConvertIncomingResponse2;
    function setAbstractConvertIncomingResponseFunc2(func) {
      exports.abstractConvertIncomingResponse = func;
    }
    exports.setAbstractConvertIncomingResponseFunc = setAbstractConvertIncomingResponseFunc2;
    var abstractConvertResponse2 = () => {
      throw new Error("Missing adapter implementation for 'abstractConvertResponse' - make sure to import the appropriate adapter for your platform");
    };
    exports.abstractConvertResponse = abstractConvertResponse2;
    function setAbstractConvertResponseFunc2(func) {
      exports.abstractConvertResponse = func;
    }
    exports.setAbstractConvertResponseFunc = setAbstractConvertResponseFunc2;
    var abstractConvertHeaders2 = () => {
      throw new Error("Missing adapter implementation for 'abstractConvertHeaders' - make sure to import the appropriate adapter for your platform");
    };
    exports.abstractConvertHeaders = abstractConvertHeaders2;
    function setAbstractConvertHeadersFunc2(func) {
      exports.abstractConvertHeaders = func;
    }
    exports.setAbstractConvertHeadersFunc = setAbstractConvertHeadersFunc2;
  }
});

// node_modules/@shopify/shopify-api/runtime/crypto/index.js
var require_crypto2 = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/crypto/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var tslib_1 = require("tslib");
    tslib_1.__exportStar(require_types3(), exports);
    tslib_1.__exportStar(require_crypto(), exports);
    tslib_1.__exportStar(require_utils(), exports);
  }
});

// node_modules/@shopify/shopify-api/runtime/index.js
var require_runtime = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var tslib_1 = require("tslib");
    tslib_1.__exportStar(require_http(), exports);
    tslib_1.__exportStar(require_crypto2(), exports);
    tslib_1.__exportStar(require_platform(), exports);
  }
});

// node_modules/@shopify/shopify-api/lib/clients/common.js
var require_common = __commonJS({
  "node_modules/@shopify/shopify-api/lib/clients/common.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.throwFailedRequest = exports.clientLoggerFactory = exports.getUserAgent = void 0;
    var tslib_1 = require("tslib"), network_1 = require("@shopify/network"), ShopifyErrors = tslib_1.__importStar(require_error()), types_1 = require_types(), version_1 = require_version(), runtime_1 = require_runtime(), logger_1 = require_logger();
    function getUserAgent2(config) {
      let userAgentPrefix = `${types_1.LIBRARY_NAME} v${version_1.SHOPIFY_API_LIBRARY_VERSION} | ${(0, runtime_1.abstractRuntimeString)()}`;
      return config.userAgentPrefix && (userAgentPrefix = `${config.userAgentPrefix} | ${userAgentPrefix}`), userAgentPrefix;
    }
    exports.getUserAgent = getUserAgent2;
    function clientLoggerFactory2(config) {
      return (logContent) => {
        if (config.logger.httpRequests)
          switch (logContent.type) {
            case "HTTP-Response": {
              let responseLog = logContent.content;
              (0, logger_1.logger)(config).debug("Received response for HTTP request", {
                requestParams: JSON.stringify(responseLog.requestParams),
                response: JSON.stringify(responseLog.response)
              });
              break;
            }
            case "HTTP-Retry": {
              let responseLog = logContent.content;
              (0, logger_1.logger)(config).debug("Retrying HTTP request", {
                requestParams: JSON.stringify(responseLog.requestParams),
                retryAttempt: responseLog.retryAttempt,
                maxRetries: responseLog.maxRetries,
                response: JSON.stringify(responseLog.lastResponse)
              });
              break;
            }
            default: {
              (0, logger_1.logger)(config).debug(`HTTP request event: ${logContent.content}`);
              break;
            }
          }
      };
    }
    exports.clientLoggerFactory = clientLoggerFactory2;
    function throwFailedRequest2(body, atMaxRetries, response) {
      if (typeof response > "u") {
        let message = body?.errors?.message ?? "";
        throw new ShopifyErrors.HttpRequestError(`Http request error, no response available: ${message}`);
      }
      let responseHeaders = (0, runtime_1.canonicalizeHeaders)(Object.fromEntries(response.headers.entries() ?? []));
      if (response.status === network_1.StatusCode.Ok && body.errors.graphQLErrors)
        throw new ShopifyErrors.GraphqlQueryError({
          message: body.errors.graphQLErrors?.[0].message ?? "GraphQL operation failed",
          response,
          headers: responseHeaders,
          body
        });
      let errorMessages = [];
      body.errors && errorMessages.push(JSON.stringify(body.errors, null, 2));
      let xRequestId = (0, runtime_1.getHeader)(responseHeaders, "x-request-id");
      xRequestId && errorMessages.push(`If you report this error, please include this id: ${xRequestId}`);
      let errorMessage = errorMessages.length ? `:
${errorMessages.join(`
`)}` : "", code = response.status, statusText = response.statusText;
      switch (!0) {
        case response.status === network_1.StatusCode.TooManyRequests: {
          if (atMaxRetries)
            throw new ShopifyErrors.HttpMaxRetriesError("Attempted the maximum number of retries for HTTP request.");
          {
            let retryAfter = (0, runtime_1.getHeader)(responseHeaders, "Retry-After");
            throw new ShopifyErrors.HttpThrottlingError({
              message: `Shopify is throttling requests ${errorMessage}`,
              code,
              statusText,
              body,
              headers: responseHeaders,
              retryAfter: retryAfter ? parseFloat(retryAfter) : void 0
            });
          }
        }
        case response.status >= network_1.StatusCode.InternalServerError:
          throw atMaxRetries ? new ShopifyErrors.HttpMaxRetriesError("Attempted the maximum number of retries for HTTP request.") : new ShopifyErrors.HttpInternalError({
            message: `Shopify internal error${errorMessage}`,
            code,
            statusText,
            body,
            headers: responseHeaders
          });
        default:
          throw new ShopifyErrors.HttpResponseError({
            message: `Received an error response (${response.status} ${response.statusText}) from Shopify${errorMessage}`,
            code,
            statusText,
            body,
            headers: responseHeaders
          });
      }
    }
    exports.throwFailedRequest = throwFailedRequest2;
  }
});

// node_modules/@shopify/shopify-api/lib/clients/admin/graphql/client.js
var require_client = __commonJS({
  "node_modules/@shopify/shopify-api/lib/clients/admin/graphql/client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.graphqlClientClass = exports.GraphqlClient = void 0;
    var tslib_1 = require("tslib"), admin_api_client_1 = require("@shopify/admin-api-client"), logger_1 = require_logger(), ShopifyErrors = tslib_1.__importStar(require_error()), runtime_1 = require_runtime(), common_1 = require_common(), GraphqlClient2 = class {
      constructor(params) {
        let config = this.graphqlClass().config;
        if (!config.isCustomStoreApp && !params.session.accessToken)
          throw new ShopifyErrors.MissingRequiredArgument("Missing access token when creating GraphQL client");
        if (params.apiVersion) {
          let message = params.apiVersion === config.apiVersion ? `Admin client has a redundant API version override to the default ${params.apiVersion}` : `Admin client overriding default API version ${config.apiVersion} with ${params.apiVersion}`;
          (0, logger_1.logger)(config).debug(message);
        }
        this.session = params.session, this.apiVersion = params.apiVersion, this.client = (0, admin_api_client_1.createAdminApiClient)({
          accessToken: config.adminApiAccessToken ?? this.session.accessToken,
          apiVersion: this.apiVersion ?? config.apiVersion,
          storeDomain: this.session.shop,
          customFetchApi: runtime_1.abstractFetch,
          logger: (0, common_1.clientLoggerFactory)(config),
          userAgentPrefix: (0, common_1.getUserAgent)(config)
        });
      }
      async query(params) {
        if ((0, logger_1.logger)(this.graphqlClass().config).deprecated("10.0.0", `The query method is deprecated, and was replaced with the request method.
See the migration guide: https://github.com/Shopify/shopify-app-js/blob/main/packages/apps/shopify-api/docs/migrating-to-v9.md#using-the-new-clients.`), typeof params.data == "string" && params.data.length === 0 || Object.entries(params.data).length === 0)
          throw new ShopifyErrors.MissingRequiredArgument("Query missing.");
        let operation, variables;
        typeof params.data == "string" ? operation = params.data : (operation = params.data.query, variables = params.data.variables);
        let headers = Object.fromEntries(Object.entries(params?.extraHeaders ?? {}).map(([key, value]) => [
          key,
          Array.isArray(value) ? value.join(", ") : value.toString()
        ]));
        return { body: await this.request(operation, {
          headers,
          retries: params.tries ? params.tries - 1 : void 0,
          variables
        }), headers: {} };
      }
      async request(operation, options) {
        let response = await this.client.request(operation, {
          apiVersion: this.apiVersion || this.graphqlClass().config.apiVersion,
          ...options
        });
        if (response.errors) {
          let fetchResponse = response.errors.response;
          (0, common_1.throwFailedRequest)(response, (options?.retries ?? 0) > 0, fetchResponse);
        }
        return response;
      }
      graphqlClass() {
        return this.constructor;
      }
    };
    exports.GraphqlClient = GraphqlClient2;
    function graphqlClientClass2({ config }) {
      class NewGraphqlClient extends GraphqlClient2 {
      }
      return NewGraphqlClient.config = config, Reflect.defineProperty(NewGraphqlClient, "name", {
        value: "GraphqlClient"
      }), NewGraphqlClient;
    }
    exports.graphqlClientClass = graphqlClientClass2;
  }
});

// node_modules/@shopify/shopify-api/lib/clients/admin/rest/client.js
var require_client2 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/clients/admin/rest/client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.restClientClass = exports.RestClient = void 0;
    var tslib_1 = require("tslib"), admin_api_client_1 = require("@shopify/admin-api-client"), network_1 = require("@shopify/network"), common_1 = require_common(), runtime_1 = require_runtime(), ShopifyErrors = tslib_1.__importStar(require_error()), logger_1 = require_logger(), RestClient2 = class {
      constructor({ session, apiVersion }) {
        this.loggedDeprecations = {};
        let config = this.restClass().config;
        if (!config.isCustomStoreApp && !session.accessToken)
          throw new ShopifyErrors.MissingRequiredArgument("Missing access token when creating REST client");
        if (apiVersion) {
          let message = apiVersion === config.apiVersion ? `REST client has a redundant API version override to the default ${apiVersion}` : `REST client overriding default API version ${config.apiVersion} with ${apiVersion}`;
          (0, logger_1.logger)(config).debug(message);
        }
        let customStoreAppAccessToken = config.adminApiAccessToken ?? config.apiSecretKey;
        this.session = session, this.apiVersion = apiVersion ?? config.apiVersion, this.client = (0, admin_api_client_1.createAdminRestApiClient)({
          scheme: config.hostScheme,
          storeDomain: session.shop,
          apiVersion: apiVersion ?? config.apiVersion,
          accessToken: config.isCustomStoreApp ? customStoreAppAccessToken : session.accessToken,
          customFetchApi: runtime_1.abstractFetch,
          logger: (0, common_1.clientLoggerFactory)(config),
          userAgentPrefix: (0, common_1.getUserAgent)(config),
          defaultRetryTime: this.restClass().RETRY_WAIT_TIME,
          formatPaths: this.restClass().formatPaths
        });
      }
      /**
       * Performs a GET request on the given path.
       */
      async get(params) {
        return this.request({ method: network_1.Method.Get, ...params });
      }
      /**
       * Performs a POST request on the given path.
       */
      async post(params) {
        return this.request({ method: network_1.Method.Post, ...params });
      }
      /**
       * Performs a PUT request on the given path.
       */
      async put(params) {
        return this.request({ method: network_1.Method.Put, ...params });
      }
      /**
       * Performs a DELETE request on the given path.
       */
      async delete(params) {
        return this.request({ method: network_1.Method.Delete, ...params });
      }
      async request(params) {
        let requestParams = {
          headers: {
            ...params.extraHeaders,
            ...params.type ? { "Content-Type": params.type.toString() } : {}
          },
          retries: params.tries ? params.tries - 1 : void 0,
          searchParams: params.query
        }, response;
        switch (params.method) {
          case network_1.Method.Get:
            response = await this.client.get(params.path, requestParams);
            break;
          case network_1.Method.Put:
            response = await this.client.put(params.path, {
              ...requestParams,
              data: params.data
            });
            break;
          case network_1.Method.Post:
            response = await this.client.post(params.path, {
              ...requestParams,
              data: params.data
            });
            break;
          case network_1.Method.Delete:
            response = await this.client.delete(params.path, requestParams);
            break;
          default:
            throw new ShopifyErrors.InvalidRequestError(`Unsupported request method '${params.method}'`);
        }
        let body = await response.json(), responseHeaders = (0, runtime_1.canonicalizeHeaders)(Object.fromEntries(response.headers.entries()));
        response.ok || (0, common_1.throwFailedRequest)(body, (params.tries ?? 1) > 1, response);
        let requestReturn = {
          body,
          headers: responseHeaders
        };
        await this.logDeprecations({
          method: params.method,
          url: params.path,
          headers: requestParams.headers,
          body: params.data ? JSON.stringify(params.data) : void 0
        }, requestReturn);
        let link = response.headers.get("Link");
        if (link !== void 0) {
          let pageInfo = {
            limit: params.query?.limit ? params.query?.limit.toString() : RestClient2.DEFAULT_LIMIT
          };
          if (link) {
            let links2 = link.split(", ");
            for (let link2 of links2) {
              let parsedLink = link2.match(RestClient2.LINK_HEADER_REGEXP);
              if (!parsedLink)
                continue;
              let linkRel = parsedLink[2], linkUrl = new URL(parsedLink[1]), linkFields = linkUrl.searchParams.get("fields"), linkPageToken = linkUrl.searchParams.get("page_info");
              if (!pageInfo.fields && linkFields && (pageInfo.fields = linkFields.split(",")), linkPageToken)
                switch (linkRel) {
                  case "previous":
                    pageInfo.previousPageUrl = parsedLink[1], pageInfo.prevPage = this.buildRequestParams(parsedLink[1]);
                    break;
                  case "next":
                    pageInfo.nextPageUrl = parsedLink[1], pageInfo.nextPage = this.buildRequestParams(parsedLink[1]);
                    break;
                }
            }
          }
          requestReturn.pageInfo = pageInfo;
        }
        return requestReturn;
      }
      restClass() {
        return this.constructor;
      }
      buildRequestParams(newPageUrl) {
        let pattern = "^/admin/api/[^/]+/(.*).json$", url = new URL(newPageUrl);
        return {
          path: url.pathname.replace(new RegExp(pattern), "$1"),
          query: Object.fromEntries(url.searchParams.entries())
        };
      }
      async logDeprecations(request2, response) {
        let config = this.restClass().config, deprecationReason = (0, runtime_1.getHeader)(response.headers, "X-Shopify-API-Deprecated-Reason");
        if (deprecationReason) {
          let deprecation = {
            message: deprecationReason,
            path: request2.url
          };
          request2.body && (deprecation.body = `${request2.body.substring(0, 100)}...`);
          let depHash = await (0, runtime_1.createSHA256HMAC)(config.apiSecretKey, JSON.stringify(deprecation), runtime_1.HashFormat.Hex);
          if (!Object.keys(this.loggedDeprecations).includes(depHash) || Date.now() - this.loggedDeprecations[depHash] >= RestClient2.DEPRECATION_ALERT_DELAY) {
            this.loggedDeprecations[depHash] = Date.now();
            let stack = new Error().stack, message = `API Deprecation Notice ${(/* @__PURE__ */ new Date()).toLocaleString()} : ${JSON.stringify(deprecation)}  -  Stack Trace: ${stack}`;
            await (0, logger_1.logger)(config).warning(message);
          }
        }
      }
    };
    exports.RestClient = RestClient2;
    RestClient2.LINK_HEADER_REGEXP = /<([^<]+)>; rel="([^"]+)"/;
    RestClient2.DEFAULT_LIMIT = "50";
    RestClient2.RETRY_WAIT_TIME = 1e3;
    RestClient2.DEPRECATION_ALERT_DELAY = 3e5;
    function restClientClass2(params) {
      let { config, formatPaths } = params;
      class NewRestClient extends RestClient2 {
      }
      return NewRestClient.config = config, NewRestClient.formatPaths = formatPaths === void 0 ? !0 : formatPaths, Reflect.defineProperty(NewRestClient, "name", {
        value: "RestClient"
      }), NewRestClient;
    }
    exports.restClientClass = restClientClass2;
  }
});

// node_modules/@shopify/shopify-api/lib/clients/admin/index.js
var require_admin = __commonJS({
  "node_modules/@shopify/shopify-api/lib/clients/admin/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.RestClient = exports.restClientClass = exports.GraphqlClient = exports.graphqlClientClass = void 0;
    var client_1 = require_client();
    Object.defineProperty(exports, "graphqlClientClass", { enumerable: !0, get: function() {
      return client_1.graphqlClientClass;
    } });
    Object.defineProperty(exports, "GraphqlClient", { enumerable: !0, get: function() {
      return client_1.GraphqlClient;
    } });
    var client_2 = require_client2();
    Object.defineProperty(exports, "restClientClass", { enumerable: !0, get: function() {
      return client_2.restClientClass;
    } });
    Object.defineProperty(exports, "RestClient", { enumerable: !0, get: function() {
      return client_2.RestClient;
    } });
  }
});

// node_modules/@shopify/shopify-api/lib/clients/storefront/client.js
var require_client3 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/clients/storefront/client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.storefrontClientClass = exports.StorefrontClient = void 0;
    var tslib_1 = require("tslib"), storefront_api_client_1 = require("@shopify/storefront-api-client"), logger_1 = require_logger(), ShopifyErrors = tslib_1.__importStar(require_error()), error_1 = require_error(), runtime_1 = require_runtime(), common_1 = require_common(), StorefrontClient2 = class {
      constructor(params) {
        let config = this.storefrontClass().config;
        if (!config.isCustomStoreApp && !params.session.accessToken)
          throw new ShopifyErrors.MissingRequiredArgument("Missing access token when creating GraphQL client");
        if (params.apiVersion) {
          let message = params.apiVersion === config.apiVersion ? `Storefront client has a redundant API version override to the default ${params.apiVersion}` : `Storefront client overriding default API version ${config.apiVersion} with ${params.apiVersion}`;
          (0, logger_1.logger)(config).debug(message);
        }
        let accessToken;
        if (config.isCustomStoreApp) {
          if (accessToken = config.privateAppStorefrontAccessToken, !accessToken)
            throw new error_1.MissingRequiredArgument("Custom store apps must set the privateAppStorefrontAccessToken property to call the Storefront API.");
        } else if (accessToken = params.session.accessToken, !accessToken)
          throw new error_1.MissingRequiredArgument("Session missing access token.");
        this.session = params.session, this.apiVersion = params.apiVersion, this.client = (0, storefront_api_client_1.createStorefrontApiClient)({
          privateAccessToken: accessToken,
          apiVersion: this.apiVersion ?? config.apiVersion,
          storeDomain: this.session.shop,
          customFetchApi: runtime_1.abstractFetch,
          logger: (0, common_1.clientLoggerFactory)(config),
          clientName: (0, common_1.getUserAgent)(config)
        });
      }
      async query(params) {
        if ((0, logger_1.logger)(this.storefrontClass().config).deprecated("10.0.0", `The query method is deprecated, and was replaced with the request method.
See the migration guide: https://github.com/Shopify/shopify-app-js/blob/main/packages/apps/shopify-api/docs/migrating-to-v9.md#using-the-new-clients.`), typeof params.data == "string" && params.data.length === 0 || Object.entries(params.data).length === 0)
          throw new ShopifyErrors.MissingRequiredArgument("Query missing.");
        let operation, variables;
        typeof params.data == "string" ? operation = params.data : (operation = params.data.query, variables = params.data.variables);
        let headers = Object.fromEntries(Object.entries(params?.extraHeaders ?? {}).map(([key, value]) => [
          key,
          Array.isArray(value) ? value.join(", ") : value.toString()
        ]));
        return { body: await this.request(operation, {
          headers,
          retries: params.tries ? params.tries - 1 : void 0,
          variables
        }), headers: {} };
      }
      async request(operation, options) {
        let response = await this.client.request(operation, {
          apiVersion: this.apiVersion || this.storefrontClass().config.apiVersion,
          ...options
        });
        if (response.errors) {
          let fetchResponse = response.errors.response;
          (0, common_1.throwFailedRequest)(response, (options?.retries ?? 0) > 0, fetchResponse);
        }
        return response;
      }
      storefrontClass() {
        return this.constructor;
      }
    };
    exports.StorefrontClient = StorefrontClient2;
    function storefrontClientClass2(params) {
      let { config } = params;
      class NewStorefrontClient extends StorefrontClient2 {
      }
      return NewStorefrontClient.config = config, Reflect.defineProperty(NewStorefrontClient, "name", {
        value: "StorefrontClient"
      }), NewStorefrontClient;
    }
    exports.storefrontClientClass = storefrontClientClass2;
  }
});

// node_modules/@shopify/shopify-api/lib/clients/storefront/index.js
var require_storefront = __commonJS({
  "node_modules/@shopify/shopify-api/lib/clients/storefront/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.storefrontClientClass = exports.StorefrontClient = void 0;
    var client_1 = require_client3();
    Object.defineProperty(exports, "StorefrontClient", { enumerable: !0, get: function() {
      return client_1.StorefrontClient;
    } });
    Object.defineProperty(exports, "storefrontClientClass", { enumerable: !0, get: function() {
      return client_1.storefrontClientClass;
    } });
  }
});

// node_modules/@shopify/shopify-api/lib/clients/graphql_proxy/graphql_proxy.js
var require_graphql_proxy = __commonJS({
  "node_modules/@shopify/shopify-api/lib/clients/graphql_proxy/graphql_proxy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.graphqlProxy = void 0;
    var tslib_1 = require("tslib"), ShopifyErrors = tslib_1.__importStar(require_error()), admin_1 = require_admin();
    function graphqlProxy2(config) {
      return async ({ session, rawBody }) => {
        if (!session.accessToken)
          throw new ShopifyErrors.InvalidSession("Cannot proxy query. Session not authenticated.");
        let GraphqlClient2 = (0, admin_1.graphqlClientClass)({ config }), client = new GraphqlClient2({ session }), query, variables;
        if (typeof rawBody == "string" ? query = rawBody : (query = rawBody.query, variables = rawBody.variables), !query)
          throw new ShopifyErrors.MissingRequiredArgument("Query missing.");
        return { body: await client.request(query, { variables }), headers: {} };
      };
    }
    exports.graphqlProxy = graphqlProxy2;
  }
});

// node_modules/@shopify/shopify-api/lib/clients/index.js
var require_clients = __commonJS({
  "node_modules/@shopify/shopify-api/lib/clients/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.clientClasses = void 0;
    var admin_1 = require_admin(), storefront_1 = require_storefront(), graphql_proxy_1 = require_graphql_proxy();
    function clientClasses2(config) {
      return {
        // We don't pass in the HttpClient because the RestClient inherits from it, and goes through the same setup process
        Rest: (0, admin_1.restClientClass)({ config }),
        Graphql: (0, admin_1.graphqlClientClass)({ config }),
        Storefront: (0, storefront_1.storefrontClientClass)({ config }),
        graphqlProxy: (0, graphql_proxy_1.graphqlProxy)(config)
      };
    }
    exports.clientClasses = clientClasses2;
  }
});

// node_modules/@shopify/shopify-api/lib/utils/processed-query.js
var require_processed_query = __commonJS({
  "node_modules/@shopify/shopify-api/lib/utils/processed-query.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var ProcessedQuery2 = class {
      static stringify(keyValuePairs) {
        return !keyValuePairs || Object.keys(keyValuePairs).length === 0 ? "" : new ProcessedQuery2().putAll(keyValuePairs).stringify();
      }
      constructor() {
        this.processedQuery = new URLSearchParams();
      }
      putAll(keyValuePairs) {
        return Object.entries(keyValuePairs).forEach(([key, value]) => this.put(key, value)), this;
      }
      put(key, value) {
        Array.isArray(value) ? this.putArray(key, value) : value?.constructor === Object ? this.putObject(key, value) : this.putSimple(key, value);
      }
      putArray(key, value) {
        value.forEach((arrayValue) => this.processedQuery.append(`${key}[]`, `${arrayValue}`));
      }
      putObject(key, value) {
        Object.entries(value).forEach(([entry2, entryValue]) => {
          this.processedQuery.append(`${key}[${entry2}]`, `${entryValue}`);
        });
      }
      putSimple(key, value) {
        this.processedQuery.append(key, `${value}`);
      }
      stringify(omitQuestionMark = !1) {
        let queryString = this.processedQuery.toString();
        return omitQuestionMark ? queryString : `?${queryString}`;
      }
    };
    exports.default = ProcessedQuery2;
  }
});

// node_modules/@shopify/shopify-api/lib/auth/oauth/safe-compare.js
var require_safe_compare = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/oauth/safe-compare.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.safeCompare = void 0;
    var tslib_1 = require("tslib"), ShopifyErrors = tslib_1.__importStar(require_error()), safeCompare2 = (strA, strB) => {
      if (typeof strA == typeof strB) {
        let enc = new TextEncoder(), buffA = enc.encode(JSON.stringify(strA)), buffB = enc.encode(JSON.stringify(strB));
        if (buffA.length === buffB.length)
          return timingSafeEqual2(buffA, buffB);
      } else
        throw new ShopifyErrors.SafeCompareError(`Mismatched data types provided: ${typeof strA} and ${typeof strB}`);
      return !1;
    };
    exports.safeCompare = safeCompare2;
    function timingSafeEqual2(bufA, bufB) {
      let viewA = new Uint8Array(bufA), viewB = new Uint8Array(bufB), out = 0;
      for (let i = 0; i < viewA.length; i++)
        out |= viewA[i] ^ viewB[i];
      return out === 0;
    }
  }
});

// node_modules/@shopify/shopify-api/lib/utils/types.js
var require_types5 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/utils/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.ValidationErrorReason = exports.HmacValidationType = void 0;
    var HmacValidationType2;
    (function(HmacValidationType3) {
      HmacValidationType3.Flow = "flow", HmacValidationType3.Webhook = "webhook", HmacValidationType3.FulfillmentService = "fulfillment_service";
    })(HmacValidationType2 || (exports.HmacValidationType = HmacValidationType2 = {}));
    exports.ValidationErrorReason = {
      MissingBody: "missing_body",
      InvalidHmac: "invalid_hmac",
      MissingHmac: "missing_hmac"
    };
  }
});

// node_modules/@shopify/shopify-api/lib/utils/hmac-validator.js
var require_hmac_validator = __commonJS({
  "node_modules/@shopify/shopify-api/lib/utils/hmac-validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.validateHmacFromRequestFactory = exports.getCurrentTimeInSec = exports.validateHmacString = exports.validateHmac = exports.generateLocalHmac = void 0;
    var tslib_1 = require("tslib"), logger_1 = require_logger(), types_1 = require_types(), http_1 = require_http(), crypto_1 = require_crypto2(), types_2 = require_types3(), ShopifyErrors = tslib_1.__importStar(require_error()), safe_compare_1 = require_safe_compare(), processed_query_1 = tslib_1.__importDefault(require_processed_query()), types_3 = require_types5(), HMAC_TIMESTAMP_PERMITTED_CLOCK_TOLERANCE_SEC2 = 90;
    function stringifyQueryForAdmin2(query) {
      let processedQuery = new processed_query_1.default();
      return Object.keys(query).sort((val1, val2) => val1.localeCompare(val2)).forEach((key) => processedQuery.put(key, query[key])), processedQuery.stringify(!0);
    }
    function stringifyQueryForAppProxy2(query) {
      return Object.entries(query).sort(([val1], [val2]) => val1.localeCompare(val2)).reduce((acc, [key, value]) => `${acc}${key}=${Array.isArray(value) ? value.join(",") : value}`, "");
    }
    function generateLocalHmac2(config) {
      return async (params, signator = "admin") => {
        let { hmac, signature, ...query } = params, queryString = signator === "admin" ? stringifyQueryForAdmin2(query) : stringifyQueryForAppProxy2(query);
        return (0, crypto_1.createSHA256HMAC)(config.apiSecretKey, queryString, types_2.HashFormat.Hex);
      };
    }
    exports.generateLocalHmac = generateLocalHmac2;
    function validateHmac2(config) {
      return async (query, { signator } = { signator: "admin" }) => {
        if (signator === "admin" && !query.hmac)
          throw new ShopifyErrors.InvalidHmacError("Query does not contain an HMAC value.");
        if (signator === "appProxy" && !query.signature)
          throw new ShopifyErrors.InvalidHmacError("Query does not contain a signature value.");
        validateHmacTimestamp2(query);
        let hmac = signator === "appProxy" ? query.signature : query.hmac, localHmac = await generateLocalHmac2(config)(query, signator);
        return (0, safe_compare_1.safeCompare)(hmac, localHmac);
      };
    }
    exports.validateHmac = validateHmac2;
    async function validateHmacString2(config, data, hmac, format) {
      let localHmac = await (0, crypto_1.createSHA256HMAC)(config.apiSecretKey, data, format);
      return (0, safe_compare_1.safeCompare)(hmac, localHmac);
    }
    exports.validateHmacString = validateHmacString2;
    function getCurrentTimeInSec2() {
      return Math.trunc(Date.now() / 1e3);
    }
    exports.getCurrentTimeInSec = getCurrentTimeInSec2;
    function validateHmacFromRequestFactory2(config) {
      return async function({ type, rawBody, ...adapterArgs }) {
        let request2 = await (0, http_1.abstractConvertRequest)(adapterArgs);
        if (!rawBody.length)
          return fail2(types_3.ValidationErrorReason.MissingBody, type, config);
        let hmac = (0, http_1.getHeader)(request2.headers, types_1.ShopifyHeader.Hmac);
        return hmac ? await validateHmacString2(config, rawBody, hmac, types_2.HashFormat.Base64) ? succeed2(type, config) : fail2(types_3.ValidationErrorReason.InvalidHmac, type, config) : fail2(types_3.ValidationErrorReason.MissingHmac, type, config);
      };
    }
    exports.validateHmacFromRequestFactory = validateHmacFromRequestFactory2;
    function validateHmacTimestamp2(query) {
      if (Math.abs(getCurrentTimeInSec2() - Number(query.timestamp)) > HMAC_TIMESTAMP_PERMITTED_CLOCK_TOLERANCE_SEC2)
        throw new ShopifyErrors.InvalidHmacError("HMAC timestamp is outside of the tolerance range");
    }
    async function fail2(reason, type, config) {
      return await (0, logger_1.logger)(config).debug(`${type} request is not valid`, { reason }), {
        valid: !1,
        reason
      };
    }
    async function succeed2(type, config) {
      return await (0, logger_1.logger)(config).debug(`${type} request is valid`), {
        valid: !0
      };
    }
  }
});

// node_modules/@shopify/shopify-api/lib/auth/decode-host.js
var require_decode_host = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/decode-host.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.decodeHost = void 0;
    function decodeHost2(host) {
      return atob(host);
    }
    exports.decodeHost = decodeHost2;
  }
});

// node_modules/@shopify/shopify-api/lib/utils/shop-admin-url-helper.js
var require_shop_admin_url_helper = __commonJS({
  "node_modules/@shopify/shopify-api/lib/utils/shop-admin-url-helper.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.legacyUrlToShopAdminUrl = exports.shopAdminUrlToLegacyUrl = void 0;
    function shopAdminUrlToLegacyUrl2(shopAdminUrl) {
      let shopUrl = removeProtocol2(shopAdminUrl);
      if (!(shopUrl.split(".")[0] === "admin"))
        return null;
      let regex = new RegExp("admin\\..+/store/([^/]+)"), matches = shopUrl.match(regex);
      if (matches && matches.length === 2) {
        let shopName = matches[1];
        return shopUrl.includes("spin.dev/store/") ? spinAdminUrlToLegacyUrl2(shopUrl) : `${shopName}.myshopify.com`;
      } else
        return null;
    }
    exports.shopAdminUrlToLegacyUrl = shopAdminUrlToLegacyUrl2;
    function legacyUrlToShopAdminUrl2(legacyAdminUrl) {
      let shopUrl = removeProtocol2(legacyAdminUrl), regex = new RegExp("(.+)\\.myshopify\\.com$"), matches = shopUrl.match(regex);
      return matches && matches.length === 2 ? `admin.shopify.com/store/${matches[1]}` : shopUrl.endsWith("spin.dev") ? spinLegacyUrlToAdminUrl2(shopUrl) : null;
    }
    exports.legacyUrlToShopAdminUrl = legacyUrlToShopAdminUrl2;
    function spinAdminUrlToLegacyUrl2(shopAdminUrl) {
      let spinRegex = new RegExp("admin\\.web\\.(.+\\.spin\\.dev)/store/(.+)"), spinMatches = shopAdminUrl.match(spinRegex);
      if (spinMatches && spinMatches.length === 3) {
        let spinUrl = spinMatches[1];
        return `${spinMatches[2]}.shopify.${spinUrl}`;
      } else
        return null;
    }
    function spinLegacyUrlToAdminUrl2(legacyAdminUrl) {
      let spinRegex = new RegExp("(.+)\\.shopify\\.(.+\\.spin\\.dev)"), spinMatches = legacyAdminUrl.match(spinRegex);
      if (spinMatches && spinMatches.length === 3) {
        let shopName = spinMatches[1];
        return `admin.web.${spinMatches[2]}/store/${shopName}`;
      } else
        return null;
    }
    function removeProtocol2(url) {
      return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
    }
  }
});

// node_modules/@shopify/shopify-api/lib/utils/shop-validator.js
var require_shop_validator = __commonJS({
  "node_modules/@shopify/shopify-api/lib/utils/shop-validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.sanitizeHost = exports.sanitizeShop = void 0;
    var error_1 = require_error(), decode_host_1 = require_decode_host(), shop_admin_url_helper_1 = require_shop_admin_url_helper();
    function sanitizeShop2(config) {
      return (shop, throwOnInvalid = !1) => {
        let shopUrl = shop, domainsRegex = ["myshopify\\.com", "shopify\\.com", "myshopify\\.io"];
        config.customShopDomains && domainsRegex.push(...config.customShopDomains.map((regex) => typeof regex == "string" ? regex : regex.source));
        let shopUrlRegex = new RegExp(`^[a-zA-Z0-9][a-zA-Z0-9-_]*\\.(${domainsRegex.join("|")})[/]*$`);
        new RegExp(`^admin\\.(${domainsRegex.join("|")})/store/([a-zA-Z0-9][a-zA-Z0-9-_]*)$`).test(shopUrl) && (shopUrl = (0, shop_admin_url_helper_1.shopAdminUrlToLegacyUrl)(shopUrl) || "");
        let sanitizedShop = shopUrlRegex.test(shopUrl) ? shopUrl : null;
        if (!sanitizedShop && throwOnInvalid)
          throw new error_1.InvalidShopError("Received invalid shop argument");
        return sanitizedShop;
      };
    }
    exports.sanitizeShop = sanitizeShop2;
    function sanitizeHost2() {
      return (host, throwOnInvalid = !1) => {
        let sanitizedHost = /^[0-9a-zA-Z+/]+={0,2}$/.test(host) ? host : null;
        if (sanitizedHost) {
          let { hostname } = new URL(`https://${(0, decode_host_1.decodeHost)(sanitizedHost)}`), originsRegex = [
            "myshopify\\.com",
            "shopify\\.com",
            "myshopify\\.io",
            "spin\\.dev"
          ];
          new RegExp(`\\.(${originsRegex.join("|")})$`).test(hostname) || (sanitizedHost = null);
        }
        if (!sanitizedHost && throwOnInvalid)
          throw new error_1.InvalidHostError("Received invalid host argument");
        return sanitizedHost;
      };
    }
    exports.sanitizeHost = sanitizeHost2;
  }
});

// node_modules/@shopify/shopify-api/lib/clients/admin/types.js
var require_types6 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/clients/admin/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
  }
});

// node_modules/@shopify/shopify-api/lib/clients/graphql_proxy/types.js
var require_types7 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/clients/graphql_proxy/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
  }
});

// node_modules/@shopify/shopify-api/lib/clients/types.js
var require_types8 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/clients/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.GraphqlClient = exports.DataType = void 0;
    var tslib_1 = require("tslib");
    tslib_1.__exportStar(require_types6(), exports);
    tslib_1.__exportStar(require_types7(), exports);
    var DataType2;
    (function(DataType3) {
      DataType3.JSON = "application/json", DataType3.GraphQL = "application/graphql", DataType3.URLEncoded = "application/x-www-form-urlencoded";
    })(DataType2 || (exports.DataType = DataType2 = {}));
    var client_1 = require_client();
    Object.defineProperty(exports, "GraphqlClient", { enumerable: !0, get: function() {
      return client_1.GraphqlClient;
    } });
  }
});

// node_modules/@shopify/shopify-api/lib/utils/fetch-request.js
var require_fetch_request = __commonJS({
  "node_modules/@shopify/shopify-api/lib/utils/fetch-request.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.fetchRequestFactory = void 0;
    var logger_1 = require_logger(), types_1 = require_types(), runtime_1 = require_runtime();
    function fetchRequestFactory2(config) {
      return async function(url, options) {
        let log2 = (0, logger_1.logger)(config), doLog = config.logger.httpRequests && config.logger.level === types_1.LogSeverity.Debug;
        doLog && log2.debug("Making HTTP request", {
          method: options?.method || "GET",
          url,
          ...options?.body && { body: options?.body }
        });
        let response = await (0, runtime_1.abstractFetch)(url, options);
        return doLog && log2.debug("HTTP request completed", {
          method: options?.method || "GET",
          url,
          status: response.status
        }), response;
      };
    }
    exports.fetchRequestFactory = fetchRequestFactory2;
  }
});

// node_modules/@shopify/shopify-api/lib/auth/oauth/types.js
var require_types9 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/oauth/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.STATE_COOKIE_NAME = exports.SESSION_COOKIE_NAME = void 0;
    exports.SESSION_COOKIE_NAME = "shopify_app_session";
    exports.STATE_COOKIE_NAME = "shopify_app_state";
  }
});

// node_modules/@shopify/shopify-api/lib/auth/oauth/nonce.js
var require_nonce = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/oauth/nonce.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.nonce = void 0;
    var crypto_1 = require_crypto2();
    function nonce2() {
      return (crypto_1.crypto.getRandomValues ? crypto_1.crypto.getRandomValues(new Uint8Array(15)) : crypto_1.crypto.randomBytes(15)).map((byte) => byte % 10).join("");
    }
    exports.nonce = nonce2;
  }
});

// node_modules/@shopify/shopify-api/lib/session/session.js
var require_session = __commonJS({
  "node_modules/@shopify/shopify-api/lib/session/session.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.Session = void 0;
    var error_1 = require_error(), scopes_1 = require_scopes(), propertiesToSave2 = [
      "id",
      "shop",
      "state",
      "isOnline",
      "scope",
      "accessToken",
      "expires",
      "onlineAccessInfo"
    ], Session2 = class {
      static fromPropertyArray(entries, returnUserData = !1) {
        if (!Array.isArray(entries))
          throw new error_1.InvalidSession("The parameter is not an array: a Session cannot be created from this object.");
        let obj = Object.fromEntries(entries.filter(([_key, value]) => value != null).map(([key, value]) => {
          switch (key.toLowerCase()) {
            case "isonline":
              return ["isOnline", value];
            case "accesstoken":
              return ["accessToken", value];
            case "onlineaccessinfo":
              return ["onlineAccessInfo", value];
            case "userid":
              return ["userId", value];
            case "firstname":
              return ["firstName", value];
            case "lastname":
              return ["lastName", value];
            case "accountowner":
              return ["accountOwner", value];
            case "emailverified":
              return ["emailVerified", value];
            default:
              return [key.toLowerCase(), value];
          }
        })), sessionData = {}, onlineAccessInfo = {
          associated_user: {}
        };
        return Object.entries(obj).forEach(([key, value]) => {
          switch (key) {
            case "isOnline":
              typeof value == "string" ? sessionData[key] = value.toString().toLowerCase() === "true" : typeof value == "number" ? sessionData[key] = Boolean(value) : sessionData[key] = value;
              break;
            case "scope":
              sessionData[key] = value.toString();
              break;
            case "expires":
              sessionData[key] = value ? new Date(Number(value)) : void 0;
              break;
            case "onlineAccessInfo":
              onlineAccessInfo.associated_user.id = Number(value);
              break;
            case "userId":
              if (returnUserData) {
                onlineAccessInfo.associated_user.id = Number(value);
                break;
              }
            case "firstName":
              if (returnUserData) {
                onlineAccessInfo.associated_user.first_name = String(value);
                break;
              }
            case "lastName":
              if (returnUserData) {
                onlineAccessInfo.associated_user.last_name = String(value);
                break;
              }
            case "email":
              if (returnUserData) {
                onlineAccessInfo.associated_user.email = String(value);
                break;
              }
            case "accountOwner":
              if (returnUserData) {
                onlineAccessInfo.associated_user.account_owner = Boolean(value);
                break;
              }
            case "locale":
              if (returnUserData) {
                onlineAccessInfo.associated_user.locale = String(value);
                break;
              }
            case "collaborator":
              if (returnUserData) {
                onlineAccessInfo.associated_user.collaborator = Boolean(value);
                break;
              }
            case "emailVerified":
              if (returnUserData) {
                onlineAccessInfo.associated_user.email_verified = Boolean(value);
                break;
              }
            default:
              sessionData[key] = value;
          }
        }), sessionData.isOnline && (sessionData.onlineAccessInfo = onlineAccessInfo), new Session2(sessionData);
      }
      constructor(params) {
        Object.assign(this, params);
      }
      /**
       * Whether the session is active. Active sessions have an access token that is not expired, and has the given scopes.
       */
      isActive(scopes) {
        return !this.isScopeChanged(scopes) && Boolean(this.accessToken) && !this.isExpired();
      }
      /**
       * Whether the access token has the given scopes.
       */
      isScopeChanged(scopes) {
        return !(scopes instanceof scopes_1.AuthScopes ? scopes : new scopes_1.AuthScopes(scopes)).equals(this.scope);
      }
      /**
       * Whether the access token is expired.
       */
      isExpired(withinMillisecondsOfExpiry = 0) {
        return Boolean(this.expires && this.expires.getTime() - withinMillisecondsOfExpiry < Date.now());
      }
      /**
       * Converts an object with data into a Session.
       */
      toObject() {
        let object = {
          id: this.id,
          shop: this.shop,
          state: this.state,
          isOnline: this.isOnline
        };
        return this.scope && (object.scope = this.scope), this.expires && (object.expires = this.expires), this.accessToken && (object.accessToken = this.accessToken), this.onlineAccessInfo && (object.onlineAccessInfo = this.onlineAccessInfo), object;
      }
      /**
       * Checks whether the given session is equal to this session.
       */
      equals(other) {
        if (!other || !(this.id === other.id && this.shop === other.shop && this.state === other.state && this.isOnline === other.isOnline))
          return !1;
        let copyA = this.toPropertyArray(!0);
        copyA.sort(([k1], [k2]) => k1 < k2 ? -1 : 1);
        let copyB = other.toPropertyArray(!0);
        return copyB.sort(([k1], [k2]) => k1 < k2 ? -1 : 1), JSON.stringify(copyA) === JSON.stringify(copyB);
      }
      /**
       * Converts the session into an array of key-value pairs.
       */
      toPropertyArray(returnUserData = !1) {
        return Object.entries(this).filter(([key, value]) => propertiesToSave2.includes(key) && value !== void 0 && value !== null).flatMap(([key, value]) => {
          switch (key) {
            case "expires":
              return [[key, value ? value.getTime() : void 0]];
            case "onlineAccessInfo":
              return returnUserData ? [
                ["userId", value?.associated_user?.id],
                ["firstName", value?.associated_user?.first_name],
                ["lastName", value?.associated_user?.last_name],
                ["email", value?.associated_user?.email],
                ["locale", value?.associated_user?.locale],
                ["emailVerified", value?.associated_user?.email_verified],
                ["accountOwner", value?.associated_user?.account_owner],
                ["collaborator", value?.associated_user?.collaborator]
              ] : [[key, value.associated_user.id]];
            default:
              return [[key, value]];
          }
        }).filter(([_key, value]) => value !== void 0);
      }
    };
    exports.Session = Session2;
  }
});

// node_modules/@shopify/shopify-api/lib/utils/get-hmac-key.js
var require_get_hmac_key = __commonJS({
  "node_modules/@shopify/shopify-api/lib/utils/get-hmac-key.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.getHMACKey = void 0;
    function getHMACKey2(key) {
      let arrayBuffer = new Uint8Array(key.length);
      for (let i = 0, keyLen = key.length; i < keyLen; i++)
        arrayBuffer[i] = key.charCodeAt(i);
      return arrayBuffer;
    }
    exports.getHMACKey = getHMACKey2;
  }
});

// node_modules/@shopify/shopify-api/lib/session/decode-session-token.js
var require_decode_session_token = __commonJS({
  "node_modules/@shopify/shopify-api/lib/session/decode-session-token.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.decodeSessionToken = void 0;
    var tslib_1 = require("tslib"), jose2 = tslib_1.__importStar(require("jose")), ShopifyErrors = tslib_1.__importStar(require_error()), get_hmac_key_1 = require_get_hmac_key(), JWT_PERMITTED_CLOCK_TOLERANCE2 = 10;
    function decodeSessionToken2(config) {
      return async (token, { checkAudience = !0 } = {}) => {
        let payload;
        try {
          payload = (await jose2.jwtVerify(token, (0, get_hmac_key_1.getHMACKey)(config.apiSecretKey), {
            algorithms: ["HS256"],
            clockTolerance: JWT_PERMITTED_CLOCK_TOLERANCE2
          })).payload;
        } catch (error) {
          throw new ShopifyErrors.InvalidJwtError(`Failed to parse session token '${token}': ${error.message}`);
        }
        if (checkAudience && payload.aud !== config.apiKey)
          throw new ShopifyErrors.InvalidJwtError("Session token had invalid API key");
        return payload;
      };
    }
    exports.decodeSessionToken = decodeSessionToken2;
  }
});

// node_modules/@shopify/shopify-api/lib/session/session-utils.js
var require_session_utils = __commonJS({
  "node_modules/@shopify/shopify-api/lib/session/session-utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.customAppSession = exports.getCurrentSessionId = exports.getOfflineId = exports.getJwtSessionId = void 0;
    var tslib_1 = require("tslib"), types_1 = require_types9(), http_1 = require_http(), shop_validator_1 = require_shop_validator(), logger_1 = require_logger(), ShopifyErrors = tslib_1.__importStar(require_error()), decode_session_token_1 = require_decode_session_token(), session_1 = require_session();
    function getJwtSessionId2(config) {
      return (shop, userId) => `${(0, shop_validator_1.sanitizeShop)(config)(shop, !0)}_${userId}`;
    }
    exports.getJwtSessionId = getJwtSessionId2;
    function getOfflineId2(config) {
      return (shop) => `offline_${(0, shop_validator_1.sanitizeShop)(config)(shop, !0)}`;
    }
    exports.getOfflineId = getOfflineId2;
    function getCurrentSessionId2(config) {
      return async function({ isOnline, ...adapterArgs }) {
        let request2 = await (0, http_1.abstractConvertRequest)(adapterArgs), log2 = (0, logger_1.logger)(config);
        if (config.isEmbeddedApp) {
          log2.debug("App is embedded, looking for session id in JWT payload", {
            isOnline
          });
          let authHeader = request2.headers.Authorization;
          if (authHeader) {
            let matches = (typeof authHeader == "string" ? authHeader : authHeader[0]).match(/^Bearer (.+)$/);
            if (!matches)
              throw log2.error("Missing Bearer token in authorization header", { isOnline }), new ShopifyErrors.MissingJwtTokenError("Missing Bearer token in authorization header");
            let jwtPayload = await (0, decode_session_token_1.decodeSessionToken)(config)(matches[1]), shop = jwtPayload.dest.replace(/^https:\/\//, "");
            return log2.debug("Found valid JWT payload", { shop, isOnline }), isOnline ? getJwtSessionId2(config)(shop, jwtPayload.sub) : getOfflineId2(config)(shop);
          } else
            log2.error("Missing Authorization header, was the request made with authenticatedFetch?", { isOnline });
        } else
          return log2.debug("App is not embedded, looking for session id in cookies", {
            isOnline
          }), new http_1.Cookies(request2, {}, {
            keys: [config.apiSecretKey]
          }).getAndVerify(types_1.SESSION_COOKIE_NAME);
      };
    }
    exports.getCurrentSessionId = getCurrentSessionId2;
    function customAppSession2(config) {
      return (shop) => new session_1.Session({
        id: "",
        shop: `${(0, shop_validator_1.sanitizeShop)(config)(shop, !0)}`,
        state: "",
        isOnline: !1
      });
    }
    exports.customAppSession = customAppSession2;
  }
});

// node_modules/@shopify/shopify-api/lib/auth/oauth/create-session.js
var require_create_session = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/oauth/create-session.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.createSession = void 0;
    var uuid_1 = require("uuid"), session_1 = require_session(), logger_1 = require_logger(), session_utils_1 = require_session_utils();
    function createSession2({ config, accessTokenResponse, shop, state }) {
      let associatedUser = accessTokenResponse.associated_user, isOnline = Boolean(associatedUser);
      if ((0, logger_1.logger)(config).info("Creating new session", { shop, isOnline }), isOnline) {
        let sessionId, responseBody = accessTokenResponse, { access_token, scope, ...rest } = responseBody, sessionExpiration = new Date(Date.now() + responseBody.expires_in * 1e3);
        return config.isEmbeddedApp ? sessionId = (0, session_utils_1.getJwtSessionId)(config)(shop, `${rest.associated_user.id}`) : sessionId = (0, uuid_1.v4)(), new session_1.Session({
          id: sessionId,
          shop,
          state,
          isOnline,
          accessToken: access_token,
          scope,
          expires: sessionExpiration,
          onlineAccessInfo: rest
        });
      } else
        return new session_1.Session({
          id: (0, session_utils_1.getOfflineId)(config)(shop),
          shop,
          state,
          isOnline,
          accessToken: accessTokenResponse.access_token,
          scope: accessTokenResponse.scope
        });
    }
    exports.createSession = createSession2;
  }
});

// node_modules/@shopify/shopify-api/lib/auth/oauth/oauth.js
var require_oauth = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/oauth/oauth.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.callback = exports.begin = void 0;
    var tslib_1 = require("tslib"), isbot_1 = require("isbot"), common_1 = require_common(), processed_query_1 = tslib_1.__importDefault(require_processed_query()), ShopifyErrors = tslib_1.__importStar(require_error()), hmac_validator_1 = require_hmac_validator(), shop_validator_1 = require_shop_validator(), http_1 = require_http(), logger_1 = require_logger(), types_1 = require_types8(), fetch_request_1 = require_fetch_request(), types_2 = require_types9(), nonce_1 = require_nonce(), safe_compare_1 = require_safe_compare(), create_session_1 = require_create_session(), logForBot2 = ({ request: request2, log: log2, func }) => {
      log2.debug(`Possible bot request to auth ${func}: `, {
        userAgent: request2.headers["User-Agent"]
      });
    };
    function begin2(config) {
      return async ({ shop, callbackPath, isOnline, ...adapterArgs }) => {
        throwIfCustomStoreApp2(config.isCustomStoreApp, "Cannot perform OAuth for private apps");
        let log2 = (0, logger_1.logger)(config);
        log2.info("Beginning OAuth", { shop, isOnline, callbackPath });
        let request2 = await (0, http_1.abstractConvertRequest)(adapterArgs), response = await (0, http_1.abstractConvertIncomingResponse)(adapterArgs), userAgent = request2.headers["User-Agent"];
        if (Array.isArray(userAgent) && (userAgent = userAgent[0]), (0, isbot_1.isbot)(userAgent))
          return logForBot2({ request: request2, log: log2, func: "begin" }), response.statusCode = 410, (0, http_1.abstractConvertResponse)(response, adapterArgs);
        let cookies = new http_1.Cookies(request2, response, {
          keys: [config.apiSecretKey],
          secure: !0
        }), state = (0, nonce_1.nonce)();
        await cookies.setAndSign(types_2.STATE_COOKIE_NAME, state, {
          expires: new Date(Date.now() + 6e4),
          sameSite: "lax",
          secure: !0,
          path: callbackPath
        });
        let query = {
          client_id: config.apiKey,
          scope: config.scopes.toString(),
          redirect_uri: `${config.hostScheme}://${config.hostName}${callbackPath}`,
          state,
          "grant_options[]": isOnline ? "per-user" : ""
        }, processedQuery = new processed_query_1.default();
        processedQuery.putAll(query);
        let redirectUrl = `https://${(0, shop_validator_1.sanitizeShop)(config)(shop, !0)}/admin/oauth/authorize${processedQuery.stringify()}`;
        return response.statusCode = 302, response.statusText = "Found", response.headers = {
          ...response.headers,
          ...cookies.response.headers,
          Location: redirectUrl
        }, log2.debug(`OAuth started, redirecting to ${redirectUrl}`, { shop, isOnline }), (0, http_1.abstractConvertResponse)(response, adapterArgs);
      };
    }
    exports.begin = begin2;
    function callback2(config) {
      return async function({ ...adapterArgs }) {
        throwIfCustomStoreApp2(config.isCustomStoreApp, "Cannot perform OAuth for private apps");
        let log2 = (0, logger_1.logger)(config), request2 = await (0, http_1.abstractConvertRequest)(adapterArgs), query = new URL(request2.url, `${config.hostScheme}://${config.hostName}`).searchParams, shop = query.get("shop"), response = {}, userAgent = request2.headers["User-Agent"];
        if (Array.isArray(userAgent) && (userAgent = userAgent[0]), (0, isbot_1.isbot)(userAgent))
          throw logForBot2({ request: request2, log: log2, func: "callback" }), new ShopifyErrors.BotActivityDetected("Invalid OAuth callback initiated by bot");
        log2.info("Completing OAuth", { shop });
        let cookies = new http_1.Cookies(request2, response, {
          keys: [config.apiSecretKey],
          secure: !0
        }), stateFromCookie = await cookies.getAndVerify(types_2.STATE_COOKIE_NAME);
        if (cookies.deleteCookie(types_2.STATE_COOKIE_NAME), !stateFromCookie)
          throw log2.error("Could not find OAuth cookie", { shop }), new ShopifyErrors.CookieNotFound(`Cannot complete OAuth process. Could not find an OAuth cookie for shop url: ${shop}`);
        let authQuery = Object.fromEntries(query.entries());
        if (!await validQuery2({ config, query: authQuery, stateFromCookie }))
          throw log2.error("Invalid OAuth callback", { shop, stateFromCookie }), new ShopifyErrors.InvalidOAuthError("Invalid OAuth callback.");
        log2.debug("OAuth request is valid, requesting access token", { shop });
        let body = {
          client_id: config.apiKey,
          client_secret: config.apiSecretKey,
          code: query.get("code")
        }, cleanShop = (0, shop_validator_1.sanitizeShop)(config)(query.get("shop"), !0), postResponse = await (0, fetch_request_1.fetchRequestFactory)(config)(`https://${cleanShop}/admin/oauth/access_token`, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": types_1.DataType.JSON,
            Accept: types_1.DataType.JSON
          }
        });
        postResponse.ok || (0, common_1.throwFailedRequest)(await postResponse.json(), !1, postResponse);
        let session = (0, create_session_1.createSession)({
          accessTokenResponse: await postResponse.json(),
          shop: cleanShop,
          state: stateFromCookie,
          config
        });
        return config.isEmbeddedApp || await cookies.setAndSign(types_2.SESSION_COOKIE_NAME, session.id, {
          expires: session.expires,
          sameSite: "lax",
          secure: !0,
          path: "/"
        }), {
          headers: await (0, http_1.abstractConvertHeaders)(cookies.response.headers, adapterArgs),
          session
        };
      };
    }
    exports.callback = callback2;
    async function validQuery2({ config, query, stateFromCookie }) {
      return await (0, hmac_validator_1.validateHmac)(config)(query) && (0, safe_compare_1.safeCompare)(query.state, stateFromCookie);
    }
    function throwIfCustomStoreApp2(isCustomStoreApp, message) {
      if (isCustomStoreApp)
        throw new ShopifyErrors.PrivateAppError(message);
    }
  }
});

// node_modules/@shopify/shopify-api/lib/auth/get-embedded-app-url.js
var require_get_embedded_app_url = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/get-embedded-app-url.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.buildEmbeddedAppUrl = exports.getEmbeddedAppUrl = void 0;
    var tslib_1 = require("tslib"), ShopifyErrors = tslib_1.__importStar(require_error()), http_1 = require_http(), shop_validator_1 = require_shop_validator(), decode_host_1 = require_decode_host();
    function getEmbeddedAppUrl2(config) {
      return async ({ ...adapterArgs }) => {
        let request2 = await (0, http_1.abstractConvertRequest)(adapterArgs);
        if (!request2)
          throw new ShopifyErrors.MissingRequiredArgument("getEmbeddedAppUrl requires a request object argument");
        if (!request2.url)
          throw new ShopifyErrors.InvalidRequestError("Request does not contain a URL");
        let host = new URL(request2.url, `https://${request2.headers.host}`).searchParams.get("host");
        if (typeof host != "string")
          throw new ShopifyErrors.InvalidRequestError("Request does not contain a host query parameter");
        return buildEmbeddedAppUrl2(config)(host);
      };
    }
    exports.getEmbeddedAppUrl = getEmbeddedAppUrl2;
    function buildEmbeddedAppUrl2(config) {
      return (host) => ((0, shop_validator_1.sanitizeHost)()(host, !0), `https://${(0, decode_host_1.decodeHost)(host)}/apps/${config.apiKey}`);
    }
    exports.buildEmbeddedAppUrl = buildEmbeddedAppUrl2;
  }
});

// node_modules/@shopify/shopify-api/lib/auth/oauth/token-exchange.js
var require_token_exchange = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/oauth/token-exchange.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.tokenExchange = exports.RequestedTokenType = void 0;
    var common_1 = require_common(), decode_session_token_1 = require_decode_session_token(), shop_validator_1 = require_shop_validator(), types_1 = require_types8(), fetch_request_1 = require_fetch_request(), create_session_1 = require_create_session(), RequestedTokenType2;
    (function(RequestedTokenType3) {
      RequestedTokenType3.OnlineAccessToken = "urn:shopify:params:oauth:token-type:online-access-token", RequestedTokenType3.OfflineAccessToken = "urn:shopify:params:oauth:token-type:offline-access-token";
    })(RequestedTokenType2 || (exports.RequestedTokenType = RequestedTokenType2 = {}));
    var TokenExchangeGrantType2 = "urn:ietf:params:oauth:grant-type:token-exchange", IdTokenType2 = "urn:ietf:params:oauth:token-type:id_token";
    function tokenExchange2(config) {
      return async ({ shop, sessionToken, requestedTokenType }) => {
        await (0, decode_session_token_1.decodeSessionToken)(config)(sessionToken);
        let body = {
          client_id: config.apiKey,
          client_secret: config.apiSecretKey,
          grant_type: TokenExchangeGrantType2,
          subject_token: sessionToken,
          subject_token_type: IdTokenType2,
          requested_token_type: requestedTokenType
        }, cleanShop = (0, shop_validator_1.sanitizeShop)(config)(shop, !0), postResponse = await (0, fetch_request_1.fetchRequestFactory)(config)(`https://${cleanShop}/admin/oauth/access_token`, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": types_1.DataType.JSON,
            Accept: types_1.DataType.JSON
          }
        });
        return postResponse.ok || (0, common_1.throwFailedRequest)(await postResponse.json(), !1, postResponse), {
          session: (0, create_session_1.createSession)({
            accessTokenResponse: await postResponse.json(),
            shop: cleanShop,
            // We need to keep this as an empty string as our template DB schemas have this required
            state: "",
            config
          })
        };
      };
    }
    exports.tokenExchange = tokenExchange2;
  }
});

// node_modules/@shopify/shopify-api/lib/auth/index.js
var require_auth = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.shopifyAuth = void 0;
    var oauth_1 = require_oauth(), nonce_1 = require_nonce(), safe_compare_1 = require_safe_compare(), get_embedded_app_url_1 = require_get_embedded_app_url(), token_exchange_1 = require_token_exchange();
    function shopifyAuth2(config) {
      return {
        begin: (0, oauth_1.begin)(config),
        callback: (0, oauth_1.callback)(config),
        nonce: nonce_1.nonce,
        safeCompare: safe_compare_1.safeCompare,
        getEmbeddedAppUrl: (0, get_embedded_app_url_1.getEmbeddedAppUrl)(config),
        buildEmbeddedAppUrl: (0, get_embedded_app_url_1.buildEmbeddedAppUrl)(config),
        tokenExchange: (0, token_exchange_1.tokenExchange)(config)
      };
    }
    exports.shopifyAuth = shopifyAuth2;
  }
});

// node_modules/@shopify/shopify-api/lib/session/index.js
var require_session2 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/session/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.shopifySession = void 0;
    var decode_session_token_1 = require_decode_session_token(), session_utils_1 = require_session_utils();
    function shopifySession2(config) {
      return {
        customAppSession: (0, session_utils_1.customAppSession)(config),
        getCurrentId: (0, session_utils_1.getCurrentSessionId)(config),
        getOfflineId: (0, session_utils_1.getOfflineId)(config),
        getJwtSessionId: (0, session_utils_1.getJwtSessionId)(config),
        decodeSessionToken: (0, decode_session_token_1.decodeSessionToken)(config)
      };
    }
    exports.shopifySession = shopifySession2;
  }
});

// node_modules/@shopify/shopify-api/lib/utils/version-compatible.js
var require_version_compatible = __commonJS({
  "node_modules/@shopify/shopify-api/lib/utils/version-compatible.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.versionPriorTo = exports.versionCompatible = void 0;
    var types_1 = require_types();
    function versionCompatible2(config) {
      return (referenceVersion, currentVersion = config.apiVersion) => {
        if (currentVersion === types_1.ApiVersion.Unstable)
          return !0;
        let numericVersion = (version) => parseInt(version.replace("-", ""), 10), current = numericVersion(currentVersion), reference = numericVersion(referenceVersion);
        return current >= reference;
      };
    }
    exports.versionCompatible = versionCompatible2;
    function versionPriorTo2(config) {
      return (referenceVersion, currentVersion = config.apiVersion) => !versionCompatible2(config)(referenceVersion, currentVersion);
    }
    exports.versionPriorTo = versionPriorTo2;
  }
});

// node_modules/@shopify/shopify-api/lib/utils/index.js
var require_utils3 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.shopifyUtils = void 0;
    var shop_validator_1 = require_shop_validator(), hmac_validator_1 = require_hmac_validator(), version_compatible_1 = require_version_compatible(), shop_admin_url_helper_1 = require_shop_admin_url_helper();
    function shopifyUtils2(config) {
      return {
        sanitizeShop: (0, shop_validator_1.sanitizeShop)(config),
        sanitizeHost: (0, shop_validator_1.sanitizeHost)(),
        validateHmac: (0, hmac_validator_1.validateHmac)(config),
        versionCompatible: (0, version_compatible_1.versionCompatible)(config),
        versionPriorTo: (0, version_compatible_1.versionPriorTo)(config),
        shopAdminUrlToLegacyUrl: shop_admin_url_helper_1.shopAdminUrlToLegacyUrl,
        legacyUrlToShopAdminUrl: shop_admin_url_helper_1.legacyUrlToShopAdminUrl
      };
    }
    exports.shopifyUtils = shopifyUtils2;
  }
});

// node_modules/@shopify/shopify-api/lib/webhooks/types.js
var require_types10 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/webhooks/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.WebhookValidationErrorReason = exports.WebhookOperation = exports.DeliveryMethod = void 0;
    var types_1 = require_types5(), DeliveryMethod3;
    (function(DeliveryMethod4) {
      DeliveryMethod4.Http = "http", DeliveryMethod4.EventBridge = "eventbridge", DeliveryMethod4.PubSub = "pubsub";
    })(DeliveryMethod3 || (exports.DeliveryMethod = DeliveryMethod3 = {}));
    var WebhookOperation2;
    (function(WebhookOperation3) {
      WebhookOperation3.Create = "create", WebhookOperation3.Update = "update", WebhookOperation3.Delete = "delete";
    })(WebhookOperation2 || (exports.WebhookOperation = WebhookOperation2 = {}));
    exports.WebhookValidationErrorReason = {
      ...types_1.ValidationErrorReason,
      MissingHeaders: "missing_headers"
    };
  }
});

// node_modules/@shopify/shopify-api/lib/webhooks/registry.js
var require_registry = __commonJS({
  "node_modules/@shopify/shopify-api/lib/webhooks/registry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.addHostToCallbackUrl = exports.handlerIdentifier = exports.getHandlers = exports.getTopicsAdded = exports.addHandlers = exports.topicForStorage = exports.registry = void 0;
    var error_1 = require_error(), logger_1 = require_logger(), types_1 = require_types10();
    function registry2() {
      return {};
    }
    exports.registry = registry2;
    function topicForStorage2(topic) {
      return topic.toUpperCase().replace(/\/|\./g, "_");
    }
    exports.topicForStorage = topicForStorage2;
    function addHandlers2(config, webhookRegistry) {
      return function(handlersToAdd) {
        for (let [topic, handlers] of Object.entries(handlersToAdd)) {
          let topicKey = topicForStorage2(topic);
          if (Array.isArray(handlers))
            for (let handler of handlers)
              mergeOrAddHandler2(config, webhookRegistry, topicKey, handler);
          else
            mergeOrAddHandler2(config, webhookRegistry, topicKey, handlers);
        }
      };
    }
    exports.addHandlers = addHandlers2;
    function getTopicsAdded2(webhookRegistry) {
      return function() {
        return Object.keys(webhookRegistry);
      };
    }
    exports.getTopicsAdded = getTopicsAdded2;
    function getHandlers2(webhookRegistry) {
      return function(topic) {
        return webhookRegistry[topicForStorage2(topic)] || [];
      };
    }
    exports.getHandlers = getHandlers2;
    function handlerIdentifier2(config, handler) {
      let prefix = handler.deliveryMethod;
      switch (handler.deliveryMethod) {
        case types_1.DeliveryMethod.Http:
          return `${prefix}_${addHostToCallbackUrl2(config, handler.callbackUrl)}`;
        case types_1.DeliveryMethod.EventBridge:
          return `${prefix}_${handler.arn}`;
        case types_1.DeliveryMethod.PubSub:
          return `${prefix}_${handler.pubSubProject}:${handler.pubSubTopic}`;
        default:
          throw new error_1.InvalidDeliveryMethodError(`Unrecognized delivery method '${handler.deliveryMethod}'`);
      }
    }
    exports.handlerIdentifier = handlerIdentifier2;
    function addHostToCallbackUrl2(config, callbackUrl) {
      return callbackUrl.startsWith("/") ? `${config.hostScheme}://${config.hostName}${callbackUrl}` : callbackUrl;
    }
    exports.addHostToCallbackUrl = addHostToCallbackUrl2;
    function mergeOrAddHandler2(config, webhookRegistry, topic, handler) {
      let log2 = (0, logger_1.logger)(config);
      if (handler.includeFields?.sort(), handler.metafieldNamespaces?.sort(), !(topic in webhookRegistry)) {
        webhookRegistry[topic] = [handler];
        return;
      }
      let identifier = handlerIdentifier2(config, handler);
      for (let index in webhookRegistry[topic]) {
        if (!Object.prototype.hasOwnProperty.call(webhookRegistry[topic], index))
          continue;
        let existingHandler = webhookRegistry[topic][index], existingIdentifier = handlerIdentifier2(config, existingHandler);
        if (identifier === existingIdentifier)
          if (handler.deliveryMethod === types_1.DeliveryMethod.Http) {
            log2.info(`Detected multiple handlers for '${topic}', webhooks.process will call them sequentially`);
            break;
          } else
            throw new error_1.InvalidDeliveryMethodError(`Can only add multiple handlers for a topic when deliveryMethod is Http. Please be sure that you used addHandler method once after creating ShopifyApi instance in your app.  Invalid handler: ${JSON.stringify(handler)}`);
      }
      webhookRegistry[topic].push(handler);
    }
  }
});

// node_modules/@shopify/shopify-api/lib/webhooks/query-template.js
var require_query_template = __commonJS({
  "node_modules/@shopify/shopify-api/lib/webhooks/query-template.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.queryTemplate = void 0;
    function queryTemplate2(template, params) {
      let query = template;
      return Object.entries(params).forEach(([key, value]) => {
        query = query.replace(`{{${key}}}`, value);
      }), query;
    }
    exports.queryTemplate = queryTemplate2;
  }
});

// node_modules/@shopify/shopify-api/lib/webhooks/register.js
var require_register = __commonJS({
  "node_modules/@shopify/shopify-api/lib/webhooks/register.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.TEMPLATE_MUTATION = exports.TEMPLATE_GET_HANDLERS = exports.register = void 0;
    var admin_1 = require_admin(), error_1 = require_error(), logger_1 = require_logger(), types_1 = require_types(), registry_1 = require_registry(), query_template_1 = require_query_template(), types_2 = require_types10();
    function register2(config, webhookRegistry) {
      return async function({ session }) {
        let log2 = (0, logger_1.logger)(config);
        log2.info("Registering webhooks", { shop: session.shop });
        let registerReturn = Object.keys(webhookRegistry).reduce((acc, topic) => (acc[topic] = [], acc), {}), existingHandlers = await getExistingHandlers2(config, session);
        log2.debug(`Existing topics: [${Object.keys(existingHandlers).join(", ")}]`, { shop: session.shop });
        for (let topic in webhookRegistry)
          Object.prototype.hasOwnProperty.call(webhookRegistry, topic) && (types_1.privacyTopics.includes(topic) || (registerReturn[topic] = await registerTopic2({
            config,
            session,
            topic,
            existingHandlers: existingHandlers[topic] || [],
            handlers: (0, registry_1.getHandlers)(webhookRegistry)(topic)
          }), delete existingHandlers[topic]));
        for (let topic in existingHandlers) {
          if (!Object.prototype.hasOwnProperty.call(existingHandlers, topic))
            continue;
          let GraphqlClient2 = (0, admin_1.graphqlClientClass)({ config }), client = new GraphqlClient2({ session });
          registerReturn[topic] = await runMutations2({
            config,
            client,
            topic,
            handlers: existingHandlers[topic],
            operation: types_2.WebhookOperation.Delete
          });
        }
        return registerReturn;
      };
    }
    exports.register = register2;
    async function getExistingHandlers2(config, session) {
      let GraphqlClient2 = (0, admin_1.graphqlClientClass)({ config }), client = new GraphqlClient2({ session }), existingHandlers = {}, hasNextPage, endCursor = null;
      do {
        let query = buildCheckQuery2(endCursor), response = await client.request(query);
        response.data?.webhookSubscriptions?.edges.forEach((edge) => {
          let handler = buildHandlerFromNode2(edge);
          existingHandlers[edge.node.topic] || (existingHandlers[edge.node.topic] = []), existingHandlers[edge.node.topic].push(handler);
        }), endCursor = response.data?.webhookSubscriptions?.pageInfo.endCursor, hasNextPage = response.data?.webhookSubscriptions?.pageInfo.hasNextPage;
      } while (hasNextPage);
      return existingHandlers;
    }
    function buildCheckQuery2(endCursor) {
      return (0, query_template_1.queryTemplate)(exports.TEMPLATE_GET_HANDLERS, {
        END_CURSOR: JSON.stringify(endCursor)
      });
    }
    function buildHandlerFromNode2(edge) {
      let endpoint = edge.node.endpoint, handler;
      switch (endpoint.__typename) {
        case "WebhookHttpEndpoint":
          handler = {
            deliveryMethod: types_2.DeliveryMethod.Http,
            callbackUrl: endpoint.callbackUrl,
            // This is a dummy for now because we don't really care about it
            callback: async () => {
            }
          };
          break;
        case "WebhookEventBridgeEndpoint":
          handler = {
            deliveryMethod: types_2.DeliveryMethod.EventBridge,
            arn: endpoint.arn
          };
          break;
        case "WebhookPubSubEndpoint":
          handler = {
            deliveryMethod: types_2.DeliveryMethod.PubSub,
            pubSubProject: endpoint.pubSubProject,
            pubSubTopic: endpoint.pubSubTopic
          };
          break;
      }
      return handler.id = edge.node.id, handler.includeFields = edge.node.includeFields, handler.metafieldNamespaces = edge.node.metafieldNamespaces, handler.includeFields?.sort(), handler.metafieldNamespaces?.sort(), handler;
    }
    async function registerTopic2({ config, session, topic, existingHandlers, handlers }) {
      let registerResults = [], { toCreate, toUpdate, toDelete } = categorizeHandlers2(config, existingHandlers, handlers), GraphqlClient2 = (0, admin_1.graphqlClientClass)({ config }), client = new GraphqlClient2({ session }), operation = types_2.WebhookOperation.Create;
      return registerResults = registerResults.concat(await runMutations2({ config, client, topic, operation, handlers: toCreate })), operation = types_2.WebhookOperation.Update, registerResults = registerResults.concat(await runMutations2({ config, client, topic, operation, handlers: toUpdate })), operation = types_2.WebhookOperation.Delete, registerResults = registerResults.concat(await runMutations2({ config, client, topic, operation, handlers: toDelete })), registerResults;
    }
    function categorizeHandlers2(config, existingHandlers, handlers) {
      let handlersByKey = handlers.reduce((acc, value) => (acc[(0, registry_1.handlerIdentifier)(config, value)] = value, acc), {}), existingHandlersByKey = existingHandlers.reduce((acc, value) => (acc[(0, registry_1.handlerIdentifier)(config, value)] = value, acc), {}), toCreate = { ...handlersByKey }, toUpdate = {}, toDelete = {};
      for (let existingKey in existingHandlersByKey) {
        if (!Object.prototype.hasOwnProperty.call(existingHandlersByKey, existingKey))
          continue;
        let existingHandler = existingHandlersByKey[existingKey], handler = handlersByKey[existingKey];
        existingKey in handlersByKey ? (delete toCreate[existingKey], areHandlerFieldsEqual2(existingHandler, handler) || (toUpdate[existingKey] = handler, toUpdate[existingKey].id = existingHandler.id)) : toDelete[existingKey] = existingHandler;
      }
      return {
        toCreate: Object.values(toCreate),
        toUpdate: Object.values(toUpdate),
        toDelete: Object.values(toDelete)
      };
    }
    function areHandlerFieldsEqual2(arr1, arr2) {
      let includeFieldsEqual = arraysEqual2(arr1.includeFields || [], arr2.includeFields || []), metafieldNamespacesEqual = arraysEqual2(arr1.metafieldNamespaces || [], arr2.metafieldNamespaces || []);
      return includeFieldsEqual && metafieldNamespacesEqual;
    }
    function arraysEqual2(arr1, arr2) {
      if (arr1.length !== arr2.length)
        return !1;
      for (let i = 0; i < arr1.length; i++)
        if (arr1[i] !== arr2[i])
          return !1;
      return !0;
    }
    async function runMutations2({ config, client, topic, handlers, operation }) {
      let registerResults = [];
      for (let handler of handlers)
        registerResults.push(await runMutation2({ config, client, topic, handler, operation }));
      return registerResults;
    }
    async function runMutation2({ config, client, topic, handler, operation }) {
      let registerResult;
      (0, logger_1.logger)(config).debug("Running webhook mutation", { topic, operation });
      try {
        let query = buildMutation2(config, topic, handler, operation), result = await client.request(query);
        registerResult = {
          deliveryMethod: handler.deliveryMethod,
          success: isSuccess2(result, handler, operation),
          result,
          operation
        };
      } catch (error) {
        if (error instanceof error_1.InvalidDeliveryMethodError)
          registerResult = {
            deliveryMethod: handler.deliveryMethod,
            success: !1,
            result: { message: error.message },
            operation
          };
        else
          throw error;
      }
      return registerResult;
    }
    function buildMutation2(config, topic, handler, operation) {
      let params = {}, identifier;
      handler.id ? identifier = `id: "${handler.id}"` : identifier = `topic: ${topic}`;
      let mutationArguments = {
        MUTATION_NAME: getMutationName2(handler, operation),
        IDENTIFIER: identifier,
        MUTATION_PARAMS: ""
      };
      if (operation !== types_2.WebhookOperation.Delete) {
        switch (handler.deliveryMethod) {
          case types_2.DeliveryMethod.Http:
            params.callbackUrl = `"${(0, registry_1.addHostToCallbackUrl)(config, handler.callbackUrl)}"`;
            break;
          case types_2.DeliveryMethod.EventBridge:
            params.arn = `"${handler.arn}"`;
            break;
          case types_2.DeliveryMethod.PubSub:
            params.pubSubProject = `"${handler.pubSubProject}"`, params.pubSubTopic = `"${handler.pubSubTopic}"`;
            break;
          default:
            throw new error_1.InvalidDeliveryMethodError(`Unrecognized delivery method '${handler.deliveryMethod}'`);
        }
        if (handler.includeFields && (params.includeFields = JSON.stringify(handler.includeFields)), handler.metafieldNamespaces && (params.metafieldNamespaces = JSON.stringify(handler.metafieldNamespaces)), handler.subTopic) {
          let subTopicString = `subTopic: "${handler.subTopic}",`;
          mutationArguments.MUTATION_PARAMS = subTopicString;
        }
        let paramsString = Object.entries(params).map(([key, value]) => `${key}: ${value}`).join(", ");
        mutationArguments.MUTATION_PARAMS += `webhookSubscription: {${paramsString}}`;
      }
      return (0, query_template_1.queryTemplate)(exports.TEMPLATE_MUTATION, mutationArguments);
    }
    function getMutationName2(handler, operation) {
      switch (operation) {
        case types_2.WebhookOperation.Create:
          return `${getEndpoint2(handler)}Create`;
        case types_2.WebhookOperation.Update:
          return `${getEndpoint2(handler)}Update`;
        case types_2.WebhookOperation.Delete:
          return "webhookSubscriptionDelete";
        default:
          throw new error_1.ShopifyError(`Unrecognized operation '${operation}'`);
      }
    }
    function getEndpoint2(handler) {
      switch (handler.deliveryMethod) {
        case types_2.DeliveryMethod.Http:
          return "webhookSubscription";
        case types_2.DeliveryMethod.EventBridge:
          return "eventBridgeWebhookSubscription";
        case types_2.DeliveryMethod.PubSub:
          return "pubSubWebhookSubscription";
        default:
          throw new error_1.ShopifyError(`Unrecognized delivery method '${handler.deliveryMethod}'`);
      }
    }
    function isSuccess2(result, handler, operation) {
      let mutationName = getMutationName2(handler, operation);
      return Boolean(result.data && result.data[mutationName] && result.data[mutationName].userErrors.length === 0);
    }
    exports.TEMPLATE_GET_HANDLERS = `query shopifyApiReadWebhookSubscriptions {
  webhookSubscriptions(
    first: 250,
    after: {{END_CURSOR}},
  ) {
    edges {
      node {
        id
        topic
        includeFields
        metafieldNamespaces
        endpoint {
          __typename
          ... on WebhookHttpEndpoint {
            callbackUrl
          }
          ... on WebhookEventBridgeEndpoint {
            arn
          }
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}`;
    exports.TEMPLATE_MUTATION = `
  mutation shopifyApiCreateWebhookSubscription {
    {{MUTATION_NAME}}(
      {{IDENTIFIER}},
      {{MUTATION_PARAMS}}
    ) {
      userErrors {
        field
        message
      }
    }
  }
`;
  }
});

// node_modules/@shopify/shopify-api/lib/webhooks/validate.js
var require_validate = __commonJS({
  "node_modules/@shopify/shopify-api/lib/webhooks/validate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.validateFactory = void 0;
    var logger_1 = require_logger(), hmac_validator_1 = require_hmac_validator(), types_1 = require_types5(), http_1 = require_http(), types_2 = require_types(), types_3 = require_types10(), registry_1 = require_registry(), OPTIONAL_HANDLER_PROPERTIES2 = {
      subTopic: types_2.ShopifyHeader.SubTopic
    }, HANDLER_PROPERTIES2 = {
      apiVersion: types_2.ShopifyHeader.ApiVersion,
      domain: types_2.ShopifyHeader.Domain,
      hmac: types_2.ShopifyHeader.Hmac,
      topic: types_2.ShopifyHeader.Topic,
      webhookId: types_2.ShopifyHeader.WebhookId,
      ...OPTIONAL_HANDLER_PROPERTIES2
    };
    function validateFactory4(config) {
      return async function({ rawBody, ...adapterArgs }) {
        let request2 = await (0, http_1.abstractConvertRequest)(adapterArgs), validHmacResult = await (0, hmac_validator_1.validateHmacFromRequestFactory)(config)({
          type: types_1.HmacValidationType.Webhook,
          rawBody,
          ...adapterArgs
        });
        return validHmacResult.valid ? checkWebhookHeaders2(request2.headers) : validHmacResult.reason === types_1.ValidationErrorReason.MissingHmac ? {
          valid: !1,
          reason: types_3.WebhookValidationErrorReason.MissingHeaders,
          missingHeaders: [types_2.ShopifyHeader.Hmac]
        } : (validHmacResult.reason === types_1.ValidationErrorReason.InvalidHmac && await (0, logger_1.logger)(config).debug("Webhook HMAC validation failed. Please note that events manually triggered from a store's Notifications settings will fail this validation. To test this, please use the CLI or trigger the actual event in a development store."), validHmacResult);
      };
    }
    exports.validateFactory = validateFactory4;
    function checkWebhookHeaders2(headers) {
      let missingHeaders = [], headerValues = Object.entries(HANDLER_PROPERTIES2).reduce((acc, [property, headerName]) => {
        let headerValue = (0, http_1.getHeader)(headers, headerName);
        return headerValue ? acc[property] = headerValue : property in OPTIONAL_HANDLER_PROPERTIES2 || missingHeaders.push(headerName), acc;
      }, {});
      return missingHeaders.length ? {
        valid: !1,
        reason: types_3.WebhookValidationErrorReason.MissingHeaders,
        missingHeaders
      } : {
        valid: !0,
        ...headerValues,
        ...headerValues.subTopic ? { subTopic: headerValues.subTopic } : {},
        topic: (0, registry_1.topicForStorage)(headerValues.topic)
      };
    }
  }
});

// node_modules/@shopify/shopify-api/lib/webhooks/process.js
var require_process = __commonJS({
  "node_modules/@shopify/shopify-api/lib/webhooks/process.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.process = void 0;
    var tslib_1 = require("tslib"), network_1 = require("@shopify/network"), http_1 = require_http(), ShopifyErrors = tslib_1.__importStar(require_error()), logger_1 = require_logger(), types_1 = require_types10(), validate_1 = require_validate(), STATUS_TEXT_LOOKUP2 = {
      [network_1.StatusCode.Ok]: "OK",
      [network_1.StatusCode.BadRequest]: "Bad Request",
      [network_1.StatusCode.Unauthorized]: "Unauthorized",
      [network_1.StatusCode.NotFound]: "Not Found",
      [network_1.StatusCode.InternalServerError]: "Internal Server Error"
    };
    function process3(config, webhookRegistry) {
      return async function({ context, rawBody, ...adapterArgs }) {
        let response = {
          statusCode: network_1.StatusCode.Ok,
          statusText: STATUS_TEXT_LOOKUP2[network_1.StatusCode.Ok],
          headers: {}
        };
        await (0, logger_1.logger)(config).info("Receiving webhook request");
        let webhookCheck = await (0, validate_1.validateFactory)(config)({
          rawBody,
          ...adapterArgs
        }), errorMessage = "Unknown error while handling webhook";
        if (webhookCheck.valid) {
          let handlerResult = await callWebhookHandlers2(config, webhookRegistry, webhookCheck, rawBody, context);
          response.statusCode = handlerResult.statusCode, (0, http_1.isOK)(response) || (errorMessage = handlerResult.errorMessage || errorMessage);
        } else {
          let errorResult = await handleInvalidWebhook2(config, webhookCheck);
          response.statusCode = errorResult.statusCode, response.statusText = STATUS_TEXT_LOOKUP2[response.statusCode], errorMessage = errorResult.errorMessage;
        }
        let returnResponse = await (0, http_1.abstractConvertResponse)(response, adapterArgs);
        if (!(0, http_1.isOK)(response))
          throw new ShopifyErrors.InvalidWebhookError({
            message: errorMessage,
            response: returnResponse
          });
        return Promise.resolve(returnResponse);
      };
    }
    exports.process = process3;
    async function callWebhookHandlers2(config, webhookRegistry, webhookCheck, rawBody, context) {
      let log2 = (0, logger_1.logger)(config), { hmac: _hmac, valid: _valid, ...loggingContext } = webhookCheck;
      await log2.debug("Webhook request is valid, looking for HTTP handlers to call", loggingContext);
      let handlers = webhookRegistry[webhookCheck.topic] || [], response = { statusCode: network_1.StatusCode.Ok }, found = !1;
      for (let handler of handlers)
        if (handler.deliveryMethod === types_1.DeliveryMethod.Http) {
          if (!handler.callback)
            throw response.statusCode = network_1.StatusCode.InternalServerError, response.errorMessage = "Cannot call webhooks.process with a webhook handler that doesn't have a callback", new ShopifyErrors.MissingWebhookCallbackError({
              message: response.errorMessage,
              response
            });
          found = !0, await log2.debug("Found HTTP handler, triggering it", loggingContext);
          try {
            await handler.callback(webhookCheck.topic, webhookCheck.domain, rawBody, webhookCheck.webhookId, webhookCheck.apiVersion, ...webhookCheck?.subTopic ? webhookCheck.subTopic : "", context);
          } catch (error) {
            response.statusCode = network_1.StatusCode.InternalServerError, response.errorMessage = error.message;
          }
        }
      return found || (await log2.debug("No HTTP handlers found", loggingContext), response.statusCode = network_1.StatusCode.NotFound, response.errorMessage = `No HTTP webhooks registered for topic ${webhookCheck.topic}`), response;
    }
    async function handleInvalidWebhook2(config, webhookCheck) {
      let response = {
        statusCode: network_1.StatusCode.InternalServerError,
        errorMessage: "Unknown error while handling webhook"
      };
      switch (webhookCheck.reason) {
        case types_1.WebhookValidationErrorReason.MissingHeaders:
          response.statusCode = network_1.StatusCode.BadRequest, response.errorMessage = `Missing one or more of the required HTTP headers to process webhooks: [${webhookCheck.missingHeaders.join(", ")}]`;
          break;
        case types_1.WebhookValidationErrorReason.MissingBody:
          response.statusCode = network_1.StatusCode.BadRequest, response.errorMessage = "No body was received when processing webhook";
          break;
        case types_1.WebhookValidationErrorReason.InvalidHmac:
          response.statusCode = network_1.StatusCode.Unauthorized, response.errorMessage = "Could not validate request HMAC";
          break;
      }
      return await (0, logger_1.logger)(config).debug(`Webhook request is invalid, returning ${response.statusCode}: ${response.errorMessage}`), response;
    }
  }
});

// node_modules/@shopify/shopify-api/lib/webhooks/index.js
var require_webhooks = __commonJS({
  "node_modules/@shopify/shopify-api/lib/webhooks/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.shopifyWebhooks = void 0;
    var registry_1 = require_registry(), register_1 = require_register(), process_1 = require_process(), validate_1 = require_validate();
    function shopifyWebhooks2(config) {
      let webhookRegistry = (0, registry_1.registry)();
      return {
        addHandlers: (0, registry_1.addHandlers)(config, webhookRegistry),
        getTopicsAdded: (0, registry_1.getTopicsAdded)(webhookRegistry),
        getHandlers: (0, registry_1.getHandlers)(webhookRegistry),
        register: (0, register_1.register)(config, webhookRegistry),
        process: (0, process_1.process)(config, webhookRegistry),
        validate: (0, validate_1.validateFactory)(config)
      };
    }
    exports.shopifyWebhooks = shopifyWebhooks2;
  }
});

// node_modules/@shopify/shopify-api/lib/billing/check.js
var require_check = __commonJS({
  "node_modules/@shopify/shopify-api/lib/billing/check.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.check = void 0;
    var admin_1 = require_admin(), error_1 = require_error();
    function check2(config) {
      return async function({ session, plans, isTest = !0, returnObject = !1 }) {
        if (!config.billing)
          throw new error_1.BillingError({
            message: "Attempted to look for purchases without billing configs",
            errorData: []
          });
        let GraphqlClient2 = (0, admin_1.graphqlClientClass)({ config }), client = new GraphqlClient2({ session }), plansArray = Array.isArray(plans) ? plans : [plans];
        return assessPayments2({
          plans: plansArray,
          client,
          isTest,
          returnObject
        });
      };
    }
    exports.check = check2;
    async function assessPayments2({ plans, client, isTest, returnObject }) {
      let returnValue = returnObject ? {
        hasActivePayment: !1,
        oneTimePurchases: [],
        appSubscriptions: []
      } : !1, installation, endCursor = null;
      do {
        if (installation = (await client.request(HAS_PAYMENTS_QUERY2, { variables: { endCursor } })).data?.currentAppInstallation, returnObject)
          installation.activeSubscriptions.map((subscription) => {
            subscriptionMeetsCriteria2({ plans, isTest, subscription }) && (returnValue.hasActivePayment = !0, returnValue.appSubscriptions.push(subscription));
          }), installation.oneTimePurchases.edges.map((purchase) => {
            purchaseMeetsCriteria2({ plans, isTest, purchase: purchase.node }) && (returnValue.hasActivePayment = !0, returnValue.oneTimePurchases.push(purchase.node));
          });
        else {
          let params = { plans, isTest, installation };
          if (hasSubscription2(params) || hasOneTimePayment2(params))
            return !0;
        }
        endCursor = installation.oneTimePurchases.pageInfo.endCursor;
      } while (installation?.oneTimePurchases.pageInfo.hasNextPage);
      return returnValue;
    }
    function subscriptionMeetsCriteria2({ plans, isTest, subscription }) {
      return plans.includes(subscription.name) && (isTest || !subscription.test);
    }
    function purchaseMeetsCriteria2({ plans, isTest, purchase }) {
      return plans.includes(purchase.name) && (isTest || !purchase.test) && purchase.status === "ACTIVE";
    }
    function hasSubscription2({ plans, isTest, installation }) {
      return installation.activeSubscriptions.some((subscription) => subscriptionMeetsCriteria2({ plans, isTest, subscription }));
    }
    function hasOneTimePayment2({ plans, isTest, installation }) {
      return installation.oneTimePurchases.edges.some((purchase) => purchaseMeetsCriteria2({ plans, isTest, purchase: purchase.node }));
    }
    var HAS_PAYMENTS_QUERY2 = `
  query appSubscription($endCursor: String) {
    currentAppInstallation {
      activeSubscriptions {
        id
        name
        test
        lineItems {
          id
          plan {
            pricingDetails {
              ... on AppRecurringPricing {
                price {
                  amount
                  currencyCode
                }
                interval
                discount {
                  durationLimitInIntervals
                  remainingDurationInIntervals
                  priceAfterDiscount {
                    amount
                  }
                  value {
                    ... on AppSubscriptionDiscountAmount {
                      amount {
                        amount
                        currencyCode
                      }
                    }
                    ... on AppSubscriptionDiscountPercentage {
                      percentage
                    }
                  }
                }
              }
              ... on AppUsagePricing {
                balanceUsed {
                  amount
                  currencyCode
                }
                cappedAmount {
                  amount
                  currencyCode
                }
                terms
              }
            }
          }
        }
      }
      oneTimePurchases(first: 250, sortKey: CREATED_AT, after: $endCursor) {
        edges {
          node {
            id
            name
            test
            status
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;
  }
});

// node_modules/@shopify/shopify-api/lib/billing/request.js
var require_request = __commonJS({
  "node_modules/@shopify/shopify-api/lib/billing/request.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.request = void 0;
    var types_1 = require_types(), error_1 = require_error(), get_embedded_app_url_1 = require_get_embedded_app_url(), admin_1 = require_admin(), crypto_1 = require_crypto2(), types_2 = require_types3();
    function request2(config) {
      return async function({ session, plan, isTest = !0, returnUrl: returnUrlParam, returnObject = !1, ...overrides }) {
        if (!config.billing || !config.billing[plan])
          throw new error_1.BillingError({
            message: `Could not find plan ${plan} in billing settings`,
            errorData: []
          });
        let billingConfig = {
          ...config.billing[plan]
        }, filteredOverrides = Object.fromEntries(Object.entries(overrides).filter(([_key, value]) => value !== void 0)), cleanShopName = session.shop.replace(".myshopify.com", ""), embeddedAppUrl = (0, get_embedded_app_url_1.buildEmbeddedAppUrl)(config)((0, crypto_1.hashString)(`admin.shopify.com/store/${cleanShopName}`, types_2.HashFormat.Base64)), appUrl = `${config.hostScheme}://${config.hostName}?shop=${session.shop}`, returnUrl = returnUrlParam || (config.isEmbeddedApp ? embeddedAppUrl : appUrl), GraphqlClient2 = (0, admin_1.graphqlClientClass)({ config }), client = new GraphqlClient2({ session });
        function isLineItemPlan(billingConfig2) {
          return "lineItems" in billingConfig2;
        }
        function isOneTimePlan(billingConfig2) {
          return billingConfig2.interval === types_1.BillingInterval.OneTime;
        }
        let data;
        if (isLineItemPlan(billingConfig)) {
          let mergedBillingConfigs = mergeBillingConfigs2(billingConfig, filteredOverrides);
          data = (await requestSubscriptionPayment2({
            billingConfig: mergedBillingConfigs,
            plan,
            client,
            returnUrl,
            isTest
          })).appSubscriptionCreate;
        } else if (isOneTimePlan(billingConfig))
          data = (await requestSinglePayment2({
            billingConfig: { ...billingConfig, ...filteredOverrides },
            plan,
            client,
            returnUrl,
            isTest
          })).appPurchaseOneTimeCreate;
        else
          switch (billingConfig.interval) {
            case types_1.BillingInterval.Usage: {
              data = (await requestUsagePayment2({
                billingConfig: { ...billingConfig, ...filteredOverrides },
                plan,
                client,
                returnUrl,
                isTest
              })).appSubscriptionCreate;
              break;
            }
            default:
              data = (await requestRecurringPayment2({
                billingConfig: { ...billingConfig, ...filteredOverrides },
                plan,
                client,
                returnUrl,
                isTest
              })).appSubscriptionCreate;
          }
        if (data.userErrors?.length)
          throw new error_1.BillingError({
            message: "Error while billing the store",
            errorData: data.userErrors
          });
        return returnObject ? data : data.confirmationUrl;
      };
    }
    exports.request = request2;
    async function requestSubscriptionPayment2({ billingConfig, plan, client, returnUrl, isTest }) {
      let lineItems = billingConfig.lineItems.map((item) => {
        if (item.interval === types_1.BillingInterval.Every30Days || item.interval === types_1.BillingInterval.Annual) {
          let appRecurringPricingDetails = {
            interval: item.interval,
            price: {
              amount: item.amount,
              currencyCode: item.currencyCode
            }
          };
          return item.discount && (appRecurringPricingDetails.discount = {
            durationLimitInIntervals: item.discount.durationLimitInIntervals,
            value: {
              amount: item.discount.value.amount,
              percentage: item.discount.value.percentage
            }
          }), {
            plan: {
              appRecurringPricingDetails
            }
          };
        } else {
          if (item.interval === types_1.BillingInterval.Usage)
            return {
              plan: {
                appUsagePricingDetails: {
                  terms: item.terms,
                  cappedAmount: {
                    amount: item.amount,
                    currencyCode: item.currencyCode
                  }
                }
              }
            };
          throw new error_1.BillingError({
            message: "Invalid interval provided",
            errorData: [item]
          });
        }
      }), mutationResponse = await client.request(RECURRING_PURCHASE_MUTATION2, {
        variables: {
          name: plan,
          trialDays: billingConfig.trialDays,
          replacementBehavior: billingConfig.replacementBehavior,
          returnUrl,
          test: isTest,
          lineItems
        }
      });
      if (mutationResponse.errors)
        throw new error_1.BillingError({
          message: "Error while billing the store",
          errorData: mutationResponse.errors
        });
      return mutationResponse.data;
    }
    async function requestRecurringPayment2({ billingConfig, plan, client, returnUrl, isTest }) {
      let mutationResponse = await client.request(RECURRING_PURCHASE_MUTATION2, {
        variables: {
          name: plan,
          trialDays: billingConfig.trialDays,
          replacementBehavior: billingConfig.replacementBehavior,
          returnUrl,
          test: isTest,
          lineItems: [
            {
              plan: {
                appRecurringPricingDetails: {
                  interval: billingConfig.interval,
                  price: {
                    amount: billingConfig.amount,
                    currencyCode: billingConfig.currencyCode
                  },
                  discount: {
                    durationLimitInIntervals: billingConfig.discount?.durationLimitInIntervals,
                    value: {
                      amount: billingConfig.discount?.value?.amount,
                      percentage: billingConfig.discount?.value?.percentage
                    }
                  }
                }
              }
            }
          ]
        }
      });
      if (mutationResponse.errors)
        throw new error_1.BillingError({
          message: "Error while billing the store",
          errorData: mutationResponse.errors
        });
      return mutationResponse.data;
    }
    async function requestUsagePayment2({ billingConfig, plan, client, returnUrl, isTest }) {
      let mutationResponse = await client.request(RECURRING_PURCHASE_MUTATION2, {
        variables: {
          name: plan,
          returnUrl,
          test: isTest,
          trialDays: billingConfig.trialDays,
          replacementBehavior: billingConfig.replacementBehavior,
          lineItems: [
            {
              plan: {
                appUsagePricingDetails: {
                  terms: billingConfig.usageTerms,
                  cappedAmount: {
                    amount: billingConfig.amount,
                    currencyCode: billingConfig.currencyCode
                  }
                }
              }
            }
          ]
        }
      });
      if (mutationResponse.errors)
        throw new error_1.BillingError({
          message: `Error while billing the store:: ${mutationResponse.errors}`,
          errorData: mutationResponse.errors
        });
      return mutationResponse.data;
    }
    async function requestSinglePayment2({ billingConfig, plan, client, returnUrl, isTest }) {
      let mutationResponse = await client.request(ONE_TIME_PURCHASE_MUTATION2, {
        variables: {
          name: plan,
          returnUrl,
          test: isTest,
          price: {
            amount: billingConfig.amount,
            currencyCode: billingConfig.currencyCode
          }
        }
      });
      if (mutationResponse.errors)
        throw new error_1.BillingError({
          message: "Error while billing the store",
          errorData: mutationResponse.errors
        });
      return mutationResponse.data;
    }
    function mergeBillingConfigs2(billingConfig, overrides) {
      let mergedConfig = { ...billingConfig, ...overrides }, mergedLineItems = [];
      if (billingConfig.lineItems && overrides.lineItems) {
        for (let i of billingConfig.lineItems) {
          let found = !1;
          for (let j of overrides.lineItems)
            if (i.interval === j.interval) {
              mergedLineItems.push({ ...i, ...j }), found = !0;
              break;
            }
          found || mergedLineItems.push(i);
        }
        mergedConfig.lineItems = mergedLineItems;
      }
      return mergedConfig;
    }
    var RECURRING_PURCHASE_MUTATION2 = `
  mutation test(
    $name: String!
    $lineItems: [AppSubscriptionLineItemInput!]!
    $returnUrl: URL!
    $test: Boolean
    $trialDays: Int
    $replacementBehavior: AppSubscriptionReplacementBehavior
  ) {
    appSubscriptionCreate(
      name: $name
      lineItems: $lineItems
      returnUrl: $returnUrl
      test: $test
      trialDays: $trialDays
      replacementBehavior: $replacementBehavior
    ) {
      appSubscription {
        id
        name
        test
      }
      confirmationUrl
      userErrors {
        field
        message
      }
    }
  }
`, ONE_TIME_PURCHASE_MUTATION2 = `
  mutation test(
    $name: String!
    $price: MoneyInput!
    $returnUrl: URL!
    $test: Boolean
  ) {
    appPurchaseOneTimeCreate(
      name: $name
      price: $price
      returnUrl: $returnUrl
      test: $test
    ) {
      appPurchaseOneTime {
        id
        name
        test
      }
      confirmationUrl
      userErrors {
        field
        message
      }
    }
  }
`;
  }
});

// node_modules/@shopify/shopify-api/lib/billing/cancel.js
var require_cancel = __commonJS({
  "node_modules/@shopify/shopify-api/lib/billing/cancel.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.cancel = void 0;
    var admin_1 = require_admin(), error_1 = require_error(), CANCEL_MUTATION2 = `
  mutation appSubscriptionCancel($id: ID!, $prorate: Boolean) {
    appSubscriptionCancel(id: $id, prorate: $prorate) {
      appSubscription {
        id
        name
        test
      }
      userErrors {
        field
        message
      }
    }
  }
`;
    function cancel2(config) {
      return async function(subscriptionInfo) {
        let { session, subscriptionId, prorate = !0 } = subscriptionInfo, GraphqlClient2 = (0, admin_1.graphqlClientClass)({ config }), client = new GraphqlClient2({ session });
        try {
          let response = await client.request(CANCEL_MUTATION2, {
            variables: { id: subscriptionId, prorate }
          });
          if (response.data?.appSubscriptionCancel?.userErrors.length)
            throw new error_1.BillingError({
              message: "Error while canceling a subscription",
              errorData: response.data?.appSubscriptionCancel?.userErrors
            });
          return response.data?.appSubscriptionCancel?.appSubscription;
        } catch (error) {
          throw error instanceof error_1.GraphqlQueryError ? new error_1.BillingError({
            message: error.message,
            errorData: error.response?.errors
          }) : error;
        }
      };
    }
    exports.cancel = cancel2;
  }
});

// node_modules/@shopify/shopify-api/lib/billing/subscriptions.js
var require_subscriptions = __commonJS({
  "node_modules/@shopify/shopify-api/lib/billing/subscriptions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.subscriptions = void 0;
    var error_1 = require_error(), admin_1 = require_admin(), SUBSCRIPTION_QUERY2 = `
query appSubscription {
  currentAppInstallation {
    activeSubscriptions {
      id
      name
      test
      lineItems {
        id
        plan {
          pricingDetails {
            ... on AppRecurringPricing {
              price {
                amount
                currencyCode
              }
              interval
              discount {
                durationLimitInIntervals
                remainingDurationInIntervals
                priceAfterDiscount {
                  amount
                }
                value {
                  ... on AppSubscriptionDiscountAmount {
                    amount {
                      amount
                      currencyCode
                    }
                  }
                  ... on AppSubscriptionDiscountPercentage {
                    percentage
                  }
                }
              }
            }
            ... on AppUsagePricing {
              balanceUsed {
                amount
                currencyCode
              }
              cappedAmount {
                amount
                currencyCode
              }
              terms
            }
          }
        }
      }
    }
  }
}
`;
    function subscriptions2(config) {
      return async function({ session }) {
        if (!config.billing)
          throw new error_1.BillingError({
            message: "Attempted to look for purchases without billing configs",
            errorData: []
          });
        let GraphqlClient2 = (0, admin_1.graphqlClientClass)({ config });
        return (await new GraphqlClient2({ session }).request(SUBSCRIPTION_QUERY2)).data?.currentAppInstallation;
      };
    }
    exports.subscriptions = subscriptions2;
  }
});

// node_modules/@shopify/shopify-api/lib/billing/index.js
var require_billing = __commonJS({
  "node_modules/@shopify/shopify-api/lib/billing/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.shopifyBilling = void 0;
    var check_1 = require_check(), request_1 = require_request(), cancel_1 = require_cancel(), subscriptions_1 = require_subscriptions();
    function shopifyBilling2(config) {
      return {
        check: (0, check_1.check)(config),
        request: (0, request_1.request)(config),
        cancel: (0, cancel_1.cancel)(config),
        subscriptions: (0, subscriptions_1.subscriptions)(config)
      };
    }
    exports.shopifyBilling = shopifyBilling2;
  }
});

// node_modules/@shopify/shopify-api/lib/flow/validate.js
var require_validate2 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/flow/validate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.validateFactory = void 0;
    var types_1 = require_types5(), hmac_validator_1 = require_hmac_validator();
    function validateFactory4(config) {
      return async function({ rawBody, ...adapterArgs }) {
        return (0, hmac_validator_1.validateHmacFromRequestFactory)(config)({
          type: types_1.HmacValidationType.Flow,
          rawBody,
          ...adapterArgs
        });
      };
    }
    exports.validateFactory = validateFactory4;
  }
});

// node_modules/@shopify/shopify-api/lib/flow/index.js
var require_flow = __commonJS({
  "node_modules/@shopify/shopify-api/lib/flow/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.shopifyFlow = void 0;
    var validate_1 = require_validate2();
    function shopifyFlow2(config) {
      return {
        validate: (0, validate_1.validateFactory)(config)
      };
    }
    exports.shopifyFlow = shopifyFlow2;
  }
});

// node_modules/@shopify/shopify-api/lib/fulfillment-service/validate.js
var require_validate3 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/fulfillment-service/validate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.validateFactory = void 0;
    var hmac_validator_1 = require_hmac_validator(), types_1 = require_types5();
    function validateFactory4(config) {
      return async function({ rawBody, ...adapterArgs }) {
        return (0, hmac_validator_1.validateHmacFromRequestFactory)(config)({
          type: types_1.HmacValidationType.FulfillmentService,
          rawBody,
          ...adapterArgs
        });
      };
    }
    exports.validateFactory = validateFactory4;
  }
});

// node_modules/@shopify/shopify-api/lib/fulfillment-service/index.js
var require_fulfillment_service = __commonJS({
  "node_modules/@shopify/shopify-api/lib/fulfillment-service/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.fulfillmentService = void 0;
    var validate_1 = require_validate3();
    function fulfillmentService2(config) {
      return {
        validate: (0, validate_1.validateFactory)(config)
      };
    }
    exports.fulfillmentService = fulfillmentService2;
  }
});

// node_modules/@shopify/shopify-api/lib/session/classes.js
var require_classes = __commonJS({
  "node_modules/@shopify/shopify-api/lib/session/classes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.Session = void 0;
    var session_1 = require_session();
    Object.defineProperty(exports, "Session", { enumerable: !0, get: function() {
      return session_1.Session;
    } });
  }
});

// node_modules/@shopify/shopify-api/rest/types.js
var require_types11 = __commonJS({
  "node_modules/@shopify/shopify-api/rest/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
  }
});

// node_modules/@shopify/shopify-api/lib/base-types.js
var require_base_types = __commonJS({
  "node_modules/@shopify/shopify-api/lib/base-types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
  }
});

// node_modules/@shopify/shopify-api/lib/auth/types.js
var require_types12 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.RequestedTokenType = void 0;
    var tslib_1 = require("tslib");
    tslib_1.__exportStar(require_types9(), exports);
    var token_exchange_1 = require_token_exchange();
    Object.defineProperty(exports, "RequestedTokenType", { enumerable: !0, get: function() {
      return token_exchange_1.RequestedTokenType;
    } });
  }
});

// node_modules/@shopify/shopify-api/lib/billing/types.js
var require_types13 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/billing/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
  }
});

// node_modules/@shopify/shopify-api/lib/session/types.js
var require_types14 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/session/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
  }
});

// node_modules/@shopify/shopify-api/lib/index.js
var require_lib = __commonJS({
  "node_modules/@shopify/shopify-api/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.shopifyApi = void 0;
    var tslib_1 = require("tslib"), load_rest_resources_1 = require_load_rest_resources(), platform_1 = require_platform(), flags_1 = require_flags(), config_1 = require_config(), clients_1 = require_clients(), auth_1 = require_auth(), session_1 = require_session2(), utils_1 = require_utils3(), webhooks_1 = require_webhooks(), billing_1 = require_billing(), logger_1 = require_logger(), version_1 = require_version(), client_1 = require_client2(), flow_1 = require_flow(), fulfillment_service_1 = require_fulfillment_service();
    tslib_1.__exportStar(require_error(), exports);
    tslib_1.__exportStar(require_classes(), exports);
    tslib_1.__exportStar(require_types11(), exports);
    tslib_1.__exportStar(require_types(), exports);
    tslib_1.__exportStar(require_base_types(), exports);
    tslib_1.__exportStar(require_types12(), exports);
    tslib_1.__exportStar(require_types13(), exports);
    tslib_1.__exportStar(require_types8(), exports);
    tslib_1.__exportStar(require_types14(), exports);
    tslib_1.__exportStar(require_types10(), exports);
    tslib_1.__exportStar(require_types5(), exports);
    function shopifyApi2({ future: future2, restResources, ...config }) {
      let libConfig = { ...config, future: future2, restResources }, validatedConfig = (0, config_1.validateConfig)(libConfig), shopify2 = {
        config: validatedConfig,
        clients: (0, clients_1.clientClasses)(validatedConfig),
        auth: (0, auth_1.shopifyAuth)(validatedConfig),
        session: (0, session_1.shopifySession)(validatedConfig),
        utils: (0, utils_1.shopifyUtils)(validatedConfig),
        webhooks: (0, webhooks_1.shopifyWebhooks)(validatedConfig),
        billing: (0, billing_1.shopifyBilling)(validatedConfig),
        flow: (0, flow_1.shopifyFlow)(validatedConfig),
        fulfillmentService: (0, fulfillment_service_1.fulfillmentService)(validatedConfig),
        logger: (0, logger_1.logger)(validatedConfig),
        rest: {}
      };
      return restResources && (shopify2.rest = (0, load_rest_resources_1.loadRestResources)({
        resources: restResources,
        config: validatedConfig,
        RestClient: (0, client_1.restClientClass)({ config: validatedConfig })
      })), shopify2.logger.info(`version ${version_1.SHOPIFY_API_LIBRARY_VERSION}, environment ${(0, platform_1.abstractRuntimeString)()}`).catch((err) => console.log(err)), (0, flags_1.logDisabledFutureFlags)(validatedConfig, shopify2.logger), shopify2;
    }
    exports.shopifyApi = shopifyApi2;
  }
});

// node_modules/@shopify/shopify-app-session-storage-memory/build/cjs/memory.js
var require_memory = __commonJS({
  "node_modules/@shopify/shopify-app-session-storage-memory/build/cjs/memory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var MemorySessionStorage2 = class {
      constructor() {
        this.sessions = {};
      }
      async storeSession(session) {
        return this.sessions[session.id] = session, !0;
      }
      async loadSession(id) {
        return this.sessions[id] || void 0;
      }
      async deleteSession(id) {
        return this.sessions[id] && delete this.sessions[id], !0;
      }
      async deleteSessions(ids) {
        return ids.forEach((id) => delete this.sessions[id]), !0;
      }
      async findSessionsByShop(shop) {
        return Object.values(this.sessions).filter((session) => session.shop === shop);
      }
    };
    exports.MemorySessionStorage = MemorySessionStorage2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request2, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request2.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-4DHA7ID2.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "tr", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/api.create-product.ts
var api_create_product_exports = {};
__export(api_create_product_exports, {
  action: () => action
});
var import_node = require("@remix-run/node");

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/runtime/crypto/crypto.mjs
var cryptoVar;
try {
  cryptoVar = crypto;
} catch {
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/runtime/crypto/types.mjs
var HashFormat;
(function(HashFormat2) {
  HashFormat2.Base64 = "base64", HashFormat2.Hex = "hex";
})(HashFormat || (HashFormat = {}));

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/runtime/http/index.mjs
function isOK(resp) {
  return resp.statusCode >= 200 && resp.statusCode <= 299;
}
var abstractFetch = () => {
  throw new Error("Missing adapter implementation for 'abstractFetch' - make sure to import the appropriate adapter for your platform");
};
function setAbstractFetchFunc(func) {
  abstractFetch = func;
}
var abstractConvertRequest = () => {
  throw new Error("Missing adapter implementation for 'abstractConvertRequest' - make sure to import the appropriate adapter for your platform");
};
function setAbstractConvertRequestFunc(func) {
  abstractConvertRequest = func;
}
var abstractConvertIncomingResponse = () => Promise.resolve({});
var abstractConvertResponse = () => {
  throw new Error("Missing adapter implementation for 'abstractConvertResponse' - make sure to import the appropriate adapter for your platform");
};
function setAbstractConvertResponseFunc(func) {
  abstractConvertResponse = func;
}
var abstractConvertHeaders = () => {
  throw new Error("Missing adapter implementation for 'abstractConvertHeaders' - make sure to import the appropriate adapter for your platform");
};
function setAbstractConvertHeadersFunc(func) {
  abstractConvertHeaders = func;
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/runtime/platform/runtime-string.mjs
var abstractRuntimeString = () => {
  throw new Error("Missing adapter implementation for 'abstractRuntimeString' - make sure to import the appropriate adapter for your platform");
};
function setAbstractRuntimeString(func) {
  abstractRuntimeString = func;
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/runtime/http/headers.mjs
function canonicalizeHeaderName(hdr) {
  return hdr.replace(/(^|-)(\w+)/g, (_fullMatch, start, letters) => start + letters.slice(0, 1).toUpperCase() + letters.slice(1).toLowerCase());
}
function getHeaders(headers, needle_) {
  let result = [];
  if (!headers)
    return result;
  let needle = canonicalizeHeaderName(needle_);
  for (let [key, values] of Object.entries(headers))
    canonicalizeHeaderName(key) === needle && (Array.isArray(values) ? result.push(...values) : result.push(values));
  return result;
}
function getHeader(headers, needle) {
  if (headers)
    return getHeaders(headers, needle)?.[0];
}
function addHeader(headers, key, value) {
  canonicalizeHeaders(headers);
  let canonKey = canonicalizeHeaderName(key), list = headers[canonKey];
  list ? Array.isArray(list) || (list = [list]) : list = [], headers[canonKey] = list, list.push(value);
}
function canonicalizeValue(value) {
  return typeof value == "number" ? value.toString() : value;
}
function canonicalizeHeaders(hdr) {
  for (let [key, values] of Object.entries(hdr)) {
    let canonKey = canonicalizeHeaderName(key);
    hdr[canonKey] || (hdr[canonKey] = []), Array.isArray(hdr[canonKey]) || (hdr[canonKey] = [canonicalizeValue(hdr[canonKey])]), key !== canonKey && (delete hdr[key], hdr[canonKey].push(...[values].flat().map((value) => canonicalizeValue(value))));
  }
  return hdr;
}
function removeHeader(headers, needle) {
  canonicalizeHeaders(headers);
  let canonKey = canonicalizeHeaderName(needle);
  delete headers[canonKey];
}
function flatHeaders(headers) {
  return Object.entries(headers).flatMap(([header, values]) => Array.isArray(values) ? values.map((value) => [header, value]) : [[header, values]]);
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/adapters/web-api/adapter.mjs
async function webApiConvertRequest(adapterArgs) {
  let request2 = adapterArgs.rawRequest, headers = {};
  for (let [key, value] of request2.headers.entries())
    addHeader(headers, key, value);
  return {
    headers,
    method: request2.method ?? "GET",
    url: new URL(request2.url).toString()
  };
}
async function webApiConvertHeaders(headers, _adapterArgs) {
  let remixHeaders = new Headers();
  return flatHeaders(headers ?? {}).forEach(([key, value]) => remixHeaders.append(key, value)), Promise.resolve(remixHeaders);
}
async function webApiConvertResponse(resp, adapterArgs) {
  return new Response(resp.body, {
    status: resp.statusCode,
    statusText: resp.statusText,
    headers: await webApiConvertHeaders(resp.headers ?? {})
  });
}
function webApiRuntimeString() {
  return "Web API";
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/adapters/web-api/index.mjs
setAbstractFetchFunc(fetch);
setAbstractConvertRequestFunc(webApiConvertRequest);
setAbstractConvertResponseFunc(webApiConvertResponse);
setAbstractConvertHeadersFunc(webApiConvertHeaders);
setAbstractRuntimeString(webApiRuntimeString);

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/error.mjs
var ShopifyError = class extends Error {
  constructor(...args) {
    super(...args), Object.setPrototypeOf(this, new.target.prototype);
  }
}, InvalidHmacError = class extends ShopifyError {
}, InvalidShopError = class extends ShopifyError {
}, InvalidHostError = class extends ShopifyError {
}, InvalidJwtError = class extends ShopifyError {
}, MissingJwtTokenError = class extends ShopifyError {
}, InvalidDeliveryMethodError = class extends ShopifyError {
}, SafeCompareError = class extends ShopifyError {
}, PrivateAppError = class extends ShopifyError {
}, HttpRequestError = class extends ShopifyError {
}, HttpMaxRetriesError = class extends ShopifyError {
}, HttpResponseError = class extends ShopifyError {
  constructor({ message, code, statusText, body, headers }) {
    super(message), this.response = {
      code,
      statusText,
      body,
      headers
    };
  }
}, HttpRetriableError = class extends HttpResponseError {
}, HttpInternalError = class extends HttpRetriableError {
}, HttpThrottlingError = class extends HttpRetriableError {
  constructor({ retryAfter, ...params }) {
    super(params), this.response.retryAfter = retryAfter;
  }
};
var GraphqlQueryError = class extends ShopifyError {
  constructor({ message, response, headers, body }) {
    super(message), this.response = response, this.headers = headers, this.body = body;
  }
}, InvalidOAuthError = class extends ShopifyError {
}, BotActivityDetected = class extends ShopifyError {
}, CookieNotFound = class extends ShopifyError {
}, InvalidSession = class extends ShopifyError {
}, InvalidWebhookError = class extends ShopifyError {
  constructor({ message, response }) {
    super(message), this.response = response;
  }
}, MissingWebhookCallbackError = class extends InvalidWebhookError {
};
var MissingRequiredArgument = class extends ShopifyError {
};
var InvalidRequestError = class extends ShopifyError {
}, BillingError = class extends ShopifyError {
  constructor({ message, errorData }) {
    super(message), this.message = message, this.errorData = errorData;
  }
}, FeatureDeprecatedError = class extends ShopifyError {
};

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/runtime/crypto/utils.mjs
async function createSHA256HMAC(secret, payload, returnFormat = HashFormat.Base64) {
  let cryptoLib = typeof cryptoVar?.webcrypto > "u" ? cryptoVar : cryptoVar.webcrypto, enc = new TextEncoder(), key = await cryptoLib.subtle.importKey("raw", enc.encode(secret), {
    name: "HMAC",
    hash: { name: "SHA-256" }
  }, !1, ["sign"]), signature = await cryptoLib.subtle.sign("HMAC", key, enc.encode(payload));
  return returnFormat === HashFormat.Base64 ? asBase64(signature) : asHex(signature);
}
function asHex(buffer) {
  return [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
var LookupTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function asBase64(buffer) {
  let output = "", input = new Uint8Array(buffer);
  for (let i = 0; i < input.length; ) {
    let byte1 = input[i++], byte2 = input[i++], byte3 = input[i++], enc1 = byte1 >> 2, enc2 = (byte1 & 3) << 4 | byte2 >> 4, enc3 = (byte2 & 15) << 2 | byte3 >> 6, enc4 = byte3 & 63;
    isNaN(byte2) && (enc3 = 64), isNaN(byte3) && (enc4 = 64), output += LookupTable[enc1] + LookupTable[enc2] + LookupTable[enc3] + LookupTable[enc4];
  }
  return output;
}
function hashString(str, returnFormat) {
  let buffer = new TextEncoder().encode(str);
  switch (returnFormat) {
    case HashFormat.Base64:
      return asBase64(buffer);
    case HashFormat.Hex:
      return asHex(buffer);
    default:
      throw new ShopifyError(`Unrecognized hash format '${returnFormat}'`);
  }
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/runtime/http/utils.mjs
function splitN(str, sep, maxNumParts) {
  let parts = str.split(sep), maxParts = Math.min(Math.abs(maxNumParts), parts.length);
  return [...parts.slice(0, maxParts - 1), parts.slice(maxParts - 1).join(sep)];
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/runtime/http/cookies.mjs
var Cookies = class {
  static parseCookies(hdrs) {
    let entries = hdrs.filter((hdr) => hdr.trim().length > 0).map((cookieDef) => {
      let [keyval, ...opts] = cookieDef.split(";"), [name, value] = splitN(keyval, "=", 2).map((value2) => value2.trim());
      return [
        name,
        {
          name,
          value,
          ...Object.fromEntries(opts.map((opt) => splitN(opt, "=", 2).map((value2) => value2.trim())))
        }
      ];
    }), jar = Object.fromEntries(entries);
    for (let cookie of Object.values(jar))
      typeof cookie.expires == "string" && (cookie.expires = new Date(cookie.expires));
    return jar;
  }
  static encodeCookie(data) {
    let result = "";
    return result += `${data.name}=${data.value};`, result += Object.entries(data).filter(([key]) => !["name", "value", "expires"].includes(key)).map(([key, value]) => `${key}=${value}`).join("; "), data.expires && (result += ";", result += `expires=${data.expires.toUTCString()}`), result;
  }
  constructor(request2, response, { keys = [] } = {}) {
    this.response = response, this.receivedCookieJar = {}, this.outgoingCookieJar = {}, this.keys = [], keys && (this.keys = keys);
    let cookieReqHdr = getHeader(request2.headers, "Cookie") ?? "";
    this.receivedCookieJar = Cookies.parseCookies(cookieReqHdr.split(";"));
    let cookieResHdr = getHeaders(response.headers, "Set-Cookie") ?? [];
    this.outgoingCookieJar = Cookies.parseCookies(cookieResHdr);
  }
  toHeaders() {
    return Object.values(this.outgoingCookieJar).map((cookie) => Cookies.encodeCookie(cookie));
  }
  updateHeader() {
    this.response.headers || (this.response.headers = {}), removeHeader(this.response.headers, "Set-Cookie"), this.toHeaders().map((hdr) => addHeader(this.response.headers, "Set-Cookie", hdr));
  }
  get(name) {
    return this.receivedCookieJar[name]?.value;
  }
  deleteCookie(name) {
    this.set(name, "", {
      path: "/",
      expires: /* @__PURE__ */ new Date(0)
    });
  }
  async getAndVerify(name) {
    let value = this.get(name);
    if (value && await this.isSignedCookieValid(name))
      return value;
  }
  get canSign() {
    return this.keys?.length > 0;
  }
  set(name, value, opts = {}) {
    this.outgoingCookieJar[name] = {
      ...opts,
      name,
      value
    }, this.updateHeader();
  }
  async setAndSign(name, value, opts = {}) {
    if (!this.canSign)
      throw Error("No keys provided for signing.");
    this.set(name, value, opts);
    let sigName = `${name}.sig`, signature = await createSHA256HMAC(this.keys[0], value);
    this.set(sigName, signature, opts), this.updateHeader();
  }
  async isSignedCookieValid(cookieName) {
    let signedCookieName = `${cookieName}.sig`;
    if (!this.get(cookieName) || !this.get(signedCookieName))
      return this.deleteCookie(signedCookieName), this.deleteCookie(cookieName), !1;
    let value = this.get(cookieName), signature = this.get(signedCookieName);
    return (await Promise.all(this.keys.map((key) => createSHA256HMAC(key, value)))).includes(signature) ? !0 : (this.deleteCookie(signedCookieName), this.deleteCookie(cookieName), !1);
  }
};

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/logger/index.mjs
var import_compare_versions = require("compare-versions");

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/types.mjs
var LogSeverity;
(function(LogSeverity2) {
  LogSeverity2[LogSeverity2.Error = 0] = "Error", LogSeverity2[LogSeverity2.Warning = 1] = "Warning", LogSeverity2[LogSeverity2.Info = 2] = "Info", LogSeverity2[LogSeverity2.Debug = 3] = "Debug";
})(LogSeverity || (LogSeverity = {}));
var ApiVersion;
(function(ApiVersion2) {
  ApiVersion2.October22 = "2022-10", ApiVersion2.January23 = "2023-01", ApiVersion2.April23 = "2023-04", ApiVersion2.July23 = "2023-07", ApiVersion2.October23 = "2023-10", ApiVersion2.January24 = "2024-01", ApiVersion2.April24 = "2024-04", ApiVersion2.Unstable = "unstable";
})(ApiVersion || (ApiVersion = {}));
var LIBRARY_NAME = "Shopify API Library", LATEST_API_VERSION = ApiVersion.April24, ShopifyHeader;
(function(ShopifyHeader2) {
  ShopifyHeader2.AccessToken = "X-Shopify-Access-Token", ShopifyHeader2.ApiVersion = "X-Shopify-API-Version", ShopifyHeader2.Domain = "X-Shopify-Shop-Domain", ShopifyHeader2.Hmac = "X-Shopify-Hmac-Sha256", ShopifyHeader2.Topic = "X-Shopify-Topic", ShopifyHeader2.SubTopic = "X-Shopify-Sub-Topic", ShopifyHeader2.WebhookId = "X-Shopify-Webhook-Id", ShopifyHeader2.StorefrontPrivateToken = "Shopify-Storefront-Private-Token", ShopifyHeader2.StorefrontSDKVariant = "X-SDK-Variant", ShopifyHeader2.StorefrontSDKVersion = "X-SDK-Version";
})(ShopifyHeader || (ShopifyHeader = {}));
var ClientType;
(function(ClientType2) {
  ClientType2.Rest = "rest", ClientType2.Graphql = "graphql";
})(ClientType || (ClientType = {}));
var privacyTopics = [
  "CUSTOMERS_DATA_REQUEST",
  "CUSTOMERS_REDACT",
  "SHOP_REDACT"
], BillingInterval;
(function(BillingInterval2) {
  BillingInterval2.OneTime = "ONE_TIME", BillingInterval2.Every30Days = "EVERY_30_DAYS", BillingInterval2.Annual = "ANNUAL", BillingInterval2.Usage = "USAGE";
})(BillingInterval || (BillingInterval = {}));
var BillingReplacementBehavior;
(function(BillingReplacementBehavior2) {
  BillingReplacementBehavior2.ApplyImmediately = "APPLY_IMMEDIATELY", BillingReplacementBehavior2.ApplyOnNextBillingCycle = "APPLY_ON_NEXT_BILLING_CYCLE", BillingReplacementBehavior2.Standard = "STANDARD";
})(BillingReplacementBehavior || (BillingReplacementBehavior = {}));

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/version.mjs
var SHOPIFY_API_LIBRARY_VERSION = "10.0.0";

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/logger/log.mjs
function log(config) {
  return function(severity, message, context = {}) {
    if (severity > config.logger.level)
      return;
    let prefix = [];
    config.logger.timestamps && prefix.push(`${(/* @__PURE__ */ new Date()).toISOString().slice(0, -5)}Z`);
    let packageString = context.package || "shopify-api";
    switch (delete context.package, severity) {
      case LogSeverity.Debug:
        packageString = `${packageString}/DEBUG`;
        break;
      case LogSeverity.Info:
        packageString = `${packageString}/INFO`;
        break;
      case LogSeverity.Warning:
        packageString = `${packageString}/WARNING`;
        break;
      case LogSeverity.Error:
        packageString = `${packageString}/ERROR`;
        break;
    }
    prefix.push(packageString);
    let contextParts = [];
    Object.entries(context).forEach(([key, value]) => {
      contextParts.push(`${key}: ${value}`);
    });
    let suffix = "";
    contextParts.length > 0 && (suffix = ` | {${contextParts.join(", ")}}`), config.logger.log(severity, `[${prefix.join("] [")}] ${message}${suffix}`);
  };
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/logger/index.mjs
function logger(config) {
  let logFunction = log(config);
  return {
    log: logFunction,
    debug: async (message, context = {}) => logFunction(LogSeverity.Debug, message, context),
    info: async (message, context = {}) => logFunction(LogSeverity.Info, message, context),
    warning: async (message, context = {}) => logFunction(LogSeverity.Warning, message, context),
    error: async (message, context = {}) => logFunction(LogSeverity.Error, message, context),
    deprecated: deprecated(logFunction)
  };
}
function deprecated(logFunction) {
  return function(version, message) {
    if ((0, import_compare_versions.compare)(SHOPIFY_API_LIBRARY_VERSION, version, ">="))
      throw new FeatureDeprecatedError(`Feature was deprecated in version ${version}`);
    return logFunction(LogSeverity.Warning, `[Deprecated | ${version}] ${message}`);
  };
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/rest/load-rest-resources.mjs
function loadRestResources({ resources, config, RestClient: RestClient2 }) {
  let firstResource = Object.keys(resources)[0];
  return config.apiVersion !== resources[firstResource].apiVersion && logger(config).warning(`Loading REST resources for API version ${resources[firstResource].apiVersion}, which doesn't match the default ${config.apiVersion}`), Object.fromEntries(Object.entries(resources).map(([name, resource]) => {
    class NewResource extends resource {
    }
    return NewResource.setClassProperties({
      Client: RestClient2,
      config
    }), Object.entries(NewResource.hasOne).map(([_attribute, klass]) => {
      klass.setClassProperties({
        Client: RestClient2,
        config
      });
    }), Object.entries(NewResource.hasMany).map(([_attribute, klass]) => {
      klass.setClassProperties({
        Client: RestClient2,
        config
      });
    }), Reflect.defineProperty(NewResource, "name", {
      value: name
    }), [name, NewResource];
  }));
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/future/flags.mjs
function logDisabledFutureFlags(config, logger2) {
  if (!config._logDisabledFutureFlags)
    return;
  let logFlag = (flag, message) => logger2.info(`Future flag ${flag} is disabled.

  ${message}
`);
  config.future?.lineItemBilling || logFlag("lineItemBilling", "Enable this flag to use the new billing API, that supports multiple line items per plan."), config.future?.v10_lineItemBilling && logger2.deprecated("11.0.0", "v10_lineItemBilling will become enabled in v11. Use flag lineItemBilling instead");
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/auth/scopes/index.mjs
var AuthScopes = class {
  constructor(scopes) {
    let scopesArray = [];
    typeof scopes == "string" ? scopesArray = scopes.split(new RegExp(`${AuthScopes.SCOPE_DELIMITER}\\s*`)) : Array.isArray(scopes) ? scopesArray = scopes : scopes && (scopesArray = Array.from(scopes.expandedScopes)), scopesArray = scopesArray.map((scope) => scope.trim()).filter((scope) => scope.length);
    let impliedScopes = this.getImpliedScopes(scopesArray), scopeSet = new Set(scopesArray), impliedSet = new Set(impliedScopes);
    this.compressedScopes = new Set([...scopeSet].filter((x) => !impliedSet.has(x))), this.expandedScopes = /* @__PURE__ */ new Set([...scopeSet, ...impliedSet]);
  }
  /**
   * Checks whether the current set of scopes includes the given one.
   */
  has(scope) {
    let other;
    return scope instanceof AuthScopes ? other = scope : other = new AuthScopes(scope), other.toArray().filter((x) => !this.expandedScopes.has(x)).length === 0;
  }
  /**
   * Checks whether the current set of scopes equals the given one.
   */
  equals(otherScopes) {
    let other;
    return otherScopes instanceof AuthScopes ? other = otherScopes : other = new AuthScopes(otherScopes), this.compressedScopes.size === other.compressedScopes.size && this.toArray().filter((x) => !other.has(x)).length === 0;
  }
  /**
   * Returns a comma-separated string with the current set of scopes.
   */
  toString() {
    return this.toArray().join(AuthScopes.SCOPE_DELIMITER);
  }
  /**
   * Returns an array with the current set of scopes.
   */
  toArray() {
    return [...this.compressedScopes];
  }
  getImpliedScopes(scopesArray) {
    return scopesArray.reduce((array, current) => {
      let matches = current.match(/^(unauthenticated_)?write_(.*)$/);
      return matches && array.push(`${matches[1] ? matches[1] : ""}read_${matches[2]}`), array;
    }, []);
  }
};
AuthScopes.SCOPE_DELIMITER = ",";

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/config.mjs
function validateConfig(params) {
  let config = {
    apiKey: "",
    apiSecretKey: "",
    hostName: "",
    hostScheme: "https",
    apiVersion: LATEST_API_VERSION,
    isEmbeddedApp: !0,
    isCustomStoreApp: !1,
    logger: {
      log: defaultLogFunction,
      level: LogSeverity.Info,
      httpRequests: !1,
      timestamps: !1
    },
    future: {},
    _logDisabledFutureFlags: !0
  }, mandatory = ["apiSecretKey", "hostName"];
  (!("isCustomStoreApp" in params) || !params.isCustomStoreApp) && mandatory.push("apiKey"), "isCustomStoreApp" in params && params.isCustomStoreApp && (!("adminApiAccessToken" in params) || params.adminApiAccessToken?.length === 0) && mandatory.push("adminApiAccessToken");
  let missing = [];
  if (mandatory.forEach((key) => {
    notEmpty(params[key]) || missing.push(key);
  }), missing.length)
    throw new ShopifyError(`Cannot initialize Shopify API Library. Missing values for: ${missing.join(", ")}`);
  let future2 = params.future?.v10_lineItemBilling ? {
    lineItemBilling: params.future?.v10_lineItemBilling,
    ...params.future
  } : params.future, { hostScheme, isCustomStoreApp, adminApiAccessToken, userAgentPrefix, logger: logger$1, privateAppStorefrontAccessToken, customShopDomains, billing, ...mandatoryParams } = params, scopes;
  return params.scopes === void 0 ? scopes = void 0 : params.scopes instanceof AuthScopes ? scopes = params.scopes : scopes = new AuthScopes(params.scopes), Object.assign(config, mandatoryParams, {
    hostName: params.hostName.replace(/\/$/, ""),
    scopes,
    hostScheme: hostScheme ?? config.hostScheme,
    isCustomStoreApp: isCustomStoreApp ?? config.isCustomStoreApp,
    adminApiAccessToken: adminApiAccessToken ?? config.adminApiAccessToken,
    userAgentPrefix: userAgentPrefix ?? config.userAgentPrefix,
    logger: { ...config.logger, ...logger$1 || {} },
    privateAppStorefrontAccessToken: privateAppStorefrontAccessToken ?? config.privateAppStorefrontAccessToken,
    customShopDomains: customShopDomains ?? config.customShopDomains,
    billing: billing ?? config.billing,
    future: future2 ?? config.future
  }), config.isCustomStoreApp && params.adminApiAccessToken === params.apiSecretKey && logger(config).warning("adminApiAccessToken is set to the same value as apiSecretKey. adminApiAccessToken should be set to the Admin API access token for custom store apps; apiSecretKey should be set to the custom store app's API secret key."), config;
}
function notEmpty(value) {
  return value == null ? !1 : typeof value == "string" || Array.isArray(value) ? value.length > 0 : !0;
}
function defaultLogFunction(severity, message) {
  switch (severity) {
    case LogSeverity.Debug:
      console.debug(message);
      break;
    case LogSeverity.Info:
      console.log(message);
      break;
    case LogSeverity.Warning:
      console.warn(message);
      break;
    case LogSeverity.Error:
      console.error(message);
      break;
  }
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/clients/admin/graphql/client.mjs
var import_admin_api_client = require("@shopify/admin-api-client");

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/clients/common.mjs
var import_network = require("@shopify/network");
function getUserAgent(config) {
  let userAgentPrefix = `${LIBRARY_NAME} v${SHOPIFY_API_LIBRARY_VERSION} | ${abstractRuntimeString()}`;
  return config.userAgentPrefix && (userAgentPrefix = `${config.userAgentPrefix} | ${userAgentPrefix}`), userAgentPrefix;
}
function clientLoggerFactory(config) {
  return (logContent) => {
    if (config.logger.httpRequests)
      switch (logContent.type) {
        case "HTTP-Response": {
          let responseLog = logContent.content;
          logger(config).debug("Received response for HTTP request", {
            requestParams: JSON.stringify(responseLog.requestParams),
            response: JSON.stringify(responseLog.response)
          });
          break;
        }
        case "HTTP-Retry": {
          let responseLog = logContent.content;
          logger(config).debug("Retrying HTTP request", {
            requestParams: JSON.stringify(responseLog.requestParams),
            retryAttempt: responseLog.retryAttempt,
            maxRetries: responseLog.maxRetries,
            response: JSON.stringify(responseLog.lastResponse)
          });
          break;
        }
        default: {
          logger(config).debug(`HTTP request event: ${logContent.content}`);
          break;
        }
      }
  };
}
function throwFailedRequest(body, atMaxRetries, response) {
  if (typeof response > "u") {
    let message = body?.errors?.message ?? "";
    throw new HttpRequestError(`Http request error, no response available: ${message}`);
  }
  let responseHeaders = canonicalizeHeaders(Object.fromEntries(response.headers.entries() ?? []));
  if (response.status === import_network.StatusCode.Ok && body.errors.graphQLErrors)
    throw new GraphqlQueryError({
      message: body.errors.graphQLErrors?.[0].message ?? "GraphQL operation failed",
      response,
      headers: responseHeaders,
      body
    });
  let errorMessages = [];
  body.errors && errorMessages.push(JSON.stringify(body.errors, null, 2));
  let xRequestId = getHeader(responseHeaders, "x-request-id");
  xRequestId && errorMessages.push(`If you report this error, please include this id: ${xRequestId}`);
  let errorMessage = errorMessages.length ? `:
${errorMessages.join(`
`)}` : "", code = response.status, statusText = response.statusText;
  switch (!0) {
    case response.status === import_network.StatusCode.TooManyRequests: {
      if (atMaxRetries)
        throw new HttpMaxRetriesError("Attempted the maximum number of retries for HTTP request.");
      {
        let retryAfter = getHeader(responseHeaders, "Retry-After");
        throw new HttpThrottlingError({
          message: `Shopify is throttling requests ${errorMessage}`,
          code,
          statusText,
          body,
          headers: responseHeaders,
          retryAfter: retryAfter ? parseFloat(retryAfter) : void 0
        });
      }
    }
    case response.status >= import_network.StatusCode.InternalServerError:
      throw atMaxRetries ? new HttpMaxRetriesError("Attempted the maximum number of retries for HTTP request.") : new HttpInternalError({
        message: `Shopify internal error${errorMessage}`,
        code,
        statusText,
        body,
        headers: responseHeaders
      });
    default:
      throw new HttpResponseError({
        message: `Received an error response (${response.status} ${response.statusText}) from Shopify${errorMessage}`,
        code,
        statusText,
        body,
        headers: responseHeaders
      });
  }
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/clients/admin/graphql/client.mjs
var GraphqlClient = class {
  constructor(params) {
    let config = this.graphqlClass().config;
    if (!config.isCustomStoreApp && !params.session.accessToken)
      throw new MissingRequiredArgument("Missing access token when creating GraphQL client");
    if (params.apiVersion) {
      let message = params.apiVersion === config.apiVersion ? `Admin client has a redundant API version override to the default ${params.apiVersion}` : `Admin client overriding default API version ${config.apiVersion} with ${params.apiVersion}`;
      logger(config).debug(message);
    }
    this.session = params.session, this.apiVersion = params.apiVersion, this.client = (0, import_admin_api_client.createAdminApiClient)({
      accessToken: config.adminApiAccessToken ?? this.session.accessToken,
      apiVersion: this.apiVersion ?? config.apiVersion,
      storeDomain: this.session.shop,
      customFetchApi: abstractFetch,
      logger: clientLoggerFactory(config),
      userAgentPrefix: getUserAgent(config)
    });
  }
  async query(params) {
    if (logger(this.graphqlClass().config).deprecated("11.0.0", `The query method is deprecated, and was replaced with the request method.
See the migration guide: https://github.com/Shopify/shopify-app-js/blob/main/packages/apps/shopify-api/docs/migrating-to-v9.md#using-the-new-clients.`), typeof params.data == "string" && params.data.length === 0 || Object.entries(params.data).length === 0)
      throw new MissingRequiredArgument("Query missing.");
    let operation, variables;
    typeof params.data == "string" ? operation = params.data : (operation = params.data.query, variables = params.data.variables);
    let headers = Object.fromEntries(Object.entries(params?.extraHeaders ?? {}).map(([key, value]) => [
      key,
      Array.isArray(value) ? value.join(", ") : value.toString()
    ]));
    return { body: await this.request(operation, {
      headers,
      retries: params.tries ? params.tries - 1 : void 0,
      variables
    }), headers: {} };
  }
  async request(operation, options) {
    let response = await this.client.request(operation, {
      apiVersion: this.apiVersion || this.graphqlClass().config.apiVersion,
      ...options
    });
    if (response.errors) {
      let fetchResponse = response.errors.response;
      throwFailedRequest(response, (options?.retries ?? 0) > 0, fetchResponse);
    }
    return response;
  }
  graphqlClass() {
    return this.constructor;
  }
};
function graphqlClientClass({ config }) {
  class NewGraphqlClient extends GraphqlClient {
  }
  return NewGraphqlClient.config = config, Reflect.defineProperty(NewGraphqlClient, "name", {
    value: "GraphqlClient"
  }), NewGraphqlClient;
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/clients/admin/rest/client.mjs
var import_admin_api_client2 = require("@shopify/admin-api-client"), import_network2 = require("@shopify/network");
var RestClient = class {
  constructor({ session, apiVersion }) {
    this.loggedDeprecations = {};
    let config = this.restClass().config;
    if (!config.isCustomStoreApp && !session.accessToken)
      throw new MissingRequiredArgument("Missing access token when creating REST client");
    if (apiVersion) {
      let message = apiVersion === config.apiVersion ? `REST client has a redundant API version override to the default ${apiVersion}` : `REST client overriding default API version ${config.apiVersion} with ${apiVersion}`;
      logger(config).debug(message);
    }
    let customStoreAppAccessToken = config.adminApiAccessToken ?? config.apiSecretKey;
    this.session = session, this.apiVersion = apiVersion ?? config.apiVersion, this.client = (0, import_admin_api_client2.createAdminRestApiClient)({
      scheme: config.hostScheme,
      storeDomain: session.shop,
      apiVersion: apiVersion ?? config.apiVersion,
      accessToken: config.isCustomStoreApp ? customStoreAppAccessToken : session.accessToken,
      customFetchApi: abstractFetch,
      logger: clientLoggerFactory(config),
      userAgentPrefix: getUserAgent(config),
      defaultRetryTime: this.restClass().RETRY_WAIT_TIME,
      formatPaths: this.restClass().formatPaths
    });
  }
  /**
   * Performs a GET request on the given path.
   */
  async get(params) {
    return this.request({ method: import_network2.Method.Get, ...params });
  }
  /**
   * Performs a POST request on the given path.
   */
  async post(params) {
    return this.request({ method: import_network2.Method.Post, ...params });
  }
  /**
   * Performs a PUT request on the given path.
   */
  async put(params) {
    return this.request({ method: import_network2.Method.Put, ...params });
  }
  /**
   * Performs a DELETE request on the given path.
   */
  async delete(params) {
    return this.request({ method: import_network2.Method.Delete, ...params });
  }
  async request(params) {
    let requestParams = {
      headers: {
        ...params.extraHeaders,
        ...params.type ? { "Content-Type": params.type.toString() } : {}
      },
      retries: params.tries ? params.tries - 1 : void 0,
      searchParams: params.query
    }, response;
    switch (params.method) {
      case import_network2.Method.Get:
        response = await this.client.get(params.path, requestParams);
        break;
      case import_network2.Method.Put:
        response = await this.client.put(params.path, {
          ...requestParams,
          data: params.data
        });
        break;
      case import_network2.Method.Post:
        response = await this.client.post(params.path, {
          ...requestParams,
          data: params.data
        });
        break;
      case import_network2.Method.Delete:
        response = await this.client.delete(params.path, requestParams);
        break;
      default:
        throw new InvalidRequestError(`Unsupported request method '${params.method}'`);
    }
    let body = await response.json(), responseHeaders = canonicalizeHeaders(Object.fromEntries(response.headers.entries()));
    response.ok || throwFailedRequest(body, (params.tries ?? 1) > 1, response);
    let requestReturn = {
      body,
      headers: responseHeaders
    };
    await this.logDeprecations({
      method: params.method,
      url: params.path,
      headers: requestParams.headers,
      body: params.data ? JSON.stringify(params.data) : void 0
    }, requestReturn);
    let link = response.headers.get("Link");
    if (link !== void 0) {
      let pageInfo = {
        limit: params.query?.limit ? params.query?.limit.toString() : RestClient.DEFAULT_LIMIT
      };
      if (link) {
        let links2 = link.split(", ");
        for (let link2 of links2) {
          let parsedLink = link2.match(RestClient.LINK_HEADER_REGEXP);
          if (!parsedLink)
            continue;
          let linkRel = parsedLink[2], linkUrl = new URL(parsedLink[1]), linkFields = linkUrl.searchParams.get("fields"), linkPageToken = linkUrl.searchParams.get("page_info");
          if (!pageInfo.fields && linkFields && (pageInfo.fields = linkFields.split(",")), linkPageToken)
            switch (linkRel) {
              case "previous":
                pageInfo.previousPageUrl = parsedLink[1], pageInfo.prevPage = this.buildRequestParams(parsedLink[1]);
                break;
              case "next":
                pageInfo.nextPageUrl = parsedLink[1], pageInfo.nextPage = this.buildRequestParams(parsedLink[1]);
                break;
            }
        }
      }
      requestReturn.pageInfo = pageInfo;
    }
    return requestReturn;
  }
  restClass() {
    return this.constructor;
  }
  buildRequestParams(newPageUrl) {
    let pattern = "^/admin/api/[^/]+/(.*).json$", url = new URL(newPageUrl);
    return {
      path: url.pathname.replace(new RegExp(pattern), "$1"),
      query: Object.fromEntries(url.searchParams.entries())
    };
  }
  async logDeprecations(request2, response) {
    let config = this.restClass().config, deprecationReason = getHeader(response.headers, "X-Shopify-API-Deprecated-Reason");
    if (deprecationReason) {
      let deprecation = {
        message: deprecationReason,
        path: request2.url
      };
      request2.body && (deprecation.body = `${request2.body.substring(0, 100)}...`);
      let depHash = await createSHA256HMAC(config.apiSecretKey, JSON.stringify(deprecation), HashFormat.Hex);
      if (!Object.keys(this.loggedDeprecations).includes(depHash) || Date.now() - this.loggedDeprecations[depHash] >= RestClient.DEPRECATION_ALERT_DELAY) {
        this.loggedDeprecations[depHash] = Date.now();
        let stack = new Error().stack, message = `API Deprecation Notice ${(/* @__PURE__ */ new Date()).toLocaleString()} : ${JSON.stringify(deprecation)}  -  Stack Trace: ${stack}`;
        await logger(config).warning(message);
      }
    }
  }
};
RestClient.LINK_HEADER_REGEXP = /<([^<]+)>; rel="([^"]+)"/;
RestClient.DEFAULT_LIMIT = "50";
RestClient.RETRY_WAIT_TIME = 1e3;
RestClient.DEPRECATION_ALERT_DELAY = 3e5;
function restClientClass(params) {
  let { config, formatPaths } = params;
  class NewRestClient extends RestClient {
  }
  return NewRestClient.config = config, NewRestClient.formatPaths = formatPaths === void 0 ? !0 : formatPaths, Reflect.defineProperty(NewRestClient, "name", {
    value: "RestClient"
  }), NewRestClient;
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/clients/storefront/client.mjs
var import_storefront_api_client = require("@shopify/storefront-api-client");
var StorefrontClient = class {
  constructor(params) {
    let config = this.storefrontClass().config;
    if (!config.isCustomStoreApp && !params.session.accessToken)
      throw new MissingRequiredArgument("Missing access token when creating GraphQL client");
    if (params.apiVersion) {
      let message = params.apiVersion === config.apiVersion ? `Storefront client has a redundant API version override to the default ${params.apiVersion}` : `Storefront client overriding default API version ${config.apiVersion} with ${params.apiVersion}`;
      logger(config).debug(message);
    }
    let accessToken;
    if (config.isCustomStoreApp) {
      if (accessToken = config.privateAppStorefrontAccessToken, !accessToken)
        throw new MissingRequiredArgument("Custom store apps must set the privateAppStorefrontAccessToken property to call the Storefront API.");
    } else if (accessToken = params.session.accessToken, !accessToken)
      throw new MissingRequiredArgument("Session missing access token.");
    this.session = params.session, this.apiVersion = params.apiVersion, this.client = (0, import_storefront_api_client.createStorefrontApiClient)({
      privateAccessToken: accessToken,
      apiVersion: this.apiVersion ?? config.apiVersion,
      storeDomain: this.session.shop,
      customFetchApi: abstractFetch,
      logger: clientLoggerFactory(config),
      clientName: getUserAgent(config)
    });
  }
  async query(params) {
    if (logger(this.storefrontClass().config).deprecated("11.0.0", `The query method is deprecated, and was replaced with the request method.
See the migration guide: https://github.com/Shopify/shopify-app-js/blob/main/packages/apps/shopify-api/docs/migrating-to-v9.md#using-the-new-clients.`), typeof params.data == "string" && params.data.length === 0 || Object.entries(params.data).length === 0)
      throw new MissingRequiredArgument("Query missing.");
    let operation, variables;
    typeof params.data == "string" ? operation = params.data : (operation = params.data.query, variables = params.data.variables);
    let headers = Object.fromEntries(Object.entries(params?.extraHeaders ?? {}).map(([key, value]) => [
      key,
      Array.isArray(value) ? value.join(", ") : value.toString()
    ]));
    return { body: await this.request(operation, {
      headers,
      retries: params.tries ? params.tries - 1 : void 0,
      variables
    }), headers: {} };
  }
  async request(operation, options) {
    let response = await this.client.request(operation, {
      apiVersion: this.apiVersion || this.storefrontClass().config.apiVersion,
      ...options
    });
    if (response.errors) {
      let fetchResponse = response.errors.response;
      throwFailedRequest(response, (options?.retries ?? 0) > 0, fetchResponse);
    }
    return response;
  }
  storefrontClass() {
    return this.constructor;
  }
};
function storefrontClientClass(params) {
  let { config } = params;
  class NewStorefrontClient extends StorefrontClient {
  }
  return NewStorefrontClient.config = config, Reflect.defineProperty(NewStorefrontClient, "name", {
    value: "StorefrontClient"
  }), NewStorefrontClient;
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/clients/graphql_proxy/graphql_proxy.mjs
function graphqlProxy(config) {
  return async ({ session, rawBody }) => {
    if (!session.accessToken)
      throw new InvalidSession("Cannot proxy query. Session not authenticated.");
    let GraphqlClient2 = graphqlClientClass({ config }), client = new GraphqlClient2({ session }), query, variables;
    if (typeof rawBody == "string" ? query = rawBody : (query = rawBody.query, variables = rawBody.variables), !query)
      throw new MissingRequiredArgument("Query missing.");
    return { body: await client.request(query, { variables }), headers: {} };
  };
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/clients/index.mjs
function clientClasses(config) {
  return {
    // We don't pass in the HttpClient because the RestClient inherits from it, and goes through the same setup process
    Rest: restClientClass({ config }),
    Graphql: graphqlClientClass({ config }),
    Storefront: storefrontClientClass({ config }),
    graphqlProxy: graphqlProxy(config)
  };
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/auth/oauth/oauth.mjs
var import_isbot = require("isbot");

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/utils/processed-query.mjs
var ProcessedQuery = class {
  static stringify(keyValuePairs) {
    return !keyValuePairs || Object.keys(keyValuePairs).length === 0 ? "" : new ProcessedQuery().putAll(keyValuePairs).stringify();
  }
  constructor() {
    this.processedQuery = new URLSearchParams();
  }
  putAll(keyValuePairs) {
    return Object.entries(keyValuePairs).forEach(([key, value]) => this.put(key, value)), this;
  }
  put(key, value) {
    Array.isArray(value) ? this.putArray(key, value) : value?.constructor === Object ? this.putObject(key, value) : this.putSimple(key, value);
  }
  putArray(key, value) {
    value.forEach((arrayValue) => this.processedQuery.append(`${key}[]`, `${arrayValue}`));
  }
  putObject(key, value) {
    Object.entries(value).forEach(([entry2, entryValue]) => {
      this.processedQuery.append(`${key}[${entry2}]`, `${entryValue}`);
    });
  }
  putSimple(key, value) {
    this.processedQuery.append(key, `${value}`);
  }
  stringify(omitQuestionMark = !1) {
    let queryString = this.processedQuery.toString();
    return omitQuestionMark ? queryString : `?${queryString}`;
  }
};

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/auth/oauth/safe-compare.mjs
var safeCompare = (strA, strB) => {
  if (typeof strA == typeof strB) {
    let enc = new TextEncoder(), buffA = enc.encode(JSON.stringify(strA)), buffB = enc.encode(JSON.stringify(strB));
    if (buffA.length === buffB.length)
      return timingSafeEqual(buffA, buffB);
  } else
    throw new SafeCompareError(`Mismatched data types provided: ${typeof strA} and ${typeof strB}`);
  return !1;
};
function timingSafeEqual(bufA, bufB) {
  let viewA = new Uint8Array(bufA), viewB = new Uint8Array(bufB), out = 0;
  for (let i = 0; i < viewA.length; i++)
    out |= viewA[i] ^ viewB[i];
  return out === 0;
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/utils/types.mjs
var HmacValidationType;
(function(HmacValidationType2) {
  HmacValidationType2.Flow = "flow", HmacValidationType2.Webhook = "webhook", HmacValidationType2.FulfillmentService = "fulfillment_service";
})(HmacValidationType || (HmacValidationType = {}));
var ValidationErrorReason = {
  MissingBody: "missing_body",
  InvalidHmac: "invalid_hmac",
  MissingHmac: "missing_hmac"
};

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/utils/hmac-validator.mjs
var HMAC_TIMESTAMP_PERMITTED_CLOCK_TOLERANCE_SEC = 90;
function stringifyQueryForAdmin(query) {
  let processedQuery = new ProcessedQuery();
  return Object.keys(query).sort((val1, val2) => val1.localeCompare(val2)).forEach((key) => processedQuery.put(key, query[key])), processedQuery.stringify(!0);
}
function stringifyQueryForAppProxy(query) {
  return Object.entries(query).sort(([val1], [val2]) => val1.localeCompare(val2)).reduce((acc, [key, value]) => `${acc}${key}=${Array.isArray(value) ? value.join(",") : value}`, "");
}
function generateLocalHmac(config) {
  return async (params, signator = "admin") => {
    let { hmac, signature, ...query } = params, queryString = signator === "admin" ? stringifyQueryForAdmin(query) : stringifyQueryForAppProxy(query);
    return createSHA256HMAC(config.apiSecretKey, queryString, HashFormat.Hex);
  };
}
function validateHmac(config) {
  return async (query, { signator } = { signator: "admin" }) => {
    if (signator === "admin" && !query.hmac)
      throw new InvalidHmacError("Query does not contain an HMAC value.");
    if (signator === "appProxy" && !query.signature)
      throw new InvalidHmacError("Query does not contain a signature value.");
    validateHmacTimestamp(query);
    let hmac = signator === "appProxy" ? query.signature : query.hmac, localHmac = await generateLocalHmac(config)(query, signator);
    return safeCompare(hmac, localHmac);
  };
}
async function validateHmacString(config, data, hmac, format) {
  let localHmac = await createSHA256HMAC(config.apiSecretKey, data, format);
  return safeCompare(hmac, localHmac);
}
function getCurrentTimeInSec() {
  return Math.trunc(Date.now() / 1e3);
}
function validateHmacFromRequestFactory(config) {
  return async function({ type, rawBody, ...adapterArgs }) {
    let request2 = await abstractConvertRequest(adapterArgs);
    if (!rawBody.length)
      return fail(ValidationErrorReason.MissingBody, type, config);
    let hmac = getHeader(request2.headers, ShopifyHeader.Hmac);
    return hmac ? await validateHmacString(config, rawBody, hmac, HashFormat.Base64) ? succeed(type, config) : fail(ValidationErrorReason.InvalidHmac, type, config) : fail(ValidationErrorReason.MissingHmac, type, config);
  };
}
function validateHmacTimestamp(query) {
  if (Math.abs(getCurrentTimeInSec() - Number(query.timestamp)) > HMAC_TIMESTAMP_PERMITTED_CLOCK_TOLERANCE_SEC)
    throw new InvalidHmacError("HMAC timestamp is outside of the tolerance range");
}
async function fail(reason, type, config) {
  return await logger(config).debug(`${type} request is not valid`, { reason }), {
    valid: !1,
    reason
  };
}
async function succeed(type, config) {
  return await logger(config).debug(`${type} request is valid`), {
    valid: !0
  };
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/auth/decode-host.mjs
function decodeHost(host) {
  return atob(host);
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/utils/shop-admin-url-helper.mjs
function shopAdminUrlToLegacyUrl(shopAdminUrl) {
  let shopUrl = removeProtocol(shopAdminUrl);
  if (!(shopUrl.split(".")[0] === "admin"))
    return null;
  let regex = new RegExp("admin\\..+/store/([^/]+)"), matches = shopUrl.match(regex);
  if (matches && matches.length === 2) {
    let shopName = matches[1];
    return shopUrl.includes("spin.dev/store/") ? spinAdminUrlToLegacyUrl(shopUrl) : `${shopName}.myshopify.com`;
  } else
    return null;
}
function legacyUrlToShopAdminUrl(legacyAdminUrl) {
  let shopUrl = removeProtocol(legacyAdminUrl), regex = new RegExp("(.+)\\.myshopify\\.com$"), matches = shopUrl.match(regex);
  return matches && matches.length === 2 ? `admin.shopify.com/store/${matches[1]}` : shopUrl.endsWith("spin.dev") ? spinLegacyUrlToAdminUrl(shopUrl) : null;
}
function spinAdminUrlToLegacyUrl(shopAdminUrl) {
  let spinRegex = new RegExp("admin\\.web\\.(.+\\.spin\\.dev)/store/(.+)"), spinMatches = shopAdminUrl.match(spinRegex);
  if (spinMatches && spinMatches.length === 3) {
    let spinUrl = spinMatches[1];
    return `${spinMatches[2]}.shopify.${spinUrl}`;
  } else
    return null;
}
function spinLegacyUrlToAdminUrl(legacyAdminUrl) {
  let spinRegex = new RegExp("(.+)\\.shopify\\.(.+\\.spin\\.dev)"), spinMatches = legacyAdminUrl.match(spinRegex);
  if (spinMatches && spinMatches.length === 3) {
    let shopName = spinMatches[1];
    return `admin.web.${spinMatches[2]}/store/${shopName}`;
  } else
    return null;
}
function removeProtocol(url) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/utils/shop-validator.mjs
function sanitizeShop(config) {
  return (shop, throwOnInvalid = !1) => {
    let shopUrl = shop, domainsRegex = ["myshopify\\.com", "shopify\\.com", "myshopify\\.io"];
    config.customShopDomains && domainsRegex.push(...config.customShopDomains.map((regex) => typeof regex == "string" ? regex : regex.source));
    let shopUrlRegex = new RegExp(`^[a-zA-Z0-9][a-zA-Z0-9-_]*\\.(${domainsRegex.join("|")})[/]*$`);
    new RegExp(`^admin\\.(${domainsRegex.join("|")})/store/([a-zA-Z0-9][a-zA-Z0-9-_]*)$`).test(shopUrl) && (shopUrl = shopAdminUrlToLegacyUrl(shopUrl) || "");
    let sanitizedShop = shopUrlRegex.test(shopUrl) ? shopUrl : null;
    if (!sanitizedShop && throwOnInvalid)
      throw new InvalidShopError("Received invalid shop argument");
    return sanitizedShop;
  };
}
function sanitizeHost() {
  return (host, throwOnInvalid = !1) => {
    let sanitizedHost = /^[0-9a-zA-Z+/]+={0,2}$/.test(host) ? host : null;
    if (sanitizedHost) {
      let { hostname } = new URL(`https://${decodeHost(sanitizedHost)}`), originsRegex = [
        "myshopify\\.com",
        "shopify\\.com",
        "myshopify\\.io",
        "spin\\.dev"
      ];
      new RegExp(`\\.(${originsRegex.join("|")})$`).test(hostname) || (sanitizedHost = null);
    }
    if (!sanitizedHost && throwOnInvalid)
      throw new InvalidHostError("Received invalid host argument");
    return sanitizedHost;
  };
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/clients/types.mjs
var import_admin_api_client3 = require("@shopify/admin-api-client"), import_compare_versions2 = require("compare-versions");
var import_network3 = require("@shopify/network"), DataType;
(function(DataType2) {
  DataType2.JSON = "application/json", DataType2.GraphQL = "application/graphql", DataType2.URLEncoded = "application/x-www-form-urlencoded";
})(DataType || (DataType = {}));

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/utils/fetch-request.mjs
function fetchRequestFactory(config) {
  return async function(url, options) {
    let log2 = logger(config), doLog = config.logger.httpRequests && config.logger.level === LogSeverity.Debug;
    doLog && log2.debug("Making HTTP request", {
      method: options?.method || "GET",
      url,
      ...options?.body && { body: options?.body }
    });
    let response = await abstractFetch(url, options);
    return doLog && log2.debug("HTTP request completed", {
      method: options?.method || "GET",
      url,
      status: response.status
    }), response;
  };
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/auth/oauth/types.mjs
var SESSION_COOKIE_NAME = "shopify_app_session", STATE_COOKIE_NAME = "shopify_app_state";

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/auth/oauth/nonce.mjs
function nonce() {
  return (cryptoVar.getRandomValues ? cryptoVar.getRandomValues(new Uint8Array(15)) : cryptoVar.randomBytes(15)).map((byte) => byte % 10).join("");
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/auth/oauth/create-session.mjs
var import_uuid = require("uuid");

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/session/session.mjs
var propertiesToSave = [
  "id",
  "shop",
  "state",
  "isOnline",
  "scope",
  "accessToken",
  "expires",
  "onlineAccessInfo"
], Session = class {
  static fromPropertyArray(entries, returnUserData = !1) {
    if (!Array.isArray(entries))
      throw new InvalidSession("The parameter is not an array: a Session cannot be created from this object.");
    let obj = Object.fromEntries(entries.filter(([_key, value]) => value != null).map(([key, value]) => {
      switch (key.toLowerCase()) {
        case "isonline":
          return ["isOnline", value];
        case "accesstoken":
          return ["accessToken", value];
        case "onlineaccessinfo":
          return ["onlineAccessInfo", value];
        case "userid":
          return ["userId", value];
        case "firstname":
          return ["firstName", value];
        case "lastname":
          return ["lastName", value];
        case "accountowner":
          return ["accountOwner", value];
        case "emailverified":
          return ["emailVerified", value];
        default:
          return [key.toLowerCase(), value];
      }
    })), sessionData = {}, onlineAccessInfo = {
      associated_user: {}
    };
    return Object.entries(obj).forEach(([key, value]) => {
      switch (key) {
        case "isOnline":
          typeof value == "string" ? sessionData[key] = value.toString().toLowerCase() === "true" : typeof value == "number" ? sessionData[key] = Boolean(value) : sessionData[key] = value;
          break;
        case "scope":
          sessionData[key] = value.toString();
          break;
        case "expires":
          sessionData[key] = value ? new Date(Number(value)) : void 0;
          break;
        case "onlineAccessInfo":
          onlineAccessInfo.associated_user.id = Number(value);
          break;
        case "userId":
          if (returnUserData) {
            onlineAccessInfo.associated_user.id = Number(value);
            break;
          }
        case "firstName":
          if (returnUserData) {
            onlineAccessInfo.associated_user.first_name = String(value);
            break;
          }
        case "lastName":
          if (returnUserData) {
            onlineAccessInfo.associated_user.last_name = String(value);
            break;
          }
        case "email":
          if (returnUserData) {
            onlineAccessInfo.associated_user.email = String(value);
            break;
          }
        case "accountOwner":
          if (returnUserData) {
            onlineAccessInfo.associated_user.account_owner = Boolean(value);
            break;
          }
        case "locale":
          if (returnUserData) {
            onlineAccessInfo.associated_user.locale = String(value);
            break;
          }
        case "collaborator":
          if (returnUserData) {
            onlineAccessInfo.associated_user.collaborator = Boolean(value);
            break;
          }
        case "emailVerified":
          if (returnUserData) {
            onlineAccessInfo.associated_user.email_verified = Boolean(value);
            break;
          }
        default:
          sessionData[key] = value;
      }
    }), sessionData.isOnline && (sessionData.onlineAccessInfo = onlineAccessInfo), new Session(sessionData);
  }
  constructor(params) {
    Object.assign(this, params);
  }
  /**
   * Whether the session is active. Active sessions have an access token that is not expired, and has has the given
   * scopes if scopes is equal to a truthy value.
   */
  isActive(scopes) {
    let hasAccessToken = Boolean(this.accessToken), isTokenNotExpired = !this.isExpired();
    return !this.isScopeChanged(scopes) && hasAccessToken && isTokenNotExpired;
  }
  /**
   * Whether the access token has the given scopes.
   */
  isScopeChanged(scopes) {
    return typeof scopes > "u" ? !1 : !(scopes instanceof AuthScopes ? scopes : new AuthScopes(scopes)).equals(this.scope);
  }
  /**
   * Whether the access token is expired.
   */
  isExpired(withinMillisecondsOfExpiry = 0) {
    return Boolean(this.expires && this.expires.getTime() - withinMillisecondsOfExpiry < Date.now());
  }
  /**
   * Converts an object with data into a Session.
   */
  toObject() {
    let object = {
      id: this.id,
      shop: this.shop,
      state: this.state,
      isOnline: this.isOnline
    };
    return this.scope && (object.scope = this.scope), this.expires && (object.expires = this.expires), this.accessToken && (object.accessToken = this.accessToken), this.onlineAccessInfo && (object.onlineAccessInfo = this.onlineAccessInfo), object;
  }
  /**
   * Checks whether the given session is equal to this session.
   */
  equals(other) {
    if (!other || !(this.id === other.id && this.shop === other.shop && this.state === other.state && this.isOnline === other.isOnline))
      return !1;
    let copyA = this.toPropertyArray(!0);
    copyA.sort(([k1], [k2]) => k1 < k2 ? -1 : 1);
    let copyB = other.toPropertyArray(!0);
    return copyB.sort(([k1], [k2]) => k1 < k2 ? -1 : 1), JSON.stringify(copyA) === JSON.stringify(copyB);
  }
  /**
   * Converts the session into an array of key-value pairs.
   */
  toPropertyArray(returnUserData = !1) {
    return Object.entries(this).filter(([key, value]) => propertiesToSave.includes(key) && value !== void 0 && value !== null).flatMap(([key, value]) => {
      switch (key) {
        case "expires":
          return [[key, value ? value.getTime() : void 0]];
        case "onlineAccessInfo":
          return returnUserData ? [
            ["userId", value?.associated_user?.id],
            ["firstName", value?.associated_user?.first_name],
            ["lastName", value?.associated_user?.last_name],
            ["email", value?.associated_user?.email],
            ["locale", value?.associated_user?.locale],
            ["emailVerified", value?.associated_user?.email_verified],
            ["accountOwner", value?.associated_user?.account_owner],
            ["collaborator", value?.associated_user?.collaborator]
          ] : [[key, value.associated_user.id]];
        default:
          return [[key, value]];
      }
    }).filter(([_key, value]) => value !== void 0);
  }
};

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/session/decode-session-token.mjs
var jose = __toESM(require("jose"), 1);

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/utils/get-hmac-key.mjs
function getHMACKey(key) {
  let arrayBuffer = new Uint8Array(key.length);
  for (let i = 0, keyLen = key.length; i < keyLen; i++)
    arrayBuffer[i] = key.charCodeAt(i);
  return arrayBuffer;
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/session/decode-session-token.mjs
var JWT_PERMITTED_CLOCK_TOLERANCE = 10;
function decodeSessionToken(config) {
  return async (token, { checkAudience = !0 } = {}) => {
    let payload;
    try {
      payload = (await jose.jwtVerify(token, getHMACKey(config.apiSecretKey), {
        algorithms: ["HS256"],
        clockTolerance: JWT_PERMITTED_CLOCK_TOLERANCE
      })).payload;
    } catch (error) {
      throw new InvalidJwtError(`Failed to parse session token '${token}': ${error.message}`);
    }
    if (checkAudience && payload.aud !== config.apiKey)
      throw new InvalidJwtError("Session token had invalid API key");
    return payload;
  };
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/session/session-utils.mjs
function getJwtSessionId(config) {
  return (shop, userId) => `${sanitizeShop(config)(shop, !0)}_${userId}`;
}
function getOfflineId(config) {
  return (shop) => `offline_${sanitizeShop(config)(shop, !0)}`;
}
function getCurrentSessionId(config) {
  return async function({ isOnline, ...adapterArgs }) {
    let request2 = await abstractConvertRequest(adapterArgs), log2 = logger(config);
    if (config.isEmbeddedApp) {
      log2.debug("App is embedded, looking for session id in JWT payload", {
        isOnline
      });
      let authHeader = request2.headers.Authorization;
      if (authHeader) {
        let matches = (typeof authHeader == "string" ? authHeader : authHeader[0]).match(/^Bearer (.+)$/);
        if (!matches)
          throw log2.error("Missing Bearer token in authorization header", { isOnline }), new MissingJwtTokenError("Missing Bearer token in authorization header");
        let jwtPayload = await decodeSessionToken(config)(matches[1]), shop = jwtPayload.dest.replace(/^https:\/\//, "");
        return log2.debug("Found valid JWT payload", { shop, isOnline }), isOnline ? getJwtSessionId(config)(shop, jwtPayload.sub) : getOfflineId(config)(shop);
      } else
        log2.error("Missing Authorization header, was the request made with authenticatedFetch?", { isOnline });
    } else
      return log2.debug("App is not embedded, looking for session id in cookies", {
        isOnline
      }), new Cookies(request2, {}, {
        keys: [config.apiSecretKey]
      }).getAndVerify(SESSION_COOKIE_NAME);
  };
}
function customAppSession(config) {
  return (shop) => new Session({
    id: "",
    shop: `${sanitizeShop(config)(shop, !0)}`,
    state: "",
    isOnline: !1
  });
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/auth/oauth/create-session.mjs
function createSession({ config, accessTokenResponse, shop, state }) {
  let associatedUser = accessTokenResponse.associated_user, isOnline = Boolean(associatedUser);
  if (logger(config).info("Creating new session", { shop, isOnline }), isOnline) {
    let sessionId, responseBody = accessTokenResponse, { access_token, scope, ...rest } = responseBody, sessionExpiration = new Date(Date.now() + responseBody.expires_in * 1e3);
    return config.isEmbeddedApp ? sessionId = getJwtSessionId(config)(shop, `${rest.associated_user.id}`) : sessionId = (0, import_uuid.v4)(), new Session({
      id: sessionId,
      shop,
      state,
      isOnline,
      accessToken: access_token,
      scope,
      expires: sessionExpiration,
      onlineAccessInfo: rest
    });
  } else
    return new Session({
      id: getOfflineId(config)(shop),
      shop,
      state,
      isOnline,
      accessToken: accessTokenResponse.access_token,
      scope: accessTokenResponse.scope
    });
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/auth/oauth/oauth.mjs
var logForBot = ({ request: request2, log: log2, func }) => {
  log2.debug(`Possible bot request to auth ${func}: `, {
    userAgent: request2.headers["User-Agent"]
  });
};
function begin(config) {
  return async ({ shop, callbackPath, isOnline, ...adapterArgs }) => {
    throwIfCustomStoreApp(config.isCustomStoreApp, "Cannot perform OAuth for private apps");
    let log2 = logger(config);
    log2.info("Beginning OAuth", { shop, isOnline, callbackPath });
    let request2 = await abstractConvertRequest(adapterArgs), response = await abstractConvertIncomingResponse(adapterArgs), userAgent = request2.headers["User-Agent"];
    if (Array.isArray(userAgent) && (userAgent = userAgent[0]), (0, import_isbot.isbot)(userAgent))
      return logForBot({ request: request2, log: log2, func: "begin" }), response.statusCode = 410, abstractConvertResponse(response, adapterArgs);
    let cookies = new Cookies(request2, response, {
      keys: [config.apiSecretKey],
      secure: !0
    }), state = nonce();
    await cookies.setAndSign(STATE_COOKIE_NAME, state, {
      expires: new Date(Date.now() + 6e4),
      sameSite: "lax",
      secure: !0,
      path: callbackPath
    });
    let scopes = config.scopes ? config.scopes.toString() : "", query = {
      client_id: config.apiKey,
      scope: scopes,
      redirect_uri: `${config.hostScheme}://${config.hostName}${callbackPath}`,
      state,
      "grant_options[]": isOnline ? "per-user" : ""
    }, processedQuery = new ProcessedQuery();
    processedQuery.putAll(query);
    let redirectUrl = `https://${sanitizeShop(config)(shop, !0)}/admin/oauth/authorize${processedQuery.stringify()}`;
    return response.statusCode = 302, response.statusText = "Found", response.headers = {
      ...response.headers,
      ...cookies.response.headers,
      Location: redirectUrl
    }, log2.debug(`OAuth started, redirecting to ${redirectUrl}`, { shop, isOnline }), abstractConvertResponse(response, adapterArgs);
  };
}
function callback(config) {
  return async function({ ...adapterArgs }) {
    throwIfCustomStoreApp(config.isCustomStoreApp, "Cannot perform OAuth for private apps");
    let log2 = logger(config), request2 = await abstractConvertRequest(adapterArgs), query = new URL(request2.url, `${config.hostScheme}://${config.hostName}`).searchParams, shop = query.get("shop"), response = {}, userAgent = request2.headers["User-Agent"];
    if (Array.isArray(userAgent) && (userAgent = userAgent[0]), (0, import_isbot.isbot)(userAgent))
      throw logForBot({ request: request2, log: log2, func: "callback" }), new BotActivityDetected("Invalid OAuth callback initiated by bot");
    log2.info("Completing OAuth", { shop });
    let cookies = new Cookies(request2, response, {
      keys: [config.apiSecretKey],
      secure: !0
    }), stateFromCookie = await cookies.getAndVerify(STATE_COOKIE_NAME);
    if (cookies.deleteCookie(STATE_COOKIE_NAME), !stateFromCookie)
      throw log2.error("Could not find OAuth cookie", { shop }), new CookieNotFound(`Cannot complete OAuth process. Could not find an OAuth cookie for shop url: ${shop}`);
    let authQuery = Object.fromEntries(query.entries());
    if (!await validQuery({ config, query: authQuery, stateFromCookie }))
      throw log2.error("Invalid OAuth callback", { shop, stateFromCookie }), new InvalidOAuthError("Invalid OAuth callback.");
    log2.debug("OAuth request is valid, requesting access token", { shop });
    let body = {
      client_id: config.apiKey,
      client_secret: config.apiSecretKey,
      code: query.get("code")
    }, cleanShop = sanitizeShop(config)(query.get("shop"), !0), postResponse = await fetchRequestFactory(config)(`https://${cleanShop}/admin/oauth/access_token`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": DataType.JSON,
        Accept: DataType.JSON
      }
    });
    postResponse.ok || throwFailedRequest(await postResponse.json(), !1, postResponse);
    let session = createSession({
      accessTokenResponse: await postResponse.json(),
      shop: cleanShop,
      state: stateFromCookie,
      config
    });
    return config.isEmbeddedApp || await cookies.setAndSign(SESSION_COOKIE_NAME, session.id, {
      expires: session.expires,
      sameSite: "lax",
      secure: !0,
      path: "/"
    }), {
      headers: await abstractConvertHeaders(cookies.response.headers, adapterArgs),
      session
    };
  };
}
async function validQuery({ config, query, stateFromCookie }) {
  return await validateHmac(config)(query) && safeCompare(query.state, stateFromCookie);
}
function throwIfCustomStoreApp(isCustomStoreApp, message) {
  if (isCustomStoreApp)
    throw new PrivateAppError(message);
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/auth/get-embedded-app-url.mjs
function getEmbeddedAppUrl(config) {
  return async ({ ...adapterArgs }) => {
    let request2 = await abstractConvertRequest(adapterArgs);
    if (!request2)
      throw new MissingRequiredArgument("getEmbeddedAppUrl requires a request object argument");
    if (!request2.url)
      throw new InvalidRequestError("Request does not contain a URL");
    let host = new URL(request2.url, `https://${request2.headers.host}`).searchParams.get("host");
    if (typeof host != "string")
      throw new InvalidRequestError("Request does not contain a host query parameter");
    return buildEmbeddedAppUrl(config)(host);
  };
}
function buildEmbeddedAppUrl(config) {
  return (host) => (sanitizeHost()(host, !0), `https://${decodeHost(host)}/apps/${config.apiKey}`);
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/auth/oauth/token-exchange.mjs
var RequestedTokenType;
(function(RequestedTokenType2) {
  RequestedTokenType2.OnlineAccessToken = "urn:shopify:params:oauth:token-type:online-access-token", RequestedTokenType2.OfflineAccessToken = "urn:shopify:params:oauth:token-type:offline-access-token";
})(RequestedTokenType || (RequestedTokenType = {}));
var TokenExchangeGrantType = "urn:ietf:params:oauth:grant-type:token-exchange", IdTokenType = "urn:ietf:params:oauth:token-type:id_token";
function tokenExchange(config) {
  return async ({ shop, sessionToken, requestedTokenType }) => {
    await decodeSessionToken(config)(sessionToken);
    let body = {
      client_id: config.apiKey,
      client_secret: config.apiSecretKey,
      grant_type: TokenExchangeGrantType,
      subject_token: sessionToken,
      subject_token_type: IdTokenType,
      requested_token_type: requestedTokenType
    }, cleanShop = sanitizeShop(config)(shop, !0), postResponse = await fetchRequestFactory(config)(`https://${cleanShop}/admin/oauth/access_token`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": DataType.JSON,
        Accept: DataType.JSON
      }
    });
    return postResponse.ok || throwFailedRequest(await postResponse.json(), !1, postResponse), {
      session: createSession({
        accessTokenResponse: await postResponse.json(),
        shop: cleanShop,
        // We need to keep this as an empty string as our template DB schemas have this required
        state: "",
        config
      })
    };
  };
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/auth/index.mjs
function shopifyAuth(config) {
  return {
    begin: begin(config),
    callback: callback(config),
    nonce,
    safeCompare,
    getEmbeddedAppUrl: getEmbeddedAppUrl(config),
    buildEmbeddedAppUrl: buildEmbeddedAppUrl(config),
    tokenExchange: tokenExchange(config)
  };
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/session/index.mjs
function shopifySession(config) {
  return {
    customAppSession: customAppSession(config),
    getCurrentId: getCurrentSessionId(config),
    getOfflineId: getOfflineId(config),
    getJwtSessionId: getJwtSessionId(config),
    decodeSessionToken: decodeSessionToken(config)
  };
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/utils/version-compatible.mjs
function versionCompatible(config) {
  return (referenceVersion, currentVersion = config.apiVersion) => {
    if (currentVersion === ApiVersion.Unstable)
      return !0;
    let numericVersion = (version) => parseInt(version.replace("-", ""), 10), current = numericVersion(currentVersion), reference = numericVersion(referenceVersion);
    return current >= reference;
  };
}
function versionPriorTo(config) {
  return (referenceVersion, currentVersion = config.apiVersion) => !versionCompatible(config)(referenceVersion, currentVersion);
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/utils/index.mjs
function shopifyUtils(config) {
  return {
    sanitizeShop: sanitizeShop(config),
    sanitizeHost: sanitizeHost(),
    validateHmac: validateHmac(config),
    versionCompatible: versionCompatible(config),
    versionPriorTo: versionPriorTo(config),
    shopAdminUrlToLegacyUrl,
    legacyUrlToShopAdminUrl
  };
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/webhooks/types.mjs
var DeliveryMethod;
(function(DeliveryMethod3) {
  DeliveryMethod3.Http = "http", DeliveryMethod3.EventBridge = "eventbridge", DeliveryMethod3.PubSub = "pubsub";
})(DeliveryMethod || (DeliveryMethod = {}));
var WebhookOperation;
(function(WebhookOperation2) {
  WebhookOperation2.Create = "create", WebhookOperation2.Update = "update", WebhookOperation2.Delete = "delete";
})(WebhookOperation || (WebhookOperation = {}));
var WebhookValidationErrorReason = {
  ...ValidationErrorReason,
  MissingHeaders: "missing_headers"
};

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/webhooks/registry.mjs
function registry() {
  return {};
}
function topicForStorage(topic) {
  return topic.toUpperCase().replace(/\/|\./g, "_");
}
function addHandlers(config, webhookRegistry) {
  return function(handlersToAdd) {
    for (let [topic, handlers] of Object.entries(handlersToAdd)) {
      let topicKey = topicForStorage(topic);
      if (Array.isArray(handlers))
        for (let handler of handlers)
          mergeOrAddHandler(config, webhookRegistry, topicKey, handler);
      else
        mergeOrAddHandler(config, webhookRegistry, topicKey, handlers);
    }
  };
}
function getTopicsAdded(webhookRegistry) {
  return function() {
    return Object.keys(webhookRegistry);
  };
}
function getHandlers(webhookRegistry) {
  return function(topic) {
    return webhookRegistry[topicForStorage(topic)] || [];
  };
}
function handlerIdentifier(config, handler) {
  let prefix = handler.deliveryMethod;
  switch (handler.deliveryMethod) {
    case DeliveryMethod.Http:
      return `${prefix}_${addHostToCallbackUrl(config, handler.callbackUrl)}`;
    case DeliveryMethod.EventBridge:
      return `${prefix}_${handler.arn}`;
    case DeliveryMethod.PubSub:
      return `${prefix}_${handler.pubSubProject}:${handler.pubSubTopic}`;
    default:
      throw new InvalidDeliveryMethodError(`Unrecognized delivery method '${handler.deliveryMethod}'`);
  }
}
function addHostToCallbackUrl(config, callbackUrl) {
  return callbackUrl.startsWith("/") ? `${config.hostScheme}://${config.hostName}${callbackUrl}` : callbackUrl;
}
function mergeOrAddHandler(config, webhookRegistry, topic, handler) {
  let log2 = logger(config);
  if (handler.includeFields?.sort(), handler.metafieldNamespaces?.sort(), !(topic in webhookRegistry)) {
    webhookRegistry[topic] = [handler];
    return;
  }
  let identifier = handlerIdentifier(config, handler);
  for (let index in webhookRegistry[topic]) {
    if (!Object.prototype.hasOwnProperty.call(webhookRegistry[topic], index))
      continue;
    let existingHandler = webhookRegistry[topic][index], existingIdentifier = handlerIdentifier(config, existingHandler);
    if (identifier === existingIdentifier)
      if (handler.deliveryMethod === DeliveryMethod.Http) {
        log2.info(`Detected multiple handlers for '${topic}', webhooks.process will call them sequentially`);
        break;
      } else
        throw new InvalidDeliveryMethodError(`Can only add multiple handlers for a topic when deliveryMethod is Http. Please be sure that you used addHandler method once after creating ShopifyApi instance in your app.  Invalid handler: ${JSON.stringify(handler)}`);
  }
  webhookRegistry[topic].push(handler);
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/webhooks/query-template.mjs
function queryTemplate(template, params) {
  let query = template;
  return Object.entries(params).forEach(([key, value]) => {
    query = query.replace(`{{${key}}}`, value);
  }), query;
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/webhooks/register.mjs
function register(config, webhookRegistry) {
  return async function({ session }) {
    let log2 = logger(config);
    log2.info("Registering webhooks", { shop: session.shop });
    let registerReturn = Object.keys(webhookRegistry).reduce((acc, topic) => (acc[topic] = [], acc), {}), existingHandlers = await getExistingHandlers(config, session);
    log2.debug(`Existing topics: [${Object.keys(existingHandlers).join(", ")}]`, { shop: session.shop });
    for (let topic in webhookRegistry)
      Object.prototype.hasOwnProperty.call(webhookRegistry, topic) && (privacyTopics.includes(topic) || (registerReturn[topic] = await registerTopic({
        config,
        session,
        topic,
        existingHandlers: existingHandlers[topic] || [],
        handlers: getHandlers(webhookRegistry)(topic)
      }), delete existingHandlers[topic]));
    for (let topic in existingHandlers) {
      if (!Object.prototype.hasOwnProperty.call(existingHandlers, topic))
        continue;
      let GraphqlClient2 = graphqlClientClass({ config }), client = new GraphqlClient2({ session });
      registerReturn[topic] = await runMutations({
        config,
        client,
        topic,
        handlers: existingHandlers[topic],
        operation: WebhookOperation.Delete
      });
    }
    return registerReturn;
  };
}
async function getExistingHandlers(config, session) {
  let GraphqlClient2 = graphqlClientClass({ config }), client = new GraphqlClient2({ session }), existingHandlers = {}, hasNextPage, endCursor = null;
  do {
    let query = buildCheckQuery(endCursor), response = await client.request(query);
    response.data?.webhookSubscriptions?.edges.forEach((edge) => {
      let handler = buildHandlerFromNode(edge);
      existingHandlers[edge.node.topic] || (existingHandlers[edge.node.topic] = []), existingHandlers[edge.node.topic].push(handler);
    }), endCursor = response.data?.webhookSubscriptions?.pageInfo.endCursor, hasNextPage = response.data?.webhookSubscriptions?.pageInfo.hasNextPage;
  } while (hasNextPage);
  return existingHandlers;
}
function buildCheckQuery(endCursor) {
  return queryTemplate(TEMPLATE_GET_HANDLERS, {
    END_CURSOR: JSON.stringify(endCursor)
  });
}
function buildHandlerFromNode(edge) {
  let endpoint = edge.node.endpoint, handler;
  switch (endpoint.__typename) {
    case "WebhookHttpEndpoint":
      handler = {
        deliveryMethod: DeliveryMethod.Http,
        callbackUrl: endpoint.callbackUrl,
        // This is a dummy for now because we don't really care about it
        callback: async () => {
        }
      };
      break;
    case "WebhookEventBridgeEndpoint":
      handler = {
        deliveryMethod: DeliveryMethod.EventBridge,
        arn: endpoint.arn
      };
      break;
    case "WebhookPubSubEndpoint":
      handler = {
        deliveryMethod: DeliveryMethod.PubSub,
        pubSubProject: endpoint.pubSubProject,
        pubSubTopic: endpoint.pubSubTopic
      };
      break;
  }
  return handler.id = edge.node.id, handler.includeFields = edge.node.includeFields, handler.metafieldNamespaces = edge.node.metafieldNamespaces, handler.includeFields?.sort(), handler.metafieldNamespaces?.sort(), handler;
}
async function registerTopic({ config, session, topic, existingHandlers, handlers }) {
  let registerResults = [], { toCreate, toUpdate, toDelete } = categorizeHandlers(config, existingHandlers, handlers), GraphqlClient2 = graphqlClientClass({ config }), client = new GraphqlClient2({ session }), operation = WebhookOperation.Create;
  return registerResults = registerResults.concat(await runMutations({ config, client, topic, operation, handlers: toCreate })), operation = WebhookOperation.Update, registerResults = registerResults.concat(await runMutations({ config, client, topic, operation, handlers: toUpdate })), operation = WebhookOperation.Delete, registerResults = registerResults.concat(await runMutations({ config, client, topic, operation, handlers: toDelete })), registerResults;
}
function categorizeHandlers(config, existingHandlers, handlers) {
  let handlersByKey = handlers.reduce((acc, value) => (acc[handlerIdentifier(config, value)] = value, acc), {}), existingHandlersByKey = existingHandlers.reduce((acc, value) => (acc[handlerIdentifier(config, value)] = value, acc), {}), toCreate = { ...handlersByKey }, toUpdate = {}, toDelete = {};
  for (let existingKey in existingHandlersByKey) {
    if (!Object.prototype.hasOwnProperty.call(existingHandlersByKey, existingKey))
      continue;
    let existingHandler = existingHandlersByKey[existingKey], handler = handlersByKey[existingKey];
    existingKey in handlersByKey ? (delete toCreate[existingKey], areHandlerFieldsEqual(existingHandler, handler) || (toUpdate[existingKey] = handler, toUpdate[existingKey].id = existingHandler.id)) : toDelete[existingKey] = existingHandler;
  }
  return {
    toCreate: Object.values(toCreate),
    toUpdate: Object.values(toUpdate),
    toDelete: Object.values(toDelete)
  };
}
function areHandlerFieldsEqual(arr1, arr2) {
  let includeFieldsEqual = arraysEqual(arr1.includeFields || [], arr2.includeFields || []), metafieldNamespacesEqual = arraysEqual(arr1.metafieldNamespaces || [], arr2.metafieldNamespaces || []);
  return includeFieldsEqual && metafieldNamespacesEqual;
}
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return !1;
  for (let i = 0; i < arr1.length; i++)
    if (arr1[i] !== arr2[i])
      return !1;
  return !0;
}
async function runMutations({ config, client, topic, handlers, operation }) {
  let registerResults = [];
  for (let handler of handlers)
    registerResults.push(await runMutation({ config, client, topic, handler, operation }));
  return registerResults;
}
async function runMutation({ config, client, topic, handler, operation }) {
  let registerResult;
  logger(config).debug("Running webhook mutation", { topic, operation });
  try {
    let query = buildMutation(config, topic, handler, operation), result = await client.request(query);
    registerResult = {
      deliveryMethod: handler.deliveryMethod,
      success: isSuccess(result, handler, operation),
      result,
      operation
    };
  } catch (error) {
    if (error instanceof InvalidDeliveryMethodError)
      registerResult = {
        deliveryMethod: handler.deliveryMethod,
        success: !1,
        result: { message: error.message },
        operation
      };
    else
      throw error;
  }
  return registerResult;
}
function buildMutation(config, topic, handler, operation) {
  let params = {}, identifier;
  handler.id ? identifier = `id: "${handler.id}"` : identifier = `topic: ${topic}`;
  let mutationArguments = {
    MUTATION_NAME: getMutationName(handler, operation),
    IDENTIFIER: identifier,
    MUTATION_PARAMS: ""
  };
  if (operation !== WebhookOperation.Delete) {
    switch (handler.deliveryMethod) {
      case DeliveryMethod.Http:
        params.callbackUrl = `"${addHostToCallbackUrl(config, handler.callbackUrl)}"`;
        break;
      case DeliveryMethod.EventBridge:
        params.arn = `"${handler.arn}"`;
        break;
      case DeliveryMethod.PubSub:
        params.pubSubProject = `"${handler.pubSubProject}"`, params.pubSubTopic = `"${handler.pubSubTopic}"`;
        break;
      default:
        throw new InvalidDeliveryMethodError(`Unrecognized delivery method '${handler.deliveryMethod}'`);
    }
    if (handler.includeFields && (params.includeFields = JSON.stringify(handler.includeFields)), handler.metafieldNamespaces && (params.metafieldNamespaces = JSON.stringify(handler.metafieldNamespaces)), handler.subTopic) {
      let subTopicString = `subTopic: "${handler.subTopic}",`;
      mutationArguments.MUTATION_PARAMS = subTopicString;
    }
    let paramsString = Object.entries(params).map(([key, value]) => `${key}: ${value}`).join(", ");
    mutationArguments.MUTATION_PARAMS += `webhookSubscription: {${paramsString}}`;
  }
  return queryTemplate(TEMPLATE_MUTATION, mutationArguments);
}
function getMutationName(handler, operation) {
  switch (operation) {
    case WebhookOperation.Create:
      return `${getEndpoint(handler)}Create`;
    case WebhookOperation.Update:
      return `${getEndpoint(handler)}Update`;
    case WebhookOperation.Delete:
      return "webhookSubscriptionDelete";
    default:
      throw new ShopifyError(`Unrecognized operation '${operation}'`);
  }
}
function getEndpoint(handler) {
  switch (handler.deliveryMethod) {
    case DeliveryMethod.Http:
      return "webhookSubscription";
    case DeliveryMethod.EventBridge:
      return "eventBridgeWebhookSubscription";
    case DeliveryMethod.PubSub:
      return "pubSubWebhookSubscription";
    default:
      throw new ShopifyError(`Unrecognized delivery method '${handler.deliveryMethod}'`);
  }
}
function isSuccess(result, handler, operation) {
  let mutationName = getMutationName(handler, operation);
  return Boolean(result.data && result.data[mutationName] && result.data[mutationName].userErrors.length === 0);
}
var TEMPLATE_GET_HANDLERS = `query shopifyApiReadWebhookSubscriptions {
  webhookSubscriptions(
    first: 250,
    after: {{END_CURSOR}},
  ) {
    edges {
      node {
        id
        topic
        includeFields
        metafieldNamespaces
        endpoint {
          __typename
          ... on WebhookHttpEndpoint {
            callbackUrl
          }
          ... on WebhookEventBridgeEndpoint {
            arn
          }
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}`, TEMPLATE_MUTATION = `
  mutation shopifyApiCreateWebhookSubscription {
    {{MUTATION_NAME}}(
      {{IDENTIFIER}},
      {{MUTATION_PARAMS}}
    ) {
      userErrors {
        field
        message
      }
    }
  }
`;

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/webhooks/process.mjs
var import_network4 = require("@shopify/network");

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/webhooks/validate.mjs
var OPTIONAL_HANDLER_PROPERTIES = {
  subTopic: ShopifyHeader.SubTopic
}, HANDLER_PROPERTIES = {
  apiVersion: ShopifyHeader.ApiVersion,
  domain: ShopifyHeader.Domain,
  hmac: ShopifyHeader.Hmac,
  topic: ShopifyHeader.Topic,
  webhookId: ShopifyHeader.WebhookId,
  ...OPTIONAL_HANDLER_PROPERTIES
};
function validateFactory(config) {
  return async function({ rawBody, ...adapterArgs }) {
    let request2 = await abstractConvertRequest(adapterArgs), validHmacResult = await validateHmacFromRequestFactory(config)({
      type: HmacValidationType.Webhook,
      rawBody,
      ...adapterArgs
    });
    return validHmacResult.valid ? checkWebhookHeaders(request2.headers) : (validHmacResult.reason === ValidationErrorReason.InvalidHmac && await logger(config).debug("Webhook HMAC validation failed. Please note that events manually triggered from a store's Notifications settings will fail this validation. To test this, please use the CLI or trigger the actual event in a development store."), validHmacResult);
  };
}
function checkWebhookHeaders(headers) {
  let missingHeaders = [], headerValues = Object.entries(HANDLER_PROPERTIES).reduce((acc, [property, headerName]) => {
    let headerValue = getHeader(headers, headerName);
    return headerValue ? acc[property] = headerValue : property in OPTIONAL_HANDLER_PROPERTIES || missingHeaders.push(headerName), acc;
  }, {});
  return missingHeaders.length ? {
    valid: !1,
    reason: WebhookValidationErrorReason.MissingHeaders,
    missingHeaders
  } : {
    valid: !0,
    ...headerValues,
    ...headerValues.subTopic ? { subTopic: headerValues.subTopic } : {},
    topic: topicForStorage(headerValues.topic)
  };
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/webhooks/process.mjs
var STATUS_TEXT_LOOKUP = {
  [import_network4.StatusCode.Ok]: "OK",
  [import_network4.StatusCode.BadRequest]: "Bad Request",
  [import_network4.StatusCode.Unauthorized]: "Unauthorized",
  [import_network4.StatusCode.NotFound]: "Not Found",
  [import_network4.StatusCode.InternalServerError]: "Internal Server Error"
};
function process2(config, webhookRegistry) {
  return async function({ context, rawBody, ...adapterArgs }) {
    let response = {
      statusCode: import_network4.StatusCode.Ok,
      statusText: STATUS_TEXT_LOOKUP[import_network4.StatusCode.Ok],
      headers: {}
    };
    await logger(config).info("Receiving webhook request");
    let webhookCheck = await validateFactory(config)({
      rawBody,
      ...adapterArgs
    }), errorMessage = "Unknown error while handling webhook";
    if (webhookCheck.valid) {
      let handlerResult = await callWebhookHandlers(config, webhookRegistry, webhookCheck, rawBody, context);
      response.statusCode = handlerResult.statusCode, isOK(response) || (errorMessage = handlerResult.errorMessage || errorMessage);
    } else {
      let errorResult = await handleInvalidWebhook(config, webhookCheck);
      response.statusCode = errorResult.statusCode, response.statusText = STATUS_TEXT_LOOKUP[response.statusCode], errorMessage = errorResult.errorMessage;
    }
    let returnResponse = await abstractConvertResponse(response, adapterArgs);
    if (!isOK(response))
      throw new InvalidWebhookError({
        message: errorMessage,
        response: returnResponse
      });
    return Promise.resolve(returnResponse);
  };
}
async function callWebhookHandlers(config, webhookRegistry, webhookCheck, rawBody, context) {
  let log2 = logger(config), { hmac: _hmac, valid: _valid, ...loggingContext } = webhookCheck;
  await log2.debug("Webhook request is valid, looking for HTTP handlers to call", loggingContext);
  let handlers = webhookRegistry[webhookCheck.topic] || [], response = { statusCode: import_network4.StatusCode.Ok }, found = !1;
  for (let handler of handlers)
    if (handler.deliveryMethod === DeliveryMethod.Http) {
      if (!handler.callback)
        throw response.statusCode = import_network4.StatusCode.InternalServerError, response.errorMessage = "Cannot call webhooks.process with a webhook handler that doesn't have a callback", new MissingWebhookCallbackError({
          message: response.errorMessage,
          response
        });
      found = !0, await log2.debug("Found HTTP handler, triggering it", loggingContext);
      try {
        await handler.callback(webhookCheck.topic, webhookCheck.domain, rawBody, webhookCheck.webhookId, webhookCheck.apiVersion, ...webhookCheck?.subTopic ? webhookCheck.subTopic : "", context);
      } catch (error) {
        response.statusCode = import_network4.StatusCode.InternalServerError, response.errorMessage = error.message;
      }
    }
  return found || (await log2.debug("No HTTP handlers found", loggingContext), response.statusCode = import_network4.StatusCode.NotFound, response.errorMessage = `No HTTP webhooks registered for topic ${webhookCheck.topic}`), response;
}
async function handleInvalidWebhook(config, webhookCheck) {
  let response = {
    statusCode: import_network4.StatusCode.InternalServerError,
    errorMessage: "Unknown error while handling webhook"
  };
  switch (webhookCheck.reason) {
    case WebhookValidationErrorReason.MissingHeaders:
      response.statusCode = import_network4.StatusCode.BadRequest, response.errorMessage = `Missing one or more of the required HTTP headers to process webhooks: [${webhookCheck.missingHeaders.join(", ")}]`;
      break;
    case WebhookValidationErrorReason.MissingBody:
      response.statusCode = import_network4.StatusCode.BadRequest, response.errorMessage = "No body was received when processing webhook";
      break;
    case WebhookValidationErrorReason.MissingHmac:
      response.statusCode = import_network4.StatusCode.BadRequest, response.errorMessage = "Missing HMAC header in request";
      break;
    case WebhookValidationErrorReason.InvalidHmac:
      response.statusCode = import_network4.StatusCode.Unauthorized, response.errorMessage = "Could not validate request HMAC";
      break;
  }
  return await logger(config).debug(`Webhook request is invalid, returning ${response.statusCode}: ${response.errorMessage}`), response;
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/webhooks/index.mjs
function shopifyWebhooks(config) {
  let webhookRegistry = registry();
  return {
    addHandlers: addHandlers(config, webhookRegistry),
    getTopicsAdded: getTopicsAdded(webhookRegistry),
    getHandlers: getHandlers(webhookRegistry),
    register: register(config, webhookRegistry),
    process: process2(config, webhookRegistry),
    validate: validateFactory(config)
  };
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/billing/check.mjs
function check(config) {
  return async function({ session, plans, isTest = !0, returnObject = !1 }) {
    if (!config.billing)
      throw new BillingError({
        message: "Attempted to look for purchases without billing configs",
        errorData: []
      });
    let GraphqlClient2 = graphqlClientClass({ config }), client = new GraphqlClient2({ session }), plansArray = Array.isArray(plans) ? plans : [plans];
    return assessPayments({
      plans: plansArray,
      client,
      isTest,
      returnObject
    });
  };
}
async function assessPayments({ plans, client, isTest, returnObject }) {
  let returnValue = returnObject ? {
    hasActivePayment: !1,
    oneTimePurchases: [],
    appSubscriptions: []
  } : !1, installation, endCursor = null;
  do {
    if (installation = (await client.request(HAS_PAYMENTS_QUERY, { variables: { endCursor } })).data?.currentAppInstallation, returnObject)
      installation.activeSubscriptions.map((subscription) => {
        subscriptionMeetsCriteria({ plans, isTest, subscription }) && (returnValue.hasActivePayment = !0, returnValue.appSubscriptions.push(subscription));
      }), installation.oneTimePurchases.edges.map((purchase) => {
        purchaseMeetsCriteria({ plans, isTest, purchase: purchase.node }) && (returnValue.hasActivePayment = !0, returnValue.oneTimePurchases.push(purchase.node));
      });
    else {
      let params = { plans, isTest, installation };
      if (hasSubscription(params) || hasOneTimePayment(params))
        return !0;
    }
    endCursor = installation.oneTimePurchases.pageInfo.endCursor;
  } while (installation?.oneTimePurchases.pageInfo.hasNextPage);
  return returnValue;
}
function subscriptionMeetsCriteria({ plans, isTest, subscription }) {
  return plans.includes(subscription.name) && (isTest || !subscription.test);
}
function purchaseMeetsCriteria({ plans, isTest, purchase }) {
  return plans.includes(purchase.name) && (isTest || !purchase.test) && purchase.status === "ACTIVE";
}
function hasSubscription({ plans, isTest, installation }) {
  return installation.activeSubscriptions.some((subscription) => subscriptionMeetsCriteria({ plans, isTest, subscription }));
}
function hasOneTimePayment({ plans, isTest, installation }) {
  return installation.oneTimePurchases.edges.some((purchase) => purchaseMeetsCriteria({ plans, isTest, purchase: purchase.node }));
}
var HAS_PAYMENTS_QUERY = `
  query appSubscription($endCursor: String) {
    currentAppInstallation {
      activeSubscriptions {
        id
        name
        test
        lineItems {
          id
          plan {
            pricingDetails {
              ... on AppRecurringPricing {
                price {
                  amount
                  currencyCode
                }
                interval
                discount {
                  durationLimitInIntervals
                  remainingDurationInIntervals
                  priceAfterDiscount {
                    amount
                  }
                  value {
                    ... on AppSubscriptionDiscountAmount {
                      amount {
                        amount
                        currencyCode
                      }
                    }
                    ... on AppSubscriptionDiscountPercentage {
                      percentage
                    }
                  }
                }
              }
              ... on AppUsagePricing {
                balanceUsed {
                  amount
                  currencyCode
                }
                cappedAmount {
                  amount
                  currencyCode
                }
                terms
              }
            }
          }
        }
      }
      oneTimePurchases(first: 250, sortKey: CREATED_AT, after: $endCursor) {
        edges {
          node {
            id
            name
            test
            status
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/billing/request.mjs
function request(config) {
  return async function({ session, plan, isTest = !0, returnUrl: returnUrlParam, returnObject = !1, ...overrides }) {
    if (!config.billing || !config.billing[plan])
      throw new BillingError({
        message: `Could not find plan ${plan} in billing settings`,
        errorData: []
      });
    let billingConfig = {
      ...config.billing[plan]
    }, filteredOverrides = Object.fromEntries(Object.entries(overrides).filter(([_key, value]) => value !== void 0)), cleanShopName = session.shop.replace(".myshopify.com", ""), embeddedAppUrl = buildEmbeddedAppUrl(config)(hashString(`admin.shopify.com/store/${cleanShopName}`, HashFormat.Base64)), appUrl = `${config.hostScheme}://${config.hostName}?shop=${session.shop}`, returnUrl = returnUrlParam || (config.isEmbeddedApp ? embeddedAppUrl : appUrl), GraphqlClient2 = graphqlClientClass({ config }), client = new GraphqlClient2({ session });
    function isLineItemPlan(billingConfig2) {
      return "lineItems" in billingConfig2;
    }
    function isOneTimePlan(billingConfig2) {
      return billingConfig2.interval === BillingInterval.OneTime;
    }
    let data;
    if (isLineItemPlan(billingConfig)) {
      let mergedBillingConfigs = mergeBillingConfigs(billingConfig, filteredOverrides);
      data = (await requestSubscriptionPayment({
        billingConfig: mergedBillingConfigs,
        plan,
        client,
        returnUrl,
        isTest
      })).appSubscriptionCreate;
    } else if (isOneTimePlan(billingConfig))
      data = (await requestSinglePayment({
        billingConfig: { ...billingConfig, ...filteredOverrides },
        plan,
        client,
        returnUrl,
        isTest
      })).appPurchaseOneTimeCreate;
    else
      switch (billingConfig.interval) {
        case BillingInterval.Usage: {
          data = (await requestUsagePayment({
            billingConfig: { ...billingConfig, ...filteredOverrides },
            plan,
            client,
            returnUrl,
            isTest
          })).appSubscriptionCreate;
          break;
        }
        default:
          data = (await requestRecurringPayment({
            billingConfig: { ...billingConfig, ...filteredOverrides },
            plan,
            client,
            returnUrl,
            isTest
          })).appSubscriptionCreate;
      }
    if (data.userErrors?.length)
      throw new BillingError({
        message: "Error while billing the store",
        errorData: data.userErrors
      });
    return returnObject ? data : data.confirmationUrl;
  };
}
async function requestSubscriptionPayment({ billingConfig, plan, client, returnUrl, isTest }) {
  let lineItems = billingConfig.lineItems.map((item) => {
    if (item.interval === BillingInterval.Every30Days || item.interval === BillingInterval.Annual) {
      let appRecurringPricingDetails = {
        interval: item.interval,
        price: {
          amount: item.amount,
          currencyCode: item.currencyCode
        }
      };
      return item.discount && (appRecurringPricingDetails.discount = {
        durationLimitInIntervals: item.discount.durationLimitInIntervals,
        value: {
          amount: item.discount.value.amount,
          percentage: item.discount.value.percentage
        }
      }), {
        plan: {
          appRecurringPricingDetails
        }
      };
    } else {
      if (item.interval === BillingInterval.Usage)
        return {
          plan: {
            appUsagePricingDetails: {
              terms: item.terms,
              cappedAmount: {
                amount: item.amount,
                currencyCode: item.currencyCode
              }
            }
          }
        };
      throw new BillingError({
        message: "Invalid interval provided",
        errorData: [item]
      });
    }
  }), mutationResponse = await client.request(RECURRING_PURCHASE_MUTATION, {
    variables: {
      name: plan,
      trialDays: billingConfig.trialDays,
      replacementBehavior: billingConfig.replacementBehavior,
      returnUrl,
      test: isTest,
      lineItems
    }
  });
  if (mutationResponse.errors)
    throw new BillingError({
      message: "Error while billing the store",
      errorData: mutationResponse.errors
    });
  return mutationResponse.data;
}
async function requestRecurringPayment({ billingConfig, plan, client, returnUrl, isTest }) {
  let mutationResponse = await client.request(RECURRING_PURCHASE_MUTATION, {
    variables: {
      name: plan,
      trialDays: billingConfig.trialDays,
      replacementBehavior: billingConfig.replacementBehavior,
      returnUrl,
      test: isTest,
      lineItems: [
        {
          plan: {
            appRecurringPricingDetails: {
              interval: billingConfig.interval,
              price: {
                amount: billingConfig.amount,
                currencyCode: billingConfig.currencyCode
              },
              discount: {
                durationLimitInIntervals: billingConfig.discount?.durationLimitInIntervals,
                value: {
                  amount: billingConfig.discount?.value?.amount,
                  percentage: billingConfig.discount?.value?.percentage
                }
              }
            }
          }
        }
      ]
    }
  });
  if (mutationResponse.errors)
    throw new BillingError({
      message: "Error while billing the store",
      errorData: mutationResponse.errors
    });
  return mutationResponse.data;
}
async function requestUsagePayment({ billingConfig, plan, client, returnUrl, isTest }) {
  let mutationResponse = await client.request(RECURRING_PURCHASE_MUTATION, {
    variables: {
      name: plan,
      returnUrl,
      test: isTest,
      trialDays: billingConfig.trialDays,
      replacementBehavior: billingConfig.replacementBehavior,
      lineItems: [
        {
          plan: {
            appUsagePricingDetails: {
              terms: billingConfig.usageTerms,
              cappedAmount: {
                amount: billingConfig.amount,
                currencyCode: billingConfig.currencyCode
              }
            }
          }
        }
      ]
    }
  });
  if (mutationResponse.errors)
    throw new BillingError({
      message: `Error while billing the store:: ${mutationResponse.errors}`,
      errorData: mutationResponse.errors
    });
  return mutationResponse.data;
}
async function requestSinglePayment({ billingConfig, plan, client, returnUrl, isTest }) {
  let mutationResponse = await client.request(ONE_TIME_PURCHASE_MUTATION, {
    variables: {
      name: plan,
      returnUrl,
      test: isTest,
      price: {
        amount: billingConfig.amount,
        currencyCode: billingConfig.currencyCode
      }
    }
  });
  if (mutationResponse.errors)
    throw new BillingError({
      message: "Error while billing the store",
      errorData: mutationResponse.errors
    });
  return mutationResponse.data;
}
function mergeBillingConfigs(billingConfig, overrides) {
  let mergedConfig = { ...billingConfig, ...overrides }, mergedLineItems = [];
  if (billingConfig.lineItems && overrides.lineItems) {
    for (let i of billingConfig.lineItems) {
      let found = !1;
      for (let j of overrides.lineItems)
        if (i.interval === j.interval) {
          mergedLineItems.push({ ...i, ...j }), found = !0;
          break;
        }
      found || mergedLineItems.push(i);
    }
    mergedConfig.lineItems = mergedLineItems;
  }
  return mergedConfig;
}
var RECURRING_PURCHASE_MUTATION = `
  mutation test(
    $name: String!
    $lineItems: [AppSubscriptionLineItemInput!]!
    $returnUrl: URL!
    $test: Boolean
    $trialDays: Int
    $replacementBehavior: AppSubscriptionReplacementBehavior
  ) {
    appSubscriptionCreate(
      name: $name
      lineItems: $lineItems
      returnUrl: $returnUrl
      test: $test
      trialDays: $trialDays
      replacementBehavior: $replacementBehavior
    ) {
      appSubscription {
        id
        name
        test
      }
      confirmationUrl
      userErrors {
        field
        message
      }
    }
  }
`, ONE_TIME_PURCHASE_MUTATION = `
  mutation test(
    $name: String!
    $price: MoneyInput!
    $returnUrl: URL!
    $test: Boolean
  ) {
    appPurchaseOneTimeCreate(
      name: $name
      price: $price
      returnUrl: $returnUrl
      test: $test
    ) {
      appPurchaseOneTime {
        id
        name
        test
      }
      confirmationUrl
      userErrors {
        field
        message
      }
    }
  }
`;

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/billing/cancel.mjs
var CANCEL_MUTATION = `
  mutation appSubscriptionCancel($id: ID!, $prorate: Boolean) {
    appSubscriptionCancel(id: $id, prorate: $prorate) {
      appSubscription {
        id
        name
        test
      }
      userErrors {
        field
        message
      }
    }
  }
`;
function cancel(config) {
  return async function(subscriptionInfo) {
    let { session, subscriptionId, prorate = !0 } = subscriptionInfo, GraphqlClient2 = graphqlClientClass({ config }), client = new GraphqlClient2({ session });
    try {
      let response = await client.request(CANCEL_MUTATION, {
        variables: { id: subscriptionId, prorate }
      });
      if (response.data?.appSubscriptionCancel?.userErrors.length)
        throw new BillingError({
          message: "Error while canceling a subscription",
          errorData: response.data?.appSubscriptionCancel?.userErrors
        });
      return response.data?.appSubscriptionCancel?.appSubscription;
    } catch (error) {
      throw error instanceof GraphqlQueryError ? new BillingError({
        message: error.message,
        errorData: error.response?.errors
      }) : error;
    }
  };
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/billing/subscriptions.mjs
var SUBSCRIPTION_QUERY = `
query appSubscription {
  currentAppInstallation {
    activeSubscriptions {
      id
      name
      test
      lineItems {
        id
        plan {
          pricingDetails {
            ... on AppRecurringPricing {
              price {
                amount
                currencyCode
              }
              interval
              discount {
                durationLimitInIntervals
                remainingDurationInIntervals
                priceAfterDiscount {
                  amount
                }
                value {
                  ... on AppSubscriptionDiscountAmount {
                    amount {
                      amount
                      currencyCode
                    }
                  }
                  ... on AppSubscriptionDiscountPercentage {
                    percentage
                  }
                }
              }
            }
            ... on AppUsagePricing {
              balanceUsed {
                amount
                currencyCode
              }
              cappedAmount {
                amount
                currencyCode
              }
              terms
            }
          }
        }
      }
    }
  }
}
`;
function subscriptions(config) {
  return async function({ session }) {
    if (!config.billing)
      throw new BillingError({
        message: "Attempted to look for purchases without billing configs",
        errorData: []
      });
    let GraphqlClient2 = graphqlClientClass({ config });
    return (await new GraphqlClient2({ session }).request(SUBSCRIPTION_QUERY)).data?.currentAppInstallation;
  };
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/billing/index.mjs
function shopifyBilling(config) {
  return {
    check: check(config),
    request: request(config),
    cancel: cancel(config),
    subscriptions: subscriptions(config)
  };
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/flow/validate.mjs
function validateFactory2(config) {
  return async function({ rawBody, ...adapterArgs }) {
    return validateHmacFromRequestFactory(config)({
      type: HmacValidationType.Flow,
      rawBody,
      ...adapterArgs
    });
  };
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/flow/index.mjs
function shopifyFlow(config) {
  return {
    validate: validateFactory2(config)
  };
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/fulfillment-service/validate.mjs
function validateFactory3(config) {
  return async function({ rawBody, ...adapterArgs }) {
    return validateHmacFromRequestFactory(config)({
      type: HmacValidationType.FulfillmentService,
      rawBody,
      ...adapterArgs
    });
  };
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/fulfillment-service/index.mjs
function fulfillmentService(config) {
  return {
    validate: validateFactory3(config)
  };
}

// node_modules/@shopify/shopify-app-remix/node_modules/@shopify/shopify-api/dist/esm/lib/index.mjs
function shopifyApi({ future: future2, restResources, ...config }) {
  let libConfig = { ...config, future: future2, restResources }, validatedConfig = validateConfig(libConfig), shopify2 = {
    config: validatedConfig,
    clients: clientClasses(validatedConfig),
    auth: shopifyAuth(validatedConfig),
    session: shopifySession(validatedConfig),
    utils: shopifyUtils(validatedConfig),
    webhooks: shopifyWebhooks(validatedConfig),
    billing: shopifyBilling(validatedConfig),
    flow: shopifyFlow(validatedConfig),
    fulfillmentService: fulfillmentService(validatedConfig),
    logger: logger(validatedConfig),
    rest: {}
  };
  return restResources && (shopify2.rest = loadRestResources({
    resources: restResources,
    config: validatedConfig,
    RestClient: restClientClass({ config: validatedConfig })
  })), shopify2.logger.info(`version ${SHOPIFY_API_LIBRARY_VERSION}, environment ${abstractRuntimeString()}`).catch((err) => console.log(err)), logDisabledFutureFlags(validatedConfig, shopify2.logger), shopify2;
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/types.mjs
var AppDistribution;
(function(AppDistribution2) {
  AppDistribution2.AppStore = "app_store", AppDistribution2.SingleMerchant = "single_merchant", AppDistribution2.ShopifyAdmin = "shopify_admin";
})(AppDistribution || (AppDistribution = {}));
var LoginErrorType;
(function(LoginErrorType2) {
  LoginErrorType2.MissingShop = "MISSING_SHOP", LoginErrorType2.InvalidShop = "INVALID_SHOP";
})(LoginErrorType || (LoginErrorType = {}));

// node_modules/@shopify/shopify-app-remix/dist/esm/server/boundary/error.mjs
var import_jsx_runtime = require("react/jsx-runtime");

// node_modules/@shopify/shopify-app-remix/dist/esm/server/version.mjs
var SHOPIFY_REMIX_LIBRARY_VERSION = "2.8.2";

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/webhooks/register.mjs
function registerWebhooksFactory({ api, logger: logger2 }) {
  return async function({ session }) {
    return api.webhooks.register({ session }).then((response) => (Object.entries(response).forEach(([topic, topicResults]) => {
      topicResults.forEach(({ success, ...rest }) => {
        success ? logger2.debug("Registered webhook", {
          topic,
          shop: session.shop,
          operation: rest.operation
        }) : logger2.error("Failed to register webhook", {
          topic,
          shop: session.shop,
          result: JSON.stringify(rest.result)
        });
      });
    }), response)).catch((error) => {
      if ((error.body?.errors?.graphQLErrors || []).find(({ extensions: { code } }) => code === "THROTTLED"))
        logger2.error("Failed to register webhooks", {
          shop: session.shop,
          error: JSON.stringify(error)
        });
      else
        throw error;
    });
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/const.mjs
var APP_BRIDGE_URL = "https://cdn.shopify.com/shopifycloud/app-bridge.js", REAUTH_URL_HEADER = "X-Shopify-API-Request-Failure-Reauthorize-Url", RETRY_INVALID_SESSION_HEADER = {
  "X-Shopify-Retry-Invalid-Session-Request": "1"
};

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/helpers/ensure-cors-headers.mjs
function ensureCORSHeadersFactory(params, request2, corsHeaders = []) {
  let { logger: logger2, config } = params;
  return function(response) {
    let origin = request2.headers.get("Origin");
    if (origin && origin !== config.appUrl) {
      logger2.debug("Request comes from a different origin, adding CORS headers");
      let corsHeadersSet = /* @__PURE__ */ new Set([
        "Authorization",
        "Content-Type",
        ...corsHeaders
      ]);
      response.headers.set("Access-Control-Allow-Origin", "*"), response.headers.set("Access-Control-Allow-Headers", [...corsHeadersSet].join(", ")), response.headers.set("Access-Control-Expose-Headers", REAUTH_URL_HEADER);
    }
    return response;
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/redirect-to-bounce-page.mjs
var import_server_runtime = require("@remix-run/server-runtime"), redirectToBouncePage = (params, url) => {
  let { config } = params, searchParams = url.searchParams;
  throw searchParams.delete("id_token"), searchParams.set("shopify-reload", `${config.appUrl}${url.pathname}?${searchParams.toString()}`), (0, import_server_runtime.redirect)(`${config.auth.patchSessionTokenPath}?${searchParams.toString()}`);
};

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/helpers/respond-to-invalid-session-token.mjs
function respondToInvalidSessionToken({ params, request: request2, retryRequest = !1 }) {
  let { api, logger: logger2, config } = params;
  if (!request2.headers.get("authorization"))
    return redirectToBouncePage({ api, logger: logger2, config }, new URL(request2.url));
  throw new Response(void 0, {
    status: 401,
    statusText: "Unauthorized",
    headers: retryRequest ? RETRY_INVALID_SESSION_HEADER : {}
  });
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/helpers/validate-session-token.mjs
async function validateSessionToken(params, request2, token, { checkAudience = !0 } = {}) {
  let { api, logger: logger2 } = params;
  logger2.debug("Validating session token");
  try {
    let payload = await api.session.decodeSessionToken(token, {
      checkAudience
    });
    return logger2.debug("Session token is valid", {
      payload: JSON.stringify(payload)
    }), payload;
  } catch (error) {
    throw logger2.debug(`Failed to validate session token: ${error.message}`), respondToInvalidSessionToken({ params, request: request2, retryRequest: !0 });
  }
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/helpers/get-session-token-header.mjs
var SESSION_TOKEN_PARAM = "id_token";
function getSessionTokenHeader(request2) {
  return request2.headers.get("authorization")?.replace("Bearer ", "");
}
function getSessionTokenFromUrlParam(request2) {
  return new URL(request2.url).searchParams.get(SESSION_TOKEN_PARAM);
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/helpers/reject-bot-request.mjs
var import_isbot2 = require("isbot"), SHOPIFY_POS_USER_AGENT = /Shopify POS\//, SHOPIFY_MOBILE_USER_AGENT = /Shopify Mobile\//, SHOPIFY_USER_AGENTS = [SHOPIFY_POS_USER_AGENT, SHOPIFY_MOBILE_USER_AGENT];
function respondToBotRequest({ logger: logger2 }, request2) {
  let userAgent = request2.headers.get("User-Agent") ?? "";
  if (SHOPIFY_USER_AGENTS.some((agent) => agent.test(userAgent))) {
    logger2.debug("Request is from a Shopify agent, allow");
    return;
  }
  if ((0, import_isbot2.isbot)(userAgent))
    throw logger2.debug("Request is from a bot, skipping auth"), new Response(void 0, { status: 410, statusText: "Gone" });
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/helpers/respond-to-options-request.mjs
function respondToOptionsRequest(params, request2, corsHeaders) {
  if (request2.method === "OPTIONS")
    throw ensureCORSHeadersFactory(params, request2, corsHeaders)(new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Max-Age": "7200"
      }
    }));
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/authenticate.mjs
var import_server_runtime10 = require("@remix-run/server-runtime");

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/billing/cancel.mjs
var import_server_runtime3 = require("@remix-run/server-runtime");

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/begin-auth.mjs
async function beginAuth(params, request2, isOnline, shop) {
  let { api, config } = params;
  throw await api.auth.begin({
    shop,
    callbackPath: config.auth.callbackPath,
    isOnline,
    rawRequest: request2
  });
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/redirect-with-exitiframe.mjs
var import_server_runtime2 = require("@remix-run/server-runtime");
function redirectWithExitIframe(params, request2, shop) {
  let { api, config } = params, queryParams = new URL(request2.url).searchParams, host = api.utils.sanitizeHost(queryParams.get("host"));
  queryParams.set("shop", shop);
  let destination = `${config.auth.path}?shop=${shop}`;
  throw host && (queryParams.set("host", host), destination = `${destination}&host=${host}`), queryParams.set("exitIframe", destination), (0, import_server_runtime2.redirect)(`${config.auth.exitIframePath}?${queryParams.toString()}`);
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/redirect-with-app-bridge-headers.mjs
function redirectWithAppBridgeHeaders(redirectUri) {
  throw new Response(void 0, {
    status: 401,
    statusText: "Unauthorized",
    headers: getAppBridgeHeaders(redirectUri)
  });
}
function getAppBridgeHeaders(url) {
  return new Headers({ [REAUTH_URL_HEADER]: url });
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/redirect-to-auth-page.mjs
async function redirectToAuthPage(params, request2, shop, isOnline = !1) {
  let { config } = params, isEmbeddedRequest2 = new URL(request2.url).searchParams.get("embedded") === "1";
  if (request2.headers.get("authorization")) {
    let redirectUri = new URL(config.auth.path, config.appUrl);
    redirectUri.searchParams.set("shop", shop), redirectWithAppBridgeHeaders(redirectUri.toString());
  } else if (isEmbeddedRequest2)
    redirectWithExitIframe(params, request2, shop);
  else
    throw await beginAuth(params, request2, isOnline, shop);
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/billing/cancel.mjs
function cancelBillingFactory(params, request2, session) {
  return async function(options) {
    let { api, logger: logger2, config } = params;
    logger2.debug("Cancelling billing", { shop: session.shop, ...options });
    try {
      return await api.billing.cancel({
        session,
        subscriptionId: options.subscriptionId,
        isTest: options.isTest,
        prorate: options.prorate
      });
    } catch (error) {
      throw error instanceof HttpResponseError && error.response.code === 401 ? (logger2.debug("API token was invalid, redirecting to OAuth", {
        shop: session.shop
      }), await config.sessionStorage.deleteSession(session.id), await redirectToAuthPage(params, request2, session.shop)) : error;
    }
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/billing/require.mjs
var import_server_runtime4 = require("@remix-run/server-runtime");
function requireBillingFactory(params, request2, session) {
  let { api, logger: logger2, config } = params;
  return async function(options) {
    let logContext = {
      shop: session.shop,
      plans: options.plans,
      isTest: options.isTest
    };
    logger2.debug("Checking billing for the shop", logContext);
    let data;
    try {
      data = await api.billing.check({
        session,
        plans: options.plans,
        isTest: options.isTest,
        returnObject: !0
      });
    } catch (error) {
      throw error instanceof HttpResponseError && error.response.code === 401 ? (logger2.debug("API token was invalid, redirecting to OAuth", logContext), await config.sessionStorage.deleteSession(session.id), await redirectToAuthPage(params, request2, session.shop)) : error;
    }
    if (!data.hasActivePayment)
      throw logger2.debug("Billing check failed", logContext), await options.onFailure(new Error("Billing check failed"));
    return logger2.debug("Billing check succeeded", logContext), data;
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/billing/request.mjs
var import_server_runtime5 = require("@remix-run/server-runtime");
function requestBillingFactory(params, request2, session) {
  return async function({ plan, isTest, returnUrl, ...overrides }) {
    let { api, logger: logger2, config } = params;
    logger2.info("Requesting billing", {
      shop: session.shop,
      plan,
      isTest,
      returnUrl
    });
    let result;
    try {
      result = await api.billing.request({
        plan,
        session,
        isTest,
        returnUrl,
        returnObject: !0,
        ...overrides
      });
    } catch (error) {
      throw error instanceof HttpResponseError && error.response.code === 401 ? (logger2.debug("API token was invalid, redirecting to OAuth", {
        shop: session.shop
      }), await config.sessionStorage.deleteSession(session.id), await redirectToAuthPage(params, request2, session.shop)) : error;
    }
    throw redirectOutOfApp(params, request2, result.confirmationUrl, session.shop);
  };
}
function redirectOutOfApp(params, request2, url, shop) {
  let { config, logger: logger2 } = params;
  logger2.debug("Redirecting out of app", { url });
  let requestUrl = new URL(request2.url), isEmbeddedRequest2 = requestUrl.searchParams.get("embedded") === "1";
  if (request2.headers.get("authorization"))
    throw new Response(void 0, {
      status: 401,
      statusText: "Unauthorized",
      headers: getAppBridgeHeaders(url)
    });
  if (isEmbeddedRequest2) {
    let params2 = new URLSearchParams({
      shop,
      host: requestUrl.searchParams.get("host"),
      exitIframe: url
    });
    throw (0, import_server_runtime5.redirect)(`${config.auth.exitIframePath}?${params2.toString()}`);
  } else
    throw (0, import_server_runtime5.redirect)(url);
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/billing/check.mjs
var import_server_runtime6 = require("@remix-run/server-runtime");
function checkBillingFactory(params, request2, session) {
  return async function(options) {
    let { api, logger: logger2, config } = params;
    logger2.debug("Checking billing plans", { shop: session.shop, ...options });
    try {
      return await api.billing.check({
        session,
        plans: options.plans,
        isTest: options.isTest,
        returnObject: !0
      });
    } catch (error) {
      throw error instanceof HttpResponseError && error.response.code === 401 ? (logger2.debug("API token was invalid, redirecting to OAuth", {
        shop: session.shop
      }), await config.sessionStorage.deleteSession(session.id), await redirectToAuthPage(params, request2, session.shop)) : error;
    }
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/clients/admin/graphql.mjs
function graphqlClientFactory({ params, handleClientError, session }) {
  return async function(operation, options) {
    let client = new params.api.clients.Graphql({
      session,
      apiVersion: options?.apiVersion
    });
    try {
      let apiResponse = await client.request(operation, {
        variables: options?.variables,
        retries: options?.tries ? options.tries - 1 : 0,
        headers: options?.headers
      });
      return new Response(JSON.stringify(apiResponse));
    } catch (error) {
      throw handleClientError ? await handleClientError({ error, params, session }) : error;
    }
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/clients/admin/rest.mjs
function restClientFactory({ params, handleClientError, session }) {
  let { api } = params, client = new RemixRestClient({
    params,
    handleClientError,
    session
  });
  if (api.rest) {
    client.resources = {};
    let RestResourceClient = restResourceClientFactory({
      params,
      handleClientError,
      session
    });
    Object.entries(api.rest).forEach(([name, resource]) => {
      class RemixResource extends resource {
      }
      RemixResource.Client = RestResourceClient, Reflect.defineProperty(RemixResource, "name", {
        value: name
      }), Reflect.set(client.resources, name, RemixResource);
    });
  }
  return client;
}
var RemixRestClient = class {
  constructor({ params, session, handleClientError }) {
    this.params = params, this.handleClientError = handleClientError, this.session = session;
  }
  /**
   * Performs a GET request on the given path.
   */
  async get(params) {
    return this.makeRequest({
      method: "GET",
      ...params
    });
  }
  /**
   * Performs a POST request on the given path.
   */
  async post(params) {
    return this.makeRequest({
      method: "POST",
      ...params
    });
  }
  /**
   * Performs a PUT request on the given path.
   */
  async put(params) {
    return this.makeRequest({
      method: "PUT",
      ...params
    });
  }
  /**
   * Performs a DELETE request on the given path.
   */
  async delete(params) {
    return this.makeRequest({
      method: "DELETE",
      ...params
    });
  }
  async makeRequest(params) {
    let originalClient = new this.params.api.clients.Rest({
      session: this.session
    }), originalRequest = Reflect.get(originalClient, "request");
    try {
      let apiResponse = await originalRequest.call(originalClient, params);
      return new Response(JSON.stringify(apiResponse.body), {
        headers: apiResponse.headers
      });
    } catch (error) {
      throw this.handleClientError ? await this.handleClientError({
        error,
        session: this.session,
        params: this.params
      }) : new Error(error);
    }
  }
};
function restResourceClientFactory({ params, handleClientError, session }) {
  let { api } = params, ApiClient = api.clients.Rest;
  return class extends ApiClient {
    async request(requestParams) {
      let originalClient = new api.clients.Rest({ session }), originalRequest = Reflect.get(originalClient, "request");
      try {
        return await originalRequest.call(originalClient, requestParams);
      } catch (error) {
        throw handleClientError ? await handleClientError({ error, params, session }) : new Error(error);
      }
    }
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/clients/admin/factory.mjs
function adminClientFactory({ params, handleClientError, session }) {
  return {
    rest: restClientFactory({
      params,
      session,
      handleClientError
    }),
    graphql: graphqlClientFactory({ params, session, handleClientError })
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/create-admin-api-context.mjs
function createAdminApiContext(session, params, handleClientError) {
  return adminClientFactory({
    session,
    params,
    handleClientError
  });
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/redirect-to-shopify-or-app-root.mjs
var import_server_runtime7 = require("@remix-run/server-runtime");
async function redirectToShopifyOrAppRoot(request2, params, responseHeaders) {
  let { api } = params, url = new URL(request2.url), host = api.utils.sanitizeHost(url.searchParams.get("host")), shop = api.utils.sanitizeShop(url.searchParams.get("shop")), redirectUrl = api.config.isEmbeddedApp ? await api.auth.getEmbeddedAppUrl({ rawRequest: request2 }) : `/?shop=${shop}&host=${encodeURIComponent(host)}`;
  throw (0, import_server_runtime7.redirect)(redirectUrl, { headers: responseHeaders });
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/ensure-app-is-embedded-if-required.mjs
var ensureAppIsEmbeddedIfRequired = async (params, request2) => {
  let { api, logger: logger2, config } = params, url = new URL(request2.url), shop = url.searchParams.get("shop");
  api.config.isEmbeddedApp && url.searchParams.get("embedded") !== "1" && (logger2.debug("App is not embedded, redirecting to Shopify", { shop }), await redirectToShopifyOrAppRoot(request2, { api, logger: logger2, config }));
};

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/ensure-session-token-search-param-if-required.mjs
var SESSION_TOKEN_PARAM2 = "id_token", ensureSessionTokenSearchParamIfRequired = async (params, request2) => {
  let { api, logger: logger2 } = params, url = new URL(request2.url), shop = url.searchParams.get("shop"), searchParamSessionToken = url.searchParams.get(SESSION_TOKEN_PARAM2), isEmbedded = url.searchParams.get("embedded") === "1";
  api.config.isEmbeddedApp && isEmbedded && !searchParamSessionToken && (logger2.debug("Missing session token in search params, going to bounce page", { shop }), redirectToBouncePage(params, url));
};

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/redirect.mjs
var import_server_runtime8 = require("@remix-run/server-runtime");

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/helpers/app-bridge-url.mjs
var appBridgeUrlOverride;
function appBridgeUrl() {
  return appBridgeUrlOverride || APP_BRIDGE_URL;
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/helpers/add-response-headers.mjs
function addDocumentResponseHeadersFactory(params) {
  let { api, config } = params;
  return function(request2, headers) {
    let { searchParams } = new URL(request2.url), shop = api.utils.sanitizeShop(searchParams.get("shop"));
    addDocumentResponseHeaders(headers, config.isEmbeddedApp, shop);
  };
}
function addDocumentResponseHeaders(headers, isEmbeddedApp, shop) {
  shop && headers.set("Link", '<https://cdn.shopify.com/shopifycloud/app-bridge.js>; rel="preload"; as="script";'), isEmbeddedApp ? shop && headers.set("Content-Security-Policy", `frame-ancestors https://${shop} https://admin.shopify.com https://*.spin.dev;`) : headers.set("Content-Security-Policy", "frame-ancestors 'none';");
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/validate-redirect-url.mjs
var FILE_URI_MATCH = /\/\/\//, INVALID_RELATIVE_URL = /[/\\][/\\]/, WHITESPACE_CHARACTER = /\s/, VALID_PROTOCOLS = ["https:", "http:"];
function isSafe(domain, redirectUrl, requireSSL = !0) {
  if (typeof redirectUrl != "string" || FILE_URI_MATCH.test(redirectUrl) || WHITESPACE_CHARACTER.test(redirectUrl))
    return !1;
  let url;
  try {
    url = new URL(redirectUrl, domain);
  } catch {
    return !1;
  }
  return !(INVALID_RELATIVE_URL.test(url.pathname) || !VALID_PROTOCOLS.includes(url.protocol) || requireSSL && url.protocol !== "https:");
}
function sanitizeRedirectUrl(domain, redirectUrl, options = {}) {
  if (isSafe(domain, redirectUrl, options.requireSSL))
    return new URL(redirectUrl, domain);
  if (options.throwOnInvalid === !1)
    return;
  throw new ShopifyError("Invalid URL. Refusing to redirect");
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/render-app-bridge.mjs
function renderAppBridge({ config }, request2, redirectTo) {
  let redirectToScript = "";
  if (redirectTo) {
    let destination = sanitizeRedirectUrl(config.appUrl, redirectTo.url), target = redirectTo.target ?? "_top";
    redirectToScript = `<script>window.open(${JSON.stringify(destination.toString())}, ${JSON.stringify(target)})</script>`;
  }
  let responseHeaders = new Headers({
    "content-type": "text/html;charset=utf-8"
  });
  throw addDocumentResponseHeaders(responseHeaders, config.isEmbeddedApp, new URL(request2.url).searchParams.get("shop")), new Response(`
      <script data-api-key="${config.apiKey}" src="${appBridgeUrl()}"></script>
      ${redirectToScript}
    `, { headers: responseHeaders });
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/redirect.mjs
function redirectFactory(params, request2) {
  let { config } = params;
  return function(url, init) {
    let { searchParams } = new URL(request2.url), parsedUrl = new URL(url, config.appUrl);
    (parsedUrl.origin === config.appUrl || url.startsWith("/")) && searchParams.forEach((value, key) => {
      parsedUrl.searchParams.has(key) || parsedUrl.searchParams.set(key, value);
    });
    let target = typeof init != "number" && init?.target || "_self";
    if (target === "_self") {
      if (isBounceRequest(request2))
        throw renderAppBridge(params, request2, {
          url: parsedUrl.toString(),
          target
        });
      return (0, import_server_runtime8.redirect)(parsedUrl.toString(), init);
    } else {
      if (isDataRequest(request2))
        throw redirectWithAppBridgeHeaders(parsedUrl.toString());
      if (isEmbeddedRequest(request2))
        throw renderAppBridge(params, request2, {
          url: parsedUrl.toString(),
          target
        });
    }
    return (0, import_server_runtime8.redirect)(url, init);
  };
}
function isBounceRequest(request2) {
  return Boolean(getSessionTokenHeader(request2)) && request2.headers.has("X-Shopify-Bounce");
}
function isDataRequest(request2) {
  let isGet = request2.method === "GET";
  return Boolean(getSessionTokenHeader(request2)) && !isBounceRequest(request2) && (!isEmbeddedRequest(request2) || !isGet);
}
function isEmbeddedRequest(request2) {
  let { searchParams } = new URL(request2.url);
  return searchParams.get("embedded") === "1";
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/validate-shop-and-host-params.mjs
var import_server_runtime9 = require("@remix-run/server-runtime");
function validateShopAndHostParams(params, request2) {
  let { api, config, logger: logger2 } = params;
  if (config.isEmbeddedApp) {
    let url = new URL(request2.url), shop = api.utils.sanitizeShop(url.searchParams.get("shop"));
    if (!shop)
      throw logger2.debug("Missing or invalid shop, redirecting to login path", {
        shop
      }), (0, import_server_runtime9.redirect)(config.auth.loginPath);
    if (!api.utils.sanitizeHost(url.searchParams.get("host")))
      throw logger2.debug("Invalid host, redirecting to login path", {
        host: url.searchParams.get("host")
      }), (0, import_server_runtime9.redirect)(config.auth.loginPath);
  }
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/authenticate.mjs
function authStrategyFactory({ strategy, ...params }) {
  let { api, logger: logger2, config } = params;
  async function respondToBouncePageRequest(request2) {
    if (new URL(request2.url).pathname === config.auth.patchSessionTokenPath)
      throw logger2.debug("Rendering bounce page"), renderAppBridge({ config, logger: logger2, api }, request2);
  }
  async function respondToExitIframeRequest(request2) {
    let url = new URL(request2.url);
    if (url.pathname === config.auth.exitIframePath) {
      let destination = url.searchParams.get("exitIframe");
      throw logger2.debug("Rendering exit iframe page", { destination }), renderAppBridge({ config, logger: logger2, api }, request2, { url: destination });
    }
  }
  function createContext(request2, session, authStrategy, sessionToken) {
    let context = {
      admin: createAdminApiContext(session, params, authStrategy.handleClientError(request2)),
      billing: {
        require: requireBillingFactory(params, request2, session),
        check: checkBillingFactory(params, request2, session),
        request: requestBillingFactory(params, request2, session),
        cancel: cancelBillingFactory(params, request2, session)
      },
      session,
      cors: ensureCORSHeadersFactory(params, request2)
    };
    return config.isEmbeddedApp ? {
      ...context,
      sessionToken,
      redirect: redirectFactory(params, request2)
    } : context;
  }
  return async function(request2) {
    try {
      respondToBotRequest(params, request2), respondToOptionsRequest(params, request2), await respondToBouncePageRequest(request2), await respondToExitIframeRequest(request2), await strategy.respondToOAuthRequests(request2), getSessionTokenHeader(request2) || (validateShopAndHostParams(params, request2), await ensureAppIsEmbeddedIfRequired(params, request2), await ensureSessionTokenSearchParamIfRequired(params, request2)), logger2.info("Authenticating admin request");
      let { payload, shop, sessionId, sessionToken } = await getSessionTokenContext(params, request2);
      logger2.debug("Loading session from storage", { sessionId });
      let existingSession = sessionId ? await config.sessionStorage.loadSession(sessionId) : void 0, session = await strategy.authenticate(request2, {
        session: existingSession,
        sessionToken,
        shop
      });
      return logger2.debug("Request is valid, loaded session from session token", {
        shop: session.shop,
        isOnline: session.isOnline
      }), createContext(request2, session, strategy, payload);
    } catch (errorOrResponse) {
      throw errorOrResponse instanceof Response && ensureCORSHeadersFactory(params, request2)(errorOrResponse), errorOrResponse;
    }
  };
}
async function getSessionTokenContext(params, request2) {
  let { api, config, logger: logger2 } = params, headerSessionToken = getSessionTokenHeader(request2), searchParamSessionToken = getSessionTokenFromUrlParam(request2), sessionToken = headerSessionToken || searchParamSessionToken;
  if (logger2.debug("Attempting to authenticate session token", {
    sessionToken: JSON.stringify({
      header: headerSessionToken,
      search: searchParamSessionToken
    })
  }), config.isEmbeddedApp) {
    let payload = await validateSessionToken(params, request2, sessionToken), shop2 = new URL(payload.dest).hostname;
    logger2.debug("Session token is valid", { shop: shop2, payload });
    let sessionId2 = config.useOnlineTokens ? api.session.getJwtSessionId(shop2, payload.sub) : api.session.getOfflineId(shop2);
    return { shop: shop2, payload, sessionId: sessionId2, sessionToken };
  }
  let shop = new URL(request2.url).searchParams.get("shop"), sessionId = await api.session.getCurrentId({
    isOnline: config.useOnlineTokens,
    rawRequest: request2
  });
  return { shop, sessionId, payload: void 0, sessionToken };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/webhooks/authenticate.mjs
var import_server_runtime11 = require("@remix-run/server-runtime");

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/handle-client-error.mjs
function handleClientErrorFactory({ request: request2, onError }) {
  return async function({ error, params, session }) {
    throw error instanceof HttpResponseError ? (params.logger.debug(`Got an HTTP response error from the API: ${error.message}`, {
      code: error.response.code,
      statusText: error.response.statusText,
      body: JSON.stringify(error.response.body)
    }), onError && await onError({ request: request2, session, error }), new Response(JSON.stringify(error.response.body), {
      status: error.response.code,
      headers: {
        "Content-Type": error.response.headers["Content-Type"]
      }
    })) : (params.logger.debug(`Got a response error from the API: ${error.message}`), error);
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/webhooks/authenticate.mjs
function authenticateWebhookFactory(params) {
  let { api, config, logger: logger2 } = params;
  return async function(request2) {
    if (request2.method !== "POST")
      throw logger2.debug("Received a non-POST request for a webhook. Only POST requests are allowed.", { url: request2.url, method: request2.method }), new Response(void 0, {
        status: 405,
        statusText: "Method not allowed"
      });
    let rawBody = await request2.text(), check2 = await api.webhooks.validate({
      rawBody,
      rawRequest: request2
    });
    if (!check2.valid)
      throw check2.reason === WebhookValidationErrorReason.InvalidHmac ? (logger2.debug("Webhook HMAC validation failed", check2), new Response(void 0, {
        status: 401,
        statusText: "Unauthorized"
      })) : (logger2.debug("Webhook validation failed", check2), new Response(void 0, { status: 400, statusText: "Bad Request" }));
    let sessionId = api.session.getOfflineId(check2.domain), session = await config.sessionStorage.loadSession(sessionId), webhookContext = {
      apiVersion: check2.apiVersion,
      shop: check2.domain,
      topic: check2.topic,
      webhookId: check2.webhookId,
      payload: JSON.parse(rawBody),
      subTopic: check2.subTopic || void 0,
      session: void 0,
      admin: void 0
    };
    if (!session)
      return webhookContext;
    let admin;
    if (config.future.v3_webhookAdminContext)
      admin = adminClientFactory({
        params,
        session,
        handleClientError: handleClientErrorFactory({ request: request2 })
      });
    else {
      let restClient = new api.clients.Rest({
        session,
        apiVersion: check2.apiVersion
      }), graphqlClient = new api.clients.Graphql({
        session,
        apiVersion: check2.apiVersion
      });
      Object.entries(api.rest).forEach(([name, resource]) => {
        Reflect.set(restClient, name, resource);
      }), admin = {
        rest: restClient,
        graphql: graphqlClient
      };
    }
    return {
      ...webhookContext,
      session,
      admin
    };
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/override-logger.mjs
var import_semver = __toESM(require("semver"), 1);
function overrideLogger(logger2) {
  let baseContext = { package: "shopify-app" }, warningFunction = (message, context = {}) => logger2.warning(message, { ...baseContext, ...context });
  function deprecated2(warningFunction2) {
    return function(version, message) {
      if (import_semver.default.gte(SHOPIFY_REMIX_LIBRARY_VERSION, version))
        throw new FeatureDeprecatedError(`Feature was deprecated in version ${version}`);
      return warningFunction2(`[Deprecated | ${version}] ${message}`);
    };
  }
  return {
    ...logger2,
    log: (severity, message, context = {}) => logger2.log(severity, message, { ...baseContext, ...context }),
    debug: (message, context = {}) => logger2.debug(message, { ...baseContext, ...context }),
    info: (message, context = {}) => logger2.info(message, { ...baseContext, ...context }),
    warning: warningFunction,
    error: (message, context = {}) => logger2.error(message, { ...baseContext, ...context }),
    deprecated: deprecated2(warningFunction)
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/shopify-app.mjs
var import_server_runtime16 = require("@remix-run/server-runtime"), import_isbot5 = require("isbot");

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/login/login.mjs
var import_server_runtime12 = require("@remix-run/server-runtime");
function loginFactory(params) {
  let { api, config, logger: logger2 } = params;
  return async function(request2) {
    let shopParam = new URL(request2.url).searchParams.get("shop");
    if (request2.method === "GET" && !shopParam)
      return {};
    let shop = shopParam || (await request2.formData()).get("shop");
    if (!shop)
      return logger2.debug("Missing shop parameter", { shop }), { shop: LoginErrorType.MissingShop };
    let shopWithoutProtocol = shop.replace(/^https?:\/\//, "").replace(/\/$/, ""), shopWithDomain = shop?.indexOf(".") === -1 ? `${shopWithoutProtocol}.myshopify.com` : shopWithoutProtocol, sanitizedShop = api.utils.sanitizeShop(shopWithDomain);
    if (!sanitizedShop)
      return logger2.debug("Invalid shop parameter", { shop }), { shop: LoginErrorType.InvalidShop };
    let authPath = `${config.appUrl}${config.auth.path}?shop=${sanitizedShop}`, installPath = `https://${api.utils.legacyUrlToShopAdminUrl(sanitizedShop)}/oauth/install?client_id=${config.apiKey}`, redirectUrl = config.isEmbeddedApp && config.future.unstable_newEmbeddedAuthStrategy ? installPath : authPath;
    throw logger2.info(`Redirecting login request to ${redirectUrl}`, {
      shop: sanitizedShop
    }), (0, import_server_runtime12.redirect)(redirectUrl);
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/errors.mjs
var SessionNotFoundError = class extends ShopifyError {
};

// node_modules/@shopify/shopify-app-remix/dist/esm/server/unauthenticated/helpers/get-offline-session.mjs
async function getOfflineSession(shop, { api, config }) {
  let offlineSessionId = api.session.getOfflineId(shop);
  return await config.sessionStorage.loadSession(offlineSessionId);
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/unauthenticated/admin/factory.mjs
function unauthenticatedAdminContextFactory(params) {
  return async (shop) => {
    let session = await getOfflineSession(shop, params);
    if (!session)
      throw new SessionNotFoundError(`Could not find a session for shop ${shop} when creating unauthenticated admin context`);
    return {
      session,
      admin: adminClientFactory({ params, session })
    };
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/public/checkout/authenticate.mjs
var import_server_runtime13 = require("@remix-run/server-runtime");
function authenticateCheckoutFactory(params) {
  return async function(request2, options = {}) {
    let { logger: logger2 } = params, corsHeaders = options.corsHeaders ?? [];
    respondToBotRequest(params, request2), respondToOptionsRequest(params, request2, corsHeaders);
    let sessionTokenHeader = getSessionTokenHeader(request2);
    if (logger2.info("Authenticating checkout request"), !sessionTokenHeader)
      throw logger2.debug("Request did not contain a session token"), new Response(void 0, {
        status: 401,
        statusText: "Unauthorized"
      });
    return {
      sessionToken: await validateSessionToken(params, request2, sessionTokenHeader, { checkAudience: !1 }),
      cors: ensureCORSHeadersFactory(params, request2, corsHeaders)
    };
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/clients/storefront/factory.mjs
function storefrontClientFactory({ params, session }) {
  let { api } = params;
  return {
    graphql: async (query, options = {}) => {
      let apiResponse = await new api.clients.Storefront({
        session,
        apiVersion: options.apiVersion
      }).request(query, {
        variables: options?.variables,
        retries: options?.tries ? options.tries - 1 : 0,
        headers: options?.headers
      });
      return new Response(JSON.stringify(apiResponse));
    }
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/public/appProxy/authenticate.mjs
function authenticateAppProxyFactory(params) {
  let { api, config, logger: logger2 } = params;
  return async function(request2) {
    logger2.info("Authenticating app proxy request");
    let url = new URL(request2.url);
    if (!await validateAppProxyHmac(params, url))
      throw logger2.info("App proxy request has invalid signature"), new Response(void 0, {
        status: 400,
        statusText: "Bad Request"
      });
    let shop = url.searchParams.get("shop"), sessionId = api.session.getOfflineId(shop), session = await config.sessionStorage.loadSession(sessionId);
    return session ? {
      liquid,
      session,
      admin: adminClientFactory({ params, session }),
      storefront: storefrontClientFactory({ params, session })
    } : {
      liquid,
      session: void 0,
      admin: void 0,
      storefront: void 0
    };
  };
}
var liquid = (body, initAndOptions) => {
  let processedBody = processLiquidBody(body);
  if (typeof initAndOptions != "object")
    return new Response(processedBody, {
      status: initAndOptions || 200,
      headers: {
        "Content-Type": "application/liquid"
      }
    });
  let { layout, ...responseInit } = initAndOptions || {}, responseBody = layout === !1 ? `{% layout none %} ${processedBody}` : processedBody, headers = new Headers(responseInit.headers);
  return headers.set("Content-Type", "application/liquid"), new Response(responseBody, {
    ...responseInit,
    headers
  });
};
async function validateAppProxyHmac(params, url) {
  let { api, logger: logger2 } = params;
  try {
    let searchParams = new URLSearchParams(url.search);
    searchParams.get("index") || searchParams.delete("index");
    let isValid = await api.utils.validateHmac(Object.fromEntries(searchParams.entries()), { signator: "appProxy" });
    if (!isValid) {
      let data = `routes%2F${url.pathname.replace(/^\//, "").replace(/\/$/, "").replaceAll("/", ".")}`;
      if (searchParams = new URLSearchParams(`?_data=${data}&${searchParams.toString().replace(/^\?/, "")}`), isValid = await api.utils.validateHmac(Object.fromEntries(searchParams.entries()), { signator: "appProxy" }), !isValid) {
        let searchParams2 = new URLSearchParams(`?_data=${data}._index&${url.search.replace(/^\?/, "")}`);
        isValid = await api.utils.validateHmac(Object.fromEntries(searchParams2.entries()), { signator: "appProxy" });
      }
    }
    return isValid;
  } catch (error) {
    throw logger2.info(error.message), new Response(void 0, { status: 400, statusText: "Bad Request" });
  }
}
function processLiquidBody(body) {
  return body.replaceAll(/<(form[^>]+)action="(\/[^"?]+)(\?[^"]+)?">/g, '<$1action="$2/$3">').replaceAll(/<(a[^>]+)href="(\/[^"?]+)(\?[^"]+)?">/g, '<$1href="$2/$3">');
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/public/factory.mjs
function authenticatePublicFactory(params) {
  let { logger: logger2, config } = params, authenticateCheckout = authenticateCheckoutFactory(params), authenticateAppProxy = authenticateAppProxyFactory(params);
  if (config.future.v3_authenticatePublic)
    return {
      checkout: authenticateCheckout,
      appProxy: authenticateAppProxy
    };
  let authenticatePublic = (request2, options) => (logger2.deprecated("3.0.0", "authenticate.public() will be deprecated in v3. Use authenticate.public.checkout() instead."), authenticateCheckout(request2, options));
  return authenticatePublic.checkout = authenticateCheckout, authenticatePublic.appProxy = authenticateAppProxy, authenticatePublic;
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/unauthenticated/storefront/factory.mjs
function unauthenticatedStorefrontContextFactory(params) {
  return async (shop) => {
    let session = await getOfflineSession(shop, params);
    if (!session)
      throw new SessionNotFoundError(`Could not find a session for shop ${shop} when creating unauthenticated storefront context`);
    return {
      session,
      storefront: storefrontClientFactory({ params, session })
    };
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/strategies/auth-code-flow.mjs
var import_server_runtime14 = require("@remix-run/server-runtime");

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/helpers/trigger-after-auth-hook.mjs
async function triggerAfterAuthHook(params, session, request2, authStrategy) {
  let { config, logger: logger2 } = params;
  config.hooks.afterAuth && (logger2.info("Running afterAuth hook"), await config.hooks.afterAuth({
    session,
    admin: createAdminApiContext(session, params, authStrategy.handleClientError(request2))
  }));
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/strategies/auth-code-flow.mjs
var import_isbot3 = require("isbot"), AuthCodeFlowStrategy = class {
  constructor({ api, config, logger: logger2 }) {
    this.api = api, this.config = config, this.logger = logger2;
  }
  async respondToOAuthRequests(request2) {
    let { api, config } = this, url = new URL(request2.url), isAuthRequest = url.pathname === config.auth.path, isAuthCallbackRequest = url.pathname === config.auth.callbackPath;
    if (isAuthRequest || isAuthCallbackRequest) {
      let shop = api.utils.sanitizeShop(url.searchParams.get("shop"));
      throw shop ? isAuthRequest ? await this.handleAuthBeginRequest(request2, shop) : await this.handleAuthCallbackRequest(request2, shop) : new Response("Shop param is invalid", { status: 400 });
    }
    getSessionTokenHeader(request2) || await this.ensureInstalledOnShop(request2);
  }
  async authenticate(request2, sessionContext) {
    let { api, config, logger: logger2 } = this, { shop, session } = sessionContext;
    return session ? session.isActive(config.scopes) || (logger2.debug("Found a session, but it has expired, redirecting to OAuth", { shop }), await redirectToAuthPage({ config, logger: logger2, api }, request2, shop)) : (logger2.debug("No session found, redirecting to OAuth", { shop }), await redirectToAuthPage({ config, logger: logger2, api }, request2, shop)), logger2.debug("Found a valid session", { shop }), session;
  }
  handleClientError(request2) {
    let { api, config, logger: logger2 } = this;
    return handleClientErrorFactory({
      request: request2,
      onError: async ({ session, error }) => {
        if (error.response.code === 401)
          throw await redirectToAuthPage({ api, config, logger: logger2 }, request2, session.shop);
      }
    });
  }
  async ensureInstalledOnShop(request2) {
    let { api, config, logger: logger2 } = this;
    validateShopAndHostParams({ api, config, logger: logger2 }, request2);
    let url = new URL(request2.url), shop = url.searchParams.get("shop");
    if (logger2.debug("Ensuring app is installed on shop", { shop }), !await this.hasValidOfflineId(request2))
      throw logger2.info("Could not find a shop, can't authenticate request"), new Response(void 0, {
        status: 400,
        statusText: "Bad Request"
      });
    let offlineSession = await this.getOfflineSession(request2), isEmbedded = url.searchParams.get("embedded") === "1";
    if (!offlineSession)
      if (logger2.info("Shop hasn't installed app yet, redirecting to OAuth", {
        shop
      }), isEmbedded)
        redirectWithExitIframe({ api, config, logger: logger2 }, request2, shop);
      else
        throw await beginAuth({ api, config, logger: logger2 }, request2, !1, shop);
    if (shop = shop || offlineSession.shop, config.isEmbeddedApp && !isEmbedded)
      try {
        logger2.debug("Ensuring offline session is valid before embedding", {
          shop
        }), await this.testSession(offlineSession), logger2.debug("Offline session is still valid, embedding app", { shop });
      } catch (error) {
        await this.handleInvalidOfflineSession(error, request2, shop);
      }
  }
  async handleAuthBeginRequest(request2, shop) {
    let { api, config, logger: logger2 } = this;
    throw logger2.info("Handling OAuth begin request", { shop }), config.isEmbeddedApp && request2.headers.get("Sec-Fetch-Dest") === "iframe" ? (logger2.debug("Auth request in iframe detected, exiting iframe", { shop }), redirectWithExitIframe({ api, config, logger: logger2 }, request2, shop)) : await beginAuth({ api, config, logger: logger2 }, request2, !1, shop);
  }
  async handleAuthCallbackRequest(request2, shop) {
    let { api, config, logger: logger2 } = this;
    logger2.info("Handling OAuth callback request");
    try {
      let { session, headers: responseHeaders } = await api.auth.callback({
        rawRequest: request2
      });
      throw await config.sessionStorage.storeSession(session), config.useOnlineTokens && !session.isOnline && (logger2.info("Requesting online access token for offline session"), await beginAuth({ api, config, logger: logger2 }, request2, !0, shop)), await triggerAfterAuthHook({ api, config, logger: logger2 }, session, request2, this), await redirectToShopifyOrAppRoot(request2, { api, config, logger: logger2 }, responseHeaders);
    } catch (error) {
      throw error instanceof Response ? error : await this.oauthCallbackError(error, request2, shop);
    }
  }
  async getOfflineSession(request2) {
    let offlineId = await this.getOfflineSessionId(request2);
    return this.config.sessionStorage.loadSession(offlineId);
  }
  async hasValidOfflineId(request2) {
    return Boolean(await this.getOfflineSessionId(request2));
  }
  async getOfflineSessionId(request2) {
    let { api } = this, shop = new URL(request2.url).searchParams.get("shop");
    return shop ? api.session.getOfflineId(shop) : api.session.getCurrentId({ isOnline: !1, rawRequest: request2 });
  }
  async testSession(session) {
    let { api } = this;
    await new api.clients.Graphql({
      session
    }).request(`#graphql
      query shopifyAppShopName {
        shop {
          name
        }
      }
    `);
  }
  async oauthCallbackError(error, request2, shop) {
    let { logger: logger2 } = this;
    return logger2.error("Error during OAuth callback", { error: error.message }), error instanceof CookieNotFound ? this.handleAuthBeginRequest(request2, shop) : error instanceof InvalidHmacError || error instanceof InvalidOAuthError ? new Response(void 0, {
      status: 400,
      statusText: "Invalid OAuth Request"
    }) : new Response(void 0, {
      status: 500,
      statusText: "Internal Server Error"
    });
  }
  async handleInvalidOfflineSession(error, request2, shop) {
    let { api, logger: logger2, config } = this;
    if (error instanceof HttpResponseError) {
      if (error.response.code === 401)
        throw logger2.info("Shop session is no longer valid, redirecting to OAuth", {
          shop
        }), await beginAuth({ api, config, logger: logger2 }, request2, !1, shop);
      {
        let message = JSON.stringify(error.response.body, null, 2);
        throw logger2.error(`Unexpected error during session validation: ${message}`, {
          shop
        }), new Response(void 0, {
          status: error.response.code,
          statusText: error.response.statusText
        });
      }
    } else if (error instanceof GraphqlQueryError) {
      let context = { shop };
      throw error.response && (context.response = JSON.stringify(error.body)), logger2.error(`Unexpected error during session validation: ${error.message}`, context), new Response(void 0, {
        status: 500,
        statusText: "Internal Server Error"
      });
    }
  }
};

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/admin/strategies/token-exchange.mjs
var import_isbot4 = require("isbot"), import_server_runtime15 = require("@remix-run/server-runtime");
var TokenExchangeStrategy = class {
  constructor({ api, config, logger: logger2 }) {
    this.api = api, this.config = config, this.logger = logger2;
  }
  async respondToOAuthRequests(_request) {
  }
  async authenticate(request2, sessionContext) {
    let { api, config, logger: logger2 } = this, { shop, session, sessionToken } = sessionContext;
    if (!sessionToken)
      throw new InvalidJwtError();
    if (!session || session.isExpired()) {
      logger2.info("No valid session found"), logger2.info("Requesting offline access token");
      let { session: offlineSession } = await this.exchangeToken({
        request: request2,
        sessionToken,
        shop,
        requestedTokenType: RequestedTokenType.OfflineAccessToken
      });
      await config.sessionStorage.storeSession(offlineSession);
      let newSession = offlineSession;
      if (config.useOnlineTokens) {
        logger2.info("Requesting online access token");
        let { session: onlineSession } = await this.exchangeToken({
          request: request2,
          sessionToken,
          shop,
          requestedTokenType: RequestedTokenType.OnlineAccessToken
        });
        await config.sessionStorage.storeSession(onlineSession), newSession = onlineSession;
      }
      try {
        await this.handleAfterAuthHook({ api, config, logger: logger2 }, newSession, request2, sessionToken);
      } catch {
        throw new Response(void 0, {
          status: 500,
          statusText: "Internal Server Error"
        });
      }
      return newSession;
    }
    return session;
  }
  handleClientError(request2) {
    let { api, config, logger: logger2 } = this;
    return handleClientErrorFactory({
      request: request2,
      onError: async ({ session, error }) => {
        error.response.code === 401 && (config.sessionStorage.deleteSession(session.id), respondToInvalidSessionToken({
          params: { config, api, logger: logger2 },
          request: request2
        }));
      }
    });
  }
  async exchangeToken({ request: request2, shop, sessionToken, requestedTokenType }) {
    let { api, config, logger: logger2 } = this;
    try {
      return await api.auth.tokenExchange({
        sessionToken,
        shop,
        requestedTokenType
      });
    } catch (error) {
      throw error instanceof InvalidJwtError || error instanceof HttpResponseError && error.response.code === 400 && error.response.body?.error === "invalid_subject_token" ? respondToInvalidSessionToken({
        params: { api, config, logger: logger2 },
        request: request2,
        retryRequest: !0
      }) : new Response(void 0, {
        status: 500,
        statusText: "Internal Server Error"
      });
    }
  }
  async handleAfterAuthHook(params, session, request2, sessionToken) {
    let { config } = params;
    await config.idempotentPromiseHandler.handlePromise({
      promiseFunction: () => triggerAfterAuthHook(params, session, request2, this),
      identifier: sessionToken
    });
  }
};

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/helpers/idempotent-promise-handler.mjs
var IdempotentPromiseHandler = class {
  constructor() {
    this.identifiers = /* @__PURE__ */ new Map();
  }
  async handlePromise({ promiseFunction, identifier }) {
    try {
      this.isPromiseRunnable(identifier) && await promiseFunction();
    } finally {
      this.clearStaleIdentifiers();
    }
    return Promise.resolve();
  }
  isPromiseRunnable(identifier) {
    return this.identifiers.has(identifier) ? !1 : (this.identifiers.set(identifier, Date.now()), !0);
  }
  async clearStaleIdentifiers() {
    this.identifiers.forEach((date, identifier, map) => {
      Date.now() - date > 6e4 && map.delete(identifier);
    });
  }
};

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/flow/authenticate.mjs
function authenticateFlowFactory(params) {
  let { api, config, logger: logger2 } = params;
  return async function(request2) {
    if (logger2.info("Authenticating flow request"), request2.method !== "POST")
      throw logger2.debug("Received a non-POST request for flow. Only POST requests are allowed.", { url: request2.url, method: request2.method }), new Response(void 0, {
        status: 405,
        statusText: "Method not allowed"
      });
    let rawBody = await request2.text(), result = await api.flow.validate({
      rawBody,
      rawRequest: request2
    });
    if (!result.valid)
      throw logger2.error("Received an invalid flow request", { reason: result.reason }), new Response(void 0, {
        status: 400,
        statusText: "Bad Request"
      });
    let payload = JSON.parse(rawBody);
    logger2.debug("Flow request is valid, looking for an offline session", {
      shop: payload.shopify_domain
    });
    let sessionId = api.session.getOfflineId(payload.shopify_domain), session = await config.sessionStorage.loadSession(sessionId);
    if (!session)
      throw logger2.info("Flow request could not find session", {
        shop: payload.shopify_domain
      }), new Response(void 0, {
        status: 400,
        statusText: "Bad Request"
      });
    return logger2.debug("Found a session for the flow request", { shop: session.shop }), {
      session,
      payload,
      admin: adminClientFactory({ params, session })
    };
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/authenticate/fulfillment-service/authenticate.mjs
function authenticateFulfillmentServiceFactory(params) {
  let { api, config, logger: logger2 } = params;
  return async function(request2) {
    if (logger2.info("Authenticating fulfillment service request"), request2.method !== "POST")
      throw logger2.debug("Received a non-POST request for fulfillment service. Only POST requests are allowed.", { url: request2.url, method: request2.method }), new Response(void 0, {
        status: 405,
        statusText: "Method not allowed"
      });
    let rawBody = await request2.text(), result = await api.fulfillmentService.validate({
      rawBody,
      rawRequest: request2
    });
    if (!result.valid)
      throw logger2.error("Received an invalid fulfillment service request", {
        reason: result.reason
      }), new Response(void 0, {
        status: 400,
        statusText: "Bad Request"
      });
    let payload = JSON.parse(rawBody), shop = request2.headers.get(ShopifyHeader.Domain) || "";
    logger2.debug("Fulfillment service request is valid, looking for an offline session", {
      shop
    });
    let sessionId = api.session.getOfflineId(shop), session = await config.sessionStorage.loadSession(sessionId);
    if (!session)
      throw logger2.info("Fulfillment service request could not find session", {
        shop
      }), new Response(void 0, {
        status: 400,
        statusText: "Bad Request"
      });
    return logger2.debug("Found a session for the fulfillment service request", {
      shop
    }), {
      session,
      payload,
      admin: adminClientFactory({ params, session })
    };
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/future/flags.mjs
function logDisabledFutureFlags2(config, logger2) {
  let logFlag = (flag, message) => logger2.info(`Future flag ${flag} is disabled.

  ${message}
`);
  config.future.v3_authenticatePublic || logFlag("v3_authenticatePublic", "Enable this flag to allow appProxy and checkout in `shopify.authenticate.public`."), config.future.v3_lineItemBilling || logFlag("v3_lineItemBilling", "Enable this flag to allow billing plans with multiple line items."), config.future.v3_webhookAdminContext || logFlag("v3_webhookAdminContext", "Enable this flag to use the standard Admin context when calling `shopify.authenticate.webhook`."), config.future.unstable_newEmbeddedAuthStrategy || logFlag("unstable_newEmbeddedAuthStrategy", `Enable this to use OAuth token exchange instead of auth code to generate API access tokens.
  Your app must be using Shopify managed install: https://shopify.dev/docs/apps/auth/installation`);
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/shopify-app.mjs
function shopifyApp(appConfig) {
  let api = deriveApi(appConfig), config = deriveConfig(appConfig, api.config), logger2 = overrideLogger(api.logger);
  appConfig.webhooks && api.webhooks.addHandlers(appConfig.webhooks);
  let params = { api, config, logger: logger2 }, authStrategy = authStrategyFactory({
    ...params,
    strategy: config.future.unstable_newEmbeddedAuthStrategy && config.isEmbeddedApp ? new TokenExchangeStrategy(params) : new AuthCodeFlowStrategy(params)
  }), shopify2 = {
    sessionStorage: config.sessionStorage,
    addDocumentResponseHeaders: addDocumentResponseHeadersFactory(params),
    registerWebhooks: registerWebhooksFactory(params),
    authenticate: {
      admin: authStrategy,
      flow: authenticateFlowFactory(params),
      public: authenticatePublicFactory(params),
      fulfillmentService: authenticateFulfillmentServiceFactory(params),
      webhook: authenticateWebhookFactory(params)
    },
    unauthenticated: {
      admin: unauthenticatedAdminContextFactory(params),
      storefront: unauthenticatedStorefrontContextFactory(params)
    }
  };
  return (isAppStoreApp(shopify2, appConfig) || isSingleMerchantApp(shopify2, appConfig)) && (shopify2.login = loginFactory(params)), logDisabledFutureFlags2(config, logger2), shopify2;
}
function isAppStoreApp(_shopify, config) {
  return config.distribution === AppDistribution.AppStore;
}
function isSingleMerchantApp(_shopify, config) {
  return config.distribution === AppDistribution.SingleMerchant;
}
function deriveApi(appConfig) {
  let appUrl;
  try {
    appUrl = new URL(appConfig.appUrl);
  } catch {
    throw new ShopifyError("Invalid appUrl provided. Please provide a valid URL.");
  }
  appUrl.hostname === "localhost" && !appUrl.port && process.env.PORT && (appUrl.port = process.env.PORT), appConfig.appUrl = appUrl.origin;
  let userAgentPrefix = `Shopify Remix Library v${SHOPIFY_REMIX_LIBRARY_VERSION}`;
  return appConfig.userAgentPrefix && (userAgentPrefix = `${appConfig.userAgentPrefix} | ${userAgentPrefix}`), shopifyApi({
    ...appConfig,
    hostName: appUrl.host,
    hostScheme: appUrl.protocol.replace(":", ""),
    userAgentPrefix,
    isEmbeddedApp: appConfig.isEmbeddedApp ?? !0,
    apiVersion: appConfig.apiVersion ?? LATEST_API_VERSION,
    isCustomStoreApp: appConfig.distribution === AppDistribution.ShopifyAdmin,
    future: {
      lineItemBilling: appConfig.future?.v3_lineItemBilling
    },
    _logDisabledFutureFlags: !1
  });
}
function deriveConfig(appConfig, apiConfig) {
  if (!appConfig.sessionStorage)
    throw new ShopifyError("Please provide a valid session storage. Refer to https://github.com/Shopify/shopify-app-js/blob/main/README.md#session-storage-options for options.");
  let authPathPrefix = appConfig.authPathPrefix || "/auth";
  return appConfig.distribution = appConfig.distribution ?? AppDistribution.AppStore, {
    ...appConfig,
    ...apiConfig,
    scopes: apiConfig.scopes,
    idempotentPromiseHandler: new IdempotentPromiseHandler(),
    canUseLoginForm: appConfig.distribution !== AppDistribution.ShopifyAdmin,
    useOnlineTokens: appConfig.useOnlineTokens ?? !1,
    hooks: appConfig.hooks ?? {},
    sessionStorage: appConfig.sessionStorage,
    future: appConfig.future ?? {},
    auth: {
      path: authPathPrefix,
      callbackPath: `${authPathPrefix}/callback`,
      patchSessionTokenPath: `${authPathPrefix}/session-token`,
      exitIframePath: `${authPathPrefix}/exit-iframe`,
      loginPath: `${authPathPrefix}/login`
    }
  };
}

// node_modules/@shopify/shopify-app-remix/dist/esm/server/index.mjs
setAbstractRuntimeString(() => "Remix");

// app/shopify.server.ts
var import_shopify_api16 = __toESM(require_lib()), import_shopify_app_session_storage_memory = __toESM(require_memory()), shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY || "",
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: import_shopify_api16.LATEST_API_VERSION,
  scopes: [
    "read_products",
    "write_products",
    "read_themes",
    "write_themes",
    "read_orders",
    "write_orders"
  ],
  appUrl: process.env.SHOPIFY_APP_URL || "",
  authPathPrefix: "/auth",
  sessionStorage: new import_shopify_app_session_storage_memory.MemorySessionStorage(),
  distribution: "app",
  isEmbedded: !0,
  webhooks: {
    APP_UNINSTALLED: {
      deliveryMethod: import_shopify_api16.DeliveryMethod.Http,
      callbackUrl: "/webhooks"
    }
  },
  hooks: {
    afterAuth: async (session) => {
      shopify.registerWebhooks({ session });
    }
  }
});
var authenticate = shopify.authenticate;

// app/routes/api.create-product.ts
var action = async ({ request: request2 }) => {
  try {
    let { admin } = await authenticate.admin(request2);
    if (request2.method !== "POST")
      return (0, import_node.json)({ success: !1, error: "Method not allowed" }, { status: 405 });
    let body = await request2.json(), { width, height, material, price, baseProductId, customerEmail } = body;
    if (!width || !height || !material || !price)
      return (0, import_node.json)({
        success: !1,
        error: "Gerekli bilgiler eksik"
      }, { status: 400 });
    let productTitle = `\xC7er\xE7eve ${width}\xD7${height} - ${material.charAt(0).toUpperCase() + material.slice(1)}`, product = await admin.product.create({
      title: productTitle,
      body_html: `<p>\xD6zel boyutlu \xE7er\xE7eve: ${width}\xD7${height} cm, ${material} materyal</p>`,
      vendor: "\xD6zel Sipari\u015F",
      product_type: "\xC7er\xE7eve",
      tags: ["ge\xE7ici", "\xF6zel-boyut", "dinamik-fiyat"],
      status: "draft",
      // Vitrinde görünmesin
      variants: [
        {
          price: price.toString(),
          inventory_quantity: 1,
          inventory_management: "shopify",
          option1: `${width}\xD7${height}`,
          option2: material,
          option3: "\xD6zel Boyut"
        }
      ],
      options: [
        { name: "Boyut" },
        { name: "Materyal" },
        { name: "Tip" }
      ],
      metafields: [
        {
          namespace: "custom",
          key: "width",
          value: width.toString(),
          type: "number_integer"
        },
        {
          namespace: "custom",
          key: "height",
          value: height.toString(),
          type: "number_integer"
        },
        {
          namespace: "custom",
          key: "material",
          value: material,
          type: "single_line_text_field"
        },
        {
          namespace: "custom",
          key: "is_temporary",
          value: "true",
          type: "boolean"
        },
        {
          namespace: "custom",
          key: "created_at",
          value: (/* @__PURE__ */ new Date()).toISOString(),
          type: "date_time"
        },
        {
          namespace: "custom",
          key: "expires_at",
          value: new Date(Date.now() + 2 * 60 * 60 * 1e3).toISOString(),
          // 2 saat sonra
          type: "date_time"
        },
        {
          namespace: "custom",
          key: "customer_email",
          value: customerEmail || "",
          type: "single_line_text_field"
        }
      ]
    });
    if (!product.data?.product)
      throw new Error("\xDCr\xFCn olu\u015Fturulamad\u0131");
    let createdProduct = product.data.product, variantId = createdProduct.variants?.[0]?.id;
    return console.log(`Ge\xE7ici \xFCr\xFCn olu\u015Fturuldu: ${createdProduct.id}, ${productTitle}, ${price}TL`), (0, import_node.json)({
      success: !0,
      productId: createdProduct.id.toString(),
      variantId: variantId?.toString(),
      message: "Ge\xE7ici \xFCr\xFCn ba\u015Far\u0131yla olu\u015Fturuldu"
    });
  } catch (error) {
    return console.error("\xDCr\xFCn olu\u015Fturma hatas\u0131:", error), (0, import_node.json)({
      success: !1,
      error: "\xDCr\xFCn olu\u015Fturulurken bir hata olu\u015Ftu"
    }, { status: 500 });
  }
};

// app/routes/api.cleanup.ts
var api_cleanup_exports = {};
__export(api_cleanup_exports, {
  action: () => action2,
  loader: () => loader
});
var import_node2 = require("@remix-run/node");
var action2 = async ({ request: request2 }) => {
  try {
    let { admin } = await authenticate.admin(request2);
    if (request2.method !== "POST")
      return (0, import_node2.json)({ success: !1, error: "Method not allowed" }, { status: 405 });
    let twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1e3), products = await admin.product.list({
      limit: 250,
      status: "draft",
      tag: "ge\xE7ici"
    }), deletedCount = 0, productsToDelete = [];
    for (let product of products.data.products) {
      let expiresAtMetafield = product.metafields?.find(
        (meta2) => meta2.key === "expires_at"
      );
      expiresAtMetafield?.value && new Date(expiresAtMetafield.value) < twoHoursAgo && productsToDelete.push(product.id.toString());
    }
    for (let productId of productsToDelete)
      try {
        await admin.product.delete(productId), deletedCount++, console.log(`Ge\xE7ici \xFCr\xFCn silindi: ${productId}`);
      } catch (deleteError) {
        console.error(`\xDCr\xFCn silinirken hata: ${productId}`, deleteError);
      }
    return console.log(`Temizlik tamamland\u0131: ${deletedCount} \xFCr\xFCn silindi`), (0, import_node2.json)({
      success: !0,
      deletedCount,
      message: `${deletedCount} ge\xE7ici \xFCr\xFCn ba\u015Far\u0131yla silindi`
    });
  } catch (error) {
    return console.error("Temizlik hatas\u0131:", error), (0, import_node2.json)({
      success: !1,
      deletedCount: 0,
      message: "Temizlik s\u0131ras\u0131nda hata olu\u015Ftu",
      error: error instanceof Error ? error.message : "Bilinmeyen hata"
    }, { status: 500 });
  }
}, loader = async ({ request: request2 }) => {
  try {
    let { admin } = await authenticate.admin(request2), temporaryProducts = (await admin.product.list({
      limit: 250,
      status: "draft",
      tag: "ge\xE7ici"
    })).data.products.filter((product) => product.metafields?.find(
      (meta2) => meta2.key === "is_temporary"
    )?.value === "true");
    return (0, import_node2.json)({
      success: !0,
      temporaryProductCount: temporaryProducts.length,
      products: temporaryProducts.map((product) => ({
        id: product.id,
        title: product.title,
        created_at: product.metafields?.find((meta2) => meta2.key === "created_at")?.value,
        expires_at: product.metafields?.find((meta2) => meta2.key === "expires_at")?.value
      }))
    });
  } catch (error) {
    return console.error("\xDCr\xFCn listesi hatas\u0131:", error), (0, import_node2.json)({
      success: !1,
      error: "\xDCr\xFCn listesi al\u0131n\u0131rken hata olu\u015Ftu"
    }, { status: 500 });
  }
};

// app/routes/api.pricing.ts
var api_pricing_exports = {};
__export(api_pricing_exports, {
  action: () => action3
});
var import_node3 = require("@remix-run/node");
var PRICING_DATA = {
  dimensions: {
    "100-200": { min: 0, max: 2e4, coefficient: 1, label: "100-200 cm\xB2" },
    "201-400": { min: 20001, max: 8e4, coefficient: 1.5, label: "201-400 cm\xB2" },
    "401-600": { min: 80001, max: 24e4, coefficient: 2, label: "401-600 cm\xB2" },
    "601-800": { min: 240001, max: 48e4, coefficient: 2.5, label: "601-800 cm\xB2" },
    "801+": { min: 480001, max: 1 / 0, coefficient: 3, label: "801+ cm\xB2" }
  },
  materials: {
    ah\u015Fap: 50,
    cam: 80,
    metal: 120,
    plastik: 30,
    mdf: 40,
    sunta: 25
  }
}, action3 = async ({ request: request2 }) => {
  try {
    let { admin } = await authenticate.admin(request2);
    if (request2.method !== "POST")
      return (0, import_node3.json)({ success: !1, error: "Method not allowed" }, { status: 405 });
    let body = await request2.json(), { width, height, material } = body;
    if (!width || !height || !material)
      return (0, import_node3.json)({
        success: !1,
        price: 0,
        breakdown: {
          basePrice: 0,
          materialPrice: 0,
          dimensionCoefficient: 0,
          area: 0,
          dimensionRange: ""
        },
        error: "Geni\u015Flik, y\xFCkseklik ve materyal bilgileri gereklidir"
      }, { status: 400 });
    if (width <= 0 || height <= 0 || width > 1e3 || height > 1e3)
      return (0, import_node3.json)({
        success: !1,
        price: 0,
        breakdown: {
          basePrice: 0,
          materialPrice: 0,
          dimensionCoefficient: 0,
          area: 0,
          dimensionRange: ""
        },
        error: "Ge\xE7ersiz boyut de\u011Ferleri. Boyutlar 1-1000 cm aras\u0131nda olmal\u0131d\u0131r"
      }, { status: 400 });
    let area = width * height, basePrice = 25, materialPrice = PRICING_DATA.materials[material.toLowerCase()] || 0, dimensionCoefficient = 1, dimensionRange = "";
    for (let [key, data] of Object.entries(PRICING_DATA.dimensions))
      if (area >= data.min && area <= data.max) {
        dimensionCoefficient = data.coefficient, dimensionRange = data.label;
        break;
      }
    let totalPrice = Math.round((basePrice + materialPrice) * dimensionCoefficient), response = {
      success: !0,
      price: totalPrice,
      breakdown: {
        basePrice,
        materialPrice,
        dimensionCoefficient,
        area,
        dimensionRange
      }
    };
    return console.log(`Fiyat hesapland\u0131: ${width}x${height} ${material} = ${totalPrice}TL`), (0, import_node3.json)(response);
  } catch (error) {
    return console.error("Fiyat hesaplama hatas\u0131:", error), (0, import_node3.json)({
      success: !1,
      price: 0,
      breakdown: {
        basePrice: 0,
        materialPrice: 0,
        dimensionCoefficient: 0,
        area: 0,
        dimensionRange: ""
      },
      error: "Fiyat hesaplan\u0131rken bir hata olu\u015Ftu"
    }, { status: 500 });
  }
};

// app/routes/app._index.tsx
var app_index_exports = {};
__export(app_index_exports, {
  default: () => Index,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_react3 = require("@remix-run/react");
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), loader2 = async ({ request: request2 }) => {
  let { admin } = await authenticate.admin(request2), shop = await admin.shop.get();
  return (0, import_node4.json)({
    shop: shop.data.shop
  });
};
function Index() {
  let { shop } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "min-h-screen bg-gray-50 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-4xl mx-auto px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900 text-center mb-8", children: "Dinamik Fiyat Hesaplay\u0131c\u0131" }, void 0, !1, {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-lg text-gray-600", children: [
        "Ho\u015F geldiniz, ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: shop.name }, void 0, !1, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 29,
          columnNumber: 29
        }, this),
        "!"
      ] }, void 0, !0, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 28,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-500 mt-2", children: "Bu uygulama ile \xFCr\xFCnleriniz i\xE7in dinamik fiyat hesaplayabilir ve ge\xE7ici \xFCr\xFCnler olu\u015Fturabilirsiniz." }, void 0, !1, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 27,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-xl font-semibold text-blue-900 mb-4", children: "\u{1F680} Uygulama \xD6zellikleri" }, void 0, !1, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 40,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "space-y-2 text-blue-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: "\u2022 Dinamik boyut bazl\u0131 fiyat hesaplama" }, void 0, !1, {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 44,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: "\u2022 Materyal se\xE7imi ve fiyatland\u0131rma" }, void 0, !1, {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 45,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: "\u2022 Otomatik ge\xE7ici \xFCr\xFCn olu\u015Fturma" }, void 0, !1, {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 46,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: "\u2022 2 saat sonra otomatik temizlik" }, void 0, !1, {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 47,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: "\u2022 Tema entegrasyonu" }, void 0, !1, {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 48,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 43,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-green-50 p-6 rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-xl font-semibold text-green-900 mb-4", children: "\u{1F4CB} Kurulum Ad\u0131mlar\u0131" }, void 0, !1, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 54,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ol", { className: "space-y-2 text-green-800 list-decimal list-inside", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: "Tema d\xFCzenleyicisini a\xE7\u0131n" }, void 0, !1, {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 58,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: "\xDCr\xFCn \u015Fablonuna uygulama blo\u011Fu ekleyin" }, void 0, !1, {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 59,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: "Mevcut varyant se\xE7iciyi gizleyin" }, void 0, !1, {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 60,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: "Uygulamay\u0131 test edin" }, void 0, !1, {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 57,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-8 bg-yellow-50 p-6 rounded-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-xl font-semibold text-yellow-900 mb-4", children: "\u26A1 H\u0131zl\u0131 Ba\u015Flang\u0131\xE7" }, void 0, !1, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid md:grid-cols-3 gap-4 text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-yellow-800 font-bold", children: "1" }, void 0, !1, {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 74,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 73,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-yellow-800", children: "Tema d\xFCzenleyicisini a\xE7\u0131n" }, void 0, !1, {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 72,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-yellow-800 font-bold", children: "2" }, void 0, !1, {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 80,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-yellow-800", children: "Uygulama blo\u011Funu ekleyin" }, void 0, !1, {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-yellow-800 font-bold", children: "3" }, void 0, !1, {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 86,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 85,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-yellow-800", children: "Test edin ve kullan\u0131n" }, void 0, !1, {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 88,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 84,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-8 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-600", children: "Herhangi bir sorun ya\u015Farsan\u0131z, l\xFCtfen destek ekibimizle ileti\u015Fime ge\xE7in." }, void 0, !1, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-sm text-gray-500 mt-2", children: [
        "Uygulama versiyonu: 1.0.0 | Son g\xFCncelleme: ",
        (/* @__PURE__ */ new Date()).toLocaleDateString("tr-TR")
      ] }, void 0, !0, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 94,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app._index.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/app._index.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/app._index.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index2,
  meta: () => meta
});
var import_react4 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "Dinamik Fiyat Hesaplay\u0131c\u0131" },
  { name: "description", content: "Boy, en ve materyal se\xE7imine g\xF6re dinamik fiyat hesaplama" }
];
function Index2() {
  let [width, setWidth] = (0, import_react4.useState)(0), [height, setHeight] = (0, import_react4.useState)(0), [material, setMaterial] = (0, import_react4.useState)(""), [estimatedPrice, setEstimatedPrice] = (0, import_react4.useState)(null), [isLoading, setIsLoading] = (0, import_react4.useState)(!1), [error, setError] = (0, import_react4.useState)(""), pricingData = {
    dimensions: {
      "100-200": 1,
      "201-400": 1.5,
      "401-600": 2,
      "601-800": 2.5,
      "801+": 3
    },
    materials: {
      ah\u015Fap: 50,
      cam: 80,
      metal: 120,
      plastik: 30
    }
  }, calculatePrice = () => {
    if (!width || !height || !material) {
      setEstimatedPrice(null);
      return;
    }
    let area = width * height, dimensionCoefficient = 1;
    area <= 2e4 ? dimensionCoefficient = pricingData.dimensions["100-200"] : area <= 8e4 ? dimensionCoefficient = pricingData.dimensions["201-400"] : area <= 24e4 ? dimensionCoefficient = pricingData.dimensions["401-600"] : area <= 48e4 ? dimensionCoefficient = pricingData.dimensions["601-800"] : dimensionCoefficient = pricingData.dimensions["801+"];
    let calculatedPrice = (25 + (pricingData.materials[material.toLowerCase()] || 0)) * dimensionCoefficient;
    setEstimatedPrice(Math.round(calculatedPrice));
  };
  (0, import_react4.useEffect)(() => {
    calculatePrice();
  }, [width, height, material]);
  let handleAddToCart = async () => {
    if (!width || !height || !material || !estimatedPrice) {
      setError("L\xFCtfen t\xFCm alanlar\u0131 doldurun");
      return;
    }
    setIsLoading(!0), setError("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 2e3)), alert(`\xDCr\xFCn sepete eklendi! Fiyat: ${estimatedPrice} TL`), setWidth(0), setHeight(0), setMaterial(""), setEstimatedPrice(null);
    } catch {
      setError("\xDCr\xFCn sepete eklenirken bir hata olu\u015Ftu. L\xFCtfen tekrar deneyin.");
    } finally {
      setIsLoading(!1);
    }
  }, getDimensionRange = (area) => area <= 2e4 ? "100-200 cm\xB2" : area <= 8e4 ? "201-400 cm\xB2" : area <= 24e4 ? "401-600 cm\xB2" : area <= 48e4 ? "601-800 cm\xB2" : "801+ cm\xB2";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "min-h-screen bg-gray-50 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-w-2xl mx-auto px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900 text-center mb-8", children: "Dinamik Fiyat Hesaplay\u0131c\u0131" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 109,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { className: "form-label", children: "Geni\u015Flik (cm)" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 117,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "input",
            {
              type: "number",
              min: "1",
              max: "1000",
              value: width || "",
              onChange: (e) => setWidth(Number(e.target.value)),
              className: "form-input",
              placeholder: "Geni\u015Flik girin"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 118,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 116,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { className: "form-label", children: "Y\xFCkseklik (cm)" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 129,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "input",
            {
              type: "number",
              min: "1",
              max: "1000",
              value: height || "",
              onChange: (e) => setHeight(Number(e.target.value)),
              className: "form-input",
              placeholder: "Y\xFCkseklik girin"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 130,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 128,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 115,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { className: "form-label", children: "Materyal" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 144,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "select",
          {
            value: material,
            onChange: (e) => setMaterial(e.target.value),
            className: "form-input",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "", children: "Materyal se\xE7in" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 150,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "ah\u015Fap", children: "Ah\u015Fap" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 151,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "cam", children: "Cam" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 152,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "metal", children: "Metal" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 153,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "plastik", children: "Plastik" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 154,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 145,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 143,
        columnNumber: 13
      }, this),
      estimatedPrice && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "price-display text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-sm text-gray-600 mb-2", children: "Tahmini Fiyat" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 161,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-4xl", children: [
          estimatedPrice,
          " TL"
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 162,
          columnNumber: 17
        }, this),
        width && height && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-sm text-gray-500 mt-2", children: [
          "Alan: ",
          width,
          " \xD7 ",
          height,
          " = ",
          width * height,
          " cm\xB2 (",
          getDimensionRange(width * height),
          ")"
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 164,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 160,
        columnNumber: 15
      }, this),
      error && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg", children: error }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 174,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "button",
        {
          onClick: handleAddToCart,
          disabled: !width || !height || !material || isLoading,
          className: `w-full btn-primary ${!width || !height || !material || isLoading ? "opacity-50 cursor-not-allowed" : ""}`,
          children: isLoading ? "Sepete Ekleniyor..." : "Sepete Ekle"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 180,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-sm text-gray-600 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "\u2022 Olu\u015Fturulan \xFCr\xFCnler 2 saat sonra otomatik olarak silinir" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 194,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "\u2022 Fiyatlar tahmini olup, nihai fiyat sipari\u015F s\u0131ras\u0131nda do\u011Frulan\u0131r" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 195,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 193,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 113,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 108,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 107,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-FXAUTCMC.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-OGE7FTCN.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-HAMQ6OZS.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-GGIR7472.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-WNH4SWW7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.cleanup": { id: "routes/api.cleanup", parentId: "root", path: "api/cleanup", index: void 0, caseSensitive: void 0, module: "/build/routes/api.cleanup-7R4LVEWX.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.create-product": { id: "routes/api.create-product", parentId: "root", path: "api/create-product", index: void 0, caseSensitive: void 0, module: "/build/routes/api.create-product-VYHFLECT.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.pricing": { id: "routes/api.pricing", parentId: "root", path: "api/pricing", index: void 0, caseSensitive: void 0, module: "/build/routes/api.pricing-RUWRUNEF.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app._index": { id: "routes/app._index", parentId: "root", path: "app", index: !0, caseSensitive: void 0, module: "/build/routes/app._index-2KO6TO6A.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "cc8c62ef", hmr: { runtime: "/build/_shared\\chunk-HAMQ6OZS.js", timestamp: 1756319565357 }, url: "/build/manifest-CC8C62EF.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api.create-product": {
    id: "routes/api.create-product",
    parentId: "root",
    path: "api/create-product",
    index: void 0,
    caseSensitive: void 0,
    module: api_create_product_exports
  },
  "routes/api.cleanup": {
    id: "routes/api.cleanup",
    parentId: "root",
    path: "api/cleanup",
    index: void 0,
    caseSensitive: void 0,
    module: api_cleanup_exports
  },
  "routes/api.pricing": {
    id: "routes/api.pricing",
    parentId: "root",
    path: "api/pricing",
    index: void 0,
    caseSensitive: void 0,
    module: api_pricing_exports
  },
  "routes/app._index": {
    id: "routes/app._index",
    parentId: "root",
    path: "app",
    index: !0,
    caseSensitive: void 0,
    module: app_index_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
