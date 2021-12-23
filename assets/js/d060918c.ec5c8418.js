"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[3002],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21516:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={title:"\u4eee\u60f3\u30ad\u30fc\u30dc\u30fc\u30c9\u306e\u5236\u5fa1"},l=void 0,p={unversionedId:"react-native/learn/todo-app/screens/keyboard-avoiding-view",id:"react-native/learn/todo-app/screens/keyboard-avoiding-view",title:"\u4eee\u60f3\u30ad\u30fc\u30dc\u30fc\u30c9\u306e\u5236\u5fa1",description:"KeyboardAvoidingView",source:"@site/docs/react-native/learn/todo-app/screens/keyboard-avoiding-view.mdx",sourceDirName:"react-native/learn/todo-app/screens",slug:"/react-native/learn/todo-app/screens/keyboard-avoiding-view",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/keyboard-avoiding-view",tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"\u4eee\u60f3\u30ad\u30fc\u30dc\u30fc\u30c9\u306e\u5236\u5fa1"},sidebar:"learn",previous:{title:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/login"},next:{title:"\u78ba\u8a8d\u30c0\u30a4\u30a2\u30ed\u30b0",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/alert"}},s=[{value:"KeyboardAvoidingView",id:"keyboardavoidingview",children:[],level:2}],u={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"keyboardavoidingview"},"KeyboardAvoidingView"),(0,i.kt)("p",null,"\u4eee\u60f3\u30ad\u30fc\u30dc\u30fc\u30c9\u304c\u5165\u529b\u6b04\u306b\u8986\u3044\u304b\u3076\u3055\u3063\u3066\u64cd\u4f5c\u3057\u3065\u3089\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\n\u3053\u306e\u3088\u3046\u306a\u554f\u984c\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u306b\u3001React Native\u3067\u306f\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u3057\u3066",(0,i.kt)("inlineCode",{parentName:"p"},"KeyboardAvoidingView"),"\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u30ad\u30fc\u30dc\u30fc\u30c9\u306e\u9ad8\u3055\u306b\u57fa\u3065\u3044\u3066\u3001\u9ad8\u3055\u3084\u4f4d\u7f6e\u3001\u4e0b\u90e8\u306e\u30d1\u30c7\u30a3\u30f3\u30b0\u3092\u81ea\u52d5\u8abf\u6574\u3057\u3066\u304f\u308c\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u65e9\u901f\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u4fee\u6b63\u3057\u307e\u3057\u3087\u3046\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/src/screens/auth/Login.tsx"),"\u3092\u6b21\u306e\u901a\u308a\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="/src/screens/auth/Login.tsx"',title:'"/src/screens/auth/Login.tsx"'},"  import {useUserContext} from 'contexts/UserContext';\n  import {useFormik} from 'formik';\n  import React, {useCallback} from 'react';\n- import {StyleSheet, View} from 'react-native';\n+ import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';\n  import {Button, Input} from 'react-native-elements';\n  import * as Yup from 'yup';\n  \n  export const Login: React.FC = () => {\n    /* \uff5e\u7701\u7565\uff5e */\n    return (\n+     <KeyboardAvoidingView\n+       behavior={Platform.select({\n+         ios: 'padding',\n+         android: undefined,\n+       } as const)}\n+       style={styles.container}>\n        <View style={styles.form}>\n  \n    /* \uff5e\u7701\u7565\uff5e */\n  \n          <Button\n            disabled={formik.isSubmitting}\n            onPress={() => formik.handleSubmit()}\n            title=\"\u30ed\u30b0\u30a4\u30f3\u3059\u308b\"\n            buttonStyle={styles.button}\n          />\n        </View>\n+     </KeyboardAvoidingView>\n    );\n  };\n  \n  const styles = StyleSheet.create({\n+   container: {\n+     flex: 1,\n+   },\n    /* \uff5e\u7701\u7565\uff5e */\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"behavior"),"\u3067\u30ad\u30fc\u30dc\u30fc\u30c9\u306e\u52d5\u4f5c\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"Platform.select"),"\u3092\u7528\u3044\u308b\u3053\u3068\u3067\u3001iOS\u3068Android\u305d\u308c\u305e\u308c\u306e\u52d5\u4f5c\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\n\u3053\u3053\u3067\u306f\u3001iOS\u306e\u5834\u5408\u306b\u4e0b\u90e8\u30d1\u30c7\u30a3\u30f3\u30b0\u304c\u8abf\u6574\u3055\u308c\u308b\u3088\u3046\u6307\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u4fee\u6b63\u3067\u304d\u305f\u3089\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u4eee\u60f3\u30ad\u30fc\u30dc\u30fc\u30c9\u304c\u5165\u529b\u306e\u90aa\u9b54\u306b\u306a\u3089\u306a\u3044\u3088\u3046\u81ea\u52d5\u8abf\u6574\u3055\u308c\u3066\u3044\u308c\u3070\u6210\u529f\u3067\u3059\u3002"))}d.isMDXComponent=!0}}]);