(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1809],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return v}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(r),v=i,p=d["".concat(c,".").concat(v)]||d[v]||f[v]||a;return r?n.createElement(p,o(o({ref:t},l),{},{components:r})):n.createElement(p,o({ref:t},l))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6742:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(9756),i=r(7294),a=r(3727),o=r(2263),u=r(3919),c=r(412),s=(0,i.createContext)({collectLink:function(){}}),l=r(4996),f=r(8780);var d=function(e){var t,r,d=e.isNavLink,v=e.to,p=e.href,m=e.activeClassName,g=e.isActive,y=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,w=void 0===b||b,O=(0,n.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=(0,o.Z)().siteConfig.trailingSlash,k=(0,l.C)().withBaseUrl,E=(0,i.useContext)(s),_=v||p,Z=(0,u.Z)(_),j=null==_?void 0:_.replace("pathname://",""),C=void 0!==j?(r=j,w&&function(e){return e.startsWith("/")}(r)?k(r):r):void 0;C&&Z&&(C=(0,f.applyTrailingSlash)(C,h));var L,P=(0,i.useRef)(!1),x=d?a.OL:a.rU,N=c.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!N&&Z&&null!=C&&window.docusaurus.prefetch(C),function(){N&&L&&L.disconnect()}}),[C,N,Z]);var D=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,S=!C||!Z||D;return C&&Z&&!D&&!y&&E.collectLink(C),S?i.createElement("a",Object.assign({href:C},_&&!Z&&{target:"_blank",rel:"noopener noreferrer"},O)):i.createElement(x,Object.assign({},O,{onMouseEnter:function(){P.current||null==C||(window.docusaurus.preload(C),P.current=!0)},innerRef:function(e){var t,r;N&&e&&Z&&(t=e,r=function(){null!=C&&window.docusaurus.prefetch(C)},(L=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(L.unobserve(t),L.disconnect(),r())}))}))).observe(t))},to:C||""},d&&{isActive:g,activeClassName:m}))}},3919:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return i}})},4996:function(e,t,r){"use strict";r.d(t,{C:function(){return a},Z:function(){return o}});var n=r(2263),i=r(3919);function a(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,o=a.forcePrependBaseUrl,u=void 0!==o&&o,c=a.absolute,s=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(u)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+l:l}(a,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;var r,n=e.split(/[#?]/)[0],i="/"===n?"/":t?(r=n).endsWith("/")?r:r+"/":function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);return e.replace(n,i)}},8780:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(i).default}});var a=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(a).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6258:function(e,t,r){"use strict";r.d(t,{L:function(){return m}});var n=r(2122),i=r(9756),a=r(6742),o=r(4996),u=r(6010),c=r(7294),s={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},l=function(e){var t=e.children,r=e.colSize,l=void 0===r?4:r,f=(0,i.Z)(e,["children","colSize"]),d=(0,o.Z)(f.to);return c.createElement("div",{className:(0,u.Z)("col","col--"+l,s.pageOverviewContainer)},c.createElement(a.Z,(0,n.Z)({className:(0,u.Z)("card",s.pageOverviewLinkCard)},f,{to:d}),t))},f=function(e){var t=e.title;return c.createElement("div",{className:(0,u.Z)("card__header",s.pageOverviewTitle)},c.createElement("h3",null,t))},d=function(e){var t=e.src,r=e.alt,a=(0,i.Z)(e,["src","alt"]),l=(0,o.Z)(t);return c.createElement("div",{className:(0,u.Z)("card__image")},c.createElement("img",(0,n.Z)({className:s.pageOverviewImage},a,{alt:r,src:l})))},v=function(e){var t=e.summary;return c.createElement("div",{className:(0,u.Z)("card__body",s.pageOverviewSummary)},c.createElement("p",null,t))},p=function(e){var t=e.title,r=e.imageUrl,n=e.summary,a=(0,i.Z)(e,["title","imageUrl","summary"]);return c.createElement(l,a,c.createElement(f,{title:t+" \xbb"}),r&&c.createElement(d,{src:r,alt:t}),n&&c.createElement(v,{summary:n}))},m=function(e){var t=e.overviews,r=e.colSize;return c.createElement("section",{className:(0,u.Z)(s.pageList)},c.createElement("div",{className:(0,u.Z)("container")},c.createElement("div",{className:(0,u.Z)("row",s.pageListRow)},t.map((function(e){return c.createElement(p,(0,n.Z)({key:e.to,colSize:r},e))})))))}},898:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=r(2122),i=r(9756),a=r(7294),o=r(3905),u=r(6258),c={title:"Docusaurus",sidebar_label:"About",slug:"/docusaurus"},s=void 0,l={unversionedId:"docusaurus/index",id:"docusaurus/index",isDocsHomePage:!1,title:"Docusaurus",description:"Docusaurus\u3067\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u66f8\u304d\u65b9\u306b\u3064\u3044\u3066\u306e\u30da\u30fc\u30b8\u3067\u3059\u3002",source:"@site/docs/docusaurus/index.mdx",sourceDirName:"docusaurus",slug:"/docusaurus",permalink:"/mobile-app-crib-notes/docusaurus",version:"current",lastUpdatedAt:1621908091,formattedLastUpdatedAt:"2021/5/25",frontMatter:{title:"Docusaurus",sidebar_label:"About",slug:"/docusaurus"}},f=[{title:"Markdown",summary:(0,o.kt)(a.Fragment,null,"Markdown Syntax"),to:"/docusaurus/doc1"},{title:"MDX",summary:(0,o.kt)(a.Fragment,null,"About MDX"),to:"/docusaurus/mdx"}],d=[],v={toc:d};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Docusaurus\u3067\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u66f8\u304d\u65b9\u306b\u3064\u3044\u3066\u306e\u30da\u30fc\u30b8\u3067\u3059\u3002"),(0,o.kt)(u.L,{overviews:f,colSize:12,mdxType:"PageList"}))}p.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{Z:function(){return i}})}}]);