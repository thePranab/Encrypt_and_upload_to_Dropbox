"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[5212],{3905:function(n,e,t){t.d(e,{Zo:function(){return f},kt:function(){return g}});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=r.createContext({}),u=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},f=function(n){var e=u(n.components);return r.createElement(s.Provider,{value:e},n.children)},l="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,s=n.parentName,f=a(n,["components","mdxType","originalType","parentName"]),l=u(t),m=i,g=l["".concat(s,".").concat(m)]||l[m]||p[m]||o;return t?r.createElement(g,c(c({ref:e},f),{},{components:t})):r.createElement(g,c({ref:e},f))}));function g(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,c=new Array(o);c[0]=m;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=n,a[l]="string"==typeof n?n:i,c[1]=a;for(var u=2;u<o;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4733:function(n,e,t){t.r(e),t.d(e,{assets:function(){return f},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),c=["components"],a={title:"Convolution"},s=void 0,u={unversionedId:"scipy/convolution",id:"scipy/convolution",title:"Convolution",description:"Here we have created the functions in the x-range [-2, 2], and plotted in the",source:"@site/docs/scipy/convolution.md",sourceDirName:"scipy",slug:"/scipy/convolution",permalink:"/python-tutorial/scipy/convolution",draft:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/scipy/convolution.md",tags:[],version:"current",frontMatter:{title:"Convolution"},sidebar:"docs",previous:{title:"Curve fitting",permalink:"/python-tutorial/scipy/curve-fitting"},next:{title:"Pandas",permalink:"/python-tutorial/pandas"}},f={},l=[],p={toc:l},m="wrapper";function g(n){var e=n.components,a=(0,i.Z)(n,c);return(0,o.kt)(m,(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"from scipy import signal\nimport numpy as np\nimport matplotlib.pyplot as plt\n%matplotlib inline\nplt.rcParams[\"figure.dpi\"]=150\nplt.rcParams[\"figure.facecolor\"]=\"white\"\n\n# define the first function, here Fermi-Dirac distribution\ndef f(E, kT):\n    return 1/(np.exp(E/kT) + 1)\n\nkT = 0.025; # corresponding to room temperature\nE = np.linspace(-2, 2, 1000)\n\nplt.rcParams.update({'font.size': 16})\nplt.plot(E, f(E, kT), 'k')\nplt.xlim(-0.5, 0.5)\nplt.xlabel('$E - \\mu$')\nplt.ylabel('$f(E, kT)$')\nplt.show()\n")),(0,o.kt)("picture",null,(0,o.kt)("source",{type:"image/webp",srcSet:t(8530).Z}),(0,o.kt)("img",{src:t(492).Z,alt:"scipy-fermi-dirac-function"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"# Define normalized Gassian funtion\ndef g(x, sigma):\n    return (1/(sigma*np.sqrt(2*np.pi)))*np.exp(-x**2/(2*sigma*sigma))\n\nx = np.linspace(-2, 2, 1000)\nsigma = 0.2/(2*np.sqrt(2*np.log(2)))  # convert full width at half maxima\n\nplt.plot(x, g(x, fwhm), 'g')\nplt.xlim(-0.5, 0.5)\nplt.xlabel('$x$')\nplt.ylabel('$g(x)$')\nplt.show()\n")),(0,o.kt)("picture",null,(0,o.kt)("source",{type:"image/webp",srcSet:t(6810).Z}),(0,o.kt)("img",{src:t(9164).Z,alt:"scipy-gauss-function"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"fx = f(E, kT)\ngx = g(x, sigma)\ng0 = g(0, sigma)\nconv = signal.convolve(fx, gx, mode='same')/sum(gx)\n\nplt.plot(E, fx, 'k', label='fx')\nplt.plot(x, gx/g0, 'g', label= 'gx/g0')\nplt.plot(x, conv, 'r', label='conv')\nplt.xlabel('$x$')\nplt.ylabel('$conv, f, g$')\nplt.xlim(-0.5, 0.5)\nplt.legend(frameon=False)\nplt.show()\n")),(0,o.kt)("picture",null,(0,o.kt)("source",{type:"image/webp",srcSet:t(8415).Z}),(0,o.kt)("img",{src:t(2716).Z,alt:"scipy-conv"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Here we have created the functions in the x-range ","[-2, 2]",", and plotted in the\nx-range ","[-0.5, 0.5]"," in order to avoid the edges during convolution.")))}g.isMDXComponent=!0},2716:function(n,e,t){e.Z=t.p+"assets/images/scipy-conv-885744a56132aaa96b34aa384a5c5839.png"},8415:function(n,e,t){e.Z=t.p+"assets/images/scipy-conv-1b81accfbe9a12021168ecbad168536e.webp"},492:function(n,e,t){e.Z=t.p+"assets/images/scipy-fermi-dirac-function-51e378b52e513ef81fe2abe0994fdbba.png"},8530:function(n,e){e.Z="data:image/webp;base64,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"},9164:function(n,e,t){e.Z=t.p+"assets/images/scipy-gauss-function-f108a0bcaf8aa1b9cb17016a704f4a14.png"},6810:function(n,e){e.Z="data:image/webp;base64,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"}}]);