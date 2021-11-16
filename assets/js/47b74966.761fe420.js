"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[3563],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4043:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={title:"Fonctions",sidebar_label:"3 - Fonctions",sidebar_position:3},s=void 0,u={unversionedId:"inf1035/Cours/cours3",id:"inf1035/Cours/cours3",isDocsHomePage:!1,title:"Fonctions",description:"Fonctions",source:"@site/docs/inf1035/Cours/cours3.md",sourceDirName:"inf1035/Cours",slug:"/inf1035/Cours/cours3",permalink:"/site/docs/inf1035/Cours/cours3",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf1035/Cours/cours3.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Fonctions",sidebar_label:"3 - Fonctions",sidebar_position:3},sidebar:"INF1035Sidebar",previous:{title:"2 - If, While, For",permalink:"/site/docs/inf1035/Cours/cours2"},next:{title:"4 - Listes et tuples",permalink:"/site/docs/inf1035/Cours/cours4"}},c=[{value:"Fonctions",id:"fonctions",children:[]},{value:"Pr\xe9sentation d&#39;une fonction minimale",id:"pr\xe9sentation-dune-fonction-minimale",children:[]},{value:"Param\xe8tres d&#39;entr\xe9es",id:"param\xe8tres-dentr\xe9es",children:[]},{value:"Retours",id:"retours",children:[]},{value:"Exercice 1",id:"exercice-1",children:[]},{value:"Pr\xe9sentation de l&#39;en-t\xeate d&#39;une fonction",id:"pr\xe9sentation-de-len-t\xeate-dune-fonction",children:[]},{value:"Contexte et dur\xe9e de vies des variables",id:"contexte-et-dur\xe9e-de-vies-des-variables",children:[]},{value:"Passage par valeurs",id:"passage-par-valeurs",children:[]},{value:"Exercice 2",id:"exercice-2",children:[]},{value:"Variables globales",id:"variables-globales",children:[]},{value:"Modules",id:"modules",children:[]},{value:"Modules fournis",id:"modules-fournis",children:[]},{value:"Exercice 3",id:"exercice-3",children:[]}],p={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"fonctions"},"Fonctions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Les fonctions sont des s\xe9ries d'instructions contenues dans un ensemble pouvant \xeatre facilement re-utilis\xe9. Par convention, la fonction doit faire une t\xe2che simple et pr\xe9cise;"),(0,i.kt)("li",{parentName:"ul"},"Contrairement aux scripts, les fonctions n'auront pas de saisit avec ",(0,i.kt)("inlineCode",{parentName:"li"},"input")," et pas d'affichage avec ",(0,i.kt)("inlineCode",{parentName:"li"},"print"),". Cela \xe0 moins d'\xeatre express\xe9ment demand\xe9."),(0,i.kt)("li",{parentName:"ul"},"Les fonctions peuvent demander des param\xe8tres (ou arguments) d'entr\xe9es. Ce sont des informations pr\xe9alables aux calculs de la fonction;"),(0,i.kt)("li",{parentName:"ul"},"Les fonctions peuvent \xe9mettre des r\xe9ponses que l'on appelle retour.")),(0,i.kt)("h2",{id:"pr\xe9sentation-dune-fonction-minimale"},"Pr\xe9sentation d'une fonction minimale"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def nomFonction():\n    instructions\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Une fonction est au d\xe9but du fichier;"),(0,i.kt)("li",{parentName:"ul"},"La fonction peut ensuite \xeatre appel\xe9e par son nom d'autres programmes.")),(0,i.kt)("h2",{id:"param\xe8tres-dentr\xe9es"},"Param\xe8tres d'entr\xe9es"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Une fonction peut demander des param\xe8tres d'entr\xe9es;"),(0,i.kt)("li",{parentName:"ul"},"Ceux-ci seront dans une liste apr\xe8s le nom de la fonction entre parenth\xe8ses d\xe9limit\xe9e par une virgule;"),(0,i.kt)("li",{parentName:"ul"},"Les param\xe8tres d'entr\xe9es seront fournis par l'appelant de la fonction et peuvent donc \xeatre utilis\xe9s \xe0 l'int\xe9rieur des instructions de la fonction sans \xeatre assign\xe9s pr\xe9alablement.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def fcnAvecIn(var1, var2):\n    print(var1 * var2)\n\n")),(0,i.kt)("h2",{id:"retours"},"Retours"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"La fonction peut retourner un r\xe9sultat qui sera utilisable par l'appelant de la fonction."),(0,i.kt)("li",{parentName:"ul"},"Le mot-cl\xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"return")," est utilis\xe9 quand l'expression de retour est pr\xeate \xe0 \xeatre renvoy\xe9e."),(0,i.kt)("li",{parentName:"ul"},"Une fonction qui ne contient pas de retour est aussi nomm\xe9e une proc\xe9dure.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def fcnAvecRetour():\n    instructions\n    return expression\n")),(0,i.kt)("h2",{id:"exercice-1"},"Exercice 1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\xc9crivez une fonction qui trouve l\u2019aire d\u2019un triangle \xe0 partir de sa base et sa hauteur."),(0,i.kt)("li",{parentName:"ul"},"\xc9crivez une fonction qui d\xe9termine si un nombre est impair.")),(0,i.kt)("h2",{id:"pr\xe9sentation-de-len-t\xeate-dune-fonction"},"Pr\xe9sentation de l'en-t\xeate d'une fonction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def nomFonction(arg1, arg2):\n"""\nDescription g\xe9n\xe9rale de la fonction\nArgs:\n  arg1 (float) - Description de l\'arg1\n  arg2 (bool) - Description de l\'arg2\nReturns:\n  float: Description de retour1\nExample:\n  >> nomFonction(4,6)\n      34\n"""\n    instructions\n')),(0,i.kt)("h2",{id:"contexte-et-dur\xe9e-de-vies-des-variables"},"Contexte et dur\xe9e de vies des variables"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tout ce qui se passe \xe0 l'int\xe9rieur des fonctions est d\xe9truit apr\xe8s l'appel de la fonction;"),(0,i.kt)("li",{parentName:"ul"},"Toute d\xe9claration de variables \xe0 l'int\xe9rieur d'une fonction est d\xe9truite apr\xe8s l'appel de la fonction;"),(0,i.kt)("li",{parentName:"ul"},"Seule la valeur de retour est renvoy\xe9e.")),(0,i.kt)("h2",{id:"passage-par-valeurs"},"Passage par valeurs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Les param\xe8tres et les retours sont renomm\xe9s pour la dur\xe9e de la fonction. Les noms des param\xe8tres de la fonction se nomment param\xe8tres formels;"),(0,i.kt)("li",{parentName:"ul"},"Seules leurs valeurs seront transf\xe9r\xe9es entre la fonction et l'appelant. On utilise le terme param\xe8tres effectifs;"),(0,i.kt)("li",{parentName:"ul"},"Les noms des param\xe8tres et des retours n'ont aucune incidence;"),(0,i.kt)("li",{parentName:"ul"},"L'ordre des param\xe8tres et des retours est ce qui sera consid\xe9r\xe9.")),(0,i.kt)("h2",{id:"exercice-2"},"Exercice 2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Quel est le r\xe9sultat de l'affichage du script ",(0,i.kt)("inlineCode",{parentName:"li"},"passageParValeurTest.py"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# passageParValeurTest.py\ndef  passageParValeur(x, y):\n    x = x + 2\n    y = y - 2\n    z = x - y + 2\n    return z\n\nx = 4\nz = 8\ny = 6\nx = passageParValeur(y,x)\nprint('La valeur de x,y et z sont :', x, y, z)\n")),(0,i.kt)("h2",{id:"variables-globales"},"Variables globales"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Une variable globale permet de lier une variable de l\u2019espace de travail normal \xe0 l\u2019espace de travail d\u2019une fonction;"),(0,i.kt)("li",{parentName:"ul"},"La variable est d\xe9clar\xe9e comme globale dans l\u2019espace de travail principal du script;"),(0,i.kt)("li",{parentName:"ul"},"Sauf avis contraire, l\u2019utilisation de variable globale est ",(0,i.kt)("strong",{parentName:"li"},"interdite")," dans le cours.")),(0,i.kt)("h2",{id:"modules"},"Modules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plusieurs fichiers de python avec diff\xe9rentes fonctions peuvent interagir entre eux. Chaque fichier cr\xe9\xe9 est consid\xe9r\xe9 comme \xe9tant un module qu'on peut importer dans pour nos programmes;"),(0,i.kt)("li",{parentName:"ul"},"La commande ",(0,i.kt)("inlineCode",{parentName:"li"},"import")," permet d\u2019importer les fonctions d'un autre fichier;"),(0,i.kt)("li",{parentName:"ul"},"Le nom du module est le nom du fichier sans son extension ",(0,i.kt)("inlineCode",{parentName:"li"},".py"),";"),(0,i.kt)("li",{parentName:"ul"},"L'utilisation des fonctions du module importer devra \xeatre pr\xe9c\xe9d\xe9e du nom du module et un point.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import mon_module # Du fichier mon_module.py\n\n# Appel de la fonction du module import\xe9.\nmon_module.ma_fonction(4, 5)\n")),(0,i.kt)("h2",{id:"modules-fournis"},"Modules fournis"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plusieurs modules sont fournis et nous verrons qu'il existe un tr\xe8s grand \xe9cosyst\xe8me de module pouvant nous faciliter la cr\xe9ation de nos programmes."),(0,i.kt)("li",{parentName:"ul"},"Par exemple, le module ",(0,i.kt)("inlineCode",{parentName:"li"},"math")," nous donne plusieurs fonctions math\xe9matiques communes."),(0,i.kt)("li",{parentName:"ul"},"Pour savoir lesquelles et leurs utilisations, il faut consulter leur documentation;",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/math.html"},"https://docs.python.org/3/library/math.html"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import math\n\nreponse = math.sqrt(45)\n")),(0,i.kt)("h2",{id:"exercice-3"},"Exercice 3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\xc9crivez une fonction qui re\xe7oit la base et hauteur et retourne la valeur de l'angle adjacent \xe0 la base d'un triangle isoc\xe8le.")))}d.isMDXComponent=!0}}]);