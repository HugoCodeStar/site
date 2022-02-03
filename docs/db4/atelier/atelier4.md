---
title: Devoir Gestion de données Python
sidebar_label: Devoir Python
---

# Contexte du travail

Nous voulons étudier la proportion des cas des infections de COVID-19 parmi plusieurs tranches d'âges dans la région de la Corée du Sud.

Nous utiliserons un set de données fourni par le KCDC (Korea Centers for Disease Control & Prevention).

Nous voulons avoir une idée de la proportion de gens avec des cas confirmés et de décès par tranche d'âge.

Le set de donnée est disponible sur [Kaggle](https://www.kaggle.com/kimjihoo/coronavirusdataset)

## Liens vers les fichiers utilisés du set de données
* [Time.csv](pathname:///Time.csv)
* [TimeAge.csv](pathname:///TimeAge.csv)

# Set de données

Deux fichiers fournis sont utiles pour notre recherche.

## Time.csv

Ce fichier est un fichier qui indique pour chaque jour le nombre de cas confirmé et le nombre de décès pour chaque jour. Nous allons vouloir ajouter à ce set  de donnée les pourcentages de chaque tranche d'âge.

## TimeAge.csv

Ce fichier contient le nombre de cas confirmé et le nombre de décès pour chaque jour et chaque tranche d'âge. Nous allons vouloir intégrer les informations de ce fichier avec le fichier. `Time.csv`

# But du travail

En utilisant les techniques et les librairies vues en classe, nous voulons faire les opérations suivantes :

* Extraire les informations des fichiers `Time.csv` et `TimeAge.csv` dans un programme en Python.
* Transformer les données pour regrouper les informations `Time.csv` `TimeAge.csv` en une seule table/Dataframe. La table doit avoir les caractéristiques suivantes :
    * Chaque ligne représente une date distincte.
    * Chaque ligne contient toutes les informations des colonnes pertinentes du fichier `Time.csv`
    * Chaque ligne a aussi le pourcentage de cas confirmer par tranche d'âge et le nombre de décès par tranche d'âge. Cela ajoute donc 18 colonnes (0s à 80s x 2).
* Extraire dans un fichier de base de données SQLite la table construite durant la transformation.

# Bonus - Visualisation
Faites la visualisation du pourcentage de cas confirmé par tranche d'âge dans un graphique.

# Remise

* Date de remise - dernière journée de cours
* Emplacement de la remise - Léa - Devoir Python
* Élément de la remise - Votre Notebook Python