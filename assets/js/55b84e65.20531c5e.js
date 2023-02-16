"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[7420],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return y}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},u=Object.keys(e);for(n=0;n<u.length;n++)a=u[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)a=u[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,u=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=i(a),d=r,y=c["".concat(p,".").concat(d)]||c[d]||m[d]||u;return a?n.createElement(y,l(l({ref:t},s),{},{components:a})):n.createElement(y,l({ref:t},s))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=a.length,l=new Array(u);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var i=2;i<u;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(6010),u={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(u.tabItem,l),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return T}});var n=a(7462),r=a(7294),u=a(6010),l=a(2466),o=a(6550),p=a(1980),i=a(7392),s=a(12);function c(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(a);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function y(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,u=(0,o.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,p._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(u.location.search);t.set(l,e),u.replace(Object.assign({},u.location,{search:t.toString()}))}}),[l,u])]}function b(e){var t,a,n,u,l=e.defaultValue,o=e.queryString,p=void 0!==o&&o,i=e.groupId,c=m(e),b=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:c})})),v=b[0],g=b[1],f=y({queryString:p,groupId:i}),k=f[0],h=f[1],T=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:i}.groupId),a=(0,s.Nk)(t),n=a[0],u=a[1],[n,(0,r.useCallback)((function(e){t&&u.set(e)}),[t,u])]),N=T[0],I=T[1],x=function(){var e=null!=k?k:N;return d({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){x&&g(x)}),[x]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);g(e),h(e),I(e)}),[h,I,c]),tabValues:c}}var v=a(2389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){var t=e.className,a=e.block,o=e.selectedValue,p=e.selectValue,i=e.tabValues,s=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,a=s.indexOf(t),n=i[a].value;n!==o&&(c(t),p(n))},d=function(e){var t,a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var n,r=s.indexOf(e.currentTarget)+1;a=null!=(n=s[r])?n:s[0];break;case"ArrowLeft":var u,l=s.indexOf(e.currentTarget)-1;a=null!=(u=s[l])?u:s[s.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":a},t)},i.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return s.push(e)},onKeyDown:d,onClick:m},l,{className:(0,u.Z)("tabs__item",g.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=a?a:t)})))}function k(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var u=a.find((function(e){return e.props.value===n}));return u?(0,r.cloneElement)(u,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function h(e){var t=b(e);return r.createElement("div",{className:(0,u.Z)("tabs-container",g.tabList)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function T(e){var t=(0,v.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},9297:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var n=a(7462),r=a(3366),u=(a(7294),a(3905)),l=a(4866),o=a(5162),p=["components"],i={title:"Python Basics",sidebar_label:"Get started"},s=void 0,c={unversionedId:"basics/gs",id:"basics/gs",title:"Python Basics",description:"Python is a dynamically typed, interpreted language. Python interpreter is",source:"@site/docs/basics/gs.mdx",sourceDirName:"basics",slug:"/basics/gs",permalink:"/python-tutorial/basics/gs",draft:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/basics/gs.mdx",tags:[],version:"current",frontMatter:{title:"Python Basics",sidebar_label:"Get started"},sidebar:"docs",previous:{title:"Basics",permalink:"/python-tutorial/category/basics"},next:{title:"List, tuple, dictionary",permalink:"/python-tutorial/basics/list-tuple-dict"}},m={},d=[{value:"Hello Python",id:"hello-python",level:3},{value:"Assigning variables",id:"assigning-variables",level:3},{value:"String concatenation",id:"string-concatenation",level:3},{value:"Loosely typed",id:"loosely-typed",level:3},{value:"Input",id:"input",level:3},{value:"Type conversion",id:"type-conversion",level:3},{value:"String formatting",id:"string-formatting",level:3}],y={toc:d},b="wrapper";function v(e){var t=e.components,a=(0,r.Z)(e,p);return(0,u.kt)(b,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"Python is a dynamically typed, interpreted language. Python interpreter is\nwritten in C-language. Interpreter program reads and performs the Python codes/\ninstructions. The interpreters interacts with the operating system layer (use\nnetwork, keyboard, mouse, monitor, hard drive etc.)."),(0,u.kt)("h3",{id:"hello-python"},"Hello Python"),(0,u.kt)("p",null,"It is customary to write our first program that prints some message in the\nscreen:"),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'print("Hello Python!")\n'))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"Hello Python!\n")))),(0,u.kt)("h3",{id:"assigning-variables"},"Assigning variables"),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"a = 5\nb = 3\na + b\n"))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"8\n")))),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"a * b\n"))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"15\n")))),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"a - b\n"))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"2\n")))),(0,u.kt)("admonition",{title:"Good to know",type:"tip"},(0,u.kt)("p",{parentName:"admonition"},"Due to how the numbers are stored in computer memory, floating point algebra\nsometimes might produce unexpected results. Notice the following discrepancy\n(floating point addition/ subtraction is not associative):"),(0,u.kt)("pre",{parentName:"admonition"},(0,u.kt)("code",{parentName:"pre",className:"language-python"},">>> (1.2 + 1E20) - 1E20\n0.0\n>>> 1.2 + (1E20 - 1E20)\n1.2\n"))),(0,u.kt)("h3",{id:"string-concatenation"},"String concatenation"),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'greeting = "Hello"\nname = "Pranab"\nprint(greeting + " " + name)\n'))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"Hello Pranab\n")))),(0,u.kt)("p",null,"For performance improvement and better readability, consider using ",(0,u.kt)("inlineCode",{parentName:"p"},"join"),"\ninstead of in-place string concatenation."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'" ".join([greeting, name])\n')),(0,u.kt)("h3",{id:"loosely-typed"},"Loosely typed"),(0,u.kt)("p",null,"As we have seen, we do not need to define the datatype in python. Interestingly,\nfor certain operations, we can even mix types:"),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'my_str = "Rain! "\nmy_str * 3  # multiplying a str with int\n'))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"'Rain! Rain! Rain! '\n")))),(0,u.kt)("h3",{id:"input"},"Input"),(0,u.kt)("p",null,"Collecting user input:"),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'age = input("How old are you? ")\ntype(age)\n'))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"How old are you? 34\n<class 'str'>\n")))),(0,u.kt)("admonition",{type:"note"},(0,u.kt)("p",{parentName:"admonition"},"Notice that variable assigned from ",(0,u.kt)("inlineCode",{parentName:"p"},"input")," is a string, even if a number is\nentered.")),(0,u.kt)("h3",{id:"type-conversion"},"Type conversion"),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"age = int(age)\ntype(age)\n"))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"<class 'int'>\n")))),(0,u.kt)("h3",{id:"string-formatting"},"String formatting"),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'"Singapore".upper()\n'))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"'SINGAPORE'\n")))),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'"Singapore".lower()\n'))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"'singapore'\n")))),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'"das".capitalize()\n'))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"'Das'\n")))),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'"pranab das".title()\n'))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"'Pranab Das'\n")))),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'"ABCDefgh".swapcase()\n'))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"'abcdEFGH'\n")))),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"name = 'Pranab'\nage = 34\nprint(\"Name: {0}. Age: {1} years.\".format(name, age))\n"))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"Name: Pranab. Age: 34 years.\n")))),(0,u.kt)("p",null,"You can also format in the following way:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'print("Name: {name}. Age: {age} years.".format(name=name, age=age))\n')),(0,u.kt)("p",null,"Starting from Python 3.6 and above:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'print(f"Name: {name}. Age: {age} years.")\n')))}v.isMDXComponent=!0}}]);