"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5b9a\u7fa9\u3068\u53d6\u5f97"},i=void 0,l={unversionedId:"react-native/santoku/development/implement/message-configuration",id:"react-native/santoku/development/implement/message-configuration",title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5b9a\u7fa9\u3068\u53d6\u5f97",description:"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30a2\u30d7\u30ea\u5185\u306b\u30d0\u30f3\u30c9\u30eb\u3057\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u5b9a\u7fa9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/development/implement/message-configuration.mdx",sourceDirName:"react-native/santoku/development/implement",slug:"/react-native/santoku/development/implement/message-configuration",permalink:"/mobile-app-crib-notes/react-native/santoku/development/implement/message-configuration",draft:!1,tags:[],version:"current",lastUpdatedAt:1634693385,formattedLastUpdatedAt:"2021\u5e7410\u670820\u65e5",frontMatter:{title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5b9a\u7fa9\u3068\u53d6\u5f97"},sidebar:"santoku",previous:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/development/implement"},next:{title:"\u30ed\u30b0\u306e\u5229\u7528",permalink:"/mobile-app-crib-notes/react-native/santoku/development/implement/logs-implementation"}},p={},s=[{value:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5b9a\u7fa9",id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5b9a\u7fa9",level:2},{value:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u53d6\u5f97",id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u53d6\u5f97",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30a2\u30d7\u30ea\u5185\u306b\u30d0\u30f3\u30c9\u30eb\u3057\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u5b9a\u7fa9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5b9a\u7fa9"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5b9a\u7fa9"),(0,a.kt)("p",null,"\u65b0\u305f\u306a\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8ffd\u52a0\u3059\u308b\u5834\u5408\u306f\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u5b9a\u7fa9\u30d5\u30a1\u30a4\u30eb\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"src/generated/BundledMessages.ts"),"\uff09\u3092\u4fee\u6b63\u3057\u307e\u3059\u3002\n\u4f8b\u3048\u3070\u3001\u30e6\u30fc\u30b6\u540d\u3068\u3044\u3046\u30e9\u30d9\u30eb\u3092\u8ffd\u52a0\u3059\u308b\u5834\u5408\u306e\u4f8b\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'typescript title="BundledMessages.ts"',typescript:!0,title:'"BundledMessages.ts"'},"export const bundledMessages = {\n  /* \u4e2d\u7565 */\n+ \u30e6\u30fc\u30b6\u540d: '\u30e6\u30fc\u30b6\u540d',\n  \u30d1\u30b9\u30ef\u30fc\u30c9: '\u30d1\u30b9\u30ef\u30fc\u30c9',\n  \u30db\u30fc\u30e0: '\u30db\u30fc\u30e0',\n  '\u6700\u5927{0}\u4ef6': '\u6700\u5927{0}\u4ef6',\n  '\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002': '\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002',\n  /* \u4e2d\u7565 */\n} as const;\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u958b\u767a\u73fe\u5834\u306b\u3088\u3063\u3066\u306f\u3001\uff08Excel\u306a\u3069\u3067\u4f5c\u6210\u3055\u308c\u305f\uff09\u30e1\u30c3\u30bb\u30fc\u30b8\u5b9a\u7fa9\u66f8\u304b\u3089\u30e1\u30c3\u30bb\u30fc\u30b8\u5b9a\u7fa9\u30d5\u30a1\u30a4\u30eb\u3092\u81ea\u52d5\u751f\u6210\u3059\u308b\u904b\u7528\u3082\u8003\u3048\u3089\u308c\u307e\u3059\u3002\n\u305d\u3046\u3057\u305f\u80cc\u666f\u304b\u3089\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"BundledMessages.ts"),"\u30d5\u30a1\u30a4\u30eb\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"src/generated/"),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u914d\u7f6e\u3057\u3066\u3044\u307e\u3059\u3002")),(0,a.kt)("h2",{id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u53d6\u5f97"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u53d6\u5f97"),(0,a.kt)("p",null,"\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u53d6\u5f97\u3059\u308b\u5834\u5408\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"src/framework/message/Message.ts"),"\u306b\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b",(0,a.kt)("inlineCode",{parentName:"p"},"m"),"\u95a2\u6570\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx title='\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u53d6\u5f97'",jsx:!0,title:"'\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u53d6\u5f97'"},"import {m} from 'framework';\n\nconsole.log(m('\u6700\u5927{0}\u4ef6', '3'));  // => \u6700\u59273\u4ef6\n")))}m.isMDXComponent=!0}}]);