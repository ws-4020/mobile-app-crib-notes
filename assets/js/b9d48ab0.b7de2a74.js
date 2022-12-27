"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8382],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>v});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,v=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(v,o(o({ref:t},s),{},{components:a})):n.createElement(v,o({ref:t},s))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),i=a(67392),p=a(7094),u=a(12466);const s="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:o,values:d,groupId:m,className:v}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,i.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===o?o:o??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:y}=(0,p.U)(),[E,I]=(0,r.useState)(g),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=m){const e=h[m];null!=e&&e!==E&&k.some((t=>t.value===e))&&I(e)}const N=e=>{const t=e.currentTarget,a=P.indexOf(t),n=k[a].value;n!==E&&(T(t),I(n),null!=m&&y(m,String(n)))},A=e=>{let t=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;t=P[a]??P[0];break}case"ArrowLeft":{const a=P.indexOf(e.currentTarget)-1;t=P[a]??P[P.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},v)},k.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>P.push(e),onKeyDown:A,onClick:N},o,{className:(0,l.Z)("tabs__item",c,o?.className,{"tabs__item--active":E===t})}),a??t)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},37922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),o=a(85162);const i={title:"REST API\u306e\u6e96\u5099"},p=void 0,u={unversionedId:"react-native/learn/todo-app/networking/setting-up-local-server",id:"react-native/learn/todo-app/networking/setting-up-local-server",title:"REST API\u306e\u6e96\u5099",description:"\u3053\u3053\u307e\u3067\u3067\u3001ToDo\u30a2\u30d7\u30ea\u306e\u753b\u9762\u306f\u4e00\u901a\u308a\u5b9f\u88c5\u3067\u304d\u307e\u3057\u305f\u3002\u3053\u3053\u304b\u3089\u306f\u3001\u753b\u9762\u306b\u8868\u793a\u3059\u308b\u30c7\u30fc\u30bf\u3092REST API\u304b\u3089\u53d6\u5f97\u3059\u308b\u3088\u3046\u306b\u4fee\u6b63\u3057\u3066\u3044\u304d\u307e\u3059\u3002",source:"@site/docs/react-native/learn/todo-app/networking/setting-up-local-server.mdx",sourceDirName:"react-native/learn/todo-app/networking",slug:"/react-native/learn/todo-app/networking/setting-up-local-server",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/setting-up-local-server",draft:!1,tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021\u5e747\u67089\u65e5",frontMatter:{title:"REST API\u306e\u6e96\u5099"},sidebar:"learn",previous:{title:"\u30ed\u30b4",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/logo"},next:{title:"API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u4f5c\u6210",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/generate-api-client"}},s={},c=[{value:"\u958b\u767a\u6642\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u69cb\u6210",id:"\u958b\u767a\u6642\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u69cb\u6210",level:2},{value:"API\u30b5\u30fc\u30d0\u306e\u8d77\u52d5",id:"api\u30b5\u30fc\u30d0\u306e\u8d77\u52d5",level:2},{value:"API\u30b5\u30fc\u30d0\u3078\u306e\u63a5\u7d9a\u78ba\u8a8d",id:"api\u30b5\u30fc\u30d0\u3078\u306e\u63a5\u7d9a\u78ba\u8a8d",level:2},{value:"\u30a2\u30af\u30bb\u30b9\u5148URL",id:"\u30a2\u30af\u30bb\u30b9\u5148url",level:3},{value:"\u30ec\u30b9\u30dd\u30f3\u30b9",id:"\u30ec\u30b9\u30dd\u30f3\u30b9",level:3}],d={toc:c};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u3053\u3053\u307e\u3067\u3067\u3001ToDo\u30a2\u30d7\u30ea\u306e\u753b\u9762\u306f\u4e00\u901a\u308a\u5b9f\u88c5\u3067\u304d\u307e\u3057\u305f\u3002\u3053\u3053\u304b\u3089\u306f\u3001\u753b\u9762\u306b\u8868\u793a\u3059\u308b\u30c7\u30fc\u30bf\u3092REST API\u304b\u3089\u53d6\u5f97\u3059\u308b\u3088\u3046\u306b\u4fee\u6b63\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u958b\u767a\u6642\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u69cb\u6210"},"\u958b\u767a\u6642\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u69cb\u6210"),(0,r.kt)("p",null,"ToDo\u30a2\u30d7\u30ea\u3092API\u30b5\u30fc\u30d0\u3068\u63a5\u7d9a\u3059\u308b\u5834\u5408\u3001\u4e0b\u306e\u56f3\u306b\u3042\u308b\u3088\u3046\u306a\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u69cb\u6210\u3067\u958b\u767a\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\u3044\u307e\u307e\u3067\u306e\u69cb\u6210\u3068\u3053\u308c\u304b\u3089\u6e96\u5099\u3059\u308b\u69cb\u6210\u306e\u9055\u3044\u304c\u308f\u304b\u308b\u3088\u3046\u8272\u5206\u3051\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30b0\u30ec\u30fc\u90e8\u5206\u306f\u753b\u9762\u306e\u5b9f\u88c5\u306e\u3068\u304d\u306b\u7528\u610f\u3057\u3001\u78ba\u8a8d\u3057\u3066\u3044\u305f\u90e8\u5206\u3067\u3059\u3002Metro Bundler\u306eURL\u306f\u3001React Native\u3084Expo\u304c\u81ea\u52d5\u7684\u306b\u8a2d\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9752\u8272\u90e8\u5206\u306f\u3053\u308c\u304b\u3089\u6e96\u5099\u3059\u308b\u90e8\u5206\u3092\u8868\u3057\u3066\u3044\u307e\u3059\u3002REST API\u306eURL\u306f\u3001React Native\u3084Expo\u3067\u306f\u8a2d\u5b9a\u3055\u308c\u306a\u3044\u306e\u3067\u3001ToDo\u30a2\u30d7\u30ea\u3067\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:a(75364).Z,width:"502",height:"232"})),(0,r.kt)("p",null,"\u3053\u308c\u307e\u3067\u306e\u69cb\u6210\u3068\u306e\u5927\u304d\u306a\u9055\u3044\u306fREST API\u3068\u306e\u901a\u4fe1\u304c\u767a\u751f\u3059\u308b\u90e8\u5206\u3067\u3059\u3002\n\u3053\u3053\u304b\u3089\u306f\u3001ToDo\u30a2\u30d7\u30ea\u304b\u3089REST API\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3057\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u3068\u3057\u3066\u53d7\u3051\u53d6\u3063\u305f\u7d50\u679c\u3092\u753b\u9762\u306b\u8868\u793a\u3059\u308b\u65b9\u6cd5\u306a\u3069\u3092\u5b66\u7fd2\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"api\u30b5\u30fc\u30d0\u306e\u8d77\u52d5"},"API\u30b5\u30fc\u30d0\u306e\u8d77\u52d5"),(0,r.kt)("p",null,"ToDo\u30a2\u30d7\u30ea\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u7aef\u672b\u306bAPI\u30b5\u30fc\u30d0\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002API\u30b5\u30fc\u30d0\u306fDocker\u3092\u5229\u7528\u3057\u3066\u8d77\u52d5\u3059\u308b\u65b9\u6cd5\u3068\u3001Maven\u3092\u5229\u7528\u3057\u3066\u8d77\u52d5\u3059\u308b\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002\u3044\u305a\u308c\u304b\u304a\u597d\u307f\u306e\u65b9\u6cd5\u3067\u8d77\u52d5\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ws-4020/mobile-app-hands-on-backend#readme"},"\u30cf\u30f3\u30ba\u30aa\u30f3\u7528 \u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea"),"\u306b\u305d\u308c\u305e\u308c\u306e\u8d77\u52d5\u65b9\u6cd5\u304c\u8a18\u8f09\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u78ba\u8a8d\u3057\u3066\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"API\u30b5\u30fc\u30d0\u3092\u8d77\u52d5\u3057\u305f\u7aef\u672b\u306e\u30d6\u30e9\u30a6\u30b6\u306a\u3069\u304b\u3089",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9080/api/todos"),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),"\u304c\u8868\u793a\u3055\u308c\u308c\u3070\u8d77\u52d5\u3067\u304d\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"api\u30b5\u30fc\u30d0\u3078\u306e\u63a5\u7d9a\u78ba\u8a8d"},"API\u30b5\u30fc\u30d0\u3078\u306e\u63a5\u7d9a\u78ba\u8a8d"),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3059\u308b\u30c7\u30d0\u30a4\u30b9\u304b\u3089API\u30b5\u30fc\u30d0\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3088\u3046\u3068\u3057\u3066\u3082\u3001\u30d5\u30a1\u30a4\u30a2\u30a6\u30a9\u30fc\u30eb\u306a\u3069\u306b\u5236\u9650\u3055\u308c\u3066\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u305d\u306e\u305f\u3081\u521d\u3081\u306b\u3001ToDo\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u5b9f\u884c\u3059\u308b\u30c7\u30d0\u30a4\u30b9\u3084\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306a\u3069\u304b\u3089\u3001API\u30b5\u30fc\u30d0\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3057\u3066\u304a\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30a2\u30af\u30bb\u30b9\u78ba\u8a8d\u306b\u306f\u3001API\u30b5\u30fc\u30d0\u3092\u8d77\u52d5\u3057\u3066\u3044\u308b\u7aef\u672b\u306eIP\u30a2\u30c9\u30ec\u30b9\u304c\u5fc5\u8981\u3068\u306a\u308a\u307e\u3059\u3002\u305d\u308c\u305e\u308c\u306e\u74b0\u5883\u3067\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066IP\u30a2\u30c9\u30ec\u30b9\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(l.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"macOS",value:"mac"},{label:"Windows",value:"win"},{label:"Android\u30a8\u30df\u30e5\u30ec\u30fc\u30bf",value:"emulator"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ipconfig getifaddr en0\n"))),(0,r.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ipconfig\n"))),(0,r.kt)(o.Z,{value:"emulator",mdxType:"TabItem"},(0,r.kt)("p",null,"Android\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u304b\u3089\u540c\u3058\u7aef\u672b\u306eAPI\u30b5\u30fc\u30d0\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u5834\u5408\u3001",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/run/emulator-networking.html#networkaddresses"},"Android Emulator\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"),"\u3092\u5229\u7528\u51fa\u6765\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"10.0.2.2")," \u3068\u3044\u3046IP\u3092\u5229\u7528\u3059\u308b\u3068\u7aef\u672b\u306eIP\u30a2\u30c9\u30ec\u30b9\u306b\u95a2\u308f\u3089\u305a\u30a2\u30af\u30bb\u30b9\u51fa\u6765\u307e\u3059\u3002"),(0,r.kt)("p",null,"Android\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u3060\u3051\u3067\u52d5\u4f5c\u78ba\u8a8d\u3059\u308b\u5834\u5408\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"10.0.2.2"),"\u3092\u5229\u7528\u3057\u3066\u52d5\u4f5c\u78ba\u8a8d\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"http://10.0.2.2:9080/api/todos\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"#%E9%96%8B%E7%99%BA%E6%99%82%E3%81%AE%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF%E6%A7%8B%E6%88%90"},"\u958b\u767a\u6642\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u69cb\u6210"),"\u3067\u8aac\u660e\u3057\u3066\u3044\u308b\u3088\u3046\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u8a2d\u5b9a\u3059\u308b\u5024\u306a\u306e\u3067\u3001\nAndroid\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u4ee5\u5916\u306e\u65b9\u6cd5\u3067\u3082\u78ba\u8a8d\u3059\u308b\u5834\u5408\u306fIP\u3092\u78ba\u8a8d\u3057\u3066\u8a2d\u5b9a\u3057\u305f\u307b\u3046\u304c\u52b9\u7387\u7684\u3067\u3059\u3002")))),(0,r.kt)("p",null,"\u30a2\u30af\u30bb\u30b9\u5148\u7aef\u672b\u306eIP\u30a2\u30c9\u30ec\u30b9\u304c\u78ba\u8a8d\u51fa\u6765\u305f\u3089\u3001ToDo\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3059\u308b\u30c7\u30d0\u30a4\u30b9\u3084\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u5185\u306e\u30d6\u30e9\u30a6\u30b6\u304b\u3089\u3001\u5b9f\u969b\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002\n\u30a2\u30af\u30bb\u30b9\u5148\u306eURL\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u671f\u5f85\u3059\u308b\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u3063\u3066\u304f\u308c\u3070\u63a5\u7d9a\u78ba\u8a8d\u304c\u51fa\u6765\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u30a2\u30af\u30bb\u30b9\u5148url"},"\u30a2\u30af\u30bb\u30b9\u5148URL"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"${IP}"),"\u90e8\u5206\u3092\u78ba\u8a8d\u3057\u305fIP\u30a2\u30c9\u30ec\u30b9\u3078\u5909\u66f4\u3057\u3066",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/todo-app/app-spec#rest-api"},"REST API"),"\u306eToDo\u306e\u4e00\u89a7\u53d6\u5f97API\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"http://${IP}:9080/api/todos\n")),(0,r.kt)("h3",{id:"\u30ec\u30b9\u30dd\u30f3\u30b9"},"\u30ec\u30b9\u30dd\u30f3\u30b9"),(0,r.kt)("p",null,"\u30d6\u30e9\u30a6\u30b6\u306b\u30ec\u30b9\u30dd\u30f3\u30b9\u306eToDo\u4e00\u89a7\u306eJSON\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\nAPI\u30b5\u30fc\u30d0\u3092\u8d77\u52d5\u3057\u305f\u3060\u3051\u3067\u3042\u308c\u3070\u3001ToDo\u306e\u4e00\u89a7\u306f\u7a7a\u914d\u5217\u306eJSON\u304c\u671f\u5f85\u3059\u308b\u30ec\u30b9\u30dd\u30f3\u30b9\u3068\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="\u671f\u5f85\u3059\u308b\u30ec\u30b9\u30dd\u30f3\u30b9"',title:'"\u671f\u5f85\u3059\u308b\u30ec\u30b9\u30dd\u30f3\u30b9"'},"[]\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ERR_CONNECTION_REFUSED")," \u306e\u3088\u3046\u306a\u30d6\u30e9\u30a6\u30b6\u306e\u30a8\u30e9\u30fc\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u308b\u5834\u5408\u3001API\u30b5\u30fc\u30d0\u304c\u8d77\u52d5\u3057\u3066\u3044\u308b\u304b\u3001\u30a2\u30af\u30bb\u30b9\u5148URL\u304c\u6b63\u3057\u3044\u304b\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u3068\u304d\u30a2\u30af\u30bb\u30b9\u3059\u308b\u306e\u306b\u5229\u7528\u3057\u305fIP\u30a2\u30c9\u30ec\u30b9\u306f\u3001\u5f8c\u3067\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306b\u8a2d\u5b9a\u3059\u308b\u306e\u3067\u5fd8\u308c\u306a\u3044\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u3067API\u30b5\u30fc\u30d0\u306e\u7528\u610f\u306f\u5b8c\u4e86\u3067\u3059\u3002\u6b21\u306f\u3001ToDo\u30a2\u30d7\u30ea\u3067\u5229\u7528\u3059\u308bREST API\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"))}m.isMDXComponent=!0},75364:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-api-to-env-36ab159c1d71ea25589adf2c63d7879c.png"}}]);