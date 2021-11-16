---
title: Librairie et Base de données SQL avec SQLite
sidebar_label: 10 - SQL et visualisation
sidebar_position: 10
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