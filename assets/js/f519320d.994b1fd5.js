"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[401],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),v=s(r),u=n,d=v["".concat(o,".").concat(u)]||v[u]||m[u]||i;return r?a.createElement(d,l(l({ref:t},p),{},{components:r})):a.createElement(d,l({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=v;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},26201:(e,t,r)=>{r.d(t,{L:()=>d});var a=r(87462),n=r(39960),i=r(44996),l=r(86010),c=r(67294);const o={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},s=e=>{let{children:t,colSize:r=4,...s}=e;const p=(0,i.Z)(s.to);return c.createElement("div",{className:(0,l.Z)("col",`col--${r}`,o.pageOverviewContainer)},c.createElement(n.Z,(0,a.Z)({className:(0,l.Z)("card",o.pageOverviewLinkCard)},s,{to:p}),t))},p=e=>{let{title:t}=e;return c.createElement("div",{className:(0,l.Z)("card__header",o.pageOverviewTitle)},c.createElement("h3",null,t))},m=e=>{let{src:t,alt:r,...n}=e;const s=(0,i.Z)(t);return c.createElement("div",{className:(0,l.Z)("card__image")},c.createElement("img",(0,a.Z)({className:o.pageOverviewImage},n,{alt:r,src:s})))},v=e=>{let{summary:t}=e;return c.createElement("div",{className:(0,l.Z)("card__body",o.pageOverviewSummary)},c.createElement("p",null,t))},u=e=>{let{title:t,imageUrl:r,summary:a,...n}=e;return c.createElement(s,n,c.createElement(p,{title:`${t} \xbb`}),r&&c.createElement(m,{src:r,alt:t}),a&&c.createElement(v,{summary:a}))},d=e=>{let{overviews:t,colSize:r}=e;return c.createElement("section",{className:(0,l.Z)(o.pageList)},c.createElement("div",{className:(0,l.Z)("container")},c.createElement("div",{className:(0,l.Z)("row",o.pageListRow)},t.map((e=>c.createElement(u,(0,a.Z)({key:e.to,colSize:r},e)))))))}},4380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>v});var a=r(87462),n=r(67294),i=r(3905),l=r(26201);const c={title:"React Native\u306e\u5b66\u7fd2",hide_table_of_contents:!0,sidebar_label:"\u306f\u3058\u3081\u306b"},o=void 0,s={unversionedId:"react-native/learn",id:"react-native/learn",title:"React Native\u306e\u5b66\u7fd2",description:"\u3053\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306fReact Native\u3067\u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u3092\u5b66\u7fd2\u3059\u308b\u305f\u3081\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u3059\u3002",source:"@site/docs/react-native/learn.md",sourceDirName:"react-native",slug:"/react-native/learn",permalink:"/mobile-app-crib-notes/react-native/learn",draft:!1,tags:[],version:"current",lastUpdatedAt:1632798153,formattedLastUpdatedAt:"2021\u5e749\u670828\u65e5",frontMatter:{title:"React Native\u306e\u5b66\u7fd2",hide_table_of_contents:!0,sidebar_label:"\u306f\u3058\u3081\u306b"},sidebar:"learn",next:{title:"\u76ee\u6b21",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started"}},p={},m=[{title:"Getting Started",to:"/react-native/learn/getting-started",summary:(0,i.kt)(n.Fragment,null,"React Native\u3067\u306e\u30a2\u30d7\u30ea\u958b\u767a\u306b\u5fc5\u8981\u306a\u74b0\u5883\u3092\u7528\u610f\u3057\u307e\u3059\u3002")},{title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u524d\u306b",to:"/react-native/learn/basic-concepts",summary:(0,i.kt)(n.Fragment,null,"React Native\u3067\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3057\u59cb\u3081\u308b\u524d\u306b\u6700\u4f4e\u9650\u5fc5\u8981\u3068\u306a\u308b\u524d\u63d0\u77e5\u8b58\u3084\u3001React Native\u3068React Navigation\u306e\u57fa\u672c\u7684\u306a\u77e5\u8b58\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002")},{title:"ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5",to:"/react-native/learn/todo-app",summary:(0,i.kt)(n.Fragment,null,"React Native\u3067\u7c21\u5358\u306aToDo\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002")}],v=[],u={toc:v};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u3053\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306fReact Native\u3067\u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u3092\u5b66\u7fd2\u3059\u308b\u305f\u3081\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u3059\u3002"),(0,i.kt)("p",null,"React\u3067Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u88c5\u3067\u304d\u308b\u304cReact Native\u3067\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u88c5\u3057\u305f\u3053\u3068\u304c\u306a\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u8005\u3092\u5bfe\u8c61\u3068\u3057\u3066\u3001\u6b21\u306e\u3053\u3068\u306b\u3064\u3044\u3066\u5b66\u3076\u3053\u3068\u3092\u76ee\u7684\u3068\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"React\u3068React Native\u306e\u9055\u3044"),(0,i.kt)("li",{parentName:"ul"},"React Native\u3067\u4f5c\u6210\u3057\u305f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u52d5\u4f5c\u78ba\u8a8d\u65b9\u6cd5")),(0,i.kt)("p",null,"\u307e\u305f\u3001\u4f5c\u6210\u3057\u305f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u914d\u5e03\u65b9\u6cd5\u3084\u30c6\u30b9\u30c8\u624b\u6cd5\u306b\u3064\u3044\u3066\u306f\u3053\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u306f\u89e6\u308c\u307e\u305b\u3093\u3002"),(0,i.kt)(l.L,{overviews:m,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0}}]);