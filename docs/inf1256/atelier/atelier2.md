---
title: Programmes à faire de l'atelier 2
sidebar_label: 1 - If, While, For
---

Pour chaque numéro, on donne un example d'utilisation.

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