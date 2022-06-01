"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[194],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},29825:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={title:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406"},p=void 0,c={unversionedId:"react-native/santoku/application-architecture/auth/credential-management",id:"react-native/santoku/application-architecture/auth/credential-management",title:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406",description:"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u6642\u306a\u3069\u306b\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002Android\u3067\u306fKeyStore\u3001iOS\u306e\u5834\u5408\u306fKeychain\u3092\u5229\u7528\u3057\u307e\u3059\u3002KeyStore\u3084Keychain\u306e\u8a73\u7d30\u306f\u3001Reference - \u8a8d\u8a3c - \u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/docs/react-native/santoku/application-architecture/auth/credential-management.mdx",sourceDirName:"react-native/santoku/application-architecture/auth",slug:"/react-native/santoku/application-architecture/auth/credential-management",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/credential-management",draft:!1,tags:[],version:"current",lastUpdatedAt:1641537001,formattedLastUpdatedAt:"2022/1/7",frontMatter:{title:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406"},sidebar:"santoku",previous:{title:"\u7aef\u672b\u8a8d\u8a3c",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/local-auth"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/message-configuration/overview"}},s={},d=[{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd",level:2},{value:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u4fdd\u5b58",id:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u4fdd\u5b58",level:3},{value:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u53d6\u5f97",id:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u53d6\u5f97",level:3},{value:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7834\u68c4",id:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7834\u68c4",level:3}],u={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u6642\u306a\u3069\u306b\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002Android\u3067\u306fKeyStore\u3001iOS\u306e\u5834\u5408\u306fKeychain\u3092\u5229\u7528\u3057\u307e\u3059\u3002KeyStore\u3084Keychain\u306e\u8a73\u7d30\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/reference/auth/manage-credentials#%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E8%B3%87%E6%A0%BC%E6%83%85%E5%A0%B1%E3%81%AE%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB%E7%AE%A1%E7%90%86%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E6%B3%A8%E6%84%8F%E7%82%B9"},"Reference - \u8a8d\u8a3c - \u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u3057\u3066Expo\u306e",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/sdk/securestore/"},"SecureStore"),"\u3092\u5229\u7528\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u6a5f\u80fd"},"\u6a5f\u80fd"),(0,i.kt)("p",null,"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406\u3068\u3057\u3066\u63d0\u4f9b\u3059\u308b\u6a5f\u80fd\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u4fdd\u5b58"},"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u4fdd\u5b58"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/sdk/securestore/#securestoresetitemasynckey-value-options"},"SecureStore.setItemAsync"),"\u3092\u4f7f\u7528\u3057\u3066\u3001Key-Value\u5f62\u5f0f\u3067\u5024\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/sdk/securestore/#securestoreoptions"},"SecureStoreOptions"),"\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"keychainAccessible"),"\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/sdk/securestore/#securestorewhen_unlocked"},"WHEN_UNLOCKED"),"\u3092\u6307\u5b9a\u3057\u3001\u30e6\u30fc\u30b6\u304c\u30c7\u30d0\u30a4\u30b9\u306e\u30ed\u30c3\u30af\u3092\u89e3\u9664\u3057\u3066\u3044\u308b\u5834\u5408\u306e\u307f\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4ed6\u306e\u7aef\u672b\u3067\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u5024\u3092\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u306a\u3069\u304b\u3089\u5fa9\u5143\u3057\u305f\u304f\u306a\u3044\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u8a2d\u5b9a\u3092\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"iOS",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.expo.dev/versions/latest/sdk/securestore/#securestoreoptions"},"SecureStoreOptions"),"\u306e",(0,i.kt)("inlineCode",{parentName:"li"},"keychainAccessible"),"\u306b",(0,i.kt)("a",{parentName:"li",href:"https://docs.expo.dev/versions/latest/sdk/securestore/#securestorewhen_unlocked_this_device_only"},"WHEN_UNLOCKED_THIS_DEVICE_ONLY"),"\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"))),(0,i.kt)("li",{parentName:"ul"},"Android",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Android\u306e\u5834\u5408\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"SecureStore"),"\u306e\u6a5f\u80fd\u3067\u306f\u5b9f\u73fe\u3067\u304d\u307e\u305b\u3093\u3002Android\u306e\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc \u30ac\u30a4\u30c9\u306e",(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/guide/topics/data/autobackup?hl=ja#IncludingFiles"},"\u30c7\u30fc\u30bf\u306e\u30d0\u30c3\u30af\u30a2\u30c3\u30d7 - \u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u307e\u305f\u306f\u9664\u5916\u3059\u308b"),"\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308b\u8a2d\u5b9a\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")))))),(0,i.kt)("p",null,"\u4fdd\u5b58\u3059\u308b\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8a2d\u5b9a\u5024"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u4fdd\u5b58\u30bf\u30a4\u30df\u30f3\u30b0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"activeAccountId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3\u306b\u6210\u529f\u3057\u305f\u5834\u5408")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30ab\u30a6\u30f3\u30c8ID\u306e\u30cf\u30c3\u30b7\u30e5\u5024_",(0,i.kt)("inlineCode",{parentName:"td"},"password"),(0,i.kt)("sup",{parentName:"td",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),(0,i.kt)("sup",{parentName:"td",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30ab\u30a6\u30f3\u30c8ID\u306b\u7d10\u3065\u304f\u30d1\u30b9\u30ef\u30fc\u30c9"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u306b\u6210\u529f\u3057\u305f\u5834\u5408")))),(0,i.kt)("h3",{id:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u53d6\u5f97"},"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u53d6\u5f97"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/sdk/securestore/#securestoregetitemasynckey-options"},"SecureStore.getItemAsync"),"\u3092\u4f7f\u7528\u3057\u3066\u3001Key\u3092\u6307\u5b9a\u3057\u3066\u5024\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u53d6\u5f97\u3059\u308b\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u5f97\u3059\u308b\u5024"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"activeAccountId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30ab\u30a6\u30f3\u30c8ID\u306e\u30cf\u30c3\u30b7\u30e5\u5024_",(0,i.kt)("inlineCode",{parentName:"td"},"password")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30ab\u30a6\u30f3\u30c8ID\u306b\u7d10\u3065\u304f\u30d1\u30b9\u30ef\u30fc\u30c9")))),(0,i.kt)("h3",{id:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7834\u68c4"},"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7834\u68c4"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/sdk/securestore/#securestoredeleteitemasynckey-options"},"SecureStore.deleteItemAsync"),"\u3092\u4f7f\u7528\u3057\u3066\u3001Key\u3092\u6307\u5b9a\u3057\u3066\u5024\u3092\u7834\u68c4\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u7834\u68c4\u3059\u308b\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7834\u68c4\u3059\u308b\u5024"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7834\u68c4\u30bf\u30a4\u30df\u30f3\u30b0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"activeAccountId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a2\u30a6\u30c8\u6642")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30ab\u30a6\u30f3\u30c8ID\u306e\u30cf\u30c3\u30b7\u30e5\u5024_",(0,i.kt)("inlineCode",{parentName:"td"},"password")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30ab\u30a6\u30f3\u30c8ID\u306b\u7d10\u3065\u304f\u30d1\u30b9\u30ef\u30fc\u30c9"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a2\u30a6\u30c8\u6642")))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u8907\u6570\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\u3069\u306e\u30a2\u30ab\u30a6\u30f3\u30c8ID\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u304b\u3092\u5224\u5225\u3059\u308b\u305f\u3081\u306b\u3001\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u306b\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3092\u4ed8\u4e0e\u3057\u3066\u3044\u307e\u3059\u3002",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Android\u3067\u306f\u3001KeyStore\u3092\u4f7f\u7528\u3057\u3066\u6697\u53f7\u5316\u3057\u305f\u5024\u3092SharedPreferences\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002\u305d\u306e\u969b\u306b\u3001Key\u306f\u5e73\u6587\u3067\u30d5\u30a1\u30a4\u30eb\u306b\u66f8\u304d\u8fbc\u307e\u308c\u307e\u3059\u3002\u30ed\u30b0\u30a4\u30f3\u306b\u4f7f\u7528\u3059\u308b\u3088\u3046\u306a\u9805\u76ee\u306f\u3001\u5e73\u6587\u3067\u4fdd\u5b58\u3057\u306a\u3044\u65b9\u304c\u826f\u3044\u3068\u8003\u3048\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u4fdd\u5b58\u3059\u308b\u969b\u306eKey\u306e\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u306b\u4f7f\u7528\u3057\u3066\u3044\u308b\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3092SHA-256\u3067\u30cf\u30c3\u30b7\u30e5\u5316\u3057\u3066\u3044\u307e\u3059\u3002",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);