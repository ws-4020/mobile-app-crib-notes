"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[5574],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),o=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),v=o(r),u=n,b=v["".concat(l,".").concat(u)]||v[u]||m[u]||i;return r?a.createElement(b,c(c({ref:t},p),{},{components:r})):a.createElement(b,c({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var o=2;o<i;o++)c[o]=r[o];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},26201:(e,t,r)=>{r.d(t,{L:()=>b});var a=r(87462),n=r(39960),i=r(44996),c=r(86010),s=r(67294);const l={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},o=e=>{let{children:t,colSize:r=4,...o}=e;const p=(0,i.Z)(o.to);return s.createElement("div",{className:(0,c.Z)("col",`col--${r}`,l.pageOverviewContainer)},s.createElement(n.Z,(0,a.Z)({className:(0,c.Z)("card",l.pageOverviewLinkCard)},o,{to:p}),t))},p=e=>{let{title:t}=e;return s.createElement("div",{className:(0,c.Z)("card__header",l.pageOverviewTitle)},s.createElement("h3",null,t))},m=e=>{let{src:t,alt:r,...n}=e;const o=(0,i.Z)(t);return s.createElement("div",{className:(0,c.Z)("card__image")},s.createElement("img",(0,a.Z)({className:l.pageOverviewImage},n,{alt:r,src:o})))},v=e=>{let{summary:t}=e;return s.createElement("div",{className:(0,c.Z)("card__body",l.pageOverviewSummary)},s.createElement("p",null,t))},u=e=>{let{title:t,imageUrl:r,summary:a,...n}=e;return s.createElement(o,n,s.createElement(p,{title:`${t} \xbb`}),r&&s.createElement(m,{src:r,alt:t}),a&&s.createElement(v,{summary:a}))},b=e=>{let{overviews:t,colSize:r}=e;return s.createElement("section",{className:(0,c.Z)(l.pageList)},s.createElement("div",{className:(0,c.Z)("container")},s.createElement("div",{className:(0,c.Z)("row",l.pageListRow)},t.map((e=>s.createElement(u,(0,a.Z)({key:e.to,colSize:r},e)))))))}},87914:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),i=r(26201);const c={title:"Lists",sidebar_label:"\u6982\u8981",hide_table_of_contents:!0},s=void 0,l={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components/lists",id:"react-native/learn/basic-concepts/react-native-basics/components/lists",title:"Lists",description:"\u30ea\u30b9\u30c8\u306fScrollView\u306b\u4f3c\u3066\u3044\u307e\u3059\u304c\u3001\u8981\u7d20\u3092\u30ea\u30b5\u30a4\u30af\u30eb\u3057\u3066\u518d\u63cf\u753b\u3092\u6e1b\u3089\u3059\u3053\u3068\u3067\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5411\u4e0a\u3059\u308b\u3088\u3046\u6700\u9069\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components/lists.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics/components",slug:"/react-native/learn/basic-concepts/react-native-basics/components/lists",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/lists",draft:!1,tags:[],version:"current",lastUpdatedAt:1632798153,formattedLastUpdatedAt:"2021\u5e749\u670828\u65e5",frontMatter:{title:"Lists",sidebar_label:"\u6982\u8981",hide_table_of_contents:!0},sidebar:"learn",previous:{title:"ScrollView",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/scroll-view"},next:{title:"FlatList",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/lists/flat-list"}},o={},p=[{title:"FlatList",to:"/react-native/learn/basic-concepts/react-native-basics/components/lists/flat-list"},{title:"SectionList",to:"/react-native/learn/basic-concepts/react-native-basics/components/lists/flat-list"}],m=[],v={toc:m};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u30ea\u30b9\u30c8\u306fScrollView\u306b\u4f3c\u3066\u3044\u307e\u3059\u304c\u3001\u8981\u7d20\u3092\u30ea\u30b5\u30a4\u30af\u30eb\u3057\u3066\u518d\u63cf\u753b\u3092\u6e1b\u3089\u3059\u3053\u3068\u3067\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5411\u4e0a\u3059\u308b\u3088\u3046\u6700\u9069\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"ScrollView")," \u3088\u308a\u3082\u3084\u3084\u8907\u96d1\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u5927\u91cf\u306e\u30c7\u30fc\u30bf\u3092\u753b\u9762\u306b\u8868\u793a\u3059\u308b\u5834\u5408\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"FlatList"),"\u307e\u305f\u306f",(0,n.kt)("inlineCode",{parentName:"p"},"SectionList"),"\u306e\u4f7f\u7528\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)(i.L,{overviews:p,colSize:12,mdxType:"PageList"}))}u.isMDXComponent=!0}}]);