"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2677],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>E});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,E=u["".concat(l,".").concat(d)]||u[d]||k[d]||r;return t?i.createElement(E,o(o({ref:n},c),{},{components:t})):i.createElement(E,o({ref:n},c))}));function E(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96237:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const r={title:"React Navigation\u306elinking\u3092\u4f7f\u7528\u3057\u306a\u3044\u753b\u9762\u9077\u79fb\u306e\u691c\u8a0e"},o=void 0,s={unversionedId:"react-native/santoku/decisions/non-linking-feasibility",id:"react-native/santoku/decisions/non-linking-feasibility",title:"React Navigation\u306elinking\u3092\u4f7f\u7528\u3057\u306a\u3044\u753b\u9762\u9077\u79fb\u306e\u691c\u8a0e",description:"linking\u3092\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u53d7\u4fe1\u3084\u3001URL\u306b\u5fdc\u3058\u305f\u753b\u9762\u9077\u79fb\u306a\u3069\u3092\u81ea\u8eab\u3067\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u53cd\u9762\u3001\u81ea\u7531\u306a\u753b\u9762\u9077\u79fb\u304c\u5b9f\u73fe\u53ef\u80fd\u3067\u3059\u3002",source:"@site/docs/react-native/santoku/decisions/non-linking-feasibility.mdx",sourceDirName:"react-native/santoku/decisions",slug:"/react-native/santoku/decisions/non-linking-feasibility",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/non-linking-feasibility",draft:!1,tags:[],version:"current",lastUpdatedAt:1693557060,formattedLastUpdatedAt:"2023\u5e749\u67081\u65e5",frontMatter:{title:"React Navigation\u306elinking\u3092\u4f7f\u7528\u3057\u306a\u3044\u753b\u9762\u9077\u79fb\u306e\u691c\u8a0e"},sidebar:"santoku",previous:{title:"React Navigation\u306elinking\u3092\u4f7f\u7528\u3057\u305f\u753b\u9762\u9077\u79fb\u306e\u691c\u8a0e",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/linking-feasibility"}},l={},p=[],c={toc:p},u="wrapper";function k(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"linking"),"\u3092\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u53d7\u4fe1\u3084\u3001URL\u306b\u5fdc\u3058\u305f\u753b\u9762\u9077\u79fb\u306a\u3069\u3092\u81ea\u8eab\u3067\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u53cd\u9762\u3001\u81ea\u7531\u306a\u753b\u9762\u9077\u79fb\u304c\u5b9f\u73fe\u53ef\u80fd\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u306f\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u53d7\u4fe1\u6642\u306e\u753b\u9762\u9077\u79fb\u3092\u5b9f\u73fe\u3059\u308b\u4f8b\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u53d7\u4fe1\u3068\u3001URL\u306e\u89e3\u6790\u306b\u306f",(0,a.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/sdk/linking/"},"Expo Linking"),"\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type Props = {\n  navigation: NavigationContainerRef<RootStackParamList>;\n};\n\nexport const DeepLinkHandlers: React.FC<Props> = ({navigation}) => {\n  // \u30b3\u30fc\u30eb\u30c9\u30fb\u30a6\u30a9\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8\n  useEffect(() => {\n    Linking.getInitialURL().then(url => {\n      if (url) {\n        // \u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u53d7\u4fe1\u3057\u305f\u5834\u5408\u306f\u3001\u30a2\u30d7\u30ea\u5185\u304b\u3089\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u958b\u304d\u3001Linking.addEventListener\u3067\u518d\u5ea6\u53d7\u4fe1\u3059\u308b\u3002\n        // \u3053\u306e\u3088\u3046\u306b\u5b9f\u88c5\u3059\u308b\u3053\u3068\u3067\u3001\u30a2\u30d7\u30ea\u306e\u521d\u671f\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u305f\u5f8c\u306b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306b\u5fdc\u3058\u305f\u753b\u9762\u306b\u9077\u79fb\u3059\u308b\u305f\u3081\u3001\n        // \u9077\u79fb\u5148\u753b\u9762\u304b\u3089\u623b\u308b\u30dc\u30bf\u30f3\u30bf\u30c3\u30d7\u306a\u3069\u3067\u3001\u524d\u306e\u753b\u9762\u306b\u623b\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002\n        Linking.openURL(url);\n      }\n    });\n  }, []);\n\n  // \u30db\u30c3\u30c8\u30b9\u30bf\u30fc\u30c8\n  useEffect(() => {\n    const subscription = Linking.addEventListener('url', event => {\n      const parsedURL = Linking.parse(event.url);\n\n      if (parsedURL.path?.startsWith('screen-a')) {\n        navigation.dispatch(StackActions.push('StackNavigator1', {screen: 'ScreenA'}));\n      } else if (parsedURL.path?.startsWith('screen-b')) {\n        navigation.navigate('StackNavigator1', {screen: 'ScreenB'});\n      } else if (parsedURL.path?.startsWith('screen-d')) {\n        navigation.dispatch(\n          CommonActions.reset({\n            index: 0,\n            routes: [\n              {\n                name: 'TabNavigator2',\n                state: {\n                  index: 0,\n                  routes: [{name: 'ScreenD'}],\n                },\n              },\n            ],\n          }),\n        );\n      }\n    });\n    return () => subscription.remove();\n  }, [navigation]);\n\n  return null;\n};\n")),(0,a.kt)("p",null,"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u53d7\u4fe1\u3084\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3068\u9077\u79fb\u5148\u753b\u9762\u306e\u30de\u30c3\u30d4\u30f3\u30b0\u306a\u3069\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"linking"),"\u306b\u6bd4\u3079\u3066\u5b9f\u88c5\u3059\u308b\u90e8\u5206\u306f\u591a\u3044\u306e\u3067\u3059\u304c\u3001\u305d\u308c\u307b\u3069\u30b3\u30fc\u30c9\u304c\u8907\u96d1\u5316\u3059\u308b\u3053\u3068\u306f\u306a\u3044\u5370\u8c61\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u53d7\u4fe1\u51e6\u7406\u3092\u81ea\u7531\u306b\u5b9f\u88c5\u3067\u304d\u308b\u305f\u3081\u3001",(0,a.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-019-deep-link-navigation#%E3%83%87%E3%82%A3%E3%83%BC%E3%83%97%E3%83%AA%E3%83%B3%E3%82%AF%E3%82%92%E5%8F%97%E4%BF%A1%E3%81%97%E3%81%9F%E9%9A%9B%E3%81%AE%E7%94%BB%E9%9D%A2%E9%81%B7%E7%A7%BB%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E4%BB%95%E6%A7%98"},"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u53d7\u4fe1\u3057\u305f\u969b\u306e\u753b\u9762\u9077\u79fb\u306b\u95a2\u3059\u308b\u4ed5\u69d8"),"\u3092\u5168\u3066\u6e80\u305f\u3059\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u672a\u8a8d\u8a3c\u6642\u306b\u53d7\u3051\u53d6\u3063\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u9077\u79fb\u5148\u753b\u9762\u3092\u3001\u8a8d\u8a3c\u5f8c\u306b\u8868\u793a\u3059\u308b\u65b9\u6cd5\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/decisions/linking-feasibility#%E6%9C%AA%E8%AA%8D%E8%A8%BC%E6%99%82%E3%81%AB%E5%8F%97%E3%81%91%E5%8F%96%E3%81%A3%E3%81%9F%E3%83%87%E3%82%A3%E3%83%BC%E3%83%97%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%AE%E9%81%B7%E7%A7%BB%E5%85%88%E7%94%BB%E9%9D%A2%E3%82%92%E8%AA%8D%E8%A8%BC%E5%BE%8C%E3%81%AB%E8%A1%A8%E7%A4%BA%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95"},"React Navigation\u306e",(0,a.kt)("inlineCode",{parentName:"a"},"linking"),"\u4f7f\u7528\u6642\u306b\u691c\u8a0e\u3057\u305f\u65b9\u6cd5"),"\u3068\u57fa\u672c\u7684\u306b\u306f\u540c\u3058\u3067\u3059\u3002"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u53d7\u3051\u53d6\u3063\u305f\u6642\u70b9\u3067\u3001\u305d\u306e\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092State\u306b\u4fdd\u6301",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u30b3\u30fc\u30eb\u30c9\u3001\u30a6\u30a9\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8\u306e\u5834\u5408\u306f\u3001",(0,a.kt)("a",{parentName:"li",href:"https://docs.expo.dev/versions/latest/sdk/linking/#linkinggetinitialurl"},"Linking.getInitialURL"),"\u5185\u3067State\u306b\u8a2d\u5b9a"),(0,a.kt)("li",{parentName:"ul"},"\u30db\u30c3\u30c8\u30b9\u30bf\u30fc\u30c8\u306e\u5834\u5408\u306f\u3001",(0,a.kt)("a",{parentName:"li",href:"https://docs.expo.dev/versions/latest/sdk/linking/#linkingaddeventlistenertype-handler"},"Linking.addEventListener"),"\u5185\u3067State\u306b\u8a2d\u5b9a"))),(0,a.kt)("li",{parentName:"ul"},"\u8a8d\u8a3c\u5f8c\u306bState\u304b\u3089\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u53d6\u5f97\u3057\u3001",(0,a.kt)("a",{parentName:"li",href:"https://docs.expo.dev/versions/latest/sdk/linking/#linkingopenurlurl"},"Linking.openURL"),"\u3092\u4f7f\u7528\u3057\u3066\u305d\u306e\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u958b\u304f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Linking.openURL"),"\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30d7\u30ea\u5185\u304b\u3089\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u958b\u304f\u3053\u3068\u306b\u3088\u308a\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"Linking.addEventListener"),"\u3067\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u518d\u5ea6\u53d7\u4fe1\u3059\u308b\n:::"))))))}k.isMDXComponent=!0}}]);