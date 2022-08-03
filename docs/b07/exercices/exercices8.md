---
title: Programmes à faire pour le cours 8
sidebar_label: 8 - LINQ
sidebar_position: 8
---


Nous avons un tableaus de valeurs numérique d'entier (par example [1, 9, 2, 8, 3, 7, 4, 6, 5]) qui doit recevoir les modificaiton suivantes :

* Tous les nombres impairs doivent être retiré, seulement les nombre initialement pairs doivent être retenus.
* Les valeurs doivent être en ordre croissant.
* Toutes les valeurs doivent être doublés (multiplication par 2).

## Question 1

Écrivez une méthode qui reçoit un `int[]` et retourne un `IEnumrable<int>` (ce dernier peut être un tableau ou une liset) qui réponde au trois condition présenté ci-haut. **LIMITATION** Vous devez utiliser seulement de la programmation procédurales (if, boucle, etc.) **Indice** La méthode `Array.Sort` pourrait vous servir pour le prermier requis.

## Question 2

Écrivez une méthode qui reçoit un `int[]` et retourne un `IEnumrable<int>` (ce dernier peut être un tableau ou une liset) qui réponde au trois condition présenté ci-haut. **LIMITATION** Vous devez utiliser les expressions de requêtes (from x, where x, select x).

## Question 3
Écrivez une méthode qui reçoit un `int[]` et retourne un `IEnumrable<int>` (ce dernier peut être un tableau ou une liset) qui réponde au trois condition présenté ci-haut. **LIMITATION** Vous devez utiliser les méthodes de requêtes (`x.Select( => n +1)`, `x.Where(n => n < 0)`, etc.)