"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[6239],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),f=p(n),s=r,d=f["".concat(c,".").concat(s)]||f[s]||m[s]||i;return n?a.createElement(d,l(l({ref:e},u),{},{components:n})):a.createElement(d,l({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},35504:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"\u30a2\u30d7\u30ea\u8d77\u52d5\u5f8c\u306e\u521d\u671f\u5316\u51e6\u7406"},c=void 0,p={unversionedId:"react-native/santoku/application-architecture/life-cycle-management/initialization",id:"react-native/santoku/application-architecture/life-cycle-management/initialization",title:"\u30a2\u30d7\u30ea\u8d77\u52d5\u5f8c\u306e\u521d\u671f\u5316\u51e6\u7406",description:"SantokuApp\u3067\u306f\u3001\u30a2\u30d7\u30ea\u8d77\u52d5\u5f8c\u306b\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u8868\u793a\u3057\u3066\u30a2\u30d7\u30ea\u306e\u521d\u671f\u5316\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u307e\u3059\u3002\u521d\u671f\u5316\u51e6\u7406\u306f\u3001\u30a2\u30d7\u30ea\u8d77\u52d5\u5f8c\u306b\u78ba\u8a8d\u3057\u306a\u3051\u308c\u3070\u3044\u3051\u306a\u3044\u4e8b\u9805\u306e\u30c1\u30a7\u30c3\u30af\u3084\u3001\u30a2\u30d7\u30ea\u5168\u4f53\u3067\u5171\u6709\u3059\u308b\u60c5\u5831\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u53d6\u5f97\u3057\u305f\u60c5\u5831\u306a\u3069\u306b\u5fdc\u3058\u3066\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u9589\u3058\u305f\u5f8c\u306b\u8868\u793a\u3059\u308b\u753b\u9762\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/life-cycle-management/initialization.mdx",sourceDirName:"react-native/santoku/application-architecture/life-cycle-management",slug:"/react-native/santoku/application-architecture/life-cycle-management/initialization",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/life-cycle-management/initialization",draft:!1,tags:[],version:"current",lastUpdatedAt:1635758492,formattedLastUpdatedAt:"2021/11/1",frontMatter:{title:"\u30a2\u30d7\u30ea\u8d77\u52d5\u5f8c\u306e\u521d\u671f\u5316\u51e6\u7406"},sidebar:"santoku",previous:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/life-cycle-management/overview"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/overview"}},u={},m=[{value:"\u521d\u671f\u5316\u51e6\u7406\u306e\u30d5\u30ed\u30fc",id:"\u521d\u671f\u5316\u51e6\u7406\u306e\u30d5\u30ed\u30fc",level:2},{value:"\u521d\u671f\u30c7\u30fc\u30bf\u306e\u53d6\u5f97",id:"\u521d\u671f\u30c7\u30fc\u30bf\u306e\u53d6\u5f97",level:3},{value:"\u521d\u671f\u8868\u793a\u753b\u9762\u306e\u6c7a\u5b9a",id:"\u521d\u671f\u8868\u793a\u753b\u9762\u306e\u6c7a\u5b9a",level:3}],f={toc:m};function s(t){var e=t.components,o=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},f,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"SantokuApp\u3067\u306f\u3001\u30a2\u30d7\u30ea\u8d77\u52d5\u5f8c\u306b\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u8868\u793a\u3057\u3066\u30a2\u30d7\u30ea\u306e\u521d\u671f\u5316\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u307e\u3059\u3002\u521d\u671f\u5316\u51e6\u7406\u306f\u3001\u30a2\u30d7\u30ea\u8d77\u52d5\u5f8c\u306b\u78ba\u8a8d\u3057\u306a\u3051\u308c\u3070\u3044\u3051\u306a\u3044\u4e8b\u9805\u306e\u30c1\u30a7\u30c3\u30af\u3084\u3001\u30a2\u30d7\u30ea\u5168\u4f53\u3067\u5171\u6709\u3059\u308b\u60c5\u5831\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u53d6\u5f97\u3057\u305f\u60c5\u5831\u306a\u3069\u306b\u5fdc\u3058\u3066\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u9589\u3058\u305f\u5f8c\u306b\u8868\u793a\u3059\u308b\u753b\u9762\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u521d\u671f\u5316\u51e6\u7406\u306e\u30d5\u30ed\u30fc"},"\u521d\u671f\u5316\u51e6\u7406\u306e\u30d5\u30ed\u30fc"),(0,i.kt)("p",null,"\u30a2\u30d7\u30ea\u8d77\u52d5\u5f8c\u306e\u521d\u671f\u5316\u51e6\u7406\u306e\u30d5\u30ed\u30fc\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u521d\u671f\u51e6\u7406\u30d5\u30ed\u30fc",src:n(47279).Z,width:"971",height:"1089"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u521d\u671f\u5316\u51e6\u7406"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u6982\u8981"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Firebase Crashlytics\u306e\u8a2d\u5b9a1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Firebase Crashlytics\u306e\u521d\u671f\u8a2d\u5b9a\uff08\u8d77\u52d5ID\u306e\u8a2d\u5b9a\u306a\u3069\uff09\u3092\u884c\u3044\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u30ed\u30fc\u30c9"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u3067\u4f7f\u7528\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3059\u3002\u4ee5\u964d\u306e\u51e6\u7406\u3067\u306f\u3053\u3053\u3067\u53d6\u5f97\u3057\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u3001\u30a2\u30d7\u30ea\u8d77\u52d5\u5f8c\u306e\u65e9\u3044\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u901a\u77e5\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u53d6\u5f97"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u901a\u77e5\u9818\u57df\u306b\u8868\u793a\u3055\u308c\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30bf\u30c3\u30d7\u3057\u3066\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3057\u305f\u5834\u5408\u306f\u3001Push\u901a\u77e5\u306b\u542b\u307e\u308c\u308b\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u53d6\u5f97"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u304b\u3089\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3057\u305f\u5834\u5408\u306f\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306b\u542b\u307e\u308c\u308bURL\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5f37\u5236\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u5bfe\u8c61\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u78ba\u8a8d"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8d77\u52d5\u3057\u305f\u30a2\u30d7\u30ea\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u5f37\u5236\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306e\u5bfe\u8c61\u304b\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\u5bfe\u8c61\u306e\u5834\u5408\u306f\u3001App Store\u304bGoogle Play\u306e\u3069\u3061\u3089\u304b\u306b\u8a98\u5c0e\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u524a\u9664"),(0,i.kt)("td",{parentName:"tr",align:"left"},"HTTP\u901a\u4fe1\u3067\u4f7f\u7528\u3057\u305f\u30c7\u30fc\u30bf\u3084\u3001\u30ab\u30e1\u30e9\u3001\u30d5\u30a9\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea\u304b\u3089\u53d6\u5f97\u3057\u305f\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u30a2\u30d7\u30ea\u306e\u5185\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u308c\u3089\u306e\u5185\u3001\u6a5f\u5bc6\u60c5\u5831\u3092\u542b\u3080\u30c7\u30fc\u30bf\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u524a\u9664\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#%E5%88%9D%E6%9C%9F%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E5%8F%96%E5%BE%97"},"\u521d\u671f\u30c7\u30fc\u30bf\u306e\u53d6\u5f97")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u521d\u671f\u51e6\u7406\u3067\u4f7f\u7528\u3059\u308b\u60c5\u5831\u3084\u3001\u30a2\u30d7\u30ea\u5168\u4f53\u3067\u5171\u6709\u3059\u308b\u60c5\u5831\u3092\u53d6\u5f97\u3057\u3066\u3001\u30b3\u30f3\u30c6\u30af\u30b9\u30c8\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Firebase Crashlytics\u306e\u8a2d\u5b9a2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Firebase Crashlytics\u306e\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002\u8a8d\u8a3c\u5f8c\u306e\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#%E5%88%9D%E6%9C%9F%E8%A1%A8%E7%A4%BA%E7%94%BB%E9%9D%A2%E3%81%AE%E6%B1%BA%E5%AE%9A"},"\u521d\u671f\u8868\u793a\u753b\u9762\u306e\u6c7a\u5b9a")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u53d6\u5f97\u3057\u305f\u521d\u671f\u30c7\u30fc\u30bf\u3084\u3001\u901a\u77e5\u30d1\u30e9\u30e1\u30fc\u30bf\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u5fdc\u3058\u3066\u521d\u671f\u8868\u793a\u753b\u9762\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002")))),(0,i.kt)("h3",{id:"\u521d\u671f\u30c7\u30fc\u30bf\u306e\u53d6\u5f97"},"\u521d\u671f\u30c7\u30fc\u30bf\u306e\u53d6\u5f97"),(0,i.kt)("p",null,"\u521d\u671f\u8868\u793a\u753b\u9762\u3092\u6c7a\u5b9a\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3084\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u60c5\u5831\u306a\u3069\u306e\u30a2\u30d7\u30ea\u5168\u4f53\u3067\u5171\u6709\u3059\u308b\u60c5\u5831\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u521d\u671f\u30c7\u30fc\u30bf\u306e\u53d6\u5f97\u306e\u30d5\u30ed\u30fc\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u521d\u671f\u51e6\u7406\u30d5\u30ed\u30fc",src:n(74646).Z,width:"908",height:"1097"})),(0,i.kt)("h3",{id:"\u521d\u671f\u8868\u793a\u753b\u9762\u306e\u6c7a\u5b9a"},"\u521d\u671f\u8868\u793a\u753b\u9762\u306e\u6c7a\u5b9a"),(0,i.kt)("p",null,"\u53d6\u5f97\u3057\u305f\u521d\u671f\u30c7\u30fc\u30bf\u3084\u3001\u901a\u77e5\u30d1\u30e9\u30e1\u30fc\u30bf\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u5fdc\u3058\u3066\u521d\u671f\u8868\u793a\u753b\u9762\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002\u521d\u671f\u8868\u793a\u753b\u9762\u306e\u6c7a\u5b9a\u306e\u30d5\u30ed\u30fc\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u521d\u671f\u51e6\u7406\u30d5\u30ed\u30fc",src:n(52125).Z,width:"1297",height:"546"})))}s.isMDXComponent=!0},74646:function(t,e,n){e.Z=n.p+"assets/images/initialization-data-fetching-flow.drawio-642005db7e9b03f0dc1294612be942d6.png"},47279:function(t,e,n){e.Z=n.p+"assets/images/initialization-flow.drawio-6b3623890d122a2144e12537e4db4489.png"},52125:function(t,e,n){e.Z=n.p+"assets/images/initialization-screen-flow.drawio-d5b755fd82b3a26e4313c0016e7d7de8.png"}}]);