(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{86987:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(15861),s=n(87757),l=n.n(s),o=n(67294),i=n(66468),a=n(36485),c=n(85893);function u(e){var t=e.add,n=e.fetchFunction,s=(0,o.useRef)(null),u=(0,o.useState)(""),f=u[0],h=u[1],d=(0,o.useState)(!1),x=d[0],p=d[1],m=(0,o.useState)(!1),v=m[0],g=m[1],j=null,w=function(e){for(var t=0;t<e.length;t++)if(!e[t].name.includes("."))return!0;return!1},b=function(){var e=(0,r.Z)(l().mark((function e(r){var s,o,a,c,u;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r||!r.length){e.next=23;break}if(!(0,i.u)(r)){e.next=22;break}if(h(""),w(r)){e.next=19;break}if(!n){e.next=14;break}for(p(!0),s=new FormData,o=0;r.length>o;o++)s.append("files",r[o]);return e.next=10,n(s);case 10:null!==(a=e.sent)&&void 0!==a&&a.status?(t(a.data),p(!1)):(h(a.message||"Something went wrong!"),p(!1)),e.next=17;break;case 14:for(c=[],u=0;r.length>u;u++)c.push(r[u]);t(c);case 17:e.next=20;break;case 19:h("Your files have folder!");case 20:e.next=23;break;case 22:h("Your file weight more than 10 MB");case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){e.preventDefault(),e.stopPropagation()};return(0,c.jsxs)("div",{onDrop:function(e){y(e);var t=e.dataTransfer.files;b(t),g(!1)},onDragEnter:function(e){y(e),j=e.target},onDragOver:function(e){y(e),g(!0)},onDragLeave:function(e){j==e.target&&(y(e),g(!1))},className:"p-5 myShadow rounded relative",children:[(0,c.jsx)("input",{type:"file",ref:s,className:"w-0",onChange:function(e){var t=e.currentTarget.files;b(t)},multiple:!0}),(0,c.jsx)("button",{onClick:function(){var e;null===(e=s.current)||void 0===e||e.click()},className:"text-blue-600 hover:text-blue-500 hover:cursor-pointer",children:"Select a file"}),(0,c.jsx)("span",{children:" or drag in form"}),f?(0,c.jsx)("p",{className:"text-red-500 text-sm",children:f}):(0,c.jsx)("p",{className:"text-gray-400 text-sm",children:"PNG, jpg, gif files up to 10 MB in size are available for download"}),v&&(0,c.jsx)("div",{className:"absolute w-full h-full flex items-center justify-center top-0 left-0 bg-white border-2 border-black border-dashed rounded",children:(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"48px",viewBox:"0 0 24 24",width:"48px",fill:"#000000",children:[(0,c.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,c.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})]})}),x&&(0,c.jsx)("div",{className:"absolute left-0 top-0 w-full h-full bg-white bg-opacity-80 flex items-center justify-center",children:(0,c.jsx)(a.Z,{})})]})}},6848:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(15861),s=n(87757),l=n.n(s),o=n(67294),i=n(68428),a=n(8798),c=n(2147);function u(e,t){return fetch(c.z+"/userfiles/"+t+"/"+e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.blob()})).then((function(t){var n=document.createElement("a");n.href=URL.createObjectURL(t),n.setAttribute("download",e),n.click()}))}function f(e){return fetch(c.z+"/files/"+e).then((function(e){return e.blob()})).then((function(t){var n=document.createElement("a");n.href=URL.createObjectURL(t),n.setAttribute("download",e),n.click()}))}var h=n(36485),d=n(85893);function x(e){var t=e.file,n=t.name,s=t.size,c=e.checkIsUserAdmin,x=e.remove,p=e.removeFetchFunction,m=void 0===p?void 0:p,v=(0,o.useContext)(a.UserContext).user,g=v.role,j=v.username,w=(0,o.useState)(!1),b=w[0],y=w[1],N=(0,o.useState)(null),k=N[0],S=N[1],z=(0,i.Z)(s),O=function(){var e=(0,r.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S(null),y(!0),!m){e.next=8;break}return e.next=5,m(n,j);case 5:"OK"===(t=e.sent)?x(n):S(t),y(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.match("/home")){e.next=5;break}return e.next=3,u(n,j);case 3:e.next=7;break;case 5:return e.next=7,f(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,d.jsxs)("div",{className:"relative p-5 myShadow rounded flex items-center",children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("p",{children:[n,(0,d.jsx)("span",{className:"text-gray-400 ml-2",children:z})]}),(!c||"admin"===g)&&(0,d.jsx)("button",{className:"text-blue-600 hover:text-blue-500 hover:cursor-pointer mt-2",onClick:O,children:"Delete a file"}),k&&(0,d.jsx)("p",{className:"text-red-500",children:k})]}),(0,d.jsx)("button",{className:"ml-auto bg-gray-100 hover:bg-gray-200 w-14 h-14 rounded-full flex items-center justify-center hover:cursor-pointer",onClick:C,children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#4158D0",children:[(0,d.jsx)("g",{children:(0,d.jsx)("rect",{fill:"none",height:"24",width:"24"})}),(0,d.jsx)("g",{children:(0,d.jsx)("path",{d:"M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"})})]})}),b&&(0,d.jsx)("div",{className:"absolute left-0 top-0 w-full h-full bg-white bg-opacity-80 flex items-center justify-center",children:(0,d.jsx)(h.Z,{})})]})}function p(e){var t=e.files,n=e.checkIsUserAdmin,r=void 0!==n&&n,s=e.remove,l=e.removeFetchFunction;return(0,d.jsx)("div",{className:"py-16 flex flex-col xl:grid grid-cols-2 gap-9",children:t.map((function(e,t){return(0,d.jsx)(x,{file:e,checkIsUserAdmin:r,remove:s,removeFetchFunction:l},t)}))})}},36485:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(85893);function s(){return(0,r.jsx)("div",{className:"relative animate-spin w-16 h-16 border-8 border-blue-500 rounded-full",children:(0,r.jsx)("div",{className:"absolute top-0 left-1/2 transform -translate-y-full -translate-x-1/2 w-2 h-2 bg-white"})})}},66468:function(e,t,n){"use strict";n.d(t,{u:function(){return r}});var r=function(e){for(var t=0,n=0;n<e.length;n++)t+=e[n].size;return!(t>20971520)}},68428:function(e,t,n){"use strict";function r(e){var t=Math.round(e/1048576),n=Math.round(e/1024);return t?t+" MB":n?n+" KB":e+" B"}n.d(t,{Z:function(){return r}})},95881:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var r=n(15861),s=n(42982),l=n(87757),o=n.n(l),i=n(9008),a=n(67294),c=n(86987),u=n(74140),f=n(8798),h=n(2147),d=n(85893);function x(){var e=(0,a.useState)(""),t=e[0],n=e[1],r=(0,a.useState)([]),l=r[0],o=r[1],i=(0,a.useRef)(null),c=(0,a.useRef)(null),x=(0,a.useContext)(f.UserContext).user,p=(0,a.useState)(null),m=p[0],v=p[1];return(0,a.useEffect)((function(){var e,t;l.length>200&&o(l.slice(1)),null===(e=c.current)||void 0===e||e.scrollTo({top:null===(t=c.current)||void 0===t?void 0:t.scrollHeight,behavior:"smooth"})}),[l]),(0,a.useEffect)((function(){var e=(0,u.io)(h.z,{extraHeaders:{Authorization:"Bearer "+localStorage.getItem("token")},forceNew:!0});return e.on("chat-msg-server",(function(e){o((function(t){return[].concat((0,s.Z)(t),[e])}))})),v(e),function(){e.disconnect()}}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("form",{className:"fixed left-0 top-0 w-full h-full pb-24 hidden xl:flex flex-col justify-end bg-white px-4 xl:pr-0 xl:top-auto xl:static xl:left-auto xl:bottom-0 xl:right-0 xl:h-auto xl:py-0",onSubmit:function(e){e.preventDefault(),t&&(m.emit("chat-msg-client",{msg:t,username:x.username}),n(""))},ref:i,children:[(0,d.jsx)("div",{className:"flex flex-col py-2 gap-2 xl:max-h-96 overflow-auto",ref:c,children:l.map((function(e,t){var n,r=e.msg,s=e.username;return x.username===s?(0,d.jsx)("p",{className:"py-2 px-4 ml-auto bg-blue-600 rounded-3xl max-w-3/4 mr-3 text-white break-words",children:r},t):(0,d.jsxs)("div",{children:[s!==(null===(n=l[t-1])||void 0===n?void 0:n.username)&&(0,d.jsx)("p",{className:"text-gray-500 text-sm",children:s}),(0,d.jsx)("p",{className:"py-2 px-4 bg-white w-max rounded-3xl max-w-3/4 border border-gray-200 break-words",children:r})]},t)}))}),(0,d.jsx)("input",{type:"text",placeholder:"Type here...",className:"w-full rounded outline-none myShadow py-4 px-2 mr-4 xl:mr-0 mt-8",value:t,onChange:function(e){return n(e.target.value)}})]}),(0,d.jsx)("button",{className:"p-5 rounded-full bg-blue-600 fixed bottom-5 right-5 hover:cursor-pointer xl:hidden",onClick:function(){var e,t;null===(e=i.current)||void 0===e||e.classList.toggle("hidden"),null===(t=i.current)||void 0===t||t.classList.toggle("flex");var n=document.body.style.overflow;document.body.style.overflow=n?"":"hidden"},children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#FFFFFF",children:[(0,d.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,d.jsx)("path",{d:"M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"})]})})]})}var p=n(6848),m=n(4942),v=n(19470),g=n.n(v),j=n(66468);function w(e){var t=e.username,n=e.school_class,r=e.topic,s=e.subject_name,l=e.filename,o=e.filecontent;return fetch(h.z+"/sendMail",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({username:t,school_class:n,topic:r,subject_name:s,filename:l,filecontent:o})}).then((function(e){return e.text()}))}var b=n(68428),y=n(42273),N=n(58281),k=n(36485);function S(e){var t=e.file,n=(0,a.useState)(0),r=n[0],s=n[1],l=(0,a.useState)(!1),o=l[0],i=l[1],c=(0,a.useState)(""),u=c[0],f=c[1],h=t.type.startsWith("image/")?URL.createObjectURL(t):void 0,x=t.type.startsWith("application/pdf")?URL.createObjectURL(t):void 0,p=(0,a.useState)(!1),m=p[0],v=p[1],g=function(){var e,n=10240;e=t.size<r+n?t.slice(r,t.size):t.slice(r,r+n);var l=new FileReader;l.onload=function(e){var t;f(u+(null===(t=e.target)||void 0===t?void 0:t.result)),s(r+n),i(!1)},l.onerror=function(){f("There was a problem with file processing. Please load file once again!"),i(!1)},l.readAsText(e)};return(0,a.useEffect)((function(){m&&!u&&(t.type.startsWith("text/")||t.type.startsWith("application/json"))?g():(s(0),f(""),i(!1))}),[m]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:"cursor-pointer",onClick:function(){i(!0),v(!0),document.body.style.overflow="hidden"},children:h?(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"36px",viewBox:"0 0 24 24",width:"36px",fill:"#2563eb",children:[(0,d.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,d.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"})]}):(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"36px",viewBox:"0 0 24 24",width:"36px",fill:"#2563eb",children:[(0,d.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,d.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"})]})}),m&&(0,d.jsxs)("div",{className:"fixed z-40 flex items-center justify-center w-screen h-screen left-0 top-0 bg-white md:p-16 bg-opacity-90 backdrop-brightness-75",children:[(0,d.jsx)("button",{className:"bg-gray-400 text-3xl rounded-full w-10 h-10 absolute right-4 top-4 z-50",onClick:function(){v(!1),document.body.style.overflow="auto"},children:(0,d.jsx)("span",{children:"x"})}),h?(0,d.jsx)("img",{src:h,className:"max-h-full max-w-full"}):x?(0,d.jsx)("iframe",{src:x,className:"w-full h-full"}):o?(0,d.jsx)(k.Z,{}):u?(0,d.jsxs)("div",{className:"overflow-auto max-h-full",onScroll:function(e){var t=e.target;t.scrollHeight-t.offsetHeight<t.scrollTop+80&&g()},children:[(0,d.jsx)(y.Z,{showLineNumbers:!0,style:N.Z,children:u}),r<t.size&&(0,d.jsx)("div",{className:"w-full mx-auto bg-highlight flex justify-center pb-4",children:(0,d.jsx)(k.Z,{})})]}):(0,d.jsx)("p",{children:"Our preview doesn't support this file type"})]})]})}function z(e){var t=e.file,n=e.remove,r=(0,b.Z)(t.size);return(0,d.jsxs)("div",{className:"py-2 pl-2 pr-4 myShadow rounded flex items-center gap-2",children:[(0,d.jsx)(S,{file:t}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"break-all",children:t.name}),(0,d.jsx)("p",{className:"text-gray-400",children:r})]}),(0,d.jsx)("button",{className:"ml-auto bg-gray-100 p-2 rounded-full flex items-center justify-center hover:cursor-pointer hover:bg-gray-200",onClick:function(){return n()},children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"18px",viewBox:"0 0 24 24",width:"18px",fill:"#000000",children:[(0,d.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,d.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})]})})]})}function O(e){var t=e.files,n=e.remove;return(0,d.jsx)("div",{className:"py-2 flex flex-col xl:grid grid-cols-2 gap-3",children:t.map((function(e,t){return(0,d.jsx)(z,{file:e,remove:function(){return n(t)}},t)}))})}var C=n(76035);function Z(e){return fetch(h.z+"/subjects/"+e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.json()}))}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){(0,m.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(){var e=(0,a.useState)(""),t=e[0],n=e[1],l=(0,a.useState)([]),i=l[0],u=l[1],h=(0,a.useState)(null),x=h[0],p=h[1],m=(0,a.useState)(null),v=m[0],b=m[1],y=(0,a.useState)(!1),N=y[0],S=y[1],z=(0,a.useState)(!1),L=z[0],H=z[1],M=(0,a.useState)([]),P=M[0],B=M[1],E=(0,a.useContext)(f.UserContext).user,D=E.username,_=E.school_class,U={option:function(e,t){return F(F({},e),{},{fontWeight:"600",backgroundColor:t.isSelected?"#5975ff":"white",color:t.isSelected?"white":"#4158D0"})}},V=function(){var e=(0,r.Z)(o().mark((function e(){var s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&v&&i.length>0?(S(!0),(s=new FileReader).readAsDataURL(i[0]),s.onload=(0,r.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w({username:D,school_class:_,topic:t,subject_name:v,filename:i[0].name,filecontent:s.result.toString().replace(/^data:(.*,)?/,"")});case 2:"OK"===(r=e.sent)?(H(!0),setTimeout((function(){H(!1)}),5e3),u([]),n(""),p(null),S(!1)):(p(r),S(!1));case 4:case"end":return e.stop()}}),e)})))):p("Title, subject and file are required!");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){!(0,j.u)(i)&&i.length>0?p("Your files weights more than 10 MB!"):p(null)}),[i]),(0,a.useEffect)((function(){(0,r.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(_);case 2:t=e.sent,n=t.map((function(e){return{option:e,label:e}})),B(n);case 5:case"end":return e.stop()}}),e)})))()}),[]),(0,d.jsxs)("div",{className:"relative flex flex-col gap-5",children:[(0,d.jsx)(C.ZP,{placeholder:"Pick subject:",options:P,styles:U,onChange:function(e){return b(e.option)}}),(0,d.jsxs)("div",{className:"w-full h-16 px-5 myShadow flex flex-col justify-center rounded",children:[t&&(0,d.jsx)("p",{className:"text-sm text-gray-400 z-10",children:"Title"}),(0,d.jsx)("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)},placeholder:"Title",className:"outline-none h-8 z-0"})]}),(0,d.jsx)(c.Z,{add:function(e){u([].concat((0,s.Z)(i),(0,s.Z)(e)))}}),i.length>0&&(0,d.jsx)(O,{remove:function(e){u(i.filter((function(t,n){return n!==e})))},files:i}),x&&(0,d.jsx)("p",{className:"text-red-600 text-center",children:x}),(0,d.jsxs)("button",{onClick:V,className:"w-28 xl:ml-auto bg-blue-600 hover:bg-blue-700 text-white rounded-3xl flex px-5 py-3 gap-2",children:[(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#FFFFFF",children:[(0,d.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,d.jsx)("path",{d:"M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z"})]}),(0,d.jsx)("span",{children:"Send"})]}),N&&(0,d.jsx)("div",{className:"absolute left-0 top-0 w-full h-full bg-white bg-opacity-80 flex items-center justify-center",children:(0,d.jsx)(k.Z,{})}),L&&(0,d.jsx)("div",{className:"absolute left-0 top-0 w-full h-full bg-white bg-opacity-80 flex items-center justify-center",children:(0,d.jsx)(g(),{children:(0,d.jsx)("p",{className:"text-xl",children:"Your work has been sent"})})})]})}function M(e){var t=e.name,n=(0,a.useContext)(f.AuthContext).setIsLoggedIn,r=(0,a.useContext)(f.UserContext).setUser;return(0,d.jsxs)("div",{className:"flex justify-end items-center gap-4",children:[(0,d.jsx)("p",{className:"text-blue-600",children:t}),(0,d.jsx)("button",{className:"bg-blue-600 hover:bg-blue-700 p-2 rounded-full",onClick:function(){localStorage.removeItem("token"),n(!1),r(void 0)},children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#ffffff",children:[(0,d.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,d.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})]})})]})}var P=n(11163);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e,t){return fetch(h.z+"/upload/"+t+"/"+e,{method:"DELETE",headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.text()}))}function D(e){return fetch(h.z+"/upload",{method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("token")},body:e}).then((function(e){return e.json()}))}function _(e){return fetch(h.z+"/userfiles/"+e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.json()}))}var U=function(e){return function(t){var n=(0,P.useRouter)(),r=(0,a.useContext)(f.AuthContext).isLoggedIn;return(0,a.useEffect)((function(){r||n.replace("/login")})),r?(0,d.jsx)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,m.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t)):null}}((function(){var e=(0,a.useState)(""),t=e[0],n=e[1],l=(0,a.useState)([]),u=l[0],h=l[1],m=(0,a.useContext)(f.UserContext).user.username;return(0,a.useEffect)((function(){(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(m);case 2:t=e.sent,h(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.default,{children:(0,d.jsx)("title",{children:"Home | Send your work"})}),(0,d.jsxs)("div",{className:"p-7 md:py-14 md:px-12 w-full flex flex-col xl:flex-row min-h-screen",children:[(0,d.jsxs)("div",{className:"order-2 w-full xl:w-4/5 xl:order-none",children:[(0,d.jsxs)("div",{className:"flex flex-col xl:grid grid-cols-2 gap-9",children:[(0,d.jsxs)("div",{className:"myShadow w-full p-5 flex items-center",children:[(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#1111117A",children:[(0,d.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,d.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})]}),(0,d.jsx)("input",{type:"text",value:t,className:"outline-none ml-2 w-full",placeholder:"Search",onChange:function(e){return n(e.target.value)}})]}),(0,d.jsx)(c.Z,{add:function(e){h([].concat((0,s.Z)(e),(0,s.Z)(u)))},fetchFunction:D})]}),(0,d.jsx)(p.Z,{files:u,remove:function(e){h(u.filter((function(t){return t.name!==e})))},removeFetchFunction:E}),(0,d.jsx)("div",{className:"w-full xl:w-5/12",children:(0,d.jsx)(H,{})})]}),(0,d.jsxs)("div",{className:"flex flex-col xl:w-1/5 order-1 mb-5 xl:mb-0 xl:order-none gap-8 xl:min-h-full justify-between",children:[(0,d.jsx)(M,{name:m}),(0,d.jsx)(x,{})]})]})]})}))},91344:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return n(95881)}])}},function(e){e.O(0,[774,176,38,74,888,179],(function(){return t=91344,e(e.s=t);var t}));var t=e.O();_N_E=t}]);