(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{155:function(e,a,t){"use strict";t.d(a,"a",(function(){return O}));var r=t(3),n=t(7),c=t(154),l=t(152),i=t(146),m=t(0),s=t.n(m),o=t(57),u=t.n(o),v=function(e){var a=e.children,t=e.colSize,m=void 0===t?4:t,o=Object(n.a)(e,["children","colSize"]),v=Object(l.a)(o.to);return s.a.createElement("div",{className:Object(i.a)("col","col--"+m,u.a.pageOverviewContainer)},s.a.createElement(c.a,Object(r.a)({className:Object(i.a)("card",u.a.pageOverviewLinkCard)},o,{to:v}),a))},d=function(e){var a=e.title;return s.a.createElement("div",{className:Object(i.a)("card__header",u.a.pageOverviewTitle)},s.a.createElement("h3",null,a))},g=function(e){var a=e.src,t=e.alt,c=Object(n.a)(e,["src","alt"]),m=Object(l.a)(a);return s.a.createElement("div",{className:Object(i.a)("card__image")},s.a.createElement("img",Object(r.a)({className:u.a.pageOverviewImage},c,{alt:t,src:m})))},E=function(e){var a=e.summary;return s.a.createElement("div",{className:Object(i.a)("card__body",u.a.pageOverviewSummary)},s.a.createElement("p",null,a))},b=function(e){var a=e.title,t=e.imageUrl,r=e.summary,c=Object(n.a)(e,["title","imageUrl","summary"]);return s.a.createElement(v,c,s.a.createElement(d,{title:a+" \xbb"}),t&&s.a.createElement(g,{src:t,alt:a}),r&&s.a.createElement(E,{summary:r}))},O=function(e){var a=e.overviews,t=e.colSize;return s.a.createElement("section",{className:Object(i.a)(u.a.pageList)},s.a.createElement("div",{className:Object(i.a)("container")},s.a.createElement("div",{className:Object(i.a)("row",u.a.pageListRow)},a.map((function(e){return s.a.createElement(b,Object(r.a)({key:e.to,colSize:t},e))})))))}},85:function(e,a,t){"use strict";t.r(a);var r=t(21),n=t(159),c=t(146),l=t(0),i=t.n(l),m=t(155),s=t(86),o=t.n(s),u=[{title:"Reference",to:"reference",imageUrl:"img/undraw_docusaurus_mountain.svg",summary:i.a.createElement(i.a.Fragment,null,"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9")}],v=[{title:"Learn React Native",to:"react-native/learn",imageUrl:"img/undraw_docusaurus_react.svg",summary:i.a.createElement(i.a.Fragment,null,"\u5b66\u7fd2\u7528\u30b3\u30f3\u30c6\u30f3\u30c4")},{title:"Troubleshooting",to:"react-native/troubleshooting",imageUrl:"img/undraw_docusaurus_react.svg",summary:i.a.createElement(i.a.Fragment,null,"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c8")}];a.default=function(){var e=Object(r.default)().siteConfig;return i.a.createElement(n.a,null,i.a.createElement("header",{className:Object(c.a)("hero hero--primary",o.a.heroBanner)},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"hero__title"},(null==e?void 0:e.title)||""),i.a.createElement("p",{className:"hero__subtitle"},(null==e?void 0:e.tagline)||""))),i.a.createElement("main",null,i.a.createElement(m.a,{overviews:u,colSize:4}),i.a.createElement(m.a,{overviews:v,colSize:4})))}}}]);