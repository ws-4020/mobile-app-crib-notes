"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1227],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),c=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=c(r),f=n,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||i;return r?a.createElement(d,o(o({ref:e},u),{},{components:r})):a.createElement(d,o({ref:e},u))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73427:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={title:"\u8a8d\u8a3c\u65b9\u5f0f",sidebar_label:"\u6982\u8981"},o=void 0,l={unversionedId:"react-native/santoku/application-architecture/auth/overview",id:"react-native/santoku/application-architecture/auth/overview",title:"\u8a8d\u8a3c\u65b9\u5f0f",description:"\u30a2\u30d7\u30ea\u3092\u5b89\u5168\u306b\u5229\u7528\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u30e6\u30fc\u30b6\u304c\u672c\u4eba\u305d\u306e\u4eba\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30e6\u30fc\u30b6\u3092\u78ba\u8a8d\u3059\u308b\u624b\u6bb5\u3068\u3057\u3066ID\u30fb\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u7528\u3044\u305f\u8a8d\u8a3c\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u521d\u671f\u306eID\u30fb\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u533f\u540d\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u6a5f\u80fd\u306b\u3088\u308a\u81ea\u52d5\u3067\u751f\u6210\u3055\u308c\u3001\u30e6\u30fc\u30b6\u306f\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u64cd\u4f5c\u306a\u3057\u306b\u533f\u540d\u30a2\u30ab\u30a6\u30f3\u30c8\uff08\u203b1\uff09\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30d7\u30ea\u306e\u5229\u7528\u3092\u958b\u59cb\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u6b21\u56de\u306e\u30a2\u30d7\u30ea\u8d77\u52d5\u6642\u306f\u3001\u7aef\u672b\u306b\u4fdd\u5b58\u3055\u308c\u305f\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u7528\u3044\u3066\u81ea\u52d5\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/auth/overview.mdx",sourceDirName:"react-native/santoku/application-architecture/auth",slug:"/react-native/santoku/application-architecture/auth/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1663220621,formattedLastUpdatedAt:"2022\u5e749\u670815\u65e5",frontMatter:{title:"\u8a8d\u8a3c\u65b9\u5f0f",sidebar_label:"\u6982\u8981"},sidebar:"santoku",previous:{title:"\u30a2\u30d7\u30ea\u8d77\u52d5\u5f8c\u306e\u521d\u671f\u5316\u51e6\u7406",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/life-cycle-management/initialization"},next:{title:"\u533f\u540d\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/signup"}},p={},c=[{value:"\u8a8d\u8a3c\u6a5f\u80fd",id:"\u8a8d\u8a3c\u6a5f\u80fd",level:2},{value:"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805",id:"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805",level:2}],u={toc:c};function s(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u30a2\u30d7\u30ea\u3092\u5b89\u5168\u306b\u5229\u7528\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u30e6\u30fc\u30b6\u304c\u672c\u4eba\u305d\u306e\u4eba\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30e6\u30fc\u30b6\u3092\u78ba\u8a8d\u3059\u308b\u624b\u6bb5\u3068\u3057\u3066ID\u30fb\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u7528\u3044\u305f\u8a8d\u8a3c\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u521d\u671f\u306eID\u30fb\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u533f\u540d\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u6a5f\u80fd\u306b\u3088\u308a\u81ea\u52d5\u3067\u751f\u6210\u3055\u308c\u3001\u30e6\u30fc\u30b6\u306f\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u64cd\u4f5c\u306a\u3057\u306b\u533f\u540d\u30a2\u30ab\u30a6\u30f3\u30c8\uff08\u203b1\uff09\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30d7\u30ea\u306e\u5229\u7528\u3092\u958b\u59cb\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u6b21\u56de\u306e\u30a2\u30d7\u30ea\u8d77\u52d5\u6642\u306f\u3001\u7aef\u672b\u306b\u4fdd\u5b58\u3055\u308c\u305f\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u7528\u3044\u3066\u81ea\u52d5\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u305d\u306e\u4ed6\u3001\u30e2\u30d0\u30a4\u30eb\u7aef\u672b\u306e\u7d1b\u5931\u3084\u76d7\u96e3\u30ea\u30b9\u30af\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u3001PIN\u30b3\u30fc\u30c9\u3084\u30e6\u30fc\u30b6\u306e\u751f\u4f53\u5c5e\u6027\u3092\u4f7f\u7528\u3057\u3066\u3001\u30e6\u30fc\u30b6\u304c\u7aef\u672b\u306e\u6240\u6709\u8005\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u6a5f\u80fd\u3082\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\uff08\u203b1\uff09\u30a2\u30ab\u30a6\u30f3\u30c8\u767b\u9332\u3084\u30a2\u30ab\u30a6\u30f3\u30c8\u9023\u643a\u304c\u5b8c\u4e86\u3059\u308b\u3068\u901a\u5e38\u30a2\u30ab\u30a6\u30f3\u30c8\u3068\u306a\u308a\u307e\u3059\u3002\u901a\u5e38\u30a2\u30ab\u30a6\u30f3\u30c8\u306f\u4eca\u56de\u306e\u958b\u767a\u7bc4\u56f2\u5916\u3067\u3059\u3002"),(0,n.kt)("h2",{id:"\u8a8d\u8a3c\u6a5f\u80fd"},"\u8a8d\u8a3c\u6a5f\u80fd"),(0,n.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u63d0\u4f9b\u3059\u308b\u6a5f\u80fd\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u6a5f\u80fd"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u6982\u8981"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u533f\u540d\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u521d\u671f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u81ea\u52d5\u751f\u6210\u3057\u3066\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30e6\u30fc\u30b6\u306f\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u64cd\u4f5c\u306a\u3057\u306b\u533f\u540d\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30d7\u30ea\u306e\u5229\u7528\u3092\u958b\u59cb\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u4f5c\u6210\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u3067\u5229\u7528\u3059\u308b\u305f\u3081\u306b\u3001\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3068\u3057\u3066\u7aef\u672b\u5185\u306e\u5b89\u5168\u306a\u5834\u6240\uff08\u4ee5\u964d\u3001\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u3068\u547c\u3073\u307e\u3059\uff09\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7aef\u672b\u306b\u4fdd\u5b58\u3055\u308c\u305f\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u7528\u3044\u3066\u3001Cookie\u30d9\u30fc\u30b9\u306e\u8a8d\u8a3c\u51e6\u7406\u3092\u81ea\u52d5\u3067\u5b9f\u65bd\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),"Cookie\u30d9\u30fc\u30b9\u306e\u8a8d\u8a3c\u3068\u306f\u3001\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u7528\u3044\u3066\u8a8d\u8a3c\u3057\u3001Cookie\u3067\u30bb\u30c3\u30b7\u30e7\u30f3ID\u3092\u53d7\u3051\u53d6\u308b\u4e00\u822c\u7684\u306a\u8a8d\u8a3c\u65b9\u5f0f\u3067\u3059\u3002\u30bb\u30c3\u30b7\u30e7\u30f3ID\u3092Cookie\u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u8a8d\u8a3c\u72b6\u614b\u3092\u7dad\u6301\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a2\u30a6\u30c8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a2\u30a6\u30c8\u51e6\u7406\u306b\u3088\u308a\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u5074\u3067\u4fdd\u6301\u3057\u3066\u3044\u308b\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u7834\u68c4\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7aef\u672b\u8a8d\u8a3c"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PIN\u30b3\u30fc\u30c9\uff08\u307e\u305f\u306f\u30d1\u30b9\u30b3\u30fc\u30c9\uff09\u3084\u3001\u6307\u7d0b\u30fb\u9854\u30fb\u8679\u5f69\u3092\u7528\u3044\u3066\u7aef\u672b\u306e\u6240\u6709\u8005\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u3001\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u3067\u7ba1\u7406\u3057\u307e\u3059\u3002")))),(0,n.kt)("h2",{id:"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805"},"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-007-auth"},"\u8a8d\u8a3c\u65b9\u5f0f\u306e\u65b9\u91dd"))))}s.isMDXComponent=!0}}]);