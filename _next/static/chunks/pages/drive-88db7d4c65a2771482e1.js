(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[232],{96177:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(30266),c=n(11508),o=n(92809),s=n(809),a=n.n(s),i=n(9008),l=n(41664),u=n(67294),f=n(44490),h=n(67667),d=n(53215);var p=n(76035),x=n(98406);function v(e,t){return fetch("".concat(d.z,"/files/").concat(e,"/").concat(t),{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.json();case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",t);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}var j=n(84361);var m=n(1852),w=n(7097),b=n(85893);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=(0,j.Z)((function(){var e=(0,m.useMediaQuery)({query:"(max-width: 768px)"}),t={option:function(e,t){return y(y({},e),{},{fontWeight:"600",backgroundColor:t.isSelected?"#5975ff":"white",color:t.isSelected?"white":"#4158D0"})}},n=(0,u.useState)([]),o=n[0],s=n[1],j=(0,u.useState)(null),g=j[0],O=j[1],N=(0,u.useState)([]),k=N[0],P=N[1],S=(0,w.a)().user.school_class;return(0,u.useEffect)((function(){(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.Z)(S);case 2:t=e.sent,s(t.map((function(e){return{value:e,label:e}}))),O(t[0]||null);case 5:case"end":return e.stop()}}),e)})))()}),[]),(0,u.useEffect)((function(){g&&(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(S,g);case 2:(t=e.sent).length&&t.length>0&&"string"!==typeof t?P(t):P([]);case 4:case"end":return e.stop()}}),e)})))()}),[g]),(0,b.jsxs)("div",{className:"flex",children:[(0,b.jsx)(i.default,{children:(0,b.jsx)("title",{children:"Public drive | Send Your Work"})}),(0,b.jsxs)("div",{className:"p-6 px-5 xl:py-14 xl:px-12 w-full xl:w-3/4 ",children:[e&&(0,b.jsx)("div",{className:"xl:p-6 xl:pr-8 ml-auto w-max",children:(0,b.jsx)("div",{className:"bg-blue-600 hover:bg-blue-700 p-2 rounded-full cursor-pointer",children:(0,b.jsx)(l.default,{href:"/home",children:(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#ffffff",children:[(0,b.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,b.jsx)("path",{d:"M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"})]})})})}),(0,b.jsxs)("h3",{className:"text-center xl:text-left text-5xl font-bold mt-6",children:["Send",(0,b.jsx)("span",{className:"text-main",children:"Your"}),"Work | ",g]}),(0,b.jsxs)("div",{className:"xl:w-1/3 py-4",children:[(0,b.jsxs)("h1",{className:"my-5 text-4xl font-bold pb-3",children:["Drives:",(0,b.jsx)("span",{className:"text-main"})]}),(0,b.jsx)(p.ZP,{options:o,onChange:function(e){return O(e.value)},placeholder:g,styles:t})]}),(0,b.jsx)("div",{className:"xl:grid grid-cols-2 gap-9 xl:pt-2 xl:pb-6",children:(0,b.jsx)(f.Z,{add:function(e){P([].concat((0,c.Z)(e),(0,c.Z)(k)))},fetchFunction:function(e){return function(e,t,n){return fetch("".concat(d.z,"/files/").concat(t,"/").concat(n),{method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("token")},body:e}).then((function(e){return e.json()}))}(e,S,g)}})}),(0,b.jsx)("div",{children:(0,b.jsx)(h.Z,{files:k,remove:function(e){P(k.filter((function(t){return t.name!==e})))},removeFetchFunction:function(e){return function(e,t,n){return fetch("".concat(d.z,"/files/").concat(t,"/").concat(n,"/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.text()}))}(e,S,g)},subject:g,checkIsUserAdmin:!0})})]}),!e&&(0,b.jsx)("div",{className:"xl:p-7 xl:pr-9 ml-auto w-max",children:(0,b.jsx)("div",{className:"bg-blue-600 hover:bg-blue-700 p-2 rounded-full cursor-pointer",children:(0,b.jsx)(l.default,{href:"/home",children:(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#ffffff",children:[(0,b.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,b.jsx)("path",{d:"M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"})]})})})})]})}))},18592:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/drive",function(){return n(96177)}])}},function(e){e.O(0,[434,727,379,774,888,179],(function(){return t=18592,e(e.s=t);var t}));var t=e.O();_N_E=t}]);