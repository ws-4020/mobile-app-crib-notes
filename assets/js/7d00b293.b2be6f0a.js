"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8716],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,d=m["".concat(o,".").concat(u)]||m[u]||v[u]||i;return a?r.createElement(d,c(c({ref:t},p),{},{components:a})):r.createElement(d,c({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:n,c[1]=l;for(var s=2;s<i;s++)c[s]=a[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26201:(e,t,a)=>{a.d(t,{L:()=>d});var r=a(87462),n=a(39960),i=a(44996),c=a(86010),l=a(67294);const o={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},s=e=>{let{children:t,colSize:a=4,...s}=e;const p=(0,i.Z)(s.to);return l.createElement("div",{className:(0,c.Z)("col",`col--${a}`,o.pageOverviewContainer)},l.createElement(n.Z,(0,r.Z)({className:(0,c.Z)("card",o.pageOverviewLinkCard)},s,{to:p}),t))},p=e=>{let{title:t}=e;return l.createElement("div",{className:(0,c.Z)("card__header",o.pageOverviewTitle)},l.createElement("h3",null,t))},m=e=>{let{src:t,alt:a,...n}=e;const s=(0,i.Z)(t);return l.createElement("div",{className:(0,c.Z)("card__image")},l.createElement("img",(0,r.Z)({className:o.pageOverviewImage},n,{alt:a,src:s})))},v=e=>{let{summary:t}=e;return l.createElement("div",{className:(0,c.Z)("card__body",o.pageOverviewSummary)},l.createElement("p",null,t))},u=e=>{let{title:t,imageUrl:a,summary:r,...n}=e;return l.createElement(s,n,l.createElement(p,{title:`${t} \xbb`}),a&&l.createElement(m,{src:a,alt:t}),r&&l.createElement(v,{summary:r}))},d=e=>{let{overviews:t,colSize:a}=e;return l.createElement("section",{className:(0,c.Z)(o.pageList)},l.createElement("div",{className:(0,c.Z)("container")},l.createElement("div",{className:(0,c.Z)("row",o.pageListRow)},t.map((e=>l.createElement(u,(0,r.Z)({key:e.to,colSize:a},e)))))))}},48646:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>v});var r=a(87462),n=a(67294),i=a(3905),c=a(26201);const l={title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u524d\u306b",sidebar_label:"\u76ee\u6b21",pagination_label:"\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u524d\u306b - \u76ee\u6b21",hide_table_of_contents:!0},o=void 0,s={unversionedId:"react-native/learn/basic-concepts",id:"react-native/learn/basic-concepts",title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u524d\u306b",description:"\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3059\u308b\u524d\u306b\u5fc5\u8981\u3068\u306a\u308b\u524d\u63d0\u77e5\u8b58\u3092\u78ba\u8a8d\u3057\u305f\u5f8c\u3001React Native\u306e\u57fa\u672c\u3001React Navigation\u306e\u57fa\u672c\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts.mdx",sourceDirName:"react-native/learn",slug:"/react-native/learn/basic-concepts",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts",draft:!1,tags:[],version:"current",lastUpdatedAt:1681450141,formattedLastUpdatedAt:"2023\u5e744\u670814\u65e5",frontMatter:{title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u524d\u306b",sidebar_label:"\u76ee\u6b21",pagination_label:"\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u524d\u306b - \u76ee\u6b21",hide_table_of_contents:!0},sidebar:"learn",previous:{title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started/launch-created-app"},next:{title:"\u524d\u63d0\u77e5\u8b58",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/pre-requisites"}},p={},m=[{title:"\u524d\u63d0\u77e5\u8b58",summary:(0,i.kt)(n.Fragment,null,"\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3059\u308b\u524d\u306b\u5fc5\u8981\u3068\u306a\u308b\u524d\u63d0\u77e5\u8b58\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),to:"/react-native/learn/basic-concepts/pre-requisites"},{title:"React Native\u306e\u57fa\u672c",summary:(0,i.kt)(n.Fragment,null,"React Native\u306e\u57fa\u672c\u77e5\u8b58\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002"),to:"/react-native/learn/basic-concepts/react-native-basics"},{title:"React Navigation\u306e\u57fa\u672c",summary:(0,i.kt)(n.Fragment,null,"React Navigation\u306e\u57fa\u672c\u77e5\u8b58\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002"),to:"/react-native/learn/basic-concepts/react-navigation-basics"}],v=[],u={toc:v},d="wrapper";function b(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3059\u308b\u524d\u306b\u5fc5\u8981\u3068\u306a\u308b\u524d\u63d0\u77e5\u8b58\u3092\u78ba\u8a8d\u3057\u305f\u5f8c\u3001React Native\u306e\u57fa\u672c\u3001React Navigation\u306e\u57fa\u672c\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002"),(0,i.kt)(c.L,{overviews:m,colSize:12,mdxType:"PageList"}))}b.isMDXComponent=!0}}]);