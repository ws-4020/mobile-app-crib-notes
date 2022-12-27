"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),v=a,d=m["".concat(l,".").concat(v)]||m[v]||u[v]||i;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=v;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},26201:(e,t,n)=>{n.d(t,{L:()=>d});var r=n(87462),a=n(39960),i=n(44996),c=n(86010),o=n(67294);const l={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},s=e=>{let{children:t,colSize:n=4,...s}=e;const p=(0,i.Z)(s.to);return o.createElement("div",{className:(0,c.Z)("col",`col--${n}`,l.pageOverviewContainer)},o.createElement(a.Z,(0,r.Z)({className:(0,c.Z)("card",l.pageOverviewLinkCard)},s,{to:p}),t))},p=e=>{let{title:t}=e;return o.createElement("div",{className:(0,c.Z)("card__header",l.pageOverviewTitle)},o.createElement("h3",null,t))},m=e=>{let{src:t,alt:n,...a}=e;const s=(0,i.Z)(t);return o.createElement("div",{className:(0,c.Z)("card__image")},o.createElement("img",(0,r.Z)({className:l.pageOverviewImage},a,{alt:n,src:s})))},u=e=>{let{summary:t}=e;return o.createElement("div",{className:(0,c.Z)("card__body",l.pageOverviewSummary)},o.createElement("p",null,t))},v=e=>{let{title:t,imageUrl:n,summary:r,...a}=e;return o.createElement(s,a,o.createElement(p,{title:`${t} \xbb`}),n&&o.createElement(m,{src:n,alt:t}),r&&o.createElement(u,{summary:r}))},d=e=>{let{overviews:t,colSize:n}=e;return o.createElement("section",{className:(0,c.Z)(l.pageList)},o.createElement("div",{className:(0,c.Z)("container")},o.createElement("div",{className:(0,c.Z)("row",l.pageListRow)},t.map((e=>o.createElement(v,(0,r.Z)({key:e.to,colSize:n},e)))))))}},11331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>v,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),i=n(26201);const c={title:"Maintenance",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},o=void 0,l={unversionedId:"react-native/santoku/maintenance",id:"react-native/santoku/maintenance",title:"Maintenance",description:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u304c\u6700\u65b0\u306e\u30e2\u30d0\u30a4\u30eb\u7aef\u672b\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u78ba\u4fdd\u3057\u306a\u304c\u3089\u30b5\u30fc\u30d3\u30b9\u3092\u7d99\u7d9a\u3059\u308b\u305f\u3081\u306b\u306f\u9069\u5207\u306a\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u304c\u5fc5\u8981\u3067\u3059\u3002",source:"@site/docs/react-native/santoku/maintenance.mdx",sourceDirName:"react-native/santoku",slug:"/react-native/santoku/maintenance",permalink:"/mobile-app-crib-notes/react-native/santoku/maintenance",draft:!1,tags:[],version:"current",lastUpdatedAt:1666920953,formattedLastUpdatedAt:"2022\u5e7410\u670828\u65e5",frontMatter:{title:"Maintenance",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},sidebar:"santoku",previous:{title:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u7ba1\u7406",permalink:"/mobile-app-crib-notes/react-native/santoku/development/dependency-management"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/maintenance/enhance"}},s={},p=[{title:"\u30a8\u30f3\u30cf\u30f3\u30b9",to:"/react-native/santoku/maintenance/enhance"}],m=[],u={toc:m};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u304c\u6700\u65b0\u306e\u30e2\u30d0\u30a4\u30eb\u7aef\u672b\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u78ba\u4fdd\u3057\u306a\u304c\u3089\u30b5\u30fc\u30d3\u30b9\u3092\u7d99\u7d9a\u3059\u308b\u305f\u3081\u306b\u306f\u9069\u5207\u306a\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u304c\u5fc5\u8981\u3067\u3059\u3002\n\u3053\u3053\u3067\u306f\u3001\u3053\u306e\u30a2\u30d7\u30ea\u3092\u4f8b\u306b\u958b\u767a\u73fe\u5834\u3067\u5f79\u7acb\u3064\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u60c5\u5831\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,a.kt)(i.L,{overviews:p,colSize:12,mdxType:"PageList"}))}v.isMDXComponent=!0}}]);