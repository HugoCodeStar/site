+++
title = "Expressions"
menuTitle = "Expressions"
draft = false
weight = 50
+++

* Une expression est un élément qui va ultimement représenter une valeur.
* L'expression peut directement être une valeur.
* Si l'expression à des opérations, elle est évaluée pour "devenir" une valeur finale.
* Plusieurs endroits demandent des expressions. Chaque fois, l'expression va être évaluée.

### Expression dans une assignation
* La partie de droite d'une assignation est une expression et peut donc être une série d'opérations.

```java
int x;
// Assignation avec une expression d'une valeur littérale.
x = 4;

int y;
// L'expression va être évaluée à 10 avant d'être assignée.
y = 7 + 3;
```

### Expression avec des variables
* L'utilisation de variables dans les expressions permet d'utiliser le contenu d'une variable dans l'expression.
* Le contenu de la variable va être remplacé dans l'expression avant que l'expression soit évaluée.

```java
int x;
x = 5;

int y;
// Le x est remplacé par sa valeur de 5.
// L'expression est donc évaluée comme 5 + 3
y = x + 3;

// Ne change pas la valeur de y car
// l'évaluation est ponctuelle.

x = 10;
```

### Appel de méthodes dans les expressions
* Des méthodes peuvent être appelées à l'intérieur d'une expression. Le résultat de la méthode sera utilisé à la place de l'appel dans l'expression.

### Références

* Big Java, 4.2, p.137-144
* Beggining Java, p.34-49
