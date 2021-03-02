(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),o=n(7),r=(n(0),n(145)),c={title:"useFocusEffect"},i={unversionedId:"react-native/learn/todo-app/use-focus-effect",id:"react-native/learn/todo-app/use-focus-effect",isDocsHomePage:!1,title:"useFocusEffect",description:"\u524d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u30bf\u30b9\u30af\u767b\u9332\u753b\u9762\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002",source:"@site/docs/react-native/learn/todo-app/use-focus-effect.mdx",slug:"/react-native/learn/todo-app/use-focus-effect",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/use-focus-effect",version:"current",lastUpdatedAt:1614664995,sidebar:"learn",previous:{title:"\u30bf\u30b9\u30af\u767b\u9332\u753b\u9762",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/todo-form"},next:{title:"Modal\u30b9\u30af\u30ea\u30fc\u30f3",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/modal"}},s=[],p={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"todo-form"}),"\u524d\u30bb\u30af\u30b7\u30e7\u30f3"),"\u3067\u306f\u30bf\u30b9\u30af\u767b\u9332\u753b\u9762\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002\n\u3057\u304b\u3057\u3001\u73fe\u6642\u70b9\u3067\u306f\u767b\u9332\u3057\u305f\u30bf\u30b9\u30af\u304cToDo\u4e00\u89a7\u753b\u9762\u306b\u8868\u793a\u3055\u308c\u307e\u305b\u3093\u3002\n\u3053\u3053\u3067\u306f\u305d\u306e\u4e0d\u5177\u5408\u306b\u5bfe\u5fdc\u3057\u307e\u3059\u3002"),Object(r.b)("p",null,"\u306a\u305c\u8ffd\u52a0\u3057\u305f\u30bf\u30b9\u30af\u304c\u8868\u793a\u3055\u308c\u306a\u3044\u306e\u3067\u3057\u3087\u3046\u304b\u3002\n\u6b21\u306b\u793a\u3059\u306e\u306fToDo\u4e00\u89a7\u753b\u9762\u306e\u30b3\u30fc\u30c9\u7b87\u6240\u3067\u3059\u3002\n",Object(r.b)("inlineCode",{parentName:"p"},"useEffect"),"\u30d5\u30c3\u30af\u3092\u4f7f\u7528\u3057\u3066\u3001\u753b\u9762\u30de\u30a6\u30f3\u30c8\u6642\u306b",Object(r.b)("inlineCode",{parentName:"p"},"TodoService.getTodos"),"\u3092\u547c\u3073\u51fa\u3057\u3066\u30bf\u30b9\u30af\u4e00\u89a7\u3092\u53d6\u5f97\u3057\u3066\u3044\u307e\u3059\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:"jsx",jsx:!0}),"  useEffect(() => {\n    let isActive = true;\n    TodoService.getTodos()\n      .then((response) => {\n        if (isActive) {\n          setTodos(response);\n        }\n      })\n      .catch(() => {});\n    return () => {\n      isActive = false;\n    };\n  }, []);\n")),Object(r.b)("p",null,"\u4e0a\u8a18\u306e\u5834\u5408\u3001",Object(r.b)("inlineCode",{parentName:"p"},"useEffect"),"\u30d5\u30c3\u30af\u306e\u51e6\u7406\u306f\u753b\u9762\u30de\u30a6\u30f3\u30c8\u6642\u306b\u3057\u304b\u5b9f\u884c\u3055\u308c\u307e\u305b\u3093\u3002\n\u30bf\u30b9\u30af\u767b\u9332\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u6642\u3082\u3001ToDo\u4e00\u89a7\u753b\u9762\u306f\u30b9\u30bf\u30c3\u30af\u306e\u4e0b\u306b\u96a0\u308c\u3066\u751f\u304d\u3066\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\uff08\u30bf\u30b9\u30af\u767b\u9332\u753b\u9762\u304c\u7834\u68c4\u3055\u308c\u3066\uff09ToDo\u4e00\u89a7\u753b\u9762\u304c\u518d\u8868\u793a\u3055\u308c\u305f\u5834\u5408\u3001\u753b\u9762\u30de\u30a6\u30f3\u30c8\u6642\u3067\u306f\u306a\u3044\u305f\u3081",Object(r.b)("inlineCode",{parentName:"p"},"useEffect"),"\u30d5\u30c3\u30af\u306e\u51e6\u7406\u304c\u52d5\u4f5c\u3057\u307e\u305b\u3093\u3002\n\u305d\u308c\u304cToDo\u4e00\u89a7\u753b\u9762\u306b\u30bf\u30b9\u30af\u304c\u8868\u793a\u3055\u308c\u306a\u3044\u7406\u7531\u3067\u3059\u3002"),Object(r.b)("p",null,"\u4eca\u56de\u306e\u5834\u5408\u3001\u753b\u9762\u306b\u30d5\u30a9\u30fc\u30ab\u30b9\u79fb\u3063\u305f\uff08\u753b\u9762\u304c\u518d\u8868\u793a\u3055\u308c\u305f\uff09\u969b\u306b\u3082\u30bf\u30b9\u30af\u4e00\u89a7\u3092\u53d6\u5f97\u3057\u305f\u3044\u3067\u3059\u3002\n\u3053\u306e\u3088\u3046\u306a\u5834\u5408\u306e\u305f\u3081\u3001React Native\u3067\u306f",Object(r.b)("inlineCode",{parentName:"p"},"useFocusEffect"),"\u30d5\u30c3\u30af\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n",Object(r.b)("inlineCode",{parentName:"p"},"useFocusEffect"),"\u30d5\u30c3\u30af\u306f\u753b\u9762\u30d5\u30a9\u30fc\u30ab\u30b9\u6642\u306b\u51e6\u7406\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u8a73\u7d30\u306f\u3001React Navigation\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnavigation.org/docs/use-focus-effect/"}),"useFocusEffect"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),Object(r.b)("p",null,"\u3067\u306f\u4fee\u6b63\u3057\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002\n",Object(r.b)("inlineCode",{parentName:"p"},"/src/screens/todo/TodoBoard.tsx"),"\u3092\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff",metastring:'title="/src/screens/todo/TodoBoard.tsx"',title:'"/src/screens/todo/TodoBoard.tsx"'}),"+ import {useFocusEffect} from '@react-navigation/native';\n  import {FilterType, TodoFilter, TodoList} from 'components/parts';\n- import React, {useContext, useEffect, useState} from 'react';\n+ import React, {useCallback, useContext, useState} from 'react';\n  import {Alert, StyleSheet, View} from 'react-native';\n  import {Icon, ThemeContext} from 'react-native-elements';\n  import {Todo, TodoService} from 'services';\n  \n  /* \uff5e\u7701\u7565\uff5e */  \n  \n  export const TodoBoard: React.FC = () => {\n    const {theme} = useContext(ThemeContext);\n    const navigation = useTodoStackNavigation<'TodoBoard'>();\n    const [todos, setTodos] = useState<Todo[]>([]);\n    const [filterType, setFilterType] = useState<FilterType>(FilterType.ALL);\n  \n-   useEffect(() => {\n+   useFocusEffect(\n+     useCallback(() => {\n        let isActive = true;\n  \n        TodoService.getTodos()\n          .then((response) => {\n            if (isActive) {\n              setTodos(response);\n            }\n          })\n          .catch(() => {});\n  \n        return () => {\n          isActive = false;\n        };\n-   }, []);\n+     }, []),\n+   );\n\n  /* \uff5e\u7701\u7565\uff5e */  \n")),Object(r.b)("p",null,"\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u3092",Object(r.b)("inlineCode",{parentName:"p"},"useCallback"),"\u3067\u30e9\u30c3\u30d7\u3057\u3066\u3044\u308b\u70b9\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n",Object(r.b)("inlineCode",{parentName:"p"},"useFocusEffect"),"\u306f\u3001\u753b\u9762\u306b\u30d5\u30a9\u30fc\u30ab\u30b9\u304c\u3042\u308b\u5834\u5408\u306b\u306e\u307f\u5b9f\u884c\u3055\u308c\u308b\u3068\u3044\u3046\u70b9\u3092\u9664\u304d\u3001React\u306e",Object(r.b)("inlineCode",{parentName:"p"},"useEffect"),"\u30d5\u30c3\u30af\u306b\u4f3c\u3066\u3044\u307e\u3059\u3002\n\u6700\u521d\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\uff08\u753b\u9762\u306b\u30d5\u30a9\u30fc\u30ab\u30b9\u304c\u3042\u308b\u5834\u5408\uff09\u3060\u3051\u3067\u306f\u306a\u304f\u3001\u4f9d\u5b58\u95a2\u4fc2\u304c\u5909\u66f4\u3055\u308c\u305f\u5834\u5408\u306b\u3082\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002\n",Object(r.b)("inlineCode",{parentName:"p"},"useCallback"),"\u3067\u30e9\u30c3\u30d7\u3057\u306a\u3044\u3068\u3001\u753b\u9762\u30d5\u30a9\u30fc\u30ab\u30b9\u6642\u306e\u3059\u3079\u3066\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3067\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u304c\u5b9f\u884c\u3055\u308c\u3066\u3057\u307e\u3044\u307e\u3059\u3002\n\u4e0a\u8a18\u51e6\u7406\u306e\u5834\u5408\u3001\u753b\u9762\u304cState\u5909\u66f4\u3055\u308c\u305f\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u518d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u304c\u8d70\u308b\u305f\u3081\u3001",Object(r.b)("inlineCode",{parentName:"p"},"useCallback"),"\u3067\u30e9\u30c3\u30d7\u3057\u306a\u3044\u3068\u7121\u9650\u306b\u518d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3057\u3066\u3057\u307e\u3044\u307e\u3059\u3002"),Object(r.b)("p",null,"\u307e\u305f\u3001\u623b\u308a\u5024\u306b\u95a2\u6570\u3092\u8fd4\u3057\u3066\u3044\u308b\u70b9\u306b\u3082\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u3053\u308c\u306f\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7\u95a2\u6570\u3068\u547c\u3070\u308c\u308b\u3082\u306e\u3067\u3001\u6b21\u306e\u5834\u5408\u306b\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u4f9d\u5b58\u95a2\u4fc2\u304c\u5909\u66f4\u3055\u308c\u3066\u65b0\u3057\u3044\u51e6\u7406\u304c\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u3055\u308c\u305f"),Object(r.b)("li",{parentName:"ul"},"\u753b\u9762\u304c\u30a2\u30f3\u30de\u30a6\u30f3\u30c8\u3055\u308c\u305f"),Object(r.b)("li",{parentName:"ul"},"\u753b\u9762\u304c\u30d5\u30a9\u30fc\u30ab\u30b9\u3092\u5931\u3063\u305f")),Object(r.b)("p",null,"\u3053\u3053\u3067\u306f\u3001\u4e0a\u8a18\u5834\u5408\u306b\u753b\u9762State\u3092\u6291\u6b62\u3059\u308b\u76ee\u7684\u3067\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7\u95a2\u6570\u3092\u6d3b\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u8a73\u7d30\u306f\u3001React Navite\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnavigation.org/docs/use-focus-effect/#running-asynchronous-effects"}),"Running asynchronous effects"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),Object(r.b)("p",null,"\u4fee\u6b63\u3067\u304d\u305f\u3089\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u30bf\u30b9\u30af\u767b\u9332\u753b\u9762\u3067\u767b\u9332\u3057\u305f\u30bf\u30b9\u30af\u304cToDo\u4e00\u89a7\u753b\u9762\u306b\u8868\u793a\u3067\u304d\u305f\u3089\u6210\u529f\u3067\u3059\u3002"))}l.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=a,f=b["".concat(c,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(f,i(i({ref:t},p),{},{components:n})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<r;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);