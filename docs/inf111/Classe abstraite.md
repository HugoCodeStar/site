+++
title = "Classes abstraites"
menuTitle = "Classes abstraites"
draft = false
weight = 7010
+++

Les classes abstraites sont des classes qui ne peuvent pas être instancées. Aucun objet ne peut être créé à partir de classe abstraite.

Le but est d'étendre avec de l'héritage ses classes.

Les classes abstraites sont souvent des moules incomplets d'objets.

Il est possible d'avoir des prototypes de méthodes abstraites dans des classes abstraites qui devront être définies dans les classes concrètes qui héritent de la classe abstraite.

```java
public abstract class Account {
    public abstract void deductFees();
}

public class SavingsAccount extends Account { 

    public void deductFees() { 
        // Code
    }
}
```