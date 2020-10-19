(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{73:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return b}));var i=t(2),r=t(6),a=(t(0),t(97)),c={title:"Fichiers et exceptions",sidebar_label:"5 - Fichiers et exceptions"},l={unversionedId:"inf1256/cours/cours5",id:"inf1256/cours/cours5",isDocsHomePage:!1,title:"Fichiers et exceptions",description:"Introduction aux fichiers",source:"@site/docs/inf1256/cours/cours5.md",slug:"/inf1256/cours/cours5",permalink:"/site/docs/inf1256/cours/cours5",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf1256/cours/cours5.md",version:"current",sidebar_label:"5 - Fichiers et exceptions",sidebar:"INF1256Sidebar",previous:{title:"Liste et tuples",permalink:"/site/docs/inf1256/cours/cours4"},next:{title:"Programmes \xe0 faire de l'atelier 1",permalink:"/site/docs/inf1256/atelier/atelier1"}},u=[{value:"Introduction aux fichiers",id:"introduction-aux-fichiers",children:[]},{value:"Types de fichiers",id:"types-de-fichiers",children:[]},{value:"Objet fichier",id:"objet-fichier",children:[]},{value:"Ouverture d&#39;un fichier",id:"ouverture-dun-fichier",children:[]},{value:"Fermeture d&#39;un fichier",id:"fermeture-dun-fichier",children:[]},{value:"\xc9criture dans un fichier",id:"\xe9criture-dans-un-fichier",children:[]},{value:"Exercice 1",id:"exercice-1",children:[]},{value:"Lecture dans un fichier",id:"lecture-dans-un-fichier",children:[]},{value:"\xc9criture/Lecture num\xe9rique",id:"\xe9criturelecture-num\xe9rique",children:[]},{value:"Traitement en boucle d&#39;un fichier",id:"traitement-en-boucle-dun-fichier",children:[]},{value:"Traitement en boucle d&#39;un fichier",id:"traitement-en-boucle-dun-fichier-1",children:[]},{value:"Exercice 2",id:"exercice-2",children:[]},{value:"Exceptions",id:"exceptions",children:[]},{value:"Gestion des exceptions",id:"gestion-des-exceptions",children:[]},{value:"Gestion avanc\xe9e",id:"gestion-avanc\xe9e",children:[]},{value:"Exceptions avec <code>with</code>",id:"exceptions-avec-with",children:[]}],o={rightToc:u};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction-aux-fichiers"},"Introduction aux fichiers"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Python peut acc\xe9der \xe0 des fichiers externes. Ces fichiers vont rester apr\xe8s l'ex\xe9cution de notre programme, contrairement aux variables. Il est donc possible de garder de l'information de mani\xe8res permanentes."),Object(a.b)("li",{parentName:"ul"},"Pour travailler avec les fichiers, des fonctions sp\xe9cifiques seront utilis\xe9es pour leurs gestions."),Object(a.b)("li",{parentName:"ul"},"Un concept d'objet fichier permet de faire r\xe9f\xe9rence \xe0 un fichier \xe0 l'aide d'une variable et autrement que par son nom.")),Object(a.b)("h2",{id:"types-de-fichiers"},"Types de fichiers"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Deux types de fichiers seront \xe9tudi\xe9s dans le cours:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Fichier texte (ASCII)"),Object(a.b)("li",{parentName:"ul"},"Fichier binaire"))),Object(a.b)("li",{parentName:"ul"},"Les fichiers textes contiennent des caract\xe8res ASCII qui pourront \xeatre affich\xe9s dans un \xe9diteur de texte (ex: Notepad)."),Object(a.b)("li",{parentName:"ul"},"Les fichiers binaires contiennent directement les informations des fichiers et peuvent prendre moins de place, mais sont plus difficiles \xe0 traiter. Dans le cours, nous ne verrons que les fichiers textes.")),Object(a.b)("h2",{id:"objet-fichier"},"Objet fichier"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Pour ne pas avoir \xe0 redonner le nom de fichier \xe0 chaque fonction, un objet fichier est utilis\xe9 pour repr\xe9senter le fichier durant ses interactions avec Python."),Object(a.b)("li",{parentName:"ul"},"La fonction ",Object(a.b)("inlineCode",{parentName:"li"},"open")," g\xe9n\xe8re un nouvel objet fichier qui sera utilis\xe9 par les fonctions subs\xe9quentes. Seule la fonction ",Object(a.b)("inlineCode",{parentName:"li"},"open")," a donc besoin du nom de fichier."),Object(a.b)("li",{parentName:"ul"},"L\u2019objet fichier est une variable qui permet \xe0 Python de savoir avec quel fichier interagir."),Object(a.b)("li",{parentName:"ul"},"L\u2019objet fichier permet aussi \xe0 Python de garder la position d\u2019un curseur dans le fichier. On peut donc lire plusieurs informations sans repartir du d\xe9but du fichier."),Object(a.b)("li",{parentName:"ul"},"Pour arr\xeater les interactions avec le fichier, la m\xe9thode ",Object(a.b)("inlineCode",{parentName:"li"},"close")," permet de lib\xe9rer l\u2019utilisation de l'objet ficher.")),Object(a.b)("h2",{id:"ouverture-dun-fichier"},"Ouverture d'un fichier"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"L'ouverture d'un fichier se fait avec la fonction ",Object(a.b)("inlineCode",{parentName:"li"},"open")," qui re\xe7oit un nom de fichier \xe0 ouvrir et un mode d'ouverture")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"mode"),Object(a.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"'r'"),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Ouverture en lecture")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"'w'"),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Ouverture en \xe9criture. \xc9crase le contenu courant.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"'a'"),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Ouverte en ajout. \xc9crit \xe0 partir de la fin du fichier")))),Object(a.b)("h2",{id:"fermeture-dun-fichier"},"Fermeture d'un fichier"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Une fois le fichier ouvert et le traitement fait, il faut fermer le fichier en utilisant la m\xe9thode ",Object(a.b)("inlineCode",{parentName:"li"},"close")," sur l'objet fichier.")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-Python"}),"# Ouverture du fichier\nfile = open('mon_fichier.txt', 'w')\n\n# Instruction de gestion du fichier\n\n# Fermeture du fichier\nfile.close()\n")),Object(a.b)("h2",{id:"\xe9criture-dans-un-fichier"},"\xc9criture dans un fichier"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"La m\xe9thode ",Object(a.b)("inlineCode",{parentName:"li"},"write")," permet d'\xe9crire dans un fichier. Le fichier doit avoir \xe9t\xe9 ouvert en \xe9criture.")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-Python"}),"# Ouverture du fichier\nfile = open('mon_fichier.txt', 'w')\n\n# \xc9criture dans le fichier\nfile.write('Allo\\n')\nfile.write('Salut\\n')\n\n# Fermeture du fichier\nfile.close()\n")),Object(a.b)("h2",{id:"exercice-1"},"Exercice 1"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\xc9crivez un programme qui saisit une liste de noms et l'\xe9crit dans un fichier. Le programme continue la saisie jusqu'\xe0 ce qu'une saisit soit vide.")),Object(a.b)("h2",{id:"lecture-dans-un-fichier"},"Lecture dans un fichier"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Nous pouvons lire le contenu total d'un fichier avec la m\xe9thode ",Object(a.b)("inlineCode",{parentName:"li"},"read"),"."),Object(a.b)("li",{parentName:"ul"},"Pour plus facilement traiter le contenu d'un fichier, la m\xe9thode ",Object(a.b)("inlineCode",{parentName:"li"},"readline")," permet de lire une ligne de texte \xe0 la fois."),Object(a.b)("li",{parentName:"ul"},"La fonction ",Object(a.b)("inlineCode",{parentName:"li"},"readline")," fait avancer un curseur jusqu'au prochain saut de ligne.")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-Python"}),"file = open('mon_fichier.txt', 'r')\n\nligne1 = file.readline()\nligne2 = file.readline()\nligne3 = file.readline()\n\nfile.close()\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Durant la lecture de ligne, le saut de ligne est inclus, il est possible de le supprimer avec la m\xe9thode ",Object(a.b)("inlineCode",{parentName:"li"},"rstrip"),".")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-Python"}),"ligne1 = ligne1.rstrip('\\n')\n")),Object(a.b)("h2",{id:"\xe9criturelecture-num\xe9rique"},"\xc9criture/Lecture num\xe9rique"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Pour \xe9crire des informations de variable num\xe9riques (int, float), on doit convertir les informations des variables avec la fonction ",Object(a.b)("inlineCode",{parentName:"li"},"str"),".")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-Python"}),"x = 34\n\nfile = open('mon_fichier.txt', 'w')\n\nfile.write(str(x))\n\nfile.close()\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Inversement, l'utilisation d'un ",Object(a.b)("inlineCode",{parentName:"li"},"readline")," devra \xeatre combin\xe9 comme avec l'utilisation de ",Object(a.b)("inlineCode",{parentName:"li"},"input")," avec ",Object(a.b)("inlineCode",{parentName:"li"},"int")," ou ",Object(a.b)("inlineCode",{parentName:"li"},"float"),".")),Object(a.b)("h2",{id:"traitement-en-boucle-dun-fichier"},"Traitement en boucle d'un fichier"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Un traitement commun de fichier sera de lire une s\xe9rie d'informations \xe0 l'int\xe9rieur d'un fichier sans savoir combien d'information le fichier contient."),Object(a.b)("li",{parentName:"ul"},"Une boucle nous permet de faire le travail \xe0 r\xe9p\xe9tition facilement.")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-Python"}),"file = open('mon_fichier.txt', 'r')\n\nline = file.readline()\n\n# Tant qu'il reste de l'information dans le fichier\nwhile line != ''\n    # Traite la ligne\n    print(line)\n\n    # Lit la prochaine ligne\n    line = file.readline()\n\nline.close()\n")),Object(a.b)("h2",{id:"traitement-en-boucle-dun-fichier-1"},"Traitement en boucle d'un fichier"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Python nous offre aussi la possibilit\xe9 d'utiliser la boucle for qui va automatiquement faire le ",Object(a.b)("inlineCode",{parentName:"li"},"readline")," d'un fichier.")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-Python"}),"file = open('mon_fichier.txt', 'r')\n\nfor line in file:\n    # Traitement du fichier\n    print(line)\n\nfile.close()\n")),Object(a.b)("h2",{id:"exercice-2"},"Exercice 2"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\xc9crivez un programme qui lit un fichier texte de notes d'\xe9valuations. Chaque note est contenue sur une ligne individuelle du fichier. La fonction trouve la moyenne des notes et l'affiche.")),Object(a.b)("h2",{id:"exceptions"},"Exceptions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Quand une erreur survient dans un programme, Python l\xe8ve un exception. Par d\xe9faut, une exception va arr\xeater l'ex\xe9cution du programme et affiche qui a lev\xe9 une exception.")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-Python"}),"x = 5\ny = 0\nres = x / y # L\xe8ve une exception ZeroDivisionError\n\nprint(res)\n")),Object(a.b)("h2",{id:"gestion-des-exceptions"},"Gestion des exceptions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Un bloc ",Object(a.b)("inlineCode",{parentName:"li"},"try/except")," permet de faire une gestion de l'exception \xe0 l'int\xe9rieur du programme."),Object(a.b)("li",{parentName:"ul"},"Le bloc ",Object(a.b)("inlineCode",{parentName:"li"},"try")," contient le code qui peut lever une exception."),Object(a.b)("li",{parentName:"ul"},"Le bloc ",Object(a.b)("inlineCode",{parentName:"li"},"except")," est ex\xe9cut\xe9 dans le cas de la lever d'une exception.")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-Python"}),"try:\n    x = 5\n    y = 0\n\n    res = x / y\n\n    print(res)\nexcept ZeroDivisionError:\n    print('Une division par 0 a \xe9t\xe9 lev\xe9e.')\n")),Object(a.b)("h2",{id:"gestion-avanc\xe9e"},"Gestion avanc\xe9e"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Il est possible d'avoir plusieurs gestions d'exception ainsi qu'un bloc ",Object(a.b)("inlineCode",{parentName:"li"},"else")," qui sera ex\xe9cut\xe9 si aucune exception n\u2019est lev\xe9e durant le bloc ",Object(a.b)("inlineCode",{parentName:"li"},"try"),".")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-Python"}),"try:\n    # L\xe8ve une exception IOError si le fichier est inexistant\n    file = open('mon_fichier', r')\n\n    # L\xe8ve une exception ValeurError si la conversion ne fonctionne pas\n    ligne = float(file.readline())\nexcept IOError:\n    print('Fichier manquant')\nexcept ValueError:\n    print('Mauvaise conversion')\nexcept:\n    print('Autre exception')\nelse:\n    print(ligne)\n")),Object(a.b)("h2",{id:"exceptions-avec-with"},"Exceptions avec ",Object(a.b)("inlineCode",{parentName:"h2"},"with")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Le bloc ",Object(a.b)("inlineCode",{parentName:"li"},"with")," permet de faire une instruction initiale et ex\xe9cut\xe9 un bloc de code si aucune erreur se produit."),Object(a.b)("li",{parentName:"ul"},"Cela est tr\xe8s utilis\xe9 avec les ouvertures de fichiers.")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-Python"}),"with open('mon_fichier.txt') as file:\n    for line in file:\n        print(line)\n")))}b.isMDXComponent=!0},97:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),b=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=b(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),s=b(t),p=i,f=s["".concat(c,".").concat(p)]||s[p]||d[p]||a;return t?r.a.createElement(f,l(l({ref:n},o),{},{components:t})):r.a.createElement(f,l({ref:n},o))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,c=new Array(a);c[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var o=2;o<a;o++)c[o]=t[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);