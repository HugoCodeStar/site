+++
title = "L'utilisation de la référence this pour rejoindre l'objet courant"
menuTitle = "Référence this"
draft = false
weight = 3020
+++

On peut utiliser la référence `this` dans un objet pour faire référence à l'objet lui-même. Considéré que c'est une variable toujours disponible.

On l'utilise quand il faut distinguer des ambigüités possibles. Par exemple, durant l'utilisation de paramètres portant le même nom que des variables d'instance.

```java
puclic Class Etudiant{
    String nom;

    public Etudiant(String nom){
        this.nom = nom;
    }
}
```

L'utilisation de la référence `this` est utilisé implicitement quand il n'y a pas d'ambigüité.