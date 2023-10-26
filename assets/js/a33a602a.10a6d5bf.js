"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7039],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,b=s["".concat(o,".").concat(d)]||s[d]||m[d]||l;return r?n.createElement(b,p(p({ref:t},u),{},{components:r})):n.createElement(b,p({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[s]="string"==typeof e?e:a,p[1]=i;for(var c=2;c<l;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56025:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"\u5165\u529b\u753b\u9762\u306eAPI\u547c\u3073\u51fa\u3057",sidebar_label:"API\u547c\u3073\u51fa\u3057"},p=void 0,i={unversionedId:"react-native/learn/qa-app/exercise-basic-input-api",id:"react-native/learn/qa-app/exercise-basic-input-api",title:"\u5165\u529b\u753b\u9762\u306eAPI\u547c\u3073\u51fa\u3057",description:"\u753b\u9762\u8868\u793a\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092API\u3067\u53d6\u5f97\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/qa-app/exercise-basic-input-api.md",sourceDirName:"react-native/learn/qa-app",slug:"/react-native/learn/qa-app/exercise-basic-input-api",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/exercise-basic-input-api",draft:!1,tags:[],version:"current",lastUpdatedAt:1698294719,formattedLastUpdatedAt:"2023\u5e7410\u670826\u65e5",frontMatter:{title:"\u5165\u529b\u753b\u9762\u306eAPI\u547c\u3073\u51fa\u3057",sidebar_label:"API\u547c\u3073\u51fa\u3057"},sidebar:"learn",previous:{title:"\u753b\u9762\u306e\u5b9f\u88c5",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/exercise-basic-input-screen"},next:{title:"Q&A\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\uff08\u5fdc\u7528\u7de8\uff09",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/exercise-advanced"}},o={},c=[],u={toc:c},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u753b\u9762\u8868\u793a\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092API\u3067\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/react-native/learn/qa-app/app-project-desc#msw%E3%81%AE%E8%A8%AD%E5%AE%9A"},"MSW\u306e\u8a2d\u5b9a"),"\u3067\u8a2d\u5b9a\u3057\u305f\u901a\u308a\u3001MSW\u3092\u4f7f\u7528\u3057\u3066\u30e2\u30c3\u30af\u30c7\u30fc\u30bf\u3092\u8fd4\u5374\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u306eAPI\u547c\u3073\u51fa\u3057\u3092\u8ffd\u52a0\u3057\u3001\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306b\u76f4\u63a5\u5024\u3092\u8a18\u8f09\u3057\u3066\u3044\u305f\u7b87\u6240\u3092API\u306e\u623b\u308a\u5024\u3092\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"API\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u547c\u3073\u51fa\u3057\u7b87\u6240"),(0,a.kt)("th",{parentName:"tr",align:null},"\u88dc\u8db3"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u30bf\u30b0\u4e00\u89a7\u53d6\u5f97"),(0,a.kt)("td",{parentName:"tr",align:null},"\u30bf\u30b0\u30dc\u30bf\u30f3\u62bc\u4e0b"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u30a4\u30d9\u30f3\u30c8\u767b\u9332"),(0,a.kt)("td",{parentName:"tr",align:null},"\u30a4\u30d9\u30f3\u30c8\u30bf\u30d6\u3092\u9078\u629e\u3057\u305f\u72b6\u614b\u3067\u6295\u7a3f\u30dc\u30bf\u30f3\u62bc\u4e0b"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u8cea\u554f\u767b\u9332"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8cea\u554f\u30bf\u30d6\u3092\u9078\u629e\u3057\u305f\u72b6\u614b\u3067\u6295\u7a3f\u30dc\u30bf\u30f3\u62bc\u4e0b"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u53d6\u5f97"),(0,a.kt)("td",{parentName:"tr",align:null},"\u753b\u9762\u521d\u671f\u8868\u793a"),(0,a.kt)("td",{parentName:"tr",align:null},"\u30a4\u30d9\u30f3\u30c8\u5165\u529b\u753b\u9762\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u53d6\u5f97API\u547c\u3073\u51fa\u3057\u306f\u5b9f\u88c5\u5bfe\u8c61\u5916")))))}m.isMDXComponent=!0}}]);