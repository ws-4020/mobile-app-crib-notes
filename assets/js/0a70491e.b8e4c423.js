"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[577],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(87462),a=n(67294),l=n(72389),o=n(17984),i=n(86010),u="tabItem_LplD";function p(e){var t,n,l,p=e.lazy,c=e.block,s=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===s?s:null!=(t=null!=s?s:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),g=y.tabGroupChoices,N=y.setTabGroupChoices,x=(0,a.useState)(h),E=x[0],T=x[1],O=[],w=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=g[m];null!=C&&C!==E&&b.some((function(e){return e.value===C}))&&T(C)}var P=function(e){var t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==E&&(w(t),T(r),null!=m&&N(m,r))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return O.push(e)},onKeyDown:_,onFocus:P,onClick:P},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),p?(0,a.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function c(e){var t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},87614:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(9877),i=n(58215),u=["components"],p={title:"JavaScript\u304c\u30ed\u30fc\u30c9\u3067\u304d\u306a\u3044"},c=void 0,s={unversionedId:"react-native/common-pitfalls/unable-to-load-script",id:"react-native/common-pitfalls/unable-to-load-script",title:"JavaScript\u304c\u30ed\u30fc\u30c9\u3067\u304d\u306a\u3044",description:"\u30a8\u30e9\u30fc\u5185\u5bb9",source:"@site/docs/react-native/common-pitfalls/unable-to-load-script.mdx",sourceDirName:"react-native/common-pitfalls",slug:"/react-native/common-pitfalls/unable-to-load-script",permalink:"/mobile-app-crib-notes/react-native/common-pitfalls/unable-to-load-script",tags:[],version:"current",lastUpdatedAt:1651134238,formattedLastUpdatedAt:"2022/4/28",frontMatter:{title:"JavaScript\u304c\u30ed\u30fc\u30c9\u3067\u304d\u306a\u3044"},sidebar:"pitfalls",previous:{title:"\u76ee\u6b21",permalink:"/mobile-app-crib-notes/react-native/common-pitfalls/overview"},next:{title:"debug.keystore\u304c\u5b58\u5728\u3057\u306a\u3044",permalink:"/mobile-app-crib-notes/react-native/common-pitfalls/debug-keystore-not-found"}},d={},m=[{value:"\u30a8\u30e9\u30fc\u5185\u5bb9",id:"\u30a8\u30e9\u30fc\u5185\u5bb9",level:2},{value:"\u539f\u56e0\u306e\u78ba\u8a8d",id:"\u539f\u56e0\u306e\u78ba\u8a8d",level:2},{value:"\u30d6\u30e9\u30a6\u30b6\u3067\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u304b",id:"\u30d6\u30e9\u30a6\u30b6\u3067\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u304b",level:3},{value:"\u5bfe\u51e6\u65b9\u6cd5",id:"\u5bfe\u51e6\u65b9\u6cd5",level:2},{value:"\u30d7\u30ed\u30bb\u30b9\u306e\u505c\u6b62",id:"\u30d7\u30ed\u30bb\u30b9\u306e\u505c\u6b62",level:3},{value:"\u30dd\u30fc\u30c8\u306e\u5909\u66f4",id:"\u30dd\u30fc\u30c8\u306e\u5909\u66f4",level:3}],f={toc:m};function v(e){var t=e.components,p=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u30a8\u30e9\u30fc\u5185\u5bb9"},"\u30a8\u30e9\u30fc\u5185\u5bb9"),(0,l.kt)("p",null,"\u30a2\u30d7\u30ea\u304b\u3089Metro Bundler\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u3044\u3068\u3001\u6b21\u306e\u753b\u50cf\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Failed to load Script",src:n(71341).Z,width:"338",height:"712"})),(0,l.kt)("h2",{id:"\u539f\u56e0\u306e\u78ba\u8a8d"},"\u539f\u56e0\u306e\u78ba\u8a8d"),(0,l.kt)("h3",{id:"\u30d6\u30e9\u30a6\u30b6\u3067\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u304b"},"\u30d6\u30e9\u30a6\u30b6\u3067\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u304b"),(0,l.kt)("p",null,"Metro Bundler\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f",(0,l.kt)("inlineCode",{parentName:"p"},"8081"),"\u30dd\u30fc\u30c8\u3092\u5229\u7528\u3057\u3066\u8d77\u52d5\u3057\u307e\u3059\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:8081"),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"React Native packager is running"),"\u306e\u3088\u3046\u306b\u8868\u793a\u3055\u308c\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note"),": \u30dd\u30fc\u30c8\u304c\u65e2\u306b\u5229\u7528\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3067\u3082\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u306f\u6b63\u5e38\u306b\u8d77\u52d5\u3057\u3001\u4e0a\u8a18\u306e\u30a8\u30e9\u30fc\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,l.kt)("p",null,"Metro Bundler\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"8081"),"\u30dd\u30fc\u30c8\u3092\u5229\u7528\u3057\u3066\u3044\u308b",(0,l.kt)("a",{parentName:"p",href:"#%E3%83%97%E3%83%AD%E3%82%BB%E3%82%B9%E3%81%AE%E5%81%9C%E6%AD%A2"},"\u30d7\u30ed\u30bb\u30b9\u306e\u505c\u6b62"),"\u304b\u3001Metro Bundler\u304c\u5229\u7528\u3059\u308b",(0,l.kt)("a",{parentName:"p",href:"#%E3%83%9D%E3%83%BC%E3%83%88%E3%81%AE%E5%A4%89%E6%9B%B4"},"\u30dd\u30fc\u30c8\u306e\u5909\u66f4"),"\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,l.kt)("h2",{id:"\u5bfe\u51e6\u65b9\u6cd5"},"\u5bfe\u51e6\u65b9\u6cd5"),(0,l.kt)("h3",{id:"\u30d7\u30ed\u30bb\u30b9\u306e\u505c\u6b62"},"\u30d7\u30ed\u30bb\u30b9\u306e\u505c\u6b62"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"8081"),"\u30dd\u30fc\u30c8\u3092\u5229\u7528\u3057\u3066\u3044\u308b\u30d7\u30ed\u30bb\u30b9\u306f\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)(o.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"macOS",value:"mac"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo lsof -i:\u30dd\u30fc\u30c8\u756a\u53f7\n"))),(0,l.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'netstat -nao | find "8081"\n')))),(0,l.kt)("p",null,"\u78ba\u8a8d\u3057\u305f\u7d50\u679c\u3001\u505c\u6b62\u3057\u3066\u3082\u554f\u984c\u306a\u3044\u30d7\u30ed\u30bb\u30b9\u3067\u3042\u308c\u3070\u3001\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30e2\u30cb\u30bf\u3084\u30bf\u30b9\u30af\u30de\u30cd\u30fc\u30b8\u30e3\u306a\u3069\u304b\u3089\u30d7\u30ed\u30bb\u30b9\u3092\u505c\u6b62\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("h3",{id:"\u30dd\u30fc\u30c8\u306e\u5909\u66f4"},"\u30dd\u30fc\u30c8\u306e\u5909\u66f4"),(0,l.kt)("p",null,"Metro Bundler\u306e\u30dd\u30fc\u30c8\u306f\u3001\u6b21\u306e\u65b9\u6cd5\u3067\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)(o.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"android",mdxType:"TabItem"},(0,l.kt)("p",null,"Android\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u304b\u3089\u30db\u30b9\u30c8PC\u306b\u30dd\u30fc\u30c8\u8ee2\u9001\u3059\u308b\u8a2d\u5b9a\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"adb reverse tcp:xxx tcp:xxx\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"npm run android"),"\u306b\u5f15\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"--port"),"\u3092\u6e21\u3059\u3053\u3068\u3067\u5229\u7528\u3059\u308b\u30dd\u30fc\u30c8\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run android -- --port=xxx\n")),(0,l.kt)("p",null,"\u3082\u3057\u304f\u306f\u3001\u74b0\u5883\u5909\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"RCT_METRO_PORT"),"\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u3082\u3001\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"RCT_METRO_PORT=xxx npm run android\n"))),(0,l.kt)(i.Z,{value:"ios",mdxType:"TabItem"},"iOS\u3067\u306f\u3001\u30dd\u30fc\u30c8\u3092\u5909\u66f4\u3059\u308b\u306b\u306f\u6b21\u306e\u901a\u308a\u306b\u5bfe\u5fdc\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pods\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306ePreprocessor Macros\u306b",(0,l.kt)("inlineCode",{parentName:"li"},"RCT_METRO_PORT=xxx"),"\u3092\u8a2d\u5b9a"),(0,l.kt)("li",{parentName:"ul"},"Build Configurations\u306eEnvironment Variables\u306b",(0,l.kt)("inlineCode",{parentName:"li"},"RCT_METRO_PORT=xxx"),"\u3092\u8a2d\u5b9a"),(0,l.kt)("li",{parentName:"ul"},"\u4e0a\u8a18\u3092\u8a2d\u5b9a\u5f8c\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"npm run ios"),"\u306b\u5f15\u6570",(0,l.kt)("inlineCode",{parentName:"li"},"--port"),"\u3092\u6307\u5b9a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run ios -- --port=xxx\n")))))}v.isMDXComponent=!0},71341:function(e,t,n){t.Z=n.p+"assets/images/failed-to-load-script-0bdf27bf47ad00dbe62ffd4277f36f3e.png"}}]);