---
title: Programmes à faire de l'atelier 7
sidebar_label: 7 - Fichiers et datetime
---

## Exercice : Lecture d’un fichier CSV et manipulation de dates

Vous disposez d’un fichier CSV nommé **observations.csv** qui contient des données horaires de température dans différentes villes. Le fichier se présente ainsi :

```csv
date_observation,temperature,station
2023-01-15 08:30:00,12.5,Paris
2023-01-15 12:00:00,14.0,Paris
2023-01-15 08:40:00,11.7,Lyon
2023-01-16 00:00:00,9.2,Lyon
2023-02-01 14:15:00,6.4,Lille
2023-02-03 09:50:00,5.0,Lille
```

**Consignes** :  
1. **Importer** ce fichier CSV dans un DataFrame Pandas nommé `df_observations`.  
2. **Convertir** la colonne `date_observation` en type datetime.  
3. **Extraire** :  
   - l’année d’observation (créez une colonne `annee`),  
   - le mois d’observation (créez une colonne `mois`),  
   - l’heure (créez une colonne `heure`).  
4. **Filtrer** le DataFrame pour n’afficher que les observations ayant une température supérieure à 10 degrés.  
5. **Trier** les observations par date d’observation (ordre croissant).  
6. **Avancée**
   - Calculez la **température moyenne** par station et par mois.  
   - Exportez ce résultat dans un **nouveau fichier CSV** (par exemple `moyennes_par_station.csv`).  

*Conseil* : Vous pouvez utiliser la fonction `pd.to_datetime` pour convertir la colonne en datetime, puis accéder aux attributs comme `df_observations['date_observation'].dt.year`, etc.  
