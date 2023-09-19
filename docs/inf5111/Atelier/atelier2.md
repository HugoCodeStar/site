---
title: Atelier de configuration pour BD
sidebar_label: 2 - Outils BD
---

## Étape 1 - Receuillir les outils

### Client

Installer un des outils suivants comme client de connection à la base de donné :

* [pgAdmin](https://www.pgadmin.org)
    * Demander un compte pour la connection au pgAdmin du cours
    * Information de connection sur la page Moodle du cours
* [DBeaver](https://dbeaver.com)
* [Datagrip](https://www.jetbrains.com/datagrip/)

### Postgres

Vous avec le choix d'installer une base de donnée local ou de la faire en infonuagique.

Lien pour l'installation local : https://www.postgresql.org/download/

#### Infonuagique : Railway app

Lien : https://railway.app

Railway offre des bases de données gratuite avec un nombre d'heure par mois. Tu peux même en créer une qui sera persistente pendant 24 heures.

## Étape 2 - Connection à la base de donné

Les informations à avoir pour la connection sont les suivantes :

* Adresse du serveur
* Port du serveur
* Username
* Password
* Nom de la base de donné

## Étape 3 - Importation d'une base de données existante

Une fois la connection établie, il faut ensuite importer la base de donnée existante. Nous utiliserons la base de données de [PostgreSQLTutorial](https://www.postgresqltutorial.com).

Vous avez deux moyens de faire l'importation :

* Fichier SQL à exécuter du site de cours
* En suivant le tutorial:
    1. [Téléchargement du sample database](https://www.postgresqltutorial.com/postgresql-getting-started/postgresql-sample-database/)
    2. [Chargement de la base de donnée](https://www.postgresqltutorial.com/postgresql-getting-started/load-postgresql-sample-database/)

Vous devriez avoir une base de donnée dvdrental avec des données à la fin du processus d'importation.

## Étape 4 - Requêtes SQL

![](dvdrentaldb.png)

Maintenant que la base de données est établie et connecté, tenter construire et faire les requêtes suivantes :

* Trouvez la liste des courriels de tous les clients.
* Trouvez les noms distinct des différentes catégories de film.
* Trouvez le noms des films en ordre croissant de durée.
* Trouvez moyenne payment fait pour une location.
