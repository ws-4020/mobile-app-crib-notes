"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[9377],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return m}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),p=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(k,l(l({ref:e},s),{},{components:a})):n.createElement(k,l({ref:e},s))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},62419:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={title:"\u7aef\u672b\u8a8d\u8a3c"},c=void 0,p={unversionedId:"react-native/santoku/application-architecture/auth/local-auth",id:"react-native/santoku/application-architecture/auth/local-auth",title:"\u7aef\u672b\u8a8d\u8a3c",description:"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30e2\u30d0\u30a4\u30eb\u7aef\u672b\u306e\u7d1b\u5931\u3084\u76d7\u96e3\u30ea\u30b9\u30af\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u3001PIN\u30b3\u30fc\u30c9\u3084\u30e6\u30fc\u30b6\u306e\u751f\u4f53\u5c5e\u6027\u3092\u4f7f\u7528\u3057\u3066\u3001\u30e6\u30fc\u30b6\u304c\u7aef\u672b\u306e\u6240\u6709\u8005\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u7aef\u672b\u8a8d\u8a3c\u3092\u5b9f\u65bd\u3057\u307e\u3059\u3002\u7aef\u672b\u8a8d\u8a3c\u3092\u5b9f\u65bd\u3059\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u306f\u4ee5\u4e0b\u3067\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/auth/local-auth.mdx",sourceDirName:"react-native/santoku/application-architecture/auth",slug:"/react-native/santoku/application-architecture/auth/local-auth",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/local-auth",tags:[],version:"current",lastUpdatedAt:1640225677,formattedLastUpdatedAt:"2021/12/23",frontMatter:{title:"\u7aef\u672b\u8a8d\u8a3c"},sidebar:"santoku",previous:{title:"\u30ed\u30b0\u30a2\u30a6\u30c8",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/logout"},next:{title:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/credential-management"}},s=[{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd",children:[{value:"\u751f\u4f53\u5c5e\u6027\u306e\u767b\u9332\u78ba\u8a8d",id:"\u751f\u4f53\u5c5e\u6027\u306e\u767b\u9332\u78ba\u8a8d",children:[],level:3},{value:"\u751f\u4f53\u8a8d\u8a3c",id:"\u751f\u4f53\u8a8d\u8a3c",children:[],level:3}],level:2}],u={toc:s};function d(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30e2\u30d0\u30a4\u30eb\u7aef\u672b\u306e\u7d1b\u5931\u3084\u76d7\u96e3\u30ea\u30b9\u30af\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u3001PIN\u30b3\u30fc\u30c9\u3084\u30e6\u30fc\u30b6\u306e\u751f\u4f53\u5c5e\u6027\u3092\u4f7f\u7528\u3057\u3066\u3001\u30e6\u30fc\u30b6\u304c\u7aef\u672b\u306e\u6240\u6709\u8005\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u7aef\u672b\u8a8d\u8a3c\u3092\u5b9f\u65bd\u3057\u307e\u3059\u3002\u7aef\u672b\u8a8d\u8a3c\u3092\u5b9f\u65bd\u3059\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u306f\u4ee5\u4e0b\u3067\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u8d77\u52d5\u5f8c\u306b\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u76f4\u524d"),(0,i.kt)("li",{parentName:"ul"},"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3067\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3092\u6307\u5b9a\u3057\u3066\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u76f4\u524d")),(0,i.kt)("p",null,"\u306a\u304a\u3001\u7aef\u672b\u8a8d\u8a3c\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u3057\u3066Expo\u306e",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/sdk/local-authentication/"},"LocalAuthentication"),"\u3092\u5229\u7528\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u6a5f\u80fd"},"\u6a5f\u80fd"),(0,i.kt)("p",null,"\u7aef\u672b\u8a8d\u8a3c\u3068\u3057\u3066\u63d0\u4f9b\u3059\u308b\u6a5f\u80fd\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u6a5f\u80fd"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u6982\u8981"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u751f\u4f53\u5c5e\u6027\u306e\u767b\u9332\u78ba\u8a8d"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u7aef\u672b\u306b\u6307\u7d0b\u3084\u9854\u3001\u8679\u5f69\u306e\u30c7\u30fc\u30bf\u304c\u767b\u9332\u3055\u308c\u3066\u3044\u308b\u304b\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u751f\u4f53\u8a8d\u8a3c"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u767b\u9332\u3055\u308c\u3066\u3044\u308b\u751f\u4f53\u5c5e\u6027\u3092\u7528\u3044\u3066\u8a8d\u8a3c\u3057\u307e\u3059\u3002")))),(0,i.kt)("h3",{id:"\u751f\u4f53\u5c5e\u6027\u306e\u767b\u9332\u78ba\u8a8d"},"\u751f\u4f53\u5c5e\u6027\u306e\u767b\u9332\u78ba\u8a8d"),(0,i.kt)("p",null,"\u7aef\u672b\u306b\u6307\u7d0b\u3084\u9854\u3001\u8679\u5f69\u306e\u30c7\u30fc\u30bf\u304c\u767b\u9332\u3055\u308c\u3066\u3044\u308b\u304b\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\u767b\u9332\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u3092\u8fd4\u5374\u3057\u3001\u767b\u9332\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u3092\u8fd4\u5374\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx title='\u751f\u4f53\u5c5e\u6027\u306e\u767b\u9332\u78ba\u8a8d\u306e\u4f8b'",jsx:!0,title:"'\u751f\u4f53\u5c5e\u6027\u306e\u767b\u9332\u78ba\u8a8d\u306e\u4f8b'"},"const isEnrolled = await LocalAuthentication.isEnrolled();\n")),(0,i.kt)("p",null,"\u3069\u306e\u751f\u4f53\u5c5e\u6027\u304c\u767b\u9332\u3055\u308c\u3066\u3044\u308b\u304b\uff08\u4f8b\u3048\u3070\u3001\u6307\u7d0b\u30c7\u30fc\u30bf\u304c\u767b\u9332\u3055\u308c\u3066\u3044\u308b\u304b\uff09\u3082\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx title='\u751f\u4f53\u5c5e\u6027\u306e\u767b\u9332\u78ba\u8a8d\u306e\u4f8b'",jsx:!0,title:"'\u751f\u4f53\u5c5e\u6027\u306e\u767b\u9332\u78ba\u8a8d\u306e\u4f8b'"},"// \u6307\u7d0b\u8a8d\u8a3c\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u304b\u3069\u3046\u304b\nconst isSupported = await LocalAuthentication.isFingerPrintSupported();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx title='\u751f\u4f53\u5c5e\u6027\u306e\u767b\u9332\u78ba\u8a8d\u306e\u4f8b'",jsx:!0,title:"'\u751f\u4f53\u5c5e\u6027\u306e\u767b\u9332\u78ba\u8a8d\u306e\u4f8b'"},"// \u9854\u8a8d\u8a3c\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u304b\u3069\u3046\u304b\nconst isSupported = await LocalAuthentication.isFacialSupported();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx title='\u751f\u4f53\u5c5e\u6027\u306e\u767b\u9332\u78ba\u8a8d\u306e\u4f8b'",jsx:!0,title:"'\u751f\u4f53\u5c5e\u6027\u306e\u767b\u9332\u78ba\u8a8d\u306e\u4f8b'"},"// \u8679\u5f69\u8a8d\u8a3c\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u304b\u3069\u3046\u304b\nconst isSupported = await LocalAuthentication.isIrisSupported();\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u3069\u306e\u751f\u4f53\u5c5e\u6027\u3092\u767b\u9332\u3067\u304d\u308b\u304b\u306f\u7aef\u672b\u306b\u3088\u3063\u3066\u9055\u3044\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"div"},"\u4f8b\u3048\u3070\u3001iPhone8\u3067\u306f\u6307\u7d0b\u306e\u30c7\u30fc\u30bf\u3092\u767b\u9332\u3067\u304d\u307e\u3059\u304c\u3001\u9854\u306e\u30c7\u30fc\u30bf\u306f\u767b\u9332\u3067\u304d\u307e\u305b\u3093\u3002\u4e00\u65b9\u3001iPhone11\u3067\u306f\u9854\u306e\u30c7\u30fc\u30bf\u306f\u767b\u9332\u3067\u304d\u307e\u3059\u304c\u3001\u6307\u7d0b\u306e\u30c7\u30fc\u30bf\u306f\u767b\u9332\u3067\u304d\u307e\u305b\u3093\u3002\u8679\u5f69\u30c7\u30fc\u30bf\u306b\u95a2\u3057\u3066\u306f\u3001Android\u306e\u4e00\u90e8\u6a5f\u7a2e\u306e\u307f\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"div"},"\u305d\u306e\u305f\u3081\u3001\u7279\u5b9a\u306e\u751f\u4f53\u5c5e\u6027\u306e\u307f\u8a8d\u8a3c\u3059\u308b\u3088\u3046\u306a\u4ed5\u7d44\u307f\u306f\u907f\u3051\u305f\u65b9\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u3002"))),(0,i.kt)("h3",{id:"\u751f\u4f53\u8a8d\u8a3c"},"\u751f\u4f53\u8a8d\u8a3c"),(0,i.kt)("p",null,"\u7aef\u672b\u306b\u767b\u9332\u3055\u308c\u3066\u3044\u308b\u751f\u4f53\u5c5e\u6027\u3092\u5229\u7528\u3057\u3066\u3001\u7aef\u672b\u306e\u6240\u6709\u8005\u3067\u3042\u308b\u304b\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u751f\u4f53\u8a8d\u8a3c\u306b\u306f\u3001\u3044\u304f\u3064\u304b\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u9805\u76ee\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\u8a73\u7d30\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/sdk/local-authentication/#localauthenticationoptions"},"LocalAuthenticationOptions"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"disableDeviceFallback"),"\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u306b\u8a2d\u5b9a\u3057\u3066\u3001\u751f\u4f53\u8a8d\u8a3c\u306b\u5931\u6557\u3057\u305f\u5834\u5408\u306a\u3069\u306e\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u3068\u3057\u3066PIN\u30b3\u30fc\u30c9\uff08\u30d1\u30b9\u30b3\u30fc\u30c9\uff09\u306b\u3088\u308b\u8a8d\u8a3c\u3082\u8a31\u53ef\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx title='\u751f\u4f53\u8a8d\u8a3c\u306e\u4f8b'",jsx:!0,title:"'\u751f\u4f53\u8a8d\u8a3c\u306e\u4f8b'"},"const result = await LocalAuthentication.authenticate({\n  cancelLabel: '\u30ad\u30e3\u30f3\u30bb\u30eb',\n  promptMessage: '\u751f\u4f53\u8a8d\u8a3c',\n  fallbackLabel: '\u30d1\u30b9\u30b3\u30fc\u30c9\u3067\u8a8d\u8a3c',\n  disableDeviceFallback: false,\n});\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Android\u3067\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"disableDeviceFallback"),"\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u306b\u3057\u3066\u751f\u4f53\u8a8d\u8a3c\u306e\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u7121\u52b9\u306b\u3057\u305f\u5834\u5408\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"cancelLabel"),"\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u8a2d\u5b9a\u3057\u306a\u3044\u3068\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"Negative text must be set and non-empty.\n")))))}d.isMDXComponent=!0}}]);