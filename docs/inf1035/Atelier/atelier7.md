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

## Exercice avec NumPy

## 1. Manipulations de base avec NumPy

1. Créez un tableau NumPy (numpy.ndarray) de dimensions (5, 5) contenant des entiers aléatoires compris entre 1 et 100.  
   - Astuce : Utilisez la fonction `np.random.randint`.

2. Affichez :
   - Le minimum et le maximum de ce tableau.  
   - La moyenne des valeurs.  
   - L’écart-type (standard deviation).

3. Modifiez une partie de votre tableau pour lui assigner de nouvelles valeurs (par exemple, remplacez la dernière ligne par des zéros).

4. Affichez enfin la forme (shape) et le type de données (dtype) de votre tableau pour vérifier vos manipulations.


```python
import numpy as np

# 1. Créer un tableau 5x5 d'entiers aléatoires
arr = np.random.randint(1, 101, (5, 5))

# 2. Statistiques simples
print("Tableau:\n", arr)
print("Min:", arr.min())
print("Max:", arr.max())
print("Moyenne:", arr.mean())
print("Écart-type:", arr.std())

# 3. Modification d'une partie du tableau
arr[-1, :] = 0  # Remplace la dernière ligne par des zéros
print("Tableau modifié:\n", arr)

# 4. Informations sur le tableau
print("Shape:", arr.shape)
print("Dtype:", arr.dtype)
```

# Numpy et pandas

## 2. Création d’un DataFrame simple et manipulations

1. Créez un DataFrame `df` à partir d’un **dictionnaire** Python. Par exemple :
   ```python
   data = {
       "Prenom": ["Alice", "Bob", "Charlie", "David", "Eva"],
       "Age": [25, 30, 35, 25, 40],
       "Ville": ["Paris", "Lyon", "Marseille", "Bordeaux", "Nice"]
   }
   ```
2. Affichez le DataFrame et vérifiez ses informations générales (`df.info()` et `df.describe()`).
3. Ajoutez une nouvelle colonne `Note` (par exemple, des notes entre 10 et 20) au DataFrame.
4. Triez le DataFrame selon la colonne `Age`, de la plus grande à la plus petite valeur.
5. Supprimez (ou remplacez par `NaN`) toutes les valeurs de `Note` inférieures à 12.

```python
import pandas as pd

data = {
    "Prenom": ["Alice", "Bob", "Charlie", "David", "Eva"],
    "Age": [25, 30, 35, 25, 40],
    "Ville": ["Paris", "Lyon", "Marseille", "Bordeaux", "Nice"]
}

df = pd.DataFrame(data)

# Informations
print(df.info())
print(df.describe())

# Ajouter une colonne "Note"
import numpy as np
df["Note"] = np.random.randint(10, 21, len(df))

# Trier selon l'âge (décroissant)
df_sorted = df.sort_values(by="Age", ascending=False)

# Remplacer les Note < 12 par NaN
df_sorted.loc[df_sorted["Note"] < 12, "Note"] = np.nan

print(df_sorted)
```

---

## 3. GroupBy et statistiques agrégées

À partir du DataFrame précédent (ou en créant un nouveau DataFrame), imaginez que vous avez une colonne supplémentaire nommée **Département** représentant le département d’un employé ou d’un étudiant, par exemple :

```python
"Departement": ["Informatique", "Marketing", "Informatique", "Marketing", "RH"]
```

1. Ajoutez cette colonne à votre DataFrame.
2. Utilisez la méthode `groupby` pour grouper par le département.
3. Calculez la moyenne d’âge et la moyenne de la note dans chaque département.
4. Affichez également la taille de chaque groupe (combien d’employés ou d’étudiants sont dans chaque département).

```python
df["Departement"] = ["Informatique", "Marketing", "Informatique", "Marketing", "RH"]

grouped = df.groupby("Departement")

print(grouped["Age"].mean())
print(grouped["Note"].mean())
print(grouped.size())  # Nombre d'entrées par département
```

---

## 4. Fusion de DataFrames (merge / concat)

1. Créez deux DataFrames simples :  
   - **df1** : contient des informations sur des produits (id, nom, prix).  
   - **df2** : contient des informations sur les mêmes produits (id) et un score de popularité.  
2. Fusionnez ces deux DataFrames sur la clé `id` pour obtenir un DataFrame unique qui contient à la fois le prix et la popularité de chaque produit.
3. Si vous le souhaitez, illustrez une fusion de type `left`, `right` ou `outer` pour voir les différences.


```python
df1 = pd.DataFrame({
    "id": [1, 2, 3],
    "nom": ["Stylo", "Cahier", "Trousse"],
    "prix": [1.5, 3.0, 2.0]
})

df2 = pd.DataFrame({
    "id": [1, 3, 4],
    "popularite": [100, 200, 50]
})

merged = pd.merge(df1, df2, on="id", how="inner")
print("Fusion inner:\n", merged)

merged_left = pd.merge(df1, df2, on="id", how="left")
print("Fusion left:\n", merged_left)
```
