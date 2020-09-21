+++
title = "Exemple d'exercices pour l'intra 2"
menuTitle = "Intra 2"
draft = false
weight = 20
+++

### Exercice 1

Écrivez une méthode statique qui reçoit un ArrayList et un objet. La méthode va enlever tous les objets qui sont égaux dans la liste reçue.

Écrivez ensuite un test qui prouve la fonctionnalité de votre méthode.

Consulter les méthodes de ArrayList dans la [Documenttation](https://docs.oracle.com/javase/7/docs/api/java/util/ArrayList.html#method_summary). À l'examen, les méthodes à utiliser seront aussi fournies.

### Exercice 2

En vous basant sur les fichiers donnés d'une implémentation de la classe `LinkedList`. Écrivez une nouvelle classe qui spécialise la classe LinkedList. Ajoutez une méthode qui reçoit un objet et qui enlève tous les objets égaux dans la liste.

### Exercice 3

En vous basant sur la classe suivante :
```java
class Point implements Comparable{
    double x;
    double y;

    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public String toString() {
        return "Point{" +
                "x=" + x +
                ", y=" + y +
                '}';
    }
}
```

Modifiez la classe Point pour que celle-ci implémente l'interface [Comparable](https://docs.oracle.com/javase/7/docs/api/java/lang/Comparable.html).

À l'examen, une description de l'interface avec les méthodes à implémenter et leur résultat serait fournie.

### Solution

[Source](/INF111/sources/Intra2Rev.java)
