"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[3421],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9121:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Programmes \xe0 faire de l'atelier 6",sidebar_label:"9 - POO"},u=void 0,s={unversionedId:"inf1256/atelier/atelier9",id:"inf1256/atelier/atelier9",isDocsHomePage:!1,title:"Programmes \xe0 faire de l'atelier 6",description:"Pet",source:"@site/docs/inf1256/atelier/atelier9.md",sourceDirName:"inf1256/atelier",slug:"/inf1256/atelier/atelier9",permalink:"/site/docs/inf1256/atelier/atelier9",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf1256/atelier/atelier9.md",tags:[],version:"current",frontMatter:{title:"Programmes \xe0 faire de l'atelier 6",sidebar_label:"9 - POO"},sidebar:"INF1256Sidebar",previous:{title:"6 - Chaines de caract\xe8res",permalink:"/site/docs/inf1256/atelier/atelier6"},next:{title:"1 - Bases",permalink:"/site/docs/inf1256/cours/cours1"}},d=[{value:"Pet",id:"pet",children:[]},{value:"Car",id:"car",children:[]}],p={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"pet"},"Pet"),(0,i.kt)("p",null,"\xc9crivez une classe nomm\xe9e Pet, qui doit avoir les attributs de donn\xe9es suivants:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__name")," (pour le nom d'un animal domestique)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__animal_type")," (pour le type d\u2019animal qu\u2019un animal de compagnie est. Les exemples de valeurs sont \xabChien\xbb, \xabChat\xbb,\net \xabOiseau\xbb)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__age")," (pour l'\xe2ge de l'animal)\nLa classe Pet doit avoir une m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"li"},"__init__")," qui cr\xe9e ces attributs. Il devrait \xe9galement avoir les m\xe9thodes suivantes:"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set_name"),"\nCette m\xe9thode affecte une valeur au champ ",(0,i.kt)("inlineCode",{parentName:"li"},"__name"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set_animal_type"),"\nCette m\xe9thode affecte une valeur au champ ",(0,i.kt)("inlineCode",{parentName:"li"},"__animal_type"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set_age"),"\nCette m\xe9thode affecte une valeur au champ ",(0,i.kt)("inlineCode",{parentName:"li"},"__age"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get_name"),"\nCette m\xe9thode renvoie la valeur du champ de ",(0,i.kt)("inlineCode",{parentName:"li"},"__name"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get_animal_type"),"\nCette m\xe9thode renvoie la valeur du champ ",(0,i.kt)("inlineCode",{parentName:"li"},"__animal_type"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get_age"),"\nCette m\xe9thode renvoie la valeur du champ ",(0,i.kt)("inlineCode",{parentName:"li"},"__age"),".")),(0,i.kt)("p",null,"Une fois que vous avez \xe9crit la classe, \xe9crivez un programme qui cr\xe9e un objet de la classe et invite l'utilisateur \xe0 entrer le nom, le type et l'\xe2ge de son animal de compagnie. Ces donn\xe9es doivent \xeatre stock\xe9es en tant qu'attributs de l'objet. Utilisez les m\xe9thodes d'acc\xe8s de l'objet pour r\xe9cup\xe9rer le nom, le type et l'\xe2ge de l'animal et afficher ces donn\xe9es \xe0 l'\xe9cran."),(0,i.kt)("h2",{id:"car"},"Car"),(0,i.kt)("p",null,"\xc9crivez une classe nomm\xe9e Car qui poss\xe8de les attributs de donn\xe9es suivants:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__year_model")," (pour le mod\xe8le de l'ann\xe9e de la voiture)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__make")," (pour la marque de la voiture)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__speed")," (pour la vitesse actuelle de la voiture)\nLa classe Car doit avoir une m\xe9thode ",(0,i.kt)("strong",{parentName:"li"},"init")," qui accepte le mod\xe8le d\u2019ann\xe9e de la voiture et qui l\u2019utilise comme arguments. Ces valeurs doivent \xeatre affect\xe9es aux attributs de donn\xe9es ",(0,i.kt)("inlineCode",{parentName:"li"},"__year_model")," et ",(0,i.kt)("inlineCode",{parentName:"li"},"__make")," de l'objet. Il doit \xe9galement affecter 0 \xe0 l'attribut de donn\xe9es ",(0,i.kt)("inlineCode",{parentName:"li"},"__speed"),".\nLa classe doit \xe9galement avoir les m\xe9thodes suivantes:"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate"),"\nLa m\xe9thode d'acc\xe9l\xe9ration doit ajouter 5 \xe0 l'attribut de donn\xe9es de vitesse chaque fois qu'elle est appel\xe9e."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"brake"),"\nLa m\xe9thode de freinage doit soustraire 5 de l'attribut de donn\xe9es de vitesse chaque fois qu'elle est appel\xe9e."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get_speed"),"\nLa m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"li"},"get_speed")," doit renvoyer la vitesse actuelle.")),(0,i.kt)("p",null,"Ensuite, concevez un programme qui cr\xe9e un objet Car, puis appelle la m\xe9thode d'acc\xe9l\xe9ration cinq fois. Apr\xe8s chaque appel \xe0 la m\xe9thode d'acc\xe9l\xe9ration, obtenez la vitesse actuelle de la voiture et affichez-la. Appelez ensuite la m\xe9thode de freinage cinq fois. Apr\xe8s chaque appel \xe0 la m\xe9thode de freinage, obtenez la vitesse actuelle de la voiture et affichez-la."))}c.isMDXComponent=!0}}]);