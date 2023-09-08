"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),k=r,f=s["".concat(p,".").concat(k)]||s[k]||m[k]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},59529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5",sidebar_label:"\u6982\u8981",pagination_label:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5"},l=void 0,o={unversionedId:"react-native/santoku/application-architecture/push-notification/overview",id:"react-native/santoku/application-architecture/push-notification/overview",title:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5",description:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30e6\u30fc\u30b6\u304c\u30e2\u30d0\u30a4\u30eb\u7aef\u672b\u3092\u643a\u5e2f\u3057\u3066\u304a\u308a\u901a\u77e5\u306e\u78ba\u8a8d\u7387\u304c\u9ad8\u3044\u3068\u3044\u3046\u7279\u6027\u304b\u3089\u3001 \u69d8\u3005\u306a\u30b7\u30fc\u30f3\u3067\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u304c\u6d3b\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/push-notification/overview.mdx",sourceDirName:"react-native/santoku/application-architecture/push-notification",slug:"/react-native/santoku/application-architecture/push-notification/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/push-notification/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1681450141,formattedLastUpdatedAt:"2023\u5e744\u670814\u65e5",frontMatter:{title:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5",sidebar_label:"\u6982\u8981",pagination_label:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5"},sidebar:"santoku",previous:{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u51e6\u7406",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/process-deep-link"},next:{title:"\u767b\u9332\u30c8\u30fc\u30af\u30f3\u306e\u767b\u9332\u30fb\u66f4\u65b0",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/push-notification/register-token"}},p={},c=[{value:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u65b9\u5f0f",id:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u65b9\u5f0f",level:2},{value:"\u767b\u9332\u30c8\u30fc\u30af\u30f3\u306e\u7ba1\u7406",id:"\u767b\u9332\u30c8\u30fc\u30af\u30f3\u306e\u7ba1\u7406",level:3},{value:"FCM\u3092\u4ecb\u3057\u305f\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u9001\u4fe1",id:"fcm\u3092\u4ecb\u3057\u305f\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u9001\u4fe1",level:3},{value:"FCM\u306e\u8a2d\u5b9a",id:"fcm\u306e\u8a2d\u5b9a",level:3},{value:"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805",id:"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805",level:2}],u={toc:c},s="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(s,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30e6\u30fc\u30b6\u304c\u30e2\u30d0\u30a4\u30eb\u7aef\u672b\u3092\u643a\u5e2f\u3057\u3066\u304a\u308a\u901a\u77e5\u306e\u78ba\u8a8d\u7387\u304c\u9ad8\u3044\u3068\u3044\u3046\u7279\u6027\u304b\u3089\u3001 \u69d8\u3005\u306a\u30b7\u30fc\u30f3\u3067\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u304c\u6d3b\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u3082\u3001\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306b\u60c5\u5831\u3092\u5c4a\u3051\u305f\u3044\u5834\u5408\u306a\u3069\u3001\u9bae\u5ea6\u304c\u91cd\u8981\u306a\u5834\u9762\u3067\u306f\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u5229\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u65b9\u5f0f"},"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u65b9\u5f0f"),(0,r.kt)("p",null,"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306fFirebase Cloud Messaging (FCM)\u3092\u4ecb\u3057\u3066\u5404OS\u306e\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u9001\u4fe1\u7528\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u65b9\u5f0f\u306e\u5168\u4f53\u50cf\u3092\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",src:n(5864).Z,width:"1046",height:"575"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u306e\u521d\u56de\u8d77\u52d5\u6642\u306b\u767b\u9332\u30c8\u30fc\u30af\u30f3\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u30c8\u30fc\u30af\u30f3\u306f\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u5b9b\u5148\u3068\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u767b\u9332\u30c8\u30fc\u30af\u30f3\u306f\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d0\u3067\u4e00\u5143\u7ba1\u7406\u3057\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d0\u304c\u767b\u9332\u30c8\u30fc\u30af\u30f3\u3092\u7528\u3044\u3066FCM\u3078\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u9001\u4fe1\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u308a\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"FCM\u306f\u6b21\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u4ecb\u3057\u3066\u5404\u7aef\u672b\u3078\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Android: Android Transport Layer (ATL)"),(0,r.kt)("li",{parentName:"ul"},"Apple Push Notification service (APNs)")))),(0,r.kt)("h3",{id:"\u767b\u9332\u30c8\u30fc\u30af\u30f3\u306e\u7ba1\u7406"},"\u767b\u9332\u30c8\u30fc\u30af\u30f3\u306e\u7ba1\u7406"),(0,r.kt)("p",null,"\u767b\u9332\u30c8\u30fc\u30af\u30f3\u306f\u30a2\u30d7\u30ea\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4e00\u610f\u306b\u8b58\u5225\u3059\u308b\u6587\u5b57\u5217\u3067\u3059\u3002\n\u30a2\u30d7\u30ea\u306e\u521d\u56de\u8d77\u52d5\u6642\u306bFCM SDK\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u307e\u3059\u3002\n\u3053\u306e\u30c8\u30fc\u30af\u30f3\u3092\u7528\u3044\u3066\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/cloud-messaging/manage-tokens"},"FCM\u767b\u9332\u30c8\u30fc\u30af\u30f3\u7ba1\u7406\u306e\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9"),"\u306b\u5f93\u3044\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d0\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3067\u767b\u9332\u30c8\u30fc\u30af\u30f3\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002\n\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3001\u767b\u9332\u30c8\u30fc\u30af\u30f3\u3001\u767b\u9332\u65e5\u6642\u306e\u7d44\u3092\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3067\u7ba1\u7406\u3057\u3001\u6b21\u306e\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30ed\u30b0\u30a4\u30f3\u3084\u30ed\u30b0\u30a2\u30a6\u30c8"),(0,r.kt)("li",{parentName:"ul"},"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u9001\u4fe1\u30a8\u30e9\u30fc\u53d7\u4fe1\u6642")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u767b\u9332\u30c8\u30fc\u30af\u30f3\u306f\u6b21\u306e\u3088\u3046\u306a\u5834\u5408\u306b\u5909\u66f4\u3055\u308c\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u304c\u65b0\u3057\u3044\u30c7\u30d0\u30a4\u30b9\u3067\u5fa9\u5143\u3055\u308c\u308b\u5834\u5408"),(0,r.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u304c\u30a2\u30d7\u30ea\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb / \u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5834\u5408"),(0,r.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u304c\u30a2\u30d7\u30ea\u306e\u30c7\u30fc\u30bf\u3092\u6d88\u53bb\u3059\u308b\u5834\u5408"))),(0,r.kt)("h3",{id:"fcm\u3092\u4ecb\u3057\u305f\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u9001\u4fe1"},"FCM\u3092\u4ecb\u3057\u305f\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u9001\u4fe1"),(0,r.kt)("p",null,"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d0\u304b\u3089FCM\u3078\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u9001\u4fe1\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u308a\u307e\u3059\u3002\nFCM\u3068\u306e\u9023\u643a\u306b\u5fc5\u8981\u306a\u30b5\u30fc\u30d3\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u7528\u306e\u79d8\u5bc6\u9375\uff08JSON\uff09\u306f\u74b0\u5883\u5909\u6570\u306b\u4fdd\u6301\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u306f\u30c7\u30d0\u30a4\u30b9\u6307\u5b9a\u3067\u9001\u4fe1\u3057\u307e\u3059\u3002\n\u901a\u77e5\u306f\u30a2\u30ab\u30a6\u30f3\u30c8\u5358\u4f4d\u3068\u3057\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u7d10\u3065\u304f\u5168\u30c7\u30d0\u30a4\u30b9\u3078\u9001\u4fe1\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u9001\u4fe1\u52b9\u7387\u306e\u305f\u3081\u30de\u30eb\u30c1\u30ad\u30e3\u30b9\u30c8\u9001\u4fe1\u3092\u7528\u3044\u3066\u8907\u6570\u306e\u5b9b\u5148\u3078\u540c\u6642\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002 \u5b9b\u5148\u304c500\u30c7\u30d0\u30a4\u30b9\u3092\u8d85\u3048\u308b\u5834\u5408\u306f\u3001\u8907\u6570\u56de\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u5206\u3051\u3066\u9001\u4fe1\u3057\u307e\u3059\u3002FCM\u304b\u3089\u7121\u52b9\u306a\u30c8\u30fc\u30af\u30f3\u306e\u30a8\u30e9\u30fc\u5fdc\u7b54\uff08UNREGISTERD\uff09\u304c\u8fd4\u3063\u3066\u304d\u305f\u5834\u5408\u3001\u767b\u9332\u30c8\u30fc\u30af\u30f3\u3092\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304b\u3089\u524a\u9664\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"fcm\u306e\u8a2d\u5b9a"},"FCM\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"FCM\u304cAPNs\u3092\u4ecb\u3057\u3066\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u9001\u4fe1\u3059\u308b\u305f\u3081\u306b\u306f\u3001Apple Developer\u30a2\u30ab\u30a6\u30f3\u30c8\u306eAPNs Auth Key\u3092FCM\u306b\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u307e\u305f\u3001\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u304c\u6709\u52b9\u5316\u3055\u308c\u305f\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u3092\u7528\u3044\u3066\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b\u3053\u3068\u3082\u5fc5\u8981\u3067\u3059\u3002\n",(0,r.kt)("a",{parentName:"p",href:"https://rnfirebase.io/messaging/usage/ios-setup"},"iOS Messaging Setup"),"\u306b\u5f93\u3044\u3001\u4e8b\u524d\u306b\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"APNs\u3092\u5229\u7528\u3059\u308b\u306b\u306f\u3001\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\uff08p8\u5f62\u5f0f\uff09\u307e\u305f\u306f\u30b5\u30fc\u30d0\u8a3c\u660e\u66f8\uff08p12\u5f62\u5f0f\uff09\u304c\u5fc5\u8981\u3067\u3059\u3002\nAPNs Auth Key\u306f\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u306e\u3053\u3068\u3067\u3042\u308a\u3001Firebase\u3067\u306f\u3053\u3061\u3089\u306e\u4f7f\u7528\u304c\u63a8\u5968\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u305d\u308c\u305e\u308c\u7279\u5fb4\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30ab\u30a6\u30f3\u30c8\u5358\u4f4d\u3067\u7ba1\u7406\uff08\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u4fdd\u6709\u3059\u308b\u5168\u30a2\u30d7\u30ea\u3067\u4f7f\u7528\u53ef\u80fd\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u672c\u756a\u74b0\u5883\u3068\u958b\u767a\u74b0\u5883\u3067\u540c\u3058\u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u6709\u52b9\u671f\u9650\u306f\u7121\u671f\u9650"),(0,r.kt)("li",{parentName:"ul"},"1\u3064\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u30672\u3064\u307e\u3067\u3057\u304b\u767a\u884c\u3067\u304d\u306a\u3044"))),(0,r.kt)("li",{parentName:"ul"},"\u30b5\u30fc\u30d0\u8a3c\u660e\u66f8",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u5358\u4f4d\u3067\u7ba1\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u672c\u756a\u74b0\u5883\u3068\u958b\u767a\u74b0\u5883\u3067\u5225\u3005\u306b\u8a3c\u660e\u66f8\u304c\u5fc5\u8981"),(0,r.kt)("li",{parentName:"ul"},"\u6709\u52b9\u671f\u9650\u306f1\u5e74\u3067\u6bce\u5e74\u306e\u66f4\u65b0\u304c\u5fc5\u8981"))))),(0,r.kt)("h2",{id:"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805"},"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-008-push-notification"},"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u65b9\u5f0f\u306e\u65b9\u91dd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-009-push-notification-fcm"},"FCM \u3092\u7528\u3044\u305f\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u7ba1\u7406\u65b9\u91dd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-010-push-notification-contents"},"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u5185\u5bb9\u306b\u95a2\u3059\u308b\u65b9\u91dd"))))}m.isMDXComponent=!0},5864:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/push-notification-architecture.drawio-89b23d9255f95f4cf0410c22a74267c4.png"}}]);