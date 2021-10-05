---
title: Programmes à faire de l'atelier 5
sidebar_label: 5 - Fichiers et exceptions
---

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
