"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[4319],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=l,b=d["".concat(u,".").concat(m)]||d[m]||c[m]||n;return a?r.createElement(b,i(i({ref:t},p),{},{components:a})):r.createElement(b,i({ref:t},p))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<n;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),l=a(86010);const n={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(n.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),l=a(67294),n=a(86010),i=a(12466),o=a(16550),u=a(91980),s=a(67392),p=a(50012);function d(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:l}}=e;return{value:t,label:a,attributes:r,default:l}}))}function c(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(n),(0,l.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=c(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[u,s]=b({queryString:a,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,p.Nk)(a);return[r,(0,l.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),k=(()=>{const e=u??d;return m({value:e,tabValues:n})?e:null})();(0,l.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),f(e)}),[s,f,n]),tabValues:n}}var k=a(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=p.indexOf(t),r=s[a].value;r!==o&&(d(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},i,{className:(0,n.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:r}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=f(e);return l.createElement("div",{className:(0,n.Z)("tabs-container",h.tabList)},l.createElement(v,(0,r.Z)({},e,t)),l.createElement(g,(0,r.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return l.createElement(y,(0,r.Z)({key:String(t)},e))}},48612:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=a(87462),l=(a(67294),a(3905)),n=a(74866),i=a(85162);const o={title:"\u3088\u304f\u3042\u308b\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9"},u=void 0,s={unversionedId:"distribution/usecase",id:"distribution/usecase",title:"\u3088\u304f\u3042\u308b\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9",description:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u6642\u306b\u3088\u304f\u3042\u308b\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u3064\u3044\u3066\u3001\u5229\u7528\u3059\u308b\u30e9\u30a4\u30bb\u30f3\u30b9\u3084\u624b\u9806\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/docs/distribution/usecase.mdx",sourceDirName:"distribution",slug:"/distribution/usecase",permalink:"/mobile-app-crib-notes/distribution/usecase",draft:!1,tags:[],version:"current",lastUpdatedAt:1648600430,formattedLastUpdatedAt:"2022\u5e743\u670830\u65e5",frontMatter:{title:"\u3088\u304f\u3042\u308b\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9"},sidebar:"distribution",previous:{title:"iOS\u306e\u30e9\u30a4\u30bb\u30f3\u30b9",permalink:"/mobile-app-crib-notes/distribution/ios-license"},next:{title:"\u958b\u767a\u8005\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u5229\u7528",permalink:"/mobile-app-crib-notes/distribution/ios-developer-account"}},p={},d=[{value:"\u958b\u767a\u4e2d\u306e\u30a2\u30d7\u30ea\u3092\u958b\u767a\u8005\u306e\u30c7\u30d0\u30a4\u30b9\u3067\u52d5\u4f5c\u78ba\u8a8d\u3057\u305f\u3044",id:"\u958b\u767a\u4e2d\u306e\u30a2\u30d7\u30ea\u3092\u958b\u767a\u8005\u306e\u30c7\u30d0\u30a4\u30b9\u3067\u52d5\u4f5c\u78ba\u8a8d\u3057\u305f\u3044",level:2},{value:"\u304a\u5ba2\u69d8\u306b\u30c7\u30e2\u3092\u898b\u305b\u305f\u3044",id:"\u304a\u5ba2\u69d8\u306b\u30c7\u30e2\u3092\u898b\u305b\u305f\u3044",level:2},{value:"\u793e\u5185\u3084\u696d\u52d9\u59d4\u8a17\u5148\u3067\u30c6\u30b9\u30c8\u3092\u3057\u305f\u3044",id:"\u793e\u5185\u3084\u696d\u52d9\u59d4\u8a17\u5148\u3067\u30c6\u30b9\u30c8\u3092\u3057\u305f\u3044",level:2},{value:"\u304a\u5ba2\u69d8\u3084\u95a2\u4fc2\u8005\u306b\u5b9f\u6a5f\u3067\u30c6\u30b9\u30c8\u3092\u3057\u3066\u3082\u3089\u3044\u305f\u3044",id:"\u304a\u5ba2\u69d8\u3084\u95a2\u4fc2\u8005\u306b\u5b9f\u6a5f\u3067\u30c6\u30b9\u30c8\u3092\u3057\u3066\u3082\u3089\u3044\u305f\u3044",level:2},{value:"\u30d5\u30a3\u30fc\u30eb\u30c9\u30c6\u30b9\u30c8\u3092\u3057\u305f\u3044\u30fb\u30d9\u30fc\u30bf\u30ea\u30ea\u30fc\u30b9\u3057\u305f\u3044",id:"\u30d5\u30a3\u30fc\u30eb\u30c9\u30c6\u30b9\u30c8\u3092\u3057\u305f\u3044\u30d9\u30fc\u30bf\u30ea\u30ea\u30fc\u30b9\u3057\u305f\u3044",level:2}],c={toc:d},m="wrapper";function b(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u6642\u306b\u3088\u304f\u3042\u308b\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u3064\u3044\u3066\u3001\u5229\u7528\u3059\u308b\u30e9\u30a4\u30bb\u30f3\u30b9\u3084\u624b\u9806\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u6bce\u306biOS\u3068Android\u306e\u30bf\u30d6\u304c\u3042\u308b\u306e\u3067\u3001\u914d\u5e03\u3057\u305f\u3044OS\u306b\u5207\u308a\u66ff\u3048\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("h2",{id:"\u958b\u767a\u4e2d\u306e\u30a2\u30d7\u30ea\u3092\u958b\u767a\u8005\u306e\u30c7\u30d0\u30a4\u30b9\u3067\u52d5\u4f5c\u78ba\u8a8d\u3057\u305f\u3044"},"\u958b\u767a\u4e2d\u306e\u30a2\u30d7\u30ea\u3092\u958b\u767a\u8005\u306e\u30c7\u30d0\u30a4\u30b9\u3067\u52d5\u4f5c\u78ba\u8a8d\u3057\u305f\u3044"),(0,l.kt)("p",null,"\u958b\u767a\u4e2d\u306b\u30c7\u30d0\u30a4\u30b9\u3067\u52d5\u4f5c\u78ba\u8a8d\u3057\u305f\u3044\u3068\u304d\u306e\u30a2\u30d7\u30ea\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,l.kt)(n.Z,{defaultValue:"developerIOS",values:[{label:"iOS",value:"developerIOS"},{label:"Android",value:"developerAndroid"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"developerIOS",mdxType:"TabItem"},(0,l.kt)("p",null,"iOS\u3067\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306a\u3069\u306eApp\u306e\u9ad8\u5ea6\u306a\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b\u30a2\u30d7\u30ea\u306e\u5834\u5408\u306f\u3001ADP\u30fbADEP\u30e9\u30a4\u30bb\u30f3\u30b9\u306e\u8a3c\u660e\u66f8\u3001\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u3001\u30c7\u30d0\u30a4\u30b9\u304c\u5fc5\u8981\u3067\u3059\u3002USB\u7d4c\u7531\u3067\u30c7\u30d0\u30a4\u30b9\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306e\u304c\u6700\u3082\u7c21\u5358\u3067\u3059\u304c\u3001\u30c7\u30d0\u30a4\u30b9\u3092ADP\u30fbADEP\u30e9\u30a4\u30bb\u30f3\u30b9\u306b\u767b\u9332\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002ADP\u30fbADEP\u306b\u767b\u9332\u3067\u304d\u308biPhone\u306f\u5951\u7d04\u6bce\u306b100\u53f0\u3068\u3044\u3046\u53b3\u3057\u3044\u5236\u9650\u304c\u3042\u308b\u306e\u3067\u3001\u3067\u304d\u308c\u3070USB\u7d4c\u7531\u3067\u306f\u306a\u304fTestFlight\u307e\u305f\u306fIn-House\u3067\u306e\u914d\u5e03\u3092\u304a\u3059\u3059\u3081\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"App\u306e\u9ad8\u5ea6\u306a\u6a5f\u80fd\u3092\u542b\u307e\u306a\u3044\u5834\u5408\u306f\u3001\u500b\u4eba\u306eApple ID\u306b\u7d10\u3065\u304f\u8a3c\u660e\u66f8\u3001\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u3001\u30c7\u30d0\u30a4\u30b9\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\n\u3053\u3061\u3089\u3082iOS\u306eApp\u306e\u9ad8\u5ea6\u306a\u6a5f\u80fd\u3092\u542b\u3080\u30a2\u30d7\u30ea\u306e\u5834\u5408\u3068\u540c\u69d8\u306bTestFlight\u307e\u305f\u306fIn-House\u3067\u3082\u914d\u5e03\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/ios-testflight"},"ADP\u306eTestFlight\u306e\u5185\u90e8\u30c6\u30b9\u30bf\u30fc\u3067\u914d\u5e03")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/ios-in-house"},"ADEP\u306eIn-House\u3067\u914d\u5e03")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/ios-developer-account"},"\u958b\u767a\u8005\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/ios-develop-certificate"},"ADP\u30fbADEP\u306e\u958b\u767a\u7528\u8a3c\u660e\u66f8\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b")))),(0,l.kt)(i.Z,{value:"developerAndroid",mdxType:"TabItem"},(0,l.kt)("p",null,"Android\u306fiOS\u306e\u3088\u3046\u306bApp\u306e\u9ad8\u5ea6\u306a\u6a5f\u80fd\u3092\u8003\u616e\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002 USB\u7d4c\u7531\u3067\u30c7\u30d0\u30a4\u30b9\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306e\u304c\u6700\u3082\u7c21\u5358\u3067\u3059\u304c\u3001USB\u63a5\u7d9a\u304c\u7981\u6b62\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306fAPK\u30d5\u30a1\u30a4\u30eb\u3067\u306e\u914d\u5e03\u304b\u5185\u90e8\u30c6\u30b9\u30c8\u7248\u3068\u3057\u3066\u306e\u914d\u5e03\u304c\u5229\u7528\u3067\u304d\u307e\u3059\u3002APK\u30d5\u30a1\u30a4\u30eb\u3067\u306e\u914d\u5e03\u306f\u81ea\u5206\u305f\u3061\u3067\u30b5\u30fc\u30d0\u3092\u7acb\u3066\u308b\u306a\u3069\u3057\u3066\u914d\u5e03\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u5185\u90e8\u30c6\u30b9\u30c8\u3067\u3042\u308c\u3070Google Play Console\u7d4c\u7531\u3067\u914d\u5e03\u3067\u304d\u308b\u306e\u3067\u7c21\u5358\u3067\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/android-local"},"\u30c7\u30d0\u30a4\u30b9\u306bUSB\u7d4c\u7531\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/android-apk-dist"},"APK\u30d5\u30a1\u30a4\u30eb\u3092\u914d\u5e03")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/android-google-play-test"},"\u5185\u90e8\u30c6\u30b9\u30c8\u7248\u3067\u914d\u5e03"))))),(0,l.kt)("h2",{id:"\u304a\u5ba2\u69d8\u306b\u30c7\u30e2\u3092\u898b\u305b\u305f\u3044"},"\u304a\u5ba2\u69d8\u306b\u30c7\u30e2\u3092\u898b\u305b\u305f\u3044"),(0,l.kt)("p",null,"\u958b\u767a\u30c1\u30fc\u30e0\u304c\u958b\u767a\u7528\u7aef\u672b\u3092\u64cd\u4f5c\u3057\u3066\u304a\u5ba2\u69d8\u306b\u30c7\u30e2\u3092\u898b\u305b\u305f\u3044\u30b1\u30fc\u30b9\u3067\u306f\n\u30c7\u30e2\u306e\u524d\u306b\u3042\u3089\u304b\u3058\u3081\u3001\u958b\u767a\u7528\u30c7\u30d0\u30a4\u30b9\u306b\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u958b\u767a\u4e2d\u306b\u30c7\u30d0\u30a4\u30b9\u3067\u52d5\u4f5c\u78ba\u8a8d\u3059\u308b\u5834\u5408\u3068\u540c\u69d8\u3067\u3059\u3002"),(0,l.kt)(n.Z,{defaultValue:"demoIOS",values:[{label:"iOS",value:"demoIOS"},{label:"Android",value:"demoAndroid"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"demoIOS",mdxType:"TabItem"},(0,l.kt)("p",null,"iOS\u306e\u5834\u5408\u306fApp\u306e\u9ad8\u5ea6\u306a\u6a5f\u80fd\u3092\u542b\u3080\u304b\u5426\u304b\u306b\u3088\u3063\u3066\u914d\u5e03\u65b9\u6cd5\u304c\u7570\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/ios-testflight"},"ADP\u306eTestFlight\u306e\u5185\u90e8\u30c6\u30b9\u30bf\u30fc\u3067\u914d\u5e03")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/ios-in-house"},"ADEP\u306eIn-House\u3067\u914d\u5e03")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/ios-developer-account"},"\u958b\u767a\u8005\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/ios-develop-certificate"},"ADP\u30fbADEP\u306e\u958b\u767a\u7528\u8a3c\u660e\u66f8\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b")))),(0,l.kt)(i.Z,{value:"demoAndroid",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/android-local"},"\u30c7\u30d0\u30a4\u30b9\u306bUSB\u7d4c\u7531\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/android-apk-dist"},"APK\u30d5\u30a1\u30a4\u30eb\u3092\u914d\u5e03")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/android-google-play-test"},"\u5185\u90e8\u30c6\u30b9\u30c8\u7248\u3067\u914d\u5e03"))))),(0,l.kt)("h2",{id:"\u793e\u5185\u3084\u696d\u52d9\u59d4\u8a17\u5148\u3067\u30c6\u30b9\u30c8\u3092\u3057\u305f\u3044"},"\u793e\u5185\u3084\u696d\u52d9\u59d4\u8a17\u5148\u3067\u30c6\u30b9\u30c8\u3092\u3057\u305f\u3044"),(0,l.kt)(n.Z,{defaultValue:"devTestIOS",values:[{label:"iOS",value:"devTestIOS"},{label:"Android",value:"devTestAndroid"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"devTestIOS",mdxType:"TabItem"},(0,l.kt)("p",null,"ADEP\u30e9\u30a4\u30bb\u30f3\u30b9\u3067\u306eIn-House\u914d\u5e03\u304b\u3001ADP\u3067\u306eTestFlight\uff08\u5185\u90e8\u30c6\u30b9\u30bf\u30fc\uff09\u306e2\u3064\u304c\u9069\u5207\u3067\u3059\u3002\n\u4e21\u8005\u306f\u30c7\u30d0\u30a4\u30b9\u767b\u9332\u53f0\u6570\u5236\u9650\u3068\u914d\u5e03\u65b9\u6cd5\u304c\u7570\u306a\u308a\u307e\u3059\u3002\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8981\u4ef6\u306b\u5fdc\u3058\u3066\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"}),(0,l.kt)("th",{parentName:"tr",align:"left"},"ADP\u306eTestFlight\uff08\u5185\u90e8\u30c6\u30b9\u30bf\u30fc\uff09"),(0,l.kt)("th",{parentName:"tr",align:"left"},"ADEP\u306eIn-House\u914d\u5e03"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30c6\u30b9\u30bf\u30fc\u767b\u9332"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Apple ID\u3092ADP\u30e9\u30a4\u30bb\u30f3\u30b9\u306b\u767b\u9332\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u8981")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30c6\u30b9\u30bf\u30fc\u4eba\u6570\u5236\u9650"),(0,l.kt)("td",{parentName:"tr",align:"left"},"100\u4eba\u307e\u3067"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u306a\u3057")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30c7\u30d0\u30a4\u30b9\u53f0\u6570\u5236\u9650"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1\u4eba\u306b\u3064\u304d30\u53f0\u307e\u3067"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u306a\u3057")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u914d\u5e03\u65b9\u6cd5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TestFlight\u7d4c\u7531"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u524d\u306eHTTPS\u30b5\u30fc\u30d0\u7d4c\u7531")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/ios-testflight"},"ADP\u306eTestFlight\u306e\u5185\u90e8\u30c6\u30b9\u30bf\u30fc\u3067\u914d\u5e03")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/ios-in-house"},"ADEP\u306eIn-House\u3067\u914d\u5e03")))),(0,l.kt)(i.Z,{value:"devTestAndroid",mdxType:"TabItem"},(0,l.kt)("p",null,"APK\u30d5\u30a1\u30a4\u30eb\u3092\u81ea\u524d\u3067\u914d\u5e03\u3059\u308b\u304b\u3001\u5185\u90e8\u30c6\u30b9\u30c8\u307e\u305f\u306f\u30af\u30ed\u30fc\u30ba\u30c9\u30c6\u30b9\u30c8\u304c\u4f7f\u3048\u307e\u3059\u3002\n\u5185\u90e8\u30c6\u30b9\u30c8\u3084\u30af\u30ed\u30fc\u30ba\u30c9\u30c6\u30b9\u30c8\u306fGoogle Play Console\u304c\u30a2\u30d7\u30ea\u3092\u914d\u5e03\u3057\u3066\u304f\u308c\u308b\u306e\u3067\u3001\u914d\u5e03\u306e\u4ed5\u7d44\u307f\u3092\u81ea\u524d\u3067\u7528\u610f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u305b\u3093\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/android-apk-dist"},"APK\u30d5\u30a1\u30a4\u30eb\u3092\u914d\u5e03")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/android-google-play-test"},"Google Play\u3067\u30c6\u30b9\u30c8\u914d\u5e03"))))),(0,l.kt)("h2",{id:"\u304a\u5ba2\u69d8\u3084\u95a2\u4fc2\u8005\u306b\u5b9f\u6a5f\u3067\u30c6\u30b9\u30c8\u3092\u3057\u3066\u3082\u3089\u3044\u305f\u3044"},"\u304a\u5ba2\u69d8\u3084\u95a2\u4fc2\u8005\u306b\u5b9f\u6a5f\u3067\u30c6\u30b9\u30c8\u3092\u3057\u3066\u3082\u3089\u3044\u305f\u3044"),(0,l.kt)(n.Z,{defaultValue:"clientTestIOS",values:[{label:"iOS",value:"clientTestIOS"},{label:"Android",value:"clientTestAndroid"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"clientTestIOS",mdxType:"TabItem"},(0,l.kt)("p",null,"TestFlight(\u5916\u90e8\u30c6\u30b9\u30bf\u30fc)\u306e\u5834\u5408\u3001\u30c6\u30b9\u30bf\u30fc\u3067\u3042\u308b\u304a\u5ba2\u69d8\u3092App Store Connect\u306e\u30e6\u30fc\u30b6\u306b\u767b\u9332\u3059\u308b\u3053\u3068\u306a\u304f\u3001\u30d1\u30d6\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3092\u4ecb\u3057\u3066\u304a\u5ba2\u69d8\u306e\u30c7\u30d0\u30a4\u30b9\u306b\u30a2\u30d7\u30ea\u3092\u914d\u4fe1\u3067\u304d\u307e\u3059\u3002\u3082\u3057\u304a\u5ba2\u69d8\u81ea\u8eab\u3067ADP\u30fbADEP\u30e9\u30a4\u30bb\u30f3\u30b9\u3092\u5951\u7d04\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u305d\u306e\u30e9\u30a4\u30bb\u30f3\u30b9\u3092\u4f7f\u3063\u3066\u30a2\u30d7\u30ea\u3092\u304a\u5ba2\u69d8\u306b\u914d\u4fe1\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u306f\u3001IPA\u30d5\u30a1\u30a4\u30eb\u3092\u30d3\u30eb\u30c9\u3059\u308b\u6642\u306b\u3001\u304a\u5ba2\u69d8\u306e\u8a3c\u660e\u66f8\u3001\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306a\u3069\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/ios-testflight"},"ADP\u306eTestFlight\u306e\u5916\u90e8\u30c6\u30b9\u30bf\u30fc\u3067\u914d\u5e03")),(0,l.kt)("li",{parentName:"ul"},"\u304a\u5ba2\u69d8\u306e",(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/ios-testflight"},"ADP\u306eTestFlight(\u5185\u90e8\u30c6\u30b9\u30bf\u30fc\u3001\u5916\u90e8\u30c6\u30b9\u30bf\u30fc)\u3067\u914d\u5e03")),(0,l.kt)("li",{parentName:"ul"},"\u304a\u5ba2\u69d8\u306e",(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/ios-in-house"},"ADEP\u306eIn-House\u3067\u914d\u5e03")))),(0,l.kt)(i.Z,{value:"clientTestAndroid",mdxType:"TabItem"},(0,l.kt)("p",null,"\u304a\u5ba2\u69d8\u306eGoogle\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u767b\u9332\u3057\u3066\u3044\u308b\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u30c6\u30b9\u30bf\u30fc\u3068\u3057\u3066\u767b\u9332\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30aa\u30fc\u30d7\u30f3\u30c6\u30b9\u30c8\u3067\u3042\u308c\u3070Google Play\u7d4c\u7531\u3067\u30a2\u30d7\u30ea\u3092\u914d\u4fe1\u3067\u304d\u308b\u306e\u3067\u304a\u5ba2\u69d8\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306e\u767b\u9332\u306f\u4e0d\u8981\u3067\u3059\u304c\u3001Google Play\u3067\u65e9\u671f\u30a2\u30af\u30bb\u30b9\u7248\u30a2\u30d7\u30ea\u3068\u3057\u3066\u8ab0\u3067\u3082\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002\n\u914d\u5e03\u3059\u308b\u7bc4\u56f2\u3092\u5236\u9650\u3057\u305f\u3044\u5834\u5408\u306f\u5185\u90e8\u30c6\u30b9\u30c8\u3084\u30af\u30ed\u30fc\u30ba\u30c6\u30b9\u30c8\u3067\u914d\u5e03\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/android-google-play-test"},"\u5185\u90e8\u30c6\u30b9\u30c8\u7248\u3067\u914d\u5e03")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/android-google-play-test"},"\u30af\u30ed\u30fc\u30ba\u30c9\u30c6\u30b9\u30c8\u7248\u3067\u914d\u5e03"))))),(0,l.kt)("h2",{id:"\u30d5\u30a3\u30fc\u30eb\u30c9\u30c6\u30b9\u30c8\u3092\u3057\u305f\u3044\u30d9\u30fc\u30bf\u30ea\u30ea\u30fc\u30b9\u3057\u305f\u3044"},"\u30d5\u30a3\u30fc\u30eb\u30c9\u30c6\u30b9\u30c8\u3092\u3057\u305f\u3044\u30fb\u30d9\u30fc\u30bf\u30ea\u30ea\u30fc\u30b9\u3057\u305f\u3044"),(0,l.kt)(n.Z,{defaultValue:"betaReleaseIOS",values:[{label:"iOS",value:"betaReleaseIOS"},{label:"Android",value:"betaReleaseAndroid"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"betaReleaseIOS",mdxType:"TabItem"},(0,l.kt)("p",null,"iOS\u306e\u5834\u5408\u3001TestFlight(\u5916\u90e8\u30c6\u30b9\u30bf\u30fc)\u306a\u3089\u30d1\u30d6\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3067\u8ab0\u3067\u3082\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u5916\u90e8\u30c6\u30b9\u30bf\u30fc\u3068\u3057\u3066\u304a\u5ba2\u69d8\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u767b\u9332\u3057\u3066\u62db\u5f85\u30b3\u30fc\u30c9\u3092\u9001\u4fe1\u3059\u308c\u3070\u3001\u304a\u5ba2\u69d8\u5074\u3067\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/ios-testflight"},"ADP\u306eTestFlight\u306e\u5916\u90e8\u30c6\u30b9\u30bf\u30fc\u3067\u914d\u5e03")))),(0,l.kt)(i.Z,{value:"betaReleaseAndroid",mdxType:"TabItem"},(0,l.kt)("p",null,"Android\u306e\u5834\u5408\u3001\u30aa\u30fc\u30d7\u30f3\u30c6\u30b9\u30c8\u306a\u3089Google Play\u3067\u65e9\u671f\u30a2\u30af\u30bb\u30b9\u7248\u30a2\u30d7\u30ea\u3068\u3057\u3066\u8ab0\u3067\u3082\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u308b\u72b6\u614b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/distribution/android-google-play-test"},"\u30aa\u30fc\u30d7\u30f3\u30c6\u30b9\u30c8\u3067\u914d\u5e03"))))))}b.isMDXComponent=!0}}]);