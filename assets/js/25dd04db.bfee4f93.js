"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),b=a,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),a=n(67294),l=n(86010),o=n(12466),s=n(16550),i=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,c]=m({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),y=(()=>{const e=i??p;return b({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var y=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==s&&(p(t),i(r))},b=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:b,onClick:d},o,{className:(0,l.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(h,(0,r.Z)({},e,t)))}function w(e){const t=(0,y.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},71622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),l=n(74866),o=n(85162);const s={title:"Style"},i=void 0,c={unversionedId:"react-native/learn/basic-concepts/react-native-basics/design/style",id:"react-native/learn/basic-concepts/react-native-basics/design/style",title:"Style",description:"style prop\u306b\u306f\u3001JavaScript\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002\u914d\u5217\u3092\u6e21\u3059\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/design/style.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics/design",slug:"/react-native/learn/basic-concepts/react-native-basics/design/style",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/design/style",draft:!1,tags:[],version:"current",lastUpdatedAt:1680673969,formattedLastUpdatedAt:"2023\u5e744\u67085\u65e5",frontMatter:{title:"Style"},sidebar:"learn",previous:{title:"Design",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/design"},next:{title:"\u9ad8\u3055\u3068\u5e45",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/design/height-and-width"}},u={},p=[],d={toc:p},b="wrapper";function m(e){let{components:t,...s}=e;return(0,a.kt)(b,(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"style")," prop\u306b\u306f\u3001JavaScript\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002\u914d\u5217\u3092\u6e21\u3059\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\n\u914d\u5217\u306e\u5834\u5408\u306f\u6700\u5f8c\u306e\u30b9\u30bf\u30a4\u30eb\u304c\u512a\u5148\u3055\u308c\u308b\u305f\u3081\u3001\u3053\u308c\u3092\u7528\u3044\u3066\u30b9\u30bf\u30a4\u30eb\u3092\u4e0a\u66f8\u304d\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"style")," prop\u306b\u76f4\u63a5JavaScript\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3082\u51fa\u6765\u307e\u3059\u304c\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"StyleSheet.create"),"\u3092\u7528\u3044\u3066\u4e00\u304b\u6240\u3067\u30b9\u30bf\u30a4\u30eb\u5b9a\u7fa9\u3059\u308b\u65b9\u304c\u8907\u96d1\u3055\u306b\u5bfe\u5fdc\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)(l.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"image",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Style",src:n(96823).Z,width:"1080",height:"2220"}))),(0,a.kt)(o.Z,{value:"source",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="src/App.tsx"',jsx:!0,title:'"src/App.tsx"'},"import React from 'react';\nimport {StyleSheet, Text, View} from 'react-native';\nimport {Button} from 'react-native-elements';\n\nexport const App = () => {\n  return (\n    <View style={styles.container}>\n      <Text style={{color: 'black'}}>Hello</Text>\n      <Text style={styles.normal}>Hello</Text>\n      <Text style={[styles.normal, styles.fancy]}>World!!</Text>\n      {[...Array(3).keys()].map((index) => {\n        const _style = StyleSheet.flatten([\n          styles.button,\n          index % 2 === 0 && styles.buttonEven,\n        ]);\n        return (\n          <Button title={`button ${index}`} buttonStyle={_style} key={index} />\n        );\n      })}\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    margin: 50,\n  },\n  normal: {\n    fontSize: 24,\n    color: 'blue',\n  },\n  fancy: {\n    color: 'orangered',\n    fontWeight: 'bold',\n  },\n  button: {\n    marginBottom: 10,\n    backgroundColor: 'lightskyblue',\n    borderRadius: 0,\n  },\n  buttonEven: {\n    backgroundColor: 'orange',\n    borderRadius: 20,\n  },\n});\n")))))}m.isMDXComponent=!0},96823:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/style-5afa83334b25ea14d37d2fa415381ff1.png"}}]);