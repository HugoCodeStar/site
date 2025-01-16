"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[8004],{5680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>g});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),a=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=a(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=a(t),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return t?n.createElement(g,i(i({ref:r},c),{},{components:t})):n.createElement(g,i({ref:r},c))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=m;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var a=2;a<s;a++)i[a]=t[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9507:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>l,default:()=>m,frontMatter:()=>u,metadata:()=>a,toc:()=>c});var n=t(8168),o=t(8587),s=(t(6540),t(5680));const i=["components"],u={title:"Programmes \xe0 faire pour le cours 2",sidebar_label:"2 - Orient\xe9-objet",sidebar_position:2},l=void 0,a={unversionedId:"b07/exercices/exercices2",id:"b07/exercices/exercices2",isDocsHomePage:!1,title:"Programmes \xe0 faire pour le cours 2",description:"Question 1",source:"@site/docs/b07/exercices/exercices2.md",sourceDirName:"b07/exercices",slug:"/b07/exercices/exercices2",permalink:"/site/docs/b07/exercices/exercices2",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/b07/exercices/exercices2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Programmes \xe0 faire pour le cours 2",sidebar_label:"2 - Orient\xe9-objet",sidebar_position:2},sidebar:"B07Sidebar",previous:{title:"1 - Bases",permalink:"/site/docs/b07/exercices/exercices1"},next:{title:"3 - Properties",permalink:"/site/docs/b07/exercices/exercices3"}},c=[{value:"Question 1",id:"question-1",children:[]},{value:"Question 2",id:"question-2",children:[]},{value:"Question 3",id:"question-3",children:[]},{value:"Question 4",id:"question-4",children:[]}],p={toc:c},d="wrapper";function m(e){let{components:r}=e,u=(0,o.A)(e,i);return(0,s.yg)(d,(0,n.A)({},p,u,{components:r,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"question-1"},"Question 1"),(0,s.yg)("p",null,"Nous voulons simuler une coffre qui s'ouvre, se ferme et se barre. Nous voulons \xeatre en mesure d'aller entre ces \xe9tats, d'ouvrir, de fermer, de verrouiller et de d\xe9verrouiller le coffre. Vous devez cr\xe9er un programme avec une \xe9num\xe9ration pour recr\xe9er ce m\xe9canisme de verrouillage. L'image ci-dessous montre comment vous pouvez vous d\xe9placer entre les trois \xe9tats:"),(0,s.yg)("p",null,(0,s.yg)("img",{src:t(4592).A})),(0,s.yg)("p",null,"Rien ne se passe si vous essayez une action impossible \xe0 l'\xe9tat actuel, comme ouvrir un coffre verrouill\xe9e.\nLe programme ci-dessous montre \xe0 quoi pourrait ressembler cette utilisation:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"The chest is locked. What do you want to do? unlock \nThe chest is unlocked. What do you want to do? open \nThe chest is open. What do you want to do? close \nThe chest is unlocked. What do you want to do?\n")),(0,s.yg)("p",null,"Objectifs:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"D\xe9finissez une \xe9num\xe9ration pour l'\xe9tat de la coffre."),(0,s.yg)("li",{parentName:"ul"},"Faire une variable dont le type est cette nouvelle \xe9num\xe9ration."),(0,s.yg)("li",{parentName:"ul"},"\xc9crivez du code pour vous permettre de manipuler le coffre avec le verrou, d\xe9verrouiller, ouvrir et fermer les commandes, mais assurez-vous de ne pas passer entre les \xe9tats qui ne le soutiennent pas."),(0,s.yg)("li",{parentName:"ul"},"Loop pour toujours, en demandant la commande suivante.")),(0,s.yg)("h2",{id:"question-2"},"Question 2"),(0,s.yg)("p",null,"Nous voullons cr\xe9\xe9 un programme qui permet de combin\xe9 des ingr\xe9dients pour cr\xe9\xe9 des plats. Par contre, les ingr\xe9dients sont limit\xe9s d'une liste pr\xe9-\xe9tablie."),(0,s.yg)("p",null,"Objectifs:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"D\xe9finir les \xe9num\xe9rations pour les trois variations de la nourriture: type (soupe, rago\xfbt, gombo), ingr\xe9dient principal (champignons, poulet, carottes, pommes de terre) et assaisonnement (\xe9pic\xe9, sal\xe9, sucr\xe9)."),(0,s.yg)("li",{parentName:"ul"},"Faites une variable tuple pour repr\xe9senter une soupe compos\xe9e des trois types d'\xe9num\xe9ration ci-dessus."),(0,s.yg)("li",{parentName:"ul"},"Laissez l'utilisateur choisir un type, l'ingr\xe9dient principal et l'assaisonnement \xe0 partir des choix autoris\xe9s et remplir le tuple des r\xe9sultats. ",(0,s.yg)("strong",{parentName:"li"},"Astuce"),": vous pouvez donner \xe0 l'utilisateur un menu \xe0 choisir ou simplement comparer l'entr\xe9e de texte de l'utilisateur \xe0 des cha\xeenes sp\xe9cifiques pour d\xe9terminer quelle valeur d'\xe9num\xe9ration repr\xe9sente son choix."),(0,s.yg)("li",{parentName:"ul"},"Une fois termin\xe9, affichez le contenu de la variable de tuple de soupe dans un format comme \xabGumbo de poulet sucr\xe9\xbb. ",(0,s.yg)("strong",{parentName:"li"},"Astuce"),": vous n'avez pas besoin de convertir la valeur d'\xe9num\xe9ration en une cha\xeene. L'affichage simplement d'une valeur d'\xe9num\xe9ration avec Write ou Writeline affichera le nom de la valeur d'\xe9num\xe9ration.)")),(0,s.yg)("h2",{id:"question-3"},"Question 3"),(0,s.yg)("p",null,"Nous voullons cr\xe9er une classe qui repr\xe9sente les fl\xe8ches d'une arc. Les caract\xe9ristiques des fl\xe8ches sont les suivantes :"),(0,s.yg)("p",null,"Chaque fl\xe8che a trois parties: la pointe de fl\xe8che (acier, bois ou obsidien), l'arbre (une longueur comprise entre 60 et 100 cm de long) et la poign\xe9e (plastique, plumes de dinde ou plumes d'oie)."),(0,s.yg)("p",null,"Les co\xfbts associ\xe9s sont les suivants: pour les pointes de fl\xe8ches, l'acier co\xfbte 10 or, le bois co\xfbte 3 or et l'obsidienne co\xfbte 5 or. Pour les poign\xe9e, le plastique co\xfbte 10 or, les plumes de dinde co\xfbtent 5 or et les plumes d'oie co\xfbtent 3 or. Pour l'arbre, le prix d\xe9pend de la longueur: 0,05 or pour centim\xe8tre."),(0,s.yg)("p",null,"Objectifs:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"D\xe9finissez une nouvelle classe de fl\xe8ches avec des champs pour le type de pointe de fl\xe8che, le type de poign\xe9e et la longueur. (Indice:\nLes types de pointes de fl\xe8ches et les types de poign\xe9e peuvent \xeatre de bonnes \xe9num\xe9rations.)"),(0,s.yg)("li",{parentName:"ul"},"Permettez \xe0 un utilisateur de choisir la pointe de fl\xe8che, le type de poign\xe9e et la longueur, puis cr\xe9er une nouvelle instance de fl\xe8che."),(0,s.yg)("li",{parentName:"ul"},"Ajoutez une m\xe9thode GetCost qui renvoie son co\xfbt en tant que flotteur en fonction des num\xe9ros ci-dessus, et utilisez-le pour afficher le co\xfbt de la fl\xe8che.")),(0,s.yg)("h2",{id:"question-4"},"Question 4"),(0,s.yg)("p",null,"Nous voulons s\xe9curis\xe9 la classe faite \xe0 la question pr\xe9c\xe9dente avec des meilleurs modificateurs d'acc\xe8s."),(0,s.yg)("p",null,"Objectifs:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Modifiez votre classe Arrow pour avoir priv\xe9 au lieu de domaines publics."),(0,s.yg)("li",{parentName:"ul"},"Ajoutez des m\xe9thodes Getter pour chacun des champs dont vous disposez.")))}m.isMDXComponent=!0},4592:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/boite-7dc3e747e2161c3c5001497e641e1119.png"}}]);