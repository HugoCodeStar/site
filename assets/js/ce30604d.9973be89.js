"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[2749],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4981:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"Propri\xe9t\xe9s et m\xe9thodes statiques",sidebar_label:"3 - Props & Static",sidebar_position:3},l=void 0,c={unversionedId:"b07/cours/cours3",id:"b07/cours/cours3",isDocsHomePage:!1,title:"Propri\xe9t\xe9s et m\xe9thodes statiques",description:"Propri\xe9t\xe9s",source:"@site/docs/b07/cours/cours3.md",sourceDirName:"b07/cours",slug:"/b07/cours/cours3",permalink:"/site/docs/b07/cours/cours3",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/b07/cours/cours3.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Propri\xe9t\xe9s et m\xe9thodes statiques",sidebar_label:"3 - Props & Static",sidebar_position:3},sidebar:"B07Sidebar",previous:{title:"2 - Orient\xe9-objet",permalink:"/site/docs/b07/cours/cours2"},next:{title:"cours4",permalink:"/site/docs/b07/cours/cours4"}},u=[{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",children:[{value:"Utilisation de propri\xe9t\xe9s",id:"utilisation-de-propri\xe9t\xe9s",children:[]},{value:"Impl\xe9mentation automatique des propri\xe9t\xe9s",id:"impl\xe9mentation-automatique-des-propri\xe9t\xe9s",children:[]},{value:"Propri\xe9t\xe9s et champs immuable",id:"propri\xe9t\xe9s-et-champs-immuable",children:[]},{value:"Initialisation rapide d&#39;objet",id:"initialisation-rapide-dobjet",children:[]}]}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"propri\xe9t\xe9s"},"Propri\xe9t\xe9s"),(0,a.kt)("p",null,"L'utilisation de getter et setter ajoute beacoup de coode similiaire (boilerplate en anglais). Il est possible d'utilis\xe9 les propri\xe9t\xe9s pour avec des getter et setter int\xe9gr\xe9 \xe0 la syntaxe."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c#"},"public class Rectangle\n{\n    private float _width; //On garde une variable de classe\n    private float _height;\n\n    public Rectangle(float width, float height)\n    {\n        _width = width;\n        _height = height;\n    }\n\n    // La cr\xe9ation d'une propri\xe9t\xe9\n    public float Width\n    {\n        // Une m\xe9thode get\n        get => _width;\n        // Une m\xe9thode set avec un param\xe8tre implicite nomm\xe9 value\n        set => _width = value;\n    }\n\n    public float Height\n    {\n        get => _height;\n        // Il est possible de mettre une des m\xe9thodes priv\xe9es\n        private set => _height = value; \n    }\n\n    public float Area => _width * _height;\n}\n")),(0,a.kt)("h3",{id:"utilisation-de-propri\xe9t\xe9s"},"Utilisation de propri\xe9t\xe9s"),(0,a.kt)("p",null,"Les propri\xe9t\xe9s sont ensuite directement reli\xe9 \xe0 leur nom comme si c'\xe9tait des variables de classe publique."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c#"},'Rectangle r = new Rectangle(2, 3);\nr.Width = 5;\nConsole.WriteLine($"A {r.Width}x{r.Height} rectangle has an area of {r.Area}.");\n')),(0,a.kt)("h3",{id:"impl\xe9mentation-automatique-des-propri\xe9t\xe9s"},"Impl\xe9mentation automatique des propri\xe9t\xe9s"),(0,a.kt)("p",null,"La majorit\xe9 des getter et setter sont tr\xe8s simple et n'a pas besoin de code sp\xe9cial. Il y a une syntaxe abr\xe9g\xe9 pour ces cas."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c#"},'public class Player\n{\n    public string Name { get; set; } = "Player";\n}\n')),(0,a.kt)("p",null,"Voici notre exemple avec la classe Rectangle:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c#"},"public class Rectangle // Note how short this code got with auto-properties.\n{\n    public float Width { get; set; }\n    public float Height { get; set; }\n    public float Area =>  Width * Height;\n\n    public Rectangle(float width, float height)\n    {\n        Width = width;\n        Height = height;\n    }\n}\n")),(0,a.kt)("h3",{id:"propri\xe9t\xe9s-et-champs-immuable"},"Propri\xe9t\xe9s et champs immuable"),(0,a.kt)("p",null,"Il est possible de forcer une propri\xe9t\xe9 ou une variable d'instance a \xeatre en lecture seule. Le seul endroit possible de modification est durant l'initailisation ou dans les constructeurs de la classe."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c#"},"public class Player\n{\n    // Seulement le get est disponible\n    public string Name { get; } = \"Player 1\";\n    public Player(string name)\n    {\n        Name = name;\n    } \n}\n\npublic class Player\n{\n    // L'ajour de l'option readonly met la variable d'instance immuable (autre que dans le constructeur)\n    private readonly string _name;\n    \n    public Player(string name)\n    {\n        _name = name;\n    } \n}\n")),(0,a.kt)("h3",{id:"initialisation-rapide-dobjet"},"Initialisation rapide d'objet"),(0,a.kt)("p",null,"Puisque plusieurs constructeur prennent les param\xe8tres pour construire un objet, un syntaxe simplifi\xe9 existe pour la construction d'objet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c#"},"Circle circle = new Circle(){ Radius = 3, X = -4 };\nCircle circle2 = new Circle{ Radius = 3, X = -4 };\n\n\npublic class Circle\n{\n    public float X { get; set; } = 0; // The x-coordinate of the circle's center. \n    public float Y { get; set; } = 0; // The y-coordinate of the circle's center. \n    public float Radius { get; set; } = 0;\n}\n\n//Si nous ne voulons pas de set disponible mais que la syntaxe soit disponible durant la construction d'objet\npublic class Circle\n{\n    public float X { get; init; } = 0;\n    public float Y { get; init; } = 0;\n    public float Radius { get; init; } = 0;\n}\n")))}d.isMDXComponent=!0}}]);