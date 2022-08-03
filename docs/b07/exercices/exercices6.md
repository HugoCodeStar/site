---
title: Programmes à faire pour le cours 6
sidebar_label: 6 - Interface
sidebar_position: 6
---

## Question 1

Vous voulez créez une nouvelle hiérarchie qui aide un frabiquant de pièces automobile. Nous voulons créé une première classe de base avec les propriétés suivantes:

* Numéro de série
* Description
* Manufacturier

De cette classe de base, vous volez créé les classes dérivés suivantes avec les propriétés suivantes:

* Pneu
    * Épaisseur
    * Saisonnier (Été ou Hiver)

* Mirroir
    * Côté (Gauche ou droite)
    * Modèle

## Question 2

Vous voulez modifier notre classe `RobotCommand` abstraite pour la transformer en interface.

Objectifs:

* Changez la classe abstraite `RobotCommand` en interface `IRobotCommand`.
* Modifiez la méthode `Run` pour qu'elle soit compatible pour une interface.
* Modifiez la classe `Robot` pour qu'on utilise des commandes `IRobotCommand` à la place de `RobotCommand`.
* Modifiez les classes pour que les classes utilisent l'interface et vous pouvez enlever le `override` des méthodes des classes.
* Assurrez-vous que le programme principale continue de fonctionnez.

## Question 3

Vous voulez modifier la classe `Robot` de notre dernier exercice. Le robot utilise un tableau de 3 case pour les commandes. Modifiez l'utilisation pour utiliser une `List` dynamique. Modifiez ensuite le programme principale pour que l'utilisateur puisse saisir autant de commande qu'il veut pour faire activer le robot.