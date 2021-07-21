(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(s,".").concat(d)]||b[d]||p[d]||i;return n?a.a.createElement(m,o(o({ref:t},c),{},{components:n})):a.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(127)),s={title:"Programmation orient\xe9e objet",sidebar_label:"9 - POO"},o={unversionedId:"inf135/cours/cours9",id:"inf135/cours/cours9",isDocsHomePage:!1,title:"Programmation orient\xe9e objet",description:"Objectifs de la semaine",source:"@site/docs/inf135/cours/cours9.md",slug:"/inf135/cours/cours9",permalink:"/site/docs/inf135/cours/cours9",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf135/cours/cours9.md",version:"current",sidebar_label:"9 - POO",sidebar:"INF135Sidebar",previous:{title:"Graphiques et enregistrements",permalink:"/site/docs/inf135/cours/cours8"},next:{title:"Programmation orient\xe9e objet - m\xe9thodes",permalink:"/site/docs/inf135/cours/cours10"}},l=[{value:"Objectifs de la semaine",id:"objectifs-de-la-semaine",children:[]},{value:"Programmation orient\xe9e objet",id:"programmation-orient\xe9e-objet",children:[]},{value:"D\xe9finition de classe <code>classdef</code>",id:"d\xe9finition-de-classe-classdef",children:[]},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",children:[]},{value:"Exemple d&#39;un <code>classdef</code>",id:"exemple-dun-classdef",children:[]},{value:"Cr\xe9ation d&#39;objets",id:"cr\xe9ation-dobjets",children:[]},{value:"Utilisation d&#39;objets",id:"utilisation-dobjets",children:[]},{value:"Valeur par d\xe9faut",id:"valeur-par-d\xe9faut",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"objectifs-de-la-semaine"},"Objectifs de la semaine"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Programmation orient\xe9e objet;"),Object(i.b)("li",{parentName:"ul"},"D\xe9finition de classe ",Object(i.b)("inlineCode",{parentName:"li"},"classdef"),";"),Object(i.b)("li",{parentName:"ul"},"Propri\xe9t\xe9s;"),Object(i.b)("li",{parentName:"ul"},"Cr\xe9ation d'objets;"),Object(i.b)("li",{parentName:"ul"},"Utilisation d'objets.")),Object(i.b)("h2",{id:"programmation-orient\xe9e-objet"},"Programmation orient\xe9e objet"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"La programmation orient\xe9e objet est un autre paradigme de programmation qui vient s'ajouter \xe0 la programmation proc\xe9durale que nous utilisons;"),Object(i.b)("li",{parentName:"ul"},"Le principe fondamental est de cat\xe9goriser les \xe9l\xe9ments d'une probl\xe9matique en objets qui interagissent entre eux;"),Object(i.b)("li",{parentName:"ul"},"Nous verrons plus en d\xe9tail les principes majeurs de la Programmation orient\xe9e objet (POO) plus tard.")),Object(i.b)("h2",{id:"d\xe9finition-de-classe-classdef"},"D\xe9finition de classe ",Object(i.b)("inlineCode",{parentName:"h2"},"classdef")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Le ",Object(i.b)("inlineCode",{parentName:"li"},"classdef")," permet de d\xe9crire les propri\xe9t\xe9s et les m\xe9thodes d'une classe;"),Object(i.b)("li",{parentName:"ul"},"Le ",Object(i.b)("inlineCode",{parentName:"li"},"classdef")," est un fichier \xe0 part enti\xe8re comme un script ou une fonction;"),Object(i.b)("li",{parentName:"ul"},"Par convention, toutes nos classes auront comme premi\xe8re lettre une majuscule;"),Object(i.b)("li",{parentName:"ul"},"Le ",Object(i.b)("inlineCode",{parentName:"li"},"classdef")," est un fichier descriptif; Il n'est pas ex\xe9cut\xe9 de mani\xe8re proc\xe9durale comme les autres fichiers rencontr\xe9s jusqu'ici.")),Object(i.b)("h2",{id:"propri\xe9t\xe9s"},"Propri\xe9t\xe9s"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Une classe avec de propri\xe9t\xe9s s'apparentes beaucoup \xe0 un enregistrement avec de meilleurs m\xe9canismes de programmation d\xe9fensive;"),Object(i.b)("li",{parentName:"ul"},"Les propri\xe9t\xe9s seront d\xe9clar\xe9es dans la classe et pourront \xeatre utilis\xe9es par les instances (objets) de la classe.")),Object(i.b)("h2",{id:"exemple-dun-classdef"},"Exemple d'un ",Object(i.b)("inlineCode",{parentName:"h2"},"classdef")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-MATLAB"}),"classdef MaClasse\n    properties\n        x\n        y\n    end\n    methods\n        % Nous verrons les m\xe9thodes plus tard.\n    end\nend\n")),Object(i.b)("h2",{id:"cr\xe9ation-dobjets"},"Cr\xe9ation d'objets"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"La classe est une description d'un \xe9l\xe9ment. \xc0 elle-m\xeame, il n'y a rien de tangible;"),Object(i.b)("li",{parentName:"ul"},"La cr\xe9ation de versions tangibles de la classe se nomme l'instanciation et cela permet de cr\xe9er des objets tangibles;"),Object(i.b)("li",{parentName:"ul"},"Les objets auront acc\xe8s \xe0 des valeurs pr\xe9cises dans les diff\xe9rentes propri\xe9t\xe9s fournies par la classe;"),Object(i.b)("li",{parentName:"ul"},"La cr\xe9ation des objets se fait avec le constructeur. Le constructeur est une fonction qui porte le m\xeame nom que la classe.")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-MATLAB"}),"obj1 = MaClasse()\nobj2 = MaClasse()\n")),Object(i.b)("h2",{id:"utilisation-dobjets"},"Utilisation d'objets"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"L\u2019utilisation des objets ressemble aux enregistrements;"),Object(i.b)("li",{parentName:"ul"},"Les propri\xe9t\xe9s sont accessibles avec le nom de l'objet suivi d'un point et le nom de la propri\xe9t\xe9;"),Object(i.b)("li",{parentName:"ul"},"Les objets ne sont pas dynamiques par rapport \xe0 leurs propri\xe9t\xe9s. Seules les propri\xe9t\xe9s d\xe9finies dans la classe sont accessibles.")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-MATLAB"}),"obj1.x = 45;\nfprintf('%g\\n', obj1.x)\n")),Object(i.b)("h2",{id:"valeur-par-d\xe9faut"},"Valeur par d\xe9faut"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Il est possible d'assigner une valeur par d\xe9faut \xe0 une propri\xe9t\xe9. La valeur par d\xe9faut sera assign\xe9e \xe0 la cr\xe9ation de l\u2019objet.")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-MATLAB"}),"classdef MaClasse\n    propertie\n        x = 0\n        y = 0\n    end\nend\n")))}u.isMDXComponent=!0}}]);