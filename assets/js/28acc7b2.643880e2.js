"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[860],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7763:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],u={title:"Programmes \xe0 faire pour le cours 1",sidebar_label:"1 - Bases"},s="Question 1",l={unversionedId:"b07/exercices/exercices1",id:"b07/exercices/exercices1",isDocsHomePage:!1,title:"Programmes \xe0 faire pour le cours 1",description:"Trois rois, Melik, Casik et Balik, sont assis autour d'une table, d\xe9battant qui a le plus grand royaume parmi eux. Chaque roi gouverne un assortiment de provinces, de duch\xe9s et de domaines. Collectivement, ils acceptent un syst\xe8me de points qui les aide \xe0 juger dont le royaume est le plus grand: chaque domaine vaut 1 point, chaque duch\xe9 vaut 3 points, et chaque province vaut 6 points. Ils ont juste besoin d'un programme qui leur permettra d'entrer leurs avoirs actuels et de calculer un total de points.",source:"@site/docs/b07/exercices/exercices1.md",sourceDirName:"b07/exercices",slug:"/b07/exercices/exercices1",permalink:"/site/docs/b07/exercices/exercices1",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/b07/exercices/exercices1.md",tags:[],version:"current",frontMatter:{title:"Programmes \xe0 faire pour le cours 1",sidebar_label:"1 - Bases"},sidebar:"B07Sidebar",previous:{title:"1 - Bases",permalink:"/site/docs/b07/cours/cours1"},next:{title:"Intro",permalink:"/site/docs/B07"}},c=[],p={toc:c};function d(e){var t=e.components,u=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"question-1"},"Question 1"),(0,a.kt)("p",null,"Trois rois, Melik, Casik et Balik, sont assis autour d'une table, d\xe9battant qui a le plus grand royaume parmi eux. Chaque roi gouverne un assortiment de provinces, de duch\xe9s et de domaines. Collectivement, ils acceptent un syst\xe8me de points qui les aide \xe0 juger dont le royaume est le plus grand: chaque domaine vaut 1 point, chaque duch\xe9 vaut 3 points, et chaque province vaut 6 points. Ils ont juste besoin d'un programme qui leur permettra d'entrer leurs avoirs actuels et de calculer un total de points."),(0,a.kt)("p",null,"Objectifs:\n*Cr\xe9ez un programme qui permet aux utilisateurs de saisir le nombre de provinces, de duch\xe9s et de domaines qu'ils ont."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Additionnez le score total de l\u2019utilisateur, donnant 1 point par domaine, 3 par duch\xe9 et 6 par province."),(0,a.kt)("li",{parentName:"ul"},"Affichez le total du point \xe0 l'utilisateur.")),(0,a.kt)("h1",{id:"question-2"},"Question 2"),(0,a.kt)("p",null,"Une grande horloge est endommag\xe9. Les citoyens en ont r\xe9par\xe9 la majeure partie, sauf une pi\xe8ce qui n\xe9cessite la main d'un programmeur. C'est la pi\xe8ce qui fait l'horloge faire tick et tock. Si le nombre est pair, le pendule de l'horloge doit faire tick; Si le nombre est impair, le pendule doitfaire tock. Seul un programmeur peut recr\xe9er cet \xe9l\xe9ment d'horloge critique pour le faire fonctionner \xe0 nouveau."),(0,a.kt)("p",null,"Objectifs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Saisir un nombre comme entr\xe9e de la console."),(0,a.kt)("li",{parentName:"ul"},"Affichez le mot \xabtick\xbb si le num\xe9ro est paire. Affichez le mot \xabtock\xbb si le nombre est impair."),(0,a.kt)("li",{parentName:"ul"},"Astuce: n'oubliez pas que vous pouvez utiliser l'op\xe9rateur reste pour d\xe9terminer si un nombre est uniforme ou impair.")),(0,a.kt)("h1",{id:"question-3"},"Question 3"),(0,a.kt)("p",null,"Nous devons d\xe9terminer la position d'un point dans un plan cart\xe9sien."),(0,a.kt)("p",null,"Le quadrant dans un plan cart\xe9sien sont les suivants :"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4814).Z})),(0,a.kt)("p",null,"Objectifs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Saisir une valeur de x et y de la console."),(0,a.kt)("li",{parentName:"ul"},"Afficher dans quel cadrant la valeur se tient entre I, II, III, IV.")),(0,a.kt)("h1",{id:"question-4"},"Question 4"),(0,a.kt)("p",null,"De nombreuses t\xe2ches n\xe9cessite d'obtenir un num\xe9ro d'un utilisateur. Pour gagner du temps, vous avez d\xe9cid\xe9 de faire une m\xe9thode pour faire cette t\xe2che commune.\nObjectifs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Faire une m\xe9thode avec la signature ",(0,a.kt)("inlineCode",{parentName:"li"},"int AskForNumber(string text)"),". Affichez le param\xe8tre de texte dans la fen\xeatre de la console, obtenez une r\xe9ponse de l'utilisateur, convertissez-la en un ",(0,a.kt)("inlineCode",{parentName:"li"},"int")," et renvoyez-la. ")),(0,a.kt)("p",null,"Exemple: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c#"},'int result = askForNumber ("Quelle est la vitesse de vitesse d\'une hirondelle \xe0 vide?");.\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Faire une m\xe9thode avec la signature ",(0,a.kt)("inlineCode",{parentName:"li"},"int AskForNumberRange(string text, int min, int max)"),". Renvoie uniquement si le nombre entr\xe9 se situe entre les valeurs min et max. Sinon, demandez \xe0 nouveau."),(0,a.kt)("li",{parentName:"ul"},"Placez ces m\xe9thodes dans au moins un de vos programmes pr\xe9c\xe9dents pour l'am\xe9liorer.")))}d.isMDXComponent=!0},4814:function(e,t,n){t.Z=n.p+"assets/images/plan-0f1bfac52b9562673e5d637146f1f56e.png"}}]);