+++
title = "Classes avec méthodes statiques"
menuTitle = "Classes - Math"
draft = false
weight = 2040
+++

Certaines classes fournissent des méthodes statiques. Une méthode statique est une méthode qui agit à l'extérieur d'une instance de la classe. Elle n'a pas besoin d'utiliser les champs de la classe pour fonctionner.

Java utilise des classes avec majoritairement des méthodes statiques pour présenter des méthodes contextualisées ensemble. Nous appelons les méthodes à partir de la classe elle-même.

### Math
La classe `Math` contient les opérations mathématiques de bases. Regardez la [référence](https://docs.oracle.com/en/java/javase/12/docs/api/java.base/java/lang/Math.html) pour étudier en détail ses options.

```java
System.out.println(Math.ceil(5.5));
System.out.println(Math.max(20,40));
System.out.println(Math.pow(-3,2));
System.out.println(Math.random());
```
