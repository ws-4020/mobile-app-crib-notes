"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8422],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=i(n),b=r,d=m["".concat(s,".").concat(b)]||m[b]||p[b]||o;return n?a.createElement(d,c(c({ref:t},u),{},{components:n})):a.createElement(d,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function c(e){let{children:t,hidden:n,className:c}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,c),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(87462),r=n(67294),o=n(86010),c=n(72389),l=n(67392),s=n(7094),i=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:c,defaultValue:m,values:b,groupId:d,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=b??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,l.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[O,T]=(0,r.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,i.o5)();if(null!=d){const e=k[d];null!=e&&e!==O&&y.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,n=x.indexOf(t),a=y[n].value;a!==O&&(E(t),T(a),null!=d&&w(d,String(a)))},N=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},v)},y.map((e=>{let{value:t,label:n,attributes:c}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>x.push(e),onKeyDown:N,onFocus:j,onClick:j},c,{className:(0,o.Z)("tabs__item",p,null==c?void 0:c.className,{"tabs__item--active":O===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function b(e){const t=(0,c.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},40767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),c=n(85162);const l={title:"Button"},s=void 0,i={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components/button",id:"react-native/learn/basic-concepts/react-native-basics/components/button",title:"Button",description:"\u5404\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u6a19\u6e96\u30b9\u30bf\u30a4\u30eb\u3092\u4f7f\u7528\u3057\u305f\u30dc\u30bf\u30f3\u3092\u8868\u793a\u3059\u308b\u5834\u5408\u3001\u3053\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components/button.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics/components",slug:"/react-native/learn/basic-concepts/react-native-basics/components/button",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/button",draft:!1,tags:[],version:"current",lastUpdatedAt:1625819232,formattedLastUpdatedAt:"2021\u5e747\u67089\u65e5",frontMatter:{title:"Button"},sidebar:"learn",previous:{title:"Text",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/text"},next:{title:"TouchableOpacity",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity"}},u={},p=[],m={toc:p};function b(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5404\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u6a19\u6e96\u30b9\u30bf\u30a4\u30eb\u3092\u4f7f\u7528\u3057\u305f\u30dc\u30bf\u30f3\u3092\u8868\u793a\u3059\u308b\u5834\u5408\u3001\u3053\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\n\u8272\u4ee5\u5916\u306e\u30b9\u30bf\u30a4\u30eb\u304c\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u51fa\u6765\u306a\u3044\u305f\u3081\u3001\u30c7\u30b6\u30a4\u30f3\u304c\u30a2\u30d7\u30ea\u306b\u9069\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u4ee3\u308f\u308a\u306b",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/handling-touches#touchables"},"Touchables"),"\u3084",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/pressable"},"Pressable"),"\u3092\u4f7f\u7528\u3057\u3066\u72ec\u81ea\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)(o.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"image",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Button",src:n(25246).Z,width:"1080",height:"2220"}))),(0,r.kt)(c.Z,{value:"source",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import React, {useState} from 'react';\nimport {Button, StyleSheet, View} from 'react-native';\n\nexport const App = () => {\n  const [count, setCount] = useState(0);\n\n  return (\n    <View style={styles.container}>\n      <Button\n        title={`count is ${count}`}\n        onPress={() => {\n          setCount(count + 1);\n        }}\n      />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n});\n")))))}b.isMDXComponent=!0},25246:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/button-4c848f5fac0c7c1f3a31cc893a0888e4.png"}}]);