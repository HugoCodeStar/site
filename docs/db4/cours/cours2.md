---
title: Programmation en Python
sidebar_label: 2 - Intermédiaires
---


## Listes
* Les listes sont des collections de plusieurs éléments de même type sous un seul identificateur;
* La liste est construite de cases mémoire consécutives en mémoire;
* À chaque élément de la liste, on associe un indice qui permet de facilement accéder aux cases individuellement;
* Nous regarderons pour commencer que des listes d'une dimension;

## Initialisation de liste
* `[ valeurs ]` - Une liste de valeurs délimitées par des virgules. Construis un tableau avec les valeurs données.
* `list(range(x))` permet de convertir le résultat de la fonction `range` en liste.
* L'opérateur `*` permet de répéter liste quand une liste est l'un des opérandes.

```python
liste = [4, 6, 3, 5, 7]
liste_noms = ['Bob', 'Marie', 'Aird']
liste_mixte = [3, True, 'ok']
liste_repeat = ['allo'] * 3 # Donne ['allo', 'allo', 'allo']
liste_range = list(range(4)) # Donne [0, 1, 2, 3]
liste_repet = [1, 2] * 3 # Donne [1, 2, 1, 2, 1, 2]
```

## Accès aux éléments de la liste
* L'accès aux éléments de la liste se fait à travers un indice. L'indice est utilisé entre des crochets `[]` suivant l'identificateur de la liste;
* Cette méthode peut être utilisée pour assigner une valeur à une case spécifique.
* **Attention** : Les indices commencent à 0.

```python
x = [3, 2, 5, 6, 7]
print(x[1])

x[2] = 4
print(x[1])
```

## Liste dynamique

* Les listes de Python sont dynamiques. Elles peuvent changer de taille au besoin;
* L'ajout d'éléments se fait avec la fonction `append`;
* La concaténation de listes se fait avec l'opération `+`;
* La suppression d'un élément se fait avec l'instruction `del`.

```python
x = [4, 5, 3]
y = [1, 2, 3]
x.append(7)
print(x[3]) # Affiche 7

z = x + y
print(z) # Affiche [4, 5, 3, 7, 1, 2, 3]

del z[2]
print(z) # Affiche [4, 5, 7, 1, 2, 3]
```

## Parcours dans une liste

* il est facile d'itérer sur une liste avec un for.
* Trouvez la taille d'une liste avec la fonction `len`

```python
x = [3, 5, 2, 5]

for a in x:
    print(a)

print(len(x))
```

## Découpage d'une liste (slicing)

* Une sous-liste d'une liste peut être générée en utilisant les opérations de découpage.
* Le découpage prend deux indices, un de début et un de fin (la fin sera exclue de la sélection)
* Il est possible d'omettre le début ou la fin.
* Si le début est omis, l'indice 0 est utilisé
* Si la fin est omise, l'indice de fin est la fin de la liste

```python
x = ['a', 'b', 'c', 'd', 'e', 'f']

mid_x = x[2:4] # Contient ['c', 'd']

end_x = x[4:] # Contient ['e', 'f']
```

## Passage de référence

```python
def modifie_valeur(l):
    l[0] = 10

x = [3, 5, 1]
modifie_valeur(x)

print(x) # Affiche [10, 3, 1]
```

* Les listes sont des objets qui sont passés par référence;
* Les modifications à l'intérieur d'une fonction sont donc permanentes.

## Trouver un élément dans une liste

L'opérateur `in` est aussi utilisé pour faire une recherche d'un élément dans une liste.

```python
x = ['allo', 'salut', 'bonjour']

if 'allo' in x:
    print('Trouvé!') # Va être affiché

if 'au revoir' in x:
    print('Pas trouvé...') # Ne sera pas affiché
```

Les fonctions `min` et `max` trouves l'élément le plus petit ou plus grand dans une séquence (une liste est un type de séquence).

```python
x = [5, 3, 8, 10, 4]

print(min(x)) # Affiche 3
print(max(x)) # Affiche 10
```

