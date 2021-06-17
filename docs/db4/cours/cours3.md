---
title: Structures de données et gestion d'informations
sidebar_label: 3 - Gestion de données
---

## Liens vers les fichiers
* [Pyhton Notebook](pathname:///DB4-Cours3.ipynb)
* [address.csv](pathname:///address.csv)
* [iris.json](pathname:///iris.json)

## Liste en compréhension

Une liste en compréhension est un raccourci syntaxique pour créé des liste. Cela permet de faire ce qui est habituellement dans une boucle sur une seule ligne.

```python
squares = []
for x in range(10):
    squares.append(x**2)

# Équivalent avec une liste en compréhension
squares = [x**2 for x in range(10)]
```

## Ajout de condition ou de boucle imbriqués

Il est possible d'avoir après le `for` initial d'autre `for` ou des conditionnelles `if`.

```python
combs = []
for x in [1,2,3]:
    for y in [3,1,4]:
        if x != y:
            combs.append((x, y))

# Équivalent
combs = [(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]
```

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


## Programmation orientée-objet

* La programmation orientée-objet (POO) est un paradigme de programmation qui permet de conceptualiser des problèmes complexes d'une manière plus humaine.
* On considère les éléments du problème comme étant des entités distinctes (des objets) qui pourront évoluer face à la problématique.
* Cela vient en contraste à la programmation procédurale qui se base sur le flux séquentiel des instructions et de l'utilisation de fonctions avec des entrées et sorties bien définies.

## Les objets

* Un objet représente deux informations :
  * Les données (attributs, variables)
  * Les comportements (méthodes, fonctions)

Par exemple, une alarme aura les informations suivantes:

Attributs:
* current_second (0–59)
* current_minute (0–59)
* current_hour (1–12)
* alarm_time (heure et minute valide)
* alarm_is_set (True, False)

Méthodes:
* set_time
* set_alarm_time 
* set_alarm_on
* set_alarm_off

## Classes
Une classe est un gabarit pour la construction d'objet. On peut aussi le voir comme une recette.

La classe est le code qui pourra décrire les différents objets qui sont créés à partir de la classe. Les objets créés à partir d'une classe sont nommés les instances de la classe.


## Exemple d'une classe

La classe est indiquée par le bloc de code `class` qui va contenir différentes méthodes de la classe.

```python
import random

# Simulation d'une pièce de monaie

class Coin:
    
    # __init__ initialise a 'Face'.
    
    def __init__(self):
        self.sideup = 'Face'
    
    def toss(self):
        # Génération aléatoire de nombre pour
        # "lancer" la pièce
        if random.randint(0, 1) == 0:
            self.sideup = 'Face'
        else:
            self.sideup = 'Pile'

    # Retourne l'état courant de la pièce
    
    def get_sideup(self):
        return self.sideup


```

## Méthodes d'une classe

* Les méthodes sont des définitions de fonctions à l'intérieur d'une classe.
* Chaque fonction doit recevoir le paramètre obligatoire `self`. Le `self` fait référence à l'instance de l'objet à manipuler.

* La méthode `__init__` est spéciale, car c'est la méthode qui sera appelée à l'initialisation d'une nouvelle instance (un objet) de la classe. Elle permet donc d'initialiser les différentes données de l'instance.

* Les attributs sont attachés au `self` et peuvent être ensuite modifié en utilisant l'opérateur `.`.

## Création d'objets à partir d'une classe
Suivant l'exemple de la classe `Coin`:

```python
def main():
    # Création de l'objet avec la méthode init
    my_coin = Coin()

    # Affiche l'état de la pièce
    print('This side is up:', my_coin.get_sideup())

    # Lance la pièce
    print('I am tossing the coin...')
    my_coin.toss()

    # Affiche l'état de la pièce
    print('This side is up:', my_coin.get_sideup())
    
main()

```

## Attributs privés
Il est possible de cacher les attributs pour que ceux-ci ne soient pas accessibles à l'extérieur de la classe.

```python
import random

class Coin:

    def __init__(self):
        self.__sideup = 'Heads'

    def toss(self):
        if random.randint(0, 1) == 0:
            self.__sideup = 'Heads'
        else:
            self.__sideup = 'Tails'

    def get_sideup(self):
        return self.__sideup
```

Les attributs avec deux tirets bas seront cachés à un accès public.

## Multiple instance
Chaque objet aura ses propres valeurs dans les attributs.

```python

def main():
    coin1 = Coin()
    coin2 = Coin()
    coin3 = Coin()

    print('I have three coins with these sides up:')
    print(coin1.get_sideup())
    print(coin2.get_sideup())
    print(coin3.get_sideup())
    print()
    
    print('I am tossing all three coins...')
    print()
    coin1.toss()
    coin2.toss()
    coin3.toss()

    print('Now here are the sides that are up:')
    print(coin1.get_sideup())
    print(coin2.get_sideup())
    print(coin3.get_sideup())
    print()

main()

```

## Accesseurs et mutateurs

Pour avoir un meilleur contrôle sur les données des objets, on utilise habituellement des attributs privés et on expose des méthodes d'accès (get) et de mutation (set) pour travailler sur les attributs.

Par exemple, l'attribut `__sideup` de la classe `Coin` pourrait avoir la méthode `get_sideup` qui retourne la valeur de l'attribut et la méthode `set_sideup` qui reçoit et assigne une nouvelle valeur à l'attribut. Les méthodes d'accès et de mutations permettent d'ajouter de la validation à la modification d'attributs.

## SQLite avec Python

* [SQLite](https://sqlite.org/index.html) est une implémentation d'une base de données SQL à l'intérieur d'un fichier.

## Tables
Les informations d'une base de données sont regroupées en plusieurs tables de plusieurs colonnes. Chaque colonne porte un nom et peut contenir un type de donnée précise. Plusieurs lignes de données formeront l'information de la BD.

## Types des colonnes

* NULL - Valeur nulle.
* INTEGER - Entier signé.
* REAL - Valeur flottante.
* TEXT - Texte.
* BLOB - Donnée indéfinie.

## Création de tables

La création d'une nouvelle table demande de nommer la table, ses colonnes et le type de chacune des colonnes.

```sql
CREATE TABLE Client(
    nom TEXT,
    num_id INTEGER,
    solde REAL
);
```

## Ajout de données dans une table
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

## Chercher dans la table
La majorité des interactions avec une base de données est d'aller chercher de l'information à l'intérieur de celle-ci. La commande `SELECT` permet de faire des recherches dans les tables.

```sql
SELECT * from Client;

-- Le premier paramètre est les colonnes à afficher
SELECT nom,solde from Client;
```

## Condition de sélection
Il est possible de filtrer un `SELECT` avec l'option `WHERE`.

```sql
SELECT nom from Client WHERE solde < 0;
```

## Modification des lignes - Supprimer
La commande `DELETE` permet de supprimer des lignes.

```sql
-- Supprime toutes les lignes
DELETE FROM Client;

DELETE FROM Client WHERE solde < 0;

-- Supprime une table
DROP TABLE Client;
```

## Intrégration de SQL avec python
La librairie sqlite3 permet de se connecter à une BD SQLite (un fichier). À partir de là, on peut envoyer des commandes et recevoir les réponses de commandes SQL.

```python
import sqlite3
conn = sqlite3.connect("MaBD.db")

# C'est le curseur qui envoie les commandes et reçoit nos réponses.
cur = conn.cursor()

cur.close()
conn.close()
```

## Envoi de commande avec les curseurs
Les commandes sont écrites avec la méthode `execute` et écrite dans la base de données avec `commit` pour les actions modifiantes la BD.

```python
cur.execute("INSERT INTO Client VALUES('Jean', 24432, 2.634)")
conn.commit()
```

## Sélection de lignes avec les curseurs
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

## Requêtes vers des API REST

* Une méthode courante d'acquisition de données est l'utilisation d'API (Application Programming Interface) de type REST.
* Cette méthode permet de faire une requête à un site web avec des paramètres données et de recevoir une réponse en JSON.

## Librairie requests

* Pour faire des requêtes WEB avec python, la librairie [request](https://docs.python-requests.org/en/master/) est utilisé.

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

## Les requêtes web et les règles du REST

* Le principe des requêtes REST est d'avoir les paramètres dans l'URL qui est utilisé pour faire la requête.
* Le chemin de l'application permet de recevoir seulement l'information voulu.

## Exemple avec JSONPlaceholder

* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) est un site simple avec un API rest qui peut être utilisé pour tester nos requêtes.

## Routes

* Les différents chemin sont nommé routes et ceux-ci font partie d'une arborescence.
* Par exemple, JSONPlaceholder à les routes suivantes :
    * `/posts` vers tous les articles sauvegardés
    * `/posts/1` le nombre 1 permet de sélectionner un article en particulier
    * `/posts/1/comments` la continuation de la route avec `comments` permet d'aller chercher les commentaire de l'article spécifié.