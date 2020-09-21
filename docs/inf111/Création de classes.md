+++
title = "Conception de classes"
menuTitle = "Création de classes"
draft = false
weight = 2060
+++

Nous pouvons créer nos propres classes en Java. Une fois la classe créée, nous pourrons ensuite faire des instances de la classe dans nos programmes qui utiliseront les méthodes conçues pour la classe.

### Définition d'une classe
Une classe se retrouve dans un bloc de code représentant la classe. Elle va inclure ses données et les comportements possibles de la classe.

```java
public class Rectangle {
    
}
```

### Variable d'instance de la classe
La première chose à rajouter à une classe est la liste des champs de la classe. Les variables qui seront rattachées aux données devant être incluses dans les objets de notre classe

```java
public class Rectangle {
    int x1;
    int x2;
    int y1;
    int y2;
}
```

### Méthodes d'une classe
Les méthodes sont les actions ou les comportements que nos objets peuvent prendre. Il faut aussi des méthodes pour les accesseurs et mutateurs.

```java
public class Rectangle {
    int x1;
    int x2;
    int y1;
    int y2;

    public void move(int dx, int dy){
        // On modifie les champs de la classe
        // dans les méthodes
        x1 += dx;
        x2 += dx;
        y1 += dy;
        y2 += dy;
    }

    public int getX1(){
        return x1;
    }

    public int getArea(){
        return Math.abs(x2 - x1) * Math.abs(y2 - y1);
    }
}
```

### Constructeurs
Pour construire nos objets, il faut implémenter une classe pour ce constructeur. Le nom de la méthode du constructeur est toujours le nom de la classe.

Les constructeurs sont une méthode spéciale qui n'a pas de retour.

```java
public class Rectangle {
    int x1;
    int x2;
    int y1;
    int y2;

    public void move(int dx, int dy){
        // On modifie les champs de la classe
        // dans les méthodes
        x1 += dx;
        x2 += dx;
        y1 += dy;
        y2 += dy;
    }

    public int getX1(){
        return x1;
    }

    public int getArea(){
        return Math.abs(x2 - x1) * Math.abs(y2 - y1);
    }

    public Rectangle(int x1_init, int y1_init, int x2_init, int y2_init){
        x1 = x1_init;
        x2 = x2_init;
        y1 = y1_init;
        y2 = y2_init;
    }
}
```

{{< replit "dullin/Classe-Rectangle" >}}

### Références
* Big Java Chap 3, 3.1-3.3
* Beginning Java, Chap 5, Defining Classes, Defining Methods, Constructors