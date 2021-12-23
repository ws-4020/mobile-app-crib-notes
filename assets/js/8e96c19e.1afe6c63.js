"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[9134],{3905:function(e,n,i){i.d(n,{Zo:function(){return c},kt:function(){return m}});var t=i(67294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(i),m=a,u=g["".concat(l,".").concat(m)]||g[m]||d[m]||r;return i?t.createElement(u,o(o({ref:n},c),{},{components:i})):t.createElement(u,o({ref:n},c))}));function m(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=i[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}g.displayName="MDXCreateElement"},53245:function(e,n,i){i.r(n),i.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var t=i(87462),a=i(63366),r=(i(67294),i(3905)),o=["components"],s={title:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306e\u5b9f\u88c5"},l=void 0,p={unversionedId:"reference/notification/backend",id:"reference/notification/backend",title:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306e\u5b9f\u88c5",description:"Firebase\u306eAPI\u3092\u547c\u3073\u3060\u3059\u305f\u3081\u306e\u521d\u671f\u8a2d\u5b9a",source:"@site/docs/reference/notification/backend.md",sourceDirName:"reference/notification",slug:"/reference/notification/backend",permalink:"/mobile-app-crib-notes/reference/notification/backend",tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306e\u5b9f\u88c5"},sidebar:"reference",previous:{title:"\u5404\u30b5\u30fc\u30d3\u30b9\u306e\u521d\u671f\u8a2d\u5b9a",permalink:"/mobile-app-crib-notes/reference/notification/configuration"},next:{title:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5",permalink:"/mobile-app-crib-notes/reference/notification/client"}},c=[{value:"Firebase\u306eAPI\u3092\u547c\u3073\u3060\u3059\u305f\u3081\u306e\u521d\u671f\u8a2d\u5b9a",id:"firebase\u306eapi\u3092\u547c\u3073\u3060\u3059\u305f\u3081\u306e\u521d\u671f\u8a2d\u5b9a",children:[{value:"Firebase Admin SDK for Java\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"firebase-admin-sdk-for-java\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:[],level:3},{value:"Firebase Admin SDK\u306e\u521d\u671f\u5316\u51e6\u7406",id:"firebase-admin-sdk\u306e\u521d\u671f\u5316\u51e6\u7406",children:[],level:3},{value:"Firebase Admin SDK\u306e\u4f7f\u7528",id:"firebase-admin-sdk\u306e\u4f7f\u7528",children:[],level:3},{value:"\u6307\u5b9a\u3057\u305f\u30c7\u30d0\u30a4\u30b9\u3078\u306e\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u9001\u4fe1",id:"\u6307\u5b9a\u3057\u305f\u30c7\u30d0\u30a4\u30b9\u3078\u306e\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u9001\u4fe1",children:[],level:3},{value:"\u6307\u5b9a\u3057\u305f\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u9001\u4fe1",id:"\u6307\u5b9a\u3057\u305f\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u9001\u4fe1",children:[],level:3},{value:"\u6307\u5b9a\u3057\u305f\u30c8\u30d4\u30c3\u30af\u306e\u8cfc\u8aad",id:"\u6307\u5b9a\u3057\u305f\u30c8\u30d4\u30c3\u30af\u306e\u8cfc\u8aad",children:[],level:3},{value:"\u6307\u5b9a\u3057\u305f\u30c8\u30d4\u30c3\u30af\u306e\u8cfc\u8aad\u89e3\u9664",id:"\u6307\u5b9a\u3057\u305f\u30c8\u30d4\u30c3\u30af\u306e\u8cfc\u8aad\u89e3\u9664",children:[],level:3},{value:"\u305d\u306e\u4ed6\u306e\u6a5f\u80fd",id:"\u305d\u306e\u4ed6\u306e\u6a5f\u80fd",children:[],level:3}],level:2}],d={toc:c};function g(e){var n=e.components,i=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,t.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"firebase\u306eapi\u3092\u547c\u3073\u3060\u3059\u305f\u3081\u306e\u521d\u671f\u8a2d\u5b9a"},"Firebase\u306eAPI\u3092\u547c\u3073\u3060\u3059\u305f\u3081\u306e\u521d\u671f\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u5074\u304b\u3089Firebase\u306eAPI\u3092\u547c\u3073\u3060\u3059\u969b\u306b\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/admin/setup?hl=ja"},"Firebase Admin SDK"),"\u3092\u5229\u7528\u3057\u307e\u3059\u3002\nFirebase Admin SDK\u306f\u3001Node.js\u3001Java\u3001Python\u3001Go\u3001C#\u306e\u8a00\u8a9e\u5411\u3051\u306e\u3082\u306e\u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u4eca\u56de\u306fFirebase Admin SDK for Java\u3092\u4f7f\u7528\u3059\u308b\u524d\u63d0\u3067\u89e3\u8aac\u3057\u307e\u3059\u3002\n\u4ed6\u306e\u8a00\u8a9e\u3092\u4f7f\u7528\u3059\u308b\u969b\u306b\u306f\u3001\u305d\u308c\u305e\u308c\u306e\u8a00\u8a9e\u5411\u3051\u306eSDK\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h3",{id:"firebase-admin-sdk-for-java\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"Firebase Admin SDK for Java\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("p",null,"Maven\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30d3\u30eb\u30c9\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001pom.xml\u306b\u4ee5\u4e0b\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependency>\n  <groupId>com.google.firebase</groupId>\n  <artifactId>firebase-admin</artifactId>\n  <version>7.1.0</version>\n</dependency>\n")),(0,r.kt)("p",null,"Gradle\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30d3\u30eb\u30c9\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001build.gradle\u306b\u4ee5\u4e0b\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},"dependencies {\n  implementation 'com.google.firebase:firebase-admin:7.1.0'\n}\n")),(0,r.kt)("h3",{id:"firebase-admin-sdk\u306e\u521d\u671f\u5316\u51e6\u7406"},"Firebase Admin SDK\u306e\u521d\u671f\u5316\u51e6\u7406"),(0,r.kt)("p",null,"Firebase Admin SDK\u3092\u5229\u7528\u3059\u308b\u305f\u3081\u306b\u306f\u3001Firebase Admin SDK\u7528\u306e\u79d8\u5bc6\u9375\u30d5\u30a1\u30a4\u30eb\uff08JSON\u5f62\u5f0f\uff09\u306e\u60c5\u5831\u3092\u8aad\u307f\u8fbc\u3093\u3067\u521d\u671f\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u3053\u306e\u79d8\u5bc6\u9375\u30d5\u30a1\u30a4\u30eb\u306e\u60c5\u5831\u3092\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u65b9\u6cd5\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u6e21\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30ed\u30fc\u30ab\u30eb\u30c7\u30a3\u30b9\u30af\u5185\u306b\u79d8\u5bc6\u9375\u30d5\u30a1\u30a4\u30eb\u3092\u8a2d\u7f6e\u3057\u3001GOOGLE_APPLICATION_CREDENTIALS\u74b0\u5883\u5909\u6570\u306b\u79d8\u5bc6\u9375\u30d5\u30a1\u30a4\u30eb\u306ePath\u3092\u8a2d\u5b9a\u3059\u308b\uff08\u63a8\u5968\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u79d8\u5bc6\u9375\u30d5\u30a1\u30a4\u30eb\u306eJSON\u30c7\u30fc\u30bf\u3092\u76f4\u63a5\u30a2\u30d7\u30ea\u306b\u53d7\u3051\u6e21\u3059")),(0,r.kt)("p",null,"1\u3064\u76ee\u306eGOOGLE_APPLICATION_CREDENTIALS\u74b0\u5883\u5909\u6570\u3092\u4f7f\u3046\u5834\u5408\u306e\u30b3\u30fc\u30c9\u4f8b\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import com.google.auth.oauth2.GoogleCredentials;\nimport com.google.firebase.FirebaseApp;\nimport com.google.firebase.FirebaseOptions;\n\nGoogleCredentials credentials = GoogleCredentials.getApplicationDefault();\nFirebaseOptions options = FirebaseOptions.builder().setCredentials(credentials).build();\nFirebaseApp.initializeApp(options);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getApplicationDefault()"),"\u3092\u547c\u3073\u3060\u3059\u3053\u3068\u3067\u3001\u81ea\u52d5\u7684\u306bGOOGLE_APPLICATION_CREDENTIALS\u74b0\u5883\u5909\u6570\u3067\u6307\u5b9a\u3055\u308c\u305f\u79d8\u5bc6\u9375\u30d5\u30a1\u30a4\u30eb\u304c\u8aad\u307f\u8fbc\u307e\u308c\u307e\u3059\u3002\n\u307e\u305fGoogle Cloud\u74b0\u5883\u4e0a\u3067\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u5834\u5408\u3001\u74b0\u5883\u5909\u6570\u306e\u6307\u5b9a\u304c\u306a\u3044\u5834\u5408\u306f\u305d\u306eGoogle Cloud\u306e\u5b9f\u884c\u74b0\u5883\u306b\u7d10\u4ed8\u3051\u3089\u308c\u305f\u8a8d\u8a3c\u60c5\u5831\u304c\u4ee3\u308f\u308a\u306b\u8aad\u307f\u8fbc\u307e\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"2\u3064\u3081\u306e\u3001\u79d8\u5bc6\u9375\u30d5\u30a1\u30a4\u30eb\u306eJSON\u30c7\u30fc\u30bf\u3092\u76f4\u63a5\u30a2\u30d7\u30ea\u306b\u53d7\u3051\u6e21\u3059\u5834\u5408\u306e\u30b3\u30fc\u30c9\u4f8b\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002\u30ed\u30fc\u30ab\u30eb\u30c7\u30a3\u30b9\u30af\u4e0a\u306b\u79d8\u5bc6\u9375\u30d5\u30a1\u30a4\u30eb\u3092\u8a2d\u7f6e\u3059\u308b\u3053\u3068\u304c\u3069\u3046\u3057\u3066\u3082\u96e3\u3057\u3044\u5834\u5408\u306f\u3053\u3061\u3089\u3092\u7528\u3044\u308b\u30b1\u30fc\u30b9\u3082\u3042\u308b\u3067\u3057\u3087\u3046\u3002\n\u3053\u306e\u4f8b\u3067\u306f\u3001JSON\u30c7\u30fc\u30bf\u306f\u74b0\u5883\u5909\u6570\u304b\u3089\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059\u3002\n\u3053\u306e\u79d8\u5bc6\u9375\u30c7\u30fc\u30bf\u306f\u79d8\u533f\u3057\u306a\u3051\u308c\u3070\u3044\u3051\u306a\u3044\u3053\u3068\u3092\u5341\u5206\u7559\u610f\u3057\u305f\u4e0a\u3067\u6271\u3044\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.google.auth.oauth2.GoogleCredentials;\nimport com.google.firebase.FirebaseApp;\nimport com.google.firebase.FirebaseOptions;\n\nimport java.io.IOException;\nimport java.io.InputStream;\nimport java.io.ByteArrayInputStream;\nimport java.nio.charset.StandardCharsets;\n\nString serviceAccountJson = System.getenv("FIREBASE_SERVICE_ACCOUNT_JSON");\ntry (InputStream serviceAccountStream = new ByteArrayInputStream(serviceAccountJson.getBytes(StandardCharsets.UTF_8))) {\n    GoogleCredentials credentials = GoogleCredentials.fromStream(serviceAccountStream);\n    FirebaseOptions options = FirebaseOptions.builder()\n            .setCredentials(credentials)\n            .build();\n    FirebaseApp.initializeApp(options);\n} catch (IOException e) {\n    // TODO: Error Handling\n}\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"FirebaseApp.initializeApp()\u306f\u8907\u6570\u56de\u547c\u3073\u3060\u3059\u3068\u3001","[","DEFAULT","]","\u30a2\u30d7\u30ea\u306f\u65e2\u306b\u5b58\u5728\u3059\u308b\u3068\u3044\u3046\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u307e\u3059\u3002\u8907\u6570\u56de\u547c\u3073\u3060\u3059\u3053\u3068\u304c\u7121\u3044\u3088\u3046\u6c17\u3092\u4ed8\u3051\u307e\u3057\u3087\u3046\u3002"))),(0,r.kt)("h3",{id:"firebase-admin-sdk\u306e\u4f7f\u7528"},"Firebase Admin SDK\u306e\u4f7f\u7528"),(0,r.kt)("p",null,"\u4e00\u5ea6Firebase Admin SDK\u306e\u521d\u671f\u5316\u51e6\u7406\u304c\u7d42\u308f\u308c\u3070\u3001\u3042\u3068\u306fSDK\u306b\u542b\u307e\u308c\u308bFirebase\u306e\u5404\u30b5\u30fc\u30d3\u30b9\u7528\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u547c\u3073\u51fa\u305b\u3070\u7c21\u5358\u306b\u5404\u7a2e\u64cd\u4f5c\u3092\u884c\u3048\u307e\u3059\u3002\n\u4eca\u56de\u306f\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u306b\u95a2\u9023\u3059\u308b\u4ee5\u4e0b\u306e4\u3064\u306e\u64cd\u4f5c\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u3057\u305f\u30c7\u30d0\u30a4\u30b9\u3078\u306e\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u9001\u4fe1"),(0,r.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u3057\u305f\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u9001\u4fe1"),(0,r.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u3057\u305f\u30c8\u30d4\u30c3\u30af\u306e\u8cfc\u8aad"),(0,r.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u3057\u305f\u30c8\u30d4\u30c3\u30af\u306e\u8cfc\u8aad\u89e3\u9664")),(0,r.kt)("h3",{id:"\u6307\u5b9a\u3057\u305f\u30c7\u30d0\u30a4\u30b9\u3078\u306e\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u9001\u4fe1"},"\u6307\u5b9a\u3057\u305f\u30c7\u30d0\u30a4\u30b9\u3078\u306e\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u9001\u4fe1"),(0,r.kt)("p",null,"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u5074\u304b\u3089\u6307\u5b9a\u3057\u305f\u30c7\u30d0\u30a4\u30b9\u3078\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u3092\u9001\u4fe1\u3059\u308b\u5834\u5408\u306e\u30b3\u30fc\u30c9\u4f8b\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.google.auth.oauth2.GoogleCredentials;\nimport com.google.firebase.FirebaseApp;\nimport com.google.firebase.FirebaseOptions;\nimport com.google.firebase.messaging.FirebaseMessaging;\nimport com.google.firebase.messaging.FirebaseMessagingException;\nimport com.google.firebase.messaging.Message;\nimport com.google.firebase.messaging.Notification;\n\nString token = "<your_registration_token>";\nString title = "Notification title";\nString body = "Notification body";\nString dataKey = "text";\nString dataValue = "Text Data";\n\n// Initialize Firebase Admin SDK\nGoogleCredentials credentials = GoogleCredentials.getApplicationDefault();\nFirebaseOptions options = FirebaseOptions.builder().setCredentials(credentials).build();\nFirebaseApp.initializeApp(options);\n\n// Build notification data\nNotification.Builder notificationBuilder = Notification.builder();\nnotificationBuilder.setTitle(title);\nnotificationBuilder.setBody(body);\nNotification notification = notificationBuilder.build();\n\n// Build message\nMessage.Builder messageBuilder = Message.builder();\nmessageBuilder.setToken(token);\nmessageBuilder.setNotification(notification);\nmessageBuilder.putData(dataKey, dataValue);\nMessage message = messageBuilder.build();\n\n// Send message\ntry {\n    String response = FirebaseMessaging.getInstance().send(message);\n} catch (FirebaseMessagingException e) {\n    // Error Handling\n}\n')),(0,r.kt)("p",null,"Notification\u3067\u6307\u5b9a\u3057\u305f\u5185\u5bb9\u304c\u901a\u77e5\u9818\u57df\u306b\u8868\u793a\u3055\u308c\u308b\u5185\u5bb9\u3068\u306a\u308a\u307e\u3059\u3002\n\u4eca\u56de\u306e\u4f8b\u3067\u306f\u30bf\u30a4\u30c8\u30eb\u3068\u672c\u6587\u3092\u6307\u5b9a\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u4ed6\u306b\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u306eURL\u3082\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u306f\u3001\u901a\u77e5\u9818\u57df\u306b\u8868\u793a\u3055\u308c\u308bNotification\u306e\u4ed6\u306b\u3001\u4efb\u610f\u306eKey-Value\u5f62\u5f0f\u306e\u30c7\u30fc\u30bf\u3092\u542b\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002Message\u306bputData\u3067\u8a2d\u5b9a\u3057\u305f\u30c7\u30fc\u30bf\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u3067\u8aad\u307f\u8fbc\u3093\u3067\u81ea\u7531\u306b\u51e6\u7406\u3092\u884c\u3048\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5b9b\u5148\u3068\u306a\u308b\u30c7\u30d0\u30a4\u30b9\u306f\u3001Registration Token\u3068\u547c\u3070\u308c\u308b\u7aef\u672b\u30fb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u6bce\u306b\u4e00\u610f\u306b\u751f\u6210\u3055\u308c\u308b\u30c8\u30fc\u30af\u30f3\u3092\u7528\u3044\u3066\u6307\u5b9a\u3057\u307e\u3059\u3002\n\u3053\u306e\u30c8\u30fc\u30af\u30f3\u306f\u3001Firebase SDK\u3092\u7d44\u307f\u8fbc\u3093\u3060\u30a2\u30d7\u30ea\u306e\u521d\u56de\u8d77\u52d5\u6642\u306b\u751f\u6210\u3055\u308c\u307e\u3059\u3002\u307e\u305f\u3001\u30a2\u30d7\u30ea\u3092\u4e00\u5ea6\u524a\u9664\u3057\u3066\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3068\u6b21\u306e\u8d77\u52d5\u6642\u306b\u518d\u751f\u6210\u3055\u308c\u3066\u5024\u304c\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5b9f\u969b\u306b\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u3092\u904b\u7528\u3059\u308b\u4e0a\u3067\u306f\u3001\u4e00\u5b9a\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3057\u305f\u30e6\u30fc\u30b6\u306b\u9001\u308b\u30b1\u30fc\u30b9\u304c\u591a\u3044\u3067\u3057\u3087\u3046\u3002\u305d\u308c\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u3069\u306e\u30e6\u30fc\u30b6\u304c\u3069\u306e\u30c8\u30fc\u30af\u30f3\u3092\u6301\u3064\u306e\u304b\u7d10\u4ed8\u3051\u3066\u304a\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u3067\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u306e\u958b\u767a\u30ac\u30a4\u30c9\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4eca\u56de\u306e\u30b5\u30f3\u30d7\u30eb\u3067\u306fAndroid/iOS\u5171\u901a\u3067\u5229\u7528\u53ef\u80fd\u306a\u5c5e\u6027\u306e\u307f\u3092\u6307\u5b9a\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u306fOS\u56fa\u6709\u306e\u8a2d\u5b9a\u3082\u591a\u6570\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001\u53d7\u4fe1\u7aef\u672b\u306eOS\u6bce\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u5909\u3048\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002"),(0,r.kt)("p",{parentName:"div"},"\u6307\u5b9a\u53ef\u80fd\u306a\u5c5e\u6027\u306b\u3064\u3044\u3066\u306f",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages"},"\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"))),(0,r.kt)("h3",{id:"\u6307\u5b9a\u3057\u305f\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u9001\u4fe1"},"\u6307\u5b9a\u3057\u305f\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u9001\u4fe1"),(0,r.kt)("p",null,"Firebase\u3067\u306f\u3001\u6307\u5b9a\u3057\u305f\u7aef\u672b\u306b\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u3092\u9001\u4fe1\u3059\u308b\u3060\u3051\u3067\u306a\u304f\u3001\n\u7279\u5b9a\u306e\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3057\u3066\u3044\u308b\u5168\u7aef\u672b\u306b\u5b9b\u3066\u305f\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u306e\u9001\u4fe1\u3082\u53ef\u80fd\u3067\u3059\u3002\n\u3053\u306e\u6a5f\u80fd\u306f\u3001\u5404\u7a2eOS\u304c\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u6a5f\u80fd\u3067\u306f\u306a\u304f\u3001Firebase\u72ec\u81ea\u306e\u6a5f\u80fd\u3067\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001Firebase\u3092\u7d4c\u7531\u305b\u305a\u306b\u76f4\u63a5APNs\u306eAPI\u3092\u547c\u3073\u51fa\u3057\u3066iOS\u7aef\u672b\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3059\u308b\u5834\u5408\u306f\u30c8\u30d4\u30c3\u30af\u3078\u306e\u901a\u77e5\u306f\u884c\u3048\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u5074\u304b\u3089\u6307\u5b9a\u3057\u305f\u30c8\u30d4\u30c3\u30af\u3078\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u3092\u9001\u4fe1\u3059\u308b\u5834\u5408\u306e\u30b3\u30fc\u30c9\u4f8b\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.google.auth.oauth2.GoogleCredentials;\nimport com.google.firebase.FirebaseApp;\nimport com.google.firebase.FirebaseOptions;\nimport com.google.firebase.messaging.FirebaseMessaging;\nimport com.google.firebase.messaging.FirebaseMessagingException;\nimport com.google.firebase.messaging.Message;\nimport com.google.firebase.messaging.Notification;\n\nString topic = "<your_topic_name>";\nString title = "Notification title";\nString body = "Notification body";\nString dataKey = "text";\nString dataValue = "Text Data";\n\n// Initialize Firebase Admin SDK\nGoogleCredentials credentials = GoogleCredentials.getApplicationDefault();\nFirebaseOptions options = FirebaseOptions.builder().setCredentials(credentials).build();\nFirebaseApp.initializeApp(options);\n\n// Build notification data\nNotification.Builder notificationBuilder = Notification.builder();\nnotificationBuilder.setTitle(title);\nnotificationBuilder.setBody(body);\nNotification notification = notificationBuilder.build();\n\n// Build message\nMessage.Builder messageBuilder = Message.builder();\nmessageBuilder.setTopic(topic);\nmessageBuilder.setNotification(notification);\nmessageBuilder.putData(dataKey, dataValue);\nMessage message = messageBuilder.build();\n\n// Send message\ntry {\n    String response = FirebaseMessaging.getInstance().send(message);\n} catch (FirebaseMessagingException e) {\n    // Error Handling\n}\n')),(0,r.kt)("p",null,"\u3053\u3061\u3089\u3082\u5b9f\u88c5\u65b9\u6cd5\u306f\u500b\u5225\u306e\u30c7\u30d0\u30a4\u30b9\u3078\u306e\u9001\u4fe1\u6642\u3068\u307b\u307c\u540c\u3058\u3067\u3059\u3002\n\u9055\u3046\u306e\u306f\u3001setToken\u306e\u4ee3\u308f\u308a\u306bsetTopic\u3092\u547c\u3073\u3060\u3059\u70b9\u306e\u307f\u3067\u3059\u3002\nToken\u3068Topic\u306f\u4e21\u65b9\u30bb\u30c3\u30c8\u3059\u308b\u3068\u9001\u4fe1\u30a8\u30e9\u30fc\u3068\u306a\u308b\u306e\u3067\u3001\u305d\u306e\u70b9\u306f\u6c17\u3092\u4ed8\u3051\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("h3",{id:"\u6307\u5b9a\u3057\u305f\u30c8\u30d4\u30c3\u30af\u306e\u8cfc\u8aad"},"\u6307\u5b9a\u3057\u305f\u30c8\u30d4\u30c3\u30af\u306e\u8cfc\u8aad"),(0,r.kt)("p",null,"\u6307\u5b9a\u3057\u305f\u30c8\u30d4\u30c3\u30af\u3078\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u3092\u9001\u4fe1\u3059\u308b\u6a5f\u80fd\u3067\u306f\u3001\n\u305d\u306e\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3057\u3066\u3044\u308b\u7aef\u672b\u306b\u306e\u307f\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u304c\u914d\u4fe1\u3055\u308c\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3069\u306e\u7aef\u672b\u304c\u3069\u306e\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3057\u3066\u3044\u308b\u306e\u304b\u4e8b\u524d\u306bFirebase\u3078\u767b\u9332\u3057\u3066\u304a\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30c8\u30d4\u30c3\u30af\u306e\u8cfc\u8aad\u30fb\u8cfc\u8aad\u89e3\u9664\u306f\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u5074\u3068\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u5074\u306e\u3069\u3061\u3089\u304b\u3089\u3067\u3082\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u3069\u306e\u30e6\u30fc\u30b6\u304c\u3069\u306e\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3057\u3066\u3044\u308b\u306e\u304b\u30fb\u8cfc\u8aad\u3057\u3066\u3088\u3044\u306e\u304b\u3092\u7ba1\u7406\u3057\u305f\u3044\u5834\u5408\u306f\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u5074\u3067\u5b9f\u88c5\u3059\u308b\u3053\u3068\u306b\u306a\u308b\u3067\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u5074\u304b\u3089\u6307\u5b9a\u3057\u305f\u7aef\u672b\u306b\u6307\u5b9a\u3057\u305f\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3055\u305b\u308b\u5834\u5408\u306e\u30b3\u30fc\u30c9\u4f8b\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.google.auth.oauth2.GoogleCredentials;\nimport com.google.firebase.FirebaseApp;\nimport com.google.firebase.FirebaseOptions;\nimport com.google.firebase.messaging.FirebaseMessaging;\nimport com.google.firebase.messaging.FirebaseMessagingException;\n\nimport java.util.Arrays;\n\nString token = "<your_registration_token>";\nString topic = "<your_topic_name>";\n\n// Initialize Firebase Admin SDK\nGoogleCredentials credentials = GoogleCredentials.getApplicationDefault();\nFirebaseOptions options = FirebaseOptions.builder().setCredentials(credentials).build();\nFirebaseApp.initializeApp(options);\n\n// Subscribe to topic.\ntry {\n    TopicManagementResponse response = FirebaseMessaging.getInstance()\n            .subscribeToTopic(Arrays.asList(token), topic);\n} catch (FirebaseMessagingException e) {\n    // Error Handling\n}\n')),(0,r.kt)("p",null,"\u8a31\u5bb9\u3055\u308c\u308b\u30c8\u30d4\u30c3\u30af\u540d\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"[a-zA-Z0-9-_.~%]{1,900}"),"\u306e\u7bc4\u56f2\u306b\u306a\u308a\u307e\u3059\u3002\n\u5b58\u5728\u3057\u306a\u3044\u30c8\u30d4\u30c3\u30af\u540d\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306f\u3001\u81ea\u52d5\u7684\u306b\u305d\u306e\u30c8\u30d4\u30c3\u30af\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u6307\u5b9a\u3057\u305f\u30c8\u30d4\u30c3\u30af\u306e\u8cfc\u8aad\u89e3\u9664"},"\u6307\u5b9a\u3057\u305f\u30c8\u30d4\u30c3\u30af\u306e\u8cfc\u8aad\u89e3\u9664"),(0,r.kt)("p",null,"\u30c8\u30d4\u30c3\u30af\u306e\u8cfc\u8aad\u89e3\u9664\u3082\u3001\u8cfc\u8aad\u6642\u306e\u6d41\u308c\u3068\u307b\u307c\u540c\u69d8\u3067\u3059\u3002\n\u30b3\u30fc\u30c9\u4f8b\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.google.auth.oauth2.GoogleCredentials;\nimport com.google.firebase.FirebaseApp;\nimport com.google.firebase.FirebaseOptions;\nimport com.google.firebase.messaging.FirebaseMessaging;\nimport com.google.firebase.messaging.FirebaseMessagingException;\n\nimport java.util.Arrays;\n\nString token = "<your_registration_token>";\nString topic = "<your_topic_name>";\n\n// Initialize Firebase Admin SDK\nGoogleCredentials credentials = GoogleCredentials.getApplicationDefault();\nFirebaseOptions options = FirebaseOptions.builder().setCredentials(credentials).build();\nFirebaseApp.initializeApp(options);\n\n// Unsubscribe to topic.\ntry {\n    TopicManagementResponse response = FirebaseMessaging.getInstance()\n            .unsubscribeFromTopic(Arrays.asList(token), topic);\n} catch (FirebaseMessagingException e) {\n    // Error Handling\n}\n')),(0,r.kt)("h3",{id:"\u305d\u306e\u4ed6\u306e\u6a5f\u80fd"},"\u305d\u306e\u4ed6\u306e\u6a5f\u80fd"),(0,r.kt)("p",null,"\u4eca\u56de\u306e\u30ac\u30a4\u30c9\u3067\u306f\u89e6\u308c\u307e\u305b\u3093\u3067\u3057\u305f\u304c\u3001Firebase Cloud Messaging\u3067\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u6a5f\u80fd\u3082\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u6c17\u306b\u306a\u308b\u65b9\u306f",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/cloud-messaging/send-message"},"\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6700\u5927500\u53f0\u306b\u540c\u4e00\u306e\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u3092\u9001\u4fe1\u3059\u308b\u30de\u30eb\u30c1\u30ad\u30e3\u30b9\u30c8\u9001\u4fe1\u6a5f\u80fd"),(0,r.kt)("li",{parentName:"ul"},"\u6700\u5927500\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u4e00\u5ea6\u306b\u9001\u4fe1\u3059\u308b\u30d0\u30c3\u30c1\u9001\u4fe1\u6a5f\u80fd"),(0,r.kt)("li",{parentName:"ul"},"\u30c7\u30d0\u30a4\u30b9\u30b0\u30eb\u30fc\u30d7\u3092\u4f5c\u6210\u3057\u3001\u6307\u5b9a\u3057\u305f\u30c7\u30d0\u30a4\u30b9\u30b0\u30eb\u30fc\u30d7\u5b9b\u306b\u30ea\u30e2\u30fc\u30c8\u901a\u77e5\u3092\u9001\u4fe1\u3059\u308b\u6a5f\u80fd")))}g.isMDXComponent=!0}}]);