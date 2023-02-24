"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(87462),a=n(67294),l=n(86010),i=n(12466),o=n(16550),s=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,c]=b({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),v=(()=>{const e=s??p;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var v=n(72389);const y="tabList__CuJ",g="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==o&&(p(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",g,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",y)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function x(e){const t=(0,v.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},73609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),l=n(74866),i=n(85162);const o={title:"FlatList"},s=void 0,c={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components/lists/flat-list",id:"react-native/learn/basic-concepts/react-native-basics/components/lists/flat-list",title:"FlatList",description:"\u5927\u91cf\u306e\u30c7\u30fc\u30bf\u3092\u753b\u9762\u306b\u30b9\u30af\u30ed\u30fc\u30eb\u8868\u793a\u3059\u308b\u5834\u5408\u3001FlatList\u306e\u4f7f\u7528\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components/lists/flat-list.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics/components/lists",slug:"/react-native/learn/basic-concepts/react-native-basics/components/lists/flat-list",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/lists/flat-list",draft:!1,tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021\u5e747\u67089\u65e5",frontMatter:{title:"FlatList"},sidebar:"learn",previous:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/lists"},next:{title:"SectionList",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/lists/section-list"}},u={},p=[],m={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5927\u91cf\u306e\u30c7\u30fc\u30bf\u3092\u753b\u9762\u306b\u30b9\u30af\u30ed\u30fc\u30eb\u8868\u793a\u3059\u308b\u5834\u5408\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList"),"\u306e\u4f7f\u7528\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FlatList"),"\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"data"),"\u3068",(0,a.kt)("inlineCode",{parentName:"p"},"renderItem"),"\u306e2\u3064\u306e",(0,a.kt)("inlineCode",{parentName:"p"},"props"),"\u3092\u5fc5\u9808\u3068\u3057\u307e\u3059\u3002\n\u5b50\u8981\u7d20\u3092\u63cf\u753b\u3059\u308b\u4ee3\u308f\u308a\u306b\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"renderItem"),"\u3092\u7528\u3044\u3066",(0,a.kt)("inlineCode",{parentName:"p"},"data")," \u306e\u5185\u5bb9\u3092\u63cf\u753b\u3057\u307e\u3059\u3002\n\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306b\u8868\u793a\u3055\u308c\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u307f\u3092\u63cf\u753b\u3057\u3001\u304b\u3064\u5909\u66f4\u3055\u308c\u305f\u884c\u306e\u307f\u3092\u63cf\u753b\u3059\u308b\u305f\u3081\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u512a\u308c\u3066\u3044\u307e\u3059\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView"),"\u540c\u69d8\u3001\u6c34\u5e73\u65b9\u5411\u307e\u305f\u306f\u5782\u76f4\u65b9\u5411\u306b\u30b9\u30af\u30ed\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u5909\u66f4\u3055\u308c\u305f\u884c\u3092\u7279\u5b9a\u3059\u308b\u305f\u3081\u306b\u3001\u30c7\u30fc\u30bf\u306f\u4e00\u610f\u306eID\u5024\u3092\u3082\u3064\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"item.key"),"\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u306eID\u3068\u3057\u3066\u7528\u3044\u3089\u308c\u307e\u3059\u304c\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"keyExtractor"),"\u306b\u95a2\u6570\u3092\u6e21\u3059\u3053\u3068\u3067\u5225\u306eID\u5024\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)(l.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"image",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"FlatList",src:n(60498).Z,width:"1080",height:"2220"}))),(0,a.kt)(i.Z,{value:"source",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import React from 'react';\nimport {FlatList, StyleSheet, Text} from 'react-native';\n\nconst items = [...Array(100).keys()].map((i) => ({key: i.toString(), text: `item ${i}`}));\n\nexport const App = () => {\n  return (\n    <FlatList\n      style={styles.container}\n      data={items}\n      renderItem={({item}) => <Text style={styles.row}>{item.text}</Text>}\n    />\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n  row: {\n    padding: 15,\n    marginBottom: 5,\n    backgroundColor: 'lightskyblue',\n  },\n});\n")))))}d.isMDXComponent=!0},60498:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/flat-list-9789c7c46915e52668204b63c54eaa99.png"}}]);