+++
title = "Variables, types et assignation"
menuTitle = "Variables"
draft = false
weight = 40
+++

### Principes d'une variable
* Une variable permet de sauvegarder une information pour utilisation future;
* Une variable est la combinaison d’un espace mémoire réservé (type), un identificateur et une valeur;
* Les variables peuvent contenir toutes sortes d'informations;
* Étudions premièrement les types primitifs représentant directement des valeurs.

### Types

* Entier (Note pour ceux venant du C: pas de `unsigned`)
  * `byte`
  * `short`
  * `int`
  * `long`
* Flottant
  * `float`
  * `double`
* Caractère
  * `char`
* Logique
  * `boolean`, deux valeurs possibles
    * `true`
    * `false`

### Déclaration de variables
La déclaration se fait avec la syntaxe suivante:
```java
type nomVariable;
// ou
type nomVariable = valeurInitiale;


// Exemple
int x;
double y = 4.5;
```

### Déclaration de constantes
Le mot clé `final` permet de déclarer une constante qui ne pourra pas être modifiée.
Par convention, le nom de constantes est en majuscules.

```java
final int MA_CONSTANTE = 20;
```

### Référence

* Big Java, 2.2 p.34-41, p.132-136
* Beginning Java, p.27-34
* https://docs.oracle.com/javase/specs/jls/se12/html/jls-4.html