"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[5581],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1959:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Setup",slug:"/"},p=void 0,s={unversionedId:"setup",id:"setup",title:"Setup",description:"Installing Python 3",source:"@site/docs/setup.md",sourceDirName:".",slug:"/",permalink:"/python-tutorial/",editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/setup.md",tags:[],version:"current",frontMatter:{title:"Setup",slug:"/"},sidebar:"docs",next:{title:"Basics",permalink:"/python-tutorial/category/basics"}},c={},u=[{value:"Installing Python 3",id:"installing-python-3",level:3},{value:"pip",id:"pip",level:3},{value:"Installing Jupyterlab",id:"installing-jupyterlab",level:3},{value:"virtualenv",id:"virtualenv",level:3},{value:"Docker",id:"docker",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"installing-python-3"},"Installing Python 3"),(0,o.kt)("p",null,"If you use macOS (Big Sur/11 or Monterey/12), you should have Python 3 already\ninstalled. However you might need to install Xcode Command Line Tools, you can\ndo that by opening Terminal and issuing following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"xcode-select --install\n")),(0,o.kt)("p",null,"You can check whether Python 3 is installed in your system or not by typing\nfollowing in a terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 --version\n")),(0,o.kt)("p",null,"If python 3 is installed, it will print the version number, otherwise you will\nsee some sort of error."),(0,o.kt)("p",null,"If you use Ubuntu/Debian, you can install Python and pip (python package\nmanager) by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install python3 python3-pip\n")),(0,o.kt)("p",null,"If you use Windows, you can go to ",(0,o.kt)("a",{parentName:"p",href:"https://www.python.org"},"https://www.python.org"),", download and\ninstall the latest version of Python 3."),(0,o.kt)("h3",{id:"pip"},"pip"),(0,o.kt)("p",null,"We can install python packages using the ",(0,o.kt)("inlineCode",{parentName:"p"},"pip")," package manager. To install a\nspecific package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install <package-name>\npip install numpy\npip install scipy matplotlib  # install multiple packages\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note that in some operating systems, ",(0,o.kt)("inlineCode",{parentName:"p"},"pip")," is referred as ",(0,o.kt)("inlineCode",{parentName:"p"},"pip3")," specifically\nfor the version corresponding to Python 3."))),(0,o.kt)("p",null,"We can list outdated python packages by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip list --outdated\n")),(0,o.kt)("p",null,"We can update outdated python packages by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --upgrade <package-name>\npip install --upgrade jupyterlab\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--upgrade")," flag can be used even if the package is not already installed,\nit will install the latest version. If a package is installed and a newer\nversion is available, it will upgrade to the latest version."))),(0,o.kt)("p",null,"You can install a list of python packages from a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pranabdas/python-tutorial/blob/master/requirements.txt"},"requirements.txt")," file.\nList each package name on separate line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="requirements.txt"',title:'"requirements.txt"'},"jupyterlab\nnumpy\nscipy\nmatplotlib\n")),(0,o.kt)("p",null,"Installing a list of packages from ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --upgrade -r requirements.txt\n")),(0,o.kt)("h3",{id:"installing-jupyterlab"},"Installing Jupyterlab"),(0,o.kt)("p",null,"Jupyter notebook is a convenient way to run and document your python code. We\ncan install Jupyterlab by issuing following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install jupyterlab\n")),(0,o.kt)("p",null,"Now we can launch Jupyterlab by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"jupyter-lab")," in the terminal."),(0,o.kt)("h3",{id:"virtualenv"},"virtualenv"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"virtualenv")," is a powerful way to manage dependencies in a python project. We\noften need some python packages specific to a project. Therefore it is not a\ngood idea to install every python packages globally. Instead we can use\n",(0,o.kt)("inlineCode",{parentName:"p"},"virtualenv")," and keep our specific python packages local to that specific\nproject. First we need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualenv")," globally though:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --upgrade virtualenv\n")),(0,o.kt)("p",null,"Activate ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualenv"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-project/\nvirtualenv venv\nsource venv/bin/activate\n")),(0,o.kt)("p",null,"Now we can install dependencies using ",(0,o.kt)("inlineCode",{parentName:"p"},"pip"),", and it will be stored inside the\n",(0,o.kt)("inlineCode",{parentName:"p"},"venv")," directory."),(0,o.kt)("p",null,"To leave the ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualenv")," run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deactivate\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt")," to list all required python packages for a project,\nand include ",(0,o.kt)("inlineCode",{parentName:"p"},"venv")," path in the ",(0,o.kt)("inlineCode",{parentName:"p"},".gitigone"),"."))),(0,o.kt)("h3",{id:"docker"},"Docker"),(0,o.kt)("p",null,"We can run our whole python setup inside a container, isolated from our main\noperating system. First you need to install ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"docker"),". Then we can build our container image\nusing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pranabdas/python-tutorial/blob/master/Dockerfile"},"Dockerfile"),", you can\nadjust according to your needs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="Dockerfile"',title:'"Dockerfile"'},'# Start from Ubuntu 20.04 LTS\nFROM ubuntu:focal\n\n# Update OS\nRUN apt update && apt upgrade -y\n\n# Install software packages\nRUN apt install -y python3 python3-pip\n\n# Install pip packages\nRUN pip3 install jupyterlab numpy scipy matplotlib\n\n# jupyter-lab settings\nRUN mkdir /etc/jupyter && \\\n    (echo "c.ServerApp.ip = \'0.0.0.0\'" && \\\n     echo "c.ServerApp.allow_root = True" && \\\n     echo "c.ServerApp.open_browser = False") \\\n        >> /etc/jupyter/jupyter_server_config.py\n\n# leave in `/home` which we can map with the host\nWORKDIR /home\n')),(0,o.kt)("p",null,"Build the Docker image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t jupyter .\n")),(0,o.kt)("p",null,"Run Docker (you can either forward a specific port or if are using Linux, map\nhost network):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -ti -p 8888:8888 -v ${PWD}:/home jupyter bash\ndocker run -ti --net=host -v /host/path:/home jupyter bash\n")),(0,o.kt)("p",null,"Launch Jupyter notebook inside the container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"jupyter-lab\n")),(0,o.kt)("p",null,"Now we can create a new python 3 notebook, and start writing our python code.\nIn order to properly close a notebook, save the notebook (either from ",(0,o.kt)("em",{parentName:"p"},"File"),"\nmenu or the save icon) \u2192 ",(0,o.kt)("em",{parentName:"p"},"Close and Shutdown the Notebook")," (from ",(0,o.kt)("em",{parentName:"p"},"File")," menu),\nand finally shutdown the Jupyter server from the ",(0,o.kt)("em",{parentName:"p"},"File")," menu \u2192 ",(0,o.kt)("em",{parentName:"p"},"Shut down"),"."))}m.isMDXComponent=!0}}]);