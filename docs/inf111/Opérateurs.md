+++
title = "Opérateurs"
menuTitle = "Opérateurs"
draft = false
weight = 60
+++

### Listes des types d'opérateurs

* Assignations
* Arithmétiques
* Unaires
* Égalités et relationnelles
* Conditionnelles
* Comparaisons de type
* Binaires
* Terniaires

### Assignations
Utilisé à l'assignation de valeur à des variables.

```java
int cadence = 4;
```

### Arithmétiques
Les opérations arithmétiques de bases ont les opérateurs typiques

* `+` Addition
* `-` Soustraction
* `*` Multiplication
* `/` Division
* `%` Modulo

#### Le modulo d'un nombre
L'opérateur modulo détermine le restant entier d'une division. Enlève la partie entière en restant positif.

```java
14 % 5 // Enlève 5 deux fois et reste 4.
20 % 2 // Enlève 2 dix fois et reste 0.
```
### Unaires
Les opérateurs unaires travaillent sur une seule valeur. Le plus reconnu est le négatif `-`.

* `+` Plus unaire. Indique qu'une valeur est positive. Cet opérateur est implicite sur les valeurs.
* `-` Moins unaire. Indique qu'une valeur est négative.
* `!` Complément logique. Inverse la valeur booléenne.
* `++` Incrémentation. Incrémente la valeur de 1.
* `--` Décrémentation. Décrémente la valeur de 1.

### Égalités et relationnelles
Les opérations relationnelles retournent une valeur booléenne par rapport à l'opération demandée.

* `==` Égale à
* `!=` Différent de
* `>` Plus grand
* `<` Plus petit
* `>=` Plus grand ou égale
* `<=` Plus petit ou égale

### Conditionnelles

Les opérateurs conditionnels prennent des valeurs booléennes et retournent des valeurs booléennes.

* `&&` Et logique
* `||` Ou logique
* `? :` Opérateur terniaire `if-then-else`

| A | B | A && B | A \|\| B |
| ---- | ---- | -------- | -------- |
| false   | false   | false    | false    |
| false   | true   | false    | true     |
| true   | false   | false    | true     |
| true   | true   | true     | true     |

### Comparaisons de type `instanceof`
L'opérateur `instanceof` permet de vérifier le type d'un objet.

### Binaires
Les opérateurs binaires vont travailler sur les représentations binaires de nombres

* `&` Et binaire
* `|` Ou binaire
* `^` Ou exclusif binaire
* `>>` Bitshift vers la droite avec signe
* `<<` Bitshift vers la gauche
* `>>>` Bitshift vers la droite sans extension de signe

#### Opérateur terniaire

L'opérateur terniaire permet d'avoir une conditionnelle simple avec un retour direct.

```java
result = someCondition ? value1 : value2;
```

### Références

* Big Java
  * 4.2 Arithmetic, p.137
  * 5.2 Relational Operators, p.184
  * Appendix B - Java Operator Summary
* https://docs.oracle.com/javase/tutorial/java/nutsandbolts/opsummary.html