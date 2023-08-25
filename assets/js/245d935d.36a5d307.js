"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[9487],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>N});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),c=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=c(t.components);return a.createElement(o.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=c(n),d=r,N=m["".concat(o,".").concat(d)]||m[d]||k[d]||l;return n?a.createElement(N,i(i({ref:e},s),{},{components:n})):a.createElement(N,i({ref:e},s))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[m]="string"==typeof t?t:r,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38410:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u69cb\u9020"},i=void 0,p={unversionedId:"react-native/santoku/application-architecture/application-structure/overview",id:"react-native/santoku/application-architecture/application-structure/overview",title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u69cb\u9020",description:"\u6a5f\u80fd\u30ec\u30a4\u30e4\u30fc",source:"@site/docs/react-native/santoku/application-architecture/application-structure/overview.mdx",sourceDirName:"react-native/santoku/application-architecture/application-structure",slug:"/react-native/santoku/application-architecture/application-structure/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/application-structure/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1692839811,formattedLastUpdatedAt:"2023\u5e748\u670824\u65e5",frontMatter:{title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u69cb\u9020"},sidebar:"santoku",previous:{title:"\u30b7\u30b9\u30c6\u30e0\u69cb\u6210",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/system-configuration/overview"},next:{title:"\u30a2\u30d7\u30ea\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u7ba1\u7406",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/life-cycle-management/overview"}},o={},c=[{value:"\u6a5f\u80fd\u30ec\u30a4\u30e4\u30fc",id:"\u6a5f\u80fd\u30ec\u30a4\u30e4\u30fc",level:2},{value:"\u6a5f\u80fd\u30ec\u30a4\u30e4\u30fc\u306e\u4f9d\u5b58\u95a2\u4fc2",id:"\u6a5f\u80fd\u30ec\u30a4\u30e4\u30fc\u306e\u4f9d\u5b58\u95a2\u4fc2",level:3},{value:"\u6a5f\u80fd\u30e2\u30b8\u30e5\u30fc\u30eb",id:"\u6a5f\u80fd\u30e2\u30b8\u30e5\u30fc\u30eb",level:2},{value:"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u6210",id:"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u6210",level:2}],s={toc:c},m="wrapper";function k(t){let{components:e,...l}=t;return(0,r.kt)(m,(0,a.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6a5f\u80fd\u30ec\u30a4\u30e4\u30fc"},"\u6a5f\u80fd\u30ec\u30a4\u30e4\u30fc"),(0,r.kt)("p",null,"\u8cac\u52d9\u306b\u5fdc\u3058\u305f\u95a2\u5fc3\u3054\u3068\u306e\u5206\u96e2\u3068\u4f9d\u5b58\u95a2\u4fc2\u306e\u660e\u78ba\u5316\u3092\u76ee\u7684\u3068\u3057\u3066\u3001\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f3\u3064\u306e\u30ec\u30a4\u30e4\u30fc\u3092\u7528\u610f\u3057\u307e\u3059\u3002\n\u5404\u6a5f\u80fd\u306f\u8cac\u52d9\u306b\u5fdc\u3058\u3066\u3044\u305a\u308c\u304b\u306e\u30ec\u30a4\u30e4\u30fc\u306b\u914d\u7f6e\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30ec\u30a4\u30e4\u30fc\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u6982\u8981"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Apps"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u8d77\u52d5\u6642\u306e\u521d\u671f\u51e6\u7406\u3084\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3001\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u5024\u306e\u63d0\u4f9b\u3084\u753b\u9762\u30ca\u30d3\u30c7\u30fc\u30b7\u30e7\u30f3\u306a\u3069\u3001\u30a2\u30d7\u30ea\u5168\u822c\u306e\u5236\u5fa1\u3092\u62c5\u3046\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u901a\u5e38\u3001\u3053\u3053\u306b\u306f",(0,r.kt)("inlineCode",{parentName:"td"},"app"),"\u3068\u3044\u30461\u3064\u306e\u6a5f\u80fd\u3092\u914d\u7f6e\u3057\u307e\u3059\uff081\u3064\u306e\u30b3\u30fc\u30c9\u3067\u8907\u6570\u30a2\u30d7\u30ea\u306b\u5bfe\u5fdc\u3059\u308b\u5834\u5408\u3001\u30a2\u30d7\u30ea\u6bce\u306b\u6a5f\u80fd\u3092\u914d\u7f6e\u3057\u307e\u3059\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Features"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u753b\u9762\u3092\u69cb\u6210\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3084\u3001\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u306b\u5fdc\u3058\u305f\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3001API\u306e\u547c\u3073\u51fa\u3057\u3068\u3044\u3063\u305f\u30a2\u30d7\u30ea\u56fa\u6709\u306e\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u901a\u5e38\u3001\u3053\u3053\u306b\u306f\u5bfe\u8c61\u30c9\u30e1\u30a4\u30f3\u306e\u7528\u8a9e\u3067\u8868\u3055\u308c\u308b\u6a5f\u80fd\u3092\u914d\u7f6e\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Bases"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u306e\u57fa\u76e4\u30ec\u30a4\u30e4\u30fc\u3067\u3059\u3002\u3053\u306e\u30ec\u30a4\u30e4\u30fc\u3067\u306f\u3001\u753b\u9762\u3084API\u306e\u547c\u3073\u51fa\u3057\u3068\u3044\u3063\u305f\u30a2\u30d7\u30ea\u56fa\u6709\u306e\u6a5f\u80fd\u306f\u6301\u3061\u307e\u305b\u3093\u3002\u6a2a\u65ad\u7684\u306a\u975e\u6a5f\u80fd\u306e\u307f\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u901a\u5e38\u3001\u3053\u3053\u306b\u306flogging\u3084message\u306a\u3069\u3001\u6280\u8853\u7528\u8a9e\u3067\u8868\u3055\u308c\u308b\u6a5f\u80fd\u3092\u914d\u7f6e\u3057\u307e\u3059\u3002")))),(0,r.kt)("h3",{id:"\u6a5f\u80fd\u30ec\u30a4\u30e4\u30fc\u306e\u4f9d\u5b58\u95a2\u4fc2"},"\u6a5f\u80fd\u30ec\u30a4\u30e4\u30fc\u306e\u4f9d\u5b58\u95a2\u4fc2"),(0,r.kt)("p",null,"\u6a5f\u80fd\u30ec\u30a4\u30e4\u30fc\u306f1\u65b9\u5411\u306b\u4f9d\u5b58\u95a2\u4fc2\u3092\u6301\u3061\u307e\u3059\u3002\u4e0b\u306e\u56f3\u3067\u306f\u3001\u5de6\u304b\u3089\u53f3\u306b\u5411\u304b\u3063\u3066\u4f9d\u5b58\u3092\u6301\u3061\u3001\u53f3\u304b\u3089\u5de6\u306b\u4f9d\u5b58\u304c\u3042\u3063\u3066\u306f\u3044\u3051\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"layer-dependence.drawio.png",src:n(84655).Z,width:"461",height:"61"})),(0,r.kt)("h2",{id:"\u6a5f\u80fd\u30e2\u30b8\u30e5\u30fc\u30eb"},"\u6a5f\u80fd\u30e2\u30b8\u30e5\u30fc\u30eb"),(0,r.kt)("p",null,"\u6a5f\u80fd\u30e2\u30b8\u30e5\u30fc\u30eb\u306f\u30a2\u30d7\u30ea\u3092\u69cb\u6210\u3059\u308b\u753b\u9762\u3084\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3001\u30b5\u30fc\u30d3\u30b9\u306e\u96c6\u307e\u308a\u3067\u3059\u3002\n\u6a5f\u80fd\u5358\u4f4d\u306b\u5206\u5272\u3055\u308c\u3001\u4e0a\u8ff0\u3057\u305f\u6a5f\u80fd\u30ec\u30a4\u30e4\u30fc\u306e\u3044\u305a\u308c\u304b\u306b\u914d\u7f6e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6a5f\u80fd\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u69cb\u6210\u3059\u308b\u8981\u7d20\u306f\u3044\u304f\u3064\u304b\u306e\u30b9\u30c6\u30ec\u30aa\u30bf\u30a4\u30d7\u3067\u5206\u985e\u3057\u307e\u3059\u3002\n\u30b9\u30c6\u30ec\u30aa\u30bf\u30a4\u30d7\u3068\u306f\u3001\u8981\u7d20\u306e\u7279\u5fb4\u3084\u7279\u6027\u3001\u5f79\u5272\u3092\u4fee\u98fe\u3059\u308b\u3082\u306e\u3067\u3059\u3002\n\u6a5f\u80fd\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u69cb\u6210\u3059\u308b\u30b9\u30c6\u30ec\u30aa\u30bf\u30a4\u30d7\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30b9\u30c6\u30ec\u30aa\u30bf\u30a4\u30d7"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u6982\u8981"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Navigator"),(0,r.kt)("td",{parentName:"tr",align:"left"},"React Navigation\u306e\u30ca\u30d3\u30b2\u30fc\u30bf\u306e\u5b9a\u7fa9\u3002\u3053\u306e\u30b9\u30c6\u30ec\u30aa\u30bf\u30a4\u30d7\u306fApps\u30ec\u30a4\u30e4\u30fc\u3067\u306e\u307f\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Screen"),(0,r.kt)("td",{parentName:"tr",align:"left"},"React Navigation\u306eScreen\u3067\u5b9a\u7fa9\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u306e\u5b9a\u7fa9\u3068\u3001Page\u306e\u547c\u3073\u51fa\u3057\u3092\u5b9f\u65bd\u3057\u307e\u3059\u3002\u3053\u306e\u30b9\u30c6\u30ec\u30aa\u30bf\u30a4\u30d7\u306f\u3001Apps\u30ec\u30a4\u30e4\u30fc\u3067\u306e\u307f\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Page"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u753b\u9762\u3092\u8868\u3059\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002Screen\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304b\u3089\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002Page\u306f\u3044\u304f\u3064\u304b\u306eComponent\u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u69cb\u6210\u3057\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3084\u72b6\u614b\u306e\u5909\u66f4\u306b\u3088\u308b\u30a4\u30d9\u30f3\u30c8\uff08useEffect/useFocusEffect\u306a\u3069\uff09\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306eUse Case\uff08\u3075\u308b\u307e\u3044\uff09\u3082\u3053\u3053\u3067\u5b9a\u7fa9\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Component"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Page\u3092\u69cb\u6210\u3059\u308b\u753b\u9762\u90e8\u54c1\u3067\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Form"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30e6\u30fc\u30b6\u304c\u5165\u529b\u3057\u305f\u5024\u306e\u4fdd\u6301\u3084\u5165\u529b\u5024\u306b\u5bfe\u3059\u308b\u30e6\u30fc\u30b6\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3001\u304a\u3088\u3073\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u5b9a\u7fa9\u3067\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Use Case"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Component\u3067\u767a\u751f\u3057\u305f\u30a4\u30d9\u30f3\u30c8\u306b\u5bfe\u3059\u308b\u3075\u308b\u307e\u3044\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002Use Case\u306e\u4e3b\u306a\u5f79\u5272\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"\u30fbservice\u306e\u547c\u3073\u51fa\u3057",(0,r.kt)("br",null),"\u30fbservice\u304b\u3089throw\u3055\u308c\u308b\u30a8\u30e9\u30fc\u306b\u5fdc\u3058\u305fUI\uff08Alert\u3084Snackbar\uff09\u306e\u8868\u793a",(0,r.kt)("br",null),"\u30fb\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u306e\u547c\u3073\u51fa\u3057",(0,r.kt)("br",null),"\u30fb\u4e00\u3064\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u5185\u306e\u307f\u3067\u4f7f\u7528\u3059\u308b\u72b6\u614b\u306e\u7ba1\u7406",(0,r.kt)("br",null),"\u30fbclient state\u3067\u7ba1\u7406\u3057\u3066\u3044\u308b\u72b6\u614b\u306e\u5909\u66f4",(0,r.kt)("br",null),(0,r.kt)("br",null),"Use Case\u3067\u306f\u3001\u4e0a\u8a18\u4ee5\u5916\u306e\u51e6\u7406\u306f\u5b9f\u65bd\u3057\u307e\u305b\u3093\u3002\u305d\u306e\u307b\u304b\u306e\u30ed\u30b8\u30c3\u30af\u306a\u3069\u306fservice\u3067\u5b9f\u65bd\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u8907\u96d1\u306a\u30e6\u30fc\u30b6\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3084\u5171\u901a\u51e6\u7406\u306f\u3001\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u6027\u3092\u4fdd\u3064\u305f\u3081\u5225\u30d5\u30a1\u30a4\u30eb\u3067\u7ba1\u7406\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Service"),(0,r.kt)("td",{parentName:"tr",align:"left"},"API\u306e\u547c\u3073\u51fa\u3057\u3084\u3001\u305d\u306e\u4ed6\u306e\u30ed\u30b8\u30c3\u30af\u306a\u3069\u3092\u5b9f\u88c5\u3057\u305fReact Hooks\u307e\u305f\u306f\u95a2\u6570\u3002Service\u306f\u5927\u304d\u304f\u30af\u30a8\u30ea\u3068\u30b3\u30de\u30f3\u30c9\u306b\u5206\u304b\u308c\u307e\u3059\u3002\u30af\u30a8\u30ea\u306f\u554f\u3044\u5408\u308f\u305b\u306a\u3069\u526f\u4f5c\u7528\u3092\u8d77\u3053\u3055\u306a\u3044API\u3084\u51e6\u7406\u306e\u547c\u3073\u51fa\u3057\u3067\u3059\u3002\u4e00\u65b9\u3001\u30b3\u30de\u30f3\u30c9\u306f\u30b7\u30b9\u30c6\u30e0\u72b6\u614b\u3092\u5909\u66f4\u3059\u308bAPI\u3084\u51e6\u7406\u306e\u547c\u3073\u51fa\u3057\u3067\u3059\u3002\u30af\u30a8\u30ea\u306f\u51e6\u7406\u5358\u4f4d\u3067\u30d5\u30a1\u30a4\u30eb\u3092\u5206\u3051\u307e\u3059\u304c\u3001\u30b3\u30de\u30f3\u30c9\u306f\u8907\u6570\u306e\u51e6\u7406\u3092\u307e\u3068\u3081\u30661\u3064\u306e\u30d5\u30a1\u30a4\u30eb\u3067\u7ba1\u7406\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u72b6\u614b\u5909\u66f4\u6642\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u64cd\u4f5c\u3084Client State\u306e\u64cd\u4f5c\u3092\u4e0d\u6574\u5408\u306a\u304f\u5b9a\u7fa9\u3057\u3084\u3059\u304f\u3059\u308b\u305f\u3081\u3067\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Client State"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8907\u6570\u306ePage\u3084Component\u3001Use Case\u3092\u307e\u305f\u304c\u3063\u3066\u7dad\u6301\u3059\u308b\u5fc5\u8981\u306e\u3042\u308bState\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Context"),(0,r.kt)("td",{parentName:"tr",align:"left"},"React\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3084\u30d7\u30ed\u30d0\u30a4\u30c0\u306e\u5024\u3001\u304a\u3088\u3073\u30d7\u30ed\u30d0\u30a4\u30c0\u306e\u5024\u3092\u63d0\u4f9b\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306a\u3069\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u578b\u5b9a\u7fa9\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Constant"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b9a\u6570\u5b9a\u7fa9\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Util"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u95a2\u6570\u3084\u30af\u30e9\u30b9\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Error"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u30af\u30e9\u30b9\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Config"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u74b0\u5883\u306b\u3088\u3063\u3066\u5909\u308f\u308b\u8a2d\u5b9a\u5024\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Api"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Orval\u306a\u3069\u306e\u30c4\u30fc\u30eb\u306b\u3088\u3063\u3066\u81ea\u52d5\u751f\u6210\u3055\u308c\u305fAPI\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3002")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"stereotype.drawio.png",src:n(26701).Z,width:"621",height:"221"})),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Screen"),"\u3068",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Page"),"\u306e\u5206\u5272\uff08\u8a66\u9a13\u7684\u904b\u7528\uff09"),(0,r.kt)("p",{parentName:"admonition"},"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001React Navigation\u306e\u8907\u96d1\u6027\u3092\u753b\u9762\u304b\u3089\u5206\u96e2\u3059\u308b\u76ee\u7684\u3067\u3001Screen\u3068Page\u3092\u8a66\u9a13\u7684\u306b\u5206\u3051\u3066\u307e\u3059\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u305f\u3060\u3057\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u3088\u3063\u3066\u306f\u3001Screen\u3068Page\u3092\u5206\u3051\u308b\u3053\u3068\u306b\u3088\u308a\u753b\u9762\u306e\u69cb\u6210\u304c\u8907\u96d1\u306b\u611f\u3058\u308b\u3053\u3068\u3082\u3042\u308b\u3067\u3057\u3087\u3046\u3002\n\u305d\u306e\u5834\u5408\u306f\u3001Screen\u3068Page\u3092\u7d71\u5408\u3057\u3066\u3001Navigator\u3092Features\u30ec\u30a4\u30e4\u30fc\u306b\u914d\u7f6e\u3059\u308b\u306a\u3069\u3001\u9069\u5b9c\u8abf\u6574\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("h2",{id:"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u6210"},"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u6210"),(0,r.kt)("p",null,"\u6a5f\u80fd\u30ec\u30a4\u30e4\u30fc\u3084\u3001\u6a5f\u80fd\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u53cd\u6620\u3057\u305f\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u6210\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"src\n\u251c\u2500\u2500 @types\uff08\u203b\uff11\uff09\n\u251c\u2500\u2500 apps\n\u2502   \u2514\u2500\u2500 app\n\u2502       \u251c\u2500\u2500 components\n\u2502       \u251c\u2500\u2500 contexts\n\u2502       \u251c\u2500\u2500 errors\n\u2502       \u251c\u2500\u2500 navigators\n\u2502       \u251c\u2500\u2500 screens\n\u2502       \u251c\u2500\u2500 services\n\u2502       \u251c\u2500\u2500 types\n\u2502       \u2514\u2500\u2500 use-cases\n\u251c\u2500\u2500 assets\uff08\u203b\uff12\uff09\n\u2502   \u251c\u2500\u2500 dummy\n\u2502   \u2514\u2500\u2500 images\n\u251c\u2500\u2500 bases\n\u2502   \u251c\u2500\u2500 core\n\u2502   \u2502   \u251c\u2500\u2500 configs\n\u2502   \u2502   \u251c\u2500\u2500 contexts\n\u2502   \u2502   \u251c\u2500\u2500 errors\n\u2502   \u2502   \u2514\u2500\u2500 utils\n\u2502   \u251c\u2500\u2500 crypto\n\u2502   \u251c\u2500\u2500 date\n\u2502   \u251c\u2500\u2500 firebase\n\u2502   \u2502   \u2514\u2500\u2500 messaging\n\u2502   \u251c\u2500\u2500 focus-manager\n\u2502   \u251c\u2500\u2500 local-authentication\n\u2502   \u251c\u2500\u2500 logging\n\u2502   \u251c\u2500\u2500 message\n\u2502   \u251c\u2500\u2500 react-query\n\u2502   \u251c\u2500\u2500 ui\n\u2502   \u2502   \u251c\u2500\u2500 bottom-sheet\n\u2502   \u2502   \u251c\u2500\u2500 button\n\u2502   \u2502   \u251c\u2500\u2500 common\n\u2502   \u2502   \u251c\u2500\u2500 fab\n\u2502   \u2502   \u251c\u2500\u2500 illustration\n\u2502   \u2502   \u251c\u2500\u2500 input\n\u2502   \u2502   \u251c\u2500\u2500 loading\n\u2502   \u2502   \u251c\u2500\u2500 markdown\n\u2502   \u2502   \u251c\u2500\u2500 modal\n\u2502   \u2502   \u251c\u2500\u2500 overlay\n\u2502   \u2502   \u251c\u2500\u2500 picker\n\u2502   \u2502   \u251c\u2500\u2500 snackbar\n\u2502   \u2502   \u251c\u2500\u2500 spacer\n\u2502   \u2502   \u251c\u2500\u2500 tab\n\u2502   \u2502   \u251c\u2500\u2500 theme\n\u2502   \u2502   \u2514\u2500\u2500 webview\n\u2502   \u2514\u2500\u2500 validator\n\u251c\u2500\u2500 features\n\u2502   \u251c\u2500\u2500 account\n\u2502   \u2502   \u251c\u2500\u2500 client-states\n\u2502   \u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u251c\u2500\u2500 errors\n\u2502   \u2502   \u251c\u2500\u2500 forms\n\u2502   \u2502   \u251c\u2500\u2500 pages\n\u2502   \u2502   \u251c\u2500\u2500 services\n\u2502   \u2502   \u2514\u2500\u2500 types\n\u2502   \u251c\u2500\u2500 acknowledgements\n\u2502   \u2502   \u251c\u2500\u2500 constants\n\u2502   \u2502   \u251c\u2500\u2500 pages\n\u2502   \u2502   \u251c\u2500\u2500 services\n\u2502   \u2502   \u251c\u2500\u2500 types\n\u2502   \u2502   \u2514\u2500\u2500 utils\n\u2502   \u251c\u2500\u2500 app-updates\n\u2502   \u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u251c\u2500\u2500 services\n\u2502   \u2502   \u2514\u2500\u2500 use-cases\n\u2502   \u251c\u2500\u2500 backend\n\u2502   \u2502   \u251c\u2500\u2500 apis\n\u2502   \u2502   \u251c\u2500\u2500 errors\n\u2502   \u2502   \u2514\u2500\u2500 utils\n\u2502   \u251c\u2500\u2500 demo-**\uff08\u203b\uff13\uff09\n\u2502   \u251c\u2500\u2500 qa-event\n\u2502   \u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u2514\u2500\u2500 services\n\u2502   \u251c\u2500\u2500 qa-home\n\u2502   \u2502   \u251c\u2500\u2500 pages\n\u2502   \u2502   \u2514\u2500\u2500 services\n\u2502   \u251c\u2500\u2500 qa-post\n\u2502   \u2502   \u2514\u2500\u2500 pages\n\u2502   \u251c\u2500\u2500 qa-question\n\u2502   \u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u251c\u2500\u2500 forms\n\u2502   \u2502   \u251c\u2500\u2500 pages\n\u2502   \u2502   \u2514\u2500\u2500 services\n\u2502   \u251c\u2500\u2500 sandbox\n\u2502   \u2502   \u2514\u2500\u2500 apis\n\u2502   \u251c\u2500\u2500 secure-storage\n\u2502   \u2502   \u251c\u2500\u2500 constants\n\u2502   \u2502   \u2514\u2500\u2500 services\n\u2502   \u2514\u2500\u2500 terms\n\u2502       \u251c\u2500\u2500 components\n\u2502       \u251c\u2500\u2500 services\n\u2502       \u2514\u2500\u2500 use-cases\n\u2514\u2500\u2500 fixtures\uff08\u203b\uff14\uff09\n    \u2514\u2500\u2500 msw\n        \u251c\u2500\u2500 datas\n        \u251c\u2500\u2500 handlers\n        \u251c\u2500\u2500 models\n        \u2514\u2500\u2500 utils\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uff08\u203b\uff11\uff09\u4f7f\u7528\u3057\u3066\u3044\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u4e0d\u8db3\u3057\u3066\u3044\u308b\u578b\u5b9a\u7fa9\u3084\u3001\u81ea\u8eab\u3067\u4f5c\u6210\u3057\u305fNative Modules\u306e\u578b\u5b9a\u7fa9\u306a\u3069"),(0,r.kt)("li",{parentName:"ul"},"\uff08\u203b\uff12\uff09\u30a2\u30d7\u30ea\u3067\u4f7f\u7528\u3059\u308b\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u3084\u30d5\u30a9\u30f3\u30c8\u30d5\u30a1\u30a4\u30eb\u306a\u3069"),(0,r.kt)("li",{parentName:"ul"},"\uff08\u203b\uff13\uff09\u30c7\u30e2\u6a5f\u80fd\u306f\u6570\u304c\u591a\u3044\u305f\u3081\u5272\u611b"),(0,r.kt)("li",{parentName:"ul"},"\uff08\u203b\uff14\uff09API\u901a\u4fe1\u306e\u30e2\u30c3\u30af\u30c7\u30fc\u30bf\u306a\u3069")))}k.isMDXComponent=!0},84655:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAc0AAAA9CAYAAADPoDKwAAAAAXNSR0IArs4c6QAABMt0RVh0bXhmaWxlACUzQ214ZmlsZSUyMGhvc3QlM0QlMjJFbGVjdHJvbiUyMiUyMG1vZGlmaWVkJTNEJTIyMjAyMi0wNy0yMVQwOCUzQTIxJTNBMjQuMjkwWiUyMiUyMGFnZW50JTNEJTIyNS4wJTIwKE1hY2ludG9zaCUzQiUyMEludGVsJTIwTWFjJTIwT1MlMjBYJTIwMTBfMTVfNyklMjBBcHBsZVdlYktpdCUyRjUzNy4zNiUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBkcmF3LmlvJTJGMTkuMC4zJTIwQ2hyb21lJTJGMTAyLjAuNTAwNS42MyUyMEVsZWN0cm9uJTJGMTkuMC4zJTIwU2FmYXJpJTJGNTM3LjM2JTIyJTIwZXRhZyUzRCUyMk40NHpIeFpOa3VjblVXaUlnQ0ZSJTIyJTIwdmVyc2lvbiUzRCUyMjE5LjAuMyUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJEaEo4WWlPUWhqdlV5NUxqc2VReiUyMiUyMG5hbWUlM0QlMjIlRTMlODMlOUElRTMlODMlQkMlRTMlODIlQjgxJTIyJTNFelpadGE5c3dFTWMlMkZqVjhPWXN0V25KZHQxbXlERmdiWkdPeWRJcDF0VWRueVpMbE85dWtueCUyRkp6UXJ0aWFBZ0U2MyUyQjZrJTJCNTNKeUVIYmRQakYwWHk1RWt5RUk2M1lrY0hmWFk4RHdlaCUyQmElMkJGVXlPNDV0Y29zZUxNYXIydzUzJTJGQmlpdXJscHhCTVpxb3BSU2E1Mk9SeWl3RHFrY2FVVXBXNDJtUkZPTlZjeExEVE5oVEl1YnFMODUwMHFpaHQlMkI3MXI4RGpwRjNaeFp2R2twSjJzczJrU0FpVDFVQkNEdzdhS2lsMTg1VWV0eUJxZUMyWHhtOTN4ZHB0VEVHbTMlMkJMdzB5JTJGM3NWWlAxZU9QMzFqc3FzYyUyRjZOc25HJTJCV0ZpTkltZkpjYnNzMkc5YW1sb0dTWk1hZ0R1UTY2cnhLdVlaOFRXbHNyVTNlakpUb1YxaHh4SWJaU1NIWDJSVkZJZ1ZLakYx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"},26701:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/stereotype.drawio-93134d2f64f47f3a82cbf0720c270cdd.png"}}]);