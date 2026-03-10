import {
  overlap
} from "./chunk-NBBEZTJD.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-XYMMIVK6.js";
import "./chunk-ECLT53ND.js";

// node_modules/@sutton-signwriting/sgnw-components/dist/esm/sgnw-signbox.entry.js
var sgnwSignboxCss = ".sc-sgnw-signbox-h{width:100%;height:100%;border-radius:10px;display:block}";
var SgnwSignbox = class {
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
SgnwSignbox.style = sgnwSignboxCss;
export {
  SgnwSignbox as sgnw_signbox
};
//# sourceMappingURL=sgnw-signbox.entry-EXG4RON4.js.map
