"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[9813],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?i.createElement(b,a(a({ref:t},u),{},{components:n})):i.createElement(b,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var c=2;c<s;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9517:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var i=n(7462),o=n(3366),s=(n(7294),n(3905)),a=["components"],r={title:"H\xe9ritage et polymorphisme",sidebar_label:"5 - H\xe9ritage & Polymorphisme",sidebar_position:5},l=void 0,c={unversionedId:"b07/cours/cours5",id:"b07/cours/cours5",isDocsHomePage:!1,title:"H\xe9ritage et polymorphisme",description:"Question : GameObjet",source:"@site/docs/b07/cours/cours5.md",sourceDirName:"b07/cours",slug:"/b07/cours/cours5",permalink:"/site/docs/b07/cours/cours5",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/b07/cours/cours5.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"H\xe9ritage et polymorphisme",sidebar_label:"5 - H\xe9ritage & Polymorphisme",sidebar_position:5},sidebar:"B07Sidebar",previous:{title:"4 - Static",permalink:"/site/docs/b07/cours/cours4"},next:{title:"1 - Bases",permalink:"/site/docs/b07/exercices/exercices1"}},u=[{value:"Question : GameObjet",id:"question--gameobjet",children:[]},{value:"H\xe9ritage",id:"h\xe9ritage",children:[{value:"Constructeurs",id:"constructeurs",children:[]}]},{value:"Question : ChessPiece",id:"question--chesspiece",children:[]},{value:"Polymorphisme",id:"polymorphisme",children:[]},{value:"Classe objet et m\xe9thode ToString",id:"classe-objet-et-m\xe9thode-tostring",children:[]},{value:"Classe et m\xe9thodes abstraites",id:"classe-et-m\xe9thodes-abstraites",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"question--gameobjet"},"Question : GameObjet"),(0,s.kt)("p",null,"\xc9crire une classe nomm\xe9 GameObject qui permet de garder sa position sur un plan cart\xe9sien en X,Y ainsi que sa v\xe9locit\xe9 en X, Y. Une m\xe9thode Update pourra mettre \xe0 jour la position \xe0 partir de la v\xe9locit\xe9."),(0,s.kt)("h2",{id:"h\xe9ritage"},"H\xe9ritage"),(0,s.kt)("p",null,"L'h\xe9ritage en orient\xe9-objet est la relation entre une classe d'une classe plus g\xe9n\xe9rique (la ",(0,s.kt)("inlineCode",{parentName:"p"},"superclasse")," ou base class) et une classe plus sp\xe9cialis\xe9e (la ",(0,s.kt)("inlineCode",{parentName:"p"},"sous-classe")," ou classe d\xe9riv\xe9)."),(0,s.kt)("p",null,"La sp\xe9cialisation d'une classe peut \xeatre faite avec le ",(0,s.kt)("inlineCode",{parentName:"p"},":"),". La sp\xe9cialisation d'une classe permet d'h\xe9rit\xe9 de ses variables, propri\xe9t\xe9s et m\xe9thodes. La sp\xe9cialisation peut ensuite \xeatre utilis\xe9 \xe0 n'importe quel endroit ou la version g\xe9n\xe9rale est possible."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"public class GameObject\n{\n    public float PositionX { get; set; }\n    public float PositionY { get; set; }\n    public float VelocityX { get; set; }\n    public float VelocityY { get; set; }\n\n    public void Update()\n    {\n        PositionX += VelocityX;\n        PositionY += VelocityY;\n    }\n}\n\npublic class Asteroid : GameObject\n{\n    public float Size { get; }\n    public float RotationAngle { get; } \n}\n\npublic class Bullet : GameObject {}\npublic class Ship : GameObject {}\n\n// Exemple de l'utilisation a d'\xe9l\xe9ments h\xe9rit\xe9s\nAsteroid a1 = new Asteroid;\na1.Update();\n\n// Exemple de l'utilisation dans un tableau d'objets\nGameObject[] gameObjects = new GameObject[]\n{\n    new Asteroid(), new Asteroid(), new Asteroid(),\n    new Bullet(), new Ship()\n};\n")),(0,s.kt)("p",null,"L'h\xe9ritage peut \xeatre de plusieurs niveaux."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"public class Scout : Ship {}\npublic class Bomber : Ship {}\n")),(0,s.kt)("h3",{id:"constructeurs"},"Constructeurs"),(0,s.kt)("p",null,"Contrairement aux autres m\xe9thodes, les constructeur ne sont pas h\xe9rit\xe9 et doivent \xeatre r\xe9impl\xe9ment\xe9. Il est aussi possible de faire un constructeur avec moins de param\xe8res qui utilise des param\xe8tre par d\xe9fault."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"public class GameObject\n{\n    public float PositionX { get; set; }\n    public float PositionY { get; set; }\n    public float VelocityX { get; set; }\n    public float VelocityY { get; set; }\n\n    public void Update()\n    {\n        PositionX += VelocityX;\n        PositionY += VelocityY;\n    }\n\n    // Constructeur avec plusieurs param\xe8tres\n    public GameObject(float positionX, float positionY, float velocityX, float velocityY)\n    {\n        PositionX = positionX;\n        PositionY = positionY;\n        VelocityX = velocityX;\n        VelocityY = velocityY;\n    }\n}\n\npublic class Asteroid : GameObject\n{\n    public float Size { get; }\n    public float RotationAngle { get; } \n\n    // Constructeur qui utilise le constructeur de la classe de base\n    public Asteroid() : base(0, 0, 0, 0)\n    {\n        // Constructeur qui s'ex\xe9cute apr\xe8s le constructeur de la classe de base\n    }\n\n    // Il est possible de r\xe9utiliser du code sans pour avoir un constructeur avec le m\xeame nombre de param\xe8tres\n    public Asteroid(float positionX, float positionY, float velocityX, float velocityY) : base(float positionX, float positionY, float velocityX, float velocityY)\n    {\n\n    }\n}\n")),(0,s.kt)("h2",{id:"question--chesspiece"},"Question : ChessPiece"),(0,s.kt)("p",null,"\xc9crire une classe ",(0,s.kt)("inlineCode",{parentName:"p"},"ChessPiece")," qui garde la position de la ligne et la colonne d'une pi\xe8ce de jeu d'\xe9chec. La classe doit avoir les m\xe9thode suivantes :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"bool IsOnBoard(int row, int column)")," en consid\xe9rant que les lignes et colonnes vont de 0 \xe0 7."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"bool IsCurrentLocation(int row, int column)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"bool IsLegalMove(int row, int column)")," en consid\xe9rant que c'est l\xe9gal si nous reston sur le plateau et que nous bougont l'emplacement de la pi\xe8ce.")),(0,s.kt)("h2",{id:"polymorphisme"},"Polymorphisme"),(0,s.kt)("p",null,"L'h\xe9ritage est le premier niveau de la r\xe9utilisation de classe. Le polymorphisme vient ajouter la possiblit\xe9 de modifier des fonctionnalit\xe9 existante d'une m\xe9thode de la classe de base dans la classe d\xe9riv\xe9."),(0,s.kt)("p",null,"Commencons avec un exemple d'une classe de base"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"public class ChessPiece\n{\n    public int Row { get; set; }\n    public int Column { get; set; }\n\n    public bool IsLegalMove(int row, int column) =>\n                    IsOnBoard(row, column) && !IsCurrentLocation(row, column);\n    // L'accesseur protected permet d'\xeatre priv\xe9 pour la classe et ses d\xe9rivations.\n    protected bool IsOnBoard(int row, int column) =>\n                    row >= 0 && row < 8 && column >= 0 && column < 8;\n    protected bool IsCurrentLocation(int row, int column) => \n                    row == Row && column == Column;\n}\n")),(0,s.kt)("p",null,"ce qui nous permet d'avoir la classe d\xe9riv\xe9 suivante :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"public class King : ChessPiece\n{\n    public bool IsLegalKingMove(int row, int column)\n    {\n        if (!IsLegalMove(row, column)) return false;\n        // Moving more than one row or one column is not a legal king move. \n        if (Math.Abs(row - Row) > 1) return false;\n        if (Math.Abs(column - Column) > 1) return false;\n        return true;\n    }\n}\n")),(0,s.kt)("p",null,"Nous voudrions prendre la m\xe9thode ",(0,s.kt)("inlineCode",{parentName:"p"},"IsLegalKingMove")," et remplacer le comportement de ",(0,s.kt)("inlineCode",{parentName:"p"},"IsLegalMove")," quand on utiliser le King (ou une autre classe d\xe9riv\xe9 comme Pawn)."),(0,s.kt)("p",null,"Il est possible de sp\xe9cifi\xe9 qu'une m\xe9thode pourra \xeatre red\xe9fini (override) en la d\xe9clarant comme ",(0,s.kt)("inlineCode",{parentName:"p"},"virtual")," dans la classe de base."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"public class ChessPiece\n{\n    public int Row { get; set; }\n    public int Column { get; set; }\n\n    // La m\xe9thode ajoute le mot cl\xe9 virtual pour signifi\xe9 que la m\xe9thode peut \xeatre chang\xe9 dans les classe d\xe9riv\xe9\n    public virtual bool IsLegalMove(int row, int column) =>\n                    IsOnBoard(row, column) && !IsCurrentLocation(row, column);\n    protected bool IsOnBoard(int row, int column) =>\n                    row >= 0 && row < 8 && column >= 0 && column < 8;\n    protected bool IsCurrentLocation(int row, int column) => \n                    row == Row && column == Column;\n}\n")),(0,s.kt)("p",null,"La class d\xe9riv\xe9 peut ensuite reprendre la m\xeame signature avec le mot cl\xe9 ",(0,s.kt)("inlineCode",{parentName:"p"},"override")," pour indiquer qu'on remplace la fonctionnalit\xe9. Il est ensuite possible d'appeller la m\xe9thode initiale a partir de la r\xe9f\xe9rence ",(0,s.kt)("inlineCode",{parentName:"p"},"base"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"public class King : ChessPiece\n{\n    // Le mot cl\xe9 override pr\xe9sente le fait qu'on reprend un m\xe9thode existante virtual de la classe de base.\n    public override bool IsLegalMove(int row, int column)\n    {\n        // On peut utilis\xe9 la r\xe9f\xe9rence base pour avoir acc\xe8s a l'ancienne version de la m\xe9thode\n        if (!base.IsLegalMove(row, column)) return false;\n        if (Math.Abs(column - Column) > 1) return false;\n        return true;\n    }\n}\n")),(0,s.kt)("h2",{id:"classe-objet-et-m\xe9thode-tostring"},"Classe objet et m\xe9thode ToString"),(0,s.kt)("p",null,"Toutes les classes sont d\xe9riv\xe9s de la classe ",(0,s.kt)("inlineCode",{parentName:"p"},"object")," de mani\xe8re implicite. Cette classe offre plusieurs m\xe9thodes par d\xe9fault qui peuvent \xeatre red\xe9fini dans le besoin. Un exemple est la m\xe9thode ",(0,s.kt)("inlineCode",{parentName:"p"},"ToString")," qui permet de formater l'affichage d'un objet d'une classe. En red\xe9finissant ",(0,s.kt)("inlineCode",{parentName:"p"},"ToString"),", il est possible de controller l'affichage d'objet."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},'public class Point\n{\n    public float X { get; init; }\n    public float Y { get; init; }\n\n    public override string ToString()\n    {\n        return $"({X}, {Y})";\n    }\n}\n')),(0,s.kt)("h2",{id:"classe-et-m\xe9thodes-abstraites"},"Classe et m\xe9thodes abstraites"),(0,s.kt)("p",null,"Il est possible avec l'h\xe9ritage de cr\xe9\xe9 des classes qui ne devront pas \xeatre instanci\xe9. Que leurs seuls but est d'\xeatre une base de d'autre classe d\xe9riv\xe9. Il est aussi possible que cette classe de base ait des m\xe9thodes qui n'auront pas d'impl\xe9mentation au niveau de la base mais qui doivent \xeatre disponible dans les classes d\xe9riv\xe9s. Le mot cl\xe9 ",(0,s.kt)("inlineCode",{parentName:"p"},"abstract")," peut \xeatre utlis\xe9 au niveau de la classe ou des m\xe9thodes pour identifier les classes qui ne peuvent pas \xeatre instanci\xe9s ou des m\xe9thodes sans impl\xe9mentations qui devront \xeatre d\xe9fini\xe9 dans les classes d\xe9riv\xe9s."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"// Une classe abstract ne peux pas avoir de new (instanciation)\npublic abstract class ChessPiece\n{\n    // Une m\xe9thode abstract n'a pas d'impl\xe9mentation imm\xe9diate et devra \xeatre sp\xe9cifi\xe9 dans la classe d\xe9riv\xe9.\n    public abstract bool IsLegalMove(int targetRow, int targetColumn);\n    \n    // ... \n}\n")))}d.isMDXComponent=!0}}]);