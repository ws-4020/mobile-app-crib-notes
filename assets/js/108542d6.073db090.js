"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8190],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),i=n(72389),l=n(79443);var o=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(63616),c=n(86010),u="tabItem_1uMI";function p(e){var t,n,i,l=e.lazy,p=e.block,m=e.defaultValue,f=e.values,d=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.lx)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=b[0])?void 0:i.props.value;if(null!==h&&!y.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=o(),x=k.tabGroupChoices,w=k.setTabGroupChoices,O=(0,a.useState)(h),T=O[0],E=O[1],N=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=x[d];null!=j&&j!==T&&y.some((function(e){return e.value===j}))&&E(j)}var I=function(e){var t=e.currentTarget,n=N.indexOf(t),r=y[n].value;r!==T&&(C(t),E(r),null!=d&&w(d,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;n=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":p},v)},y.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return N.push(e)},onKeyDown:D,onFocus:I,onClick:I},i,{className:(0,c.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},73609:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=n(26396),o=n(58215),s=["components"],c={title:"FlatList"},u=void 0,p={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components/lists/flat-list",id:"react-native/learn/basic-concepts/react-native-basics/components/lists/flat-list",title:"FlatList",description:"\u5927\u91cf\u306e\u30c7\u30fc\u30bf\u3092\u753b\u9762\u306b\u30b9\u30af\u30ed\u30fc\u30eb\u8868\u793a\u3059\u308b\u5834\u5408\u3001FlatList\u306e\u4f7f\u7528\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components/lists/flat-list.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics/components/lists",slug:"/react-native/learn/basic-concepts/react-native-basics/components/lists/flat-list",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/lists/flat-list",tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"FlatList"},sidebar:"learn",previous:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/lists"},next:{title:"SectionList",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/lists/section-list"}},m=[],f={toc:m};function d(e){var t=e.components,c=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5927\u91cf\u306e\u30c7\u30fc\u30bf\u3092\u753b\u9762\u306b\u30b9\u30af\u30ed\u30fc\u30eb\u8868\u793a\u3059\u308b\u5834\u5408\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"FlatList"),"\u306e\u4f7f\u7528\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FlatList"),"\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"data"),"\u3068",(0,i.kt)("inlineCode",{parentName:"p"},"renderItem"),"\u306e2\u3064\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"props"),"\u3092\u5fc5\u9808\u3068\u3057\u307e\u3059\u3002\n\u5b50\u8981\u7d20\u3092\u63cf\u753b\u3059\u308b\u4ee3\u308f\u308a\u306b\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"renderItem"),"\u3092\u7528\u3044\u3066",(0,i.kt)("inlineCode",{parentName:"p"},"data")," \u306e\u5185\u5bb9\u3092\u63cf\u753b\u3057\u307e\u3059\u3002\n\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306b\u8868\u793a\u3055\u308c\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u307f\u3092\u63cf\u753b\u3057\u3001\u304b\u3064\u5909\u66f4\u3055\u308c\u305f\u884c\u306e\u307f\u3092\u63cf\u753b\u3059\u308b\u305f\u3081\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u512a\u308c\u3066\u3044\u307e\u3059\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"ScrollView"),"\u540c\u69d8\u3001\u6c34\u5e73\u65b9\u5411\u307e\u305f\u306f\u5782\u76f4\u65b9\u5411\u306b\u30b9\u30af\u30ed\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u5909\u66f4\u3055\u308c\u305f\u884c\u3092\u7279\u5b9a\u3059\u308b\u305f\u3081\u306b\u3001\u30c7\u30fc\u30bf\u306f\u4e00\u610f\u306eID\u5024\u3092\u3082\u3064\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"item.key"),"\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u306eID\u3068\u3057\u3066\u7528\u3044\u3089\u308c\u307e\u3059\u304c\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"keyExtractor"),"\u306b\u95a2\u6570\u3092\u6e21\u3059\u3053\u3068\u3067\u5225\u306eID\u5024\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)(l.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"image",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"FlatList",src:n(2396).Z}))),(0,i.kt)(o.Z,{value:"source",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import React from 'react';\nimport {FlatList, StyleSheet, Text} from 'react-native';\n\nconst items = [...Array(100).keys()].map((i) => ({key: i.toString(), text: `item ${i}`}));\n\nexport const App = () => {\n  return (\n    <FlatList\n      style={styles.container}\n      data={items}\n      renderItem={({item}) => <Text style={styles.row}>{item.text}</Text>}\n    />\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n  row: {\n    padding: 15,\n    marginBottom: 5,\n    backgroundColor: 'lightskyblue',\n  },\n});\n")))))}d.isMDXComponent=!0},2396:function(e,t,n){t.Z=n.p+"assets/images/flat-list-9789c7c46915e52668204b63c54eaa99.png"}}]);