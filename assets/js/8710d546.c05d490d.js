"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[5935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(p,".").concat(m)]||u[m]||k[m]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u5f0f"},o=void 0,l={unversionedId:"react-native/santoku/decisions/adr-018-deep-link",id:"react-native/santoku/decisions/adr-018-deep-link",title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u5f0f",description:"Status: Accepted",source:"@site/docs/react-native/santoku/decisions/adr-018-deep-link.mdx",sourceDirName:"react-native/santoku/decisions",slug:"/react-native/santoku/decisions/adr-018-deep-link",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-018-deep-link",draft:!1,tags:[],version:"current",lastUpdatedAt:1692941114,formattedLastUpdatedAt:"2023\u5e748\u670825\u65e5",frontMatter:{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u5f0f"},sidebar:"santoku",previous:{title:"\u5730\u56f3\u8868\u793a\u30e9\u30a4\u30d6\u30e9\u30ea",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-017-map-view-library"},next:{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u53d7\u4fe1\u6642\u306e\u753b\u9762\u9077\u79fb",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-019-deep-link-navigation"}},p={},s=[{value:"\u8981\u7d04",id:"\u8981\u7d04",level:2},{value:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",level:2},{value:"\u8b70\u8ad6",id:"\u8b70\u8ad6",level:2},{value:"\u30ab\u30b9\u30bf\u30e0URL\u30b9\u30ad\u30fc\u30e0\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30ea\u30b9\u30af",id:"\u30ab\u30b9\u30bf\u30e0url\u30b9\u30ad\u30fc\u30e0\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30ea\u30b9\u30af",level:3},{value:"OS\u306e\u6a5f\u80fd\u3068\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30b5\u30fc\u30d3\u30b9",id:"os\u306e\u6a5f\u80fd\u3068\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30b5\u30fc\u30d3\u30b9",level:3},{value:"\u6c7a\u5b9a",id:"\u6c7a\u5b9a",level:2}],c={toc:s},u="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Status: Accepted"),(0,r.kt)("h2",{id:"\u8981\u7d04"},"\u8981\u7d04"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-004-deep-link"},"\u904e\u53bb\u306b\u8b70\u8ad6\u3057\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u5f0f"),"\u3067\u306f\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306bFirebase Dynamic Links\u3092\u63a1\u7528\u3059\u308b\u3053\u3068\u306b\u3057\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"\u3057\u304b\u3057\u3001Firebase Dynamic Links\u306f\u5ec3\u6b62\u3055\u308c\u308b\u3053\u3068\u304c",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/support/dynamic-links-faq?hl=ja"},"\u516c\u5f0f\u306e\u30da\u30fc\u30b8"),"\u3067\u30a2\u30ca\u30a6\u30f3\u30b9\u3055\u308c\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306fOS\u306e\u6a5f\u80fd\u3067\u3042\u308bUniversal Links\u3068Android App Links\u3092\u5229\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"},"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-004-deep-link"},"\u904e\u53bb\u306b\u8b70\u8ad6\u3057\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u5f0f"),"\u3067\u306f\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306bFirebase Dynamic Links\u3092\u63a1\u7528\u3059\u308b\u3053\u3068\u306b\u3057\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"\u3057\u304b\u3057\u3001Firebase Dynamic Links\u306f\u5ec3\u6b62\u3055\u308c\u308b\u3053\u3068\u304c",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/support/dynamic-links-faq?hl=ja"},"\u516c\u5f0f\u306e\u30da\u30fc\u30b8"),"\u3067\u30a2\u30ca\u30a6\u30f3\u30b9\u3055\u308c\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u5f0f\u3092\u518d\u5ea6\u691c\u8a0e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u6b21\u306e3\u3064\u306e\u65b9\u5f0f\u304b\u3089\u9078\u629e\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OS\u306e\u6a5f\u80fd\uff08",(0,r.kt)("a",{parentName:"li",href:"https://developer.apple.com/ios/universal-links/"},"Universal Links"),"\u3001",(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/training/app-links"},"Android App Links"),"\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u30ab\u30b9\u30bf\u30e0URL\u30b9\u30ad\u30fc\u30e0"),(0,r.kt)("li",{parentName:"ul"},"\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30b5\u30fc\u30d3\u30b9")),(0,r.kt)("h2",{id:"\u8b70\u8ad6"},"\u8b70\u8ad6"),(0,r.kt)("h3",{id:"\u30ab\u30b9\u30bf\u30e0url\u30b9\u30ad\u30fc\u30e0\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30ea\u30b9\u30af"},"\u30ab\u30b9\u30bf\u30e0URL\u30b9\u30ad\u30fc\u30e0\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30ea\u30b9\u30af"),(0,r.kt)("p",null,"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e3\u3064\u306e\u5b9f\u73fe\u65b9\u5f0f\u306e\u3046\u3061\u3001\u30ab\u30b9\u30bf\u30e0URL\u30b9\u30ad\u30fc\u30e0\u306b\u306f\u56de\u907f\u3067\u304d\u306a\u3044\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306e\u30ea\u30b9\u30af\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30ab\u30b9\u30bf\u30e0URL\u30b9\u30ad\u30fc\u30e0\u306f\u3001\u8907\u6570\u306e\u30a2\u30d7\u30ea\u304c\u540c\u3058\u30b9\u30ad\u30fc\u30e0\u3092\u8a2d\u5b9a\u3067\u304d\u308b\u305f\u3081\u3001OS\u306fURL\u30ea\u30f3\u30af\u306e\u5bfe\u8c61\u3068\u3059\u308b\u30a2\u30d7\u30ea\u3092\u4e00\u610f\u306b\u7279\u5b9a\u3067\u304d\u307e\u305b\u3093\u3002\u305d\u306e\u7d50\u679c\u3001\u6b63\u898f\u30a2\u30d7\u30ea\u306e\u30b9\u30ad\u30fc\u30e0\u3092\u507d\u88c5\u3057\u305f\u4e0d\u6b63\u30a2\u30d7\u30ea\u306b\u3088\u3063\u3066URL\u30ea\u30f3\u30af\u3092\u4e57\u3063\u53d6\u3089\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app"},"Apple\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u306b\u3082\u3001\u30ab\u30b9\u30bf\u30e0URL\u30b9\u30ad\u30fc\u30e0\u3067\u306f\u306a\u304fUniversal Links\u3092\u63a8\u5968\u3059\u308b\u8a18\u8f09\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"While custom URL schemes are an acceptable form of deep linking, universal links are strongly recommended. For more information on universal links, see Allowing apps and websites to link to your content.")),(0,r.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001\u30ab\u30b9\u30bf\u30e0URL\u30b9\u30ad\u30fc\u30e0\u306e\u63a1\u7528\u306f\u898b\u9001\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)("h3",{id:"os\u306e\u6a5f\u80fd\u3068\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30b5\u30fc\u30d3\u30b9"},"OS\u306e\u6a5f\u80fd\u3068\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30b5\u30fc\u30d3\u30b9"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u8ff0\u3079\u308b\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30b5\u30fc\u30d3\u30b9\u3068\u306f\u3001Firebase Dynamic Links\u3068\u540c\u7b49\u306e\u6a5f\u80fd\u3092\u63d0\u4f9b\u3059\u308b\u30b5\u30fc\u30d3\u30b9\u3092\u8868\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/support/dynamic-links-faq?hl=ja"},"Dynamic Links \u306e\u30b5\u30dd\u30fc\u30c8\u7d42\u4e86\u306b\u95a2\u3059\u308b\u3088\u304f\u3042\u308b\u8cea\u554f"),"\u3067\u306f\u3001Firebase Dynamic Links\u306e\u4ee3\u66ff\u30b5\u30fc\u30d3\u30b9\u3068\u3057\u3066\u3001\u6b21\u306e\u3088\u3046\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u79fb\u884c\u30b7\u30ca\u30ea\u30aa 1: Firebase Dynamic Links \u3068\u540c\u7b49\u306e\u6a5f\u80fd\uff08\u30a6\u30a7\u30d6\u3068\u30b9\u30c8\u30a2\u306e\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5f8c\u306e\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u9045\u5ef6\u3001\u6a19\u6e96\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3001URL \u306e\u77ed\u7e2e\u3068\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u304a\u3088\u3073\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u5206\u6790\u306a\u3069\uff09\u304c\u3059\u3079\u3066\u5fc5\u8981\u306a\u5834\u5408\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u3053\u306e\u30b7\u30ca\u30ea\u30aa\u3067\u306f\u3001\u4ed6\u306e\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af \u30d7\u30ed\u30d0\u30a4\u30c0 / \u30d9\u30f3\u30c0\u30fc\uff08Bitly\u3001Kochava\u3001AppsFlyer\u3001Adjust \u306a\u3069\u3001\u5e02\u5834\u3067\u5229\u7528\u53ef\u80fd\u306a\u540c\u69d8\u306a\u30d7\u30ed\u30d0\u30a4\u30c0\uff09\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u304a\u3059\u3059\u3081\u3057\u307e\u3059\u3002\uff08\u3053\u308c\u3089\u306e\u30d7\u30ed\u30d0\u30a4\u30c0\u306f\u5be9\u67fb\u304c\u5b8c\u4e86\u3057\u3066\u3044\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001Firebase Dynamic Links \u3068\u540c\u69d8\u306e\u6a5f\u80fd\u3092\u5099\u3048\u3066\u3044\u307e\u3059\uff09\u3002\u3053\u306e\u79fb\u884c\u3092\u53ef\u80fd\u306a\u9650\u308a\u7c21\u5358\u306b\u3001\u304b\u3064\u30b7\u30fc\u30e0\u30ec\u30b9\u306b\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306b\u3001Google \u3067\u306f\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af \u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002")),(0,r.kt)("p",null,"\u3053\u308c\u3089\u306e\u30b5\u30fc\u30d3\u30b9\u306f\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u5b9f\u73fe\u306b\u95a2\u3059\u308b\u5de5\u6570\u306e\u524a\u6e1b\u3084\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u3001\u30e6\u30fc\u30b6\u4f53\u9a13\u306e\u5411\u4e0a\u306a\u3069\u591a\u304f\u306e\u30e1\u30ea\u30c3\u30c8\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u305d\u306e\u53cd\u9762\u3001\u4eca\u56de\u306eFirebase Dynamic Links\u306e\u3088\u3046\u306b\u3001\u30b5\u30fc\u30d3\u30b9\u304c\u7d42\u4e86\u3057\u3066\u3057\u307e\u3046\u30ea\u30b9\u30af\u3092\u5e38\u306b\u62b1\u3048\u3066\u3044\u304b\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u307e\u305f\u3001\u30c1\u30fc\u30e0\u30e1\u30f3\u30d0\u30fc\u306b\u4ee3\u66ff\u30b5\u30fc\u30d3\u30b9\u306e\u904e\u53bb\u5b9f\u7e3e\u304c\u306a\u3044\u305f\u3081\u3001\u63a1\u7528\u3092\u6c7a\u65ad\u3059\u308b\u306b\u306f\u60c5\u5831\u304c\u4e0d\u8db3\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u60c5\u5831\u3092\u53ce\u96c6\u3059\u308b\u306b\u306f\u591a\u304f\u306e\u6642\u9593\u3092\u8cbb\u3084\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u4ee5\u4e0b\u3092\u7406\u7531\u306b\u8abf\u67fb\u306f\u898b\u9001\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u73fe\u6bb5\u968e\u3067\u3053\u306e\u30a2\u30d7\u30ea\u304c\u5fc5\u8981\u3068\u3057\u3066\u3044\u308b\u8981\u4ef6\u306f\u3001Universal Links\u3084Android App Links\u304c\u63d0\u4f9b\u3059\u308b\u6a5f\u80fd\u3067\u6e80\u305f\u3059\u3053\u3068\u304c\u53ef\u80fd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-004-deep-link#%E3%82%A2%E3%83%97%E3%83%AA%E3%81%B8%E3%81%AE%E5%B0%8E%E7%B7%9A"},"\u904e\u53bb\u306b\u8b70\u8ad6\u3057\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u5f0f - \u5c0e\u7dda"),"\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308b\u5185\u5bb9\u306f\u3001\u81ea\u8eab\u3067Web\u30b5\u30a4\u30c8\u3092\u69cb\u7bc9\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u5bfe\u5fdc"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-004-deep-link#%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E5%AE%9F%E8%A3%85"},"\u904e\u53bb\u306b\u8b70\u8ad6\u3057\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u5f0f - \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u88c5"),"\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308b",(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/react-native/issues/25675"},"Android\u3067\u30c7\u30a3\u30fc\u30ea\u30f3\u30af\u306eURL\u3092\u8aad\u307f\u53d6\u308c\u306a\u3044\u3068\u3044\u3046issue"),"\u306f\u3001\u4ee5\u4e0b\u306e\u30b3\u30df\u30c3\u30c8\u3067\u89e3\u6c7a\u3055\u308c\u3066\u3044\u308b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/react-native/commit/3921f05f594691285e79a379897ed698e081a705"},"Do not use InteractionManager to wait for Activity")),(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u8a18\u30b3\u30df\u30c3\u30c8\u306f\u3001React Native\u306e",(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/react-native/blob/main/CHANGELOG.md#v0720"},"v0.72.0"),"\u3067\u30ea\u30ea\u30fc\u30b9\u3055\u308c\u3066\u3044\u308b")))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/issues/25675"},"Android\u3067\u30c7\u30a3\u30fc\u30ea\u30f3\u30af\u306eURL\u3092\u8aad\u307f\u53d6\u308c\u306a\u3044\u3068\u3044\u3046issue"),"\u306f\u3001React Native\u306ev0.72.0\u4ee5\u524d\u306e\u5834\u5408\u3001\u4ee5\u4e0b\u306eWorkaround\u3092\u9069\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/react-native/issues/25675#issuecomment-1278160951"},"Workaround")))),(0,r.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306fOS\u306e\u6a5f\u80fd\u3067\u3042\u308bUniversal Links\u3068Android App Links\u3092\u63a1\u7528\u3059\u308b\u3053\u3068\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u6c7a\u5b9a"},"\u6c7a\u5b9a"),(0,r.kt)("p",null,"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u5f0f\u3068\u3057\u3066\u3001Universal Links\u3068Android App Links\u3092\u5229\u7528\u3057\u307e\u3059\u3002"))}k.isMDXComponent=!0}}]);