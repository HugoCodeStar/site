---
title: Exception
sidebar_label: 7 - Exception
sidebar_position: 7
---

## La classe Random

La classe Random permet de générer des nombres aléatoires. Elle permet de créé des générateurs configurable (avec des maximum bien établie).

La classe Random n'est pas statique et doit constuire un objet qui pourra générer les nombres avec la méthodes `Next`. Cette méthode peut prendre un paramètre `int` pour avoir un plafond maximale (exclue)pour la valeur généré. Le nombre sera entre 0 et la valeur maximale (exclue).

```c#
// Création d'une tableau d'éléments
List<String> names = new List<String> {"Bob", "Anne", "Maria"};

// Choisir un des noms de manières aléatoire

// Création du générateur de nombre aléatoire
Random random = new Random();


int randomIndex = random.Next(names.Count);
Console.WriteLine($"La personne choisi est : {names[randomIndex]}" );
```

## Multiple fichier dans le même projet

Il est possible de créé des nouveaux fichiers dans le même projet. Les classes sont souvent séparé dans des fichiers disctincs pour limiter le nombre de ligne total de chaque fichier (des fichiers a plusieurs centaines de lignes sont difficile a modifier).

Il vous suffit de créé un nouveau fichier dans le projet courant (`File -> New -> File ...` ou `CTRL-N`). Il est aussi possible d'utiliser les action rapide avec alt-enter sur une classe pour la transpoter dans un fichier de manières automatique.

## `namespace` avec `using`

Avec la création de plusieurs classes par plusieurs programmes, il est possible/probable qu'il va arriver un conflit de noms entre les classes (deux classes avec le même nom). Pour éviter les conflits de noms, le `c#` nous offres les espaces de noms (namespace). Un `namespace` s'utilise un peu comme un nom de famille qui permet de distinguer deux classes du mêmes noms. Sans nom spécifique, les éléments déclaré sont dans un espace `global`. Quand des éléments sont présent dans un namespace, il faut importer le namespace dans notre programme pour que celui-ci devienne disponible. 

Nous pouvons importer un name space avec la commande `using`, il est ensuite possible d'utiliser la classe importer. Il est aussi possible d'utilier le nom complet (fully qualified name).

Il existe plusieurs namespace avec les libraires de bases, le plus grand est `System` qui contient des namespace a sont tour comme `System.Text` ou `System.Collections`.

```c#
// Appel d'une classe dans avec son nom complet.
System.Console.WriteLine("Hell, world!");

// Utilisation du using pour importer la namespace dans notre programme
using System.Test;

// La classe Stringbuilder est dans le namespace System.Text
StringBuilder stringBulder = new StringBuilder();
```

Il est possible de mettre nos programmes dans des namespace avec la directive `namespace`.

```c#
// Si tout le fichier dans être dans un namespace on peut le déclarer au début du fichier
namespace MonProjet;

// Reste du code
```

Il est aussi possible de créé des ensemble d'élément dans un namespace

```c#
namepace ChartingMap
{
    public enum Direction { North, South, East, West };

    public class Point{ /* Rest of class */}
}
```

L'utilisation de fichiers simplifier construit en fait un name space avec une méthode main par défault qui sera invoqué comme point de départ dans nos programmes.

Les projets modernes ajoute aussi automatiquement les namespace suivant:

* System
* System.Collections.Generic
* System.IO
* System.Linq

## Gestion d'erreur avec `try` et `catch`

Quand un erreur survient dans un programme, une exception est lancé. Si l'exception n'est par géré, le programme arrête et fourni l'erreur qui a été détecté. Il est possible de faire de la gestion d'exception manuelle pour ne pas terminer le programme quand une erreur survient. Il est aussi posibble de créer ses propres exceptions pour spécifié de nouveaux types d'erreurs.

```c#
//Example d'une méthode qui soulève une erreur
int GetNumberFromUser()
{
    int number = 0;
    while (number < 1 || number > 10)
    {
        Console.Write("Enter a number between 1 and 10: ");
        // Si on entre du texte, le programme crash
        string? response = Console.ReadLine();
        number = Convert.ToInt32(response);
    }
    return number;
}
```

Il est possible d'utiliser le `try`/`catch` pour intercepter l'erreur et ne pas interrompre le programme

```c#
// Code qui peut soulever une erreur
try {
    number = Convert.ToInt32(response);
}
// Si, il y une exception
catch (Exception)
{
    number = -1;
    Console.WriteLine($"I do not understand '{response}'.");
}
```

Les erreur sont des objets, il est possible d'avoir des bloc `catch` pour des erreur spécifique.

```c#
try {
    number = Convert.ToInt32(response);
}
catch (FormatException)
{
number = -1;
    Console.WriteLine($"I do not understand '{ response }'.");
}
catch (OverflowException)
{
    number = -1;
    Console.WriteLine($"That number is too big!"); 
}
```

Étant des objets, il est aussi possible d'utilier l'objet d'erreur pour aller regarder le message d'erreur

```c#
try { ... }
catch (FormatException e)
{
    Console.WriteLine(e.Message);
}
```

Dans notre cotre, il est possible de soulever une erreur avec l'instruction `throw`.

```c#
Console.WriteLine("Name an animal.");
string? animal = Console.ReadLine();
if (animal == "snake") 
{
    throw new Exception();
}
```

Il existe plusieurs classe d'exception que nous pouvons utiliser

| Classe                      | Description                                                      |
|-----------------------------|------------------------------------------------------------------|
| NotImplementedException     | Code absent pour cette partie du programme                       |
| NotSupportedException       | Nous ne pouvont pas faire ce qui est demandé                     |
| InvalidOperationException   | La demande ne peut pas être faite de la manière demandé          |
| ArgumentOutOfRangeException | L'argument donné n'est pas dans mes tolérances                   |
| ArgumentNullException       | L'argument était null et le reste ne fonctionne pas avec un null |
| ArgumentException           | Autre type d'erreur avec l'argument                              |
| Exception                   | Une erreur est survenue sans plus d'information                  |

Il est aussi possible de créé ses propres exceptions en dérivant la classe `Exception`

```c#
public class SnakeException : Exception
{
    public SnakeException() { }
    public SnakeException(string message) : base(message) { }
}
``` 