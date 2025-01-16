"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[9983],{5680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>y});var t=r(6540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),o=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=o(e.components);return t.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=o(r),m=a,y=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?t.createElement(y,l(l({ref:n},c),{},{components:r})):t.createElement(y,l({ref:n},c))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=r[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1783:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=r(8168),a=r(8587),i=(r(6540),r(5680));const l=["components"],s={title:"Chaines de caract\xe8res, tris et fouilles",sidebar_label:"5 - Chaines, tris et fouilles"},u=void 0,o={unversionedId:"inf135/cours/cours5",id:"inf135/cours/cours5",isDocsHomePage:!1,title:"Chaines de caract\xe8res, tris et fouilles",description:"Objectifs de la semaine",source:"@site/docs/inf135/cours/cours5.md",sourceDirName:"inf135/cours",slug:"/inf135/cours/cours5",permalink:"/site/docs/inf135/cours/cours5",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf135/cours/cours5.md",tags:[],version:"current",frontMatter:{title:"Chaines de caract\xe8res, tris et fouilles",sidebar_label:"5 - Chaines, tris et fouilles"},sidebar:"INF135Sidebar",previous:{title:"4 - Chemin, validation, tableaux",permalink:"/site/docs/inf135/cours/cours4"},next:{title:"6 - Matrice",permalink:"/site/docs/inf135/cours/cours6"}},c=[{value:"Objectifs de la semaine",id:"objectifs-de-la-semaine",children:[]},{value:"Exercice",id:"exercice",children:[]},{value:"Chaine de caract\xe8res",id:"chaine-de-caract\xe8res",children:[]},{value:"Fonctions des chaines",id:"fonctions-des-chaines",children:[]},{value:"Exercice",id:"exercice-1",children:[]},{value:"Tris",id:"tris",children:[]},{value:"Fouilles",id:"fouilles",children:[]}],p={toc:c},d="wrapper";function m(e){let{components:n}=e,r=(0,a.A)(e,l);return(0,i.yg)(d,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"objectifs-de-la-semaine"},"Objectifs de la semaine"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Chaine de caract\xe8res",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Fonctions de chaines"))),(0,i.yg)("li",{parentName:"ul"},"Tris"),(0,i.yg)("li",{parentName:"ul"},"Fouilles")),(0,i.yg)("h2",{id:"exercice"},"Exercice"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\xc9crivez une fonction qui re\xe7oit un tableau et trouve la somme en alternant addition et soustraction de chaque \xe9l\xe9ment. ")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},">> sumAddSub([2 5 2])\n    ans =\n      -1\n")),(0,i.yg)("h2",{id:"chaine-de-caract\xe8res"},"Chaine de caract\xe8res"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"La chaine est repr\xe9sent\xe9e dans MATLAB par des d\xe9limiteurs de guillemet simple;")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"chaine = 'Allo la classe'\nnom = 'Hugo'\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Chaque caract\xe8re de la chaine est encod\xe9 selon un table de conversion. La table la plus commune est la table ASCII;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"La suite de caract\xe8res forme un tableau. Les chaines sont donc des tableaux, comme toutes autres variables de MATLAB.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Il existe plusieurs fonctions qui permettent de faire les manipulations communes des chaines."))),(0,i.yg)("h2",{id:"fonctions-des-chaines"},"Fonctions des chaines"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"double")," / ",(0,i.yg)("inlineCode",{parentName:"li"},"char")," : Converti d'un type \xe0 l'autre;"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"str2num")," / ",(0,i.yg)("inlineCode",{parentName:"li"},"num2str")," : Convertie d'une chaine repr\xe9sentant un nombre \xe0 la valeur num\xe9rique;"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"strcmp")," : Compare deux chaines;"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"upper")," / ",(0,i.yg)("inlineCode",{parentName:"li"},"lower")," : Modifie les lettres majuscules/minuscules;"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"strfind")," : Recherche de patrons de caract\xe8res dans une chaine;"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"strtok")," : Coupe une partie de la chaine.")),(0,i.yg)("h2",{id:"exercice-1"},"Exercice"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\xc9crivez trois fonctions qui :",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Trouve le nombre d'un caract\xe8re sp\xe9cifique dans une chaine;"),(0,i.yg)("li",{parentName:"ul"},"Enl\xe8ve tous les espaces d\u2019une chaine;"),(0,i.yg)("li",{parentName:"ul"},"Enl\xe8ve tous les espaces \xe0 gauche d\u2019une chaine.")))),(0,i.yg)("h2",{id:"tris"},"Tris"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Les tris ordonnent un tableau non ordonn\xe9;"),(0,i.yg)("li",{parentName:"ul"},"Il existe plusieurs m\xe9thodes de tris :",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Tri par s\xe9lection;"),(0,i.yg)("li",{parentName:"ul"},"Tri par insertion;"),(0,i.yg)("li",{parentName:"ul"},"Tri \xe0 bulle;"),(0,i.yg)("li",{parentName:"ul"},"Quicksort;"),(0,i.yg)("li",{parentName:"ul"},"Et bien d'autres."))),(0,i.yg)("li",{parentName:"ul"},"Dans MATLAB, pour faire un tri, nous utiliserons la fonction ",(0,i.yg)("inlineCode",{parentName:"li"},"sort"),".")),(0,i.yg)("h2",{id:"fouilles"},"Fouilles"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Les fouilles trouvent un \xe9l\xe9ment dans un tableau;"),(0,i.yg)("li",{parentName:"ul"},"Deux types de fouilles sont possibles:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Lin\xe9aire;"),(0,i.yg)("li",{parentName:"ul"},"Binaire (sur tableau tri\xe9)."))),(0,i.yg)("li",{parentName:"ul"},"Dans MATLAB, la fonction ",(0,i.yg)("inlineCode",{parentName:"li"},"find")," permets de faire des fouilles.")))}m.isMDXComponent=!0}}]);