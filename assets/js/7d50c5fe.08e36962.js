"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[464],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,d=m["".concat(o,".").concat(u)]||m[u]||v[u]||i;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26201:(e,t,r)=>{r.d(t,{L:()=>d});var n=r(87462),a=r(39960),i=r(44996),s=r(86010),c=r(67294);const o={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},l=e=>{let{children:t,colSize:r=4,...l}=e;const p=(0,i.Z)(l.to);return c.createElement("div",{className:(0,s.Z)("col",`col--${r}`,o.pageOverviewContainer)},c.createElement(a.Z,(0,n.Z)({className:(0,s.Z)("card",o.pageOverviewLinkCard)},l,{to:p}),t))},p=e=>{let{title:t}=e;return c.createElement("div",{className:(0,s.Z)("card__header",o.pageOverviewTitle)},c.createElement("h3",null,t))},v=e=>{let{src:t,alt:r,...a}=e;const l=(0,i.Z)(t);return c.createElement("div",{className:(0,s.Z)("card__image")},c.createElement("img",(0,n.Z)({className:o.pageOverviewImage},a,{alt:r,src:l})))},m=e=>{let{summary:t}=e;return c.createElement("div",{className:(0,s.Z)("card__body",o.pageOverviewSummary)},c.createElement("p",null,t))},u=e=>{let{title:t,imageUrl:r,summary:n,...a}=e;return c.createElement(l,a,c.createElement(p,{title:`${t} \xbb`}),r&&c.createElement(v,{src:r,alt:t}),n&&c.createElement(m,{summary:n}))},d=e=>{let{overviews:t,colSize:r}=e;return c.createElement("section",{className:(0,s.Z)(o.pageList)},c.createElement("div",{className:(0,s.Z)("container")},c.createElement("div",{className:(0,s.Z)("row",o.pageListRow)},t.map((e=>c.createElement(u,(0,n.Z)({key:e.to,colSize:r},e)))))))}},65928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>v});var n=r(87462),a=(r(67294),r(3905)),i=r(26201);const s={title:"\u753b\u9762\u7a2e\u5225\u306e\u5b9a\u7fa9",sidebar_label:"\u6982\u8981"},c=void 0,o={unversionedId:"react-native/santoku/design/screen-specs/definitions/screen-type/overview",id:"react-native/santoku/design/screen-specs/definitions/screen-type/overview",title:"\u753b\u9762\u7a2e\u5225\u306e\u5b9a\u7fa9",description:"\u753b\u9762\u4ed5\u69d8\u5185\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u753b\u9762\u306e\u7a2e\u5225\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/design/screen-specs/definitions/screen-type/overview.mdx",sourceDirName:"react-native/santoku/design/screen-specs/definitions/screen-type",slug:"/react-native/santoku/design/screen-specs/definitions/screen-type/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/design/screen-specs/definitions/screen-type/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1638787362,formattedLastUpdatedAt:"2021\u5e7412\u67086\u65e5",frontMatter:{title:"\u753b\u9762\u7a2e\u5225\u306e\u5b9a\u7fa9",sidebar_label:"\u6982\u8981"},sidebar:"santoku",previous:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/design/screen-specs/definitions/overview"},next:{title:"Screen",permalink:"/mobile-app-crib-notes/react-native/santoku/design/screen-specs/definitions/screen-type/screen"}},l={},p=[{title:"Screen",to:"/react-native/santoku/design/screen-specs/definitions/screen-type/screen"},{title:"FormSheet",to:"/react-native/santoku/design/screen-specs/definitions/screen-type/form-sheet"},{title:"Overlay",to:"/react-native/santoku/design/screen-specs/definitions/screen-type/overlay"}],v=[],m={toc:v};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u753b\u9762\u4ed5\u69d8\u5185\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u753b\u9762\u306e\u7a2e\u5225\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"),(0,a.kt)(i.L,{overviews:p,colSize:12,mdxType:"PageList"}))}u.isMDXComponent=!0}}]);