---
title: Procédures ETL - Fichiers de données externe avec pandas - Principe des SGBD
sidebar_label: 5 - ETL, source externe et SGBD
sidebar_position: 5
---

## ETL - Extract, Transform, Load

Dans le monde de la science des données, la majorité des travaux demande d'utiliser le processus ETL. Les étapes sont les suivantes :

* Extract - Extraction (lecture des données de la source originale)
* Transform - Transformer (modifier) les données pour filtrer/ajouter des informations ou en assurer la qualité 
* Load - Charger (sauvegarder) les données dans une destination (possiblement la source originale)

## Sources de données externes pour pandas

Nous avons étudié comment pandas travaille avec des DataFrame comme structure de données. Pour faciliter la création de ce genre de base de données, il est possible d'extraire les données de sources externes à pandas.

### Format des fichiers pour des données externes

Pandas est capable de lire d'une base de donnée SQL (nous verrons plus loin comment). Pandas est aussi capable d'extraire des DataFrame de plusieurs autres types de fichiers. Nous regarderons premièrement le format de chacun de ses fichiers.

### Fichier CSV - Comma-separated values

* Le CSV est un fichier texte qui délimite ses informations comme un tableur.
* Chaque ligne de texte est une entrée.
* Chaque ligne contient des "colonne" qui sont séparées par des virgules.

```
Name,Email,Phone Number,Address
Bob Smith,bob@example.com,123-456-7890,123 Fake Street
Mike Jones,mike@example.com,098-765-4321,321 Fake Avenue
```

### JSON - JavaScript Object Notation

* Représente un dictionnaire sous forme de texte.
* https://www.json.org/
* Un document qui permet de formater des collections en fichier texte pour transmission facile.
* N'a pas de lien fort avec JavaScript (malgré son nom).
* Permets de facilement imbriquer des informations.

#### Exemple JSON
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

### Fichier Excel

Excel est un tableur qui permet d'avoir des informations dans des feuilles de calculs qui sont ensuite séparées par des cellules identifiées par une ligne et une colonne.

### Fichier SQLite

* [SQLite](https://sqlite.org/index.html) est une implémentation d'une base de données SQL à l'intérieur d'un fichier.
* Cette implémentation est une version extrêmement simplifiée de ce que nous donne une SGBD mais permet de facilement transmettre de l'information sous forme de tables.

#### Types des colonnes

* NULL - Valeur nulle.
* INTEGER - Entier signé.
* REAL - Valeur flottante.
* TEXT - Texte.
* BLOB - Donnée indéfinie.

### Requêtes web vers des API REST

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

### Extraction de données avec pandas

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

#### Connexion à des bases de données SQL / SQLite

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

## Principes des SGBD

Le SGBD apporte plusieurs éléments qui n'étaient pas possibles dans la sauvegarde de données.

### Intégrité sémantique

Une contrainte d'intégrité sémantique (semantic integrity constraint)
ou simplement contrainte d'intégrité est une règle qui doit toujours être respectée par les données de la BD. Par exemple, "Le solde d'un compte ne peut être négatif"

### Contrôle de concurrence

Empêcher les effets indésirables de transactions concurrentes. Par exemple, deux connexions qui retirent d'un même compte pourrait avoir un impact sur le solde si traité sans considération spéciale.

### Fiabilité

Assurer que les données ne deviennent pas corrompues suite à une panne ou être capable de revenir d'un état incohérent.

### Sécurité

Utilisateurs/rôles pour délimiter les droits disponibles. Chiffrement (encryption) des données.

### Gestion de transactions

Présenter les opérations comme étant à l'intérieur d'une transaction qui permet d'assurer les propriétés ACID.

* Atomicité - Que la transaction est accomplie au complet ou pas du tout.
* Cohérence - Que la transaction se termine avec la base de données dans un état valide.
* Isolation - Que la transaction soit isolée entre d'autres transactions qui travaillent sur les mêmes données pour faire le contrôle de concurrence.
* Durabilité - Que la transaction soit assurée d'être gardée si elle a été complétée, même en cas de panne subséquente.
