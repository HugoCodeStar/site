---
title: Structures de contrôles
sidebar_label: 2 - If, While, For
---

## Terminaison de ligne avec `print`
Il est possible de supprimer le saut de ligne du print avec le paramètre `end`

~~~python
print('One', end=' ') 
print('Two', end=' ') 
print('Three')
# Affiche 'OneTwoThree'
~~~

## Séparateur d'item avec `print`

Il est aussi possible de change le séparateur d'items qui est l'espace par défault.

~~~python
# Affiche 'One Two Three'. Séparateur d'espace.
print('One', 'Two', 'Three') 

# Affiche 'OneTwoThree'. Séprateur vide.
print('One', 'Two', 'Three', sep='') 

# Affiche 'One,Two,Three'. Séparateur virgule.
print('One', 'Two', 'Three', sep=',')
~~~

## Concaténation de chaine avec `+`

Le `+` peut être utilisé entre deux chaines pour faire la concaténation (collé) entre les deux chaines.

~~~python
# Affiche 'Ceci est un test.'
print('Ceci est ' + 'un test.')
~~~

## Formatage des données avec `format`

La fonction `format` permet de faire le formatage de valeur numérique pour un affichage.

`format` reçoit la valeur à formater et un *spécificateur de formatage*.

~~~python
# Affiche '123.45'
# Le nombre à formater est 123.45678
# Le spécificateur de formatage est '.2f'
# Le .2 indique la précision
# Le f indique que le nombre est un float (point-flottant)
print(format(123.45678, '.2f'))

# Affiche '1.234568e+04'
print(format(12345.6789, 'e'))
# Affiche '1.23e+04'
print(format(12345.6789, '.2e'))

# Affiche '50.000000%'
print(format(0.5, '%'))
# Affiche '50%'
print(format(0.5, '.0%'))
~~~

## Opérations arithmétique

Symbole | Opération        | Description
--------|------------------|------------------------------------------------------------
`+`     | Addition         | Additionne deux nombres
`-`     | Soustraction     | Soustrait deux nombres
`*`     | Multiplication   | Multiplication de deux nombres
`/`     | Division         | Division de deux nombres
`//`    | Division entière | Division de deux nombres, garde seulement la partie entière
`%`     | Modulo           | Trouve le restant d'une division
`**`    | Puissance        | Met un nombre à une puissance

## Opérateurs relationnels
* Les opérateurs relationnels permettent de faire des comparaisons entre deux expressions;
* Les opérateurs donnent toujours un résultat logique booléen(vrai ou faux);
* Les opérateurs sont :
    * `<`, `<=`, `>`, `>=`, `==` (égalité), `!=` (différent de).
* Il est à noter ici que l'opérateur d'égalité utilise `==` car l'assignation utilise déjà le simple `=`.

## Options de la conditionnel `if`
* Plusieurs options sont disponibles avec le if;
~~~python
if expression logique:
    instructions
elif expression logique:
    instructions
else:
    instructions

~~~
* Seul un des blocs d’instructions (décision) du `if` est exécuté
* Le `elif` et le `else` sont facultatifs
* Le `elif` peut être répété à plusieurs reprises avec différentes expressions

## Structure de contrôle itérative `while`
* La boucle `while` répète les instructions jusqu’à ce que la condition soit fausse ;

~~~python
while condition:
    instructions
~~~

* Le `while` est habituellement utilisé quand on ne connait pas le nombre d’itérations à faire.

## Exercice 1
Écrivez des scripts qui :

* Saisit un nombre à l’utilisateur et recommence la saisit tant que le nombre saisit n’est pas 0 ;
* Saisit un nombre n et calcule la somme des nombres de 1 à n.
* Saisit un nombre m et calcule le nombre factoriel de n. Le nombre factoriel est la multiplication des nombres de 1 à n. Par exemple, le nombre factoriel de 5 est donné par 1x2x3x4x5.

## Structure de contrôle itératif `for`
* Lorsque le nombre d’itérations est connu, la boucle `for` sera utilisée ;
* La boucle `for` inclut un compteur qui est configuré au début de la boucle ;

~~~python
for x in liste:
    instructions

for x in [4, 56, 3]:
    intructions

for x in range(10):
    instructions
~~~

## Exercice 2
Écrivez des scripts qui :

* Saisit un nombre n et calcule la somme des nombres de 1 à n en utilisant la boucle `for`;
* Saisit un nombre n et calcule la somme des nombres pairs de 1 à n ;
* Saisit 10 nombres consécutivement. Détermine et affiche le nombre de fois dont le nombre 0 a été saisi.

## Opérateurs logiques
* Les opérateurs logiques opèrent sur des valeurs logiques et retournent des valeurs logiques ;
    * La conjonction ET `and` ;
    * La disjonction OU `or` ;
    * La négation NON `not`.

`A` | `B` |   | `A and B` | `A or B`
----|-----|---|:--------:|:-------:
False  | False  |   | False       | False
False  | True   |   | False       | True
True   | False  |   | False       | True
True   | True   |   | True        | True

`A` | `not A`
----|:---:
False  | True
True   | False

## Exercice 3
* Écrivez un script qui saisit l’âge d’un utilisateur et qui affiche si l’utilisateur a droit à un tarif réduit. Le tarif réduit est disponible pour les personnes d’âge mineur (plus petit que 18) ou d’âge d’or (plus grand que 60).

