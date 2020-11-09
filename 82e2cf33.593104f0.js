(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{100:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),s=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=s(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=s(t),f=r,m=b["".concat(c,".").concat(f)]||b[f]||p[f]||a;return t?i.a.createElement(m,l(l({ref:n},u),{},{components:t})):i.a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<a;u++)c[u]=t[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return s}));var r=t(2),i=t(6),a=(t(0),t(100)),c={title:"Programmes \xe0 faire de l'atelier 5",sidebar_label:"5 - Fichiers et exceptions"},l={unversionedId:"inf1256/atelier/atelier5",id:"inf1256/atelier/atelier5",isDocsHomePage:!1,title:"Programmes \xe0 faire de l'atelier 5",description:"printfileline_numbers",source:"@site/docs/inf1256/atelier/atelier5.md",slug:"/inf1256/atelier/atelier5",permalink:"/site/docs/inf1256/atelier/atelier5",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf1256/atelier/atelier5.md",version:"current",sidebar_label:"5 - Fichiers et exceptions",sidebar:"INF1256Sidebar",previous:{title:"Programmes \xe0 faire de l'atelier 4",permalink:"/site/docs/inf1256/atelier/atelier4"},next:{title:"Programmes \xe0 faire de l'atelier 6",permalink:"/site/docs/inf1256/atelier/atelier6"}},o=[{value:"print_file_line_numbers",id:"print_file_line_numbers",children:[]},{value:"write_fibonacci",id:"write_fibonacci",children:[]},{value:"find_max_score_name",id:"find_max_score_name",children:[]}],u={rightToc:o};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"print_file_line_numbers"},"print_file_line_numbers"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"Affiche toutes les lignes d'un fichier avec un num\xe9ro de ligne ajout\xe9 \xe0 chaque lignes.\nArgs:\n    filename: Le nom du fichier\n")),Object(a.b)("p",null,"Exemple :"),Object(a.b)("p",null,"Avec le fichier ",Object(a.b)("inlineCode",{parentName:"p"},"test1.txt")," suivant :"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"Salut\nBonjour\nAllo\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),">>> print_file_line_numbers('test1.txt')\n1 - Salut\n2 - Bonjour\n3 - Allo\n")),Object(a.b)("h2",{id:"write_fibonacci"},"write_fibonacci"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"\xc9crit dans une fichier un certain nombre de la suite de Fibonacci.\nChaque nombre est sur sa propre ligne.\nArgs:\n    filename: Nom du fichier \xe0 \xe9crire\n    n: Le nombre d'\xe9l\xe9ments de la s\xe9quence \xe0 \xe9crire\n")),Object(a.b)("p",null,"Exemple :"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),">>> write_fibonacci('test2.txt', 10)\n")),Object(a.b)("p",null,"\xc9crite le ficiher ",Object(a.b)("inlineCode",{parentName:"p"},"test2.txt")," suivant :"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"0\n1\n1\n2\n3\n5\n8\n13\n21\n34\n")),Object(a.b)("h2",{id:"find_max_score_name"},"find_max_score_name"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"Trouve et retourne le nom de la personne avec le plus haut score \xe0 partir\nd'un fichier qui contient les noms et scores de plusieurs personnes.\nLe fichier contient sur une s\xe9rie de score avec le nom et le score sur des lignes\nindividuelles.\n\nArgs:\n    filename: Le nom du fichier avec les scores.\n\nReturns:\n    Le nom de la personne avec le plus haut score.\n")),Object(a.b)("p",null,"Exemple : "),Object(a.b)("p",null,"Avec le fichier ",Object(a.b)("inlineCode",{parentName:"p"},"test3.txt.")," suivant : "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"Max\n45\nBob\n78\nJulie\n89\nCeline\n80\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),">>> print(find_max_score_name('test3.txt'))\nJulie\n")))}s.isMDXComponent=!0}}]);