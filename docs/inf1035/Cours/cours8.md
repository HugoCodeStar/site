---
title: Librairie et Base de données SQL avec SQLite
sidebar_label: 8 - SQL et visualisation
sidebar_position: 8
---

# But

* Un langage de requête qui permet de faire des requêtes complexes sans avoir beaucoup de logique programmable à faire.
* Le Structured Query Language (SQL) est le langage utilisé pour communiqué avec les bases de données.
* Plusieurs BD SQL existent (Postgres, Oracle, MariaDB). Nous utiliserons SQLite qui nous permet de travailler rapidement avec des bases de données sans infrastructures.

# Tables
Les informations d'une base de données sont regroupées en plusieurs tables de plusieurs colonnes. Chaque colonne porte un nom et peut contenir un type de donnée précise. Plusieurs lignes de données formeront l'information de la BD.

# Types des colonnes

* NULL - Valeur nulle.
* INTEGER - Entier signé.
* REAL - Valeur flottante.
* TEXT - Texte.
* BLOB - Donnée indéfinie.

# Création de tables

La création d'une nouvelle table demande de nommer la table, ses colonnes et le type de chacune des colonnes.

```sql
CREATE TABLE Client(
    nom TEXT,
    num_id INTEGER,
    solde REAL
);
```

# Ajout de données dans une table
L'ajout d'une ligne dans une table se fait avec la commande `INSERT`.

```sql
INSERT INTO Client
    VALUES ('Bob', 34252, 2.34);

-- On peut spécifier quelle colonne remplir
INSERT INTO Client(nom, num_id)
    VALUES ('Bob', 34252);

INSERT INTO Client
    VALUES ('Annie', 21513, 346.25),
        ('Julie', 135153, 2352.43);
```

# Chercher dans la table
La majorité des interactions avec une base de données est d'aller chercher de l'information à l'intérieur de celle-ci. La commande `SELECT` permet de faire des recherches dans les tables.

```sql
SELECT * from Client;

-- Le premier paramètre est les colonnes à afficher
SELECT nom,solde from Client;
```

# Condition de sélection
Il est possible de filtrer un `SELECT` avec l'option `WHERE`.

```sql
SELECT nom from Client WHERE solde < 0;
```

# Modification des lignes - Supprimer
La commande `DELETE` permet de supprimer des lignes.

```sql
-- Supprime toutes les lignes
DELETE FROM Client;

DELETE FROM Client WHERE solde < 0;

-- Supprime une table
DROP TABLE Client;
```

# Intrégration de SQL avec python
La librairie sqlite3 permet de se connecter à une BD SQLite (un fichier). À partir de là, on peut envoyer des commandes et recevoir les réponses de commandes SQL.

```python
import sqlite3
conn = sqlite3.connect("MaBD.db")

# C'est le curseur qui envoie les commandes et reçoit nos réponses.
cur = conn.cursor()

cur.close()
conn.close()
```

# Envoi de commande avec les curseurs
Les commandes sont écrites avec la méthode `execute` et écrite dans la base de données avec `commit` pour les actions modifiantes la BD.

```python
cur.execute("INSERT INTO Client VALUES('Jean', 24432, 2.634)")
conn.commit()
```

# Sélection de lignes avec les curseurs
```python
cur.execute('SELECT * FROM Client')

# Parcours avec un for
for e in cur:
    print(e)

# Gestion dans une liste
ma_liste = list(cur)

# Insertion dans une liste
res = cur.fetchall()
```

## Visualisation avec `matplotlib`

La librairie `matplotlib` est une librairie de visualisation basée sur les graphiques disponibles sous le logiciel et langages de programmation MATLAB. Cette librairie permet de construire des graphiques qui vont nous permettre de visualiser les données sur lesquelles nous avons travaillé.

`matplotlib` est la libraire de base que nous allons regarder, mais il existe des librairies de plus haut niveau avec des configurations qui facilite d'avoir des graphiques plus modernes. Les librairies sont :

