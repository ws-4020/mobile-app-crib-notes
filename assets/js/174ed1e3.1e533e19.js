"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[3281],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=c(a),d=r,f=m["".concat(p,".").concat(d)]||m[d]||k[d]||i;return a?n.createElement(f,l(l({ref:e},u),{},{components:a})):n.createElement(f,l({ref:e},u))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},48430:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={title:"\u30ed\u30b0\u30a4\u30f3"},p=void 0,c={unversionedId:"react-native/santoku/application-architecture/auth/login",id:"react-native/santoku/application-architecture/auth/login",title:"\u30ed\u30b0\u30a4\u30f3",description:"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30e6\u30fc\u30b6\u304c\u672c\u4eba\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306b\u3001Cookie\u30d9\u30fc\u30b9\u306e\u8a8d\u8a3c\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002ID\u30fb\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u7528\u3044\u3066\u8a8d\u8a3c\u3057\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u304b\u3089\u6255\u3044\u51fa\u3055\u308c\u305f\u30bb\u30c3\u30b7\u30e7\u30f3ID\u3092Cookie\u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u8a8d\u8a3c\u72b6\u614b\u3092\u7dad\u6301\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/auth/login.mdx",sourceDirName:"react-native/santoku/application-architecture/auth",slug:"/react-native/santoku/application-architecture/auth/login",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/login",tags:[],version:"current",lastUpdatedAt:1638749286,formattedLastUpdatedAt:"2021/12/6",frontMatter:{title:"\u30ed\u30b0\u30a4\u30f3"},sidebar:"santoku",previous:{title:"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/signup"},next:{title:"\u30ed\u30b0\u30a2\u30a6\u30c8",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/logout"}},u=[{value:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3067\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3092\u5165\u529b\u3057\u3066\u30ed\u30b0\u30a4\u30f3",id:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3067\u30a2\u30ab\u30a6\u30f3\u30c8id\u3092\u5165\u529b\u3057\u3066\u30ed\u30b0\u30a4\u30f3",children:[{value:"\u51e6\u7406\u30d5\u30ed\u30fc",id:"\u51e6\u7406\u30d5\u30ed\u30fc",children:[],level:3},{value:"\u5229\u7528\u65b9\u6cd5",id:"\u5229\u7528\u65b9\u6cd5",children:[],level:3}],level:2},{value:"\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3",id:"\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3",children:[{value:"\u51e6\u7406\u30d5\u30ed\u30fc",id:"\u51e6\u7406\u30d5\u30ed\u30fc-1",children:[],level:3},{value:"\u5229\u7528\u65b9\u6cd5",id:"\u5229\u7528\u65b9\u6cd5-1",children:[],level:3}],level:2},{value:"\u8a8d\u8a3c\u72b6\u614b\u306e\u7dad\u6301",id:"\u8a8d\u8a3c\u72b6\u614b\u306e\u7dad\u6301",children:[],level:2}],k={toc:u};function m(t){var e=t.components,o=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},k,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30e6\u30fc\u30b6\u304c\u672c\u4eba\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306b\u3001Cookie\u30d9\u30fc\u30b9\u306e\u8a8d\u8a3c\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002ID\u30fb\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u7528\u3044\u3066\u8a8d\u8a3c\u3057\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u304b\u3089\u6255\u3044\u51fa\u3055\u308c\u305f\u30bb\u30c3\u30b7\u30e7\u30f3ID\u3092Cookie\u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u8a8d\u8a3c\u72b6\u614b\u3092\u7dad\u6301\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u306a\u304a\u3001\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u30ed\u30b0\u30a4\u30f3\u306e\u624b\u6bb5\u3068\u3057\u3066\u3001\u524d\u56de\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u305f\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u306e\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u3068\u30ed\u30b0\u30a2\u30a6\u30c8\u5f8c\u306e\u30ed\u30b0\u30a4\u30f3\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3067\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3092\u5165\u529b\u3057\u3066\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306b\u30ed\u30b0\u30a4\u30f3\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1"),(0,i.kt)("li",{parentName:"ul"},"\u7aef\u672b\u306b\u4fdd\u5b58\u3055\u308c\u305f\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u7528\u3044\u3066\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306b\u30ed\u30b0\u30a4\u30f3\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\uff08\u4ee5\u964d\u3001\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u3068\u547c\u3073\u307e\u3059\uff09")),(0,i.kt)("h2",{id:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3067\u30a2\u30ab\u30a6\u30f3\u30c8id\u3092\u5165\u529b\u3057\u3066\u30ed\u30b0\u30a4\u30f3"},"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3067\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3092\u5165\u529b\u3057\u3066\u30ed\u30b0\u30a4\u30f3"),(0,i.kt)("p",null,"\u30a2\u30d7\u30ea\u304b\u3089\u30ed\u30b0\u30a2\u30a6\u30c8\u3057\u305f\u5834\u5408\u306f\u3001\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u304b\u3089\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3092\u5165\u529b\u3057\u3066\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/signup"},"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7"),"\u5f8c\u306b\u4fdd\u5b58\u3057\u305f\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"\u51e6\u7406\u30d5\u30ed\u30fc"},"\u51e6\u7406\u30d5\u30ed\u30fc"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3067\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3092\u5165\u529b\u3057\u3066\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u5834\u5408\u306e\u51e6\u7406\u30d5\u30ed\u30fc",src:a(77535).Z})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"No"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u51e6\u7406"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5185\u5bb9"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2460"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30ab\u30a6\u30f3\u30c8ID\u306e\u5165\u529b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30e6\u30fc\u30b6\u306f\u3001\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3067\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3092\u5165\u529b\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2461"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u53d6\u5f97"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u306f\u3001\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u30a2\u30ab\u30a6\u30f3\u30c8ID\u306b\u7d10\u3065\u304f\u30d1\u30b9\u30ef\u30fc\u30c9\u53d6\u5f97\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2462"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3\u306e\u30ea\u30af\u30a8\u30b9\u30c8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u306f\u3001\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u7528\u3044\u3066\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306b\u30ed\u30b0\u30a4\u30f3\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u308a\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2463"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8a8d\u8a3c"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306f\u3001\u30ed\u30b0\u30a4\u30f3\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u53d7\u3051\u53d6\u3063\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u7528\u3044\u3066\u8a8d\u8a3c\u51e6\u7406\u3092\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2464"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8a8d\u8a3c\u7d50\u679c\u306e\u8fd4\u5374"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306f\u8a8d\u8a3c\u51e6\u7406\u306e\u7d50\u679c\u3092\u30a2\u30d7\u30ea\u306b\u8fd4\u5374\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2465"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Cookie\u306e\u4fdd\u5b58"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u306f\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u304b\u3089\u8a8d\u8a3c\u51e6\u7406\u306e\u7d50\u679c\u3092\u53d7\u3051\u53d6\u3063\u3066\u3001Cookie\uff08\u30bb\u30c3\u30b7\u30e7\u30f3ID\uff09\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002Cookie\u306e\u4fdd\u5b58\u306b\u95a2\u3057\u3066\u306f\u3001",(0,i.kt)("a",{parentName:"td",href:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/login#%E8%AA%8D%E8%A8%BC%E7%8A%B6%E6%85%8B%E3%81%AE%E7%B6%AD%E6%8C%81"},"\u8a8d\u8a3c\u72b6\u614b\u306e\u7dad\u6301"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2466"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3092\u4fdd\u5b58"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u306f\u3001\u5165\u529b\u3055\u308c\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3092\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002")))),(0,i.kt)("h3",{id:"\u5229\u7528\u65b9\u6cd5"},"\u5229\u7528\u65b9\u6cd5"),(0,i.kt)("p",null,"\u30ed\u30b0\u30a4\u30f3\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"AuthenticationService"),"\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"changeAccount"),"\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u524d\u306b\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u304b\u3089CSRF\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30ed\u30b0\u30a4\u30f3\u306b\u6210\u529f\u3059\u308b\u3068CSRF\u30c8\u30fc\u30af\u30f3\u304c\u66f4\u65b0\u3055\u308c\u308b\u305f\u3081\u3001\u518d\u5ea6CSRF\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u304b\u3089\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u5834\u5408\u306e\u5229\u7528\u65b9\u6cd5"',title:'"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u304b\u3089\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u5834\u5408\u306e\u5229\u7528\u65b9\u6cd5"'},"import {AuthenticationService, csrfToken} from 'framework';\n\nconst changeAccount = useCallback(async () => {\n  try {\n    // CSRF\u30c8\u30fc\u30af\u30f3\u306e\u53d6\u5f97\n    await csrfToken();\n    // \u5165\u529b\u3055\u308c\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3092\u4f7f\u7528\u3057\u3066\u30ed\u30b0\u30a4\u30f3\n    await AuthenticationService.changeAccount(accountId);\n    // CSRF\u30c8\u30fc\u30af\u30f3\u306e\u53d6\u5f97\n    await csrfToken();\n  } catch (e) {\n    // \u30a8\u30e9\u30fc\u51e6\u7406\n  }\n}, [accountId]);\n")),(0,i.kt)("h2",{id:"\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3"},"\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3"),(0,i.kt)("p",null,"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u53d6\u5f97\u3057\u3066\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002\u30e6\u30fc\u30b6\u306b\u30ed\u30b0\u30a4\u30f3\u64cd\u4f5c\u3092\u8981\u6c42\u3059\u308b\u3053\u3068\u306a\u304f\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u308b\u305f\u3081\u3001\u30a2\u30d7\u30ea\u306e\u5229\u4fbf\u6027\u304c\u5411\u4e0a\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u5834\u5408\u306b\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u3092\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u306b\u6210\u529f\u3057\u305f\u5834\u5408"),(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u306b\u30ed\u30b0\u30a4\u30f3\u5f8c\u3001\u30ed\u30b0\u30a2\u30a6\u30c8\u305b\u305a\u306b\u30a2\u30d7\u30ea\u3092\u7d42\u4e86\u3057\u3066\u30a2\u30d7\u30ea\u3092\u518d\u8d77\u52d5\u3057\u305f\u5834\u5408"),(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u4f7f\u7528\u4e2d\u306b\u30bb\u30c3\u30b7\u30e7\u30f3ID\u306e\u6709\u52b9\u671f\u9650\u304c\u5207\u308c\u305f\u5834\u5408")),(0,i.kt)("h3",{id:"\u51e6\u7406\u30d5\u30ed\u30fc-1"},"\u51e6\u7406\u30d5\u30ed\u30fc"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u306e\u51e6\u7406\u30d5\u30ed\u30fc",src:a(24532).Z})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"No"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u51e6\u7406"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5185\u5bb9"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2460"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u53d6\u5f97"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u306f\u3001\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u524d\u56de\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u3001\u305d\u306e\u30a2\u30ab\u30a6\u30f3\u30c8ID\u306b\u7d10\u3065\u304f\u30d1\u30b9\u30ef\u30fc\u30c9\u53d6\u5f97\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),"\u305f\u3060\u3057\u3001\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u5f8c\u306f\u524d\u56de\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3067\u306f\u306a\u304f\u3001",(0,i.kt)("a",{parentName:"td",href:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/signup#%E5%87%A6%E7%90%86%E3%83%95%E3%83%AD%E3%83%BC"},"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u304b\u3089\u8fd4\u5374\u3055\u308c\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID"),"\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2461"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3\u306e\u30ea\u30af\u30a8\u30b9\u30c8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u306f\u3001\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u7528\u3044\u3066\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306b\u30ed\u30b0\u30a4\u30f3\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u308a\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2462"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8a8d\u8a3c"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306f\u3001\u30ed\u30b0\u30a4\u30f3\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u53d7\u3051\u53d6\u3063\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u7528\u3044\u3066\u8a8d\u8a3c\u51e6\u7406\u3092\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2463"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8a8d\u8a3c\u7d50\u679c\u306e\u8fd4\u5374"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306f\u8a8d\u8a3c\u51e6\u7406\u306e\u7d50\u679c\u3092\u30a2\u30d7\u30ea\u306b\u8fd4\u5374\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2464"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Cookie\u306e\u4fdd\u5b58"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u306f\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u304b\u3089\u8a8d\u8a3c\u51e6\u7406\u306e\u7d50\u679c\u3092\u53d7\u3051\u53d6\u3063\u3066\u3001Cookie\uff08\u30bb\u30c3\u30b7\u30e7\u30f3ID\uff09\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002Cookie\u306e\u4fdd\u5b58\u306b\u95a2\u3057\u3066\u306f\u3001",(0,i.kt)("a",{parentName:"td",href:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/login#%E8%AA%8D%E8%A8%BC%E7%8A%B6%E6%85%8B%E3%81%AE%E7%B6%AD%E6%8C%81"},"\u8a8d\u8a3c\u72b6\u614b\u306e\u7dad\u6301"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))),(0,i.kt)("h3",{id:"\u5229\u7528\u65b9\u6cd5-1"},"\u5229\u7528\u65b9\u6cd5"),(0,i.kt)("p",null,"\u30ed\u30b0\u30a4\u30f3\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"AuthenticationService"),"\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"autoLogin"),"\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u524d\u306b\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u304b\u3089CSRF\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u306b\u6210\u529f\u3057\u305f\u5f8c\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u306f\u3001CSRF\u30c8\u30fc\u30af\u30f3\u3092\u518d\u5ea6\u53d6\u5f97\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u307e\u305f\u3001\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u524d\u306b\u3001\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u304c\u53ef\u80fd\u304b\u3092\u691c\u8a3c\u3057\u307e\u3059\u3002\u524d\u56de\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u3001\u305d\u306e\u30a2\u30ab\u30a6\u30f3\u30c8ID\u306b\u7d10\u3065\u304f\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u53d6\u5f97\u3067\u304d\u308b\u304b\u3067\u3001\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u304c\u53ef\u80fd\u304b\u3069\u3046\u304b\u3092\u691c\u8a3c\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u306e\u5229\u7528\u65b9\u6cd5"',title:'"\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u306e\u5229\u7528\u65b9\u6cd5"'},"import {AuthenticationService, csrfToken} from 'framework';\n\nconst autoLogin = useCallback(async () => {\n  try {\n    const canAutoLogin = await AuthenticationService.canAutoLogin();\n    // \u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u304c\u53ef\u80fd\u306e\u5834\u5408\u306f\u3001\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u3059\u308b\n    if (canAutoLogin) {\n      // CSRF\u30c8\u30fc\u30af\u30f3\u306e\u53d6\u5f97\n      await csrfToken();\n      await AuthenticationService.autoLogin();\n      // CSRF\u30c8\u30fc\u30af\u30f3\u306e\u53d6\u5f97\n      await csrfToken();\n      return;\n    }\n\n    // \u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u3001\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306b\u9077\u79fb\u3059\u308b\u306a\u3069\u306e\u51e6\u7406\u3092\u5b9f\u88c5\u3057\u3066\u304f\u3060\u3055\u3044\n\n  } catch (e) {\n    // \u30a8\u30e9\u30fc\u51e6\u7406\n  }\n}, []);\n")),(0,i.kt)("h2",{id:"\u8a8d\u8a3c\u72b6\u614b\u306e\u7dad\u6301"},"\u8a8d\u8a3c\u72b6\u614b\u306e\u7dad\u6301"),(0,i.kt)("p",null,"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3078\u306eHTTP\u30ea\u30af\u30a8\u30b9\u30c8\u9001\u4fe1\u6642\u306b\u3001Cookie\u7d4c\u7531\u3067\u30bb\u30c3\u30b7\u30e7\u30f3ID\u3092\u6e21\u3059\u3053\u3068\u306b\u3088\u308a\u8a8d\u8a3c\u72b6\u614b\u3092\u7dad\u6301\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u8a8d\u8a3c\u5f8c\u306b\u53d7\u3051\u53d6\u3063\u305fCookie\uff08\u30bb\u30c3\u30b7\u30e7\u30f3ID\uff09\u306a\u3069\u3001HTTP\u30ec\u30b9\u30dd\u30f3\u30b9\u3068\u3057\u3066\u53d7\u3051\u53d6\u3063\u305fCookie\u306f\u3001\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u6a5f\u80fd\u3067\u7aef\u672b\u5185\u306b\u81ea\u52d5\u3067\u4fdd\u6301\u3055\u308c\u307e\u3059\u3002\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3078\u306eHTTP\u30ea\u30af\u30a8\u30b9\u30c8\u9001\u4fe1\u6642\u306b\u306f\u3001\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u6a5f\u80fd\u3067Cookie\uff08\u30bb\u30c3\u30b7\u30e7\u30f3ID\uff09\u3092\u900f\u904e\u7684\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u306a\u304a\u3001\u30bb\u30c3\u30b7\u30e7\u30f3ID\u306b\u306f\u6709\u52b9\u671f\u9650\u304c\u3042\u308a\u307e\u3059\u3002\u6709\u52b9\u671f\u9650\u5207\u308c\u3092\u691c\u77e5\u3057\u305f\u5834\u5408\u306f\u3001\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30d7\u30ea\u304c\u81ea\u52d5\u7684\u306b\u518d\u5ea6\u30bb\u30c3\u30b7\u30e7\u30f3ID\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"))}m.isMDXComponent=!0},24532:function(t,e,a){e.Z=a.p+"assets/images/auth-auto-login-flow.drawio-73beb0765c44d795563c25464543cb54.png"},77535:function(t,e,a){e.Z=a.p+"assets/images/auth-login-screen-flow.drawio-3a85072a36ab53c9200889eab45e1a96.png"}}]);