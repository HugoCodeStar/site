---
title: Programmes à faire de l'atelier 3
sidebar_label: 3 - Fonctions
---

## inverse_additif
~~~
L'inverse additif d'un nombre.
Trouve la valeur du nombre multiplié par -1.

Args:
    nombre (float):  Le nombre à inverser.
Returns:
    float: L'inverse du nombre.
~~~

Exemple:
~~~python
>> inverse_additif(45)
    -45


>> inverse_additif(-4.5)
    4.5
~~~

## inverse_multiplicatif
~~~
L'inverse multiplicatif.
    Retourne la valeur à la puissance -1.

    Args:
      arg1 (float): La valeur dont on veut retourner l'inverse.
    Returns:
      float: L'inverse multiplicaitf de la valeur de départ.
~~~

Exemple:
~~~python
>> inverse_multiplicatif(5)
    0.2

>> inverse_multiplicatif(0.25)
    4

~~~

## compteur_entre_borne
~~~
La somme en entre un borne minimale et une borne maximale.

Ex : `debut + (debut+1) + ... + (fin-1) + fin`.

Args:
    debut (float): La valeur de départ de la sommation à faire.
    fin (float): La valeur de fin de la sommation à faire.
Returns:
    float: La somme du compteur entre les bornes données.
~~~

Exemple:
~~~python
>> compteur_entre_borne(10, 13)
    46

>> compteur_entre_borne(0, 7)
    28
~~~


## factoriel
~~~
Factoriel de n. Retourne la somme multiplicative de 1 à n.

Args:
    n (float): La valeur pour laquelle on souhaite calculer le factoriel.
Returns:
    float: La somme multiplicative factoriel du nombre.
~~~
Exemple:
~~~python
>> factoriel(5)
    120
~~~

## saisit_entre_borne
~~~
Saisi une valeur et recommence tant que la saisit n'est pas à
l'intérieur de bornes données.

Args:
    minimum (float): La borne inférieure de l'intervalle de saisi.
    maximum (float): La borne supérieure de l'intervalle de saisi.
Returns:
    float: La valeur finalement saisit entre les bornes.
~~~
Exemple:
~~~python
>> saisit_entre_borne(5, 10)
    Veuillez entrer une valeur : 3
    La valeur doit se situer entre 5 et 10.
    Veuillez entrer une valeur : 12
    La valeur doit se situer entre 5 et 10.
    Veuillez entrer une valeur : 5
        5
~~~


## maximum_de_deux
~~~
Le nombre maximum entre deux nombres.

Args:
    nb1 (float): Première valeur a comparer.
    nb2 (float): Seconde valeur a comparer.
Returns:
    float: La valeur maximum entre les deux nombres.
~~~
Exemple:
~~~python
>> maximum_de_deux(3, 5)
        5

>> maximum_de_deux(34, 34)
        34
~~~

## maximum_de_trois
~~~
Le nombre maximum entre trois nombres.

Args:
    nb1 (float): Première valeur a comparer.
    nb2 (float): Seconde valeur a comparer.
    nb3 (float): Troisième valeur à comparer.
Returns:
    float: La valeur maximum entre les trois nombres.
~~~
Exemple:
~~~python
>> maximum_de_trois(3, 5, 2)
        5

>> maximum_de_trois(34, 34, 34)
        34


>> maximum_de_trois(34, 5, 34)
        34
~~~

## maximum_de_quatre
~~~
Le nombre maximum entre quatre nombres.

Args:
    nb1 (float): Première valeur a comparer.
    nb2 (float): Seconde valeur a comparer.
    nb3 (float): Troisième valeur à comparer.
    nb4 (float): Quatrième valeur à comparer.
Returns:
    float: La valeur maximum entre les quatre nombres.
~~~
Exemple:
~~~python
>> maximum_de_quatre(3, 5, 2, 1)
        5

>> maximum_de_quatre(34, 34, 34, 34)
        34

>> maximum_de_quatre(34, 5, 34, 45)
        45
~~~

## pgcd
~~~
Le plus grand commun diviseur entre deux nombre. Utilise
l'algorithme suivant pour y arriver:

    tant que b diférent de 0
        si a plus grand que b alors
            a := a - b
        sinon
            b := b - a
        fin si
    fin tant que
    résultat := a

Le signe `:=` est une assignation en algorithmie.

Args:
    a (float): Première valeur.
    b (float): Deuxième valeur.
Returns:
    float: Plus grand diviseur des deux nombres.
~~~
Exemple :
~~~python
>> pgcd(12, 30)
        6

>> pgcd(8, 4)
        4
~~~

## est_premier
~~~
Détermine si le nombre est premier.
Retourne `true` si le nombre est premier, `false` autrement.

Args:
    n (float): Le nombre à tester.
Returns:
    float: `true` si le nombre est premier.
~~~
Exemple:
~~~python
>> est_premier(4)
    False

>> est_premier(7)
    True
~~~

## affiche_n_nombre_premier
~~~
Affiche les n nombres premiers dans la fenêtre de commande.

Args:
    n (float): Le nombre de nombre premiers à afficher.
~~~
Exemple:
~~~python
>> affiche_n_nombre_premier(4)
    1 ieme nombre premier : 2.
    2 ieme nombre premier : 3.
    3 ieme nombre premier : 5.
    4 ieme nombre premier : 7.
~~~

## n_diviseur
~~~
Le nombre de diviseurs de n.

Args:
    n (float): Le nombre à tester.
Returns:
    float: Le nombre de diviseurs du nombre.
~~~
Exemple:
~~~python
>> n_diviseur(45)
        6


>> n_diviseur(8)
        4
~~~