## Méthodes sur les listes

* Les méthodes sont des fonctions spéciales qui sont appellés directement de la liste.
* Une méthode est appellé en préfixant le nom de la liste avec un `.`.
* Les méthodes font partie de la programmation orienté-objet que nous verrons à la fin du cours.

| Fonction            | Description                                                      |
|---------------------|------------------------------------------------------------------|
| append(index)       | Ajoute un élément à la fin de la liste.                          |
| index(item)         | Retourne l'indice du premier élément trouvé dans la liste.       |
| insert(index, item) | Insère `item` à la position `index`. Décale les autres éléments. |
| sort()              | Tri la liste de manière croissante.                              |
| remove(item)        | Enlève la première occurrence où `item` se trouve dans la liste. |
| reverse()           | Inverse la liste.                                                |

```python
x = [3, 7, 10, 2]

x.sort()

print(x) # Affiche [2, 3, 7, 10]
```

## Copie de liste
L'assigne d'une liste dans une autre variable ne fait **pas** la copie de la liste. Elle fait un référence à la liste.
Pour faire la copie de la liste, la méthode `copy` est disponible.

Example de la référence
```python
x = [1, 2, 3]
y = x
x[0] = 10
print(y) # Affiche [10, 2, 3]
```

Copie de la liste
```python
x = [1, 2, 3]
y = x.copy()
x[0] = 10
print(y) # Affiche [10, 2, 3]
```

## Tuple
* Le tulpe est très sembable à une liste. La différence fondamental est que le tuple est immuable. Il ne peux pas être modifier après sa création. Les tuples utilisent des parenthèses à la place de crochet carrés des listes à leurs créations.

```python
monTuple = (4, 6, 8, 3)
print(monTuple) #Affiche (4, 6, 8, 3)
print(monTuple[2]) #Affiche 8
monTuple[0] = 10 # Génère une erreur
```

Il est possible de convertir un tuple en liste avec la fonction `list` qui reçoit le tuple et retourne une liste avec les mêmes éléments.

## Liste de multiple dimensions

* En incorporant des listes de listes, il est possible de faire la représentation d'une matrice.

```python
valeurs = [[1, 2, 3], [4, 5, 6]]
# Représente
# 1 2 3
# 4 5 6

# Modification de la case avec la valeur 6
valeurs[1][2] = 10
print(valeurs) # Affiche [[1, 2, 3], [4, 5, 10]]
```


## Chaines de caractères
* Les chaine de caractères (`str`) est un type avec plusieurs fonctionnalités imbriquées.
* Plusieurs opérations peuvent faciliter l'utilisation et la création de chaines.
* Plusieurs méthodes sont disponibles pour parcourir, chercher et modifier les chaines.
  
## Parcourir les lettres d'une chaine
* Le `for` peut parcourir chacune des lettres dans une chaine.
* Les chaines peuvent être accédées comme des listes.
* La fonction `len` indique le nombre de caractères dans une chaine.

```python
mot = 'salut'
for lettre in mot:
    print(lettre) # Affiche 's' 'a' 'l' 'u' 't'

print(mot[1]) # Affiche 'a'
print(len(mot)) # Affiche 5
```

## Concaténation et découpage de chaines
* Il est possible de concaténer deux chaines pour en créer une nouvelle avec l'opérateur `+`.
* Il est aussi possible de découper les chaines comme une liste.

```python
mot = 'salut'
autre_mot = 'bonjour'

mega_mot = mot + ' ' + bonjour # Contient 'salut bonjour'
print(mega_mot[2:9]) # Affiche 'lut bon'
```

## L'opération in et les méthodes
* Il est possible de chercher si une chaine est dans une autre avec l'opération `in` et inversement `not in`.

```python
texte = 'allo tout le monde'
if 'tout' in texte:
    print('Le mot "tout" est dans la phrase')
```

## Méthodes de détection des chaines

