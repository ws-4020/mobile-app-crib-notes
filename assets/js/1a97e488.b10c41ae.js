(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{167:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return v}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,v=b["".concat(i,".").concat(p)]||b[p]||m[p]||o;return n?r.a.createElement(v,c(c({ref:t},l),{},{components:n})):r.a.createElement(v,c({ref:t},l))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},168:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},169:function(e,t,n){"use strict";var a=n(0),r=n(170);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},170:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},171:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(169),i=n(168),c=n(56),s=n.n(c);var l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,b=e.values,m=e.groupId,p=e.className,v=Object(o.a)(),f=v.tabGroupChoices,g=v.setTabGroupChoices,d=Object(a.useState)(c),y=d[0],O=d[1],j=a.Children.toArray(e.children),S=[];if(null!=m){var T=f[m];null!=T&&T!==y&&b.some((function(e){return e.value===T}))&&O(T)}var N=function(e){var t=e.currentTarget,n=S.indexOf(t),a=b[n].value;O(a),null!=m&&(g(m,a),setTimeout((function(){var e,n,a,r,o,i,c,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,c=i.innerHeight,l=i.innerWidth,n>=0&&o<=l&&r<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((function(){return t.classList.remove(s.a.tabItemActive)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var a=S.indexOf(e.target)+1;n=S[a]||S[0];break;case l:var r=S.indexOf(e.target)-1;n=S[r]||S[S.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return S.push(e)},onKeyDown:x,onFocus:N,onClick:N},n)}))),t?Object(a.cloneElement)(j.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},172:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},220:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tab_image-a016354dedf177e989dc540abaa02012.png"},221:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tab-96dd0dafdd7f1ff2b7536738d2ce05d3.png"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),o=(n(0),n(167)),i=n(171),c=n(172),s={title:"Tab"},l={unversionedId:"react-native/learn/basic-concepts/react-navigation-basics/tab",id:"react-native/learn/basic-concepts/react-navigation-basics/tab",isDocsHomePage:!1,title:"Tab",description:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u63a1\u7528\u3055\u308c\u308b\u4e00\u822c\u7684\u306a\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u306b\u30bf\u30d6\u304c\u3042\u308a\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-navigation-basics/tab.mdx",sourceDirName:"react-native/learn/basic-concepts/react-navigation-basics",slug:"/react-native/learn/basic-concepts/react-navigation-basics/tab",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/tab",version:"current",lastUpdatedAt:1619589403,formattedLastUpdatedAt:"2021/4/28",frontMatter:{title:"Tab"},sidebar:"learn",previous:{title:"Modal",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/modal"},next:{title:"ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app"}},u=[],b={toc:u};function m(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u63a1\u7528\u3055\u308c\u308b\u4e00\u822c\u7684\u306a\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u306b\u30bf\u30d6\u304c\u3042\u308a\u307e\u3059\u3002\n\u30bf\u30d6\u306f\u753b\u9762\u306e\u4e0b\u90e8\uff08\u307e\u305f\u306f\u4e0a\u90e8\uff09\u306b\u914d\u7f6e\u3055\u308c\u3001\u30dc\u30bf\u30f3\u62bc\u4e0b\u3067\u753b\u9762\u3092\u5207\u308a\u66ff\u3048\u307e\u3059\u3002"),Object(o.b)("p",null,"React Navigation\u3067\u306f\u3001\u6b21\u306eAPI\u3092\u4f7f\u7528\u3057\u3066\u30bf\u30d6\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"createBottomTabNavigator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"createMaterialBottomTabNavigator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"createMaterialTopTabNavigator"))),Object(o.b)("p",null,"\u30bf\u30d6\u30ca\u30d3\u30b2\u30fc\u30bf\u306e\u5b9a\u7fa9\u306f\u30b9\u30bf\u30c3\u30af\u306e\u305d\u308c\u3068\u4f3c\u3066\u3044\u307e\u3059\u3002\u6b21\u306e\u30b3\u30fc\u30c9\u306f\u30bf\u30d6\u30ca\u30d3\u30b2\u30fc\u30bf\u306e\u5b9a\u7fa9\u4f8b\u3067\u3059\u3002\n\u5b9a\u7fa9\u306e\u4e2d\u3067\u3001\u30bf\u30d6\u306e\u5916\u89b3\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\uff08\u30a2\u30a4\u30b3\u30f3\u8868\u793a\u3057\u305f\u308a\u30d0\u30c3\u30b8\u3092\u8ffd\u52a0\u3057\u305f\u308a\uff09\u3067\u304d\u307e\u3059\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'<NavigationContainer>\n  <RootTab.Navigator>\n    <RootTab.Screen\n      name="Settings"\n      component={SettingsScreen}\n      options={{\n        title: \'\u8a2d\u5b9a\',\n        tabBarBadge: 3,\n        tabBarIcon: ({color}) => (\n          <Ionicons name="md-settings" size={30} color={color} />\n        ),\n      }}\n    />\n    /* \u7701\u7565 */\n  </RootTab.Navigator>\n</NavigationContainer>\n')),Object(o.b)("p",null,"\u30bf\u30d6\u306e\u5207\u308a\u66ff\u3048\u3001\u304a\u3088\u3073\u30bf\u30d6\u914d\u4e0b\u306e\uff08\u30cd\u30b9\u30c8\u3055\u308c\u305f\uff09\u30ca\u30d3\u30b2\u30fc\u30bf\u306e\u753b\u9762\u9077\u79fb\u3082\u3001\u30b9\u30bf\u30c3\u30af\u3068\u540c\u69d8\u306b",Object(o.b)("inlineCode",{parentName:"p"},"navigation.navigate"),"\u3092\u7528\u3044\u307e\u3059\u3002"),Object(o.b)("p",null,"\u6b21\u306e\u56f3\u306f\u3001\u30b3\u30fc\u30c9\u4f8b\u306e\u30ca\u30d3\u30b2\u30fc\u30bf\u69cb\u6210\u3067\u3059\u3002\n\u30bf\u30d6\u914d\u4e0b\u306b\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30b9\u30bf\u30c3\u30af\u30ca\u30d3\u30b2\u30fc\u30bf\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3059\u3002"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Tab navigator",src:n(220).default})),Object(o.b)(i.a,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"image",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("img",{alt:"Tab",src:n(221).default}))),Object(o.b)(c.a,{value:"source",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import {Ionicons} from '@expo/vector-icons';\nimport {\n  createBottomTabNavigator,\n} from '@react-navigation/bottom-tabs';\nimport {\n  NavigationContainer,\n  useNavigation,\n} from '@react-navigation/native';\nimport {\n  createStackNavigator,\n} from '@react-navigation/stack';\nimport * as React from 'react';\nimport {StyleSheet, Text, View} from 'react-native';\nimport {Button} from 'react-native-elements';\n\nconst HomeStack = createStackNavigator();\nconst RootTab = createBottomTabNavigator();\n\nconst HomeStackScreen: React.FC = () => {\n  return (\n    <HomeStack.Navigator>\n      <HomeStack.Screen name=\"Home\" component={HomeScreen} />\n      <HomeStack.Screen name=\"Details\" component={DetailsScreen} />\n    </HomeStack.Navigator>\n  );\n};\n\nexport const App: React.FC = () => {\n  return (\n    <NavigationContainer>\n      <RootTab.Navigator>\n        <RootTab.Screen\n          name=\"HomeStack\"\n          component={HomeStackScreen}\n          options={{\n            title: '\u30db\u30fc\u30e0',\n            tabBarIcon: ({color}) => (\n              <Ionicons name=\"md-home\" size={30} color={color} />\n            ),\n          }}\n        />\n        <RootTab.Screen\n          name=\"Settings\"\n          component={SettingsScreen}\n          options={{\n            title: '\u8a2d\u5b9a',\n            tabBarBadge: 3,\n            tabBarIcon: ({color}) => (\n              <Ionicons name=\"md-settings\" size={30} color={color} />\n            ),\n          }}\n        />\n      </RootTab.Navigator>\n    </NavigationContainer>\n  );\n};\n\nconst HomeScreen: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text>Home screen</Text>\n      <Button\n        title=\"Go to Details\"\n        buttonStyle={styles.button}\n        onPress={() => navigation.navigate('Details')}\n      />\n      <Button\n        title=\"Go to Settings\"\n        buttonStyle={styles.button}\n        onPress={() => navigation.navigate('Settings')}\n      />\n    </View>\n  );\n};\n\nconst SettingsScreen: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text>Settings screen</Text>\n      <Button\n        title=\"Go to HomeStack\"\n        buttonStyle={styles.button}\n        onPress={() => navigation.navigate('HomeStack')}\n      />\n    </View>\n  );\n};\n\nconst DetailsScreen: React.FC = () => {\n  return (\n    <View style={styles.screen}>\n      <Text>Details!</Text>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  screen: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  button: {\n    marginTop: 10,\n    width: 200,\n  },\n});\n")))))}m.isMDXComponent=!0}}]);