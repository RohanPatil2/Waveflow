import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  getToken,
  initializeAppCheck,
  onTokenChanged,
  setTokenAutoRefreshEnabled
} from "./chunk-INPDDFUD.js";
import {
  getApp,
  registerVersion
} from "./chunk-7EOKDLMV.js";
import {
  WebPlugin
} from "./chunk-M4MN3DPL.js";
import {
  __async
} from "./chunk-5P6RLSS7.js";

// node_modules/firebase/app/dist/index.mjs
var name = "firebase";
var version = "12.7.0";
registerVersion(name, version, "app");

// node_modules/@capacitor-firebase/app-check/dist/esm/web.js
var FirebaseAppCheckWeb = class _FirebaseAppCheckWeb extends WebPlugin {
  get appCheckInstance() {
    return this._appCheckInstance;
  }
  set appCheckInstance(value) {
    this._appCheckInstance = value;
    if (value) {
      this.registerOnTokenChangedListener();
    } else {
      this.unregisterOnTokenChangedListener();
    }
  }
  getToken(options) {
    return __async(this, null, function* () {
      if (!this.appCheckInstance) {
        throw new Error(_FirebaseAppCheckWeb.errorNotInitialized);
      }
      const result = yield getToken(this.appCheckInstance, options === null || options === void 0 ? void 0 : options.forceRefresh);
      return {
        token: result.token
      };
    });
  }
  initialize(options) {
    return __async(this, null, function* () {
      if (options === null || options === void 0 ? void 0 : options.debugToken) {
        self.FIREBASE_APPCHECK_DEBUG_TOKEN = options.debugToken;
      } else if (options === null || options === void 0 ? void 0 : options.debug) {
        self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
      }
      let provider = options === null || options === void 0 ? void 0 : options.provider;
      if (!provider) {
        if (!(options === null || options === void 0 ? void 0 : options.siteKey)) {
          throw new Error(_FirebaseAppCheckWeb.errorSiteKeyMissing);
        }
        const { ReCaptchaV3Provider } = yield import("./dist-YH2JJXVD.js");
        provider = new ReCaptchaV3Provider(options === null || options === void 0 ? void 0 : options.siteKey);
      }
      const app = getApp();
      this.appCheckInstance = initializeAppCheck(app, {
        provider,
        isTokenAutoRefreshEnabled: options === null || options === void 0 ? void 0 : options.isTokenAutoRefreshEnabled
      });
    });
  }
  setTokenAutoRefreshEnabled(options) {
    return __async(this, null, function* () {
      if (!this.appCheckInstance) {
        throw new Error(_FirebaseAppCheckWeb.errorNotInitialized);
      }
      setTokenAutoRefreshEnabled(this.appCheckInstance, options.enabled);
    });
  }
  registerOnTokenChangedListener() {
    if (!this.appCheckInstance) {
      return;
    }
    this.onTokenChangedListenerUnsubscribe = onTokenChanged(this.appCheckInstance, (tokenResult) => this.handleTokenChanged(tokenResult.token));
  }
  unregisterOnTokenChangedListener() {
    if (this.onTokenChangedListenerUnsubscribe) {
      this.onTokenChangedListenerUnsubscribe();
    }
  }
  handleTokenChanged(token) {
    const event = {
      token
    };
    this.notifyListeners(_FirebaseAppCheckWeb.tokenChangedEvent, event);
  }
};
FirebaseAppCheckWeb.tokenChangedEvent = "tokenChanged";
FirebaseAppCheckWeb.errorNotInitialized = "AppCheck has not been initialized.";
FirebaseAppCheckWeb.errorSiteKeyMissing = "siteKey must be provided.";
export {
  FirebaseAppCheckWeb
};
//# sourceMappingURL=web-RR77LLDB.js.map
