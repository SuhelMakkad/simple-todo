(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[733],{9409:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(850).Z)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]])},2525:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(850).Z)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]])},7865:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(850).Z)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]])},8125:function(e,t,n){"use strict";n.d(t,{default:function(){return o.a}});var r=n(45),o=n.n(r)},9597:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return r}}),n(375);let r=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1235:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(375),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let r=n(5751),o=n(2984),a=r._(n(4986)),i=n(173),l=n(186),u=n(8633),s=n(2218),c=n(9597),f=n(9571),d=n(5402),h=n(9281),p=n(1235),m=n(5284),g=n(8876),y=new Set;function b(e,t,n,r,o,a){if("undefined"!=typeof window&&(a||(0,l.isLocalURL)(t))){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(y.has(o))return;y.add(o)}Promise.resolve(a?e.prefetch(t,o):e.prefetch(t,n,r)).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let _=a.default.forwardRef(function(e,t){let n,r;let{href:u,as:y,children:_,prefetch:S=null,passHref:P,replace:w,shallow:R,scroll:O,locale:E,onClick:j,onMouseEnter:k,onTouchStart:x,legacyBehavior:M=!1,...C}=e;n=_,M&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let N=a.default.useContext(f.RouterContext),T=a.default.useContext(d.AppRouterContext),I=null!=N?N:T,L=!N,A=!1!==S,U=null===S?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:W,as:z}=a.default.useMemo(()=>{if(!N){let e=v(u);return{href:e,as:y?v(y):e}}let[e,t]=(0,i.resolveHref)(N,u,!0);return{href:e,as:y?(0,i.resolveHref)(N,y):t||e}},[N,u,y]),D=a.default.useRef(W),K=a.default.useRef(z);M&&(r=a.default.Children.only(n));let Z=M?r&&"object"==typeof r&&r.ref:t,[F,q,V]=(0,h.useIntersection)({rootMargin:"200px"}),$=a.default.useCallback(e=>{(K.current!==z||D.current!==W)&&(V(),K.current=z,D.current=W),F(e),Z&&("function"==typeof Z?Z(e):"object"==typeof Z&&(Z.current=e))},[z,Z,W,V,F]);a.default.useEffect(()=>{I&&q&&A&&b(I,W,z,{locale:E},{kind:U},L)},[z,W,q,E,A,null==N?void 0:N.locale,I,L,U]);let B={ref:$,onClick(e){M||"function"!=typeof j||j(e),M&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,o,i,u,s,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};c?a.default.startTransition(d):d()}(e,I,W,z,w,R,O,E,L)},onMouseEnter(e){M||"function"!=typeof k||k(e),M&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(A||!L)&&b(I,W,z,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)},onTouchStart:function(e){M||"function"!=typeof x||x(e),M&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(A||!L)&&b(I,W,z,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)}};if((0,s.isAbsoluteUrl)(z))B.href=z;else if(!M||P||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&(0,p.getDomainLocale)(z,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);B.href=t||(0,m.addBasePath)((0,c.addLocale)(z,e,null==N?void 0:N.defaultLocale))}return M?a.default.cloneElement(r,B):(0,o.jsx)("a",{...C,...B,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8503:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let r=n(5782),o=n(8633),a=n(1635),i=n(2218),l=n(375),u=n(186),s=n(6699),c=n(4947);function f(e,t,n){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),h=d.match(/^[a-zA-Z]{1,}:\/\//),p=h?d.slice(h[0].length):d;if((p.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,i.normalizeRepeatedSlashes)(p);d=(h?h[0]:"")+t}if(!(0,u.isLocalURL)(d))return n?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,l.normalizePathTrailingSlash)(e.pathname);let t="";if((0,s.isDynamicRoute)(e.pathname)&&e.searchParams&&n){let n=(0,r.searchParamsToUrlQuery)(e.searchParams),{result:i,params:l}=(0,c.interpolateAs)(e.pathname,e.pathname,n);i&&(t=(0,o.formatWithValidation)({pathname:i,hash:e.hash,query:(0,a.omit)(n,l)}))}let i=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return n?[i,t||i]:i}catch(e){return n?[d]:d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let r=n(4986),o=n(8503),a="function"==typeof IntersectionObserver,i=new Map,l=[];function u(e){let{rootRef:t,rootMargin:n,disabled:u}=e,s=u||!a,[c,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),h=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(a){if(s||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},l.push(n),i.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,n,t,c,d.current]),[h,c,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5169:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let n=/[|\\{}()[\]^$+*?.-]/,r=/[|\\{}()[\]^$+*?.-]/g;function o(e){return n.test(e)?e.replace(r,"\\$&"):e}},9571:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});let r=n(5751)._(n(4986)).default.createContext(null)},8633:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return a},formatWithValidation:function(){return l},urlObjectKeys:function(){return i}});let r=n(1663)._(n(5782)),o=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:n}=e,a=e.protocol||"",i=e.pathname||"",l=e.hash||"",u=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:n&&(s=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(s+=":"+e.port)),u&&"object"==typeof u&&(u=String(r.urlQueryToSearchParams(u)));let c=e.search||u&&"?"+u||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==s?(s="//"+(s||""),i&&"/"!==i[0]&&(i="/"+i)):s||(s=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),""+a+s+(i=i.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+l}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return a(e)}},6699:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getSortedRoutes:function(){return r.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});let r=n(1462),o=n(3229)},4947:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return a}});let r=n(8433),o=n(627);function a(e,t,n){let a="",i=(0,o.getRouteRegex)(e),l=i.groups,u=(t!==e?(0,r.getRouteMatcher)(i)(t):"")||n;a=e;let s=Object.keys(l);return s.every(e=>{let t=u[e]||"",{repeat:n,optional:r}=l[e],o="["+(n?"...":"")+e+"]";return r&&(o=(t?"":"/")+"["+o+"]"),n&&!Array.isArray(t)&&(t=[t]),(r||e in u)&&(a=a.replace(o,n?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(a=""),{params:s,result:a}}},3229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return a}});let r=n(5526),o=/\/\[[^/]+?\](?=\/|$)/;function a(e){return(0,r.isInterceptionRouteAppPath)(e)&&(e=(0,r.extractInterceptionRouteInformation)(e).interceptedRoute),o.test(e)}},186:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return a}});let r=n(2218),o=n(8939);function a(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},1635:function(e,t){"use strict";function n(e,t){let n={};return Object.keys(e).forEach(r=>{t.includes(r)||(n[r]=e[r])}),n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return n}})},5782:function(e,t){"use strict";function n(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t}function r(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[n,o]=e;Array.isArray(o)?o.forEach(e=>t.append(n,r(e))):t.set(n,r(o))}),t}function a(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o}})},8433:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let r=n(2218);function o(e){let{re:t,groups:n}=e;return e=>{let o=t.exec(e);if(!o)return!1;let a=e=>{try{return decodeURIComponent(e)}catch(e){throw new r.DecodeError("failed to decode param")}},i={};return Object.keys(n).forEach(e=>{let t=n[e],r=o[t.pos];void 0!==r&&(i[e]=~r.indexOf("/")?r.split("/").map(e=>a(e)):t.repeat?[a(r)]:a(r))}),i}}},627:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getNamedMiddlewareRegex:function(){return d},getNamedRouteRegex:function(){return f},getRouteRegex:function(){return u}});let r=n(5526),o=n(5169),a=n(5868);function i(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let n=e.startsWith("...");return n&&(e=e.slice(3)),{key:e,repeat:n,optional:t}}function l(e){let t=(0,a.removeTrailingSlash)(e).slice(1).split("/"),n={},l=1;return{parameterizedRoute:t.map(e=>{let t=r.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&a){let{key:e,optional:r,repeat:u}=i(a[1]);return n[e]={pos:l++,repeat:u,optional:r},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!a)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:r}=i(a[1]);return n[e]={pos:l++,repeat:t,optional:r},t?r?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:n}}function u(e){let{parameterizedRoute:t,groups:n}=l(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:n}}function s(e){let{interceptionMarker:t,getSafeRouteKey:n,segment:r,routeKeys:a,keyPrefix:l}=e,{key:u,optional:s,repeat:c}=i(r),f=u.replace(/\W/g,"");l&&(f=""+l+f);let d=!1;(0===f.length||f.length>30)&&(d=!0),isNaN(parseInt(f.slice(0,1)))||(d=!0),d&&(f=n()),l?a[f]=""+l+u:a[f]=u;let h=t?(0,o.escapeStringRegexp)(t):"";return c?s?"(?:/"+h+"(?<"+f+">.+?))?":"/"+h+"(?<"+f+">.+?)":"/"+h+"(?<"+f+">[^/]+?)"}function c(e,t){let n;let i=(0,a.removeTrailingSlash)(e).slice(1).split("/"),l=(n=0,()=>{let e="",t=++n;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),u={};return{namedParameterizedRoute:i.map(e=>{let n=r.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(n&&a){let[n]=e.split(a[0]);return s({getSafeRouteKey:l,interceptionMarker:n,segment:a[1],routeKeys:u,keyPrefix:t?"nxtI":void 0})}return a?s({getSafeRouteKey:l,segment:a[1],routeKeys:u,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:u}}function f(e,t){let n=c(e,t);return{...u(e),namedRegex:"^"+n.namedParameterizedRoute+"(?:/)?$",routeKeys:n.routeKeys}}function d(e,t){let{parameterizedRoute:n}=l(e),{catchAll:r=!0}=t;if("/"===n)return{namedRegex:"^/"+(r?".*":"")+"$"};let{namedParameterizedRoute:o}=c(e,!1);return{namedRegex:"^"+o+(r?"(?:(/.*)?)":"")+"$"}}},1462:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return r}});class n{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let n=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&n.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');n.unshift(t)}return null!==this.restSlugName&&n.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&n.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),n}_insert(e,t,r){if(0===e.length){this.placeholder=!1;return}if(r)throw Error("Catch-all must be the last part of the URL.");let o=e[0];if(o.startsWith("[")&&o.endsWith("]")){let n=o.slice(1,-1),i=!1;if(n.startsWith("[")&&n.endsWith("]")&&(n=n.slice(1,-1),i=!0),n.startsWith("...")&&(n=n.substring(3),r=!0),n.startsWith("[")||n.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+n+"').");if(n.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+n+"').");function a(e,n){if(null!==e&&e!==n)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+n+"').");t.forEach(e=>{if(e===n)throw Error('You cannot have the same slug name "'+n+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===o.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+n+'" differ only by non-word symbols within a single dynamic path')}),t.push(n)}if(r){if(i){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');a(this.optionalRestSlugName,n),this.optionalRestSlugName=n,o="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');a(this.restSlugName,n),this.restSlugName=n,o="[...]"}}else{if(i)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');a(this.slugName,n),this.slugName=n,o="[]"}}this.children.has(o)||this.children.set(o,new n),this.children.get(o)._insert(e.slice(1),t,r)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function r(e){let t=new n;return e.forEach(e=>t.insert(e)),t.smoosh()}},2218:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DecodeError:function(){return p},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return y},NormalizeError:function(){return m},PageNotFoundError:function(){return g},SP:function(){return d},ST:function(){return h},WEB_VITALS:function(){return n},execOnce:function(){return r},getDisplayName:function(){return u},getLocationOrigin:function(){return i},getURL:function(){return l},isAbsoluteUrl:function(){return a},isResSent:function(){return s},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return v}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return n||(n=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>o.test(e);function i(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function l(){let{href:e}=window.location,t=i();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&s(n))return r;if(!r)throw Error('"'+u(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.');return r}let d="undefined"!=typeof performance,h=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class p extends Error{}class m extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},2276:function(e){e.exports={style:{fontFamily:"'__Inter_b5054e', '__Inter_Fallback_b5054e'",fontStyle:"normal"},className:"__className_b5054e"}},6502:function(e,t,n){"use strict";n.d(t,{Ee:function(){return b},NY:function(){return v},fC:function(){return y}});var r=n(3985),o=n(4986),a=n(6124),i=n(6161),l=n(3699),u=n(6221);let s="Avatar",[c,f]=(0,a.b)(s),[d,h]=c(s),p=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:n,...a}=e,[i,l]=(0,o.useState)("idle");return(0,o.createElement)(d,{scope:n,imageLoadingStatus:i,onImageLoadingStatusChange:l},(0,o.createElement)(u.WV.span,(0,r.Z)({},a,{ref:t})))}),m=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:n,src:a,onLoadingStatusChange:s=()=>{},...c}=e,f=h("AvatarImage",n),d=function(e){let[t,n]=(0,o.useState)("idle");return(0,l.b)(()=>{if(!e){n("error");return}let t=!0,r=new window.Image,o=e=>()=>{t&&n(e)};return n("loading"),r.onload=o("loaded"),r.onerror=o("error"),r.src=e,()=>{t=!1}},[e]),t}(a),p=(0,i.W)(e=>{s(e),f.onImageLoadingStatusChange(e)});return(0,l.b)(()=>{"idle"!==d&&p(d)},[d,p]),"loaded"===d?(0,o.createElement)(u.WV.img,(0,r.Z)({},c,{ref:t,src:a})):null}),g=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:n,delayMs:a,...i}=e,l=h("AvatarFallback",n),[s,c]=(0,o.useState)(void 0===a);return(0,o.useEffect)(()=>{if(void 0!==a){let e=window.setTimeout(()=>c(!0),a);return()=>window.clearTimeout(e)}},[a]),s&&"loaded"!==l.imageLoadingStatus?(0,o.createElement)(u.WV.span,(0,r.Z)({},i,{ref:t})):null}),y=p,b=m,v=g},1643:function(e,t,n){"use strict";n.d(t,{F:function(){return s},f:function(){return c}});var r=n(4986),o=["light","dark"],a="(prefers-color-scheme: dark)",i="undefined"==typeof window,l=r.createContext(void 0),u={setTheme:e=>{},themes:[]},s=()=>{var e;return null!=(e=r.useContext(l))?e:u},c=e=>r.useContext(l)?e.children:r.createElement(d,{...e}),f=["light","dark"],d=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:i=!0,enableColorScheme:u=!0,storageKey:s="theme",themes:c=f,defaultTheme:d=i?"system":"light",attribute:y="data-theme",value:b,children:v,nonce:_}=e,[S,P]=r.useState(()=>p(s,d)),[w,R]=r.useState(()=>p(s)),O=b?Object.values(b):c,E=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&i&&(t=g());let r=b?b[t]:t,a=n?m():null,l=document.documentElement;if("class"===y?(l.classList.remove(...O),r&&l.classList.add(r)):r?l.setAttribute(y,r):l.removeAttribute(y),u){let e=o.includes(d)?d:null,n=o.includes(t)?t:e;l.style.colorScheme=n}null==a||a()},[]),j=r.useCallback(e=>{let t="function"==typeof e?e(e):e;P(t);try{localStorage.setItem(s,t)}catch(e){}},[t]),k=r.useCallback(e=>{R(g(e)),"system"===S&&i&&!t&&E("system")},[S,t]);r.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(k),k(e),()=>e.removeListener(k)},[k]),r.useEffect(()=>{let e=e=>{e.key===s&&j(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[j]),r.useEffect(()=>{E(null!=t?t:S)},[t,S]);let x=r.useMemo(()=>({theme:S,setTheme:j,forcedTheme:t,resolvedTheme:"system"===S?w:S,themes:i?[...c,"system"]:c,systemTheme:i?w:void 0}),[S,j,t,w,i,c]);return r.createElement(l.Provider,{value:x},r.createElement(h,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:i,enableColorScheme:u,storageKey:s,themes:c,defaultTheme:d,attribute:y,value:b,children:v,attrs:O,nonce:_}),v)},h=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:i,enableSystem:l,enableColorScheme:u,defaultTheme:s,value:c,attrs:f,nonce:d}=e,h="system"===s,p="class"===i?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(f.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(i,"',s='setAttribute';"),m=u?(o.includes(s)?s:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(s,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=c?c[e]:e,a=t?e+"|| ''":"'".concat(r,"'"),l="";return u&&n&&!t&&o.includes(e)&&(l+="d.style.colorScheme = '".concat(e,"';")),"class"===i?t||r?l+="c.add(".concat(a,")"):l+="null":r&&(l+="d[s](n,".concat(a,")")),l},y=t?"!function(){".concat(p).concat(g(t),"}()"):l?"!function(){try{".concat(p,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(a,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(g("dark"),"}else{").concat(g("light"),"}}else if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(g(c?"x[e]":"e",!0),"}").concat(h?"":"else{"+g(s,!1,!1)+"}").concat(m,"}catch(e){}}()"):"!function(){try{".concat(p,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(g(c?"x[e]":"e",!0),"}else{").concat(g(s,!1,!1),";}").concat(m,"}catch(t){}}();");return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:y}})}),p=(e,t)=>{let n;if(!i){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},m=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},g=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")}}]);