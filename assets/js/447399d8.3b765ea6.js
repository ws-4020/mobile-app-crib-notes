"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1227],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return s}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=p(r),s=a,d=m["".concat(c,".").concat(s)]||m[s]||f[s]||i;return r?n.createElement(d,o(o({ref:e},u),{},{components:r})):n.createElement(d,o({ref:e},u))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73427:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={title:"\u8a8d\u8a3c\u65b9\u5f0f",sidebar_label:"\u6982\u8981"},c=void 0,p={unversionedId:"react-native/santoku/application-architecture/auth/overview",id:"react-native/santoku/application-architecture/auth/overview",title:"\u8a8d\u8a3c\u65b9\u5f0f",description:"\u30a2\u30d7\u30ea\u3092\u5b89\u5168\u306b\u5229\u7528\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u30e6\u30fc\u30b6\u304c\u672c\u4eba\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30e6\u30fc\u30b6\u3092\u78ba\u8a8d\u3059\u308b\u624b\u6bb5\u3068\u3057\u3066ID\u30fb\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u7528\u3044\u305f\u8a8d\u8a3c\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/auth/overview.mdx",sourceDirName:"react-native/santoku/application-architecture/auth",slug:"/react-native/santoku/application-architecture/auth/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/overview",tags:[],version:"current",lastUpdatedAt:1638441606,formattedLastUpdatedAt:"2021/12/2",frontMatter:{title:"\u8a8d\u8a3c\u65b9\u5f0f",sidebar_label:"\u6982\u8981"},sidebar:"santoku",previous:{title:"\u30a2\u30d7\u30ea\u8d77\u52d5\u5f8c\u306e\u521d\u671f\u5316\u51e6\u7406",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/life-cycle-management/initialization"},next:{title:"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/signup"}},u=[{value:"\u8a8d\u8a3c\u6a5f\u80fd",id:"\u8a8d\u8a3c\u6a5f\u80fd",children:[],level:2},{value:"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805",id:"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805",children:[],level:2}],f={toc:u};function m(t){var e=t.components,r=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u30a2\u30d7\u30ea\u3092\u5b89\u5168\u306b\u5229\u7528\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u30e6\u30fc\u30b6\u304c\u672c\u4eba\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30e6\u30fc\u30b6\u3092\u78ba\u8a8d\u3059\u308b\u624b\u6bb5\u3068\u3057\u3066ID\u30fb\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u7528\u3044\u305f\u8a8d\u8a3c\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u307e\u305f\u3001\u30e2\u30d0\u30a4\u30eb\u7aef\u672b\u306e\u7d1b\u5931\u3084\u76d7\u96e3\u30ea\u30b9\u30af\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u3001PIN\u30b3\u30fc\u30c9\u3084\u30e6\u30fc\u30b6\u306e\u751f\u4f53\u5c5e\u6027\u3092\u4f7f\u7528\u3057\u3066\u3001\u30e6\u30fc\u30b6\u304c\u7aef\u672b\u306e\u6240\u6709\u8005\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u6a5f\u80fd\u3082\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u8a8d\u8a3c\u6a5f\u80fd"},"\u8a8d\u8a3c\u6a5f\u80fd"),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u63d0\u4f9b\u3059\u308b\u6a5f\u80fd\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u6a5f\u80fd"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u6982\u8981"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30e6\u30fc\u30b6\u306f\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u64cd\u4f5c\u306a\u3057\u306b\u30a2\u30d7\u30ea\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u3002\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u81ea\u52d5\u751f\u6210\u3057\u3066\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u4f5c\u6210\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u3001\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3068\u3057\u3066\u7aef\u672b\u5185\u306e\u5b89\u5168\u306a\u5834\u6240\uff08\u4ee5\u964d\u3001\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u3068\u547c\u3073\u307e\u3059\uff09\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30e6\u30fc\u30b6\u306f\u8907\u6570\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u7528\u3044\u3066\u3001Cookie\u30d9\u30fc\u30b9\u306e\u8a8d\u8a3c\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u307e\u3059\u3002\u8a8d\u8a3c\u51e6\u7406\u5f8c\u306b\u6255\u3044\u51fa\u3055\u308c\u305f\u30bb\u30c3\u30b7\u30e7\u30f3ID\u3092Cookie\u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u8a8d\u8a3c\u72b6\u614b\u3092\u7dad\u6301\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),"\u30ed\u30b0\u30a4\u30f3\u306f\u3001\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3067\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3092\u5165\u529b\u3059\u308b\u65b9\u6cd5\u3068\u3001\u7aef\u672b\u306b\u4fdd\u5b58\u3055\u308c\u305f\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u7528\u3044\u3066\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u3059\u308b2\u3064\u306e\u624b\u6bb5\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a2\u30a6\u30c8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3\u51e6\u7406\u5f8c\u306b\u6255\u3044\u51fa\u3055\u308c\u305f\u30bb\u30c3\u30b7\u30e7\u30f3ID\u3092\u7834\u68c4\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u7aef\u672b\u8a8d\u8a3c"),(0,i.kt)("td",{parentName:"tr",align:"left"},"PIN\u30b3\u30fc\u30c9\uff08\u307e\u305f\u306f\u30d1\u30b9\u30b3\u30fc\u30c9\uff09\u3084\u3001\u6307\u7d0b\u30fb\u9854\u30fb\u8679\u5f69\u3092\u7528\u3044\u3066\u7aef\u672b\u306e\u6240\u6709\u8005\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u3001\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u3067\u7ba1\u7406\u3057\u307e\u3059\u3002")))),(0,i.kt)("h2",{id:"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805"},"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-007-auth"},"\u8a8d\u8a3c\u65b9\u5f0f\u306e\u65b9\u91dd"))))}m.isMDXComponent=!0}}]);