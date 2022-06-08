---
title: Héritage et polymorphisme
sidebar_label: 5 - Héritage & Polymorphisme
sidebar_position: 5
---

## Question : GameObjet

Écrire une classe nommé GameObject qui permet de garder sa position sur un plan cartésien en X,Y ainsi que sa vélocité en X, Y. Une méthode Update pourra mettre à jour la position à partir de la vélocité.

## Héritage

L'héritage en orienté-objet est la relation entre une classe d'une classe plus générique (la `superclasse` ou base class) et une classe plus spécialisée (la `sous-classe` ou classe dérivé).

La spécialisation d'une classe peut être faite avec le `:`. La spécialisation d'une classe permet d'hérité de ses variables, propriétés et méthodes. La spécialisation peut ensuite être utilisé à n'importe quel endroit ou la version générale est possible.

```c#
public class GameObject
{
    public float PositionX { get; set; }
    public float PositionY { get; set; }
    public float VelocityX { get; set; }
    public float VelocityY { get; set; }

    public void Update()
    {
        PositionX += VelocityX;
        PositionY += VelocityY;
    }
}

public class Asteroid : GameObject
{
    public float Size { get; }
    public float RotationAngle { get; } 
}

public class Bullet : GameObject {}
public class Ship : GameObject {}

// Exemple de l'utilisation a d'éléments hérités
Asteroid a1 = new Asteroid;
a1.Update();

// Exemple de l'utilisation dans un tableau d'objets
GameObject[] gameObjects = new GameObject[]
{
    new Asteroid(), new Asteroid(), new Asteroid(),
    new Bullet(), new Ship()
};
```

L'héritage peut être de plusieurs niveaux.

```c#
public class Scout : Ship {}
public class Bomber : Ship {}
```

### Constructeurs

Contrairement aux autres méthodes, les constructeur ne sont pas hérité et doivent être réimplémenté. Il est aussi possible de faire un constructeur avec moins de paramères qui utilise des paramètre par défault.

```c#
public class GameObject
{
    public float PositionX { get; set; }
    public float PositionY { get; set; }
    public float VelocityX { get; set; }
    public float VelocityY { get; set; }

    public void Update()
    {
        PositionX += VelocityX;
        PositionY += VelocityY;
    }

    // Constructeur avec plusieurs paramètres
    public GameObject(float positionX, float positionY, float velocityX, float velocityY)
    {
        PositionX = positionX;
        PositionY = positionY;
        VelocityX = velocityX;
        VelocityY = velocityY;
    }
}

public class Asteroid : GameObject
{
    public float Size { get; }
    public float RotationAngle { get; } 

    // Constructeur qui utilise le constructeur de la classe de base
    public Asteroid() : base(0, 0, 0, 0)
    {
        // Constructeur qui s'exécute après le constructeur de la classe de base
    }

    // Il est possible de réutiliser du code sans pour avoir un constructeur avec le même nombre de paramètres
    public Asteroid(float positionX, float positionY, float velocityX, float velocityY) : base(float positionX, float positionY, float velocityX, float velocityY)
    {

    }
}
```

## Question : ChessPiece

Écrire une classe `ChessPiece` qui garde la position de la ligne et la colonne d'une pièce de jeu d'échec. La classe doit avoir les méthode suivantes :

* `bool IsOnBoard(int row, int column)` en considérant que les lignes et colonnes vont de 0 à 7.
* `bool IsCurrentLocation(int row, int column)`
* `bool IsLegalMove(int row, int column)` en considérant que c'est légal si nous reston sur le plateau et que nous bougont l'emplacement de la pièce.

## Polymorphisme

L'héritage est le premier niveau de la réutilisation de classe. Le polymorphisme vient ajouter la possiblité de modifier des fonctionnalité existante d'une méthode de la classe de base dans la classe dérivé.

Commencons avec un exemple d'une classe de base

