"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,v=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),o=n(86010),i=n(72389),s=n(67392),l=n(7094),c=n(12466);const p="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:d,groupId:v,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,s.l)(y,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:S}=(0,l.U)(),[h,T]=(0,r.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.o5)();if(null!=v){const e=N[v];null!=e&&e!==h&&y.some((t=>t.value===e))&&T(e)}const P=e=>{const t=e.currentTarget,n=x.indexOf(t),a=y[n].value;a!==h&&(w(t),T(a),null!=v&&S(v,String(a)))},R=e=>{var t;let n=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},g)},y.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,key:t,ref:e=>x.push(e),onKeyDown:R,onClick:P},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":h===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===h))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},10306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),i=n(85162);const s={title:"\u9077\u79fb\u5148\u306e\u753b\u9762\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6e21\u3059"},l=void 0,c={unversionedId:"react-native/learn/advance/react-navigation-param",id:"react-native/learn/advance/react-navigation-param",title:"\u9077\u79fb\u5148\u306e\u753b\u9762\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6e21\u3059",description:"\u691c\u7d22\u6761\u4ef6\u3084ID\u306a\u3069\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6b21\u306e\u753b\u9762\u306b\u6e21\u3057\u305f\u3044\u5834\u5408\u3001React Navigation\u3067\u3069\u306e\u3088\u3046\u306b\u5b9f\u88c5\u3059\u308b\u304b\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/advance/react-navigation-param.mdx",sourceDirName:"react-native/learn/advance",slug:"/react-native/learn/advance/react-navigation-param",permalink:"/mobile-app-crib-notes/react-native/learn/advance/react-navigation-param",draft:!1,tags:[],version:"current",lastUpdatedAt:1638350987,formattedLastUpdatedAt:"2021\u5e7412\u67081\u65e5",frontMatter:{title:"\u9077\u79fb\u5148\u306e\u753b\u9762\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6e21\u3059"},sidebar:"learn",previous:{title:"\u6f14\u7fd2\u8ab2\u984c",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/exercise"}},p={},u=[{value:"\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u578b\u5b9a\u7fa9",id:"\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u578b\u5b9a\u7fa9",level:2}],m={toc:u};function d(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u691c\u7d22\u6761\u4ef6\u3084ID\u306a\u3069\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6b21\u306e\u753b\u9762\u306b\u6e21\u3057\u305f\u3044\u5834\u5408\u3001React Navigation\u3067\u3069\u306e\u3088\u3046\u306b\u5b9f\u88c5\u3059\u308b\u304b\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"React Navigation\u3067\u9077\u79fb\u3059\u308b\u969b\u3001\u9077\u79fb\u5148\u306e\u753b\u9762\u306b\u6e21\u3057\u305f\u3044\u30d1\u30e9\u30e1\u30fc\u30bf\u3092",(0,r.kt)("inlineCode",{parentName:"p"},"navigate"),"\u306e\u5f15\u6570\u3068\u3057\u3066\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\n\u9077\u79fb\u5148\u753b\u9762\u3067\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"route"),"\u304b\u3089\u305d\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx {8-10,21}",jsx:!0,"{8-10,21}":!0},"const Screen1: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View>\n      <Button\n        title=\"Go to Screen2\"\n        onPress={() => {\n          navigation.navigate('Screen2', {\n            message: 'Hello',\n          });\n        }}\n      />\n    </View>\n  );\n};\n\nconst Screen2: React.FC = () => {\n  const route = useRoute();\n  return (\n    <View>\n      <Text>{route.params.message}</Text>\n    </View>\n  );\n};\n")),(0,r.kt)("p",null,"\u305f\u3060\u3057\u3001TypeScript\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u6b21\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"TS2532: Object is possibly 'undefined'.\nTS2339: Property 'message' does not exist on type 'object'.\n")),(0,r.kt)("h2",{id:"\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u578b\u5b9a\u7fa9"},"\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u578b\u5b9a\u7fa9"),(0,r.kt)("p",null,"\u5148\u306e\u30a8\u30e9\u30fc\u3092\u89e3\u6d88\u3059\u308b\u305f\u3081\u306b\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"route"),"\u3092\u5229\u7528\u3059\u308b\u969b\u306b\u305d\u306e\u753b\u9762\u304c\u53d7\u3051\u53d6\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u578b\u5b9a\u7fa9\u3092\u6559\u3048\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u5b9f\u88c5\u30a4\u30e1\u30fc\u30b8\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u753b\u9762\u540d\u3092\u30ad\u30fc\u306b\u3001\u30d1\u30e9\u30e1\u30fc\u30bf\u5b9a\u7fa9\u3092\u5024\u3068\u3057\u3066\u3082\u3064\u30ea\u30b9\u30c8\u3092\u5b9a\u7fa9\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"RootParamList"),"\uff09"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"type RootParamList = {\n  Screen1: undefined;\n  Screen2: {message: string};\n};\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"useRoute"),"\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"RouteProp<RootParamList, '\u753b\u9762\u540d'>"),"\u3092\u6e21\u3059"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"const Screen2: React.FC = () => {\n    /* \uff5e\u7701\u7565\uff5e */\n  const route = useRoute<RouteProp<RootParamList, 'Screen2'>>();\n  return (\n    /* \uff5e\u7701\u7565\uff5e */\n      <Text>{route.params.message}</Text>\n    /* \uff5e\u7701\u7565\uff5e */\n  );\n};\n")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001\u753b\u9762\u3067\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53d7\u3051\u53d6\u308b\u5b9f\u88c5\u3067\u767a\u751f\u3059\u308b\u3001TypeScript\u306e\u578b\u30c1\u30a7\u30c3\u30af\u30a8\u30e9\u30fc\u3092\u89e3\u6d88\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002"),(0,r.kt)("p",{parentName:"admonition"},"React Navigation\u3067\u306f\u3001\u578b\u5b9a\u7fa9\u3092\u7a4d\u6975\u7684\u306b\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3088\u308a\u8a73\u7d30\u306a\u578b\u30c1\u30a7\u30c3\u30af\u304c\u53ef\u80fd\u3067\u3059\u3002\n\u4f8b\u3048\u3070\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"navigate"),"\u3067\u9077\u79fb\u3059\u308b\u5148\u306e\u753b\u9762\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u540d\u304c\u9593\u9055\u3048\u3066\u3044\u308b\u6642\u306b\u3001\u578b\u30c1\u30a7\u30c3\u30af\u3067\u30a8\u30e9\u30fc\u3068\u3059\u308b\u3053\u3068\u306a\u3069\u304c\u53ef\u80fd\u3067\u3059\u3002\n\u3082\u3057React Navigation\u3067\u5229\u7528\u3059\u308b\u578b\u5b9a\u7fa9\u306e\u5168\u4f53\u50cf\u306b\u3064\u3044\u3066\u77e5\u308a\u305f\u3044\u5834\u5408\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/typescript/"},"Type checking with TypeScript | React Navigation"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u305f\u3060\u3001React Navigation\u3067\u5229\u7528\u3059\u308b\u578b\u5b9a\u7fa9\u306fTypeScript\u306e\u578b\u30b7\u30b9\u30c6\u30e0\u306b\u7cbe\u901a\u3057\u3066\u3044\u306a\u3044\u3068\u7406\u89e3\u304c\u96e3\u3057\u3044\u3067\u3059\u3002\n\u307e\u305f\u3001\u305b\u3063\u304b\u304f\u578b\u5b9a\u7fa9\u3092\u9811\u5f35\u3063\u3066\u3082\u305d\u306e\u5229\u7528\u65b9\u6cd5\u304c\u8aa4\u3063\u3066\u3044\u308b\u3068\u3001\u578b\u30c1\u30a7\u30c3\u30af\u3067\u306f\u30a8\u30e9\u30fc\u306b\u306f\u306a\u308a\u307e\u305b\u3093\u304c\u5b9f\u884c\u6642\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u3066\u3057\u307e\u3044\u307e\u3059\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u3053\u3046\u3044\u3063\u305f\u7406\u7531\u304b\u3089\u3001React Navigation\u306e\u305f\u3081\u306e\u578b\u5b9a\u7fa9\u306f\u3001\u5b9a\u7fa9\u3057\u306a\u3044\u3068\u30a8\u30e9\u30fc\u306b\u306a\u308b\u306a\u3069\u306e\u5fc5\u8981\u6700\u4f4e\u9650\u306e\u3082\u306e\u3060\u3051\u3092\u7d39\u4ecb\u3057\u3066\u3044\u307e\u3059\u3002")),(0,r.kt)(o.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"image",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Modal",src:n(2231).Z,width:"1080",height:"2220"}))),(0,r.kt)(i.Z,{value:"source",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import {\n  NavigationContainer,\n  NavigatorScreenParams,\n  RouteProp,\n  useNavigation,\n  useRoute,\n} from '@react-navigation/native';\nimport {\n  createStackNavigator,\n} from '@react-navigation/stack';\nimport React from 'react';\nimport {Text, View, StyleSheet} from 'react-native';\nimport {Button} from 'react-native-elements';\n\ntype RootParamList = {\n  MainStack: NavigatorScreenParams<MainParamList>;\n  Modal1: {message: string};\n};\ntype MainParamList = {\n  Screen1: undefined;\n  Screen2: undefined;\n};\n\nconst RootStack = createStackNavigator();\nconst MainStack = createStackNavigator();\n\nexport const App = () => {\n  return (\n    <NavigationContainer>\n      <RootStack.Navigator screenOptions={{headerShown: false, presentation: 'modal'}}>\n        <RootStack.Screen name=\"MainStack\" component={Main} />\n        <RootStack.Screen name=\"Modal1\" component={Modal1} />\n      </RootStack.Navigator>\n    </NavigationContainer>\n  );\n};\n\nconst Main = () => {\n  return (\n    <MainStack.Navigator>\n      <MainStack.Screen name=\"Screen1\" component={Screen1} />\n      <MainStack.Screen name=\"Screen2\" component={Screen2} />\n    </MainStack.Navigator>\n  );\n};\n\nconst Screen1: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text style={styles.title}>Screen 1</Text>\n      <Button\n        buttonStyle={styles.button}\n        title=\"Navigate Screen 2\"\n        onPress={() => navigation.navigate('Screen2')}\n      />\n      <Button\n        buttonStyle={styles.button}\n        title=\"Popup Modal 1\"\n        onPress={() => navigation.navigate('Modal1', {message: 'from Screen1'})}\n      />\n    </View>\n  );\n};\n\nconst Screen2: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text style={styles.title}>Screen 2</Text>\n      <Button\n        buttonStyle={styles.button}\n        title=\"Go Back\"\n        onPress={() => navigation.goBack()}\n      />\n      <Button\n        buttonStyle={styles.button}\n        title=\"Popup Modal 1\"\n        onPress={() => navigation.navigate('Modal1', {message: 'from Screen2'})}\n      />\n    </View>\n  );\n};\n\nconst Modal1: React.FC = () => {\n  const navigation = useNavigation();\n  const route = useRoute<RouteProp<RootParamList, 'Modal1'>>();\n  return (\n    <View style={styles.screen}>\n      <Text style={styles.title}>Modal 1</Text>\n      <Text>{route.params.message}</Text>\n      <Button\n        buttonStyle={styles.button}\n        title=\"Close\"\n        onPress={() => navigation.goBack()}\n      />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  screen: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  title: {\n    padding: 20,\n    fontSize: 42,\n  },\n  button: {\n    margin: 10,\n    width: 200,\n  },\n});\n")))))}d.isMDXComponent=!0},2231:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/modal-0adaa2089bf13635963aea38fa962dd8.png"}}]);