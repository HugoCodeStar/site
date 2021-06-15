---
title: Programmes à faire de l'atelier 1
sidebar_label: 2 - Listes, fichiers et chaines de caractères
---

Pour chacunes des présentations suivantes, écrivez la fonction qui correspond à la demande.

# Liste et tuples

## affiche_double_liste
```
Affiche les valeurs doublées de chaque éléments de la liste

Args:
    liste: La liste de valeurs à doubler et afficher.
```
Exemple :
```
>> affiche_double_liste([4, 5, 12, 11])
8
10
24
22
```

## produit_cumulatif
```
Produit cumulatif des valeurs d'une liste.

Args:
    liste: Liste de valeurs

Returns:
    Produit cumulatif des valeurs
```


## indice_min_liste
```
Indice de position de la valeur la plus petite de la liste.

Args:
    liste: Liste de valeurs

Returns:
    Indice de la valeur minimum de la liste.
```


## diff_entre_max_min
```
Différence entre la valeur maxium et la valeur minimum de la liste.

Args:
    liste: Liste de valeurs

Returns:
    La différence entre le min et max.
```


## tout_indice_min_liste
```
Tous les indices de positions de la valeur minimum. Avec plusieurs emplacements
de la valeur minimum. On retourne une liste de positions.

Args:
    liste: Liste de valeurs

Returns:
    Liste de positions du minimum
```


## suppr_valeur_seuil
```
Supprime tous les éléments plus grand que la valeur de seuil.

Args:
    seuil: Valeur de seuil
    liste: Liste de valeurs

Returns:
    Liste modifié avec les valeurs plus grandes que le seuil supprimer.
```


## ecart_type
```
Détermine l'écart type des valeurs de la liste.

Args:
    liste: Liste de valeurs

Returns:
    L'écart type de la liste.
```


## dist_entre_points
```
Détermine la distance entre deux points de coodonnées cartésiennes.

Args:
    point1: Liste de deux éléments qui représente la point en [x, y]
    point2: Liste de deux éléments qui représente la point en [x, y]

Returns:
    Distance entre les deux points reçus.
```

# Fichiers

## print_file_line_numbers

```
Affiche toutes les lignes d'un fichier avec un numéro de ligne ajouté à chaque lignes.
Args:
    filename: Le nom du fichier
```

Exemple :

Avec le fichier `test1.txt` suivant :

```
Salut
Bonjour
Allo
```

```
>>> print_file_line_numbers('test1.txt')
1 - Salut
2 - Bonjour
3 - Allo
```

## write_fibonacci

```
Écrit dans une fichier un certain nombre de la suite de Fibonacci.
Chaque nombre est sur sa propre ligne.
Args:
    filename: Nom du fichier à écrire
    n: Le nombre d'éléments de la séquence à écrire
```

Exemple :

```
>>> write_fibonacci('test2.txt', 10)
```

Écrite le ficiher `test2.txt` suivant :

```
0
1
1
2
3
5
8
13
21
34
```

## find_max_score_name

```
Trouve et retourne le nom de la personne avec le plus haut score à partir
d'un fichier qui contient les noms et scores de plusieurs personnes.
Le fichier contient sur une série de score avec le nom et le score sur des lignes
individuelles.

Args:
    filename: Le nom du fichier avec les scores.

Returns:
    Le nom de la personne avec le plus haut score.
```

Exemple : 

Avec le fichier `test3.txt.` suivant : 

```
Max
45
Bob
78
Julie
89
Celine
80
```

```
>>> print(find_max_score_name('test3.txt'))
Julie
```

# Chaine de caractères


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