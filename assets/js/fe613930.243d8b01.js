"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1065],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),v=a,d=m["".concat(l,".").concat(v)]||m[v]||u[v]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=v;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},26201:(e,t,r)=>{r.d(t,{L:()=>d});var n=r(87462),a=r(39960),i=r(44996),o=r(86010),c=r(67294);const l={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},s=e=>{let{children:t,colSize:r=4,...s}=e;const p=(0,i.Z)(s.to);return c.createElement("div",{className:(0,o.Z)("col",`col--${r}`,l.pageOverviewContainer)},c.createElement(a.Z,(0,n.Z)({className:(0,o.Z)("card",l.pageOverviewLinkCard)},s,{to:p}),t))},p=e=>{let{title:t}=e;return c.createElement("div",{className:(0,o.Z)("card__header",l.pageOverviewTitle)},c.createElement("h3",null,t))},m=e=>{let{src:t,alt:r,...a}=e;const s=(0,i.Z)(t);return c.createElement("div",{className:(0,o.Z)("card__image")},c.createElement("img",(0,n.Z)({className:l.pageOverviewImage},a,{alt:r,src:s})))},u=e=>{let{summary:t}=e;return c.createElement("div",{className:(0,o.Z)("card__body",l.pageOverviewSummary)},c.createElement("p",null,t))},v=e=>{let{title:t,imageUrl:r,summary:n,...a}=e;return c.createElement(s,a,c.createElement(p,{title:`${t} \xbb`}),r&&c.createElement(m,{src:r,alt:t}),n&&c.createElement(u,{summary:n}))},d=e=>{let{overviews:t,colSize:r}=e;return c.createElement("section",{className:(0,o.Z)(l.pageList)},c.createElement("div",{className:(0,o.Z)("container")},c.createElement("div",{className:(0,o.Z)("row",l.pageListRow)},t.map((e=>c.createElement(v,(0,n.Z)({key:e.to,colSize:r},e)))))))}},52239:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>v,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),i=r(26201);const o={title:"Requirements",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},c=void 0,l={unversionedId:"react-native/santoku/requirements",id:"react-native/santoku/requirements",title:"Requirements",description:"\u3053\u306e\u30a2\u30d7\u30ea\u306f\u3001\u958b\u767a\u73fe\u5834\u3067\u5f79\u7acb\u3064\u5b9f\u88c5\u4f8b\u3092\u63d0\u4f9b\u3059\u308b\u305f\u3081\u3001\u3044\u304f\u3064\u304b\u306e\u6a5f\u80fd\u3092\u5099\u3048\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/requirements.mdx",sourceDirName:"react-native/santoku",slug:"/react-native/santoku/requirements",permalink:"/mobile-app-crib-notes/react-native/santoku/requirements",draft:!1,tags:[],version:"current",lastUpdatedAt:1662716664,formattedLastUpdatedAt:"2022\u5e749\u67089\u65e5",frontMatter:{title:"Requirements",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},sidebar:"santoku",previous:{title:"\u306f\u3058\u3081\u306b",permalink:"/mobile-app-crib-notes/react-native/santoku"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/requirements/functional/overview"}},s={},p=[{title:"\u6a5f\u80fd\u8981\u4ef6",to:"/react-native/santoku/requirements/functional/overview"},{title:"\u975e\u6a5f\u80fd\u8981\u4ef6",to:"/react-native/santoku/requirements/non-functional/overview"}],m=[],u={toc:m};function v(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u306f\u3001\u958b\u767a\u73fe\u5834\u3067\u5f79\u7acb\u3064\u5b9f\u88c5\u4f8b\u3092\u63d0\u4f9b\u3059\u308b\u305f\u3081\u3001\u3044\u304f\u3064\u304b\u306e\u6a5f\u80fd\u3092\u5099\u3048\u3066\u3044\u307e\u3059\u3002\n\u4ee5\u4e0b\u306b\u30a2\u30d7\u30ea\u306e\u6a5f\u80fd\u8981\u4ef6\u3068\u975e\u6a5f\u80fd\u8981\u4ef6\u3092\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,a.kt)(i.L,{overviews:p,colSize:12,mdxType:"PageList"}))}v.isMDXComponent=!0}}]);