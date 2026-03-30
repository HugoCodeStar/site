---
title: Programmes à faire de l'atelier 9
sidebar_label: 9 - SQL Select
---

## Atelier 9 : requêtes SQL avec Northwind

Dans cet atelier, vous allez pratiquer les requêtes vues dans le cours 9 à partir de la base de données SQLite `northwind.db` située sur Moodle.

Vous pouvez importer le fichier dans le SQL Playground.

## Tables utiles pour cet atelier

La base `northwind.db` contient plusieurs tables. Pour cet atelier, les plus utiles sont :

### `Customers`

| Colonne | Description |
| -- | -- |
| `CustomerID` | identifiant du client |
| `CompanyName` | nom de l'entreprise |
| `City` | ville |
| `Country` | pays |

### `Orders`

| Colonne | Description |
| -- | -- |
| `OrderID` | identifiant de la commande |
| `CustomerID` | client associé à la commande |
| `OrderDate` | date de la commande |
| `ShipCountry` | pays de livraison |
| `Freight` | frais de transport |

### `Products`

| Colonne | Description |
| -- | -- |
| `ProductID` | identifiant du produit |
| `ProductName` | nom du produit |
| `CategoryID` | catégorie du produit |
| `UnitPrice` | prix unitaire |
| `UnitsInStock` | quantité en stock |

### `Categories`

| Colonne | Description |
| -- | -- |
| `CategoryID` | identifiant de la catégorie |
| `CategoryName` | nom de la catégorie |

### `Order Details`

| Colonne | Description |
| -- | -- |
| `OrderID` | identifiant de la commande |
| `ProductID` | identifiant du produit |
| `UnitPrice` | prix unitaire au moment de la commande |
| `Quantity` | quantité commandée |
| `Discount` | rabais appliqué |

## Exercice 1 : premières sélections

Écrivez les requêtes SQL pour :

1. Afficher toutes les colonnes de la table `Customers`.
2. Afficher seulement `CompanyName`, `City` et `Country` des clients.
3. Afficher les noms de produits (`ProductName`) et leur prix (`UnitPrice`).
4. Renommer la colonne `CompanyName` en `Entreprise` dans le résultat.

## Exercice 2 : valeurs uniques et tri

Écrivez les requêtes SQL pour :

1. Afficher la liste des pays uniques présents dans la table `Customers`.
2. Afficher la liste des villes uniques des clients, triées en ordre alphabétique.
3. Afficher les produits triés du plus cher au moins cher.
4. Afficher les commandes triées par `OrderDate`, de la plus récente à la plus ancienne.

## Exercice 3 : filtrage avec `WHERE`

Écrivez les requêtes SQL pour :

1. Afficher les clients qui habitent en `France`.
2. Afficher les clients qui habitent soit au `Canada`, soit aux `USA`.
3. Afficher les produits dont le prix est supérieur à `50`.
4. Afficher les produits dont le stock (`UnitsInStock`) est entre `1` et `20`.
5. Afficher les clients dont la ville commence par la lettre `B`.
6. Afficher les commandes livrées en `Brazil` avec des frais de transport supérieurs à `40`.

## Exercice 4 : agrégations simples

Écrivez les requêtes SQL pour :

1. Calculer le nombre total de clients.
2. Calculer le prix moyen des produits.
3. Trouver le produit le moins cher et le produit le plus cher.
4. Calculer la somme totale des frais de transport (`Freight`) de toutes les commandes.

## Exercice 5 : regroupements avec `GROUP BY`

Écrivez les requêtes SQL pour :

1. Compter le nombre de clients par pays.
2. Calculer le nombre de commandes par pays de livraison (`ShipCountry`).
3. Calculer le prix moyen des produits par catégorie (`CategoryID`).
4. Afficher uniquement les pays ayant plus de 5 clients.

## Exercice 6 : jointures simples

Écrivez les requêtes SQL pour :

1. Afficher le nom de l'entreprise (`CompanyName`) et la date de commande (`OrderDate`) en joignant `Customers` et `Orders`.
2. Afficher le nom des produits (`ProductName`) avec leur catégorie (`CategoryName`) en joignant `Products` et `Categories`.
3. Afficher les détails de commande avec :
   - le numéro de commande,
   - le nom du produit,
   - la quantité,
   - le prix unitaire.

## Exercice 7 : jointures et calculs

À partir des tables `Orders`, `Order Details`, `Products` et `Customers`, écrivez les requêtes SQL pour :

1. Afficher, pour chaque ligne de commande, le nom du client, le nom du produit et la quantité commandée.
2. Calculer le montant total de chaque ligne de commande avec la formule :

```sql
UnitPrice * Quantity * (1 - Discount)
```

3. Afficher les 10 lignes de commande ayant le montant total le plus élevé.

## Exercice 8 : requêtes plus complètes

Écrivez les requêtes SQL pour :

1. Calculer le nombre de commandes faites par chaque client.
2. Afficher les clients qui n'ont aucune commande.
3. Calculer le chiffre d'affaires total par produit.
4. Afficher les 5 produits ayant généré le plus grand chiffre d'affaires.
5. Calculer le chiffre d'affaires total par catégorie de produits.
