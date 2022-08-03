---
title: Programmes à faire pour le cours 3
sidebar_label: 3 - Properties
sidebar_position: 3
---

## Question 1

Modifiez votre classe Arrow pour utilisez des properties à la place des getter et setter.

## Question 2

Créez une classe `Point` qui permet de représenté une position dans une carte de deux dimensions. Chaque point est représenté par des coordonnées x et y sous la forme (x, y).

Objectifs:

* Définissez la classe Point avec les propriétés X et Y.
* Ajoutez un constructeur qui peut avoir des valeurs initiales de x et y.
* Ajoutez un constructeur sans paramètre qui donne une point a (0,0).
* Dans un programme principale, créé un point (2,3) et un point (-4, 0). Affichez les points dans la console sous la forme `(x, y)`. 

## Question 3

Nous voulons créé une classe qui représente une porte qui peut être barré et sera débarré si un code est entré correctement. Voici une descriptions des caractéstique des portes :

* Une porte ouverte peut toujours être fermé.
* Une porte fermé (mais non vérouillé) peut toujours être ouverte.
* Une porte fermé peut toujours être vérouillé.
* Une porte vérouillé peut être dévérouillé, mais seulement avec un code d'ouverture.
* Quand une nouvelle porte est créé, on doit fournir un code d'ouverture.
* On doit être capable de modifier le code d'ouverture en fournissant le code courant et un nouveau code.

Objectifs:

* Définissez une classe `Door` qui peut garder l'état de sa porte (ouvert, fermé, vérouillé).
* Assurez vous que la porte peut faire les 4 transitions mentionné dans les caractéristiques.
* Ajoutez un constructeur qui prends un code d'ouverture.
* Ajoutez une méthode qui permet de modifier le code d'ouverture qui reçoit le code courant et un nouveau code. Le code est modifié seulement si le code courant fourni est le bon.
* Dans un programme principale, faite la saisie d'un code et créé une porte avec. Testez les transition et la modification de code avec options de saisie pour l'utilisateur.