(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[586],{37772:function(e,t,r){"use strict";var n=r(63038);t.default=void 0;var o,a=(o=r(67294))&&o.__esModule?o:{default:o},i=r(30948),u=r(77356),c=r(63418);var f={};function s(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var l=function(e){var t,r=!1!==e.prefetch,o=u.useRouter(),l=a.default.useMemo((function(){var t=i.resolveHref(o,e.href,!0),r=n(t,2),a=r[0],u=r[1];return{href:a,as:e.as?i.resolveHref(o,e.as):u||a}}),[o,e.href,e.as]),d=l.href,p=l.as,y=e.children,v=e.replace,m=e.shallow,h=e.scroll,b=e.locale;"string"===typeof y&&(y=a.default.createElement("a",null,y));var g=(t=a.default.Children.only(y))&&"object"===typeof t&&t.ref,O=c.useIntersection({rootMargin:"200px"}),w=n(O,2),x=w[0],_=w[1],j=a.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);a.default.useEffect((function(){var e=_&&r&&i.isLocalURL(d),t="undefined"!==typeof b?b:o&&o.locale,n=f[d+"%"+p+(t?"%"+t:"")];e&&!n&&s(o,d,p,{locale:t})}),[p,d,_,b,r,o]);var S={ref:j,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,u,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==u&&n.indexOf("#")>=0&&(u=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:u}))}(e,o,d,p,v,m,h,b)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:o&&o.locale,P=o&&o.isLocaleDomain&&i.getDomainLocale(p,E,o&&o.locales,o&&o.domainLocales);S.href=P||i.addBasePath(i.addLocale(p,E,o&&o.defaultLocale))}return a.default.cloneElement(t,S)};t.default=l},63418:function(e,t,r){"use strict";var n=r(63038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,c=o.useRef(),f=o.useState(!1),s=n(f,2),l=s[0],d=s[1],p=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||l||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=u.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,l]);return o.useEffect((function(){if(!i&&!l){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[l]),[p,l]};var o=r(67294),a=r(65807),i="undefined"!==typeof IntersectionObserver;var u=new Map},9008:function(e,t,r){e.exports=r(27006)},41664:function(e,t,r){e.exports=r(37772)},1852:function(e,t,r){!function(t,n){var o;e.exports=(o=r(67294),function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(1)),a=n(r(8)),i=n(r(2)),u=r(10),c=n(r(3)),f=n(r(6)),s=function(e){return e.query||(0,c.default)(e)},l=function(e){if(!e)return null;var t=Object.keys(e);return 0===t.length?null:t.reduce((function(t,r){return t[(0,i.default)(r)]=e[r],t}),{})},d=function(){var e=o.default.useRef(!1);return o.default.useEffect((function(){e.current=!0}),[]),e.current},p=function(e){var t=o.default.useContext(f.default),r=function(){return l(e)||l(t)||{}},n=o.default.useState(r),a=n[0],i=n[1];return o.default.useEffect((function(){var e=r();(0,u.shallowEqualObjects)(a,e)||i(e)}),[e,t]),a},y=function(e){var t=function(){return s(e)},r=o.default.useState(t),n=r[0],a=r[1];return o.default.useEffect((function(){var e=t();n!==e&&a(e)}),[e]),n},v=function(e,t){var r=function(){return(0,a.default)(e,t)},n=o.default.useState(r),i=n[0],u=n[1],c=d();return o.default.useEffect((function(){if(c){var e=r();return u(e),function(){e&&e.dispose()}}}),[e,t]),i},m=function(e){var t=o.default.useState(e.matches),r=t[0],n=t[1];return o.default.useEffect((function(){var t=function(){n(e.matches)};return e.addListener(t),t(),function(){e.removeListener(t)}}),[e]),r},h=function(e,t,r){var n=p(t),a=y(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var i=v(a,n),u=m(i),c=d();return o.default.useEffect((function(){c&&r&&r(u)}),[u]),o.default.useEffect((function(){return function(){i&&i.dispose()}}),[]),u};t.default=h},function(e,t){e.exports=o},function(e,t,r){"use strict";function n(e){return"-"+e.toLowerCase()}function o(e){if(u.hasOwnProperty(e))return u[e];var t=e.replace(a,n);return u[e]=i.test(t)?"-"+t:t}Object.defineProperty(t,"__esModule",{value:!0});var a=/[A-Z]/g,i=/^ms-/,u={};t.default=o},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(2)),a=n(r(11)),i=function(e){return"not "+e},u=function(e,t){var r=(0,o.default)(e);return"number"==typeof t&&(t+="px"),!0===t?r:!1===t?i(r):"("+r+": "+t+")"},c=function(e){return e.join(" and ")},f=function(e){var t=[];return Object.keys(a.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(u(r,n))})),c(t)};t.default=f},function(e,t,r){"use strict";e.exports=r(13)},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(1)).default.createContext({});t.default=o},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=n(r(0));t.useMediaQuery=o.default;var a=n(r(17));t.default=a.default;var i=n(r(3));t.toQuery=i.default;var u=n(r(6));t.Context=u.default},function(e,t,r){"use strict";function n(e,t,r){function n(e){s&&s.addListener(e)}function o(e){s&&s.removeListener(e)}function u(e){f.matches=e.matches,f.media=e.media}function c(){s&&s.removeListener(u)}var f=this;if(i&&!r){var s=i.call(window,e);this.matches=s.matches,this.media=s.media,s.addListener(u)}else this.matches=a(e,t),this.media=e;this.addListener=n,this.removeListener=o,this.dispose=c}function o(e,t,r){return new n(e,t,r)}var a=r(9).match,i="undefined"!=typeof window?window.matchMedia:null;e.exports=o},function(e,t,r){"use strict";function n(e,t){return o(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var o=e.expressions.every((function(e){var r=e.feature,n=e.modifier,o=e.value,c=t[r];if(!c)return!1;switch(r){case"orientation":case"scan":return c.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=u(o),c=u(c);break;case"resolution":o=i(o),c=i(c);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=a(o),c=a(c);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,c=parseInt(c,10)||0}switch(n){case"min":return c>=o;case"max":return c<=o;default:return c===o}}));return o&&!r||!o&&r}))}function o(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(c),r=t[1],n=t[2],o=t[3]||"",a={};return a.inverse=!!r&&"not"===r.toLowerCase(),a.type=n?n.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],a.expressions=o.map((function(e){var t=e.match(f),r=t[1].toLowerCase().match(s);return{modifier:r[1],feature:r[2],value:t[2]}})),a}))}function a(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function i(e){var t=parseFloat(e);switch(String(e).match(d)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(l)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}t.match=n,t.parse=o;var c=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,f=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,s=/^(?:(min|max)-)?(.+)/,l=/(em|rem|px|cm|mm|in|pt|pc)?$/,d=/(dpi|dpcm|dppx)?$/},function(e,t,r){"use strict";function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),o=r.length;if(n.length!==o)return!1;for(var a=0;a<o;a++){var i=r[a];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"shallowEqualArrays",(function(){return o})),r.d(t,"shallowEqualObjects",(function(){return n}))},function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=a(r(12)),u=i.default.oneOfType([i.default.string,i.default.number]),c={all:i.default.bool,grid:i.default.bool,aural:i.default.bool,braille:i.default.bool,handheld:i.default.bool,print:i.default.bool,projection:i.default.bool,screen:i.default.bool,tty:i.default.bool,tv:i.default.bool,embossed:i.default.bool},f={orientation:i.default.oneOf(["portrait","landscape"]),scan:i.default.oneOf(["progressive","interlace"]),aspectRatio:i.default.string,deviceAspectRatio:i.default.string,height:u,deviceHeight:u,width:u,deviceWidth:u,color:i.default.bool,colorIndex:i.default.bool,monochrome:i.default.bool,resolution:u,type:Object.keys(c)},s=o(f,["type"]),l=n({minAspectRatio:i.default.string,maxAspectRatio:i.default.string,minDeviceAspectRatio:i.default.string,maxDeviceAspectRatio:i.default.string,minHeight:u,maxHeight:u,minDeviceHeight:u,maxDeviceHeight:u,minWidth:u,maxWidth:u,minDeviceWidth:u,maxDeviceWidth:u,minColor:i.default.number,maxColor:i.default.number,minColorIndex:i.default.number,maxColorIndex:i.default.number,minMonochrome:i.default.number,maxMonochrome:i.default.number,minResolution:u,maxResolution:u},s),d=n(n({},c),l);t.default={all:d,types:c,matchers:f,features:l}},function(e,t,r){var n=r(4);e.exports=r(14)(n.isElement,!0)},function(e,t,r){"use strict";!function(){function e(e){return"string"==typeof e||"function"==typeof e||e===g||e===S||e===w||e===O||e===P||e===M||"object"==typeof e&&null!==e&&(e.$$typeof===I||e.$$typeof===C||e.$$typeof===x||e.$$typeof===_||e.$$typeof===E||e.$$typeof===R||e.$$typeof===L||e.$$typeof===T||e.$$typeof===k)}function r(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case h:var r=e.type;switch(r){case j:case S:case g:case w:case O:case P:return r;default:var n=r&&r.$$typeof;switch(n){case _:case E:case I:case C:case x:return n;default:return t}}case b:return t}}}function n(e){return Y||(Y=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),o(e)||r(e)===j}function o(e){return r(e)===S}function a(e){return r(e)===_}function i(e){return r(e)===x}function u(e){return"object"==typeof e&&null!==e&&e.$$typeof===h}function c(e){return r(e)===E}function f(e){return r(e)===g}function s(e){return r(e)===I}function l(e){return r(e)===C}function d(e){return r(e)===b}function p(e){return r(e)===w}function y(e){return r(e)===O}function v(e){return r(e)===P}var m="function"==typeof Symbol&&Symbol.for,h=m?Symbol.for("react.element"):60103,b=m?Symbol.for("react.portal"):60106,g=m?Symbol.for("react.fragment"):60107,O=m?Symbol.for("react.strict_mode"):60108,w=m?Symbol.for("react.profiler"):60114,x=m?Symbol.for("react.provider"):60109,_=m?Symbol.for("react.context"):60110,j=m?Symbol.for("react.async_mode"):60111,S=m?Symbol.for("react.concurrent_mode"):60111,E=m?Symbol.for("react.forward_ref"):60112,P=m?Symbol.for("react.suspense"):60113,M=m?Symbol.for("react.suspense_list"):60120,C=m?Symbol.for("react.memo"):60115,I=m?Symbol.for("react.lazy"):60116,k=m?Symbol.for("react.block"):60121,R=m?Symbol.for("react.fundamental"):60117,L=m?Symbol.for("react.responder"):60118,T=m?Symbol.for("react.scope"):60119,$=j,A=S,D=_,N=x,q=h,W=E,F=g,H=I,U=C,z=b,Q=w,V=O,K=P,Y=!1;t.AsyncMode=$,t.ConcurrentMode=A,t.ContextConsumer=D,t.ContextProvider=N,t.Element=q,t.ForwardRef=W,t.Fragment=F,t.Lazy=H,t.Memo=U,t.Portal=z,t.Profiler=Q,t.StrictMode=V,t.Suspense=K,t.isAsyncMode=n,t.isConcurrentMode=o,t.isContextConsumer=a,t.isContextProvider=i,t.isElement=u,t.isForwardRef=c,t.isFragment=f,t.isLazy=s,t.isMemo=l,t.isPortal=d,t.isProfiler=p,t.isStrictMode=y,t.isSuspense=v,t.isValidElementType=e,t.typeOf=r}()},function(e,t,r){"use strict";function n(){return null}var o=r(4),a=r(15),i=r(5),u=r(16),c=Function.call.bind(Object.prototype.hasOwnProperty),f=function(){};f=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(r){}},e.exports=function(e,t){function r(e){var t=e&&(P&&e[P]||e[M]);if("function"==typeof t)return t}function s(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function l(e){this.message=e,this.stack=""}function d(e){function r(r,a,u,c,s,d,p){if(c=c||C,d=d||u,p!==i){if(t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("undefined"!=typeof console){var v=c+":"+u;!n[v]&&o<3&&(f("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[v]=!0,o++)}}return null==a[u]?r?new l(null===a[u]?"The "+s+" `"+d+"` is marked as required in `"+c+"`, but its value is `null`.":"The "+s+" `"+d+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,u,c,s,d)}var n={},o=0,a=r.bind(null,!1);return a.isRequired=r.bind(null,!0),a}function p(e){function t(t,r,n,o,a,i){var u=t[r];return _(u)!==e?new l("Invalid "+o+" `"+a+"` of type `"+j(u)+"` supplied to `"+n+"`, expected `"+e+"`."):null}return d(t)}function y(e){function t(t,r,n,o,a){if("function"!=typeof e)return new l("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var u=t[r];if(!Array.isArray(u))return new l("Invalid "+o+" `"+a+"` of type `"+_(u)+"` supplied to `"+n+"`, expected an array.");for(var c=0;c<u.length;c++){var f=e(u,c,n,o,a+"["+c+"]",i);if(f instanceof Error)return f}return null}return d(t)}function v(e){function t(t,r,n,o,a){if(!(t[r]instanceof e)){var i=e.name||C;return new l("Invalid "+o+" `"+a+"` of type `"+E(t[r])+"` supplied to `"+n+"`, expected instance of `"+i+"`.")}return null}return d(t)}function m(e){function t(t,r,n,o,a){for(var i=t[r],u=0;u<e.length;u++)if(s(i,e[u]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===j(t)?String(t):t}));return new l("Invalid "+o+" `"+a+"` of value `"+String(i)+"` supplied to `"+n+"`, expected one of "+c+".")}return Array.isArray(e)?d(t):(f(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),n)}function h(e){function t(t,r,n,o,a){if("function"!=typeof e)return new l("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var u=t[r],f=_(u);if("object"!==f)return new l("Invalid "+o+" `"+a+"` of type `"+f+"` supplied to `"+n+"`, expected an object.");for(var s in u)if(c(u,s)){var d=e(u,s,n,o,a+"."+s,i);if(d instanceof Error)return d}return null}return d(t)}function b(e){function t(t,r,n,o,a){for(var u=0;u<e.length;u++)if(null==(0,e[u])(t,r,n,o,a,i))return null;return new l("Invalid "+o+" `"+a+"` supplied to `"+n+"`.")}if(!Array.isArray(e))return f("Invalid argument supplied to oneOfType, expected an instance of array."),n;for(var r=0;r<e.length;r++){var o=e[r];if("function"!=typeof o)return f("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+S(o)+" at index "+r+"."),n}return d(t)}function g(e){function t(t,r,n,o,a){var u=t[r],c=_(u);if("object"!==c)return new l("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");for(var f in e){var s=e[f];if(s){var d=s(u,f,n,o,a+"."+f,i);if(d)return d}}return null}return d(t)}function O(e){function t(t,r,n,o,u){var c=t[r],f=_(c);if("object"!==f)return new l("Invalid "+o+" `"+u+"` of type `"+f+"` supplied to `"+n+"`, expected `object`.");var s=a({},t[r],e);for(var d in s){var p=e[d];if(!p)return new l("Invalid "+o+" `"+u+"` key `"+d+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=p(c,d,n,o,u+"."+d,i);if(y)return y}return null}return d(t)}function w(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(w);if(null===t||e(t))return!0;var n=r(t);if(!n)return!1;var o,a=n.call(t);if(n!==t.entries){for(;!(o=a.next()).done;)if(!w(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!w(i[1]))return!1}return!0;default:return!1}}function x(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function _(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":x(t,e)?"symbol":t}function j(e){if(void 0===e||null===e)return""+e;var t=_(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function S(e){var t=j(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function E(e){return e.constructor&&e.constructor.name?e.constructor.name:C}var P="function"==typeof Symbol&&Symbol.iterator,M="@@iterator",C="<<anonymous>>",I={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:d(n),arrayOf:y,element:function(){function t(t,r,n,o,a){var i=t[r];return e(i)?null:new l("Invalid "+o+" `"+a+"` of type `"+_(i)+"` supplied to `"+n+"`, expected a single ReactElement.")}return d(t)}(),elementType:function(){function e(e,t,r,n,a){var i=e[t];return o.isValidElementType(i)?null:new l("Invalid "+n+" `"+a+"` of type `"+_(i)+"` supplied to `"+r+"`, expected a single ReactElement type.")}return d(e)}(),instanceOf:v,node:function(){function e(e,t,r,n,o){return w(e[t])?null:new l("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")}return d(e)}(),objectOf:h,oneOf:m,oneOfType:b,shape:g,exact:O};return l.prototype=Error.prototype,I.checkPropTypes=u,I.resetWarningCache=u.resetWarningCache,I.PropTypes=I,I}},function(e,t,r){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,c=n(e),f=1;f<arguments.length;f++){for(var s in r=Object(arguments[f]))a.call(r,s)&&(c[s]=r[s]);if(o){u=o(r);for(var l=0;l<u.length;l++)i.call(r,u[l])&&(c[u[l]]=r[u[l]])}}return c}},function(e,t,r){"use strict";function n(e,t,r,n,c){for(var f in e)if(u(e,f)){var s;try{if("function"!=typeof e[f]){var l=Error((n||"React class")+": "+r+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[f]+"`.");throw l.name="Invariant Violation",l}s=e[f](t,f,n,r,null,a)}catch(p){s=p}if(!s||s instanceof Error||o((n||"React class")+": type specification of "+r+" `"+f+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof s+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),s instanceof Error&&!(s.message in i)){i[s.message]=!0;var d=c?c():"";o("Failed "+r+" type: "+s.message+(null!=d?d:""))}}}var o=function(){},a=r(5),i={},u=Function.call.bind(Object.prototype.hasOwnProperty);o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(r){}},n.resetWarningCache=function(){i={}},e.exports=n},function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(0)),i=function(e){var t=e.children,r=e.device,o=e.onChange,i=n(e,["children","device","onChange"]),u=(0,a.default)(i,r,o);return"function"==typeof t?t(u):u?t:null};t.default=i}]))}("undefined"!=typeof self&&self)}}]);