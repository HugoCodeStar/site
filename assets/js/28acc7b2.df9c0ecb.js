"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[860],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7763:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],u={title:"Programmes \xe0 faire pour le cours 1",sidebar_label:"1 - Bases"},s="Question 1",l={unversionedId:"b07/exercices/exercices1",id:"b07/exercices/exercices1",isDocsHomePage:!1,title:"Programmes \xe0 faire pour le cours 1",description:"Trois rois, Melik, Casik et Balik, sont assis autour d'une table, d\xe9battant qui a le plus grand royaume parmi eux. Chaque roi gouverne un assortiment de provinces, de duch\xe9s et de domaines. Collectivement, ils acceptent un syst\xe8me de points qui les aide \xe0 juger dont le royaume est le plus grand: chaque domaine vaut 1 point, chaque duch\xe9 vaut 3 points, et chaque province vaut 6 points. Ils ont juste besoin d'un programme qui leur permettra d'entrer leurs avoirs actuels et de calculer un total de points.",source:"@site/docs/b07/exercices/exercices1.md",sourceDirName:"b07/exercices",slug:"/b07/exercices/exercices1",permalink:"/site/docs/b07/exercices/exercices1",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/b07/exercices/exercices1.md",tags:[],version:"current",frontMatter:{title:"Programmes \xe0 faire pour le cours 1",sidebar_label:"1 - Bases"},sidebar:"B07Sidebar",previous:{title:"3 - Props & Static",permalink:"/site/docs/b07/cours/cours3"},next:{title:"2 - Orient\xe9-objet",permalink:"/site/docs/b07/exercices/exercices2"}},c=[],p={toc:c};function d(e){var t=e.components,u=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"question-1"},"Question 1"),(0,a.kt)("p",null,"Trois rois, Melik, Casik et Balik, sont assis autour d'une table, d\xe9battant qui a le plus grand royaume parmi eux. Chaque roi gouverne un assortiment de provinces, de duch\xe9s et de domaines. Collectivement, ils acceptent un syst\xe8me de points qui les aide \xe0 juger dont le royaume est le plus grand: chaque domaine vaut 1 point, chaque duch\xe9 vaut 3 points, et chaque province vaut 6 points. Ils ont juste besoin d'un programme qui leur permettra d'entrer leurs avoirs actuels et de calculer un total de points."),(0,a.kt)("p",null,"Objectifs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cr\xe9ez un programme qui permet aux utilisateurs de saisir le nombre de provinces, de duch\xe9s et de domaines qu'ils ont."),(0,a.kt)("li",{parentName:"ul"},"Additionnez le score total de l\u2019utilisateur, donnant 1 point par domaine, 3 par duch\xe9 et 6 par province."),(0,a.kt)("li",{parentName:"ul"},"Affichez le total du point \xe0 l'utilisateur.")),(0,a.kt)("h1",{id:"question-2"},"Question 2"),(0,a.kt)("p",null,"Une grande horloge est endommag\xe9. Les citoyens en ont r\xe9par\xe9 la majeure partie, sauf une pi\xe8ce qui n\xe9cessite la main d'un programmeur. C'est la pi\xe8ce qui fait l'horloge faire tick et tock. Si le nombre est pair, le pendule de l'horloge doit faire tick; Si le nombre est impair, le pendule doitfaire tock. Seul un programmeur peut recr\xe9er cet \xe9l\xe9ment d'horloge critique pour le faire fonctionner \xe0 nouveau."),(0,a.kt)("p",null,"Objectifs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Saisir un nombre comme entr\xe9e de la console."),(0,a.kt)("li",{parentName:"ul"},"Affichez le mot \xabtick\xbb si le num\xe9ro est paire. Affichez le mot \xabtock\xbb si le nombre est impair."),(0,a.kt)("li",{parentName:"ul"},"Astuce: n'oubliez pas que vous pouvez utiliser l'op\xe9rateur reste pour d\xe9terminer si un nombre est pair ou impair.")),(0,a.kt)("h1",{id:"question-3"},"Question 3"),(0,a.kt)("p",null,"Nous devons d\xe9terminer la position d'un point dans un plan cart\xe9sien."),(0,a.kt)("p",null,"Le quadrant dans un plan cart\xe9sien sont les suivants :"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4814).Z})),(0,a.kt)("p",null,"Objectifs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Saisir une valeur de x et y de la console."),(0,a.kt)("li",{parentName:"ul"},"Afficher dans quel cadrant la valeur se tient entre I, II, III, IV.")),(0,a.kt)("h1",{id:"question-4"},"Question 4"),(0,a.kt)("p",null,"De nombreuses t\xe2ches n\xe9cessite d'obtenir un num\xe9ro d'un utilisateur. Pour gagner du temps, vous avez d\xe9cid\xe9 de faire une m\xe9thode pour faire cette t\xe2che commune.\nObjectifs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Faire une m\xe9thode avec la signature ",(0,a.kt)("inlineCode",{parentName:"li"},"int AskForNumber(string text)"),". Affichez le param\xe8tre de texte dans la fen\xeatre de la console, obtenez une r\xe9ponse de l'utilisateur, convertissez-la en un ",(0,a.kt)("inlineCode",{parentName:"li"},"int")," et renvoyez-la. ")),(0,a.kt)("p",null,"Exemple: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c#"},'int result = askForNumber ("Quelle est la vitesse de vitesse d\'une hirondelle \xe0 vide?");.\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Faire une m\xe9thode avec la signature ",(0,a.kt)("inlineCode",{parentName:"li"},"int AskForNumberRange(string text, int min, int max)"),". Renvoie uniquement si le nombre entr\xe9 se situe entre les valeurs min et max. Sinon, demandez \xe0 nouveau."),(0,a.kt)("li",{parentName:"ul"},"Placez ces m\xe9thodes dans au moins un de vos programmes pr\xe9c\xe9dents pour l'am\xe9liorer.")))}d.isMDXComponent=!0},4814:function(e,t,r){t.Z=r.p+"assets/images/plan-0f1bfac52b9562673e5d637146f1f56e.png"}}]);