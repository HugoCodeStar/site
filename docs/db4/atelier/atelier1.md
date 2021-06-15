---
title: Programmes à faire de l'atelier 1
sidebar_label: 1 - Bases
---

# Scripts, variables, saisies et affichages

## Allo, Monde!
Affiche le message "Allo, monde!" dans la fenêtre de commande.

## Horaire
Affiche l'horaire suivant dans le fenêtre de commande:

```
Horaire:
7h00 – déjeuner
12h00 – diner
17h00 – souper
```

### Bonus
Utilisez seulement qu'un seul appel à la fonction `print` avec une utilisation de caractères d'échapement.

## Double du nombre
Demande à l’utilisateur de saisir un nombre, le script affiche ensuite
le double (multiplication par 2) du nombre. L'affichage prends la forme
`Double du nombre : NOMBRE`.

## Carré du nombre
Demande à l'utilisateur de saisir un nombre, le script affiche ensuite le
nombre au carré (multiplié par lui-même). L'affichage prends la forme
`Carré du nombre : NOMBRE`.

## Nom et prénom
Demande à l’utilisateur de saisir le nom suivi du prénom de l'utilisateur
(avec deux saisis disctinctes). Le script affiche les message suivant
avec le nom et prénom de l'utilisateur `Bonjour PRENOM NOM!`.

## Multiplie deux nombres
Demande à l'utilisateur de saisir deux nombres et affiche le produit des deux nombres. L'affichage prends la forme `NOMBRE1 x NOMBRE2 = PRODUIT`.

# Conditionnels, boucles et opérateurs logiques

## positifNegatifNul
Demande à l'utilisateur de saisir un nombre. Le script affiche si le
nombre est positif, négatif ou nul. L'affichage prends la forme `Le nombre est positif.`
, `Le nombre est négatif.` ou `Le nombre est nul.`
tous suivis d'un saut à la ligne.

```python
Entrez un nombre: -34
Le nombre est négatif.
```

## minimumEntreDeux
Demande à l'utilisateur de saisir deux nombres. Le script affiche ensuite
le plus petit des deux nombres. L'affichage prends la forme `Plus petit :
NOMBRE` suivi d'un saut de ligne.

```python
Veuillez entrer un premier nombre: 43
Veuillez entrer un second nombre: 65
Plus petit : 43
```

## quadrantCartesien
Demande à l'utilisateur de saisir deux coordonnées. Les saisies
représente les coordonnées x et y d'un point sur un plan cartésien. Le
script affiche dans quel quadrant appartient le point. L'affichage prends
la forme `(X, Y) est dans le quadrant : QUADRANT.` suivi d'un saut de
ligne. La valeur QUADRANT peut être "I", "II", "III" ou "IV".

[Quadrant Cartésiens Wikipedia](https://fr.wikipedia.org/wiki/Quadrant_(mathématiques))

```python
Veuillez entrer la coordonnée en x: -4
Veuillez entrer la coordonnée en y: 6
(-4, 6) est dans le quadrant : II.
```

## imcPersonne
Demande à l'utilisateur de saisir son poids (en kg) et sa taille (en m).
Le script calcule l'indice de masse corporelle en utilisant la forumule
suivante:

```
IMC = poids / (taille * taille)
```

Le script affiche ensuite la catégorie de l'IMC selon les critères
suivant : si l'IMC est plus petit que 18.5, l'utilisateur est "maigre",
si l'IMC est plus grand ou égal à 18.5 et plus petit que 30,
l'utilisateur est "normale" et si l'utilisateur est plug grand ou égal à
30, l'utilisateur est "obèse". L'affichage prends la forme `Catégorie IMC : CATÉGORIE` 
suivi d'un saut de ligne.

[IMC Wikipedia](https://fr.wikipedia.org/wiki/Indice_de_masse_corporelle)

```python
Veuillez entrer votre poids (en kg.): 65
Veuillez entrer votre taille (en m.): 1.65
Catégorie IMC : normale
```

## minimumEntreTrois
Demande à l'utilisateur de saisir trois nombres. Le script affiche le
plus petit des trois nombres. Le script doit aussi affiché un message si
il y a eu égalité sur le plut petit nombre. L'affichage de base prends la forme
`Plus petit : NOMBRE` suivi d'un saut de ligne. L'affichage de l'égalité
prends la forme "Il y a eu égalité." suivi d'un saut de ligne.

```python
Entrez un nombre: 34
Entrez un autre nombre: 67
Entrez un dernier nombre: 32
Plus petit : 32
```

## whileDepassement
Saisit un nombre limite. Initialise un compteur à 0 et utilise un while
qui incrémente le compteur de deux à chaque itération. Le compteur
s'arrète quand le compteur à dépassé le nombre limite. Affichez la valeur
du compteur à la fin de chaque itération de la boucle.

```python
Entrez une valeur limite: 13
2
4
6
8
10
12
14
```

## compteurImpaire
Utilise un while pour incrémenté un valeur de 1 jusqu'à 10. Affiche
seulement les valeurs impaires du compteur. Note : La modulo `%` permet
d'aider à déterminer si un nombre est impair.

```python
1
3
5
7
9
```

## compteurBorne
Saisit un nombre minimum, un nombre maximum et un intervalle. Avec une
boucle `while`, affiche tous les nombres entre le nombre minimum et le
nombre maximum en utilisant des sauts de l'intervalle.

```python
Entrez le minimum : 3
Entrez le maximum : 13
Entrez l'intervalle : 2
3
5
7
9
11
13
```

## compteurBorneFor
Saisit un nombre minimum, un nombre maximum. Avec une
boucle `for`, affiche tous les nombres entre le nombre minimum et le
nombre maximum.

```python
Entrez le minimum : 3
Entrez le maximum : 7
3
4
5
6
7
```

## diviseurNombre
Saisit un nombre et affiche tous les diviseurs de ce nombre. Note : Le modulo `%`
 permet d'aider à trouver si un nombre est un diviseur d'un
autre. Utilisez une boucle `for` pour parcourir tous les nombres de 1 au nombre de
la saisie et vérifiez chaque diviseur possible.

```python
Veuillez entrer un nombre entier: 14
Les diviseurs du nombre 14 sont:
1
2
7
14
```

## carreEtoile
Saisit la dimension d'un carré. Affiche un carré d'étoile (*) à l'écran
avec un nombre de ligne et un nombre de colonnes déterminé par la saisit.

```python
Quel est la dimension du carre : 5
*****
*****
*****
*****
*****
```

## triangleEtoile
Saisit un nombre et affiche à l'écran un triangle rectangle composé
d'etoiles dont la base et la hauteur correspondent au nombre saisit.

```python
Veuillez entrer la taille du triangle d'étoiles: 5
*
**
***
****
*****
```

## nombrePremier
Saisit un nombre et affiche si ce nombre est premier. Un nombre premier
à seulement 1 et lui-même comme diviseur. L'affichage prendre la forme
`NOMBRE est premier` ou `NOMBRE n'est pas premier.`

```python
Le nombre a regarder : 17
17 est premier.
```

# Fonctions

Pour chacunes des présentations suivantes, écrivez la fonction qui correspond à la demande.


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

