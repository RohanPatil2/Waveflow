import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  ConsentStatus,
  ConsentType
} from "./chunk-7CKEIHU3.js";
import {
  registerPlugin
} from "./chunk-M4MN3DPL.js";
import "./chunk-5P6RLSS7.js";

// node_modules/@capacitor-firebase/analytics/dist/esm/index.js
var FirebaseAnalytics = registerPlugin("FirebaseAnalytics", {
  web: () => import("./web-BXKN5JWX.js").then((m) => new m.FirebaseAnalyticsWeb())
});
export {
  ConsentStatus,
  ConsentType,
  FirebaseAnalytics
};
//# sourceMappingURL=@capacitor-firebase_analytics.js.map
