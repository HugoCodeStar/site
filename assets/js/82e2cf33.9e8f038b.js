"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[3730],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=u(t),m=i,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return t?r.createElement(d,l(l({ref:n},s),{},{components:t})):r.createElement(d,l({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8351:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),l=["components"],o={title:"Programmes \xe0 faire de l'atelier 5",sidebar_label:"5 - Fichiers et exceptions"},c=void 0,u={unversionedId:"inf1256/atelier/atelier5",id:"inf1256/atelier/atelier5",isDocsHomePage:!1,title:"Programmes \xe0 faire de l'atelier 5",description:"printfileline_numbers",source:"@site/docs/inf1256/atelier/atelier5.md",sourceDirName:"inf1256/atelier",slug:"/inf1256/atelier/atelier5",permalink:"/site/docs/inf1256/atelier/atelier5",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf1256/atelier/atelier5.md",tags:[],version:"current",frontMatter:{title:"Programmes \xe0 faire de l'atelier 5",sidebar_label:"5 - Fichiers et exceptions"},sidebar:"INF1256Sidebar",previous:{title:"4 - Listes et tuples",permalink:"/site/docs/inf1256/atelier/atelier4"},next:{title:"6 - Chaines de caract\xe8res",permalink:"/site/docs/inf1256/atelier/atelier6"}},s=[{value:"print_file_line_numbers",id:"print_file_line_numbers",children:[]},{value:"write_fibonacci",id:"write_fibonacci",children:[]},{value:"find_max_score_name",id:"find_max_score_name",children:[]}],p={toc:s};function f(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"print_file_line_numbers"},"print_file_line_numbers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Affiche toutes les lignes d'un fichier avec un num\xe9ro de ligne ajout\xe9 \xe0 chaque lignes.\nArgs:\n    filename: Le nom du fichier\n")),(0,a.kt)("p",null,"Exemple :"),(0,a.kt)("p",null,"Avec le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"test1.txt")," suivant :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Salut\nBonjour\nAllo\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">>> print_file_line_numbers('test1.txt')\n1 - Salut\n2 - Bonjour\n3 - Allo\n")),(0,a.kt)("h2",{id:"write_fibonacci"},"write_fibonacci"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\xc9crit dans une fichier un certain nombre de la suite de Fibonacci.\nChaque nombre est sur sa propre ligne.\nArgs:\n    filename: Nom du fichier \xe0 \xe9crire\n    n: Le nombre d'\xe9l\xe9ments de la s\xe9quence \xe0 \xe9crire\n")),(0,a.kt)("p",null,"Exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">>> write_fibonacci('test2.txt', 10)\n")),(0,a.kt)("p",null,"\xc9crite le ficiher ",(0,a.kt)("inlineCode",{parentName:"p"},"test2.txt")," suivant :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"0\n1\n1\n2\n3\n5\n8\n13\n21\n34\n")),(0,a.kt)("h2",{id:"find_max_score_name"},"find_max_score_name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Trouve et retourne le nom de la personne avec le plus haut score \xe0 partir\nd'un fichier qui contient les noms et scores de plusieurs personnes.\nLe fichier contient sur une s\xe9rie de score avec le nom et le score sur des lignes\nindividuelles.\n\nArgs:\n    filename: Le nom du fichier avec les scores.\n\nReturns:\n    Le nom de la personne avec le plus haut score.\n")),(0,a.kt)("p",null,"Exemple : "),(0,a.kt)("p",null,"Avec le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"test3.txt.")," suivant : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Max\n45\nBob\n78\nJulie\n89\nCeline\n80\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">>> print(find_max_score_name('test3.txt'))\nJulie\n")))}f.isMDXComponent=!0}}]);