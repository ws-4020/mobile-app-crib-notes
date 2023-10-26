"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8149],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),v=n,d=m["".concat(c,".").concat(v)]||m[v]||u[v]||o;return r?a.createElement(d,i(i({ref:t},s),{},{components:r})):a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},26201:(e,t,r)=>{r.d(t,{L:()=>d});var a=r(87462),n=r(39960),o=r(44996),i=r(86010),l=r(67294);const c={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},p=e=>{let{children:t,colSize:r=4,...p}=e;const s=(0,o.Z)(p.to);return l.createElement("div",{className:(0,i.Z)("col",`col--${r}`,c.pageOverviewContainer)},l.createElement(n.Z,(0,a.Z)({className:(0,i.Z)("card",c.pageOverviewLinkCard)},p,{to:s}),t))},s=e=>{let{title:t}=e;return l.createElement("div",{className:(0,i.Z)("card__header",c.pageOverviewTitle)},l.createElement("h3",null,t))},m=e=>{let{src:t,alt:r,...n}=e;const p=(0,o.Z)(t);return l.createElement("div",{className:(0,i.Z)("card__image")},l.createElement("img",(0,a.Z)({className:c.pageOverviewImage},n,{alt:r,src:p})))},u=e=>{let{summary:t}=e;return l.createElement("div",{className:(0,i.Z)("card__body",c.pageOverviewSummary)},l.createElement("p",null,t))},v=e=>{let{title:t,imageUrl:r,summary:a,...n}=e;return l.createElement(p,n,l.createElement(s,{title:`${t} \xbb`}),r&&l.createElement(m,{src:r,alt:t}),a&&l.createElement(u,{summary:a}))},d=e=>{let{overviews:t,colSize:r}=e;return l.createElement("section",{className:(0,i.Z)(c.pageList)},l.createElement("div",{className:(0,i.Z)("container")},l.createElement("div",{className:(0,i.Z)("row",c.pageListRow)},t.map((e=>l.createElement(v,(0,a.Z)({key:e.to,colSize:r},e)))))))}},37081:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=r(87462),n=r(67294),o=r(3905),i=r(26201);const l={title:"ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5",sidebar_label:"\u6982\u8981",pagination_label:"ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5",hide_table_of_contents:!0},c=void 0,p={unversionedId:"react-native/learn/todo-app",id:"react-native/learn/todo-app",title:"ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5",description:"\u3053\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u3067\u4f5c\u6210\u3059\u308bToDo\u30a2\u30d7\u30ea\u306fWeb\u30d9\u30fc\u30b9\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u3068\u540c\u3058\u3088\u3046\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3059\u3002",source:"@site/docs/react-native/learn/todo-app.md",sourceDirName:"react-native/learn",slug:"/react-native/learn/todo-app",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app",draft:!1,tags:[],version:"current",lastUpdatedAt:1681450141,formattedLastUpdatedAt:"2023\u5e744\u670814\u65e5",frontMatter:{title:"ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5",sidebar_label:"\u6982\u8981",pagination_label:"ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5",hide_table_of_contents:!0},sidebar:"learn",previous:{title:"\u9077\u79fb\u5148\u306e\u753b\u9762\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6e21\u3059",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/param"},next:{title:"ToDo\u30a2\u30d7\u30ea\u306e\u4ed5\u69d8",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/app-spec"}},s={},m=[{title:"ToDo\u30a2\u30d7\u30ea\u306e\u4ed5\u69d8",to:"/react-native/learn/todo-app/app-spec",summary:(0,o.kt)(n.Fragment,null,"\u3053\u308c\u304b\u3089\u5b9f\u88c5\u3059\u308bToDo\u30a2\u30d7\u30ea\u306e\u4ed5\u69d8\u3092\u7406\u89e3\u3057\u307e\u3059\u3002")},{title:"ToDo\u30a2\u30d7\u30ea\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8aac\u660e",to:"/react-native/learn/todo-app/app-project-desc",summary:(0,o.kt)(n.Fragment,null,"ToDo\u30a2\u30d7\u30ea\u306e\u958b\u767a\u306b\u5229\u7528\u3059\u308bReact Native\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u6210\u306a\u3069\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002")},{title:"\u753b\u9762\u306e\u5b9f\u88c5",to:"/react-native/learn/todo-app/screens/welcome",summary:(0,o.kt)(n.Fragment,null,"\u307e\u305a\u306f\u3001ToDo\u30a2\u30d7\u30ea\u306e\u5404\u753b\u9762\u3068\u753b\u9762\u9077\u79fb\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002\u3053\u306e\u6642\u70b9\u3067\u306f\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306eREST API\u306f\u5229\u7528\u305b\u305a\u3001\u30c7\u30fc\u30bf\u306f\u56fa\u5b9a\u5024\u3068\u3057\u307e\u3059\u3002\u305d\u306e\u4ed6\u306b\u79c1\u305f\u3061\u304c\u3001\u7406\u89e3\u3059\u308b\u306e\u306b\u96e3\u3057\u3044\u3068\u611f\u3058\u305fReact Navigation\uff08Stack\u3001Modal\u3001Tab\uff09\u3092\u5229\u7528\u3059\u308b\u969b\u306e\u30dd\u30a4\u30f3\u30c8\u3084\u6ce8\u610f\u4e8b\u9805\u3092\u4ea4\u3048\u305f\u5b9f\u88c5\u65b9\u6cd5\u3068\u3001\u30b9\u30c6\u30fc\u30c8\u30d5\u30c3\u30af\u3068\u526f\u4f5c\u7528\u30d5\u30c3\u30af\u3092\u5229\u7528\u3057\u305fState\u306e\u7ba1\u7406\u65b9\u6cd5\u3092\u3088\u308a\u8a73\u3057\u304f\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002")},{title:"REST API\u3068\u306e\u63a5\u7d9a",to:"/react-native/learn/todo-app/networking/setting-up-local-server",summary:(0,o.kt)(n.Fragment,null,"ToDo\u30a2\u30d7\u30ea\u306e\u5404\u753b\u9762\u306b\u8868\u793a\u3059\u308b\u30c7\u30fc\u30bf\u3092REST API\u304b\u3089\u53d6\u5f97\u3059\u308b\u3088\u3046\u306b\u5909\u66f4\u3057\u307e\u3059\u3002\u307e\u305f\u3001HTTP API\u306e\u547c\u3073\u51fa\u3057\u306b\u95a2\u9023\u3057\u3066\u753b\u9762\u30c7\u30b6\u30a4\u30f3\u3092\u4fee\u6b63\u3057\u307e\u3059\u3002")}],u=[],v={toc:u},d="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u3053\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u3067\u4f5c\u6210\u3059\u308bToDo\u30a2\u30d7\u30ea\u306f",(0,o.kt)("a",{parentName:"p",href:"https://fintan-contents.github.io/spa-restapi-handson/"},"Web\u30d9\u30fc\u30b9\u306e\u30cf\u30f3\u30ba\u30aa\u30f3"),"\u3068\u540c\u3058\u3088\u3046\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3059\u3002"),(0,o.kt)("p",null,"React\u3067\u306eWeb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u7d4c\u9a13\u304c\u306a\u3044\u3001\u307e\u305f\u306f\u524d\u63d0\u3068\u306a\u308b\u30ec\u30d9\u30eb\u3092\u78ba\u8a8d\u3057\u305f\u3044\u65b9\u306fWeb\u30d9\u30fc\u30b9\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u53c2\u7167\u3057\u3001\u5fc5\u8981\u3067\u3042\u308c\u3070\u5b66\u7fd2\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)(i.L,{overviews:m,colSize:12,mdxType:"PageList"}))}g.isMDXComponent=!0}}]);