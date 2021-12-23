"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[5806],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(87462),a=n(67294),i=n(72389),o=n(79443);var l=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=n(63616),c=n(86010),u="tabItem_1uMI";function s(e){var t,n,i,o=e.lazy,s=e.block,d=e.defaultValue,m=e.values,f=e.groupId,v=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,p.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(t=null!=d?d:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),P=y.tabGroupChoices,N=y.setTabGroupChoices,A=(0,a.useState)(h),I=A[0],T=A[1],E=[],w=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var x=P[f];null!=x&&x!==I&&b.some((function(e){return e.value===x}))&&T(x)}var O=function(e){var t=e.currentTarget,n=E.indexOf(t),r=b[n].value;r!==I&&(w(t),T(r),null!=f&&N(f,r))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":s},v)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:O,onClick:O},i,{className:(0,c.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(k.filter((function(e){return e.props.value===I}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function d(e){var t=(0,i.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},76869:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return f}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(26396),l=n(58215),p=["components"],c={title:"API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u4f5c\u6210"},u=void 0,s={unversionedId:"react-native/learn/todo-app/networking/generate-api-client",id:"react-native/learn/todo-app/networking/generate-api-client",title:"API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u4f5c\u6210",description:"ToDo\u30a2\u30d7\u30ea\u3067\u306f\u5404\u753b\u9762\u3067TodoService\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u307e\u3059\u304c\u3001TodoService\u304b\u3089\u76f4\u63a5REST API\u3092\u547c\u3073\u3060\u3059\u306e\u3067\u306f\u306a\u304f\u5171\u901a\u7684\u306aAPI\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u7528\u610f\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/todo-app/networking/generate-api-client.mdx",sourceDirName:"react-native/learn/todo-app/networking",slug:"/react-native/learn/todo-app/networking/generate-api-client",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/generate-api-client",tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u4f5c\u6210"},sidebar:"learn",previous:{title:"REST API\u306e\u6e96\u5099",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/setting-up-local-server"},next:{title:"REST API\u306e\u547c\u3073\u3060\u3057",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/api-request"}},d=[{value:"Open API\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304b\u3089\u81ea\u52d5\u751f\u6210",id:"open-api\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304b\u3089\u81ea\u52d5\u751f\u6210",children:[],level:2},{value:"API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u7c21\u5358\u306a\u8aac\u660e",id:"api\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u7c21\u5358\u306a\u8aac\u660e",children:[],level:2}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ToDo\u30a2\u30d7\u30ea\u3067\u306f\u5404\u753b\u9762\u3067",(0,i.kt)("inlineCode",{parentName:"p"},"TodoService"),"\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u307e\u3059\u304c\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"TodoService"),"\u304b\u3089\u76f4\u63a5REST API\u3092\u547c\u3073\u3060\u3059\u306e\u3067\u306f\u306a\u304f\u5171\u901a\u7684\u306aAPI\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u7528\u610f\u3057\u307e\u3059\u3002\nAPI\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u3001API\u3068\u901a\u4fe1\u3057\u3001JSON\u3068Open API\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u30e2\u30c7\u30eb\u3068\u306e\u578b\u5909\u63db\u3084\u5171\u901a\u7684\u306a\u30a8\u30e9\u30fc\u51e6\u7406\u3092\u62c5\u5f53\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"open-api\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304b\u3089\u81ea\u52d5\u751f\u6210"},"Open API\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304b\u3089\u81ea\u52d5\u751f\u6210"),(0,i.kt)("p",null,"ToDo\u30a2\u30d7\u30ea\u3067\u306f\u3001Open API\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304b\u3089API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u81ea\u52d5\u751f\u6210\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b3\u30fc\u30c9\u306e\u751f\u6210\u306b\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://openapi-generator.tech/"},"OpenAPI Generator"),"\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002OpenAPI\u304c\u63d0\u4f9b\u3057\u3066\u3044\u308b\u30c4\u30fc\u30eb\u3067\u3001OpenAPI\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304b\u3089\u69d8\u3005\u306a\u3082\u306e\u3092\u751f\u6210\u3067\u304d\u307e\u3059\u3002TypeScript\u7528\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b3\u30fc\u30c9\u306b\u3064\u3044\u3066\u3082\u69d8\u3005\u306a\u5b9f\u88c5\u3092\u751f\u6210\u3067\u304d\u307e\u3059\u304c\u3001\u3053\u3053\u3067\u306ftypescript-fetch\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u81ea\u52d5\u751f\u6210\u3067\u5229\u7528\u3059\u308bOpenAPI\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ws-4020/mobile-app-hands-on-backend/tree/main/rest-api-specification"},"mobile-app-hands-on-backend"),"\u3067\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u3092\u5229\u7528\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"npx"),"\u304b\u3001package.json\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"npm script"),"\u3092\u8ffd\u52a0\u3057\u3066API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u81ea\u52d5\u751f\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)(o.Z,{defaultValue:"npx",values:[{label:"npx",value:"npx"},{label:"npm script",value:"npm-script"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npx",mdxType:"TabItem"},(0,i.kt)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"npx"),"\u3067\u751f\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"npx @openapitools/openapi-generator-cli generate -g typescript-fetch -i https://raw.githubusercontent.com/ws-4020/mobile-app-hands-on-backend/main/rest-api-specification/openapi.yaml -o src/backend/generated-rest-client --additional-properties supportsES6=true,typescriptThreePlus=true\n"))),(0,i.kt)(l.Z,{value:"npm-script",mdxType:"TabItem"},(0,i.kt)("p",null,"\u307e\u305a\u3001ToDo\u30a2\u30d7\u30ea\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"openapi-generator-cli"),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"npm install -D @openapitools/openapi-generator-cli\n")),(0,i.kt)("p",null,"\u4ee5\u4e0b\u306e\u4f8b\u306e\u3088\u3046\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"npm script"),"\u306b\u81ea\u52d5\u751f\u6210\u7528\u306escript\u3092\u8ffd\u52a0\u3057\u3066",(0,i.kt)("inlineCode",{parentName:"p"},"npm run api:gen-client"),"\u3067\u751f\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="package.json"',title:'"package.json"'},'     "reset-cache:all": "node .script/runner.js reset-cache --all",\n-    "reset-cache:interactive": "node .script/runner.js reset-cache --interactive"\n+    "reset-cache:interactive": "node .script/runner.js reset-cache --interactive",\n+    "api:gen-client": "openapi-generator-cli generate -g typescript-fetch -i https://raw.githubusercontent.com/ws-4020/mobile-app-hands-on-backend/main/rest-api-specification/openapi.yaml -o src/backend/generated-rest-client --additional-properties supportsES6=true,typescriptThreePlus=true"\n   },\n')))),(0,i.kt)("h2",{id:"api\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u7c21\u5358\u306a\u8aac\u660e"},"API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u7c21\u5358\u306a\u8aac\u660e"),(0,i.kt)("p",null,"\u305d\u308c\u3067\u306f\u3001\u81ea\u52d5\u751f\u6210\u3055\u308c\u305fAPI\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u7c21\u5358\u306b\u898b\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002\nAPI\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"/src/backend/generated-rest-client")," \u306b\u4f5c\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"todo_app\n\u2514\u2500src/backend\n     \u2514\u2500generated-rest-client\n        \u251c\u2500apis/\n        \u251c\u2500models/\n        \u2514\u2500runtime.ts\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"apis"),"\u306b\u306fREST API\u3092\u547c\u3073\u3060\u3059\u305f\u3081\u306e\u90e8\u54c1\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"TodosApi.ts"),"\uff09\u304c\u3042\u308a\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"models"),"\u306b\u306fAPI\u547c\u3073\u51fa\u3057\u306eInput,Output\u306b\u306a\u308b\u30e2\u30c7\u30eb\u304c\u751f\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002\nAPI\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u5229\u7528\u3059\u308b\u3068\u30a8\u30e9\u30fc\u30ec\u30b9\u30dd\u30f3\u30b9\uff08\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c4xx\u307e\u305f\u306f5xx\u7cfb\uff09\u306e\u5834\u5408\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Promise.reject")," \u3055\u308c\u308b\u305f\u3081\u3001\u30a8\u30e9\u30fc\u3068\u3057\u3066\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"runtime.ts"),"\u3067\u306f\u3001\u3059\u3079\u3066\u306eREST API\u306e\u547c\u3073\u3060\u3057\u306b\u5171\u901a\u3059\u308b\u6a5f\u80fd\u304c\u5b9f\u88c5\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u4e2d\u3067REST API\u3078\u306e\u63a5\u7d9a\u5148\u3082\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3059\u304c\u3001OpenAPI\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"server"),"\u306b\u6307\u5b9a\u3055\u308c\u3066\u3044\u308b\u5024\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3068\u3057\u3066\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="/src/backend/generated-rest-client/runtime.ts"',title:'"/src/backend/generated-rest-client/runtime.ts"'},'export const BASE_PATH = "http://localhost:9080/api".replace(/\\/+$/, "");\n')),(0,i.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u63a5\u7d9a\u5148\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),"\u3068\u306a\u3063\u3066\u3044\u308b\u305f\u3081\u3001\u3053\u306e\u307e\u307e\u3067\u306fAPI\u30b5\u30fc\u30d0\u3092\u8d77\u52d5\u3057\u3066\u3044\u308b\u30de\u30b7\u30f3\u4ee5\u5916\u306e\u30c7\u30d0\u30a4\u30b9\u3084Android\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u306a\u3069\u304b\u3089\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u305b\u3093\u3002"),(0,i.kt)("p",null,"\u63a5\u7d9a\u5148\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306b\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"backend"),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u63a5\u7d9a\u5148\u3092\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u518d\u751f\u6210\u3057\u305f\u3068\u304d\u306b\u4fee\u6b63\u6f0f\u308c\u304c\u767a\u751f\u3057\u306a\u3044\u3088\u3046\u306b\u3001\u81ea\u52d5\u751f\u6210\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u306f\u4fee\u6b63\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002\n\u307e\u305f\u3001\u81ea\u52d5\u751f\u6210\u3057\u305fAPI\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3084\u8a2d\u5b9a\u30e2\u30b8\u30e5\u30fc\u30eb\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"TodoService"),"\u304b\u3089\u5229\u7528\u3057\u3084\u3059\u3044\u3088\u3046\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts"),"\u3082\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u6b21\u306e\u3088\u3046\u306bbackend\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"config.ts"),"\u3068",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts"),"\u3092\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"${\u7aef\u672b\u306eIP}"),"\u306b\u306f",(0,i.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/setting-up-local-server#api%E3%82%B5%E3%83%BC%E3%83%90%E3%81%B8%E3%81%AE%E6%8E%A5%E7%B6%9A%E7%A2%BA%E8%AA%8D"},"API\u30b5\u30fc\u30d0\u3078\u306e\u63a5\u7d9a\u78ba\u8a8d"),"\u3067\u78ba\u8a8d\u3057\u305fIP\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="/src/backend/config.ts"',title:'"/src/backend/config.ts"'},"import {Configuration} from './generated-rest-client';\nexport const config = new Configuration({basePath: 'http://${\u7aef\u672b\u306eIP}:9080/api'});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="/src/backend/index.ts"',title:'"/src/backend/index.ts"'},"export * from './generated-rest-client';\nexport * from './config';\n")),(0,i.kt)("p",null,"\u3053\u308c\u3067\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"TodoService"),"\u304b\u3089REST API\u3092\u547c\u3073\u3060\u3059\u6e96\u5099\u304c\u6574\u3044\u307e\u3057\u305f\u3002\u6b21\u306f\u3001\u5b9f\u969b\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"TodoService"),"\u304b\u3089REST API\u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u7d50\u679c\u3092\u753b\u9762\u306b\u8868\u793a\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"))}f.isMDXComponent=!0}}]);