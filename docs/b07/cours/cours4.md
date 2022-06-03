## Static

Il est possible d'avoir des éléments statique à une classe qui existerons à l'extérieur des instances de la classe. Nous pourrons donc avoir des variables de classes et de méthodes statiques. Ces membres seront disponible dans les programmes qui implémente la classe.

### Champs statique

Le mot clé statique peut être ajouter aux variables d'instance pour la variable appartiennent à la classe statique.

```c#
public class Score
{
    private static readonly int PointThreshold = 1000;
    private static readonly int LevelThreshold = 4;
    // ... 
}
```

Les champs statiques seront disponible dans toutes les méthodes de la classe ou de l'extérieur si l'élément est `public`. Pour y accedé de l'extérieur, nous utiliserons le nom de la classe comme élément initiale (ex: `Score.LevelThreshold`).

### Propriétés statiques

Les propriétés peuvent aussi être statique avec le mot clé `static`.

```c#
public class Score
{
    public static int PointThreshold { get; } = 1000;
    public static int LevelThreshold { get; } = 4;
    // ...
}
```

### Méthodes statiques

Les méthodes statiques pourront être invoqués sans instances. Les méthodes statiques sont habituellement des méthodes d'aides qui seront utilisés contextuellement avec la classe sans avoir besoin d'instance de la classe.

```c#
public   int CountForPlayer(string playerName, Score[] scores)
{
    int count = 0;
    foreach (Score score in scores)
        if (score.Name == playerName) count++;
    return count;
}
```

Les méthodes statiques sont aussi souvent utiliser pour des méthodes de création (Factory methods) qui permet de créé des objets avec des nom plus appropriés que le constructeur ou pour contourner les conflit dans des signatures identique du constructeurs.

```c#
// Méthode statique dans la classe Rectangle
public static Rectangle CreateSquare(float size) => new Rectangle(size, size);

// Utilisation du factory
Rectangle rectangle = Rectangle.CreateSquare(2);
```

### Constructeur statique
Si les champs statiques ont besoin d'initialisation, il est aussi possible d'avoir un constructeur statique. Ce dernier ne peut pas avoir de paramètre et sera invoqué automatique au début du programme. Il ne peut pas être appellé par la suite.

```c#
public class Score
{
    public static readonly int PointThreshold;
    public static readonly int LevelThreshold;
    static Score()
    {
        PointThreshold = 1000;
        LevelThreshold = 4;
    }
    //...
}
```

### Classe statique

Certaines classes n'ont pas besoin d'avoir d'instance. Celle-ci contiennent souvent juste une liste de méhodte statique contextuelle au problème. Plusieurs classe fournit par le langage (comme `Console`, `Convert` ou `Math`) sont des classes statiques. Les classes statiques sont utilisé à partir de leurs noms et ne peuvent pas être instancé avec un `new`.

```c#
public class Utilities
{
    public static int Helper1() => 4;
    public static double HelperProperty => 4.0;
    public static int AddNumbers(int a, int b) => a + b;
}
```

## Référence null

Les objets instanciés ne sont pas directement sauvegardés à l'intérieur d'une variable comme on pourrait le penser à première vue. La variable contient une **référence** à l'objet en mémoire.

Certaines implications arrivent avec cette méthode :

* Il est possible d'avoir plusieurs variables qui utilisent la même référence
* La modification d'un objet affecte toutes les variables avec cette référence
* Un objet existe en dehors de la variable créée dans nos programmes.
* Il est possible d'avoir une variable avec aucune référence. On parle ici d'une référence `null`.

```c#
// Une variable sans référence
Score score = null;
```

### Variable nullable

La présence d'élément null peut apporté des conséquences difficiles à rectifier. Par défault, un warning est émis si une variable à eu la possibilité d'être `null`. Dans les dernières versions de c# (9+), il est possible d'identifier une variable comme étant possiblement null sans warning. Il ne faut pas oublier de tester la nullité quand on utilise cette variable par la suite.

```c#
// Ctrl-z durant la saisie retourne un élément vide
// Le ? après le type indique la possiblité d'un référence null (controllé)
string? name = Console.ReadLine();

// Test de nullité
if (name != null)
{
    Console.WriteLine("Pas null!.")
}
```