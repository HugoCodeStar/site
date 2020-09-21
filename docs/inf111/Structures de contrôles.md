+++
title = "Structures de contrôles sélectives"
menuTitle = "Sélection if/switch"
draft = false
weight = 90
+++

* La structure conditionnelle nous permet de prendre des décisions durant l'exécution de nos programmes.
* La décision à prendre doit être prise sur une expression logique (vrai ou faux).
* La syntaxe de base est la suivante:

~~~java
if (expression booléenne){
    instructions
}
~~~

### Options de la conditionnelle `if`

Plusieurs options sont disponibles avec le if.

~~~java
if (expression booléenne){
    instructions
} else if (expression booléenne){
    instructions
} else {
    instruction
}
~~~

* Seul un des blocs d’instructions (décision) du `if` est exécuté
* Le `elseif` et le `else` sont facultatifs
* Le `elseif` peut être répété à plusieurs reprises avec différentes expressions

### Structure de contrôle conditionnelle `switch`

Le `switch` est utilisé pour prendre une décision par rapport à la valeur d'une seule variable

```java
switch (variable) {
    case 1: 
        instructions
        break;
    case 2: 
        instructions
        break;
    default:
        instructions
        break;
}
```