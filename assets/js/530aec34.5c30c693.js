"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([["1914"],{9375:function(t,n,o){o.r(n),o.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>e,assets:()=>i,toc:()=>c,contentTitle:()=>p});var e=JSON.parse('{"id":"matplotlib/contour-plot","title":"Contour plot","description":"","source":"@site/docs/matplotlib/contour-plot.md","sourceDirName":"matplotlib","slug":"/matplotlib/contour-plot","permalink":"/python-tutorial/matplotlib/contour-plot","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/python-tutorial/blob/main/docs/matplotlib/contour-plot.md","tags":[],"version":"current","frontMatter":{"title":"Contour plot"},"sidebar":"docs","previous":{"title":"Histogram","permalink":"/python-tutorial/matplotlib/histogram"},"next":{"title":"Image plot","permalink":"/python-tutorial/matplotlib/image-plot"}}'),r=o("5893"),l=o("65");let a={title:"Contour plot"},p=void 0,i={},c=[];function s(t){let n={code:"code",pre:"pre",...(0,l.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'import numpy as np\nimport matplotlib.pyplot as plt\n%matplotlib inline\nplt.rcParams["figure.dpi"]=150\nplt.rcParams["figure.facecolor"]="white"\n\nx = np.linspace(0, 5, 100)\ny = np.linspace(0, 5, 100)\nX,Y = np.meshgrid(x, y)\n\n# Define some function\nZ = np.sin(X) ** 2 + np.cos(5 + X * Y)\n\nplt.contour(X, Y, Z)\nplt.show()\n'})}),"\n",(0,r.jsx)("img",{src:o(6951).Z,alt:"contour-plot-1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"plt.contour(X, Y, Z, 10, cmap='RdGy')\nplt.show()\n"})}),"\n",(0,r.jsx)("img",{src:o(9724).Z,alt:"contour-plot-2"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"plt.contourf(X, Y, Z, 20, cmap='RdGy')\nplt.colorbar()\nplt.show()\n"})}),"\n",(0,r.jsx)("img",{src:o(7719).Z,alt:"contour-plot-3"})]})}function u(t={}){let{wrapper:n}={...(0,l.a)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(s,{...t})}):s(t)}},6951:function(t,n,o){o.d(n,{Z:function(){return e}});let e=o.p+"assets/images/contour-plot-1-8ad5edbaed73d04317d6234ff77374d5.webp"},9724:function(t,n,o){o.d(n,{Z:function(){return e}});let e=o.p+"assets/images/contour-plot-2-6ca2208e62ddf43031a38457d23e559c.webp"},7719:function(t,n,o){o.d(n,{Z:function(){return e}});let e=o.p+"assets/images/contour-plot-3-21985dc7e69a4aa5a3c637d25ddc416b.webp"},65:function(t,n,o){o.d(n,{Z:function(){return p},a:function(){return a}});var e=o(7294);let r={},l=e.createContext(r);function a(t){let n=e.useContext(l);return e.useMemo(function(){return"function"==typeof t?t(n):{...n,...t}},[n,t])}function p(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:a(t.components),e.createElement(l.Provider,{value:n},t.children)}}}]);