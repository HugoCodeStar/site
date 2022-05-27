---
title: Programmes à faire pour le cours 2
sidebar_label: 2 - Orienté-objet
---

## Question 1

Nous voulons simuler une coffre qui s'ouvre, se ferme et se barre. Nous voulons être en mesure d'aller entre ces états, d'ouvrir, de fermer, de verrouiller et de déverrouiller le coffre. Vous devez créer un programme avec une énumération pour recréer ce mécanisme de verrouillage. L'image ci-dessous montre comment vous pouvez vous déplacer entre les trois états:

![](boite.png)

Rien ne se passe si vous essayez une action impossible à l'état actuel, comme ouvrir un coffre verrouillée.
Le programme ci-dessous montre à quoi pourrait ressembler cette utilisation:

```
The chest is locked. What do you want to do? unlock 
The chest is unlocked. What do you want to do? open 
The chest is open. What do you want to do? close 
The chest is unlocked. What do you want to do?
```

Objectifs:
* Définissez une énumération pour l'état de la coffre.
* Faire une variable dont le type est cette nouvelle énumération.
* Écrivez du code pour vous permettre de manipuler le coffre avec le verrou, déverrouiller, ouvrir et fermer les commandes, mais assurez-vous de ne pas passer entre les états qui ne le soutiennent pas.
* Loop pour toujours, en demandant la commande suivante.

## Question 2

Nous voullons créé un programme qui permet de combiné des ingrédients pour créé des plats. Par contre, les ingrédients sont limités d'une liste pré-établie.

Objectifs:
* Définir les énumérations pour les trois variations de la nourriture: type (soupe, ragoût, gombo), ingrédient principal (champignons, poulet, carottes, pommes de terre) et assaisonnement (épicé, salé, sucré).
* Faites une variable tuple pour représenter une soupe composée des trois types d'énumération ci-dessus.
* Laissez l'utilisateur choisir un type, l'ingrédient principal et l'assaisonnement à partir des choix autorisés et remplir le tuple des résultats. **Astuce**: vous pouvez donner à l'utilisateur un menu à choisir ou simplement comparer l'entrée de texte de l'utilisateur à des chaînes spécifiques pour déterminer quelle valeur d'énumération représente son choix.
* Une fois terminé, affichez le contenu de la variable de tuple de soupe dans un format comme «Gumbo de poulet sucré». **Astuce**: vous n'avez pas besoin de convertir la valeur d'énumération en une chaîne. L'affichage simplement d'une valeur d'énumération avec Write ou Writeline affichera le nom de la valeur d'énumération.)

## Question 3

Nous voullons créer une classe qui représente les flèches d'une arc. Les caractéristiques des flèches sont les suivantes :

Chaque flèche a trois parties: la pointe de flèche (acier, bois ou obsidien), l'arbre (une longueur comprise entre 60 et 100 cm de long) et la poignée (plastique, plumes de dinde ou plumes d'oie).

Les coûts associés sont les suivants: pour les pointes de flèches, l'acier coûte 10 or, le bois coûte 3 or et l'obsidienne coûte 5 or. Pour les poignée, le plastique coûte 10 or, les plumes de dinde coûtent 5 or et les plumes d'oie coûtent 3 or. Pour l'arbre, le prix dépend de la longueur: 0,05 or pour centimètre.

Objectifs:
* Définissez une nouvelle classe de flèches avec des champs pour le type de pointe de flèche, le type de poignée et la longueur. (Indice:
Les types de pointes de flèches et les types de poignée peuvent être de bonnes énumérations.)
* Permettez à un utilisateur de choisir la pointe de flèche, le type de poignée et la longueur, puis créer une nouvelle instance de flèche.
* Ajoutez une méthode GetCost qui renvoie son coût en tant que flotteur en fonction des numéros ci-dessus, et utilisez-le pour afficher le coût de la flèche.

## Question 4

Nous voulons sécurisé la classe faite à la question précédente avec des meilleurs modificateurs d'accès.

Objectifs:
* Modifiez votre classe Arrow pour avoir privé au lieu de domaines publics.
* Ajoutez des méthodes Getter pour chacun des champs dont vous disposez.