* [Seaborn](https://seaborn.pydata.org)
* [Plotly/Dash](https://plotly.com)
* [Bokeh](https://bokeh.org)

### Importation

Comme Numpy et Pandas, matplotlib à son propre raccourci. On utilise la sous-librairie de graphisme avec le nom `plt`.

```python
import matplotlib.pyplot as plt
```

### Exemple initial
`matplotlib` permet de prendre des données et des présentés sous forme de graphique. Nous regarderons les graphiques précis, mais le début avec un exemple complet.

```python
import numpy as np
x = np.linspace(0, 10, 100)

fig = plt.figure() # Sauvegarde la figure pour enregistrement
plt.plot(x, np.sin(x), '-')
plt.plot(x, np.cos(x), '--');

# Sauvegarde d'une image de la figure
fig.savefig('my_figure.png')
```

### La fonction `plot` pour un premier affichage

Le plus simple est un graphique linéaire des données sur un axe X,Y qui sont reliés.

La méthode `plot` permet de présenter des séquences d'éléments représentant le X et le Y qui seront dessinés.

```python
# Génère 1000 valeurs de 0 à 10
x = np.linspace(0, 10, 1000)
# Dessine le graphique
plt.plot(x, np.sin(x));
```

### Configuration des graphiques

Plusieurs paramètres nommés sont disponibles pour configurer les graphiques.

La couleur
```python
plt.plot(x, np.sin(x - 0), color='blue')        # specify color by name
plt.plot(x, np.sin(x - 1), color='g')           # short color code (rgbcmyk)
plt.plot(x, np.sin(x - 2), color='0.75')        # Grayscale between 0 and 1
plt.plot(x, np.sin(x - 3), color='#FFDD44')     # Hex code (RRGGBB from 00 to FF)
plt.plot(x, np.sin(x - 4), color=(1.0,0.2,0.3)) # RGB tuple, values 0 to 1
plt.plot(x, np.sin(x - 5), color='chartreuse'); # all HTML color names supported
```

Le type de trait
```python
plt.plot(x, x + 0, linestyle='solid')
plt.plot(x, x + 1, linestyle='dashed')
plt.plot(x, x + 2, linestyle='dashdot')
plt.plot(x, x + 3, linestyle='dotted');

# For short, you can use the following codes:
plt.plot(x, x + 4, linestyle='-')  # solid
plt.plot(x, x + 5, linestyle='--') # dashed
plt.plot(x, x + 6, linestyle='-.') # dashdot
plt.plot(x, x + 7, linestyle=':');  # dotted
```

### Ajustement des axes

Plusieurs méthodes sont aussi disponibles dans la construction des axes et leurs étiquettes.

```python
plt.plot(x, np.sin(x))

plt.xlim(-1, 11)
plt.ylim(-1.5, 1.5)

plt.title("A Sine Curve")
plt.xlabel("x")
plt.ylabel("sin(x)")
```

### Ajout de légende
Les données peuvent être identifiées pour ensuite insérer une légende qui les identifie.

```python
plt.plot(x, np.sin(x), '-g', label='sin(x)')
plt.plot(x, np.cos(x), ':b', label='cos(x)')
plt.axis('equal')

plt.legend();
```

## Type de graphiques

### Données X,Y
Nous avons vu que la fonction `plot` permet de faire un graphique ligné. Il est aussi possible de changer sa configuration pour qu'elle n'affiche que les points de données.

```python
x = np.linspace(0, 10, 30)
y = np.sin(x)

plt.plot(x, y, 'o', color='black')
```

Des nuages de points sont donc possibles avec différents "marqueurs".

```python
rng = np.random.RandomState(0)
for marker in ['o', '.', ',', 'x', '+', 'v', '^', '<', '>', 's', 'd']:
    plt.plot(rng.rand(5), rng.rand(5), marker,
             label="marker='{0}'".format(marker))
plt.legend(numpoints=1)
plt.xlim(0, 1.8)
```

Pour des nuages de points plus complexes, la fonction `scatter` permet d'avoir une troisième information (couleur, taille, etc.) pour chaque point.

```python
rng = np.random.RandomState(0)
x = rng.randn(100)
y = rng.randn(100)
colors = rng.rand(100)
sizes = 1000 * rng.rand(100)

plt.scatter(x, y, c=colors, s=sizes, alpha=0.3,
            cmap='viridis')
plt.colorbar()  # show color scale
```

#### Exemple de nuages de points

```python
from sklearn.datasets import load_iris
iris = load_iris()
features = iris.data.T

plt.scatter(features[0], features[1], alpha=0.2,
            s=100*features[3], c=iris.target, cmap='viridis')
plt.xlabel(iris.feature_names[0])
plt.ylabel(iris.feature_names[1])
```

### Barre d'erreur

La méthode `errorbar` est capable de présenter des graphiques de barres d'erreur.

```python
x = np.linspace(0, 10, 50)
dy = 0.8
y = np.sin(x) + dy * np.random.randn(50)

plt.errorbar(x, y, yerr=dy, fmt='.k')
```

### Histogramme
Des diagrammes à barres sont aussi disponibles avec `hist`.

```python
data = np.random.randn(1000)
plt.hist(data)

# Ou avec plus d'option
plt.hist(data, bins=30, alpha=0.5,
         histtype='stepfilled', color='steelblue',
         edgecolor='none');
```

Les diagrammes à barres peuvent aussi représenter des données de 2 dimensions (heatmap) avec la méthode `hist2d`.

```python
mean = [0, 0]
cov = [[1, 1], [1, 2]]
x, y = np.random.multivariate_normal(mean, cov, 10000).T

plt.hist2d(x, y, bins=30, cmap='Blues')
cb = plt.colorbar()
cb.set_label('counts in bin')
```
