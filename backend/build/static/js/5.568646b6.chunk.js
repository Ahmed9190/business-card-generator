(this["webpackJsonpbusiness-card-generator"]=this["webpackJsonpbusiness-card-generator"]||[]).push([[5],{37:function(e,t,n){"use strict";var a=n(15);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2500;return a.b[t](e,{position:"bottom-right",autoClose:n,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},38:function(e,t,n){"use strict";var a=n(33),c=n(35),o=(n(0),n(43),n(3));t.a=function(e){var t=e.text,n=e.color,r=e.hoverColor,s=Object(c.a)(e,["text","color","hoverColor"]);return Object(o.jsx)("button",Object(a.a)(Object(a.a)({className:"custom-button",style:{backgroundColor:n,"&:hover":{backgroundColor:r}}},s),{},{children:t}))}},40:function(e,t,n){"use strict";var a=n(33),c=n(35),o=(n(45),n(0),n(3));t.a=function(e){var t=e.Icon,n=e.activedIcon,r=e.onClickIcon,s=e.password,i=Object(c.a)(e,["Icon","activedIcon","onClickIcon","password"]);return Object(o.jsxs)("div",{className:"custom-input-container",children:[Object(o.jsx)("input",Object(a.a)({className:"custom-input",type:s?"password":null},i)),t&&Object(o.jsx)(t,{onClick:r,className:"input-icon",width:"20px",height:"20px",fill:n?"#102840":"#1028407E"})]})}},42:function(e,t,n){"use strict";t.a=n.p+"static/media/logo.c22b4d0f.svg"},43:function(e,t,n){},45:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),c=(n(82),n(42)),o=n(39),r=n(33),s=n(34),i=(n(83),n(40)),u=n(38),l=n(1),j=n(36),b=n.n(j),m=n(37),p=n(3),d=function(){var e=Object(a.useState)({}),t=Object(s.a)(e,2),n=t[0],c=t[1],j=Object(l.f)().push;return Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b.a.post("/signin",n).then((function(e){var t=e.data;localStorage.setItem("jwt",t)})).then((function(){window.location.href="/"})).catch((function(e){return Object(m.a)(e.response.data,"error")}))},className:"form-container",children:[Object(p.jsx)(i.a,{placeholder:"Email",onChange:function(e){var t=e.target,a=t.value,s=t.name;return c(Object(r.a)(Object(r.a)({},n),{},Object(o.a)({},s,a)))},name:"email",required:!0}),Object(p.jsx)(i.a,{placeholder:"Password",onChange:function(e){var t=e.target,a=t.value,s=t.name;return c(Object(r.a)(Object(r.a)({},n),{},Object(o.a)({},s,a)))},name:"password",required:!0,password:!0}),Object(p.jsx)("span",{className:"change-form",onClick:function(){return j("/account/signup")},children:"Don't have an account? Sign up"}),Object(p.jsx)(u.a,{type:"submit",text:"Sign in"})]})},O=n(14),f=(n(84),function(){var e=Object(a.useState)({}),t=Object(s.a)(e,2),n=t[0],c=t[1],j=Object(l.f)().push;return Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b.a.post("/signup",n).then((function(e){var t=e.data;Object(m.a)(t),j("/account/signin")})).catch((function(e){Object(m.a)(e.response.data,"error")}))},className:"form-container",children:[Object(p.jsx)("div",{className:"f_l_name_container",children:[{placeholder:"First Name",name:"f_name",type:"fname",required:!0},{placeholder:"Last Name",name:"l_name",type:"lname",required:!0}].map((function(e,t){return Object(p.jsx)(i.a,Object(r.a)({onChange:function(e){var t=e.target,a=t.value,s=t.name;return c(Object(r.a)(Object(r.a)({},n),{},Object(o.a)({},s,a)))}},e),t)}))}),[{placeholder:"Email",name:"email",type:"email",required:!0},{placeholder:"Password",name:"password",type:"password",password:!0,required:!0}].map((function(e,t){return Object(p.jsx)(i.a,Object(r.a)({onChange:function(e){var t=e.target,a=t.value,s=t.name;return c(Object(r.a)(Object(r.a)({},n),{},Object(o.a)({},s,a)))}},e),t)})),Object(p.jsx)("span",{className:"change-form",onClick:function(){return j("/account/signin")},children:"Have an account? Sign in"}),Object(p.jsx)(u.a,{type:"submit",text:"Sign up"})]})});t.default=function(e){var t=e.match.url;return Object(p.jsxs)("div",{className:"account-page-container",children:[Object(p.jsx)(O.b,{to:"/",children:Object(p.jsx)("img",{src:c.a,alt:"logo",className:"form-header-logo"})}),Object(p.jsxs)("div",{className:"form-parent-container",children:[Object(p.jsx)("img",{src:c.a,alt:"logo",className:"form-logo"}),Object(p.jsx)("span",{className:"login-form-title",children:"Business Card Generator"}),Object(p.jsx)(l.a,{exact:!0,path:"".concat(t,"/signin"),component:d}),Object(p.jsx)(l.a,{exact:!0,path:"".concat(t,"/signup"),component:f})]})]})}}}]);
//# sourceMappingURL=5.568646b6.chunk.js.map