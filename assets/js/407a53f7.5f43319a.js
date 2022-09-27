"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[4525],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return t?a.createElement(f,l(l({ref:n},d),{},{components:t})):a.createElement(f,l({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},634:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],o={title:"Jointures/regroupement de tables & pandas",sidebar_label:"4 - Jointures & pandas"},s=void 0,u={unversionedId:"inf5111/Cours/cours4",id:"inf5111/Cours/cours4",isDocsHomePage:!1,title:"Jointures/regroupement de tables & pandas",description:"Regroupement de donn\xe9es avec le GROUP BY",source:"@site/docs/inf5111/Cours/cours4.md",sourceDirName:"inf5111/Cours",slug:"/inf5111/Cours/cours4",permalink:"/site/docs/inf5111/Cours/cours4",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf5111/Cours/cours4.md",tags:[],version:"current",frontMatter:{title:"Jointures/regroupement de tables & pandas",sidebar_label:"4 - Jointures & pandas"},sidebar:"INF5111Sidebar",previous:{title:"3 - Intro BD",permalink:"/site/docs/inf5111/Cours/cours3"},next:{title:"X - NumPy",permalink:"/site/docs/inf5111/Cours/numpy"}},d=[{value:"Regroupement de donn\xe9es avec le <code>GROUP BY</code>",id:"regroupement-de-donn\xe9es-avec-le-group-by",children:[]},{value:"Les jointures de tables",id:"les-jointures-de-tables",children:[{value:"Inner join",id:"inner-join",children:[]},{value:"Left/Right join",id:"leftright-join",children:[]},{value:"Full outer join",id:"full-outer-join",children:[]}]},{value:"Dictionnaire Python",id:"dictionnaire-python",children:[]},{value:"Acc\xe8s au dictionnaire",id:"acc\xe8s-au-dictionnaire",children:[]},{value:"Modification d&#39;un dictionnaire",id:"modification-dun-dictionnaire",children:[]},{value:"Les m\xe9thodes des dictionnaires",id:"les-m\xe9thodes-des-dictionnaires",children:[]},{value:"L&#39;exploitation et l&#39;analyse de donn\xe9es avec pandas",id:"lexploitation-et-lanalyse-de-donn\xe9es-avec-pandas",children:[{value:"Series &amp; Dataframe",id:"series--dataframe",children:[]},{value:"Jointure de Dataframe avec <code>merge</code>",id:"jointure-de-dataframe-avec-merge",children:[]}]}],p={toc:d};function c(e){var n=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"regroupement-de-donn\xe9es-avec-le-group-by"},"Regroupement de donn\xe9es avec le ",(0,i.kt)("inlineCode",{parentName:"h2"},"GROUP BY")),(0,i.kt)("p",null,"En suite aux fonctions d'agr\xe9gation, il est possible de regrouper des donn\xe9es avant d'appliquer la fonction d'agr\xe9gation sur les sous-groupes. La commande ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY")," nous permet de regrouper des sous-ensembles et d'avoir la r\xe9ponse de chaque regroupement."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    select_list (aggregates)\nFROM\n    table_name\nGROUP BY\n    column;\n")),(0,i.kt)("p",null,"La liste de s\xe9lection peut donc avoir les colonnes des regroupements ou des fonctions d'agr\xe9gation, mais pas d'autre expression."),(0,i.kt)("h2",{id:"les-jointures-de-tables"},"Les jointures de tables"),(0,i.kt)("p",null,'Avec les relations \xe9tablies avec les cl\xe9s \xe9trang\xe8res, il est souvent souhaitable de "combiner" les donn\xe9es de plusieurs tables ensemble. Dans les bases de donn\xe9es, cela se nomme des jointures de tables.'),(0,i.kt)("p",null,"Pour faire les jointures, nous indiquerons dans nos instructions SQL la colonne qui sera utilis\xe9e pour faire la jointure."),(0,i.kt)("p",null,"Il existe plusieurs types de jointures en fonction de ce que tu recherches. Les jointures possibles sont :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"inner join"),(0,i.kt)("li",{parentName:"ul"},"left join"),(0,i.kt)("li",{parentName:"ul"},"right join"),(0,i.kt)("li",{parentName:"ul"},"full outer join"),(0,i.kt)("li",{parentName:"ul"},"cross join")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(7999).Z})),(0,i.kt)("p",null,"Dans le cadre du cours, nous \xe9tudierons le inner join, left/right join et le full outer join."),(0,i.kt)("h3",{id:"inner-join"},"Inner join"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(8365).Z})),(0,i.kt)("p",null,"Le inner join est la jointure la plus commune qui nous permet de rejoindre les informations communes entre deux tables."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    *\nFROM\n    table1\nINNER JOIN\n    table2 ON table1.id_common = t2.id_common;\n")),(0,i.kt)("h3",{id:"leftright-join"},"Left/Right join"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(2245).Z}),"\n",(0,i.kt)("img",{src:t(2488).Z})),(0,i.kt)("p",null,"La jointure gauche/droite permet d'avoir tous les \xe9l\xe9ments d'une table avec des informations possiblement vides d'une deuxi\xe8me table. Il est aussi possible d'avoir une \"soustraction\" pour avoir seulement les \xe9l\xe9ments d'une premi\xe8re table ne se retrouvant pas dans une deuxi\xe8me table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    *\nFROM\n    table1\nLEFT OUTER JOIN \n    table2 ON table1.id_common = t2.id_common;\nWHERE -- On ajoute le WHERE si on veut soustraire de la table 1 \n    table2.column is null;\n")),(0,i.kt)("h3",{id:"full-outer-join"},"Full outer join"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(5258).Z}),"\n",(0,i.kt)("img",{src:t(7774).Z})),(0,i.kt)("p",null,"La jointure pleine permet d'avoir toutes les lignes des deux tables avec des \xe9l\xe9ments possiblement NULL quand il n'y a pas eu de corr\xe9lation. Il est aussi possible d'avoir seulement les \xe9l\xe9ments uniques \xe0 chaque table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    *\nFROM\n    table1\nFULL JOIN \n    table2 ON table1.id_common = t2.id_common;\nWHERE -- On ajoute le WHERE si on veut soustraire des deux tables\n    table1.column is null or table2.column is null;\n")),(0,i.kt)("h2",{id:"dictionnaire-python"},"Dictionnaire Python"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Le dictionnaire est une autre collection comme les listes de Python."),(0,i.kt)("li",{parentName:"ul"},"Chaque \xe9l\xe9ment contient deux parties : une cl\xe9 et une valeur (key-value pair)."),(0,i.kt)("li",{parentName:"ul"},"La cl\xe9 est utilis\xe9e pour rep\xe9rer l'\xe9l\xe9ment dans la collection."),(0,i.kt)("li",{parentName:"ul"},"Les cl\xe9s sont uniques."),(0,i.kt)("li",{parentName:"ul"},"Le dictionnaire repr\xe9sente ses key-value avec un ",(0,i.kt)("inlineCode",{parentName:"li"},":")," entre chacun et les inclus dans des accolades ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"telephone = {'Marie':'444-1111', 'Bob':'444-2222', 'Alice':'444-3333'}\n")),(0,i.kt)("h2",{id:"acc\xe8s-au-dictionnaire"},"Acc\xe8s au dictionnaire"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Les \xe9l\xe9ments du dictionnaire sont acc\xe9der avec les cl\xe9s entre crochets (comme une liste)."),(0,i.kt)("li",{parentName:"ul"},"Les op\xe9rateurs ",(0,i.kt)("inlineCode",{parentName:"li"},"in")," et ",(0,i.kt)("inlineCode",{parentName:"li"},"not in")," permettent de d\xe9terminer si une cl\xe9 existe."),(0,i.kt)("li",{parentName:"ul"},"La fonction ",(0,i.kt)("inlineCode",{parentName:"li"},"len")," permet de d\xe9terminer le nombre d'\xe9l\xe9ments")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"telephone = {'Marie':'444-1111', 'Bob':'444-2222', 'Alice':'444-3333'}\nprint('Bob' in telephone)\n\nprint(len(telephone)) # Affiche 4\n")),(0,i.kt)("h2",{id:"modification-dun-dictionnaire"},"Modification d'un dictionnaire"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On ajoute dans un dictionnaire avec l'assignation d'une nouvelle cl\xe9."),(0,i.kt)("li",{parentName:"ul"},"On d\xe9truit un \xe9l\xe9ment avec le mot cl\xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"del"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"telephone = {'Marie':'444-1111', 'Bob':'444-2222', 'Alice':'444-3333'}\ntelehphone['Corinne'] = '444-1111' # M\xeame valeur que Marie et c'est ok\n\ndel telephone['Bob']\n")),(0,i.kt)("h2",{id:"les-m\xe9thodes-des-dictionnaires"},"Les m\xe9thodes des dictionnaires"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Nom"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clear()"),(0,i.kt)("td",{parentName:"tr",align:null},"Vide le dictionnaire.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"get(key)"),(0,i.kt)("td",{parentName:"tr",align:null},"Retourne la valeur associ\xe9e avec la cl\xe9. Ne g\xe9n\xe8re pas d'erreur.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"items()"),(0,i.kt)("td",{parentName:"tr",align:null},"Renvoie une s\xe9quence de tuple de (key, value)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"keys()"),(0,i.kt)("td",{parentName:"tr",align:null},"Retourne toutes les cl\xe9s.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pop(key)"),(0,i.kt)("td",{parentName:"tr",align:null},"Retourne la valeur associ\xe9e avec la cl\xe9. Enl\xe8ve l'\xe9l\xe9ment du dictionnaire.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"popitem()"),(0,i.kt)("td",{parentName:"tr",align:null},"Retourne un tuple (key, value) al\xe9atoire et l'enl\xe8ve du dictionnaire.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"values()"),(0,i.kt)("td",{parentName:"tr",align:null},"Retourne les valeurs des \xe9l\xe9ments.")))),(0,i.kt)("h2",{id:"lexploitation-et-lanalyse-de-donn\xe9es-avec-pandas"},"L'exploitation et l'analyse de donn\xe9es avec pandas"),(0,i.kt)("p",null,"Pandas est une librairie Python pour l'analyse et la science des donn\xe9es. Elle permet d'importer des donn\xe9es, d\u2019appliquer des transformations et d'en sortir des r\xe9sultats. C'est un outil indispensable dans le monde de la science des donn\xe9es."),(0,i.kt)("h3",{id:"series--dataframe"},"Series & Dataframe"),(0,i.kt)("p",null,"Les structures de bases de pandas sont les ",(0,i.kt)("inlineCode",{parentName:"p"},"Series")," et les ",(0,i.kt)("inlineCode",{parentName:"p"},"Dataframe"),". Les ",(0,i.kt)("inlineCode",{parentName:"p"},"Series")," sont des donn\xe9es d'une dimension d'un seul type de donn\xe9es et qui sont \xe0 identifier avec un index qui identifie chaque \"ligne\" de donn\xe9es. Les donn\xe9es de la s\xe9rie sont bas\xe9es sur un tableau ",(0,i.kt)("inlineCode",{parentName:"p"},"NumPy"),"."),(0,i.kt)("p",null,"Un ",(0,i.kt)("inlineCode",{parentName:"p"},"Dataframe")," est constitu\xe9 de plusieurs ",(0,i.kt)("inlineCode",{parentName:"p"},"Series")," qui partagent les m\xeames index pour cr\xe9er ce qui ressemble \xe0 une table. Les colonnes peuvent \xeatre nomm\xe9es et chaque ligne partage un index."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import pandas as pd # L\'alias pd est toujours utilis\xe9 pour pandas\n\n# Cr\xe9ation d\'un Dataframe\ndf = pd.DataFrame(\n    {\n        "Name": [\n            "Braund, Mr. Owen Harris",\n            "Allen, Mr. William Henry",\n            "Bonnell, Miss. Elizabeth",\n        ],\n        "Age": [22, 35, 58],\n        "Sex": ["male", "male", "female"],\n    }\n)\n\ndf\n\n# S\xe9lection d\'une "colonne" qui affiche le \ndf["Age"]\n')),(0,i.kt)("h3",{id:"jointure-de-dataframe-avec-merge"},"Jointure de Dataframe avec ",(0,i.kt)("inlineCode",{parentName:"h3"},"merge")),(0,i.kt)("p",null,"Comme pour les tables de base de donn\xe9es, il est possible de faire des jointures de ",(0,i.kt)("inlineCode",{parentName:"p"},"Dataframe")," avec la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"merge")," de pandas. Celle-ci va prendre les informations des deux ",(0,i.kt)("inlineCode",{parentName:"p"},"Dataframe"),", le type de jointure et la colonne de jointure de chaque ",(0,i.kt)("inlineCode",{parentName:"p"},"Dataframe")," et construire un nouveau ",(0,i.kt)("inlineCode",{parentName:"p"},"Dataframe")," avec le r\xe9sultat de la jointure."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"df1 = pd.DataFrame({'employee': ['Bob', 'Jake', 'Lisa', 'Sue'],\n                    'group': ['Accounting', 'Engineering', 'Engineering', 'HR']})\ndf2 = pd.DataFrame({'employee': ['Lisa', 'Bob', 'Jake', 'Sue'],\n                    'hire_date': [2004, 2008, 2012, 2014]})\ndisplay(df1, df2)\n\ndf3 = pd.merge(df1, df2)\ndisplay(df3)\n")))}c.isMDXComponent=!0},7774:function(e,n,t){n.Z=t.p+"assets/images/PostgreSQL-Join-Full-Outer-Join-with-Where-beb2b93f6ff44340908d86a910843aae.png"},5258:function(e,n,t){n.Z=t.p+"assets/images/PostgreSQL-Join-Full-Outer-Join-22226700a4227613442239f1db23d5b2.png"},8365:function(e,n,t){n.Z=t.p+"assets/images/PostgreSQL-Join-Inner-Join-04e5c3a722628a4237b7f9cbd91d481b.png"},2488:function(e,n,t){n.Z=t.p+"assets/images/PostgreSQL-Join-Left-Join-with-Where-752181b1527e922d4f0aa2e52f676e03.png"},2245:function(e,n){n.Z="data:image/png;base64,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z2Wo8GcT7XttaWnBqlWrUFFREdf7hbdzpPDrVFRU4OTJk2M+N1xf27Zti/v7ofjJem8ApdeFCxfiepzL5UJFRcWof583b96w/+/t7QUAVFdXo6ioaNTjJ02ahGnTpqGmpmbY3zc3NwPAqL8f+fpjOXLkCH7yk5+go6Nj2Hv39PSgtbUVra2t2LRpEz744APMmTNnzO29dOnShO8TfuykSZNGbeenn36K8+fPR/2+hz4/2mOmTZs27P/Pnz8PYPhn8umnn2LXrl3YtWsX3nnnHdxzzz0TbvdIY32v69evx69+9SsAQGFhYeQ9h75ffX09XnvttVHPDW/nSOGfR0dHB1588cUxnxuur1jrkZKkUlbZvHmzCkDdvHmzkMeF1dTUqADUjz76KK7tAaAmUoZut1t1uVwqALWmpkbt6OgY9u8dHR3qkiVLVABqYWGh6na7497ejz76KPL60cTyOvF+NtE+k/r6+sj3E49o779169bI623dunXU85qamtTCwsKodToS9n0AAAUjSURBVBBtO8N/H37uWN93vPVFyWHrhjLSn/70J3R0dKC6uhr79u3D9OnTh/379OnTsXPnTlRXV+P8+fP49a9/rdOWivPss88C0EbSibRwhurp6cGTTz4JAGhsbMSjjz466jF1dXVobGwEAKxduzZqGyya559/HgDw3HPPJbWtlDwGPWWkTZs2AQA2bNgw7uN+/vOfAwB27dqV8m1KtWitoUTs3r070nIarw10zz33wOVyAQDefffduN7j0UcfhcvlQnNzM3bu3JnU9lJyGPSUcY4cORLpD0/Uq77rrrsAaP3ieEekRjP0xOb111+f1Gt98MEHAID7779/wscuWbIEAPDFF1/E/T6//e1vAQBPPfVU3M8lcXgylsb1hz/8Ae+///6wvysoKIg6QluzZs2oked4j09E+KRidXX1hI8dui3Hjh3DggULhG1HvMb6bH784x/jl7/85YTPbWlpwZo1awAA69atS3p0Hz5BXFVVNeFjp0yZAgA4dOhQ3O9zzz33oKamBs3NzdiyZUtM3yuJx6CncXV0dERmUYQVFhZGfXxra+uovxvv8ckQ2cpIh7E+m4KCgqiPHzl1sbCwEJs3bxYalpMnTxb2WtE89dRTaG5uxqZNm/DQQw9l3M/NDNi6oXFt3rwZqqoO+/P9999HffxHH30U1+OzyVifzXhHOjU1NaipqYn0yG+77bZR0zszwYIFC1BfX4/z58/j6aef1ntzshKDnjJWeA7+eIb2tfVs2yRi37592LdvH9rb21FfX4/m5mY8/PDDQt/j448/nvAxnZ2dALQ2U6Ief/xxFBYWoqGhIepFVJQ6DHrKOEMDe7wrWwHtwh8gej+/q6sr6nPDIRjLxVup9tprr8HlcqG1tVXI+Y5waH/22WcTPvZvf/sbgNj6+dFMnz4dTzzxBADgxRdfTPh1KDEMespI4Zkg4bnaY+np6YnM9ghPswy77777AADbt2+P+vy3334bAHDjjTcms6nChOejxzuDZazZRuEW0K5du8b9Zblt2zZ0dHTA5XIldDXuUA899FBkVD/yBD+lFoOeMlL4Yp9du3Zh1apVo8Ls5MmTqK2tjVxUFV6vJuyuu+5CYWEhmpubRz2/p6cHq1atQmtrK1wu16jn6qWurg4ulwsdHR3jXjD117/+NTLqDy8HAQw/EpozZ07kl+Udd9wx5utt27YNK1euBHB5mmQyioqKIsshxNJ2I3E46yZLjTVtEtBOvg5dFyba40RPmYzXnDlz0NTUhFWrVqGhoQENDQ2RUerQcAtfOTvS9OnT8dprr2Hp0qVoaGjAzp07cdtttwG4HEKFhYX485//LGybx5peCcQ+xRIAfvazn2Ht2rV47rnnxvy+AODixYtYunQptm/fjvb2dgCj1xICgN///vfo7e1Fc3MzfvSjHw1b1yi8hg8ANDU1JT2aD6urq8NLL7005gwkSiF9Vl4gvYTXN4n255133onpcSPXWwmvKxPvWjfh9VAS1dHRoa5bt06trq4etn01NTVqU1NTTM+vr6+PrJsDQK2urlbXrVs3an2cscTyfYcfE+3PkiVLhj1+vM+ko6Mjps9s3bp1kdevr68f93tpampSlyxZEnldAKrL5VLr6+tHrSEUy3YWFhaOux7P4cOHI88N1xullqSqqprS3yRERKQr9uiJiEyOQU9EZHIMeiIik2PQExGZHIOeiMjkGPRERCbHoCciMjkGPRGRyTHoiYhMjkFPRGRyDHoiIpNj0BMRmdz/AiU5rVBj2aPMAAAAAElFTkSuQmCC"},7999:function(e,n,t){n.Z=t.p+"assets/images/PostgreSQL-Joins-9ec7fc691375e2c73cdc534e0726a273.png"}}]);