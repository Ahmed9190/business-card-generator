(this["webpackJsonpbusiness-card-generator"]=this["webpackJsonpbusiness-card-generator"]||[]).push([[5],{35:function(t,e,n){"use strict";var a=n(15);e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2500;return a.b[e](t,{position:"bottom-right",autoClose:n,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},38:function(t,e,n){"use strict";var a=n(33),o=n(34),c=(n(0),n(39),n(3));e.a=function(t){var e=t.text,n=t.color,r=t.hoverColor,s=Object(o.a)(t,["text","color","hoverColor"]);return Object(c.jsx)("button",Object(a.a)(Object(a.a)({className:"custom-button",style:{backgroundColor:n,"&:hover":{backgroundColor:r}}},s),{},{children:e}))}},39:function(t,e,n){},40:function(t,e,n){"use strict";var a=n(33),o=n(34),c=(n(41),n(0)),r=n.n(c),s=n(3),i=r.a.forwardRef((function(t,e){var n=t.Icon,c=t.activedIcon,r=t.onClickIcon,i=t.password,u=Object(o.a)(t,["Icon","activedIcon","onClickIcon","password"]);return Object(s.jsxs)("div",{className:"custom-input-container",children:[Object(s.jsx)("input",Object(a.a)({ref:e,className:"custom-input",type:i?"password":null},u)),n&&Object(s.jsx)(n,{onClick:r,className:"input-icon",width:"20px",height:"20px",fill:c?"#102840":"#1028407E"})]})}));e.a=i},41:function(t,e,n){},85:function(t,e,n){"use strict";n.r(e);var a=n(42),o=n(33),c=n(36),r=n(0),s=(n(86),n(40)),i=n(38),u=n(1),l=n(37),d=n.n(l),b=n(35),j=n(3);e.default=function(){var t=Object(r.useState)({}),e=Object(c.a)(t,2),n=e[0],l=e[1],p=Object(r.useRef)(),f=Object(u.f)().push;Object(r.useEffect)((function(){v()}),[n]);var v=function(){var t,e,a;!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(n.password)&&(null===(t=n.password)||void 0===t?void 0:t.length)>=8?null===(a=p.current)||void 0===a||a.setCustomValidity("Your password must contains at least one numeric digit, one uppercase and one lowercase letter"):null===(e=p.current)||void 0===e||e.setCustomValidity("")};return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d.a.post("/signin",n).then((function(t){var e=t.data;localStorage.setItem("jwt",e)})).then((function(){window.location.href="/"})).catch((function(t){return Object(b.a)(t.response.data,"error")}))},className:"form-container",children:[Object(j.jsx)(s.a,{placeholder:"Email",onChange:function(t){var e=t.target,c=e.value,r=e.name;return l(Object(o.a)(Object(o.a)({},n),{},Object(a.a)({},r,c)))},type:"email",name:"email",required:!0}),Object(j.jsx)(s.a,{ref:p,placeholder:"Password",minLength:8,onChange:function(t){var e=t.target,c=e.value,r=e.name;return l(Object(o.a)(Object(o.a)({},n),{},Object(a.a)({},r,c)))},name:"password",required:!0,password:!0}),Object(j.jsx)("span",{className:"change-form",onClick:function(){return f("/account/signup")},children:"Don't have an account? Sign up"}),Object(j.jsx)(i.a,{type:"submit",text:"Sign in"})]})}},86:function(t,e,n){}}]);
//# sourceMappingURL=5.3bca3aeb.chunk.js.map