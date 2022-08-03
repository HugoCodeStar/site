---
title: ADO.net
sidebar_label: 10 - ADO.net
sidebar_position: 10
---

## ADO.NET

ADO.NET est une librairie qui permet d'effectuer une connection à une base de données et d'y envoyer des commande SQL et d'interprété ses réponses. La librairies ADO.NET est la base du Entity Framework que nous avons regardé précédemment.

## Ajout de la librairie

Comme pour le entity framework, on doit ajouter une librairie avec NuGet pour utiliser les fonctionnalité de ADO.net

Pour ajouter la librairie, vous pouvez :

* Dans une application console nouvellement créé,
* **Tools > NuGet Package Manager > Package Manager Console**
* Exécuté la commande suivante : 

```c#
Install-Package Microsoft.Data.Sqlite
```

Nous utiliserons la librairie pour SQLite aujourd'hui et nous verrons plus tard comment se connecter à d'autre SGBD.

## La connexion avec un objet `SQliteConnection`

ADO.NET travaille avec une connection que nous établissons dès le début de notre programme. Cet objet sera notre lien vers la base de données. C'est cette objet de connection que nous pourrons modifier par la suite pour configuré la connection vers d'autre base de données. Pour aujourd'hui, nous utiliserons une connection sur une base de donnée SQLite en mémoire (qui sera donc détruite après l'exécution de nos application) pour explorer le fonctionnement des commandes et de leurs réponses.

### La connexion et la chaine de connexion

L'objet `SqliteConnection` a besoin d'une chaine qui indique les propriétés de la connection. Cette chaine indique par exemple le nom du fichier pour une base de donnée SQLite ou les paramètres d'authetification sur une SGBD.

Voici un exemple d'un programme qui utilise une connexion vers un base de donnée SQLite en mémoire:

```c#
// Utilisation de la librairie installé
using Microsoft.Data.Sqlite;

// La chaine de connextion qui indique que la DB est en mémoire avec le :memory:
string cs = "Data Source=:memory:";

// La création de l'objet de connexion avec la chaine de connexion
using var con = new SqliteConnection(cs);
// Ouverture de la base de donnée pour des commandes.
con.Open();

// Exécution d'une commande (nous verrons plus loins les modalités)
string stm = "SELECT SQLITE_VERSION()";
using var cmd = new SqliteCommand(stm, con);
string version = cmd.ExecuteScalar().ToString();

Console.WriteLine($"SQLite version: {version}");
```

Avec l'objet de connexion construit. Il nous faut utiliser la méthode `Open()` pour établir la connexion avec la base de donnée pour ensuite lui envoyé des commandes.

Il est aussi possible de créé le fichier avec un nom de fichier comme Data Source.

```c#
string cs = @"Data Source=C:\Users\dullin\Documents\test.db";
```

## Les commande avec les objet de commande

Les commandes sont des objets que nous allons construire et configuré avec des objets. Pour SQLite, les objets seront des objets `SqliteCommand`.

Les commandes ont besoin d'avoir deux informations primodriales : la requête et la connexion qui doit être utilisé.

Ces deux éléments peuvents être établie soit à la construction de l'objet ou en modifiant ses propriétés.

```c#
string stm = "SELECT SQLITE_VERSION()";

// En assumant un objet con déjà construit comme dans l'exmple plus haut
// Configuration à la construction de l'objet
using var cmd = new SqliteCommand(stm, con);
```

```c#
string stm = "SELECT SQLITE_VERSION()";

// Création d'une commande vide
using var cmd = new SqliteCommand();

// Configuration de la requête et de la connexion avec le propriétés
cmd.CommandText = stm;
cmd.Connection = con;
```

### Exécution de la commande

L'exécution de la commande se fait avec un méthode de notre objet de commande. La méthode va dépendre des résultats possible de la commande.

| Méthode           | Description                                      | Retour                                         |
|-------------------|--------------------------------------------------|------------------------------------------------|
| `ExecuteNonQuery` | Exécution sans retour                            | Aucun                                          |
| `ExecuteScalar`   | Exécution avec une seule valeur                  | La valeur retourné                             |
| `ExecuteReader`   | Exécution avec plusieurs retours (voir plus bas) | Objet `DataReader` pour la lecture des retours |


### Example de création de table avec `ExecuteNonQuery`

