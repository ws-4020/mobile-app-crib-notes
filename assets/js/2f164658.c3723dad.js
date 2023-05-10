"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7250],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,v=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(v,o(o({ref:t},u),{},{components:n})):a.createElement(v,o({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),r=n(67294),i=n(86010),o=n(12466),l=n(16550),c=n(91980),s=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[c,s]=v({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=c??p;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),b(e)}),[s,b,i]),tabValues:i}}var g=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:l,selectValue:c,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==l&&(p(t),c(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},o,{className:(0,i.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function h(e){const t=(0,g.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},45653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(74866),o=n(85162);const l={title:"React Navigation\u306e\u57fa\u672c",sidebar_label:"\u6982\u8981",pagination_label:"React Navigation\u306e\u57fa\u672c"},c=void 0,s={unversionedId:"react-native/learn/basic-concepts/react-navigation-basics",id:"react-native/learn/basic-concepts/react-navigation-basics",title:"React Navigation\u306e\u57fa\u672c",description:"Web\u30d6\u30e9\u30a6\u30b6\u3067\u306f\u3001URL\u6bce\u306b\u30da\u30fc\u30b8\u5168\u4f53\u3092\u66f8\u304d\u63db\u3048\u308b\u3053\u3068\u3067\u753b\u9762\u9077\u79fb\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-navigation-basics.mdx",sourceDirName:"react-native/learn/basic-concepts",slug:"/react-native/learn/basic-concepts/react-navigation-basics",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics",draft:!1,tags:[],version:"current",lastUpdatedAt:1681450141,formattedLastUpdatedAt:"2023\u5e744\u670814\u65e5",frontMatter:{title:"React Navigation\u306e\u57fa\u672c",sidebar_label:"\u6982\u8981",pagination_label:"React Navigation\u306e\u57fa\u672c"},sidebar:"learn",previous:{title:"Flexbox",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/design/flexbox"},next:{title:"Stack",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/stack"}},u={},p=[{value:"React Navigation\u306e\u4f7f\u3044\u65b9",id:"react-navigation\u306e\u4f7f\u3044\u65b9",level:2},{value:"1. \u30ca\u30d3\u30b2\u30fc\u30bf\u30fc\u3092\u4f5c\u6210",id:"1-\u30ca\u30d3\u30b2\u30fc\u30bf\u30fc\u3092\u4f5c\u6210",level:3},{value:"2. \u753b\u9762\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u6210",id:"2-\u753b\u9762\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u6210",level:3},{value:"3. \u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u5b9a\u7fa9",id:"3-\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u5b9a\u7fa9",level:3}],m={toc:p},d="wrapper";function v(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Web\u30d6\u30e9\u30a6\u30b6\u3067\u306f\u3001URL\u6bce\u306b\u30da\u30fc\u30b8\u5168\u4f53\u3092\u66f8\u304d\u63db\u3048\u308b\u3053\u3068\u3067\u753b\u9762\u9077\u79fb\u3057\u307e\u3059\u3002\n\u753b\u9762\u9077\u79fb\u306e\u305f\u3073\u306b\u524d\u306eURL\u306f\u30d6\u30e9\u30a6\u30b6\u306e\u5c65\u6b74\u30b9\u30bf\u30c3\u30af\u306b\u4fdd\u6301\u3055\u308c\u3001\u623b\u308b\u306a\u3069\u306e\u64cd\u4f5c\u306f\u5c65\u6b74\u30b9\u30bf\u30c3\u30af\u306e\u4e00\u756a\u4e0a\u306eURL\u3092\u53d6\u308a\u3060\u3059\u3053\u3068\u3067\u5b9f\u73fe\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4e00\u65b9\u3067\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30b9\u30bf\u30c3\u30af\u578b\u306e\u753b\u9762\u9077\u79fb\u3092\u63a1\u7528\u3057\u3066\u3044\u307e\u3059\u3002\n\u753b\u9762\u9077\u79fb\u306f\u4eca\u3042\u308b\u753b\u9762\u306e\u4e0a\u306b\u65b0\u3057\u3044\u753b\u9762\u3092\u7a4d\u307f\u91cd\u306d\u307e\u3059\u3002\nWeb\u30d6\u30e9\u30a6\u30b6\u306e\u305d\u308c\u3068\u306f\u7570\u306a\u308a\u3001\u524d\u306e\u753b\u9762\u306f\u7834\u68c4\u3055\u308c\u305a\u306b\u6b8b\u3063\u3066\u3044\u307e\u3059\u3002\n\u623b\u308b\u5834\u5408\u306f\u3001\u5148\u982d\u306e\u753b\u9762\u3092\u53d6\u308a\u9664\u304f\u306a\u3069\u3067\u5b9f\u73fe\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Navigation stack change",src:n(30886).Z,width:"641",height:"270"})),(0,r.kt)("p",null,"React Native\u306b\u306f\u3082\u3068\u3082\u3068\u7d44\u307f\u8fbc\u307f\u306e\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3API\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3057\u305f\u3002\n\u3057\u304b\u3057\u3001\u6700\u7d42\u7684\u306b\u306f\u524a\u9664\u3055\u308c\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30fc\u88fd\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u9078\u3076\u65b9\u91dd\u306b\u5909\u308f\u308a\u307e\u3057\u305f\u3002\n\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u6bce\u306b\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u6280\u8853\u304c\u7570\u306a\u308b\u70ba\u3001\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u88c5\u3059\u308b\u552f\u4e00\u6700\u826f\u306e\u65b9\u6cd5\u306f\u306a\u3044\u3053\u3068\u304c\u305d\u306e\u7406\u7531\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u305d\u306e\u4e2d\u3067\u6700\u3082\u4eba\u6c17\u306e\u3042\u308b\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30e9\u30a4\u30d6\u30e9\u30ea\u304cReact Navigation\u3067\u3059\u3002\n\u305d\u308c\u305e\u308c\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30eb\u30c3\u30af\u30a2\u30f3\u30c9\u30d5\u30a3\u30fc\u30eb\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3064\u3064\u3001\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u306e\u7570\u306a\u308b\u52d5\u4f5c\u306b\u5bfe\u3057\u3066\u4e00\u8cab\u3057\u305f\u64cd\u4f5c\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"react-navigation\u306e\u4f7f\u3044\u65b9"},"React Navigation\u306e\u4f7f\u3044\u65b9"),(0,r.kt)("p",null,"React Navigation\u306e\u4f7f\u3044\u65b9\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,r.kt)("h3",{id:"1-\u30ca\u30d3\u30b2\u30fc\u30bf\u30fc\u3092\u4f5c\u6210"},"1. \u30ca\u30d3\u30b2\u30fc\u30bf\u30fc\u3092\u4f5c\u6210"),(0,r.kt)("p",null,"\u5229\u7528\u53ef\u80fd\u306a\u30ca\u30d3\u30b2\u30fc\u30bf\u30fc\u306e1\u3064\u3092\u9078\u629e\u3057\u3066\u4f5c\u6210\u3057\u307e\u3059\u3002\n\u30ca\u30d3\u30b2\u30fc\u30bf\u30fc\u306b\u306fStack\u306e\u4ed6\u306b\u3082\u3001Tab\u3084Drawer\u306a\u3069\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const Root = createStackNavigator();\n")),(0,r.kt)("h3",{id:"2-\u753b\u9762\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u6210"},"2. \u753b\u9762\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u6210"),(0,r.kt)("p",null,"\u753b\u9762\u306f\u901a\u5e38\u306eReact\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"const Screen1: React.FC = () => {\n  return (\n    <View style={styles.screen}>\n        /* \uff5e\u7701\u7565\uff5e */\n    </View>\n  );\n};\n")),(0,r.kt)("h3",{id:"3-\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u5b9a\u7fa9"},"3. \u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u5b9a\u7fa9"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NavigationContainer"),"\u3092\u4f7f\u7528\u3057\u3066\u30eb\u30fc\u30c8\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\n\u30ca\u30d3\u30b2\u30fc\u30bf\u30fc\u306f\u30cd\u30b9\u30c8\u3057\u305f\u5b9a\u7fa9\u3082\u3067\u304d\u307e\u3059\uff08\u4f8b\u3048\u3070Tab\u30ca\u30d3\u30b2\u30fc\u30bf\u30fc\u5185\u306bStack\u30ca\u30d3\u30b2\u30fc\u30bf\u30fc\u304c\u3042\u308b\u306a\u3069\uff09\u3002\n\u30ca\u30d3\u30b2\u30fc\u30bf\u30fc\u304c\u30cd\u30b9\u30c8\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3067\u3082\u3001\u5fc5\u8981\u306a",(0,r.kt)("inlineCode",{parentName:"p"},"NavigationContainer"),"\u306f1\u3064\u3060\u3051\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'export const App = () => {\n  return (\n    <NavigationContainer>\n      <Root.Navigator>\n        <Root.Screen name="Screen1" component={Screen1} />\n        <Root.Screen name="Screen2" component={Screen2} />\n      </Root.Navigator>\n    </NavigationContainer>\n  );\n};\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Root.Navigator"),"\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"initialRouteName"),"\u5c5e\u6027\u306b\u753b\u9762\u540d\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"Root.Screen"),"\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\u5c5e\u6027\u306e\u5024\uff09\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u5bfe\u5fdc\u3059\u308b\u753b\u9762\u304c\u521d\u671f\u8868\u793a\u753b\u9762\u306b\u306a\u308a\u307e\u3059\u3002\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u6700\u521d\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"Root.Screen"),"\u304c\u521d\u671f\u8868\u793a\u306b\u5229\u7528\u3055\u308c\u307e\u3059\u3002\n\u4f8b\u3048\u3070\u4e0a\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3067\u306f\u3001\u6700\u521d\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"Root.Screen"),"\u3067\u3042\u308b",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1"),"\u304c\u521d\u3081\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,r.kt)(i.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"image",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Navigation",src:n(11373).Z,width:"1080",height:"2220"}))),(0,r.kt)(o.Z,{value:"source",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="src/App.tsx"',jsx:!0,title:'"src/App.tsx"'},"import {\n  NavigationContainer,\n  useNavigation,\n} from '@react-navigation/native';\nimport {\n  createStackNavigator,\n} from '@react-navigation/stack';\nimport React from 'react';\nimport {Text, View, StyleSheet} from 'react-native';\nimport {Button} from 'react-native-elements';\n\nconst Root = createStackNavigator();\n\nexport const App = () => {\n  return (\n    <NavigationContainer>\n      <Root.Navigator>\n        <Root.Screen name=\"Screen1\" component={Screen1} />\n        <Root.Screen name=\"Screen2\" component={Screen2} />\n      </Root.Navigator>\n    </NavigationContainer>\n  );\n};\n\nconst Screen1: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text style={styles.title}>Screen 1</Text>\n      <Button\n        buttonStyle={styles.button}\n        title=\"Navigate Screen 2\"\n        onPress={() => navigation.navigate('Screen2')}\n      />\n    </View>\n  );\n};\n\nconst Screen2: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text style={styles.title}>Screen 2</Text>\n      <Button\n        buttonStyle={styles.button}\n        title=\"Go Back\"\n        onPress={() => navigation.goBack()}\n      />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  screen: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  title: {\n    padding: 20,\n    fontSize: 42,\n  },\n  button: {\n    margin: 10,\n    width: 200,\n  },\n});\n")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"React Navigation v6\u304b\u3089\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"navigation.navigate"),"\u306e\u5f15\u6570\u306a\u3069\u306b\u5bfe\u3059\u308b\u578b\u30c1\u30a7\u30c3\u30af\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u3042\u3089\u304b\u3058\u3081\u5b9a\u7fa9\u3055\u308c\u305f\u753b\u9762\u540d\u3084\u30d1\u30e9\u30e1\u30fc\u30bf\u4ee5\u5916\u3092",(0,r.kt)("inlineCode",{parentName:"p"},"navigation.navigate"),"\u306b\u6e21\u3059\u3068\u3001TypeScript\u306e\u578b\u30c1\u30a7\u30c3\u30af\u3067\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3059\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u305f\u3060\u3057\u3001\u3053\u306e\u5b66\u7fd2\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u7406\u7531\u304b\u3089\u578b\u30c1\u30a7\u30c3\u30af\u3092\u5b9f\u8cea\u7684\u306b\u7121\u52b9\u5316\u3057\u3066\u5229\u7528\u3057\u3066\u3044\u307e\u3059",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\u3002"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"React Navigation\u3067\u5229\u7528\u3059\u308b\u578b\u5b9a\u7fa9\u306fTypeScript\u306e\u578b\u30b7\u30b9\u30c6\u30e0\u306b\u7cbe\u901a\u3057\u3066\u3044\u306a\u3044\u3068\u7406\u89e3\u304c\u96e3\u3057\u3044"),(0,r.kt)("li",{parentName:"ul"},"\u578b\u5b9a\u7fa9\u3092\u4f5c\u6210\u3057\u578b\u30c1\u30a7\u30c3\u30af\u304c\u901a\u3063\u3066\u3082\u3001\u5229\u7528\u65b9\u6cd5\u304c\u8aa4\u3063\u3066\u3044\u308b\u3068\u5b9f\u884c\u6642\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u306f\u6b8b\u308b"))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/learn/getting-started/create-project"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"),"\u3067\u4f5c\u6210\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u3001React Navigation\u306e\u578b\u30c1\u30a7\u30c3\u30af\u3092v5\u3068\u540c\u7b49\u306b\u3059\u308b\u305f\u3081\u306e\u578b\u3092",(0,r.kt)("inlineCode",{parentName:"li"},"src/@types/react-navigation.d.ts"),"\u3067\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u578b\u5b9a\u7fa9\u3067\u306f\u3001\u753b\u9762\u540d\u3084\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3057\u3066\u4efb\u610f\u306e\u6587\u5b57\u5217\u3084\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u305f\u3081\u3001\u5b66\u7fd2\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u306fReact Navigation\u306e\u578b\u30c1\u30a7\u30c3\u30af\u304c\u5b9f\u8cea\u7684\u306b\u7121\u52b9\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u8a73\u7d30\u306f\u3001",(0,r.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc"},"Specifying default types for useNavigation, Link, ref etc"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}v.isMDXComponent=!0},11373:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/navigation-6ad76b31beaed1cba82acae1b33108c4.png"},30886:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/navigation_image-0abe2fc9e42d6b7ee57dbff9e72309ab.png"}}]);