(this["webpackJsonpshermnaleejm.github.io"]=this["webpackJsonpshermnaleejm.github.io"]||[]).push([[0],{111:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),o=(a(111),a(57)),i=a(12),u=a(82),m=a(83),s=a(99),p=a(98),f=a(48),E=a(176),b=a(177),h=a(193),g=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={formSubmitted:!1,name:"",email:"",contactNumber:"",message:""},n}return Object(m.a)(a,[{key:"handleSubmit",value:function(){fetch("https://docs.google.com/forms/d/e/1FAIpQLSeRk58rRnbE1XDd_6RZ6i9RIPTDPZT9YgsQ_4B7-Ff0mqQE3w/formResponse?usp=pp_url&entry.963742205="+this.state.name+"&entry.1053435119="+this.state.email+"&entry.1110637641="+this.state.contactNumber+"&entry.63678808="+this.state.message),this.setState({formSubmitted:!0})}},{key:"render",value:function(){var e=this;return this.state.formSubmitted?r.a.createElement("div",{style:{width:"80vw",padding:20,margin:"auto",height:"100vh"}},r.a.createElement(f.a,{variant:"h4"},"Thank you for your submission I will get back to you as soon as possible!")):r.a.createElement("div",{style:{height:"100vh",width:"90vw",padding:20,margin:"auto"}},r.a.createElement("form",{name:"gform",id:"gform",enctype:"text/plain",action:"https://docs.google.com/forms/d/e/1FAIpQLSeRk58rRnbE1XDd_6RZ6i9RIPTDPZT9YgsQ_4B7-Ff0mqQE3w/formResponse?",target:"hidden_iframe",onsubmit:"submitted=true;"},r.a.createElement(E.a,{container:!0,direction:"column",spacing:2},r.a.createElement(E.a,{item:!0},r.a.createElement(f.a,{variant:"h5"},"You may contact me at +65 86601996 and at"," ",r.a.createElement(b.a,{href:"mailto:leesherman@live.com.sg",color:"secondary"},"leesherman@live.com.sg"))),r.a.createElement(E.a,{item:!0},r.a.createElement(f.a,{variant:"h6"},"Alternatively, you may fill in the form below and I shall get back to you as soon as possible.")),r.a.createElement(E.a,{item:!0},r.a.createElement(h.a,{color:"secondary",type:"text",name:"entry.963742205",id:"entry.963742205",label:"Name",onChange:function(t){e.setState({name:t.target.value})},fullWidth:!0})),r.a.createElement(E.a,{item:!0},r.a.createElement(h.a,{color:"secondary",type:"text",name:"entry.1053435119",id:"entry.1053435119",label:"Email",onChange:function(t){e.setState({email:t.target.value})},fullWidth:!0})),r.a.createElement(E.a,{item:!0},r.a.createElement(h.a,{color:"secondary",type:"text",name:"entry.1110637641",id:"entry.1110637641",label:"Contact Number",onChange:function(t){e.setState({contactNumber:t.target.value})},fullWidth:!0})),r.a.createElement(E.a,{item:!0},r.a.createElement(h.a,{color:"secondary",type:"text",name:"entry.63678808",id:"entry.63678808",label:"Message",onChange:function(t){e.setState({message:t.target.value})},fullWidth:!0,multiline:!0,rows:4})),r.a.createElement(E.a,{item:!0},r.a.createElement("input",{id:"popUp",type:"submit",value:"submit",onClick:function(){return e.handleSubmit()},style:{border:"none",backgroundColor:"#ffffff",fontSize:"15px",textTransform:"uppercase",cursor:"pointer"}})))),r.a.createElement("iframe",{name:"hidden_iframe",id:"hidden_iframe",style:{display:"none"},onload:"if(submitted) {}"}))}}]),a}(n.Component),d=a(181),y=a(182),v=a.p+"static/media/pp.d83a0ba8.png",O=a(89),j=a.n(O),k=a(90),w=a.n(k),S=a(91),x=a.n(S),C=a.p+"static/media/Resume.5f132bec.pdf",N=Object(d.a)((function(e){return{header:{textAlign:"center",marginBottom:e.spacing(4)},item:{width:"100%",textAlign:"center",borderRadius:"5px",marginTop:"10px"},imagecontainer:{display:"flex",justifyContent:"center"},icons:{transform:"scale(2)"},maintext:{width:"90%",margin:"5% auto 0 auto",textAlign:"center"},root:{marginBottom:"20%"}}})),D=function(){var e=N();return r.a.createElement("div",{className:e.root},r.a.createElement(f.a,{variant:"h3",className:e.header},"Welcome to my developer profile."),r.a.createElement(E.a,{container:!0,spacing:4},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement("div",{className:e.imagecontainer},r.a.createElement("img",{src:v}))),r.a.createElement(E.a,{item:!0,container:!0,spacing:10,justify:"center"},r.a.createElement(E.a,{item:!0},r.a.createElement(y.a,{href:"https://github.com/shermanleejm",target:"_blank",rel:"noopener"},r.a.createElement(j.a,{className:e.icons}))),r.a.createElement(E.a,{item:!0},r.a.createElement(y.a,{href:"https://www.linkedin.com/in/shrmnl/",target:"_blank",rel:"noopener"},r.a.createElement(w.a,{className:e.icons}))),r.a.createElement(E.a,{item:!0},r.a.createElement(y.a,{href:C,target:"_blank",rel:"noopener"},r.a.createElement(x.a,{className:e.icons}))))),r.a.createElement("div",{className:e.maintext},r.a.createElement(f.a,null,"I make stuff. I have an asset tracker that you can play with in the menu bar to the left.")))},F=a(11),I=a(183),T=a(195),R=a(180),A=a(184),P=a(185),_=a(186),B=a(92),J=a.n(B),M=function(){var e=Object(n.useState)(!1),t=Object(F.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement(I.a,{onClick:function(){return l(!0)}},r.a.createElement(J.a,null)),r.a.createElement(T.a,{anchor:"left",open:a,onClose:function(){return l(!1)},onOpen:function(){l(!0)}},r.a.createElement(R.a,null,de.map((function(e){return r.a.createElement(A.a,{button:!0,key:e.name,component:o.b,to:e.link,onClick:function(){return l(!1)}},r.a.createElement(P.a,{children:e.icon}),r.a.createElement(_.a,{primary:e.name}))})))))},Q=a(36),q=a(15),L=a.n(q),Y=a(31),W=a(187),U=a(188),V=a(189),z=a(190),G=a(191),Z=a(192),H=a(179),X=a(37),$=a.n(X),K=a(59),ee=a.n(K),te=a(93),ae=a.n(te),ne=Object(d.a)((function(e){return{header:{margin:"3% 0 3% 0"},root:{margin:"0 4% 10% 4%"},apiinput:{width:"60%",margin:"0 0 3% 0"},table:{margin:"0 0 3% 0"},searchresult:{padding:"4%",marginBottom:"4%"}}})),re=function(){var e=ne(),t=Object(n.useState)(!0),a=Object(F.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(),i=Object(F.a)(o,2),u=i[0],m=i[1],s=Object(n.useState)(),p=Object(F.a)(s,2),b=p[0],g=p[1],d=Object(n.useState)(),v=Object(F.a)(d,2),O=v[0],j=v[1],k=Object(n.useState)([]),w=Object(F.a)(k,2),S=w[0],x=w[1],C=Object(n.useState)(!1),N=Object(F.a)(C,2),D=N[0],T=N[1],R=Object(n.useState)(),A=Object(F.a)(R,2),P=A[0],_=A[1],B=Object(n.useState)(),J=Object(F.a)(B,2),M=J[0],q=J[1],X=Object(n.useState)(""),K=Object(F.a)(X,2),te=K[0],re=K[1],le=Object(n.useState)([]),ce=Object(F.a)(le,2),oe=ce[0],ie=ce[1],ue=Object(n.useState)(),me=Object(F.a)(ue,2),se=me[0],pe=me[1];function fe(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}function Ee(){return(Ee=Object(Y.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.a.get("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=".concat(t,"&apikey=").concat(u)).then((function(e){x(e.data.bestMatches)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function be(){var e,t=0,a=0,n=Object(Q.a)(oe);try{for(n.s();!(e=n.n()).done;){var r=e.value;t+=r.quantity*r.price,a+=r.quantity*r.open}}catch(l){n.e(l)}finally{n.f()}return console.log(t,a),parseFloat(((a-t)/t).toFixed(2))}return Object(n.useEffect)((function(){function e(e){return t.apply(this,arguments)}function t(){return(t=Object(Y.a)(L.a.mark((function e(t){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},e.next=3,$.a.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=".concat(t,"&apikey=").concat(u)).then((function(e){a=e.data["Global Quote"]}));case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return(a=Object(Y.a)(L.a.mark((function t(){var a,n,r,l,o;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=JSON.parse(localStorage.getItem("apikey")),m(a||"1111111"),!(a=JSON.parse(localStorage.getItem("boring")))){t.next=32;break}n=Object(Q.a)(a),t.prev=5,n.s();case 7:if((r=n.n()).done){t.next=22;break}return l=r.value,t.next=11,e(l.ticker);case 11:if(void 0!==(o=t.sent)){t.next=16;break}return pe("Alpha Vantage only allows 5 requests every minute."),c(!1),t.abrupt("return");case 16:l.high=parseFloat(o["03. high"]),l.low=parseFloat(o["04. low"]),l.open=parseFloat(o["02. open"]),l.pl=parseFloat(((o["02. open"]-l.price)/l.price*100).toFixed(2));case 20:t.next=7;break;case 22:t.next=27;break;case 24:t.prev=24,t.t0=t.catch(5),n.e(t.t0);case 27:return t.prev=27,n.f(),t.finish(27);case 30:localStorage.setItem("boring",JSON.stringify(fe(a))),ie(a);case 32:pe(void 0),c(!1);case 34:case"end":return t.stop()}}),t,null,[[5,24,27,30]])})))).apply(this,arguments)}console.log("calling useEffect on Boring Tracker"),function(){a.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(f.a,{style:{color:"red"}},void 0!==se&&se),r.a.createElement(f.a,{variant:"h4",className:e.header},"Boring"," ",r.a.createElement("span",{style:{color:be()>0?"green":"red"}},be()>0&&"+",be(),"%")),r.a.createElement(h.a,{label:"Alphavantage API key",size:"small",value:u,onChange:function(e){return m(e.target.value)},className:e.apiinput}),r.a.createElement(y.a,{onClick:function(){localStorage.setItem("apikey",JSON.stringify(u))}},"save api key"),r.a.createElement(h.a,{label:"Add new boring equity",size:"small",value:b,onChange:function(e){return g(e.target.value)},className:e.apiinput}),r.a.createElement(y.a,{disabled:!b,onClick:function(){!function(e){Ee.apply(this,arguments)}(b),j(!0)}},"search"),O&&""!==b&&r.a.createElement(W.a,{className:e.table},r.a.createElement(U.a,null,r.a.createElement(V.a,null,r.a.createElement(z.a,null,r.a.createElement(G.a,null,"Symbol"),r.a.createElement(G.a,null,"Name"),r.a.createElement(G.a,null,"Type"),r.a.createElement(G.a,null,"Region"),r.a.createElement(G.a,null,"Correct?"))),r.a.createElement(Z.a,null,S.map((function(e,t){return r.a.createElement(z.a,{key:t},r.a.createElement(G.a,null,e["1. symbol"]),r.a.createElement(G.a,null,e["2. name"]),r.a.createElement(G.a,null,e["3. type"]),r.a.createElement(G.a,null,e["4. region"]),r.a.createElement(G.a,null,r.a.createElement(I.a,{onClick:function(){_({symbol:e["1. symbol"],name:e["2. name"],type:e["3. type"],region:e["4. region"]}),T(!0),j(!1)}},r.a.createElement(ae.a,null))))}))))),D&&r.a.createElement(H.a,{className:e.searchresult,elevation:3},r.a.createElement(E.a,{container:!0,spacing:3},r.a.createElement(E.a,{item:!0,xs:4},"Symbol: ",P.symbol),r.a.createElement(E.a,{item:!0,xs:8},"Name: ",P.name),r.a.createElement(E.a,{item:!0,xs:4},"Type: ",P.type),r.a.createElement(E.a,{item:!0,xs:8},"Region: ",P.region),r.a.createElement(E.a,{item:!0,xs:6},r.a.createElement(h.a,{label:"Quantity",type:"number",step:.001,value:M,onChange:function(e){q(e.target.value)}})),r.a.createElement(E.a,{item:!0,xs:6},r.a.createElement(h.a,{label:"Price",type:"number",step:.001,value:te,onChange:function(e){re(e.target.value)}})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(y.a,{fullWidth:!0,onClick:function(){var e={ticker:P.symbol,quantity:M,price:te};oe.push(e),localStorage.setItem("boring",JSON.stringify(fe(oe))),T(!1)}},"submit")))),!l&&r.a.createElement(W.a,{className:e.table},r.a.createElement(U.a,null,r.a.createElement(V.a,null,r.a.createElement(z.a,null,r.a.createElement(G.a,null,"Ticker"),r.a.createElement(G.a,null,"Quantity"),r.a.createElement(G.a,null,"Cost"),r.a.createElement(G.a,null,"Open"),r.a.createElement(G.a,null,"High"),r.a.createElement(G.a,null,"Low"),r.a.createElement(G.a,null,"P/L (%)"),r.a.createElement(G.a,null,"Delete"))),r.a.createElement(Z.a,null,oe.map((function(e,t){return r.a.createElement(z.a,{key:t},r.a.createElement(G.a,null,e.ticker),r.a.createElement(G.a,null,e.quantity),r.a.createElement(G.a,null,e.price),r.a.createElement(G.a,null,e.open),r.a.createElement(G.a,null,e.high),r.a.createElement(G.a,null,e.low),r.a.createElement(G.a,{style:{color:e.pl>0?"green":"red"}},e.pl>0&&"+",e.pl),r.a.createElement(G.a,null,r.a.createElement(I.a,{onClick:function(){oe.splice(t,1),localStorage.setItem("boring",JSON.stringify(fe(oe))),c(!0)}},r.a.createElement(ee.a,null))))}))))))},le=a(194),ce=a(65),oe=Object(d.a)((function(e){return{root:{margin:"0 4% 0 4%"},combobox:{padding:"3% 0 3% 0"},header:{margin:"0 0 1% 0"},table:{overflowY:"scroll"}}})),ie=function(){var e=oe(),t=Object(n.useState)([]),a=Object(F.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)([]),i=Object(F.a)(o,2),u=i[0],m=i[1],s=Object(n.useState)(!0),p=Object(F.a)(s,2),E=p[0],b=p[1],g=Object(n.useState)("SGD"),d=Object(F.a)(g,2),v=d[0],O=d[1],j=Object(n.useState)([]),k=Object(F.a)(j,2),w=k[0],S=k[1],x=Object(n.useState)(!1),C=Object(F.a)(x,2),N=C[0],D=C[1],T=Object(n.useState)(),R=Object(F.a)(T,2),A=R[0],P=R[1],_=Object(n.useState)(),B=Object(F.a)(_,2),J=B[0],M=B[1],q=Object(n.useState)(),H=Object(F.a)(q,2),X=H[0],K=H[1];function te(){var e,t=0,a=0,n=Object(Q.a)(w);try{for(n.s();!(e=n.n()).done;){var r=e.value;a+=r.principal*r.pl/100,t+=r.principal}}catch(l){n.e(l)}finally{n.f()}return(a/t*100).toFixed(2)}return Object(n.useEffect)((function(){function e(e,a){return t.apply(this,arguments)}function t(){return(t=Object(Y.a)(L.a.mark((function e(t,a){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=0,e.next=3,$.a.get("https://api.coinbase.com/v2/prices/".concat(t,"-").concat(a,"/sell")).then((function(e){n=parseFloat(e.data.data.amount)}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return n.apply(this,arguments)}function n(){return(n=Object(Y.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,$.a.get("https://api.coinbase.com/v2/currencies").then((function(e){var a,n=[],r=Object(Q.a)(e.data.data);try{for(r.s();!(a=r.n()).done;){var l=a.value;n.push(l.id)}}catch(o){r.e(o)}finally{r.f()}t=n,c(n)}));case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function r(e){return l.apply(this,arguments)}function l(){return(l=Object(Y.a)(L.a.mark((function e(t){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,$.a.get("https://api.coinbase.com/v2/exchange-rates?currency=BTC").then((function(e){Object.keys(e.data.data.rates).map((function(e){t.includes(e)||a.push(e)})),m(a)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=Object(Y.a)(L.a.mark((function t(){var n,l,c,o,i;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a();case 2:if(r(t.sent),!(n=JSON.parse(localStorage.getItem("crypto")))){t.next=28;break}l=Object(Q.a)(n),t.prev=7,l.s();case 9:if((c=l.n()).done){t.next=18;break}return o=c.value,t.next=13,e(o.name,v);case 13:i=t.sent,o.pl=parseFloat(((i*o.value-o.principal)/o.principal*100).toFixed(2)),o.currentPrice=i;case 16:t.next=9;break;case 18:t.next=23;break;case 20:t.prev=20,t.t0=t.catch(7),l.e(t.t0);case 23:return t.prev=23,l.f(),t.finish(23);case 26:t.next=29;break;case 28:n=[];case 29:S(n),localStorage.setItem("crypto",JSON.stringify(n)),b(!1);case 32:case"end":return t.stop()}}),t,null,[[7,20,23,26]])})))).apply(this,arguments)}!function(){o.apply(this,arguments)}()}),[E]),r.a.createElement("div",{className:e.root},r.a.createElement(f.a,{variant:"h4",className:e.header},"Crypto ","  ",r.a.createElement("span",{style:{color:te()>0?"green":"red"}},te()>0?"+":"-",te(),"%")),r.a.createElement(le.a,{className:e.combobox,options:l,defaultValue:"SGD",renderInput:function(e){return r.a.createElement(h.a,Object.assign({},e,{variant:"outlined",label:"Select Currency"}))},onChange:function(e,t){O(t),b(!0)}}),r.a.createElement(W.a,null,r.a.createElement(U.a,null,r.a.createElement(V.a,null,r.a.createElement(z.a,null,r.a.createElement(G.a,null,"Currency (Current Price)"),r.a.createElement(G.a,null,"Quantity"),r.a.createElement(G.a,null,"Principal"),r.a.createElement(G.a,null,"Current"),r.a.createElement(G.a,null,"Profit/Loss (%)"),r.a.createElement(G.a,null,"Delete"))),r.a.createElement(Z.a,null,!E&&w.map((function(e,t){return r.a.createElement(z.a,null,r.a.createElement(G.a,null,"".concat(e.name," (").concat(v).concat(e.currentPrice,")")),r.a.createElement(G.a,null,e.value),r.a.createElement(G.a,null,"".concat(v).concat(e.principal.toLocaleString(void 0,{maximumFractionDigits:2}))),r.a.createElement(G.a,null,v,(parseFloat(e.currentPrice)*parseFloat(e.value)).toLocaleString(void 0,{maximumFractionDigits:2})),r.a.createElement(G.a,{style:{color:e.pl>0?"green":"red"}},e.pl>0&&"+",e.pl||""),r.a.createElement(G.a,null,r.a.createElement(I.a,{onClick:function(){w.splice(t,1),localStorage.setItem("crypto",JSON.stringify(w)),b(!0)}},r.a.createElement(ee.a,null))))})),N&&r.a.createElement(z.a,null,r.a.createElement(G.a,{style:{paddingRight:"5%"}},r.a.createElement(le.a,{className:e.combobox,options:u,renderInput:function(e){return r.a.createElement(h.a,Object.assign({},e,{variant:"outlined",label:"Crypto",size:"small"}))},onChange:function(e,t){return P(t)}})),r.a.createElement(G.a,null,r.a.createElement(ce.a,{style:{width:"25vw"},customInput:h.a,value:J,onValueChange:function(e){var t=e.floatValue;M(t)}})),r.a.createElement(G.a,null,r.a.createElement(ce.a,{style:{width:"25vw"},customInput:h.a,prefix:v,value:X,onValueChange:function(e){var t=e.floatValue;K(t)}})))))),N?r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{onClick:function(){void 0!==A&&void 0!==X&&void 0!==J&&(w.push({name:A,value:J,principal:X}),localStorage.setItem("crypto",JSON.stringify(w)),b(!0)),D(!1)}},"submit"),r.a.createElement(y.a,{onClick:function(){D(!1)}},"cancel")):r.a.createElement(y.a,{onClick:function(){return D(!0)}},"+ add item"),r.a.createElement(y.a,{onClick:function(){return b(!0)}},"Refresh"),r.a.createElement("hr",null))},ue=function(e){Date.UTC((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate(),15,30,0),Date.UTC((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate(),7,0,0),Date.UTC((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate(),13,30,0),Date.UTC((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate(),20,0,0);return r.a.createElement("div",null)},me=Object(d.a)((function(e){return{root:{margin:"0 0% 0 0%"}}})),se=function(){var e=me();return r.a.createElement("div",{className:e.root},r.a.createElement(ue,null),r.a.createElement(ie,null),r.a.createElement(re,null))},pe=a(96),fe=a.n(pe),Ee=a(97),be=a.n(Ee),he=a(95),ge=a.n(he),de=[{name:"About Me",link:"/",component:D,icon:r.a.createElement(ge.a,null)},{name:"Contact Me",link:"/contact-me",component:g,icon:r.a.createElement(fe.a,null)},{name:"Asset Tracker",link:"/tracker",component:se,icon:r.a.createElement(be.a,null)}],ye=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{basename:"/"},r.a.createElement(M,null),r.a.createElement(i.c,null,de.map((function(e){return r.a.createElement(i.a,{exact:!0,path:e.link,component:e.component})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[136,1,2]]]);
//# sourceMappingURL=main.87400d75.chunk.js.map