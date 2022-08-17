---
title: Connexion DBMS
sidebar_label: 11 - Connexion DBMS
sidebar_position: 11
---

Les DBMS (Database Management System) sont les bases de données habituellement déployées en production. Les bases de données modernes comme Microsoft SQL Server, MariaDB ou Postgres ont besoin de librairies spécifiques pour faire fonctionner leurs connexions avec nos différents programmes.

Nous regarderons les différences de connexions avec MariaDB, Postgres et MS SQL. Les pratiques sont aussi applicables à d'autre DBMS (comme Oracle).

## MariaDB/MySQL

https://mariadb.com/kb/en/mysqlconnector-for-adonet/

Nom du package : MySqlConnector

La création de la connexion demande une nouvelle chaine de connexion et la commande change de nom de classe:

```c#
using MySqlConnector;

using var con = new MySqlConnection("Server=localhost;User ID=root;Password=my-secret-pw;Database=mydatabase");
con.Open();

using var cmd = new MySqlCommand();
cmd.Connection = con;

//...

cmd.CommandText = "SELECT * FROM cars LIMIT 5";
using MySqlDataReader rdr = cmd.ExecuteReader();
```

Autrement, on doit aussi modifier les requêtes pour qu'elles soient compatibles avec le SQL de MariaDB. Le reste des étapes restent pareilles à notre exemple avec SQLite.

### Entity

Package : Pomelo.EntityFrameworkCore.MySql

https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql

Le package remplace celui de SQLite. Le restant des manipulations restent les mêmes (incluant l'ajout du package de Design et des manipulations de migrations pour créer la base de données).

Il faut donc changer la configuration du contexte en conséquence:

```c#

using Microsoft.EntityFrameworkCore;

public class BloggingContext : DbContext
{
    public DbSet<Blog> Blogs { get; set; }
    public DbSet<Post> Posts { get; set; }
    public DbSet<Tag> Tags { get; set; }

    private const string connectionString = "server=localhost;port=3306;database=mydatabase;user=root;password=my-secret-pw";
    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseMySql(connectionString, new MariaDbServerVersion("10.8.3"));
    }
}

// ... Reste du contexte
```

On regarde ici que la seule modification est d'utiliser `UseMySql` avec la nouvelle chaine de connexion.

## Postgres

Nom du package à installer avec Nuget : Npgsql

https://www.nuget.org/packages/Npgsql/

https://www.npgsql.org


Même principe que pour MariaDB, on modifie la chaine de connexion, la classe de commande et le SQL pour être compatible:

```c#
using Npgsql;

var connString = "Host=localhost;Username=postgres;Password=mysecretpassword;Database=postgres";

var con = new NpgsqlConnection(connString);
con.Open();

using var cmd = new NpgsqlCommand();
cmd.Connection = con;

///...
using NpgsqlDataReader rdr = cmd.ExecuteReader();
```

### Entity Framework

Package : Npgsql.EntityFrameworkCore.PostgreSQL

Dans le même principe que MariaDB, seulement le contexte doit être modifié :

```c#
using Microsoft.EntityFrameworkCore;


public class BloggingContext : DbContext
{
    public DbSet<Blog> Blogs { get; set; }
    public DbSet<Post> Posts { get; set; }
    public DbSet<Tag> Tags { get; set; }


    // The following configures EF to create a Sqlite database file in the
    // special "local" folder for your platform.
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseNpgsql(@"Host=localhost;Username=postgres;Password=mysecretpassword;Database=postgres");
}

// ... Reste du contexte
```

## SQL Server

https://docs.microsoft.com/en-us/sql/connect/ado-net/microsoft-ado-net-sql-server?view=sql-server-ver16

Package : Microsoft.Data.SqlClient

La chaine de connexion est modifier, la classe de la commande et les commande SQL sont ajustées pour le Transact SQL

```c#
using Microsoft.Data.SqlClient;

using var con = new SqlConnection("Server=tcp:localhost,1433;" +
                                  "Database=mydatabase;User ID=sa;" +
                                  "Password=yourStrongPassword!;Encrypt=True;" +
                                  "TrustServerCertificate=True;Connection Timeout=30;");
con.Open();


using var cmd = new SqlCommand();
cmd.Connection = con;

// ...

cmd.CommandText = @"CREATE TABLE cars(id int IDENTITY PRIMARY KEY,
            name TEXT, price INTEGER)";

// ...

// La librairies de MS SQL demande que les type soient définie à l'ajout

// Les paramètres @name et @price sont établie comme variable
cmd.CommandText = "INSERT INTO cars(name, price) VALUES(@name, @price)";

// On ajout les paramètres avec des valeurs précise
cmd.Parameters.Add("@name", SqlDbType.Text, 50).Value = "BMW";
cmd.Parameters.Add("@price", SqlDbType.Int, 50).Value = 36600;


// ...
cmd.CommandText = "SELECT TOP 5 * FROM cars";
using var rdr = cmd.ExecuteReader();
```

### Entity Framework

Package : Microsoft.EntityFrameworkCore.SqlServer

On change seulement le contexte avec `UseSqlServer`:

```c#
using Microsoft.EntityFrameworkCore;

public class BloggingContext : DbContext
{
    public DbSet<Blog> Blogs { get; set; }
    public DbSet<Post> Posts { get; set; }
    public DbSet<Tag> Tags { get; set; }

    // The following configures EF to create a Sqlite database file in the
    // special "local" folder for your platform.
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Server=tcp:localhost,1433;" +
                                       "Database=mydatabase;User ID=sa;" +
                                       "Password=yourStrongPassword!;Encrypt=True;" +
                                       "TrustServerCertificate=True;Connection Timeout=30;");
}

// ... Reste du modèle
```

## Oracle

Oracle offre aussi des librairies pour ADO.NET et le Entity Framework

https://www.oracle.com/ca-en/database/technologies/appdev/dotnet/odp.html