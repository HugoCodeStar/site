+++
title = "Interfaces"
menuTitle = "Interfaces"
draft = false
weight = 7020
+++

L'interface est un système qui permet aux classes d'indiquer qu'il se conforment à certaines méthodes.

Cela permet ensuite d'utiliser des objets se conformant à l'interface même si les objets peuvent être autrement très différents.

L'interface sera un fichier à part qui ressemble à une classe, mais qui ne peut pas être instancé. D'autres classes pourront implémenter l'interface.

Contrairement à l'héritage, les classes peuvent implémenter plusieurs interfaces en même temps.

### Déclaration d'une interface

```java
public interface Measurable{
    double getMeasure();
}
```

* Les méthodes des interfaces sont automatiquement publiques.
* Les interfaces ne peuvent pas avoir de variables d'instances.
* Les interfaces n'ont pas de constructeur, car ce ne sont pas des classes à part entière.

### Utilisation d'une interface

```java
public static double average(Measurable[] objects) {
    double sum = 0;
    for (Measurable obj : objects) {
        sum = sum + obj.getMeasure(); 
    }
    if (objects.length > 0) { 
        return sum / objects.length; 
    }
    else { 
        return 0; 
    } 
}
```

N'importe quels objets qui se conformeront à l'interface pourront être envoyés à la méthode.

### Implémentation de l'interface

```java
public class BankAccount implements Measurable{
    // Code

    public double getMeasure(){
        return balance;
    }
}

public class Country implements Measurable{
    // Code
    public double getMeasure(){
        return area;
    }
}
```

* À l'implémentation, il faut spécifier que la méthode est `publique`.