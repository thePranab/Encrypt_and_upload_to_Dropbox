"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[5946],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=i,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6714:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={title:"File read write"},s=void 0,p={unversionedId:"basics/file-io",id:"basics/file-io",title:"File read write",description:"Reading data from file",source:"@site/docs/basics/file-io.md",sourceDirName:"basics",slug:"/basics/file-io",permalink:"/python-tutorial/basics/file-io",editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/basics/file-io.md",tags:[],version:"current",frontMatter:{title:"File read write"},sidebar:"docs",previous:{title:"Class",permalink:"/python-tutorial/basics/class"},next:{title:"Visualization",permalink:"/python-tutorial/category/visualization"}},d={},u=[{value:"Reading data from file",id:"reading-data-from-file",level:3},{value:"Writing data to file",id:"writing-data-to-file",level:3},{value:"Using with open",id:"using-with-open",level:3},{value:"File I/O using numpy",id:"file-io-using-numpy",level:3}],c={toc:u};function f(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"reading-data-from-file"},"Reading data from file"),(0,r.kt)("p",null,"Being able to read data from files and write the data generated by your program\nis an essential part of programming."),(0,r.kt)("p",null,"Here we will open a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"xps-data.txt")," which is stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"datafiles"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pranabdas/python-tutorial/"},"directory"),"."),(0,r.kt)("p",null,"Our data file contains two columns of numbers; energy and intensity. We can read\nthe data following way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# create two empty lists to store our energy and intensity values\nenergy = []\nintensity = []\n\nfid = open('../datafiles/xps-data.txt', 'r')\n# read one line at a time\ndata = fid.readlines()\nfid.close()\n\n# number of lines we have\nlines = len(data);\nfor lines in range(lines):\n    data_row = data[lines]\n\n    # remove the last newline character from each line\n    data_row = data_row[:-1]\n\n    # split in the tab character to separate energy and intensity strings\n    data_row = data_row.split('\\t')\n\n    # store them in our energy and intensity variables as float\n    energy.append(float(data_row[0]))\n    intensity.append(float(data_row[1]))\n")),(0,r.kt)("p",null,"Now that our data is stored in the energy and intensity variables. Best way to\nvisualize our data is to make a plot using matplotlib:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\n%matplotlib inline\n\nplt.figure(figsize = (10, 8))\nplt.plot(energy, intensity)\nplt.xlabel('Kinetic energy (eV)')\nplt.ylabel('Intensity (a.u.)')\nplt.show()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"plot-two-col-data",src:n(5846).Z,width:"810",height:"545"})),(0,r.kt)("h3",{id:"writing-data-to-file"},"Writing data to file"),(0,r.kt)("p",null,"Now that we are able to read data from a file, and use in our program, let us\ntry to generate and save some data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nx = np.linspace(-2*np.pi, 2*np.pi, num = 100)\ny = (np.sin(x)/x)**2\n\nplt.figure(figsize = (10, 8))\nplt.plot(x, y)\nplt.xlabel('x')\nplt.ylabel('f(x)')\nplt.show()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"func-plot",src:n(4194).Z,width:"803",height:"545"})),(0,r.kt)("p",null,"We can save the data as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"fid = open('../datafiles/data.txt', 'w')\n\nfor index in range(len(x)):\n    fid.write('{0}\\t{1}\\n'.format(x[index], y[index]))\nfid.close()\n")),(0,r.kt)("p",null,"We have stored our data in a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"data.txt"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The read mode is the default while opening files, if you need only read\npermission while opening a file, you can simply omit file mode argument after\nthe file name. It is important to close the files when it is not required in\norder to clear system resources. See the ",(0,r.kt)("inlineCode",{parentName:"p"},"with")," statement below, which\nautomatically closes the files."))),(0,r.kt)("h3",{id:"using-with-open"},"Using with open"),(0,r.kt)("p",null,"We can use another method to handle file operations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"with open('data.txt', 'r') as f:\n    data = f.read()\n")),(0,r.kt)("p",null,"There is an advantage of using the ",(0,r.kt)("inlineCode",{parentName:"p"},"with")," statement: the file is automatically\nclosed when it\u2019s not needed anymore."),(0,r.kt)("h3",{id:"file-io-using-numpy"},"File I/O using numpy"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"numpy")," has a helpful library to read/write formatted data files. We can do\nabove tasks following way using ",(0,r.kt)("inlineCode",{parentName:"p"},"numpy"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# read from file\ndata = np.loadtxt(\"../datafiles/xps-data.txt\")\n\n# plot\nplt.plot(data[:, 0], data[:, 1])\nplt.xlabel('Kinetic energy (eV)')\nplt.ylabel('Intensity (a.u.)')\nplt.show()\n\n# save to file\ndata = np.array([x, y]).T\nnp.savetxt(\"../datafiles/data.txt\", data)\n")),(0,r.kt)("p",null,"For loading a bit more complex data file with headers and comments lines, see\nthis example: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pranabdas/python-tutorial/blob/master/notebooks/Quantum-Design-SQIUD-data-loader.ipynb"},"Quantum Design SQUID data loader notebook"),"."))}f.isMDXComponent=!0},4194:function(e,t,n){t.Z=n.p+"assets/images/func-plot-b5d83c4e3eacda17ed72fddaa79d57cd.png"},5846:function(e,t,n){t.Z=n.p+"assets/images/plot-two-col-data-ac1e24056f10166f600f85acffb7ddbd.png"}}]);