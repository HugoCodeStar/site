---
title: Date, Visualisation et widgets
sidebar_label: 8 - Visualisation
sidebar_position: 8
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

## Ajout de widgets interactif

La libraire `pywidgets` permet d'avoir des contrôles interactifs pouvant être modifiés. En jumelant les contrôles avec des graphiques, nous avons une visualisation de tableau de bord interactif.

Comme les autres librairies, la librairie se renomme `widgets` pour faciliter son utilisation.

```python
import ipywidgets as widgets
```

### Premier contact : `interact`

La méthode la plus simple d'utiliser les widgets et d'utiliser sa méthode `interact` qui va créée automatiquement les widgets pour nous.

La méthode reçoit une fonction et les paramètres variables de la fonction.

```python
from ipywidgets import interact

# Une fonction de notre choix qui retourne le résulat voulu
def f(x, y):
    return 3 * x + y

# La méthode interact reçoit la fonction et on lui envoie les paramètres possible

interact(f, x=10, y=5)
```

En fournissant une valeur initiale, un contrôle est automatiquement généré. Le type de données envoyées définit le contrôle créé.

Il est aussi possible de fournir les configurations du contrôle.

```python
# Création d'un wigdet (spécifiquatin plus tards)
mywidget = widgets.IntSlider(min=-10, max=30, step=1, value=10)

interact(f, x=mywidget)
```
#### Exemple avec un graphique interactif

```python
import matplotlib.pyplot as plt
import numpy as np

def f(m, b):
    plt.grid() # Ajout d'un grillage
    x = np.linspace(-10, 10, num=1000)
    plt.plot(x, m * x + b)
    plt.ylim(-5, 5)
    plt.show()


interact(f, m=(-2.0, 2.0), b=(-3, 3, 0.5))
```

### Création de contrôles

Les contrôles permettent de créé des éléments interactifs allant d'une valeur numérique, d'une zone de texte jusqu'à la sélection d'une date ou d'une couleur.

[Documentation des différents widgets](https://ipywidgets.readthedocs.io/en/stable/examples/Widget%20List.html#)
