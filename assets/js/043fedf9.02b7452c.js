"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[7930],{3905:function(e,n,i){i.d(n,{Zo:function(){return s},kt:function(){return m}});var t=i(7294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function u(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var o=t.createContext({}),c=function(e){var n=t.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},s=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(i),f=r,m=d["".concat(o,".").concat(f)]||d[f]||p[f]||a;return i?t.createElement(m,l(l({ref:n},s),{},{components:i})):t.createElement(m,l({ref:n},s))}));function m(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=f;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[d]="string"==typeof e?e:r,l[1]=u;for(var c=2;c<a;c++)l[c]=i[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}f.displayName="MDXCreateElement"},5114:function(e,n,i){i.r(n),i.d(n,{contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var t=i(7462),r=i(3366),a=(i(7294),i(3905)),l=["components"],u={title:"Fichiers et exceptions",sidebar_label:"5 - Fichiers et exceptions",sidebar_position:5},o=void 0,c={unversionedId:"inf1035/Cours/cours5",id:"inf1035/Cours/cours5",isDocsHomePage:!1,title:"Fichiers et exceptions",description:"Introduction aux fichiers",source:"@site/docs/inf1035/Cours/cours5.md",sourceDirName:"inf1035/Cours",slug:"/inf1035/Cours/cours5",permalink:"/site/docs/inf1035/Cours/cours5",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf1035/Cours/cours5.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Fichiers et exceptions",sidebar_label:"5 - Fichiers et exceptions",sidebar_position:5},sidebar:"INF1035Sidebar",previous:{title:"4 - Listes et tuples",permalink:"/site/docs/inf1035/Cours/cours4"},next:{title:"6 - Chaines de caract\xe8res",permalink:"/site/docs/inf1035/Cours/cours6"}},s=[{value:"Introduction aux fichiers",id:"introduction-aux-fichiers",children:[]},{value:"Types de fichiers",id:"types-de-fichiers",children:[]},{value:"Objet fichier",id:"objet-fichier",children:[]},{value:"Ouverture d&#39;un fichier",id:"ouverture-dun-fichier",children:[]},{value:"Fermeture d&#39;un fichier",id:"fermeture-dun-fichier",children:[]},{value:"\xc9criture dans un fichier",id:"\xe9criture-dans-un-fichier",children:[]},{value:"Exercice 1",id:"exercice-1",children:[]},{value:"Lecture dans un fichier",id:"lecture-dans-un-fichier",children:[]},{value:"\xc9criture/Lecture num\xe9rique",id:"\xe9criturelecture-num\xe9rique",children:[]},{value:"Traitement en boucle d&#39;un fichier",id:"traitement-en-boucle-dun-fichier",children:[]},{value:"Traitement en boucle d&#39;un fichier",id:"traitement-en-boucle-dun-fichier-1",children:[]},{value:"Exercice 2",id:"exercice-2",children:[]},{value:"Exceptions",id:"exceptions",children:[]},{value:"Gestion des exceptions",id:"gestion-des-exceptions",children:[]},{value:"Gestion avanc\xe9e",id:"gestion-avanc\xe9e",children:[]},{value:"Exceptions avec <code>with</code>",id:"exceptions-avec-with",children:[]}],d={toc:s},p="wrapper";function f(e){var n=e.components,i=(0,r.Z)(e,l);return(0,a.kt)(p,(0,t.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction-aux-fichiers"},"Introduction aux fichiers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Python peut acc\xe9der \xe0 des fichiers externes. Ces fichiers vont rester apr\xe8s l'ex\xe9cution de notre programme, contrairement aux variables. Il est donc possible de garder de l'information de mani\xe8res permanentes."),(0,a.kt)("li",{parentName:"ul"},"Pour travailler avec les fichiers, des fonctions sp\xe9cifiques seront utilis\xe9es pour leurs gestions."),(0,a.kt)("li",{parentName:"ul"},"Un concept d'objet fichier permet de faire r\xe9f\xe9rence \xe0 un fichier \xe0 l'aide d'une variable et autrement que par son nom.")),(0,a.kt)("h2",{id:"types-de-fichiers"},"Types de fichiers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deux types de fichiers seront \xe9tudi\xe9s dans le cours:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Fichier texte (ASCII)"),(0,a.kt)("li",{parentName:"ul"},"Fichier binaire"))),(0,a.kt)("li",{parentName:"ul"},"Les fichiers textes contiennent des caract\xe8res ASCII qui pourront \xeatre affich\xe9s dans un \xe9diteur de texte (ex: Notepad)."),(0,a.kt)("li",{parentName:"ul"},"Les fichiers binaires contiennent directement les informations des fichiers et peuvent prendre moins de place, mais sont plus difficiles \xe0 traiter. Dans le cours, nous ne verrons que les fichiers textes.")),(0,a.kt)("h2",{id:"objet-fichier"},"Objet fichier"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pour ne pas avoir \xe0 redonner le nom de fichier \xe0 chaque fonction, un objet fichier est utilis\xe9 pour repr\xe9senter le fichier durant ses interactions avec Python."),(0,a.kt)("li",{parentName:"ul"},"La fonction ",(0,a.kt)("inlineCode",{parentName:"li"},"open")," g\xe9n\xe8re un nouvel objet fichier qui sera utilis\xe9 par les fonctions subs\xe9quentes. Seule la fonction ",(0,a.kt)("inlineCode",{parentName:"li"},"open")," a donc besoin du nom de fichier."),(0,a.kt)("li",{parentName:"ul"},"L\u2019objet fichier est une variable qui permet \xe0 Python de savoir avec quel fichier interagir."),(0,a.kt)("li",{parentName:"ul"},"L\u2019objet fichier permet aussi \xe0 Python de garder la position d\u2019un curseur dans le fichier. On peut donc lire plusieurs informations sans repartir du d\xe9but du fichier."),(0,a.kt)("li",{parentName:"ul"},"Pour arr\xeater les interactions avec le fichier, la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"li"},"close")," permet de lib\xe9rer l\u2019utilisation de l'objet ficher.")),(0,a.kt)("h2",{id:"ouverture-dun-fichier"},"Ouverture d'un fichier"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"L'ouverture d'un fichier se fait avec la fonction ",(0,a.kt)("inlineCode",{parentName:"li"},"open")," qui re\xe7oit un nom de fichier \xe0 ouvrir et un mode d'ouverture")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"mode"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"'r'"),(0,a.kt)("td",{parentName:"tr",align:null},"Ouverture en lecture")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"'w'"),(0,a.kt)("td",{parentName:"tr",align:null},"Ouverture en \xe9criture. \xc9crase le contenu courant.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"'a'"),(0,a.kt)("td",{parentName:"tr",align:null},"Ouverte en ajout. \xc9crit \xe0 partir de la fin du fichier")))),(0,a.kt)("h2",{id:"fermeture-dun-fichier"},"Fermeture d'un fichier"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Une fois le fichier ouvert et le traitement fait, il faut fermer le fichier en utilisant la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"li"},"close")," sur l'objet fichier.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"# Ouverture du fichier\nfile = open('mon_fichier.txt', 'w')\n\n# Instruction de gestion du fichier\n\n# Fermeture du fichier\nfile.close()\n")),(0,a.kt)("h2",{id:"\xe9criture-dans-un-fichier"},"\xc9criture dans un fichier"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"La m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"li"},"write")," permet d'\xe9crire dans un fichier. Le fichier doit avoir \xe9t\xe9 ouvert en \xe9criture.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"# Ouverture du fichier\nfile = open('mon_fichier.txt', 'w')\n\n# \xc9criture dans le fichier\nfile.write('Allo\\n')\nfile.write('Salut\\n')\n\n# Fermeture du fichier\nfile.close()\n")),(0,a.kt)("h2",{id:"exercice-1"},"Exercice 1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xc9crivez un programme qui saisit une liste de noms et l'\xe9crit dans un fichier. Le programme continue la saisie jusqu'\xe0 ce qu'une saisit soit vide.")),(0,a.kt)("h2",{id:"lecture-dans-un-fichier"},"Lecture dans un fichier"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nous pouvons lire le contenu total d'un fichier avec la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"li"},"read"),"."),(0,a.kt)("li",{parentName:"ul"},"Pour plus facilement traiter le contenu d'un fichier, la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"li"},"readline")," permet de lire une ligne de texte \xe0 la fois."),(0,a.kt)("li",{parentName:"ul"},"La fonction ",(0,a.kt)("inlineCode",{parentName:"li"},"readline")," fait avancer un curseur jusqu'au prochain saut de ligne.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"file = open('mon_fichier.txt', 'r')\n\nligne1 = file.readline()\nligne2 = file.readline()\nligne3 = file.readline()\n\nfile.close()\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Durant la lecture de ligne, le saut de ligne est inclus, il est possible de le supprimer avec la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"li"},"rstrip"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"ligne1 = ligne1.rstrip('\\n')\n")),(0,a.kt)("h2",{id:"\xe9criturelecture-num\xe9rique"},"\xc9criture/Lecture num\xe9rique"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pour \xe9crire des informations de variable num\xe9riques (int, float), on doit convertir les informations des variables avec la fonction ",(0,a.kt)("inlineCode",{parentName:"li"},"str"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"x = 34\n\nfile = open('mon_fichier.txt', 'w')\n\nfile.write(str(x))\n\nfile.close()\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Inversement, l'utilisation d'un ",(0,a.kt)("inlineCode",{parentName:"li"},"readline")," devra \xeatre combin\xe9 comme avec l'utilisation de ",(0,a.kt)("inlineCode",{parentName:"li"},"input")," avec ",(0,a.kt)("inlineCode",{parentName:"li"},"int")," ou ",(0,a.kt)("inlineCode",{parentName:"li"},"float"),".")),(0,a.kt)("h2",{id:"traitement-en-boucle-dun-fichier"},"Traitement en boucle d'un fichier"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Un traitement commun de fichier sera de lire une s\xe9rie d'informations \xe0 l'int\xe9rieur d'un fichier sans savoir combien d'information le fichier contient."),(0,a.kt)("li",{parentName:"ul"},"Une boucle nous permet de faire le travail \xe0 r\xe9p\xe9tition facilement.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"file = open('mon_fichier.txt', 'r')\n\nline = file.readline()\n\n# Tant qu'il reste de l'information dans le fichier\nwhile line != '':\n    # Traite la ligne\n    print(line)\n\n    # Lit la prochaine ligne\n    line = file.readline()\n\nfile.close()\n")),(0,a.kt)("h2",{id:"traitement-en-boucle-dun-fichier-1"},"Traitement en boucle d'un fichier"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Python nous offre aussi la possibilit\xe9 d'utiliser la boucle for qui va automatiquement faire le ",(0,a.kt)("inlineCode",{parentName:"li"},"readline")," d'un fichier.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"file = open('mon_fichier.txt', 'r')\n\nfor line in file:\n    # Traitement du fichier\n    print(line)\n\nfile.close()\n")),(0,a.kt)("h2",{id:"exercice-2"},"Exercice 2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xc9crivez un programme qui lit un fichier texte de notes d'\xe9valuations. Chaque note est contenue sur une ligne individuelle du fichier. La fonction trouve la moyenne des notes et l'affiche.")),(0,a.kt)("h2",{id:"exceptions"},"Exceptions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Quand une erreur survient dans un programme, Python l\xe8ve un exception. Par d\xe9faut, une exception va arr\xeater l'ex\xe9cution du programme et affiche qui a lev\xe9 une exception.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"x = 5\ny = 0\nres = x / y # L\xe8ve une exception ZeroDivisionError\n\nprint(res)\n")),(0,a.kt)("h2",{id:"gestion-des-exceptions"},"Gestion des exceptions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Un bloc ",(0,a.kt)("inlineCode",{parentName:"li"},"try/except")," permet de faire une gestion de l'exception \xe0 l'int\xe9rieur du programme."),(0,a.kt)("li",{parentName:"ul"},"Le bloc ",(0,a.kt)("inlineCode",{parentName:"li"},"try")," contient le code qui peut lever une exception."),(0,a.kt)("li",{parentName:"ul"},"Le bloc ",(0,a.kt)("inlineCode",{parentName:"li"},"except")," est ex\xe9cut\xe9 dans le cas de la lever d'une exception.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"try:\n    x = 5\n    y = 0\n\n    res = x / y\n\n    print(res)\nexcept ZeroDivisionError:\n    print('Une division par 0 a \xe9t\xe9 lev\xe9e.')\n")),(0,a.kt)("h2",{id:"gestion-avanc\xe9e"},"Gestion avanc\xe9e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Il est possible d'avoir plusieurs gestions d'exception ainsi qu'un bloc ",(0,a.kt)("inlineCode",{parentName:"li"},"else")," qui sera ex\xe9cut\xe9 si aucune exception n\u2019est lev\xe9e durant le bloc ",(0,a.kt)("inlineCode",{parentName:"li"},"try"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"try:\n    # L\xe8ve une exception IOError si le fichier est inexistant\n    file = open('mon_fichier', r')\n\n    # L\xe8ve une exception ValeurError si la conversion ne fonctionne pas\n    ligne = float(file.readline())\nexcept IOError:\n    print('Fichier manquant')\nexcept ValueError:\n    print('Mauvaise conversion')\nexcept:\n    print('Autre exception')\nelse:\n    print(ligne)\n")),(0,a.kt)("h2",{id:"exceptions-avec-with"},"Exceptions avec ",(0,a.kt)("inlineCode",{parentName:"h2"},"with")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Le bloc ",(0,a.kt)("inlineCode",{parentName:"li"},"with")," permet de faire une instruction initiale et ex\xe9cut\xe9 un bloc de code si aucune erreur se produit."),(0,a.kt)("li",{parentName:"ul"},"Cela est tr\xe8s utilis\xe9 avec les ouvertures de fichiers.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"with open('mon_fichier.txt') as file:\n    for line in file:\n        print(line)\n")))}f.isMDXComponent=!0}}]);