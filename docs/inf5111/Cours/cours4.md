---
title: Jointures/regroupement de tables & pandas
sidebar_label: 4 - Jointures & pandas
sidebar_position: 4
---

## Regroupement de données avec le `GROUP BY`

En suite aux fonctions d'agrégation, il est possible de regrouper des données avant d'appliquer la fonction d'agrégation sur les sous-groupes. La commande `GROUP BY` nous permet de regrouper des sous-ensembles et d'avoir la réponse de chaque regroupement.

```sql
SELECT
	select_list (aggregates)
FROM
	table_name
GROUP BY
	column;
```

La liste de sélection peut donc avoir les colonnes des regroupements ou des fonctions d'agrégation, mais pas d'autre expression.

## Les jointures de tables

Avec les relations établies avec les clés étrangères, il est souvent souhaitable de "combiner" les données de plusieurs tables ensemble. Dans les bases de données, cela se nomme des jointures de tables.

Pour faire les jointures, nous indiquerons dans nos instructions SQL la colonne qui sera utilisée pour faire la jointure.

Il existe plusieurs types de jointures en fonction de ce que tu recherches. Les jointures possibles sont :

* inner join
* left join
* right join
* full outer join
* cross join

![](joins/PostgreSQL-Joins.png)

Dans le cadre du cours, nous étudierons le inner join, left/right join et le full outer join.

### Inner join

![](joins/PostgreSQL-Join-Inner-Join.png)

Le inner join est la jointure la plus commune qui nous permet de rejoindre les informations communes entre deux tables.

```sql
SELECT
    *
FROM
    table1
INNER JOIN
    table2 ON table1.id_common = table2.id_common;
```

### Left/Right join

![](joins/PostgreSQL-Join-Left-Join.png)
![](joins/PostgreSQL-Join-Left-Join-with-Where.png)

La jointure gauche/droite permet d'avoir tous les éléments d'une table avec des informations possiblement vides d'une deuxième table. Il est aussi possible d'avoir une "soustraction" pour avoir seulement les éléments d'une première table ne se retrouvant pas dans une deuxième table.

```sql
SELECT
    *
FROM
    table1
LEFT OUTER JOIN 
    table2 ON table1.id_common = table2.id_common;
WHERE -- On ajoute le WHERE si on veut soustraire de la table 1 
    table2.column is null;
```

### Full outer join

![](joins/PostgreSQL-Join-Full-Outer-Join.png)
![](joins/PostgreSQL-Join-Full-Outer-Join-with-Where.png)

La jointure pleine permet d'avoir toutes les lignes des deux tables avec des éléments possiblement NULL quand il n'y a pas eu de corrélation. Il est aussi possible d'avoir seulement les éléments uniques à chaque table.

```sql
SELECT
    *
FROM
    table1
FULL JOIN 
    table2 ON table1.id_common = t2.id_common
WHERE -- On ajoute le WHERE si on veut soustraire des deux tables
    table1.column is null or table2.column is null;
```

## Dictionnaire Python

* Le dictionnaire est une autre collection comme les listes de Python.
* Chaque élément contient deux parties : une clé et une valeur (key-value pair).
* La clé est utilisée pour repérer l'élément dans la collection.
* Les clés sont uniques.
* Le dictionnaire représente ses key-value avec un `:` entre chacun et les inclus dans des accolades `{}`.

```python
telephone = {'Marie':'444-1111', 'Bob':'444-2222', 'Alice':'444-3333'}
```

## Accès au dictionnaire
* Les éléments du dictionnaire sont accéder avec les clés entre crochets (comme une liste).
* Les opérateurs `in` et `not in` permettent de déterminer si une clé existe.
* On accède aux éléments avec les `[]`.
* La fonction `len` permet de déterminer le nombre d'éléments

```python
telephone = {'Marie':'444-1111', 'Bob':'444-2222', 'Alice':'444-3333'}
print(telephone['Marie'])
print('Bob' in telephone)

print(len(telephone)) # Affiche 3
```

## Modification d'un dictionnaire

* On ajoute dans un dictionnaire avec l'assignation d'une nouvelle clé.
* On détruit un élément avec le mot clé `del`.

```python
telephone = {'Marie':'444-1111', 'Bob':'444-2222', 'Alice':'444-3333'}
telehphone['Corinne'] = '444-1111' # Même valeur que Marie et c'est ok

del telephone['Bob']
```

## Les méthodes des dictionnaires

| Nom       | Description                                                              |
|-----------|--------------------------------------------------------------------------|
| clear()   | Vide le dictionnaire.                                                    |
| get(key)  | Retourne la valeur associée avec la clé. Ne génère pas d'erreur.           |
| items()   | Renvoie une séquence de tuple de (key, value)                            |
| keys()    | Retourne toutes les clés.                                                |
| pop(key)  | Retourne la valeur associée avec la clé. Enlève l'élément du dictionnaire. |
| popitem() | Retourne un tuple (key, value) aléatoire et l'enlève du dictionnaire.    |
| values()  | Retourne les valeurs des éléments.                                       |

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

## L'exploitation et l'analyse de données avec pandas

Pandas est une librairie Python pour l'analyse et la science des données. Elle permet d'importer des données, d’appliquer des transformations et d'en sortir des résultats. C'est un outil indispensable dans le monde de la science des données.

### Series & Dataframe
Les structures de bases de pandas sont les `Series` et les `Dataframe`. Les `Series` sont des données d'une dimension d'un seul type de données et qui sont à identifier avec un index qui identifie chaque "ligne" de données. Les données de la série sont basées sur un tableau `NumPy`.

Un `Dataframe` est constitué de plusieurs `Series` qui partagent les mêmes index pour créer ce qui ressemble à une table. Les colonnes peuvent être nommées et chaque ligne partage un index.

```python
import pandas as pd # L'alias pd est toujours utilisé pour pandas

# Création d'un Dataframe
df = pd.DataFrame(
    {
        "Name": [
            "Braund, Mr. Owen Harris",
            "Allen, Mr. William Henry",
            "Bonnell, Miss. Elizabeth",
        ],
        "Age": [22, 35, 58],
        "Sex": ["male", "male", "female"],
    }
)

df

# Sélection d'une "colonne" qui affiche le 
df["Age"]
```

### Jointure de Dataframe avec `merge`

Comme pour les tables de base de données, il est possible de faire des jointures de `Dataframe` avec la méthode `merge` de pandas. Celle-ci va prendre les informations des deux `Dataframe`, le type de jointure et la colonne de jointure de chaque `Dataframe` et construire un nouveau `Dataframe` avec le résultat de la jointure.

```python
df1 = pd.DataFrame({'employee': ['Bob', 'Jake', 'Lisa', 'Sue'],
                    'group': ['Accounting', 'Engineering', 'Engineering', 'HR']})
df2 = pd.DataFrame({'employee': ['Lisa', 'Bob', 'Jake', 'Sue'],
                    'hire_date': [2004, 2008, 2012, 2014]})
display(df1, df2)

df3 = pd.merge(df1, df2)
display(df3)
```