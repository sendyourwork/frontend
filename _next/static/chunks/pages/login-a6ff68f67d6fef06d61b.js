(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{36405:function(e,t,n){"use strict";var r=n(92809),s=n(67294),a=n(11163),i=n(7097),o=n(85893);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.Z=function(e){return function(t){var n=(0,a.useRouter)(),c=(0,i.a)().user.isLoggedIn;return(0,s.useEffect)((function(){c&&n.replace("/home")})),c?null:(0,o.jsx)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t))}}},60671:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(85893);function s(){return(0,r.jsx)("div",{className:"relative animate-spin w-16 h-16 border-8 border-blue-500 rounded-full",children:(0,r.jsx)("div",{className:"absolute top-0 left-1/2 transform -translate-y-full -translate-x-1/2 w-2 h-2 bg-white"})})}},8024:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(9008),s=n(1852),a=n(67294),i=n(92592),o=n(60671),u=n(85893);function c(e){var t=e.text,n=(0,a.useRef)(null),r=(0,a.useState)(null),s=r[0],c=r[1];return(0,a.useEffect)((function(){t&&i.toCanvas(n.current,t,{width:250,margin:0},(function(e){c(e)}))}),[t]),t?s?(0,u.jsx)("p",{className:"text-red-500",children:"Something went wrong! Try logging in manually."}):(0,u.jsx)("canvas",{ref:n,className:"mb-5 h-auto block"}):(0,u.jsx)(o.Z,{})}var l=n(30266),d=n(809),f=n.n(d),m=n(53215);function h(e,t){return fetch(m.z+"/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()}))}var x=n(41664),p=n(7097);function g(){var e=(0,a.useRef)(null),t=(0,a.useState)(""),n=t[0],r=t[1],s=(0,a.useState)(""),i=s[0],o=s[1],c=(0,a.useState)(null),d=c[0],m=c[1],g=(0,p.a)().logIn,b=function(){var e=(0,l.Z)(f().mark((function e(t){var r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!n||!i){e.next=6;break}return e.next=4,h(n,i);case 4:(r=e.sent).errors&&r?m(r?r.errors[0].param+": "+r.errors[0].msg:"Something went wrong!"):g(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){var t,r;n&&i?null===(t=e.current)||void 0===t||t.removeAttribute("disabled"):null===(r=e.current)||void 0===r||r.setAttribute("disabled","disabled")}),[n,i]),(0,u.jsxs)("form",{className:"relative flex flex-col w-96 rounded-xl myShadow z-10 bg-white",onSubmit:b,children:[(0,u.jsx)("h1",{className:"mx-5 mt-5 text-4xl font-bold pb-3",children:"Profile"}),(0,u.jsx)("h4",{className:"mx-5 w-12 text-center inline-block border-b-2 border-main pb-1",children:"Sign in"}),(0,u.jsxs)("div",{className:"flex flex-col py-5 items-center border-t border-gray-300",children:[(0,u.jsx)("input",{className:"focus:outline-none focus:myShadowActive myShadow rounded w-10/12 h-12 my-2 py-2 pl-3.5",placeholder:"Username",type:"text",value:n,onChange:function(e){return r(e.currentTarget.value)}}),(0,u.jsx)("input",{className:"focus:outline-none focus:myShadowActive rounded w-10/12 h-12 m-2 py-2 pl-3.5 myShadow",placeholder:"Password",type:"password",value:i,onChange:function(e){return o(e.currentTarget.value)}}),d&&(0,u.jsx)("p",{className:"text-red-500 font-medium text-center",children:d})]}),(0,u.jsx)("input",{className:"bg-main rounded text-white mt-5 mx-12 h-10 disabled:cursor-default cursor-pointer disabled:bg-gray-300",type:"submit",value:"Sign in",ref:e}),(0,u.jsx)(x.default,{href:"/register",children:(0,u.jsx)("span",{className:"cursor-pointer text-center text-main mt-6 mb-8 w-max mx-auto",children:"Don\u2019t have account? Sign up!"})})]})}var b=n(36405),v=n(74140),w=(0,b.Z)((function(){var e,t,n,i,o=(0,a.useState)(null),l=o[0],d=o[1],f=(0,p.a)().logIn,h=(0,s.useMediaQuery)({query:"(max-width: 768px)"}),b=(0,s.useMediaQuery)({query:"(max-width: 1440px)"}),w=(0,a.useRef)(null);return b?null===(e=w.current)||void 0===e||e.classList.add("left-12"):null===(t=w.current)||void 0===t||t.classList.remove("left-12"),b?null===(n=w.current)||void 0===n||n.classList.add("w-3/5"):null===(i=w.current)||void 0===i||i.classList.remove("w-3/5"),(0,a.useEffect)((function(){var e=(0,v.io)(m.z+"/qr");return e.on("sID",(function(e){var t=e.id;d(t)})),e.on("user",(function(e){f(e)})),function(){e.disconnect()}}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(r.default,{children:[(0,u.jsx)("title",{children:"Login | Send Your Work"}),(0,u.jsx)("meta",{name:"description",content:"Generated by create next app"})]}),(0,u.jsxs)("div",{className:"flex h-screen items-center justify-around relative",children:[(0,u.jsx)("img",{src:"/images/Rectangle93.svg",className:"absolute z-0 left-1/2 bottom-20"}),(0,u.jsx)("img",{src:"/images/Rectangle 103.svg",className:"absolute z-0  left-36 w-2/5",ref:w}),(0,u.jsx)("img",{src:"/images/Rectangle94.svg",className:"absolute z-0 right-52 w-20 top-20"}),(0,u.jsx)("img",{src:"/images/Half-circle.svg",alt:"",className:"absolute right-0 bottom-0 w-2/12"}),(0,u.jsx)(x.default,{href:"/",children:(0,u.jsx)("img",{src:"/images/close.svg",className:"cursor-pointer absolute right-10 top-10"})}),(0,u.jsx)(g,{}),!h&&(0,u.jsxs)("div",{className:"flex flex-col h-5/12 w-auto bg-white items-center justify-between rounded-xl myShadow pb-2",children:[(0,u.jsx)("h1",{className:"text-4xl font-bold m-5",children:"Sign in with QR"}),(0,u.jsx)(c,{text:l})]})]})]})}))},87237:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(8024)}])}},function(e){e.O(0,[434,140,298,774,888,179],(function(){return t=87237,e(e.s=t);var t}));var t=e.O();_N_E=t}]);