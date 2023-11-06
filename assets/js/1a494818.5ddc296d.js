"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(l,".").concat(m)]||s[m]||v[m]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>v,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u53d6\u308a\u6271\u3044",sidebar_label:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u53d6\u308a\u6271\u3044"},o=void 0,c={unversionedId:"react-native/santoku/application-architecture/cache-management/overview",id:"react-native/santoku/application-architecture/cache-management/overview",title:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u53d6\u308a\u6271\u3044",description:"\u57fa\u672c\u65b9\u91dd",source:"@site/docs/react-native/santoku/application-architecture/cache-management/overview.mdx",sourceDirName:"react-native/santoku/application-architecture/cache-management",slug:"/react-native/santoku/application-architecture/cache-management/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/cache-management/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1642653777,formattedLastUpdatedAt:"2022\u5e741\u670820\u65e5",frontMatter:{title:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u53d6\u308a\u6271\u3044",sidebar_label:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u53d6\u308a\u6271\u3044"},sidebar:"santoku",previous:{title:"HTTP API\u901a\u4fe1\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/http-api/http-api-error-handling"},next:{title:"\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u5c0e\u5165",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/third-party-libraries/overview"}},l={},p=[{value:"\u57fa\u672c\u65b9\u91dd",id:"\u57fa\u672c\u65b9\u91dd",level:2},{value:"\u5404\u7a2e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u306e\u53d6\u308a\u6271\u3044",id:"\u5404\u7a2e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u306e\u53d6\u308a\u6271\u3044",level:2},{value:"HTTP\u901a\u4fe1\u306e\u30ad\u30e3\u30c3\u30b7\u30e5",id:"http\u901a\u4fe1\u306e\u30ad\u30e3\u30c3\u30b7\u30e5",level:3},{value:"\u8868\u793a\u753b\u50cf\u306e\u30ad\u30e3\u30c3\u30b7\u30e5",id:"\u8868\u793a\u753b\u50cf\u306e\u30ad\u30e3\u30c3\u30b7\u30e5",level:3},{value:"\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u9078\u629e\u306e\u30ad\u30e3\u30c3\u30b7\u30e5",id:"\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u9078\u629e\u306e\u30ad\u30e3\u30c3\u30b7\u30e5",level:3},{value:"\u305d\u306e\u4ed6\u306e\u30a2\u30d7\u30ea\u56fa\u6709\u306e\u30ad\u30e3\u30c3\u30b7\u30e5",id:"\u305d\u306e\u4ed6\u306e\u30a2\u30d7\u30ea\u56fa\u6709\u306e\u30ad\u30e3\u30c3\u30b7\u30e5",level:3}],u={toc:p},s="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u57fa\u672c\u65b9\u91dd"},"\u57fa\u672c\u65b9\u91dd"),(0,a.kt)("p",null,"\u30a2\u30d7\u30ea\u5185\u3067\u5229\u7528\u3059\u308b\u5404\u7a2e\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u3001\u69d8\u3005\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u3092\u751f\u6210\u3057\u307e\u3059\u3002\n\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u306f\u57fa\u672c\u7684\u306b\u306f\u3001\u5185\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\n\u3057\u304b\u3057\u3001\u4e00\u90e8\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u304c\u5916\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306b\u4fdd\u5b58\u3055\u308c\u308b\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u5185\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u4fdd\u5b58\u3055\u308c\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u306f\u3001\u539f\u5247\u4ed6\u306e\u30a2\u30d7\u30ea\u304b\u3089\u8aad\u307f\u53d6\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\n\u3057\u304b\u3057\u7aef\u672b\u306eroot\u6a29\u9650\u3092\u596a\u53d6\u3055\u308c\u308b\u3088\u3046\u306a\u4f8b\u5916\u7684\u306a\u30b1\u30fc\u30b9\u3067\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u53d6\u3089\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\n\u5916\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u4fdd\u5b58\u3055\u308c\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u306f\u3001\u4ed6\u306e\u30a2\u30d7\u30ea\u304b\u3089\u8aad\u307f\u53d6\u3089\u308c\u305f\u308a\u3001\u6539\u3056\u3093\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u6a5f\u5bc6\u6027\u306e\u9ad8\u3044\u60c5\u5831\u3092\u53d6\u308a\u6271\u308f\u306a\u3044\u305f\u3081\u3001\u5185\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u3078\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u306e\u683c\u7d0d\u306f\u8a31\u5bb9\u3057\u307e\u3059\u3002\n\u305f\u3060\u3057\u3001\u4e0d\u8981\u306b\u306a\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u304c\u7279\u5b9a\u3067\u304d\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u306f\u3001\u53ef\u80fd\u306a\u9650\u308a\u4e0d\u8981\u306b\u306a\u3063\u305f\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u660e\u793a\u7684\u306b\u524a\u9664\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u307e\u305f\u3001\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u5916\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306f\u5229\u7528\u3057\u307e\u305b\u3093\u3002\n\u30c6\u30b9\u30c8\u6642\u306b\u306f\u3001\u5916\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306b\u610f\u56f3\u305b\u305a\u30c7\u30fc\u30bf\u304c\u66f8\u304d\u51fa\u3055\u308c\u3066\u3044\u306a\u3044\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u5404\u7a2e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u306e\u53d6\u308a\u6271\u3044"},"\u5404\u7a2e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u306e\u53d6\u308a\u6271\u3044"),(0,a.kt)("h3",{id:"http\u901a\u4fe1\u306e\u30ad\u30e3\u30c3\u30b7\u30e5"},"HTTP\u901a\u4fe1\u306e\u30ad\u30e3\u30c3\u30b7\u30e5"),(0,a.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u30d0\u30c3\u30af\u30a8\u30f3\u30c9API\u3068\u306eHTTP\u901a\u4fe1\u306baxios\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u7528\u3044\u307e\u3059\u3002\nReact Native\u3067axios\u3092\u7528\u3044\u3066HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b\u5834\u5408\u3001Android\u3001iOS\u7aef\u672b\u3067\u306fHTTP\u901a\u4fe1\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u304c\u5185\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\n\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u306b\u306f\u3001HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u5b9b\u5148URL\u3001\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u30d8\u30c3\u30c0\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u30dc\u30c7\u30a3\u306a\u3069\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u6a5f\u5bc6\u60c5\u5831\u3092\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u3084\u30ec\u30b9\u30dd\u30f3\u30b9\u5185\u3067\u306f\u53d6\u308a\u6271\u308f\u306a\u3044\u305f\u3081\u3001\u5185\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u3078\u306eHTTP\u901a\u4fe1\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u306e\u683c\u7d0d\u306f\u8a31\u5bb9\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u8868\u793a\u753b\u50cf\u306e\u30ad\u30e3\u30c3\u30b7\u30e5"},"\u8868\u793a\u753b\u50cf\u306e\u30ad\u30e3\u30c3\u30b7\u30e5"),(0,a.kt)("p",null,"React Native\u306eImage\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3084\u305d\u308c\u3092\u30d9\u30fc\u30b9\u306b\u3057\u305f\u753b\u50cf\u8868\u793a\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u7528\u3044\u3066\u5916\u90e8URL\u306e\u753b\u50cf\u3092\u8868\u793a\u3057\u305f\u5834\u5408\u3001\n\u8868\u793a\u3057\u305f\u753b\u50cf\u304c\u5185\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u5185\u3067\u8868\u793a\u3059\u308b\u753b\u50cf\u306f\u30a2\u30d0\u30bf\u30fc\u753b\u50cf\u306e\u307f\u3067\u79d8\u533f\u3059\u308b\u5fc5\u8981\u304c\u306a\u3044\u305f\u3081\u3001\u5185\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u3078\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u753b\u50cf\u306e\u683c\u7d0d\u306f\u8a31\u5bb9\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u9078\u629e\u306e\u30ad\u30e3\u30c3\u30b7\u30e5"},"\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u9078\u629e\u306e\u30ad\u30e3\u30c3\u30b7\u30e5"),(0,a.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u306f\u3001\u30a2\u30d0\u30bf\u30fc\u753b\u50cf\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306e\u969b\u306b\u3001\u7aef\u672b\u5185\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u30a2\u30d0\u30bf\u30fc\u753b\u50cf\u3092\u9078\u629e\u3059\u308b\u6a5f\u80fd\u3092\u6709\u3057\u307e\u3059\u3002\n\u753b\u50cf\u3092\u7aef\u672b\u5185\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u9078\u629e\u3059\u308b\u969b\u306b\u306f\u3001\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u3088\u3063\u3066\u306f\u9078\u629e\u3057\u305f\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u304c\u4e00\u6642\u7684\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u683c\u7d0d\u3055\u308c\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u5185\u3067\u7aef\u672b\u5185\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u9078\u629e\u3059\u308b\u753b\u50cf\u306f\u30a2\u30d0\u30bf\u30fc\u753b\u50cf\u306e\u307f\u3067\u79d8\u533f\u3059\u308b\u5fc5\u8981\u304c\u306a\u3044\u305f\u3081\u3001\u5185\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u3078\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u753b\u50cf\u306e\u683c\u7d0d\u306f\u8a31\u5bb9\u3057\u307e\u3059\u3002\n\u305f\u3060\u3057\u3001\u753b\u50cf\u306e\u9078\u629e\u5f8c\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u51e6\u7406\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u753b\u50cf\u3092\u660e\u793a\u7684\u306b\u524a\u9664\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u305d\u306e\u4ed6\u306e\u30a2\u30d7\u30ea\u56fa\u6709\u306e\u30ad\u30e3\u30c3\u30b7\u30e5"},"\u305d\u306e\u4ed6\u306e\u30a2\u30d7\u30ea\u56fa\u6709\u306e\u30ad\u30e3\u30c3\u30b7\u30e5"),(0,a.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u5229\u7528\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u3088\u3063\u3066\u81ea\u52d5\u7684\u306b\u751f\u6210\u3055\u308c\u308b\u3082\u306e\u3092\u9664\u304d\u3001\u30a2\u30d7\u30ea\u56fa\u6709\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u306f\u751f\u6210\u3057\u307e\u305b\u3093\u3002\n\u3082\u3057\u5fc5\u8981\u304c\u751f\u3058\u305f\u5834\u5408\u306b\u306f\u3001\u4e00\u6642\u7684\u306a\u30c7\u30fc\u30bf\u3084\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u306f\u5185\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002\n\u5916\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306f\u5229\u7528\u3057\u307e\u305b\u3093\u3002"))}v.isMDXComponent=!0}}]);