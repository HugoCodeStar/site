---
title: Programmes à faire pour le cours 5
sidebar_label: 5 - Héritage & Polymorphisme
---

## Question 1

Vous voulez créé une classe `Pack` qui représente un sac qui permet de contenir des items. Chaque `Pack` a une limite de poids et de volume qui ne doivent pas être dépassé. Il est possible d'ajouter plusieurs item a notre sac. Voici la liste des items avec leurs poids et volume :

| Item    | Poids | Volume |
|---------|-------|--------|
| `Arrow` | 0.1   | 0.5    |
| `Bow`   | 1     | 4      |
| `Rope`  | 1     | 1.5    |
| `Water` | 2     | 3      |
| `Food`  | 1     | 0.5    |
| `Sword` | 5     | 3      |

Objectifs :

* Créez une classe de base `InventoryItem` qui permet de représenté le poids et le volume d'un item.
* Créez des classes dérivés pour chaque objet de la liste. Chaque classe dérivé devrait avoir un constructeur sans paramètre qui l'initialise avec le bon poids et volume.
* Créez la classe `Pack` qui contient un tableau d'item. La nombre total d'item, le poids maximum et le volume maximum seront spécifié à la création de la classe.
* Ajoutez une méthode `public bool Add(InventoryItem item)` à la classe `Pack` qui ajoute l'item dans le sac. La méthode détermine si l'objet peut être ajouté (par rapport au poid maximal et le volume maximal) et l'ajoute en retournant `true` si c'est possible et ne l'ajoutant pas et retournant `false` si c'est impossible.
* Ajoutez des propriétés à la classe `Pack` qui permet de déterminer le nombre d'item dans le sac, le poids et le volume total occupé.
* Créez un programme qui créé un nouveau `Pack` et laisse l'utilisateur ajouter des items à partir de la sélection d'un menu.

## Question 2

Nous voulons facilité la gestion de notre `Pack` avec la redéfinition de méthodes.

Objectifs:

* Redéfinir la méthode `ToString` de nos item dérivé pour qu'il affiche le nom de l'item. Un `Rope` devrait afficher `Rope` avec l'utilisation du `ToString` par exemple.
* Redéfinir la méthode `ToString` de la classe `Pack` pour afficher le contenu du sac. Une liste des items devrait s'afficher. Par exemple, un sac qui contient de l'eau, une corde et deux flèche pourrait afficher `Water Rope Arrow Arrow`.
* Modifier le programme pour que l'utilisateur puisse voir le contenu du sac quand il lui ajoute des items.

## Question 3

Vous avez le code de la classe `Robot` suivante :

```c#
public class Robot
{
    public int X { get; set; }
    public int Y { get; set; }
    public bool IsPowered { get; set; }

    public RobotCommand?[] Commands { get; } = new RobotCommand?[3]; 
    
    public void Run()
    {
        foreach (RobotCommand? command in Commands)
        {
            command?.Run(this);
            Console.WriteLine($"[{X} {Y} {IsPowered}]"); 
        }
    }
}
```

Il manque les définitions de la classe `RobotCommand` et des dérivés pour faire fonctionner le `Robot`. Nous allons donc ajoutez les classes manquantes pour faire fonctionner le robot et le faire déplacé.

Objectifs :

* Ajoutez une classe `RobotCommand` qui contient une méthode `public abstract void Run(Robot robot)`.
* Créez des classes dérivé de `RobotCommand` nommés `OnCommand` et `OffCommand`. Les deux classes doivent redéfinir la méthode `Run` pour modifier le `IsPowered` du robot reçu en paramètre à la méthode.
* Créez ensuite les classe dérivés de `RobotCommand` nommé `NorthCommand`, `SouthCommand`, `WestCommand` et `EastCommand` qui permet de bouger le robot dans des direction X et Y de 1 unité en redéfinissant la méthode `Run`. Les commandes de déplacement ne fonctionne que is la propriété `IsPowered` est vrai.
* Écrivez une programme principal qui permet de prendre la saisie de trois commande et qui les effectue avec la méthode `Run` d'un `Robot`.