```c#
using Microsoft.Data.Sqlite;

string cs = @"Data Source=C:\Users\dullin\Documents\test.db";

string stm = "SELECT SQLITE_VERSION()";

using var con = new SqliteConnection(cs);
con.Open();

using var cmd = new SqliteCommand();
cmd.Connection = con;

cmd.CommandText = "DROP TABLE IF EXISTS cars";
cmd.ExecuteNonQuery();

cmd.CommandText = @"CREATE TABLE cars(id INTEGER PRIMARY KEY,
            name TEXT, price INT)";
cmd.ExecuteNonQuery();

cmd.CommandText = "INSERT INTO cars(name, price) VALUES('Audi',52642)";
cmd.ExecuteNonQuery();

cmd.CommandText = "INSERT INTO cars(name, price) VALUES('Mercedes',57127)";
cmd.ExecuteNonQuery();

cmd.CommandText = "INSERT INTO cars(name, price) VALUES('Skoda',9000)";
cmd.ExecuteNonQuery();

cmd.CommandText = "INSERT INTO cars(name, price) VALUES('Volvo',29000)";
cmd.ExecuteNonQuery();

cmd.CommandText = "INSERT INTO cars(name, price) VALUES('Bentley',350000)";
cmd.ExecuteNonQuery();

cmd.CommandText = "INSERT INTO cars(name, price) VALUES('Citroen',21000)";
cmd.ExecuteNonQuery();

cmd.CommandText = "INSERT INTO cars(name, price) VALUES('Hummer',41400)";
cmd.ExecuteNonQuery();

cmd.CommandText = "INSERT INTO cars(name, price) VALUES('Volkswagen',21600)";
cmd.ExecuteNonQuery();

Console.WriteLine("Table cars created");
```

## Configuration d'une requête avec des paramètres (Prepared statement)

Il arrive souvent que notre programme va avoir des paramètres variables dans les commandes (par example l'ajout de plusieurs valeurs qui serait dans une méthodes avec des paramètres d'entrés). Pour faire l'ajout d'élément de manière sécuritaire dans des requêtes, nous avons les paramètres préparés.

### Ajout d'éléments paramétrés dans une requête

Durant la contruction d'une requête, il est possible d'ajouter des éléments variables en utilisant un symbole spéciale devant la variable. Pour SQLite, le symbole est `@`.

Il est ensuite possible d'ajouter les éléments avec la méthode `Parameters.AddWithValue` qui indique le paramètre et la valeur.

Quand tous les paramètres sont établie, nous pouvons préparé la commande avec la méthode `Prepare` avant l'exécution de la commande.

```c#
using var cmd = new SqliteCommand();
cmd.Connection = con;

// Les paramètres @name et @price sont établie comme variable
cmd.CommandText = "INSERT INTO cars(name, price) VALUES(@name, @price)";

// On ajout les paramètres avec des valeurs précise
cmd.Parameters.AddWithValue("@name", "BMW");
cmd.Parameters.AddWithValue("@price", 36600);

// On prépare et exécute la commande
cmd.Prepare();
cmd.ExecuteNonQuery();
```

## Lecture des retours avec un `DataReader`

Quand nous avons besoin de lire plusieurs retour, nous utiliserons la méthode `ExecuteReader` qui nous retourne une `SqliteDataReader` qui pourra regarder les différentes valeurs de notre réponse.

Le reader utilise un curseur pour sélectionner un résultat qui peux être déplacé.

Le curseur peux être avancé avec la méthode `Read` qui avance sur l'autre ligne des résultat.

Avec une ligne sélectionné, nous pouvons allé chercher les informations des colonnes avec des méthodes `Get*(colonne)` ou `*` est le type de l'information et `colonne` est le numéro de colonne de l'information recherché.

```c#
// Commande avec plusieurs ligne de retours
cmd.CommandText = "SELECT * FROM cars LIMIT 5";
using SqliteDataReader rdr = cmd.ExecuteReader();

// La méthode Read renvoie vrai tant qu'il reste des lignes dans les résultats
while (rdr.Read())
{
    // On utilise GetInt32, GetString et GetInt32 pour aller chercher les résultat des colonne 0, 1 et 2 respectivement.
    Console.WriteLine($"{rdr.GetInt32(0)} {rdr.GetString(1)} {rdr.GetInt32(2)}");
}
```

### Meta-données des colonnes avec le Reader

Il est aussi possible d'aller chercher des méta-données comme le nom des colonnes avec un Reader avec les méthode `GetName`.

```c#
cmd.CommandText = "SELECT * FROM cars LIMIT 5";
using SqliteDataReader rdr = cmd.ExecuteReader();

Console.WriteLine($"{rdr.GetName(0)} {rdr.GetName(1)} {rdr.GetName(2)}");
```