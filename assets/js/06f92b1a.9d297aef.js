"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([["1831"],{1937:function(t,n,e){e.r(n),e.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>l,assets:()=>r,toc:()=>p,contentTitle:()=>i});var l=JSON.parse('{"id":"matplotlib/basic-plotting","title":"Basic matplotlib plotting","description":"matplotlib is a python graphical package to perform simple and advanced visual","source":"@site/docs/matplotlib/basic-plotting.md","sourceDirName":"matplotlib","slug":"/matplotlib/basic-plotting","permalink":"/python-tutorial/matplotlib/basic-plotting","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/python-tutorial/blob/main/docs/matplotlib/basic-plotting.md","tags":[],"version":"current","frontMatter":{"title":"Basic matplotlib plotting","sidebar_label":"Basic plotting"},"sidebar":"docs","previous":{"title":"Visualization","permalink":"/python-tutorial/category/visualization"},"next":{"title":"Subplot","permalink":"/python-tutorial/matplotlib/subplot"}}'),s=e("5893"),o=e("65");let a={title:"Basic matplotlib plotting",sidebar_label:"Basic plotting"},i=void 0,r={},p=[{value:"Saving plot to file",id:"saving-plot-to-file",level:3}];function A(t){let n={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"matplotlib"})," is a python graphical package to perform simple and advanced visual\npresentation."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'import matplotlib.pyplot as plt\nimport numpy as np\n# In Jupyter notebook to show figure inline\n%matplotlib inline\n# You can try %matplotlib notebook\n\n# some plot configuration\nplt.rcParams["figure.dpi"]=150\nplt.rcParams["figure.facecolor"]="white"\n\n# Let\'s create two one dimensional array using numpy\nx = np.linspace(0, 10, 11)\ny = x**2\n\n# make a x vs. y plot\nplt.plot(x, y)\nplt.show()\n'})}),"\n",(0,s.jsx)(n.p,{children:"This produces following output:"}),"\n",(0,s.jsx)("img",{src:e(7920).Z,alt:"mpl-x-vs-y"}),"\n",(0,s.jsxs)(n.p,{children:["Now let's improve the figure a bit. The plt.plot accepts 3 basic arguments in\nthe following order: (x, y, format). This format is a short hand combination of\n",(0,s.jsx)(n.code,{children:"{color}{marker}{line}"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"plt.plot(x, y, 'ro-')\nplt.show()\n"})}),"\n",(0,s.jsx)("img",{src:e(3347).Z,alt:"mpl-x-vs-y-2"}),"\n",(0,s.jsx)(n.p,{children:"More customizations:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:"plt.figure(figsize = (8, 5))\nplt.plot(x, y, 'ro-', linewidth=1, markersize=3)\nplt.title('My simple plot')\nplt.xlabel('X')\nplt.ylabel('Y')\nplt.show()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Even more options:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:"large = 22; med = 16; small = 12\nparams = {'axes.titlesize': large,\n          'legend.fontsize': med,\n          'figure.figsize': (16, 10),\n          'axes.labelsize': med,\n          'axes.titlesize': med,\n          'xtick.labelsize': med,\n          'ytick.labelsize': med,\n          'figure.titlesize': large}\nplt.rcParams.update(params)\n\nplt.figure(figsize = (8, 6), dpi = 300)\nplt.plot(x, y, 'ro-')\nplt.title('My simple plot')\nplt.xlabel('X')\nplt.ylabel('Y')\nplt.xlim(0, 10.5)\nplt.ylim(0, 110)\nplt.show()\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Notice that once we update the ",(0,s.jsx)(n.code,{children:"rcParams"}),", the settings persists until we\nrestart the kernel. You can go back to matplotlib defaults by:\n",(0,s.jsx)(n.code,{children:"plt.rcParams.update(rcParamsDefault)"})]})}),"\n",(0,s.jsx)(n.p,{children:"How can we append another plot on the same figure?"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:"y2 = x**3\nplt.plot(x, y, 'ro-', label='y')\nplt.plot(x, y2, 'g*-', label='y2')\nplt.xlabel('X')\nplt.ylabel('Y')\nplt.legend(frameon=False, loc=\"upper center\")\nplt.xlim(1, 10.5)\nplt.ylim(1, 1200)\nplt.show()\n"})}),"\n",(0,s.jsx)("img",{src:e(1710).Z,alt:"mpl-x-vs-y-3"}),"\n",(0,s.jsx)(n.h3,{id:"saving-plot-to-file",children:"Saving plot to file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:"x = np.linspace(0, 2*np.pi, 100)\ny = np.sin(x)\nplt.plot(x, y)\nplt.savefig('fig1.pdf')\nplt.show()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now visit ",(0,s.jsx)(n.a,{href:"https://matplotlib.org",children:"https://matplotlib.org"})," and explore yourself."]})]})}function m(t={}){let{wrapper:n}={...(0,o.a)(),...t.components};return n?(0,s.jsx)(n,{...t,children:(0,s.jsx)(A,{...t})}):A(t)}},3347:function(t,n,e){e.d(n,{Z:function(){return l}});let l="data:image/webp;base64,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"},1710:function(t,n,e){e.d(n,{Z:function(){return l}});let l=e.p+"assets/images/mpl-x-vs-y-3-a50d55157eb26a4663b11ae7e32122c9.webp"},7920:function(t,n,e){e.d(n,{Z:function(){return l}});let l="data:image/webp;base64,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"},65:function(t,n,e){e.d(n,{Z:function(){return i},a:function(){return a}});var l=e(7294);let s={},o=l.createContext(s);function a(t){let n=l.useContext(o);return l.useMemo(function(){return"function"==typeof t?t(n):{...n,...t}},[n,t])}function i(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),l.createElement(o.Provider,{value:n},t.children)}}}]);