| Nom       | Description                                                           |
|-----------|-----------------------------------------------------------------------|
| isalnum()   | Tous des caractères alphanumériques.                                  |
| isalpha() | Tous des caractères alphabétiques.                                    |
| isdigit() | Tous des caractères numériques.                                       |
| islower() | Tous des caractères alphabétiques en minuscule.                       |
| isspace() | Tous des caractères d'espacements (espace, saut de ligne, tabulation) |
| isupper() | Tous des caractères alphabétiques en majuscule.                       |

## Méthodes de modification des chaines

| Nom          | Description                                 |
|--------------|---------------------------------------------|
| lower()      | Converti en minuscules.                     |
| lstrip()     | Enlève les espacements à gauche.            |
| lstrip(char) | Enlève le caractère de la gauche.           |
| rstrip()     | Enlève les espacements à droite.            |
| strip()      | Enlève les espacements à gauche et à droite. |
| strip(char)  | Enlève un caractère à gauche et à droite    |
| upper()      | Converti en majuscules.                     |

## Méthodes de recherche et remplacement

| Nom                   | Description                                                       |
|-----------------------|-------------------------------------------------------------------|
| endswith(substring)   | Si se termine avec substring.                                     |
| find(substring)       | Retourne le premier indice ou substring est trouvé. -1 autrement. |
| replace(old, new)     | Remplace l'ancien substring par la nouvelle.                    |
| startswith(substring) | Si se débute avec substring.                                      |

## Découpage à un caractère spécifique

* Il est possible de "splitter" une chaine en une liste de chaine à un délimiteur connu avec la méthode `split`.

```python
chaine = 'salut le monde'
# Coupe aux espaces par défaut.
liste = chaine.split() # Contient ['salut', 'le', 'monde']

date = '11/12/2012'
liste_date = date.split('/') # Contient ['11', '12', '2012']
```


## Introduction aux fichiers
* Python peut accéder à des fichiers externes. Ces fichiers vont rester après l'exécution de notre programme, contrairement aux variables. Il est donc possible de garder de l'information de manières permanentes.
* Pour travailler avec les fichiers, des fonctions spécifiques seront utilisées pour leurs gestions.
* Un concept d'objet fichier permet de faire référence à un fichier à l'aide d'une variable et autrement que par son nom.

## Types de fichiers
* Deux types de fichiers seront étudiés dans le cours:
  * Fichier texte (ASCII)
  * Fichier binaire
* Les fichiers textes contiennent des caractères ASCII qui pourront être affichés dans un éditeur de texte (ex: Notepad).
* Les fichiers binaires contiennent directement les informations des fichiers et peuvent prendre moins de place, mais sont plus difficiles à traiter. Dans le cours, nous ne verrons que les fichiers textes.

## Objet fichier
* Pour ne pas avoir à redonner le nom de fichier à chaque fonction, un objet fichier est utilisé pour représenter le fichier durant ses interactions avec Python.
* La fonction `open` génère un nouvel objet fichier qui sera utilisé par les fonctions subséquentes. Seule la fonction `open` a donc besoin du nom de fichier.
* L’objet fichier est une variable qui permet à Python de savoir avec quel fichier interagir.
* L’objet fichier permet aussi à Python de garder la position d’un curseur dans le fichier. On peut donc lire plusieurs informations sans repartir du début du fichier.
* Pour arrêter les interactions avec le fichier, la méthode `close` permet de libérer l’utilisation de l'objet ficher.

## Ouverture d'un fichier
* L'ouverture d'un fichier se fait avec la fonction `open` qui reçoit un nom de fichier à ouvrir et un mode d'ouverture

| mode | description                                           |
|------|-------------------------------------------------------|
| 'r'  | Ouverture en lecture                                  |
| 'w'  | Ouverture en écriture. Écrase le contenu courant.      |
| 'a'  | Ouverte en ajout. Écrit à partir de la fin du fichier |

## Fermeture d'un fichier
* Une fois le fichier ouvert et le traitement fait, il faut fermer le fichier en utilisant la méthode `close` sur l'objet fichier.

