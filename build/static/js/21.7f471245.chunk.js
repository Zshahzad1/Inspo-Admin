"use strict";(self.webpackChunkinspo_app=self.webpackChunkinspo_app||[]).push([[21],{5320:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var i=t(4942),r=t(4165),a=t(5861),l=t(9439),o=t(7823),s=t(2791),c=t(9806),d=t(1632),p=t(519),u=t.p+"static/media/RatingProfile.9277b267bdd388405901.png",f=(t(4356),t(3789)),x=t(9836),h=t(3382),g=t(3994),y=t(9281),m=t(6890),b=t(5855),v=t(5527),j=t(184);var S=function(e){var n=e.pendingData;function t(e,n,t){return{name:e,status:n,date:t}}return t("ISLAM MANSORI","COVERED","14/06/21"),t("MARK WILSON","PENDING","14/06/21"),t("BILL NELSON","COVERED","14/06/21"),t("HAMAD","PENDING","14/06/21"),t("MARK WILSON","COVERED","14/06/21"),t("KSI","COVERED","14/06/21"),t("MARK WILSON","COVERED","14/06/21"),t("MARK WILSON","COVERED","14/06/21"),t("MARK WILSON","COVERED","14/06/21"),(0,j.jsx)("div",{children:(0,j.jsx)("div",{style:{width:""},children:(0,j.jsx)("div",{style:{padding:"0px "},children:(0,j.jsx)(y.Z,{component:v.Z,className:"table",style:{width:"100%",margin:"auto",borderRadius:"15px",overflow:"scroll",padding:"28px 36px 40px 10px",boxShadow:"none"},children:(0,j.jsxs)(x.Z,{className:"main_table",sx:{minWidth:500},"aria-label":"simple table",children:[(0,j.jsx)(m.Z,{children:(0,j.jsxs)(b.Z,{children:[(0,j.jsx)(g.Z,{style:{fontFamily:p.T.FONTS.HELVITICA,fontWeight:"700",fontSize:"10px"},align:"center",children:"TO USER"}),(0,j.jsx)(g.Z,{style:{fontFamily:p.T.FONTS.HELVITICA,fontWeight:"700",fontSize:"10px"},align:"center",children:"STATUS"}),(0,j.jsx)(g.Z,{style:{fontFamily:p.T.FONTS.HELVITICA,fontWeight:"700",fontSize:"10px"},align:"center",children:"DATE"}),(0,j.jsx)(g.Z,{style:{fontFamily:p.T.FONTS.HELVITICA,fontWeight:"700",fontSize:"10px"},align:"center",children:"INFO"})]})}),(0,j.jsx)(h.Z,{children:null===n||void 0===n?void 0:n.map((function(e){return(0,j.jsxs)(b.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,j.jsx)(g.Z,{align:"center",children:(0,j.jsx)("div",{style:{display:"flex",gap:"10px",justifyContent:"center",fontSize:"14px",fontWeight:"700",margin:"0",fontFamily:p.T.FONTS.HELVITICA},children:null===e||void 0===e?void 0:e.name})}),(0,j.jsx)(g.Z,{align:"center",children:(0,j.jsx)("div",{style:{display:"flex",gap:"10px",justifyContent:"center",fontSize:"14px",fontWeight:"700",margin:"0",fontFamily:p.T.FONTS.HELVITICA},children:null===e||void 0===e?void 0:e.status})}),(0,j.jsx)(g.Z,{align:"center",children:(0,j.jsx)("p",{style:{fontFamily:p.T.FONTS.HELVITICA,fontWeight:"700",fontSize:"14px"},children:null===e||void 0===e?void 0:e.date})}),(0,j.jsx)(g.Z,{align:"center",children:(0,j.jsx)("div",{style:{cursor:"pointer"},children:(0,j.jsx)("p",{style:{fontFamily:p.T.FONTS.HELVITICA,fontWeight:"700",fontSize:"14px"},children:"VIEW"})})})]},e.name)}))})]})})})})})},T=t(3725);var w=t.p+"static/media/notFound.7e3e798c7426d4ef768f15598b317304.svg",N=t(237),I=t(5294);function Z(){var e,n,t,x=s.useState(!0),h=(0,l.Z)(x,2),g=(h[0],h[1],(0,s.useState)(0)),y=(0,l.Z)(g,2),m=y[0],b=y[1],v=(0,s.useState)(0),Z=(0,l.Z)(v,2),O=(Z[0],Z[1],(0,s.useState)(!1)),E=(0,l.Z)(O,2),C=E[0],k=E[1],F=(0,s.useState)(!1),L=(0,l.Z)(F,2),A=L[0],R=L[1],W=(0,s.useState)(!1),V=(0,l.Z)(W,2),D=V[0],z=V[1],H=(0,s.useState)(!1),_=(0,l.Z)(H,2),M=_[0],P=_[1],G=(0,s.useState)(),K=(0,l.Z)(G,2),U=K[0],$=K[1],B=(0,s.useState)(),q=(0,l.Z)(B,2),Y=q[0],X=q[1],J=(0,s.useState)(!1),Q=(0,l.Z)(J,2),ee=Q[0],ne=Q[1];(0,s.useEffect)((function(){te()}),[]);var te=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.Z.get("".concat(p.T.apiUrl,"public/concept/active-profiles"));case 3:t=e.sent,$(null===(n=t.data.data)||void 0===n?void 0:n.concept),z(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.Z.get("".concat(p.T.apiUrl,"public/request/by-concept/").concat(U[m]._id,"/initiate"));case 3:n=e.sent,X(n.data.data),Y&&ne(!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error"),ne(!0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,X(null),e.next=4,I.Z.get("".concat(p.T.apiUrl,"public/request/by-concept/").concat(U[m]._id,"/review"));case 4:n=e.sent,X(n.data.data),Y&&ne(!0),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("error"),ne(!0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.Z.get("".concat(p.T.apiUrl,"public/request/by-concept/").concat(U[m]._id,"/active"));case 3:n=e.sent,X(n.data.data),Y&&ne(!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error"),ne(!0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return console.log("pending",U),console.log("rating",Y),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(o.Z,{fluid:!0,style:{paddingLeft:"21px"},children:[(0,j.jsxs)("div",{style:{display:"flex",alignItems:"center",height:"35px",border:"3px solid black",borderRadius:"8px",width:"100%",padding:"3px 5px"},children:[(0,j.jsx)(c.G,{icon:d.Y$T,style:{color:"black",fontSize:"12px"}}),(0,j.jsx)("input",{style:{border:"none",outline:"none",width:"100%",marginLeft:"10px"},placeholder:"Search"})]}),(0,j.jsx)(o.Z,{style:{padding:"0 40px"},children:(0,j.jsxs)("div",{className:"",style:{display:"flex",justifyContent:"space-between",marginTop:"50px"},children:[(0,j.jsxs)("div",{className:"rating_name ",style:{display:"flex",alignItems:"center",gap:"10px",justifyContent:"center"},children:[(0,j.jsx)("p",{style:{padding:"0",margin:"0",fontWeight:"700",fontFamily:p.T.FONTS.HELVITICA,fontSize:"18px"},children:"CONCEPT NAME"}),(0,j.jsxs)("div",{style:{display:"flex",alignItems:"center",height:"35px",border:"2px solid black",marginLeft:"auto",marginRight:"auto",borderRadius:"8px",paddingLeft:"calc(1.5rem*0.5)"},children:[(0,j.jsx)(c.G,{icon:d.Y$T,style:{color:"black",fontSize:"12px"}}),(0,j.jsx)("input",{style:{border:"none",outline:"none",marginLeft:"10px"},placeholder:"Search"})]})]}),(0,j.jsxs)("div",{className:"tabs_buttons ",style:{display:"flex",gap:"10px",alignItems:"center"},children:[(0,j.jsx)("button",{style:(e={border:"none",background:C?"black":"white",color:C?"white":"black"},(0,i.Z)(e,"border","2px solid black"),(0,i.Z)(e,"borderRadius","12px"),(0,i.Z)(e,"fontSize","13px"),(0,i.Z)(e,"fontWeight","600"),(0,i.Z)(e,"width","100px"),(0,i.Z)(e,"height","26px"),e),onClick:function(){ie(),k(!0),P(!1),R(!1)},children:"PENDING"}),(0,j.jsx)("button",{style:{border:"2px solid black",borderRadius:"12px",width:"100px",fontSize:"13px",background:A?"black":"white",color:A?"white":"black",fontWeight:"600",height:"26px"},onClick:function(){R(!0),k(!1),P(!1),re()},children:"RATING"}),(0,j.jsx)("button",{style:{border:"2px solid black",borderRadius:"12px",width:"100px",fontSize:"13px",fontWeight:"600",background:M?"black":"white",color:M?"white":"black",height:"26px"},onClick:function(){P(!0),k(!1),R(!1),ae()},children:"SCHEDULED"}),(0,j.jsxs)("div",{className:"filter",style:{width:"16px",height:"16px",marginRight:"20px"},children:[" ",(0,j.jsx)("img",{src:f.Z,alt:"",width:{width:"100%"}})]}),(0,j.jsx)(T.Z,{})]})]})}),(0,j.jsxs)(o.Z,{style:{border:"3px solid black",display:"flex",borderRadius:"12px",marginTop:"10px",paddingBottom:"20px"},children:[(0,j.jsxs)("div",{className:"",style:{width:"40%"},children:[(0,j.jsxs)("div",{className:"rating_profile_main",style:{display:"flex",marginTop:"76px",gap:"15px",alignItems:"center"},children:[(0,j.jsx)("div",{className:"img",style:{width:"146px",height:"146px",borderRadius:"4px"},children:(0,j.jsx)("img",{src:u,alt:"",width:"100%",height:"100%"})}),(0,j.jsxs)("div",{className:"name_email_main",children:[(0,j.jsx)("p",{style:{fontSize:"35px",fontWeight:"600",margin:"0",fontFamily:p.T.FONTS.HELVITICA,width:"100%"},children:D?null===(n=U[m])||void 0===n?void 0:n.name:"GOODCUP"}),(0,j.jsx)("p",{style:{fontSize:"35px",margin:"0",fontWeight:"400",fontFamily:p.T.FONTS.HELVITICA,width:"100%",wordBreak:"break-all"},children:D?null===(t=U[m])||void 0===t?void 0:t.email:"GC@simmmple.com"})]})]}),(0,j.jsxs)("div",{className:"pick_concept",style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},children:[(0,j.jsx)("p",{style:{textAlign:"center",fontSize:"14px",fontWeight:"700",margin:"0",fontFamily:p.T.FONTS.HELVITICA,marginBottom:"6px"},children:"PICK CONCEPT"}),(0,j.jsx)("div",{className:"scroll-container",style:{width:"277px",height:"370px",border:"2px solid black",display:"flex",flexDirection:"column",gap:"18px",overflowY:"scroll",overflowX:"scroll",paddingTop:"20px",paddingLeft:"9px"},children:(0,j.jsx)("div",{style:{overflowX:"scroll"},children:null===U||void 0===U?void 0:U.map((function(e,n){return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("div",{className:"rating_profile",style:{display:"flex",gap:"15px"},onClick:function(){b(n)},children:[(0,j.jsx)("div",{className:"img",style:{width:"40px",height:"40px",borderRadius:"4px"},children:(0,j.jsx)("img",{src:u,alt:"",style:{width:"100%",height:"100%"}})}),(0,j.jsxs)("div",{className:"name_email",children:[(0,j.jsx)("p",{style:{fontSize:"14px",fontWeight:"600",fontFamily:p.T.FONTS.HELVITICA,margin:"0"},children:e.name}),(0,j.jsx)("p",{style:{fontSize:"14px",fontWeight:"400",margin:"0",fontFamily:p.T.FONTS.HELVITICA},children:e.email})]})]})})}))})})]})]}),(0,j.jsx)("div",{style:{width:"60%"},children:(0,j.jsx)(S,{pendingData:Y})})]})]})," ",(0,j.jsx)(N.Z,{open:ee,onClose:function(){ne(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,j.jsx)("div",{className:"",children:(0,j.jsxs)("div",{className:"",style:{width:"400px",margin:"auto",background:"white",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",borderRadius:"20px",gap:"20px",padding:"30px"},children:[(0,j.jsx)("div",{style:{width:"200px",height:"200px"},children:(0,j.jsx)("img",{src:w,alt:""})}),(0,j.jsx)("h2",{children:"Data Not Found!"})]})})})]})}},7823:function(e,n,t){var i=t(2791),r=t(2007),a=t.n(r),l=t(1694),o=t.n(l),s=t(9622),c=["className","cssModule","fluid","tag"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},d.apply(this,arguments)}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u={tag:s.iC,fluid:a().oneOfType([a().bool,a().string]),className:a().string,cssModule:a().object};function f(e){var n=e.className,t=e.cssModule,r=e.fluid,a=e.tag,l=p(e,c),u="container";!0===r?u="container-fluid":r&&(u="container-".concat(r));var f=(0,s.mx)(o()(n,u),t);return i.createElement(a,d({},l,{className:f}))}f.propTypes=u,f.defaultProps={tag:"div"},n.Z=f},9622:function(e,n,t){t.d(n,{Kn:function(){return f},O4:function(){return c},iC:function(){return u},mx:function(){return o},x9:function(){return d}});var i,r=t(2007),a=t.n(r);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return n?e.split(" ").map((function(e){return n[e]||e})).join(" "):e}var s={};function c(e){s[e]||("undefined"!==typeof console&&console.error(e),s[e]=!0)}function d(e,n){return function(t,i,r){null!==t[i]&&"undefined"!==typeof t[i]&&c('"'.concat(i,'" property of "').concat(r,'" has been deprecated.\n').concat(n));for(var a=arguments.length,l=new Array(a>3?a-3:0),o=3;o<a;o++)l[o-3]=arguments[o];return e.apply(void 0,[t,i,r].concat(l))}}var p="object"===("undefined"===typeof window?"undefined":l(window))&&window.Element||function(){};a().oneOfType([a().string,a().func,function(e,n,t){if(!(e[n]instanceof p))return new Error("Invalid prop `"+n+"` supplied to `"+t+"`. Expected prop to be an instance of Element. Validation failed.")},a().shape({current:a().any})]);var u=a().oneOfType([a().func,a().string,a().shape({$$typeof:a().symbol,render:a().func}),a().arrayOf(a().oneOfType([a().func,a().string,a().shape({$$typeof:a().symbol,render:a().func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;function f(e){var n=l(e);return null!=e&&("object"===n||"function"===n)}}}]);
//# sourceMappingURL=21.7f471245.chunk.js.map