"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2436],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,v=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),c=n(91980),s=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,s]=v({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=c??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var b=n(72389);const f="tabList__CuJ",k="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:c,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==l&&(p(t),c(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",k,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function S(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function h(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(S,(0,a.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},80072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),i=n(85162);const l={title:"Modal"},c=void 0,s={unversionedId:"react-native/learn/basic-concepts/react-navigation-basics/modal",id:"react-native/learn/basic-concepts/react-navigation-basics/modal",title:"Modal",description:"\u30e2\u30fc\u30c0\u30eb\u306f\u3001\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4e00\u6642\u7684\u306b\u30d6\u30ed\u30c3\u30af\u3057\u3066\u5225\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u3068\u4f3c\u305f\u3088\u3046\u306a\u6027\u8cea\u3092\u6301\u3061\u3001\u901a\u5e38\u306e\u753b\u9762\u9077\u79fb\u3068\u306f\u7570\u306a\u308b\u65b9\u6cd5\u3067\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u793a\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-navigation-basics/modal.mdx",sourceDirName:"react-native/learn/basic-concepts/react-navigation-basics",slug:"/react-native/learn/basic-concepts/react-navigation-basics/modal",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/modal",draft:!1,tags:[],version:"current",lastUpdatedAt:1638350987,formattedLastUpdatedAt:"2021\u5e7412\u67081\u65e5",frontMatter:{title:"Modal"},sidebar:"learn",previous:{title:"Stack",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/stack"},next:{title:"Tab",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/tab"}},u={},p=[{value:"\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30ca\u30d3\u30b2\u30fc\u30bf",id:"\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30ca\u30d3\u30b2\u30fc\u30bf",level:2}],m={toc:p};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u30e2\u30fc\u30c0\u30eb\u306f\u3001\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4e00\u6642\u7684\u306b\u30d6\u30ed\u30c3\u30af\u3057\u3066\u5225\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u3068\u4f3c\u305f\u3088\u3046\u306a\u6027\u8cea\u3092\u6301\u3061\u3001\u901a\u5e38\u306e\u753b\u9762\u9077\u79fb\u3068\u306f\u7570\u306a\u308b\u65b9\u6cd5\u3067\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30e2\u30fc\u30c0\u30eb\u753b\u9762\u306e\u30ca\u30d3\u30b2\u30fc\u30bf\u5b9a\u7fa9\u306b\u3082",(0,r.kt)("inlineCode",{parentName:"p"},"StackNavigator"),"\u3092\u7528\u3044\u307e\u3059\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"StackNavigator"),"\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"screenOptions.presentation"),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"'modal'"),"\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u30e2\u30fc\u30c0\u30eb\u8868\u793a\u306e\u753b\u9762\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u304c\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30ca\u30d3\u30b2\u30fc\u30bf"},"\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30ca\u30d3\u30b2\u30fc\u30bf"),(0,r.kt)("p",null,"\u30e2\u30fc\u30c0\u30eb\u30b3\u30f3\u30c6\u30f3\u30c4\u306f\u5168\u3066\u306e\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u512a\u5148\u3057\u3066\u8868\u793a\u3055\u305b\u308b\u305f\u3081\u3001\u4e00\u822c\u7684\u306b\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30ca\u30d3\u30b2\u30fc\u30bf\u3092\u7528\u3044\u3066\u5b9a\u7fa9\u3057\u307e\u3059\u3002\n\u6b21\u306e\u56f3\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Modal 1"),"\u3092\u30e2\u30fc\u30c0\u30eb\u3068\u3057\u3066\u5b9a\u7fa9\u3057\u305f\u5834\u5408\u306e\u30ca\u30d3\u30b2\u30fc\u30bf\u69cb\u6210\u3067\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Modal navigator structure",src:n(80250).Z,width:"462",height:"242"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RootStack"),"\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"MainStack"),"\u3092\u5b50\u30ca\u30d3\u30b2\u30fc\u30bf\u3068\u3057\u3066\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30ca\u30d3\u30b2\u30fc\u30bf\u69cb\u6210\u306e\u30b3\u30fc\u30c9\u4f8b\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'const RootStack = createStackNavigator();\nconst MainStack = createStackNavigator();\n\nexport const App = () => {\n  return (\n    <NavigationContainer>\n      <RootStack.Navigator screenOptions={{headerShown: false, presentation: \'modal\'}}>\n        <RootStack.Screen name="MainStack" component={Main} />\n        <RootStack.Screen name="Modal1" component={Modal1} />\n      </RootStack.Navigator>\n    </NavigationContainer>\n  );\n};\n\nconst Main = () => {\n  return (\n    <MainStack.Navigator>\n      <MainStack.Screen name="Screen1" component={Screen1} />\n      <MainStack.Screen name="Screen2" component={Screen2} />\n    </MainStack.Navigator>\n  );\n};\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RootStack.Navigator"),"\u30bf\u30b0\u306e\u4e2d\u3067",(0,r.kt)("inlineCode",{parentName:"p"},"screenOptions.presentation"),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"'modal'"),"\u3092\u6307\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002\n\u3053\u308c\u306b\u3088\u308a\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Modal1"),"\u3078\u306e\u753b\u9762\u9077\u79fb\u306f\u30e2\u30fc\u30c0\u30eb\u8868\u793a\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3068\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"React Navigation\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/modal/"},"Opening a full-screen modal"),"\u306b\u6b21\u306e\u8a18\u8f09\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"The modal prop has no effect on Android because full-screen modals don't have any different transition behavior on the platform.")),(0,r.kt)("p",{parentName:"admonition"},"\u753b\u9762\u9077\u79fb\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u5404\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u52d5\u4f5c\u306b\u5f93\u3044\u307e\u3059\u3002\n\u4e0a\u8a18\u306e\u3068\u304a\u308a\u3001Android\u306e\u30d5\u30eb\u30b9\u30af\u30ea\u30fc\u30f3\u30e2\u30fc\u30c0\u30eb\u306b\u306f\u7570\u306a\u308b\u30c8\u30e9\u30f3\u30b8\u30b7\u30e7\u30f3\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"presentation"),"\u5c5e\u6027\u306e\u5909\u66f4\u306b\u3088\u308b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u5909\u66f4\u306f\u3042\u308a\u307e\u305b\u3093\u3002")),(0,r.kt)("p",null,"\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30ca\u30d3\u30b2\u30fc\u30bf\u306f\u6b21\u306e\u3088\u3046\u306b\u52d5\u4f5c\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5404\u30ca\u30d3\u30b2\u30fc\u30bf\u306f\u72ec\u81ea\u306e\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u5c65\u6b74\u3092\u4fdd\u6301\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},"\u5404\u30ca\u30d3\u30b2\u30fc\u30bf\u6bce\u306b\u72ec\u81ea\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u5b9a\u7fa9\u3067\u304d\u308b"),(0,r.kt)("li",{parentName:"ul"},"\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u64cd\u4f5c\u306f\u73fe\u5728\u306e\u30ca\u30d3\u30b2\u30fc\u30bf\u306b\u3088\u3063\u3066\u51e6\u7406\u3055\u308c\u3001\u51e6\u7406\u3067\u304d\u306a\u304b\u3063\u305f\u5834\u5408\u306f\u4e0a\u4f4d\u306e\u30ca\u30d3\u30b2\u30fc\u30bf\u306b\u51e6\u7406\u3092\u79fb\u8b72\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},"\u89aa\u30ca\u30d3\u30b2\u30fc\u30bf\u306eUI\u306f\u3001\u5b50\u30ca\u30d3\u30b2\u30fc\u30bf\u306e\u4e0a\u306b\u63cf\u753b\u3055\u308c\u308b")),(0,r.kt)(o.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"image",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Modal",src:n(76423).Z,width:"1080",height:"2220"}))),(0,r.kt)(i.Z,{value:"source",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import {\n  NavigationContainer,\n  useNavigation,\n} from '@react-navigation/native';\nimport {createStackNavigator} from '@react-navigation/stack';\nimport React from 'react';\nimport {Text, View, StyleSheet} from 'react-native';\nimport {Button} from 'react-native-elements';\n\nconst RootStack = createStackNavigator();\nconst MainStack = createStackNavigator();\n\nexport const App = () => {\n  return (\n    <NavigationContainer>\n      <RootStack.Navigator screenOptions={{headerShown: false, presentation: 'modal'}}>\n        <RootStack.Screen name=\"MainStack\" component={Main} />\n        <RootStack.Screen name=\"Modal1\" component={Modal1} />\n      </RootStack.Navigator>\n    </NavigationContainer>\n  );\n};\n\nconst Main = () => {\n  return (\n    <MainStack.Navigator>\n      <MainStack.Screen name=\"Screen1\" component={Screen1} />\n      <MainStack.Screen name=\"Screen2\" component={Screen2} />\n    </MainStack.Navigator>\n  );\n};\n\nconst Screen1: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text style={styles.title}>Screen 1</Text>\n      <Button\n        buttonStyle={styles.button}\n        title=\"Navigate Screen 2\"\n        onPress={() => navigation.navigate('Screen2')}\n      />\n      <Button\n        buttonStyle={styles.button}\n        title=\"Popup Modal 1\"\n        onPress={() => navigation.navigate('Modal1')}\n      />\n    </View>\n  );\n};\n\nconst Screen2: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text style={styles.title}>Screen 2</Text>\n      <Button\n        buttonStyle={styles.button}\n        title=\"Go Back\"\n        onPress={() => navigation.goBack()}\n      />\n      <Button\n        buttonStyle={styles.button}\n        title=\"Popup Modal 1\"\n        onPress={() => navigation.navigate('Modal1')}\n      />\n    </View>\n  );\n};\n\nconst Modal1: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text style={styles.title}>Modal 1</Text>\n      <Button\n        buttonStyle={styles.button}\n        title=\"Close\"\n        onPress={() => navigation.goBack()}\n      />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  screen: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  title: {\n    padding: 20,\n    fontSize: 42,\n  },\n  button: {\n    margin: 10,\n    width: 200,\n  },\n});\n")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"React Navigation v5\u3067\u306f\u3001\u753b\u9762\u5358\u4f4d\u3067\u306f\u30e2\u30fc\u30c0\u30eb\u8868\u793a\u3092\u8a2d\u5b9a\u3067\u304d\u305a\u3001\u30e2\u30fc\u30c0\u30eb\u8868\u793a\u306e\u305f\u3081\u306b\u5c02\u7528\u306e\u30ca\u30d3\u30b2\u30fc\u30bf\u304c\u5fc5\u8981\u3067\u3057\u305f\u3002v6\u3067\u5c0e\u5165\u3055\u308c\u305f",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/group/"},(0,r.kt)("inlineCode",{parentName:"a"},"Group")),"\u3092\u4f7f\u3046\u3053\u3068\u3067\u3001\u30e2\u30fc\u30c0\u30eb\u8868\u793a\u306e\u753b\u9762\u3068\u975e\u30e2\u30fc\u30c0\u30eb\u8868\u793a\u306e\u753b\u9762\u3092\u3001\u4e21\u65b9\u3068\u3082\u540c\u3058\u30ca\u30d3\u30b2\u30fc\u30bf\u306e\u4e2d\u306b\u914d\u7f6e\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Group"),"\u3092\u4f7f\u3063\u305f\u30e2\u30fc\u30c0\u30eb\u8868\u793a\u306e\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/modal/"},"Opening a full-screen modal ","|"," React Navigation"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}d.isMDXComponent=!0},76423:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/modal-8ff6571341fa9df022bb2a680ad4d464.png"},80250:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/modal_image-12959ded44b893d64c2085e949a012d1.png"}}]);