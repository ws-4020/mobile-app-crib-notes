"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2780],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,v=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),c="tabItem_1uMI",l="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,a=e.block,s=e.defaultValue,u=e.values,p=e.groupId,m=e.className,f=r.Children.toArray(e.children),v=null!=u?u:f.map((function(e){return{value:e.props.value,label:e.props.label}})),b=null!=s?s:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value,d=o(),g=d.tabGroupChoices,y=d.setTabGroupChoices,h=(0,r.useState)(b),w=h[0],O=h[1],k=[];if(null!=p){var x=g[p];null!=x&&x!==w&&v.some((function(e){return e.value===x}))&&O(x)}var j=function(e){var t=e.currentTarget,n=k.indexOf(t),r=v[n].value;O(r),null!=p&&(y(p,r),setTimeout((function(){var e,n,r,a,o,i,c,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,c=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case"ArrowLeft":var a=k.indexOf(e.target)-1;n=k[a]||k[k.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},v.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":w===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:T,onFocus:j,onClick:j},null!=n?n:t)}))),n?(0,r.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},3171:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(5064),c=n(8215),l={title:"Image"},s=void 0,u={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components/image",id:"react-native/learn/basic-concepts/react-native-basics/components/image",isDocsHomePage:!1,title:"Image",description:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u753b\u50cf\u3001\u9759\u7684\u30ea\u30bd\u30fc\u30b9\u3001\u4e00\u6642\u7684\u306a\u30ed\u30fc\u30ab\u30eb\u753b\u50cf\u3001\u30ab\u30e1\u30e9\u30ed\u30fc\u30eb\u306a\u3069\u306e\u30ed\u30fc\u30ab\u30eb\u30c7\u30a3\u30b9\u30af\u304b\u3089\u306e\u753b\u50cf\u306a\u3069\u3001\u3055\u307e\u3056\u307e\u306a\u7a2e\u985e\u306e\u753b\u50cf\u3092\u8868\u793a\u3067\u304d\u308bReact\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components/image.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics/components",slug:"/react-native/learn/basic-concepts/react-native-basics/components/image",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/image",tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"Image"},sidebar:"learn",previous:{title:"TouchableOpacity",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity"},next:{title:"ScrollView",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/scroll-view"}},p=[],m={toc:p};function f(e){var t=e.components,l=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u753b\u50cf\u3001\u9759\u7684\u30ea\u30bd\u30fc\u30b9\u3001\u4e00\u6642\u7684\u306a\u30ed\u30fc\u30ab\u30eb\u753b\u50cf\u3001\u30ab\u30e1\u30e9\u30ed\u30fc\u30eb\u306a\u3069\u306e\u30ed\u30fc\u30ab\u30eb\u30c7\u30a3\u30b9\u30af\u304b\u3089\u306e\u753b\u50cf\u306a\u3069\u3001\u3055\u307e\u3056\u307e\u306a\u7a2e\u985e\u306e\u753b\u50cf\u3092\u8868\u793a\u3067\u304d\u308bReact\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002"),(0,o.kt)("p",null,"\u9759\u7684\u30ea\u30bd\u30fc\u30b9\u304b\u3089\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u753b\u50cf\u306f\u30d3\u30eb\u30c9\u6642\u306b\u30b9\u30ad\u30e3\u30f3\u3055\u308c\u3001\u753b\u50cf\u30b5\u30a4\u30ba\u304c\u30a2\u30d7\u30ea\u30d0\u30f3\u30c9\u30eb\u306b\u30e1\u30bf\u30c7\u30fc\u30bf\u3068\u3057\u3066\u542b\u307e\u308c\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u753b\u50cf\u306e\u5927\u304d\u3055\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u753b\u50cf\u3084\u30c7\u30fc\u30bf\u753b\u50cf\u306f\u30d3\u30eb\u30c9\u6642\u306b\u306f\u753b\u50cf\u306e\u30b5\u30a4\u30ba\u304c\u308f\u304b\u3089\u306a\u3044\u305f\u3081\u3001\u5e45\u3068\u9ad8\u3055\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u30670\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u753b\u50cf\u3084\u30c7\u30fc\u30bf\u753b\u50cf\u3092\u8868\u793a\u3059\u308b\u5834\u5408\u3001\u753b\u50cf\u306e\u30b5\u30a4\u30ba\u3092\u624b\u52d5\u3067\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u4e0b\u306e\u4f8b\u3067\u306f\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304b\u3089\u306e\u753b\u50cf\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)(i.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"image",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(6625).Z}))),(0,o.kt)(c.Z,{value:"source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import React from 'react';\nimport {StyleSheet, Image, View} from 'react-native';\n\nexport const App = () => {\n  return (\n    <View style={styles.container}>\n      <Image style={styles.image} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  image: {\n    width: 150,\n    height: 150,\n  },\n});\n")))))}f.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},6625:function(e,t,n){t.Z=n.p+"assets/images/image-c4ae98adb6d41c4681671baef4ddf717.png"}}]);