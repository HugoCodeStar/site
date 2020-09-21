+++
title = "Typecasting"
menuTitle = "Conversion de type - Typecasting"
draft = false
weight = 3000
+++

Il faut parfois transformer une donnée d'un certain type en un autre. Il est possible de faire la conversion d'un type à un autre avec le casting de Java.

Pour faire une conversion, on met le type voulu entre parenthèses avant l'expression d'un certain autre type.

### Conversion arithmétique
La conversion de type est souvent utilisée quand on veut transformer une valeur numérique d'un type à un autre. Pour la sauvegarder dans une variable donnée ou encore pour l'envoyé à une méthode qui demande un certain type précis.

```java
int x = 2;
// Trouver la puissance de 2 à la 4
int pow_x = (int) Math.pow(x, 4)
```

Dans l'exemple précédent, les paramètres utilisés pour la méthode `pow` sont des `int` mais Java le laisse passer, car une conversion automatique se fait de `int` à `double` sans perte de précision. Pour le retour par contre, il est possible que la valeur `double` soit tronquée et java ne laisse pas passer ce genre d'ambigüité. Il faut donc forcer la conversion du retour de `pow` en `int` pour l'assigner dans une variable de type `int`.