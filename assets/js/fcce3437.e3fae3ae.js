"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7479],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),m=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),k=m(a),c=n,f=k["".concat(o,".").concat(c)]||k[c]||d[c]||i;return a?r.createElement(f,l(l({ref:e},s),{},{components:a})):r.createElement(f,l({ref:e},s))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,l[1]=p;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},47962:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const i={title:"UI\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u9078\u5b9a"},l=void 0,p={unversionedId:"react-native/santoku/decisions/adr-014-ui-libraries",id:"react-native/santoku/decisions/adr-014-ui-libraries",title:"UI\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u9078\u5b9a",description:"Status: Accepted",source:"@site/docs/react-native/santoku/decisions/adr-014-ui-libraries.mdx",sourceDirName:"react-native/santoku/decisions",slug:"/react-native/santoku/decisions/adr-014-ui-libraries",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-014-ui-libraries",draft:!1,tags:[],version:"current",lastUpdatedAt:1658482632,formattedLastUpdatedAt:"2022\u5e747\u670822\u65e5",frontMatter:{title:"UI\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u9078\u5b9a"},sidebar:"santoku",previous:{title:"React Query\u3092\u7528\u3044\u305f\u958b\u767a\u65b9\u91dd",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-013-react-query"}},o={},m=[{value:"\u8981\u7d04",id:"\u8981\u7d04",level:2},{value:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",level:2},{value:"\u8b70\u8ad6",id:"\u8b70\u8ad6",level:2},{value:"UI\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u6bd4\u8f03",id:"ui\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u6bd4\u8f03",level:3},{value:"UI\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u5229\u7528\u3057\u305f\u969b\u306e\u6ce8\u610f\u70b9",id:"ui\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u5229\u7528\u3057\u305f\u969b\u306e\u6ce8\u610f\u70b9",level:3},{value:"React Native + \u30c6\u30fc\u30de\u6a5f\u80fd",id:"react-native--\u30c6\u30fc\u30de\u6a5f\u80fd",level:3},{value:"\u6c7a\u5b9a",id:"\u6c7a\u5b9a",level:2}],s={toc:m};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Status: Accepted"),(0,n.kt)("h2",{id:"\u8981\u7d04"},"\u8981\u7d04"),(0,n.kt)("p",null,"\u30a2\u30d7\u30ea\u3067\u5229\u7528\u3059\u308bUI\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u6bd4\u8f03\u30fb\u5c0e\u5165\u306e\u691c\u8a0e\u3092\u5b9f\u65bd\u3057\u307e\u3057\u305f\u3002\n\u691c\u8a0e\u3057\u305f\u7d50\u679c\u3001UI\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u4ed5\u69d8\u306b\u6e96\u62e0\u3057\u305f\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b\u4e0a\u3067\u306f\u591a\u304f\u306e\u30e1\u30ea\u30c3\u30c8\u3092\u4eab\u53d7\u3067\u304d\u308b\u53cd\u9762\u3001\u72ec\u81ea\u30c7\u30b6\u30a4\u30f3\u306e\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u306f\u3001\u5fc5\u305a\u3057\u3082\u305d\u3046\u3067\u306f\u306a\u3044\u5834\u9762\u3082\u3042\u308a\u307e\u3057\u305f\u3002"),(0,n.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306fUI\u69cb\u7bc9\u306b\u95a2\u3059\u308b\u57fa\u672c\u65b9\u91dd\u3092\u4ee5\u4e0b\u3068\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"React Native\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u5229\u7528\u3001\u3082\u3057\u304f\u306f\u305d\u308c\u3089\u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u90e8\u54c1\u3092\u4f5c\u6210\u3059\u308b"),(0,n.kt)("li",{parentName:"ul"},"\u30c6\u30fc\u30de\u6a5f\u80fd\u3068\u3057\u3066\u3001",(0,n.kt)("inlineCode",{parentName:"li"},"@shopify/restyle"),"\u3092\u5c0e\u5165\u3059\u308b")),(0,n.kt)("h2",{id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"},"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"),(0,n.kt)("p",null,"React Native\u306b\u306f\u3001\u30a2\u30d7\u30ea\u5168\u4f53\u306e\u30c6\u30fc\u30de\u3092\u8a2d\u5b9a\u3059\u308b\u6a5f\u80fd\u304c\u3042\u308a\u307e\u305b\u3093\u3002\u307e\u305f\u3001\u7528\u610f\u3055\u308c\u3066\u3044\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3082\u5c11\u306a\u3044\u305f\u3081\u3001\u30a2\u30d7\u30ea\u306eUI\u3092\u69cb\u7bc9\u3059\u308b\u305f\u3081\u306b\u591a\u304f\u306e\u90e8\u54c1\u3092\u81ea\u5206\u9054\u3067\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u305d\u308c\u3089\u306e\u8db3\u308a\u306a\u3044\u90e8\u5206\u3092\u88dc\u3046\u624b\u6bb5\u3068\u3057\u3066\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306eUI\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u5c0e\u5165\u3092\u691c\u8a0e\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u8b70\u8ad6"},"\u8b70\u8ad6"),(0,n.kt)("h3",{id:"ui\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u6bd4\u8f03"},"UI\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u6bd4\u8f03"),(0,n.kt)("p",null,"UI\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u691c\u8a0e\u306b\u3042\u305f\u308a\u3001\u3044\u304f\u3064\u304b\u306e\u5019\u88dc\u3092\u6319\u3052\u3066\u6bd4\u8f03\u3057\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"UI\u30e9\u30a4\u30d6\u30e9\u30ea"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u30e9\u30a4\u30bb\u30f3\u30b9"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Github star"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u958b\u767a\u6bcd\u4f53"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u30c6\u30fc\u30de\u6a5f\u80fd",(0,n.kt)("sup",{parentName:"th",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\u306e\u6709\u7121"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://rn.mobile.ant.design/"},"Ant Design Mobile RN(5.0.0)")),(0,n.kt)("td",{parentName:"tr",align:"left"},"MIT License"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2.5k"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Ant Design Team"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u25cb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://nativebase.io/"},"NativeBase(3.4.6)")),(0,n.kt)("td",{parentName:"tr",align:"left"},"MIT License"),(0,n.kt)("td",{parentName:"tr",align:"left"},"17.9k"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GeekyAnts"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u25cb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://reactnativeelements.com/"},"React Native Elements(4.0.0-rc.5)")),(0,n.kt)("td",{parentName:"tr",align:"left"},"MIT License"),(0,n.kt)("td",{parentName:"tr",align:"left"},"22.5k"),(0,n.kt)("td",{parentName:"tr",align:"left"},"React Native Elements"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u25cb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://callstack.github.io/react-native-paper/"},"React Native Paper(4.12.1)")),(0,n.kt)("td",{parentName:"tr",align:"left"},"MIT License"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9.4k"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Callstack"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u25cb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://wix.github.io/react-native-ui-lib/"},"RNUILib(6.17.2)")),(0,n.kt)("td",{parentName:"tr",align:"left"},"MIT License"),(0,n.kt)("td",{parentName:"tr",align:"left"},"4.5k"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Wix.com"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u25cb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://akveo.github.io/react-native-ui-kitten/"},"UI Kitten(5.1.2)")),(0,n.kt)("td",{parentName:"tr",align:"left"},"MIT License"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9.1k"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Akveo"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u25cb")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"UI\u30e9\u30a4\u30d6\u30e9\u30ea"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7279\u5fb4"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Ant Design Mobile RN"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://ant.design/"},"Ant Design"),"\u306e\u30e2\u30d0\u30a4\u30eb\u4ed5\u69d8\u3067\u3059\u3002\u6bd4\u8f03\u691c\u8a0e\u306b\u5229\u7528\u3057\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff08\u5f53\u6642\u306e\u6700\u65b0\u7248\uff09\u3067\u306f\u3001Ant Design Mobile RN\u304c\u4f9d\u5b58\u3057\u3066\u3044\u308b\u4ee5\u4e0b\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u304c\u3053\u306e\u30a2\u30d7\u30ea\u3067\u5229\u7528\u3057\u3066\u3044\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u5408\u308f\u306a\u304b\u3063\u305f\u305f\u3081\u3001\u6bd4\u8f03\u691c\u8a0e\u3092\u65ad\u5ff5\u3057\u307e\u3057\u305f\u3002",(0,n.kt)("br",null),"\u30fb",(0,n.kt)("a",{parentName:"td",href:"https://github.com/react-native-picker/picker"},"@react-native-picker/picker"),"\uff08Ant Design Mobile RN: ",(0,n.kt)("inlineCode",{parentName:"td"},"^1.9.10"),"\u3001\u30a2\u30d7\u30ea: ",(0,n.kt)("inlineCode",{parentName:"td"},"2.4.0"),"\uff09",(0,n.kt)("br",null),"\u30fb",(0,n.kt)("a",{parentName:"td",href:"https://github.com/software-mansion/react-native-gesture-handler"},"react-native-gesture-handler"),"\uff08Ant Design Mobile RN: ",(0,n.kt)("inlineCode",{parentName:"td"},"^1.10.3"),"\u3001\u30a2\u30d7\u30ea: ",(0,n.kt)("inlineCode",{parentName:"td"},"~2.2.1"),"\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"NativeBase"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Styled System\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u305fUI\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3001\u30c6\u30fc\u30de\u6a5f\u80fd\u3082\u8c4a\u5bcc\u3067\u3001\u30ec\u30b9\u30dd\u30f3\u30b7\u30d6\u306a\u30c7\u30b6\u30a4\u30f3\u3092\u8003\u616e\u3057\u305f",(0,n.kt)("a",{parentName:"td",href:"https://docs.nativebase.io/breakpoints"},"Breakpoints"),"\u306a\u3069\u306e\u6a5f\u80fd\u3082\u3042\u308a\u307e\u3059\u3002\u30a2\u30d7\u30ea\u306e\u30c7\u30b6\u30a4\u30f3\u306b\u5fdc\u3058\u305f\u30ab\u30e9\u30fc\u30b9\u30ad\u30fc\u30de\u3092\u7528\u610f\u3059\u308b\u3053\u3068\u3067\u3001\u5404\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u7279\u6027\u3084\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u306b\u5fdc\u3058\u305f\u914d\u8272\u3067UI\u3092\u8868\u793a\u3057\u3066\u304f\u308c\u307e\u3059\u3002\u307e\u305f\u3001CSS\u306e",(0,n.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/ja/docs/Web/CSS/gap"},"gap"),"\u306b\u4f3c\u305f\u6a5f\u80fd\u3092\u3082\u3064\u30ec\u30a4\u30a2\u30a6\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u4f7f\u3044\u3084\u3059\u304f\u3001\u76f4\u611f\u7684\u306bUI\u306e\u914d\u7f6e\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"React Native Elements"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4ed6\u306eUI\u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u6bd4\u8f03\u3059\u308b\u3068\u30b7\u30f3\u30d7\u30eb\u306a\u30c7\u30b6\u30a4\u30f3\u304c\u7279\u5fb4\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u7528\u610f\u3055\u308c\u3066\u3044\u308b\u30c7\u30b6\u30a4\u30f3\u30c8\u30fc\u30af\u30f3\u306a\u3069\u306f\u5c11\u306a\u3044\u3067\u3059\u304c\u3001\u30c6\u30fc\u30de\u6a5f\u80fd\u3092\u62e1\u5f35\u3059\u308b\u3053\u3068\u3067\u67d4\u8edf\u306b\u5bfe\u5fdc\u3067\u304d\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u691c\u8a0e\u6642\u306b\u5229\u7528\u3057\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u306fRelease Candidate version\u3068\u306a\u3063\u3066\u304a\u308a\u3001Stable\u306a\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u4f9d\u5b58\u30e9\u30a4\u30d6\u30e9\u30ea\u304c\u3053\u306e\u30a2\u30d7\u30ea\u3067\u5229\u7528\u3057\u3066\u3044\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u5408\u3044\u307e\u305b\u3093\u3067\u3057\u305f\u3002",(0,n.kt)("br",null),"\u30fb",(0,n.kt)("a",{parentName:"td",href:"https://github.com/th3rdwave/react-native-safe-area-context"},"react-native-safe-area-context"),"\uff08React Native Elements: ",(0,n.kt)("inlineCode",{parentName:"td"},"^3.1.9"),"\u3001\u30a2\u30d7\u30ea: ",(0,n.kt)("inlineCode",{parentName:"td"},"4.2.4"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"React Native Paper"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://material.io/design"},"Material Design"),"\u306b\u6e96\u62e0\u3057\u305f\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002\u691c\u8a0e\u6642\u306b\u5229\u7528\u3057\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u306f\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u305b\u3093\u304c\u3001\u6b21\u671f\u30d0\u30fc\u30b8\u30e7\u30f3\u306ev5\u3067\u306f\u3001Material You\uff08Material Design v3\uff09\u306b\u3082\u5bfe\u5fdc\u3059\u308b\u3088\u3046\u3067\u3059\u3002Material Design\u306b\u6e96\u62e0\u3057\u305f\u30c7\u30b6\u30a4\u30f3\u306e\u30a2\u30d7\u30ea\u3092\u958b\u767a\u3059\u308b\u4e0a\u3067\u306f\u975e\u5e38\u306b\u4fbf\u5229\u3067\u3059\u304c\u3001\u305d\u306e\u53cd\u9762\u72ec\u81ea\u306b\u30c7\u30b6\u30a4\u30f3\u3057\u305f\u30a2\u30d7\u30ea\u3092\u958b\u767a\u3059\u308b\u5834\u5408\u306f\u3001\u30c7\u30b6\u30a4\u30f3\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u306b\u8cbb\u3084\u3059\u30b3\u30b9\u30c8\u304c\u9ad8\u304f\u306a\u308a\u305d\u3046\u3067\u3059\u3002\uff08\u4f8b\u3048\u3070\u3001\u30c6\u30ad\u30b9\u30c8\u30a4\u30f3\u30d7\u30c3\u30c8\u306e\u30a2\u30f3\u30c0\u30fc\u30e9\u30a4\u30f3\u3092\u6d88\u3059\u306e\u306b\u4e00\u82e6\u52b4\u304c\u3042\u308a\u307e\u3057\u305f\u3002\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"RNUILib"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8868\u73fe\u529b\u304c\u8c4a\u304b\u3067\u3001\u30c6\u30fc\u30de\u6a5f\u80fd\u3082\u5145\u5b9f\u3057\u3066\u3044\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002",(0,n.kt)("a",{parentName:"td",href:"https://wix.github.io/react-native-ui-lib/docs/components/incubator/WheelPicker"},"WheelPicker"),"\u306a\u3069\u3001\u4ed6\u306eUI\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u306f\u5b58\u5728\u3057\u306a\u3044\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3082\u3042\u308a\u307e\u3059\u3002\u30c7\u30b6\u30a4\u30f3\u30c8\u30fc\u30af\u30f3\u3082\u8c4a\u5bcc\u3067\u3001Styled System\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u3088\u3046\u306a\u611f\u899a\u3067UI\u3092\u69cb\u7bc9\u3067\u304d\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u30c6\u30fc\u30de\u6a5f\u80fd\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304c\u5c11\u306a\u304f\u3001\u30c6\u30fc\u30de\u306e\u8a2d\u5b9a\u306b\u6700\u3082\u6642\u9593\u3092\u8cbb\u3084\u3057\u307e\u3057\u305f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UI Kitten"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://eva.design/"},"Eva Design System"),"\u3092\u30d9\u30fc\u30b9\u3068\u3057\u305fUI\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002\u30a2\u30d7\u30ea\u306e\u30b3\u30f3\u30bb\u30d7\u30c8\u306b\u5fdc\u3058\u305f\u30ab\u30e9\u30fc\u30b9\u30ad\u30fc\u30de\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u3067\u3001Eva Design System\u306b\u5373\u3057\u305fUI\u3092\u8868\u793a\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u30ab\u30e9\u30fc\u30b9\u30ad\u30fc\u30de\u3092\u4f5c\u6210\u3059\u308b",(0,n.kt)("a",{parentName:"td",href:"https://colors.eva.design/?utm_campaign=eva_colors%20-%20home%20-%20eva_design%20website&utm_source=eva_design&utm_medium=referral&utm_content=eva_website_menu"},"\u30c4\u30fc\u30eb"),"\u3082\u7528\u610f\u3055\u308c\u3066\u304a\u308a\u3001\u7c21\u5358\u306b\u30a2\u30d7\u30ea\u306e\u30d6\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0\u304c\u53ef\u80fd\u3067\u3059\u3002\u30c6\u30fc\u30de\u6a5f\u80fd\u306f\u8c4a\u5bcc\u3067\u62e1\u5f35\u3082\u53ef\u80fd\u3067\u3059\u304c\u3001\u30c6\u30fc\u30de\u306e\u8a2d\u5b9a\u65b9\u6cd5\u304c\u4ed6\u306eUI\u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u9055\u3044\u72ec\u81ea\u6027\u304c\u5f37\u3044\u3067\u3059\u3002\u307e\u305f\u3001\u30c7\u30b6\u30a4\u30f3\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u306b\u5236\u9650\u304c\u3042\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3082\u3042\u308a\u305d\u3046\u3067\u3059\u3002\uff08\u4f8b\u3048\u3070\u3001",(0,n.kt)("a",{parentName:"td",href:"https://akveo.github.io/react-native-ui-kitten/docs/components/top-tabs/overview#tabbar"},"Top Tabs"),"\u3092\u4f7f\u7528\u3057\u305f\u5834\u5408\u306b\u3001\u9078\u629e\u3057\u305f\u30bf\u30d6\u306e",(0,n.kt)("inlineCode",{parentName:"td"},"Border"),"\u3092",(0,n.kt)("inlineCode",{parentName:"td"},"Bottom"),"\u306b\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\uff09")))),(0,n.kt)("h3",{id:"ui\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u5229\u7528\u3057\u305f\u969b\u306e\u6ce8\u610f\u70b9"},"UI\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u5229\u7528\u3057\u305f\u969b\u306e\u6ce8\u610f\u70b9"),(0,n.kt)("p",null,"\u30c6\u30fc\u30de\u6a5f\u80fd\u3067\u5404\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30b9\u30bf\u30a4\u30eb\u306a\u3069\u3092\u5b9a\u7fa9\u3059\u308b\u969b\u306b\u3001\u307e\u305a\u306f\u5404\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4ed5\u69d8\u3092\u628a\u63e1\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u4f8b\u3048\u3070\u3001\u30dc\u30bf\u30f3\u306e\u8272\u3092\u5909\u66f4\u3059\u308bProps\u306fUI\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u3088\u3063\u3066\u69d8\u3005\u3067\u3059\u3002\u305d\u306eProps\u3092\u7279\u5b9a\u3057\u305f\u4e0a\u3067\u3001\u30c6\u30fc\u30de\u6a5f\u80fd\u306b\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u307e\u305f\u3001UI\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u5404\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u30b9\u30bf\u30a4\u30eb\u306f\u3001\u57fa\u672c\u7684\u306b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u305d\u306e\u305f\u3081\u3001\u72ec\u81ea\u306b\u30c7\u30b6\u30a4\u30f3\u3055\u308c\u305f\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001UI\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u8ffd\u3044\u306a\u304c\u3089\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u8a2d\u5b9a\u3092\u5909\u66f4\u3059\u308b\u3068\u3044\u3063\u305f\u4f5c\u696d\u3082\u5fc5\u8981\u306b\u306a\u3063\u3066\u304d\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"react-native--\u30c6\u30fc\u30de\u6a5f\u80fd"},"React Native + \u30c6\u30fc\u30de\u6a5f\u80fd"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#ui%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%9F%E9%9A%9B%E3%81%AE%E6%B3%A8%E6%84%8F%E7%82%B9"},"\u524d\u8ff0\u306e\u6ce8\u610f\u70b9"),"\u304b\u3089\u3001UI\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u5c0e\u5165\u3057\u306a\u3044\u3067\u3001React Native\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u30c6\u30fc\u30de\u6a5f\u80fd\u3092\u8ffd\u52a0\u3067\u304d\u308b",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Shopify/restyle"},"@shopify/restyle"),(0,n.kt)("sup",{parentName:"p",id:"fnref-2"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"\u306e\u5c0e\u5165\u3082\u691c\u8a0e\u3057\u307e\u3057\u305f\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u57fa\u672c\u7684\u306b\u306f\u3001React Native\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u5229\u7528\u3001\u3082\u3057\u304f\u306f\u305d\u308c\u3089\u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u90e8\u54c1\u3092\u4f5c\u6210\u3059\u308b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@shopify/restyle\u3092\u5229\u7528\u3057\u3066\u3001React Native\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u30c6\u30fc\u30de\u6a5f\u80fd\u3092\u8ffd\u52a0\u3059\u308b"),(0,n.kt)("li",{parentName:"ul"},"UI\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u4f3c\u305f\u6a5f\u80fd\u3092\u6301\u3064\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u5b58\u5728\u3059\u308b\u5834\u5408\u306f\u3001\u305d\u308c\u3089\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u53c2\u8003\u306b\u3057\u3066\u90e8\u54c1\u3092\u4f5c\u6210\u3059\u308b"))),(0,n.kt)("li",{parentName:"ul"},"\u958b\u767a\u30b3\u30b9\u30c8\u304c\u9ad8\u304f\u306a\u308a\u305d\u3046\u306a\u90e8\u54c1\u306f\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u5229\u7528\u3059\u308b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30c6\u30fc\u30de\u6a5f\u80fd\u306f\u5229\u7528\u3057\u306a\u3044")))),(0,n.kt)("p",null,"\u4e0a\u8a18\u65b9\u91dd\u3067\u30a2\u30d7\u30ea\u306e\u4e00\u90e8\u753b\u9762\u3092\u4f5c\u6210\u3057\u305f\u6240\u3001",(0,n.kt)("a",{parentName:"p",href:"#ui%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%9F%E9%9A%9B%E3%81%AE%E6%B3%A8%E6%84%8F%E7%82%B9"},"UI\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u5229\u7528\u3057\u305f\u969b\u306e\u6ce8\u610f\u70b9"),"\u306b\u8a18\u8f09\u3057\u305f\u5185\u5bb9\u306f\u307b\u3068\u3093\u3069\u306a\u304f\u306a\u308a\u307e\u3057\u305f\u3002\u57fa\u672c\u7684\u306b\u306f\u81ea\u5206\u305f\u3061\u3067\u4f5c\u6210\u3057\u305f\u90e8\u54c1\u3067\u3042\u308b\u305f\u3081\u3001\u30c6\u30fc\u30de\u3067\u8a2d\u5b9a\u3059\u308b\u3079\u304dProps\u306a\u3069\u3082\u628a\u63e1\u3067\u304d\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u72ec\u81ea\u306b\u30c7\u30b6\u30a4\u30f3\u3055\u308c\u305f\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u306f\u3001\u3053\u306e\u65b9\u91dd\u3068\u306e\u76f8\u6027\u304c\u826f\u3044\u3068\u611f\u3058\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u6c7a\u5b9a"},"\u6c7a\u5b9a"),(0,n.kt)("p",null,"\u57fa\u672c\u65b9\u91dd\u306f\u4ee5\u4e0b\u3068\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"React Native\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u5229\u7528\u3001\u3082\u3057\u304f\u306f\u305d\u308c\u3089\u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u90e8\u54c1\u3092\u4f5c\u6210\u3059\u308b"),(0,n.kt)("li",{parentName:"ul"},"\u30c6\u30fc\u30de\u6a5f\u80fd\u3068\u3057\u3066\u3001",(0,n.kt)("inlineCode",{parentName:"li"},"@shopify/restyle"),"\u3092\u5c0e\u5165\u3059\u308b")),(0,n.kt)("p",null,"\u305f\u3060\u3057\u3001\u958b\u767a\u30b3\u30b9\u30c8\u304c\u9ad8\u304f\u306a\u308a\u305d\u3046\u306a\u90e8\u54c1\u306b\u95a2\u3057\u3066\u306f\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u5229\u7528\u3092\u691c\u8a0e\u3057\u307e\u3059\u3002"),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},"\u30c6\u30fc\u30de\u6a5f\u80fd\u3068\u306f\u3001\u5404\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3084\u3001\u30c0\u30fc\u30af\u30e2\u30fc\u30c9\u6642\u306e\u30b9\u30bf\u30a4\u30eb\u3001\u30c7\u30b6\u30a4\u30f3\u30c8\u30fc\u30af\u30f3\u306a\u3069\u3092\u5b9a\u7fa9\u3067\u304d\u308b\u6a5f\u80fd\u3092\u8868\u3057\u3066\u3044\u307e\u3059\u3002",(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2"},"@shopify/restyle\u3068\u4f3c\u3066\u3044\u308b\u30b3\u30f3\u30bb\u30d7\u30c8\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u3057\u3066\u3001",(0,n.kt)("a",{parentName:"li",href:"https://styled-system.com/"},"Styled System"),"\u3084\u3001",(0,n.kt)("a",{parentName:"li",href:"https://emotion.sh/docs/@emotion/native"},"Emotion"),"\u304c\u3042\u308a\u307e\u3059\u3002",(0,n.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);