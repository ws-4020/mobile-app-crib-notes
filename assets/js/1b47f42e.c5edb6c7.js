"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[3902],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,b=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a=n(86010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(87462),a=n(67294),i=n(86010),o=n(72389),l=n(67392),c=n(7094),u=n(12466),s="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,o=e.lazy,m=e.block,f=e.defaultValue,b=e.values,v=e.groupId,d=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===f?f:null!=(t=null!=f?f:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==w&&!h.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,c.U)(),O=k.tabGroupChoices,x=k.setTabGroupChoices,T=(0,a.useState)(w),N=T[0],E=T[1],j=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var Z=O[v];null!=Z&&Z!==N&&h.some((function(e){return e.value===Z}))&&E(Z)}var P=function(e){var t=e.currentTarget,n=j.indexOf(t),r=h[n].value;r!==N&&(C(t),E(r),null!=v&&x(v,String(r)))},V=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=j.indexOf(e.currentTarget)+1;n=null!=(r=j[a])?r:j[0];break;case"ArrowLeft":var i,o=j.indexOf(e.currentTarget)-1;n=null!=(i=j[o])?i:j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},d)},h.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return j.push(e)},onKeyDown:V,onFocus:P,onClick:P},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(y.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function f(e){var t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},319:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return f}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(65488),l=n(85162),c=["components"],u={title:"View"},s=void 0,p={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components/view",id:"react-native/learn/basic-concepts/react-native-basics/components/view",title:"View",description:"React Native\u306b\u304a\u3051\u308b\u6700\u3082\u57fa\u672c\u7684\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components/view.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics/components",slug:"/react-native/learn/basic-concepts/react-native-basics/components/view",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/view",draft:!1,tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021/7/9",frontMatter:{title:"View"},sidebar:"learn",previous:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components"},next:{title:"Text",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/text"}},m={},f=[],b={toc:f};function v(e){var t=e.components,u=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},b,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"React Native\u306b\u304a\u3051\u308b\u6700\u3082\u57fa\u672c\u7684\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002\n\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u4f55\u3082\u8868\u793a\u305b\u305a\u3001\u305d\u306e\u4ed6\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30b3\u30f3\u30c6\u30ca\u3068\u3057\u3066\u30b9\u30bf\u30a4\u30eb\u3084\u30ec\u30a4\u30a2\u30a6\u30c8\u7528\u9014\u3068\u3057\u3066\u4e3b\u306b\u7528\u3044\u3089\u308c\u307e\u3059\u3002\n\u30bf\u30fc\u30b2\u30c3\u30c8\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u4e0a\u306e\u6b21\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u90e8\u54c1\u306b\u5bfe\u5fdc\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"iOS - ",(0,i.kt)("inlineCode",{parentName:"li"},"UIView")),(0,i.kt)("li",{parentName:"ul"},"Android - ",(0,i.kt)("inlineCode",{parentName:"li"},"android.view")),(0,i.kt)("li",{parentName:"ul"},"Web - ",(0,i.kt)("inlineCode",{parentName:"li"},"<div>"))),(0,i.kt)(o.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"image",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"View",src:n(61439).Z,width:"1080",height:"2220"}))),(0,i.kt)(l.Z,{value:"source",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import React from 'react';\nimport {StyleSheet, View} from 'react-native';\n\nexport const App = () => {\n  return (\n    <View style={styles.container}>\n      <View style={styles.box} />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  box: {\n    width: 150,\n    height: 150,\n    backgroundColor: 'blue',\n    borderWidth: 1,\n    borderColor: 'black',\n  },\n});\n")))))}v.isMDXComponent=!0},61439:function(e,t,n){t.Z=n.p+"assets/images/view-61bb795c454185732ef4a932c9285ab7.png"}}]);