```Python
# Ouverture du fichier
file = open('mon_fichier.txt', 'w')

# Instruction de gestion du fichier

# Fermeture du fichier
file.close()
```

## Écriture dans un fichier
* La méthode `write` permet d'écrire dans un fichier. Le fichier doit avoir été ouvert en écriture.

```Python
# Ouverture du fichier
file = open('mon_fichier.txt', 'w')

# Écriture dans le fichier
file.write('Allo\n')
file.write('Salut\n')

# Fermeture du fichier
file.close()
```

## Lecture dans un fichier
* Nous pouvons lire le contenu total d'un fichier avec la méthode `read`.
* Pour plus facilement traiter le contenu d'un fichier, la méthode `readline` permet de lire une ligne de texte à la fois.
* La fonction `readline` fait avancer un curseur jusqu'au prochain saut de ligne.

```Python
file = open('mon_fichier.txt', 'r')

ligne1 = file.readline()
ligne2 = file.readline()
ligne3 = file.readline()

file.close()
```

* Durant la lecture de ligne, le saut de ligne est inclus, il est possible de le supprimer avec la méthode `rstrip`.

```Python
ligne1 = ligne1.rstrip('\n')
```

## Écriture/Lecture numérique
* Pour écrire des informations de variable numériques (int, float), on doit convertir les informations des variables avec la fonction `str`.

```Python
x = 34

file = open('mon_fichier.txt', 'w')

file.write(str(x))

file.close()
```

* Inversement, l'utilisation d'un `readline` devra être combiné comme avec l'utilisation de `input` avec `int` ou `float`.

## Traitement en boucle d'un fichier
* Un traitement commun de fichier sera de lire une série d'informations à l'intérieur d'un fichier sans savoir combien d'information le fichier contient.
* Une boucle nous permet de faire le travail à répétition facilement.

```Python
file = open('mon_fichier.txt', 'r')

line = file.readline()

# Tant qu'il reste de l'information dans le fichier
while line != '':
    # Traite la ligne
    print(line)

    # Lit la prochaine ligne
    line = file.readline()

file.close()
```

## Traitement en boucle d'un fichier
* Python nous offre aussi la possibilité d'utiliser la boucle for qui va automatiquement faire le `readline` d'un fichier.

```Python
file = open('mon_fichier.txt', 'r')

for line in file:
    # Traitement du fichier
    print(line)

file.close()
```

## Exceptions

* Quand une erreur survient dans un programme, Python lève un exception. Par défaut, une exception va arrêter l'exécution du programme et affiche qui a levé une exception.

```Python
x = 5
y = 0
res = x / y # Lève une exception ZeroDivisionError

print(res)
```

## Gestion des exceptions
* Un bloc `try/except` permet de faire une gestion de l'exception à l'intérieur du programme.
* Le bloc `try` contient le code qui peut lever une exception.
* Le bloc `except` est exécuté dans le cas de la lever d'une exception.

```Python
try:
    x = 5
    y = 0

    res = x / y

    print(res)
except ZeroDivisionError:
    print('Une division par 0 a été levée.')
```

## Gestion avancée
* Il est possible d'avoir plusieurs gestions d'exception ainsi qu'un bloc `else` qui sera exécuté si aucune exception n’est levée durant le bloc `try`.

```Python
try:
    # Lève une exception IOError si le fichier est inexistant
    file = open('mon_fichier', r')

    # Lève une exception ValeurError si la conversion ne fonctionne pas
    ligne = float(file.readline())
except IOError:
    print('Fichier manquant')
except ValueError:
    print('Mauvaise conversion')
except:
    print('Autre exception')
else:
    print(ligne)
```

## Exceptions avec `with`
* Le bloc `with` permet de faire une instruction initiale et exécuté un bloc de code si aucune erreur se produit.
* Cela est très utilisé avec les ouvertures de fichiers.

```Python
with open('mon_fichier.txt') as file:
    for line in file:
        print(line)
```
