---
title: Programmation Orienté-objet
sidebar_label: 2 - Orienté-objet
sidebar_position: 2
---

## Méthode simplifié avec syntaxe courte

Quand un méthode n'a qu'une seule instruction de retour, il est possible d'utiliser un syntaxe simplifié pour la méthode.

```c#
// Exemple d'une méthode avec seulement un retour
int DoubleAndAddOne(int value)
{
    return value * 2 + 1;
}

// Syntaxe simplifié
int DoubleAddOne(int value) => value * 2 + 1;
```

## Énumérations

Il est possible d'avoir un type représentant une liste d'état. Ce type est ensuite utilisable comme variable et seulement les états donnés seront possiblement utilisable.

```c#
// Déclaration d'une énumération (la déclaration doit se faire a la fin du code)

enum Season { Winter, Spring, Summer, Fall }
```

Il est ensuite possible de déclarer des variable de ce type est d'utiliser les états avec le `.` après le nom de l'énumération.

```c#
Season mySeason;

mySeason = Season.Winter;

if (mySeason == Season.Winter){
    Console.WriteLine("It's winter time!");
}
```


## Tuples

Les tuples permettent de joindre plusieurs éléments dans un seul contenant/variable.

```c#
// Déclaration d'une variable avec un tuple
// On identifie les types des valeurs entre parenthèse
// L'assignation se fait entre parenthèses
(string, int, int) score = ("R2-D2", 12340, 12);

// On accède au élément avec le nom de la variable et un accès avec un . suivit du mot Item#
// où le # est le numéro de la position voulu
Console.WriteLine($"Le nom est : {score.Item1}");
```

Il est aussi possible de nommé les champs pour le pas avoir le `Item#`

```c#
// La déclarations peut contenir des noms
(string Name, int Points, int Level) score = ("R2-D2", 12340, 12);

Console.WriteLine($"Le nom est : {score.Name}");
```

Il est finalement possible de déconstruire le tuple avec un assignation a plusieurs variables

```c#
(string Name, int Points, int Level) score = ("R2-D2", 12340, 12);

string myName;
int myPoints;
int myLevel;

(myName, myPoints, myLevel) = score;

// Il est aussi possible d'omettre un des éléments avec un _
(myName, _, myLevel) = score;
```

## Programmation orienté objet

### Objets
En programmation orientée-objet, les informations d'un programme sont structurées avec des objets.
Un objet est la représentation d'un élément ou d'une structure de la problématique du problème.

Les objets ont toujours deux informations primordiales:

* Données, nommées attributs ou champs/fields/attributes
* Comportement, nommé méthodes/methods

### Classes
Pour regrouper les objets de même type ensemble (ceux avec les mêmes types de données et comportement possibles), nous établirons des classes d'objets qui permettent de définir ce que pourront contenir les objets de ladite classe.

## Constructions d'une classe

Nous pouvons créer nos propres classes. Une fois la classe créée, nous pourrons ensuite faire des instances de la classe dans nos programmes qui utiliseront les méthodes conçues pour la classe.

### Définition d'une classe
Une classe se retrouve dans un bloc de code représentant la classe. Elle va inclure ses données et les comportements possibles de la classe.

```c#
// La définition de classes se fait a la fin du fichier source.
class Score
{

}
```

### Variable d'instance de la classe
La première chose à rajouter à une classe est la liste des champs de la classe. Les variables qui seront rattachées aux données devant être incluses dans les objets de notre classe

```c#
class Score
{
    public string name; // Chaque variable a un modificateur d'accès (public pour l'instant)
    public int point; // Les variables seront disponibles pour chaque objet de la classe
    public int level;
}
```

### Méthodes d'une classe
Les méthodes sont les actions ou les comportements que nos objets peuvent prendre. Il faut aussi des méthodes pour les accesseurs et mutateurs.

```c#
class Score
{
    public string name;
    public int points;
    public int level;

    // Des méthodes peuvent être propres à la classe
    // L'exemple de méthode ici utilise la syntaxe simplifié de méthode
    public bool EarnedStar() => (points / level) > 1000;
}
```

## Instance de la classe

