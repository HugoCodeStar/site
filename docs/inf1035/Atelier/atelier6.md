---
title: Programmes à faire de l'atelier 6
sidebar_label: 6 - String et pandas
---

## most_frequent_character

```
Trouve le caractère le plus utiliser à l'intérieur d'une chaine.
Args:
    string: La chaine à évaluer.

Returns:
    Le caractère le plus utilisé dans la chaine.
```

Exemples:

```python
>>> most_frequent_character("salut tous!")
s
```

## word_separator

```
Convertis une chaine de caractères en camelCase en phrase normale. L'entrée
en camelCase est une chaine ou tous les mots d'une phrase sont indiqués par une
lettre majuscule et non par des espaces.
Args:
    string: La chaine en camelCase.

Returns:
    La chaine en phrase normale avec des espaces entre chaque mot.
```

Exemples:

```python
>>> word_separator("HelloMyWorld")
Hello my world
```

## convert_alpha_telephone

```
Traducteur de numéro de téléphone alphabétique
De nombreuses entreprises utilisent des numéros de téléphone 
tels que 555-GET-FOOD afin que leurs clients se souviennent plus 
facilement du numéro. Sur un téléphone standard, les lettres 
alphabétiques sont mappées aux nombres de la manière suivante:
A, B et C = 2
D, E et F = 3
G, H et I = 4
J, K et L = 5
M, N et O = 6 P, Q, R et S = 7 T, U et V = 8
W, X, Y et Z = 9
Écrivez une fonction qui reçoit un numéro de téléphone à 10 
caractères au format XXX-XXX-XXXX. L'application doit retourner 
le numéro de téléphone avec tous les caractères alphabétiques 
apparaissant dans l'original traduit en leur équivalent 
numérique. Par exemple, si l'utilisateur entre 555-GET-FOOD, 
l'application doit retourner 555-438-3663.
```

## Exercice de lecture de fichier csv

Vous disposez d'un fichier etudiants.csv contenant les informations suivantes :

```csv
nom,prenom,age,note
Tremblay,Jean,20,85
Gagnon,Marie,22,92
Roy,Pierre,21,78
Côté,Isabelle,23,88
```

* Lire le fichier CSV avec le module csv
* Afficher tous les étudiants ayant une note supérieure à 80
* Calculer la moyenne d'âge des étudiants
* Trouver l'étudiant avec la meilleure note

## Exercice de lecture de fichier JSON

Vous avez un fichier bibliotheque.json contenant une liste de livres :

```json
{
  "livres": [
    {
      "titre": "Le Petit Prince",
      "auteur": "Antoine de Saint-Exupéry",
      "annee": 1943,
      "disponible": true
    },
    {
      "titre": "1984",
      "auteur": "George Orwell",
      "annee": 1949,
      "disponible": false
    },
    {
      "titre": "L'Étranger",
      "auteur": "Albert Camus",
      "annee": 1942,
      "disponible": true
    }
  ]
}
```

* Lire le fichier JSON
* Afficher tous les livres disponibles
* Ajouter un nouveau livre à la collection
* Sauvegarder les modifications dans le fichier