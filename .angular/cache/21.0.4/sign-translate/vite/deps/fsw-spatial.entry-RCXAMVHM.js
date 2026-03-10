import {
  draggabilly
} from "./chunk-WS67TSTX.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-XYMMIVK6.js";
import "./chunk-ECLT53ND.js";

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
//# sourceMappingURL=fsw-spatial.entry-RCXAMVHM.js.map
