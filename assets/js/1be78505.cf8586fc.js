(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[9514,4608],{3616:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return te}});var n=a(7294),i=a(3905),o=a(2263),r=a(6291),l=a(9349),s=a(2122),c=a(9756),d=a(6010),u=a(9732),m=a(944),b=a(1839),p=a(3783),h=a(7898),f=a(6742),v=a(3919),E=a(5537),_=function(e){return n.createElement("svg",(0,s.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},g=a(4478),k=a(8617),C=a(4973),N="sidebar_15mo",Z="sidebarWithHideableNavbar_267A",I="sidebarHidden_2kNb",S="sidebarLogo_3h0W",A="menu_Bmed",R="menuLinkText_2aKo",y="menuWithAnnouncementBar_2WvA",T="collapseSidebarButton_1CGd",M="collapseSidebarButtonIcon_3E-R",w="sidebarMenuIcon_fgN0",x="sidebarMenuCloseIcon_1lpH";var L=function e(t,a){return"link"===t.type?(0,u.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},B=(0,n.memo)((function(e){var t=e.items,a=(0,c.Z)(e,["items"]);return t.map((function(e,t){return n.createElement(P,(0,s.Z)({key:t,item:e},a))}))}));function P(e){switch(e.item.type){case"category":return n.createElement(H,e);case"link":default:return n.createElement(W,e)}}function H(e){var t,a,i,o=e.item,r=e.onItemClick,l=e.collapsible,u=e.activePath,m=(0,c.Z)(e,["item","onItemClick","collapsible","activePath"]),b=o.items,p=o.label,h=L(o,u),f=(a=h,i=(0,n.useRef)(a),(0,n.useEffect)((function(){i.current=a}),[a]),i.current),v=(0,n.useState)((function(){return!!l&&(!h&&o.collapsed)})),E=v[0],_=v[1],g=(0,n.useRef)(null),k=(0,n.useState)(void 0),C=k[0],N=k[1],Z=function(e){var t;void 0===e&&(e=!0),N(e?(null==(t=g.current)?void 0:t.scrollHeight)+"px":void 0)};(0,n.useEffect)((function(){h&&!f&&E&&_(!1)}),[h,f,E]);var I=(0,n.useCallback)((function(e){e.preventDefault(),C||Z(),setTimeout((function(){return _((function(e){return!e}))}),100)}),[C]);return 0===b.length?null:n.createElement("li",{className:(0,d.Z)("menu__list-item",{"menu__list-item--collapsed":E})},n.createElement("a",(0,s.Z)({className:(0,d.Z)("menu__link",(t={"menu__link--sublist":l,"menu__link--active":l&&h},t[R]=!l,t)),onClick:l?I:void 0,href:l?"#!":void 0},m),p),n.createElement("ul",{className:"menu__list",ref:g,style:{height:C},onTransitionEnd:function(){E||Z(!1)}},n.createElement(B,{items:b,tabIndex:E?"-1":"0",onItemClick:r,collapsible:l,activePath:u})))}function W(e){var t=e.item,a=e.onItemClick,i=e.activePath,o=(e.collapsible,(0,c.Z)(e,["item","onItemClick","activePath","collapsible"])),r=t.href,l=t.label,u=L(t,i);return n.createElement("li",{className:"menu__list-item",key:l},n.createElement(f.Z,(0,s.Z)({className:(0,d.Z)("menu__link",{"menu__link--active":u}),to:r},(0,v.Z)(r)&&{isNavLink:!0,exact:!0,onClick:a},o),(0,v.Z)(r)?l:n.createElement("span",null,l,n.createElement(k.Z,null))))}function D(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,C.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,d.Z)("button button--secondary button--outline",T),onClick:t},n.createElement(_,{className:M}))}function F(e){var t=e.responsiveSidebarOpened,a=e.onClick;return n.createElement("button",{"aria-label":t?(0,C.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,C.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?n.createElement("span",{className:(0,d.Z)(w,x)},"\xd7"):n.createElement(g.Z,{className:w,height:24,width:24}))}var O=function(e){var t,a,i=e.path,o=e.sidebar,r=e.sidebarCollapsible,l=void 0===r||r,s=e.onCollapse,c=e.isHidden,f=function(){var e=(0,m.Z)().isAnnouncementBarClosed,t=(0,n.useState)(!e),a=t[0],i=t[1];return(0,h.Z)((function(t){var a=t.scrollY;e||i(0===a)})),a}(),v=(0,u.LU)(),_=v.navbar.hideOnScroll,g=v.hideableSidebar,k=(0,m.Z)().isAnnouncementBarClosed,R=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];(0,b.Z)(t);var i=(0,p.Z)();return(0,n.useEffect)((function(){i===p.D.desktop&&a(!1)}),[i]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,n.useCallback)((function(e){e.target.blur(),a(!1)}),[a]),toggleResponsiveSidebar:(0,n.useCallback)((function(){a((function(e){return!e}))}),[a])}}(),T=R.showResponsiveSidebar,M=R.closeResponsiveSidebar,w=R.toggleResponsiveSidebar;return n.createElement("div",{className:(0,d.Z)(N,(t={},t[Z]=_,t[I]=c,t))},_&&n.createElement(E.Z,{tabIndex:-1,className:S}),n.createElement("nav",{className:(0,d.Z)("menu","menu--responsive","thin-scrollbar",A,(a={"menu--show":T},a[y]=!k&&f,a)),"aria-label":(0,C.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},n.createElement(F,{responsiveSidebarOpened:T,onClick:w}),n.createElement("ul",{className:"menu__list"},n.createElement(B,{items:o,onItemClick:M,collapsible:l,activePath:i}))),g&&n.createElement(D,{onClick:s}))},K=a(7277),z=a(4608),J=a(5977),U="docPage_31aa",Y="docMainContainer_3ufF",G="docMainContainerEnhanced_3NYZ",Q="docSidebarContainer_3Kbt",X="docSidebarContainerHidden_3pA8",j="collapsedDocSidebar_2JMH",q="expandSidebarButtonIcon_1naQ",V="docItemWrapperEnhanced_2vyJ",$="docItemWrapper_3FMP";function ee(e){var t,a,r,s,c,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,h=(0,o.Z)(),f=h.siteConfig,v=h.isClient,E=b.pluginId,g=b.version,k=function(e){var t,a=e.versionMetadata,n=e.currentDocRoute,i=a.permalinkToSidebar,o=a.docsSidebars,r=i[n.path]||i[(t=n.path,t.endsWith("/")?t:t+"/")]||i[function(e){return e.endsWith("/")?e.slice(0,-1):e}(n.path)];return{sidebar:o[r],sidebarName:r}}({versionMetadata:b,currentDocRoute:m}),N=k.sidebarName,Z=k.sidebar,I=(0,n.useState)(!1),S=I[0],A=I[1],R=(0,n.useState)(!1),y=R[0],T=R[1],M=(0,n.useCallback)((function(){y&&T(!1),A(!S)}),[y]);return n.createElement(l.Z,{key:v,wrapperClassName:u.kM.wrapper.docPages,pageClassName:u.kM.page.docPage,searchMetadatas:{version:g,tag:(0,u.os)(E,g)}},n.createElement("div",{className:U},Z&&n.createElement("aside",{className:(0,d.Z)(Q,(t={},t[X]=S,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q)&&S&&T(!0)}},n.createElement(O,{key:N,sidebar:Z,path:m.path,sidebarCollapsible:null==(a=null==(r=f.themeConfig)?void 0:r.sidebarCollapsible)||a,onCollapse:M,isHidden:y}),y&&n.createElement("div",{className:j,title:(0,C.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:M,onClick:M},n.createElement(_,{className:q}))),n.createElement("main",{className:(0,d.Z)(Y,(s={},s[G]=S||!Z,s))},n.createElement("div",{className:(0,d.Z)("container padding-top--md padding-bottom--lg",$,(c={},c[V]=S,c))},n.createElement(i.Zo,{components:K.Z},p)))))}var te=function(e){var t=e.route.routes,a=e.versionMetadata,i=e.location,o=t.find((function(e){return(0,J.LX)(i.pathname,e)}));return o?n.createElement(ee,{currentDocRoute:o,versionMetadata:a},(0,r.Z)(t)):n.createElement(z.default,e)}},4608:function(e,t,a){"use strict";a.r(t);var n=a(7294),i=a(9349),o=a(4973);t.default=function(){return n.createElement(i.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);