(window.webpackJsonp=window.webpackJsonp||[]).push([["ACiX"],{CDii:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},K7le:function(e,t,n){"use strict";n.r(t),n.d(t,"Popover",(function(){return P})),n.d(t,"PopoverContent",(function(){return R})),n.d(t,"PopoverContentCore",(function(){return k}));var o=n("CDii"),s=n.n(o),r=n("q1tI"),i=n("i8i4"),l=n.n(i),a=n("JimW"),c=n("6RhW"),d=n("Uafs"),p=n("mR6N"),u=n("Pwnf"),h=n("gE8/"),m=n("Vxy9"),f=n("yts4"),b=n("+6Ef");const E={close:void 0,placement:"top"};var g=Object(r.createContext)(E);class y extends r.Component{componentDidMount(){const e=Object(i.findDOMNode)(this);e&&this.props.anchorRef(e)}render(){const{children:e,id:t,onClick:n,"aria-controls":o,"aria-expanded":i}=this.props,l={id:t,"aria-controls":o,"aria-expanded":i};if("function"==typeof e){const t=e({open:n});return Object(r.cloneElement)(t,l)}return Object(r.cloneElement)(e,s()({},e.props,l,{onClick:e.props.onClick?t=>{t.stopPropagation(),e.props.onClick(),n()}:n}))}}class x extends r.Component{componentDidUpdate(e){e.placement!==this.props.placement&&this.props.onUpdate(this.props.placement)}render(){const{placement:e,children:t,id:n,isReferenceHidden:o,updateBubbleRef:s,updateTailRef:i,tailOffset:l,style:d,"aria-describedby":p}=this.props,u=t.props,h=u.emphasized?"blue":u.color;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(a.View,{"aria-describedby":p,id:n,role:"dialog",ref:s,"data-placement":e,style:[o&&v.hide,v[`content-${e}`],d]},t,Object(r.createElement)(c.TooltipTail,{color:h,updateRef:i,placement:e,offset:l})))}}const v=p.StyleSheet.create({hide:{pointerEvents:"none",opacity:0,backgroundColor:"transparent",color:"transparent"},"content-top":{flexDirection:"column"},"content-right":{flexDirection:"row-reverse"},"content-bottom":{flexDirection:"column-reverse"},"content-left":{flexDirection:"row"}});function w(e){return Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))}class C extends r.Component{constructor(...e){super(...e),this.setInitialFocusableElement=e=>{const t=this.maybeGetInitialFocusElement(e)||this.maybeGetFirstFocusableElement(e)||e;t===e&&(e.tabIndex=-1),setTimeout((()=>{t.focus()}),0)}}componentDidMount(){const e=Object(i.findDOMNode)(this);e&&this.setInitialFocusableElement(e)}maybeGetInitialFocusElement(e){const{initialFocusId:t}=this.props;return t?e.querySelector(`#${t}`):null}maybeGetFirstFocusableElement(e){const t=w(e);return t.length?t[0]:null}render(){return this.props.children}}class O extends r.Component{constructor(...e){super(...e),this.focusableElementsInPopover=[],this.addEventListeners=()=>{const{anchorElement:e}=this.props;e&&e.addEventListener("keydown",this.handleKeydownPreviousFocusableElement,!0),this.nextElementAfterPopover=this.getNextFocusableElement(),this.nextElementAfterPopover&&this.nextElementAfterPopover.addEventListener("keydown",this.handleKeydownNextFocusableElement,!0)},this.getNextFocusableElement=()=>{const{anchorElement:e}=this.props;if(!e||this.nextElementAfterPopover)return;const t=w(document),n=t.indexOf(e);if(n>=0){return t[n<t.length-1?n+1:0]}},this.getComponentRootNode=e=>{if(!e)return;const t=Object(i.findDOMNode)(e);if(!t)throw new Error("Assertion error: root node should exist after mount");this.rootNode=t,this.focusableElementsInPopover=w(this.rootNode)},this.handleFocusPreviousFocusableElement=()=>{this.props.anchorElement&&this.props.anchorElement.focus()},this.handleFocusNextFocusableElement=()=>{this.nextElementAfterPopover&&this.nextElementAfterPopover.focus()},this.handleKeydownPreviousFocusableElement=e=>{"Tab"!==e.key||e.shiftKey||(e.preventDefault(),this.focusableElementsInPopover[0].focus())},this.handleKeydownNextFocusableElement=e=>{if("Tab"===e.key&&e.shiftKey){e.preventDefault();const t=this.focusableElementsInPopover.length-1;this.focusableElementsInPopover[t].focus()}}}componentDidMount(){this.addEventListeners()}componentDidUpdate(){this.addEventListeners()}componentWillUnmount(){const{anchorElement:e}=this.props;e&&(setTimeout((()=>e.focus()),0),e.removeEventListener("keydown",this.handleKeydownPreviousFocusableElement,!0)),this.nextElementAfterPopover&&this.nextElementAfterPopover.removeEventListener("keydown",this.handleKeydownNextFocusableElement,!0)}render(){const{children:e}=this.props;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{tabIndex:"0",onFocus:this.handleFocusPreviousFocusableElement,style:{position:"fixed"}}),Object(r.createElement)("div",{ref:this.getComponentRootNode},Object(r.createElement)(C,{initialFocusId:this.props.initialFocusId},e)),Object(r.createElement)("div",{tabIndex:"0",onFocus:this.handleFocusNextFocusableElement,style:{position:"fixed"}}))}}class j extends r.Component{constructor(...e){super(...e),this.state={isFirstClick:!0},this._handleKeyup=e=>{"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),this.props.onClose())},this._handleClick=e=>{var t;if(this.state.isFirstClick)return void this.setState({isFirstClick:!1});const n=l.a.findDOMNode(null==(t=this.props.contentRef)?void 0:t.current);n&&!n.contains(e.target)&&(e.preventDefault(),e.stopPropagation(),this.props.onClose())}}componentDidMount(){window.addEventListener("keyup",this._handleKeyup),window.addEventListener("click",this._handleClick)}componentWillUnmount(){window.removeEventListener("keyup",this._handleKeyup),window.removeEventListener("click",this._handleClick)}render(){return null}}class P extends r.Component{constructor(...e){super(...e),this.state={opened:!!this.props.opened,anchorElement:null,placement:this.props.placement},this.contentRef=Object(r.createRef)(),this.handleClose=()=>{this.setState({opened:!1},(()=>{this.props.onClose&&this.props.onClose()}))},this.handleOpen=()=>{this.props.dismissEnabled&&this.state.opened?this.setState({opened:!1}):this.setState({opened:!0})},this.updateRef=e=>{const t=e&&l.a.findDOMNode(e);t&&this.state.anchorElement!==t&&this.setState({anchorElement:t})}}static getDerivedStateFromProps(e,t){return{opened:"boolean"==typeof e.opened?e.opened:t.opened}}renderContent(){const{content:e}=this.props;return Object(r.cloneElement)("function"==typeof e?e({close:this.handleClose}):e,{ref:this.contentRef})}renderPopper(e){const{initialFocusId:t,placement:n}=this.props,{anchorElement:o}=this.state;return Object(r.createElement)(O,{anchorElement:o,initialFocusId:t},Object(r.createElement)(c.TooltipPopper,{anchorElement:o,placement:n},(t=>Object(r.createElement)(x,s()({},t,{"aria-describedby":`${e}-anchor`,id:e,onUpdate:e=>this.setState({placement:e})}),this.renderContent()))))}getHost(){return Object(d.maybeGetPortalMountedModalHostElement)(this.state.anchorElement)||document.body}render(){const{children:e,dismissEnabled:t,id:n}=this.props,{opened:o,placement:s}=this.state,i=this.getHost();return Object(r.createElement)(g.Provider,{value:{close:this.handleClose,placement:s}},Object(r.createElement)(a.IDProvider,{id:n,scope:"popover"},(t=>Object(r.createElement)(r.Fragment,null,Object(r.createElement)(y,{anchorRef:this.updateRef,id:`${t}-anchor`,"aria-controls":t,"aria-expanded":o?"true":"false",onClick:this.handleOpen},e),i&&o&&l.a.createPortal(this.renderPopper(t),i)))),t&&o&&Object(r.createElement)(j,{onClose:this.handleClose,contentRef:this.contentRef}))}}P.defaultProps={placement:"top"};class F extends r.Component{render(){const{light:e,"aria-label":t,style:n,testId:o}=this.props;return Object(r.createElement)(g.Consumer,null,(({close:s})=>Object(r.createElement)(b.default,{icon:f.icons.dismiss,"aria-label":t,onClick:s,kind:e?"primary":"tertiary",light:e,style:n,testId:o})))}}F.defaultProps={light:!0,"aria-label":"Close Popover"};class k extends r.Component{render(){const{children:e,closeButtonLight:t,closeButtonLabel:n,closeButtonVisible:o,color:s,style:i,testId:l}=this.props;return Object(r.createElement)(a.View,{"data-test-id":l,style:[I.content,"white"!==s&&I[s],i]},o&&Object(r.createElement)(F,{"aria-label":n,light:t||"white"!==s,style:I.closeButton,testId:`${l||"popover"}-close-btn`}),e)}}k.defaultProps={color:"white",closeButtonLight:!1,closeButtonVisible:!1};const I=p.StyleSheet.create({content:{borderRadius:h.default.xxxSmall_4,border:`solid 1px ${u.default.offBlack16}`,backgroundColor:u.default.white,boxShadow:`0 ${h.default.xSmall_8}px ${h.default.xSmall_8}px 0 ${u.default.offBlack8}`,margin:0,maxWidth:18*h.default.medium_16,padding:h.default.large_24,overflow:"hidden",justifyContent:"center"},blue:{backgroundColor:u.default.blue,color:u.default.white},darkBlue:{backgroundColor:u.default.darkBlue,color:u.default.white},closeButton:{position:"absolute",right:h.default.xSmall_8,top:h.default.xSmall_8,zIndex:1}}),_=Object(a.addStyle)("img");class R extends r.Component{constructor(...e){super(...e),this.maybeRenderImage=({placement:e})=>{const{image:t}=this.props;return t?Object(r.createElement)(a.View,{style:[D.image,"bottom"===e&&D.imageToBottom]},t):null},this.maybeRenderIcon=()=>{const{icon:e}=this.props;return e?Object(r.createElement)(a.View,{style:D.iconContainer},"string"!=typeof e?e:Object(r.createElement)(_,{src:e,style:D.icon})):null},this.maybeRenderActions=e=>{const{actions:t}=this.props;return t?Object(r.createElement)(a.View,{style:D.actions},"function"==typeof t?t({close:e}):t):null}}componentDidMount(){const{icon:e,image:t}=this.props;if(t&&e)throw new Error("'image' and 'icon' cannot be used at the same time. You can fix this by either removing 'image' or 'icon' from your instance.")}validateProps({placement:e}){if(this.props.image&&("left"===e||"right"===e))throw new Error("'image' can only be vertically placed. You can fix this by either changing `placement` to `top` or `bottom` or removing the `image` prop inside `content`.")}render(){const{closeButtonLabel:e,closeButtonVisible:t,content:n,emphasized:o,icon:s,image:i,style:l,title:c,testId:d}=this.props;return Object(r.createElement)(g.Consumer,null,(({close:p,placement:u})=>(this.validateProps({close:p,placement:u}),Object(r.createElement)(k,{color:o?"blue":"white",closeButtonLight:i&&"top"===u,closeButtonLabel:e,closeButtonVisible:t,style:l,testId:d},Object(r.createElement)(a.View,{style:!!s&&D.withIcon},this.maybeRenderImage({placement:u}),this.maybeRenderIcon(),Object(r.createElement)(a.View,{style:D.text},Object(r.createElement)(m.HeadingSmall,{style:D.title},c),Object(r.createElement)(m.Body,null,n))),this.maybeRenderActions(p)))))}}R.defaultProps={closeButtonVisible:!1};const D=p.StyleSheet.create({actions:{marginTop:h.default.large_24,flexDirection:"row",alignItems:"center",justifyContent:"flex-end"},text:{justifyContent:"center"},title:{marginBottom:h.default.xSmall_8},iconContainer:{alignItems:"center",justifyContent:"center",height:h.default.xxxLarge_64,width:h.default.xxxLarge_64,minWidth:h.default.xxxLarge_64,marginRight:h.default.medium_16,overflow:"hidden"},icon:{width:"100%"},withIcon:{flexDirection:"row"},image:{marginBottom:h.default.large_24,marginLeft:-h.default.large_24,marginRight:-h.default.large_24,marginTop:-h.default.large_24,width:`calc(100% + ${2*h.default.large_24}px)`},imageToBottom:{marginBottom:-h.default.large_24,marginTop:h.default.large_24,order:1}})}}]);
//# sourceMappingURL=../../sourcemaps/en/ACiX.ef01a7efe5755aee3c4d.js.map