---
title: Sets, dictionnaires et format de fichiers de données
sidebar_label: 7 - Set, dictionnaire, csv et JSON
sidebar_position: 7
---

## Set

* Un `set` est une collection, semblable à une liste, mais avec la distinction que tous les éléments doivent être unique.
* L'ordre des éléments est aussi laissé à l'implémentation. Il n'existe pas d'indice pouvant identifier l'emplacement de l'élément dans la collection.

## Création d'un set

* Le set peut être créé vide avec un constructeur `set()` ou à partir d'une autre collection existante.

```python
mon_set = set()
autre_set = set([4, 65, 34, 3, 4]) # Le 4 s'y retrouvera qu'une fois.
encore_set = set('allo') # Le 'l' ne sera pas en 2 copies.
dernier_set = set(['un', 'deux', 'trois']) # Contient chaque mot.
```

* Il est aussi possible d'utiliser les accolades pour construire un `set`.

```python
curly_set = {'allo', 'salut', 'allo', 'bonjour'}
print(curly_set) # Affiche {'salut', 'allo', 'bonjour'}
```

## Accès au set

* La taille du set peut être connue avec `len`.
* On ajoute un élément avec la méthode `add`.
* On ajoute plusieurs éléments avec la méthode `update`.

```python
mon_set = set()
mon_set.add(3)
mon_set.add(4)
mon_set.update([4, 5, 6])

print(len(mon_set)) # Affiche 4
```

## Soustraction au set

* Les méthodes `remove` et `discard` enlèvent des éléments du set.
* `remove` soulève un `KeyError` si l'élément n'est pas trouvé.
* La méthode `clear` permet de vider le set.

```python
mon_set = set([4, 5, 6, 7])
mon_set.remove(4)

mon_set.remove(10) # KeyError
mon_set.discard(10)
```

## Trouvé de éléments dans un set

* L'opérateur `in` et `not in` permet de faire la détection d'un élément dans un set.

```python
mon_set = set([1, 2, 3])

if 2 in mon_set:
    print("Trouvé!")
```

* La boucle `for` peut itérer sur un set. L'ordre des éléments ne peut pas être connu d'avance.

```python
curly_set = {'allo', 'salut', 'allo', 'bonjour'}

for item in curly_set:
  print(item)
```

## Opération sur les sets

* On trouve l'union de deux sets avec la méthode `union`.
* On trouve l'intersection de deux sets avec la méthode `intersection`.
* On trouve la différence de deux sets avec la méthode `difference`.
* On trouve la différence symétrique (ceux exclusifs à chaque set) avec la méthode `symmetric_difference`.

```python
set1 = set([1, 2, 3])
set2 = set([3, 4, 5])
set3 = set1.union(set2)

print(len(set3)) # Affiche 5
```

## Dictionnaire

* Le dictionnaire est une autre collection.
* Chaque élément contient deux parties : une clé et une valeur (key-value pair).
* La clé est utilisée pour repérer l'élément dans la collection.
* Les clés sont uniques.
* Le dictionnaire représente ses key-value avec un `:` entre chacun et les inclus dans des accollades `{}`.

```python
telephone = {'Marie':'444-1111', 'Bob':'444-2222', 'Alice':'444-3333'}
```

## Accès au dictionnaire
* Les éléments du dictionnaire sont accéder avec les clés entre crochets (comme une liste).
* Comme les set, les opérateurs `in` et `not in` permettent de déterminer si une clé existe.
* La fonction `len` permet de déterminer le nombre d'éléments

```python
telephone = {'Marie':'444-1111', 'Bob':'444-2222', 'Alice':'444-3333'}
if 'Bob' in telephone:
    print(telephone['Bob']) # Affiche '444-2222'

print(len(telephone)) # Affiche 4
```

* La boucle `for` permet d'avoir les `key` du dictionnaire

```python
telephone = {'Marie':'444-1111', 'Bob':'444-2222', 'Alice':'444-3333'}

for item in telephone:
  print(item) # Affiche en ordre Marie, Bob, Alice
  print(telephone[item]) # Affiche les numéro 444-1111, 444-2222, 444-3333
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

## Les formats des fichiers de données
* Dans le domaine des sciences, deux fichiers de données sont populaires:
  * CSV - Comma-separated values
  * JSON - JavaScript Object Notation

* Python nous fournit des modules pour travailler avec ses deux types de fichiers.

## CSV - Comma-separated values

* Le CSV est un fichier texte qui délimite ses informations comme un tableur.
* Chaque ligne de texte est une entrée.
* Chaque ligne contient des "colonne" qui sont séparés par des virgules.

```
Name,Email,Phone Number,Address
Bob Smith,bob@example.com,123-456-7890,123 Fake Street
Mike Jones,mike@example.com,098-765-4321,321 Fake Avenue
```

## Module csv
* Le module csv contient la fonctionnalité qui permet de lire un fichier csv et le convertir en collection de Python.

```python
import csv

# Avec reader on convertie en liste
with open('address.csv', newline='') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        print(row)

# Avec DictReader on convetie en dictionnaire
with open('address.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        print(row)
```

## JSON - JavaScript Object Notation

## Module json
* https://www.json.org/
* Un document qui permet de formater des collections en fichier texte pour transmission facile.
* N'a pas de lien fort avec JavaScript (malgré son nom).
* Permets de facilement imbriquer des informations.

## Exemple JSON
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 27,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
  },
  "phoneNumbers": ["212 555-1234" ,"646 555-4567"],
  "children": [],
  "spouse": null
}
```

## Module json
* Le module json nous permet de lire un fichier ou une chaine json et la convertie en objet Python.
* La fonction `load` permet de convertir un fichier ouvert.
* La fonction `loads` permet de convertir une chaine de caractère décrivant un objet JSON.

```python
with open('iris.json', newline='') as jsonfile:
    reader = json.load(jsonfile)
    for row in reader:
        print(row)

# json.loads permet de parcourir une chaine
info = json.loads('{"name":"mkyong.com","messages":["msg 1","msg 2","msg 3"],"age":100}')
print(info)
```

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
