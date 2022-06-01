"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[3012],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return v}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(n),v=a,d=p["".concat(l,".").concat(v)]||p[v]||u[v]||i;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},26201:function(e,t,n){n.d(t,{L:function(){return b}});var r=n(87462),a=n(63366),i=n(39960),o=n(44996),c=n(86010),l=n(67294),s={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},m=["children","colSize"],u=["src","alt"],p=["title","imageUrl","summary"],v=function(e){var t=e.children,n=e.colSize,u=void 0===n?4:n,p=(0,a.Z)(e,m),v=(0,o.Z)(p.to);return l.createElement("div",{className:(0,c.Z)("col","col--"+u,s.pageOverviewContainer)},l.createElement(i.Z,(0,r.Z)({className:(0,c.Z)("card",s.pageOverviewLinkCard)},p,{to:v}),t))},d=function(e){var t=e.title;return l.createElement("div",{className:(0,c.Z)("card__header",s.pageOverviewTitle)},l.createElement("h3",null,t))},f=function(e){var t=e.src,n=e.alt,i=(0,a.Z)(e,u),m=(0,o.Z)(t);return l.createElement("div",{className:(0,c.Z)("card__image")},l.createElement("img",(0,r.Z)({className:s.pageOverviewImage},i,{alt:n,src:m})))},g=function(e){var t=e.summary;return l.createElement("div",{className:(0,c.Z)("card__body",s.pageOverviewSummary)},l.createElement("p",null,t))},y=function(e){var t=e.title,n=e.imageUrl,r=e.summary,i=(0,a.Z)(e,p);return l.createElement(v,i,l.createElement(d,{title:t+" \xbb"}),n&&l.createElement(f,{src:n,alt:t}),r&&l.createElement(g,{summary:r}))},b=function(e){var t=e.overviews,n=e.colSize;return l.createElement("section",{className:(0,c.Z)(s.pageList)},l.createElement("div",{className:(0,c.Z)("container")},l.createElement("div",{className:(0,c.Z)("row",s.pageListRow)},t.map((function(e){return l.createElement(y,(0,r.Z)({key:e.to,colSize:n},e))})))))}},40690:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return v}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(26201),c=["components"],l={title:"React Native\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",sidebar_label:"\u306f\u3058\u3081\u306b",hide_table_of_contents:!0},s=void 0,m={unversionedId:"react-native/santoku",id:"react-native/santoku",title:"React Native\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",description:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u958b\u767a\u306f\u77ed\u671f\u9593\u3067\u306e\u958b\u767a\u304c\u8981\u6c42\u3055\u308c\u308b\u50be\u5411\u306b\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u6280\u8853\u9078\u5b9a\u3084\u65b9\u5f0f\u8a2d\u8a08\u306a\u3069\u3001\u958b\u767a\u6e96\u5099\u3092\u5341\u5206\u306b\u884c\u3046\u6642\u9593\u3092\u78ba\u4fdd\u3067\u304d\u306a\u3044\u3053\u3068\u304c\u591a\u3044\u3068\u611f\u3058\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/react-native/santoku.mdx",sourceDirName:"react-native",slug:"/react-native/santoku",permalink:"/mobile-app-crib-notes/react-native/santoku",draft:!1,tags:[],version:"current",lastUpdatedAt:1638787362,formattedLastUpdatedAt:"2021/12/6",frontMatter:{title:"React Native\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",sidebar_label:"\u306f\u3058\u3081\u306b",hide_table_of_contents:!0},sidebar:"santoku",next:{title:"\u76ee\u6b21",permalink:"/mobile-app-crib-notes/react-native/santoku/requirements"}},u={},p=[{title:"Requirements",summary:"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u6a5f\u80fd\u8981\u4ef6\u3068\u975e\u6a5f\u80fd\u8981\u4ef6\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3059\u3002\u7279\u306b\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u975e\u6a5f\u80fd\u8981\u4ef6\u3092\u91cd\u70b9\u7684\u306b\u6271\u3063\u3066\u3044\u307e\u3059\u3002",to:"/react-native/santoku/requirements"},{title:"Application Architecture",summary:"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u65b9\u5f0f\u8a2d\u8a08\u3067\u3059\u3002\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3092\u958b\u767a\u3057\u305f\u3068\u304d\u306b\u3001\u521d\u3081\u306b\u304d\u3061\u3093\u3068\u691c\u8a0e\u3059\u308b\u3079\u304d\u3060\u3063\u305f\u3068\u3075\u308a\u304b\u3048\u3063\u305f\u30c6\u30fc\u30de\u304b\u3089\u9806\u306b\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002",to:"/react-native/santoku/application-architecture"},{title:"Test Planning",summary:"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u30c6\u30b9\u30c8\u8a08\u753b\u3067\u3059\u3002\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u7279\u6709\u306e\u89b3\u70b9\u306b\u91cd\u70b9\u3092\u7f6e\u3044\u3066\u3001\u30c6\u30b9\u30c8\u306e\u76ee\u7684\u3084\u30d7\u30ed\u30bb\u30b9\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3059\u3002",to:"/react-native/santoku/test-planning"},{title:"Design",summary:"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u5916\u90e8\u8a2d\u8a08\u3067\u3059\u3002\u753b\u9762\u9077\u79fb\u56f3\u3084\u753b\u9762\u4ed5\u69d8\u3001API\u4ed5\u69d8\u306a\u3069\u306e\u5916\u90e8\u8a2d\u8a08\u5de5\u7a0b\u3067\u5fc5\u8981\u306a\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u985e\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002",to:"/react-native/santoku/design"},{title:"Development",summary:"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u958b\u767a\u30ac\u30a4\u30c9\u3067\u3059\u3002\u3053\u306e\u30a2\u30d7\u30ea\u306e\u958b\u767a\u8005\u3092\u5bfe\u8c61\u3068\u3057\u3066\u3001\u5404\u7a2e\u30eb\u30fc\u30eb\u3084\u958b\u767a\u30ce\u30a6\u30cf\u30a6\u306b\u3064\u3044\u3066\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002",to:"/react-native/santoku/development"},{title:"Glossary",summary:"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u7528\u8a9e\u96c6\u3067\u3059\u3002\u3053\u306e\u30a2\u30d7\u30ea\u3067\u4f7f\u7528\u3059\u308b\u7528\u8a9e\u3068\u610f\u5473\u306e\u7d71\u4e00\u3092\u76ee\u7684\u3068\u3057\u3066\u3044\u307e\u3059\u3002",to:"/react-native/santoku/glossary"},{title:"Decision Record",summary:"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3084\u6a5f\u80fd\u8a2d\u8a08\u306b\u95a2\u3059\u308b\u5224\u65ad\u306e\u8a18\u9332\u3067\u3059\u3002\u5b9f\u969b\u306b\u65b9\u5f0f\u3092\u8a2d\u8a08\u3059\u308b\u969b\u306b\u3001\u3053\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u3088\u308a\u6709\u52b9\u306b\u6d3b\u7528\u3067\u304d\u308b\u3088\u3046\u3001\u8a2d\u8a08\u3057\u305f\u65b9\u5f0f\u3060\u3051\u3067\u306a\u304f\u691c\u8a0e\u904e\u7a0b\u3082\u8a18\u9332\u3057\u3066\u3044\u307e\u3059\u3002",to:"/react-native/santoku/decisions"}],v=[],d={toc:v};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u958b\u767a\u306f\u77ed\u671f\u9593\u3067\u306e\u958b\u767a\u304c\u8981\u6c42\u3055\u308c\u308b\u50be\u5411\u306b\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u6280\u8853\u9078\u5b9a\u3084\u65b9\u5f0f\u8a2d\u8a08\u306a\u3069\u3001\u958b\u767a\u6e96\u5099\u3092\u5341\u5206\u306b\u884c\u3046\u6642\u9593\u3092\u78ba\u4fdd\u3067\u304d\u306a\u3044\u3053\u3068\u304c\u591a\u3044\u3068\u611f\u3058\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u305d\u3053\u3067\u3001React Native\u30a2\u30d7\u30ea\u306e\u958b\u767a\u3092\u30b9\u30e0\u30fc\u30ba\u306b\u9032\u884c\u3067\u304d\u308b\u3088\u3046\u3001\u30a2\u30d7\u30ea\u958b\u767a\u73fe\u5834\u3067\u5f79\u7acb\u3064\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u985e\u304a\u3088\u3073\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ws-4020/mobile-app-crib-notes/tree/master/example-app/SantokuApp"},"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9"),"\u3092\u516c\u958b\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u3089\u306f\u6642\u9593\u5272\u5171\u6709\u30a2\u30d7\u30ea\u3092\u984c\u6750\u3068\u3057\u3066\u3001\u5b9f\u969b\u306e\u958b\u767a\u30d7\u30ed\u30bb\u30b9\u306b\u6cbf\u3063\u305f\u5f62\u3067\u4f5c\u6210\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"attention")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u624b\u6cd5\u306f\u30a6\u30a9\u30fc\u30bf\u30fc\u30d5\u30a9\u30fc\u30eb\u30e2\u30c7\u30eb\u3092\u63a1\u7528\u3057\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u7406\u7531\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u306a\u8aad\u8005\u3068\u3057\u3066\u60f3\u5b9a\u3057\u3066\u3044\u308b\u30a6\u30a9\u30fc\u30bf\u30fc\u30d5\u30a9\u30fc\u30eb\u30e2\u30c7\u30eb\u306b\u6163\u308c\u3066\u3044\u308b\u958b\u767a\u8005\u306b\u3068\u3063\u3066\u306f\u3001\u516c\u958b\u3059\u308b\u30b5\u30f3\u30d7\u30eb\u304c\u30a6\u30a9\u30fc\u30bf\u30fc\u30d5\u30a9\u30fc\u30eb\u30e2\u30c7\u30eb\u3067\u4f5c\u6210\u3059\u308b\u6210\u679c\u7269\u3068\u4e00\u81f4\u3057\u3066\u3044\u305f\u65b9\u304c\u7406\u89e3\u3057\u3084\u3059\u3044"),(0,i.kt)("li",{parentName:"ul"},"\u30a6\u30a9\u30fc\u30bf\u30fc\u30d5\u30a9\u30fc\u30eb\u30e2\u30c7\u30eb\u306b\u6cbf\u3063\u3066\u5404\u5de5\u7a0b\u3054\u3068\u306e\u6210\u679c\u7269\u3092\u4e00\u901a\u308a\u4f5c\u6210\u3057\u3001\u305d\u306e\u5f8c\u306b\u5404\u6210\u679c\u7269\u306e\u52b9\u679c\u3092\u632f\u308a\u8fd4\u308b\u3053\u3068\u3067\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u958b\u767a\u3092\u6210\u529f\u3055\u305b\u308b\u305f\u3081\u306b\u6700\u4f4e\u9650\u5fc5\u8981\u306a\u6210\u679c\u7269\u3092\u898b\u6975\u3081\u305f\u3044")))),(0,i.kt)(o.L,{overviews:p,colSize:12,mdxType:"PageList"}))}f.isMDXComponent=!0}}]);