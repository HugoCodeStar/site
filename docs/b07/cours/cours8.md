---
title: Exception
sidebar_label: 8 - Expression de requêtes
sidebar_position: 8
---

## Langague Integrated Queries (LINQ)

Le `C#` contient un type d'expression qui permet de faire des requêtes sur des données (similaire a ce qu'on fait avec le langage SQL). Ces expressions de requêtes (query expressions) permet de faciliter la recherche de donnée qui pourrait autrement être fait avec des `if` et des boucles habituelles.

##  Requêtes et `IEnumerable<T>`

Les expressions de requêtes fonctionnes sur n'importe quel structure qui implémente `IEnumerable<T>`. Cela inclus toutes les collections commes les listes que nous avons utilisés.

## Données initiales pour les exemples

Nous aurons besoin d'avoir des données initiales pour faires des requêtes, nous utiliserons la représentation d'un camion qui a une position qui est conduit par un employé.

```c#
List<Truck> trucks = new List<Truck>();
trucks.Add(new Truck(){ID = 1, X = 0, Y = 0, NbParcels = 50, MaxNbParcels = 100, DriverID = 1});
trucks.Add(new Truck(){ID = 2, X = 4, Y = 2, NbParcels = 75, MaxNbParcels = 100, DriverID = 1});
trucks.Add(new Truck(){ID = 3, X = 9, Y = 3, NbParcels = 0, MaxNbParcels = 100, DriverID = 2});

List<Driver> drivers = new List<Driver>();
drivers.Add(new Driver(){ID = 1, UserName = "Driver 1", Division = "Red"});
drivers.Add(new Driver(){ID = 2, UserName = "Driver 2", Division = "Blue"});

public class Truck
{
    public int ID { get; set; }
    public double X { get; set; }
    public double Y { get; set; }
    public int MaxNbParcels { get; set; }
    public int NbParcels { get; set; }
    public int DriverID { get; set; }
}

public class Driver
{
    public int ID { get; set; }
    public string UserName { get; set; }
    public string Division { get; set; }
}
```

## Bases des expressions de requêtes

Les expressions de requêtes sont formés de différentes clauses, comme dans le langage SQL. Elle débute avec une clause `from` et se termine avec une clause `select`. Le `from` définie la source de données et le `select permet d'indiquer quelle partie de cette source sera sélectionné comme résultat.

Un example simple serait :

```c#
IEnumerable<Truck> everything = from t in trucks select t;
```

Le `from t in trucks` permet de sélectionner la source et introduire une variable t qui représentera chacun des camions dans ma requêtes. Le `select t` fait en sorte que tous les camions seront sélectionné.

Il est possible de faire une requête plus spécifique sur seulement un des éléments de nos camions :

```c#
var ids = from t in trucks select t.ID;
```

Dans ce cas `ids` est un `IEnumarable<int>` car la sélection c'est fait sur une information qui est un entier.

Il est aussi possible d'avoir des expressions de toutes sortes.

```c#
// Donne une chaine explicative
var ratioText = from t in trucks select $"{t.NbParcels}/{t.MaxNbParcels}";

// Retourne des double des ratios utilisés
var ratio = from t in trucks select (double)t.NbParcels/t.MaxNbParcels;

// Permet même d'avoir des tuples
var ratioStatus = from t in trucks select (t, $"{t.NbParcels}/{t.MaxNbParcels}");
```

## Filtrage `where`

La clause `where` permet de filtrer les éléments de notre source `from`. Elle inclue une expression booléenne (condition) qui sera tester sur chaque élément. Si cette condition est vrai pour un élément, il sera retenue dans notre résultat.

Voici un exemple qui retient seulement les camions avec des colis :

```c#
var truckAvecColis = from t in trucks where t.NbParcels > 0 select t;
```

Il est possible d'avoir plusieurs clause `where` entre le `from` et le `select` (ce qui est différent du SQL).

```c#
var truckAvecColis = from t in trucks 
                where t.NbParcels > 0 
                where t.DriverID == 2
                select t;

```

## Ordre des valeurs `orderby`

La clause `orderby` permet de manipuler l'ordres des éléments retourné.

```c#
var orderCapacity = from t in trucks
                    orderby t.MaxNbParcels
                    select t;
```

Il est aussi possible de changer le sens de l'ordre

```c#
var orderCapacity = from t in trucks
                    orderby t.MaxNbParcels descending
                    select t;
```

Une autre option est de fournir plusieurs éléments pour l'ordre qui permetera de distinguer l'ordre dans le cas où le premier premier critère donne égalité.

```c#
var orderCapacity = from t in trucks
                    orderby t.MaxNbParcels, t.NbParcels
                    select t;
```

## Syntaxe d'appel de méthodes

Il est possible d'utiliser des méthodes pour faires la même sélection qu'avec les expressions de requêtes.

```c#
var results = from t in trucks
            where t.NbParcels > 0
            orderby t.NbParcels
            select (double)t.NbParcels/t.MaxNbParcels;

// Même requête avec des appels
var results = trucks
                .Where(t => t.NbParcels > 0)
                .OrderBy(t => t.NbParcels)
                .Select(t => (double)t.NbParcels/t.MaxNbParcels);
```

Nous utilisons ici des expressions lambda qui permet de fournir une méthode ephémère comme paramètre.

## Méthode unique

Il existe quelque méthode qui nous permet de faires des opérations qui n'ont pas d'équivalent dans les expressions de requêtes.

La méthode `Count` permet d'avoir le nombre d'éléments d'une collection et permet d'avoir une condition en from d'expression lambda.

```c#
int total = trucks.Count();
int nDriver1 = trucks.Count(t => t.DriverID == 1);
```

Les méthodes `Any` et `All` permet de déterminer si au moins une (pour `Any`) ou si tous les éléments (`All`) répondes à un certain critère.

```c#
bool atLeastOneParcel = trucks.Any(t => t.NbParcels > 0);
bool noParcels = trucks.All(t => t.NbParcels == 0);
```

`Skip` et `Take` permet de sauter un certain nombre d'item ou inversement de juste prendre ce nombre d'item.

```c#
var allButFirst = trucks.OrderBy(t => t.NbParcels).Skip(1);
var firstThree = trucks.OrderBy(t => t.NbParcels).Take(3);
```

Les méthodes `Average`, `Sum`, `Min` et `Max donne des statistique sur les éléments.

```c#
int longestName = drivers.Max(d => d.UserName.Length);
int shortestName = drivers.Min(d => d.UserName.Length);
double averageNameLength = drivers.Average(d => d.UserName.Length);
int totalParcels    = trucks.Sum(t => t.NbParcels);
```

Cette liste est non-exaustive, il existe d'autres méthodes intéressate à utliser sur les collections.

## Jointure de collections

Il est possible de faire la jointure de deux collection pour avoir les éléments en référence d'une collection a une autre.

```c#
var truckDivision = from t in trucks
    join d in drivers on t.DriverID equals d.ID
    select (t, d.Division);
```

Le `join` permet d'inséré une autre collection qui sera rataché. Cette jointure est l'équivalent d'un `inner join` en SQL. Seulement les paires avec correspondances seront retenues.

## Ajout de variables avec `let`

La clause `let` permet d'avoir des variables transitoire durant l'expression qui pourront être réutilisés dans la requête.

```c#
var statuses = from t in trucks
            let percentFull = (double)t.NbParcels / t.MaxNbParcels * 100.0
            select $"{t.ID} is full at {percentFull}%";
```
