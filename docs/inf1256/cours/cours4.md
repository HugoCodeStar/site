---
title: Liste et tuples
sidebar_label: 4 - Listes et tuples
---

## Listes
* Les listes sont des collections de plusieurs éléments de même type sous un seul identificateur;
* La liste est construite de cases mémoire consécutives en mémoire;
* À chaque élément de la liste, on associe un indice qui permet de facilement accéder aux cases individuellement;
* Nous regarderons pour commencer que des listes d'une dimension;

## Initialisation de liste
* `[ valeurs ]` - Une liste de valeurs délimitées par des virgules. Construis un tableau avec les valeurs données.
* `list(range(x))` permet de convertir le résultat de la fonction `range` en liste.
* L'opérateur `*` permet de répéter liste quand une liste est l'un des opérandes.

```python
liste = [4, 6, 3, 5, 7]
liste_noms = ['Bob', 'Marie', 'Aird']
liste_mixte = [3, True, 'ok']
liste_repeat = ['allo'] * 3 # Donne ['allo', 'allo', 'allo']
liste_range = list(range(4)) # Donne [0, 1, 2, 3]
liste_repet = [1, 2] * 3 # Donne [1, 2, 1, 2, 1, 2]
```

## Accès aux éléments de la liste
* L'accès aux éléments de la liste se fait à travers un indice. L'indice est utilisé entre des crochets `[]` suivant l'identificateur de la liste;
* Cette méthode peut être utilisée pour assigner une valeur à une case spécifique.
* **Attention** : Les indices commencent à 0.

```python
x = [3, 2, 5, 6, 7]
print(x[1])

print(x[2])
x[2] = 4
print(x[2])
```

## Exercice 1
* Écrivez un programme qui crée une liste de 5 éléments initialisés à 0. Le programme remplit ensuite chaque élément de la liste avec une saisie à l'utilisateur.

## Liste dynamique

* Les listes de Python sont dynamiques. Elles peuvent changer de taille au besoin;
* L'ajout d'éléments se fait avec la fonction `append`;
* La concaténation de listes se fait avec l'opération `+`;
* La suppression d'un élément se fait avec l'instruction `del`.

```python
x = [4, 5, 3]
y = [1, 2, 3]
x.append(7)
print(x[3]) # Affiche 7

z = x + y
print(z) # Affiche [4, 5, 3, 7, 1, 2, 3]

del z[2]
print(z) # Affiche [4, 5, 7, 1, 2, 3]
```

## Parcours dans une liste

* il est facile d'itérer sur une liste avec un for.
* Trouvez la taille d'une liste avec la fonction `len`

```python
x = [3, 5, 2, 5]

for a in x:
    print(a)

print(len(x))
```

## Exercice 2

* Écrivez une fonction qui reçoit une liste et une valeur, la fonction retourne le nombre d'occurrences de la valeur dans la liste;
* Écrivez une fonction qui reçoit une liste de taille inconnue, un seuil minimum, un seuil maximum et une nouvelle valeur. La fonction modifie toutes les valeurs de la liste entre les deux seuils à la nouvelle valeur reçue. La fonction retourne la liste avec les valeurs modifiées.

## Découpage d'une liste (slicing)

* Une sous-liste d'une liste peut être générée en utilisant les opérations de découpage.
* Le découpage prend deux indices, un de début et un de fin (la fin sera exclue de la sélection)
* Il est possible d'omettre le début ou la fin.
* Si le début est omis, l'indice 0 est utilisé
* Si la fin est omise, l'indice de fin est la fin de la liste

```python
x = ['a', 'b', 'c', 'd', 'e', 'f']

mid_x = x[2:4] # Contient ['c', 'd']

end_x = x[4:] # Contient ['e', 'f']
```

## Passage de référence

```python
def modifie_valeur(l):
    l[0] = 10

x = [3, 5, 1]
modifie_valeur(x)

print(x) # Affiche [10, 3, 1]
```

* Les listes sont des objets qui sont passés par référence;
* Les modifications à l'intérieur d'une fonction sont donc permanentes.

## Trouver un élément dans une liste

L'opérateur `in` est aussi utilisé pour faire une recherche d'un élément dans une liste.

```python
x = ['allo', 'salut', 'bonjour']

if 'allo' in x:
    print('Trouvé!') # Va être affiché

if 'au revoir' in x:
    print('Pas trouvé...') # Ne sera pas affiché
```

Les fonctions `min` et `max` trouves l'élément le plus petit ou plus grand dans une séquence (une liste est un type de séquence).

```python
x = [5, 3, 8, 10, 4]

print(min(x)) # Affiche 3
print(max(x)) # Affiche 10
```

## Méthodes sur les listes

* Les méthodes sont des fonctions spéciales qui sont appellés directement de la liste.
* Une méthode est appellé en préfixant le nom de la liste avec un `.`.
* Les méthodes font partie de la programmation orienté-objet que nous verrons à la fin du cours.

| Fonction            | Description                                                      |
|---------------------|------------------------------------------------------------------|
| append(index)       | Ajoute un élément à la fin de la liste.                          |
| index(item)         | Retourne l'indice du premier élément trouvé dans la liste.       |
| insert(index, item) | Insère `item` à la position `index`. Décale les autres éléments. |
| sort()              | Tri la liste de manière croissante.                              |
| remove(item)        | Enlève la première occurrence où `item` se trouve dans la liste. |
| reverse()           | Inverse la liste.                                                |

```python
x = [3, 7, 10, 2]

x.sort()

print(x) # Affiche [2, 3, 7, 10]
```

## Exercice 3
Écrivez une fonction qui reçoit une liste, la trie et supprime la moitié supérieure de la liste.

## Copie de liste
L'assigne d'une liste dans une autre variable ne fait **pas** la copie de la liste. Elle fait un référence à la liste.
Pour faire la copie de la liste, la méthode `copy` est disponible.

Example de la référence
```python
x = [1, 2, 3]
y = x
x[0] = 10
print(y) # Affiche [10, 2, 3]
```

Copie de la liste
```python
x = [1, 2, 3]
y = x.copy()
x[0] = 10
print(y) # Affiche [10, 2, 3]
```

## Tuple
* Le tulpe est très sembable à une liste. La différence fondamental est que le tuple est immuable. Il ne peux pas être modifier après sa création. Les tuples utilisent des parenthèses à la place de crochet carrés des listes à leurs créations.

```python
monTuple = (4, 6, 8, 3)
print(monTuple) #Affiche (4, 6, 8, 3)
print(monTuple[2]) #Affiche 8
monTuple[0] = 10 # Génère une erreur
```

Il est possible de convertir un tuple en liste avec la fonction `list` qui reçoit le tuple et retourne une liste avec les mêmes éléments.

## Liste de multiple dimensions

* En incorporant des listes de listes, il est possible de faire la représentation d'une matrice.

```python
valeurs = [[1, 2, 3], [4, 5, 6]]
# Représente
# 1 2 3
# 4 5 6

# Modification de la case avec la valeur 6
valeurs[1][2] = 10
print(valeurs) # Affiche [[1, 2, 3], [4, 5, 10]]
```