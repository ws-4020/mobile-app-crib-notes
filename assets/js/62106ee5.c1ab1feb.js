(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[3790],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(k,i(i({ref:t},s),{},{components:n})):o.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8559:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i={title:"REST API\u306e\u547c\u3073\u3060\u3057"},p=void 0,l={unversionedId:"react-native/learn/todo-app/networking/api-request",id:"react-native/learn/todo-app/networking/api-request",isDocsHomePage:!1,title:"REST API\u306e\u547c\u3073\u3060\u3057",description:"ToDo\u30a2\u30d7\u30ea\u304b\u3089REST API\u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u30b5\u30fc\u30d0\u304b\u3089\u53d6\u5f97\u3057\u305f\u30c7\u30fc\u30bf\u3092\u753b\u9762\u306b\u8868\u793a\u3057\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002\u307e\u305a\u306f\u3001TodoService\u3067API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u3046\u3088\u3046\u306b\u4fee\u6b63\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/todo-app/networking/api-request.mdx",sourceDirName:"react-native/learn/todo-app/networking",slug:"/react-native/learn/todo-app/networking/api-request",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/api-request",version:"current",lastUpdatedAt:1623980777,formattedLastUpdatedAt:"2021/6/18",frontMatter:{title:"REST API\u306e\u547c\u3073\u3060\u3057"},sidebar:"learn",previous:{title:"API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u4f5c\u6210",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/generate-api-client"},next:{title:"ToDo\u4e00\u89a7\u53d6\u5f97\u4e2d\u306e\u8868\u793a",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/activity-indicator"}},c=[{value:"<code>TodoService</code>\u306e\u4fee\u6b63",id:"todoservice\u306e\u4fee\u6b63",children:[]},{value:"\u52d5\u4f5c\u78ba\u8a8d",id:"\u52d5\u4f5c\u78ba\u8a8d",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ToDo\u30a2\u30d7\u30ea\u304b\u3089REST API\u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u30b5\u30fc\u30d0\u304b\u3089\u53d6\u5f97\u3057\u305f\u30c7\u30fc\u30bf\u3092\u753b\u9762\u306b\u8868\u793a\u3057\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002\u307e\u305a\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"TodoService"),"\u3067API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u3046\u3088\u3046\u306b\u4fee\u6b63\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"todoservice\u306e\u4fee\u6b63"},(0,a.kt)("inlineCode",{parentName:"h2"},"TodoService"),"\u306e\u4fee\u6b63"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TodoService"),"\u306e\u5404\u30e1\u30bd\u30c3\u30c9\u304b\u3089\u3001\u9069\u5207\u306aAPI\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u3060\u3059\u3088\u3046\u306b\u4fee\u6b63\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u5171\u901a\u7684\u306a\u8a2d\u5b9a\u3092\u3057\u3066\u3044\u308b",(0,a.kt)("inlineCode",{parentName:"p"},"config"),"\u3068\u81ea\u52d5\u751f\u6210\u3055\u308c\u305f",(0,a.kt)("inlineCode",{parentName:"p"},"TodosApi"),"\u3092",(0,a.kt)("inlineCode",{parentName:"p"},"backend"),"\u304b\u3089import\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="/src/services/TodoService.ts"',title:'"/src/services/TodoService.ts"'},"import {TodosApi, config} from 'backend';\n")),(0,a.kt)("p",null,"\u6b21\u306b",(0,a.kt)("inlineCode",{parentName:"p"},"TodosApi"),"\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3057\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"TodoService"),"\u306e\u30e1\u30bd\u30c3\u30c9\u304b\u3089\u547c\u3073\u3060\u3059\u3088\u3046\u306b\u4fee\u6b63\u3057\u307e\u3059\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"TodosApi"),"\u306b",(0,a.kt)("inlineCode",{parentName:"p"},"config"),"\u3092\u6e21\u3059\u3053\u3068\u3067\u3001\u63a5\u7d9a\u5148\u3092\u5207\u308a\u66ff\u3048\u3089\u308c\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"TodoService"),"\u306e3\u3064\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const todosApi = new TodosApi(config);\n\nconst getTodos = async () => {\n  return await todosApi.getTodos();\n};\n\nconst postTodo = async (text: string) => {\n  return await todosApi.postTodo({newTodo: {text}});\n};\n\nconst putTodo = async (id: number, completed: boolean) => {\n  return await todosApi.putTodo({todoId: id, todoStatus: {completed}});\n};\n")),(0,a.kt)("p",null,"\u3053\u3053\u307e\u3067\u306fService\u3067",(0,a.kt)("inlineCode",{parentName:"p"},"type ToDo"),"\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3057\u305f\u304c\u3001Open API\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u30e2\u30c7\u30eb\u3092\u5229\u7528\u3059\u308b\u3088\u3046\u306b\u4fee\u6b63\u3057\u307e\u3059\u3002\n\u307e\u305f\u3001\u30e1\u30bd\u30c3\u30c9\u3092\u4fee\u6b63\u3059\u308b\u3068",(0,a.kt)("inlineCode",{parentName:"p"},"TodoService"),"\u306e\u30c0\u30df\u30fc\u30c7\u30fc\u30bf\u3067\u3042\u308b",(0,a.kt)("inlineCode",{parentName:"p"},"todos"),"\u3068",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"\u304c\u4e0d\u8981\u306b\u306a\u308b\u306e\u3067\u524a\u9664\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TodoService"),"\u3092\u6b21\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3067\u4e0a\u66f8\u304d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u753b\u9762\u306e\u5b9f\u88c5\u306e\u6f14\u7fd2\u554f\u984c\u3067",(0,a.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/exercise#ToDo%E3%81%AE%E5%89%8A%E9%99%A4"},"ToDo\u306e\u524a\u9664"),"\u3092\u5b9f\u88c5\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u524a\u9664\u30e1\u30bd\u30c3\u30c9\u3082API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u547c\u3073\u3060\u3059\u3088\u3046\u306b\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="/src/services/TodoService.ts"',title:'"/src/services/TodoService.ts"'},"import {TodosApi, config} from 'backend';\n\nconst todosApi = new TodosApi(config);\n\nexport type {Todo} from 'backend';\n\nconst getTodos = async () => {\n  return await todosApi.getTodos();\n};\n\nconst postTodo = async (text: string) => {\n  return await todosApi.postTodo({newTodo: {text}});\n};\n\nconst putTodo = async (id: number, completed: boolean) => {\n  return await todosApi.putTodo({todoId: id, todoStatus: {completed}});\n};\n\nexport const TodoService = {\n  getTodos,\n  postTodo,\n  putTodo,\n};\n")),(0,a.kt)("h2",{id:"\u52d5\u4f5c\u78ba\u8a8d"},"\u52d5\u4f5c\u78ba\u8a8d"),(0,a.kt)("p",null,"\u3053\u308c\u3067ToDo\u30a2\u30d7\u30ea\u304b\u3089\u767b\u9332\u3057\u305fToDo\u304c\u4fdd\u5b58\u3055\u308c\u3001\u30a2\u30d7\u30ea\u3092\u518d\u8d77\u52d5\u3057\u3066\u3082\u3001\u524d\u306b\u767b\u9332\u3057\u305fToDo\u304c\u53c2\u7167\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002\n\u5b9f\u969b\u306b\u30a2\u30d7\u30ea\u3092\u52d5\u304b\u3057\u3066\u3001\u305d\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002\u6b21\u306e\u624b\u9806\u3067\u30a2\u30d7\u30ea\u3092\u64cd\u4f5c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"API\u30b5\u30fc\u30d0\u3092\u8d77\u52d5"),(0,a.kt)("li",{parentName:"ol"},"\u30a2\u30d7\u30ea\u3092\u8d77\u52d5"),(0,a.kt)("li",{parentName:"ol"},"\u30ed\u30b0\u30a4\u30f3"),(0,a.kt)("li",{parentName:"ol"},"ToDo\u4e00\u89a7\u306e\u300c\u5168\u3066\u300d\u30bf\u30d6\u3067\u5168\u91cf\uff08\u521d\u56de\u306f0\u4ef6\uff09\u3092\u78ba\u8a8d"),(0,a.kt)("li",{parentName:"ol"},"ToDo\u767b\u9332\u753b\u9762\u304b\u3089ToDo\u3092\u767b\u9332"),(0,a.kt)("li",{parentName:"ol"},"\u30a2\u30d7\u30ea\u3092\u9589\u3058\u308b"),(0,a.kt)("li",{parentName:"ol"},"\u30a2\u30d7\u30ea\u3092\u8d77\u52d5"),(0,a.kt)("li",{parentName:"ol"},"ToDo\u4e00\u89a7\u306e\u300c\u5168\u3066\u300d\u30bf\u30d6\u3067\u767b\u9332\u3057\u305fToDo\u304c\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d")),(0,a.kt)("p",null,"\u307e\u305f\u3001\u81ea\u5206\u3067\u8d77\u52d5\u3057\u3066\u3044\u308b\u30a2\u30d7\u30ea\u4ee5\u5916\u304b\u3089\u767b\u9332\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3082\u53c2\u7167\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u6b21\u306e\u624b\u9806\u3092\u5b9f\u65bd\u3057\u3066\u3001\u4ed6\u306e\u4eba\u304cToDo\u3092\u8ffd\u52a0\u3057\u305f\u3068\u304d\u306e\u52d5\u4f5c\u3092\u78ba\u8a8d\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"API\u30b5\u30fc\u30d0\u3092\u8d77\u52d5"),(0,a.kt)("li",{parentName:"ol"},"\u30a2\u30d7\u30ea\u3092\u8d77\u52d5"),(0,a.kt)("li",{parentName:"ol"},"\u30ed\u30b0\u30a4\u30f3"),(0,a.kt)("li",{parentName:"ol"},"ToDo\u4e00\u89a7\u306e\u300c\u5168\u3066\u300d\u30bf\u30d6\u3067\u5168\u91cf\u3092\u78ba\u8a8d"),(0,a.kt)("li",{parentName:"ol"},"curl\u306a\u3069\u3067ToDo\u3092\u767b\u9332"),(0,a.kt)("li",{parentName:"ol"},"\u8a2d\u5b9a\u30bf\u30d6\u3092\u30bf\u30c3\u30d7\u3057\u3066\u3001\u8a2d\u5b9a\u753b\u9762\u3092\u8868\u793a\u5f8c\u3001\u30db\u30fc\u30e0\u30bf\u30d6\u3092\u30bf\u30c3\u30d7\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"useFocusEffect"),"\u3067\u30c7\u30fc\u30bf\u3092\u518d\u53d6\u5f97\u3059\u308b\u305f\u3081\uff09"),(0,a.kt)("li",{parentName:"ol"},"curl\u306a\u3069\u3067\u767b\u9332\u3057\u305fToDo\u304c\u8868\u793a\u3055\u308c\u308b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="curl\u3067\u306e\u767b\u9332"',title:'"curl\u3067\u306e\u767b\u9332"'},'curl http://localhost:9080/api/todos -X POST -d "{\\"text\\": \\"\u30a2\u30d7\u30ea\u5916\u304b\u3089\u306e\u767b\u9332\\"}" -H "Content-Type: application/json"\n')),(0,a.kt)("p",null,"\u3053\u308c\u3067\u3001REST API\u3092\u547c\u3073\u3060\u305b\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002\u3057\u304b\u3057\u3001\u3053\u306e\u307e\u307e\u3067\u306fAPI\u3092\u547c\u3073\u3060\u3057\u3066\u3044\u308b\u9593\u3082\u753b\u9762\u304c\u64cd\u4f5c\u53ef\u80fd\u306e\u307e\u307e\u306b\u306a\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3057\u3001\u30e6\u30fc\u30b6\u306b\u30a2\u30d7\u30ea\u304c\u51e6\u7406\u4e2d\u3067\u3042\u308b\u3053\u3068\u3092\u4f1d\u3048\u3089\u308c\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,"\u305d\u3053\u3067\u3001\u6b21\u306fAPI\u306e\u547c\u3073\u3060\u3057\u4e2d\u306b\u753b\u9762\u306e\u4e00\u90e8\u3092\u64cd\u4f5c\u4e0d\u53ef\u306b\u3057\u3001\u30e6\u30fc\u30b6\u306b\u51e6\u7406\u4e2d\u3067\u3042\u308b\u3053\u3068\u3092\u4f1d\u3048\u308b\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u3092\u8868\u793a\u3059\u308b\u3088\u3046\u306b\u4fee\u6b63\u3057\u307e\u3059\u3002"))}d.isMDXComponent=!0}}]);