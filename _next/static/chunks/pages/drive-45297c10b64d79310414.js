(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[232],{86987:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(15861),c=n(87757),o=n.n(c),a=n(67294),s=n(66468),i=n(36485),u=n(85893);function l(e){var t=e.add,n=e.fetchFunction,c=e.customMaxSize,l=(0,a.useRef)(null),f=(0,a.useState)(""),h=f[0],d=f[1],p=(0,a.useState)(!1),x=p[0],v=p[1],m=(0,a.useState)(!1),b=m[0],g=m[1],j=null,w=function(e){for(var t=0;t<e.length;t++)if(!e[t].name.includes("."))return!0;return!1},y=function(){var e=(0,r.Z)(o().mark((function e(r){var a,i,u,l,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r||!r.length){e.next=23;break}if(!(0,s.u)(r,c)){e.next=22;break}if(d(""),w(r)){e.next=19;break}if(!n){e.next=14;break}for(v(!0),a=new FormData,i=0;r.length>i;i++)a.append("files",r[i]);return e.next=10,n(a);case 10:null!==(u=e.sent)&&void 0!==u&&u.status?(t(u.data),v(!1)):(d(u.message||"Something went wrong!"),v(!1)),e.next=17;break;case 14:for(l=[],f=0;r.length>f;f++)l.push(r[f]);t(l);case 17:e.next=20;break;case 19:d("Your files have folder!");case 20:e.next=23;break;case 22:d("Your file weight more than ".concat(c||20," MB"));case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){e.preventDefault(),e.stopPropagation()};return(0,u.jsxs)("div",{onDrop:function(e){k(e);var t=e.dataTransfer.files;y(t),g(!1)},onDragEnter:function(e){k(e),j=e.target},onDragOver:function(e){k(e),g(!0)},onDragLeave:function(e){j==e.target&&(k(e),g(!1))},className:"p-5 myShadow rounded relative",children:[(0,u.jsx)("input",{type:"file",ref:l,className:"w-0",onChange:function(e){var t=e.currentTarget.files;y(t)},multiple:!0}),(0,u.jsx)("button",{onClick:function(){var e;null===(e=l.current)||void 0===e||e.click()},className:"text-blue-600 hover:text-blue-500 hover:cursor-pointer",children:"Select a file"}),(0,u.jsx)("span",{children:" or drag in form"}),h?(0,u.jsx)("p",{className:"text-red-500 text-sm",children:h}):(0,u.jsxs)("p",{className:"text-gray-400 text-sm",children:["PNG, jpg, gif files up to ",c||20," MB in size are available for download"]}),b&&(0,u.jsx)("div",{className:"absolute w-full h-full flex items-center justify-center top-0 left-0 bg-white border-2 border-black border-dashed rounded",children:(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"48px",viewBox:"0 0 24 24",width:"48px",fill:"#000000",children:[(0,u.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,u.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})]})}),x&&(0,u.jsx)("div",{className:"absolute left-0 top-0 w-full h-full bg-white bg-opacity-80 flex items-center justify-center",children:(0,u.jsx)(i.Z,{})})]})}},48048:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(15861),c=n(87757),o=n.n(c),a=n(67294),s=n(68428),i=n(8798),u=n(2147);function l(e,t){return fetch(u.z+"/userfiles/"+t+"/"+e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.blob()})).then((function(t){var n=document.createElement("a");n.href=URL.createObjectURL(t),n.setAttribute("download",e),n.click()}))}function f(e,t,n){return fetch("".concat(u.z,"/files/").concat(t,"/").concat(n,"/").concat(e),{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.blob()})).then((function(t){var n=document.createElement("a");n.href=URL.createObjectURL(t),n.setAttribute("download",e),n.click()}))}var h=n(36485),d=n(85893);function p(e){var t=e.file,n=t.name,c=t.size,u=e.checkIsUserAdmin,p=e.subject,x=e.remove,v=e.removeFetchFunction,m=(0,a.useContext)(i.UserContext).user,b=m.role,g=m.username,j=m.school_class,w=(0,a.useState)(!1),y=w[0],k=w[1],O=(0,a.useState)(null),N=O[0],S=O[1],Z=(0,s.Z)(c),P=function(){var e=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S(null),k(!0),!v){e.next=8;break}return e.next=5,v(n);case 5:"OK"===(t=e.sent)?x(n):S(t),k(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.match("/home")){e.next=5;break}return e.next=3,l(n,g);case 3:e.next=7;break;case 5:return e.next=7,f(n,j,p);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,d.jsxs)("div",{className:"relative p-5 myShadow rounded flex items-center",children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("p",{children:[n,(0,d.jsx)("span",{className:"text-gray-400 ml-2",children:Z})]}),(!u||"admin"===b)&&(0,d.jsx)("button",{className:"text-blue-600 hover:text-blue-500 hover:cursor-pointer mt-2",onClick:P,children:"Delete a file"}),N&&(0,d.jsx)("p",{className:"text-red-500",children:N})]}),(0,d.jsx)("button",{className:"ml-auto bg-gray-100 hover:bg-gray-200 w-14 h-14 rounded-full flex items-center justify-center hover:cursor-pointer",onClick:z,children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#4158D0",children:[(0,d.jsx)("g",{children:(0,d.jsx)("rect",{fill:"none",height:"24",width:"24"})}),(0,d.jsx)("g",{children:(0,d.jsx)("path",{d:"M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"})})]})}),y&&(0,d.jsx)("div",{className:"absolute left-0 top-0 w-full h-full bg-white bg-opacity-80 flex items-center justify-center",children:(0,d.jsx)(h.Z,{})})]})}function x(e){var t=e.files,n=e.subject,r=e.checkIsUserAdmin,c=void 0!==r&&r,o=e.remove,a=e.removeFetchFunction;return(0,d.jsx)("div",{className:"flex flex-col xl:grid grid-cols-2 gap-3 lg:gap-9 py-3",children:t.map((function(e,t){return(0,d.jsx)(p,{file:e,subject:n,checkIsUserAdmin:c,remove:o,removeFetchFunction:a},t)}))})}},36485:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(85893);function c(){return(0,r.jsx)("div",{className:"relative animate-spin w-16 h-16 border-8 border-blue-500 rounded-full",children:(0,r.jsx)("div",{className:"absolute top-0 left-1/2 transform -translate-y-full -translate-x-1/2 w-2 h-2 bg-white"})})}},34433:function(e,t,n){"use strict";var r=n(4942),c=n(67294),o=n(8798),a=n(11163),s=n(85893);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.Z=function(e){return function(t){var n=(0,a.useRouter)(),u=(0,c.useContext)(o.AuthContext).isLoggedIn;return(0,c.useEffect)((function(){u||n.replace("/login")})),u?(0,s.jsx)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t)):null}}},66468:function(e,t,n){"use strict";n.d(t,{u:function(){return r}});var r=function(e,t){for(var n=0,r=1048576*(t||20),c=0;c<e.length;c++)n+=e[c].size;return!(n>r)}},68428:function(e,t,n){"use strict";function r(e){var t=Math.round(e/1048576),n=Math.round(e/1024);return t?t+" MB":n?n+" KB":e+" B"}n.d(t,{Z:function(){return r}})},73010:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(15861),c=n(42982),o=n(4942),a=n(87757),s=n.n(a),i=n(9008),u=n(67294),l=n(86987),f=n(48048),h=n(2147);var d=n(76035),p=n(8798),x=n(94741);function v(e,t){return fetch("".concat(h.z,"/files/").concat(e,"/").concat(t),{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.json();case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",t);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}var m=n(34433);var b=n(85893);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=(0,m.Z)((function(){var e={option:function(e,t){return j(j({},e),{},{fontWeight:"600",backgroundColor:t.isSelected?"#5975ff":"white",color:t.isSelected?"white":"#4158D0"})}},t=(0,u.useState)([]),n=t[0],o=t[1],a=(0,u.useState)(null),m=a[0],g=a[1],w=(0,u.useState)([]),y=w[0],k=w[1],O=(0,u.useContext)(p.UserContext).user.school_class;return(0,u.useEffect)((function(){(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.Z)(O);case 2:t=e.sent,o(t.map((function(e){return{value:e,label:e}}))),g(t[0]||null);case 5:case"end":return e.stop()}}),e)})))()}),[]),(0,u.useEffect)((function(){m&&(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(O,m);case 2:(t=e.sent).length&&t.length>0&&"string"!==typeof t?k(t):k([]);case 4:case"end":return e.stop()}}),e)})))()}),[m]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.default,{children:(0,b.jsx)("title",{children:"Public drive | Send Your Work"})}),(0,b.jsxs)("div",{className:"p-6 xl:py-14 xl:px-12 w-full xl:w-3/4 ",children:[(0,b.jsxs)("h3",{className:"text-center xl:text-left text-5xl font-bold",children:["Send",(0,b.jsx)("span",{className:"text-main",children:"Your"}),"Work | ",m]}),(0,b.jsxs)("div",{className:"xl:w-1/3 py-4",children:[(0,b.jsxs)("h1",{className:"my-5 text-4xl font-bold pb-3",children:["Drives:",(0,b.jsx)("span",{className:"text-main"})]}),(0,b.jsx)(d.ZP,{options:n,onChange:function(e){return g(e.value)},placeholder:m,styles:e})]}),(0,b.jsx)("div",{className:"xl:grid grid-cols-2 gap-9 xl:pt-2 xl:pb-6",children:(0,b.jsx)(l.Z,{add:function(e){k([].concat((0,c.Z)(e),(0,c.Z)(y)))},fetchFunction:function(e){return function(e,t,n){return fetch("".concat(h.z,"/files/").concat(t,"/").concat(n),{method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("token")},body:e}).then((function(e){return e.json()}))}(e,O,m)}})}),(0,b.jsx)("div",{children:(0,b.jsx)(f.Z,{files:y,remove:function(e){k(y.filter((function(t){return t.name!==e})))},removeFetchFunction:function(e){return function(e,t,n){return fetch("".concat(h.z,"/files/").concat(t,"/").concat(n,"/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.text()}))}(e,O,m)},subject:m,checkIsUserAdmin:!0})})]})]})}))},94741:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(2147);function c(e){return fetch(r.z+"/subjects/"+e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.json()}))}},18592:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/drive",function(){return n(73010)}])}},function(e){e.O(0,[943,774,888,179],(function(){return t=18592,e(e.s=t);var t}));var t=e.O();_N_E=t}]);