"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[3355],{3423:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(8168),o=(t(6540),t(5680));const a={title:"Connexion DBMS",sidebar_label:"11 - Connexion DBMS",sidebar_position:11},s=void 0,i={unversionedId:"b07/cours/cours11",id:"b07/cours/cours11",isDocsHomePage:!1,title:"Connexion DBMS",description:"Les DBMS (Database Management System) sont les bases de donn\xe9es habituellement d\xe9ploy\xe9es en production. Les bases de donn\xe9es modernes comme Microsoft SQL Server, MariaDB ou Postgres ont besoin de librairies sp\xe9cifiques pour faire fonctionner leurs connexions avec nos diff\xe9rents programmes.",source:"@site/docs/b07/cours/cours11.md",sourceDirName:"b07/cours",slug:"/b07/cours/cours11",permalink:"/site/docs/b07/cours/cours11",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/b07/cours/cours11.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Connexion DBMS",sidebar_label:"11 - Connexion DBMS",sidebar_position:11},sidebar:"B07Sidebar",previous:{title:"10 - ADO.net",permalink:"/site/docs/b07/cours/cours10"},next:{title:"12 - Dataset",permalink:"/site/docs/b07/cours/cours12"}},l=[{value:"MariaDB/MySQL",id:"mariadbmysql",children:[{value:"Entity",id:"entity",children:[]}]},{value:"Postgres",id:"postgres",children:[{value:"Entity Framework",id:"entity-framework",children:[]}]},{value:"SQL Server",id:"sql-server",children:[{value:"Entity Framework",id:"entity-framework-1",children:[]}]},{value:"Oracle",id:"oracle",children:[]}],c={toc:l},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Les DBMS (Database Management System) sont les bases de donn\xe9es habituellement d\xe9ploy\xe9es en production. Les bases de donn\xe9es modernes comme Microsoft SQL Server, MariaDB ou Postgres ont besoin de librairies sp\xe9cifiques pour faire fonctionner leurs connexions avec nos diff\xe9rents programmes."),(0,o.yg)("p",null,"Nous regarderons les diff\xe9rences de connexions avec MariaDB, Postgres et MS SQL. Les pratiques sont aussi applicables \xe0 d'autre DBMS (comme Oracle)."),(0,o.yg)("h2",{id:"mariadbmysql"},"MariaDB/MySQL"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://mariadb.com/kb/en/mysqlconnector-for-adonet/"},"https://mariadb.com/kb/en/mysqlconnector-for-adonet/")),(0,o.yg)("p",null,"Nom du package : MySqlConnector"),(0,o.yg)("p",null,"La cr\xe9ation de la connexion demande une nouvelle chaine de connexion et la commande change de nom de classe:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c#"},'using MySqlConnector;\n\nusing var con = new MySqlConnection("Server=localhost;User ID=root;Password=my-secret-pw;Database=mydatabase");\ncon.Open();\n\nusing var cmd = new MySqlCommand();\ncmd.Connection = con;\n\n//...\n\ncmd.CommandText = "SELECT * FROM cars LIMIT 5";\nusing MySqlDataReader rdr = cmd.ExecuteReader();\n')),(0,o.yg)("p",null,"Autrement, on doit aussi modifier les requ\xeates pour qu'elles soient compatibles avec le SQL de MariaDB. Le reste des \xe9tapes restent pareilles \xe0 notre exemple avec SQLite."),(0,o.yg)("h3",{id:"entity"},"Entity"),(0,o.yg)("p",null,"Package : Pomelo.EntityFrameworkCore.MySql"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql"},"https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql")),(0,o.yg)("p",null,"Le package remplace celui de SQLite. Le restant des manipulations restent les m\xeames (incluant l'ajout du package de Design et des manipulations de migrations pour cr\xe9er la base de donn\xe9es)."),(0,o.yg)("p",null,"Il faut donc changer la configuration du contexte en cons\xe9quence:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c#"},'\nusing Microsoft.EntityFrameworkCore;\n\npublic class BloggingContext : DbContext\n{\n    public DbSet<Blog> Blogs { get; set; }\n    public DbSet<Post> Posts { get; set; }\n    public DbSet<Tag> Tags { get; set; }\n\n    private const string connectionString = "server=localhost;port=3306;database=mydatabase;user=root;password=my-secret-pw";\n    \n    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n    {\n        optionsBuilder.UseMySql(connectionString, new MariaDbServerVersion("10.8.3"));\n    }\n}\n\n// ... Reste du contexte\n')),(0,o.yg)("p",null,"On regarde ici que la seule modification est d'utiliser ",(0,o.yg)("inlineCode",{parentName:"p"},"UseMySql")," avec la nouvelle chaine de connexion."),(0,o.yg)("h2",{id:"postgres"},"Postgres"),(0,o.yg)("p",null,"Nom du package \xe0 installer avec Nuget : Npgsql"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.nuget.org/packages/Npgsql/"},"https://www.nuget.org/packages/Npgsql/")),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.npgsql.org"},"https://www.npgsql.org")),(0,o.yg)("p",null,"M\xeame principe que pour MariaDB, on modifie la chaine de connexion, la classe de commande et le SQL pour \xeatre compatible:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c#"},'using Npgsql;\n\nvar connString = "Host=localhost;Username=postgres;Password=mysecretpassword;Database=postgres";\n\nvar con = new NpgsqlConnection(connString);\ncon.Open();\n\nusing var cmd = new NpgsqlCommand();\ncmd.Connection = con;\n\n///...\nusing NpgsqlDataReader rdr = cmd.ExecuteReader();\n')),(0,o.yg)("h3",{id:"entity-framework"},"Entity Framework"),(0,o.yg)("p",null,"Package : Npgsql.EntityFrameworkCore.PostgreSQL"),(0,o.yg)("p",null,"Dans le m\xeame principe que MariaDB, seulement le contexte doit \xeatre modifi\xe9 :"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c#"},'using Microsoft.EntityFrameworkCore;\n\n\npublic class BloggingContext : DbContext\n{\n    public DbSet<Blog> Blogs { get; set; }\n    public DbSet<Post> Posts { get; set; }\n    public DbSet<Tag> Tags { get; set; }\n\n\n    // The following configures EF to create a Sqlite database file in the\n    // special "local" folder for your platform.\n    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n        => optionsBuilder.UseNpgsql(@"Host=localhost;Username=postgres;Password=mysecretpassword;Database=postgres");\n}\n\n// ... Reste du contexte\n')),(0,o.yg)("h2",{id:"sql-server"},"SQL Server"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/sql/connect/ado-net/microsoft-ado-net-sql-server?view=sql-server-ver16"},"https://docs.microsoft.com/en-us/sql/connect/ado-net/microsoft-ado-net-sql-server?view=sql-server-ver16")),(0,o.yg)("p",null,"Package : Microsoft.Data.SqlClient"),(0,o.yg)("p",null,"La chaine de connexion est modifier, la classe de la commande et les commande SQL sont ajust\xe9es pour le Transact SQL"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c#"},'using Microsoft.Data.SqlClient;\n\nusing var con = new SqlConnection("Server=tcp:localhost,1433;" +\n                                  "Database=mydatabase;User ID=sa;" +\n                                  "Password=yourStrongPassword!;Encrypt=True;" +\n                                  "TrustServerCertificate=True;Connection Timeout=30;");\ncon.Open();\n\n\nusing var cmd = new SqlCommand();\ncmd.Connection = con;\n\n// ...\n\ncmd.CommandText = @"CREATE TABLE cars(id int IDENTITY PRIMARY KEY,\n            name TEXT, price INTEGER)";\n\n// ...\n\n// La librairies de MS SQL demande que les type soient d\xe9finie \xe0 l\'ajout\n\n// Les param\xe8tres @name et @price sont \xe9tablie comme variable\ncmd.CommandText = "INSERT INTO cars(name, price) VALUES(@name, @price)";\n\n// On ajout les param\xe8tres avec des valeurs pr\xe9cise\ncmd.Parameters.Add("@name", SqlDbType.Text, 50).Value = "BMW";\ncmd.Parameters.Add("@price", SqlDbType.Int, 50).Value = 36600;\n\n\n// ...\ncmd.CommandText = "SELECT TOP 5 * FROM cars";\nusing var rdr = cmd.ExecuteReader();\n')),(0,o.yg)("h3",{id:"entity-framework-1"},"Entity Framework"),(0,o.yg)("p",null,"Package : Microsoft.EntityFrameworkCore.SqlServer"),(0,o.yg)("p",null,"On change seulement le contexte avec ",(0,o.yg)("inlineCode",{parentName:"p"},"UseSqlServer"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c#"},'using Microsoft.EntityFrameworkCore;\n\npublic class BloggingContext : DbContext\n{\n    public DbSet<Blog> Blogs { get; set; }\n    public DbSet<Post> Posts { get; set; }\n    public DbSet<Tag> Tags { get; set; }\n\n    // The following configures EF to create a Sqlite database file in the\n    // special "local" folder for your platform.\n    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n        => optionsBuilder.UseSqlServer("Server=tcp:localhost,1433;" +\n                                       "Database=mydatabase;User ID=sa;" +\n                                       "Password=yourStrongPassword!;Encrypt=True;" +\n                                       "TrustServerCertificate=True;Connection Timeout=30;");\n}\n\n// ... Reste du mod\xe8le\n')),(0,o.yg)("h2",{id:"oracle"},"Oracle"),(0,o.yg)("p",null,"Oracle offre aussi des librairies pour ADO.NET et le Entity Framework"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.oracle.com/ca-en/database/technologies/appdev/dotnet/odp.html"},"https://www.oracle.com/ca-en/database/technologies/appdev/dotnet/odp.html")))}u.isMDXComponent=!0},5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);