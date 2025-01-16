"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[6754],{5680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>m});var i=n(6540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,i,r=function(e,a){if(null==e)return{};var n,i,r={},t=Object.keys(e);for(i=0;i<t.length;i++)n=t[i],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)n=t[i],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),o=function(e){var a=i.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},c=function(e){var a=o(e.components);return i.createElement(u.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},g=i.forwardRef((function(e,a){var n=e.components,r=e.mdxType,t=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=o(n),g=r,m=p["".concat(u,".").concat(g)]||p[g]||d[g]||t;return n?i.createElement(m,l(l({ref:a},c),{},{components:n})):i.createElement(m,l({ref:a},c))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=n.length,l=new Array(t);l[0]=g;var s={};for(var u in a)hasOwnProperty.call(a,u)&&(s[u]=a[u]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<t;o++)l[o]=n[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6698:(e,a,n)=>{n.r(a),n.d(a,{contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(8168),r=n(8587),t=(n(6540),n(5680));const l=["components"],s={title:"Programmation, instructions, affichage, saisie et variables",sidebar_label:"1 - Bases"},u=void 0,o={unversionedId:"inf1256/cours/cours1",id:"inf1256/cours/cours1",isDocsHomePage:!1,title:"Programmation, instructions, affichage, saisie et variables",description:"Programmation",source:"@site/docs/inf1256/cours/cours1.md",sourceDirName:"inf1256/cours",slug:"/inf1256/cours/cours1",permalink:"/site/docs/inf1256/cours/cours1",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf1256/cours/cours1.md",tags:[],version:"current",frontMatter:{title:"Programmation, instructions, affichage, saisie et variables",sidebar_label:"1 - Bases"},sidebar:"INF1256Sidebar",previous:{title:"9 - POO",permalink:"/site/docs/inf1256/atelier/atelier9"},next:{title:"2 - If, While, For",permalink:"/site/docs/inf1256/cours/cours2"}},c=[{value:"Programmation",id:"programmation",children:[]},{value:"Programmation",id:"programmation-1",children:[]},{value:"Python REPL",id:"python-repl",children:[]},{value:"Scripts",id:"scripts",children:[]},{value:"Affichage avec la fonction <code>print</code>",id:"affichage-avec-la-fonction-print",children:[]},{value:"Les chaines de caract\xe8res",id:"les-chaines-de-caract\xe8res",children:[]},{value:"Commentaires",id:"commentaires",children:[]},{value:"<strong>Exercice 1</strong>",id:"exercice-1",children:[]},{value:"Variables et instruction d&#39;assignation",id:"variables-et-instruction-dassignation",children:[]},{value:"Assignation et instruction",id:"assignation-et-instruction",children:[]},{value:"Identificateurs",id:"identificateurs",children:[]},{value:"<strong>Exercice 2</strong>",id:"exercice-2",children:[]},{value:"Type de donn\xe9es",id:"type-de-donn\xe9es",children:[]},{value:"Saisie avec la fonction <code>input</code>",id:"saisie-avec-la-fonction-input",children:[]},{value:"<strong>Exercice 3</strong>",id:"exercice-3",children:[]},{value:"Affichage d&#39;expression avec <code>print</code>",id:"affichage-dexpression-avec-print",children:[]},{value:"Caract\xe8re d&#39;\xe9chapement",id:"caract\xe8re-d\xe9chapement",children:[]},{value:"<strong>Exercice 4</strong>",id:"exercice-4",children:[]}],p={toc:c},d="wrapper";function g(e){let{components:a}=e,n=(0,r.A)(e,l);return(0,t.yg)(d,(0,i.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"programmation"},"Programmation"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Instructions"),(0,t.yg)("li",{parentName:"ul"},"M\xe9moire"),(0,t.yg)("li",{parentName:"ul"},"Algorithme / Contr\xf4le de flux")),(0,t.yg)("h2",{id:"programmation-1"},"Programmation"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Language du cours : Python 3"),(0,t.yg)("li",{parentName:"ul"},"Environement de d\xe9velopment : repl.it"),(0,t.yg)("li",{parentName:"ul"},"Deux m\xe9thodes d'utilisation",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Interactive REPL (Read-Evaluate-Print-Loop)"),(0,t.yg)("li",{parentName:"ul"},"Scripts")))),(0,t.yg)("h2",{id:"python-repl"},"Python REPL"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Utile pour tester des concepts rapidement"),(0,t.yg)("li",{parentName:"ul"},"Ne pas utiliser pour construire un programme"),(0,t.yg)("li",{parentName:"ul"},"Affiche la r\xe9ponse de chaque \xe9valuation saisie et boucle pour un nouvelle saisie")),(0,t.yg)("h2",{id:"scripts"},"Scripts"),(0,t.yg)("p",null,"L'unit\xe9 de base d'un programme en python est le script."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Fichier texte"),(0,t.yg)("li",{parentName:"ul"},"Extension .py"),(0,t.yg)("li",{parentName:"ul"},"Contient les instructions de notre programme"),(0,t.yg)("li",{parentName:"ul"},"Ex\xe9cut\xe9 par l'interpr\xe9teur de python de mani\xe8re s\xe9quentielle")),(0,t.yg)("h2",{id:"affichage-avec-la-fonction-print"},"Affichage avec la fonction ",(0,t.yg)("inlineCode",{parentName:"h2"},"print")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"L'affichage de texte utilise la fonction ",(0,t.yg)("inlineCode",{parentName:"li"},"print")," pour pr\xe9senter une chaine de caract\xe8res dans la fen\xeatre de commande.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-python"},"print('Texte \xe0 afficher!')\n")),(0,t.yg)("h2",{id:"les-chaines-de-caract\xe8res"},"Les chaines de caract\xe8res"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Les chaines de caract\xe8res (du texte lit\xe9ral) est d\xe9limit\xe9 par des guillement simple ",(0,t.yg)("inlineCode",{parentName:"li"},"'")," ou double ",(0,t.yg)("inlineCode",{parentName:"li"},'"'),"."),(0,t.yg)("li",{parentName:"ul"},"Cette distinction permet de faire la diff\xe9rence entre les instructions et le texte \xe0 utiliser dans le programme."),(0,t.yg)("li",{parentName:"ul"},"Deux symbole sont disponible pour facilit\xe9 l'utlisation de l'autre type de guillemet dans une chaine."),(0,t.yg)("li",{parentName:"ul"},"Il est aussi possible d'utiliser les triples symboles pour d\xe9limit\xe9 une chaine.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-python"},'print(\'Texte \xe0 afficher!\')\nprint(\'Le "best" texte\')\nprint("Y\'en a pas de meilleur texte.")\nprint("""C\'est possible d\'avoir du texte avec les deux "quotes" dans une chaine.""")\nprint("""M\xeame\nsur plusieurs\nligne""")\n')),(0,t.yg)("h2",{id:"commentaires"},"Commentaires"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Le hashtag ",(0,t.yg)("inlineCode",{parentName:"li"},"#")," d\xe9bute une ligne de commentaire;"),(0,t.yg)("li",{parentName:"ul"},"Le reste de la ligne apr\xe8s le ",(0,t.yg)("inlineCode",{parentName:"li"},"#")," ne sera pas consid\xe9r\xe9 par python durant l'ex\xe9cution du code;"),(0,t.yg)("li",{parentName:"ul"},"Une ligne vide sera aussi saut\xe9e par python;"),(0,t.yg)("li",{parentName:"ul"},"Les commentaires sont primordiaux \xe0 la programmation;"),(0,t.yg)("li",{parentName:"ul"},"Les commentaires sont utilis\xe9s en en-t\xeate de fichiers, fonctions et programme ainsi qu\u2019\xe0 l\u2019int\xe9rieur d\u2019un programme pour aider \xe0 comprendre l\u2019intention des instructions.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-python"},"print('Texte \xe0 afficher!')\n# Utilise le caract\xe8re sp\xe9cial \\n pour un saut de ligne\nprint('Une ligne\\net une autre')\nprint (3 + 6) # print peut aussi afficher le r\xe9sultat d'une expression\n")),(0,t.yg)("h2",{id:"exercice-1"},(0,t.yg)("strong",{parentName:"h2"},"Exercice 1")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\xc9crivez un script qui calcule un salaire hebdomadaire \xe0 partir d\u2019un nombre d\u2019heures travaill\xe9es et un salaire horaire.")),(0,t.yg)("h2",{id:"variables-et-instruction-dassignation"},"Variables et instruction d'assignation"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Une variable est la combinaison d\u2019un espace me\u0301moire re\u0301serve\u0301, un identificateur et une valeur;"),(0,t.yg)("li",{parentName:"ul"},"L'assignation utilise l'\xe9galit\xe9 ",(0,t.yg)("inlineCode",{parentName:"li"},"=")," pour lier la valeur \xe0 l'identificateur;")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-python"},"nomVariable = 10\nprint(nomVariable)\n")),(0,t.yg)("h2",{id:"assignation-et-instruction"},"Assignation et instruction"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"L\u2019assignation se fait toujours d\u2019une ",(0,t.yg)("strong",{parentName:"li"},"expression")," a\u0300 droite vers un identificateur a\u0300 gauche;"),(0,t.yg)("li",{parentName:"ul"},"L'expression sera \xe9valu\xe9e avant d'\xeatre assign\xe9e dans la variable;")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-python"},"nomVariable = nomVariable + 5\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Le contenu d'une variable existante est \xe9cras\xe9 lors d'une assignation.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Une longue instruction peut \xeatre coup\xe9 sur une deuxi\xe8me ligne avec le caract\xe8re ",(0,t.yg)("inlineCode",{parentName:"p"},"\\")))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-python"},"nomVariable = nomVariable + 5 + nomVariable + \\\n  nomVariable + nomVariable\n")),(0,t.yg)("h2",{id:"identificateurs"},"Identificateurs"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Les identificateurs sont utilis\xe9s pour identifier les diff\xe9rents \xe9l\xe9ments que nous ajoutons \xe0 notre programme;"),(0,t.yg)("li",{parentName:"ul"},"Les identificateurs sont les noms que l\u2019on donne \xe0 nos variables, scripts et fonctions;"),(0,t.yg)("li",{parentName:"ul"},"Les caract\xe8res permis sont :",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Tout caract\xe8re alphanum\xe9rique;"),(0,t.yg)("li",{parentName:"ul"},"Le tiret-bas ",(0,t.yg)("inlineCode",{parentName:"li"},"_"),"."))),(0,t.yg)("li",{parentName:"ul"},"Le premier caract\xe8re doit \xeatre alphab\xe9tique;"),(0,t.yg)("li",{parentName:"ul"},"Le nom de la variable ne doit pas \xeatre un mot r\xe9serv\xe9 par la syntaxe de python;"),(0,t.yg)("li",{parentName:"ul"},"Faites attention! Pour python, les majuscules et minuscules sont des caract\xe8res diff\xe9rents;"),(0,t.yg)("li",{parentName:"ul"},"Par convention, ",(0,t.yg)("inlineCode",{parentName:"li"},"camelCase"),".")),(0,t.yg)("h2",{id:"exercice-2"},(0,t.yg)("strong",{parentName:"h2"},"Exercice 2")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\xc9crivez un script qui calcule un salaire hebdomadaire \xe0 partir d\u2019un nombre d\u2019heures travaill\xe9es et un salaire horaire. Affichez le salaire brut ainsi que le salaire net apr\xe8s 15% de taxes."),(0,t.yg)("li",{parentName:"ul"},"Utilisez des variables pour le nombre d\u2019heures travaill\xe9es, le salaire horaire, le salaire brut et le salaire net.")),(0,t.yg)("h2",{id:"type-de-donn\xe9es"},"Type de donn\xe9es"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Quatre types de donn\xe9es seront rencontr\xe9s g\xe9n\xe9ralement durant ce cours:",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"int")," - entit\xe9 num\xe9rique enti\xe8re(ex: 3, -4);"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"float")," - entit\xe9e num\xe9rique flottante (3.542, -0.23);"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"str")," - entit\xe9 textuelle (ex: 'a', 'Bonjour!');",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Les chaines de caract\xe8res sont d\xe9limit\xe9es par des guillemets simples ou doubles."))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"bool")," - valeur logique vraie (True) ou fausse (False).")))),(0,t.yg)("h2",{id:"saisie-avec-la-fonction-input"},"Saisie avec la fonction ",(0,t.yg)("inlineCode",{parentName:"h2"},"input")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Une saisie utilise la fonction ",(0,t.yg)("inlineCode",{parentName:"li"},"input")," pour assigner l'entr\xe9e d'un utilisateur dans une variable."),(0,t.yg)("li",{parentName:"ul"},"Puisque le retour sera toujours en ",(0,t.yg)("inlineCode",{parentName:"li"},"str"),", il faut le convertir au besoin. "),(0,t.yg)("li",{parentName:"ul"},"La fonction ",(0,t.yg)("inlineCode",{parentName:"li"},"int")," ou ",(0,t.yg)("inlineCode",{parentName:"li"},"float")," permet de convertir la chaine en entier ou en r\xe9el.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-python"},"## Saisie d'un nombre\n## Doit convertir la valeur\nsaisi = int(input('Texte \xe0 afficher \xe0 la saisie: '))\n\n## Saisie d'une chaine de caract\xe8res (texte)\nsaisiChaine = input('Texte \xe0 afficher: ')\n")),(0,t.yg)("h2",{id:"exercice-3"},(0,t.yg)("strong",{parentName:"h2"},"Exercice 3")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\xc9crivez un script qui calcule un salaire hebdomadaire \xe0 partir d\u2019un nombre d\u2019heures travaill\xe9es et un salaire horaire;"),(0,t.yg)("li",{parentName:"ul"},"Faites-la saisie du nombre d\u2019heures travaill\xe9es et du salaire horaire au clavier;"),(0,t.yg)("li",{parentName:"ul"},"Afficher un message d\u2019information avant d\u2019afficher le salaire.")),(0,t.yg)("h2",{id:"affichage-dexpression-avec-print"},"Affichage d'expression avec ",(0,t.yg)("inlineCode",{parentName:"h2"},"print")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"print")," a la possibilit\xe9 d'afficher l'\xe9valuation d'une expression;"),(0,t.yg)("li",{parentName:"ul"},"Il est possible de d\xe9couper sur plusieurs ligne l'utilsation du print.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-python"},"x = 3;\nchaine = 'allo';\nprint('Chiffre: ', x)\nprint('Chaine: ', chaine)\nprint('Chiffre' , x, \n  'et chaine', chaine)\n")),(0,t.yg)("h2",{id:"caract\xe8re-d\xe9chapement"},"Caract\xe8re d'\xe9chapement"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Les caract\xe8res d'\xe9chapements permetent d'ins\xe9r\xe9 des \xe9l\xe9ments non-textuelles dans un affichage de la fonction print.")),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Caract\xe8re"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"\\n")),(0,t.yg)("td",{parentName:"tr",align:null},"Saut de ligne")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"\\t")),(0,t.yg)("td",{parentName:"tr",align:null},"Saut de tabulation horizontale")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"\\'")),(0,t.yg)("td",{parentName:"tr",align:null},"Affiche un guillemet simple")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},'\\"')),(0,t.yg)("td",{parentName:"tr",align:null},"Affiche un guillemet double")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"\\\\")),(0,t.yg)("td",{parentName:"tr",align:null},"Affiche un backslash")))),(0,t.yg)("h2",{id:"exercice-4"},(0,t.yg)("strong",{parentName:"h2"},"Exercice 4")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\xc9crivez un script qui calcule un salaire hebdomadaire \xe0 partir d\u2019un nombre d\u2019heures travaill\xe9es et un salaire horaire."),(0,t.yg)("li",{parentName:"ul"},"Faites-la saisie du nombre d\u2019heures travaill\xe9es et du salaire horaire au clavier."),(0,t.yg)("li",{parentName:"ul"},"Afficher un message avec le salaire net.")))}g.isMDXComponent=!0}}]);