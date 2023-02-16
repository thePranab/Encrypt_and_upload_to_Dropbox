"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[5312],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||u;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<u;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),u={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(u.tabItem,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(7462),a=n(7294),u=n(6010),o=n(2466),l=n(6550),i=n(1980),s=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,u=(0,l.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,i._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(u.location.search);t.set(o,e),u.replace(Object.assign({},u.location,{search:t.toString()}))}}),[o,u])]}function b(e){var t,n,r,u,o=e.defaultValue,l=e.queryString,i=void 0!==l&&l,s=e.groupId,p=m(e),b=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:p})})),v=b[0],h=b[1],g=d({queryString:i,groupId:s}),y=g[0],k=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],u=n[1],[r,(0,a.useCallback)((function(e){t&&u.set(e)}),[t,u])]),T=w[0],N=w[1],E=function(){var e=null!=y?y:T;return f({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){E&&h(E)}),[E]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),k(e),N(e)}),[k,N,p]),tabValues:p}}var v=n(2389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,n=e.block,l=e.selectedValue,i=e.selectValue,s=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==l&&(p(t),i(r))},f=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var u,o=c.indexOf(e.currentTarget)-1;n=null!=(u=c[o])?u:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:m},o,{className:(0,u.Z)("tabs__item",h.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var u=n.find((function(e){return e.props.value===r}));return u?(0,a.cloneElement)(u,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function k(e){var t=b(e);return a.createElement("div",{className:(0,u.Z)("tabs-container",h.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function w(e){var t=(0,v.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},2634:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var r=n(7462),a=n(3366),u=(n(7294),n(3905)),o=n(4866),l=n(5162),i=["components"],s={title:"Loop"},c=void 0,p={unversionedId:"basics/loop",id:"basics/loop",title:"Loop",description:"for loop",source:"@site/docs/basics/loop.mdx",sourceDirName:"basics",slug:"/basics/loop",permalink:"/python-tutorial/basics/loop",draft:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/basics/loop.mdx",tags:[],version:"current",frontMatter:{title:"Loop"},sidebar:"docs",previous:{title:"Flow control",permalink:"/python-tutorial/basics/flow-control"},next:{title:"Function",permalink:"/python-tutorial/basics/function"}},m={},f=[{value:"for loop",id:"for-loop",level:3},{value:"while loop",id:"while-loop",level:3},{value:"break",id:"break",level:3},{value:"continue",id:"continue",level:3}],d={toc:f},b="wrapper";function v(e){var t=e.components,n=(0,a.Z)(e,i);return(0,u.kt)(b,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h3",{id:"for-loop"},"for loop"),(0,u.kt)(o.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(l.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"for i in range(10):\n    print(i)\n"))),(0,u.kt)(l.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n")))),(0,u.kt)("h3",{id:"while-loop"},"while loop"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'prompt = "\\nTell me something, and I will repeat it back to you:"\nprompt += "\\nEnter \'quit\' to end the program. "\n\nmessage = ""\nwhile message != \'quit\':\n    message = input(prompt)\n    print(message)\n')),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Use a ",(0,u.kt)("inlineCode",{parentName:"li"},"flag")," to do the same:")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"prompt = \"\\nTell me something, and I will repeat it back to you:\"\nprompt += \"\\nEnter 'quit' to end the program. \"\n\nactive = True\nwhile active:\n    message = input(prompt)\n\n    if message == 'quit':\n        active = False\n    else:\n        print(message)\n")),(0,u.kt)("h3",{id:"break"},"break"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"prompt = \"\\nTell me something, and I will repeat it back to you:\"\nprompt += \"\\nEnter 'quit' to end the program. \"\n\nwhile True:\n    message = input(prompt)\n\n    if message == 'quit':\n        break\n    else:\n        print(message)\n")),(0,u.kt)("h3",{id:"continue"},"continue"),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"continue")," takes to the beginging of loop."),(0,u.kt)(o.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(l.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"current_num = 0\nwhile current_num < 10:\n    current_num += 1\n    if current_num % 2 == 0:\n        continue\n    print(current_num)  # print odd numbers only\n"))),(0,u.kt)(l.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"1\n3\n5\n7\n9\n")))))}v.isMDXComponent=!0}}]);