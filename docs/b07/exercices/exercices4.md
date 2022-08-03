---
title: Programmes à faire pour le cours 4
sidebar_label: 4 - Static
sidebar_position: 4
---

## Question 1

À partir de la classe suivante :

```c#
public class Student
{
    private string Name;
    private int StudentId;
    private int NumberOfCredits;
    private double Grade;
}
```

Modifiez la classe pour la convertir avec des propriétés auto-générés.

Ensuite dans une programme principale, créé un objet de type `Student` avec l'initialisation rapide d'objet en lui donnant un nom et un id.

## Question 2

Nous voulons facilement créé certains types de flèches :

* Elite Arrow, fait de métal, plastique, et 95 cm.
* Beginner Arrow, fait de bois, plume d'oie et 75 cm.
* Marksman Arrow, fait de métal, plume d'oie et 65 cm.

Ajoutez à la classe Arror une méthode statique `public static Arrow CreateEliteArrow() {...}` pour chacun des trois types de flèches.

Modifiez le programme principale pour que l'utilisateur puisse choisir un des trois type ou un type custom. Si un des trois types est spécifié, utilisé la méthode statique. Autrement, réutilisé le code créé précédemment.

## Question 3

Écrivez une classe `Customer` qui représente une carte de loyauté pour un client. Après avoir accumuler 100$ d'achat, le prochain achat reçoit un rabait de 10$. Vous devez implémenté les minimalement les méthodes suivantes :

```c#
void MakePurchase(double amount){}
bool DiscountReached(){}
```

Ajoutez un programme principale qui test avec un scénario avec la création d'un Customer qui faire des achats et affiche quand le client fait un achat avec un rabais.