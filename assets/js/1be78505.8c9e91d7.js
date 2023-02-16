"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[9514,4972],{9963:function(e,t,a){a.r(t),a.d(t,{default:function(){return ge}});var n=a(7294),r=a(6010),l=a(1944),o=a(5281),i=a(3320),c=a(3438),d=a(4477),s=a(1116),m=a(3929),u=a(5999),b=a(2466),p=a(5936);var h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function v(){var e=function(e){var t=e.threshold,a=(0,n.useState)(!1),r=a[0],l=a[1],o=(0,n.useRef)(!1),i=(0,b.Ct)(),c=i.startScroll,d=i.cancelScroll;return(0,b.RF)((function(e,a){var n=e.scrollY,r=null==a?void 0:a.scrollY;r&&(o.current?o.current=!1:n>=r?(d(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((function(e){e.location.hash&&(o.current=!0,l(!1))})),{shown:r,scrollToTop:function(){return c(0)}}}({threshold:300}),t=e.shown,a=e.scrollToTop;return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",o.k.common.backToTopButton,h.backToTopButton,t&&h.backToTopButtonShow),type:"button",onClick:a})}var E=a(6550),f=a(7524),g=a(6668),k=a(1327),_=a(7462);function C(e){return n.createElement("svg",(0,_.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var I={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function S(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",I.collapseSidebarButton),onClick:t},n.createElement(C,{className:I.collapseSidebarButtonIcon}))}var N=a(9689),Z=a(3366),T=a(9688),x=Symbol("EmptyContext"),B=n.createContext(x);function y(e){var t=e.children,a=(0,n.useState)(null),r=a[0],l=a[1],o=(0,n.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return n.createElement(B.Provider,{value:o},t)}var L=a(6043),w=a(8596),A=a(9960),H=a(2389),M=["item","onItemClick","activePath","level","index"];function F(e){var t=e.categoryLabel,a=e.onClick;return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function P(e){var t=e.item,a=e.onItemClick,l=e.activePath,i=e.level,d=e.index,s=(0,Z.Z)(e,M),m=t.items,u=t.label,b=t.collapsible,p=t.className,h=t.href,v=(0,g.L)().docs.sidebar.autoCollapseCategories,E=function(e){var t=(0,H.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),f=(0,c._F)(t,l),k=(0,w.Mg)(h,l),C=(0,L.u)({initialState:function(){return!!b&&(!f&&t.collapsed)}}),I=C.collapsed,S=C.setCollapsed,N=function(){var e=(0,n.useContext)(B);if(e===x)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),y=N.expandedItem,P=N.setExpandedItem,W=function(e){void 0===e&&(e=!I),P(e?null:d),S(e)};return function(e){var t=e.isActive,a=e.collapsed,r=e.updateCollapsed,l=(0,T.D9)(t);(0,n.useEffect)((function(){t&&!l&&a&&r(!1)}),[t,l,a,r])}({isActive:f,collapsed:I,updateCollapsed:W}),(0,n.useEffect)((function(){b&&null!=y&&y!==d&&v&&S(!0)}),[b,y,d,S,v]),n.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":I},p)},n.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},n.createElement(A.Z,(0,_.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":f}),onClick:b?function(e){null==a||a(t),h?W(!1):(e.preventDefault(),W())}:function(){null==a||a(t)},"aria-current":k?"page":void 0,"aria-expanded":b?!I:void 0,href:b?null!=E?E:"#":E},s),u),h&&b&&n.createElement(F,{categoryLabel:u,onClick:function(e){e.preventDefault(),W()}})),n.createElement(L.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},n.createElement(O,{items:m,tabIndex:I?-1:0,onItemClick:a,activePath:l,level:i+1})))}var W=a(3919),D=a(9471),R={menuExternalLink:"menuExternalLink_NmtK"},V=["item","onItemClick","activePath","level","index"];function z(e){var t=e.item,a=e.onItemClick,l=e.activePath,i=e.level,d=(e.index,(0,Z.Z)(e,V)),s=t.href,m=t.label,u=t.className,b=t.autoAddBaseUrl,p=(0,c._F)(t,l),h=(0,W.Z)(s);return n.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",u),key:m},n.createElement(A.Z,(0,_.Z)({className:(0,r.Z)("menu__link",!h&&R.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:s},h&&{onClick:a?function(){return a(t)}:void 0},d),m,!h&&n.createElement(D.Z,null)))}var U={menuHtmlItem:"menuHtmlItem_M9Kj"};function K(e){var t=e.item,a=e.level,l=e.index,i=t.value,c=t.defaultStyle,d=t.className;return n.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(a),c&&[U.menuHtmlItem,"menu__list-item"],d),key:l,dangerouslySetInnerHTML:{__html:i}})}var j=["item"];function G(e){var t=e.item,a=(0,Z.Z)(e,j);switch(t.type){case"category":return n.createElement(P,(0,_.Z)({item:t},a));case"html":return n.createElement(K,(0,_.Z)({item:t},a));default:return n.createElement(z,(0,_.Z)({item:t},a))}}var Y=["items"];function q(e){var t=e.items,a=(0,Z.Z)(e,Y);return n.createElement(y,null,t.map((function(e,t){return n.createElement(G,(0,_.Z)({key:t,item:e,index:t},a))})))}var O=(0,n.memo)(q),X={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function J(e){var t=e.path,a=e.sidebar,l=e.className,i=function(){var e=(0,N.nT)().isActive,t=(0,n.useState)(e),a=t[0],r=t[1];return(0,b.RF)((function(t){var a=t.scrollY;e&&r(0===a)}),[e]),e&&a}();return n.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.Z)("menu thin-scrollbar",X.menu,i&&X.menuWithAnnouncementBar,l)},n.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},n.createElement(O,{items:a,activePath:t,level:1})))}var Q={sidebar:"sidebar_njMd",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_wUlq",sidebarHidden:"sidebarHidden_VK0M",sidebarLogo:"sidebarLogo_isFc"};function $(e){var t=e.path,a=e.sidebar,l=e.onCollapse,o=e.isHidden,i=(0,g.L)(),c=i.navbar.hideOnScroll,d=i.docs.sidebar.hideable;return n.createElement("div",{className:(0,r.Z)(Q.sidebar,c&&Q.sidebarWithHideableNavbar,o&&Q.sidebarHidden)},c&&n.createElement(k.Z,{tabIndex:-1,className:Q.sidebarLogo}),n.createElement(J,{path:t,sidebar:a}),d&&n.createElement(S,{onClick:l}))}var ee=n.memo($),te=a(3102),ae=a(3163),ne=function(e){var t=e.sidebar,a=e.path,l=(0,ae.e)();return n.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},n.createElement(O,{items:t,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function re(e){return n.createElement(te.Zo,{component:ne,props:e})}var le=n.memo(re);function oe(e){var t=(0,f.i)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(ee,e),r&&n.createElement(le,e))}var ie={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function ce(e){var t=e.toggleSidebar;return n.createElement("div",{className:ie.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(C,{className:ie.expandButtonIcon}))}var de={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function se(e){var t,a=e.children,r=(0,s.V)();return n.createElement(n.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},a)}function me(e){var t=e.sidebar,a=e.hiddenSidebarContainer,l=e.setHiddenSidebarContainer,i=(0,E.TH)().pathname,c=(0,n.useState)(!1),d=c[0],s=c[1],m=(0,n.useCallback)((function(){d&&s(!1),l((function(e){return!e}))}),[l,d]);return n.createElement("aside",{className:(0,r.Z)(o.k.docs.docSidebarContainer,de.docSidebarContainer,a&&de.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(de.docSidebarContainer)&&a&&s(!0)}},n.createElement(se,null,n.createElement("div",{className:(0,r.Z)(de.sidebarViewport,d&&de.sidebarViewportHidden)},n.createElement(oe,{sidebar:t,path:i,onCollapse:m,isHidden:d}),d&&n.createElement(ce,{toggleSidebar:m}))))}var ue={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function be(e){var t=e.hiddenSidebarContainer,a=e.children,l=(0,s.V)();return n.createElement("main",{className:(0,r.Z)(ue.docMainContainer,(t||!l)&&ue.docMainContainerEnhanced)},n.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",ue.docItemWrapper,t&&ue.docItemWrapperEnhanced)},a))}var pe={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX"};function he(e){var t=e.children,a=(0,s.V)(),r=(0,n.useState)(!1),l=r[0],o=r[1];return n.createElement(m.Z,{wrapperClassName:pe.docsWrapper},n.createElement(v,null),n.createElement("div",{className:pe.docPage},a&&n.createElement(me,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),n.createElement(be,{hiddenSidebarContainer:l},t)))}var ve=a(4972),Ee=a(197);function fe(e){var t=e.versionMetadata;return n.createElement(n.Fragment,null,n.createElement(Ee.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),n.createElement(l.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function ge(e){var t=e.versionMetadata,a=(0,c.hI)(e);if(!a)return n.createElement(ve.default,null);var i=a.docElement,m=a.sidebarName,u=a.sidebarItems;return n.createElement(n.Fragment,null,n.createElement(fe,e),n.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(d.q,{version:t},n.createElement(s.b,{name:m,items:u},n.createElement(he,null,i)))))}},4972:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(7294),r=a(5999),l=a(1944),o=a(3929);function i(){return n.createElement(n.Fragment,null,n.createElement(l.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(o.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);