"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[380],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),c=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=c(a),d=n,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return a?r.createElement(f,i(i({ref:e},u),{},{components:a})):r.createElement(f,i({ref:e},u))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},73575:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"\u30ed\u30b0\u30a2\u30a6\u30c8"},i=void 0,l={unversionedId:"react-native/santoku/application-architecture/auth/logout",id:"react-native/santoku/application-architecture/auth/logout",title:"\u30ed\u30b0\u30a2\u30a6\u30c8",description:"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001Cookie\u7d4c\u7531\u3067\u53d7\u3051\u6e21\u3059\u30bb\u30c3\u30b7\u30e7\u30f3ID\u306e\u7834\u68c4\u3068\u3001\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u30ed\u30b0\u30a4\u30f3\u4e2d\u306e\u30a2\u30ab\u30a6\u30f3\u30c8ID\u304a\u3088\u3073\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u7834\u68c4\u3059\u308b\u3053\u3068\u3067\u30ed\u30b0\u30a2\u30a6\u30c8\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/auth/logout.mdx",sourceDirName:"react-native/santoku/application-architecture/auth",slug:"/react-native/santoku/application-architecture/auth/logout",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/logout",draft:!1,tags:[],version:"current",lastUpdatedAt:1663220621,formattedLastUpdatedAt:"2022\u5e749\u670815\u65e5",frontMatter:{title:"\u30ed\u30b0\u30a2\u30a6\u30c8"},sidebar:"santoku",previous:{title:"\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/login"},next:{title:"\u7aef\u672b\u8a8d\u8a3c",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/local-auth"}},p={},c=[{value:"\u51e6\u7406\u30d5\u30ed\u30fc",id:"\u51e6\u7406\u30d5\u30ed\u30fc",level:2},{value:"\u5229\u7528\u65b9\u6cd5",id:"\u5229\u7528\u65b9\u6cd5",level:2}],u={toc:c};function s(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001Cookie\u7d4c\u7531\u3067\u53d7\u3051\u6e21\u3059\u30bb\u30c3\u30b7\u30e7\u30f3ID\u306e\u7834\u68c4\u3068\u3001\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u30ed\u30b0\u30a4\u30f3\u4e2d\u306e\u30a2\u30ab\u30a6\u30f3\u30c8ID\u304a\u3088\u3073\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u7834\u68c4\u3059\u308b\u3053\u3068\u3067\u30ed\u30b0\u30a2\u30a6\u30c8\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u51e6\u7406\u30d5\u30ed\u30fc"},"\u51e6\u7406\u30d5\u30ed\u30fc"),(0,n.kt)("p",null,"\u30ed\u30b0\u30a2\u30a6\u30c8\u306e\u51e6\u7406\u30d5\u30ed\u30fc\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30ed\u30b0\u30a2\u30a6\u30c8\u306e\u51e6\u7406\u30d5\u30ed\u30fc",src:a(59058).Z,width:"752",height:"550"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"No"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u51e6\u7406"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5185\u5bb9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2460"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a2\u30a6\u30c8\u306e\u30ea\u30af\u30a8\u30b9\u30c8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u306f\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306b\u30ed\u30b0\u30a2\u30a6\u30c8\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u308a\u307e\u3059\u3002\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3057\u3066\u3001\u7aef\u672b\u5185\u306b\u4fdd\u6301\u3055\u308c\u305fCookie\uff08\u30bb\u30c3\u30b7\u30e7\u30f3ID\uff09\u3092HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2461"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a2\u30a6\u30c8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306f\u3001\u30ed\u30b0\u30a2\u30a6\u30c8\u51e6\u7406\uff08\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u7834\u68c4\uff09\u3092\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2462"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a2\u30a6\u30c8\u7d50\u679c\u306e\u8fd4\u5374"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306f\u30ed\u30b0\u30a2\u30a6\u30c8\u51e6\u7406\u306e\u7d50\u679c\u3092\u30a2\u30d7\u30ea\u306b\u8fd4\u5374\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2463"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a2\u30a6\u30c8\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7834\u68c4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u306f\u3001\u30ed\u30b0\u30a4\u30f3\u4e2d\u306e\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u3057\u3066\u4fdd\u5b58\u3057\u3066\u3044\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u3001\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u7834\u68c4\u3057\u307e\u3059\u3002")))),(0,n.kt)("h2",{id:"\u5229\u7528\u65b9\u6cd5"},"\u5229\u7528\u65b9\u6cd5"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useAuthCommands"),"\u306e\u623b\u308a\u5024\u306e",(0,n.kt)("inlineCode",{parentName:"p"},"logout"),"\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u30ed\u30b0\u30a2\u30a6\u30c8\u3057\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="\u30ed\u30b0\u30a2\u30a6\u30c8\u306e\u5229\u7528\u65b9\u6cd5"',title:'"\u30ed\u30b0\u30a2\u30a6\u30c8\u306e\u5229\u7528\u65b9\u6cd5"'},"const {logout} = useAuthCommands();\ntry {\n  await logout(undefined);\n} catch (e) {\n  // \u30a8\u30e9\u30fc\u51e6\u7406\n}\n")))}s.isMDXComponent=!0},59058:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/auth-logout-flow.drawio-d1a9068dffdb3d9d8f73c8caf4f75fa0.png"}}]);