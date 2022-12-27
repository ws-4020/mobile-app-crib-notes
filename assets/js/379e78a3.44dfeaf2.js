"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[4053],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(n),f=l,m=s["".concat(p,".").concat(f)]||s[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const o={title:"Xcode\u3067\u30d3\u30eb\u30c9\u304c\u5931\u6557\u3059\u308b"},a=void 0,i={unversionedId:"react-native/common-pitfalls/cant-build-in-xcode",id:"react-native/common-pitfalls/cant-build-in-xcode",title:"Xcode\u3067\u30d3\u30eb\u30c9\u304c\u5931\u6557\u3059\u308b",description:"event2\u306e\u30d8\u30c3\u30c0\u30d5\u30a1\u30a4\u30eb\u304c\u898b\u3064\u304b\u3089\u306a\u3044",source:"@site/docs/react-native/common-pitfalls/cant-build-in-xcode.md",sourceDirName:"react-native/common-pitfalls",slug:"/react-native/common-pitfalls/cant-build-in-xcode",permalink:"/mobile-app-crib-notes/react-native/common-pitfalls/cant-build-in-xcode",draft:!1,tags:[],version:"current",lastUpdatedAt:1627259509,formattedLastUpdatedAt:"2021\u5e747\u670826\u65e5",frontMatter:{title:"Xcode\u3067\u30d3\u30eb\u30c9\u304c\u5931\u6557\u3059\u308b"},sidebar:"pitfalls",previous:{title:"react-native-cli\u306b\u3064\u3044\u3066",permalink:"/mobile-app-crib-notes/react-native/common-pitfalls/react-native-cli-uninstall"}},p={},c=[{value:"event2\u306e\u30d8\u30c3\u30c0\u30d5\u30a1\u30a4\u30eb\u304c\u898b\u3064\u304b\u3089\u306a\u3044",id:"event2\u306e\u30d8\u30c3\u30c0\u30d5\u30a1\u30a4\u30eb\u304c\u898b\u3064\u304b\u3089\u306a\u3044",level:2},{value:"\u30a8\u30e9\u30fc\u5185\u5bb9",id:"\u30a8\u30e9\u30fc\u5185\u5bb9",level:3},{value:"\u5bfe\u51e6\u65b9\u6cd5",id:"\u5bfe\u51e6\u65b9\u6cd5",level:3},{value:"Flipper-Folly\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4e0a\u66f8\u304d",id:"flipper-folly\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4e0a\u66f8\u304d",level:4},{value:"\u53c2\u8003\u30b5\u30a4\u30c8",id:"\u53c2\u8003\u30b5\u30a4\u30c8",level:5},{value:"Podfile\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63",id:"podfile\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63",level:5},{value:"<code>pod install</code>\u3092\u518d\u5b9f\u884c",id:"pod-install\u3092\u518d\u5b9f\u884c",level:5}],d={toc:c};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"event2\u306e\u30d8\u30c3\u30c0\u30d5\u30a1\u30a4\u30eb\u304c\u898b\u3064\u304b\u3089\u306a\u3044"},"event2\u306e\u30d8\u30c3\u30c0\u30d5\u30a1\u30a4\u30eb\u304c\u898b\u3064\u304b\u3089\u306a\u3044"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://fbflipper.com/"},"Flipper"),"\u3068\u3044\u3046\u30c4\u30fc\u30eb\u306e\u4f9d\u5b58\u95a2\u4fc2\u304c\u89e3\u6d88\u3067\u304d\u306a\u3044\u305f\u3081\u306b\u767a\u751f\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\n\u30a8\u30e9\u30fc\u306e\u5185\u5bb9\u3068\u5bfe\u51e6\u65b9\u6cd5\u3092\u53c2\u8003\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,"\u307e\u305fFlipper\u306b\u3064\u3044\u3066\u306f\u3001\u672c\u30b5\u30a4\u30c8\u3067\u3082",(0,l.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/development/tools/flipper"},"Flipper\u306e\u7c21\u5358\u306a\u30ac\u30a4\u30c9"),"\u304c\u3042\u308a\u307e\u3059\u306e\u3067\u53c2\u7167\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("h3",{id:"\u30a8\u30e9\u30fc\u5185\u5bb9"},"\u30a8\u30e9\u30fc\u5185\u5bb9"),(0,l.kt)("p",null,"Xcode\u3067\u30d3\u30eb\u30c9\u304c\u5931\u6557\u3057\u305f\u3068\u304d\u306b\u3001\u30ed\u30b0\u306b\u6b21\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u51fa\u529b\u3055\u308c\u3066\u3044\u308b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"'event2/event-config.h' file not found\n")),(0,l.kt)("h3",{id:"\u5bfe\u51e6\u65b9\u6cd5"},"\u5bfe\u51e6\u65b9\u6cd5"),(0,l.kt)("h4",{id:"flipper-folly\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4e0a\u66f8\u304d"},"Flipper-Folly\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4e0a\u66f8\u304d"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"2021/2/19"),"\u306e\u6642\u70b9\u306b\u304a\u3044\u3066\u3001\u300cFlipper-Folly\u300d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u30a2\u30c3\u30d7\u304c\u539f\u56e0\u3067\u3053\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u3066\u3044\u307e\u3059\u3002\n\u6b21\u306e\u3068\u304a\u308a\u306bPodfile\u3092\u4fee\u6b63\u3057\u3066 ",(0,l.kt)("inlineCode",{parentName:"p"},"pod install"),"\u3092\u518d\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("h5",{id:"\u53c2\u8003\u30b5\u30a4\u30c8"},"\u53c2\u8003\u30b5\u30a4\u30c8"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/issues/30836"},"Cant build react native from box in XCode: 'event2/event-config.h' file not found #30836")),(0,l.kt)("h5",{id:"podfile\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63"},"Podfile\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"use_flipper!({ 'Flipper-Folly' => '2.3.0' })\n")),(0,l.kt)("h5",{id:"pod-install\u3092\u518d\u5b9f\u884c"},(0,l.kt)("inlineCode",{parentName:"h5"},"pod install"),"\u3092\u518d\u5b9f\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"cd ios\nrm -rf Pods/\nrm Podfile.lock\npod install\ncd ..\nnpx react-native run-ios\n")))}s.isMDXComponent=!0}}]);