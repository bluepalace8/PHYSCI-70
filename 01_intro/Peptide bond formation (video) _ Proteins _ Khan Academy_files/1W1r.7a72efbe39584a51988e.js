(window.webpackJsonp=window.webpackJsonp||[]).push([["1W1r"],{"+jAD":function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.propTypes=t.change=void 0;var a=r(n("17x9")),o=r(n("5pch")),i=n("4PhQ"),u=r(n("Wy19"));const s='Usage:\n  this.change({propName: 5}, callback);\n  this.change("propName", 5, callback);\n  this.change("propName")',l=function(e,t,n){const r=o.default.omit(e.props,u.default),a=o.default.extend(r,t);e.props.onChange(a,n)},p=function e(t,n,r,a){if(void 0===r)return o.default.partial(e,t,n);const i={};i[n]=r,l(t,i,a)};t.change=function(e,t,n){if(o.default.isObject(e)&&void 0===n)return l(this,e,n=t);if("string"==typeof e)return p(this,e,t,n);throw new i.KAError("Invalid types sent to this.change(): "+o.default.toArray(arguments).join()+"\n"+s,i.Errors.Internal)};const f={onChange:a.default.func.isRequired};t.propTypes=f},"7gXX":function(e,t,n){"use strict";function r(e,t,n){const r=e.indexOf("{",t)+1,a=function(e,t){let n=0;for(let r=t,a=e.length;r<a;r++){const t=e[r];if("{"===t?n++:"}"===t&&n--,n<0)return r}return e.length}(e,r);return{endpoint:a,expression:o(e.substring(r,a),n)}}function a(e,t){const n=e.indexOf("\\frac",t),r=e.indexOf("\\dfrac",t);return n>-1&&r>-1?Math.min(n,r):n>-1?n:r>-1?r:-1}function o(e,t){if(!e)return"";let n="",o=0,i=a(e,o);for(;i>-1;){n+=e.substring(o,i),o=i;const u=r(e,o,t);o=u.endpoint+1;const s=r(e,o,t);o=s.endpoint+1,n.length&&(n+=" "),n+=t(u.expression,s.expression),i=a(e,o)}return n+=e.slice(o),n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={parseTex:function(e){return o(e,(function(e,t){return e+"/"+t})).replace("\\%","%")},modifyTex:function(e){function t(e){return e.indexOf("\\frac")>-1||e.indexOf("\\dfrac")>-1}return o(e,(function(e,n){let r;return r=t(e)||t(n)?"\\dfrac":"\\frac",r+" {"+e+"}{"+n+"}"}))}};t.default=i},"7xiW":function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n("q1tI")),o=r(n("17x9")),i=r(n("i8i4")),u=r(n("5pch")),s=r(n("brIp")),l=n("j8wP"),p=r(n("7gXX")),f=r(n("96rG"));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}const d=p.default.modifyTex;class h extends a.Component{constructor(...e){super(...e),this.state={focused:!1,selectorNamespace:u.default.uniqueId("math-output")},this._getInputClassName=()=>{let e="math-output "+l.ClassNames.INPUT+" "+l.ClassNames.INTERACTIVE;return this.state.focused&&(e+=" "+l.ClassNames.FOCUSED),this.props.className&&(e+=" "+this.props.className),e},this._getDisplayValue=e=>{let t;return t=null!=e?""+e:"",d(t)},this.getValue=()=>this.props.value,this.focus=()=>{this.state.focused||(this.props.onFocus(),this._bindBlurHandler(),this.setState({focused:!0}))},this.blur=()=>{this.state.focused&&(this.props.onBlur(),this._unbindBlurHandler(),this.setState({focused:!1}))},this._bindBlurHandler=()=>{(0,f.default)(document).bind("vclick."+this.state.selectorNamespace,(e=>{(0,f.default)(e.target).closest(i.default.findDOMNode(this)).length||this.blur()}))},this._unbindBlurHandler=()=>{(0,f.default)(document).unbind("."+this.state.selectorNamespace)}}render(){return a.createElement("span",{ref:"input",className:this._getInputClassName(),"aria-label":this.props.labelText,onMouseDown:this.focus,onTouchStart:this.focus},a.createElement("div",{style:{textAlign:"center"}},a.createElement(s.default,null,this._getDisplayValue(this.props.value))))}componentWillUnmount(){this._unbindBlurHandler()}}h.propTypes={value:o.default.oneOfType([o.default.string,o.default.number]),className:o.default.string,labelText:o.default.string,onFocus:o.default.func,onBlur:o.default.func},h.defaultProps={value:"",onFocus:function(){},onBlur:function(){}};var g=h;t.default=g},G6Ta:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("pVnL")),o=r(n("8OQS")),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n("q1tI")),u=r(n("17x9")),s=r(n("i8i4"));const l=["labelText"];function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}class f extends i.Component{constructor(...e){super(...e),this.focus=()=>{s.default.findDOMNode(this).focus()},this.blur=()=>{s.default.findDOMNode(this).blur()},this.getValue=()=>{var e;return null==(e=s.default.findDOMNode(this))?void 0:e.value},this.getStringValue=()=>{var e;return null==(e=s.default.findDOMNode(this))?void 0:e.value.toString()},this.setSelectionRange=(e,t)=>{s.default.findDOMNode(this).setSelectionRange(e,t)},this.getSelectionStart=()=>s.default.findDOMNode(this).selectionStart,this.getSelectionEnd=()=>s.default.findDOMNode(this).selectionEnd}render(){const e=this.props,{labelText:t}=e,n=(0,o.default)(e,l);return i.createElement("input",(0,a.default)({},n,{type:"text","aria-label":t,onChange:e=>this.props.onChange(e.target.value)}))}}f.propTypes={value:u.default.string,onChange:u.default.func.isRequired,className:u.default.string,labelText:u.default.string,onFocus:u.default.func,onBlur:u.default.func,disabled:u.default.bool},f.defaultProps={value:"",disabled:!1};var c=f;t.default=c},Wy19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=["key","ref","containerSizeClass","widgetId","onChange","problemNum","apiOptions","questionCompleted","findWidgets","onRemove","id","onBlur","onFocus","trackInteraction","keypadElement"]},eMwK:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("pVnL")),o=r(n("8OQS")),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n("q1tI")),u=r(n("17x9")),s=r(n("fhzG")),l=n("reBI");const p=["keypadElement","onFocus","value"];function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}const{KeypadInput:c}=l.components,{KeypadTypes:d}=l.consts,{keypadElementPropType:h}=l.propTypes;var g=(0,s.default)({displayName:"SimpleKeypadInput",propTypes:{keypadElement:h,onFocus:u.default.func,value:u.default.oneOfType([u.default.string,u.default.number])},componentDidMount:function(){this._isMounted=!0},componentWillUnmount:function(){this._isMounted=!1},focus(){this.refs.input.focus()},blur(){this.refs.input.blur()},getValue:function(){return this.props.value},render(){const e=this,t=e.props,{keypadElement:n,onFocus:r,value:u}=t,s=(0,o.default)(t,p);return i.createElement(c,(0,a.default)({ref:"input",keypadElement:n,onFocus:()=>{n?n.configure({keypadType:d.FRACTION},(()=>{e._isMounted&&r&&r()})):r&&r()},value:null==u?"":""+u},s))}});t.default=g},fUCW:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("Wy19")),o=r(n("5pch"));var i={getUserInput:function(){return o.default.omit(this.props,a.default)},getUserInputFromProps:function(e){return o.default.omit(e,a.default)}};t.default=i},gmVs:function(e,t,n){"use strict";var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){var n=function(e){return e===Object(e)},r=function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];if(n)for(var r in n)e[r]=n[r]}return e};e.exports={isObject:n,merge:r,clone:function(e){return n(e)?Array.isArray(e)?e.slice():r(e):e}}},function(e,t,n){var r=n(0),a=r.clone,o=r.isObject,i=r.merge,u=n(2),s=n(3),l=n(4),p=function(e){return Array.isArray(e)?u:o(e)?s:"string"==typeof e?l:void 0},f=function e(t){if(t instanceof e)return t;if(!(this instanceof e))return new e(t);var n=p(t);this._wrapped=n.thaw?n.thaw(t):t};f.prototype.freeze=function(){var e=this._wrapped,t=p(e);return t.freeze?t.freeze(e):e},f.prototype.zoom=function(e){return void 0===this._zoomStack&&(this._zoomStack=[]),this._zoomStack.push({zoom:e,wrapped:this._wrapped}),this._wrapped=f(this._wrapped).get(e),this},f.prototype.deZoom=function(){var e=this._zoomStack.pop();return this._wrapped=f(e.wrapped).set(e.zoom,this._wrapped).freeze(),this},f.prototype.get=function(e){for(var t=this._wrapped,n=0;n<e.length;n++)t=p(t).get(t,e[n]);return t},f.prototype.mod=function(e,t){var n=this._wrapped,r=a(n),o=p(n);if(0===e.length)this._wrapped=t(this._wrapped);else if(1===e.length)this._wrapped=o.mod(r,e[0],t);else{var i=e[0],u=e.slice(1);r[i]=f(n[i]).mod(u,t).freeze(),this._wrapped=r}return this},f.prototype.merge=function(e,t){return this._wrapped=f(this._wrapped).mod(e,(function(e){return i(e,t)})).freeze(),this},f.prototype.del=function(e){var t=this._wrapped,n=p(t);if(1===e.length)this._wrapped=n.del(t,e[0]);else{var r=e[0],o=e.slice(1),i=a(t);i[r]=f(t[r]).del(o).freeze(),this._wrapped=i}return this},f.prototype.set=function(e,t){return this.mod(e,(function(){return t}))},e.exports=f},function(e,t){e.exports={get:function(e,t){return e[t]},set:function(e,t,n){var r=e.splice();return r[t]=n,r},mod:function(e,t,n){var r=e.slice();return r[t]=n(e[t]),r},del:function(e,t){var n=e.slice();return n.splice(t,1),n}}},function(e,t,n){var r=n(0).clone;e.exports={get:function(e,t){return e[t]},set:function(e,t,n){var a=r(e);return a[t]=n,a},mod:function(e,t,n){var a=r(e);return a[t]=n(e[t]),a},del:function(e,t){var n=r(e);return delete n[t],n}}},function(e,t){e.exports={get:function(e,t){return e[t]},set:function(e,t,n){var r=e.splice();return r[t]=n,r},mod:function(e,t,n){var r=e.splice();return r[t]=n(e[t]),r},del:function(e,t){var n=e.slice();return n.splice(t),n}}}])},e.exports=r()},z875:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(n("q1tI")),o=r(n("5pch")),i=f(n("+jAD")),u=r(n("2OMh")),s=r(n("fUCW")),l=f(n("HEOz"));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}class c extends a.Component{constructor(...e){super(...e),this.displayName="PassageRef",this.state={lineRange:null,content:null},this.getUserInput=()=>s.default.getUserInput.call(this),this.change=(...e)=>i.change.apply(this,e),this._deferredUpdateRange=()=>{o.default.defer(this._updateRange)},this._updateRange=()=>{const e=this.props.findWidgets("passage "+this.props.passageNumber)[0];let t=null;e&&(t=e.getReference(this.props.referenceNumber)),this._isMounted&&(t?this.setState({lineRange:[t.startLine,t.endLine],content:t.content}):this.setState({lineRange:null,content:null}))},this.simpleValidate=e=>c.validate(this.getUserInput(),e)}shouldComponentUpdate(e,t){return!o.default.isEqual(this.props,e)||!o.default.isEqual(this.state,t)}render(){const e=this.state.lineRange;let t,n;if(t=e?e[0]===e[1]?l.$_("line %(lineNumber)s",{lineNumber:e[0]}):l.$_("lines %(lineRange)s",{lineRange:e[0]+"–"+e[1]}):l.$_("lines %(lineRange)s",{lineRange:"?–?"}),this.props.summaryText){const e=u.default.parseInline(this.props.summaryText);n=a.createElement("span",{"aria-hidden":!0}," ","(“",u.default.basicOutput(e),"”)")}else n=null;return a.createElement("span",null,t,n,e&&a.createElement("div",{className:"perseus-sr-only"},this.state.content))}componentDidMount(){this._isMounted=!0,this._deferredUpdateRange(),this._throttledUpdateRange=o.default.throttle(this._deferredUpdateRange,500),window.addEventListener("resize",this._throttledUpdateRange)}componentDidUpdate(){this._deferredUpdateRange()}componentWillUnmount(){window.removeEventListener("resize",this._throttledUpdateRange),this._isMounted=!1}static validate(e,t){return{type:"points",earned:0,total:0,message:null}}}c.defaultProps={passageNumber:1,referenceNumber:1,summaryText:""};var d={name:"passage-ref",displayName:"PassageRef (SAT only)",defaultAlignment:"inline",widget:c,transform:e=>o.default.pick(e,"passageNumber","referenceNumber","summaryText"),version:{major:0,minor:1}};t.default=d}}]);
//# sourceMappingURL=../../sourcemaps/en/1W1r.7a72efbe39584a51988e.js.map