"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[901],{3905:(n,e,t)=>{t.d(e,{Zo:()=>g,kt:()=>u});var a=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var p=a.createContext({}),c=function(n){var e=a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},g=function(n){var e=c(n.components);return a.createElement(p.Provider,{value:e},n.children)},k="mdxType",s={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,p=n.parentName,g=l(n,["components","mdxType","originalType","parentName"]),k=c(t),m=i,u=k["".concat(p,".").concat(m)]||k[m]||s[m]||r;return t?a.createElement(u,o(o({ref:e},g),{},{components:t})):a.createElement(u,o({ref:e},g))}));function u(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=n,l[k]="string"==typeof n?n:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},86900:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const r={title:"React Navigation\u306elinking\u3092\u4f7f\u7528\u3057\u305f\u753b\u9762\u9077\u79fb\u306e\u691c\u8a0e"},o=void 0,l={unversionedId:"react-native/santoku/decisions/linking-feasibility",id:"react-native/santoku/decisions/linking-feasibility",title:"React Navigation\u306elinking\u3092\u4f7f\u7528\u3057\u305f\u753b\u9762\u9077\u79fb\u306e\u691c\u8a0e",description:"React Navigation\u306f\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u53d7\u4fe1\u3057\u305f\u969b\u3001URL\u306b\u5fdc\u3058\u305f\u753b\u9762\u3078\u9077\u79fb\u3059\u308blinking\u3068\u3044\u3046\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/decisions/linking-feasibility.mdx",sourceDirName:"react-native/santoku/decisions",slug:"/react-native/santoku/decisions/linking-feasibility",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/linking-feasibility",draft:!1,tags:[],version:"current",lastUpdatedAt:1693557060,formattedLastUpdatedAt:"2023\u5e749\u67081\u65e5",frontMatter:{title:"React Navigation\u306elinking\u3092\u4f7f\u7528\u3057\u305f\u753b\u9762\u9077\u79fb\u306e\u691c\u8a0e"},sidebar:"santoku",previous:{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u53d7\u4fe1\u6642\u306e\u753b\u9762\u9077\u79fb",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-019-deep-link-navigation"},next:{title:"React Navigation\u306elinking\u3092\u4f7f\u7528\u3057\u306a\u3044\u753b\u9762\u9077\u79fb\u306e\u691c\u8a0e",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/non-linking-feasibility"}},p={},c=[{value:"\u8a8d\u8a3c\u72b6\u614b\u306b\u3088\u308b\u753b\u9762\u8868\u793a\u306e\u5236\u5fa1",id:"\u8a8d\u8a3c\u72b6\u614b\u306b\u3088\u308b\u753b\u9762\u8868\u793a\u306e\u5236\u5fa1",level:2},{value:"\u53d7\u3051\u53d6\u3063\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306b\u5fdc\u3058\u305f\u753b\u9762\u304c\u3001\u672a\u8a8d\u8a3c\u3067\u8868\u793a\u3057\u3066\u306f\u3044\u3051\u306a\u3044\u5834\u5408\u306e\u8003\u616e",id:"\u53d7\u3051\u53d6\u3063\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306b\u5fdc\u3058\u305f\u753b\u9762\u304c\u672a\u8a8d\u8a3c\u3067\u8868\u793a\u3057\u3066\u306f\u3044\u3051\u306a\u3044\u5834\u5408\u306e\u8003\u616e",level:3},{value:"\u672a\u8a8d\u8a3c\u6642\u306b\u53d7\u3051\u53d6\u3063\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u9077\u79fb\u5148\u753b\u9762\u3092\u3001\u8a8d\u8a3c\u5f8c\u306b\u8868\u793a\u3059\u308b\u65b9\u6cd5",id:"\u672a\u8a8d\u8a3c\u6642\u306b\u53d7\u3051\u53d6\u3063\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u9077\u79fb\u5148\u753b\u9762\u3092\u8a8d\u8a3c\u5f8c\u306b\u8868\u793a\u3059\u308b\u65b9\u6cd5",level:3},{value:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u9077\u79fb\u5148\u753b\u9762\u3067\u623b\u308b\u30dc\u30bf\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u305f\u5834\u5408\u306e\u52d5\u4f5c",id:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u9077\u79fb\u5148\u753b\u9762\u3067\u623b\u308b\u30dc\u30bf\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u305f\u5834\u5408\u306e\u52d5\u4f5c",level:2},{value:"<code>linking</code>\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u52d5\u4f5c\u306e\u78ba\u8a8d",id:"linking\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u52d5\u4f5c\u306e\u78ba\u8a8d",level:3},{value:"<code>linking.getActionFromState</code>\u3092\u4f7f\u7528\u3057\u3066\u3001Navigation action\u3092\u8a2d\u5b9a\u3059\u308b",id:"linkinggetactionfromstate\u3092\u4f7f\u7528\u3057\u3066navigation-action\u3092\u8a2d\u5b9a\u3059\u308b",level:3},{value:"\u9077\u79fb\u5148\u753b\u9762\u306e<code>Screen.getId</code>\u3067\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u53d7\u4fe1\u6642\u306f\u5e38\u306b\u30e6\u30cb\u30fc\u30af\u306aID\u3092\u8fd4\u5374\u3059\u308b",id:"\u9077\u79fb\u5148\u753b\u9762\u306escreengetid\u3067\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u53d7\u4fe1\u6642\u306f\u5e38\u306b\u30e6\u30cb\u30fc\u30af\u306aid\u3092\u8fd4\u5374\u3059\u308b",level:3}],g={toc:c},k="wrapper";function s(n){let{components:e,...t}=n;return(0,i.kt)(k,(0,a.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"React Navigation\u306f\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u53d7\u4fe1\u3057\u305f\u969b\u3001URL\u306b\u5fdc\u3058\u305f\u753b\u9762\u3078\u9077\u79fb\u3059\u308b",(0,i.kt)("inlineCode",{parentName:"p"},"linking"),"\u3068\u3044\u3046\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/deep-linking/"},"Deep linking")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/configuring-links/"},"Configuring links"))),(0,i.kt)("p",null,"React Navigation\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"linking"),"\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306bURL\u3068\u9077\u79fb\u5148\u753b\u9762\u306e\u30de\u30c3\u30d4\u30f3\u30b0\u3092\u96c6\u7d04\u3057\u3066\u7ba1\u7406\u3067\u304d\u307e\u3059\u3002\u307e\u305fURL\u3092\u89e3\u6790\u3057\u3066\u304f\u308c\u308b\u305f\u3081\u3001\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u3084\u30d1\u30b9\u30d1\u30e9\u30e1\u30fc\u30bf\u3082\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const config = {\n  screens: {\n    AuthenticatedStackNav: {\n      screens: {\n        QuestionDetail: {\n          // URL\u306e\u30d1\u30b9\u304c\u300cquestion/1234\u300d\u306e\u5834\u5408\u306f\u3001QuestionDetail\u753b\u9762\u306b\u9077\u79fb\u3057\u3001\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3057\u3066\u300cquestionId=1234\u300d\u3092\u6e21\u3059\n          path: 'question/:questionId',\n        },\n      },\n    },\n  },\n}\n\nconst linking = {\n  prefixes: ['https://example.com'], // <- \u3053\u306e\u30a2\u30d7\u30ea\u3067\u53d7\u3051\u4ed8\u3051\u308bURL\u306e\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\n  config,\n};\n\nreturn <NavigationContainer linking={linking}>{children}</NavigationContainer>\n")),(0,i.kt)("p",null,"\u307e\u305f\u3001\u60f3\u5b9a\u3057\u3066\u3044\u306a\u3044\u30d1\u30b9\u3092\u53d7\u3051\u53d6\u3063\u305f\u5834\u5408\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u753b\u9762\u3082\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const config = {\n  screens: {\n    AuthenticatedStackNav: {\n      screens: {\n        QuestionDetail: {\n          path: 'question/:questionId',\n        },\n      },\n    },\n    NotFound: '*', // <- \u60f3\u5b9a\u3057\u306a\u3044\u30d1\u30b9\u3092\u53d7\u3051\u53d6\u3063\u305f\u5834\u5408\u306fNotFound\u753b\u9762\u3092\u8868\u793a\u3059\u308b\n  },\n};\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"initialRouteName"),"\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001\u7279\u5b9a\u306e\u753b\u9762\u3092\u5e38\u306b\u30b9\u30bf\u30c3\u30af\u306e\u5148\u982d\u306b\u8ffd\u52a0\u3059\u308b\u6a5f\u80fd\u306a\u3069\u3082\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const config = {\n  screens: {\n    AuthenticatedStackNav: {\n      // \u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u304b\u3089QuestionDetail\u753b\u9762\u3092\u76f4\u63a5\u958b\u3044\u3066\u3082\u3001\u623b\u308b\u30dc\u30bf\u30f3\u30bf\u30c3\u30d7\uff08navigation.goBack()\uff09\u3067Home\u753b\u9762\u306b\u623b\u308c\u308b\n      initialRouteName: 'Home',\n      screens: {\n        QuestionDetail: {\n          path: 'question/:questionId',\n        },\n      },\n    },\n  },\n};\n")),(0,i.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"linking"),"\u306f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u51e6\u7406\u3059\u308b\u4e0a\u3067\u975e\u5e38\u306b\u4fbf\u5229\u306a\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u3066\u304f\u308c\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u4e00\u65b9\u3067\u3001\u8a8d\u8a3c\u72b6\u614b\u3092\u8003\u616e\u3057\u305f\u753b\u9762\u8868\u793a\u306a\u3069\u3044\u304f\u3064\u304b\u691c\u8a0e\u304c\u5fc5\u8981\u306a\u70b9\u3082\u3042\u3063\u305f\u305f\u3081\u3001\u4ee5\u964d\u3067\u306f\u305d\u308c\u3089\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u8a8d\u8a3c\u72b6\u614b\u306b\u3088\u308b\u753b\u9762\u8868\u793a\u306e\u5236\u5fa1"},"\u8a8d\u8a3c\u72b6\u614b\u306b\u3088\u308b\u753b\u9762\u8868\u793a\u306e\u5236\u5fa1"),(0,i.kt)("p",null,"React Navigation\u306b\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/auth-flow"},"\u8a8d\u8a3c\u30d5\u30ed\u30fc"),"\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304c\u3042\u308a\u307e\u3059\u3002\u3057\u304b\u3057\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"linking"),"\u3068\u8a8d\u8a3c\u30d5\u30ed\u30fc\u3092\u7d44\u307f\u5408\u308f\u305b\u305f\u5834\u5408\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u306a\u304f\u3001\u4ee5\u4e0b\u306eissue\u3067\u8b70\u8ad6\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/react-navigation.github.io/issues/97"},"Deep linking with Authentication Flow"))),(0,i.kt)("h3",{id:"\u53d7\u3051\u53d6\u3063\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306b\u5fdc\u3058\u305f\u753b\u9762\u304c\u672a\u8a8d\u8a3c\u3067\u8868\u793a\u3057\u3066\u306f\u3044\u3051\u306a\u3044\u5834\u5408\u306e\u8003\u616e"},"\u53d7\u3051\u53d6\u3063\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306b\u5fdc\u3058\u305f\u753b\u9762\u304c\u3001\u672a\u8a8d\u8a3c\u3067\u8868\u793a\u3057\u3066\u306f\u3044\u3051\u306a\u3044\u5834\u5408\u306e\u8003\u616e"),(0,i.kt)("p",null,"\u8a8d\u8a3c\u6e08\u306e\u5834\u5408\u306f\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u306b\u5fdc\u3058\u3066\u753b\u9762\u9077\u79fb\u3059\u308b\u3088\u3046\u306b\u3001URL\u3068\u9077\u79fb\u5148\u753b\u9762\u306e\u30de\u30c3\u30d4\u30f3\u30b0\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u672a\u8a8d\u8a3c\u306e\u5834\u5408\u306f\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u7121\u8996\u3057\u3066\u901a\u5e38\u901a\u308a\u8d77\u52d5\u3059\u308b\u3088\u3046\u306b\u3001\u30de\u30c3\u30d4\u30f3\u30b0\u306f\u5b9a\u7fa9\u3057\u307e\u305b\u3093\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u8a8d\u8a3c\u6e08\u307f\u306e\u5834\u5408\u306e\u307f\u3001URL\u3068\u9077\u79fb\u5148\u753b\u9762\u306e\u30de\u30c3\u30d4\u30f3\u30b0\u3092\u5b9a\u7fa9\nconst config = isLoggedIn ? {\n  screens: {\n    AuthenticatedStackNav: {\n      initialRouteName: 'Home',\n      screens: {\n        QuestionDetail: {\n          path: 'question/:questionId',\n        },\n      },\n    },\n  },\n} : undefined;\n")),(0,i.kt)("h3",{id:"\u672a\u8a8d\u8a3c\u6642\u306b\u53d7\u3051\u53d6\u3063\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u9077\u79fb\u5148\u753b\u9762\u3092\u8a8d\u8a3c\u5f8c\u306b\u8868\u793a\u3059\u308b\u65b9\u6cd5"},"\u672a\u8a8d\u8a3c\u6642\u306b\u53d7\u3051\u53d6\u3063\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u9077\u79fb\u5148\u753b\u9762\u3092\u3001\u8a8d\u8a3c\u5f8c\u306b\u8868\u793a\u3059\u308b\u65b9\u6cd5"),(0,i.kt)("p",null,"\u3053\u306e\u4ed5\u69d8\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306e\u6a5f\u80fd\u304cReact Navigation\u306b\u306f\u5b58\u5728\u3057\u307e\u305b\u3093\u3002\u305d\u306e\u305f\u3081\u3001\u4ee5\u4e0b\u306e\u65b9\u6cd5\u3067\u3053\u306e\u6a5f\u80fd\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u53d7\u3051\u53d6\u3063\u305f\u6642\u70b9\u3067\u3001\u305d\u306e\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u30b0\u30ed\u30fc\u30d0\u30eb\u306aState\u306b\u4fdd\u6301",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30b3\u30fc\u30eb\u30c9\u3001\u30a6\u30a9\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8\u306e\u5834\u5408\u306f\u3001",(0,i.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/navigation-container#linkinggetinitialurl"},"linking.getInitialURL"),"\u5185\u3067State\u306b\u8a2d\u5b9a"),(0,i.kt)("li",{parentName:"ul"},"\u30db\u30c3\u30c8\u30b9\u30bf\u30fc\u30c8\u306e\u5834\u5408\u306f\u3001",(0,i.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/navigation-container#linkingsubscribe"},"linking.subscribe"),"\u5185\u3067State\u306b\u8a2d\u5b9a"))),(0,i.kt)("li",{parentName:"ul"},"\u8a8d\u8a3c\u5f8c\u306bState\u304b\u3089\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u53d6\u5f97\u3057\u3001",(0,i.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/linking#openurl"},"Linking.openURL"),"\u3092\u4f7f\u7528\u3057\u3066\u305d\u306e\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u958b\u304f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Linking.openURL"),"\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30d7\u30ea\u5185\u304b\u3089\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u958b\u304f\u3053\u3068\u306b\u3088\u308a\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"linking"),"\u306b\u8a2d\u5b9a\u3057\u305fURL\u3068\u9077\u79fb\u5148\u753b\u9762\u306e\u30de\u30c3\u30d4\u30f3\u30b0\u306b\u5f93\u3063\u3066\u753b\u9762\u9077\u79fb\u304c\u884c\u308f\u308c\u308b")))),(0,i.kt)("h2",{id:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u9077\u79fb\u5148\u753b\u9762\u3067\u623b\u308b\u30dc\u30bf\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u305f\u5834\u5408\u306e\u52d5\u4f5c"},"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u9077\u79fb\u5148\u753b\u9762\u3067\u623b\u308b\u30dc\u30bf\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u305f\u5834\u5408\u306e\u52d5\u4f5c"),(0,i.kt)("h3",{id:"linking\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u52d5\u4f5c\u306e\u78ba\u8a8d"},(0,i.kt)("inlineCode",{parentName:"h3"},"linking"),"\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u52d5\u4f5c\u306e\u78ba\u8a8d"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"linking"),"\u3092\u4f7f\u7528\u3057\u3066\u753b\u9762\u9077\u79fb\u3059\u308b\u5834\u5408\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"navigation.navigate"),"\u3092\u4f7f\u7528\u3057\u305f\u5834\u5408\u3068\u540c\u69d8\u306e\u52d5\u4f5c\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"navigation.navigate"),"\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/navigating/#summary"},"Moving between screens - Summary"),"\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308b\u901a\u308a\u3001\u4ee5\u4e0b\u306e\u7279\u5fb4\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bfe\u8c61\u306e\u753b\u9762\u304c\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30b9\u30bf\u30c3\u30af\u5185\u306b\u5b58\u5728\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u305d\u306e\u753b\u9762\u307e\u3067\u623b\u308b"),(0,i.kt)("li",{parentName:"ul"},"\u5bfe\u8c61\u306e\u753b\u9762\u304c\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30b9\u30bf\u30c3\u30af\u5185\u306b\u5b58\u5728\u3057\u3066\u3044\u306a\u3051\u308c\u3070\u3001\u753b\u9762\u3092\u30b9\u30bf\u30c3\u30af\u306b\u8ffd\u52a0\u3059\u308b")),(0,i.kt)("p",null,"\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30b9\u30bf\u30c3\u30af\u306e\u72b6\u614b\u306b\u3088\u3063\u3066\u306f\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u30bf\u30c3\u30d7\u3059\u308b\u524d\u306b\u8868\u793a\u3057\u3066\u3044\u305f\u753b\u9762\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"navigation.goBack"),"\u306a\u3069\u3067\u623b\u308c\u306a\u3044\u4e8b\u304c\u4e88\u60f3\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u306b\u4f8b\u3092\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u30e6\u30fc\u30b6\u306f\u3001\u30a2\u30d7\u30ea\u3067",(0,i.kt)("inlineCode",{parentName:"p"},"ScreenC"),"\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30b9\u30bf\u30c3\u30af\uff08\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u30bf\u30c3\u30d7\u524d\uff09",title:"\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30b9\u30bf\u30c3\u30af\uff08\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u30bf\u30c3\u30d7\u524d\uff09"},"- StackNavigator1\n  - ScreenA\n  - ScreenB\n  - ScreenC <- \u3053\u306e\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u308b\n")),(0,i.kt)("p",null,"\u30e6\u30fc\u30b6\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"ScreenB"),"\u306b\u9077\u79fb\u3059\u308b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u30bf\u30c3\u30d7\u3059\u308b\u3068\u3001\u30b9\u30bf\u30c3\u30af\u5185\u306b\u65e2\u306b\u5b58\u5728\u3059\u308b",(0,i.kt)("inlineCode",{parentName:"p"},"ScreenB"),"\u307e\u3067\u623b\u308a\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30b9\u30bf\u30c3\u30af\uff08\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u30bf\u30c3\u30d7\u5f8c\uff09",title:"\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30b9\u30bf\u30c3\u30af\uff08\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u30bf\u30c3\u30d7\u5f8c\uff09"},"- StackNavigator1\n  - ScreenA\n  - ScreenB <- \u3053\u306e\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u308b\n")),(0,i.kt)("p",null,"\u3053\u306e\u5834\u5408\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"ScreenB"),"\u304b\u3089",(0,i.kt)("inlineCode",{parentName:"p"},"navigation.goBack"),"\u3092\u5b9f\u884c\u3057\u305f\u5834\u5408\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"ScreenA"),"\u306b\u623b\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u3082\u30461\u3064\u4f8b\u3092\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u30e6\u30fc\u30b6\u306f\u3001\u30a2\u30d7\u30ea\u3067",(0,i.kt)("inlineCode",{parentName:"p"},"StackNavigator2"),"\u5185\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"ScreenF"),"\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30b9\u30bf\u30c3\u30af\uff08\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u30bf\u30c3\u30d7\u524d\uff09",title:"\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30b9\u30bf\u30c3\u30af\uff08\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u30bf\u30c3\u30d7\u524d\uff09"},"- StackNavigator1\n  - ScreenA\n  - ScreenB\n  - ScreenC\n- StackNavigator2\n  - ScreenD\n  - ScreenE\n  - ScreenF <- \u3053\u306e\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u308b\n")),(0,i.kt)("p",null,"\u30e6\u30fc\u30b6\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"ScreenB"),"\u306b\u9077\u79fb\u3059\u308b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u30bf\u30c3\u30d7\u3059\u308b\u3068\u3001\u307e\u305a",(0,i.kt)("inlineCode",{parentName:"p"},"StackNavigator1"),"\u307e\u3067\u623b\u308a\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"StackNavigator1"),"\u306e\u30b9\u30bf\u30c3\u30af\u5185\u306b\u5b58\u5728\u3059\u308b",(0,i.kt)("inlineCode",{parentName:"p"},"ScreenB"),"\u307e\u3067\u623b\u308a\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30b9\u30bf\u30c3\u30af\uff08\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u30bf\u30c3\u30d7\u5f8c\uff09",title:"\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30b9\u30bf\u30c3\u30af\uff08\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u30bf\u30c3\u30d7\u5f8c\uff09"},"- StackNavigator1\n  - ScreenA\n  - ScreenB <- \u3053\u306e\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u308b\n")),(0,i.kt)("p",null,"\u3053\u306e\u5834\u5408\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"ScreenB"),"\u304b\u3089",(0,i.kt)("inlineCode",{parentName:"p"},"navigation.goBack"),"\u3092\u5b9f\u884c\u3057\u305f\u5834\u5408\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"ScreenA"),"\u306b\u623b\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u3053\u308c\u3089\u306e\u6319\u52d5\u3092\u56de\u907f\u3059\u308b\u65b9\u6cd5\u3068\u3057\u3066\u3001\u4ee5\u4e0b\u3092\u691c\u8a0e\u3057\u307e\u3057\u305f\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"linking.getActionFromState"),"\u3092\u4f7f\u7528\u3057\u3066\u3001Navigation action\u3092\u8a2d\u5b9a\u3059\u308b"),(0,i.kt)("li",{parentName:"ul"},"\u9077\u79fb\u5148\u753b\u9762\u306e",(0,i.kt)("inlineCode",{parentName:"li"},"Screen.getId"),"\u3067\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u53d7\u4fe1\u6642\u306f\u5e38\u306b\u30e6\u30cb\u30fc\u30af\u306aID\u3092\u8fd4\u5374\u3059\u308b")),(0,i.kt)("h3",{id:"linkinggetactionfromstate\u3092\u4f7f\u7528\u3057\u3066navigation-action\u3092\u8a2d\u5b9a\u3059\u308b"},(0,i.kt)("inlineCode",{parentName:"h3"},"linking.getActionFromState"),"\u3092\u4f7f\u7528\u3057\u3066\u3001Navigation action\u3092\u8a2d\u5b9a\u3059\u308b"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"linking.getActionFromState"),"\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/navigation-actions"},"Navigation action"),"\u3092\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u306e\u95a2\u6570\u3067\u3059\u3002\u5f15\u6570\u3067\u3001",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/navigation-state/"},"Navigation state"),"\u3092\u53d7\u3051\u53d6\u308b\u305f\u3081\u3001\u753b\u9762\u306b\u5fdc\u3058\u3066Navigation action\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import {NavigationContainer, getActionFromState as getOriginalActionFromState} from '@react-navigation/native';\n\nconst getActionFromState: typeof getOriginalActionFromState = useCallback((state, options) => {\n  const action = getOriginalActionFromState(state, options);\n  // \u753b\u9762\u306b\u5fdc\u3058\u3066Navigation action\u3092\u8a2d\u5b9a\n  if (ScreenA\u306e\u5834\u5408) {\n    return {...action, type: 'PUSH'};\n  } else if (ScreenB\u306e\u5834\u5408) {\n    return {...action, type: 'NAVIGATE'};\n  } else {\n    return {...action, type: 'RESET'};\n  }\n}, []);\n\nconst linking = {\n  ...\n  getActionFromState,\n};\n\nreturn <NavigationContainer linking={linking}>{children}</NavigationContainer>;\n")),(0,i.kt)("p",null,"\u3057\u304b\u3057\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"linking.getActionFromState"),"\u306f\u3001React Navigation\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u306f\u516c\u958b\u3055\u308c\u3066\u304a\u3089\u305a\u3001\u7a4d\u6975\u7684\u306b\u4f7f\u7528\u3059\u308b\u306b\u306f\u4e0d\u5b89\u304c\u6b8b\u308a\u307e\u3059\u3002\u307e\u305f\u3001Navigation state\u306e\u69cb\u9020\u306f\u8907\u96d1\u3067\u3042\u308b\u305f\u3081\u3001\u9077\u79fb\u5148\u753b\u9762\u306b\u5fdc\u3058\u305f\u6761\u4ef6\u5206\u5c90\u306e\u4f5c\u6210\u306f\u96e3\u3057\u304f\u306a\u308b\u3068\u8003\u3048\u3089\u308c\u307e\u3059\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"linking"),"\u306b\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/configuring-links#advanced-cases"},"Advanced cases"),"\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308b\u3088\u3046\u306b\u3001",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/navigation-container#linkinggetstatefrompath"},"linking.getStateFromPath"),"\u3068\u3044\u3046\u6a5f\u80fd\u3082\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u3053\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001URL\u304b\u3089Navigation state\u306e\u72b6\u614b\u3092\u81ea\u7531\u306b\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u305d\u306e\u305f\u3081\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"linking.getActionFromState"),"\u3068",(0,i.kt)("inlineCode",{parentName:"p"},"linking.getStateFromPath"),"\u3092\u7d44\u307f\u5408\u308f\u305b\u308b\u3053\u3068\u3067\u3001\u81ea\u7531\u5ea6\u306e\u9ad8\u3044\u753b\u9762\u9077\u79fb\u304c\u5b9f\u73fe\u53ef\u80fd\u3067\u3059\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u3057\u304b\u3057\u3001\u3053\u308c\u3089\u306e\u5b9f\u88c5\u306f\u975e\u5e38\u306b\u8907\u96d1\u306a\u51e6\u7406\u306b\u306a\u308b\u3053\u3068\u304c\u4e88\u60f3\u3055\u308c\u307e\u3059\u3002URL\u306e\u89e3\u6790\u3084Navigation state\u306e\u751f\u6210\u3092\u81ea\u8eab\u3067\u5b9f\u88c5\u3059\u308b\u3053\u3068\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"linking"),"\u3092\u4f7f\u3046\u3053\u3068\u3067\u5f97\u3089\u308c\u308b\u591a\u304f\u306e\u30e1\u30ea\u30c3\u30c8\u3092\u5931\u3044\u307e\u3059\u3002")),(0,i.kt)("h3",{id:"\u9077\u79fb\u5148\u753b\u9762\u306escreengetid\u3067\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u53d7\u4fe1\u6642\u306f\u5e38\u306b\u30e6\u30cb\u30fc\u30af\u306aid\u3092\u8fd4\u5374\u3059\u308b"},"\u9077\u79fb\u5148\u753b\u9762\u306e",(0,i.kt)("inlineCode",{parentName:"h3"},"Screen.getId"),"\u3067\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u53d7\u4fe1\u6642\u306f\u5e38\u306b\u30e6\u30cb\u30fc\u30af\u306aID\u3092\u8fd4\u5374\u3059\u308b"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"navigation.navigate"),"\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/screen/#name"},"Screen.name"),"\u3068",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/screen/#getid"},"Screen.getId"),"\u306e\u8fd4\u5374\u5024\u306b\u3088\u3063\u3066\u3001\u753b\u9762\u9077\u79fb\u306e\u6319\u52d5\u304c\u5909\u308f\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u540c\u4e00\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"\u3068",(0,i.kt)("inlineCode",{parentName:"p"},"getId"),"\u306e\u8fd4\u5374\u5024\u3092\u6301\u3064Screen\u304c\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30b9\u30bf\u30c3\u30af\u306b\u5b58\u5728\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u305d\u306e\u753b\u9762\u307e\u3067\u623b\u308a\u307e\u3059\u3002\u305d\u3046\u3067\u306f\u306a\u3044\u5834\u5408\u3001\u753b\u9762\u3092\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30b9\u30bf\u30c3\u30af\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u3053\u306e\u7279\u5fb4\u3092\u5229\u7528\u3057\u3066\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u53d7\u4fe1\u6642\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"getId"),"\u304b\u3089\u30e6\u30cb\u30fc\u30af\u306aID\u3092\u8fd4\u5374\u3059\u308b\u3053\u3068\u3067\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"navigation.push"),"\u3068\u540c\u69d8\u306e\u6319\u52d5\u3092\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'// \u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3057\u3066\u3001linking=true\u3092\u53d7\u3051\u53d6\u3063\u305f\u5834\u5408\u306f\u3001\u30e6\u30cb\u30fc\u30af\u306aID\u3092\u8fd4\u5374\u3059\u308b\nexport const RootStackNavigator: React.FC = () => {\n  return (\n    <nav.Navigator>\n      <nav.Screen\n        name="StackNavigator1"\n        component={StackNavigator1}\n        getId={({params}) => {\n          if (params?.screen === \'ScreenB\') {\n            return params.params?.linking ? String(Date.now()) : undefined;\n          }\n          return undefined;\n        }}\n      />\n    </nav.Navigator>\n  );\n};\n\nconst StackNavigator1: React.FC = () => {\n  return (\n    <nav.Navigator>\n      <nav.Screen name="ScreenA" component={ScreenA} />\n      <nav.Screen\n        name="ScreenB"\n        component={ScreenB}\n        getId={({params}) => (params.linking ? String(Date.now()) : undefined)}\n      />\n      <nav.Screen name="ScreenC" component={ScreenC} />\n    </nav.Navigator>\n  );\n};\n')),(0,i.kt)("p",null,"\u3057\u304b\u3057\u3001\u3053\u306e\u65b9\u6cd5\u306e\u5834\u5408\u306f\u3001Navigation action\u3068\u3057\u3066",(0,i.kt)("inlineCode",{parentName:"p"},"NAVIGATE"),"\u3068",(0,i.kt)("inlineCode",{parentName:"p"},"PUSH"),"\u4ee5\u5916\u306e\u3082\u306e\u3092\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Screen.getId"),"\u3092\u4f7f\u7528\u3057\u3066Navigation action\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"PUSH"),"\u306b\u5909\u66f4\u3059\u308b\u65b9\u6cd5\u306f\u3001\u4ee5\u4e0b\u306eissue\u3067\u8b70\u8ad6\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/react-navigation/issues/9090"},"Linking for stack to call 'push' action instead 'navigate'")))))}s.isMDXComponent=!0}}]);