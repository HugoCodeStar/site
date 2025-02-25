"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[5942],{631:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=n(8168),r=(n(6540),n(5680));const l={title:"Chaines de caract\xe8res",sidebar_label:"6 - Chaines de caract\xe8res"},i=void 0,s={unversionedId:"inf1256/cours/cours6",id:"inf1256/cours/cours6",isDocsHomePage:!1,title:"Chaines de caract\xe8res",description:"Chaines de caract\xe8res",source:"@site/docs/inf1256/cours/cours6.md",sourceDirName:"inf1256/cours",slug:"/inf1256/cours/cours6",permalink:"/site/docs/inf1256/cours/cours6",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf1256/cours/cours6.md",tags:[],version:"current",frontMatter:{title:"Chaines de caract\xe8res",sidebar_label:"6 - Chaines de caract\xe8res"},sidebar:"INF1256Sidebar",previous:{title:"5 - Fichiers et exceptions",permalink:"/site/docs/inf1256/cours/cours5"},next:{title:"7 - Set, dictionnaire, csv et JSON",permalink:"/site/docs/inf1256/cours/cours7"}},o=[{value:"Chaines de caract\xe8res",id:"chaines-de-caract\xe8res",children:[]},{value:"Parcourir les lettres d&#39;une chaine",id:"parcourir-les-lettres-dune-chaine",children:[]},{value:"Concat\xe9nation et d\xe9coupage de chaines",id:"concat\xe9nation-et-d\xe9coupage-de-chaines",children:[]},{value:"L&#39;op\xe9ration in et les m\xe9thodes",id:"lop\xe9ration-in-et-les-m\xe9thodes",children:[]},{value:"M\xe9thodes de d\xe9tection des chaines",id:"m\xe9thodes-de-d\xe9tection-des-chaines",children:[]},{value:"M\xe9thodes de modification des chaines",id:"m\xe9thodes-de-modification-des-chaines",children:[]},{value:"M\xe9thodes de recherche et remplacement",id:"m\xe9thodes-de-recherche-et-remplacement",children:[]},{value:"D\xe9coupage \xe0 un caract\xe8re sp\xe9cifique",id:"d\xe9coupage-\xe0-un-caract\xe8re-sp\xe9cifique",children:[]}],c={toc:o},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"chaines-de-caract\xe8res"},"Chaines de caract\xe8res"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Les chaine de caract\xe8res (",(0,r.yg)("inlineCode",{parentName:"li"},"str"),") est un type avec plusieurs fonctionnalit\xe9s imbriqu\xe9es."),(0,r.yg)("li",{parentName:"ul"},"Plusieurs op\xe9rations peuvent faciliter l'utilisation et la cr\xe9ation de chaines."),(0,r.yg)("li",{parentName:"ul"},"Plusieurs m\xe9thodes sont disponibles pour parcourir, chercher et modifier les chaines.")),(0,r.yg)("h2",{id:"parcourir-les-lettres-dune-chaine"},"Parcourir les lettres d'une chaine"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Le ",(0,r.yg)("inlineCode",{parentName:"li"},"for")," peut parcourir chacune des lettres dans une chaine."),(0,r.yg)("li",{parentName:"ul"},"Les chaines peuvent \xeatre acc\xe9d\xe9es comme des listes."),(0,r.yg)("li",{parentName:"ul"},"La fonction ",(0,r.yg)("inlineCode",{parentName:"li"},"len")," indique le nombre de caract\xe8res dans une chaine.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"mot = 'salut'\nfor lettre in mot:\n    print(lettre) # Affiche 's' 'a' 'l' 'u' 't'\n\nprint(mot[1]) # Affiche 'a'\nprint(len(mot)) # Affiche 5\n")),(0,r.yg)("h2",{id:"concat\xe9nation-et-d\xe9coupage-de-chaines"},"Concat\xe9nation et d\xe9coupage de chaines"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Il est possible de concat\xe9ner deux chaines pour en cr\xe9er une nouvelle avec l'op\xe9rateur ",(0,r.yg)("inlineCode",{parentName:"li"},"+"),"."),(0,r.yg)("li",{parentName:"ul"},"Il est aussi possible de d\xe9couper les chaines comme une liste.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"mot = 'salut'\nautre_mot = 'bonjour'\n\nmega_mot = mot + ' ' + bonjour # Contient 'salut bonjour'\nprint(mega_mot[2:9]) # Affiche 'lut bon'\n")),(0,r.yg)("h2",{id:"lop\xe9ration-in-et-les-m\xe9thodes"},"L'op\xe9ration in et les m\xe9thodes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Il est possible de chercher si une chaine est dans une autre avec l'op\xe9ration ",(0,r.yg)("inlineCode",{parentName:"li"},"in")," et inversement ",(0,r.yg)("inlineCode",{parentName:"li"},"not in"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"texte = 'allo tout le monde'\nif 'tout' in texte:\n    print('Le mot \"tout\" est dans la phrase')\n")),(0,r.yg)("h2",{id:"m\xe9thodes-de-d\xe9tection-des-chaines"},"M\xe9thodes de d\xe9tection des chaines"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Nom"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"isalnum()"),(0,r.yg)("td",{parentName:"tr",align:null},"Tous des caract\xe8res alphanum\xe9riques.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"isalpha()"),(0,r.yg)("td",{parentName:"tr",align:null},"Tous des caract\xe8res alphab\xe9tiques.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"isdigit()"),(0,r.yg)("td",{parentName:"tr",align:null},"Tous des caract\xe8res num\xe9riques.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"islower()"),(0,r.yg)("td",{parentName:"tr",align:null},"Tous des caract\xe8res alphab\xe9tiques en minuscule.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"isspace()"),(0,r.yg)("td",{parentName:"tr",align:null},"Tous des caract\xe8res d'espacements (espace, saut de ligne, tabulation)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"isupper()"),(0,r.yg)("td",{parentName:"tr",align:null},"Tous des caract\xe8res alphab\xe9tiques en majuscule.")))),(0,r.yg)("h2",{id:"m\xe9thodes-de-modification-des-chaines"},"M\xe9thodes de modification des chaines"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Nom"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lower()"),(0,r.yg)("td",{parentName:"tr",align:null},"Converti en minuscules.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lstrip()"),(0,r.yg)("td",{parentName:"tr",align:null},"Enl\xe8ve les espacements \xe0 gauche.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lstrip(char)"),(0,r.yg)("td",{parentName:"tr",align:null},"Enl\xe8ve le caract\xe8re de la gauche.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rstrip()"),(0,r.yg)("td",{parentName:"tr",align:null},"Enl\xe8ve les espacements \xe0 droite.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"strip()"),(0,r.yg)("td",{parentName:"tr",align:null},"Enl\xe8ve les espacements \xe0 gauche et \xe0 droite.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"strip(char)"),(0,r.yg)("td",{parentName:"tr",align:null},"Enl\xe8ve un caract\xe8re \xe0 gauche et \xe0 droite")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"upper()"),(0,r.yg)("td",{parentName:"tr",align:null},"Converti en majuscules.")))),(0,r.yg)("h2",{id:"m\xe9thodes-de-recherche-et-remplacement"},"M\xe9thodes de recherche et remplacement"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Nom"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"endswith(substring)"),(0,r.yg)("td",{parentName:"tr",align:null},"Si se termine avec substring.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"find(substring)"),(0,r.yg)("td",{parentName:"tr",align:null},"Retourne le premier indice ou substring est trouv\xe9. -1 autrement.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"replace(old, new)"),(0,r.yg)("td",{parentName:"tr",align:null},"Remplace l'ancien substring par la nouvelle.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"startswith(substring)"),(0,r.yg)("td",{parentName:"tr",align:null},"Si se d\xe9bute avec substring.")))),(0,r.yg)("h2",{id:"d\xe9coupage-\xe0-un-caract\xe8re-sp\xe9cifique"},"D\xe9coupage \xe0 un caract\xe8re sp\xe9cifique"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Il est possible de "splitter" une chaine en une liste de chaine \xe0 un d\xe9limiteur connu avec la m\xe9thode ',(0,r.yg)("inlineCode",{parentName:"li"},"split"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"chaine = 'salut le monde'\n# Coupe aux espaces par d\xe9faut.\nliste = chaine.split() # Contient ['salut', 'le', 'monde']\n\ndate = '11/12/2012'\nliste_date = date.split('/') # Contient ['11', '12', '2012']\n")))}d.isMDXComponent=!0},5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(o,".").concat(g)]||d[g]||p[g]||l;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);