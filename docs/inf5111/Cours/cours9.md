---
title: NoSQL - Documents & Key-value
sidebar_label: 9 - Mongo & Redis
---

## NoSQL - Les alternatives SQL

* Les bases de données relationnelles sont une technologie performante depuis vingt ans, offrant la persistance, le contrôle de la concurrence et un mécanisme d'intégration.
* Les développeurs d'applications ont été frustrés par le décalage d'impédance entre le modèle relationnel et les structures de données en mémoire.
* Il y a un mouvement qui s'éloigne de l'utilisation des bases de données comme points d'intégration vers l'encapsulation des bases de données dans les applications et l'intégration via les services.
* Le facteur essentiel pour un changement dans le stockage des données était la nécessité de prendre en charge de gros volumes de données en s'exécutant sur des clusters. Les bases de données relationnelles ne sont pas conçues pour s'exécuter efficacement sur des clusters.
* NoSQL est un néologisme accidentel. Il n'y a pas de définition prescriptive - tout ce que vous pouvez faire est une observation des caractéristiques communes.
    * Ne pas utiliser le modèle relationnel
    * Fonctionne bien sur les clusters
    * Open source
    * Sans schéma
    * Adapté aux technologie webs


## Familles de bases de données NoSQL

Puisque le NoSQL est une familles de caractéristiques, plusieurs types de base de données tombe sous l'ombrelle du nom. Dans ce cours, nous regarderons 4 de ses types et leurs implémentation les plus populaires :

* Document avec MongoDB
* Clé-valeur avec redis
* Colonne-famille avec Cassandra
* Graphe avec Neo4J

Pour chaque famille, nous étudierons les avantages et la formulation de base des requêtes.

## Document store et MongoDB

Les documents sont le concept principal des bases de données documentaires. La base de données stocke et récupère des documents, qui peuvent être XML, JSON, BSON, etc. Ces documents sont des structures de données arborescentes hiérarchiques auto-descriptives qui peuvent être constituées de dictionnaires/map, de collections et de valeurs scalaires. Les documents stockés sont similaires les uns aux autres mais ne doivent pas nécessairement être exactement les mêmes. Les bases de données de documents stockent les documents dans la partie valeur du magasin clé-valeur ; considérez les bases de données de documents comme des magasins clé-valeur où la valeur est examinable. Voyons comment la terminologie se compare dans Oracle et MongoDB

| Oracle | Mongo |
| -- | -- |
| schema | database |
| table | collection |
| row | document |
| join | DBRef |

La cohérence dans la base de données MongoDB est configurée en utilisant les "replica sets" et en choisissant d'attendre que les écritures soient répliquées sur tous les esclaves ou sur un nombre donné d'esclaves. Chaque écriture peut spécifier le nombre de serveurs sur lesquels l'écriture doit être propagée avant de revenir comme réussie.

Les transactions, au sens traditionnel du SGBDR, signifient que vous pouvez commencer à modifier la base de données avec des commandes d'insertion, de mise à jour ou de suppression sur différentes tables, puis décider si vous souhaitez conserver les modifications ou non en utilisant la validation ou la restauration. Ces constructions ne sont généralement pas disponibles dans les solutions NoSQL : une écriture réussit ou échoué. Les transactions au niveau du document unique sont appelées transactions atomiques. Les transactions impliquant plus d'une opération ne sont pas possibles.

### Cas d'utilisation typique

#### Journalisation des événements
Les applications ont des besoins différents en matière de journalisation des événements ; au sein de l'entreprise, de nombreuses applications différentes souhaitent enregistrer des événements. Les bases de données de documents peuvent stocker tous ces différents types d'événements et peuvent agir comme un magasin de données central pour le stockage des événements. Cela est particulièrement vrai lorsque le type de données capturées par les événements ne cesse de changer. Les événements peuvent être divisés par le nom de l'application d'où provient l'événement ou par le type d'événement tel que order_processed ou customer_logged.

#### Systèmes de gestion de contenu, Plateformes de blogs

