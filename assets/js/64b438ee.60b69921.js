"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2120],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),o=a(86010),l=a(72389),i=a(67392),p=a(7094),s=a(12466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:a,block:l,defaultValue:d,values:m,groupId:f,className:b}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,i.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:x}=(0,p.U)(),[E,N]=(0,r.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:S}=(0,s.o5)();if(null!=f){const e=y[f];null!=e&&e!==E&&v.some((t=>t.value===e))&&N(e)}const w=e=>{const t=e.currentTarget,a=O.indexOf(t),n=v[a].value;n!==E&&(S(t),N(n),null!=f&&x(f,String(n)))},D=e=>{var t;let a=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]??O[O.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},b)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>O.push(e),onKeyDown:D,onClick:w},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":E===t})}),a??t)}))),a?(0,r.cloneElement)(h.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},96885:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),o=a(65488),l=a(85162);const i={title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c"},p=void 0,s={unversionedId:"react-native/learn/getting-started/launch-created-app",id:"react-native/learn/getting-started/launch-created-app",title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c",description:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\u3067\u4f5c\u3063\u305f\u30a2\u30d7\u30ea\u306e\u5b9f\u884c\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/getting-started/launch-created-app.mdx",sourceDirName:"react-native/learn/getting-started",slug:"/react-native/learn/getting-started/launch-created-app",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started/launch-created-app",draft:!1,tags:[],version:"current",lastUpdatedAt:1638840443,formattedLastUpdatedAt:"2021\u5e7412\u67087\u65e5",frontMatter:{title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c"},sidebar:"learn",previous:{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started/create-project"},next:{title:"\u76ee\u6b21",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts"}},c={},u=[],d={toc:u};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/getting-started/create-project"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"),"\u3067\u4f5c\u3063\u305f\u30a2\u30d7\u30ea\u306e\u5b9f\u884c\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"iOS\u30a2\u30d7\u30ea\u306fiPhone\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3001Android\u30a2\u30d7\u30ea\u306fAndroid\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u8d77\u52d5\u3059\u308b\u306e\u304c\u57fa\u672c\u3067\u3059\u3002\u307e\u305f\u3001\u4eca\u56de\u4f5c\u6210\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306fExpo\u3092\u5229\u7528\u3057\u3066\u3044\u308b\u306e\u3067\u3001Expo Go\u3068\u3044\u3046\u30a2\u30d7\u30ea\u3067\u3082\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"React Native\u30a2\u30d7\u30ea\u306e\u5b9f\u884c\u65b9\u6cd5\u3068\u4ed5\u7d44\u307f\u3092\u304b\u3093\u305f\u3093\u306b\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5b9f\u884c\u65b9\u6cd5\u3067\u7d39\u4ecb\u3057\u3066\u3044\u308b\u30b3\u30de\u30f3\u30c9\u306f\u3001\u5168\u3066\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30eb\u30fc\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"\u306e\u3042\u308b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\uff09\u3067\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u3046\u307e\u304f\u8d77\u52d5\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/common-pitfalls"},"\u30cf\u30de\u308a\u304c\u3061\u306a\u843d\u3068\u3057\u7a74"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(o.Z,{defaultValue:"expo",values:[{label:"Expo Go",value:"expo"},{label:"iPhone\u30b7\u30df\u30e5\u30ec\u30fc\u30bf",value:"iphone"},{label:"Android\u30a8\u30df\u30e5\u30ec\u30fc\u30bf",value:"android"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"expo",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:a(44630).Z,width:"432",height:"257"})),(0,r.kt)("p",null,"Expo Go\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u3001\u30b9\u30c8\u30a2\u516c\u958b\u3055\u308c\u3066\u3044\u308bExpo Go\u30a2\u30d7\u30ea\u3092\u7aef\u672b\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u4f7f\u7528\u3059\u308b\u305f\u3081\u3001\u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9\u306f\u4e0d\u8981\u3067\u3059\u3002\nExpo Go\u306f\u3001Expo\u3067\u4f5c\u3089\u308c\u305f\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b\u3053\u3068\u306a\u304f\u7c21\u5358\u306b\u5b9f\u6a5f\u3067\u52d5\u304b\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u30a2\u30d7\u30ea\u3067\u3059\u3002Expo SDK\u306b\u542b\u307e\u308c\u306a\u3044\u30cd\u30a4\u30c6\u30a3\u30d6\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u5229\u7528\u3057\u3066\u3044\u306a\u3051\u308c\u3070\u3001",(0,r.kt)("a",{parentName:"p",href:"https://docs.expo.io/introduction/managed-vs-bare/#bare-workflow"},"Bare Workflow"),"\u306e\u30a2\u30d7\u30ea\u3067\u3082\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002",(0,r.kt)("a",{parentName:"p",href:"https://apps.apple.com/jp/app/expo-go/id982107779"},"App Store"),", ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=host.exp.exponent"},"Google Play"),"\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"Expo Go\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u3089\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067Expo\u306e\u958b\u767a\u30b5\u30fc\u30d0\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo start\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"expo-cli"),"\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001\u6b21\u306e\u3088\u3046\u306a\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u3066",(0,r.kt)("inlineCode",{parentName:"p"},"expo-cli"),"\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u6c42\u3081\u3089\u308c\u307e\u3059\u3002Expo Go\u3067\u30a2\u30d7\u30ea\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u306f\u5fc5\u8981\u306a\u306e\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"This command requires Expo CLI.\nDo you want to install it globally [Y/n]?\n"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"expo start")," \u3092\u5b9f\u884c\u3059\u308b\u3068Expo\u306e\u958b\u767a\u8005\u30c4\u30fc\u30eb\u3068Metro Bundler\u304c\u8d77\u52d5\u3057\u307e\u3059\u3002\n\u958b\u767a\u8005\u30c4\u30fc\u30eb\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308bQR\u30b3\u30fc\u30c9\u3092\u8aad\u307f\u53d6\u308b\u3053\u3068\u3067\u3001Expo Go\u306f\u540c\u4e00\u7121\u7dda\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u5185\u306eMetro Bundler\u306b\u63a5\u7d9a\u3059\u308b\u3088\u3046\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002\u305d\u3057\u3066Metro Bundler\u3092\u901a\u3057\u3066Java Script\u306e\u30bd\u30fc\u30b9\u3092\u8aad\u307f\u8fbc\u307f\u3001\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30bf\u30fc\u30df\u30ca\u30eb\u4e0a\u3001\u3082\u3057\u304f\u306f\u8d77\u52d5\u3057\u305f\u30d6\u30e9\u30a6\u30b6\u306e\u5de6\u4e0b\u306b\u8868\u793a\u3055\u308c\u305fQR\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3057\u307e\u3059\u3002Android\u3067\u306fExpo Go\u304b\u3089\u3001iOS\u3067\u306fOS\u306e\u30ab\u30e1\u30e9\u30a2\u30d7\u30ea\u304b\u3089QR\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"Android\u3067\u306f\u3001QR\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3059\u308b\u3068\u30a2\u30d7\u30ea\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"iOS\u3067\u306f\u3001QR\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3059\u308b\u3068Expo Go\u3067\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u30d0\u30ca\u30fc\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u30d0\u30ca\u30fc\u3092\u30bf\u30c3\u30d7\u3057\u3066Expo Go\u3067\u30a2\u30d7\u30ea\u3092\u8868\u793a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"npx expo start"),"\u3067\u306f\u3001Expo\u306e\u958b\u767a\u8005\u30c4\u30fc\u30eb\u3068Metro Bundler\u304c\u8d77\u52d5\u3057\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u958b\u767a\u8005\u30c4\u30fc\u30eb\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"19002"),"\u30dd\u30fc\u30c8\u3001Metro Bundler\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"19000"),"\u30dd\u30fc\u30c8\u3067\u305d\u308c\u305e\u308c\u8d77\u52d5\u3057\u307e\u3059\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u30d6\u30e9\u30a6\u30b6\u304c\u3046\u307e\u304f\u8d77\u52d5\u305b\u305a\u958b\u767a\u8005\u30c4\u30fc\u30eb\u306e\u753b\u9762\u304c\u81ea\u52d5\u7684\u306b\u958b\u304b\u308c\u306a\u304b\u3063\u305f\u3068\u3057\u3066\u3082\u3001",(0,r.kt)("a",{parentName:"p",href:"http://localhost:19002"},"http://localhost:19002"),"\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308c\u3070\u8868\u793a\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u306a\u304a\u3001\u4ed6\u306e\u30d7\u30ed\u30bb\u30b9\u306a\u3069\u306b\u3088\u3063\u3066\u3053\u308c\u3089\u306e\u30dd\u30fc\u30c8\u304c\u3059\u3067\u306b\u5229\u7528\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u81ea\u52d5\u7684\u306b\u7570\u306a\u308b\u30dd\u30fc\u30c8\u304c\u9078\u629e\u3055\u308c\u3066\u8d77\u52d5\u3057\u307e\u3059\u3002\u305d\u306e\u5834\u5408\u3067\u3082\u3001\u6b21\u306e\u3088\u3046\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u30ed\u30b0\u304b\u3089URL\u3092\u78ba\u8a8d\u3057\u3066\u958b\u767a\u8005\u30c4\u30fc\u30eb\u3092\u8868\u793a\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Expo DevTools is running at http://localhost:19003\n")))),(0,r.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:a(1833).Z,width:"507",height:"209"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm run android")," \u3068\u5b9f\u884c\u3059\u308b\u3068Metro Bundler\u304c\u8d77\u52d5\u3057\u305f\u5f8c\u3001\u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9\u304c\u59cb\u307e\u308a\u307e\u3059\u3002\nAndroid\u30a2\u30d7\u30ea\u304c\u30d3\u30eb\u30c9\u3055\u308c\u3001\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u305d\u306e\u5f8c\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u30a2\u30d7\u30ea\u304cMetro Bundler\u3092\u901a\u3057\u3066Java Script\u306e\u30bd\u30fc\u30b9\u3092\u8aad\u307f\u8fbc\u307f\u3001\u5b9f\u884c\u3057\u307e\u3059\u3002")),(0,r.kt)(l.Z,{value:"iphone",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:a(37722).Z,width:"509",height:"172"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm run ios")," \u3068\u5b9f\u884c\u3059\u308b\u3068Metro Bundler\u304c\u8d77\u52d5\u3057\u305f\u5f8c\u3001\u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9\u304c\u59cb\u307e\u308a\u307e\u3059\u3002\niOS\u30a2\u30d7\u30ea\u304c\u30d3\u30eb\u30c9\u3055\u308c\u3001\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u305d\u306e\u5f8c\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u30a2\u30d7\u30ea\u304cMetro Bundler\u3092\u901a\u3057\u3066Java Script\u306e\u30bd\u30fc\u30b9\u3092\u8aad\u307f\u8fbc\u307f\u3001\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"2021-12-01\u6642\u70b9\u3067\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"npm run ios"),"\u3092\u5b9f\u884c\u3059\u308b\u3068\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u8b66\u544a\u30ed\u30b0\u304c\u51fa\u529b\u3055\u308c\u3066\u3057\u307e\u3044\u307e\u3059\u3002\u8d77\u52d5\u306b\u5f71\u97ff\u306f\u306a\u3044\u306e\u3067\u7121\u8996\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"--- xcodebuild: WARNING: Using the first of multiple matching destinations:\n{ platform:iOS Simulator, id:dvtdevice-DVTiOSDeviceSimulatorPlaceholder-iphonesimulator:placeholder, name:Any iOS Simulator Device }\n{ platform:iOS Simulator, id:29115F30-1E4B-4263-A5EA-DD6DF9F2CF7A, OS:12.4, name:iPhone 5s }\n{ platform:iOS Simulator, id:F7A6B7F6-379F-4EF8-B791-B3723E8E9C19, OS:12.4, name:iPhone 6 }\n{ platform:iOS Simulator, id:C2A9EE34-85DD-4710-A659-97F3B96F8805, OS:12.4, name:iPhone 6 Plus }\n{ platform:iOS Simulator, id:8375252E-D370-429D-938D-DFD395C6A8A2, OS:12.4, name:iPhone 6s }\n{ platform:iOS Simulator, id:F6EB14F2-4925-41ED-A091-F480558C43CD, OS:12.4, name:iPhone 6s Plus }\n\u301c\u301c \u4ee5\u4e0b\u7565 \u301c\u301c\n")),(0,r.kt)("p",{parentName:"admonition"},"\u30ed\u30b0\u306e\u6700\u5f8c\u306b\u6b21\u306e\u3088\u3046\u306b\u300cSuccessfully launched the app\u300d\u304c\u51fa\u529b\u3055\u308c\u3066\u3044\u308c\u3070\u3001\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},'info Installing "/Users/<username>/Library/Developer/Xcode/DerivedData/HandsOnApp-fvysoqvesrnotndxtrkjefuwnhbo/Build/Products/Debug-iphonesimulator/HandsOnApp.app"\ninfo Launching "personal.org.name.HandsOnApp."\nsuccess Successfully launched the app on the simulator\n'))))))}m.isMDXComponent=!0},44630:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/expo-build-28965c27a1de05a986ffaa6c6157fc04.png"},1833:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/react-native-android-build-c9f25bdea97ce41c93a579624c95a67d.png"},37722:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/react-native-ios-build-fd14892b50df87a486e18318a3283bd2.png"}}]);