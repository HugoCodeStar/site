+++
title = "Surdéfinition de méthodes (Overriding)"
menuTitle = "Surdéfinition"
draft = false
weight = 5040
+++

Il est possible de remplacer une méthode de la classe générale par une version dans la classe spécifique. Cela est la surdéfinition de méthode.

Il suffit d'écrire une méthode de la même signature dans la class spécialisé pour avoir une surdéfinition. 

On utilise le tag `@Override` pour fournir au compilateur notre intention et ajouter des mises en garde.

On peut appeler la version générale en appelant à la superclasse avec le mot clé `super`.

```java
public class MaClasseSpeciale extends MaClasse {
    @Override
    public void maMethod(int a, int b){
        // Stuff
        // Appelle la méthode de la superclasse
        super.maMethod();
    }
}
```