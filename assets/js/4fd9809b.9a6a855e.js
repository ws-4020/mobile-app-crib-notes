"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[9004],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,b=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return r?a.createElement(b,i(i({ref:t},s),{},{components:r})):a.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46147:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const l={title:"\u30a4\u30d9\u30f3\u30c8\u8a73\u7d30\u753b\u9762\u306eAPI\u547c\u3073\u51fa\u3057",sidebar_label:"API\u547c\u3073\u51fa\u3057"},i=void 0,p={unversionedId:"react-native/learn/qa-app/exercise-basic-detail-event-api",id:"react-native/learn/qa-app/exercise-basic-detail-event-api",title:"\u30a4\u30d9\u30f3\u30c8\u8a73\u7d30\u753b\u9762\u306eAPI\u547c\u3073\u51fa\u3057",description:"\u753b\u9762\u8868\u793a\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092API\u3067\u53d6\u5f97\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/qa-app/exercise-basic-detail-event-api.md",sourceDirName:"react-native/learn/qa-app",slug:"/react-native/learn/qa-app/exercise-basic-detail-event-api",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/exercise-basic-detail-event-api",draft:!1,tags:[],version:"current",lastUpdatedAt:1698294719,formattedLastUpdatedAt:"2023\u5e7410\u670826\u65e5",frontMatter:{title:"\u30a4\u30d9\u30f3\u30c8\u8a73\u7d30\u753b\u9762\u306eAPI\u547c\u3073\u51fa\u3057",sidebar_label:"API\u547c\u3073\u51fa\u3057"},sidebar:"learn",previous:{title:"\u753b\u9762\u306e\u5b9f\u88c5",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/exercise-basic-detail-event-screen"},next:{title:"\u5358\u4f53\u30c6\u30b9\u30c8\u306e\u5b9f\u65bd",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/exercise-basic-detail-event-test-case"}},o={},c=[],s={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u753b\u9762\u8868\u793a\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092API\u3067\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/react-native/learn/qa-app/app-project-desc#msw%E3%81%AE%E8%A8%AD%E5%AE%9A"},"MSW\u306e\u8a2d\u5b9a"),"\u3067\u8a2d\u5b9a\u3057\u305f\u901a\u308a\u3001MSW\u3092\u4f7f\u7528\u3057\u3066\u30e2\u30c3\u30af\u30c7\u30fc\u30bf\u3092\u8fd4\u5374\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u306eAPI\u547c\u3073\u51fa\u3057\u3092\u8ffd\u52a0\u3057\u3001\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306b\u76f4\u63a5\u5024\u3092\u8a18\u8f09\u3057\u3066\u3044\u305f\u7b87\u6240\u3092API\u306e\u623b\u308a\u5024\u3092\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"API\u540d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u547c\u3073\u51fa\u3057\u30bf\u30a4\u30df\u30f3\u30b0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u88dc\u8db3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u30a4\u30d9\u30f3\u30c8\u53d6\u5f97"),(0,n.kt)("td",{parentName:"tr",align:null},"\u753b\u9762\u521d\u671f\u8868\u793a"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9078\u629e\u3055\u308c\u305f\u30a4\u30d9\u30f3\u30c8\u3092\u53d6\u5f97")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u3044\u3044\u306d\u6e08\u306e\u53d6\u5f97\uff08\u30a4\u30d9\u30f3\u30c8\uff09"),(0,n.kt)("td",{parentName:"tr",align:null},"\u753b\u9762\u521d\u671f\u8868\u793a"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9078\u629e\u3055\u308c\u305f\u30a4\u30d9\u30f3\u30c8\u306e\u3044\u3044\u306d\u60c5\u5831\u3092\u53d6\u5f97")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u3044\u3044\u306d\u306e\u5b9f\u65bd\uff08\u30a4\u30d9\u30f3\u30c8\uff09"),(0,n.kt)("td",{parentName:"tr",align:null},"\u3044\u3044\u306d\u30dc\u30bf\u30f3\u62bc\u4e0b"),(0,n.kt)("td",{parentName:"tr",align:null},"\u3044\u3044\u306d\u672a\u5b9f\u65bd\u306e\u5834\u5408")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u3044\u3044\u306d\u306e\u53d6\u308a\u6d88\u3057\uff08\u30a4\u30d9\u30f3\u30c8\uff09"),(0,n.kt)("td",{parentName:"tr",align:null},"\u3044\u3044\u306d\u30dc\u30bf\u30f3\u62bc\u4e0b"),(0,n.kt)("td",{parentName:"tr",align:null},"\u3044\u3044\u306d\u6e08\u306e\u5834\u5408")))))}m.isMDXComponent=!0}}]);