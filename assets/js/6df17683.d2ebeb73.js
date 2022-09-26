"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2193],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),v=s(r),u=n,d=v["".concat(o,".").concat(u)]||v[u]||m[u]||i;return r?a.createElement(d,l(l({ref:t},p),{},{components:r})):a.createElement(d,l({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=v;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},26201:(e,t,r)=>{r.d(t,{L:()=>d});var a=r(87462),n=r(39960),i=r(44996),l=r(86010),c=r(67294);const o={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},s=e=>{let{children:t,colSize:r=4,...s}=e;const p=(0,i.Z)(s.to);return c.createElement("div",{className:(0,l.Z)("col",`col--${r}`,o.pageOverviewContainer)},c.createElement(n.Z,(0,a.Z)({className:(0,l.Z)("card",o.pageOverviewLinkCard)},s,{to:p}),t))},p=e=>{let{title:t}=e;return c.createElement("div",{className:(0,l.Z)("card__header",o.pageOverviewTitle)},c.createElement("h3",null,t))},m=e=>{let{src:t,alt:r,...n}=e;const s=(0,i.Z)(t);return c.createElement("div",{className:(0,l.Z)("card__image")},c.createElement("img",(0,a.Z)({className:o.pageOverviewImage},n,{alt:r,src:s})))},v=e=>{let{summary:t}=e;return c.createElement("div",{className:(0,l.Z)("card__body",o.pageOverviewSummary)},c.createElement("p",null,t))},u=e=>{let{title:t,imageUrl:r,summary:a,...n}=e;return c.createElement(s,n,c.createElement(p,{title:`${t} \xbb`}),r&&c.createElement(m,{src:r,alt:t}),a&&c.createElement(v,{summary:a}))},d=e=>{let{overviews:t,colSize:r}=e;return c.createElement("section",{className:(0,l.Z)(o.pageList)},c.createElement("div",{className:(0,l.Z)("container")},c.createElement("div",{className:(0,l.Z)("row",o.pageListRow)},t.map((e=>c.createElement(u,(0,a.Z)({key:e.to,colSize:r},e)))))))}},53894:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>v});var a=r(87462),n=r(67294),i=r(3905),l=r(26201);const c={title:"Getting Started",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},o=void 0,s={unversionedId:"react-native/learn/getting-started",id:"react-native/learn/getting-started",title:"Getting Started",description:"React Native\u3067\u306e\u30a2\u30d7\u30ea\u958b\u767a\u306b\u5fc5\u8981\u306a\u74b0\u5883\u3092\u7528\u610f\u3057\u3001\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3067\u304d\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/getting-started.mdx",sourceDirName:"react-native/learn",slug:"/react-native/learn/getting-started",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started",draft:!1,tags:[],version:"current",lastUpdatedAt:1632798153,formattedLastUpdatedAt:"2021\u5e749\u670828\u65e5",frontMatter:{title:"Getting Started",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},sidebar:"learn",previous:{title:"\u306f\u3058\u3081\u306b",permalink:"/mobile-app-crib-notes/react-native/learn"},next:{title:"\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started/setting-up-development-environment"}},p={},m=[{title:"\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9",summary:(0,i.kt)(n.Fragment,null,"React Native\u3067\u306e\u30a2\u30d7\u30ea\u958b\u767a\u306b\u5fc5\u8981\u306a\u30c4\u30fc\u30eb\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),to:"/react-native/learn/getting-started/setting-up-development-environment"},{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",summary:(0,i.kt)(n.Fragment,null,"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304b\u3089React Native\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),to:"/react-native/learn/getting-started/create-project"},{title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c",summary:(0,i.kt)(n.Fragment,null,"React Native\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304b\u3089\u3001\u3044\u304f\u3064\u304b\u306e\u65b9\u6cd5\u3067\u30a2\u30d7\u30ea\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),to:"/react-native/learn/getting-started/launch-created-app"}],v=[],u={toc:v};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"React Native\u3067\u306e\u30a2\u30d7\u30ea\u958b\u767a\u306b\u5fc5\u8981\u306a\u74b0\u5883\u3092\u7528\u610f\u3057\u3001\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3067\u304d\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,i.kt)(l.L,{overviews:m,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0}}]);