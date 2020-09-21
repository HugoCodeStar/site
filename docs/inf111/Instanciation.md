+++
title = "Instanciation"
menuTitle = "Instanciation"
draft = false
weight = 2020
+++

### Constructeurs
Les objets partent de classes et doivent être construits avant d'être utilisés. Pour utiliser des objets, il nous faut donc utiliser un constructeur qui pourra créer un objet qui sera ensuite sauvegardé dans une variable du bon type.

Le mot clé `new` permet de créer un objet à partir du constructeur de la classe. Le constructeur est une méthode qui porte le même nom que la classe et peut recevoir les données initiales de l'objet.

```java
// Création d'un Rectangle nommé monRectangle
// Le constructeur demande les données x, y, largeur et hauteur
Rectangle monRectangle = new Rectangle(3,4, 10 ,10);
```

### Méthodes mutatrices (set) et accesseurs (get)
Les données internes à l'objet ne sont habituellement pas accessibles de l'extérieur de celui-ci. Pour être capable d'accéder et modifier ses informations, l'objet fournit des méthodes get/set.

```java
// Créé notre rectangle
Rectangle monRectangle = new Rectangle(3,4, 10 ,10);
System.out.println("Le rectangle à un x de : " + 
monRectangle.getX());

// Modifie le rectangle
monRectangle.setLocation(7, 9);

// Appel automatiquement la méthode toString
System.out.println(monRectangle);
```

{{< replit "dullin/ObjetsRectangle" >}}