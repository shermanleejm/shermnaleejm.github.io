(function(e){function t(t){for(var r,u,i=t[0],a=t[1],p=t[2],l=0,s=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&s.push(o[u][0]),o[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);f&&f(t);while(s.length)s.shift()();return c.push.apply(c,p||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var a=n[i];0!==o[a]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var f=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("7a23");const o={id:"nav"},c=Object(r["f"])("Home"),u=Object(r["f"])(" | "),i=Object(r["f"])("Screen A"),a=Object(r["f"])(" | "),p=Object(r["f"])("Screen B"),f=Object(r["e"])("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSeUoMM8yLnRkvl4TFFmQoIdfLhc1yH_X5rRBi4XIvexHudVzQ/viewform?embedded=true",width:"400px",height:"700px",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading…",-1);function l(e,t,n,l,s,b){const d=Object(r["t"])("router-link"),O=Object(r["t"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",o,[Object(r["g"])(d,{to:"/"},{default:Object(r["x"])(()=>[c]),_:1}),u,Object(r["g"])(d,{to:"/A"},{default:Object(r["x"])(()=>[i]),_:1}),a,Object(r["g"])(d,{to:"/B"},{default:Object(r["x"])(()=>[p]),_:1})]),Object(r["g"])(O),f],64)}var s={name:"App",components:{}},b=(n("6712"),n("6b0d")),d=n.n(b);const O=d()(s,[["render",l]]);var j=O,v=n("6c02");function h(e,t,n,o,c,u){return Object(r["p"])(),Object(r["d"])("div",null,"Welcome to AB testing")}var m={name:"Home"};const g=d()(m,[["render",h]]);var y=g;function w(e,t,n,o,c,u){return Object(r["p"])(),Object(r["d"])("div",null,"This is screen A")}var x={name:"ScreenA"};const S=d()(x,[["render",w]]);var _=S;function A(e,t,n,o,c,u){return Object(r["p"])(),Object(r["d"])("div",null,"This is screen B")}var B={name:"ScreenB"};const P=d()(B,[["render",A]]);var M=P;const k=new v["a"]({history:Object(v["b"])(),routes:[{path:"/",component:y},{path:"/A",component:_},{path:"/B",component:M}]});Object(r["c"])(j).use(k).mount("#app")},6712:function(e,t,n){"use strict";n("943b")},"943b":function(e,t,n){}});
//# sourceMappingURL=app.7bf5fce9.js.map