import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  findClosestIonContent,
  scrollToTop
} from "./chunk-VX7HJVXW.js";
import {
  readTask,
  writeTask
} from "./chunk-RSOWYP3M.js";
import {
  componentOnReady
} from "./chunk-DVD5D6D2.js";
import "./chunk-PDQ2DTDR.js";
import {
  __async
} from "./chunk-5P6RLSS7.js";

// node_modules/@ionic/core/components/status-tap.js
var startStatusTap = () => {
  const win = window;
  win.addEventListener("statusTap", () => {
    readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = findClosestIonContent(el);
      if (contentEl) {
        new Promise((resolve) => componentOnReady(contentEl, resolve)).then(() => {
          writeTask(() => __async(null, null, function* () {
            contentEl.style.setProperty("--overflow", "hidden");
            yield scrollToTop(contentEl, 300);
            contentEl.style.removeProperty("--overflow");
          }));
        });
      }
    });
  });
};
export {
  startStatusTap
};
//# sourceMappingURL=status-tap-WHAIBJXI.js.map