Les objets partent de classes et doivent être construits avant d'être utilisés. Pour utiliser des objets, il nous faut donc utiliser un constructeur qui pourra créer un objet qui sera ensuite sauvegardé dans une variable du bon type.

Le mot clé `new` permet de créer un objet à partir du constructeur de la classe. Le constructeur est une méthode qui porte le même nom que la classe et peut recevoir les données initiales de l'objet.

```c#
Score best = new Score();
```

Avec l'instance de la classe créé, il est maintenant possible d'accédé aux éléments de la classe avec le `.`.

```c#
Score best = new Score();

best.name = "R2-D2";
best.points = 12420;
best.level = 15;

if (best.EarnedStar())
{
    Console.WriteLine("You earned a star.");
}

// Il est possible (et probable) d'avoir plusieurs instance de la classe
Score a = new Score();

// Chaque instance contient sa propre version des variables avec leurs valeurs propres
a.points = 999;

Console.WriteLine($"best points = {best.points}\na points = {a.points}");

```

### Constructeurs
Pour construire nos objets, il faut implémenter une classe pour ce constructeur. Le nom de la méthode du constructeur est toujours le nom de la classe.

Les constructeurs sont une méthode spéciale qui n'a pas de retour.

```c#

class Score
{
    public string name;
    public int points;
    public int level;

    // Le constructeur n'a pas de retour et a le nom de la classe
    public Score()
    {
        // À l'intérieur de méthode, les variables de la classe sont accessible directement
        name = "Unknown";
        points = 0;
        level = 1;
    }
    public bool EarnedStar() => (points / level) > 1000;
}
```

Il est possible d'avoir des constructeur avec des paramètres d'entrés. On peut aussi mélanger plusieurs constructeurs avec différentes listes de paramètres (d'avoir une méthode du même nom avec des signatures différentes se nomme du polymorphisme).

```c#
class Score
{
    public string name;
    public int points;
    public int level;

    public Score()
    {
        name = "Unknown";
        points = 0;
        level = 1;
    }

    public Score(string n)
    {
        name = n;
        points = 0;
        level = 1;
    }
    public bool EarnedStar() => (points / level) > 1000;
}
```

Il est aussi possible de donner des valeurs par défault avec l'initialisation des variables de la classe.

```c#
class Score
{
    public string name = "Unknown";
    public int points = 0;
    public int level = 1;

    public Score(){}

    public Score(string n)
    {
        name = n;
    }
    public bool EarnedStar() => (points / level) > 1000;
}
```

## Référence `this`

On peut utiliser la référence `this` dans un objet pour faire référence à l'objet lui-même. Considéré que c'est une variable toujours disponible.

On l'utilise quand il faut distinguer des ambigüités possibles. Par exemple, durant l'utilisation de paramètres portant le même nom que des variables d'instance.

```c#
```c#
class Score
{
    public string name = "Unknown";

    public Score(string name)
    {
        // Sans le this, il y a un conflit sur l'identificateur name!
        this.name = name;
    }

}
```

## Modificateurs d'accès

Par défaut, les champs et méthodes d'une classe sont disponibles à toutes les instances venant du même paquet.

Nous pouvons modifier les accès avec des mots clés.

* `public` - Disponible à tous
* `private` - Disponible à l'instance de l'objet seulement
* `internal` - Disponible au niveau du projet

Pour bien encapsuler nos données, nous voulons que toutes les variables d'instance soit `private` et que toutes méthodes ne devant pas être utilisées à l'extérieur de la classe aussi.

### Getter & Setter

Avec des variables privées, il nous faudra des méthodes qui permettent l'accès a nos variables. Ces méthodes sont nommés Getter et Setter, nous verrons plus tard que c# permet de les générer automatiquement.

```c#
class Rectangle
{
    private float _width;
    private float _height;
    public Rectangle(float width, float height)
    {
        _width = width;
        _height = height;
    }
    public float GetWidth() => _width;
    public float GetHeight() => _height;

    // On peut avoir plus de Getter que de variables si l'information est dérivé.
    public float GetArea() => _width * _height;
    
    public void SetWidth(float value) => _width = value;
    public void SetHeight(float value) => _height = value;
}
```