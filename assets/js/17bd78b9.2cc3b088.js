"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1730],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,b=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?a.createElement(b,o(o({ref:t},s),{},{components:r})):a.createElement(b,o({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1554:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o={title:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",sidebar_label:"Overview"},c=void 0,l={unversionedId:"react-native/santoku/application-architecture/error-handling/overview",id:"react-native/santoku/application-architecture/error-handling/overview",isDocsHomePage:!1,title:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",description:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306b\u30a8\u30e9\u30fc\u306e\u5185\u5bb9\u3068\u3001\u3069\u306e\u3088\u3046\u306a\u624b\u9806\u3067\u64cd\u4f5c\u3092\u3059\u308c\u3070\u30a8\u30e9\u30fc\u304b\u3089\u56de\u5fa9\u3067\u304d\u308b\u304b\u3092\u30e6\u30fc\u30b6\u306b\u4f1d\u3048\u308b\u4e8b\u304c\u5927\u5207\u3067\u3059\u3002\u4f55\u3082\u4f1d\u3048\u305a\u306b\u30a2\u30d7\u30ea\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u3057\u3066\u3057\u307e\u3046\u3068\u3001\u30e6\u30fc\u30b6\u306e\u30a2\u30d7\u30ea\u96e2\u8131\u7387\u304c\u9ad8\u304f\u306a\u308b\u4e00\u56e0\u306b\u306a\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u30a2\u30d7\u30ea\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u3057\u3066\u3057\u307e\u3063\u305f\u5834\u5408\u306f\u3001\u3069\u306e\u3088\u3046\u306a\u64cd\u4f5c\u3067\u30a2\u30d7\u30ea\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u3057\u305f\u304b\u3092\u7279\u5b9a\u3059\u308b\u3053\u3068\u3082\u91cd\u8981\u3067\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/error-handling/overview.mdx",sourceDirName:"react-native/santoku/application-architecture/error-handling",slug:"/react-native/santoku/application-architecture/error-handling/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/error-handling/overview",tags:[],version:"current",lastUpdatedAt:1628066059,formattedLastUpdatedAt:"2021/8/4",frontMatter:{title:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",sidebar_label:"Overview"},sidebar:"santoku",previous:{title:"\u30a2\u30d7\u30ea\u8d77\u52d5\u5f8c\u306e\u521d\u671f\u5316\u51e6\u7406",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/life-cycle-managing/initialization"},next:{title:"\u30a8\u30e9\u30fc\u306e\u767a\u751f\u7b87\u6240\u3068\u51e6\u7406\u65b9\u6cd5",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/error-handling/how-to-handle-error"}},p=[{value:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u306e\u5168\u4f53\u50cf",id:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u306e\u5168\u4f53\u50cf",children:[]}],s={toc:p};function u(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306b\u30a8\u30e9\u30fc\u306e\u5185\u5bb9\u3068\u3001\u3069\u306e\u3088\u3046\u306a\u624b\u9806\u3067\u64cd\u4f5c\u3092\u3059\u308c\u3070\u30a8\u30e9\u30fc\u304b\u3089\u56de\u5fa9\u3067\u304d\u308b\u304b\u3092\u30e6\u30fc\u30b6\u306b\u4f1d\u3048\u308b\u4e8b\u304c\u5927\u5207\u3067\u3059\u3002\u4f55\u3082\u4f1d\u3048\u305a\u306b\u30a2\u30d7\u30ea\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u3057\u3066\u3057\u307e\u3046\u3068\u3001\u30e6\u30fc\u30b6\u306e\u30a2\u30d7\u30ea\u96e2\u8131\u7387\u304c\u9ad8\u304f\u306a\u308b\u4e00\u56e0\u306b\u306a\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u30a2\u30d7\u30ea\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u3057\u3066\u3057\u307e\u3063\u305f\u5834\u5408\u306f\u3001\u3069\u306e\u3088\u3046\u306a\u64cd\u4f5c\u3067\u30a2\u30d7\u30ea\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u3057\u305f\u304b\u3092\u7279\u5b9a\u3059\u308b\u3053\u3068\u3082\u91cd\u8981\u3067\u3059\u3002"),(0,i.kt)("p",null,"React Native\u3092\u4f7f\u7528\u3057\u305f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u306f\u3001\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u3092\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3057\u306a\u3044\u3068\u30a2\u30d7\u30ea\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u57fa\u672c\u65b9\u91dd\u3068\u3057\u3066\u3001\u30a8\u30e9\u30fc\u306e\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u7b87\u6240\u306b\u3064\u3044\u3066\u306f\u500b\u5225\u306b\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u3066\u30a8\u30e9\u30fc\u306e\u5185\u5bb9\u3068\u5fa9\u65e7\u624b\u9806\u3092\u9069\u5207\u306b\u30e6\u30fc\u30b6\u306b\u4f1d\u3048\u307e\u3059\u3002\u307e\u305f\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066Firebase Crashlytics\u306b\u30a8\u30e9\u30fc\u30ed\u30b0\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u305f\u3060\u3057\u3001\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u6f0f\u308c\u304c\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u306f\u306a\u3044\u3068\u306f\u65ad\u8a00\u3067\u304d\u306a\u3044\u305f\u3081\u3001\u672a\u51e6\u7406\u306e\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u3066Firebase Crashlytics\u306b\u30af\u30e9\u30c3\u30b7\u30e5\u30ed\u30b0\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u306e\u5168\u4f53\u50cf"},"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u306e\u5168\u4f53\u50cf"),(0,i.kt)("p",null,"SantokuApp\u3067\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u3066Firebase Crashlytics\u306b\u30ed\u30b0\u3092\u9001\u4fe1\u3059\u308b\u5168\u4f53\u50cf\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",src:r(4577).Z})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u51e6\u7406\u30d1\u30bf\u30fc\u30f3"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u51e6\u7406\u6982\u8981"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u51e6\u7406\u30d1\u30bf\u30fc\u30f3\u2460"),(0,i.kt)("td",{parentName:"tr",align:"left"},"JavaScript Module\u3067\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u305f\u5834\u5408\u306f\u3001\u30a8\u30e9\u30fc\u5185\u5bb9\u3092UI\u8868\u793a\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066React Native Firebase Crashlytics\u3092\u7d4c\u7531\u3057\u3066Firebase Crashlytics\u306b\u30a8\u30e9\u30fc\u30ed\u30b0\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u51e6\u7406\u30d1\u30bf\u30fc\u30f3\u2461"),(0,i.kt)("td",{parentName:"tr",align:"left"},"JavaScript Module\u3067\u672a\u51e6\u7406\u306e\u30a8\u30e9\u30fc\u306f\u3001React Native\u306eBridge\u3092\u7d4c\u7531\u3057\u3066\u6700\u7d42\u7684\u306b\u306fFirebase Crashlytics SDK\u306b\u3088\u3063\u3066\u6355\u6349\u3055\u308c\u307e\u3059\u3002Firebase Crashlytics SDK\u306f\u30af\u30e9\u30c3\u30b7\u30e5\u30ed\u30b0\u3092Firebase Crashlytics\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u51e6\u7406\u30d1\u30bf\u30fc\u30f3\u2462"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Native Module\u3067\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u30a8\u30e9\u30fc\u5185\u5bb9\u3092UI\u8868\u793a\u3059\u308b\u306b\u306f\u3001React Native\u306eBridge\u3092\u7d4c\u7531\u3057\u3066\u30a8\u30e9\u30fc\u3092JavaScript Module\u306b\u9023\u643a\u3057\u307e\u3059\u3002\u30a8\u30e9\u30fc\u3092\u53d7\u3051\u53d6\u3063\u305fJavaScript Module\u306f\u30a8\u30e9\u30fc\u5185\u5bb9\u3092UI\u8868\u793a\u3057\u307e\u3059\u3002\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u3001\u76f4\u63a5Firebase Crashlytics SDK\u3092\u4f7f\u7528\u3057\u3066Firebase Crashlytics\u306b\u30a8\u30e9\u30fc\u30ed\u30b0\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u51e6\u7406\u30d1\u30bf\u30fc\u30f3\u2463"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Native Module\u3067\u30a8\u30e9\u30fc\u3092\u6355\u6349\u5f8c\u3001Firebase Crashlytics SDK\u3092\u4f7f\u7528\u3057\u3066Firebase Crashlytics\u306b\u30a8\u30e9\u30fc\u30ed\u30b0\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002\u30a8\u30e9\u30fc\u5185\u5bb9\u3092UI\u8868\u793a\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u76f4\u63a5Firebase Crashlytics SDK\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u51e6\u7406\u30d1\u30bf\u30fc\u30f3\u2464"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Native Module\u3067\u672a\u51e6\u7406\u306e\u30a8\u30e9\u30fc\u306f\u3001Firebase Crashlytics SDK\u306b\u6355\u6349\u3055\u308c\u307e\u3059\u3002Firebase Crashlytics SDK\u306f\u30af\u30e9\u30c3\u30b7\u30e5\u30ed\u30b0\u3092Firebase Crashlytics\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002")))))}u.isMDXComponent=!0},4577:function(e,t,r){t.Z=r.p+"assets/images/error-handling-architecture.drawio-cd80b0213a4bd16bc76478ca58f88c3c.png"}}]);