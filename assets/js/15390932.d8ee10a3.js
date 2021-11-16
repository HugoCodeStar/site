"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[5496],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6567:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={title:"Librairie et Base de donn\xe9es SQL avec SQLite",sidebar_label:"10 - SQL et visualisation",sidebar_position:10},l="But",u={unversionedId:"inf1035/Cours/cours10",id:"inf1035/Cours/cours10",isDocsHomePage:!1,title:"Librairie et Base de donn\xe9es SQL avec SQLite",description:"* Un langage de requ\xeate qui permet de faire des requ\xeates complexes sans avoir beaucoup de logique programmable \xe0 faire.",source:"@site/docs/inf1035/Cours/cours10.md",sourceDirName:"inf1035/Cours",slug:"/inf1035/Cours/cours10",permalink:"/site/docs/inf1035/Cours/cours10",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf1035/Cours/cours10.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Librairie et Base de donn\xe9es SQL avec SQLite",sidebar_label:"10 - SQL et visualisation",sidebar_position:10},sidebar:"INF1035Sidebar",previous:{title:"9 - POO",permalink:"/site/docs/inf1035/Cours/cours9"},next:{title:"Intro",permalink:"/site/docs/inf1035"}},c=[],d={toc:c};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"but"},"But"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Un langage de requ\xeate qui permet de faire des requ\xeates complexes sans avoir beaucoup de logique programmable \xe0 faire."),(0,o.kt)("li",{parentName:"ul"},"Le Structured Query Language (SQL) est le langage utilis\xe9 pour communiqu\xe9 avec les bases de donn\xe9es."),(0,o.kt)("li",{parentName:"ul"},"Plusieurs BD SQL existent (Postgres, Oracle, MariaDB). Nous utiliserons SQLite qui nous permet de travailler rapidement avec des bases de donn\xe9es sans infrastructures.")),(0,o.kt)("h1",{id:"tables"},"Tables"),(0,o.kt)("p",null,"Les informations d'une base de donn\xe9es sont regroup\xe9es en plusieurs tables de plusieurs colonnes. Chaque colonne porte un nom et peut contenir un type de donn\xe9e pr\xe9cise. Plusieurs lignes de donn\xe9es formeront l'information de la BD."),(0,o.kt)("h1",{id:"types-des-colonnes"},"Types des colonnes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"NULL - Valeur nulle."),(0,o.kt)("li",{parentName:"ul"},"INTEGER - Entier sign\xe9."),(0,o.kt)("li",{parentName:"ul"},"REAL - Valeur flottante."),(0,o.kt)("li",{parentName:"ul"},"TEXT - Texte."),(0,o.kt)("li",{parentName:"ul"},"BLOB - Donn\xe9e ind\xe9finie.")),(0,o.kt)("h1",{id:"cr\xe9ation-de-tables"},"Cr\xe9ation de tables"),(0,o.kt)("p",null,"La cr\xe9ation d'une nouvelle table demande de nommer la table, ses colonnes et le type de chacune des colonnes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Client(\n    nom TEXT,\n    num_id INTEGER,\n    solde REAL\n);\n")),(0,o.kt)("h1",{id:"ajout-de-donn\xe9es-dans-une-table"},"Ajout de donn\xe9es dans une table"),(0,o.kt)("p",null,"L'ajout d'une ligne dans une table se fait avec la commande ",(0,o.kt)("inlineCode",{parentName:"p"},"INSERT"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Client\n    VALUES ('Bob', 34252, 2.34);\n\n-- On peut sp\xe9cifier quelle colonne remplir\nINSERT INTO Client(nom, num_id)\n    VALUES ('Bob', 34252);\n\nINSERT INTO Client\n    VALUES ('Annie', 21513, 346.25),\n        ('Julie', 135153, 2352.43);\n")),(0,o.kt)("h1",{id:"chercher-dans-la-table"},"Chercher dans la table"),(0,o.kt)("p",null,"La majorit\xe9 des interactions avec une base de donn\xe9es est d'aller chercher de l'information \xe0 l'int\xe9rieur de celle-ci. La commande ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," permet de faire des recherches dans les tables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * from Client;\n\n-- Le premier param\xe8tre est les colonnes \xe0 afficher\nSELECT nom,solde from Client;\n")),(0,o.kt)("h1",{id:"condition-de-s\xe9lection"},"Condition de s\xe9lection"),(0,o.kt)("p",null,"Il est possible de filtrer un ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," avec l'option ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT nom from Client WHERE solde < 0;\n")),(0,o.kt)("h1",{id:"modification-des-lignes---supprimer"},"Modification des lignes - Supprimer"),(0,o.kt)("p",null,"La commande ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE")," permet de supprimer des lignes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Supprime toutes les lignes\nDELETE FROM Client;\n\nDELETE FROM Client WHERE solde < 0;\n\n-- Supprime une table\nDROP TABLE Client;\n")),(0,o.kt)("h1",{id:"intr\xe9gration-de-sql-avec-python"},"Intr\xe9gration de SQL avec python"),(0,o.kt)("p",null,"La librairie sqlite3 permet de se connecter \xe0 une BD SQLite (un fichier). \xc0 partir de l\xe0, on peut envoyer des commandes et recevoir les r\xe9ponses de commandes SQL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import sqlite3\nconn = sqlite3.connect("MaBD.db")\n\n# C\'est le curseur qui envoie les commandes et re\xe7oit nos r\xe9ponses.\ncur = conn.cursor()\n\ncur.close()\nconn.close()\n')),(0,o.kt)("h1",{id:"envoi-de-commande-avec-les-curseurs"},"Envoi de commande avec les curseurs"),(0,o.kt)("p",null,"Les commandes sont \xe9crites avec la m\xe9thode ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," et \xe9crite dans la base de donn\xe9es avec ",(0,o.kt)("inlineCode",{parentName:"p"},"commit")," pour les actions modifiantes la BD."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"cur.execute(\"INSERT INTO Client VALUES('Jean', 24432, 2.634)\")\nconn.commit()\n")),(0,o.kt)("h1",{id:"s\xe9lection-de-lignes-avec-les-curseurs"},"S\xe9lection de lignes avec les curseurs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"cur.execute('SELECT * FROM Client')\n\n# Parcours avec un for\nfor e in cur:\n    print(e)\n\n# Gestion dans une liste\nma_liste = list(cur)\n\n# Insertion dans une liste\nres = cur.fetchall()\n")))}p.isMDXComponent=!0}}]);