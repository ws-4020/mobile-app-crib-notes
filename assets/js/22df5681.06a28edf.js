(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{167:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=p(n),O=a,u=m["".concat(c,".").concat(O)]||m[O]||d[O]||i;return n?r.a.createElement(u,b(b({ref:t},o),{},{components:n})):r.a.createElement(u,b({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=O;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var o=2;o<i;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},226:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/oidc-authorization-code-flow.drawio-87394e9ff8a3064979afebadebaa8240.png"},227:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/oidc-resource-owner-password-credentials-flow.drawio-0680ca80965d5d00fdafd713a5442682.png"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(167)),c={title:"\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u306a\u8a8d\u8a3c"},b={unversionedId:"reference/auth/stateless-authn",id:"reference/auth/stateless-authn",isDocsHomePage:!1,title:"\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u306a\u8a8d\u8a3c",description:"OpenID Connect (OIDC)",source:"@site/docs/reference/auth/stateless-authn.md",sourceDirName:"reference/auth",slug:"/reference/auth/stateless-authn",permalink:"/mobile-app-crib-notes/reference/auth/stateless-authn",version:"current",lastUpdatedAt:1612864624,formattedLastUpdatedAt:"2021/2/9",frontMatter:{title:"\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u306a\u8a8d\u8a3c"},sidebar:"reference",previous:{title:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406",permalink:"/mobile-app-crib-notes/reference/auth/manage-credentials"},next:{title:"Web\u30a2\u30d7\u30ea\u3068\u306e\u8a8d\u8a3c\u60c5\u5831\u306e\u9023\u643a",permalink:"/mobile-app-crib-notes/reference/auth/webassets-integration"}},l=[{value:"OpenID Connect (OIDC)",id:"openid-connect-oidc",children:[{value:"OpenID Connect\u306b\u304a\u3051\u308b\u8a8d\u8a3c\u30d5\u30ed\u30fc",id:"openid-connect\u306b\u304a\u3051\u308b\u8a8d\u8a3c\u30d5\u30ed\u30fc",children:[]},{value:"OpenID Connect\u306e\u30c8\u30fc\u30af\u30f3\u306e\u7a2e\u985e",id:"openid-connect\u306e\u30c8\u30fc\u30af\u30f3\u306e\u7a2e\u985e",children:[]},{value:"\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc + PKCE",id:"\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc--pkce",children:[]},{value:"\u30ea\u30bd\u30fc\u30b9\u30aa\u30fc\u30ca\u30fc\u30fb\u30d1\u30b9\u30ef\u30fc\u30c9\u30fb\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30ba\u30d5\u30ed\u30fc",id:"\u30ea\u30bd\u30fc\u30b9\u30aa\u30fc\u30ca\u30fc\u30fb\u30d1\u30b9\u30ef\u30fc\u30c9\u30fb\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30ba\u30d5\u30ed\u30fc",children:[]}]}],o={toc:l};function p(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"openid-connect-oidc"},"OpenID Connect (OIDC)"),Object(i.b)("p",null,"\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u306a\u8a8d\u8a3c\u306b\u304a\u3044\u3066OpenID Connect (OIDC)\u306f\u4e3b\u6d41\u306a\u8a8d\u8a3c\u65b9\u5f0f\u306e1\u3064\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),Object(i.b)("p",null,"\u65b0\u3057\u3044\u30b5\u30fc\u30d3\u30b9\u3092\u4f7f\u3046\u6642\u306b\u540d\u524d\u3084\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u767b\u9332\u305b\u305a\u306bSNS\u306eID\u3067\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u308b\u306e\u304c\u6700\u8fd1\u306e\u30c8\u30ec\u30f3\u30c9\u3067\u3059\u304c\u3001\u305d\u308c\u3089\u306fOpenID Connect\u3092\u4f7f\u3063\u3066\u5b9f\u73fe\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),Object(i.b)("p",null,"\u4ee5\u4e0b\u3067\u306f\u3001OpenID Connect\u306b\u3088\u308b\u8a8d\u8a3c\u306b\u3064\u3044\u3066\u7c21\u5358\u306b\u7d39\u4ecb\u3057\u3066\u3044\u307e\u3059\u3002"),Object(i.b)("h3",{id:"openid-connect\u306b\u304a\u3051\u308b\u8a8d\u8a3c\u30d5\u30ed\u30fc"},"OpenID Connect\u306b\u304a\u3051\u308b\u8a8d\u8a3c\u30d5\u30ed\u30fc"),Object(i.b)("p",null,"OpenID Connect\u3067\u306f\u8a8d\u8a3c\u306e\u305f\u3081\u306e\u30d5\u30ed\u30fc\u304c\u3044\u304f\u3064\u304b\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u3059\u3002",Object(i.b)("a",{parentName:"p",href:"/mobile-app-crib-notes/reference/auth/login-screens"},"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306e\u8868\u793a\u30d1\u30bf\u30fc\u30f3"),"\u3067\u7d39\u4ecb\u3057\u3066\u3044\u308b\u3088\u3046\u306b\u3001\n\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u4e3b\u306b\u5229\u7528\u3055\u308c\u308bOIDC\u306e\u8a8d\u8a3c\u30d5\u30ed\u30fc\u306e\u4ee5\u4e0b2\u3064\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc + PKCE"),Object(i.b)("li",{parentName:"ol"},"\u30ea\u30bd\u30fc\u30b9\u30aa\u30fc\u30ca\u30fc\u30fb\u30d1\u30b9\u30ef\u30fc\u30c9\u30fb\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30ba\u30d5\u30ed\u30fc")),Object(i.b)("p",null,"\u3053\u308c\u3089\u306e\u30d5\u30ed\u30fc\u306fOAuth 2.0\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u3067\u3001\u4ee5\u4e0b\u306e\u6587\u7ae0\u4e2d\u3067\u3082OAuth 2.0\u3068\u3057\u3066\u8a00\u53ca\u3057\u3066\u3044\u308b\u90e8\u5206\u304c\u3042\u308a\u307e\u3059\u3002"),Object(i.b)("p",null,"\u306a\u304a\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8a8d\u8a3c\u306bOAuth 2.0\u3092\u5229\u7528\u3059\u308b\u3068\u304d\u306eBest Current Practice\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u308b",Object(i.b)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc8252.txt"},"RFC 8252"),"\u3067\u306f\u3001\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc\uff0bPKCE\u3092\u63a1\u7528\u3057\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001OpenID Foundation\u306fRFC 8252\u3092\u5b9f\u88c5\u3057\u305fSDK\uff08",Object(i.b)("a",{parentName:"p",href:"https://appauth.io/"},"AppAuth"),"\uff09\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306eSDK\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30a2\u30d7\u30ea\u306b\u6bd4\u8f03\u7684\u7c21\u5358\u306b\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc\uff0bPKCE\u3067\u306e\u8a8d\u8a3c\u3092\u5c0e\u5165\u3067\u304d\u307e\u3059\u3002"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"OpenID Connect\u3067\u306f\u3001\u3088\u308a\u5b89\u5168\u306a\u30cf\u30a4\u30d6\u30ea\u30c3\u30c9\u30d5\u30ed\u30fc\u3068\u3044\u3046\u8a8d\u8a3c\u30d5\u30ed\u30fc\u3082\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u305f\u3060\u3001\u30d5\u30ed\u30fc\u304c\u8907\u96d1\u3067\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30e6\u30fc\u30b6\u64cd\u4f5c\u3068\u3044\u3046\u89b3\u70b9\u3067\u306f\u300c\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc\uff0bPKCE\u300d\u3068\u5909\u308f\u3089\u306a\u3044\u306e\u3067\u3053\u3053\u3067\u306f\u5272\u611b\u3057\u3066\u3044\u307e\u3059\u3002\n\u30cf\u30a4\u30d6\u30ea\u30c3\u30c9\u30d5\u30ed\u30fc\u306e\u4ed5\u69d8\u306b\u3064\u3044\u3066\u306f",Object(i.b)("a",{parentName:"p",href:"https://openid-foundation-japan.github.io/openid-connect-core-1_0.ja.html#HybridFlowAuth"},"Authentication using the Hybrid Flow - OpenID Connect Core 1.0"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\u3053\u3053\u3067\u306e\u7d39\u4ecb\u306f\u3054\u304f\u7c21\u5358\u306a\u3082\u306e\u306b\u3068\u3069\u3081\u3066\u304a\u308a\u3001\u4e0d\u6b63\u78ba\u306a\u8868\u73fe\u3092\u542b\u3080\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u6b63\u78ba\u306a\u4ed5\u69d8\u306b\u3064\u3044\u3066\u306fRFC\u306a\u3069\u3067\u78ba\u8a8d\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",Object(i.b)("a",{parentName:"p",href:"https://www.openid.or.jp/document/index.html"},"OpenID \u30d5\u30a1\u30a6\u30f3\u30c7\u30fc\u30b7\u30e7\u30f3\u30fb\u30b8\u30e3\u30d1\u30f3"),"\u3067\u306f\u3001OpenID\u95a2\u9023RFC\u306e\u65e5\u672c\u8a9e\u8a33\u3084\u30d7\u30ec\u30bc\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u8cc7\u6599\u3001\u305d\u306e\u4ed6\u5404\u7a2e\u6587\u66f8\u304c\u516c\u958b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"))),Object(i.b)("h3",{id:"openid-connect\u306e\u30c8\u30fc\u30af\u30f3\u306e\u7a2e\u985e"},"OpenID Connect\u306e\u30c8\u30fc\u30af\u30f3\u306e\u7a2e\u985e"),Object(i.b)("p",null,"OpenID Connect\u3067\u5229\u7528\u3055\u308c\u308b\u30c8\u30fc\u30af\u30f3\u306f\u5168\u90e8\u30673\u7a2e\u985e\u3042\u308a\u307e\u3059\u3002"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ID\u30c8\u30fc\u30af\u30f3",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"JSON Web Token(JWT)\u5f62\u5f0f\u3067\u3059"),Object(i.b)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u306e\u5c5e\u6027\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059"),Object(i.b)("li",{parentName:"ul"},"\u901a\u5e38ID\u30c8\u30fc\u30af\u30f3\u306b\u306f\u77ed\u3044\u6709\u52b9\u671f\u9650\u304c\u8a2d\u5b9a\u3055\u308c\u307e\u3059"),Object(i.b)("li",{parentName:"ul"},"\u8a8d\u8a3c\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002Relying Party\u3067\u30a4\u30b7\u30e5\u30a2\u30fc\u306e\u7ba1\u7406\u3059\u308bID\u60c5\u5831\u304c\u5fc5\u8981\u306a\u5834\u5408\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059"))),Object(i.b)("li",{parentName:"ul"},"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u30ea\u30bd\u30fc\u30b9\u30a2\u30af\u30bb\u30b9\u306b\u5fc5\u8981\u306a\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059"),Object(i.b)("li",{parentName:"ul"},"\u901a\u5e38\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306b\u306f\u77ed\u3044\u6709\u52b9\u671f\u9650\u304c\u8a2d\u5b9a\u3055\u308c\u307e\u3059"),Object(i.b)("li",{parentName:"ul"},"\u8a8d\u53ef\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u30ea\u30bd\u30fc\u30b9\u30b5\u30fc\u30d0\u3078\u306e\u30a2\u30af\u30bb\u30b9\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3092\u76ee\u7684\u3068\u3057\u3066\u4f7f\u7528\u3055\u308c\u307e\u3059"))),Object(i.b)("li",{parentName:"ul"},"\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u30c8\u30fc\u30af\u30f3",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u65b0\u3057\u3044ID\u30c8\u30fc\u30af\u30f3\u3082\u3057\u304f\u306f\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u767a\u884c\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059"),Object(i.b)("li",{parentName:"ul"},"ID\u30c8\u30fc\u30af\u30f3\u3082\u3057\u304f\u306f\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306e\u671f\u9650\u304c\u5207\u308c\u305f\u5f8c\u306b\u3001\u518d\u767a\u884c\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3057\u307e\u3059"),Object(i.b)("li",{parentName:"ul"},"\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u30c8\u30fc\u30af\u30f3\u306b\u306f\u6bd4\u8f03\u7684\u9577\u3081\u306e\u6709\u52b9\u671f\u9650\u304c\u8a2d\u5b9a\u3055\u308c\u307e\u3059")))),Object(i.b)("h3",{id:"\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc--pkce"},"\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc + PKCE"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://openid-foundation-japan.github.io/openid-connect-core-1_0.ja.html#CodeFlowAuth"},"\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc"),"\u3067\u306f\u3001\u4ee5\u4e0b\u306e3\u8005\u3067\u3084\u308a\u53d6\u308a\u3057\u307e\u3059\u3002"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"End User",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30e6\u30fc\u30b6"))),Object(i.b)("li",{parentName:"ul"},"OpenID Provider",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u8a8d\u8a3c\u306e\u6a5f\u80fd\u304c\u3042\u308a\u3001Relying Party\u304b\u3089\u8981\u6c42\u3055\u308c\u305f\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u60c5\u5831\u3092\u63d0\u4f9b\u3059\u308b\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u6301\u3064"))),Object(i.b)("li",{parentName:"ul"},"Relying Party(RP)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"OpenID Provider\u304c\u767a\u884c\u3057\u305f\u30c8\u30fc\u30af\u30f3\u3068\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u60c5\u5831\u3092\u4f7f\u3046\u30b5\u30fc\u30d3\u30b9")))),Object(i.b)("p",null,"\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc\u3067\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u304b\u3089\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u3067\u8a8d\u8a3c\u3059\u308b\u30d5\u30ed\u30fc\u3092\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\u3002\n\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306f\u30c8\u30fc\u30af\u30f3\uff08\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3068ID\u30c8\u30fc\u30af\u30f3\u3001\u5834\u5408\u306b\u3088\u3063\u3066\u306f\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u30c8\u30fc\u30af\u30f3\u3082\u542b\u3080\uff09\u3092\u4fdd\u7ba1\u3057\u307e\u3059\u3002\n\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u3067\u306f\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u304b\u3089\u9001\u3089\u308c\u3066\u304d\u305fID\u30c8\u30fc\u30af\u30f3\u3092\u691c\u8a3c\u3059\u308b\u3053\u3068\u3067\u8a8d\u8a3c\u3057\u307e\u3059\u3002\n\u3053\u306e\u5834\u5408\u306eRP\u306f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3068\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u306b\u306a\u308a\u307e\u3059\u3002"),Object(i.b)("p",null,Object(i.b)("img",{alt:"\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc",src:n(226).default})),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\u56f3\u306e\u300c11. \u8a8d\u8a3c\uff08\u30c8\u30fc\u30af\u30f3\u306e\u691c\u8a3c\u3001\u30e6\u30fc\u30b6\u60c5\u5831\u62bd\u51fa\uff09\u300d\u306b\u304a\u3044\u3066\u306f\u3001OP\u306e\u516c\u958b\u9375\u3092\u7528\u3044\u3066\u7f72\u540d\u691c\u8a3c\u3092\u5b9f\u65bd\u3057\u307e\u3059\u3002RP\u306f\u3042\u3089\u304b\u3058\u3081\u516c\u958b\u9375\u3092\u53d6\u5f97\u30fb\u4fdd\u7ba1\u3057\u3066\u304a\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u5185\u3067\u8a8d\u8a3c\u3059\u308b\u969b\u306e\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u306e\u30c8\u30fc\u30af\u30f3\u3092\u691c\u8a3c\u30fb\u30e6\u30fc\u30b6\u60c5\u5831\u306e\u62bd\u51fa\u306b\u3064\u3044\u3066\u306f\u56f3\u793a\u3057\u3066\u304a\u308a\u307e\u305b\u3093\u3002\u3053\u3053\u3067\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u969b\u306e\u8a8d\u8a3c\u306b\u3064\u3044\u3066\u8a00\u53ca\u3057\u3066\u3044\u308b\u304b\u3089\u3067\u3059\u3002"))),Object(i.b)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc\u3092\u4f7f\u3046\u4e0a\u3067\u306f\u3082\u30461\u3064\u91cd\u8981\u306a\u4ed5\u69d8\u3068\u3057\u3066\u3001",Object(i.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7636"},"PKCE"),"\u3068\u547c\u3070\u308c\u308b\u4ed5\u69d8\u304c\u3042\u308a\u307e\u3059\u3002\n\u3053\u306e\u4ed5\u69d8\u306f\u3001\u8a8d\u53ef\u30b3\u30fc\u30c9\u6a2a\u53d6\u308a\u653b\u6483\uff08authorization code interception attack\uff09\u3078\u306e\u5bfe\u7b56\u3068\u3057\u3066\u7b56\u5b9a\u3055\u308c\u305f\u3082\u306e\u3067\u3059\u3002\u4ee5\u4e0b\u306e\u8a18\u4e8b\u3067\u3001\u308f\u304b\u308a\u3084\u3059\u304f\u89e3\u8aac\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://qiita.com/TakahikoKawasaki/items/00f333c72ed96c4da659"},"PKCE: \u8a8d\u53ef\u30b3\u30fc\u30c9\u6a2a\u53d6\u308a\u653b\u6483\u5bfe\u7b56\u306e\u305f\u3081\u306b OAuth \u30b5\u30fc\u30d0\u30fc\u3068\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u5b9f\u88c5\u3059\u3079\u304d\u3053\u3068 - Qiita"))),Object(i.b)("h4",{id:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5f79\u5272"},"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5f79\u5272"),Object(i.b)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u4e0a\u306e\u56f3\u306eRelying Party\u306b\u8a72\u5f53\u3057\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u5f79\u5272\u3092\u62c5\u3044\u307e\u3059\u3002"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u8a8d\u8a3c\u30d5\u30ed\u30fc\u306e\u958b\u59cb",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"End User\u306e\u6307\u793a\u306b\u3057\u305f\u304c\u3063\u3066\u3001OpenID Provider\u306e\u8a8d\u53ef\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b"),Object(i.b)("li",{parentName:"ul"},"End User\u304cOpenID Provider\u306b\u30ed\u30b0\u30a4\u30f3\u6e08\u307f\u3067\u306a\u3044\u5834\u5408\u306f\u3001OpenID Provider\u304c\u8fd4\u3057\u305f\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u8868\u793a\u3059\u308b"),Object(i.b)("li",{parentName:"ul"},"End User\u304cRelying Party\u306b\u5bfe\u3057\u3066\u8a8d\u53ef\u3092\u4e0e\u3048\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001OpenID Provider\u304c\u8fd4\u3057\u305f\u8a8d\u53ef\u753b\u9762\u3092\u8868\u793a\u3059\u308b"))),Object(i.b)("li",{parentName:"ul"},"\u30c8\u30fc\u30af\u30f3\u53d6\u5f97\u30fb\u4fdd\u7ba1",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"OpenId Provider\u304b\u3089\u8fd4\u5374\u3055\u308c\u308b\u8a8d\u53ef\u30b3\u30fc\u30c9\u3092\u53d7\u3051\u53d6\u308a\u3001Open Provider\u306e\u30c8\u30fc\u30af\u30f3\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u8a8d\u53ef\u30b3\u30fc\u30c9\u3092\u4ed8\u4e0e\u3057\u3066\u30c8\u30fc\u30af\u30f3\u53d6\u5f97\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u308b"),Object(i.b)("li",{parentName:"ul"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u304b\u3089\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5b89\u5168\u306a\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u4fdd\u7ba1\u3059\u308b"))),Object(i.b)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u3078\u306e\u30a2\u30af\u30bb\u30b9",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"ID\u30c8\u30fc\u30af\u30f3\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u4ed8\u4e0e\u3057\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b")))),Object(i.b)("h3",{id:"\u30ea\u30bd\u30fc\u30b9\u30aa\u30fc\u30ca\u30fc\u30fb\u30d1\u30b9\u30ef\u30fc\u30c9\u30fb\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30ba\u30d5\u30ed\u30fc"},"\u30ea\u30bd\u30fc\u30b9\u30aa\u30fc\u30ca\u30fc\u30fb\u30d1\u30b9\u30ef\u30fc\u30c9\u30fb\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30ba\u30d5\u30ed\u30fc"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"http://openid-foundation-japan.github.io/rfc6749.ja.html#grant-password"},"\u30ea\u30bd\u30fc\u30b9\u30aa\u30fc\u30ca\u30fc\u30fb\u30d1\u30b9\u30ef\u30fc\u30c9\u30fb\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30ba\u30d5\u30ed\u30fc"),"\u306b\u3082\u3001\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc\u3068\u540c\u3058\u304fEnd User\u3001OpenID Provider\u3001Relying Party\u306e3\u8005\u304c\u767b\u5834\u3057\u307e\u3059\u3002"),Object(i.b)("p",null,"\u305f\u3060\u3057\u3001\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc\u3068\u306f\u7570\u306a\u308aEnd User\u304c\u3059\u3067\u306bRelying Party\u3092\u4fe1\u983c\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u524d\u63d0\u306b\u306a\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u30d5\u30ed\u30fc\u3068\u3057\u3066\u6b21\u306e\u3088\u3046\u306a\u9055\u3044\u304c\u3042\u308a\u307e\u3059\u3002"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u8a8d\u8a3c\u60c5\u5831\u306e\u53d7\u3051\u6e21\u3057",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"End User\u306fOpenID Provider\u306b\u5bfe\u3057\u3066\u3067\u306f\u306a\u304f\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u8a8d\u8a3c\u60c5\u5831\u3092\u6e21\u3059",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc\u306e\u5834\u5408\u3001End User\u306fOpenID Provider\u306b\u5bfe\u3057\u3066\u8a8d\u8a3c\u60c5\u5831\u3092\u6e21\u3059"))))),Object(i.b)("li",{parentName:"ul"},"\u30ea\u30af\u30a8\u30b9\u30c8\u5148\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089OpenID Provider\u306e\u8a8d\u53ef\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306f\u547c\u3070\u305a\u3001\u30c8\u30fc\u30af\u30f3\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u76f4\u63a5\u547c\u3073\u3060\u3059")))),Object(i.b)("p",null,Object(i.b)("img",{alt:"\u30ea\u30bd\u30fc\u30b9\u30aa\u30fc\u30ca\u30fc\u30fb\u30d1\u30b9\u30ef\u30fc\u30c9\u30fb\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30ba\u30d5\u30ed\u30fc",src:n(227).default})),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\u56f3\u306e\u300c4. \u30c8\u30fc\u30af\u30f3\u306e\u691c\u8a3c\u300d\u306b\u304a\u3044\u3066\u306f\u3001OP\u306e\u516c\u958b\u9375\u3092\u7528\u3044\u3066\u7f72\u540d\u691c\u8a3c\u3092\u5b9f\u65bd\u3057\u307e\u3059\u3002RP\u306f\u3042\u3089\u304b\u3058\u3081\u516c\u958b\u9375\u3092\u53d6\u5f97\u30fb\u4fdd\u7ba1\u3057\u3066\u304a\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u5185\u3067\u8a8d\u8a3c\u3059\u308b\u969b\u306e\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u306e\u30c8\u30fc\u30af\u30f3\u3092\u691c\u8a3c\u30fb\u30e6\u30fc\u30b6\u60c5\u5831\u306e\u62bd\u51fa\u306b\u3064\u3044\u3066\u306f\u56f3\u793a\u3057\u3066\u304a\u308a\u307e\u305b\u3093\u3002\u3053\u3053\u3067\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u969b\u306e\u8a8d\u8a3c\u306b\u3064\u3044\u3066\u8a00\u53ca\u3057\u3066\u3044\u308b\u304b\u3089\u3067\u3059\u3002"))),Object(i.b)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306bEnd User\u306e\u8a8d\u8a3c\u60c5\u5831\u304c\u6e21\u3055\u308c\u308b\u305f\u3081\u3001End User\u304b\u3089\u898b\u308b\u3068\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u8a8d\u8a3c\u60c5\u5831\u3092\u60aa\u7528\u3067\u304d\u307e\u3059\u3002\u300c",Object(i.b)("a",{parentName:"p",href:"https://openid-foundation-japan.github.io/rfc6749.ja.html#anchor26"},"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u53d6\u5f97\u76f4\u5f8c\u306b\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u3092\u7834\u68c4\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044"),"\u300d\u3068\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u4ed5\u69d8\u306b\u6e96\u62e0\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u306e\u306f\u96e3\u3057\u3044\u3053\u3068\u3067\u3059\u3002"),Object(i.b)("p",null,"\u3057\u305f\u304c\u3063\u3066\u3001\u3053\u306e\u30d5\u30ed\u30fc\u306fEnd User\u306e\u3053\u306e\u3088\u3046\u306a\u4e0d\u5b89\u3092\u89e3\u6d88\u3067\u304d\u308b\u5834\u5408\u306e\u307f\u5229\u7528\u3067\u304d\u308b\u30d5\u30ed\u30fc\u306b\u306a\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068OpenID Provider\u304c\u3001End User\u304b\u3089\u898b\u3066\u540c\u3058\u30b7\u30b9\u30c6\u30e0\u3067\u3042\u308b\u5834\u5408\u306a\u3069\u304c\u8a72\u5f53\u3057\u307e\u3059\u3002\u307e\u305f\u3001OpenID Provider\u304b\u3089\u898b\u3066\u3082\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u4ed5\u69d8\u3092\u9075\u5b88\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u306f\u3080\u305a\u304b\u3057\u304f\u3001OpenID Provider\u5074\u3067\u3053\u306e\u30d5\u30ed\u30fc\u3092\u8a31\u53ef\u3057\u306a\u3044\u30b1\u30fc\u30b9\u3082\u3042\u308a\u307e\u3059\u3002"),Object(i.b)("p",null,"\u3053\u306e\u30d5\u30ed\u30fc\u3092\u5229\u7528\u3059\u308b\u306b\u306f\u3001\u4e0a\u8a18\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3057\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),Object(i.b)("h4",{id:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5f79\u5272-1"},"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5f79\u5272"),Object(i.b)("p",null,"\u4e0a\u8a18\u56f3\u306eRelying Party\u304c\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u8a72\u5f53\u3057\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u5f79\u5272\u3092\u62c5\u3044\u307e\u3059\u3002"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u8a8d\u8a3c\u60c5\u5831\u306e\u53d6\u5f97\u30fb\u9001\u4fe1",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u8868\u793a\u3057\u3066\u3001\u30e6\u30fc\u30b6\u304b\u3089\u8a8d\u8a3c\u60c5\u5831\u3092\u53d7\u3051\u53d6\u308b"),Object(i.b)("li",{parentName:"ul"},"\u53d7\u3051\u53d6\u3063\u305f\u8a8d\u8a3c\u60c5\u5831\u3092\u3001OpenID Provider\u306e\u30c8\u30fc\u30af\u30f3\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u9001\u4fe1\u3059\u308b"))),Object(i.b)("li",{parentName:"ul"},"\u30c8\u30fc\u30af\u30f3\u53d6\u5f97\u30fb\u4fdd\u7ba1",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"OpenID Provider\u304b\u3089\u30c8\u30fc\u30af\u30f3\u3092\u53d7\u3051\u53d6\u308a\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5b89\u5168\u306a\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u4fdd\u7ba1\u3059\u308b"))),Object(i.b)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u3078\u306e\u30a2\u30af\u30bb\u30b9",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"ID\u30c8\u30fc\u30af\u30f3\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u4ed8\u4e0e\u3057\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b")))))}p.isMDXComponent=!0}}]);