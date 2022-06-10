---
title: Héritage et polymorphisme
sidebar_label: 6 - Interface
sidebar_position: 6
---

## Questions préliminaires

Écrivez les classes suivantes:

### Inventaire de vente
Un item dans l'inventaire d'un magasin

* L'item a un cout, un nom et une description
* L'item peux être en rabais. Un indicateur sauvegarde si l'item est en rabais, la taux du rabais est aussi sauvegardé.
* L'item présente sont prix comme étant le cout modifier par le rabais si il est applicable.

### Compte banque
Un compre de banque avec les éléments suivants:

* Le solde du compte qui est visible mais non modifiable.
* Une méthode pour déposer un montant.
* Une méthode pour retirer un montant. Si le montant dépasse le solde, on ne retire que ce qui est disponible.

Ajoutez à cette classe deux classe dérivé pour des comptes crédit et des comptes d'épargne.

* Les comptes crédit peuvent faire des retrait même si ce dernier dépasse le solde. Une nouvelle propriétés indique le nouveau maximum négatif possible.
* Les comptes d'épargne ont un taux d'épargne, il est possigne de faire gagner l'épargne du compte avec une méthode.

## Interface

L'interface est un système qui permet aux classes d'indiquer qu'il se conforment à certaines méthodes.

Cela permet ensuite d'utiliser des objets se conformant à l'interface même si les objets peuvent être autrement très différents.

L'interface sera une déclaration à part qui ressemble à une classe, mais qui ne peut pas être instancé. D'autres classes pourront implémenter l'interface.

Contrairement à l'héritage, les classes peuvent implémenter plusieurs interfaces en même temps.

Les interfaces ressemble à la description de classe abstraite mais peuvent être combiné dans leurs implémentations de classe.

### Déclaration d'une interface

```c#
public interface IPrice
{
    double Price { get; }
}

public interface IReset
{
    void Reset();
}
```

* Les interfaces n'ont pas de constructeur, car ce ne sont pas des classes à part entière.
* Les interface ne peuvent pas avoir de variables d'instances, mais les propriétés sont possible.
* Les méthodes des interfaces sont automatiquement publiques.
* Par convention, les interfaces commencent par la lettre `I`.

### Implémentation d'une interface

Les interfaces doivents être implémenté pas des classes. L'implémentation d'une interface permet de dire que la classe se "conforme" à l'interface.

Il est possible de se conformer à plusieurs interface.

```c#
public class BankAccount : IPrice,IReset
{
    public double Balance { get; private set; }
    public double Price
    {
        get => Balance;
    }

    public void Reset()
    {
        Balance = 0;
    }
}
```

### Utilisation d'une interface

Une fois l'interface établie, il est possible pour n'importe quels méthodes d'utiliser l'inteface comme paramètres ou retour. Il sera possible d'utiliser seulement les fonctionnalités fourni par l'interface à travers ce mécanisme.

```c#
double AddPrices(IPrice p1, IPrice p2) => p1.Price + p2.Price;
```

## La classe `List<T>`

Un `List` est un objet qui permet d'emmagasiner une collection d'objets. Le `<T>` représente un type générique que nous pourrons remplacer par ce que nous voullons enmagasiner dans la collection.

Les `List` offrent deux avantages sur les tableaux :

* Leur taille est dynamique
* Des méthodes sont fournies pour les actions communes.

### Déclaration d'une `List`

La déclaration utilise la syntaxe de création d'objets avec une modification. On inclut le type d'éléments à avoir en tant que classe générique. 

```c#
// Déclaration de liste vide
List<int> numbers = new List<int>();

// Déclaration d'une liste avec des valeurs
List<int> numbers = new List<int>() { 1, 2, 3 };
List<int> numbers = new List<int> { 1, 2, 3 }; // Syntaxe Alternative
```

### Indexer un élément

L'indexage de liste se fait comme un tableau avec les `[]`. Ne pas oublier que les cases commence à 0.

```c#
List<string> words = new List<string>() { "apple", "banana", "corn", "durian" };

// Affiche "corn"
Console.WriteLine(words[2]);

// Modifie "apple" pour "avocado"
words[0] = "avocado";
```

### Ajoutez et retirer des éléments de la liste

Les listes ont les méthodes `add` et `insert` pour faire l'ajour d'élément dans la liste.

```c#
List<string> words = new List<string>();
words.Add("apple");

List<string> words = new List<string>() { "apple", "banana", "durian" };
words.Insert(2, "corn");
```

Pour retirer des élément `Remove`, `RemoveAt` et `clear` peuvent supprimer des éléments trouver, à un index précit ou toute la liste.

```c#
List<string> words = new List<string>() { "apple", "banana", "corn", "durian" };
words.Remove("banana");

// Enlève "apple" qui est à la case 0
words.RemoveAt(0);

// Supprime tous les éléments
words.Clear();
```

### Parcourir les listes

La boucle `foreach` fonctionne avec les listes.

```c#
foreach (string word in words)
{
    Console.WriteLine(word)
}
```

On ne peut pas modifier la taille de la liste dans un foreach. Si tel est le but, on utilise une boucle for normale.

```c#
for (int index = 0; index < ships.Count; index++)
{
    Ship ship = ships[index];
    ship.Update();
    if (ship.IsDead)
    {
        ships.Remove(ship);
        index--; 
    }
}
```