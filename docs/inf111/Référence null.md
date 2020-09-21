+++
title = "La référence null dans les variables d'objets"
menuTitle = "Référence null"
draft = false
weight = 4010
+++

Nous savons qu'une variable qui représente un objet contient en fait sa référence. Qu'arrive-t-il quand la référence est mauvaise ou elle n'existe pas encore?

Dans ce cas, la valeur de référence dans la variable est `null`. On considère cela comme étant l'absence de l'objet dans la variable.

Nous pouvons faire un test d'une référence `null`

```java
Object monObjet = null; // Pas de new et donc pas d'objet reconnu.

if (monObjet == null){
    System.out.println("Objet null");
}
```

Les références `null` arrivent dans deux cas habituels :

* Des champs de classes non initialisés
* Des tableaux d'objets

Pour les tableaux d'objets, il faut comprendre que la création du tableau crée un tableau de références (tous `null` par défaut) et qu'il nous est dû de créer les instances de chaque objet voulu.

```java
Rectangle[] tabRec = new Rectangle[10];

for (int i = 0; i < tabRec.length; i++){
    tabRec[i] = new Rectangle();
}
```