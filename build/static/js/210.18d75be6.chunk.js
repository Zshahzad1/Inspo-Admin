"use strict";(self.webpackChunkinspo_app=self.webpackChunkinspo_app||[]).push([[210],{3210:function(e,t,n){n.r(t),n.d(t,{default:function(){return pe}});var r=n(1413),o=n(4165),i=n(5861),l=n(1034),a=n(2791),s=n(7689),c=n(7823),f=n(3009),u=n(9773),p=n(2007),d=n.n(p),y=n(9622);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}var m=["className","cssModule","tag","innerRef"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===h(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}(this,n)}}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var S={children:d().node,tag:y.iC,innerRef:d().oneOfType([d().object,d().func,d().string]),className:d().string,cssModule:d().object},T=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(i,e);var t,n,r,o=O(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).getRef=t.getRef.bind(j(t)),t.submit=t.submit.bind(j(t)),t}return t=i,(n=[{key:"getRef",value:function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e}},{key:"submit",value:function(){this.ref&&this.ref.submit()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cssModule,r=e.tag,o=e.innerRef,i=g(e,m),l=(0,y.mx)(t,n);return a.createElement(r,b({},i,{ref:o,className:l}))}}])&&x(t.prototype,n),r&&x(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(a.Component);T.propTypes=S,T.defaultProps={tag:"form"};var P=T,N=n(1694),I=n.n(N),k=["className","cssModule","row","disabled","check","inline","floating","tag","switch"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function R(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var z={children:d().node,row:d().bool,check:d().bool,switch:d().bool,inline:d().bool,floating:d().bool,disabled:d().bool,tag:y.iC,className:d().string,cssModule:d().object};function C(e){var t=e.className,n=e.cssModule,r=e.row,o=e.disabled,i=e.check,l=e.inline,s=e.floating,c=e.tag,f=e.switch,u=R(e,k),p=i||f,d=(0,y.mx)(I()(t,!!r&&"row",p?"form-check":"mb-3",!!f&&"form-switch",!(!p||!l)&&"form-check-inline",!(!p||!o)&&"disabled",s&&"form-floating"),n);return"fieldset"===c&&(u.disabled=o),a.createElement(c,E({},u,{className:d}))}C.propTypes=z,C.defaultProps={tag:"div"};var F=C,_=["className","cssModule","hidden","widths","tag","check","size","for"];function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var D=d().oneOfType([d().number,d().string]),B=d().oneOfType([d().bool,d().string,d().number,d().shape({size:D,order:D,offset:D})]),M={children:d().node,hidden:d().bool,check:d().bool,size:d().string,for:d().string,tag:y.iC,className:d().string,cssModule:d().object,xs:B,sm:B,md:B,lg:B,xl:B,xxl:B,widths:d().array},V={tag:"label",widths:["xs","sm","md","lg","xl","xxl"]},H=function(e,t,n){return!0===n||""===n?e?"col":"col-".concat(t):"auto"===n?e?"col-auto":"col-".concat(t,"-auto"):e?"col-".concat(n):"col-".concat(t,"-").concat(n)};function W(e){var t=e.className,n=e.cssModule,r=e.hidden,o=e.widths,i=e.tag,l=e.check,s=e.size,c=e.for,f=Z(e,_),u=[];o.forEach((function(t,r){var o=e[t];if(delete f[t],o||""===o){var i,l=!r;if((0,y.Kn)(o)){var a,s=l?"-":"-".concat(t,"-");i=H(l,t,o.size),u.push((0,y.mx)(I()((A(a={},i,o.size||""===o.size),A(a,"order".concat(s).concat(o.order),o.order||0===o.order),A(a,"offset".concat(s).concat(o.offset),o.offset||0===o.offset),a))),n)}else i=H(l,t,o),u.push(i)}}));var p=s||u.length,d=!(l||p),h=(0,y.mx)(I()(t,!!r&&"visually-hidden",!!l&&"form-check-label",!!s&&"col-form-label-".concat(s),u,!!p&&"col-form-label",!!d&&"form-label"),n);return a.createElement(i,L({htmlFor:c},f,{className:h}))}W.propTypes=M,W.defaultProps=V;var G=W;function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}var q=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"];function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}function Y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e,t){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},J(e,t)}function Q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ee(e);if(t){var o=ee(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===$(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return X(e)}(this,n)}}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ee(e){return ee=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ee(e)}var te={children:d().node,type:d().string,size:d().oneOfType([d().number,d().string]),bsSize:d().string,valid:d().bool,invalid:d().bool,tag:y.iC,innerRef:d().oneOfType([d().object,d().func,d().string]),plaintext:d().bool,addon:d().bool,className:d().string,cssModule:d().object},ne=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&J(e,t)}(i,e);var t,n,r,o=Q(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).getRef=t.getRef.bind(X(t)),t.focus=t.focus.bind(X(t)),t}return t=i,(n=[{key:"getRef",value:function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e}},{key:"focus",value:function(){this.ref&&this.ref.focus()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cssModule,r=e.type,o=e.bsSize,i=e.valid,l=e.invalid,s=e.tag,c=e.addon,f=e.plaintext,u=e.innerRef,p=Y(e,q),d=["switch","radio","checkbox"].indexOf(r)>-1,h="select"===r,m="range"===r,b=s||(h||"textarea"===r?r:"input"),g="form-control";f?(g="".concat(g,"-plaintext"),b=s||"input"):m?g="form-range":h?g="form-select":d&&(g=c?null:"form-check-input"),p.size&&/\D/g.test(p.size)&&((0,y.O4)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=p.size,delete p.size);var x=(0,y.mx)(I()(t,l&&"is-invalid",i&&"is-valid",!!o&&(h?"form-select-".concat(o):"form-control-".concat(o)),g),n);return("input"===b||s&&"function"===typeof s)&&(p.type="switch"===r?"checkbox":r),p.children&&!f&&"select"!==r&&"string"===typeof b&&"select"!==b&&((0,y.O4)('Input with a type of "'.concat(r,'" cannot have children. Please use "value"/"defaultValue" instead.')),delete p.children),a.createElement(b,U({},p,{ref:u,className:x,"aria-invalid":l}))}}])&&K(t.prototype,n),r&&K(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(a.Component);ne.propTypes=te,ne.defaultProps={type:"text"};var re=ne,oe=n(519),ie=(n(1174),n(5294)),le=n(8007),ae=n(5705),se=n(4420),ce=n(6696),fe=n(184),ue=le.Ry().shape({email:le.Z_().email().required(),password:le.Z_().min(8).max(32).required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,25}$/,"Password must contain at least one uppercase letter, one lowercase letter, one number, and one of the special characters: @$!%*?&.")});function pe(){var e=(0,s.s0)(),t=(0,se.I0)(),n=(0,ae.TA)({initialValues:{email:"",password:""},validationSchema:ue,onSubmit:function(e){a(e),console.log("Form submitted with values:",e),n.resetForm()}}),a=function(){var n=(0,i.Z)((0,o.Z)().mark((function n(r){var i;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ie.Z.post("".concat(oe.T.apiUrl,"auth/user/login"),r);case 3:i=n.sent,console.log("abffc",i),t((0,ce.Vx)({token:i.data.data.accessToken})),e(oe.T.ROUTES.DASHBOARD),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:console.log("abc",localStorage.getItem("token"));case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}();return(0,fe.jsx)("div",{style:{display:"flex",justifyContent:"center",height:"100vh"},children:(0,fe.jsxs)(c.Z,{fluid:!0,style:{display:"flex",flexDirection:"column",justifyContent:"space-around"},children:[(0,fe.jsxs)(f.Z,{style:{display:"flex",flexDirection:"column",marginTop:"60px"},children:[(0,fe.jsxs)(u.Z,{style:{display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"},children:[(0,fe.jsx)("p",{style:{fontFamily:oe.T.FONTS.POPPINS,fontWeight:"700",fontSize:"18px",margin:"0px"},children:"INSPO"}),(0,fe.jsx)("div",{className:"downloadBtn",children:(0,fe.jsx)("p",{style:{fontFamily:oe.T.FONTS.HELVITICA,fontSize:"10px",fontWeight:"700",margin:"0px"},children:"DOWNLOAD INSPO"})})]}),(0,fe.jsxs)(u.Z,{className:"login_heading",style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"60px"},children:[(0,fe.jsxs)("p",{className:"heading",style:{fontFamily:oe.T.FONTS.HELVITICA,fontSize:"32px",fontWeight:"700"},children:[" ","HELLO!!!"]}),(0,fe.jsxs)("p",{style:{fontFamily:oe.T.FONTS.HELVITICA,fontSize:"14px",fontWeight:"400",width:"300px",textAlign:"center"},children:[" ","LOGIN INSPIRING ADMINS AND DO ADMIN THINGS"," "]})]})]}),(0,fe.jsx)(u.Z,{className:"form_box",style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"60px"},children:(0,fe.jsx)("div",{className:"loginBox",style:{width:"30vw",border:"2px solid black",borderRadius:"10px"},children:(0,fe.jsx)("div",{children:(0,fe.jsxs)(P,{onSubmit:n.handleSubmit,className:"inner_form",style:{display:"flex",flexDirection:"column",marginLeft:"51px",marginRight:"51px",marginTop:"66px",fontSize:"15px",marginBottom:"23px"},children:[(0,fe.jsxs)(F,{children:[(0,fe.jsx)(G,{style:{fontFamily:oe.T.FONTS.HELVITICA,fontSize:"14px",fontWeight:"400",paddingLeft:"9px",margin:"2px"},for:"exampleEmail",children:"Email"}),(0,fe.jsx)(re,{id:"email",name:"email",placeholder:"Your email address",type:"email",onChange:n.handleChange,onBlur:n.handleBlur,value:n.values.email,style:{border:"2px solid black",height:"50px"}})," ",n.touched.email&&n.errors.email?(0,fe.jsx)("div",{style:{color:"red"},children:n.errors.email}):null]}),(0,fe.jsxs)(F,{style:{marginBottom:"5px"},children:[(0,fe.jsx)(G,{style:{fontFamily:oe.T.FONTS.HELVITICA,fontSize:"14px",fontWeight:"400",paddingLeft:"9px",margin:"2px"},for:"exampleEmail",children:"Password"}),(0,fe.jsx)(re,{id:"password",name:"password",placeholder:"Your Password",type:"password",onChange:n.handleChange,onBlur:n.handleBlur,value:n.values.password,style:{border:"2px solid black",height:"50px"}})," ",n.touched.password&&n.errors.password?(0,fe.jsx)("div",{style:{color:"red"},children:n.errors.password}):null]}),(0,fe.jsx)(G,{style:{paddingLeft:"9px"},check:!0,children:"Remember me"}),(0,fe.jsx)(l.Z,(0,r.Z)((0,r.Z)({},{inputProps:{"aria-label":"Color switch demo"}}),{},{defaultChecked:!0,color:"default"})),(0,fe.jsx)("input",{className:"loginBtn",type:"submit",value:"LETS GO"}),(0,fe.jsx)(c.Z,{children:" "})]})})})}),(0,fe.jsx)(f.Z,{className:"login_links",style:{marginTop:"40px",marginBottom:"60px",width:"100%"},children:(0,fe.jsxs)(u.Z,{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap",width:"100%"},children:[(0,fe.jsx)("p",{style:{fontFamily:oe.T.FONTS.HELVITICA,fontWeight:"400",fontSize:"12px",width:"250px",margin:"0px"},children:"@ 2024, DEVELOPED by INSPO"}),(0,fe.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",gap:"30px"},children:[(0,fe.jsx)("p",{style:{fontFamily:oe.T.FONTS.HELVITICA,fontSize:"12px",fontWeight:"400",margin:"0px"},children:"inspooo.com"}),(0,fe.jsx)("p",{style:{fontFamily:oe.T.FONTS.HELVITICA,fontSize:"12px",fontWeight:"400",margin:"0px"},children:"Simmmple"}),(0,fe.jsx)("p",{style:{fontFamily:oe.T.FONTS.HELVITICA,fontSize:"12px",fontWeight:"400",margin:"0px"},children:"Blog"}),(0,fe.jsx)("p",{style:{fontFamily:oe.T.FONTS.HELVITICA,fontSize:"12px",fontWeight:"400",margin:"0px"},children:"License"})]})]})})]})})}}}]);
//# sourceMappingURL=210.18d75be6.chunk.js.map