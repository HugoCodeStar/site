---
title: Datasets
sidebar_label: 12 - Dataset
sidebar_position: 12
---

Les datasets sont des représentations des données d'une source (comme une base de données) qui est gardée en mémoire pour consultation et transformation. Cette structure de données est déconnectée de la source. Cela permet de faire des modifications et des recherches de très rapidement sans avoir à gardé la connexion. Cela vient à l'inverse de connexion comme le DataReader qui reste connecter durant les opérations du programme.

Le dataset est une hiérarchie de classe qui permet de traverser les informations recueillies. Le dataset peut contenir plusieurs tables, leurs relations et leurs définitions.

![](datasetclasses.png)

## Création d'un dataset

Les dataset est créé à travers un `DataAdapter` qui pourra remplir le `DataSet` avec les informations d'une requête. Nous pourrons ensuite faire des requêtes sur les collections du `DataSet`.

```c#
// On assume con étant un connection déjà configuré.
con.Open();

string commandStr = "SELECT * FROM cars";

OracleDataAdapter adapter = new OracleDataAdapter(commandStr, con);
```

Il faut ensuite remplir le `DataSet` avec la méthode `Fill` de l'adapteur, cela va chercher les informations et rempli le `DataSet` qui pourra être ensuite consulté. 

```c#
DataSet dataSet = new DataSet();

// Le deuxième paramètre est le nom de la table dans le Dataset. Il pourra être utilisé pour retrouvé l'information. Plusieurs Table peut être ajouté dans le DataSet.
adapter.Fill(dataSet, "Cars");
```

## Parcourir les données du `DataSet`

Le DataSet peut ensuite être parcouru avec les différentes collections au niveau des tables, lignes et colonnes.

```c#
// Regarde chacune des tables dans le DataSet
foreach (DataTable table in dataSet.Tables)
{
    // Prendre le nom des colonnes
    foreach (DataColumn column in table.Columns)
    {
        Console.Write(column.ToString() + " ");
    }
    Console.WriteLine();
    
    // Regarde chacune des ligne de la table
    foreach (DataRow row in table.Rows)
    {
        // Parcour chaque information de la ligne
        foreach (DataColumn column in table.Columns)
        {
            // La ligne est une collection avec des noms
            Console.Write(row[column] + " ");
        }
        Console.WriteLine();
    }
}
```

## Modifier les données et mettre à jour la source

Il est possible de modifier les données d'un `DataSet`. Il faut par contre se souvenir que les données sont faites et déconnectées de la source (la base de données). Il est possible de forcer une mise à jour de la source de données à partir des modifications faites à un `DataSet`.

L'adaptateur à une méthode `Update` qui prend le `DataSet` modifié qui sera envoyé et mis à jour dans la base de données. Pour avoir les méthodes de modification, un `CommandBuilder` doit être préparé, sinon la mise à jour ne fonctionnera pas.

```c#
// On modifie le DataSet
foreach (DataRow line in dataSet.Tables["Cars"].Rows)
{
    if ((Decimal)line["price"] > 60000)
    {
        line["price"] = (Decimal)line["price"] - 1000;
    }
    Console.WriteLine(line["price"]);
}

// On construit le CommandBuilder qui doit être disponible pour faire la mise à jours.
OracleCommandBuilder builder = new OracleCommandBuilder(adapter);

// On indique le DataSet qui doit être mis à jours et la Table du DataSet qui doit être regardé.
adapter.Update(dataSet, "Cars");
```