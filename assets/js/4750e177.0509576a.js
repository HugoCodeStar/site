"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[4111],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>U});var r=n(6540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=l,U=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(U,i(i({ref:t},c),{},{components:n})):r.createElement(U,i({ref:t},c))}));function U(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4416:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(8168),l=n(8587),a=(n(6540),n(5680));const i=["components"],o={title:"Patron MVP",sidebar_label:"MVP",slug:"/g25"},p=void 0,s={unversionedId:"g25/MVP",id:"g25/MVP",isDocsHomePage:!1,title:"Patron MVP",description:"Architecture d'application",source:"@site/docs/g25/MVP.md",sourceDirName:"g25",slug:"/g25",permalink:"/site/docs/g25",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/g25/MVP.md",tags:[],version:"current",frontMatter:{title:"Patron MVP",sidebar_label:"MVP",slug:"/g25"},sidebar:"G25Sidebar",next:{title:"Debug",permalink:"/site/docs/g25/debug"}},c=[{value:"Architecture d&#39;application",id:"architecture-dapplication",children:[]},{value:"Patron MVC",id:"patron-mvc",children:[{value:"Probl\xe9matique avec le MVC et Android",id:"probl\xe9matique-avec-le-mvc-et-android",children:[]}]},{value:"La solution : Patron MVP",id:"la-solution--patron-mvp",children:[]},{value:"Exemple d&#39;un compteur avec MVP",id:"exemple-dun-compteur-avec-mvp",children:[{value:"Mod\xe8le",id:"mod\xe8le",children:[]},{value:"Interface de la vue",id:"interface-de-la-vue",children:[]},{value:"Vue",id:"vue",children:[]},{value:"Pr\xe9sentateur",id:"pr\xe9sentateur",children:[]}]},{value:"Ajouts possibles au patron MVP",id:"ajouts-possibles-au-patron-mvp",children:[{value:"Int\xe9racteur",id:"int\xe9racteur",children:[]},{value:"Persistance",id:"persistance",children:[]}]}],u={toc:c},d="wrapper";function m(e){let{components:t}=e,o=(0,l.A)(e,i);return(0,a.yg)(d,(0,r.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"architecture-dapplication"},"Architecture d'application"),(0,a.yg)("p",null,"Les applications complexes demandent une architecture qui facilitera la conception des applications. Des patrons d'architecture ont donc \xe9t\xe9 d\xe9velopp\xe9s pour la conception d'applications complexes. Les patrons permettent d'avoir des structures qui augmentent la lisibilit\xe9, la s\xe9paration des pr\xe9occupations et la testabilit\xe9 de nos applications."),(0,a.yg)("h2",{id:"patron-mvc"},"Patron MVC"),(0,a.yg)("p",null,"Le patron d'architecture que vous avez surement d\xe9j\xe0 \xe9tudi\xe9 est le patron MVC."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"MVC Pattern @ Wikipedia",src:n(4503).A})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Mod\xe8le : Contient les structures de donn\xe9es qui repr\xe9sentent les informations de l'application."),(0,a.yg)("li",{parentName:"ul"},"Vue : La repr\xe9sentation de l'interface utilisateur. Dans les applications Android, les activit\xe9s sont les vues."),(0,a.yg)("li",{parentName:"ul"},"Controlleur : Accepte les manipulations de l'utilisateur et renvoie les informations au mod\xe8le. Contient la logique qui permet de mettre \xe0 jour la vue.")),(0,a.yg)("h3",{id:"probl\xe9matique-avec-le-mvc-et-android"},"Probl\xe9matique avec le MVC et Android"),(0,a.yg)("p",null,"Avec les activit\xe9s et les ",(0,a.yg)("em",{parentName:"p"},"Listeners")," d'Android, et puisque les activit\xe9s sont li\xe9es aux interactions avec l'\xe9cran, il arrive rapidement qu'une vue essaie de prendre le r\xf4le du contr\xf4leur. Il devient donc tr\xe8s difficile de tester l'application ou d'avoir une bonne s\xe9paration des pr\xe9occupations."),(0,a.yg)("h2",{id:"la-solution--patron-mvp"},"La solution : Patron MVP"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"MVP Pattern @ Wikipedia",src:n(2576).A})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Mod\xe8le : Le mod\xe8le continue de contenir les structures de donn\xe9es."),(0,a.yg)("li",{parentName:"ul"},"Vue : La vue continue de repr\xe9senter l'activit\xe9, mais communique les actions de l'utilisateur au pr\xe9sentateur."),(0,a.yg)("li",{parentName:"ul"},"Pr\xe9sentateur : Le pr\xe9sentateur est le nouvel \xe9l\xe9ment du patron. Il prend en charge les mises \xe0 jour de l'interface utilisateur \xe0 partir des informations du mod\xe8le, note les actions de l'utilisateur pour envoyer des mises \xe0 jour au mod\xe8le et g\xe8re la logique de l'application.")),(0,a.yg)("p",null,"Ce patron aide \xe0 mieux d\xe9coupler l'architecture d'une application Android. Toute la communication de l'interface va passer \xe0 travers le pr\xe9sentateur qui va contenir la logique de notre application. Le mod\xe8le continuera de contenir les informations de notre application."),(0,a.yg)("p",null,"Le patron MVP permet de garder le code sp\xe9cifique \xe0 Android dans la Vue. Le pr\xe9sentateur et le mod\xe8le peuvent donc \xeatre test\xe9s ind\xe9pendamment de notre application Android."),(0,a.yg)("p",null,"L'impl\xe9mentation du code utilisera une interface pour la vue pour augmenter le d\xe9couplage et faciliter les tests."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"MVP avec interface",src:n(4855).A})),(0,a.yg)("h2",{id:"exemple-dun-compteur-avec-mvp"},"Exemple d'un compteur avec MVP"),(0,a.yg)("p",null,"Voici un lien vers un d\xe9p\xf4t d'un compteur avec l'architecture MVP:"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://git.dti.crosemont.quebec/420-g25-ro/Compteur-MVP"},"Compteur MVP")),(0,a.yg)("p",null,"L'application est un simple compteur avec un interrupteur permettant de changer la direction du comptage."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Compteur MVP",src:n(5088).A})),(0,a.yg)("h3",{id:"mod\xe8le"},"Mod\xe8le"),(0,a.yg)("p",null,"Dans notre application de compteur, nous avons premi\xe8rement le ",(0,a.yg)("inlineCode",{parentName:"p"},"CompteurModele")," qui contient le mod\xe8le de notre compteur. Deux propri\xe9t\xe9s y sont situ\xe9es: le compte courant et la direction du compte (+1 ou -1). Aucune logique n'est pr\xe9sente \xe0 l'int\xe9rieur du mod\xe8le."),(0,a.yg)("h3",{id:"interface-de-la-vue"},"Interface de la vue"),(0,a.yg)("p",null,"L'interface ",(0,a.yg)("inlineCode",{parentName:"p"},"ICompteurVue")," est l'interface que notre Vue devra impl\xe9menter pour satisfaire les besoins du pr\xe9sentateur. Il contient toutes les m\xe9thodes qui doivent modifier l'affichage de notre application. Dans notre cas, deux m\xe9thodes de mise \xe0 jour sont requises :"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Affichage de la valeur du compteur "),(0,a.yg)("li",{parentName:"ul"},"Affichage de la direction du compteur")),(0,a.yg)("h3",{id:"vue"},"Vue"),(0,a.yg)("p",null,"La vue est repr\xe9sent\xe9e par notre ",(0,a.yg)("inlineCode",{parentName:"p"},"MainActivity"),", elle impl\xe9mente l'interface ",(0,a.yg)("inlineCode",{parentName:"p"},"ICompteurVue")," qui va nous permettre de faciliter l'utilisation de tests. Le lien entre la vue et le pr\xe9sentateur est \xe9tabli dans le ",(0,a.yg)("inlineCode",{parentName:"p"},"onCreate")," de l'activit\xe9."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"    private CompteurPresentateur presentateur;\n    ...\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        ...\n\n        presentateur = new CompteurPresentateur(this);\n\n        buttonCompte.setOnClickListener((v -> presentateur.compte()));\n        switchDirection.setOnClickListener((v -> presentateur.changerDirection()));\n    }\n")),(0,a.yg)("p",null,"On peut voir que la vue a un lien vers notre pr\xe9sentateur et le cr\xe9e \xe0 la cr\xe9ation de son activit\xe9."),(0,a.yg)("p",null,"Une deuxi\xe8me chose \xe0 remarquer est que les actions de l'utilisateur sont directement envoy\xe9es au pr\xe9sentateur et ne sont reli\xe9es \xe0 aucune logique dans la vue."),(0,a.yg)("p",null,"Ensuite, il faut impl\xe9menter les m\xe9thodes de l'interface ",(0,a.yg)("inlineCode",{parentName:"p"},"ICompteurVue"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public void miseAJourCompteur(int compte) {\n        textViewCompte.setText(String.valueOf(compte));\n    }\n\n    @Override\n    public void miseAJourDirection(boolean direction) {\n        switchDirection.setChecked(direction);\n    }\n")),(0,a.yg)("p",null,"Cette partie va recevoir des informations du pr\xe9sentateur et devra seulement mettre \xe0 jour les ",(0,a.yg)("inlineCode",{parentName:"p"},"View")," en cons\xe9quence."),(0,a.yg)("h3",{id:"pr\xe9sentateur"},"Pr\xe9sentateur"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"CompteurPresentateur")," va contenir la logique de notre application et le lien entre notre mod\xe8le et la vue."),(0,a.yg)("p",null,"Le constructeur re\xe7oit la vue et cr\xe9e le mod\xe8le qui sera utilis\xe9."),(0,a.yg)("p",null,"Ensuite, les m\xe9thodes sont reli\xe9es \xe0 des actions qui seront prises par l'utilisateur. Ces m\xe9thodes s'appuient sur le mod\xe8le pour prendre des d\xe9cisions. Le mod\xe8le est ensuite mis \xe0 jour et la nouvelle information est envoy\xe9e \xe0 la vue."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"    public void compte() {\n        //Regarde la direction et incr\xe9mente/d\xe9cr\xe9mente le compteur\n        modele.setCompte(modele.isDirection() ?\n                modele.getCompte() + 1 :\n                modele.getCompte() -1);\n        vue.miseAJourCompteur(modele.getCompte());\n    }\n\n    public void changerDirection() {\n        //Inverse la direction courante\n        modele.setDirection(!modele.isDirection());\n        vue.miseAJourDirection(modele.isDirection());\n    }\n")),(0,a.yg)("h2",{id:"ajouts-possibles-au-patron-mvp"},"Ajouts possibles au patron MVP"),(0,a.yg)("h3",{id:"int\xe9racteur"},"Int\xe9racteur"),(0,a.yg)("p",null,"Quand notre application commence \xe0 avoir beaucoup d'actions et de logique dans le pr\xe9sentateur, il est possible de d\xe9coupler la logique du pr\xe9sentateur et d'utiliser un int\xe9racteur qui va contenir la logique de notre application et qui viendra se placer entre notre mod\xe8le et le pr\xe9sentateur."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"MVP avec int\xe9racteur",src:n(8220).A})),(0,a.yg)("h3",{id:"persistance"},"Persistance"),(0,a.yg)("p",null,"Dans l'architecture courante, le mod\xe8le est li\xe9 directement au pr\xe9sentateur qui est lui-m\xeame li\xe9 \xe0 la vue. C'est un cas probl\xe9matique dans le cas o\xf9 la vue doit \xeatre d\xe9truite, car l'information du mod\xe8le sera perdue. Il est donc possible d'ajouter une couche additionnelle de Persistence avant l'acc\xe8s \xe0 notre mod\xe8le. Les informations du mod\xe8le pourront donc survivre m\xeame apr\xe8s la fin de l\u2019activit\xe9."),(0,a.yg)("p",null,"L'utilisation de persistance sera \xe9tudi\xe9e plus tard dans le cours."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"MVP avec persistance",src:n(5475).A})))}m.isMDXComponent=!0},4503:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/MVC-pattern-55d0be63c7958a28ae816a775bd67760.png"},2576:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/MVP-pattern-12d99d9091b09524a6756d65db3b0d05.png"},8220:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/MVPavecInteracteur-6bcc41f733108a2278a173924e6c25c3.png"},4855:(e,t,n)=>{n.d(t,{A:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAAEZCAYAAADL49MvAAAE6XRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjEtMDItMTlUMTIlM0EyNCUzQTExLjM0MlolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDExXzJfMSklMjBBcHBsZVdlYktpdCUyRjUzNy4zNiUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBDaHJvbWUlMkY4OC4wLjQzMjQuMTUwJTIwU2FmYXJpJTJGNTM3LjM2JTIyJTIwZXRhZyUzRCUyMnJGZlNKYVJDVXJQcHpOdEJEdG9sJTIyJTIwdmVyc2lvbiUzRCUyMjE0LjQuMiUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJDNVJCczQzb0RhLUtkelplTnR1eSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0UxVmpCY3Bzd0VQMGFqc21BWkxCOWpCMG5UWk4yMG5FYk4wZkZiSUJFUnE1WURPVHJLNHhrb0hUU3hOTUo5c1dqZlZxdHBMZjdKR0dMVGxmNXBXVHI4SXZ3Z1Z2RTluT0xubHVFRE1lZSUyQmkyQm9nSkc0MEVGQkRMeUs4aXBnWG4wQWhxME5acEdQaVF0UnhTQ1k3UnVnMHNSeDdERUZzYWtGRm5iN1ZIdzlxeHJGa0FIbUM4Wjc2S0x5TWRRNzRJTWElMkZ3VFJFRm9abmE4Y2RXellzWlo3eVFKbVMlMkJ5QmtSbkZwMUtJYkJxcmZJcDhKSTd3OHZpcWxqd20yZnY4dk8zNUJmN01ibiUyQiUyRnZYdXBBcDI4WjRodXkxSWlISHYwS05uMTMlMkZKbkZ1ODNrVHAyUU41OHNPTEU1T2xCQXRER1BpS1AyMEtpYUVJUk16NHJFWW5VcVN4RDJWWVcxbTF6NDBRYXdVNkNud0N4RUlYQTB0UktDakVGZGU5a0VmNHN4eCUyQk9uUzFlYSUyQmpsZTN6dkdrVXhvaFJGczFScFgxdklwWkdQVzVybVlIVkRzdHQl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"},5475:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/MVPavecPersistance-137fd1fdb5263358361d64f888e19af4.png"},5088:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/compteurApp-b33e97d5e74aa5de64279a6d2202ace4.png"}}]);