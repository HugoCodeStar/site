"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[720],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,b=m["".concat(o,".").concat(d)]||m[d]||c[d]||s;return t?r.createElement(b,i(i({ref:n},p),{},{components:t})):r.createElement(b,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<s;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4571:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=t(7462),a=t(3366),s=(t(7294),t(3905)),i=["components"],l={title:"Exception",sidebar_label:"7 - Exception",sidebar_position:7},o=void 0,u={unversionedId:"b07/cours/cours7",id:"b07/cours/cours7",isDocsHomePage:!1,title:"Exception",description:"La classe Random",source:"@site/docs/b07/cours/cours7.md",sourceDirName:"b07/cours",slug:"/b07/cours/cours7",permalink:"/site/docs/b07/cours/cours7",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/b07/cours/cours7.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Exception",sidebar_label:"7 - Exception",sidebar_position:7},sidebar:"B07Sidebar",previous:{title:"6 - Interface",permalink:"/site/docs/b07/cours/cours6"},next:{title:"1 - Bases",permalink:"/site/docs/b07/exercices/exercices1"}},p=[{value:"La classe Random",id:"la-classe-random",children:[]},{value:"Multiple fichier dans le m\xeame projet",id:"multiple-fichier-dans-le-m\xeame-projet",children:[]},{value:"<code>namespace</code> avec <code>using</code>",id:"namespace-avec-using",children:[]},{value:"Gestion d&#39;erreur avec <code>try</code> et <code>catch</code>",id:"gestion-derreur-avec-try-et-catch",children:[]}],c={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"la-classe-random"},"La classe Random"),(0,s.kt)("p",null,"La classe Random permet de g\xe9n\xe9rer des nombres al\xe9atoires. Elle permet de cr\xe9\xe9 des g\xe9n\xe9rateurs configurable (avec des maximum bien \xe9tablie)."),(0,s.kt)("p",null,"La classe Random n'est pas statique et doit constuire un objet qui pourra g\xe9n\xe9rer les nombres avec la m\xe9thodes ",(0,s.kt)("inlineCode",{parentName:"p"},"Next"),". Cette m\xe9thode peut prendre un param\xe8tre ",(0,s.kt)("inlineCode",{parentName:"p"},"int")," pour avoir un plafond maximale (exclue)pour la valeur g\xe9n\xe9r\xe9. Le nombre sera entre 0 et la valeur maximale (exclue)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},'// Cr\xe9ation d\'une tableau d\'\xe9l\xe9ments\nList<String> names = new List<String> {"Bob", "Anne", "Maria"};\n\n// Choisir un des noms de mani\xe8res al\xe9atoire\n\n// Cr\xe9ation du g\xe9n\xe9rateur de nombre al\xe9atoire\nRandom random = new Random();\n\n\nint randomIndex = random.Next(names.Count);\nConsole.WriteLine($"La personne choisi est : {names[randomIndex]}" );\n')),(0,s.kt)("h2",{id:"multiple-fichier-dans-le-m\xeame-projet"},"Multiple fichier dans le m\xeame projet"),(0,s.kt)("p",null,"Il est possible de cr\xe9\xe9 des nouveaux fichiers dans le m\xeame projet. Les classes sont souvent s\xe9par\xe9 dans des fichiers disctincs pour limiter le nombre de ligne total de chaque fichier (des fichiers a plusieurs centaines de lignes sont difficile a modifier)."),(0,s.kt)("p",null,"Il vous suffit de cr\xe9\xe9 un nouveau fichier dans le projet courant (",(0,s.kt)("inlineCode",{parentName:"p"},"File -> New -> File ...")," ou ",(0,s.kt)("inlineCode",{parentName:"p"},"CTRL-N"),"). Il est aussi possible d'utiliser les action rapide avec alt-enter sur une classe pour la transpoter dans un fichier de mani\xe8res automatique."),(0,s.kt)("h2",{id:"namespace-avec-using"},(0,s.kt)("inlineCode",{parentName:"h2"},"namespace")," avec ",(0,s.kt)("inlineCode",{parentName:"h2"},"using")),(0,s.kt)("p",null,"Avec la cr\xe9ation de plusieurs classes par plusieurs programmes, il est possible/probable qu'il va arriver un conflit de noms entre les classes (deux classes avec le m\xeame nom). Pour \xe9viter les conflits de noms, le ",(0,s.kt)("inlineCode",{parentName:"p"},"c#")," nous offres les espaces de noms (namespace). Un ",(0,s.kt)("inlineCode",{parentName:"p"},"namespace")," s'utilise un peu comme un nom de famille qui permet de distinguer deux classes du m\xeames noms. Sans nom sp\xe9cifique, les \xe9l\xe9ments d\xe9clar\xe9 sont dans un espace ",(0,s.kt)("inlineCode",{parentName:"p"},"global"),". Quand des \xe9l\xe9ments sont pr\xe9sent dans un namespace, il faut importer le namespace dans notre programme pour que celui-ci devienne disponible. "),(0,s.kt)("p",null,"Nous pouvons importer un name space avec la commande ",(0,s.kt)("inlineCode",{parentName:"p"},"using"),", il est ensuite possible d'utiliser la classe importer. Il est aussi possible d'utilier le nom complet (fully qualified name)."),(0,s.kt)("p",null,"Il existe plusieurs namespace avec les libraires de bases, le plus grand est ",(0,s.kt)("inlineCode",{parentName:"p"},"System")," qui contient des namespace a sont tour comme ",(0,s.kt)("inlineCode",{parentName:"p"},"System.Text")," ou ",(0,s.kt)("inlineCode",{parentName:"p"},"System.Collections"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},'// Appel d\'une classe dans avec son nom complet.\nSystem.Console.WriteLine("Hell, world!");\n\n// Utilisation du using pour importer la namespace dans notre programme\nusing System.Test;\n\n// La classe Stringbuilder est dans le namespace System.Text\nStringBuilder stringBulder = new StringBuilder();\n')),(0,s.kt)("p",null,"Il est possible de mettre nos programmes dans des namespace avec la directive ",(0,s.kt)("inlineCode",{parentName:"p"},"namespace"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"// Si tout le fichier dans \xeatre dans un namespace on peut le d\xe9clarer au d\xe9but du fichier\nnamespace MonProjet;\n\n// Reste du code\n")),(0,s.kt)("p",null,"Il est aussi possible de cr\xe9\xe9 des ensemble d'\xe9l\xe9ment dans un namespace"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"namepace ChartingMap\n{\n    public enum Direction { North, South, East, West };\n\n    public class Point{ /* Rest of class */}\n}\n")),(0,s.kt)("p",null,"L'utilisation de fichiers simplifier construit en fait un name space avec une m\xe9thode main par d\xe9fault qui sera invoqu\xe9 comme point de d\xe9part dans nos programmes."),(0,s.kt)("p",null,"Les projets modernes ajoute aussi automatiquement les namespace suivant:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"System"),(0,s.kt)("li",{parentName:"ul"},"System.Collections.Generic"),(0,s.kt)("li",{parentName:"ul"},"System.IO"),(0,s.kt)("li",{parentName:"ul"},"System.Linq")),(0,s.kt)("h2",{id:"gestion-derreur-avec-try-et-catch"},"Gestion d'erreur avec ",(0,s.kt)("inlineCode",{parentName:"h2"},"try")," et ",(0,s.kt)("inlineCode",{parentName:"h2"},"catch")),(0,s.kt)("p",null,"Quand un erreur survient dans un programme, une exception est lanc\xe9. Si l'exception n'est par g\xe9r\xe9, le programme arr\xeate et fourni l'erreur qui a \xe9t\xe9 d\xe9tect\xe9. Il est possible de faire de la gestion d'exception manuelle pour ne pas terminer le programme quand une erreur survient. Il est aussi posibble de cr\xe9er ses propres exceptions pour sp\xe9cifi\xe9 de nouveaux types d'erreurs."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},'//Example d\'une m\xe9thode qui soul\xe8ve une erreur\nint GetNumberFromUser()\n{\n    int number = 0;\n    while (number < 1 || number > 10)\n    {\n        Console.Write("Enter a number between 1 and 10: ");\n        // Si on entre du texte, le programme crash\n        string? response = Console.ReadLine();\n        number = Convert.ToInt32(response);\n    }\n    return number;\n}\n')),(0,s.kt)("p",null,"Il est possible d'utiliser le ",(0,s.kt)("inlineCode",{parentName:"p"},"try"),"/",(0,s.kt)("inlineCode",{parentName:"p"},"catch")," pour intercepter l'erreur et ne pas interrompre le programme"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"// Code qui peut soulever une erreur\ntry {\n    number = Convert.ToInt32(response);\n}\n// Si, il y une exception\ncatch (Exception)\n{\n    number = -1;\n    Console.WriteLine($\"I do not understand '{response}'.\");\n}\n")),(0,s.kt)("p",null,"Les erreur sont des objets, il est possible d'avoir des bloc ",(0,s.kt)("inlineCode",{parentName:"p"},"catch")," pour des erreur sp\xe9cifique."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},'try {\n    number = Convert.ToInt32(response);\n}\ncatch (FormatException)\n{\nnumber = -1;\n    Console.WriteLine($"I do not understand \'{ response }\'.");\n}\ncatch (OverflowException)\n{\n    number = -1;\n    Console.WriteLine($"That number is too big!"); \n}\n')),(0,s.kt)("p",null,"\xc9tant des objets, il est aussi possible d'utilier l'objet d'erreur pour aller regarder le message d'erreur"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"try { ... }\ncatch (FormatException e)\n{\n    Console.WriteLine(e.Message);\n}\n")),(0,s.kt)("p",null,"Dans notre cotre, il est possible de soulever une erreur avec l'instruction ",(0,s.kt)("inlineCode",{parentName:"p"},"throw"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},'Console.WriteLine("Name an animal.");\nstring? animal = Console.ReadLine();\nif (animal == "snake") \n{\n    throw new Exception();\n}\n')),(0,s.kt)("p",null,"Il existe plusieurs classe d'exception que nous pouvons utiliser"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Classe"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"NotImplementedException"),(0,s.kt)("td",{parentName:"tr",align:null},"Code absent pour cette partie du programme")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"NotSupportedException"),(0,s.kt)("td",{parentName:"tr",align:null},"Nous ne pouvont pas faire ce qui est demand\xe9")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"InvalidOperationException"),(0,s.kt)("td",{parentName:"tr",align:null},"La demande ne peut pas \xeatre faite de la mani\xe8re demand\xe9")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"ArgumentOutOfRangeException"),(0,s.kt)("td",{parentName:"tr",align:null},"L'argument donn\xe9 n'est pas dans mes tol\xe9rances")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"ArgumentNullException"),(0,s.kt)("td",{parentName:"tr",align:null},"L'argument \xe9tait null et le reste ne fonctionne pas avec un null")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"ArgumentException"),(0,s.kt)("td",{parentName:"tr",align:null},"Autre type d'erreur avec l'argument")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Exception"),(0,s.kt)("td",{parentName:"tr",align:null},"Une erreur est survenue sans plus d'information")))),(0,s.kt)("p",null,"Il est aussi possible de cr\xe9\xe9 ses propres exceptions en d\xe9rivant la classe ",(0,s.kt)("inlineCode",{parentName:"p"},"Exception")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"public class SnakeException : Exception\n{\n    public SnakeException() { }\n    public SnakeException(string message) : base(message) { }\n}\n")))}m.isMDXComponent=!0}}]);