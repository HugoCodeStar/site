"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[1457],{5680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>g});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,g=m["".concat(s,".").concat(c)]||m[c]||p[c]||i;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6981:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=a(8168),r=a(8587),i=(a(6540),a(5680));const l=["components"],o={title:"Programmes \xe0 faire de l'atelier 6",sidebar_label:"9 - POO"},s=void 0,u={unversionedId:"inf1035/Atelier/atelier9",id:"inf1035/Atelier/atelier9",isDocsHomePage:!1,title:"Programmes \xe0 faire de l'atelier 6",description:"Pet",source:"@site/docs/inf1035/Atelier/atelier9.md",sourceDirName:"inf1035/Atelier",slug:"/inf1035/Atelier/atelier9",permalink:"/site/docs/inf1035/Atelier/atelier9",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf1035/Atelier/atelier9.md",tags:[],version:"current",frontMatter:{title:"Programmes \xe0 faire de l'atelier 6",sidebar_label:"9 - POO"},sidebar:"INF1035Sidebar",previous:{title:"Fr\xe9quences de nombres al\xe9atoires",permalink:"/site/docs/inf1035/Atelier/atelier7"},next:{title:"1 - Bases",permalink:"/site/docs/inf1035/Cours/cours1"}},d=[{value:"Pet",id:"pet",children:[]},{value:"Car",id:"car",children:[]}],m={toc:d},p="wrapper";function c(e){let{components:t}=e,a=(0,r.A)(e,l);return(0,i.yg)(p,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"pet"},"Pet"),(0,i.yg)("p",null,"\xc9crivez une classe nomm\xe9e Pet, qui doit avoir les attributs de donn\xe9es suivants:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"__name")," (pour le nom d'un animal domestique)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"__animal_type")," (pour le type d\u2019animal qu\u2019un animal de compagnie est. Les exemples de valeurs sont \xabChien\xbb, \xabChat\xbb,\net \xabOiseau\xbb)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"__age")," (pour l'\xe2ge de l'animal)\nLa classe Pet doit avoir une m\xe9thode ",(0,i.yg)("inlineCode",{parentName:"li"},"__init__")," qui cr\xe9e ces attributs. Il devrait \xe9galement avoir les m\xe9thodes suivantes:"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"set_name"),"\nCette m\xe9thode affecte une valeur au champ ",(0,i.yg)("inlineCode",{parentName:"li"},"__name"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"set_animal_type"),"\nCette m\xe9thode affecte une valeur au champ ",(0,i.yg)("inlineCode",{parentName:"li"},"__animal_type"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"set_age"),"\nCette m\xe9thode affecte une valeur au champ ",(0,i.yg)("inlineCode",{parentName:"li"},"__age"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"get_name"),"\nCette m\xe9thode renvoie la valeur du champ de ",(0,i.yg)("inlineCode",{parentName:"li"},"__name"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"get_animal_type"),"\nCette m\xe9thode renvoie la valeur du champ ",(0,i.yg)("inlineCode",{parentName:"li"},"__animal_type"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"get_age"),"\nCette m\xe9thode renvoie la valeur du champ ",(0,i.yg)("inlineCode",{parentName:"li"},"__age"),".")),(0,i.yg)("p",null,"Une fois que vous avez \xe9crit la classe, \xe9crivez un programme qui cr\xe9e un objet de la classe et invite l'utilisateur \xe0 entrer le nom, le type et l'\xe2ge de son animal de compagnie. Ces donn\xe9es doivent \xeatre stock\xe9es en tant qu'attributs de l'objet. Utilisez les m\xe9thodes d'acc\xe8s de l'objet pour r\xe9cup\xe9rer le nom, le type et l'\xe2ge de l'animal et afficher ces donn\xe9es \xe0 l'\xe9cran."),(0,i.yg)("h2",{id:"car"},"Car"),(0,i.yg)("p",null,"\xc9crivez une classe nomm\xe9e Car qui poss\xe8de les attributs de donn\xe9es suivants:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"__year_model")," (pour le mod\xe8le de l'ann\xe9e de la voiture)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"__make")," (pour la marque de la voiture)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"__speed")," (pour la vitesse actuelle de la voiture)\nLa classe Car doit avoir une m\xe9thode ",(0,i.yg)("strong",{parentName:"li"},"init")," qui accepte le mod\xe8le d\u2019ann\xe9e de la voiture et qui l\u2019utilise comme arguments. Ces valeurs doivent \xeatre affect\xe9es aux attributs de donn\xe9es ",(0,i.yg)("inlineCode",{parentName:"li"},"__year_model")," et ",(0,i.yg)("inlineCode",{parentName:"li"},"__make")," de l'objet. Il doit \xe9galement affecter 0 \xe0 l'attribut de donn\xe9es ",(0,i.yg)("inlineCode",{parentName:"li"},"__speed"),".\nLa classe doit \xe9galement avoir les m\xe9thodes suivantes:"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"accelerate"),"\nLa m\xe9thode d'acc\xe9l\xe9ration doit ajouter 5 \xe0 l'attribut de donn\xe9es de vitesse chaque fois qu'elle est appel\xe9e."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"brake"),"\nLa m\xe9thode de freinage doit soustraire 5 de l'attribut de donn\xe9es de vitesse chaque fois qu'elle est appel\xe9e."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"get_speed"),"\nLa m\xe9thode ",(0,i.yg)("inlineCode",{parentName:"li"},"get_speed")," doit renvoyer la vitesse actuelle.")),(0,i.yg)("p",null,"Ensuite, concevez un programme qui cr\xe9e un objet Car, puis appelle la m\xe9thode d'acc\xe9l\xe9ration cinq fois. Apr\xe8s chaque appel \xe0 la m\xe9thode d'acc\xe9l\xe9ration, obtenez la vitesse actuelle de la voiture et affichez-la. Appelez ensuite la m\xe9thode de freinage cinq fois. Apr\xe8s chaque appel \xe0 la m\xe9thode de freinage, obtenez la vitesse actuelle de la voiture et affichez-la."))}c.isMDXComponent=!0}}]);