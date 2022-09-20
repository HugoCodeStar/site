---
title: NumPy, librairie de calcul scientifique de Python
sidebar_label: X - NumPy
---

## NumPy

NumPy (Numerical Python) est une bibliothèque Python open source utilisée dans presque tous les domaines de la science et de l'ingénierie. C'est la norme universelle pour travailler avec des données numériques en Python, et c'est au cœur des écosystèmes scientifiques Python et PyData. La majorité des libraires traitant des données sont basés sur les structures de données qui sont introduit avec `NumPy`.

### Installation et importation de NumPy
La libraire `NumPy` est déjà installé dans plusieurs plateforme scientifique comme Google Collab. Il suffit de l'importer comme nous l'avons vu précédement.


```python
import numpy as np
```

Nous raccourcissons le nom importé en `np` pour une meilleure lisibilité du code à l'aide de NumPy. Il s'agit d'une convention largement adoptée que vous devez suivre afin que toute personne travaillant avec votre code puisse facilement la comprendre.

### Quelle est la différence entre une liste Python et un tableau NumPy?
NumPy vous offre une vaste gamme de moyens rapides et efficaces de créer des tableaux et de manipuler des données numériques à l'intérieur de ceux-ci. Alors qu'une liste Python peut contenir différents types de données dans une seule liste, tous les éléments d'un tableau NumPy doivent être homogènes. Les opérations mathématiques censées être effectuées sur des tableaux seraient extrêmement inefficaces si les tableaux n'étaient pas homogènes.

**Pourquoi utiliser NumPy ?**

Les tableaux NumPy sont plus rapides et plus compacts que les listes Python. Un tableau consomme moins de mémoire et est pratique à utiliser. NumPy utilise beaucoup moins de mémoire pour stocker les données et fournit un mécanisme de spécification des types de données. Cela permet d'optimiser encore plus le code.

### Qu'est-ce qu'un tableau?
Un tableau est une structure de données centrale de la bibliothèque `NumPy`. Un tableau dispose d'une grille d'éléments qui peuvent être indexés de différentes manières . Les éléments sont tous du même type, appelés tableau `dtype`.

Une façon d'initialiser les tableaux NumPy est à partir de listes Python, en utilisant des listes imbriquées pour les données à deux dimensions ou plus.


```python
a = np.array([1, 2, 3, 4, 5, 6])
b = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
print(a[0])
print(b[0])
```

La classe `NumPy` `ndarray` est utilisée pour représenter à la fois les matrices et les vecteurs. Un vecteur est un tableau à une seule dimension (il n'y a pas de différence entre les vecteurs ligne et colonne), tandis qu'une matrice fait référence à un tableau à deux dimensions. Pour les tableaux 3D ou de dimension supérieure, le terme tenseur est également couramment utilisé.

# Création de tableau

Pour créer un tableau NumPy, vous pouvez utiliser la fonction np.array().

Tout ce que vous avez à faire pour créer un tableau simple est de lui transmettre une liste. Si vous le souhaitez, vous pouvez également spécifier le type de données dans votre liste.


```python
a = np.array([1, 2, 3])
```

Outre la création d'un tableau à partir d'une séquence d'éléments, vous pouvez facilement créer un tableau rempli de 0's :


```python
np.zeros(2)
```

Ou un tableau rempli de 1's :


```python
np.ones(2)
```

Vous pouvez créer un tableau avec une plage d'éléments :


```python
np.arange(4)
```

Et même un tableau contenant une plage d'intervalles régulièrement espacés. Pour ce faire, vous spécifierez **le premier nombre**, **le dernier nombre** et **la taille du pas**.


```python
np.arange(2, 9, 2)
```

Vous pouvez également utiliser `np.linspace()` pour créer un tableau avec des valeurs espacées linéairement dans un intervalle spécifié :


```python
np.linspace(0, 10, num=5)
```

### Spécification de votre type de données

Bien que le type de données par défaut soit à virgule flottante (`np.float64`), vous pouvez spécifier explicitement le type de données souhaité à l'aide du paramètre nommée `dtype`.


```python
x = np.ones(2, dtype=np.int64)
```

### Ajouter, supprimer et trier des éléments
Trier un élément est simple avec `np.sort()`.


```python
arr = np.array([2, 1, 5, 3, 7, 4, 6, 8])
np.sort(arr) # Attention, on retourne un nouveau tableau
```


```python
a = np.array([1, 2, 3, 4])
>>> b = np.array([5, 6, 7, 8])
```

Vous pouvez les concaténer avec `np.concatenate()`.


```python
np.concatenate((a, b))
```

### Comment connaître la forme et la taille d'un tableau?
`ndarray.ndim` vous indiquera le nombre d'axes, ou dimensions, du tableau.

`ndarray.size` vous dira le nombre total d'éléments du tableau. C'est le produit des éléments de la forme du tableau.

`ndarray.shape` affichera un tuple d'entiers indiquant le nombre d'éléments stockés le long de chaque dimension du tableau. Si, par exemple, vous avez un tableau 2D avec 2 lignes et 3 colonnes, la forme de votre tableau est .(2, 3)

Par exemple, si vous créez ce tableau :


```python
array_example = np.array([[[0, 1, 2, 3],
                           [4, 5, 6, 7]],
                          [[0, 1, 2, 3],
                           [4, 5, 6, 7]],
                          [[0 ,1 ,2, 3],
                           [4, 5, 6, 7]]])

print(array_example.ndim)
print(array_example.size)
print(array_example.shape)
```

### Indexation et découpage
Vous pouvez indexer et découper des tableaux NumPy de la même manière que vous pouvez découper des listes Python.


```python
data = np.array([1, 2, 3])
print(data[1])
print(data[0:2])
print(data[1:])
print(data[-2:])
```

Si vous souhaitez sélectionner des valeurs de votre tableau qui remplissent certaines conditions, c'est simple avec NumPy.


```python
a = np.array([[1 , 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
print(a[a < 5])

five_up = (a >= 5)
print(a[five_up])

divisible_by_2 = a[a%2==0]
print(divisible_by_2)

five_up = (a > 5) | (a == 5)
print(five_up)
```

Vous pouvez utiliser `np.nonzero()` pour imprimer les indices des éléments qui sont, par exemple, inférieurs à 5 :


```python
b = np.nonzero(a < 5)
print(b)
```
