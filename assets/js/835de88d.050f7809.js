(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[5810],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(o,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1835:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return o},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l={title:"react-native-cli\u306b\u3064\u3044\u3066"},c={unversionedId:"react-native/common-pitfalls/react-native-cli-uninstall",id:"react-native/common-pitfalls/react-native-cli-uninstall",isDocsHomePage:!1,title:"react-native-cli\u306b\u3064\u3044\u3066",description:"\u30a8\u30e9\u30fc\u5185\u5bb9",source:"@site/docs/react-native/common-pitfalls/react-native-cli-uninstall.md",sourceDirName:"react-native/common-pitfalls",slug:"/react-native/common-pitfalls/react-native-cli-uninstall",permalink:"/mobile-app-crib-notes/react-native/common-pitfalls/react-native-cli-uninstall",version:"current",lastUpdatedAt:1621905745,formattedLastUpdatedAt:"2021/5/25",frontMatter:{title:"react-native-cli\u306b\u3064\u3044\u3066"},sidebar:"pitfalls",previous:{title:"debug.keystore\u304c\u5b58\u5728\u3057\u306a\u3044",permalink:"/mobile-app-crib-notes/react-native/common-pitfalls/debug-keystore-not-found"},next:{title:"Xcode\u3067\u30d3\u30eb\u30c9\u304c\u5931\u6557\u3059\u308b",permalink:"/mobile-app-crib-notes/react-native/common-pitfalls/cant-build-in-xcode"}},o=[{value:"\u30a8\u30e9\u30fc\u5185\u5bb9",id:"\u30a8\u30e9\u30fc\u5185\u5bb9",children:[]},{value:"\u5bfe\u51e6\u65b9\u6cd5",id:"\u5bfe\u51e6\u65b9\u6cd5",children:[{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u72b6\u6cc1\u306e\u78ba\u8a8d",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u72b6\u6cc1\u306e\u78ba\u8a8d",children:[]},{value:"\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:[]}]}],p={toc:o};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u30a8\u30e9\u30fc\u5185\u5bb9"},"\u30a8\u30e9\u30fc\u5185\u5bb9"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"react-native-cli")," \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u3068\u3001\u30a2\u30d7\u30ea\u5b9f\u884c\u6642\u306b\u5931\u6557\u3057\u307e\u3059\u3002\u72b6\u6cc1\u3092\u78ba\u8a8d\u3057\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("h2",{id:"\u5bfe\u51e6\u65b9\u6cd5"},"\u5bfe\u51e6\u65b9\u6cd5"),(0,i.kt)("h3",{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u72b6\u6cc1\u306e\u78ba\u8a8d"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u72b6\u6cc1\u306e\u78ba\u8a8d"),(0,i.kt)("p",null,"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u72b6\u6cc1\u306b\u3064\u3044\u3066\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u78ba\u8a8d\u30b3\u30de\u30f3\u30c9"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"react-native -v\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5b9f\u884c\u4f8b"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ react-native -v\nreact-native-cli: 2.0.1\nreact-native: n/a - not inside a React Native project directory\n")))),(0,i.kt)("h3",{id:"\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,i.kt)("p",null,"\u5b9f\u884c\u7d50\u679c\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-cli"),"\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u8868\u793a\u3055\u308c\u305f\u5834\u5408\u3001 ",(0,i.kt)("strong",{parentName:"p"},"\u5fc5\u305a\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),"\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3067\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b3\u30de\u30f3\u30c9"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm uninstall -g react-native-cli\n")))))}u.isMDXComponent=!0}}]);