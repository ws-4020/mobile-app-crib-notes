(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(166)),c={title:"Stack\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3"},i={unversionedId:"react-native/learn/todo-app/stack",id:"react-native/learn/todo-app/stack",isDocsHomePage:!1,title:"Stack\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3",description:"\u5404\u753b\u9762\u3092\u5b9f\u88c5\u3059\u308b\u524d\u306b\u3001\u5168\u4f53\u306e\u753b\u9762\u9077\u79fb\u3092\u5b9f\u88c5\u3057\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002",source:"@site/docs/react-native/learn/todo-app/stack.mdx",sourceDirName:"react-native/learn/todo-app",slug:"/react-native/learn/todo-app/stack",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/stack",version:"current",lastUpdatedAt:1620621203,formattedLastUpdatedAt:"2021/5/10",frontMatter:{title:"Stack\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3"},sidebar:"learn",previous:{title:"Welcome",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/welcome"},next:{title:"\u72b6\u614b\u306b\u5fdc\u3058\u305f\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/auth"}},s=[{value:"\u753b\u9762\u3092\u8ffd\u52a0",id:"\u753b\u9762\u3092\u8ffd\u52a0",children:[]},{value:"Stack\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3",id:"stack\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3",children:[{value:"\u30d8\u30c3\u30c0\u30fc\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",id:"\u30d8\u30c3\u30c0\u30fc\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",children:[]}]}],l={toc:s};function p(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u5404\u753b\u9762\u3092\u5b9f\u88c5\u3059\u308b\u524d\u306b\u3001\u5168\u4f53\u306e\u753b\u9762\u9077\u79fb\u3092\u5b9f\u88c5\u3057\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002\n\u307e\u305a\u306f\u3001\u300cWelcome\u300d\u304b\u3089\u300cToDo\u4e00\u89a7\u300d\u307e\u3067\u306e\u9752\u7dda\u90e8\u5206\u306e\u753b\u9762\u9077\u79fb\u3092\u3001Stack\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u3067\u5b9f\u88c5\u3057\u307e\u3059\u3002"),Object(r.b)("p",null,Object(r.b)("img",{alt:"StackNavigation",src:n(262).default})),Object(r.b)("h2",{id:"\u753b\u9762\u3092\u8ffd\u52a0"},"\u753b\u9762\u3092\u8ffd\u52a0"),Object(r.b)("p",null,"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3068ToDo\u4e00\u89a7\u753b\u9762\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u307e\u305a\u306f\u753b\u9762\u9077\u79fb\u3092\u78ba\u8a8d\u3067\u304d\u308b\u3088\u3046\u306b\u3001\u6700\u4f4e\u9650\u306e\u3072\u306a\u578b\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002"),Object(r.b)("p",null,"\u6b21\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u30fb\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/src/screens/auth/Login.tsx")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/src/screens/auth/index.ts")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/src/screens/todo/TodoBoard.tsx")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/src/screens/todo/index.ts")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/src/screens/index.ts"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/screens/auth/Login.tsx"',jsx:!0,title:'"/src/screens/auth/Login.tsx"'},"import React from 'react';\nimport {StyleSheet, View} from 'react-native';\nimport {Text} from 'react-native-elements';\n\nexport const Login: React.FC = () => {\n  return (\n    <View style={styles.container}>\n      <Text h1>\u30ed\u30b0\u30a4\u30f3</Text>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/screens/auth/index.ts"',jsx:!0,title:'"/src/screens/auth/index.ts"'},"export * from './Login';\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/screens/todo/TodoBoard.tsx"',jsx:!0,title:'"/src/screens/todo/TodoBoard.tsx"'},"import React from 'react';\nimport {StyleSheet, View} from 'react-native';\nimport {Text} from 'react-native-elements';\n\nexport const TodoBoard: React.FC = () => {\n  return (\n    <View style={styles.container}>\n      <Text h1>Todo</Text>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/screens/todo/index.ts"',jsx:!0,title:'"/src/screens/todo/index.ts"'},"export * from './TodoBoard';\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-diff",metastring:'jsx title="/src/screens/index.ts"',jsx:!0,title:'"/src/screens/index.ts"'},"+ export * from './auth';\n  export * from './home';\n  export * from './instructions';\n+ export * from './todo';\n")),Object(r.b)("h2",{id:"stack\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3"},"Stack\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3"),Object(r.b)("p",null,"\u8ffd\u52a0\u3057\u305f\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3068ToDo\u4e00\u89a7\u753b\u9762\u3092",Object(r.b)("inlineCode",{parentName:"p"},"RootStackNav"),"\u30ca\u30d3\u30b2\u30fc\u30bf\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002",Object(r.b)("inlineCode",{parentName:"p"},"src/navigation/RootStackNav.tsx"),"\u3092\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n",Object(r.b)("inlineCode",{parentName:"p"},"name"),"\u306b\u306f\u3001\u30ca\u30d3\u30b2\u30fc\u30bf\u5185\u3067\u753b\u9762\u3092\u4e00\u610f\u306b\u8b58\u5225\u3059\u308b\u8b58\u5225\u5b50\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u3053\u306e\u8b58\u5225\u5b50\u306f\u3001",Object(r.b)("inlineCode",{parentName:"p"},"navigation.navigate('Login')"),"\u306e\u3088\u3046\u306b\u9077\u79fb\u5148\u306e\u753b\u9762\u3092\u6307\u5b9a\u3059\u308b\u3068\u304d\u306a\u3069\u306b\u4f7f\u3044\u307e\u3059\u3002"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-diff",metastring:'jsx title="src/navigation/RootStackNav.tsx"',jsx:!0,title:'"src/navigation/RootStackNav.tsx"'},"  import {createStackNavigator} from '@react-navigation/stack';\n  import React from 'react';\n- import {Welcome, Instructions} from 'screens';\n+ import {Welcome, Instructions, Login, TodoBoard} from 'screens';\n\n  const nav = createStackNavigator();\n  export const RootStackNav: React.FC = () => {\n    return (\n      <nav.Navigator initialRouteName={Welcome.name}>\n        <nav.Screen name=\"Welcome\" component={Welcome} options={{headerShown: false}} />\n+       <nav.Screen name=\"Login\" component={Login} />\n+       <nav.Screen name=\"TodoBoard\" component={TodoBoard} />\n        <nav.Screen name=\"Instructions\" component={Instructions} />\n      </nav.Navigator>\n    );\n  };\n")),Object(r.b)("h3",{id:"\u30d8\u30c3\u30c0\u30fc\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"},"\u30d8\u30c3\u30c0\u30fc\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"),Object(r.b)("p",null,"\u6b21\u306b\u3001Welcome\u753b\u9762\u304b\u3089\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3078\u9077\u79fb\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002",Object(r.b)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/todo-app/app-spec"},"To Do\u30a2\u30d7\u30ea\u306e\u4ed5\u69d8"),"\u306b\u5f93\u3044\u3001\u30ed\u30b0\u30a4\u30f3\u30dc\u30bf\u30f3\u3092\u3082\u3064\u30d8\u30c3\u30c0\u30fc\u3092\u8868\u793a\u3055\u305b\u307e\u3057\u3087\u3046\u3002\nStack\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u30d8\u30c3\u30c0\u30fc\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u3002"),Object(r.b)("h4",{id:"\u30d8\u30c3\u30c0\u30fc\u30bf\u30a4\u30c8\u30eb\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"},"\u30d8\u30c3\u30c0\u30fc\u30bf\u30a4\u30c8\u30eb\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"),Object(r.b)("p",null,"\u30d8\u30c3\u30c0\u30fc\u306e\u30bf\u30a4\u30c8\u30eb\u540d\u3092\u5909\u66f4\u3057\u305f\u3044\u5834\u5408\u3001",Object(r.b)("inlineCode",{parentName:"p"},"headerTitle"),"\u3067\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002\n\u307e\u305f\u3001Welcome\u753b\u9762\u3067\u306f\u3082\u3068\u3082\u3068",Object(r.b)("inlineCode",{parentName:"p"},"headerShown: false"),"\u3092\u6307\u5b9a\u3057\u3066\u30d8\u30c3\u30c0\u30fc\u3092\u975e\u8868\u793a\u306b\u3057\u3066\u3044\u305f\u305f\u3081\u3001\n\u6307\u5b9a\u3092\u524a\u9664\u3057\u3066\u30d8\u30c3\u30c0\u30fc\u3092\u8868\u793a\u3055\u305b\u307e\u3059\u3002"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"RootStackNav.tsx"),"\u3092\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-diff",metastring:'jsx title="src/navigation/RootStackNav.tsx"',jsx:!0,title:'"src/navigation/RootStackNav.tsx"'},'  import {createStackNavigator} from \'@react-navigation/stack\';\n  import React from \'react\';\n  import {Welcome, Instructions, Login, TodoBoard} from \'screens\';\n  \n  const nav = createStackNavigator();\n  export const RootStackNav: React.FC = () => {\n    return (\n      <nav.Navigator initialRouteName={Welcome.name}>\n-       <nav.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />\n+       <nav.Screen\n+         name="Welcome"\n+         component={Welcome}\n+         options={{\n+           headerTitle: \'Welcome\',\n+         }}\n+       />\n-       <nav.Screen name="Login" component={Login} />\n+       <nav.Screen\n+         name="Login"\n+         component={Login}\n+         options={{\n+           headerTitle: \'\u30ed\u30b0\u30a4\u30f3\',\n+         }}\n+       />\n-       <nav.Screen name="TodoBoard" component={TodoBoard} />\n+       <nav.Screen\n+         name="TodoBoard"\n+         component={TodoBoard}\n+         options={{\n+           headerTitle: \'Todo\',\n+         }}\n+       />\n        <nav.Screen name="Instructions" component={Instructions} />\n      </nav.Navigator>\n    );\n  };\n')),Object(r.b)("h4",{id:"\u30ed\u30b0\u30a4\u30f3\u30dc\u30bf\u30f3\u306e\u8ffd\u52a0"},"\u30ed\u30b0\u30a4\u30f3\u30dc\u30bf\u30f3\u306e\u8ffd\u52a0"),Object(r.b)("p",null,"\u30ed\u30b0\u30a4\u30f3\u30dc\u30bf\u30f3\u3092",Object(r.b)("inlineCode",{parentName:"p"},"HeaderRight"),"\u3068\u3057\u3066\u5b9a\u7fa9\u3057\u307e\u3059\u3002\n",Object(r.b)("inlineCode",{parentName:"p"},"navigation.navigate"),"\u306b\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u30ca\u30d3\u30b2\u30fc\u30bf\u306b\u767b\u9332\u3057\u305f\u3068\u304d\u306e",Object(r.b)("inlineCode",{parentName:"p"},"name"),"\u306e\u5024\uff08",Object(r.b)("inlineCode",{parentName:"p"},"Login"),"\uff09\u3092\u6e21\u3059\u3053\u3068\u3067\u3001\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3078\u9077\u79fb\u3059\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),Object(r.b)("p",null,"\u5b9a\u7fa9\u3057\u305f\u30ed\u30b0\u30a4\u30f3\u30dc\u30bf\u30f3\u3092",Object(r.b)("inlineCode",{parentName:"p"},"headerRight"),"\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u6307\u5b9a\u3059\u308b\u3068\u30d8\u30c3\u30c0\u30fc\u306e\u53f3\u5074\u306b\u914d\u7f6e\u3067\u304d\u307e\u3059\u3002"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"RootStackNav.tsx"),"\u3092\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-diff",metastring:'jsx title="src/navigation/RootStackNav.tsx"',jsx:!0,title:'"src/navigation/RootStackNav.tsx"'},"+ import {useNavigation} from '@react-navigation/native';\n  import {createStackNavigator} from '@react-navigation/stack';\n  import React from 'react';\n+ import {Button} from 'react-native-elements';\n  import {Welcome, Instructions, Login, TodoBoard} from 'screens';\n  \n+ const HeaderRight: React.FC = () => {\n+   const navigation = useNavigation();\n+   return <Button type=\"clear\" onPress={() => navigation.navigate('Login')} title=\"\u30ed\u30b0\u30a4\u30f3\" />;\n+ };\n+ \n  const nav = createStackNavigator();\n  export const RootStackNav: React.FC = () => {\n    return (\n-     <nav.Navigator initialRouteName={Welcome.name}>\n+     <nav.Navigator\n+       initialRouteName={Welcome.name}\n+       screenOptions={{\n+         headerRight: () => <HeaderRight />\n+       }}\n+     >\n        <nav.Screen\n          name=\"Welcome\"\n          component={Welcome}\n          options={{\n            headerTitle: 'Welcome',\n          }}\n        />\n        <nav.Screen\n          name=\"Login\"\n          component={Login}\n          options={{\n            headerTitle: '\u30ed\u30b0\u30a4\u30f3',\n+           headerRight: undefined,\n          }}\n        />\n  /* \uff5e\u7701\u7565\uff5e */\n")),Object(r.b)("p",null,"\u5171\u901a\u5b9a\u7fa9\u306f",Object(r.b)("inlineCode",{parentName:"p"},"Navigator"),"\u306e",Object(r.b)("inlineCode",{parentName:"p"},"screenOptions"),"\u306b\u3001\u753b\u9762\u3054\u3068\u306e\u5b9a\u7fa9\u306f",Object(r.b)("inlineCode",{parentName:"p"},"Screen"),"\u306e",Object(r.b)("inlineCode",{parentName:"p"},"options"),"\u306b\u5b9a\u7fa9\u3057\u307e\u3059\u3002\n\u4eca\u56de\u306f\u30ed\u30b0\u30a4\u30f3\u30dc\u30bf\u30f3\u3092\u5171\u901a\u5b9a\u7fa9\u3068\u3057\u3066\u3001\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306e\u307f\u8868\u793a\u3057\u306a\u3044\u3088\u3046\u8a2d\u5b9a\u3057\u307e\u3057\u305f\u3002"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Stack\u30ca\u30d3\u30b2\u30fc\u30bf\u306b\u6307\u5b9a\u3067\u304d\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u7a2e\u985e\u306b\u3064\u3044\u3066\u306f",Object(r.b)("a",{parentName:"p",href:"https://reactnavigation.org/docs/stack-navigator#options"},"\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306eAPI\u5b9a\u7fa9"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),Object(r.b)("p",null,"Welcome\u753b\u9762\u306b\u30d8\u30c3\u30c0\u30fc\u304c\u8868\u793a\u3055\u308c\u3066\u3001\u30ed\u30b0\u30a4\u30f3\u30dc\u30bf\u30f3\u304b\u3089\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306b\u9077\u79fb\u3067\u304d\u305f\u3089\u6210\u529f\u3067\u3059\u3002\n\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u304b\u3089Welcome\u753b\u9762\u306b\u623b\u308c\u308b\u3053\u3068\u3082\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(r.b)("p",null,"\u6700\u5f8c\u306b\u3001\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u304b\u3089ToDo\u4e00\u89a7\u753b\u9762\u3078\u306e\u9077\u79fb\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002",Object(r.b)("inlineCode",{parentName:"p"},"src/screens/auth/Login.tsx"),"\u3092\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-diff",metastring:'jsx title="/src/screens/auth/Login.tsx"',jsx:!0,title:'"/src/screens/auth/Login.tsx"'},"+ import {useNavigation} from '@react-navigation/native';\n  import React from 'react';\n  import {StyleSheet, View} from 'react-native';\n- import {Text} from 'react-native-elements';\n+ import {Text, Button} from 'react-native-elements';\n  \n  export const Login: React.FC = () => {\n+   const navigation = useNavigation();\n    return (\n      <View style={styles.container}>\n        <Text h1>\u30ed\u30b0\u30a4\u30f3</Text>\n+       <Button onPress={() => navigation.navigate('TodoBoard')} title=\"\u30ed\u30b0\u30a4\u30f3\" />\n      </View>\n    );\n  };\n  /* \uff5e\u7701\u7565\uff5e */\n")),Object(r.b)("p",null,"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306b\u30ed\u30b0\u30a4\u30f3\u30dc\u30bf\u30f3\u304c\u8868\u793a\u3055\u308c\u3001\u30bf\u30c3\u30d7\u3057\u3066ToDo\u4e00\u89a7\u306b\u9077\u79fb\u3067\u304d\u305f\u3089\u6210\u529f\u3067\u3059\u3002"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Logout",src:n(263).default})))}p.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,u=m["".concat(c,".").concat(d)]||m[d]||b[d]||r;return n?o.a.createElement(u,i(i({ref:t},l),{},{components:n})):o.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},262:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/screen-transition-stack-e51c3e8440a5445ea0acf5e64c6d019b.png"},263:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/stack-login-918d644bbdc3bb0de07c81d04de4ec9e.png"}}]);