"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[34],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>f});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5719:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=t(8168),a=t(8587),o=(t(6540),t(5680));const i=["components"],l={title:"Programmes \xe0 faire de l'atelier 6",sidebar_label:"6 - Chaines de caract\xe8res"},s=void 0,c={unversionedId:"inf1256/atelier/atelier6",id:"inf1256/atelier/atelier6",isDocsHomePage:!1,title:"Programmes \xe0 faire de l'atelier 6",description:"mostfrequentcharacter",source:"@site/docs/inf1256/atelier/atelier6.md",sourceDirName:"inf1256/atelier",slug:"/inf1256/atelier/atelier6",permalink:"/site/docs/inf1256/atelier/atelier6",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf1256/atelier/atelier6.md",tags:[],version:"current",frontMatter:{title:"Programmes \xe0 faire de l'atelier 6",sidebar_label:"6 - Chaines de caract\xe8res"},sidebar:"INF1256Sidebar",previous:{title:"5 - Fichiers et exceptions",permalink:"/site/docs/inf1256/atelier/atelier5"},next:{title:"Fr\xe9quences de nombres al\xe9atoires",permalink:"/site/docs/inf1256/atelier/atelier7"}},u=[{value:"most_frequent_character",id:"most_frequent_character",children:[]},{value:"word_separator",id:"word_separator",children:[]},{value:"convert_alpha_telephone",id:"convert_alpha_telephone",children:[]}],p={toc:u},d="wrapper";function m(e){let{components:r}=e,t=(0,a.A)(e,i);return(0,o.yg)(d,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"most_frequent_character"},"most_frequent_character"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Trouve le caract\xe8re le plus utiliser \xe0 l'int\xe9rieur d'une chaine.\nArgs:\n    string: La chaine \xe0 \xe9valuer.\n\nReturns:\n    Le caract\xe8re le plus utilis\xe9 dans la chaine.\n")),(0,o.yg)("p",null,"Exemples:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'>>> most_frequent_character("salut tous!")\ns\n')),(0,o.yg)("h2",{id:"word_separator"},"word_separator"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Convertis une chaine de caract\xe8res en camelCase en phrase normale. L'entr\xe9e\nen camelCase est une chaine ou tous les mots d'une phrase sont indiqu\xe9s par une\nlettre majuscule et non par des espaces.\nArgs:\n    string: La chaine en camelCase.\n\nReturns:\n    La chaine en phrase normale avec des espaces entre chaque mot.\n")),(0,o.yg)("p",null,"Exemples:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'>>> word_separator("HelloMyWorld")\nHello my world\n')),(0,o.yg)("h2",{id:"convert_alpha_telephone"},"convert_alpha_telephone"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Traducteur de num\xe9ro de t\xe9l\xe9phone alphab\xe9tique\nDe nombreuses entreprises utilisent des num\xe9ros de t\xe9l\xe9phone \ntels que 555-GET-FOOD afin que leurs clients se souviennent plus \nfacilement du num\xe9ro. Sur un t\xe9l\xe9phone standard, les lettres \nalphab\xe9tiques sont mapp\xe9es aux nombres de la mani\xe8re suivante:\nA, B et C = 2\nD, E et F = 3\nG, H et I = 4\nJ, K et L = 5\nM, N et O = 6 P, Q, R et S = 7 T, U et V = 8\nW, X, Y et Z = 9\n\xc9crivez une fonction qui re\xe7oit un num\xe9ro de t\xe9l\xe9phone \xe0 10 \ncaract\xe8res au format XXX-XXX-XXXX. L'application doit retourner \nle num\xe9ro de t\xe9l\xe9phone avec tous les caract\xe8res alphab\xe9tiques \napparaissant dans l'original traduit en leur \xe9quivalent \nnum\xe9rique. Par exemple, si l'utilisateur entre 555-GET-FOOD, \nl'application doit retourner 555-438-3663.\n")))}m.isMDXComponent=!0}}]);