"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[8304],{3742:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=t(8168),r=(t(6540),t(5680));const i={title:"Matrice et tableau de multiples dimensions",sidebar_label:"6 - Matrice"},l="Objectifs de la semaine",o={unversionedId:"inf135/cours/cours6",id:"inf135/cours/cours6",isDocsHomePage:!1,title:"Matrice et tableau de multiples dimensions",description:"* Matrices",source:"@site/docs/inf135/cours/cours6.md",sourceDirName:"inf135/cours",slug:"/inf135/cours/cours6",permalink:"/site/docs/inf135/cours/cours6",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf135/cours/cours6.md",tags:[],version:"current",frontMatter:{title:"Matrice et tableau de multiples dimensions",sidebar_label:"6 - Matrice"},sidebar:"INF135Sidebar",previous:{title:"5 - Chaines, tris et fouilles",permalink:"/site/docs/inf135/cours/cours5"},next:{title:"7 - Validation et fichiers",permalink:"/site/docs/inf135/cours/cours7"}},u=[],s={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"objectifs-de-la-semaine"},"Objectifs de la semaine"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Matrices",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Creation"),(0,r.yg)("li",{parentName:"ul"},"Acc\xe8s"),(0,r.yg)("li",{parentName:"ul"},"Fonctions"),(0,r.yg)("li",{parentName:"ul"},"Dynamisme"))),(0,r.yg)("li",{parentName:"ul"},"Tableau de multiples dimensions")),(0,r.yg)("h1",{id:"matrice"},"Matrice"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Une matrice est un tableau de deux dimensions;"),(0,r.yg)("li",{parentName:"ul"},"La num\xe9rotation utilise les lignes et les colonnes;"),(0,r.yg)("li",{parentName:"ul"},"Une matrice doit rester rectangulaire."),(0,r.yg)("li",{parentName:"ul"},"Les cases seront toujours identifier par la ligne en premier et ensuite la colonne;"),(0,r.yg)("li",{parentName:"ul"},"Les paires de variables ",(0,r.yg)("inlineCode",{parentName:"li"},"i, j")," ou ",(0,r.yg)("inlineCode",{parentName:"li"},"m, n")," seront souvent utilis\xe9 pour indiquer les lignes et les colonnes.")),(0,r.yg)("h1",{id:"matrice---cr\xe9ation"},"Matrice - Cr\xe9ation"),(0,r.yg)("p",null,"Les fonctions suivantes permettent de cr\xe9er des matrices:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"zeros(i, j)"),"/",(0,r.yg)("inlineCode",{parentName:"li"},"ones(i, j)")," - Initialise toutes les cases \xe0 0/1;"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"rand(i, j)"),"/",(0,r.yg)("inlineCode",{parentName:"li"},"randi(max, 1, j)")," - Initialise de mani\xe8re al\xe9atoire entre 0 et 1/1 et un nombre entier;"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"[liste de valeurs]")," - Contruit une matrice de valeurs donn\xe9es. Le ",(0,r.yg)("inlineCode",{parentName:"li"},";")," permet de faire des sauts de ligne;"),(0,r.yg)("li",{parentName:"ul"},"La combinaison des s\xe9pareteurs permet de cr\xe9\xe9 des matrice manuellement;")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-MATLAB"},"tab = [1, 2, 3;4, 5,6]\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"isequal")," - Compare deux matrices. Utile pour les tests.")),(0,r.yg)("h1",{id:"matrice---acc\xe8s"},"Matrice - Acc\xe8s"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Deux param\xe8tres peuvent \xeatre utilis\xe9 pour acc\xe9d\xe9 aux \xe9l\xe9ments du tableau;")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-MATLAB"},"tab(3,4)\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Si un seul param\xe8tre est utilis\xe9, les indices parcours les lignes et ensuite les colonnes;")),(0,r.yg)("h1",{id:"matrice---fonctions"},"Matrice - Fonctions"),(0,r.yg)("p",null,"Les fonctions et op\xe9rations suivantes sont utiles durant l'acc\xe8s aux matrices:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"numel(tab)")," - Le nombre d\u2019\xe9l\xe9ments;"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"size(tab)")," - Retourne un tableau des tailles des dimensions;"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"size(tab,x)")," - Retourne la taille de la dimension x;"),(0,r.yg)("li",{parentName:"ul"},"L'op\xe9rateur ",(0,r.yg)("inlineCode",{parentName:"li"},":")," permet de s\xe9lectionner toutes les valeurs d'une dimensions;")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-MATLAB"},"mat(3, :) % Retourne la ligne 3 de la matrice.\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Le mot cl\xe9 ",(0,r.yg)("inlineCode",{parentName:"li"},"end")," permet de s\xe9lectionn\xe9 la derni\xe8re cases d'une dimension.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-MATLAB"},"mat(4, end) % Retourne la derni\xe8re colonne de la ligne 4.\n")),(0,r.yg)("h1",{id:"matrice---parcourir-la-matrice"},"Matrice - Parcourir la matrice"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Comme pour les vecteurs, il existe une mani\xe8re g\xe9n\xe9rique de parcourir les matrices.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-MATLAB"},"for i = 1:size(mat,1)\n  for j = 1:size(mat, 2)\n    % Instructions\n    mat(i, j)\n  end\nend\n")),(0,r.yg)("h1",{id:"exercice"},"Exercice"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\xc9crivez une fonction qui retourne la somme d\u2019une matrice. Ne pas utiliser la fonction ",(0,r.yg)("inlineCode",{parentName:"li"},"sum")," de MATLAB;"),(0,r.yg)("li",{parentName:"ul"},"\xc9crivez une fonction qui retourne la position de ligne et colonne du minimum d\u2019une matrice. La fonction retourne un vecteur de deux cases contenant la ligne et la colonne de la position minimum.")),(0,r.yg)("h1",{id:"matrice---dynamisme"},"Matrice - Dynamisme"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"La matrice doit garder sa forme rectangulaire;"),(0,r.yg)("li",{parentName:"ul"},"L'insertion de donn\xe9 va cr\xe9\xe9 des cases avec des valeurs nulle pour garder la forme rectangulaire;"),(0,r.yg)("li",{parentName:"ul"},"La suppression d'information doit se faire pour garder le forme rectangulaire. La suppression se fait au niveau de ligne ou colonne compl\xe8te.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-MATLAB"},"mat(:, 2) = [] % Supprime la ligne colonne 2.\n")),(0,r.yg)("h1",{id:"tableau-de-multiples-dimensions"},"Tableau de multiples dimensions"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"MATLAB nous permet d\u2019avoir autant de dimension que nous le voulons;"),(0,r.yg)("li",{parentName:"ul"},"Les fonctions pr\xe9c\xe9dentes marchent sur un nombre infini de dimensions;"),(0,r.yg)("li",{parentName:"ul"},"Le cours va surtout traiter sur des matrices et possiblement sur des tableaux 3D.")),(0,r.yg)("h1",{id:"exercice-1"},"Exercice"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\xc9crivez une fonction qui retourne une matrice qui fait les ajout orthogonaux de chaque position. La fonction re\xe7oit la taille de la matrice en (ligne, colonne).")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-MATLAB"},">> ajoutOrthogonale(3,5)\nans =\n     1     2     3     4     5\n     2     3     4     5     6\n     3     4     5     6     7\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\xc9crivez un fonction qui re\xe7oit la taille d'une matrice \xe0 construire (ligne,colonne). La fonction retourne un tableau de deux dimensions quadrill\xe9 de 0 et 1.")))}m.isMDXComponent=!0},5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);