---
title: Structures de controles conditionnels et itératives
sidebar_label: 6 - If, while et for
sidebar_position: 6
---

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

## Exemple 1
Écrivez des scripts qui :

* Saisit un nombre à l’utilisateur et recommence la saisit tant que le nombre saisit n’est pas 0 ;

```python
# Saisit un nombre à l'utilisateur et recommance la saisit tant
# que le nombre n'est pas 0.

# Première saisit
saisi = int(input('Entrez un nombre : '))

while saisi != 0:
    saisi = int(input('Entrez un nombre : '))

print('Fin du programme.')
```

* Saisit un nombre n et calcule la somme des nombres de 1 à n.
```python
# Saisit une valeur n. Calcule la somme cumulative de 1 à n.

# Saisit de n
n = int(input('La valeur de n : '))

# Additionne de 1 à n
compteur = 1
somme = 0
while compteur <= n:
    somme = somme + compteur
    compteur = compteur + 1

print('La somme de 1 a', n, 'est :', somme)
```

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

## Exemple 2
Écrivez des scripts qui :

* Saisit un nombre n et calcule la somme des nombres de 1 à n en utilisant la boucle `for`;

```python
# Saisit une valeur n. Calcule la somme cumulative de 1 à n.

# Saisit de n
n = int(input('La valeur de n : '))

# Additionne de 1 à n
somme = 0
for compteur in range(1, n + 1):
    somme = somme + compteur

print('La somme de 1 a', n, 'est :', somme)
```

* Saisit un nombre n et calcule la somme des nombres pairs de 1 à n ;

```python
# Saisit une valeur n. Calcule la somme cumulative des nombres pairs de 1 à
# n. AVEC UN FOR.

# Saisit n
n = int(input('La valeur de n: '))

somme = 0
# Additione de 1 a n
for compteur in range (1, n+1):
    if compteur % 2 == 0:
        somme = somme + compteur

# Affiche la somme
print('La somme de 1 a', n , 'pair est : ', somme)
```

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


##  Pandas - Ajout d'information dans un DataFrame

Il est possible d'ajouter manuellement des informations dans un dataframe ou de utiliser un calcul pour générer une nouvelle colonne.

Les opérations arithmétiques sur des valeurs d'un dataframe sont sur chaque élément. Par exemple, la division d'une colonne A par la colonne B donne une série qui va faire la division de la valeur de chaque ligne de la colonne A par la colonne B.

[Exemples arithmétiques avec python](https://github.com/TirendazAcademy/PANDAS-TUTORIAL/blob/main/07-Arithmetic%20Operations.ipynb)

## Pandas - Sélection de lignes ou colonnes spécifique d'une DataFrame

Les méthodes `loc` et `iloc` permettent de sélectionner des lignes ou des colonnes avec des conditions. `loc` permet d'utiliser les étiquettes des lignes et colonne ou des conditions (voir exemple 3) et `iloc` travaille sur les numéroes de lignes et colonnes.

## Exemple 3
* Écrivez un script qui contient un dataframe avec l’âge d’utilisateur et modifié le dataframe pour indiquer si les utilisateurs ont droit à un tarif réduit. Le tarif réduit est disponible pour les personnes d’âge mineur (plus petit que 18) ou d’âge d’or (plus grand que 60). Affichez ensuite la liste des nom des personnes qui sont éligible au tarif réduit.

```python
import pandas as pd
import numpy as np

df = pd.DataFrame({'nom': ['Bob', 'Anne', 'Alex'], 'age': [16, 76, 45]})
df['tarif_reduit'] = False

df['tarif_reduit'] = np.logical_or(df['age'] < 18, df['age'] > 60)

display(df)

noms_reduit = df[df['tarif_reduit'] == True]['nom'].values
# Ou avec loc
noms_reduitv2 = df.loc[df['tarif_reduit'] == True, 'nom']

for nom in noms_reduit:
    print(nom)

```
