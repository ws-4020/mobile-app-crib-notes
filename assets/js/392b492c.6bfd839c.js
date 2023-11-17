"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1472],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,b=m["".concat(o,".").concat(u)]||m[u]||s[u]||i;return n?a.createElement(b,l(l({ref:t},d),{},{components:n})):a.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"React Native\u306e\u57fa\u672c",sidebar_label:"\u6982\u8981",pagination_label:"React Native\u306e\u57fa\u672c"},l=void 0,p={unversionedId:"react-native/learn/basic-concepts/react-native-basics",id:"react-native/learn/basic-concepts/react-native-basics",title:"React Native\u306e\u57fa\u672c",description:"React Native\u3068\u306f\u3067\u8aac\u660e\u3057\u305f\u901a\u308a\u3001React Native\u306f\u3001React\u30d9\u30fc\u30b9\u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3067\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics.md",sourceDirName:"react-native/learn/basic-concepts",slug:"/react-native/learn/basic-concepts/react-native-basics",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics",draft:!1,tags:[],version:"current",lastUpdatedAt:1700213854,formattedLastUpdatedAt:"2023\u5e7411\u670817\u65e5",frontMatter:{title:"React Native\u306e\u57fa\u672c",sidebar_label:"\u6982\u8981",pagination_label:"React Native\u306e\u57fa\u672c"},sidebar:"learn",previous:{title:"Expo\u3068\u306f",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/what-is-expo"},next:{title:"Components",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components"}},o={},c=[],d={toc:c},m="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/basic-concepts/what-is-react-native"},"React Native\u3068\u306f"),"\u3067\u8aac\u660e\u3057\u305f\u901a\u308a\u3001React Native\u306f\u3001React\u30d9\u30fc\u30b9\u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3067\u3059\u3002\nJavaScript\u3092\u7528\u3044\u3066\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306eAPI\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001React\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u7528\u3044\u3066UI\u306e\u5916\u89b3\u3068\u52d5\u4f5c\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u753b\u9762\u306e\u63cf\u753b\u306b\u306f\u3001\u30cd\u30a4\u30c6\u30a3\u30d6UI\u90e8\u54c1\u306b\u5bfe\u5fdc\u3059\u308b\u7279\u5225\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u7528\u3044\u307e\u3059\u3002\n\u3053\u308c\u3089\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30cd\u30a4\u30c6\u30a3\u30d6\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u547c\u3073\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6b21\u306e\u8868\u306f\u3001\u30cd\u30a4\u30c6\u30a3\u30d6\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u30cd\u30a4\u30c6\u30a3\u30d6UI\u90e8\u54c1\u3068\u306e\u5bfe\u5fdc\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30cd\u30a4\u30c6\u30a3\u30d6",(0,r.kt)("br",null),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"),(0,r.kt)("th",{parentName:"tr",align:null},"Android"),(0,r.kt)("th",{parentName:"tr",align:null},"iOS"),(0,r.kt)("th",{parentName:"tr",align:null},"Web"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<View>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<ViewGroup>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<UIView>")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u306a\u3044",(0,r.kt)("inlineCode",{parentName:"td"},"<div>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<Text>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<TextView>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<UITextView>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<p>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<Image>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<ImageView>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<UIImageView>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<img>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<ScrollView>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<ScrollView>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<UIScrollView>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<div>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<TextInput>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<EditText>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<UITextField>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'<input type="text">'))))),(0,r.kt)("p",null,"React Native\u306b\u306f\u3001\u3059\u3050\u306b\u4f7f\u7528\u3067\u304d\u308b\u591a\u6570\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u521d\u3081\u304b\u3089\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u3053\u308c\u3089\u3092",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/components-and-apis"},"\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"),"\u3068\u547c\u3073\u307e\u3059\u3002"))}s.isMDXComponent=!0}}]);