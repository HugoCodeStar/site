---
title: Jointures/regroupement de tables & pandas
sidebar_label: 4 - Jointures & pandas
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
    table2 ON table1.id_common = t2.id_common;
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
    table2 ON table1.id_common = t2.id_common;
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
    table2 ON table1.id_common = t2.id_common;
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
* La fonction `len` permet de déterminer le nombre d'éléments

```python
telephone = {'Marie':'444-1111', 'Bob':'444-2222', 'Alice':'444-3333'}
print('Bob' in telephone)

print(len(telephone)) # Affiche 4
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