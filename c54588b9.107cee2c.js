(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(6),i=(a(0),a(122)),l={title:"Programmes \xe0 faire de l'atelier 3",sidebar_label:"3 - Classes, fichiers structur\xe9s et SQLite"},o={unversionedId:"db4/atelier/atelier3",id:"db4/atelier/atelier3",isDocsHomePage:!1,title:"Programmes \xe0 faire de l'atelier 3",description:"Classe",source:"@site/docs/db4/atelier/atelier3.md",slug:"/db4/atelier/atelier3",permalink:"/site/docs/db4/atelier/atelier3",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/db4/atelier/atelier3.md",version:"current",sidebar_label:"3 - Classes, fichiers structur\xe9s et SQLite",sidebar:"DB4Sidebar",previous:{title:"Programmes \xe0 faire de l'atelier 2",permalink:"/site/docs/db4/atelier/atelier2"}},u=[{value:"Pet",id:"pet",children:[]},{value:"Car",id:"car",children:[]},{value:"Feu de for\xeat au Br\xe9sil",id:"feu-de-for\xeat-au-br\xe9sil",children:[{value:"Travail \xe0 faire avec le fichier des feux de for\xeats",id:"travail-\xe0-faire-avec-le-fichier-des-feux-de-for\xeats",children:[]}]}],c={rightToc:u};function s(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"classe"},"Classe"),Object(i.b)("h2",{id:"pet"},"Pet"),Object(i.b)("p",null,"\xc9crivez une classe nomm\xe9e Pet, qui doit avoir les attributs de donn\xe9es suivants:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"__name")," (pour le nom d'un animal domestique)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"__animal_type")," (pour le type d\u2019animal qu\u2019un animal de compagnie est. Les exemples de valeurs sont \xabChien\xbb, \xabChat\xbb,\net \xabOiseau\xbb)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"__age")," (pour l'\xe2ge de l'animal)\nLa classe Pet doit avoir une m\xe9thode ",Object(i.b)("inlineCode",{parentName:"li"},"__init__")," qui cr\xe9e ces attributs. Il devrait \xe9galement avoir les m\xe9thodes suivantes:"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"set_name"),"\nCette m\xe9thode affecte une valeur au champ ",Object(i.b)("inlineCode",{parentName:"li"},"__name"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"set_animal_type"),"\nCette m\xe9thode affecte une valeur au champ ",Object(i.b)("inlineCode",{parentName:"li"},"__animal_type"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"set_age"),"\nCette m\xe9thode affecte une valeur au champ ",Object(i.b)("inlineCode",{parentName:"li"},"__age"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"get_name"),"\nCette m\xe9thode renvoie la valeur du champ de ",Object(i.b)("inlineCode",{parentName:"li"},"__name"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"get_animal_type"),"\nCette m\xe9thode renvoie la valeur du champ ",Object(i.b)("inlineCode",{parentName:"li"},"__animal_type"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"get_age"),"\nCette m\xe9thode renvoie la valeur du champ ",Object(i.b)("inlineCode",{parentName:"li"},"__age"),".")),Object(i.b)("p",null,"Une fois que vous avez \xe9crit la classe, \xe9crivez un programme qui cr\xe9e un objet de la classe et invite l'utilisateur \xe0 entrer le nom, le type et l'\xe2ge de son animal de compagnie. Ces donn\xe9es doivent \xeatre stock\xe9es en tant qu'attributs de l'objet. Utilisez les m\xe9thodes d'acc\xe8s de l'objet pour r\xe9cup\xe9rer le nom, le type et l'\xe2ge de l'animal et afficher ces donn\xe9es \xe0 l'\xe9cran."),Object(i.b)("h2",{id:"car"},"Car"),Object(i.b)("p",null,"\xc9crivez une classe nomm\xe9e Car qui poss\xe8de les attributs de donn\xe9es suivants:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"__year_model")," (pour le mod\xe8le de l'ann\xe9e de la voiture)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"__make")," (pour la marque de la voiture)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"__speed")," (pour la vitesse actuelle de la voiture)\nLa classe Car doit avoir une m\xe9thode ",Object(i.b)("strong",{parentName:"li"},"init")," qui accepte le mod\xe8le d\u2019ann\xe9e de la voiture et qui l\u2019utilise comme arguments. Ces valeurs doivent \xeatre affect\xe9es aux attributs de donn\xe9es ",Object(i.b)("inlineCode",{parentName:"li"},"__year_model")," et ",Object(i.b)("inlineCode",{parentName:"li"},"__make")," de l'objet. Il doit \xe9galement affecter 0 \xe0 l'attribut de donn\xe9es ",Object(i.b)("inlineCode",{parentName:"li"},"__speed"),".\nLa classe doit \xe9galement avoir les m\xe9thodes suivantes:"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"accelerate"),"\nLa m\xe9thode d'acc\xe9l\xe9ration doit ajouter 5 \xe0 l'attribut de donn\xe9es de vitesse chaque fois qu'elle est appel\xe9e."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"brake"),"\nLa m\xe9thode de freinage doit soustraire 5 de l'attribut de donn\xe9es de vitesse chaque fois qu'elle est appel\xe9e."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"get_speed"),"\nLa m\xe9thode ",Object(i.b)("inlineCode",{parentName:"li"},"get_speed")," doit renvoyer la vitesse actuelle.")),Object(i.b)("p",null,"Ensuite, concevez un programme qui cr\xe9e un objet Car, puis appelle la m\xe9thode d'acc\xe9l\xe9ration cinq fois. Apr\xe8s chaque appel \xe0 la m\xe9thode d'acc\xe9l\xe9ration, obtenez la vitesse actuelle de la voiture et affichez-la. Appelez ensuite la m\xe9thode de freinage cinq fois. Apr\xe8s chaque appel \xe0 la m\xe9thode de freinage, obtenez la vitesse actuelle de la voiture et affichez-la."),Object(i.b)("h1",{id:"fichier-structur\xe9"},"Fichier structur\xe9"),Object(i.b)("h2",{id:"feu-de-for\xeat-au-br\xe9sil"},"Feu de for\xeat au Br\xe9sil"),Object(i.b)("p",null,"Lien vers le dataset : ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.kaggle.com/gustavomodelli/forest-fires-in-brazil"}),"https://www.kaggle.com/gustavomodelli/forest-fires-in-brazil")),Object(i.b)("p",null,"Le dataset est les donn\xe9es du nombre de feu de for\xeat au Br\xe9sil s\xe9par\xe9 par ann\xe9e, mois et r\xe9gion entre 1998 et 2007."),Object(i.b)("p",null,"Voici les caract\xe9ristiques du fichier:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Nom du fichier : amazon.csv"),Object(i.b)("li",{parentName:"ul"},"Fichier CSV"),Object(i.b)("li",{parentName:"ul"},"Colonnes:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"year - Ann\xe9e des feux"),Object(i.b)("li",{parentName:"ul"},"state - R\xe9gion des feux"),Object(i.b)("li",{parentName:"ul"},"month - Mois des feux"),Object(i.b)("li",{parentName:"ul"},"number - Le nombre de feux \xe0 l'ann\xe9e, le mois et la r\xe9gion donn\xe9e"),Object(i.b)("li",{parentName:"ul"},"date (inutilis\xe9) - La date de l'ann\xe9e des deux."))),Object(i.b)("li",{parentName:"ul"},"Le fichier est portugais",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"L'encodage ASCII est le ",Object(i.b)("inlineCode",{parentName:"li"},"'ISO-8859-1'")),Object(i.b)("li",{parentName:"ul"},"La pr\xe9sentation de nombre tr\xe8s grand est inhabituelle")))),Object(i.b)("h3",{id:"travail-\xe0-faire-avec-le-fichier-des-feux-de-for\xeats"},"Travail \xe0 faire avec le fichier des feux de for\xeats"),Object(i.b)("p",null,"Notre premier programme va d\xe9terminer l'ann\xe9e avec le plus grand nombre de feu for\xeats ainsi que la r\xe9gion (state) qui \xe0 eu le plus de feu de for\xeat. Ces deux informations sont ensuite \xe9crites dans un rapport qui prend la forme suivante :"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"Worst year : 2004 with 248928 fires.\nWorst state : Mato Grosso with 767890 fires.\n")),Object(i.b)("h1",{id:"base-de-donn\xe9es"},"Base de donn\xe9es"),Object(i.b)("p",null,"A partir de l'image suivante :"),Object(i.b)("p",null,Object(i.b)("img",{alt:"inventory.png",src:a(181).default}),"\nTir\xe9e de ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.w3resource.com/sql-exercises/"}),"w3resource"),"."),Object(i.b)("p",null,"\xc9crivez un programme qui construit la base de donnes suivante dans un fichier SQLite et qui va ajouter quelques salesman, orders et customer."),Object(i.b)("h1",{id:"requ\xeates-rest"},"Requ\xeates Rest"),Object(i.b)("p",null,"Pour cet exercice, vous devez aller consulter la documentation de l'API REST de GitHub."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.github.com/en/rest/reference"}),"Documentation de l'API de Github"))),Object(i.b)("p",null,"Github est un service de gestion de d\xe9pots (repositories) Git pour faire le versionnage de projet avec du code de tout genre."),Object(i.b)("p",null,'Comme travail, vous devez cr\xe9\xe9 un programme qui va prendre le nom d\'un utilisateur et faire afficher la liste des repositories disponible pour cet utilisateur. Vous devrez donc trouver la requ\xeate pour trouver la liste des "repositories" d\'un "user" et de le faire afficher dans votre programme. '))}s.isMDXComponent=!0},122:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),s=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(a),p=r,m=d["".concat(l,".").concat(p)]||d[p]||b[p]||i;return a?n.a.createElement(m,o(o({ref:t},c),{},{components:a})):n.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},181:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/inventory-5fe3a01e8ecd9f8858bcad9345782a41.png"}}]);