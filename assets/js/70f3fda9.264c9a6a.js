"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[4978],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||c;return t?n.createElement(f,o(o({ref:r},l),{},{components:t})):n.createElement(f,o({ref:r},l))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var c=t.length,o=new Array(c);o[0]=m;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var u=2;u<c;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},42:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l}});var n=t(7462),i=t(3366),c=(t(7294),t(3905)),o=["components"],a={title:"Programmes \xe0 faire pour le cours 7",sidebar_label:"7 - Exception",sidebar_position:7},s=void 0,u={unversionedId:"b07/exercices/exercices7",id:"b07/exercices/exercices7",isDocsHomePage:!1,title:"Programmes \xe0 faire pour le cours 7",description:"Exercice 1",source:"@site/docs/b07/exercices/exercices7.md",sourceDirName:"b07/exercices",slug:"/b07/exercices/exercices7",permalink:"/site/docs/b07/exercices/exercices7",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/b07/exercices/exercices7.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Programmes \xe0 faire pour le cours 7",sidebar_label:"7 - Exception",sidebar_position:7},sidebar:"B07Sidebar",previous:{title:"6 - Interface",permalink:"/site/docs/b07/exercices/exercices6"},next:{title:"8 - LINQ",permalink:"/site/docs/b07/exercices/exercices8"}},l=[{value:"Exercice 1",id:"exercice-1",children:[]},{value:"Exercice 2",id:"exercice-2",children:[]},{value:"Exercice 3",id:"exercice-3",children:[]}],p={toc:l},d="wrapper";function m(e){var r=e.components,t=(0,i.Z)(e,o);return(0,c.kt)(d,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"exercice-1"},"Exercice 1"),(0,c.kt)("p",null,"\xc9crivez un programme d'un petit jeu de d\xe9tection de nombre. Le progamme commence par choisir un nombre al\xe9atoire en 0 et 100. Vous avez ensuite 10 essais pour tenter de trouver le nombre choisi par le programme. Pour chaque tentative, faite la saisie du nombre et indiquer si le nombre \xe0 trouver est plus grand ou plus petit que le nombre saisie."),(0,c.kt)("h2",{id:"exercice-2"},"Exercice 2"),(0,c.kt)("p",null,"Vous avez deux fermes qui veulent cr\xe9\xe9 des classes pour repr\xe9sent\xe9 des animaux."),(0,c.kt)("p",null,"La ferme Bonenfant veut des classes pour les animaux suivants:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Pig"),(0,c.kt)("li",{parentName:"ul"},"Sheep")),(0,c.kt)("p",null,"La ferme Jolicoeur veut des classes pour les animaux suivants:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Cow"),(0,c.kt)("li",{parentName:"ul"},"Pig")),(0,c.kt)("p",null,"Vous devez cr\xe9\xe9 les 4 classes demand\xe9. Puisque les deux fermes ont une classe conflictuelle (Pig), on veut s\xe9par\xe9 les deux fermes dans des namespace distinct. \xc9crivez ensuite un programme principale qui cr\xe9\xe9 un objet de chacune des 4 classes demand\xe9 et v\xe9rifi\xe9 qu'il n'y a pas de conflit de nom."),(0,c.kt)("h2",{id:"exercice-3"},"Exercice 3"),(0,c.kt)("p",null,"Modifiez le programme de l'exercice 1 pour ajouter la gestion de l'exception dans le cas ou l'utilisateur fait la saisie d'une valeur qui n'est pas un nombre. Si on entre une valeur non conforme, on indique que la saisie et invalide et on recommence la saisie. Une saisie invalide ne doit pas compter dans les 10 essaies possible pour trouver le nombre du programme."))}m.isMDXComponent=!0}}]);