(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{37279:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(30266),s=n(11508),l=n(809),a=n.n(l),o=n(9008),c=n(67294),i=n(44490),u=n(92809),f=n(74140),h=n(53215);var x=n(7097),d=n(85893);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(){var e=(0,c.useState)(""),t=e[0],n=e[1],l=(0,c.useState)([]),o=l[0],i=l[1],u=(0,c.useRef)(null),p=(0,c.useRef)(null),v=(0,x.a)().user,g=(0,c.useState)(null),w=g[0],j=g[1];return(0,c.useEffect)((function(){var e,t;null===(e=p.current)||void 0===e||e.scrollTo({top:null===(t=p.current)||void 0===t?void 0:t.scrollHeight,behavior:"smooth"})}),[o]),(0,c.useEffect)((function(){(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=v.school_class,fetch("".concat(h.z,"/chat/").concat(n),{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.json()}));case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}var n}),e)})))();var e=(0,f.io)(h.z,{extraHeaders:{Authorization:"Bearer "+localStorage.getItem("token")},forceNew:!0});return e.on("chat-msg-server",(function(e){i((function(t){return[].concat((0,s.Z)(t),[m(m({},e),{},{type:"userMessage"})])}))})),e.on("chat-msg-server-system",(function(e){i((function(t){return[].concat((0,s.Z)(t),[m(m({},e),{},{type:"systemMessage"})])}))})),j(e),function(){e.disconnect()}}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("form",{className:"xl:max-h-3/4 z-30 fixed left-0 top-0 w-full h-full pb-24 hidden xl:flex flex-col justify-end bg-white px-4 xl:pr-0 xl:top-auto xl:static xl:left-auto xl:bottom-0 xl:right-0 xl:h-auto xl:py-0",onSubmit:function(e){e.preventDefault(),t&&(w.emit("chat-msg-client",{msg:t,username:v.username}),n(""))},ref:u,children:[(0,d.jsx)("div",{className:"flex flex-col py-2 gap-2 overflow-auto",ref:p,children:o.map((function(e,t){var n,r=e.type,s=e.msg,l=e.username;return"systemMessage"===r?(0,d.jsx)("p",{className:"py-2 px-4 text-sm rounded-3xl text-center text-gray-400 break-words",children:s},t):v.username===l?(0,d.jsx)("p",{className:"py-2 px-4 ml-auto bg-blue-600 rounded-3xl max-w-3/4 mr-3 text-white break-words",children:s},t):(0,d.jsxs)("div",{children:[l!==(null===(n=o[t-1])||void 0===n?void 0:n.username)&&(0,d.jsx)("p",{className:"text-gray-500 text-sm",children:l}),(0,d.jsx)("p",{className:"py-2 px-4 bg-white w-max rounded-3xl max-w-3/4 border border-gray-200 break-words",children:s})]},t)}))}),(0,d.jsxs)("div",{className:"w-full myShadow py-4 px-2 mr-4 xl:mr-0 mt-8 flex justify-between gap-2",children:[(0,d.jsx)("input",{type:"text",placeholder:"Type here...",className:"outline-none w-full",value:t,onChange:function(e){return n(e.target.value)}}),(0,d.jsx)("button",{type:"submit",children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#4158D0",children:[(0,d.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,d.jsx)("path",{d:"M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z"})]})})]})]}),(0,d.jsx)("button",{className:"p-3 rounded-full bg-blue-600 fixed bottom-5 right-5 hover:cursor-pointer xl:hidden z-30",onClick:function(){var e,t;null===(e=u.current)||void 0===e||e.classList.toggle("hidden"),null===(t=u.current)||void 0===t||t.classList.toggle("flex");var n=document.body.style.overflow;document.body.style.overflow=n?"":"hidden"},children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#FFFFFF",children:[(0,d.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,d.jsx)("path",{d:"M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"})]})})]})}var g=n(60718),w=n(19470),j=n.n(w),b=n(50853);function y(e){var t=e.username,n=e.school_class,r=e.topic,s=e.subject_name,l=e.data;return fetch(h.z+"/sendMail",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({username:t,school_class:n,topic:r,subject_name:s,data:l})}).then((function(e){return e.text()}))}var N=n(60493),z=n(42273),O=n(58281),S=n(60671);function k(e){var t=e.file,n=(0,c.useState)(0),r=n[0],s=n[1],l=(0,c.useState)(!1),a=l[0],o=l[1],i=(0,c.useState)(""),u=i[0],f=i[1],h=t.type.startsWith("image/")?URL.createObjectURL(t):void 0,x=t.type.startsWith("application/pdf")?URL.createObjectURL(t):void 0,p=(0,c.useState)(!1),m=p[0],v=p[1],g=function(){var e,n=10240;e=t.size<r+n?t.slice(r,t.size):t.slice(r,r+n);var l=new FileReader;l.onload=function(e){var t;f(u+(null===(t=e.target)||void 0===t?void 0:t.result)),s(r+n),o(!1)},l.onerror=function(){f("There was a problem with file processing. Please load file once again!"),o(!1)},l.readAsText(e)};return(0,c.useEffect)((function(){m&&!u&&(t.type.startsWith("text/")||t.type.startsWith("application/json"))?g():(s(0),f(""),o(!1))}),[m]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:"cursor-pointer",onClick:function(){o(!0),v(!0),document.body.style.overflow="hidden"},children:h?(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"36px",viewBox:"0 0 24 24",width:"36px",fill:"#2563eb",children:[(0,d.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,d.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"})]}):(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"36px",viewBox:"0 0 24 24",width:"36px",fill:"#2563eb",children:[(0,d.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,d.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"})]})}),m&&(0,d.jsxs)("div",{className:"fixed z-40 flex items-center justify-center w-screen h-screen left-0 top-0 bg-white md:p-16 bg-opacity-90 backdrop-brightness-75",children:[(0,d.jsx)("button",{className:"bg-blue-600 hover:bg-blue-700 flex justify-center items-center text-3xl rounded-full w-10 h-10 absolute right-9 top-7 z-50",onClick:function(){v(!1),document.body.style.overflow="auto"},children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#ffffff",children:[(0,d.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,d.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})]})}),h?(0,d.jsx)("img",{src:h,className:"max-h-full max-w-full"}):x?(0,d.jsx)("iframe",{src:x,className:"w-full h-full"}):a?(0,d.jsx)(S.Z,{}):u?(0,d.jsxs)("div",{className:"overflow-auto max-h-full",onScroll:function(e){var t=e.target;t.scrollHeight-t.offsetHeight<t.scrollTop+80&&g()},children:[(0,d.jsx)(z.Z,{showLineNumbers:!0,style:O.Z,children:u}),r<t.size&&(0,d.jsx)("div",{className:"w-full mx-auto bg-highlight flex justify-center pb-4",children:(0,d.jsx)(S.Z,{})})]}):(0,d.jsx)("p",{children:"Our preview doesn't support this file type"})]})]})}function M(e){var t=e.file,n=e.remove,r=(0,N.Z)(t.size);return(0,d.jsxs)("div",{className:"py-2 pl-2 pr-4 myShadow rounded flex items-center gap-2",children:[(0,d.jsx)(k,{file:t}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"break-all",children:t.name}),(0,d.jsx)("p",{className:"text-gray-400",children:r})]}),(0,d.jsx)("button",{className:"ml-auto bg-gray-100 p-2 rounded-full flex items-center justify-center hover:cursor-pointer hover:bg-gray-200",onClick:function(){return n()},children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"18px",viewBox:"0 0 24 24",width:"18px",fill:"#000000",children:[(0,d.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,d.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})]})})]})}function Z(e){var t=e.files,n=e.remove;return(0,d.jsx)("div",{className:"py-2 flex flex-col xl:grid grid-cols-2 gap-3",children:t.map((function(e,t){return(0,d.jsx)(M,{file:e,remove:function(){return n(t)}},t)}))})}var H=n(76035),L=n(28429);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(){var e=(0,c.useState)(""),t=e[0],n=e[1],l=(0,c.useState)([]),o=l[0],u=l[1],f=(0,c.useState)(null),h=f[0],p=f[1],m=(0,c.useState)(null),v=m[0],g=m[1],w=(0,c.useState)(!1),N=w[0],z=w[1],O=(0,c.useState)(!1),k=O[0],M=O[1],P=(0,c.useState)([]),_=P[0],E=P[1],C=(0,x.a)().user,V=C.username,B=C.school_class,T={option:function(e,t){return F(F({},e),{},{fontWeight:"600",backgroundColor:t.isSelected?"#4158D0":"white",color:t.isSelected?"white":"#4158D0"})}},D=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t&&v&&o.length>0)){e.next=4;break}return e.delegateYield(a().mark((function e(){var s,l,c,i,f;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:z(!0),s=[],l=a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,n){var l=new FileReader;l.readAsDataURL(o[t]),l.onload=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.push({filename:o[t].name,content:l.result.toString().replace(/^data:(.*,)?/,"")}),e("OK");case 2:case"end":return n.stop()}}),n)}))),l.onerror=function(e){n(e)}}));case 2:case"end":return e.stop()}}),e)})),c=0;case 4:if(!(c<o.length)){e.next=9;break}return e.delegateYield(l(c),"t0",6);case 6:c++,e.next=4;break;case 9:return e.next=11,y({username:V,school_class:B,topic:t,subject_name:v,data:s});case 11:if("OK"===(i=e.sent))M(!0),setTimeout((function(){M(!1)}),5e3),u([]),n(""),p(null),z(!1);else{try{f=JSON.parse(i),p(f.errors[0].param+": "+f.errors[0].msg)}catch(h){p(i)}z(!1)}case 13:case"end":return e.stop()}}),e)}))(),"t0",2);case 2:e.next=5;break;case 4:p("Title, subject and file are required!");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){!(0,b.u)(o,50)&&o.length>0?p("Your files weights more than ".concat(50," MB!")):p(null)}),[o]),(0,c.useEffect)((function(){(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,L.Z)(B);case 2:t=e.sent,n=t.map((function(e){return{option:e,label:e}})),E(n),g(t[0]);case 6:case"end":return e.stop()}}),e)})))()}),[]),(0,d.jsxs)("div",{className:"relative flex flex-col gap-5",children:[(0,d.jsx)(H.ZP,{options:_,placeholder:v,styles:T,onChange:function(e){return g(e.option)},className:"z-20"}),(0,d.jsxs)("div",{className:"w-full h-16 px-5 myShadow flex flex-col justify-center rounded",children:[t&&(0,d.jsx)("p",{className:"text-sm text-gray-400 z-10",children:"Title"}),(0,d.jsx)("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)},placeholder:"Title",className:"outline-none h-8 z-0"})]}),(0,d.jsx)(i.Z,{add:function(e){u([].concat((0,s.Z)(o),(0,s.Z)(e)))},customMaxSize:50}),o.length>0&&(0,d.jsx)(Z,{remove:function(e){u(o.filter((function(t,n){return n!==e})))},files:o}),h&&(0,d.jsx)("p",{className:"text-red-600 text-center",children:h}),(0,d.jsxs)("button",{onClick:D,className:"w-28 xl:ml-auto bg-blue-600 hover:bg-blue-700 text-white rounded-3xl flex px-5 py-3 gap-2 mb-2",children:[(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#FFFFFF",children:[(0,d.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,d.jsx)("path",{d:"M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z"})]}),(0,d.jsx)("span",{children:"Send"})]}),N&&(0,d.jsx)("div",{className:"absolute left-0 top-0 w-full h-full bg-white bg-opacity-80 flex items-center justify-center",children:(0,d.jsx)(S.Z,{})}),k&&(0,d.jsx)("div",{className:"absolute left-0 top-0 w-full h-full bg-white bg-opacity-80 flex items-center justify-center",children:(0,d.jsx)(j(),{children:(0,d.jsx)("p",{className:"text-xl",children:"Your work has been sent"})})})]})}var E=n(41664);function C(e){var t=e.name,n=(0,x.a)().logOut;return(0,d.jsxs)("div",{className:"flex justify-between items-center gap-4",children:[(0,d.jsx)("p",{className:"text-blue-600 px-3",children:t}),(0,d.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,d.jsx)(E.default,{href:"/drive",children:(0,d.jsx)("img",{src:"/images/drive.svg",className:"w-8 cursor-pointer"})}),(0,d.jsx)("button",{className:"bg-blue-600 hover:bg-blue-700 p-2 rounded-full",onClick:n,children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#ffffff",children:[(0,d.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,d.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})]})})]})]})}function V(e){return fetch(h.z+"/userfiles",{method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("token")},body:e}).then((function(e){return e.json()}))}function B(e){return fetch(h.z+"/userfiles/"+e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.json()}))}function T(e){var t=e.value,n=e.onChange;return(0,d.jsxs)("div",{className:"myShadow w-full p-5 flex items-center xl:w-1/2",children:[(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#1111117A",children:[(0,d.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,d.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})]}),(0,d.jsx)("input",{type:"text",value:t,className:"outline-none ml-2 max-w-full",placeholder:"Search",onChange:function(e){return n(e.target.value)}})]})}var D=(0,n(84361).Z)((function(){var e=(0,c.useState)(""),t=e[0],n=e[1],l=(0,c.useState)([]),u=l[0],f=l[1],p=(0,c.useState)([]),m=p[0],w=p[1],j=(0,x.a)().user.username;return(0,c.useEffect)((function(){(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(j);case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),(0,c.useEffect)((function(){w(u.filter((function(e){return e.name.match(t)})))}),[t,u]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.default,{children:(0,d.jsx)("title",{children:"Home | Send your work"})}),(0,d.jsxs)("div",{className:"p-3 py-6 md:py-14 md:px-9 w-full flex flex-col xl:flex-row max-h-screen",children:[(0,d.jsxs)("div",{className:"order-2 w-full xl:w-4/5 xl:order-none",children:[(0,d.jsxs)("div",{className:"flex flex-col px-3 gap-9 xl:flex-row",children:[(0,d.jsx)(T,{value:t,onChange:n}),(0,d.jsx)("div",{className:"xl:w-1/2",children:(0,d.jsx)(i.Z,{add:function(e){f([].concat((0,s.Z)(e),(0,s.Z)(u)))},fetchFunction:V})})]}),(0,d.jsx)("div",{className:"mt-16 mb-8 max-h-96 overflow-y-scroll px-3",children:(0,d.jsx)(g.Z,{files:m,remove:function(e){f(u.filter((function(t){return t.name!==e})))},removeFetchFunction:function(e){return function(e,t){return fetch(h.z+"/userfiles/"+t+"/"+e,{method:"DELETE",headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.text()}))}(e,j)}})}),(0,d.jsx)("div",{className:"pl-3 w-full xl:w-5/12",children:(0,d.jsx)(_,{})})]}),(0,d.jsxs)("div",{className:"xl:p-7 xl:fixed right-0 top-0 flex flex-col xl:w-1/5 order-1 mb-5 mr-2 xl:mb-0 xl:order-none gap-8 xl:min-h-full justify-between",children:[(0,d.jsx)(C,{name:j}),(0,d.jsx)(v,{})]})]})]})}))},91344:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return n(37279)}])}},function(e){e.O(0,[774,727,140,753,14,888,179],(function(){return t=91344,e(e.s=t);var t}));var t=e.O();_N_E=t}]);