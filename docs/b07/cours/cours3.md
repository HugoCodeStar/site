---
title: Propriétés et méthodes statiques
sidebar_label: 3 - Props & Static
sidebar_position: 3
---

## Propriétés

L'utilisation de getter et setter ajoute beacoup de coode similiaire (boilerplate en anglais). Il est possible d'utilisé les propriétés pour avec des getter et setter intégré à la syntaxe.

```c#
public class Rectangle
{
    private float _width; //On garde une variable de classe
    private float _height;

    public Rectangle(float width, float height)
    {
        _width = width;
        _height = height;
    }

    // La création d'une propriété
    public float Width
    {
        // Une méthode get
        get => _width;
        // Une méthode set avec un paramètre implicite nommé value
        set => _width = value;
    }

    public float Height
    {
        get => _height;
        // Il est possible de mettre une des méthodes privées
        private set => _height = value; 
    }

    public float Area => _width * _height;
}
```

### Utilisation de propriétés

Les propriétés sont ensuite directement relié à leur nom comme si c'était des variables de classe publique.

```c#
Rectangle r = new Rectangle(2, 3);
r.Width = 5;
Console.WriteLine($"A {r.Width}x{r.Height} rectangle has an area of {r.Area}.");
```

### Implémentation automatique des propriétés

La majorité des getter et setter sont très simple et n'a pas besoin de code spécial. Il y a une syntaxe abrégé pour ces cas.

```c#
public class Player
{
    public string Name { get; set; } = "Player";
}
```

Voici notre exemple avec la classe Rectangle:

```c#
public class Rectangle // Note how short this code got with auto-properties.
{
    public float Width { get; set; }
    public float Height { get; set; }
    public float Area =>  Width * Height;

    public Rectangle(float width, float height)
    {
        Width = width;
        Height = height;
    }
}
```

### Propriétés et champs immuable

Il est possible de forcer une propriété ou une variable d'instance a être en lecture seule. Le seul endroit possible de modification est durant l'initailisation ou dans les constructeurs de la classe.

```c#
public class Player
{
    // Seulement le get est disponible
    public string Name { get; } = "Player 1";
    public Player(string name)
    {
        Name = name;
    } 
}

public class Player
{
    // L'ajour de l'option readonly met la variable d'instance immuable (autre que dans le constructeur)
    private readonly string _name;
    
    public Player(string name)
    {
        _name = name;
    } 
}
```

### Initialisation rapide d'objet

Puisque plusieurs constructeur prennent les paramètres pour construire un objet, un syntaxe simplifié existe pour la construction d'objet.

```c#
Circle circle = new Circle(){ Radius = 3, X = -4 };
Circle circle2 = new Circle{ Radius = 3, X = -4 };


public class Circle
{
    public float X { get; set; } = 0; // The x-coordinate of the circle's center. 
    public float Y { get; set; } = 0; // The y-coordinate of the circle's center. 
    public float Radius { get; set; } = 0;
}

//Si nous ne voulons pas de set disponible mais que la syntaxe soit disponible durant la construction d'objet
public class Circle
{
    public float X { get; init; } = 0;
    public float Y { get; init; } = 0;
    public float Radius { get; init; } = 0;
}
```

