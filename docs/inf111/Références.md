+++
title = "Références"
menuTitle = "Références"
draft = false
weight = 2035
+++

Les objets instanciés ne sont pas directement sauvegardés à l'intérieur d'une variable comme on pourrait le penser à première vue. La variable contient une **référence** à l'objet en mémoire.

Certaines implications arrivent avec cette méthode :

* Il est possible d'avoir plusieurs variables qui utilisent la même référence
* La modification d'un objet affecte toutes les variables avec cette référence
* Un objet existe en dehors de la variable créée dans nos programmes.

Dans les formalités, l'utilisation du `new` va créer le nouvel objet en mémoire et retourne la référence qui sera assignée à notre variable.

```java
Rectangle monRectangle = new Rectangle(4, 5);
// monAutreRectangle a maitenant la même référence que monRectangle
Rectangle monAutreRectangle = monRectangle;

monRectangle.setSize(10, 10);

// Affiche une hauteur de 10, car il existe un seul objet de type rectangle
// et nos deux variables utilise la même référence. 
System.out.println("La hauteur de l'autre rectangle " + monAutreRectangle.getHeight());
```

Il faut ici faire la distinction entre les types primitifs et les objets. Les types primitifs n'utilisent pas le mécanisme de référence. Il est donc possible de copier le contenu d'une variable dans un autre facilement.

Tous les objets de java possèdent la méthode `clone` qui permet de faire une copie de l'objet dans un nouvel objet.


### Références
* Big Java, Chap 2, 2.8