"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[357],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=d(a),k=r,c=m["".concat(i,".").concat(k)]||m[k]||s[k]||l;return a?n.createElement(c,o(o({ref:t},u),{},{components:a})):n.createElement(c,o({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),p=a(67392),i=a(7094),d=a(12466);const u="tabList__CuJ",s="tabItem_LNqP";function m(e){var t;const{lazy:a,block:o,defaultValue:m,values:k,groupId:c,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=k??v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),N=(0,p.l)(b,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:S}=(0,i.U)(),[h,A]=(0,r.useState)(g),D=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=c){const e=y[c];null!=e&&e!==h&&b.some((t=>t.value===e))&&A(e)}const O=e=>{const t=e.currentTarget,a=D.indexOf(t),n=b[a].value;n!==h&&(C(t),A(n),null!=c&&S(c,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=D.indexOf(e.currentTarget)+1;a=D[t]??D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;a=D[t]??D[D.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},f)},b.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,key:t,ref:e=>D.push(e),onKeyDown:I,onClick:O},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":h===t})}),a??t)}))),a?(0,r.cloneElement)(v.filter((e=>e.props.value===h))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}function k(e){const t=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},59256:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>s});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),o=a(85162);const p={title:"Firebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b"},i=void 0,d={unversionedId:"react-native/santoku/development/development-environment/use-firebase",id:"react-native/santoku/development/development-environment/use-firebase",title:"Firebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b",description:"Firebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u305f\u3081\u306b\u306f\u3001Firebase SDK\u7528\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u914d\u7f6e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u306f\u30c0\u30df\u30fc\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u683c\u7d0d\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u5bfe\u8c61OS\u3068\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u5225\u9014\u5165\u624b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/development/development-environment/04.use-firebase.mdx",sourceDirName:"react-native/santoku/development/development-environment",slug:"/react-native/santoku/development/development-environment/use-firebase",permalink:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/use-firebase",draft:!1,tags:[],version:"current",lastUpdatedAt:1634099616,formattedLastUpdatedAt:"2021\u5e7410\u670813\u65e5",sidebarPosition:4,frontMatter:{title:"Firebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b"},sidebar:"santoku",previous:{title:"USB\u63a5\u7d9a\u3067iOS\u7aef\u672b\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff08App\u306e\u9ad8\u5ea6\u306a\u6a5f\u80fd\uff09",permalink:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/setting-up-ios-advanced-run-on-device"},next:{title:"Android\u30a2\u30d7\u30ea\u306e\u914d\u5e03\u7528\u30d3\u30eb\u30c9\u306e\u8a2d\u5b9a",permalink:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/setting-up-android-distribution-build"}},u={},s=[],m={toc:s};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Firebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u305f\u3081\u306b\u306f\u3001Firebase SDK\u7528\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u914d\u7f6e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u306f\u30c0\u30df\u30fc\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u683c\u7d0d\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u5bfe\u8c61OS\u3068\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u5225\u9014\u5165\u624b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u305d\u308c\u305e\u308c\u306e\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u306f\u3001\u7570\u306a\u308b\u30a2\u30d7\u30ea\u3068\u3057\u3066Firebase\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u767b\u9332\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)(l.Z,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Android",value:"android"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ios",mdxType:"TabItem"},(0,r.kt)("p",null,"iOS\u7528\u306b\u306f\u3001\u6b21\u306e\u547d\u540d\u30eb\u30fc\u30eb\u3067",(0,r.kt)("inlineCode",{parentName:"p"},"ios/SantokuApp/Supporting"),"\u306b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30d5\u30a1\u30a4\u30eb\u306e\u3046\u3061\u3001\u30d3\u30eb\u30c9\u6642\u306b\u6307\u5b9a\u3055\u308c\u305f\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3068\u5bfe\u5fdc\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u304c\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"ios/Supporting/GoogleService-Info.plist"),"\u3068\u3057\u3066\u30b3\u30d4\u30fc\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"ios/SantokuApp/Supporting/GoogleService-Info.<Scheme>.<Configuration>.plist\n")),(0,r.kt)("p",null,"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u540d\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff08Configuration\uff09"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff08Scheme\uff09"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Debug"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DevSantokuApp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u306a\u3057")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Debug"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SantokuApp"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"GoogleService-Info.SantokuApp.Debug.plist"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DebugAdvanced"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DevSantokuApp"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"GoogleService-Info.DevSantokuApp.DebugAdvanced.plist"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DebugAdvanced"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SantokuApp"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"GoogleService-Info.SantokuApp.DebugAdvanced.plist"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ReleaseInHouse"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DevSantokuApp"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"GoogleService-Info.DevSantokuApp.ReleaseInHouse.plist"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ReleaseInHouse"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SantokuApp"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"GoogleService-Info.SantokuApp.ReleaseInHouse.plist"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Release"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DevSantokuApp"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"GoogleService-Info.DevSantokuApp.Release.plist"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Release"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SantokuApp"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"GoogleService-Info.SantokuApp.Release.plist"))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u306e\u3069\u3061\u3089\u304b\u306b\u8a72\u5f53\u3059\u308b\u5834\u5408\u306f\u3001\u30c0\u30df\u30fc\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"GoogleService-Info.Dummy.plist"),"\uff09\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u304c",(0,r.kt)("inlineCode",{parentName:"li"},"Debug"),"\u3001\u304b\u3064\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u304c",(0,r.kt)("inlineCode",{parentName:"li"},"DevSantokuApp"),"\u306e\u5834\u5408"),(0,r.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u683c\u7d0d\u3057\u306a\u304b\u3063\u305f\u5834\u5408")))),(0,r.kt)(o.Z,{value:"android",mdxType:"TabItem"},(0,r.kt)("p",null,"Android\u7528\u306b\u306f\u3001\u6b21\u306e\u547d\u540d\u30eb\u30fc\u30eb\u3067",(0,r.kt)("inlineCode",{parentName:"p"},"android/app/src"),"\u306b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"android/app/src/<variant>/google-services.json\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<variant>"),"\u306f\u3001\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u540d\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"ReleaseInHouse"),"\u3067\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"DevSantokuApp"),"\u306e\u5834\u5408\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"devSantokuAppReleaseInHouse"),"\u3068\u306a\u308a\u307e\u3059\u3002\u5148\u982d\u306e\u6587\u5b57\u306f\u5c0f\u6587\u5b57\u3068\u306a\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u683c\u7d0d\u5148\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Debug"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DevSantokuApp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u306a\u3057")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Debug"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SantokuApp"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"android/app/src/santokuAppDebug"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DebugAdvanced"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DevSantokuApp"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"android/app/src/devSantokuAppDebugAdvanced"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DebugAdvanced"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SantokuApp"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"android/app/src/santokuAppDebugAdvanced"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ReleaseInHouse"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DevSantokuApp"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"android/app/src/devSantokuAppReleaseInHouse"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ReleaseInHouse"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SantokuApp"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"android/app/src/santokuAppReleaseInHouse"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Release"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DevSantokuApp"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"android/app/src/devSantokuAppRelease"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Release"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SantokuApp"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"android/app/src/santokuAppRelease"))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u306e\u3069\u3061\u3089\u304b\u306b\u8a72\u5f53\u3059\u308b\u5834\u5408\u306f\u3001\u30c0\u30df\u30fc\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"src/app/google-services.json"),"\uff09\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u304c",(0,r.kt)("inlineCode",{parentName:"li"},"Debug"),"\u3001\u304b\u3064\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u304c",(0,r.kt)("inlineCode",{parentName:"li"},"DevSantokuApp"),"\u306e\u5834\u5408"),(0,r.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u683c\u7d0d\u3057\u306a\u304b\u3063\u305f\u5834\u5408"))))),(0,r.kt)("p",null,"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/development/build-configuration"},"\u30d3\u30eb\u30c9"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}k.isMDXComponent=!0}}]);