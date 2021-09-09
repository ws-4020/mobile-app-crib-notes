"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[6729],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),k=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=k(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},T=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),T=k(a),u=r,P=T["".concat(o,".").concat(u)]||T[u]||m[u]||l;return a?n.createElement(P,i(i({ref:e},d),{},{components:a})):n.createElement(P,i({ref:e},d))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=T;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var k=2;k<l;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}T.displayName="MDXCreateElement"},1637:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return k},default:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i={title:"HTTP API\u901a\u4fe1\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"},p=void 0,o={unversionedId:"react-native/santoku/decisions/adr-003-http-api-error-handling",id:"react-native/santoku/decisions/adr-003-http-api-error-handling",isDocsHomePage:!1,title:"HTTP API\u901a\u4fe1\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",description:"Status: Accepted",source:"@site/docs/react-native/santoku/decisions/adr-003-http-api-error-handling.mdx",sourceDirName:"react-native/santoku/decisions",slug:"/react-native/santoku/decisions/adr-003-http-api-error-handling",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-003-http-api-error-handling",tags:[],version:"current",lastUpdatedAt:1629788882,formattedLastUpdatedAt:"2021/8/24",frontMatter:{title:"HTTP API\u901a\u4fe1\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"},sidebar:"santoku",previous:{title:"HTTP\u901a\u4fe1\u3067\u4f7f\u7528\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-002-http-api-libraries"},next:{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-004-deep-link"}},k=[{value:"\u8981\u7d04",id:"\u8981\u7d04",children:[]},{value:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",children:[]},{value:"\u8b70\u8ad6",id:"\u8b70\u8ad6",children:[{value:"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c400\u4ee5\u4e0a\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\uff08\u691c\u8a0e\u958b\u59cb\u6642\u70b9\uff09",id:"http\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c400\u4ee5\u4e0a\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u691c\u8a0e\u958b\u59cb\u6642\u70b9",children:[]},{value:"\u3010\u88dc\u8db3\u3011\u6709\u52b9\u671f\u9650\u304c\u5207\u308c\u305f\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u66f4\u65b0\u65b9\u6cd5",id:"\u88dc\u8db3\u6709\u52b9\u671f\u9650\u304c\u5207\u308c\u305f\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u66f4\u65b0\u65b9\u6cd5",children:[]},{value:"HTTP API\u304b\u3089\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u5374\u3055\u308c\u306a\u3044\u5834\u5408\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",id:"http-api\u304b\u3089\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u5374\u3055\u308c\u306a\u3044\u5834\u5408\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",children:[]},{value:"HTTP API\u901a\u4fe1\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8",id:"http-api\u901a\u4fe1\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8",children:[]},{value:"HTTP API\u901a\u4fe1\u306e\u30ea\u30c8\u30e9\u30a4\uff08\u691c\u8a0e\u958b\u59cb\u6642\u70b9\uff09",id:"http-api\u901a\u4fe1\u306e\u30ea\u30c8\u30e9\u30a4\u691c\u8a0e\u958b\u59cb\u6642\u70b9",children:[]}]},{value:"\u6c7a\u5b9a",id:"\u6c7a\u5b9a",children:[{value:"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c400\u4ee5\u4e0a\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",id:"http\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c400\u4ee5\u4e0a\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",children:[]},{value:"HTTP API\u304b\u3089\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u5374\u3055\u308c\u306a\u3044\u5834\u5408\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",id:"http-api\u304b\u3089\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u5374\u3055\u308c\u306a\u3044\u5834\u5408\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0-1",children:[]},{value:"HTTP API\u901a\u4fe1\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8",id:"http-api\u901a\u4fe1\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8-1",children:[]},{value:"HTTP API\u901a\u4fe1\u306e\u30ea\u30c8\u30e9\u30a4",id:"http-api\u901a\u4fe1\u306e\u30ea\u30c8\u30e9\u30a4",children:[]}]}],d={toc:k};function m(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Status: Accepted"),(0,l.kt)("h2",{id:"\u8981\u7d04"},"\u8981\u7d04"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee5\u4e0b\u306e\u5834\u5408\u306f\u3001\u30e6\u30fc\u30b6\u306b\u9069\u5207\u306a\u30a8\u30e9\u30fc\u5185\u5bb9\u3068\u5fa9\u5e30\u624b\u9806\u3092\u4f1d\u3048\u308b\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"HTTP API\u304b\u3089400\u4ee5\u4e0a\u306eHTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c\u8fd4\u5374\u3055\u308c\u305f\u5834\u5408"),(0,l.kt)("li",{parentName:"ul"},"\u30e2\u30d0\u30a4\u30eb\u7aef\u672b\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304cOFF\u306b\u306a\u3063\u3066\u3044\u305f\u308a\u3001\u63a5\u7d9a\u5148\u30b5\u30fc\u30d0\u306e\u30dd\u30fc\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u3044\u5834\u5408\u306a\u3069"))),(0,l.kt)("li",{parentName:"ul"},"\u30ea\u30bd\u30fc\u30b9\u306e\u53d6\u5f97\u6642\u306b\u3001\u4e00\u5b9a\u6642\u9593\u304c\u7d4c\u904e\u3057\u3066\u3082HTTP API\u304b\u3089\u5fdc\u7b54\u304c\u306a\u3044\u5834\u5408\u306f\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3055\u305b\u308b"),(0,l.kt)("li",{parentName:"ul"},"HTTP API\u901a\u4fe1\u3067\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306b\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u306a\u3044",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u81ea\u8eab\u304c\u64cd\u4f5c\u306e\u518d\u8a66\u884c\u3092\u9078\u629e\u3067\u304d\u308bUI\u3092\u63d0\u4f9b\u3059\u308b")))),(0,l.kt)("h2",{id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"},"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"),(0,l.kt)("p",null,"HTTP API\u306fHTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c400\u4ee5\u4e0a\u306e\u5834\u5408\u306b\u51e6\u7406\u304c\u5931\u6557\u3057\u305f\u3053\u3068\u3092\u8868\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u30e2\u30d0\u30a4\u30eb\u7aef\u672b\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304cOFF\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u306a\u3069\u306f\u3001HTTP API\u3068\u306e\u901a\u4fe1\u304c\u3067\u304d\u307e\u305b\u3093\u3002"),(0,l.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u30a8\u30e9\u30fc\u3092\u3069\u3053\u3067\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3057\u3066\u3069\u306e\u3088\u3046\u306b\u5bfe\u51e6\u3092\u3059\u308b\u304b\u3092\u691c\u8a0e\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306e\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u3084HTTP API\u901a\u4fe1\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u65b9\u6cd5\u306b\u3064\u3044\u3066\u3082\u691c\u8a0e\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u306a\u304a\u3001HTTP API\u901a\u4fe1\u306b\u4f7f\u7528\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u3057\u3066\u3001",(0,l.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios"),"\u3092\u5229\u7528\u3059\u308b\u524d\u63d0\u3068\u3057\u307e\u3059\u3002\u307e\u305f\u3001HTTP API\u901a\u4fe1\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u306b\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/overview"},"React Query"),"\u3092\u5229\u7528\u3059\u308b\u524d\u63d0\u3068\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u8b70\u8ad6"},"\u8b70\u8ad6"),(0,l.kt)("h3",{id:"http\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c400\u4ee5\u4e0a\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u691c\u8a0e\u958b\u59cb\u6642\u70b9"},"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c400\u4ee5\u4e0a\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\uff08\u691c\u8a0e\u958b\u59cb\u6642\u70b9\uff09"),(0,l.kt)("p",null,"HTTP API\u3068\u306e\u901a\u4fe1\u6642\u306b\u306f\u3001\u51e6\u7406\u304c\u5931\u6557\u3057\u305f\u5834\u5408\u306bHTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c400\u4ee5\u4e0a\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u5374\u3055\u308c\u307e\u3059\u3002\u5f53\u521d\u306e\u8b70\u8ad6\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u65b9\u5f0f\u306b\u3057\u3088\u3046\u3068\u8003\u3048\u3066\u3044\u307e\u3057\u305f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SantokuApp\u3067\u306f\u7279\u5b9a\u306eHTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u306e\u5834\u5408\u3001\u30e6\u30fc\u30b6\u306b\u9069\u5207\u306a\u30a8\u30e9\u30fc\u5185\u5bb9\u3068\u5fa9\u5e30\u624b\u9806\u3092\u4f1d\u3048\u308b"),(0,l.kt)("li",{parentName:"ul"},"\u305d\u308c\u4ee5\u5916\u306eHTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u306e\u5834\u5408\u306f\u3001\u60f3\u5b9a\u5916\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u3053\u3068\u3092\u30b9\u30ca\u30c3\u30af\u30d0\u30fc\u306b\u8868\u793a\u3059\u308b")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u610f\u5473"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u7b87\u6240"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"400"),(0,l.kt)("td",{parentName:"tr",align:"left"},"BadRequest - \u30ea\u30af\u30a8\u30b9\u30c8\u3068\u3057\u3066\u9001\u308b\u30da\u30a4\u30ed\u30fc\u30c9\u304c\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u30a8\u30e9\u30fc\u306b\u306a\u3063\u305f\u5834\u5408\u306a\u3069"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u500b\u5225")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"401"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unauthorized - \u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\uff08HTTP API\u304c\u751f\u6210\u3057\u305f\u30bb\u30c3\u30b7\u30e7\u30f3\uff09\u306e\u671f\u9650\u304c\u5207\u308c\u305f\u5834\u5408"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5171\u901a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"404"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Not found - \u30ea\u30bd\u30fc\u30b9\u304c\u898b\u3064\u304b\u3089\u306a\u304b\u3063\u305f\u5834\u5408"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u500b\u5225")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"412"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Precondition Failed - \u64cd\u4f5c\u3057\u3066\u3044\u308b\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u5f37\u5236\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u5bfe\u8c61\u306e\u5834\u5408"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5171\u901a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"429"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Too Many Requests - \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u5927\u91cf\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u9001\u4fe1\u3055\u308c\u305f\u5834\u5408"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5171\u901a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"503"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Service Unavailable - HTTP API\u304c\u30b7\u30b9\u30c6\u30e0\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u3067\u6b62\u307e\u3063\u3066\u3044\u308b\u5834\u5408"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5171\u901a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u305d\u306e\u4ed6"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u60f3\u5b9a\u5916\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5171\u901a")))),(0,l.kt)("p",null,"\u3057\u304b\u3057\u3001\u3044\u304f\u3064\u304b\u306eHTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u3067\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u7591\u554f\u304c\u6319\u304c\u308a\u307e\u3057\u305f\u3002"),(0,l.kt)("h4",{id:"403---forbidden\u306f\u60f3\u5b9a\u5916\u306e\u30a8\u30e9\u30fc\u306a\u306e\u304b"},"403 - Forbidden\u306f\u60f3\u5b9a\u5916\u306e\u30a8\u30e9\u30fc\u306a\u306e\u304b"),(0,l.kt)("p",null,"\u73fe\u6642\u70b9\u3067\u306f\u3001\u30ea\u30bd\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u5236\u9650\u3092\u8a2d\u3051\u306a\u3044\u305f\u3081403\u304c\u8fd4\u5374\u3055\u308c\u308b\u60f3\u5b9a\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u305f\u3060\u3057\u3001\u4f7f\u7528\u3059\u308b\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3084\u30af\u30e9\u30a6\u30c9\u30b5\u30fc\u30d3\u30b9\u306b\u3088\u3063\u3066\u306f\u3001HTTP API\u306e\u30ea\u30bd\u30fc\u30b9\u306b\u5bfe\u3059\u308b\u30a2\u30af\u30bb\u30b9\u5236\u9650\u4ee5\u5916\u306b\u3082403\u304c\u8fd4\u5374\u3055\u308c\u308b\u53ef\u80fd\u6027\u306f\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u70b9\u306b\u3064\u3044\u3066\u306f\u3001\u4f7f\u7528\u3059\u308b\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3084\u30af\u30e9\u30a6\u30c9\u30b5\u30fc\u30d3\u30b9\u306e\u8a2d\u8a08\u5f8c\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,l.kt)("h4",{id:"504---gateway-timeout\u306f\u60f3\u5b9a\u5916\u306e\u30a8\u30e9\u30fc\u306a\u306e\u304b"},"504 - Gateway Timeout\u306f\u60f3\u5b9a\u5916\u306e\u30a8\u30e9\u30fc\u306a\u306e\u304b"),(0,l.kt)("p",null,"\u60f3\u5b9a\u5916\u306e\u30a8\u30e9\u30fc\u3068\u3082\u8a00\u3048\u305d\u3046\u3067\u3059\u304c\u3001\u6642\u9593\u3092\u304a\u3044\u3066\u304b\u3089\u518d\u64cd\u4f5c\u3059\u308b\u3053\u3068\u3067\u6b63\u5e38\u306a\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u5374\u3055\u308c\u308b\u5834\u5408\u3082\u3042\u308b\u3068\u601d\u308f\u308c\u308b\u306e\u3067\u3001\u305d\u308c\u304c\u308f\u304b\u308b\u3088\u3046\u306a\u5185\u5bb9\u3092\u30e6\u30fc\u30b6\u306b\u4f1d\u3048\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"\u88dc\u8db3\u6709\u52b9\u671f\u9650\u304c\u5207\u308c\u305f\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u66f4\u65b0\u65b9\u6cd5"},"\u3010\u88dc\u8db3\u3011\u6709\u52b9\u671f\u9650\u304c\u5207\u308c\u305f\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u66f4\u65b0\u65b9\u6cd5"),(0,l.kt)("h4",{id:"cookie\u30d9\u30fc\u30b9\u306e\u8a8d\u8a3c"},"Cookie\u30d9\u30fc\u30b9\u306e\u8a8d\u8a3c"),(0,l.kt)("p",null,"SantokuApp\u3067\u306f\u3001\u8a8d\u8a3c\u65b9\u5f0f\u3068\u3057\u3066Cookie\u30d9\u30fc\u30b9\u306e\u8a8d\u8a3c\u65b9\u5f0f\u3092\u63a1\u7528\u3057\u3066\u3044\u307e\u3059\u3002Cookie\u30d9\u30fc\u30b9\u306e\u8a8d\u8a3c\u65b9\u5f0f\u3067\u306f\u3001\u30ed\u30b0\u30a4\u30f3\u51e6\u7406\u5f8c\u306bHTTP API\u304c\u6255\u3044\u51fa\u3057\u305f\u30bb\u30c3\u30b7\u30e7\u30f3ID\u3092\u3001Cookie\u7d4c\u7531\u3067\u53d7\u3051\u6e21\u3059\u3053\u3068\u306b\u3088\u308a\u8a8d\u8a3c\u72b6\u614b\u3092\u5224\u5b9a\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u6709\u52b9\u671f\u9650\u306fHTTP API\u304c\u7a3c\u50cd\u3057\u3066\u3044\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u3067\u7ba1\u7406\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u306fHTTP API\u304b\u3089\u8fd4\u5374\u3055\u308c\u308bHTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c401\u306e\u5834\u5408\u306b\u3001\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u6709\u52b9\u671f\u9650\u304c\u5207\u308c\u305f\u3068\u5224\u5b9a\u3057\u307e\u3059\u3002\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u6709\u52b9\u671f\u9650\u304c\u5207\u308c\u305f\u5834\u5408\u306f\u3001\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u7aef\u672bID\u3092\u5229\u7528\u3057\u3066\u8a8d\u8a3c\u30ea\u30af\u30a8\u30b9\u30c8\u3092HTTP API\u306b\u9001\u4fe1\u3057\u3066\u3001\u65b0\u3057\u3044\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u767a\u884c\u3057\u3066\u3082\u3089\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u6709\u52b9\u671f\u9650\u304c\u5207\u308c\u305f\u5834\u5408\u306e\u30d5\u30ed\u30fc\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6709\u52b9\u671f\u9650\u304c\u5207\u308c\u305f\u30bb\u30c3\u30b7\u30e7\u30f3ID\u3092\u4f7f\u7528\u3057\u3066HTTP API\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b"),(0,l.kt)("li",{parentName:"ol"},"HTTP API\u304b\u3089HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c401\u3067\u8fd4\u5374\u3055\u308c\u308b"),(0,l.kt)("li",{parentName:"ol"},"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c401\u306e\u5834\u5408\u3001\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u7aef\u672bID\u3092\u5229\u7528\u3057\u3066\u8a8d\u8a3c\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u30ed\u30b0\u30a4\u30f3\u7528\u306eHTTP API\u306b\u9001\u4fe1\u3059\u308b"),(0,l.kt)("li",{parentName:"ol"},"HTTP API\u306f\u3001\u65b0\u3057\u3044\u30bb\u30c3\u30b7\u30e7\u30f3ID\u3092Cookie\u306b\u8a2d\u5b9a\u3057\u3066\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u8fd4\u5374\u3059\u308b"),(0,l.kt)("li",{parentName:"ol"},"SantokuApp\u306f\u3001Cookie\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u30bb\u30c3\u30b7\u30e7\u30f3ID\u3092\u4f7f\u7528\u3057\u3066\u3001HTTP API\u306b\u518d\u5ea6\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b")),(0,l.kt)("h4",{id:"openid-connect\u3092\u4f7f\u7528\u3057\u305f\u8a8d\u8a3c"},"OpenID Connect\u3092\u4f7f\u7528\u3057\u305f\u8a8d\u8a3c"),(0,l.kt)("p",null,"\u4e00\u65b9\u3067\u3001OpenID Connect\u3092\u63a1\u7528\u3057\u305f\u5834\u5408\u306f\u3001\u8a8d\u8a3c\u72b6\u614b\u306e\u5224\u5b9a\u306bID\u30c8\u30fc\u30af\u30f3\u3084\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u5229\u7528\u3057\u307e\u3059\u3002\u901a\u5e38ID\u30c8\u30fc\u30af\u30f3\u3084\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306b\u306f\u6709\u52b9\u671f\u9650\u304c\u542b\u307e\u308c\u3066\u304a\u308a\u3001HTTP API\u306b\u30a2\u30af\u30bb\u30b9\u3057\u306a\u304f\u3066\u3082\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u5185\u3067\u6709\u52b9\u671f\u9650\u306e\u5224\u5b9a\u304c\u53ef\u80fd\u3067\u3059\u3002\u305d\u306e\u305f\u3081\u3001HTTP API\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b\u524d\u306b\u6709\u52b9\u671f\u9650\u3092\u5224\u5b9a\u3057\u3066\u3001\u6709\u52b9\u671f\u9650\u304c\u5207\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u7528\u3057\u3066\u65b0\u3057\u3044ID\u30c8\u30fc\u30af\u30f3\u3084\u3001\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u767a\u884c\u3057\u3066\u3082\u3089\u3046\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,l.kt)("p",null,"ID\u30c8\u30fc\u30af\u30f3\u3084\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306e\u6709\u52b9\u671f\u9650\u304c\u5207\u308c\u305f\u5834\u5408\u306e\u30d5\u30ed\u30fc\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u306e\u671f\u9650\u304c\u5207\u308c\u3066\u3044\u308b\u3001\u307e\u305f\u306f\u671f\u9650\u304c\u9593\u8fd1\u306e\u5834\u5408\u306fID\u30c8\u30fc\u30af\u30f3\u3084\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u7834\u68c4\u3059\u308b"),(0,l.kt)("li",{parentName:"ol"},"\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u30c8\u30fc\u30af\u30f3\u3092\u5229\u7528\u3057\u3066\u3001ID\u30c8\u30fc\u30af\u30f3\u3084\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u518d\u53d6\u5f97\u3059\u308b"),(0,l.kt)("li",{parentName:"ol"},"\u53d6\u5f97\u3057\u305fID\u30c8\u30fc\u30af\u30f3\u3084\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3001HTTP API\u306b\u518d\u5ea6\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b")),(0,l.kt)("p",null,"\u4e0a\u8a18\u306e\u5834\u5408\u3060\u3068\u3001HTTP\u30b9\u30bf\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c401\u3067\u8fd4\u5374\u3055\u308c\u308b\u3053\u3068\u306f\u306a\u304f\u306a\u308a\uff08\u30ed\u30b0\u30a4\u30f3\u51e6\u7406\u3092\u9664\u304f\uff09\u3001HTTP API\u3068\u306e\u901a\u4fe1\u56de\u6570\u3092\u6e1b\u3089\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"http-api\u304b\u3089\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u5374\u3055\u308c\u306a\u3044\u5834\u5408\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"},"HTTP API\u304b\u3089\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u5374\u3055\u308c\u306a\u3044\u5834\u5408\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"),(0,l.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u7aef\u672b\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304cOFF\u306b\u306a\u3063\u3066\u3044\u305f\u308a\u3001\u63a5\u7d9a\u5148\u30b5\u30fc\u30d0\u306e\u30dd\u30fc\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u3044\u5834\u5408\u306a\u3069\u306f\u3001HTTP API\u304b\u3089\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u5374\u3055\u308c\u307e\u305b\u3093\u3002\u3053\u308c\u3089\u306e\u5834\u5408\u306f\u3001\u5171\u901a\u3067\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3092\u5b9f\u65bd\u3057\u3066\u30e6\u30fc\u30b6\u306b\u30a8\u30e9\u30fc\u306e\u5185\u5bb9\u3092\u4f1d\u3048\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"http-api\u901a\u4fe1\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8"},"HTTP API\u901a\u4fe1\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8"),(0,l.kt)("p",null,"axios\u3067\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"https://github.com/axios/axios#request-config"},"timeout"),"\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002\u3057\u304b\u3057\u3001axios\u306e",(0,l.kt)("inlineCode",{parentName:"p"},"timeout"),"\u306fAndroid\u3067\u306f\u30b3\u30cd\u30af\u30b7\u30e7\u30f3\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u306e\u307f\u306b\u4f7f\u7528\u3055\u308c\u308b\u305f\u3081\u3001\u30b3\u30cd\u30af\u30b7\u30e7\u30f3\u63a5\u7d9a\u5f8c\u306b\u30b5\u30fc\u30d0\u306e\u5fdc\u7b54\u304c\u9045\u3044\u5834\u5408\u306a\u3069\u306f\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3057\u307e\u305b\u3093\u3002"),(0,l.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001SantokuApp\u3067\u306faxios\u306e",(0,l.kt)("inlineCode",{parentName:"p"},"timeout"),"\u3092\u4f7f\u7528\u305b\u305a\u3001",(0,l.kt)("a",{parentName:"p",href:"https://github.com/axios/axios#cancellation"},"CancelToken"),"\u3092\u5229\u7528\u3057\u3066HTTP API\u901a\u4fe1\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002React Query\u3092\u4f7f\u7528\u3057\u305f\u5834\u5408\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/query-cancellation"},"Query Cancellation"),"\u304c\u53c2\u8003\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"Query Cancellation\u306f\u3001\u30ea\u30bd\u30fc\u30b9\u3092\u53d6\u5f97\u3059\u308b",(0,l.kt)("inlineCode",{parentName:"p"},"useQuery"),"\u3092\u4f7f\u7528\u3057\u305f\u5834\u5408\u306bHTTP API\u901a\u4fe1\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3059\u308b\u65b9\u6cd5\u3067\u3059\u3002\u30ea\u30bd\u30fc\u30b9\u306e\u767b\u9332\u3084\u66f4\u65b0\u6642\u306b\u4f7f\u7528\u3059\u308b",(0,l.kt)("inlineCode",{parentName:"p"},"useMutation"),"\u3067\u306fHTTP API\u901a\u4fe1\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3067\u304d\u307e\u305b\u3093\u3002",(0,l.kt)("sup",{parentName:"p",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,l.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001\u30ea\u30bd\u30fc\u30b9\u306e\u767b\u9332\u3084\u66f4\u65b0\u6642\u306bHTTP API\u901a\u4fe1\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3057\u305f\u3044\u5834\u5408\u306f\u3001axios\u306e",(0,l.kt)("inlineCode",{parentName:"p"},"Cancel Token"),"\u3092\u4f7f\u7528\u3057\u3066\u72ec\u81ea\u306b\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u305f\u3060\u3057\u3001\u30ea\u30bd\u30fc\u30b9\u306e\u767b\u9332\u3084\u66f4\u65b0\u6642\u306fHTTP API\u901a\u4fe1\u306e\u30ad\u30e3\u30f3\u30bb\u30eb\u304c\u9069\u5207\u3067\u306f\u306a\u3044\u5834\u9762\u3082\u3042\u308a\u307e\u3059\u3002HTTP API\u306e\u901a\u4fe1\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3057\u305f\u5834\u5408\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u306fHTTP API\u306e\u51e6\u7406\u304c\u6210\u529f\u3057\u305f\u304b\u5931\u6557\u3057\u305f\u304b\u3092\u628a\u63e1\u3067\u304d\u307e\u305b\u3093\u3002\u30e6\u30fc\u30b6\u306b\u306f\u901a\u4fe1\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3092\u4f1d\u3048\u3066\u3044\u308b\u306b\u3082\u95a2\u308f\u3089\u305a\u3001HTTP API\u306e\u51e6\u7406\u306f\u6b63\u5e38\u306b\u5b8c\u4e86\u3057\u3066\u30ea\u30bd\u30fc\u30b9\u304c\u767b\u9332\u3001\u66f4\u65b0\u3055\u308c\u3066\u3044\u308b\u53ef\u80fd\u6027\u3082\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30e6\u30fc\u30b6\u306b\u6b63\u78ba\u306a\u60c5\u5831\u3092\u4f1d\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u306a\u3044\u306e\u306f\u826f\u304f\u306a\u3044\u3068\u8003\u3048\u305f\u305f\u3081\u3001SantokuApp\u3067\u306f\u30ea\u30bd\u30fc\u30b9\u306e\u53d6\u5f97\u6642\u306e\u307fHTTP API\u901a\u4fe1\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"http-api\u901a\u4fe1\u306e\u30ea\u30c8\u30e9\u30a4\u691c\u8a0e\u958b\u59cb\u6642\u70b9"},"HTTP API\u901a\u4fe1\u306e\u30ea\u30c8\u30e9\u30a4\uff08\u691c\u8a0e\u958b\u59cb\u6642\u70b9\uff09"),(0,l.kt)("p",null,"\u5f53\u521d\u306e\u8b70\u8ad6\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u65b9\u5f0f\u306b\u3057\u3088\u3046\u3068\u8003\u3048\u3066\u3044\u307e\u3057\u305f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HTTP API\u901a\u4fe1\u3067\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u5185\u5bb9\u306b\u5fdc\u3058\u3066\u3001HTTP API\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u518d\u8a66\u884c\u3059\u308b"),(0,l.kt)("li",{parentName:"ul"},"\u30ea\u30c8\u30e9\u30a4\u9593\u9694\u306f",(0,l.kt)("inlineCode",{parentName:"li"},"1000ms"),"\u304b\u3089\u59cb\u307e\u308a\u3001\u30ea\u30c8\u30e9\u30a4\u56de\u6570\u306b\u5fdc\u3058\u3066\u6307\u6570\u95a2\u6570\u7684\u306b\u5897\u3084\u3059\uff081000ms\u30012000ms\u30014000ms...\uff09")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u539f\u56e0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u30ea\u30c8\u30e9\u30a4\u56de\u6570"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c400"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30c8\u30e9\u30a4\u3057\u306a\u3044")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c401"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30c8\u30e9\u30a4\u3057\u306a\u3044")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c404"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30c8\u30e9\u30a4\u3057\u306a\u3044")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c412"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30c8\u30e9\u30a4\u3057\u306a\u3044")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c429"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2\u56de")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c503"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30c8\u30e9\u30a4\u3057\u306a\u3044")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c504"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2\u56de")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c\u4e0a\u8a18\u4ee5\u5916"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2\u56de")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"HTTP API\u304b\u3089\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u5374\u3055\u308c\u306a\u3044\u5834\u5408"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2\u56de")))),(0,l.kt)("p",null,"\u3057\u304b\u3057\u3001\u8b70\u8ad6\u3092\u91cd\u306d\u308b\u4e2d\u3067\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u7591\u554f\u304c\u6319\u304c\u308a\u307e\u3057\u305f\u3002"),(0,l.kt)("h4",{id:"\u30ea\u30c8\u30e9\u30a4\u306f\u672c\u5f53\u306b\u5fc5\u8981\u304b"},"\u30ea\u30c8\u30e9\u30a4\u306f\u672c\u5f53\u306b\u5fc5\u8981\u304b"),(0,l.kt)("p",null,"HTTP API\u901a\u4fe1\u3092\u3059\u308b\u5834\u5408\u3001HTTP API\u304b\u3089\u306e\u5fdc\u7b54\u304c\u8fd4\u3063\u3066\u304f\u308b\u307e\u3067\u306f\u4ed6\u306e\u64cd\u4f5c\u3092\u3067\u304d\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u6a5f\u80fd\u3082\u3042\u308a\u307e\u3059\u3002\u305d\u3046\u3044\u3063\u305f\u5834\u5408\u306b\u81ea\u52d5\u3067\u30ea\u30c8\u30e9\u30a4\u3059\u308b\u3068\u3001\u30ea\u30c8\u30e9\u30a4\u6570\u306b\u5fdc\u3058\u305f\u6642\u9593\u3060\u3051\u30e6\u30fc\u30b6\u306f\u64cd\u4f5c\u3067\u304d\u305a\u306b\u5f85\u3061\u7d9a\u3051\u306a\u3051\u308c\u3070\u3044\u3051\u307e\u305b\u3093\u3002\u30e6\u30fc\u30b6\u306f\u305d\u308c\u3092\u30b9\u30c8\u30ec\u30b9\u306b\u611f\u3058\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001SantokuApp\u3067\u306fHTTP API\u901a\u4fe1\u3067\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306b\u81ea\u52d5\u3067\u518d\u8a66\u884c\u3057\u306a\u3044\u65b9\u91dd\u3068\u3057\u307e\u3059\u3002\u4ee3\u308f\u308a\u306b\u3001\u30e6\u30fc\u30b6\u81ea\u8eab\u306e\u64cd\u4f5c\u3067HTTP API\u3092\u518d\u8a66\u884c\u3067\u304d\u308bUI\u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u306b\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u6c7a\u5b9a"},"\u6c7a\u5b9a"),(0,l.kt)("h3",{id:"http\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c400\u4ee5\u4e0a\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"},"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c400\u4ee5\u4e0a\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"),(0,l.kt)("p",null,"\u7279\u5b9a\u306eHTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u306e\u5834\u5408\u3001\u30e6\u30fc\u30b6\u306b\u9069\u5207\u306a\u30a8\u30e9\u30fc\u5185\u5bb9\u3068\u5fa9\u5e30\u624b\u9806\u3092\u4f1d\u3048\u307e\u3059\u3002\u305d\u308c\u4ee5\u5916\u306eHTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u306e\u5834\u5408\u306f\u3001\u60f3\u5b9a\u5916\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u3053\u3068\u3092\u30b9\u30ca\u30c3\u30af\u30d0\u30fc\u306b\u8868\u793a\u3057\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9"),(0,l.kt)("th",{parentName:"tr",align:"left"},"SantokuApp\u3067\u767a\u751f\u3059\u308b\u5834\u9762"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u7b87\u6240"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"400"),(0,l.kt)("td",{parentName:"tr",align:"left"},"BadRequest - \u30ea\u30af\u30a8\u30b9\u30c8\u3068\u3057\u3066\u9001\u308b\u30da\u30a4\u30ed\u30fc\u30c9\u304c\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u30a8\u30e9\u30fc\u306b\u306a\u3063\u305f\u5834\u5408\u306a\u3069"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u500b\u5225")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"401"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unauthorized - \u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\uff08HTTP API\u304c\u751f\u6210\u3057\u305f\u30bb\u30c3\u30b7\u30e7\u30f3\uff09\u306e\u671f\u9650\u304c\u5207\u308c\u305f\u5834\u5408"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5171\u901a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"404"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Not found - \u30ea\u30bd\u30fc\u30b9\u304c\u898b\u3064\u304b\u3089\u306a\u304b\u3063\u305f\u5834\u5408"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u500b\u5225")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"412"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Precondition Failed - \u64cd\u4f5c\u3057\u3066\u3044\u308b\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u5f37\u5236\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u5bfe\u8c61\u306e\u5834\u5408"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5171\u901a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"429"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Too Many Requests - \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u5927\u91cf\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u9001\u4fe1\u3055\u308c\u305f\u5834\u5408"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5171\u901a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"503"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Service Unavailable - HTTP API\u304c\u30b7\u30b9\u30c6\u30e0\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u3067\u6b62\u307e\u3063\u3066\u3044\u308b\u5834\u5408"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5171\u901a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"504"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Gateway Timeout - HTTP API\u304b\u3089\u6642\u9593\u5185\u306b\u5fdc\u7b54\u304c\u306a\u304b\u3063\u305f\u5834\u5408"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5171\u901a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u305d\u306e\u4ed6"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u60f3\u5b9a\u5916\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5171\u901a")))),(0,l.kt)("h3",{id:"http-api\u304b\u3089\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u5374\u3055\u308c\u306a\u3044\u5834\u5408\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0-1"},"HTTP API\u304b\u3089\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u5374\u3055\u308c\u306a\u3044\u5834\u5408\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"),(0,l.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u7aef\u672b\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304cOFF\u306a\u3069\u3067HTTP API\u304b\u3089\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u5374\u3055\u308c\u306a\u3044\u5834\u5408\u306f\u3001\u5171\u901a\u3067\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3092\u5b9f\u65bd\u3057\u3066\u30e6\u30fc\u30b6\u306b\u30a8\u30e9\u30fc\u306e\u5185\u5bb9\u3092\u4f1d\u3048\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"http-api\u901a\u4fe1\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8-1"},"HTTP API\u901a\u4fe1\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8"),(0,l.kt)("p",null,"\u30ea\u30bd\u30fc\u30b9\u3092\u53d6\u5f97\u3059\u308b\u5834\u5408\u306f\u3001\u4e00\u5b9a\u6642\u9593\u304c\u7d4c\u904e\u3057\u3066\u3082HTTP API\u304b\u3089\u5fdc\u7b54\u304c\u306a\u3044\u5834\u5408\u306f\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3055\u305b\u307e\u3059\u3002\u30ea\u30bd\u30fc\u30b9\u306e\u767b\u9332\u3084\u66f4\u65b0\u3092\u3059\u308b\u5834\u5408\u306f\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3057\u307e\u305b\u3093\u3002"),(0,l.kt)("h3",{id:"http-api\u901a\u4fe1\u306e\u30ea\u30c8\u30e9\u30a4"},"HTTP API\u901a\u4fe1\u306e\u30ea\u30c8\u30e9\u30a4"),(0,l.kt)("p",null,"HTTP API\u901a\u4fe1\u3067\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306b\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u307e\u305b\u3093\u3002\u4ee3\u308f\u308a\u306b\u3001\u30e6\u30fc\u30b6\u81ea\u8eab\u304cHTTP API\u306e\u518d\u8a66\u884c\u3092\u9078\u629e\u3067\u304d\u308bUI\u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u306b\u3057\u307e\u3059\u3002"),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1"},(0,l.kt)("inlineCode",{parentName:"li"},"useMutation"),"\u3092\u4f7f\u7528\u3057\u305f\u5834\u5408\u306e\u30ad\u30e3\u30f3\u30bb\u30eb\u6a5f\u80fd\u306b\u3064\u3044\u3066\u306f\u3001React Query\u306eGitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u3067",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tannerlinsley/react-query/discussions/1551"},"\u30c7\u30a3\u30b9\u30ab\u30c3\u30b7\u30e7\u30f3"),"\u3055\u308c\u3066\u3044\u307e\u3059\u3002",(0,l.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);