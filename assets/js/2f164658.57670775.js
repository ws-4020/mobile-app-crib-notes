"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7250],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return v}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),v=r,d=m["".concat(l,".").concat(v)]||m[v]||p[v]||i;return t?a.createElement(d,o(o({ref:n},u),{},{components:t})):a.createElement(d,o({ref:n},u))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(7294),r=t(9443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=t(6010),c="tabItem_1uMI",l="tabItemActive_2DSg";var s=function(e){var n,t=e.lazy,r=e.block,s=e.defaultValue,u=e.values,p=e.groupId,m=e.className,v=a.Children.toArray(e.children),d=null!=u?u:v.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=s?s:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value,g=i(),b=g.tabGroupChoices,k=g.setTabGroupChoices,y=(0,a.useState)(f),N=y[0],h=y[1],x=[];if(null!=p){var w=b[p];null!=w&&w!==N&&d.some((function(e){return e.value===w}))&&h(w)}var S=function(e){var n=e.currentTarget,t=x.indexOf(n),a=d[t].value;h(a),null!=p&&(k(p,a),setTimeout((function(){var e,t,a,r,i,o,c,s;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,i=e.right,o=window,c=o.innerHeight,s=o.innerWidth,t>=0&&i<=s&&r<=c&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l),setTimeout((function(){return n.classList.remove(l)}),2e3))}),150))},R=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.target)+1;t=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.target)-1;t=x[r]||x[x.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},m)},d.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,o.Z)("tabs__item",c,{"tabs__item--active":N===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:R,onFocus:S,onClick:S},null!=t?t:n)}))),t?(0,a.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}},9443:function(e,n,t){var a=(0,t(7294).createContext)(void 0);n.Z=a},5653:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return v}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=t(5064),c=t(8215),l={title:"React Navigation\u306e\u57fa\u672c",sidebar_label:"Overview"},s=void 0,u={unversionedId:"react-native/learn/basic-concepts/react-navigation-basics",id:"react-native/learn/basic-concepts/react-navigation-basics",isDocsHomePage:!1,title:"React Navigation\u306e\u57fa\u672c",description:"Web\u30d6\u30e9\u30a6\u30b6\u3067\u306f\u3001URL\u6bce\u306b\u30da\u30fc\u30b8\u5168\u4f53\u3092\u66f8\u304d\u63db\u3048\u308b\u3053\u3068\u3067\u753b\u9762\u9077\u79fb\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-navigation-basics.mdx",sourceDirName:"react-native/learn/basic-concepts",slug:"/react-native/learn/basic-concepts/react-navigation-basics",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics",tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"React Navigation\u306e\u57fa\u672c",sidebar_label:"Overview"},sidebar:"learn",previous:{title:"Flexbox",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/design/flexbox"},next:{title:"Stack",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/stack"}},p=[{value:"React Navigation\u306e\u4f7f\u3044\u65b9",id:"react-navigation\u306e\u4f7f\u3044\u65b9",children:[{value:"1. \u30ca\u30d3\u30b2\u30fc\u30bf\u30fc\u3092\u4f5c\u6210",id:"1-\u30ca\u30d3\u30b2\u30fc\u30bf\u30fc\u3092\u4f5c\u6210",children:[]},{value:"2. \u753b\u9762\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u6210",id:"2-\u753b\u9762\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u6210",children:[]},{value:"3. \u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u5b9a\u7fa9",id:"3-\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u5b9a\u7fa9",children:[]}]}],m={toc:p};function v(e){var n=e.components,l=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Web\u30d6\u30e9\u30a6\u30b6\u3067\u306f\u3001URL\u6bce\u306b\u30da\u30fc\u30b8\u5168\u4f53\u3092\u66f8\u304d\u63db\u3048\u308b\u3053\u3068\u3067\u753b\u9762\u9077\u79fb\u3057\u307e\u3059\u3002\n\u753b\u9762\u9077\u79fb\u306e\u305f\u3073\u306b\u524d\u306eURL\u306f\u30d6\u30e9\u30a6\u30b6\u306e\u5c65\u6b74\u30b9\u30bf\u30c3\u30af\u306b\u4fdd\u6301\u3055\u308c\u3001\u623b\u308b\u306a\u3069\u306e\u64cd\u4f5c\u306f\u5c65\u6b74\u30b9\u30bf\u30c3\u30af\u306e\u4e00\u756a\u4e0a\u306eURL\u3092\u53d6\u308a\u3060\u3059\u3053\u3068\u3067\u5b9f\u73fe\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u4e00\u65b9\u3067\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30b9\u30bf\u30c3\u30af\u578b\u306e\u753b\u9762\u9077\u79fb\u3092\u63a1\u7528\u3057\u3066\u3044\u307e\u3059\u3002\n\u753b\u9762\u9077\u79fb\u306f\u4eca\u3042\u308b\u753b\u9762\u306e\u4e0a\u306b\u65b0\u3057\u3044\u753b\u9762\u3092\u7a4d\u307f\u91cd\u306d\u307e\u3059\u3002\nWeb\u30d6\u30e9\u30a6\u30b6\u306e\u305d\u308c\u3068\u306f\u7570\u306a\u308a\u3001\u524d\u306e\u753b\u9762\u306f\u7834\u68c4\u3055\u308c\u305a\u306b\u6b8b\u3063\u3066\u3044\u307e\u3059\u3002\n\u623b\u308b\u5834\u5408\u306f\u3001\u5148\u982d\u306e\u753b\u9762\u3092\u53d6\u308a\u9664\u304f\u306a\u3069\u3067\u5b9f\u73fe\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Navigation stack change",src:t(6162).Z})),(0,i.kt)("p",null,"React Native\u306b\u306f\u3082\u3068\u3082\u3068\u7d44\u307f\u8fbc\u307f\u306e\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3API\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3057\u305f\u3002\n\u3057\u304b\u3057\u3001\u6700\u7d42\u7684\u306b\u306f\u524a\u9664\u3055\u308c\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30fc\u88fd\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u9078\u3076\u65b9\u91dd\u306b\u5909\u308f\u308a\u307e\u3057\u305f\u3002\n\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u6bce\u306b\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u6280\u8853\u304c\u7570\u306a\u308b\u70ba\u3001\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u88c5\u3059\u308b\u552f\u4e00\u6700\u826f\u306e\u65b9\u6cd5\u306f\u306a\u3044\u3053\u3068\u304c\u305d\u306e\u7406\u7531\u3067\u3059\u3002"),(0,i.kt)("p",null,"\u305d\u306e\u4e2d\u3067\u6700\u3082\u4eba\u6c17\u306e\u3042\u308b\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30e9\u30a4\u30d6\u30e9\u30ea\u304cReact Navigation\u3067\u3059\u3002\n\u305d\u308c\u305e\u308c\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30eb\u30c3\u30af\u30a2\u30f3\u30c9\u30d5\u30a3\u30fc\u30eb\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3064\u3064\u3001\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u306e\u7570\u306a\u308b\u52d5\u4f5c\u306b\u5bfe\u3057\u3066\u4e00\u8cab\u3057\u305f\u64cd\u4f5c\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"react-navigation\u306e\u4f7f\u3044\u65b9"},"React Navigation\u306e\u4f7f\u3044\u65b9"),(0,i.kt)("p",null,"React Navigation\u306e\u4f7f\u3044\u65b9\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,i.kt)("h3",{id:"1-\u30ca\u30d3\u30b2\u30fc\u30bf\u30fc\u3092\u4f5c\u6210"},"1. \u30ca\u30d3\u30b2\u30fc\u30bf\u30fc\u3092\u4f5c\u6210"),(0,i.kt)("p",null,"\u5229\u7528\u53ef\u80fd\u306a\u30ca\u30d3\u30b2\u30fc\u30bf\u30fc\u306e1\u3064\u3092\u9078\u629e\u3057\u3066\u4f5c\u6210\u3057\u307e\u3059\u3002\n\u30ca\u30d3\u30b2\u30fc\u30bf\u30fc\u306b\u306fStack\u306e\u4ed6\u306b\u3082\u3001Tab\u3084Drawer\u306a\u3069\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const Root = createStackNavigator();\n")),(0,i.kt)("h3",{id:"2-\u753b\u9762\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u6210"},"2. \u753b\u9762\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u6210"),(0,i.kt)("p",null,"\u753b\u9762\u306f\u901a\u5e38\u306eReact\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"const Screen1: React.FC = () => {\n  return (\n    <View style={styles.screen}>\n        /* \uff5e\u7701\u7565\uff5e */\n    </View>\n  );\n};\n")),(0,i.kt)("h3",{id:"3-\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u5b9a\u7fa9"},"3. \u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u5b9a\u7fa9"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NavigationContainer"),"\u3092\u4f7f\u7528\u3057\u3066\u30eb\u30fc\u30c8\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\n\u30ca\u30d3\u30b2\u30fc\u30bf\u30fc\u306f\u30cd\u30b9\u30c8\u3057\u305f\u5b9a\u7fa9\u3082\u3067\u304d\u307e\u3059\uff08\u4f8b\u3048\u3070Tab\u30ca\u30d3\u30b2\u30fc\u30bf\u30fc\u5185\u306bStack\u30ca\u30d3\u30b2\u30fc\u30bf\u30fc\u304c\u3042\u308b\u306a\u3069\uff09\u3002\n\u30ca\u30d3\u30b2\u30fc\u30bf\u30fc\u304c\u30cd\u30b9\u30c8\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3067\u3082\u3001\u5fc5\u8981\u306a",(0,i.kt)("inlineCode",{parentName:"p"},"NavigationContainer"),"\u306f1\u3064\u3060\u3051\u3067\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'export const App = () => {\n  return (\n    <NavigationContainer>\n      <Root.Navigator>\n        <Root.Screen name="Screen1" component={Screen1} />\n        <Root.Screen name="Screen2" component={Screen2} />\n      </Root.Navigator>\n    </NavigationContainer>\n  );\n};\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Root.Navigator"),"\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"initialRouteName"),"\u5c5e\u6027\u306b\u753b\u9762\u540d\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"Root.Screen"),"\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"\u5c5e\u6027\u306e\u5024\uff09\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u5bfe\u5fdc\u3059\u308b\u753b\u9762\u304c\u521d\u671f\u8868\u793a\u753b\u9762\u306b\u306a\u308a\u307e\u3059\u3002\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u6700\u521d\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"Root.Screen"),"\u304c\u521d\u671f\u8868\u793a\u306b\u5229\u7528\u3055\u308c\u307e\u3059\u3002\n\u4f8b\u3048\u3070\u4e0a\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3067\u306f\u3001\u6700\u521d\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"Root.Screen"),"\u3067\u3042\u308b",(0,i.kt)("inlineCode",{parentName:"p"},"Screen1"),"\u304c\u521d\u3081\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"))),(0,i.kt)(o.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"image",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Navigation",src:t(5810).Z}))),(0,i.kt)(c.Z,{value:"source",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import {\n  NavigationContainer,\n  useNavigation,\n} from '@react-navigation/native';\nimport {\n  createStackNavigator,\n} from '@react-navigation/stack';\nimport React from 'react';\nimport {Text, View, StyleSheet} from 'react-native';\nimport {Button} from 'react-native-elements';\n\nconst Root = createStackNavigator();\n\nexport const App = () => {\n  return (\n    <NavigationContainer>\n      <Root.Navigator>\n        <Root.Screen name=\"Screen1\" component={Screen1} />\n        <Root.Screen name=\"Screen2\" component={Screen2} />\n      </Root.Navigator>\n    </NavigationContainer>\n  );\n};\n\nconst Screen1: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text style={styles.title}>Screen 1</Text>\n      <Button\n        buttonStyle={styles.button}\n        title=\"Navigate Screen 2\"\n        onPress={() => navigation.navigate('Screen2')}\n      />\n    </View>\n  );\n};\n\nconst Screen2: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text style={styles.title}>Screen 2</Text>\n      <Button\n        buttonStyle={styles.button}\n        title=\"Go Back\"\n        onPress={() => navigation.goBack()}\n      />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  screen: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  title: {\n    padding: 20,\n    fontSize: 42,\n  },\n  button: {\n    margin: 10,\n    width: 200,\n  },\n});\n")))))}v.isMDXComponent=!0},6010:function(e,n,t){function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{Z:function(){return r}})},5810:function(e,n,t){n.Z=t.p+"assets/images/navigation-6ad76b31beaed1cba82acae1b33108c4.png"},6162:function(e,n,t){n.Z=t.p+"assets/images/navigation_image-0abe2fc9e42d6b7ee57dbff9e72309ab.png"}}]);