(this["webpackJsonpbusiness-card-generator"]=this["webpackJsonpbusiness-card-generator"]||[]).push([[0],{60:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(63);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},61:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,"a",(function(){return n}))},62:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(65);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){a=!0,l=c}finally{try{n||null==o.return||o.return()}finally{if(a)throw l}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},63:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},64:function(e,t,r){"use strict";var n=r(17);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2500;return n.b[t](e,{position:"bottom-right",autoClose:r,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},65:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(66);function a(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},66:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},67:function(e,t,r){"use strict";var n=r(60),a=r(61),l=(r(0),r(68),r(3));t.a=function(e){var t=e.text,r=e.color,i=e.hoverColor,o=Object(a.a)(e,["text","color","hoverColor"]);return Object(l.jsx)("button",Object(n.a)(Object(n.a)({className:"custom-button",style:{backgroundColor:r,"&:hover":{backgroundColor:i}}},o),{},{children:t}))}},68:function(e,t,r){},71:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return l}));var n=r(76),a=["F94144","F3722C","ED8D4C","F8961E","F9C74F","90BE6D","43AA8B","738CA2","43AA8B","00A6A6","9C89B8"],l=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return[{placeholder:"First Name",name:"f_name",type:"fname",required:!0,minLength:2},{placeholder:"Last Name",name:"l_name",type:"lname",required:!0,minLength:2},{placeholder:"Position / Role",name:"position",type:"text",required:!0,minLength:2},{placeholder:"Address",name:"address",type:"text",required:!0},{placeholder:"Email",name:"email",type:"email",required:!0},{placeholder:"Website",name:"website",type:"text",required:!0},{placeholder:"Phone Number",name:"phone_num",type:"text",required:!0,Icon:n.a,activedIcon:e,onClickIcon:t,minLength:10,maxLength:10,ref:r},{placeholder:"Facebook",name:"fb",type:"text",required:!0},{placeholder:"Instagram",name:"insta",type:"text",required:!0},{placeholder:"Company Name",name:"compnay_name",type:"text",required:!0}]}},72:function(e,t,r){"use strict";t.a=r.p+"static/media/logo.c22b4d0f.svg"},73:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={headers:{Authorization:localStorage.getItem("jwt")}}},74:function(e,t,r){"use strict";var n,a=r(60),l=r(62),i=r(0),o=r.n(i);r(79);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function u(e,t){var r=e.title,a=e.titleId,l=s(e,["title","titleId"]);return i.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 297 83.54",ref:t,"aria-labelledby":a},l),void 0===r?i.createElement("title",{id:a},"card-navy-card-orange-part"):r?i.createElement("title",{id:a},r):null,n||(n=i.createElement("g",{id:"Layer_2","data-name":"Layer 2"},i.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},i.createElement("path",{d:"M297,4.79V83.54H0V51.07S41.53,74.92,82.28,74.92s69-17.24,99.52-39.18S257.82-10.49,297,4.79Z",fill:"#102840"})))))}var f,d=i.forwardRef(u);r.p;function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function b(e,t){var r=e.title,n=e.titleId,a=p(e,["title","titleId"]);return i.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 220.59 71.48",ref:t,"aria-labelledby":n},a),void 0===r?i.createElement("title",{id:n},"card-orange-part"):r?i.createElement("title",{id:n},r):null,f||(f=i.createElement("g",{id:"Layer_2","data-name":"Layer 2"},i.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},i.createElement("path",{d:"M220.59,9.43c-13.47,7.78-25.09,14.09-37.7,22.7C150.48,54.27,119.66,71.25,86,71.48c-32.7.22-67.15-16.25-77-20.61C4.26,48.8,1.5,47.56,0,46.86V0C27.77,22.26,53.51,32.44,92.79,38.79,132.62,45.23,181.81,25.86,220.59,9.43Z"})))))}var y,h=i.forwardRef(b);r.p;function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function g(e,t){var r=e.title,n=e.titleId,a=O(e,["title","titleId"]);return i.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10.5 10.5",ref:t,"aria-labelledby":n},a),void 0===r?i.createElement("title",{id:n},"location"):r?i.createElement("title",{id:n},r):null,y||(y=i.createElement("g",{id:"Layer_2","data-name":"Layer 2"},i.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},i.createElement("path",{d:"M5.24,10.5A5.25,5.25,0,1,1,10.5,5.39,5.23,5.23,0,0,1,5.24,10.5Zm0-.93,0-.07c.13-.2.25-.41.37-.62l1-1.79a15.13,15.13,0,0,0,.8-1.55A5.63,5.63,0,0,0,8,4.15,2.68,2.68,0,0,0,7.73,2.5a2.66,2.66,0,0,0-1.4-1.34,2.64,2.64,0,0,0-2.25,0,2.6,2.6,0,0,0-1.1,1,2.73,2.73,0,0,0-.47,1.41A3.8,3.8,0,0,0,2.77,5a8.28,8.28,0,0,0,.52,1.18c.35.64.72,1.28,1.08,1.91l.76,1.28A2.12,2.12,0,0,0,5.25,9.57Z",fill:"#102840"}),i.createElement("path",{d:"M6.22,3.6a1,1,0,1,1-1-1A1,1,0,0,1,6.22,3.6Z",fill:"#102840"})))))}var j,w=i.forwardRef(g);r.p;function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function A(e,t){var r=e.title,n=e.titleId,a=E(e,["title","titleId"]);return i.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10.5 10.5",ref:t,"aria-labelledby":n},a),void 0===r?i.createElement("title",{id:n},"email"):r?i.createElement("title",{id:n},r):null,j||(j=i.createElement("g",{id:"Layer_2","data-name":"Layer 2"},i.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},i.createElement("path",{d:"M10.5,5.2A5.25,5.25,0,1,1,5.42,0,5.25,5.25,0,0,1,10.5,5.2Zm-6.08.15L2.2,7.57H8.37L6.14,5.34l0,0L5.32,6s-.05,0-.09,0l-.4-.31Zm4-2.42H2.18l.06,0,3,2.3a.08.08,0,0,0,.11,0L8.31,3ZM4,5,2.14,3.59V6.8ZM6.61,5l1.8,1.79V3.6Z",fill:"#102840"})))))}var S,L=i.forwardRef(A);r.p;function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function M(e,t){var r=e.title,n=e.titleId,a=I(e,["title","titleId"]);return i.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10.5 10.5",ref:t,"aria-labelledby":n},a),void 0===r?i.createElement("title",{id:n},"web"):r?i.createElement("title",{id:n},r):null,S||(S=i.createElement("g",{id:"Layer_2","data-name":"Layer 2"},i.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},i.createElement("path",{d:"M5.25,0A5.25,5.25,0,1,1,0,5.28,5.24,5.24,0,0,1,5.25,0ZM9.1,5.35A3.55,3.55,0,0,0,9,4.49,3.71,3.71,0,0,0,7.75,2.43a3.7,3.7,0,0,0-3.09-.87A3.8,3.8,0,0,0,2,3.24a3.49,3.49,0,0,0-.55,2.68A3.66,3.66,0,0,0,2.75,8.07a3.75,3.75,0,0,0,3,.89A3.7,3.7,0,0,0,7.82,8,3.64,3.64,0,0,0,9.1,5.35Z",fill:"#102840"}),i.createElement("path",{d:"M6.83,5H5.45V3.71h1s.06,0,.07,0A4.17,4.17,0,0,1,6.84,5S6.83,5,6.83,5Z",fill:"#102840"}),i.createElement("path",{d:"M6.84,5.5a3.93,3.93,0,0,1-.15.92,2,2,0,0,1-.08.26.08.08,0,0,1-.06,0H5.45V5.5Z",fill:"#102840"}),i.createElement("path",{d:"M4.93,3.71V4.92s0,.07,0,.07H3.65c0-.14,0-.27,0-.4a4,4,0,0,1,.2-.83s0,0,.06,0h1Z",fill:"#102840"}),i.createElement("path",{d:"M7.35,5a4.56,4.56,0,0,0-.26-1.27H8.14a.07.07,0,0,1,.08,0A3.38,3.38,0,0,1,8.57,5V5Z",fill:"#102840"}),i.createElement("path",{d:"M1.92,5c0-.15.05-.3.08-.45a3.17,3.17,0,0,1,.28-.78s0,0,.07,0h1l-.06.2a5,5,0,0,0-.17,1s0,.07,0,.07H1.92Z",fill:"#102840"}),i.createElement("path",{d:"M4.93,6.72h-1A4.53,4.53,0,0,1,3.66,5.5H4.93Z",fill:"#102840"}),i.createElement("path",{d:"M7.35,5.5H8.59c0,.21-.07.41-.12.61s-.14.38-.21.56a.12.12,0,0,1-.07,0H7.12A4.62,4.62,0,0,0,7.35,5.5Z",fill:"#102840"}),i.createElement("path",{d:"M1.93,5.5H3.14a5.58,5.58,0,0,0,.22,1.22h-1c-.05,0-.07,0-.09,0a3.28,3.28,0,0,1-.31-1.11Z",fill:"#102840"}),i.createElement("path",{d:"M7.91,7.24A3.32,3.32,0,0,1,6,8.41l0,0,0,0a3.57,3.57,0,0,0,.85-1.08A.09.09,0,0,1,7,7.23h.94Z",fill:"#102840"}),i.createElement("path",{d:"M6,2.1A3.25,3.25,0,0,1,7.84,3.19H6.91a.08.08,0,0,1-.07,0,3.66,3.66,0,0,0-.81-1Z",fill:"#102840"}),i.createElement("path",{d:"M4.31,8.36A3.24,3.24,0,0,1,2.6,7.24h.9s0,0,.07,0A3.24,3.24,0,0,0,4.3,8.34Z",fill:"#102840"}),i.createElement("path",{d:"M4.32,2.14a4.31,4.31,0,0,0-.39.48,5.58,5.58,0,0,0-.32.52s0,0-.07,0H2.66A3.23,3.23,0,0,1,4.32,2.14Z",fill:"#102840"}),i.createElement("path",{d:"M4.93,7.24v.95a2.27,2.27,0,0,1-.84-.95Z",fill:"#102840"}),i.createElement("path",{d:"M6.34,7.24a2.73,2.73,0,0,1-.89.93V7.24Z",fill:"#102840"}),i.createElement("path",{d:"M5.45,3.19V2.31a2.83,2.83,0,0,1,.84.88Z",fill:"#102840"}),i.createElement("path",{d:"M4.14,3.19a2.77,2.77,0,0,1,.79-.88v.88Z",fill:"#102840"})))))}var _,P=i.forwardRef(M),C=(r.p,r(76));function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function N(e,t){var r=e.title,n=e.titleId,a=k(e,["title","titleId"]);return i.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 8.15 8.14",ref:t,"aria-labelledby":n},a),void 0===r?i.createElement("title",{id:n},"call"):r?i.createElement("title",{id:n},r):null,_||(_=i.createElement("g",{id:"Layer_2","data-name":"Layer 2"},i.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},i.createElement("path",{d:"M4.42,8.14H3.69l-.41-.06a3.88,3.88,0,0,1-1-.32,3.48,3.48,0,0,1-.88-.59,6.11,6.11,0,0,1-.56-.58,3.58,3.58,0,0,1-.58-1A3.87,3.87,0,0,1,0,4.38a4.62,4.62,0,0,1,0-1,4,4,0,0,1,.34-1A3.84,3.84,0,0,1,1,1.4,4.58,4.58,0,0,1,1.72.74,3.77,3.77,0,0,1,2.65.25,3.34,3.34,0,0,1,3.53,0l.2,0h.69l0,0a3.05,3.05,0,0,1,.41.05,4,4,0,0,1,1.2.44,4.09,4.09,0,0,1,1.15,1,3.72,3.72,0,0,1,.58.93,4,4,0,0,1,.34,1.36,4,4,0,0,1,0,1,4.23,4.23,0,0,1-.37,1.14,4,4,0,0,1-.57.86,4.58,4.58,0,0,1-.73.66,3.77,3.77,0,0,1-.93.49,3.25,3.25,0,0,1-.88.22ZM1.8,2.58a4,4,0,0,0,.16,1A3.86,3.86,0,0,0,5.61,6.35a.42.42,0,0,0,.31-.13l.28-.29a.4.4,0,0,0,.1-.15A.58.58,0,0,0,5.9,5c-.19-.06-.39-.12-.58-.16A.52.52,0,0,0,4.83,5a1.21,1.21,0,0,0-.16.16.13.13,0,0,1-.15,0,2.29,2.29,0,0,1-1-.66A2.33,2.33,0,0,1,3,3.62a.11.11,0,0,1,0-.13l.14-.15a.52.52,0,0,0,.15-.53c0-.17-.09-.35-.14-.52A.94.94,0,0,0,3,2a.53.53,0,0,0-.83,0L2,2.18A.44.44,0,0,0,1.8,2.58Z",fill:"#102840"})))))}var V,z=i.forwardRef(N);r.p;function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function F(e,t){var r=e.title,n=e.titleId,a=B(e,["title","titleId"]);return i.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10.51 10.49",ref:t,"aria-labelledby":n},a),void 0===r?i.createElement("title",{id:n},"facebook"):r?i.createElement("title",{id:n},r):null,V||(V=i.createElement("g",{id:"Layer_2","data-name":"Layer 2"},i.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},i.createElement("path",{d:"M6.38,10.38V7.07c0-.07,0-.08.09-.08H7.53c.08,0,.1,0,.11-.1l.15-1.13a.39.39,0,0,1,0-.15c0-.06,0-.07-.08-.07H6.45s-.07,0-.07,0c0-.35,0-.69,0-1A.5.5,0,0,1,7,3.93c.27,0,.54,0,.81,0,.1,0,.1,0,.1-.11V2.71c0-.07,0-.09-.08-.09-.42,0-.84-.06-1.25,0A1.65,1.65,0,0,0,4.93,4a5.07,5.07,0,0,0,0,.68v.73c0,.07,0,.09-.09.09H3.73c-.07,0-.09,0-.09.09V6.91c0,.07,0,.08.09.08H4.8c.07,0,.09,0,.09.08v3.42A5.25,5.25,0,1,1,10.51,5.1,5.22,5.22,0,0,1,6.38,10.38Z",fill:"#102840"})))))}var q,R=i.forwardRef(F);r.p;function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function T(e,t){var r=e.title,n=e.titleId,a=G(e,["title","titleId"]);return i.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10.49 10.49",ref:t,"aria-labelledby":n},a),void 0===r?i.createElement("title",{id:n},"instagram"):r?i.createElement("title",{id:n},r):null,q||(q=i.createElement("g",{id:"Layer_2","data-name":"Layer 2"},i.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},i.createElement("path",{d:"M5.23,4A1.23,1.23,0,0,0,4,5.25,1.22,1.22,0,1,0,5.23,4Zm0,0A1.23,1.23,0,0,0,4,5.25,1.22,1.22,0,1,0,5.23,4Zm0,0A1.23,1.23,0,0,0,4,5.25,1.22,1.22,0,1,0,5.23,4Zm0,0A1.23,1.23,0,0,0,4,5.25,1.22,1.22,0,1,0,5.23,4Zm3-.3A1.41,1.41,0,0,0,6.78,2.28H3.73A1.41,1.41,0,0,0,2.28,3.74V5.23c0,.53,0,1,0,1.57A1.43,1.43,0,0,0,3.69,8.21H6.78A1.43,1.43,0,0,0,8.21,6.78Zm-3,3.35A1.83,1.83,0,1,1,7.07,5.24,1.83,1.83,0,0,1,5.24,7.07ZM7.16,3.74a.43.43,0,0,1-.44-.42.43.43,0,0,1,.43-.45.44.44,0,1,1,0,.87ZM5.23,4A1.23,1.23,0,0,0,4,5.25,1.22,1.22,0,1,0,5.23,4Zm3-.3A1.41,1.41,0,0,0,6.78,2.28H3.73A1.41,1.41,0,0,0,2.28,3.74V5.23c0,.53,0,1,0,1.57A1.43,1.43,0,0,0,3.69,8.21H6.78A1.43,1.43,0,0,0,8.21,6.78Zm-3,3.35A1.83,1.83,0,1,1,7.07,5.24,1.83,1.83,0,0,1,5.24,7.07ZM7.16,3.74a.43.43,0,0,1-.44-.42.43.43,0,0,1,.43-.45.44.44,0,1,1,0,.87ZM5.23,4A1.23,1.23,0,0,0,4,5.25,1.22,1.22,0,1,0,5.23,4Zm3-.3A1.41,1.41,0,0,0,6.78,2.28H3.73A1.41,1.41,0,0,0,2.28,3.74V5.23c0,.53,0,1,0,1.57A1.43,1.43,0,0,0,3.69,8.21H6.78A1.43,1.43,0,0,0,8.21,6.78Zm-3,3.35A1.83,1.83,0,1,1,7.07,5.24,1.83,1.83,0,0,1,5.24,7.07ZM7.16,3.74a.43.43,0,0,1-.44-.42.43.43,0,0,1,.43-.45.44.44,0,1,1,0,.87ZM5.23,4A1.23,1.23,0,0,0,4,5.25,1.22,1.22,0,1,0,5.23,4Zm0,0A1.23,1.23,0,0,0,4,5.25,1.22,1.22,0,1,0,5.23,4Zm0,0A1.23,1.23,0,0,0,4,5.25,1.22,1.22,0,1,0,5.23,4Z",fill:"#102840"}),i.createElement("path",{d:"M5.26,0a5.25,5.25,0,1,0,5.23,5.26A5.24,5.24,0,0,0,5.26,0ZM8.82,6.75A2,2,0,0,1,6.75,8.81h-3A2,2,0,0,1,1.67,6.74V3.67a2,2,0,0,1,2-2c.53,0,1.06,0,1.59,0H6.72a2,2,0,0,1,2.1,2.08Z",fill:"#102840"})))))}var J=i.forwardRef(T),U=(r.p,r(77)),$=function e(t,r,n){return function(e,t){var r,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.2796875,.2765625,.3546875,.5546875,.5546875,.8890625,.665625,.190625,.3328125,.3328125,.3890625,.5828125,.2765625,.3328125,.2765625,.3015625,.5546875,.5546875,.5546875,.5546875,.5546875,.5546875,.5546875,.5546875,.5546875,.5546875,.2765625,.2765625,.584375,.5828125,.584375,.5546875,1.0140625,.665625,.665625,.721875,.721875,.665625,.609375,.7765625,.721875,.2765625,.5,.665625,.5546875,.8328125,.721875,.7765625,.665625,.7765625,.721875,.665625,.609375,.721875,.665625,.94375,.665625,.665625,.609375,.2765625,.3546875,.2765625,.4765625,.5546875,.3328125,.5546875,.5546875,.5,.5546875,.5546875,.2765625,.5546875,.5546875,.221875,.240625,.5,.221875,.8328125,.5546875,.5546875,.5546875,.5546875,.3328125,.5,.2765625,.5546875,.5,.721875,.5,.5,.5,.3546875,.259375,.353125,.5890625];return(e=String(e))?(null===(r=e)||void 0===r?void 0:r.split("").map((function(e){return e.charCodeAt(0)<n.length?n[e.charCodeAt(0)]:.5279276315789471})).reduce((function(e,t){return t+e})))*t:0}(t,r)>n?e(t,r-.5,n):r},K=function(e,t,r){var n=Object.keys(e).map((function(n,a){return $(e[n],t,r)}));return n.length?Math.min.apply(Math,Object(U.a)(n)):t},Q=r(3),X=function(e){var t=e.Leading,r=e.text,n=e.fontSize,a=e.focus;return Object(Q.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",flexFlow:"wrap",textAlign:"right"},children:[Object(Q.jsx)("span",{style:{fontSize:n,fontFamily:"GillSans",fontWeight:"bold",borderWidth:1,borderStyle:"solid",borderColor:a?"#102840":"transparent",transition:".5s",minHeight:11,maxWidth:150,width:r?"auto":150,direction:"rtl"},children:r}),Object(Q.jsx)(t,{height:"18",style:{margin:2.5}})]})},Y=function(e){var t=e.color,r=void 0===t?"#102840":t,n=e.text,a=e.fontSize,l=void 0===a?25:a,i=e.focus,o=e.fontWeight,c=void 0===o?"bold":o,s=e.maxWidth;return Object(Q.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",flexFlow:"wrap"},children:Object(Q.jsx)("span",{style:{fontSize:l,fontFamily:"GillSans",fontWeight:c,borderWidth:1,borderStyle:"solid",borderColor:i?r:"transparent",transition:".5s",minHeight:20,maxWidth:s,width:n?"auto":s,color:r,display:"flex",alignItems:"center",paddingLeft:5},children:n})})};t.a=function(e){var t=e.color,r=e.hasWhatsapp,n=e.cardData,c=Object(i.useState)(11),s=Object(l.a)(c,2),u=s[0],f=s[1],m=Object(i.useState)(20),p=Object(l.a)(m,2),b=p[0],y=p[1],v=Object(i.useState)(20),O=Object(l.a)(v,2),g=O[0],j=O[1],x=function(){var e=o.a.useState(document.activeElement),t=Object(l.a)(e,2),r=t[0],n=t[1],a=function(e){n(document.activeElement)};return o.a.useEffect((function(){return document.addEventListener("focusin",a),function(){document.removeEventListener("focusin",a),n(null)}}),[]),r.name}(),E=Object(i.useCallback)((function(){return y(Math.min(K(function(e){return{f_name:e.f_name,l_name:e.l_name}}(n),20,83),K({position:n.position},20,200)))}),[n]),A=Object(i.useCallback)((function(){return j(K({compnay_name:null===n||void 0===n?void 0:n.compnay_name},20,135))}),[n.compnay_name]),S=Object(i.useCallback)((function(){return f(K(function(e){var t=Object(a.a)({},e);return delete t.f_name,delete t.l_name,delete t.position,t}(n),11,150))}),[n]);return Object(i.useEffect)((function(){E(),A(),S()}),[n]),Object(i.useEffect)((function(){"f_name"===x||"l_name"===x||"position"===x?E():"company_name"===x?A():S()}),[n,x]),Object(Q.jsxs)("div",{className:"card-container",children:[Object(Q.jsxs)("div",{className:"card-sections",children:[Object(Q.jsxs)("div",{className:"left-card-section",children:[Object(Q.jsx)(X,{Leading:w,text:n.address,focus:"address"===x,fontSize:u}),Object(Q.jsx)(X,{Leading:L,text:n.email,focus:"email"===x,fontSize:u}),Object(Q.jsx)(X,{Leading:P,text:n.website,focus:"website"===x,fontSize:u}),Object(Q.jsx)(X,{Leading:r?C.a:z,text:n.phone_num,focus:"phone_num"===x,fontSize:u}),Object(Q.jsx)(X,{Leading:R,text:n.fb,focus:"fb"===x,fontSize:u}),Object(Q.jsx)(X,{Leading:J,text:n.insta,focus:"insta"===x,fontSize:u})]}),Object(Q.jsxs)("div",{className:"right-card-section",children:[Object(Q.jsxs)("div",{className:"card-holder-name",children:[Object(Q.jsx)(Y,{text:n.f_name,focus:"f_name"===x,fontSize:b,maxWidth:83}),Object(Q.jsx)(Y,{text:n.l_name,focus:"l_name"===x,fontSize:b,color:"#".concat(t),maxWidth:83})]}),Object(Q.jsx)("div",{className:"card-holder-position",style:{fontSize:b-5},children:Object(Q.jsx)(Y,{text:n.position,focus:"position"===x,fontSize:b>16?b-5:b-3,fontWeight:"normal",maxWidth:135})})]})]}),Object(Q.jsx)(d,{className:"card-navy-curve"}),Object(Q.jsx)("div",{style:{transition:"1s",fill:"#".concat(t)},children:Object(Q.jsx)(h,{className:"card-colored-curve"})}),Object(Q.jsx)("div",{className:"card-company-name",children:Object(Q.jsx)(Y,{text:n.compnay_name,focus:"compnay_name"===x,fontSize:g,color:"#fff",fontWeight:"normal",maxWidth:135})})]})}},75:function(e,t,r){"use strict";r(0);var n=r(72),a=r(1),l=r(16),i=r(67),o=(r(80),r.p+"static/media/search.e877ab87.svg"),c=r(3);t.a=function(e){var t=e.solid,r=e.search,s=e.favourite,u=e.setSearchField,f=e.favouriteOnly,d=e.setFavouriteOnly,m=Object(a.f)().push,p=localStorage.getItem("jwt");return Object(c.jsxs)("div",{className:"header",style:t?{backgroundColor:"#102840"}:{},children:[Object(c.jsx)(l.b,{to:"/",children:Object(c.jsx)("img",{src:n.a,alt:"logo",className:"header-logo",height:"60px",width:"auto"})}),Object(c.jsxs)("div",{className:"button-and-search-box",children:[r&&Object(c.jsxs)("div",{className:"search-box-contant",children:[Object(c.jsx)("input",{placeholder:"Search...",className:"search-box",onChange:function(e){var t=e.target.value;return u(t)}}),Object(c.jsx)("img",{src:o,alt:"searchIcon",width:"20",className:"searchIcon"})]}),s&&Object(c.jsx)("div",{className:"header-favourite-button noselect",style:f?{color:"#F8961E"}:null,onClick:function(){return d(!f)},children:"\u2605"}),Object(c.jsx)(i.a,{text:p?"SIGN OUT":"SIGN IN",style:{marginBottom:10,marginTop:10},onClick:function(){p?(window.location.href="/",localStorage.removeItem("jwt")):m("/account/signin")}})]})]})}},76:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n,a=r(0);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function o(e,t){var r=e.title,o=e.titleId,c=i(e,["title","titleId"]);return a.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10.49 10.57",ref:t,"aria-labelledby":o},c),void 0===r?a.createElement("title",{id:o},"whatsapp"):r?a.createElement("title",{id:o},r):null,n||(n=a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("path",{d:"M0,10.57c.1-.31.19-.59.29-.87.18-.55.35-1.1.54-1.64a.49.49,0,0,0,0-.44A5.14,5.14,0,0,1,4.09.16,5.12,5.12,0,0,1,10.37,4a5.12,5.12,0,0,1-4,6.16A5,5,0,0,1,3,9.78a.51.51,0,0,0-.42,0l-2.45.78Zm1.33-1.3c.52-.17,1-.32,1.45-.45a.45.45,0,0,1,.36,0A4.57,4.57,0,0,0,5,9.44,4.3,4.3,0,1,0,1.75,7.51a.35.35,0,0,1,0,.38C1.64,8.33,1.49,8.77,1.33,9.27Z"}),a.createElement("path",{d:"M6.58,7.73a3.9,3.9,0,0,1-1.41-.54A5.28,5.28,0,0,1,2.89,4.54a1.49,1.49,0,0,1,.28-1.67A.74.74,0,0,1,4,2.67a.33.33,0,0,1,.17.18c.12.28.21.58.34.85a.55.55,0,0,1-.11.66c-.32.38-.31.38,0,.79A3.66,3.66,0,0,0,5.77,6.41a.31.31,0,0,0,.45-.08c.07-.09.15-.16.22-.25.26-.3.26-.3.6-.13l.79.42A.29.29,0,0,1,8,6.71C7.94,7.33,7.44,7.73,6.58,7.73Z"})))))}var c=a.forwardRef(o);r.p},77:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(66);var a=r(65);function l(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},79:function(e,t,r){},80:function(e,t,r){}}]);
//# sourceMappingURL=0.0ee7df9a.chunk.js.map