"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[5262],{5680:(e,r,n)=>{n.d(r,{xA:()=>s,yg:()=>f});var t=n(6540);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=t.createContext({}),d=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=d(e.components);return t.createElement(u.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||o;return n?t.createElement(f,l(l({ref:r},s),{},{components:n})):t.createElement(f,l({ref:r},s))}));function f(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a[c]="string"==typeof e?e:i,l[1]=a;for(var d=2;d<o;d++)l[d]=n[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8542:(e,r,n)=>{n.r(r),n.d(r,{contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var t=n(8168),i=n(8587),o=(n(6540),n(5680));const l=["components"],a={title:"Atelier de programmation 1",sidebar_label:"1 - Bases"},u=void 0,d={unversionedId:"inf5111/Atelier/atelier1",id:"inf5111/Atelier/atelier1",isDocsHomePage:!1,title:"Atelier de programmation 1",description:"Allo, Monde!",source:"@site/docs/inf5111/Atelier/atelier1.md",sourceDirName:"inf5111/Atelier",slug:"/inf5111/Atelier/atelier1",permalink:"/site/docs/inf5111/Atelier/atelier1",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf5111/Atelier/atelier1.md",tags:[],version:"current",frontMatter:{title:"Atelier de programmation 1",sidebar_label:"1 - Bases"},sidebar:"INF5111Sidebar",next:{title:"2 - Outils BD",permalink:"/site/docs/inf5111/Atelier/atelier2"}},s=[{value:"Allo, Monde!",id:"allo-monde",children:[]},{value:"Horaire",id:"horaire",children:[{value:"Bonus",id:"bonus",children:[]}]},{value:"Double du nombre",id:"double-du-nombre",children:[]},{value:"Carr\xe9 du nombre",id:"carr\xe9-du-nombre",children:[]},{value:"Nom et pr\xe9nom",id:"nom-et-pr\xe9nom",children:[]},{value:"Multiplie deux nombres",id:"multiplie-deux-nombres",children:[]}],c={toc:s},p="wrapper";function m(e){let{components:r}=e,n=(0,i.A)(e,l);return(0,o.yg)(p,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"allo-monde"},"Allo, Monde!"),(0,o.yg)("p",null,'Affiche le message "Allo, monde!" dans la fen\xeatre de commande.'),(0,o.yg)("h2",{id:"horaire"},"Horaire"),(0,o.yg)("p",null,"Affiche l'horaire suivant dans le fen\xeatre de commande:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Horaire:\n7h00 \u2013 d\xe9jeuner\n12h00 \u2013 diner\n17h00 \u2013 souper\n")),(0,o.yg)("h3",{id:"bonus"},"Bonus"),(0,o.yg)("p",null,"Utilisez seulement qu'un seul appel \xe0 la fonction ",(0,o.yg)("inlineCode",{parentName:"p"},"print")," avec une utilisation de caract\xe8res d'\xe9chapement."),(0,o.yg)("h2",{id:"double-du-nombre"},"Double du nombre"),(0,o.yg)("p",null,"Demande \xe0 l\u2019utilisateur de saisir un nombre, le script affiche ensuite\nle double (multiplication par 2) du nombre. L'affichage prends la forme\n",(0,o.yg)("inlineCode",{parentName:"p"},"Double du nombre : NOMBRE"),"."),(0,o.yg)("h2",{id:"carr\xe9-du-nombre"},"Carr\xe9 du nombre"),(0,o.yg)("p",null,"Demande \xe0 l'utilisateur de saisir un nombre, le script affiche ensuite le\nnombre au carr\xe9 (multipli\xe9 par lui-m\xeame). L'affichage prends la forme\n",(0,o.yg)("inlineCode",{parentName:"p"},"Carr\xe9 du nombre : NOMBRE"),"."),(0,o.yg)("h2",{id:"nom-et-pr\xe9nom"},"Nom et pr\xe9nom"),(0,o.yg)("p",null,"Demande \xe0 l\u2019utilisateur de saisir le nom suivi du pr\xe9nom de l'utilisateur\n(avec deux saisis disctinctes). Le script affiche les message suivant\navec le nom et pr\xe9nom de l'utilisateur ",(0,o.yg)("inlineCode",{parentName:"p"},"Bonjour PRENOM NOM!"),"."),(0,o.yg)("h2",{id:"multiplie-deux-nombres"},"Multiplie deux nombres"),(0,o.yg)("p",null,"Demande \xe0 l'utilisateur de saisir deux nombres et affiche le produit des deux nombres. L'affichage prends la forme ",(0,o.yg)("inlineCode",{parentName:"p"},"NOMBRE1 x NOMBRE2 = PRODUIT"),"."))}m.isMDXComponent=!0}}]);