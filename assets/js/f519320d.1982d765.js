"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[401],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return v}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(r),v=a,f=s["".concat(l,".").concat(v)]||s[v]||m[v]||i;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},26201:function(e,t,r){r.d(t,{L:function(){return b}});var n=r(87462),a=r(63366),i=r(39960),c=r(44996),o=r(86010),l=r(67294),u={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},p=["children","colSize"],m=["src","alt"],s=["title","imageUrl","summary"],v=function(e){var t=e.children,r=e.colSize,m=void 0===r?4:r,s=(0,a.Z)(e,p),v=(0,c.Z)(s.to);return l.createElement("div",{className:(0,o.Z)("col","col--"+m,u.pageOverviewContainer)},l.createElement(i.Z,(0,n.Z)({className:(0,o.Z)("card",u.pageOverviewLinkCard)},s,{to:v}),t))},f=function(e){var t=e.title;return l.createElement("div",{className:(0,o.Z)("card__header",u.pageOverviewTitle)},l.createElement("h3",null,t))},d=function(e){var t=e.src,r=e.alt,i=(0,a.Z)(e,m),p=(0,c.Z)(t);return l.createElement("div",{className:(0,o.Z)("card__image")},l.createElement("img",(0,n.Z)({className:u.pageOverviewImage},i,{alt:r,src:p})))},g=function(e){var t=e.summary;return l.createElement("div",{className:(0,o.Z)("card__body",u.pageOverviewSummary)},l.createElement("p",null,t))},y=function(e){var t=e.title,r=e.imageUrl,n=e.summary,i=(0,a.Z)(e,s);return l.createElement(v,i,l.createElement(f,{title:t+" \xbb"}),r&&l.createElement(d,{src:r,alt:t}),n&&l.createElement(g,{summary:n}))},b=function(e){var t=e.overviews,r=e.colSize;return l.createElement("section",{className:(0,o.Z)(u.pageList)},l.createElement("div",{className:(0,o.Z)("container")},l.createElement("div",{className:(0,o.Z)("row",u.pageListRow)},t.map((function(e){return l.createElement(y,(0,n.Z)({key:e.to,colSize:r},e))})))))}},4380:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return v},default:function(){return d}});var n=r(87462),a=r(63366),i=r(67294),c=r(3905),o=r(26201),l=["components"],u={title:"React Native\u306e\u5b66\u7fd2",hide_table_of_contents:!0,sidebar_label:"\u306f\u3058\u3081\u306b"},p=void 0,m={unversionedId:"react-native/learn",id:"react-native/learn",title:"React Native\u306e\u5b66\u7fd2",description:"\u3053\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306fReact Native\u3067\u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u3092\u5b66\u7fd2\u3059\u308b\u305f\u3081\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u3059\u3002",source:"@site/docs/react-native/learn.md",sourceDirName:"react-native",slug:"/react-native/learn",permalink:"/mobile-app-crib-notes/react-native/learn",tags:[],version:"current",lastUpdatedAt:1632798153,formattedLastUpdatedAt:"2021/9/28",frontMatter:{title:"React Native\u306e\u5b66\u7fd2",hide_table_of_contents:!0,sidebar_label:"\u306f\u3058\u3081\u306b"},sidebar:"learn",next:{title:"\u76ee\u6b21",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started"}},s=[{title:"Getting Started",to:"/react-native/learn/getting-started",summary:(0,c.kt)(i.Fragment,null,"React Native\u3067\u306e\u30a2\u30d7\u30ea\u958b\u767a\u306b\u5fc5\u8981\u306a\u74b0\u5883\u3092\u7528\u610f\u3057\u307e\u3059\u3002")},{title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u524d\u306b",to:"/react-native/learn/basic-concepts",summary:(0,c.kt)(i.Fragment,null,"React Native\u3067\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3057\u59cb\u3081\u308b\u524d\u306b\u6700\u4f4e\u9650\u5fc5\u8981\u3068\u306a\u308b\u524d\u63d0\u77e5\u8b58\u3084\u3001React Native\u3068React Navigation\u306e\u57fa\u672c\u7684\u306a\u77e5\u8b58\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002")},{title:"ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5",to:"/react-native/learn/todo-app",summary:(0,c.kt)(i.Fragment,null,"React Native\u3067\u7c21\u5358\u306aToDo\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002")}],v=[],f={toc:v};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,c.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u3053\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306fReact Native\u3067\u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u3092\u5b66\u7fd2\u3059\u308b\u305f\u3081\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u3059\u3002"),(0,c.kt)("p",null,"React\u3067Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u88c5\u3067\u304d\u308b\u304cReact Native\u3067\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u88c5\u3057\u305f\u3053\u3068\u304c\u306a\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u8005\u3092\u5bfe\u8c61\u3068\u3057\u3066\u3001\u6b21\u306e\u3053\u3068\u306b\u3064\u3044\u3066\u5b66\u3076\u3053\u3068\u3092\u76ee\u7684\u3068\u3057\u3066\u3044\u307e\u3059\u3002"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"React\u3068React Native\u306e\u9055\u3044"),(0,c.kt)("li",{parentName:"ul"},"React Native\u3067\u4f5c\u6210\u3057\u305f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u52d5\u4f5c\u78ba\u8a8d\u65b9\u6cd5")),(0,c.kt)("p",null,"\u307e\u305f\u3001\u4f5c\u6210\u3057\u305f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u914d\u5e03\u65b9\u6cd5\u3084\u30c6\u30b9\u30c8\u624b\u6cd5\u306b\u3064\u3044\u3066\u306f\u3053\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u306f\u89e6\u308c\u307e\u305b\u3093\u3002"),(0,c.kt)(o.L,{overviews:s,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0}}]);