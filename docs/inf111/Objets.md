+++
title = "Programmation orienté-objet"
menuTitle = "POO"
draft = false
weight = 2010
+++

### Objets
En programmation orientée-objet, les informations d'un programme sont structurées avec des objets.
Un objet est la représentation d'un élément ou d'une structure de la problématique du problème.

Les objets ont toujours deux informations primordiales:

* Données, nommées attributs ou champs/fields en Java
* Comportement, nommé méthodes/methods en Java

### Classes
Pour regrouper les objets de même type ensemble (ceux avec les mêmes types de données et comportement possibles), nous établirons des classes d'objets qui permettent de définir ce que pourront contenir les objets de ladite classe.

### Méthodes
Un programme peut appeler des méthodes sur les objets du programme pour que ceux-ci performent des actions.

```java
String cours = "INF111";  // Création d'un objet type String
int taille = cours.length(); // Appel de la méthode lenght qui retourne la taille
String petitCours = cours.toLowerCase(); // Appel de la méthode toLowerCase qui construit un nouvel objet de type String avec des minuscules.

// Utilise la méthode println de System.out pour faire l'affichage
System.out.println(cours + " est de taille " + taille + " et donne " + petitcours)
```

#### Paramètres des méthodes
La majorité des méthodes doivent recevoir des paramètres d'entrées pour avoir les détails requis pour leurs exécutions. Par exemple, `println` doit recevoir la chaine à imprimer pour être capable de faire un affichage.

#### Retours
Certaines méthodes peuvent aussi retourner une information précise ou une réponse. Dans ce cas, l'appel de la fonction va être remplacé par son retour quand la méthode est utilisée dans une expression. C'était le cas pour la méthode `length` d'objet de la classe `String`.

### Références
* Big java, Chap 2, 2.1, 2.3, 2.4, 2.5
* Beggining Java, Chap 1, Object-Oriented Programming in Java & Chap 5, What is a class?