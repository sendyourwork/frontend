(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[232],{6987:function(e,n,r){"use strict";r.d(n,{Z:function(){return l}});var t=r(7294),s=r(6468),i=r(5893);function l(e){var n=e.add,r=(0,t.useRef)(null),l=(0,t.useState)(""),a=l[0],c=l[1],o=(0,t.useState)(!1),u=o[0],d=o[1],h=null,f=function(e){if(e&&e.length)if((0,s.u)(e))if(c(""),function(e){for(var n=0;n<e.length;n++)if(!e[n].name.includes("."))return!0;return!1}(e))c("Your files have folder!");else{var r=function(e){for(var n=[],r=0;r<e.length;r++)n.push(e[r]);return n}(e);n&&n(r)}else c("Your file weight more than 10 MB")},x=function(e){e.preventDefault(),e.stopPropagation()};return(0,i.jsxs)("div",{onDrop:function(e){x(e);var n=e.dataTransfer.files;f(n),d(!1)},onDragEnter:function(e){x(e),h=e.target},onDragOver:function(e){x(e),d(!0)},onDragLeave:function(e){h==e.target&&(x(e),d(!1))},className:"p-5 myShadow rounded relative",children:[(0,i.jsx)("input",{type:"file",ref:r,className:"w-0",onChange:function(e){var n=e.currentTarget.files;f(n)},multiple:!0}),(0,i.jsx)("button",{onClick:function(){var e;null===(e=r.current)||void 0===e||e.click()},className:"text-blue-600 hover:text-blue-500 hover:cursor-pointer",children:"Select a file"}),(0,i.jsx)("span",{children:" or drag in form"}),a?(0,i.jsx)("p",{className:"text-red-500 text-sm",children:a}):(0,i.jsx)("p",{className:"text-gray-400 text-sm",children:"PNG, jpg, gif files up to 10 MB in size are available for download"}),u&&(0,i.jsx)("div",{className:"absolute w-full h-full flex items-center justify-center top-0 left-0 bg-white border-2 border-black border-dashed rounded",children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"48px",viewBox:"0 0 24 24",width:"48px",fill:"#000000",children:[(0,i.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})]})})]})}},4899:function(e,n,r){"use strict";r.d(n,{Z:function(){return a}});var t=r(7294),s=r(2347),i=r(5893);function l(e){var n=e.file,r=n.name,l=n.size,a=(n.id,e.checkIsUserAdmin),c=(0,t.useContext)(s.UserContext).role;return(0,i.jsxs)("div",{className:"p-5 myShadow rounded flex items-center",children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{children:[r,(0,i.jsx)("span",{className:"text-gray-400 ml-2",children:l})]}),(!a||"admin"===c)&&(0,i.jsx)("button",{className:"text-blue-600 hover:text-blue-500 hover:cursor-pointer mt-2",children:"Delete a file"})]}),(0,i.jsx)("button",{className:"ml-auto bg-gray-100 hover:bg-gray-200 w-14 h-14 rounded-full flex items-center justify-center hover:cursor-pointer",children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#4158D0",children:[(0,i.jsx)("g",{children:(0,i.jsx)("rect",{fill:"none",height:"24",width:"24"})}),(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"})})]})})]})}function a(e){var n=e.files,r=e.checkIsUserAdmin,t=void 0!==r&&r;return(0,i.jsx)("div",{className:"py-16 flex flex-col xl:grid grid-cols-2 gap-9",children:n.map((function(e){return(0,i.jsx)(l,{file:e,checkIsUserAdmin:t},e.id)}))})}},6468:function(e,n,r){"use strict";r.d(n,{u:function(){return t}});var t=function(e){for(var n=0,r=0;r<e.length;r++)n+=e[r].size;return!(n>20971520)}},8055:function(e,n,r){"use strict";r.r(n);var t=r(9008),s=r(7294),i=r(6987),l=r(4899),a=r(5893);n.default=function(){var e=(0,s.useState)("Math"),n=e[0];e[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.default,{children:(0,a.jsx)("title",{children:"Public drive | Send Your Work"})}),(0,a.jsxs)("div",{className:"py-14 px-12 w-full xl:w-3/4",children:[(0,a.jsxs)("h1",{className:"text-center xl:text-left text-5xl font-bold mb-8",children:["Send",(0,a.jsx)("span",{className:"text-main",children:"Your"}),"Work | ",n]}),(0,a.jsx)("div",{className:"xl:grid grid-cols-2 gap-9",children:(0,a.jsx)(i.Z,{})}),(0,a.jsx)(l.Z,{files:[{id:"34rdsads",name:"something.mp4",size:"7 MB"},{id:"34sdsads",name:"something.mp4",size:"7 MB"}],checkIsUserAdmin:!0})]})]})}},8592:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/drive",function(){return r(8055)}])},9008:function(e,n,r){e.exports=r(7006)}},function(e){e.O(0,[774,888,179],(function(){return n=8592,e(e.s=n);var n}));var n=e.O();_N_E=n}]);