"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[5698],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return f}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),m=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=m(e.components);return t.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=m(r),c=a,f=p["".concat(u,".").concat(c)]||p[c]||d[c]||i;return r?t.createElement(f,l(l({ref:n},s),{},{components:r})):t.createElement(f,l({ref:n},s))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1139:function(e,n,r){r.r(n),r.d(n,{contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return s}});var t=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={title:"Programmes \xe0 faire de l'atelier 3",sidebar_label:"3 - Fonctions"},u=void 0,m={unversionedId:"inf1256/atelier/atelier3",id:"inf1256/atelier/atelier3",isDocsHomePage:!1,title:"Programmes \xe0 faire de l'atelier 3",description:"inverse_additif",source:"@site/docs/inf1256/atelier/atelier3.md",sourceDirName:"inf1256/atelier",slug:"/inf1256/atelier/atelier3",permalink:"/site/docs/inf1256/atelier/atelier3",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf1256/atelier/atelier3.md",tags:[],version:"current",frontMatter:{title:"Programmes \xe0 faire de l'atelier 3",sidebar_label:"3 - Fonctions"},sidebar:"INF1256Sidebar",previous:{title:"2 - If, While, For",permalink:"/site/docs/inf1256/atelier/atelier2"},next:{title:"4 - Listes et tuples",permalink:"/site/docs/inf1256/atelier/atelier4"}},s=[{value:"inverse_additif",id:"inverse_additif",children:[]},{value:"inverse_multiplicatif",id:"inverse_multiplicatif",children:[]},{value:"compteur_entre_borne",id:"compteur_entre_borne",children:[]},{value:"factoriel",id:"factoriel",children:[]},{value:"saisit_entre_borne",id:"saisit_entre_borne",children:[]},{value:"maximum_de_deux",id:"maximum_de_deux",children:[]},{value:"maximum_de_trois",id:"maximum_de_trois",children:[]},{value:"maximum_de_quatre",id:"maximum_de_quatre",children:[]},{value:"pgcd",id:"pgcd",children:[]},{value:"est_premier",id:"est_premier",children:[]},{value:"affiche_n_nombre_premier",id:"affiche_n_nombre_premier",children:[]},{value:"n_diviseur",id:"n_diviseur",children:[]}],p={toc:s},d="wrapper";function c(e){var n=e.components,r=(0,a.Z)(e,l);return(0,i.kt)(d,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"inverse_additif"},"inverse_additif"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"L'inverse additif d'un nombre.\nTrouve la valeur du nombre multipli\xe9 par -1.\n\nArgs:\n    nombre (float):  Le nombre \xe0 inverser.\nReturns:\n    float: L'inverse du nombre.\n")),(0,i.kt)("p",null,"Exemple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">> inverse_additif(45)\n    -45\n\n\n>> inverse_additif(-4.5)\n    4.5\n")),(0,i.kt)("h2",{id:"inverse_multiplicatif"},"inverse_multiplicatif"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"L'inverse multiplicatif.\n    Retourne la valeur \xe0 la puissance -1.\n\n    Args:\n      arg1 (float): La valeur dont on veut retourner l'inverse.\n    Returns:\n      float: L'inverse multiplicaitf de la valeur de d\xe9part.\n")),(0,i.kt)("p",null,"Exemple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">> inverse_multiplicatif(5)\n    0.2\n\n>> inverse_multiplicatif(0.25)\n    4\n\n")),(0,i.kt)("h2",{id:"compteur_entre_borne"},"compteur_entre_borne"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"La somme en entre un borne minimale et une borne maximale.\n\nEx : `debut + (debut+1) + ... + (fin-1) + fin`.\n\nArgs:\n    debut (float): La valeur de d\xe9part de la sommation \xe0 faire.\n    fin (float): La valeur de fin de la sommation \xe0 faire.\nReturns:\n    float: La somme du compteur entre les bornes donn\xe9es.\n")),(0,i.kt)("p",null,"Exemple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">> compteur_entre_borne(10, 13)\n    46\n\n>> compteur_entre_borne(0, 7)\n    28\n")),(0,i.kt)("h2",{id:"factoriel"},"factoriel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Factoriel de n. Retourne la somme multiplicative de 1 \xe0 n.\n\nArgs:\n    n (float): La valeur pour laquelle on souhaite calculer le factoriel.\nReturns:\n    float: La somme multiplicative factoriel du nombre.\n")),(0,i.kt)("p",null,"Exemple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">> factoriel(5)\n    120\n")),(0,i.kt)("h2",{id:"saisit_entre_borne"},"saisit_entre_borne"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Saisi une valeur et recommence tant que la saisit n'est pas \xe0\nl'int\xe9rieur de bornes donn\xe9es.\n\nArgs:\n    minimum (float): La borne inf\xe9rieure de l'intervalle de saisi.\n    maximum (float): La borne sup\xe9rieure de l'intervalle de saisi.\nReturns:\n    float: La valeur finalement saisit entre les bornes.\n")),(0,i.kt)("p",null,"Exemple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">> saisit_entre_borne(5, 10)\n    Veuillez entrer une valeur : 3\n    La valeur doit se situer entre 5 et 10.\n    Veuillez entrer une valeur : 12\n    La valeur doit se situer entre 5 et 10.\n    Veuillez entrer une valeur : 5\n        5\n")),(0,i.kt)("h2",{id:"maximum_de_deux"},"maximum_de_deux"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Le nombre maximum entre deux nombres.\n\nArgs:\n    nb1 (float): Premi\xe8re valeur a comparer.\n    nb2 (float): Seconde valeur a comparer.\nReturns:\n    float: La valeur maximum entre les deux nombres.\n")),(0,i.kt)("p",null,"Exemple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">> maximum_de_deux(3, 5)\n        5\n\n>> maximum_de_deux(34, 34)\n        34\n")),(0,i.kt)("h2",{id:"maximum_de_trois"},"maximum_de_trois"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Le nombre maximum entre trois nombres.\n\nArgs:\n    nb1 (float): Premi\xe8re valeur a comparer.\n    nb2 (float): Seconde valeur a comparer.\n    nb3 (float): Troisi\xe8me valeur \xe0 comparer.\nReturns:\n    float: La valeur maximum entre les trois nombres.\n")),(0,i.kt)("p",null,"Exemple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">> maximum_de_trois(3, 5, 2)\n        5\n\n>> maximum_de_trois(34, 34, 34)\n        34\n\n\n>> maximum_de_trois(34, 5, 34)\n        34\n")),(0,i.kt)("h2",{id:"maximum_de_quatre"},"maximum_de_quatre"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Le nombre maximum entre quatre nombres.\n\nArgs:\n    nb1 (float): Premi\xe8re valeur a comparer.\n    nb2 (float): Seconde valeur a comparer.\n    nb3 (float): Troisi\xe8me valeur \xe0 comparer.\n    nb4 (float): Quatri\xe8me valeur \xe0 comparer.\nReturns:\n    float: La valeur maximum entre les quatre nombres.\n")),(0,i.kt)("p",null,"Exemple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">> maximum_de_quatre(3, 5, 2, 1)\n        5\n\n>> maximum_de_quatre(34, 34, 34, 34)\n        34\n\n>> maximum_de_quatre(34, 5, 34, 45)\n        45\n")),(0,i.kt)("h2",{id:"pgcd"},"pgcd"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Le plus grand commun diviseur entre deux nombre. Utilise\nl'algorithme suivant pour y arriver:\n\n    tant que b dif\xe9rent de 0\n        si a plus grand que b alors\n            a := a - b\n        sinon\n            b := b - a\n        fin si\n    fin tant que\n    r\xe9sultat := a\n\nLe signe `:=` est une assignation en algorithmie.\n\nArgs:\n    a (float): Premi\xe8re valeur.\n    b (float): Deuxi\xe8me valeur.\nReturns:\n    float: Plus grand diviseur des deux nombres.\n")),(0,i.kt)("p",null,"Exemple :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">> pgcd(12, 30)\n        6\n\n>> pgcd(8, 4)\n        4\n")),(0,i.kt)("h2",{id:"est_premier"},"est_premier"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"D\xe9termine si le nombre est premier.\nRetourne `true` si le nombre est premier, `false` autrement.\n\nArgs:\n    n (float): Le nombre \xe0 tester.\nReturns:\n    float: `true` si le nombre est premier.\n")),(0,i.kt)("p",null,"Exemple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">> est_premier(4)\n    False\n\n>> est_premier(7)\n    True\n")),(0,i.kt)("h2",{id:"affiche_n_nombre_premier"},"affiche_n_nombre_premier"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Affiche les n nombres premiers dans la fen\xeatre de commande.\n\nArgs:\n    n (float): Le nombre de nombre premiers \xe0 afficher.\n")),(0,i.kt)("p",null,"Exemple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">> affiche_n_nombre_premier(4)\n    1 ieme nombre premier : 2.\n    2 ieme nombre premier : 3.\n    3 ieme nombre premier : 5.\n    4 ieme nombre premier : 7.\n")),(0,i.kt)("h2",{id:"n_diviseur"},"n_diviseur"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Le nombre de diviseurs de n.\n\nArgs:\n    n (float): Le nombre \xe0 tester.\nReturns:\n    float: Le nombre de diviseurs du nombre.\n")),(0,i.kt)("p",null,"Exemple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">> n_diviseur(45)\n        6\n\n\n>> n_diviseur(8)\n        4\n")))}c.isMDXComponent=!0}}]);