---
title: Sets, dictionnaires et format de fichiers de données
sidebar_label: 7 - Datetime, Numpy, Pandas
sidebar_position: 7
---


## Date et temps

Les données de date et d'heure se présentent sous plusieurs formes, dont nous discuterons ici :

- Les *timestamps* font référence à des moments particuliers dans le temps (par exemple, le 4 juillet 2015 à 7h00).
- *Intervalles de temps* (time intervals) et *périodes* (periods) font référence à une durée entre un début et une fin particuliers ; par exemple, l'année 2015. Les périodes font généralement référence à un cas particulier d'intervalles de temps dans lesquels chaque intervalle est de longueur uniforme et ne se chevauche pas (par exemple, des périodes de 24 heures comprenant des jours).
- *Delta de temps* (timedelta) ou *durées* font référence à une durée exacte (par exemple, une durée de 22,56 secondes).

### Les modules `datetime` et `dateutil`

Les modules `datetime` et `dateutil` permettent de créé des objets représentant les temps et date mentionnée plus haut.

```python
from datetime import datetime
simpledate = datetime(year=2015, month=7, day=4)
```

[Documentation de `datetime`](https://docs.python.org/3/library/datetime.html)

Le `dateutil` contient des utilitaires pour facilité l'utilisation de date.

```python
from dateutil import parser
simpledate = parser.parse("4th of July, 2015")
```

[Documentation de `dateutil`](https://dateutil.readthedocs.io/en/stable/)

Les datetime sont intéressants pour une représentation facile des dates, mais ça ne fonctionne pas facilement pour une liste ou un range.

### Numpy et `datetime64`
Pour pallier à la situation, NumPy à incorporer le type `datetime64` pour pouvoir mieux manier les dates pour représentation en index ou comme liste. Il est donc possible de faire une date et de le travailler comme un tableau.

```python
import numpy as np
date = np.array('2015-07-04', dtype=np.datetime64)
display(date) # array(datetime.date(2015, 7, 4), dtype='datetime64[D]')

display(date + np.arange(12))
# array(['2015-07-04', '2015-07-05', '2015-07-06', '2015-07-07',
#       '2015-07-08', '2015-07-09', '2015-07-10', '2015-07-11',
#       '2015-07-12', '2015-07-13', '2015-07-14', '2015-07-15'], dtype='datetime64[D]')
```

Les `datetimes64` sont aussi capable de parsing par défaut.

```python
np.datetime64('2015-07-04')
```

### Connexion à des bases de données SQL / SQLite

Les connexions de pandas à des bases de données se font par l'intermédiaire de `SQLAlchemy`, une librairie de Python pour la connexion à des BD SQL. Il faut donc établir un engin de connexion qui sera utilisé par la fonction de lecture/écriture.

```python
from sqlalchemy import create_engine, text

# SQLite peut exister dans la mémoire avec :memory: ou on peut lire un fichier existant
engine = create_engine("sqlite:///SQLiteBD.db")

df = pd.read_sql_table('TableName', engine)

# Il est aussi possible de recevoir le résultat d'une requête spécifique
df2 = pd.read_sql(text('select * from TableName where param > 0'), engine)
```

L'engin de connexion doit avoir l'URL de la base de données. Vous pouvez avoir la liste des [connexions disponible ici](https://docs.sqlalchemy.org/en/14/core/engines.html#database-urls).

```python
# Exemple de connection avec une base de donnée postgres
engine1 = create_engine('postgresql://username:password@server/databasename')
conn = engine1.connect()
df = pd.read_sql_table('TableName', conn)
```


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

## Autres types de fichiers

## Fichier Excel

Excel est un tableur qui permet d'avoir des informations dans des feuilles de calculs qui sont ensuite séparées par des cellules identifiées par une ligne et une colonne.

## Fichier SQLite

* [SQLite](https://sqlite.org/index.html) est une implémentation d'une base de données SQL à l'intérieur d'un fichier.
* Cette implémentation est une version extrêmement simplifiée de ce que nous donne une SGBD mais permet de facilement transmettre de l'information sous forme de tables.

### Types des colonnes

* NULL - Valeur nulle.
* INTEGER - Entier signé.
* REAL - Valeur flottante.
* TEXT - Texte.
* BLOB - Donnée indéfinie.

## Requêtes web vers des API REST

* Une méthode courante d'acquisition de données est l'utilisation d'API (Application Programming Interface) de type REST.
* Cette méthode permet de faire une requête à un site web avec des paramètres donnés et de recevoir une réponse en JSON.

#### Librairie requests

* Pour faire des requêtes WEB avec python, la librairie [request](https://docs.python-requests.org/en/master/) est utilisée.

```python
# import requests module
import requests
  
# Making a get request
response = requests.get('https://api.github.com')
  
# print response
print(response)
  
# print json content
print(response.json())
```

#### Les requêtes web et les règles du REST

* Le principe des requêtes REST est d'avoir les paramètres dans l'URL qui est utilisée pour faire la requête.
* Le chemin de l'application permet de recevoir seulement l'information voulue.

#### Exemple avec JSONPlaceholder

* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) est un site simple avec un API REST qui peut être utilisé pour tester nos requêtes.

#### Routes

* Les différents chemins sont nommés routes et ceux-ci font partie d'une arborescence.
* Par exemple, JSONPlaceholder à les routes suivantes :
    * `/posts` vers tous les articles sauvegardés
    * `/posts/1` le nombre 1 permet de sélectionner un article en particulier
    * `/posts/1/comments` la continuation de la route avec `comments` permet d'aller chercher les commentaires de l'article spécifié.

## Extraction de données avec pandas

[Référence](https://pandas.pydata.org/docs/user_guide/io.html#io)

Les fonctions suivantes sont disponibles pour lecture/écriture de fichiers externe :

* CSV - `read_csv` / `to_csv`
* JSON - `read_json` / `to_json`
* Excel - `read_excel` / `to_excel`
* SQL - `read_sql` / `to_sql`

Chaque fonction à ses propres options pour configurer les situations particulières entourant le type de fichiers. L'utilisation habituelle ressemble à :

```python
# Extraction du DataFrame
df = read_csv('fichier.csv')

# Transformation des données ou analyse
results = df.describe()

# Chargement des données transformé
results.to_csv('new_fichier.csv')
```