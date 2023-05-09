"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[8744],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[p]="string"==typeof e?e:i,l[1]=u;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8577:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],u={title:"Chaines de caract\xe8res, tris et fouilles",sidebar_label:"5 - Chaines, tris et fouilles"},o=void 0,s={unversionedId:"inf135/cours/cours5",id:"inf135/cours/cours5",isDocsHomePage:!1,title:"Chaines de caract\xe8res, tris et fouilles",description:"Objectifs de la semaine",source:"@site/docs/inf135/cours/cours5.md",sourceDirName:"inf135/cours",slug:"/inf135/cours/cours5",permalink:"/site/docs/inf135/cours/cours5",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf135/cours/cours5.md",tags:[],version:"current",frontMatter:{title:"Chaines de caract\xe8res, tris et fouilles",sidebar_label:"5 - Chaines, tris et fouilles"},sidebar:"INF135Sidebar",previous:{title:"4 - Chemin, validation, tableaux",permalink:"/site/docs/inf135/cours/cours4"},next:{title:"6 - Matrice",permalink:"/site/docs/inf135/cours/cours6"}},c=[{value:"Objectifs de la semaine",id:"objectifs-de-la-semaine",children:[]},{value:"Exercice",id:"exercice",children:[]},{value:"Chaine de caract\xe8res",id:"chaine-de-caract\xe8res",children:[]},{value:"Fonctions des chaines",id:"fonctions-des-chaines",children:[]},{value:"Exercice",id:"exercice-1",children:[]},{value:"Tris",id:"tris",children:[]},{value:"Fouilles",id:"fouilles",children:[]}],p={toc:c},d="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"objectifs-de-la-semaine"},"Objectifs de la semaine"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chaine de caract\xe8res",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Fonctions de chaines"))),(0,a.kt)("li",{parentName:"ul"},"Tris"),(0,a.kt)("li",{parentName:"ul"},"Fouilles")),(0,a.kt)("h2",{id:"exercice"},"Exercice"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xc9crivez une fonction qui re\xe7oit un tableau et trouve la somme en alternant addition et soustraction de chaque \xe9l\xe9ment. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">> sumAddSub([2 5 2])\n    ans =\n      -1\n")),(0,a.kt)("h2",{id:"chaine-de-caract\xe8res"},"Chaine de caract\xe8res"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"La chaine est repr\xe9sent\xe9e dans MATLAB par des d\xe9limiteurs de guillemet simple;")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"chaine = 'Allo la classe'\nnom = 'Hugo'\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Chaque caract\xe8re de la chaine est encod\xe9 selon un table de conversion. La table la plus commune est la table ASCII;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"La suite de caract\xe8res forme un tableau. Les chaines sont donc des tableaux, comme toutes autres variables de MATLAB.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Il existe plusieurs fonctions qui permettent de faire les manipulations communes des chaines."))),(0,a.kt)("h2",{id:"fonctions-des-chaines"},"Fonctions des chaines"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"double")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"char")," : Converti d'un type \xe0 l'autre;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str2num")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"num2str")," : Convertie d'une chaine repr\xe9sentant un nombre \xe0 la valeur num\xe9rique;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"strcmp")," : Compare deux chaines;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"upper")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"lower")," : Modifie les lettres majuscules/minuscules;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"strfind")," : Recherche de patrons de caract\xe8res dans une chaine;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"strtok")," : Coupe une partie de la chaine.")),(0,a.kt)("h2",{id:"exercice-1"},"Exercice"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xc9crivez trois fonctions qui :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Trouve le nombre d'un caract\xe8re sp\xe9cifique dans une chaine;"),(0,a.kt)("li",{parentName:"ul"},"Enl\xe8ve tous les espaces d\u2019une chaine;"),(0,a.kt)("li",{parentName:"ul"},"Enl\xe8ve tous les espaces \xe0 gauche d\u2019une chaine.")))),(0,a.kt)("h2",{id:"tris"},"Tris"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Les tris ordonnent un tableau non ordonn\xe9;"),(0,a.kt)("li",{parentName:"ul"},"Il existe plusieurs m\xe9thodes de tris :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Tri par s\xe9lection;"),(0,a.kt)("li",{parentName:"ul"},"Tri par insertion;"),(0,a.kt)("li",{parentName:"ul"},"Tri \xe0 bulle;"),(0,a.kt)("li",{parentName:"ul"},"Quicksort;"),(0,a.kt)("li",{parentName:"ul"},"Et bien d'autres."))),(0,a.kt)("li",{parentName:"ul"},"Dans MATLAB, pour faire un tri, nous utiliserons la fonction ",(0,a.kt)("inlineCode",{parentName:"li"},"sort"),".")),(0,a.kt)("h2",{id:"fouilles"},"Fouilles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Les fouilles trouvent un \xe9l\xe9ment dans un tableau;"),(0,a.kt)("li",{parentName:"ul"},"Deux types de fouilles sont possibles:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Lin\xe9aire;"),(0,a.kt)("li",{parentName:"ul"},"Binaire (sur tableau tri\xe9)."))),(0,a.kt)("li",{parentName:"ul"},"Dans MATLAB, la fonction ",(0,a.kt)("inlineCode",{parentName:"li"},"find")," permets de faire des fouilles.")))}m.isMDXComponent=!0}}]);