"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2407],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92095:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"ToDo\u4e00\u89a7\u753b\u9762"},l=void 0,p={unversionedId:"react-native/learn/todo-app/screens/todo-board",id:"react-native/learn/todo-app/screens/todo-board",title:"ToDo\u4e00\u89a7\u753b\u9762",description:"ToDo\u4e00\u89a7\u753b\u9762\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/todo-app/screens/todo-board.mdx",sourceDirName:"react-native/learn/todo-app/screens",slug:"/react-native/learn/todo-app/screens/todo-board",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/todo-board",tags:[],version:"current",lastUpdatedAt:1639993574,formattedLastUpdatedAt:"2021/12/20",frontMatter:{title:"ToDo\u4e00\u89a7\u753b\u9762"},sidebar:"learn",previous:{title:"\u78ba\u8a8d\u30c0\u30a4\u30a2\u30ed\u30b0",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/alert"},next:{title:"ToDo\u767b\u9332\u753b\u9762",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/todo-form"}},d=[{value:"ToDo\u6a5f\u80fd\u95a2\u9023\u306e\u90e8\u54c1",id:"todo\u6a5f\u80fd\u95a2\u9023\u306e\u90e8\u54c1",children:[],level:2},{value:"ToDo\u4e00\u89a7\u753b\u9762\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u69cb\u9020",id:"todo\u4e00\u89a7\u753b\u9762\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u69cb\u9020",children:[],level:2},{value:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4f5c\u6210",id:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4f5c\u6210",children:[],level:2},{value:"ToDo\u4e00\u89a7\u753b\u9762\u306e\u4f5c\u6210",id:"todo\u4e00\u89a7\u753b\u9762\u306e\u4f5c\u6210",children:[],level:2}],c={toc:d};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ToDo\u4e00\u89a7\u753b\u9762\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"todo\u6a5f\u80fd\u95a2\u9023\u306e\u90e8\u54c1"},"ToDo\u6a5f\u80fd\u95a2\u9023\u306e\u90e8\u54c1"),(0,a.kt)("p",null,"\u307e\u305a\u306fToDo\u6a5f\u80fd\u306b\u5fc5\u8981\u306a\u90e8\u54c1\u3092\u7528\u610f\u3057\u307e\u3059\u3002\n\u3053\u3053\u3067\u306f\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3060\u3051\u3067\u52d5\u4f5c\u3059\u308b\u3088\u3046\u306b\u90e8\u54c1\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\n\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3068\u306e\u9023\u643a\u306f",(0,a.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/setting-up-local-server"},"REST API\u3068\u306e\u63a5\u7d9a"),"\u3067\u5b9f\u65bd\u3057\u307e\u3059\u3002"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u7528\u610f\u3059\u308b\u90e8\u54c1\u306f",(0,a.kt)("a",{parentName:"p",href:"https://fintan-contents.github.io/spa-restapi-handson/"},"Web\u30d9\u30fc\u30b9\u306e\u30cf\u30f3\u30ba\u30aa\u30f3"),"\u3092\u53c2\u8003\u306b\u3057\u3066\u3044\u307e\u3059\u3002\n\u305d\u3053\u3067\u7528\u610f\u3055\u308c\u3066\u3044\u308b",(0,a.kt)("inlineCode",{parentName:"p"},"BackendService.ts"),"\u3092\u6b21\u306e\u3068\u304a\u308a\u6a5f\u80fd\u5206\u5272\u3057\u3066\u3044\u308b\u70b9\u3092\u9664\u304d\u3001\u307b\u307c\u540c\u7b49\u6a5f\u80fd\u3067\u3059\u3002"),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AuthService"),": \u8a8d\u8a3c\u6a5f\u80fd"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TodoService"),": ToDo\u6a5f\u80fd")),(0,a.kt)("p",{parentName:"div"},"\u4e0a\u8a18\u7406\u7531\u304b\u3089\u3001\u672c\u30cf\u30f3\u30ba\u30aa\u30f3\u3067\u306e\u90e8\u54c1\u8aac\u660e\u306f\u7701\u7565\u3057\u307e\u3059\u3002"))),(0,a.kt)("p",null,"\u6b21\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u30fb\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/src/services/TodoService.ts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/src/services/index.ts"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/services/TodoService.tsx"',jsx:!0,title:'"/src/services/TodoService.tsx"'},"export type Todo = {\n  id: number;\n  text: string;\n  completed: boolean;\n};\n\nconst todos: Todo[] = [\n  {\n    id: 0,\n    text: '\u6d17\u6fef\u7269\u3092\u305f\u305f\u3080',\n    completed: false,\n  },\n  {\n    id: 1,\n    text: '\u98df\u5668\u3092\u6d17\u3046',\n    completed: false,\n  },\n  {\n    id: 2,\n    text: '\u30b4\u30df\u3092\u51fa\u3059',\n    completed: false,\n  },\n  {\n    id: 3,\n    text: '\u98a8\u5442\u6383\u9664',\n    completed: false,\n  },\n  {\n    id: 4,\n    text: '\u30d1\u30f3\u3092\u8cb7\u3044\u306b\u884c\u304f',\n    completed: false,\n  },\n  {\n    id: 5,\n    text: '\u96fb\u7403\u3092\u304b\u3048\u308b',\n    completed: false,\n  },\n  {\n    id: 6,\n    text: '\u587e\u306e\u9001\u308a\u8fce\u3048',\n    completed: false,\n  },\n  {\n    id: 7,\n    text: '\u3054\u98ef\u3092\u708a\u304f',\n    completed: false,\n  },\n];\nlet id = 7;\n\nconst getTodos = async () => {\n  // \u65b0\u3057\u3044\u914d\u5217\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u3057\u3066\u8fd4\u5374\u3059\u308b\n  return Promise.resolve([...todos]);\n};\n\nconst postTodo = async (text: string) => {\n  id++;\n  const todo: Todo = {\n    id,\n    text,\n    completed: false,\n  };\n  todos.push(todo);\n  return Promise.resolve(todo);\n};\n\nconst putTodo = async (id: number, completed: boolean) => {\n  const target = todos.find(todo => todo.id === id);\n  if (!target) {\n    return Promise.reject(new Error('not found'));\n  }\n  target.completed = completed;\n  return Promise.resolve(target);\n};\n\nexport const TodoService = {\n  getTodos,\n  postTodo,\n  putTodo,\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="/src/services/index.ts"',title:'"/src/services/index.ts"'},"  export * from './AuthService';\n+ export * from './TodoService';\n")),(0,a.kt)("h2",{id:"todo\u4e00\u89a7\u753b\u9762\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u69cb\u9020"},"ToDo\u4e00\u89a7\u753b\u9762\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u69cb\u9020"),(0,a.kt)("p",null,"\u6b21\u306b\u3001ToDo\u4e00\u89a7\u753b\u9762\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u69cb\u9020\u3092\u8003\u3048\u3001\u5fc5\u8981\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u5206\u5272\u3057\u3066\u843d\u3068\u3057\u8fbc\u3093\u3067\u3044\u304d\u307e\u3059\u3002\n\u3053\u3053\u3067\u306f\u3001Web\u30d9\u30fc\u30b9\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u306b\u3042\u308b",(0,a.kt)("a",{parentName:"p",href:"https://fintan-contents.github.io/spa-restapi-handson/todo/frontend/component/"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u5206\u5272"),"\u3092\u53c2\u8003\u306b\u3001\u6b21\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3078\u5206\u5272\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ToDoComponents",src:n(52918).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TodoFilter"),"\uff08\u7d2b\u8272\uff09: ToDo\u306e\u8868\u793a\u5bfe\u8c61\u3092\u9078\u629e\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TodoList"),"\uff08\u7dd1\u8272\uff09: ToDo\u3092\u4e00\u89a7\u5f62\u5f0f\u3067\u8868\u793a\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TodoItem"),"\uff08\u8d64\u8272\uff09: ToDo\u30921\u884c\u3067\u8868\u793a\u3059\u308b")),(0,a.kt)("h2",{id:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4f5c\u6210"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4f5c\u6210"),(0,a.kt)("p",null,"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3066\u3044\u304d\u307e\u3059\u3002\n\u30a2\u30d7\u30ea\u6a5f\u80fd\u306b\u7279\u5316\u3057\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3042\u308b\u305f\u3081\u3001",(0,a.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/todo-app/app-project-desc"},"ToDo\u30a2\u30d7\u30ea\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u6e96\u5099"),"\u306b\u793a\u3059\u3068\u304a\u308a\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"components/parts"),"\u306b\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u6b21\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/src/components/parts/todo/TodoFilter.tsx")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/src/components/parts/todo/TodoItem.tsx")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/src/components/parts/todo/TodoList.tsx")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/src/components/parts/todo/index.ts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/src/components/parts/index.ts"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/components/parts/todo/TodoFilter.tsx"',jsx:!0,title:'"/src/components/parts/todo/TodoFilter.tsx"'},"import React from 'react';\nimport {ButtonGroup} from 'react-native-elements';\n\nexport enum FilterType {\n  ALL = 0,\n  INCOMPLETE = 1,\n  COMPLETED = 2,\n}\n\ninterface Props {\n  filterType: FilterType;\n  setFilterType: (filter: FilterType) => void;\n}\n\nexport const TodoFilter: React.FC<Props> = ({filterType, setFilterType}) => {\n  const buttons = ['\u5168\u3066', '\u672a\u5b8c\u4e86\u306e\u307f', '\u5b8c\u4e86\u306e\u307f'];\n\n  return <ButtonGroup onPress={setFilterType} selectedIndex={filterType} buttons={buttons} />;\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/components/parts/todo/TodoItem.tsx"',jsx:!0,title:'"/src/components/parts/todo/TodoItem.tsx"'},"import React, {useCallback} from 'react';\nimport {StyleSheet, View} from 'react-native';\nimport {CheckBox} from 'react-native-elements';\n\ninterface Props {\n  id: number;\n  text: string;\n  completed: boolean;\n  toggleTodoCompletion: (id: number) => void;\n}\n\nexport const TodoItem: React.FC<Props> = ({id, text, completed, toggleTodoCompletion}) => {\n  const onToggle = useCallback(() => toggleTodoCompletion(id), [id, toggleTodoCompletion]);\n\n  return (\n    <View style={styles.item}>\n      <View style={styles.todo}>\n        <CheckBox title={text} checked={completed} containerStyle={styles.checkbox} onPress={onToggle} />\n      </View>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  item: {\n    flex: 1,\n    flexDirection: 'row',\n    alignItems: 'center',\n    borderStyle: 'solid',\n    borderWidth: 1,\n    borderColor: 'silver',\n    borderRadius: 10,\n    marginBottom: 10,\n  },\n  todo: {\n    flexGrow: 1,\n    flexShrink: 1,\n  },\n  checkbox: {\n    backgroundColor: 'transparent',\n    borderWidth: 0,\n  },\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/components/parts/todo/TodoList.tsx"',jsx:!0,title:'"/src/components/parts/todo/TodoList.tsx"'},"import React from 'react';\nimport {FlatList, StyleProp, StyleSheet, ViewStyle} from 'react-native';\nimport {Todo} from 'services';\n\nimport {TodoItem} from './TodoItem';\n\ninterface Props {\n  todos: Todo[];\n  contentContainerStyle?: StyleProp<ViewStyle>;\n  toggleTodoCompletion: (id: number) => void;\n  removeTodo: (id: number) => void;\n}\n\nexport const TodoList: React.FC<Props> = ({todos, contentContainerStyle, toggleTodoCompletion, removeTodo}) => {\n  return (\n    <FlatList\n      style={styles.list}\n      contentContainerStyle={contentContainerStyle}\n      data={todos}\n      renderItem={({item: todo}) => (\n        <TodoItem\n          key={todo.id}\n          id={todo.id}\n          text={todo.text}\n          completed={todo.completed}\n          toggleTodoCompletion={toggleTodoCompletion}\n        />\n      )}\n      keyExtractor={todo => String(todo.id)}\n    />\n  );\n};\n\nconst styles = StyleSheet.create({\n  list: {\n    flex: 1,\n  },\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/components/parts/todo/index.ts"',jsx:!0,title:'"/src/components/parts/todo/index.ts"'},"export * from './TodoFilter';\nexport * from './TodoList';\nexport * from './TodoItem';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/components/parts/index.ts"',jsx:!0,title:'"/src/components/parts/index.ts"'},"export * from './todo';\n")),(0,a.kt)("p",null,"\u5171\u901a\u90e8\u54c1\u3067\u306f\u3001React Native Elements\u306e",(0,a.kt)("inlineCode",{parentName:"p"},"ButtonGroup"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"CheckBox"),"\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002\n\u305d\u308c\u305e\u308c\u306e\u4f7f\u3044\u65b9\u306f\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://reactnativeelements.com/docs/buttongroup"},(0,a.kt)("inlineCode",{parentName:"a"},"ButtonGroup"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://reactnativeelements.com/docs/checkbox"},(0,a.kt)("inlineCode",{parentName:"a"},"CheckBox")))),(0,a.kt)("h2",{id:"todo\u4e00\u89a7\u753b\u9762\u306e\u4f5c\u6210"},"ToDo\u4e00\u89a7\u753b\u9762\u306e\u4f5c\u6210"),(0,a.kt)("p",null,"ToDo\u4e00\u89a7\u753b\u9762\u306e\u5b9f\u88c5\u306b\u5fc5\u8981\u306a\u90e8\u54c1\u7fa4\u304c\u63c3\u3044\u307e\u3057\u305f\u3002\nToDo\u4e00\u89a7\u753b\u9762\u3092\u5b9f\u88c5\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4fee\u6b63\u91cf\u304c\u591a\u3044\u306e\u3067\u3001\u6b21\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3067",(0,a.kt)("inlineCode",{parentName:"p"},"TodoBoard.tsx"),"\u3092\u4e0a\u66f8\u304d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/screens/todo/TodoBoard.tsx"',jsx:!0,title:'"/src/screens/todo/TodoBoard.tsx"'},"import {useNavigation} from '@react-navigation/native';\nimport {FilterType, TodoFilter, TodoList} from 'components/parts';\nimport React, {useContext, useEffect, useState} from 'react';\nimport {Alert, StyleSheet, View} from 'react-native';\nimport {Icon, ThemeContext} from 'react-native-elements';\nimport {Todo, TodoService} from 'services';\n\ntype ShowFilter = {\n  [K in FilterType]: (todo: Todo) => boolean;\n};\n\nconst showFilter: ShowFilter = {\n  [FilterType.ALL]: () => true,\n  [FilterType.INCOMPLETE]: todo => !todo.completed,\n  [FilterType.COMPLETED]: todo => todo.completed,\n};\n\nexport const TodoBoard: React.FC = () => {\n  const navigation = useNavigation();\n  const {theme} = useContext(ThemeContext);\n  const [todos, setTodos] = useState<Todo[]>([]);\n  const [filterType, setFilterType] = useState<FilterType>(FilterType.ALL);\n\n  useEffect(() => {\n    let isActive = true;\n\n    TodoService.getTodos()\n      .then(response => {\n        if (isActive) {\n          setTodos(response);\n        }\n      })\n      .catch(() => {});\n\n    return () => {\n      isActive = false;\n    };\n  }, []);\n\n  const toggleTodoCompletion = (id: number) => {\n    const target = todos.find(todo => todo.id === id);\n    if (!target) {\n      return;\n    }\n    TodoService.putTodo(id, !target.completed)\n      .then(returnedTodo =>\n        setTodos(prevTodos => {\n          return prevTodos.map(todo => (todo.id === id ? returnedTodo : todo));\n        }),\n      )\n      .catch(() => {});\n  };\n\n  const removeTodo = (id: number) => {\n    Alert.alert('\u672a\u5b9f\u88c5\u3067\u3059');\n  };\n\n  const showTodos = todos.filter(showFilter[filterType]);\n\n  return (\n    <View style={styles.container} testID=\"screen/main/home\">\n      <TodoFilter filterType={filterType} setFilterType={setFilterType} />\n      <TodoList\n        todos={showTodos}\n        contentContainerStyle={styles.todoListContainer}\n        toggleTodoCompletion={toggleTodoCompletion}\n        removeTodo={removeTodo}\n      />\n      <Icon\n        name=\"plus\"\n        type=\"font-awesome-5\"\n        color={theme.colors?.primary}\n        raised\n        reverse\n        size={30}\n        containerStyle={styles.iconContainerStyle}\n        onPress={() => {\n          navigation.navigate('TodoForm');\n        }}\n      />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n  todoListContainer: {\n    paddingLeft: 20,\n    paddingRight: 20,\n    paddingBottom: 80,\n  },\n  iconContainerStyle: {\n    position: 'absolute',\n    bottom: 10,\n    right: 10,\n  },\n});\n")),(0,a.kt)("p",null,"React\u540c\u69d8\u306b\u3001React Native\u3067\u3082",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u306b\u3066\u753b\u9762\u306e\u521d\u671f\uff08\u30de\u30a6\u30f3\u30c8\uff09\u6642\u306e\u51e6\u7406\u3092\u8a18\u8ff0\u3067\u304d\u307e\u3059\u3002\n\u3053\u3053\u3067\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"TodoService.getTodos"),"\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3057\u3066ToDo\u4e00\u89a7\u3092\u53d6\u5f97\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"React\u306e\u3088\u304f\u3042\u308b\u554f\u984c\u3068\u3057\u3066\u3001\u753b\u9762\u304c\u7834\u68c4\uff08\u30a2\u30f3\u30de\u30a6\u30f3\u30c8\uff09\u3055\u308c\u305f\u5f8c\u306e\u30b9\u30c6\u30fc\u30c8\u66f4\u65b0\u304c\u3042\u308a\u307e\u3059\u3002\n\u4e0a\u8a18\u30b3\u30fc\u30c9\u3067\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"isActive"),"\u30d5\u30e9\u30b0\u3067\u305d\u306e\u554f\u984c\u306b\u5bfe\u51e6\u3057\u3066\u3044\u307e\u3059\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u306b\u6307\u5b9a\u3057\u305f\u95a2\u6570\u306e\u623b\u308a\u5024\u3067\u95a2\u6570\u3092\u8fd4\u3059\u3068\u3001\u305d\u306e\u95a2\u6570\u304c\u753b\u9762\u306e\u7834\u68c4\uff08\u30a2\u30f3\u30de\u30a6\u30f3\u30c8\uff09\u6642\u306b\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002\n\u305d\u306e\u306a\u304b\u3067",(0,a.kt)("inlineCode",{parentName:"p"},"isActive"),"\u30d5\u30e9\u30b0\u3092",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u306b\u8a2d\u5b9a\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u753b\u9762\u304c\u7834\u68c4\u3055\u308c\u305f\u5f8c\u306b",(0,a.kt)("inlineCode",{parentName:"p"},"TodoService.getTodos"),"\u30e1\u30bd\u30c3\u30c9\u306e\u975e\u540c\u671f\u5fdc\u7b54\u304c\u52d5\u4f5c\u3057\u3066\u3082\u3001\u30b9\u30c6\u30fc\u30c8\u306f\u66f4\u65b0\u3055\u308c\u307e\u305b\u3093\u3002\n\u8a73\u7d30\u306f\u3001React\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e",(0,a.kt)("a",{parentName:"p",href:"https://ja.reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks"},"\u30d5\u30c3\u30af\u3067\u30c7\u30fc\u30bf\u306e\u53d6\u5f97\u3092\u3069\u306e\u3088\u3046\u306b\u884c\u3046\u306e\u3067\u3059\u304b\uff1f"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"toggleTodoCompletion"),"\u3067\u306f",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://ja.reactjs.org/docs/hooks-reference.html#functional-updates"},"\u95a2\u6570\u578b\u306e\u66f4\u65b0")),"\u3092\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u3002\n",(0,a.kt)("a",{parentName:"p",href:"https://ja.reactjs.org/docs/faq-state.html#what-is-the-difference-between-passing-an-object-or-a-function-in-setstate"},"React\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3082\u53c2\u7167\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,a.kt)("p",null,"\u4fee\u6b63\u3067\u304d\u305f\u3089\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u6b21\u306e\u64cd\u4f5c\u304c\u3067\u304d\u305f\u3089\u6210\u529f\u3067\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u753b\u9762\u306bToDo\u306e\u4e00\u89a7\u304c\u8868\u793a\u3067\u304d\u308b"),(0,a.kt)("li",{parentName:"ul"},"\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u3092\u30bf\u30c3\u30d7\u3057\u3066ToDo\u306e\u5b8c\u4e86\u72b6\u614b\u304c\u66f4\u65b0\u3067\u304d\u308b"),(0,a.kt)("li",{parentName:"ul"},"ToDo\u306e\u8868\u793a\u5bfe\u8c61\u3092\u9078\u629e\u3057\u3066\u8868\u793a\u3092\u5207\u66ff\u3067\u304d\u308b")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"TodoBoard",src:n(33382).Z})))}m.isMDXComponent=!0},33382:function(e,t,n){t.Z=n.p+"assets/images/todo_board-3eb8cc11d7325785d314bd21cc28522a.png"},52918:function(e,t,n){t.Z=n.p+"assets/images/todo_components-eb7452f0b284305a93eb716806a875ea.png"}}]);