```c#
public class ChessPiece
{
    public int Row { get; set; }
    public int Column { get; set; }

    public bool IsLegalMove(int row, int column) =>
                    IsOnBoard(row, column) && !IsCurrentLocation(row, column);
    // L'accesseur protected permet d'être privé pour la classe et ses dérivations.
    protected bool IsOnBoard(int row, int column) =>
                    row >= 0 && row < 8 && column >= 0 && column < 8;
    protected bool IsCurrentLocation(int row, int column) => 
                    row == Row && column == Column;
}
```

ce qui nous permet d'avoir la classe dérivé suivante :

```c#
public class King : ChessPiece
{
    public bool IsLegalKingMove(int row, int column)
    {
        if (!IsLegalMove(row, column)) return false;
        // Moving more than one row or one column is not a legal king move. 
        if (Math.Abs(row - Row) > 1) return false;
        if (Math.Abs(column - Column) > 1) return false;
        return true;
    }
}
```

Nous voudrions prendre la méthode `IsLegalKingMove` et remplacer le comportement de `IsLegalMove` quand on utiliser le King (ou une autre classe dérivé comme Pawn).

Il est possible de spécifié qu'une méthode pourra être redéfini (override) en la déclarant comme `virtual` dans la classe de base.

```c#
public class ChessPiece
{
    public int Row { get; set; }
    public int Column { get; set; }

    // La méthode ajoute le mot clé virtual pour signifié que la méthode peut être changé dans les classe dérivé
    public virtual bool IsLegalMove(int row, int column) =>
                    IsOnBoard(row, column) && !IsCurrentLocation(row, column);
    protected bool IsOnBoard(int row, int column) =>
                    row >= 0 && row < 8 && column >= 0 && column < 8;
    protected bool IsCurrentLocation(int row, int column) => 
                    row == Row && column == Column;
}
```

La class dérivé peut ensuite reprendre la même signature avec le mot clé `override` pour indiquer qu'on remplace la fonctionnalité. Il est ensuite possible d'appeller la méthode initiale a partir de la référence `base`.

```c#
public class King : ChessPiece
{
    // Le mot clé override présente le fait qu'on reprend un méthode existante virtual de la classe de base.
    public override bool IsLegalMove(int row, int column)
    {
        // On peut utilisé la référence base pour avoir accès a l'ancienne version de la méthode
        if (!base.IsLegalMove(row, column)) return false;
        if (Math.Abs(column - Column) > 1) return false;
        return true;
    }
}
```

## Classe objet et méthode ToString

Toutes les classes sont dérivés de la classe `object` de manière implicite. Cette classe offre plusieurs méthodes par défault qui peuvent être redéfini dans le besoin. Un exemple est la méthode `ToString` qui permet de formater l'affichage d'un objet d'une classe. En redéfinissant `ToString`, il est possible de controller l'affichage d'objet.

```c#
public class Point
{
    public float X { get; init; }
    public float Y { get; init; }

    public override string ToString()
    {
        return $"({X}, {Y})";
    }
}
```

## Classe et méthodes abstraites

Il est possible avec l'héritage de créé des classes qui ne devront pas être instancié. Que leurs seuls but est d'être une base de d'autre classe dérivé. Il est aussi possible que cette classe de base ait des méthodes qui n'auront pas d'implémentation au niveau de la base mais qui doivent être disponible dans les classes dérivés. Le mot clé `abstract` peut être utlisé au niveau de la classe ou des méthodes pour identifier les classes qui ne peuvent pas être instanciés ou des méthodes sans implémentations qui devront être définié dans les classes dérivés.

```c#
// Une classe abstract ne peux pas avoir de new (instanciation)
public abstract class ChessPiece
{
    // Une méthode abstract n'a pas d'implémentation immédiate et devra être spécifié dans la classe dérivé.
    public abstract bool IsLegalMove(int targetRow, int targetColumn);
    
    // ... 
}
```
