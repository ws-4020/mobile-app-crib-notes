(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[3002],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2749:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={title:"\u4eee\u60f3\u30ad\u30fc\u30dc\u30fc\u30c9\u306e\u5236\u5fa1"},c=void 0,l={unversionedId:"react-native/learn/todo-app/screens/keyboard-avoiding-view",id:"react-native/learn/todo-app/screens/keyboard-avoiding-view",isDocsHomePage:!1,title:"\u4eee\u60f3\u30ad\u30fc\u30dc\u30fc\u30c9\u306e\u5236\u5fa1",description:"KeyboardAvoidingView",source:"@site/docs/react-native/learn/todo-app/screens/keyboard-avoiding-view.mdx",sourceDirName:"react-native/learn/todo-app/screens",slug:"/react-native/learn/todo-app/screens/keyboard-avoiding-view",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/keyboard-avoiding-view",version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"\u4eee\u60f3\u30ad\u30fc\u30dc\u30fc\u30c9\u306e\u5236\u5fa1"},sidebar:"learn",previous:{title:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/login"},next:{title:"\u78ba\u8a8d\u30c0\u30a4\u30a2\u30ed\u30b0",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/alert"}},p=[{value:"KeyboardAvoidingView",id:"keyboardavoidingview",children:[]}],s={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"keyboardavoidingview"},"KeyboardAvoidingView"),(0,i.kt)("p",null,"\u4eee\u60f3\u30ad\u30fc\u30dc\u30fc\u30c9\u304c\u5165\u529b\u6b04\u306b\u8986\u3044\u304b\u3076\u3055\u3063\u3066\u64cd\u4f5c\u3057\u3065\u3089\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\n\u3053\u306e\u3088\u3046\u306a\u554f\u984c\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u306b\u3001React Native\u3067\u306f\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u3057\u3066",(0,i.kt)("inlineCode",{parentName:"p"},"KeyboardAvoidingView"),"\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u30ad\u30fc\u30dc\u30fc\u30c9\u306e\u9ad8\u3055\u306b\u57fa\u3065\u3044\u3066\u3001\u9ad8\u3055\u3084\u4f4d\u7f6e\u3001\u4e0b\u90e8\u306e\u30d1\u30c7\u30a3\u30f3\u30b0\u3092\u81ea\u52d5\u8abf\u6574\u3057\u3066\u304f\u308c\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u65e9\u901f\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u4fee\u6b63\u3057\u307e\u3057\u3087\u3046\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/src/screens/auth/Login.tsx"),"\u3092\u6b21\u306e\u901a\u308a\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="/src/screens/auth/Login.tsx"',title:'"/src/screens/auth/Login.tsx"'},"  import {useUserContext} from 'contexts/UserContext';\n  import {useFormik} from 'formik';\n  import React, {useCallback} from 'react';\n- import {StyleSheet, View} from 'react-native';\n+ import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';\n  import {Button, Input} from 'react-native-elements';\n  import * as Yup from 'yup';\n  \n  export const Login: React.FC = () => {\n    /* \uff5e\u7701\u7565\uff5e */\n    return (\n+     <KeyboardAvoidingView\n+       behavior={Platform.select({\n+         ios: 'padding',\n+         android: undefined,\n+       } as const)}\n+       style={styles.container}>\n        <View style={styles.form}>\n  \n    /* \uff5e\u7701\u7565\uff5e */\n  \n          <Button\n            disabled={formik.isSubmitting}\n            onPress={() => formik.handleSubmit()}\n            title=\"\u30ed\u30b0\u30a4\u30f3\u3059\u308b\"\n            buttonStyle={styles.button}\n          />\n        </View>\n+     </KeyboardAvoidingView>\n    );\n  };\n  \n  const styles = StyleSheet.create({\n+   container: {\n+     flex: 1,\n+   },\n    /* \uff5e\u7701\u7565\uff5e */\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"behavior"),"\u3067\u30ad\u30fc\u30dc\u30fc\u30c9\u306e\u52d5\u4f5c\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"Platform.select"),"\u3092\u7528\u3044\u308b\u3053\u3068\u3067\u3001iOS\u3068Android\u305d\u308c\u305e\u308c\u306e\u52d5\u4f5c\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\n\u3053\u3053\u3067\u306f\u3001iOS\u306e\u5834\u5408\u306b\u4e0b\u90e8\u30d1\u30c7\u30a3\u30f3\u30b0\u304c\u8abf\u6574\u3055\u308c\u308b\u3088\u3046\u6307\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u4fee\u6b63\u3067\u304d\u305f\u3089\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u4eee\u60f3\u30ad\u30fc\u30dc\u30fc\u30c9\u304c\u5165\u529b\u306e\u90aa\u9b54\u306b\u306a\u3089\u306a\u3044\u3088\u3046\u81ea\u52d5\u8abf\u6574\u3055\u308c\u3066\u3044\u308c\u3070\u6210\u529f\u3067\u3059\u3002"))}u.isMDXComponent=!0}}]);