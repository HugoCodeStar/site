"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[474],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var l=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,l,i=function(e,n){if(null==e)return{};var t,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=l.createContext({}),o=function(e){var n=l.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=o(e.components);return l.createElement(u.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=o(t),m=i,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return t?l.createElement(g,r(r({ref:n},p),{},{components:t})):l.createElement(g,r({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var o=2;o<a;o++)r[o]=t[o];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8674:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var l=t(8168),i=(t(6540),t(5680));const a={title:"Liste et tuples",sidebar_label:"4 - Listes et tuples",sidebar_position:4},r=void 0,s={unversionedId:"inf1035/Cours/cours4",id:"inf1035/Cours/cours4",isDocsHomePage:!1,title:"Liste et tuples",description:"Listes",source:"@site/docs/inf1035/Cours/cours4.md",sourceDirName:"inf1035/Cours",slug:"/inf1035/Cours/cours4",permalink:"/site/docs/inf1035/Cours/cours4",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf1035/Cours/cours4.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Liste et tuples",sidebar_label:"4 - Listes et tuples",sidebar_position:4},sidebar:"INF1035Sidebar",previous:{title:"3 - Fonctions",permalink:"/site/docs/inf1035/Cours/cours3"},next:{title:"5 - Fichiers et exceptions",permalink:"/site/docs/inf1035/Cours/cours5"}},u=[{value:"Listes",id:"listes",children:[]},{value:"Initialisation de liste",id:"initialisation-de-liste",children:[]},{value:"Acc\xe8s aux \xe9l\xe9ments de la liste",id:"acc\xe8s-aux-\xe9l\xe9ments-de-la-liste",children:[]},{value:"Exercice 1",id:"exercice-1",children:[]},{value:"Liste dynamique",id:"liste-dynamique",children:[]},{value:"Parcours dans une liste",id:"parcours-dans-une-liste",children:[]},{value:"Exercice 2",id:"exercice-2",children:[]},{value:"D\xe9coupage d&#39;une liste (slicing)",id:"d\xe9coupage-dune-liste-slicing",children:[]},{value:"Passage de r\xe9f\xe9rence",id:"passage-de-r\xe9f\xe9rence",children:[]},{value:"Trouver un \xe9l\xe9ment dans une liste",id:"trouver-un-\xe9l\xe9ment-dans-une-liste",children:[]},{value:"M\xe9thodes sur les listes",id:"m\xe9thodes-sur-les-listes",children:[]},{value:"Exercice 3",id:"exercice-3",children:[]},{value:"Copie de liste",id:"copie-de-liste",children:[]},{value:"Tuple",id:"tuple",children:[]},{value:"Liste de multiple dimensions",id:"liste-de-multiple-dimensions",children:[]}],o={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,l.A)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"listes"},"Listes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Les listes sont des collections de plusieurs \xe9l\xe9ments de m\xeame type sous un seul identificateur;"),(0,i.yg)("li",{parentName:"ul"},"La liste est construite de cases m\xe9moire cons\xe9cutives en m\xe9moire;"),(0,i.yg)("li",{parentName:"ul"},"\xc0 chaque \xe9l\xe9ment de la liste, on associe un indice qui permet de facilement acc\xe9der aux cases individuellement;"),(0,i.yg)("li",{parentName:"ul"},"Nous regarderons pour commencer que des listes d'une dimension;")),(0,i.yg)("h2",{id:"initialisation-de-liste"},"Initialisation de liste"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"[ valeurs\xa0]")," - Une liste de valeurs d\xe9limit\xe9es par des virgules. Construis un tableau avec les valeurs donn\xe9es."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"list(range(x))")," permet de convertir le r\xe9sultat de la fonction ",(0,i.yg)("inlineCode",{parentName:"li"},"range")," en liste."),(0,i.yg)("li",{parentName:"ul"},"L'op\xe9rateur ",(0,i.yg)("inlineCode",{parentName:"li"},"*")," permet de r\xe9p\xe9ter liste quand une liste est l'un des op\xe9randes.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"liste = [4, 6, 3, 5, 7]\nliste_noms = ['Bob', 'Marie', 'Aird']\nliste_mixte = [3, True, 'ok']\nliste_repeat = ['allo'] * 3 # Donne ['allo', 'allo', 'allo']\nliste_range = list(range(4)) # Donne [0, 1, 2, 3]\nliste_repet = [1, 2] * 3 # Donne [1, 2, 1, 2, 1, 2]\n")),(0,i.yg)("h2",{id:"acc\xe8s-aux-\xe9l\xe9ments-de-la-liste"},"Acc\xe8s aux \xe9l\xe9ments de la liste"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"L'acc\xe8s aux \xe9l\xe9ments de la liste se fait \xe0 travers un indice. L'indice est utilis\xe9 entre des crochets ",(0,i.yg)("inlineCode",{parentName:"li"},"[]")," suivant l'identificateur de la liste;"),(0,i.yg)("li",{parentName:"ul"},"Cette m\xe9thode peut \xeatre utilis\xe9e pour assigner une valeur \xe0 une case sp\xe9cifique."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Attention")," : Les indices commencent \xe0 0.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"x = [3, 2, 5, 6, 7]\nprint(x[1])\n\nprint(x[2])\nx[2] = 4\nprint(x[2])\n")),(0,i.yg)("h2",{id:"exercice-1"},"Exercice 1"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\xc9crivez un programme qui cr\xe9e une liste de 5 \xe9l\xe9ments initialis\xe9s \xe0 0. Le programme remplit ensuite chaque \xe9l\xe9ment de la liste avec une saisie \xe0 l'utilisateur.")),(0,i.yg)("h2",{id:"liste-dynamique"},"Liste dynamique"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Les listes de Python sont dynamiques. Elles peuvent changer de taille au besoin;"),(0,i.yg)("li",{parentName:"ul"},"L'ajout d'\xe9l\xe9ments se fait avec la fonction ",(0,i.yg)("inlineCode",{parentName:"li"},"append"),";"),(0,i.yg)("li",{parentName:"ul"},"La concat\xe9nation de listes se fait avec l'op\xe9ration ",(0,i.yg)("inlineCode",{parentName:"li"},"+"),";"),(0,i.yg)("li",{parentName:"ul"},"La suppression d'un \xe9l\xe9ment se fait avec l'instruction ",(0,i.yg)("inlineCode",{parentName:"li"},"del"),".")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"x = [4, 5, 3]\ny = [1, 2, 3]\nx.append(7)\nprint(x[3]) # Affiche 7\n\nz = x + y\nprint(z) # Affiche [4, 5, 3, 7, 1, 2, 3]\n\ndel z[2]\nprint(z) # Affiche [4, 5, 7, 1, 2, 3]\n")),(0,i.yg)("h2",{id:"parcours-dans-une-liste"},"Parcours dans une liste"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"il est facile d'it\xe9rer sur une liste avec un for."),(0,i.yg)("li",{parentName:"ul"},"Trouvez la taille d'une liste avec la fonction ",(0,i.yg)("inlineCode",{parentName:"li"},"len"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"x = [3, 5, 2, 5]\n\nfor a in x:\n    print(a)\n\nprint(len(x))\n")),(0,i.yg)("h2",{id:"exercice-2"},"Exercice 2"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\xc9crivez une fonction qui re\xe7oit une liste et une valeur, la fonction retourne le nombre d'occurrences de la valeur dans la liste;"),(0,i.yg)("li",{parentName:"ul"},"\xc9crivez une fonction qui re\xe7oit une liste de taille inconnue, un seuil minimum, un seuil maximum et une nouvelle valeur. La fonction modifie toutes les valeurs de la liste entre les deux seuils \xe0 la nouvelle valeur re\xe7ue. La fonction retourne la liste avec les valeurs modifi\xe9es.")),(0,i.yg)("h2",{id:"d\xe9coupage-dune-liste-slicing"},"D\xe9coupage d'une liste (slicing)"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Une sous-liste d'une liste peut \xeatre g\xe9n\xe9r\xe9e en utilisant les op\xe9rations de d\xe9coupage."),(0,i.yg)("li",{parentName:"ul"},"Le d\xe9coupage prend deux indices, un de d\xe9but et un de fin (la fin sera exclue de la s\xe9lection)"),(0,i.yg)("li",{parentName:"ul"},"Il est possible d'omettre le d\xe9but ou la fin."),(0,i.yg)("li",{parentName:"ul"},"Si le d\xe9but est omis, l'indice 0 est utilis\xe9"),(0,i.yg)("li",{parentName:"ul"},"Si la fin est omise, l'indice de fin est la fin de la liste")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"x = ['a', 'b', 'c', 'd', 'e', 'f']\n\nmid_x = x[2:4] # Contient ['c', 'd']\n\nend_x = x[4:] # Contient ['e', 'f']\n")),(0,i.yg)("h2",{id:"passage-de-r\xe9f\xe9rence"},"Passage de r\xe9f\xe9rence"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"def modifie_valeur(l):\n    l[0] = 10\n\nx = [3, 5, 1]\nmodifie_valeur(x)\n\nprint(x) # Affiche [10, 3, 1]\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Les listes sont des objets qui sont pass\xe9s par r\xe9f\xe9rence;"),(0,i.yg)("li",{parentName:"ul"},"Les modifications \xe0 l'int\xe9rieur d'une fonction sont donc permanentes.")),(0,i.yg)("h2",{id:"trouver-un-\xe9l\xe9ment-dans-une-liste"},"Trouver un \xe9l\xe9ment dans une liste"),(0,i.yg)("p",null,"L'op\xe9rateur ",(0,i.yg)("inlineCode",{parentName:"p"},"in")," est aussi utilis\xe9 pour faire une recherche d'un \xe9l\xe9ment dans une liste."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"x = ['allo', 'salut', 'bonjour']\n\nif 'allo' in x:\n    print('Trouv\xe9!') # Va \xeatre affich\xe9\n\nif 'au revoir' in x:\n    print('Pas trouv\xe9...') # Ne sera pas affich\xe9\n")),(0,i.yg)("p",null,"Les fonctions ",(0,i.yg)("inlineCode",{parentName:"p"},"min")," et ",(0,i.yg)("inlineCode",{parentName:"p"},"max")," trouves l'\xe9l\xe9ment le plus petit ou plus grand dans une s\xe9quence (une liste est un type de s\xe9quence)."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"x = [5, 3, 8, 10, 4]\n\nprint(min(x)) # Affiche 3\nprint(max(x)) # Affiche 10\n")),(0,i.yg)("h2",{id:"m\xe9thodes-sur-les-listes"},"M\xe9thodes sur les listes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Les m\xe9thodes sont des fonctions sp\xe9ciales qui sont appell\xe9s directement de la liste."),(0,i.yg)("li",{parentName:"ul"},"Une m\xe9thode est appell\xe9 en pr\xe9fixant le nom de la liste avec un ",(0,i.yg)("inlineCode",{parentName:"li"},"."),"."),(0,i.yg)("li",{parentName:"ul"},"Les m\xe9thodes font partie de la programmation orient\xe9-objet que nous verrons \xe0 la fin du cours.")),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Fonction"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"append(index)"),(0,i.yg)("td",{parentName:"tr",align:null},"Ajoute un \xe9l\xe9ment \xe0 la fin de la liste.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"index(item)"),(0,i.yg)("td",{parentName:"tr",align:null},"Retourne l'indice du premier \xe9l\xe9ment trouv\xe9 dans la liste.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"insert(index, item)"),(0,i.yg)("td",{parentName:"tr",align:null},"Ins\xe8re ",(0,i.yg)("inlineCode",{parentName:"td"},"item")," \xe0 la position ",(0,i.yg)("inlineCode",{parentName:"td"},"index"),". D\xe9cale les autres \xe9l\xe9ments.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"sort()"),(0,i.yg)("td",{parentName:"tr",align:null},"Tri la liste de mani\xe8re croissante.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"remove(item)"),(0,i.yg)("td",{parentName:"tr",align:null},"Enl\xe8ve la premi\xe8re occurrence o\xf9 ",(0,i.yg)("inlineCode",{parentName:"td"},"item")," se trouve dans la liste.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"reverse()"),(0,i.yg)("td",{parentName:"tr",align:null},"Inverse la liste.")))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"x = [3, 7, 10, 2]\n\nx.sort()\n\nprint(x) # Affiche [2, 3, 7, 10]\n")),(0,i.yg)("h2",{id:"exercice-3"},"Exercice 3"),(0,i.yg)("p",null,"\xc9crivez une fonction qui re\xe7oit une liste, la trie et supprime la moiti\xe9 sup\xe9rieure de la liste."),(0,i.yg)("h2",{id:"copie-de-liste"},"Copie de liste"),(0,i.yg)("p",null,"L'assigne d'une liste dans une autre variable ne fait ",(0,i.yg)("strong",{parentName:"p"},"pas")," la copie de la liste. Elle fait un r\xe9f\xe9rence \xe0 la liste.\nPour faire la copie de la liste, la m\xe9thode ",(0,i.yg)("inlineCode",{parentName:"p"},"copy")," est disponible."),(0,i.yg)("p",null,"Example de la r\xe9f\xe9rence"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"x = [1, 2, 3]\ny = x\nx[0] = 10\nprint(y) # Affiche [10, 2, 3]\n")),(0,i.yg)("p",null,"Copie de la liste"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"x = [1, 2, 3]\ny = x.copy()\nx[0] = 10\nprint(y) # Affiche [10, 2, 3]\n")),(0,i.yg)("h2",{id:"tuple"},"Tuple"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Le tulpe est tr\xe8s sembable \xe0 une liste. La diff\xe9rence fondamental est que le tuple est immuable. Il ne peux pas \xeatre modifier apr\xe8s sa cr\xe9ation. Les tuples utilisent des parenth\xe8ses \xe0 la place de crochet carr\xe9s des listes \xe0 leurs cr\xe9ations.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"monTuple = (4, 6, 8, 3)\nprint(monTuple) #Affiche (4, 6, 8, 3)\nprint(monTuple[2]) #Affiche 8\nmonTuple[0] = 10 # G\xe9n\xe8re une erreur\n")),(0,i.yg)("p",null,"Il est possible de convertir un tuple en liste avec la fonction ",(0,i.yg)("inlineCode",{parentName:"p"},"list")," qui re\xe7oit le tuple et retourne une liste avec les m\xeames \xe9l\xe9ments."),(0,i.yg)("h2",{id:"liste-de-multiple-dimensions"},"Liste de multiple dimensions"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"En incorporant des listes de listes, il est possible de faire la repr\xe9sentation d'une matrice.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"valeurs = [[1, 2, 3], [4, 5, 6]]\n# Repr\xe9sente\n# 1 2 3\n# 4 5 6\n\n# Modification de la case avec la valeur 6\nvaleurs[1][2] = 10\nprint(valeurs) # Affiche [[1, 2, 3], [4, 5, 10]]\n")))}d.isMDXComponent=!0}}]);