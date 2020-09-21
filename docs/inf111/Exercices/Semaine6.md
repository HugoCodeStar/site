+++
title = "Exercices de la semaine 6"
menuTitle = "ArrayList et Héritage"
draft = false
weight = 100
+++

## ArrayList

### Question
Une animalerie veut pouvoir donner un rabais à ses clients s’ils achètent un animal et au moins 5 autres items. Le rabais est de 20 pour cent sur les autres items, mais pas sur les animaux.

Écrivez une classe `Item` qui a le constructeur suivant et ajoutez-y les accesseurs et mutateurs nécessaires:
`public Item(double price, boolean isPet, int quantity)`

Écrivez ensuite une classe `Invoice` qui contient une collection d'`Item`. Utiliser une `ArrayList` pour contenir les items. La classe `Invoice` doit avoir les méthodes suivantes:
`public void add(Item anItem)`
`public double getDiscount()`

Écrivez ensuite une méthode statique `main` qui demande à un utilisateur le prix et la quantité d'un item, si l'item est un animal et s’il y a d'autres items à entrez. La méthode affiche ensuite le prix avec `getDiscount()`.


### Question
Un supermarché veut récompenser son meilleur client de chaque jours en affichant son nom sur un écran. Le supermarché utilise un `ArrayList<Customer>` pour sauvegarder ses clients.

Écrivez une `Customer` qui a le constructeur suivant et ajoutez-y les accesseurs et mutateurs nécessaires:
`public Customer(String name, double amount)`

Écrivez une classe `Store` qui implémente les méthodes suivantes :
`public void addSale(String customerName, double amount)`
`public String nameOfBestCustomer()`

Écrivez une méthode statique `main` qui créé un `Store`, ajoute 5 `Customer` et affiche les 3 meilleurs.

## Héritage

### Question
Écrivez une classe `Person` et deux classes qui héritent de `Person`, `Student` et `Instructor`. Une personne à un nom et une année de naissance. Un étudiant à un programme et l'instructeur à un salaire. Écrire les déclarations des classes, leurs constructeurs et une méthode `toString` pour chacun. Écrivez un programme qui teste et utilise chacune des classes ci-haut.

### Question
Écrivez une série de classe héritant l'une de l'autre. Une première classe `Employee` avec un nom et un salaire. Un `Manager` avec un département qui hérite de `Employee`. Enfin, un `Executive` avec un bonus qui hérite de `Manager`. Écrivez les constructeurs et la méthode `toString` pour chaque classe. Écrivez un programme qui construit un `Executive` et affiche ses informations à l'aide de sa méthode `toString`.

### Question
Écrit une classe `BetterRectangle` qui hérite de `Rectangle` du package `java.awt` qui ajoute la méthode `getArea` et `getPerimeter` qui calcule l'aire et le périmètre du rectangle. Écrivez un programme qui teste l'utilisation de ces nouvelles méthodes.

**Note** : Ne rajoutez pas de nouveau constructeur ni de nouvelles variables d'instances.

### Question
Écrivez une classe `LabeledPoint` qui hérite de `Point` du package `java.awt`. La classe ajoute une étiquette au point. Écrivez le constructeur suivant :
`LabeledPoint(int x, int y, String label)`
ainsi que la méthode `toString` qui utilise le `toString` de la classe `Point`.


### Solutions
[Archive](/INF111/sources/sem6.zip)