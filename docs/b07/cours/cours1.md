---
title: Retour sur les bases
sidebar_label: 1 - Bases
sidebar_position: 1
---

## Hello World

```c#
Console.WriteLine("Hello World!");
```

## Commentaire 

Deux types: 

* Ligne simple débutante par `//`
* Plusieurs lignes délimitées par `/*` et `*/`

```c#
/*
Un commentaire
sur plusieurs lignes.
*/

// Affiche un message.
Console.WriteLine("Hello World!"); //Marche ici aussi!
```

## Identificateurs

Un identificateur est un nom donné par le programmeur à un élément du programme. 

* variables
* méthodes
* classes

### Règles
Les règles de création des identificateurs :

* Dois débuter par une lettre, le `@` ou un tiret-bas `_`;
* Les restes de caractères doivent être des lettres, de chiffres ou des tirets bas.
* Ne dois pas être un mot réservé par le langage.

Faire attention aux conventions suivantes:

* Faire attention à la casse. Il y a distinction entre les lettres majuscules et minuscules;
* Les noms des variables sont en `camelCase` ou les lettres sont mises en majuscules pour indiquer un nouveau mot.

### Principes d'une variable
* Une variable permet de sauvegarder une information pour utilisation future;
* Une variable est la combinaison d’un espace mémoire réservé (type), un identificateur et une valeur;
* Les variables peuvent contenir toutes sortes d'informations;
* Étudions premièrement les types primitifs représentant directement des valeurs.

### Types

* Entier
  * `byte`
  * `short`
  * `int`
  * `long`
  * `sbyte`
  * `ushort`
  * `uint`
  * `ulong`
* Flottant
  * `float`
  * `double`
  * `decimal`
* Caractère
  * `char`
  * `string`
* Logique
  * `bool`, deux valeurs possibles
    * `true`
    * `false`

### Déclaration de variables
La déclaration se fait avec la syntaxe suivante:
```c#
type nomVariable;
// ou
type nomVariable = valeurInitiale;


// Exemple
int x;
double y = 4.5;
```

### Déclaration de constantes
Le mot clé `const` permet de déclarer une constante qui ne pourra pas être modifiée.
Par convention, le nom de constantes est en majuscules.

```c#
const int MA_CONSTANTE = 20;
```

### Conversion et parsing

La classe `Convert` contient des méthodes pour la conversion de type.
Les nom de la méthode est `ToType` par exemple `Convert.ToInt32(val)`.

```c#
string texte = "7";
int nombre = Convert.ToInt32(texte);
Console.Write(nombre);
```

## Expressions

* Une expression est un élément qui va ultimement représenter une valeur.
* L'expression peut directement être une valeur.
* Si l'expression à des opérations, elle est évaluée pour "devenir" une valeur finale.
* Plusieurs endroits demandent des expressions. Chaque fois, l'expression va être évaluée.

### Expression dans une assignation
* La partie de droite d'une assignation est une expression et peut donc être une série d'opérations.

```c#
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

```c#
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

## Opérateurs


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

```c#
int cadence = 4;
```

### Arithmétiques
Les opérations arithmétiques de bases ont les opérateurs typiques

* `+` Addition
* `-` Soustraction
* `*` Multiplication
* `\` Division
* `%` Modulo

#### Le modulo d'un nombre
L'opérateur modulo détermine le restant entier d'une division. Enlève la partie entière en restant positif.

```c#
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
| 0   | 0   | false    | false    |
| 0   | 1   | false    | true     |
| 1   | 0   | false    | true     |
| 1   | 1   | true     | true     |



#### Opérateur terniaire

L'opérateur terniaire permet d'avoir un conditionnelle simple avec un retour direct.

```java
result = someCondition ? value1 : value2;
```

Il faut parfois transformer une donnée d'un certain type en un autre. Il est possible de faire la conversion d'un type à un autre avec le casting de Java.

Pour faire une conversion, on met le type voulu entre parenthèses avant l'expression d'un certain autre type.

## Conversion de type

### Conversion arithmétique
La conversion de type est souvent utilisée quand on veut transformer une valeur numérique d'un type à un autre. Pour la sauvegarder dans une variable donnée ou encore pour l'envoyé à une méthode qui demande un certain type précis.

