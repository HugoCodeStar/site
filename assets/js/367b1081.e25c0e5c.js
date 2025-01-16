"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[2985],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),g=a,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6550:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=t(8168),a=t(8587),o=(t(6540),t(5680));const i=["components"],s={title:"Entity Framework",sidebar_label:"9 - Entity Framework",sidebar_position:9},l=void 0,u={unversionedId:"b07/cours/cours9",id:"b07/cours/cours9",isDocsHomePage:!1,title:"Entity Framework",description:"ORM (Object\u2013relational mapping)",source:"@site/docs/b07/cours/cours9.md",sourceDirName:"b07/cours",slug:"/b07/cours/cours9",permalink:"/site/docs/b07/cours/cours9",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/b07/cours/cours9.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Entity Framework",sidebar_label:"9 - Entity Framework",sidebar_position:9},sidebar:"B07Sidebar",previous:{title:"8 - Expression de requ\xeates",permalink:"/site/docs/b07/cours/cours8"},next:{title:"10 - ADO.net",permalink:"/site/docs/b07/cours/cours10"}},c=[{value:"ORM (Object\u2013relational mapping)",id:"orm-objectrelational-mapping",children:[]},{value:"NuGet et les librairies",id:"nuget-et-les-librairies",children:[]},{value:"La cr\xe9ation du mod\xe8le",id:"la-cr\xe9ation-du-mod\xe8le",children:[]},{value:"Cr\xe9ation de la base donn\xe9es",id:"cr\xe9ation-de-la-base-donn\xe9es",children:[]},{value:"Utilisation de la base de donn\xe9e avec le mod\xe8le dans un programme",id:"utilisation-de-la-base-de-donn\xe9e-avec-le-mod\xe8le-dans-un-programme",children:[]}],d={toc:c},p="wrapper";function g(e){let{components:n}=e,t=(0,a.A)(e,i);return(0,o.yg)(p,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"orm-objectrelational-mapping"},"ORM (Object\u2013relational mapping)"),(0,o.yg)("p",null,"Pour faciliter la connection \xe0 des bases de donn\xe9es, des ORM permettent d'utiliser les structures orient\xe9es-objets et de lire et \xe9crire des information dans des bases de donn\xe9es. Les diff\xe9rents ORM sont d\xe9pendants du language et des librairies que ceux-ci utilisent. Avec C#, le ",(0,o.yg)("inlineCode",{parentName:"p"},"Entity Framework")," est l'ORM disponible."),(0,o.yg)("p",null,"Les informations de cette page sont tir\xe9es de la documentation officielle de Microsoft sur le Entity Framework et le tutorial pour l'utiliser avec SQLite."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/ef/core/"},"https://docs.microsoft.com/en-us/ef/core/")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/ef/core/get-started/overview/first-app?tabs=netcore-cli"},"https://docs.microsoft.com/en-us/ef/core/get-started/overview/first-app?tabs=netcore-cli"))),(0,o.yg)("h2",{id:"nuget-et-les-librairies"},"NuGet et les librairies"),(0,o.yg)("p",null,"Le Entity Framework est disponible \xe0 partir de librairies externe qui doivent \xeatre ajout\xe9 \xe0 nos programmes. Particuli\xe8rement, un adaptateur doit \xeatre installer pour travailler avec notre base de donn\xe9es. Plusieurs adaptateurs sont disponible et la liste est disponible ",(0,o.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/ef/core/providers/"},"dans ce lien."),"."),(0,o.yg)("p",null,"Les librairies sont fournis en C# par le syst\xe8me NuGet qui est un d\xe9pot des librairies que nous pouvont facilement int\xe9gr\xe9 dans nos projets."),(0,o.yg)("p",null,"Dans notre example, nous utiliserons la base de donn\xe9e SQLite qui n'a pas besoin d'avoir d'installation sp\xe9ciale pour fonctionner et nous donne une base de donn\xe9es SQL."),(0,o.yg)("p",null,"Pour ajouter la librairie, vous pouvez :"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Dans une application console nouvellement cr\xe9\xe9,"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Tools > NuGet Package Manager > Package Manager Console")),(0,o.yg)("li",{parentName:"ul"},"Ex\xe9cut\xe9 la commande suivante : ")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c#"},"Install-Package Microsoft.EntityFrameworkCore.Sqlite\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Il est aussi possible de faire un click-droit sur le projet et de s\xe9lectionner ",(0,o.yg)("inlineCode",{parentName:"li"},"Manage Nuget Packages"),".")),(0,o.yg)("h2",{id:"la-cr\xe9ation-du-mod\xe8le"},"La cr\xe9ation du mod\xe8le"),(0,o.yg)("p",null,"La prochaine \xe9tape est de cr\xe9\xe9 le lien avec la base de donn\xe9e et de mod\xe9lis\xe9 les entit\xe9s (\xe9quivlent de tables SQL) dans notre programme."),(0,o.yg)("p",null,"On doit utiliser les librairies installer. Dans un fichier ",(0,o.yg)("inlineCode",{parentName:"p"},"Model.cs"),", ajouter les en-t\xeate suivant :"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c#"},"using Microsoft.EntityFrameworkCore;\nusing System;\nusing System.Collections.Generic;\n")),(0,o.yg)("p",null,"Il est ensuite possible de cr\xe9\xe9 des classes avec des propri\xe9t\xe9s qui repr\xe9senterons les tables de notre base de donn\xe9es."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c#"},"public class Blog\n{\n    public int BlogId { get; set; }\n    public string Url { get; set; }\n\n    // On repr\xe9sente ici une relation \n    // entre les Blog et les Post.\n    // La relation sera automatique g\xe9r\xe9 \n    // en ajoutant les informations requises \n    // seulement dans la base de donn\xe9es.\n    public List<Post> Posts { get; } = new();\n}\n\npublic class Post\n{\n    public int PostId { get; set; }\n    public string Title { get; set; }\n    public string Content { get; set; }\n\n    public int BlogId { get; set; }\n    public Blog Blog { get; set; }\n}\n")),(0,o.yg)("p",null,"Maitenant que les mod\xe8le sont pr\xe9sent, il faut les reli\xe9 \xe0 la base de donn\xe9e."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c#"},'// On h\xe9rite de DbContext pour faire un lien avec une BD.\npublic class BloggingContext : DbContext\n{\n    //Le DbSet est la repr\xe9sentation de la table\n    public DbSet<Blog> Blogs { get; set; }\n    public DbSet<Post> Posts { get; set; }\n\n    public string DbPath { get; }\n\n    public BloggingContext()\n    {\n        var folder = Environment.SpecialFolder.LocalApplicationData;\n        var path = Environment.GetFolderPath(folder);\n        DbPath = System.IO.Path.Join(path, "blogging.db");\n    }\n\n    // The following configures EF to create a Sqlite database file in the\n    // special "local" folder for your platform.\n    // On utilise ici une lien vers une base de donnn\xe9es SQLite sur l\'ordinateur\n    // local. Avec d\'autre base de donn\xe9es, nous aurions les informations de\n    // connection.\n    protected override void OnConfiguring(DbContextOptionsBuilder options)\n        => options.UseSqlite($"Data Source={DbPath}");\n}\n')),(0,o.yg)("p",null,"Il est aussi possible de synth\xe9tis\xe9 un mod\xe8le \xe0 partir d'une base de donn\xe9e existante. Cela ne sera pas couvert ici mais vous pouvez en lire plus sur le sujet ",(0,o.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/ef/core/managing-schemas/scaffolding"},"sur le lien suivant")),(0,o.yg)("h2",{id:"cr\xe9ation-de-la-base-donn\xe9es"},"Cr\xe9ation de la base donn\xe9es"),(0,o.yg)("p",null,"Maitenant que le mod\xe8le est cr\xe9\xe9, il est temps de cr\xe9\xe9 la base de donn\xe9es (la cr\xe9ation des tables) dans notre fichier SQLite local. Pour ce faire, nous utiliserons un utilitaire externe qui est disponible dans une autre libraire. Cela est n\xe9c\xe9ssaire seulement une fois pour la cr\xe9ation initiale de la base de donn\xe9e. Il serait aussi possible de faire la cr\xe9ation manuellement."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Dans le ",(0,o.yg)("strong",{parentName:"li"},"Package Manager Console (PMC)"),", execut\xe9 les commandes suivantes :")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Install-Package Microsoft.EntityFrameworkCore.Tools\nAdd-Migration InitialCreate\nUpdate-Database\n")),(0,o.yg)("h2",{id:"utilisation-de-la-base-de-donn\xe9e-avec-le-mod\xe8le-dans-un-programme"},"Utilisation de la base de donn\xe9e avec le mod\xe8le dans un programme"),(0,o.yg)("p",null,"Maitenant que la base de donn\xe9es est cr\xe9\xe9 et que le mod\xe8le est pr\xeat. Nous sommes pr\xeat pour cr\xe9\xe9 un programme principale ",(0,o.yg)("inlineCode",{parentName:"p"},"Program.cs"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c#"},'using System;\nusing System.Linq;\n\nusing var db = new BloggingContext();\n\n// Note: This sample requires the database to be created before running.\nConsole.WriteLine($"Database path: {db.DbPath}.");\n\n// Create\nConsole.WriteLine("Inserting a new blog");\ndb.Add(new Blog { Url = "http://blogs.msdn.com/adonet" });\ndb.SaveChanges();\n\n// Read\nConsole.WriteLine("Querying for a blog");\nvar blog = db.Blogs\n    .OrderBy(b => b.BlogId)\n    .First();\n\n// Update\nConsole.WriteLine("Updating the blog and adding a post");\nblog.Url = "https://devblogs.microsoft.com/dotnet";\nblog.Posts.Add(\n    new Post { Title = "Hello World", Content = "I wrote an app using EF Core!" });\ndb.SaveChanges();\n\n// Delete\nConsole.WriteLine("Delete the blog");\ndb.Remove(blog);\ndb.SaveChanges();\n')))}g.isMDXComponent=!0}}]);