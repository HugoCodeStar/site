+++
title = "Labyrinthe - Génération et résolution"
menuTitle = "TP2 - Labyrinthe"
draft = false
weight = 10
+++

Le deuxième projet sera deux parties :

* Partie 1 - Génération de labyrinthe
* Partie 2 - Résolution d'un labyrinthe et implémentation d'un type de donnée abstrait

### Instructions

* En équipe de deux ou trois.
* Étudiez les méthodes des classes fournies pour bien comprendre leurs fonctionnements.
* Implémentez les classes demandées en vous basant sur la documentation fournie.
* Remise sur Moodle le 26 juillet avant 23h59.

### Fichiers fournis

* [Documentation](/TP2/javadoc/index.html)

* [Archive des fichiers](/TP2/TP2.zip)

### Informations fournies

Plusieurs classes vous sont fournies que vous devrez étendre durant le travail. Portez une attention particulière aux deux classes d'exemples `ArbitraryMaze` et `EmptyMaze` pour vous aider à concevoir vos classes.

Un package `position` fournit des classes représentant une position et une direction dans l'espace.

* Location
* Direction

Dans le package `labyrinth`, vous trouverez la classe `MazeDisplay` qui va nous permettre d'afficher nos labyrinthes de la partie 1 et nos marcheurs de la partie 2. Vous pouvez l'utiliser dès la partie 1.

Dans le package `generate`, on retrouve une première classe abstraire `Maze` qui est le gabarit pour la génération de nos labyrinthes. On fournit aussi deux exemples d'extension avec les classes `ArbiraryMaze` et `EmptyMaze`.

### Travail à faire

### Partie 1
Vous devez implémenter les algorithmes de génération de labyrinthe avec les classes suivantes :

* `RecursiveMaze` - Dept-first backtracking
* `PrimMaze` - Algorithme de Prim

### Partie 2
Vous devez implémenter les algorithmes de marcheurs dans des labyrinthes avec les classes suivantes :

* RecursiveWalker
* WallFollowerWalker

Vous devez aussi utiliser votre propre implémentation d'au moins une collection de votre choix avec les outils que nous avons vue en classe.

### Pondération de correction
Consulter la [grille d'évaluation](/grilleevaluation.pdf) pour avoir plus d'informations.

Une attention particulière sera apportée à la conception de vos implémentations. Faites attention de créer des variables d'instances intéressantes, d'ajouter des méthodes privées pour vous faciliter la vie, de ne pas répéter de code, etc.