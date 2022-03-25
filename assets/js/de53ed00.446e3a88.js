"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[5874],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return t?a.createElement(h,l(l({ref:n},s),{},{components:t})):a.createElement(h,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],p={title:"Building webapp using Django framework",sidebar_label:"Django"},i=void 0,u={unversionedId:"django/webapp",id:"django/webapp",title:"Building webapp using Django framework",description:"Django is a python web framework that helps you build rich interactive web apps.",source:"@site/docs/django/webapp.md",sourceDirName:"django",slug:"/django/webapp",permalink:"/python-tutorial/django/webapp",editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/django/webapp.md",tags:[],version:"current",frontMatter:{title:"Building webapp using Django framework",sidebar_label:"Django"},sidebar:"docs",previous:{title:"Webapps",permalink:"/python-tutorial/category/webapps"},next:{title:"Today app",permalink:"/python-tutorial/django/today-app"}},s={},c=[],d={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Django is a python web framework that helps you build rich interactive web apps.\nMozilla, Dropbox, Wikipedia, Spotify are some of the websites built using Django\nframework. First of make sure you have ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualenv")," installed, it helps keep\nyour project dependencies separate. Create a new project directory, and activate\n",(0,o.kt)("inlineCode",{parentName:"p"},"virtualenv"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir django-project\ncd django-project\nvirtualenv venv\nsource venv/bin/activate\n")),(0,o.kt)("p",null,"Now we should be in virtual environment, you should see ",(0,o.kt)("inlineCode",{parentName:"p"},"venv>")," prompt in the\nTerminal. You can exit virtualenv by entering ",(0,o.kt)("inlineCode",{parentName:"p"},"deactivate"),". Let's install\n",(0,o.kt)("inlineCode",{parentName:"p"},"django")," under the venv."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install django\n")),(0,o.kt)("p",null,"Once Django is installed, we can create our django project, let's call it\nmyWebApp."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"django-admin startproject myWebApp .\n")),(0,o.kt)("p",null,"Note the ",(0,o.kt)("inlineCode",{parentName:"p"},".")," in the end, which creates the project in our current directory,\notherwise it will create another extra top level folder. You have to be mindful\nof your directory structure when you deploy it in a server."),(0,o.kt)("p",null,"Django projects are collection of apps. Say, we want to create an app called\nhello, which says hello when visited /hello url. We can create our hello app by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"django-admin startapp hello\n")),(0,o.kt)("p",null,"We have to tell our Django project that we have a new app. Open\n",(0,o.kt)("inlineCode",{parentName:"p"},"myWebApp/settings.py")," and add hello to the ",(0,o.kt)("inlineCode",{parentName:"p"},"INSTALLED_APPS")," list. You will see\na number of default apps already registered there."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"INSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n\n    # my apps\n    'hello',\n]\n")),(0,o.kt)("p",null,"Create urls. It's like a table of content. We want to keep the urls of each app\nseparated. Create ",(0,o.kt)("inlineCode",{parentName:"p"},"hello/urls.py")," and include:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path('', views.hello, name='hello'),\n]\n")),(0,o.kt)("p",null,"Now we have to add the hello app urls in our main project. Open\n",(0,o.kt)("inlineCode",{parentName:"p"},"myWebApp/urls.py")," and add the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from django.contrib import admin\nfrom django.urls import path, include\n\nurlpatterns = [\n    path('admin/', admin.site.urls),\n    path('hello/', include('hello.urls'))\n]\n")),(0,o.kt)("p",null,"Next step is to create views. Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"hello/views.py")," and add following function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from django.shortcuts import render\n\ndef hello(request):\n    """hello page"""\n    return render(request, \'hello/index.html\')\n')),(0,o.kt)("p",null,"Final step is to create the index.html. We create\n",(0,o.kt)("inlineCode",{parentName:"p"},"hello/templates/hello/index.html")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<html>\n        <head>\n                <title>Hello django</title>\n        </head>\n        <body>\n                <h1>Hello Django!</h1>\n        </body>\n</html>\n")),(0,o.kt)("p",null,"Now we can run our django server :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"python3 manage.py runserver\n")),(0,o.kt)("p",null,"and visit <localhost:8000/hello> in our browser. This is our simplest hello app.\nNow let's say we want to greet a specific user by his/her name. We could create\nindividual user pages, or we can take the url argument and generate a page based\non that argument. We write the following view function (",(0,o.kt)("inlineCode",{parentName:"p"},"hello/views.py"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def greet(request, name):\n    """greet anyone"""\n    return render(request, \'hello/greet.html\', {\n        "name": name.capitalize()\n        })\n')),(0,o.kt)("p",null,"Create ",(0,o.kt)("inlineCode",{parentName:"p"},"hello/templates/hello/greet.html"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<html>\n        <head>\n                <title>Welcome</title>\n        </head>\n        <body>\n                <h1>Hello {{ name }}!</h1>\n        </body>\n</html>\n")),(0,o.kt)("p",null,"Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"hello/urls.py")," and include:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"path('/<str:name>', views.greet, name='greet'),\n")),(0,o.kt)("p",null,"Now we can ",(0,o.kt)("inlineCode",{parentName:"p"},"python3 manage.py runserver")," and visit an arbitrary url\n",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8000/hello/albert")),(0,o.kt)("p",null,"Learn more: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/"},"https://docs.djangoproject.com/")))}m.isMDXComponent=!0}}]);