Étant donné que les bases de données de documents n'ont pas de schémas prédéfinis et comprennent généralement les documents JSON, elles fonctionnent bien dans les systèmes de gestion de contenu ou les applications pour la publication de sites Web, la gestion des commentaires des utilisateurs, les enregistrements des utilisateurs, les profils et les documents Web.

#### Analyse Web ou Analyse en temps réel

Les bases de données de documents peuvent stocker des données pour des analyses en temps réel; étant donné que certaines parties du document peuvent être mises à jour, il est très facile de stocker des pages vues ou des visiteurs uniques, et de nouvelles mesures peuvent être facilement ajoutées sans modification de schéma.

#### Applications de commerce électronique

Les applications de commerce électronique ont souvent besoin d'avoir un schéma flexible pour les produits et les commandes, ainsi que la possibilité de faire évoluer leurs modèles de données sans refactorisation coûteuse de la base de données ou migration des données.

### Mise en pratique

* https://www.mongodb.com/docs/manual/crud/
* https://www.mongodb.com/docs/manual/aggregation/
* https://www.mongodb.com/docs/guides/

## Key-value stores et redis

Un magasin clé-valeur est une simple table de hachage, principalement utilisée lorsque tous les accès à la base de données se font via une clé primaire. Pensez à une table dans un SGBDR traditionnel avec deux colonnes, telles que ID et NAME, la colonne ID étant la clé et la colonne NAME stockant la valeur. Dans un SGBDR, la colonne NAME est limitée au stockage de données de type String. L'application peut fournir un ID et une VALEUR et conserver la paire; si l'ID existe déjà, la valeur actuelle est écrasée, sinon une nouvelle entrée est créée.

| Oracle | redis |
| -- | -- |
| row | key-value |
| rowid | key |

La cohérence ne s'applique qu'aux opérations sur une seule clé, car ces opérations sont soit un GET, soit un PUT, soit un DELETE sur une seule clé. Des écritures optimistes peuvent être effectuées, mais sont très coûteuses à mettre en œuvre, car un changement de valeur ne peut pas être déterminé par le magasin de données.

Tous les magasins clé-valeur peuvent interroger par clé, et c'est à peu près tout. Si vous devez interroger en utilisant un attribut de la colonne de valeur, il n'est pas possible d'utiliser la base de données : votre application doit lire la valeur pour déterminer si l'attribut remplit les conditions.

Lors de l'utilisation de magasins clé-valeur, il faut beaucoup réfléchir à la conception de la clé. La clé peut-elle être générée à l'aide d'un algorithme ? La clé peut-elle être fournie par l'utilisateur (ID utilisateur, e-mail, etc.) ? Ou dérivé d'horodatages ou d'autres données pouvant être dérivées en dehors de la base de données ?

### Cas d'utilisation typique

#### Stockage des informations de session
Généralement, chaque session Web est unique et se voit attribuer une valeur sessionid unique. Les applications qui stockent l'ID de session sur disque ou dans un SGBDR bénéficieront grandement du passage à un magasin clé-valeur, car tout ce qui concerne la session peut être stocké par une seule requête PUT ou récupéré à l'aide de GET. Cette opération de requête unique la rend très rapide, car tout ce qui concerne la session est stocké dans un seul objet. 

#### Profils utilisateur, Préférences
Presque chaque utilisateur a un ID utilisateur, un nom d'utilisateur ou un autre attribut unique, ainsi que des préférences telles que la langue, la couleur, le fuseau horaire, les produits auxquels l'utilisateur a accès, etc. Tout cela peut être mis dans un objet, donc obtenir les préférences d'un utilisateur prend une seule opération GET. De même, les profils de produits peuvent être stockés.

#### Données du panier
Les sites Web de commerce électronique ont des paniers d'achat liés à l'utilisateur. Comme nous voulons que les paniers d'achat soient disponibles à tout moment, sur tous les navigateurs, machines et sessions, toutes les informations d'achat peuvent être mises dans la valeur où la clé est le `userid`.

### Mise en pratique

* https://www.tutorialspoint.com/redis/redis_commands.htm
* https://redis.io/docs/data-types/tutorial/