"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2367],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),v=a,d=m["".concat(c,".").concat(v)]||m[v]||u[v]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},26201:(e,t,r)=>{r.d(t,{L:()=>d});var n=r(87462),a=r(39960),o=r(44996),i=r(86010),l=r(67294);const c={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},s=e=>{let{children:t,colSize:r=4,...s}=e;const p=(0,o.Z)(s.to);return l.createElement("div",{className:(0,i.Z)("col",`col--${r}`,c.pageOverviewContainer)},l.createElement(a.Z,(0,n.Z)({className:(0,i.Z)("card",c.pageOverviewLinkCard)},s,{to:p}),t))},p=e=>{let{title:t}=e;return l.createElement("div",{className:(0,i.Z)("card__header",c.pageOverviewTitle)},l.createElement("h3",null,t))},m=e=>{let{src:t,alt:r,...a}=e;const s=(0,o.Z)(t);return l.createElement("div",{className:(0,i.Z)("card__image")},l.createElement("img",(0,n.Z)({className:c.pageOverviewImage},a,{alt:r,src:s})))},u=e=>{let{summary:t}=e;return l.createElement("div",{className:(0,i.Z)("card__body",c.pageOverviewSummary)},l.createElement("p",null,t))},v=e=>{let{title:t,imageUrl:r,summary:n,...a}=e;return l.createElement(s,a,l.createElement(p,{title:`${t} \xbb`}),r&&l.createElement(m,{src:r,alt:t}),n&&l.createElement(u,{summary:n}))},d=e=>{let{overviews:t,colSize:r}=e;return l.createElement("section",{className:(0,i.Z)(c.pageList)},l.createElement("div",{className:(0,i.Z)("container")},l.createElement("div",{className:(0,i.Z)("row",c.pageListRow)},t.map((e=>l.createElement(v,(0,n.Z)({key:e.to,colSize:r},e)))))))}},48631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),o=r(26201);const i={title:"\u30c6\u30b9\u30c8",sidebar_label:"\u6982\u8981"},l=void 0,c={unversionedId:"react-native/santoku/development/test",id:"react-native/santoku/development/test",title:"\u30c6\u30b9\u30c8",description:"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306e\u30c6\u30b9\u30c8\u5b9f\u65bd\u306b\u3042\u305f\u308a\u3001\u30c1\u30fc\u30e0\u5185\u3067\u5171\u6709\u3057\u305f\u4e8b\u9805\u3067\u3059\u3002",source:"@site/docs/react-native/santoku/development/test.mdx",sourceDirName:"react-native/santoku/development",slug:"/react-native/santoku/development/test",permalink:"/mobile-app-crib-notes/react-native/santoku/development/test",draft:!1,tags:[],version:"current",lastUpdatedAt:1639992401,formattedLastUpdatedAt:"2021\u5e7412\u670820\u65e5",frontMatter:{title:"\u30c6\u30b9\u30c8",sidebar_label:"\u6982\u8981"},sidebar:"santoku",previous:{title:"\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc",permalink:"/mobile-app-crib-notes/react-native/santoku/development/build-configuration/product-flavor-configurations"},next:{title:"\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\uff0f\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u4f5c\u6210",permalink:"/mobile-app-crib-notes/react-native/santoku/development/test/create-emulator-simulator"}},s={},p=[{title:"\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\uff0f\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u4f5c\u6210",to:"/react-native/santoku/development/test/create-emulator-simulator"}],m=[],u={toc:m};function v(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306e\u30c6\u30b9\u30c8\u5b9f\u65bd\u306b\u3042\u305f\u308a\u3001\u30c1\u30fc\u30e0\u5185\u3067\u5171\u6709\u3057\u305f\u4e8b\u9805\u3067\u3059\u3002"),(0,a.kt)(o.L,{overviews:p,colSize:12,mdxType:"PageList"}))}v.isMDXComponent=!0}}]);