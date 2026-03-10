import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  draggabilly
} from "./chunk-F6VSKTGD.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-BPRRLC5G.js";
import "./chunk-5P6RLSS7.js";

// node_modules/@sutton-signwriting/sgnw-components/dist/esm/fsw-spatial.entry.js
var fswSpatialCss = ".sc-fsw-spatial-h{width:140px;height:140px;background:#F90;border-radius:10px;cursor:move;display:block}.is-pointer-down.sc-fsw-spatial-h{background:#09F}.is-dragging.sc-fsw-spatial-h{opacity:0.7}";
var FswSymbol = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    this.draggie = new draggabilly(this.el);
  }
  render() {
    return h(Host, null, h("slot", null));
  }
  get el() {
    return getElement(this);
  }
};
FswSymbol.style = fswSpatialCss;
export {
  FswSymbol as fsw_spatial
};
//# sourceMappingURL=fsw-spatial.entry-DLW5QH2D.js.map
