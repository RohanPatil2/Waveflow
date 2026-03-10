import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  overlap
} from "./chunk-QDYT2HQG.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-BPRRLC5G.js";
import "./chunk-5P6RLSS7.js";

// node_modules/@sutton-signwriting/sgnw-components/dist/esm/fsw-signbox.entry.js
var fswSignboxCss = ".sc-fsw-signbox-h{width:100%;height:100%;border-radius:10px;display:block}";
var FswSignbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  paletteSymbolDropHandler(event) {
    const target = event.target;
    if (overlap(target, this.el)) {
      console.log(event.detail);
    }
  }
  render() {
    return h(Host, null, h("slot", null));
  }
  get el() {
    return getElement(this);
  }
};
FswSignbox.style = fswSignboxCss;
export {
  FswSignbox as fsw_signbox
};
//# sourceMappingURL=fsw-signbox.entry-BZWIYCXL.js.map
