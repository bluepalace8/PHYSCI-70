(window.webpackJsonp=window.webpackJsonp||[]).push([["38d3"],{"+9xx":function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=h(n("q1tI")),a=n("mR6N"),o=n("Vxy9"),s=r(n("wa3X")),l=r(n("Pwnf")),d=r(n("gE8/")),c=n("JimW"),u=h(n("4PhQ")),f=n("sMvG"),m=h(n("HEOz")),p=r(n("O+Xk"));function E(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(E=function(e){return e?n:t})(e)}function h(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=E(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=i?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}const y={errorSendingEmail:m._("Oops! We were unable to send you an email."),resendEmailButton:e=>e?m._("Resend email to %(email)s",{email:e}):m._("Resend email"),sent:m._("Email sent!"),tryAgainButton:m._("Try again?")};class g extends i.Component{constructor(...e){super(...e),this.state={sendStatus:"unsent"},this._isMounted=!1,this.onEmailSendSuccess=()=>{this._isMounted&&this.setState({sendStatus:"sent"})},this.onEmailSendError=()=>{this._isMounted&&this.setState({sendStatus:"failed"})},this.onResendClick=(e,t)=>{this.setState({sendStatus:"sending"}),t?(0,f.resendVerificationEmail)(this.props.gqlClient,t).then(this.onEmailSendSuccess).catch(this.onEmailSendError):e?(0,f.signupResendVerificationEmail)(this.props.gqlClient).then(this.onEmailSendSuccess).catch(this.onEmailSendError):u.default.error("User attempted to resend verification email without an email or unverifiedAuthEmailToken",u.Errors.Internal)}}componentDidMount(){this._isMounted=!0}componentWillUnmount(){this._isMounted=!1}render(){const{email:e,authEmailToken:t}=this.props,{sendStatus:n}=this.state;return"unsent"===n||"sending"===n?i.createElement(s.default,{kind:"tertiary",spinner:"sending"===n,onClick:()=>this.onResendClick(e,t)},y.resendEmailButton(e)):"sent"===n?i.createElement(c.View,{style:w.centeredContainer},i.createElement(o.Body,{style:w.successText},y.sent)):i.createElement(c.View,{style:w.centeredContainer,"aria-live":"polite"},i.createElement(o.Body,{style:w.errorText},y.errorSendingEmail),i.createElement(s.default,{kind:"tertiary",onClick:()=>this.onResendClick(e,t)},y.tryAgainButton))}}const w=a.StyleSheet.create({centeredContainer:{display:"flex",alignItems:"center",justifyContent:"center"},errorText:{color:l.default.red,marginTop:d.default.xxxSmall_4},successText:{marginTop:d.default.small_12,marginBottom:d.default.small_12}});var v=(0,p.default)(g);t.default=v},sMvG:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.resendVerificationEmail=function(e,t){const n={token:t};return e.mutate(c,{variables:n}).then((e=>{var t,n;if(null!=(t=e.data)&&null!=(n=t.resendVerificationEmail)&&n.error)throw new a.KAError(e.data.resendVerificationEmail.error.code,a.Errors.Internal);return e})).catch((e=>{throw new a.KAError("Failed to resend verification email",a.Errors.Internal,{cause:e})}))},t.signupResendVerificationEmail=async function(e){try{var t,n;const r=await e.mutate(u);if(null!=(t=r.data)&&null!=(n=t.signupResendVerificationEmail)&&n.error)throw new a.KAError(r.data.signupResendVerificationEmail.error.code,a.Errors.Internal);return!0}catch(e){if(e instanceof a.KAError)throw e;throw new a.KAError("Failed to resend the verification email",a.Errors.Internal)}};var i=r(n("lTCR")),a=n("4PhQ"),o=n("8r+/");let s,l,d=e=>e;const c=(0,o.gqlOp)((0,i.default)(s||(s=d`
    mutation resendVerificationEmail($token: String!) {
        resendVerificationEmail(token: $token) {
            error {
                code
            }
        }
    }
`)));const u=(0,o.gqlOp)((0,i.default)(l||(l=d`
        mutation signupResendVerificationEmailMutation {
            signupResendVerificationEmail {
                error {
                    code
                }
            }
        }
    `)))}}]);
//# sourceMappingURL=../../sourcemaps/en/38d3.c2883ce4ad5504c44fc2.js.map