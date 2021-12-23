"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[9699],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),v=l(n),u=r,d=v["".concat(s,".").concat(u)]||v[u]||m[u]||i;return n?a.createElement(d,c(c({ref:t},p),{},{components:n})):a.createElement(d,c({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=v;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},26201:function(e,t,n){n.d(t,{L:function(){return h}});var a=n(87462),r=n(63366),i=n(39960),c=n(44996),o=n(86010),s=n(67294),l={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},p=["children","colSize"],m=["src","alt"],v=["title","imageUrl","summary"],u=function(e){var t=e.children,n=e.colSize,m=void 0===n?4:n,v=(0,r.Z)(e,p),u=(0,c.Z)(v.to);return s.createElement("div",{className:(0,o.Z)("col","col--"+m,l.pageOverviewContainer)},s.createElement(i.Z,(0,a.Z)({className:(0,o.Z)("card",l.pageOverviewLinkCard)},v,{to:u}),t))},d=function(e){var t=e.title;return s.createElement("div",{className:(0,o.Z)("card__header",l.pageOverviewTitle)},s.createElement("h3",null,t))},b=function(e){var t=e.src,n=e.alt,i=(0,r.Z)(e,m),p=(0,c.Z)(t);return s.createElement("div",{className:(0,o.Z)("card__image")},s.createElement("img",(0,a.Z)({className:l.pageOverviewImage},i,{alt:n,src:p})))},f=function(e){var t=e.summary;return s.createElement("div",{className:(0,o.Z)("card__body",l.pageOverviewSummary)},s.createElement("p",null,t))},g=function(e){var t=e.title,n=e.imageUrl,a=e.summary,i=(0,r.Z)(e,v);return s.createElement(u,i,s.createElement(d,{title:t+" \xbb"}),n&&s.createElement(b,{src:n,alt:t}),a&&s.createElement(f,{summary:a}))},h=function(e){var t=e.overviews,n=e.colSize;return s.createElement("section",{className:(0,o.Z)(l.pageList)},s.createElement("div",{className:(0,o.Z)("container")},s.createElement("div",{className:(0,o.Z)("row",l.pageListRow)},t.map((function(e){return s.createElement(g,(0,a.Z)({key:e.to,colSize:n},e))})))))}},8165:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return v},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),c=n(26201),o=["components"],s={title:"Components",sidebar_label:"\u6982\u8981"},l=void 0,p={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components",id:"react-native/learn/basic-concepts/react-native-basics/components",title:"Components",description:"\u3053\u3053\u304b\u3089\u306f\u3001\u4e3b\u306b\u958b\u767a\u3067\u3088\u304f\u4f7f\u308f\u308c\u308b\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics",slug:"/react-native/learn/basic-concepts/react-native-basics/components",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components",tags:[],version:"current",lastUpdatedAt:1632798153,formattedLastUpdatedAt:"2021/9/28",frontMatter:{title:"Components",sidebar_label:"\u6982\u8981"},sidebar:"learn",previous:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics"},next:{title:"View",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/view"}},m=[{title:"View",to:"react-native/learn/basic-concepts/react-native-basics/components/view"},{title:"Text",to:"react-native/learn/basic-concepts/react-native-basics/components/text"},{title:"Button",to:"react-native/learn/basic-concepts/react-native-basics/components/button"},{title:"TouchableOpacity",to:"react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity"},{title:"Image",to:"react-native/learn/basic-concepts/react-native-basics/components/image"},{title:"ScrollView",to:"react-native/learn/basic-concepts/react-native-basics/components/scroll-view"},{title:"Lists",to:"react-native/learn/basic-concepts/react-native-basics/components/lists"}],v=[{value:"\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",id:"\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",children:[],level:2},{value:"React Native Elements",id:"react-native-elements",children:[],level:2}],u={toc:v};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u3053\u3053\u304b\u3089\u306f\u3001\u4e3b\u306b\u958b\u767a\u3067\u3088\u304f\u4f7f\u308f\u308c\u308b\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u7d39\u4ecb\u30da\u30fc\u30b8\u306b\u3042\u308b\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306f\u3001\u3059\u3079\u3066RN Spoiler\u304b\u3089\u4f5c\u6210\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e ",(0,i.kt)("inlineCode",{parentName:"p"},"App.tsx")," \u30d5\u30a1\u30a4\u30eb\u306b\u5f35\u308a\u4ed8\u3051\u308b\u3060\u3051\u3067\u52d5\u4f5c\u3057\u307e\u3059\u3002\n\u624b\u5143\u306e\u74b0\u5883\u3067\u5b9f\u969b\u306b\u52d5\u4f5c\u3055\u305b\u3066\u307f\u3066\u3001\u52d5\u304d\u306e\u30a4\u30e1\u30fc\u30b8\u3092\u63b4\u3093\u3067\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("h2",{id:"\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"},"\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"),(0,i.kt)(c.L,{overviews:m,colSize:12,mdxType:"PageList"}),(0,i.kt)("h2",{id:"react-native-elements"},(0,i.kt)("a",{parentName:"h2",href:"https://reactnativeelements.com/"},"React Native Elements")),(0,i.kt)("p",null,"React Native Elements\u306f\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u304c\u30b5\u30dd\u30fc\u30c8\u3059\u308bReact Native\u306eUI\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002\nReact Native\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u3057\u3066\u975e\u5e38\u306b\u4eba\u6c17\u304c\u9ad8\u304f\u3001\u8868\u73fe\u529b\u8c4a\u304b\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u63c3\u3063\u3066\u3044\u307e\u3059\u3002\n\u3069\u306e\u3088\u3046\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u308b\u306f\u6b21\u306e\u30b5\u30a4\u30c8\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://reactnativeelements.com/docs/overview"},"https://reactnativeelements.com/docs/overview")),(0,i.kt)("p",null,"RN Spoiler\u304b\u3089\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u305f\u5834\u5408\u3001\u3053\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u5165\u3063\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"React Native Elements\u4ee5\u5916\u306b\u3082\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u304c\u30b5\u30dd\u30fc\u30c8\u3059\u308bReact Native\u306eUI\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u591a\u6570\u5b58\u5728\u3057\u307e\u3059\u3002\n\u4f8b\u3048\u3070\u3001",(0,i.kt)("a",{parentName:"p",href:"https://nativebase.io/"},"NativeBase"),"\u3082React Native Elements\u306b\u4e26\u3093\u3067\u6709\u540d\u306a\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://docs.nativebase.io/Components.html#Components"},"https://docs.nativebase.io/Components.html#Components")),(0,i.kt)("p",{parentName:"div"},"\u305d\u306e\u4ed6\u306b\u3082\u69d8\u3005\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u304b\u3089\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-community"},"https://github.com/react-native-community")),(0,i.kt)("p",{parentName:"div"},"\u30a2\u30d7\u30ea\u306b\u6b32\u3057\u3044\u90e8\u54c1\u304c\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3084React Native Elements\u306b\u898b\u3064\u304b\u3089\u306a\u3044\u5834\u5408\u3001\u4ed6\u306eUI\u30e9\u30a4\u30d6\u30e9\u30ea\u3082\u63a2\u3057\u3066\u307f\u308b\u3068\u3044\u3044\u3067\u3057\u3087\u3046\u3002"))))}d.isMDXComponent=!0}}]);