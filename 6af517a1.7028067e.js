(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(152)),i={title:"XCode\u3067\u30d3\u30eb\u30c9\u304c\u5931\u6557\u3059\u308b"},c={unversionedId:"react-native/troubleshooting/cant-build-in-xcode",id:"react-native/troubleshooting/cant-build-in-xcode",isDocsHomePage:!1,title:"XCode\u3067\u30d3\u30eb\u30c9\u304c\u5931\u6557\u3059\u308b",description:"\u30a8\u30e9\u30fc\u5185\u5bb9",source:"@site/docs/react-native/troubleshooting/cant-build-in-xcode.md",slug:"/react-native/troubleshooting/cant-build-in-xcode",permalink:"/mobile-app-crib-notes/react-native/troubleshooting/cant-build-in-xcode",version:"current",lastUpdatedAt:1616568863,sidebar:"troubleshoot",previous:{title:"react-native-cli\u306b\u3064\u3044\u3066",permalink:"/mobile-app-crib-notes/react-native/troubleshooting/react-native-cli-uninstall"}},l=[{value:"\u30a8\u30e9\u30fc\u5185\u5bb9",id:"\u30a8\u30e9\u30fc\u5185\u5bb9",children:[]},{value:"\u5bfe\u51e6\u65b9\u6cd5",id:"\u5bfe\u51e6\u65b9\u6cd5",children:[{value:"Flipper-Folly\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4e0a\u66f8\u304d",id:"flipper-folly\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4e0a\u66f8\u304d",children:[]}]}],p={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u30a8\u30e9\u30fc\u5185\u5bb9"},"\u30a8\u30e9\u30fc\u5185\u5bb9"),Object(a.b)("p",null,"XCode\u3067\u6b21\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u3066\u30d3\u30eb\u30c9\u304c\u5931\u6557\u3059\u308b\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-console"}),"'event2/event-config.h' file not found\n")),Object(a.b)("h2",{id:"\u5bfe\u51e6\u65b9\u6cd5"},"\u5bfe\u51e6\u65b9\u6cd5"),Object(a.b)("h3",{id:"flipper-folly\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4e0a\u66f8\u304d"},"Flipper-Folly\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4e0a\u66f8\u304d"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"2021/2/19"),"\u306e\u6642\u70b9\u306b\u304a\u3044\u3066\u3001\u300cFlipper-Folly\u300d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u30a2\u30c3\u30d7\u304c\u539f\u56e0\u3067\u3053\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u3066\u3044\u307e\u3059\u3002\n\u6b21\u306e\u3068\u304a\u308a\u306bPodfile\u3092\u4fee\u6b63\u3057\u3066 ",Object(a.b)("inlineCode",{parentName:"p"},"pod install"),"\u3092\u518d\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(a.b)("h4",{id:"\u53c2\u8003\u30b5\u30a4\u30c8"},"\u53c2\u8003\u30b5\u30a4\u30c8"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/30836"}),"Cant build react native from box in XCode: 'event2/event-config.h' file not found #30836")),Object(a.b)("h4",{id:"podfile\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63"},"Podfile\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-console"}),"use_flipper!({ 'Flipper-Folly' => '2.3.0' })\n")),Object(a.b)("h4",{id:"pod-install\u3092\u518d\u5b9f\u884c"},Object(a.b)("inlineCode",{parentName:"h4"},"pod install"),"\u3092\u518d\u5b9f\u884c"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-console"}),"cd ios\nrm -rf Pods/\nrm Podfile.lock\npod install\ncd ..\nnpx react-native run-ios\n")))}u.isMDXComponent=!0},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),s=r,f=b["".concat(i,".").concat(s)]||b[s]||d[s]||a;return n?o.a.createElement(f,c(c({ref:t},p),{},{components:n})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);