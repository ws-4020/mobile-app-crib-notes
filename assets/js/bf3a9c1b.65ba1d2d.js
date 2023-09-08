"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[4574],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>k});var a=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=a.createContext({}),s=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},d=function(n){var e=s(n.components);return a.createElement(l.Provider,{value:e},n.children)},c="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,l=n.parentName,d=p(n,["components","mdxType","originalType","parentName"]),c=s(t),m=i,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return t?a.createElement(k,o(o({ref:e},d),{},{components:t})):a.createElement(k,o({ref:e},d))}));function k(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,o=new Array(r);o[0]=m;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=n,p[c]="string"==typeof n?n:i,o[1]=p;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39763:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const r={title:"Android App Links"},o=void 0,p={unversionedId:"react-native/santoku/application-architecture/deep-link/android-app-links",id:"react-native/santoku/application-architecture/deep-link/android-app-links",title:"Android App Links",description:"Android App Links\u306f\u3001Android\u304c\u6a19\u6e96\u6a5f\u80fd\u3068\u3057\u3066\u63d0\u4f9b\u3057\u3066\u3044\u308b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3067\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/deep-link/android-app-links.mdx",sourceDirName:"react-native/santoku/application-architecture/deep-link",slug:"/react-native/santoku/application-architecture/deep-link/android-app-links",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/android-app-links",draft:!1,tags:[],version:"current",lastUpdatedAt:1694137111,formattedLastUpdatedAt:"2023\u5e749\u67088\u65e5",frontMatter:{title:"Android App Links"},sidebar:"santoku",previous:{title:"Universal Links",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/universal-links"},next:{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u51e6\u7406",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/process-deep-link"}},l={},s=[{value:"\u74b0\u5883\u3054\u3068\u306e\u8a2d\u5b9a",id:"\u74b0\u5883\u3054\u3068\u306e\u8a2d\u5b9a",level:2}],d={toc:s},c="wrapper";function u(n){let{components:e,...t}=n;return(0,i.kt)(c,(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/training/app-links"},"Android App Links"),"\u306f\u3001Android\u304c\u6a19\u6e96\u6a5f\u80fd\u3068\u3057\u3066\u63d0\u4f9b\u3057\u3066\u3044\u308b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3067\u3059\u3002"),(0,i.kt)("p",null,"Android App Links\u306e\u6982\u8981\u3084\u8a2d\u5b9a\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u4e0b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/reference/deep-link/android-app-links"},"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9 - \u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af - Android App Links"))),(0,i.kt)("h2",{id:"\u74b0\u5883\u3054\u3068\u306e\u8a2d\u5b9a"},"\u74b0\u5883\u3054\u3068\u306e\u8a2d\u5b9a"),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u7528\u9014\u306b\u5fdc\u3058\u305f\u3044\u304f\u3064\u304b\u306e\u74b0\u5883\u3092\u7528\u610f\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/development/build-configuration/environments-configuration"},"Development - \u30d3\u30eb\u30c9 - \u74b0\u5883\u306e\u5207\u308a\u66ff\u3048"))),(0,i.kt)("p",null,"Android App Links\u3092\u74b0\u5883\u3054\u3068\u306b\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u4ee5\u4e0b\u306e2\u3064\u306e\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u74b0\u5883\u3054\u3068\u306b\u7570\u306a\u308b\u30c9\u30e1\u30a4\u30f3\u3092\u4f7f\u7528\u3059\u308b"),(0,i.kt)("li",{parentName:"ul"},"\u74b0\u5883\u3054\u3068\u306b\u7570\u306a\u308b\u30d1\u30b9\u3092\u4f7f\u7528\u3059\u308b")),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u30011\u3064\u306e\u30c9\u30e1\u30a4\u30f3\u3067\u74b0\u5883\u3054\u3068\u306b\u7570\u306a\u308b\u30d1\u30b9\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u3092\u63a1\u7528\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"assetlinks.json"),"\u306b\u3001\u74b0\u5883\u3054\u3068\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID\u3068\u7f72\u540d\u8a3c\u660e\u66f8\u306eSHA256\u30d5\u30a3\u30f3\u30ac\u30fc\u30d7\u30ea\u30f3\u30c8\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=assetlinks.json\u306e\u4f8b",title:"assetlinks.json\u306e\u4f8b"},'[\n  {\n    "relation": ["delegate_permission/common.handle_all_urls"],\n    "target": {\n      "namespace": "android_app",\n      "package_name": "jp.fintan.mobile.SantokuApp.stg",\n      "sha256_cert_fingerprints": ["2A:B5:1E:6C:D8:8A:4E:B3:4C:8C:A8:7C:37:8D:56:9E:29:23:7D:AB:E1:11:C6:BE:13:58:98:55:05:F8:20:D2"]\n    }\n  },\n  {\n    "relation": ["delegate_permission/common.handle_all_urls"],\n    "target": {\n      "namespace": "android_app",\n      "package_name": "jp.fintan.mobile.SantokuApp.dev",\n      "sha256_cert_fingerprints": ["01:AD:D7:52:B3:D1:EE:C8:E2:79:DD:C4:0D:27:DA:14:FF:D8:AF:F0:32:0A:94:05:8F:7C:E6:C9:A7:85:B7:16"]\n    }\n  },\n  {\n    "relation": ["delegate_permission/common.handle_all_urls"],\n    "target": {\n      "namespace": "android_app",\n      "package_name": "jp.fintan.mobile.SantokuApp.local",\n      "sha256_cert_fingerprints": ["FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C"]\n    }\n  }\n]\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001Android\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"prod"),"\u74b0\u5883\u3092\u307e\u3060\u914d\u5e03\u3057\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u7f72\u540d\u8a3c\u660e\u66f8\u306eSHA256\u30d5\u30a3\u30f3\u30ac\u30fc\u30d7\u30ea\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3066\u3044\u307e\u305b\u3093\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u305d\u306e\u305f\u3081\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"assetlinks.json"),"\u306b\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"prod"),"\u74b0\u5883\u306e\u8a2d\u5b9a\u304c\u3042\u308a\u307e\u305b\u3093\u3002")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"app.config.[\u74b0\u5883\u540d].js"),"\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"intentFilters"),"\u306b\u3001Android App Links\u3068\u3057\u3066\u767b\u9332\u3059\u308b\u30d1\u30b9\u306a\u3069\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u30d1\u30b9\u306e\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u306b\u74b0\u5883\u540d\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001Android App Links\u306eURL\u304c\u4ed6\u306e\u74b0\u5883\u3068\u88ab\u3089\u306a\u3044\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=app.config.stg.js\u306e\u4f8b",title:"app.config.stg.js\u306e\u4f8b"},"module.exports = config => {\n  return {\n    /* \u7701\u7565 */\n    android: {\n      /* \u7701\u7565 */\n      package: 'jp.fintan.mobile.SantokuApp.stg',\n      intentFilters: [\n        {\n          autoVerify: true,\n          action: 'VIEW',\n          data: [\n            {\n              scheme: 'https',\n              host: 'reactnativesandbox.z11.web.core.windows.net',\n              pathPattern: `/stg/question/.*`,\n            },\n            {\n              scheme: 'https',\n              host: 'reactnativesandbox.z11.web.core.windows.net',\n              path: `/stg/demo/app-info`,\n            },\n          ],\n          category: ['BROWSABLE', 'DEFAULT'],\n        },\n      ],\n    },\n    /* \u7701\u7565 */\n  };\n};\n\n")),(0,i.kt)("p",null,"\u4e0a\u8a18\u8a2d\u5b9a\u5f8c\u306b\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Prebuild"),"\u3092\u5b9f\u884c\u3059\u308b\u3068\u4ee5\u4e0b\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),"\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=AndroidManifest.xml\u306e\u4f8b",title:"AndroidManifest.xml\u306e\u4f8b"},'<manifest xmlns:android="http://schemas.android.com/apk/res/android">\n  \x3c!-- \uff5e\u7701\u7565\uff5e --\x3e\n  <application\n    android:name=".MainApplication"\n    \x3c!-- \uff5e\u7701\u7565\uff5e --\x3e\n    >\n    <activity\n      android:name=".MainActivity"\n      \x3c!-- \uff5e\u7701\u7565\uff5e --\x3e\n      >\n      \x3c!-- \uff5e\u7701\u7565\uff5e --\x3e\n      <intent-filter android:autoVerify="true">\n        <action android:name="android.intent.action.VIEW" />\n        <category android:name="android.intent.category.DEFAULT" />\n        <category android:name="android.intent.category.BROWSABLE" />\n        <data android:scheme="https" android:host="reactnativesandbox.z11.web.core.windows.net" android:pathPattern="/stg/question/.*"/>\n        <data android:scheme="https" android:host="reactnativesandbox.z11.web.core.windows.net" android:path="/stg/demo/app-info"/>\n      </intent-filter>\n    </activity>\n  </application>\n</manifest>\n')))}u.isMDXComponent=!0}}]);