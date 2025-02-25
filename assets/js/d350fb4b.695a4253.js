"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[9133],{830:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(8168),i=(n(6540),n(5680));const a={title:"Liste en compr\xe9hension, tests unitaires, environnement de d\xe9veloppement",sidebar_label:"8 - Liste, Test & IDE",sidebar_position:8},s=void 0,o={unversionedId:"inf1035/Cours/cours8",id:"inf1035/Cours/cours8",isDocsHomePage:!1,title:"Liste en compr\xe9hension, tests unitaires, environnement de d\xe9veloppement",description:"Liste en compr\xe9hension",source:"@site/docs/inf1035/Cours/cours8.md",sourceDirName:"inf1035/Cours",slug:"/inf1035/Cours/cours8",permalink:"/site/docs/inf1035/Cours/cours8",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf1035/Cours/cours8.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Liste en compr\xe9hension, tests unitaires, environnement de d\xe9veloppement",sidebar_label:"8 - Liste, Test & IDE",sidebar_position:8},sidebar:"INF1035Sidebar",previous:{title:"7 - Set, dictionnaire, csv et JSON",permalink:"/site/docs/inf1035/Cours/cours7"},next:{title:"9 - POO",permalink:"/site/docs/inf1035/Cours/cours9"}},l=[{value:"Liste en compr\xe9hension",id:"liste-en-compr\xe9hension",children:[]},{value:"Ajout de condition ou de boucle imbriqu\xe9s",id:"ajout-de-condition-ou-de-boucle-imbriqu\xe9s",children:[]},{value:"Jupyter Lab/Notebooks",id:"jupyter-labnotebooks",children:[]},{value:"IDE",id:"ide",children:[]},{value:"PyCharm",id:"pycharm",children:[{value:"D\xe9boguage",id:"d\xe9boguage",children:[]}]},{value:"Test unitaires",id:"test-unitaires",children:[]},{value:"Tests",id:"tests",children:[]},{value:"Exemple de tests",id:"exemple-de-tests",children:[]},{value:"Tests de valeurs fractionnaires",id:"tests-de-valeurs-fractionnaires",children:[]}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"liste-en-compr\xe9hension"},"Liste en compr\xe9hension"),(0,i.yg)("p",null,"Une liste en compr\xe9hension est un raccourci syntaxique pour cr\xe9\xe9 des liste. Cela permet de faire ce qui est habituellement dans une boucle sur une seule ligne."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"squares = []\nfor x in range(10):\n    squares.append(x**2)\n\n# \xc9quivalent avec une liste en compr\xe9hension\nsquares = [x**2 for x in range(10)]\n")),(0,i.yg)("h2",{id:"ajout-de-condition-ou-de-boucle-imbriqu\xe9s"},"Ajout de condition ou de boucle imbriqu\xe9s"),(0,i.yg)("p",null,"Il est possible d'avoir apr\xe8s le ",(0,i.yg)("inlineCode",{parentName:"p"},"for")," initial d'autre ",(0,i.yg)("inlineCode",{parentName:"p"},"for")," ou des conditionnelles ",(0,i.yg)("inlineCode",{parentName:"p"},"if"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"combs = []\nfor x in [1,2,3]:\n    for y in [3,1,4]:\n        if x != y:\n            combs.append((x, y))\n\n# \xc9quivalent\ncombs = [(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]\n")),(0,i.yg)("h2",{id:"jupyter-labnotebooks"},"Jupyter Lab/Notebooks"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://jupyter.org/"},"https://jupyter.org/")),(0,i.yg)("li",{parentName:"ul"},"Interface web avec un m\xe9lange de texte et d'instruction"),(0,i.yg)("li",{parentName:"ul"},"Tr\xe8s utile pour de la visualisation de probl\xe8me")),(0,i.yg)("h2",{id:"ide"},"IDE"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Les environnements de d\xe9veloppement (Integrated Development Environment - IDE) permettent de centraliser dans un application le d\xe9veloppement de programme en Python."),(0,i.yg)("li",{parentName:"ul"},"Inversement, il est possible d'execut\xe9 des script dans la ligne de commande de l'ordinateurs."),(0,i.yg)("li",{parentName:"ul"},"Il existe une panoplie d'IDE. Deux seront regarder aujourd'hui :",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"PyCharm"),(0,i.yg)("li",{parentName:"ul"},"Jupiter Notebook")))),(0,i.yg)("h2",{id:"pycharm"},"PyCharm"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.jetbrains.com/pycharm/"},"https://www.jetbrains.com/pycharm/")),(0,i.yg)("li",{parentName:"ul"},"PyCharm est un IDE pour le d\xe9veloppement d'application en python.",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Gestion de plusieurs fichiers"),(0,i.yg)("li",{parentName:"ul"},"Installation de module externe avec pip"),(0,i.yg)("li",{parentName:"ul"},"D\xe9boguage de code pas \xe0 pas")))),(0,i.yg)("h3",{id:"d\xe9boguage"},"D\xe9boguage"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Permet de voir chaque pas du programme"),(0,i.yg)("li",{parentName:"ul"},"Le programme continue jusqu'au prochain point d'arr\xeat"),(0,i.yg)("li",{parentName:"ul"},"Les structure de donn\xe9es peuvents \xeatre \xe9valu\xe9 localement.")),(0,i.yg)("h2",{id:"test-unitaires"},"Test unitaires"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Les tests unitaires est un m\xe9thodes standardis\xe9 de v\xe9rifier le bon fonctionnement des fonctions de notres programmes. "),(0,i.yg)("li",{parentName:"ul"},"Les tests unitaires est des fonctions sp\xe9cialis\xe9 pour v\xe9rifier le r\xe9sultats de d'autres fonctions.")),(0,i.yg)("h2",{id:"tests"},"Tests"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Pour assurer la bonne op\xe9ration de nos fonctions, des tests seront impl\xe9ment\xe9s;"),(0,i.yg)("li",{parentName:"ul"},"Nous utiliserons la libraire ",(0,i.yg)("inlineCode",{parentName:"li"},"pytest")," pour faire nos tests. Il existe d'autres librairies de tests."),(0,i.yg)("li",{parentName:"ul"},"Un test est un script qui, par convention, utilise le nom du programme \xe0 tester suivi du mot ",(0,i.yg)("inlineCode",{parentName:"li"},"test"),";"),(0,i.yg)("li",{parentName:"ul"},"Le test va convenir des fonctions d\xe9butant par le mot ",(0,i.yg)("inlineCode",{parentName:"li"},"test_")," qui seront utilis\xe9es par ",(0,i.yg)("inlineCode",{parentName:"li"},"pytest"),";"),(0,i.yg)("li",{parentName:"ul"},"La fonction\xa0",(0,i.yg)("inlineCode",{parentName:"li"},"assert")," teste une condition. La fonction ne fait rien si la condition est vraie et g\xe9n\xe8re une erreur si la condition est fausse."),(0,i.yg)("li",{parentName:"ul"},"Le script de tests utilise la fonction ",(0,i.yg)("inlineCode",{parentName:"li"},"assert")," pour faire des appels de la fonction \xe0 tester avec des param\xe8tres d'entr\xe9es arbitraires;"),(0,i.yg)("li",{parentName:"ul"},"Les fonctions de tests n'ont pas de commentaires.")),(0,i.yg)("h2",{id:"exemple-de-tests"},"Exemple de tests"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"# Tests pour des fonctions du module math\nimport math\n\ndef test_factorial():\n    assert math.factorial(4) == 24\n    assert math.factorial(20) == 2432902008176640000\n\ndef test_gcd():\n    assert math.gcd(8, 6) == 2\n")),(0,i.yg)("h2",{id:"tests-de-valeurs-fractionnaires"},"Tests de valeurs fractionnaires"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Les valeurs fractionnaires sont plus difficiles \xe0 tester, car la comparaison de valeurs fractionnaires est assez difficile;"),(0,i.yg)("li",{parentName:"ul"},"Pour tester des valeurs fractionnaires, des valeurs diff\xe9rentielles absolues seront utilis\xe9es pour faire le test ou le module ",(0,i.yg)("inlineCode",{parentName:"li"},"pytest")," nous fournit la fonction ",(0,i.yg)("inlineCode",{parentName:"li"},"approx"),".")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"import pytest\nimport math\n\n# Tests de la fonction sin\nassert math.fabs(math.sin(1) - 0.8415) < 0.0001\nassert math.fabs(math.sin(2) - 0.9093) < 0.0001 \nassert math.fabs(math.sin(1.5) - 0.9975) < 0.0001 \n\nassert math.sin(1) == pytest.approx(0.8414709848)\n")))}d.isMDXComponent=!0},5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,y=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);