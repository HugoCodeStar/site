---
title: Entity Framework
sidebar_label: 9 - Entity Framework
sidebar_position: 9
---

## ORM (Object–relational mapping)

Pour faciliter la connection à des bases de données, des ORM permettent d'utiliser les structures orientées-objets et de lire et écrire des information dans des bases de données. Les différents ORM sont dépendants du language et des librairies que ceux-ci utilisent. Avec C#, le `Entity Framework` est l'ORM disponible.

Les informations de cette page sont tirées de la documentation officielle de Microsoft sur le Entity Framework et le tutorial pour l'utiliser avec SQLite.

* https://docs.microsoft.com/en-us/ef/core/
* https://docs.microsoft.com/en-us/ef/core/get-started/overview/first-app?tabs=netcore-cli

## NuGet et les librairies

Le Entity Framework est disponible à partir de librairies externe qui doivent être ajouté à nos programmes. Particulièrement, un adaptateur doit être installer pour travailler avec notre base de données. Plusieurs adaptateurs sont disponible et la liste est disponible [dans ce lien.](https://docs.microsoft.com/en-us/ef/core/providers/).

Les librairies sont fournis en C# par le système NuGet qui est un dépot des librairies que nous pouvont facilement intégré dans nos projets.

Dans notre example, nous utiliserons la base de donnée SQLite qui n'a pas besoin d'avoir d'installation spéciale pour fonctionner et nous donne une base de données SQL.

Pour ajouter la librairie, vous pouvez :

* Dans une application console nouvellement créé,
* **Tools > NuGet Package Manager > Package Manager Console**
* Exécuté la commande suivante : 

```c#
Install-Package Microsoft.EntityFrameworkCore.Sqlite
```

* Il est aussi possible de faire un click-droit sur le projet et de sélectionner `Manage Nuget Packages`.

## La création du modèle

La prochaine étape est de créé le lien avec la base de donnée et de modélisé les entités (équivlent de tables SQL) dans notre programme.

On doit utiliser les librairies installer. Dans un fichier `Model.cs`, ajouter les en-tête suivant :

```c#
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
```

Il est ensuite possible de créé des classes avec des propriétés qui représenterons les tables de notre base de données.

```c#
public class Blog
{
    public int BlogId { get; set; }
    public string Url { get; set; }

    // On représente ici une relation 
    // entre les Blog et les Post.
    // La relation sera automatique géré 
    // en ajoutant les informations requises 
    // seulement dans la base de données.
    public List<Post> Posts { get; } = new();
}

public class Post
{
    public int PostId { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }

    public int BlogId { get; set; }
    public Blog Blog { get; set; }
}
```

Maitenant que les modèle sont présent, il faut les relié à la base de donnée.

```c#
// On hérite de DbContext pour faire un lien avec une BD.
public class BloggingContext : DbContext
{
    //Le DbSet est la représentation de la table
    public DbSet<Blog> Blogs { get; set; }
    public DbSet<Post> Posts { get; set; }

    public string DbPath { get; }

    public BloggingContext()
    {
        var folder = Environment.SpecialFolder.LocalApplicationData;
        var path = Environment.GetFolderPath(folder);
        DbPath = System.IO.Path.Join(path, "blogging.db");
    }

    // The following configures EF to create a Sqlite database file in the
    // special "local" folder for your platform.
    // On utilise ici une lien vers une base de donnnées SQLite sur l'ordinateur
    // local. Avec d'autre base de données, nous aurions les informations de
    // connection.
    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite($"Data Source={DbPath}");
}
```

Il est aussi possible de synthétisé un modèle à partir d'une base de donnée existante. Cela ne sera pas couvert ici mais vous pouvez en lire plus sur le sujet [sur le lien suivant](https://docs.microsoft.com/en-us/ef/core/managing-schemas/scaffolding)

## Création de la base données

Maitenant que le modèle est créé, il est temps de créé la base de données (la création des tables) dans notre fichier SQLite local. Pour ce faire, nous utiliserons un utilitaire externe qui est disponible dans une autre libraire. Cela est nécéssaire seulement une fois pour la création initiale de la base de donnée. Il serait aussi possible de faire la création manuellement.

* Dans le **Package Manager Console (PMC)**, executé les commandes suivantes :

```
Install-Package Microsoft.EntityFrameworkCore.Tools
Add-Migration InitialCreate
Update-Database
```

## Utilisation de la base de donnée avec le modèle dans un programme

Maitenant que la base de données est créé et que le modèle est prêt. Nous sommes prêt pour créé un programme principale `Program.cs`:

```c#
using System;
using System.Linq;

using var db = new BloggingContext();

// Note: This sample requires the database to be created before running.
Console.WriteLine($"Database path: {db.DbPath}.");

// Create
Console.WriteLine("Inserting a new blog");
db.Add(new Blog { Url = "http://blogs.msdn.com/adonet" });
db.SaveChanges();

// Read
Console.WriteLine("Querying for a blog");
var blog = db.Blogs
    .OrderBy(b => b.BlogId)
    .First();

// Update
Console.WriteLine("Updating the blog and adding a post");
blog.Url = "https://devblogs.microsoft.com/dotnet";
blog.Posts.Add(
    new Post { Title = "Hello World", Content = "I wrote an app using EF Core!" });
db.SaveChanges();

// Delete
Console.WriteLine("Delete the blog");
db.Remove(blog);
db.SaveChanges();
```