"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[4843],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,f=d["".concat(o,".").concat(c)]||d[c]||k[c]||i;return a?n.createElement(f,l(l({ref:t},m),{},{components:a})):n.createElement(f,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58890:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return k}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],p={title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u5f0f"},o=void 0,s={unversionedId:"react-native/santoku/decisions/adr-004-deep-link",id:"react-native/santoku/decisions/adr-004-deep-link",title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u5f0f",description:"Status: Accepted",source:"@site/docs/react-native/santoku/decisions/adr-004-deep-link.mdx",sourceDirName:"react-native/santoku/decisions",slug:"/react-native/santoku/decisions/adr-004-deep-link",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-004-deep-link",draft:!1,tags:[],version:"current",lastUpdatedAt:1648600430,formattedLastUpdatedAt:"2022/3/30",frontMatter:{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u5f0f"},sidebar:"santoku",previous:{title:"HTTP API\u901a\u4fe1\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-003-http-api-error-handling"},next:{title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406\u306e\u65b9\u91dd",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-005-message"}},m={},k=[{value:"\u8981\u7d04",id:"\u8981\u7d04",level:2},{value:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",level:2},{value:"\u8b70\u8ad6",id:"\u8b70\u8ad6",level:2},{value:"\u30a2\u30d7\u30ea\u3078\u306e\u5c0e\u7dda",id:"\u30a2\u30d7\u30ea\u3078\u306e\u5c0e\u7dda",level:3},{value:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u88c5",id:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u88c5",level:3},{value:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3",id:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3",level:3},{value:"iOS\u3067\u306e\u610f\u56f3\u3057\u306a\u3044\u5171\u6709",id:"ios\u3067\u306e\u610f\u56f3\u3057\u306a\u3044\u5171\u6709",level:4},{value:"\u6c7a\u5b9a",id:"\u6c7a\u5b9a",level:2}],d={toc:k};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Status: Accepted"),(0,i.kt)("h2",{id:"\u8981\u7d04"},"\u8981\u7d04"),(0,i.kt)("p",null,"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u5f0f\u3092\u8907\u6570\u306e\u65b9\u5f0f\u3067\u8b70\u8ad6\u3057\u3001\u5c0e\u5165\u3059\u308b\u30e1\u30ea\u30c3\u30c8\u304c\u5927\u304d\u3044",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/dynamic-links"},"Firebase Dynamic Links"),"\u3092\u63a1\u7528\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"},"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"),(0,i.kt)("p",null,"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u5b9f\u73fe\u3059\u308b\u65b9\u5f0f\u306f\u3001\u6b21\u306e3\u3064\u306e\u65b9\u5f0f\u304b\u3089\u9078\u629e\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OS\u306e\u6a5f\u80fd\uff08",(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com/ios/universal-links/"},"Universal Links"),"\u3001",(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/training/app-links"},"Android App Links"),"\uff09\u3092\u76f4\u63a5\u5229\u7528\u3059\u308b"),(0,i.kt)("li",{parentName:"ul"},"Firebase\u306e",(0,i.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/dynamic-links"},"Dynamic Links"),"\u3092\u5229\u7528\u3059\u308b"),(0,i.kt)("li",{parentName:"ul"},"\u30ab\u30b9\u30bf\u30e0URL\u30b9\u30ad\u30fc\u30e0\u3092\u5229\u7528\u3059\u308b")),(0,i.kt)("p",null,"\u7528\u8a9e\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7528\u8a9e"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u610f\u5473"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5099\u8003"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af"),(0,i.kt)("td",{parentName:"tr",align:"left"},"URL\u306b\u7d10\u4ed8\u3044\u305f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8d77\u52d5\u3059\u308b\u6a5f\u80fd"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30e6\u30fc\u30b6\u304c\u958b\u304fURL\u3067\u3001OS\u304c\u30c9\u30e1\u30a4\u30f3\u3068\u306e\u95a2\u9023\u3092\u691c\u8a3c\u3059\u308b\u3068\u304d\u306b\u5229\u7528\u3059\u308bURL\u3067\u3059\u3002OS\u306e\u691c\u8a3c\u304c\u6210\u529f\u3059\u308b\u3068\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u6e21\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Dynamic Links\u3067\u306f\u30d1\u30e9\u30e1\u30fc\u30bf\u90e8\u5206\u306b\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afURL\u306a\u3069\u3092\u4fdd\u6301\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afURL"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u3067\u8868\u793a\u3057\u305f\u3044\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u3042\u3089\u308f\u3059URL\u3067\u3059\u3002\uff08OS\u306e\u6a5f\u80fd\u3060\u3051\u306e\u5834\u5408\u306f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3068\u540c\u3058\u3067\u3059\uff09"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Dynamic Links\u3067\u306f\u30a2\u30d7\u30ea\u3068\u95a2\u9023\u4ed8\u3051\u3066\u3044\u306a\u3044\u30c9\u30e1\u30a4\u30f3\u306eURL\u3082\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30ab\u30b9\u30bf\u30e0URL\u30b9\u30ad\u30fc\u30e0"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mailto:"),"\u306e\u3088\u3046\u306b\u30b9\u30ad\u30fc\u30e0\u306b\u4efb\u610f\u306e\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3092\u6307\u5b9a\u3057\u305fURL"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"App Links"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Android\u304cOS\u306e\u6a5f\u80fd\u3068\u3057\u3066\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://developer.android.com/studio/write/app-link-indexing"},"Android App Links"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Universal Links"),(0,i.kt)("td",{parentName:"tr",align:"left"},"iOS\u306e\u304cOS\u306e\u6a5f\u80fd\u3068\u3057\u3066\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://developer.apple.com/ios/universal-links/"},"iOS Universal Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Dynamic Links"),(0,i.kt)("td",{parentName:"tr",align:"left"},"App Links\u3001Universal Links\u3092\u62e1\u5f35\u3057\u305fFirebase\u306e\u6a5f\u80fd"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30ab\u30b9\u30bf\u30e0URL\u30b9\u30ad\u30fc\u30e0\u306f\u5bfe\u8c61\u5916")))),(0,i.kt)("h2",{id:"\u8b70\u8ad6"},"\u8b70\u8ad6"),(0,i.kt)("p",null,"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e3\u3064\u306e\u5b9f\u73fe\u65b9\u5f0f\u306e\u3046\u3061\u3001\u30ab\u30b9\u30bf\u30e0URL\u30b9\u30ad\u30fc\u30e0\u306b\u306f\u56de\u907f\u3067\u304d\u306a\u3044\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306e\u30ea\u30b9\u30af",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\u304c\u3042\u308b\u305f\u3081\u3001\u63a1\u7528\u306f\u898b\u9001\u308a\u307e\u3057\u305f\u3002"),(0,i.kt)("p",null,"Dynamic Links\u3068OS\u306e\u6a5f\u80fd\u3092\u76f4\u63a5\u5229\u7528\u3059\u308b\u5834\u5408\u306e\u9055\u3044\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u51e1\u4f8b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5185\u5bb9"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u25cb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5bfe\u5fdc\u4e0d\u8981")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u25b3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8efd\u5fae\u306a\u5bfe\u5fdc\u304c\u5fc5\u8981")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2613"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5bfe\u5fdc\u304c\u96e3\u3057\u3044")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u89b3\u70b9"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Dynamic Links"),(0,i.kt)("th",{parentName:"tr",align:"left"},"OS\u306e\u6a5f\u80fd"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u3078\u306e\u5c0e\u7dda"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u25cb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2613",(0,i.kt)("sup",{parentName:"td",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u88c5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u25b3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2613",(0,i.kt)("sup",{parentName:"td",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u25b3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u25cb")))),(0,i.kt)("p",null,"Dynamic Links\u306fOS\u306e\u6a5f\u80fd\u3068\u6bd4\u8f03\u3059\u308b\u3068\u3001\u30a2\u30d7\u30ea\u3078\u306e\u5c0e\u7dda\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u5206\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306e\u5bfe\u5fdc\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002\n\u4e00\u65b9\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3044\u306a\u3044\u30e6\u30fc\u30b6\u3078\u306e\u5c0e\u7dda\u306e\u305f\u3081\u306b\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3092\u69cb\u7bc9\u3059\u308b\u4f5c\u696d\u304c\u77ed\u7e2e\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"\u30a2\u30d7\u30ea\u3078\u306e\u5c0e\u7dda"},"\u30a2\u30d7\u30ea\u3078\u306e\u5c0e\u7dda"),(0,i.kt)("p",null,"OS\u306e\u6a5f\u80fd\u3092\u305d\u306e\u307e\u307e\u5229\u7528\u3059\u308b\u3068\u3001URL\u306b\u95a2\u9023\u4ed8\u3051\u3089\u308c\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3068\u5224\u65ad\u3055\u308c\u3066\u30d6\u30e9\u30a6\u30b6\u3067\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3057\u307e\u3044\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3044\u306a\u3044\u30e6\u30fc\u30b6\u5411\u3051\u306b\u3001\u5c0e\u7dda\u3068\u306a\u308b\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3092\u7528\u610f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"Dynamic Links\u3067\u306f\u3001\u672a\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u30e6\u30fc\u30b6\u306b\u5bfe\u3059\u308b\u5c0e\u7dda\u304c\u7528\u610f\u3067\u304d\u308b\u306e\u3067\u3001\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3092\u6301\u305f\u306a\u3044\u30b5\u30fc\u30d3\u30b9\u3067\u3082\u7c21\u5358\u306b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u5c0e\u5165\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u88c5"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u88c5"),(0,i.kt)("p",null,"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092React Native\u3067\u53d7\u3051\u53d6\u308b\u5834\u5408\u306f\u6b21\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u304c\u5229\u7528\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dynamic Links\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u306f",(0,i.kt)("a",{parentName:"li",href:"https://rnfirebase.io/dynamic-links/usage"},"React Native Firebase"),"\u3068",(0,i.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/linking#handling-deep-links"},"React Native Linking"),"\uff08\u4f75\u7528\u53ef\u80fd\uff09"),(0,i.kt)("li",{parentName:"ul"},"OS\u306e\u6a5f\u80fd\u306fReact Native Linking")),(0,i.kt)("p",null,"Dynamic Links\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u3069\u3061\u3089\u304b\u306eAPI\u3092\u5229\u7528\u3059\u308c\u3070\u5b9f\u88c5\u3067\u304d\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u4e0b\u8a18\u306e\u70b9\u3092\u8003\u616e\u3057\u30a2\u30d7\u30ea\u8d77\u52d5\u6642\u306b\u306fPlatform\u3092\u5224\u5b9a\u3057\u3066\u547c\u3073\u5206\u3051\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"React Native Firebase\u306b\u306f",(0,i.kt)("a",{parentName:"li",href:"https://github.com/invertase/react-native-firebase/issues/2660"},"iOS\u3067\u8d77\u52d5\u6642\u9593\u304c\u77ed\u3044\u3068\u8aad\u307f\u53d6\u308c\u306a\u3044issue"),"\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081React Native Linking\u3092\u5229\u7528\u3057\u3066\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u306b\u542b\u307e\u308c\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306b",(0,i.kt)("a",{parentName:"li",href:"https://rnfirebase.io/reference/dynamic-links#resolveLink"},"resolveLink"),"\u3092\u5229\u7528\u3057\u307e\u3059\u3002"))),(0,i.kt)("li",{parentName:"ul"},"React Native Linking\u306b\u306f",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebook/react-native/issues/25675"},"Android\u3067\u30c7\u30a3\u30fc\u30ea\u30f3\u30af\u306eURL\u3092\u8aad\u307f\u53d6\u308c\u306a\u3044\u3068\u3044\u3046issue"),"\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081React Native Firebase\u3092\u5229\u7528\u3057\u3066\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002")),(0,i.kt)("p",null,"OS\u306e\u6a5f\u80fd\u3092\u76f4\u63a5\u5229\u7528\u3059\u308b\u5834\u5408\uff08Dynamic Links\u3092\u5229\u7528\u3057\u306a\u3044\u5834\u5408\uff09\u3001Android\u3067Linking\u304c\u8aad\u307f\u53d6\u308c\u306a\u3044issue\u306e\u539f\u56e0\u306e\u8abf\u67fb\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,i.kt)("h3",{id:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3"},"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3"),(0,i.kt)("p",null,"App Links\u3001Universal Links\u306f\u3001\u30c9\u30e1\u30a4\u30f3\u306b\u914d\u7f6e\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u3092\u5229\u7528\u3057\u3066\u300c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068URL\uff08\u30c9\u30e1\u30a4\u30f3\uff09\u306e\u6240\u6709\u8005\u304c\u540c\u3058\u3067\u3042\u308b\u3053\u3068\u300d\u3092OS\u304c\u691c\u8a3c\u3057\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u30ab\u30b9\u30bf\u30e0URL\u30b9\u30ad\u30fc\u30e0\u3067\u554f\u984c\u3068\u306a\u308b\u3088\u3046\u306a\u3001\u4ed6\u306e\u30a2\u30d7\u30ea\u306b\u60c5\u5831\u304c\u610f\u56f3\u305b\u305a\u5171\u6709\u3055\u308c\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,i.kt)("h4",{id:"ios\u3067\u306e\u610f\u56f3\u3057\u306a\u3044\u5171\u6709"},"iOS\u3067\u306e\u610f\u56f3\u3057\u306a\u3044\u5171\u6709"),(0,i.kt)("p",null,"Dynamic Links\u3067\u306f\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3044\u306a\u3044\u30e6\u30fc\u30b6\u304c\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u958b\u3044\u305f\u3068\u304d\u3001\u521d\u56de\u8d77\u52d5\u6642\u306b",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/dynamic-links/operating-system-integrations"},"URL\u3092\u8aad\u307f\u53d6\u308b\u4ed5\u7d44\u307f"),"\u304c\u3042\u308a\u307e\u3059\u3002\n\u3053\u306e\u4ed5\u7d44\u307f\u306b\u3088\u308a\u3001OS\u306e\u6a5f\u80fd\u3092\u62e1\u5f35\u3057\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u521d\u56de\u8d77\u52d5\u6642\u306b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u8aad\u307f\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u3053\u306e\u62e1\u5f35\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u3068\u3001iOS\u3067\u306f\u521d\u56de\u8d77\u52d5\u6642\u306b\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u3092\u5229\u7528\u3057\u3066\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u8aad\u307f\u53d6\u308a\u307e\u3059\u3002\n\u4e00\u65b9\u3067\u3001",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/dynamic-links/ios/receive?hl=ja#set-up-firebase-and-the-dynamic-links-sdk"},"iOS\u306e\u30da\u30fc\u30b9\u30c8\u30dc\u30fc\u30c9\u306e\u4f7f\u7528\u3092\u7121\u52b9\u306b"),"\u8a2d\u5b9a\u3057\u3066\u3082\u3001\u521d\u56de\u8d77\u52d5\u6642\u306b\u8aad\u307f\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/dynamic-links/operating-system-integrations"},"\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u306b\u306f\u3001iOS\u306e\u5834\u5408\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u3092\u5229\u7528\u3059\u308b\u3068\u3044\u3046\u3053\u3068\u306f\u8a18\u8f09\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"div"},"\u3057\u304b\u3057\u3001Firebase SDK\u306e",(0,i.kt)("a",{parentName:"p",href:"https://github.com/firebase/firebase-ios-sdk/blob/8.7.0/FirebaseDynamicLinks/Sources/FIRDynamicLinkNetworking.m#L190"},"\u5b9f\u88c5"),"\u3092\u898b\u308b\u3068\u3001\u30c7\u30d0\u30a4\u30b9\u306e\u60c5\u5831\u306a\u3069\u3082\u5229\u7528\u3057\u3066\u30b5\u30fc\u30d0\u304b\u3089\u30c0\u30a4\u30ca\u30df\u30c3\u30af\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3057\u3066\u3044\u308b\u3088\u3046\u306b\u898b\u3048\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"div"},"\u5b9f\u969b\u306b\u6b21\u306e\u3088\u3046\u306b\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3059\u308b\u3068\u3001\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u304c\u30b3\u30d4\u30fc\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3067\u3082\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3044\u306a\u3044\u30c7\u30d0\u30a4\u30b9\u3067\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306eURL\u3092\u958b\u304f"),(0,i.kt)("li",{parentName:"ul"},"iOS\u3067\u30a2\u30d7\u30ea\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u306a\u3044\u5834\u5408\u306b\u8868\u793a\u3055\u308c\u308b",(0,i.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/dynamic-links/link-previews#app_preview_pages"},"\u30d7\u30ec\u30d3\u30e5\u30fc\u30da\u30fc\u30b8"),"\u306eOpen\u30dc\u30bf\u30f3\u3092\u30bf\u30c3\u30d7\u3059\u308b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u30c6\u30ad\u30b9\u30c8"),"\u306e\u3088\u3046\u306aURL\u5f62\u5f0f\u3067\u306f\u306a\u3044\u6587\u5b57\u5217\u3092\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3059\u308b\uff08Open\u30dc\u30bf\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u305f\u3068\u304d\u306b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u304c\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u4e0a\u66f8\u304d\u3059\u308b\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u8d77\u52d5\u3059\u308b")))),(0,i.kt)("p",null,"\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u304b\u3089\u53d6\u5f97\u3057\u305f\u5834\u5408\u306f\u9593\u9055\u3044\u306a\u304f\u30e6\u30fc\u30b6\u304c\u610f\u56f3\u3057\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3068\u8a00\u3048\u307e\u3059\u304c\u3001\u305d\u308c\u4ee5\u5916\u306e\u65b9\u6cd5\u3067\u53d6\u5f97\u3057\u305fURL\u306f\u30e6\u30fc\u30b6\u3068\u306f\u7121\u95a2\u4fc2\u306eURL\u306e\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u3053\u308c\u3089\u3092\u533a\u5225\u3059\u308b\u305f\u3081\u306b\u3001iOS\u5411\u3051\u306eDynamic Links SDK\u306b\u306f\u53d7\u3051\u53d6\u3063\u305fURL\u306e\u4fe1\u983c\u6027\u3092\u8868\u3059",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/swift/firebasedynamiclinks/api/reference/Enums/DLMatchType.html"},"matchType"),"\u3068\u3044\u3046\u9805\u76ee\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"matchType\u306e\u5024\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"unique"),"\u3067\u306a\u3044\u5834\u5408\u306f\u30e6\u30fc\u30b6\u304c\u610f\u56f3\u3057\u306a\u3044URL\u3092\u30a2\u30d7\u30ea\u304c\u53d7\u3051\u53d6\u3063\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002",(0,i.kt)("sup",{parentName:"p",id:"fnref-4"},(0,i.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))),(0,i.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001matchType\u306e\u5024\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"unique"),"\u3067\u3042\u308b\u304b\u5224\u5b9a\u3057\u3066\u304b\u3089URL\u3092\u51e6\u7406\u3057\u307e\u3059\u3002\u3053\u306e\u3088\u3046\u306b\u5bfe\u5fdc\u3059\u308b\u3053\u3068\u3067\u5225\u306e\u30e6\u30fc\u30b6\u304c\u30c7\u30fc\u30bf\u3092\u53d7\u3051\u53d6\u308a\u307e\u305b\u3093\u3002"),(0,i.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u5229\u7528\u3057\u3066\u3044\u308bReact Native Firebase\u3067\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306bmatchType\u304c\u6e21\u3055\u308c\u306a\u3044\u305f\u3081\u3001\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u30d1\u30c3\u30c1\u3092\u9069\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u30d1\u30c3\u30c1\u3092\u9069\u7528\u3059\u308b\u5bfe\u8c61\u306fiOS\u306e\u307f\u3067\u3059\u3002React Native Firebase\u306b\u542b\u307e\u308c\u308bNative Module\u306f\u3001Firebase\u306eSDK\u304b\u3089matchType\u3092\u53d7\u3051\u53d6\u3063\u3066\u3044\u308b\u305f\u3081\u3001JavaScript Module\u306b\u6e21\u3059\u6a5f\u80fd\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"))),(0,i.kt)("h2",{id:"\u6c7a\u5b9a"},"\u6c7a\u5b9a"),(0,i.kt)("p",null,"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u5f0f\u3068\u3057\u3066\u3001Dynamic Links\u3092\u5229\u7528\u3057\u307e\u3059\u3002"),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"\u30ab\u30b9\u30bf\u30e0URL\u30b9\u30ad\u30fc\u30e0\u306f\u81ea\u7531\u306b\u8a2d\u5b9a\u3067\u304d\u308b\u305f\u3081\u3001\u4f5c\u6210\u3057\u305fURL\u3092\u5225\u306e\u30a2\u30d7\u30ea\u306b\u4e57\u3063\u53d6\u3089\u308c\u308b\u30ea\u30b9\u30af\u304c\u3042\u308a\u307e\u3059\u3002",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebook/react-native/issues/25675"},"Android\u3067\u30c7\u30a3\u30fc\u30ea\u30f3\u30af\u306eURL\u3092Liking\u3067\u8aad\u307f\u53d6\u308c\u306a\u3044\u3068\u3044\u3046issue"),"\u304c\u3042\u308a\u3001\u9069\u5207\u306a\u56de\u907f\u65b9\u6cd5\u306e\u8abf\u67fb\u304c\u5b8c\u4e86\u3057\u3066\u3044\u306a\u3044\u305f\u3081X\uff08\u5bfe\u5fdc\u304c\u96e3\u3057\u3044\uff09\u3068\u3057\u3066\u3044\u307e\u3059\u3002",(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"\u30a2\u30d7\u30ea\u3078\u306e\u5c0e\u7dda\u306f\u30a2\u30d7\u30ea\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u4fc3\u3057\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5f8c\u3082URL\u3092\u8aad\u307f\u53d6\u308c\u308b\u6a5f\u80fd\u3067\u3059\u3002",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-4"},(0,i.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/dynamic-links/ios/receive?hl=ja#set-up-firebase-and-the-dynamic-links-sdk"},"iOS\u3067\u53d7\u4fe1\u3059\u308b \uff1e 6.\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u8b66\u544a"),"\u306b\u3042\u308b\u3088\u3046\u306b\u3001matchType\u306e\u5024\u304c",(0,i.kt)("inlineCode",{parentName:"li"},"unique"),"\u306b\u306a\u3089\u306a\u3044\u30b1\u30fc\u30b9\u304c\u3042\u308a\u307e\u3059\u3002",(0,i.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);