```c#
int x = 2;
// Trouver la puissance de 2 à la 4
int pow_x = (int) Math.Pow(x, 4);
```

Dans l'exemple précédent, les paramètres utilisés pour la méthode `Pow` sont des `int` mais Java le laisse passer, car une conversion automatique se fait de `int` à `double` sans perte de précision. Pour le retour par contre, il est possible que la valeur `double` soit tronquée et java ne laisse pas passer ce genre d'ambigüité. Il faut donc forcer la conversion du retour de `Pow` en `int` pour l'assigner dans une variable de type `int`.

## Affichage


L'affichage de nos programmes se fait dans la fenêtre de commande avec les méthodes d'affichages fournies par la classe `Console`.

### Méthode `Write`

La méthode `Write` permet d'afficher une chaine de caractères.

```c#
Console.Write("Allo");
```

La méthode `WriteLine` ajoute une saut de ligne après l'affichage.

### Méthode `Clear`

La méthode `Clear` permet de vider l'affichage courant.

```c#
Console.Write("Allo");
Console.Clear()
Console.Write("Salut");
```

### Séquence d'échappement avec `\`

Le caractère `\` permet de changer un caractère spéciale à un caractère normale.

```c#
Console.Write("Ceci est un double guillement : \" ");
```

Inversement, certain caractère peuvent devenir spéciaux avec un `\`. Le `\n` permet de faire un saut de ligne.

```c#
Console.Write("Ceci est\nsur deux ligne");
```

### Interpolation de chaine

Il est possible de faire de la concaténation avec le `+`.

```c#
int number = 7;
Console.Write("Mon chiffre préféré est : " + number + " !");
```

Il est aussi possible d'utiliser le préfixe `$` sur la chaine pour avoir un environnement évalué entre des `{}` dans une chaine.

```c#
int number = 7;
Console.Write($"Mon chiffre préféré est : {number} !");
```

## Saisit

La saisit de texte de l'utilisateur se fait avec la méthode `ReadLine` de la classe `Console`. Elle retourne la chaine lue sur la ligne.

```c#
string texte = Console.ReadLine();
Console.Write(texte);
```

## Structures de contrôles conditionnels (if)

* La structure conditionnelle nous permet de prendre des décisions durant l'exécution de nos programmes.
* La décision à prendre doit être prise sur une expression logique (vrai ou faux).
* La syntaxe de base est la suivante:

~~~c#
if (expression booléenne)
{
    instructions
}
~~~

### Options de la conditionnelle `if`

Plusieurs options sont disponibles avec le if.

~~~c#
if (expression booléenne)
{
    instructions
} 
else if (expression booléenne)
{
    instructions
} 
else 
{
    instruction
}
~~~

* Seul un des blocs d’instructions (décision) du `if` est exécuté
* Le `elseif` et le `else` sont facultatifs
* Le `elseif` peut être répété à plusieurs reprises avec différentes expressions

### Structure de contrôle conditionnelle `switch`

Le `switch` est utilisé pour prendre une décision par rapport à la valeur d'une seule variable

```c#
switch (variable) 
{
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

## Structure de contrôles itératives (while/for)

### Structure de contrôle itérative `while`
* La boucle `while` répète les instructions jusqu’à ce que la condition soit fausse.

~~~c#
while (condition)
{
    instructions
}
~~~

* Le `while` est habituellement utilisé quand on ne connait pas le nombre d’itérations à faire.

### Structure de contrôle itératif `for`
* Lorsque le nombre d’itérations est connu, la boucle `for` sera utilisée.
* La boucle `for` utilise un compteur qui est configuré au début de la boucle.

~~~c#
for (initialization; termination; increment) 
{
    instruction
}

for(int i = 0; i < 10; i++)
{
    Console.WriteLine("i est: " + i);
}
~~~

* L'initialisation va être une instruction faite avant le début de la boucle.
* La terminaison est la condition testée pour continuer la boucle à chaque itération.
* L'incrément est une instruction exécutée à chaque itération de la boucle.
* Un compteur est configuré avec ces instructions.

### Briser et continuer la boucle avec `break` et `continue`

Le mot clé `break` permet de briser la boucle la plus proche.

Le mot clé `continue` permet de sauter à la prochaine itération de la boucle la plus proche.

## Tableaux

* Les tableaux sont des collections de plusieurs éléments de même type sous un seul identificateur
* Le tableau est construit de cases mémoire consécutives en mémoire
* À chaque élément du tableau, on associe un indice qui permet de facilement accéder aux cases individuellement
* Les tableaux sont statiques, une fois créés, ils ne peuvent changer de taille

### Initialisation
Un nouveau tableau est créé avec le `new`. Les braquettes carrées `[` `]` seront utilisées pour indiquer l'utilisation d'un tableau.

```c#
// Tableau de 10 cases de ints
int[] nombres = new int[10];
double[] nombresDirect = new int[] {45.4, -56.43, 34.6};

// L'initialisation peut utiliser une taille variable
int taille = Convert.ToInt32(Console.ReadLine());
double[] nombresReel = new double[taille];
```

### Accès aux éléments du tableau
Les braquettes carrées vont nous permettre de sélectionner une case spécifique du tableau.
Faire attention, **la première case du tableau est la case 0**.

```c#
// Parcourir les cases d'un tableau
for (int i = 0; i < nombres.length; i++)
{
    Console.WriteLine(nombres[i]);
}
```

### Boucle `foreach`
Il existe une autre boucle for pour parcourir tous les éléments d'un tableau. La syntaxe est simplifiée, mais il existe des limitations à la boucle.

```java
// Trouvez la somme des éléments
foreach (double el in nombres) 
{
    somme += el;
}
```

Les limitations sont les suivantes :

* L'itérateur n'est pas disponible dans la boucle.
* L'ordre des opérations n'est pas précisé. La première itération de la boucle ne va pas nécessairement regarder le premier élément.
* Il est interdit de modifier les éléments du tableau.

### Tableau de deux dimensions
Il est possible de déclarer et d'utiliser des tableaux de deux dimensions en ajoutant un virgule es braquettes carrées. Le premier nombre indique la ligne et le deuxième nombre la colonne.

Les tableaux de deux dimensions sont rectangulaires. Chaque ligne et colonne seront obligatoirement de même taille.

```c#
int[,] tabPosition = new int[10, 2];

int[,] counts = new int[,] 
{
    {1, 2},
    {3, 4}
};

// Parcourir un tableau de deux dimensions
for (int i = 0; i < counts.GetLength(0); i++) 
{
    for (int j = 0; j < counts.GetLength(1); j++) 
    {
        Console.Write($"{counts[i, j], 4}"); 
    }
    Console.WriteLine(); 
}
```

## Méthodes

Les méthodes sont des blocs de d'instructions que nous pouvons définir et faire appel à répétition.

```c#
//Définition de la méthode
void TestMethod()
{
    Console.Write("test");
}

//Appel de la méthode
TestMethod();
TestMethod();
```

### Contexte des méthodes

* Les méthodes sont contextualisées à leurs appels. Le contexte permet d'avoir un environnement "fermé" aux informations externes.
* Les variables d'instances sont disponibles à l'intérieur de méthodes.
* Toutes variables locales à la méthode sont détruites après l'appel de la méthode.

### Passage par valeurs

* L'appel de méthodes se fait en envoyant les paramètres. Quand un paramètre est utilisé (paramètres effectifs), la valeur de celui-ci est envoyée à la méthode.
* Les valeurs reçues sont assignées en variables locales aux paramètres identifiés dans la signature de la méthode (paramètres formels).
* Les paramètres de types primitifs seront donc modifiables durant la méthode, mais seront détruits à la fin de l'appel.
* Les paramètres d'objets n'auront pas le même comportement, car ce sont des références

```c#
void Count(int numberToCount)
{
    for (int cur = 1; cur <= numberToCount; cur++)
    {
        Console.WriteLine(cur);
    }
}

Count(3);
Count(7);
```


### Retours

* La seule information qui "sort" de la méthode est le retour.
* Comme les paramètres, seule la valeur du retour sera renvoyée.
* On utilise l'instruction `return` pour envoyer une valeur de retour.
* La méthode se termine immédiatement après l'utilisation d'un `return`.

```c#
double AireTriangle(double base, double hauteur)
{
    return base * hauteur;
}
```