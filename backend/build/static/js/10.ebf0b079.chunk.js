(this["webpackJsonpbusiness-card-generator"]=this["webpackJsonpbusiness-card-generator"]||[]).push([[10],{84:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var c=a(34),n=a(33),r=a(59),o=a(36),i=a(37),s=a.n(i),u=a(0),d=a(46),l=a(47),j=a(43),f=(a(84),a(35)),b=a(45),h=a(3);t.default=function(){var e=Object(u.useState)([]),t=Object(o.a)(e,2),a=t[0],i=t[1],O=Object(u.useState)([]),v=Object(o.a)(O,2),p=v[0],g=v[1],_=Object(u.useState)(""),m=Object(o.a)(_,2),x=m[0],w=m[1],S=Object(u.useState)(!1),N=Object(o.a)(S,2),y=N[0],k=N[1];Object(u.useEffect)((function(){s.a.get("read-cards").then((function(e){var t=e.data;i(t)})).then((function(){localStorage.getItem("jwt")&&s.a.get("/read-favourite-cards",b.a).then((function(e){var t=e.data;g(t.map((function(e){return e.c_id})))})).catch((function(e){Object(f.a)(e.response.data,"error")}))})).catch((function(e){Object(f.a)(e.response.data,"error")}))}),[]);var C=function(e,t){e?function(e){s.a.delete("delete-favourite-card",Object(n.a)(Object(n.a)({},b.a),{},{data:{c_id:e}})).then((function(){return g(p.filter((function(t){return t!==e})))})).catch((function(e){return Object(f.a)(e.response.data,"error")}))}(t):function(e){s.a.post("add-to-favourite",{c_id:e},b.a).then((function(){return g([].concat(Object(r.a)(p),[e]))})).catch((function(e){return Object(f.a)(e.response.data,"error")}))}(t)},F=a.filter((function(e){var t,a=e.f_name,c=e.l_name,n=e.c_id;return(null===(t="".concat(a," ").concat(c))||void 0===t?void 0:t.toLowerCase().includes(x.toLowerCase()))&&(!y||p.includes(n))}));return Object(h.jsxs)("div",{className:"grid-container",children:[Object(h.jsx)("div",{className:"card-page-header",children:Object(h.jsx)(l.a,{solid:!0,search:!0,favourite:!!localStorage.getItem("jwt"),setSearchField:w,favouriteOnly:y,setFavouriteOnly:k})}),Object(h.jsx)("div",{className:"card-page-contents",children:F.map((function(e,t){e.u_id;var a=e.c_id,n=e.color_index,r=e.has_whatsapp,o=Object(c.a)(e,["u_id","c_id","color_index","has_whatsapp"]),i=p.includes(a);return Object(h.jsxs)("div",{style:{position:"relative"},children:[Object(h.jsx)("div",{className:"card-page-card-container",children:Object(h.jsx)(d.a,{cardData:o,color:j.a[n],hasWhatsapp:r})}),localStorage.getItem("jwt")&&Object(h.jsx)("div",{className:"favourite-button noselect",style:i?{color:"#F8961E"}:null,onClick:function(){return C(i,a)},children:"\u2605"})]},t)}))})]})}}}]);
//# sourceMappingURL=10.ebf0b079.chunk.js.map