(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{167:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,f=b["".concat(i,".").concat(m)]||b[m]||p[m]||c;return n?a.a.createElement(f,o(o({ref:t},l),{},{components:n})):a.a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},168:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},169:function(e,t,n){"use strict";var r=n(0),a=n(170);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},170:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},171:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(169),i=n(168),o=n(56),s=n.n(o);var l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,b=e.values,p=e.groupId,m=e.className,f=Object(c.a)(),v=f.tabGroupChoices,d=f.setTabGroupChoices,y=Object(r.useState)(o),O=y[0],g=y[1],j=r.Children.toArray(e.children),w=[];if(null!=p){var h=v[p];null!=h&&h!==O&&b.some((function(e){return e.value===h}))&&g(h)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),r=b[n].value;g(r),null!=p&&(d(p,r),setTimeout((function(){var e,n,r,a,c,i,o,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,c=e.right,i=window,o=i.innerHeight,l=i.innerWidth,n>=0&&c<=l&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((function(){return t.classList.remove(s.a.tabItemActive)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case l:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:x,onClick:x},n)}))),t?Object(r.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},172:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},222:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/view-61bb795c454185732ef4a932c9285ab7.png"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(167)),i=n(171),o=n(172),s={title:"View"},l={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components/view",id:"react-native/learn/basic-concepts/react-native-basics/components/view",isDocsHomePage:!1,title:"View",description:"React Native\u306b\u304a\u3051\u308b\u6700\u3082\u57fa\u672c\u7684\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components/view.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics/components",slug:"/react-native/learn/basic-concepts/react-native-basics/components/view",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/view",version:"current",lastUpdatedAt:1613389266,formattedLastUpdatedAt:"2021/2/15",frontMatter:{title:"View"},sidebar:"learn",previous:{title:"Components",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components"},next:{title:"Text",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/text"}},u=[],b={toc:u};function p(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,s,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"React Native\u306b\u304a\u3051\u308b\u6700\u3082\u57fa\u672c\u7684\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002\n\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u4f55\u3082\u8868\u793a\u305b\u305a\u3001\u305d\u306e\u4ed6\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30b3\u30f3\u30c6\u30ca\u3068\u3057\u3066\u30b9\u30bf\u30a4\u30eb\u3084\u30ec\u30a4\u30a2\u30a6\u30c8\u7528\u9014\u3068\u3057\u3066\u4e3b\u306b\u7528\u3044\u3089\u308c\u307e\u3059\u3002\n\u30bf\u30fc\u30b2\u30c3\u30c8\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u4e0a\u306e\u6b21\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u90e8\u54c1\u306b\u5bfe\u5fdc\u3057\u307e\u3059\u3002"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"iOS - ",Object(c.b)("inlineCode",{parentName:"li"},"UIView")),Object(c.b)("li",{parentName:"ul"},"Android - ",Object(c.b)("inlineCode",{parentName:"li"},"android.view")),Object(c.b)("li",{parentName:"ul"},"Web - ",Object(c.b)("inlineCode",{parentName:"li"},"<div>"))),Object(c.b)(i.a,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"image",mdxType:"TabItem"},Object(c.b)("p",null,Object(c.b)("img",{alt:"View",src:n(222).default}))),Object(c.b)(o.a,{value:"source",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import React from 'react';\nimport {StyleSheet, View} from 'react-native';\n\nexport const App = () => {\n  return (\n    <View style={styles.container}>\n      <View style={styles.box} />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  box: {\n    width: 150,\n    height: 150,\n    backgroundColor: 'blue',\n    borderWidth: 1,\n    borderColor: 'black',\n  },\n});\n")))))}p.isMDXComponent=!0}}]);