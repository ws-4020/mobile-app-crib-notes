(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[577],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),a=n(944),o=n(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,s=e.values,d=e.groupId,m=e.className,f=(0,a.Z)(),v=f.tabGroupChoices,b=f.setTabGroupChoices,k=(0,r.useState)(p),g=k[0],y=k[1],h=r.Children.toArray(e.children),N=[];if(null!=d){var O=v[d];null!=O&&O!==g&&s.some((function(e){return e.value===O}))&&y(O)}var x=function(e){var t=e.currentTarget,n=N.indexOf(t),r=s[n].value;y(r),null!=d&&(b(d,r),setTimeout((function(){var e,n,r,a,o,i,u,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,u=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&a<=u&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},E=function(e){var t,n;switch(e.keyCode){case c:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case u:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},s.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:E,onFocus:x,onClick:x},n)}))),t?(0,r.cloneElement)(h.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7161:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=n(1395),l=n(8215),u={title:"JavaScript\u304c\u30ed\u30fc\u30c9\u3067\u304d\u306a\u3044"},c={unversionedId:"react-native/common-pitfalls/unable-to-load-script",id:"react-native/common-pitfalls/unable-to-load-script",isDocsHomePage:!1,title:"JavaScript\u304c\u30ed\u30fc\u30c9\u3067\u304d\u306a\u3044",description:"\u30a8\u30e9\u30fc\u5185\u5bb9",source:"@site/docs/react-native/common-pitfalls/unable-to-load-script.mdx",sourceDirName:"react-native/common-pitfalls",slug:"/react-native/common-pitfalls/unable-to-load-script",permalink:"/mobile-app-crib-notes/react-native/common-pitfalls/unable-to-load-script",version:"current",lastUpdatedAt:1621905745,formattedLastUpdatedAt:"2021/5/25",frontMatter:{title:"JavaScript\u304c\u30ed\u30fc\u30c9\u3067\u304d\u306a\u3044"},sidebar:"pitfalls",previous:{title:"\u30cf\u30de\u308a\u304c\u3061\u306a\u843d\u3068\u3057\u7a74",permalink:"/mobile-app-crib-notes/react-native/common-pitfalls"},next:{title:"debug.keystore\u304c\u5b58\u5728\u3057\u306a\u3044",permalink:"/mobile-app-crib-notes/react-native/common-pitfalls/debug-keystore-not-found"}},p=[{value:"\u30a8\u30e9\u30fc\u5185\u5bb9",id:"\u30a8\u30e9\u30fc\u5185\u5bb9",children:[]},{value:"\u539f\u56e0\u306e\u78ba\u8a8d",id:"\u539f\u56e0\u306e\u78ba\u8a8d",children:[{value:"\u30d6\u30e9\u30a6\u30b6\u3067\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u304b",id:"\u30d6\u30e9\u30a6\u30b6\u3067\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u304b",children:[]}]},{value:"\u5bfe\u51e6\u65b9\u6cd5",id:"\u5bfe\u51e6\u65b9\u6cd5",children:[{value:"\u30d7\u30ed\u30bb\u30b9\u306e\u505c\u6b62",id:"\u30d7\u30ed\u30bb\u30b9\u306e\u505c\u6b62",children:[]},{value:"\u30dd\u30fc\u30c8\u306e\u5909\u66f4",id:"\u30dd\u30fc\u30c8\u306e\u5909\u66f4",children:[]}]}],s={toc:p};function d(e){var t=e.components,u=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u30a8\u30e9\u30fc\u5185\u5bb9"},"\u30a8\u30e9\u30fc\u5185\u5bb9"),(0,o.kt)("p",null,"\u30a2\u30d7\u30ea\u304b\u3089Metro Bundler\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u3044\u3068\u3001\u6b21\u306e\u753b\u50cf\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Failed to load Script",src:n(8640).Z})),(0,o.kt)("h2",{id:"\u539f\u56e0\u306e\u78ba\u8a8d"},"\u539f\u56e0\u306e\u78ba\u8a8d"),(0,o.kt)("h3",{id:"\u30d6\u30e9\u30a6\u30b6\u3067\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u304b"},"\u30d6\u30e9\u30a6\u30b6\u3067\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u304b"),(0,o.kt)("p",null,"Metro Bundler\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f",(0,o.kt)("inlineCode",{parentName:"p"},"8081"),"\u30dd\u30fc\u30c8\u3092\u5229\u7528\u3057\u3066\u8d77\u52d5\u3057\u307e\u3059\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8081"),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"React Native packager is running"),"\u306e\u3088\u3046\u306b\u8868\u793a\u3055\u308c\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": \u30dd\u30fc\u30c8\u304c\u65e2\u306b\u5229\u7528\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3067\u3082\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u306f\u6b63\u5e38\u306b\u8d77\u52d5\u3057\u3001\u4e0a\u8a18\u306e\u30a8\u30e9\u30fc\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,o.kt)("p",null,"Metro Bundler\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"8081"),"\u30dd\u30fc\u30c8\u3092\u5229\u7528\u3057\u3066\u3044\u308b",(0,o.kt)("a",{parentName:"p",href:"#%E3%83%97%E3%83%AD%E3%82%BB%E3%82%B9%E3%81%AE%E5%81%9C%E6%AD%A2"},"\u30d7\u30ed\u30bb\u30b9\u306e\u505c\u6b62"),"\u304b\u3001Metro Bundler\u304c\u5229\u7528\u3059\u308b",(0,o.kt)("a",{parentName:"p",href:"#%E3%83%9D%E3%83%BC%E3%83%88%E3%81%AE%E5%A4%89%E6%9B%B4"},"\u30dd\u30fc\u30c8\u306e\u5909\u66f4"),"\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,o.kt)("h2",{id:"\u5bfe\u51e6\u65b9\u6cd5"},"\u5bfe\u51e6\u65b9\u6cd5"),(0,o.kt)("h3",{id:"\u30d7\u30ed\u30bb\u30b9\u306e\u505c\u6b62"},"\u30d7\u30ed\u30bb\u30b9\u306e\u505c\u6b62"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"8081"),"\u30dd\u30fc\u30c8\u3092\u5229\u7528\u3057\u3066\u3044\u308b\u30d7\u30ed\u30bb\u30b9\u306f\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"macOS",value:"mac"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo lsof -i:\u30dd\u30fc\u30c8\u756a\u53f7\n"))),(0,o.kt)(l.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'netstat -nao | find "8081"\n')))),(0,o.kt)("p",null,"\u78ba\u8a8d\u3057\u305f\u7d50\u679c\u3001\u505c\u6b62\u3057\u3066\u3082\u554f\u984c\u306a\u3044\u30d7\u30ed\u30bb\u30b9\u3067\u3042\u308c\u3070\u3001\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30e2\u30cb\u30bf\u3084\u30bf\u30b9\u30af\u30de\u30cd\u30fc\u30b8\u30e3\u306a\u3069\u304b\u3089\u30d7\u30ed\u30bb\u30b9\u3092\u505c\u6b62\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("h3",{id:"\u30dd\u30fc\u30c8\u306e\u5909\u66f4"},"\u30dd\u30fc\u30c8\u306e\u5909\u66f4"),(0,o.kt)("p",null,"Metro Bundler\u306e\u30dd\u30fc\u30c8\u306f\u3001\u6b21\u306e\u65b9\u6cd5\u3067\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)(i.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,o.kt)("p",null,"Android\u3067\u306f\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"npm run android"),"\u306b\u5f15\u6570",(0,o.kt)("inlineCode",{parentName:"p"},"--port"),"\u3092\u6e21\u3059\u3053\u3068\u3067\u5229\u7528\u3059\u308b\u30dd\u30fc\u30c8\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run android -- --port=xxx\n")),(0,o.kt)("p",null,"\u3082\u3057\u304f\u306f\u3001\u74b0\u5883\u5909\u6570",(0,o.kt)("inlineCode",{parentName:"p"},"RCT_METRO_PORT"),"\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u3082\u3001\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"RCT_METRO_PORT=xxx npm run android\n"))),(0,o.kt)(l.Z,{value:"ios",mdxType:"TabItem"},"iOS\u3067\u306f\u3001\u30dd\u30fc\u30c8\u3092\u5909\u66f4\u3059\u308b\u306b\u306f\u6b21\u306e\u901a\u308a\u306b\u5bfe\u5fdc\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pods\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306ePreprocessor Macros\u306b",(0,o.kt)("inlineCode",{parentName:"li"},"RCT_METRO_PORT=xxx"),"\u3092\u8a2d\u5b9a"),(0,o.kt)("li",{parentName:"ul"},"Build Configurations\u306eEnvironment Variables\u306b",(0,o.kt)("inlineCode",{parentName:"li"},"RCT_METRO_PORT=xxx"),"\u3092\u8a2d\u5b9a"),(0,o.kt)("li",{parentName:"ul"},"\u4e0a\u8a18\u3092\u8a2d\u5b9a\u5f8c\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"npm run ios"),"\u306b\u5f15\u6570",(0,o.kt)("inlineCode",{parentName:"li"},"--port"),"\u3092\u6307\u5b9a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run ios -- --port=xxx\n")))))}d.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},8640:function(e,t,n){"use strict";t.Z=n.p+"assets/images/failed-to-load-script-0bdf27bf47ad00dbe62ffd4277f36f3e.png"}}]);