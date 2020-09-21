+++
title = "Affichage"
menuTitle = "Affichage"
draft = false
weight = 70
+++

L'affichage de nos programmes se fait dans la fenêtre de commande avec les méthodes d'affichages fournies par Java.

### Méthode `println`
La méthode `println` permet d'afficher une chaine de caractères suivie d'un saut de ligne.

```java
// La méthode doit être invoquée de l'objet global System et de sa propriété out.
// Nous verrons en détail plus tard les principes d'objets et de propriétés.
System.out.println("Bonjour la classe!");
```

### Interprétation de l'expression dans l'affichage

Les méthodes d'affichage sont capables de recevoir plusieurs types de données et les convertir en chaine de caractères pour l'affichage.
L'opérateur `+` est utilisé pour faire la concaténation de différents éléments de l'affichage.

```java
int x = 5;
String nom = "Bob";
System.out.println("Le nom est : " + nom + ". Et x vaut : " + x + ".");
```

### Formatage de l'affichage avec `String.format`

Pour avoir plus de contrôle sur les paramètres d'affichage, `String.format` nous donne accès à des options additionnelles pour l'affichage.
`String.format` utilise des opérateurs de formatage dans une chaine de caractères pour ensuite remplir les opérateurs utilisés.
`String.format` génère une chaine qui sera utilisée par notre méthode `println`.

```java
double x = 4.54242234;
// Limite le nombre de décimal à afficher
System.out.println(String.format("Le nombre : %.2f", x));
```

### Références

https://docs.oracle.com/javase/tutorial/java/data/numberformat.html