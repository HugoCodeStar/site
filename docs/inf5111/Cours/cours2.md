---
title: Fondements de la programmation scientifique
sidebar_label: 2 - Intro programmation
---

## Programmation

* Instructions
* Mémoire
* Algorithme / Contrôle de flux

## Programmation
* Language du cours : Python 3
* Environement de dévelopment
    * Google Collab https://colab.research.google.com/
    * PyCharm
    * Anaconda / Jupyter - https://www.anaconda.com/products/individual

## Anaconda / Jupyter Notebook
* Anaconda est un environnement de travail pour les sciences de la données.
* L'application permet la gestion et configuration de plusieurs plateformes des scienses de la donnée basé sur Python, R et d'autres.
* La majorité du travail en Python se fait à l'intérieur de Jupyter Notebooks qui permet de mélangé documentation, code et visualisation dans un seul fichier. Ce fichier à l'extension `.ipynb` pour `Interactive PYthon NoteBook`. Ce fichier peut être lu par une panoplie d'application.
* Dans notre cas, Jupyter Labs est conseiller pour la session. Il existe aussi d'autres applications permettant de lire les Python notebook :
    * PyCharm
    * Datalore
    * VS Code
    * Jupyter Notebook (anciennce version de Jupyter Labs)

# Markdown
* Pour la documentation, la format Markdown est utilisé. Celui-ci utilise des balises pour avoir un formatage facile et conviviale qui est initiallement en format texte.
* Veuillez vous référé à la [Documentation de Markdown](https://jupyter-notebook.readthedocs.io/en/stable/examples/Notebook/Working%20With%20Markdown%20Cells.html) pour l'utilisation des différentes balises du format.



## Affichage avec la fonction `print`
* L'affichage de texte utilise la fonction `print` pour présenter une chaine de caractères dans la fenêtre de commande.


```python
print('5 + 5')
print("C'est super")
```


## Les chaines de caractères
* Les chaines de caractères (du texte litéral) est délimité par des guillement simple `'` ou double `"`.
* Cette distinction permet de faire la différence entre les instructions et le texte à utiliser dans le programme.
* Deux symbole sont disponible pour facilité l'utlisation de l'autre type de guillemet dans une chaine.
* Il est aussi possible d'utiliser les triples symboles pour délimité une chaine.


```python
print('Texte à afficher!')
print('Le "best" texte')
print("Y'en a pas de meilleur texte.")
print("""C'est possible d'avoir du texte avec les deux "quotes" dans une chaine.""")
print("""Même
sur plusieurs
ligne""")
```

## Commentaires
* Le hashtag `#` débute une ligne de commentaire;
* Le reste de la ligne après le `#` ne sera pas considéré par python durant l'exécution du code;
* Une ligne vide sera aussi sautée par python;
* Les commentaires sont primordiaux à la programmation;
* Les commentaires sont utilisés en en-tête de fichiers, fonctions et programme ainsi qu’à l’intérieur d’un programme pour aider à comprendre l’intention des instructions.


```python
print('Texte à afficher!')
# Utilise le caractère spécial \n pour un saut de ligne
print('Une ligne\net une autre')
print (3 + 6) # print peut aussi afficher le résultat d'une expression
```

    Texte à afficher!
    Une ligne
    et une autre
    9


## **Exemple 1**
* Écrivez un script qui calcule un salaire hebdomadaire à partir d’un nombre d’heures travaillées et un salaire horaire.



```python
# Calcul du salaire
# hebdomadaire d'une personne.

print("Mon salaire hebdomadaire")
print(6 * 20.5)
```


## Variables et instruction d'assignation
* Une variable est la combinaison d’un espace mémoire réservé, un identificateur et une valeur;
* L'assignation utilise l'égalité `=` pour lier la valeur à l'identificateur


```python
nomVariable = 99
print(nomVariable)
```


## Assignation et instruction

* L’assignation se fait toujours d’une **expression** à droite vers un identificateur à gauche;
* L'expression sera évaluée avant d'être assignée dans la variable;


```python
nomVariable = nomVariable  + 5
print( nomVariable )
```

    149


* Le contenu d'une variable existante est écrasé lors d'une assignation.

* Une longue instruction peut être coupé sur une deuxième ligne avec le caractère `\`


```python
nomVariable = nomVariable + 5 + nomVariable + \
  nomVariable + nomVariable
print(nomVariable)
```


## Identificateurs
* Les identificateurs sont utilisés pour identifier les différents éléments que nous ajoutons à notre programme;
* Les identificateurs sont les noms que l’on donne à nos variables, scripts et fonctions;
* Les caractères permis sont :
    * Tout caractère alphanumérique;
    * Le tiret-bas `_`.
* Le premier caractère doit être alphabétique;
* Le nom de la variable ne doit pas être un mot réservé par la syntaxe de python;
* Faites attention! Pour python, les majuscules et minuscules sont des caractères différents;
* Par convention, `camelCase`.



## **Exemple 2**
* Écrivez un script qui calcule un salaire hebdomadaire à partir d’un nombre d’heures travaillées et un salaire horaire. Affichez le salaire brut ainsi que le salaire net après 15% de taxes.
* Utilisez des variables pour le nombre d’heures travaillées, le salaire horaire, le salaire brut et le salaire net.


```python
# Données initiales
heuresTravailler = 18
tauxHoraire = 45

# Calcul du salaire Brut
salaireHebdomadaireBrut = heuresTravailler * tauxHoraire
print("Mon salaire hebdomadaire brut")
print(salaireHebdomadaireBrut)

# Calcul du salaire net
tauxImposition = 0.15
salaireHebdomadaireNet = salaireHebdomadaireBrut - salaireHebdomadaireBrut * tauxImposition
print("Mon salaire hebdomadaire net")
print(salaireHebdomadaireNet)
```

## Type de données
* Quatre types de données seront rencontrés généralement durant ce cours:
    * `int` - entité numérique entière(ex: 3, -4);
    * `float` - entitée numérique flottante (3.542, -0.23);
    * `str` - entité textuelle (ex: 'a', 'Bonjour!');
      - Les chaines de caractères sont délimitées par des guillemets simples ou doubles.
    * `bool` - valeur logique vraie (True) ou fausse (False).

## Saisie avec la fonction `input`
* Une saisie utilise la fonction `input` pour assigner l'entrée d'un utilisateur dans une variable.
* Puisque le retour sera toujours en `str`, il faut le convertir au besoin. 
* La fonction `int` ou `float` permet de convertir la chaine en entier ou en réel.


```python
## Saisie d'un nombre
## Doit convertir la valeur
saisi = int(input('Texte à afficher à la saisie: '))

## Saisie d'une chaine de caractères (texte)
#saisiChaine = input('Nombre à afficher: ')
print(saisi + 5)
```

## **Exemple 3**
* Écrivez un script qui calcule un salaire hebdomadaire à partir d’un nombre d’heures travaillées et un salaire horaire;
* Faites-la saisie du nombre d’heures travaillées et du salaire horaire au clavier;
* Afficher un message d’information avant d’afficher le salaire.



```python

# Saisit des données initiales
heuresTravailler = float(input("Entrez le nombre d'heures travailler : "))
tauxHoraire = float(input("Entrez le nombre taux horaire : "))

# Calcul du salaire Brut
salaireHebdomadaireBrut = heuresTravailler * tauxHoraire
print("Mon salaire hebdomadaire brut")
print(salaireHebdomadaireBrut)

# Calcul du salaire net
tauxImposition = 0.18
salaireHebdomadaireNet = salaireHebdomadaireBrut - salaireHebdomadaireBrut * tauxImposition
print("Mon salaire hebdomadaire net")
print(salaireHebdomadaireNet)
```


## Affichage d'expression avec `print`
* `print` a la possibilité d'afficher l'évaluation d'une expression;
* Il est possible de découper sur plusieurs ligne l'utilsation du print.


```python
x = 3
chaine = 'allo'
print('Chiffre: ', x)
print('Chaine: ', chaine)
print('Chiffre' , x, 
  'et chaine', chaine)
```

## Caractère d'échapement

* Les caractères d'échapements permetent d'inséré des éléments non-textuelles dans un affichage de la fonction print.

| Caractère | Description |
| -- | -- |
| `\n` | Saut de ligne
| `\t` | Saut de tabulation horizontale
| `\'` | Affiche un guillemet simple
| `\"` | Affiche un guillemet double
| `\\` | Affiche un backslash


## **Exemple 4**
* Écrivez un script qui calcule un salaire hebdomadaire à partir d’un nombre d’heures travaillées et un salaire horaire.
* Faites-la saisie du nombre d’heures travaillées et du salaire horaire au clavier.
* Afficher un message avec le salaire net.


```python
# Saisit des données initiales
heuresTravailler = float(input("Entrez le nombre d'heures travailler : "))
tauxHoraire = float(input("Entrez le nombre taux horaire : "))

# Calcul du salaire Brut
salaireHebdomadaireBrut = heuresTravailler * tauxHoraire

# Calcul du salaire net
tauxImposition = 0.18
salaireHebdomadaireNet = salaireHebdomadaireBrut - salaireHebdomadaireBrut * tauxImposition

# Affichage final
print("Mon salaire hebdomadaire brut est", salaireHebdomadaireBrut, 
      "et mon salaire net est", salaireHebdomadaireNet)
```

# Appel de méthodes et de fonctions

* Les fonctions (comme `print` et `input`) prennent des paramètres d'entrés pour s'exécuter correctement
* Les paramètres sont délimités par des virgules et chaque paramètre sont des expressions (comme vue durant les assignations
* Certaines fonctions sont importées à partir de librairies

* Certains éléments (comme les listes que nous allons voir) sont des objets sauvegardé dans des variables.
* Les objets sont un mélange de valeurs (propriétés) et fonctions (méthodes).
* On accède aux éléments de l'objet avec le `.`. Nous verrons sont utilisation avec les listes et autres objets.

### Paramètres nommés
Certains appels ont des paramètres nommées qui permettent d'avoir des éléments facultatifs à l'appel. Le nom du paramètre nommé est suivi d'un `=` et de la valeur voulu. Les paramètres nommées sont toujours après les paramètres normaux et leurs ordres n'est pas important.


```python
# Le paramètre nommé `end` permet de modifier la fin du print qui utilise habituellement un saut de ligne
print('One', end=' ')
print('Two', end=' ')
print('Three')
```

## Modules fournis
* Plusieurs modules sont fournis et nous verrons qu'il existe un très grand écosystème de module pouvant nous faciliter la création de nos programmes.
* Par exemple, le module `math` nous donne plusieurs fonctions mathématiques communes.
* Pour savoir lesquelles et leurs utilisations, il faut consulter leur documentation;
  * https://docs.python.org/3/library/math.html


```python
import math # La commande import peut être fait une fois au début du projet/notebook

reponse = math.sqrt(45)
```


```python
# Il est aussi possible de renommé une importation pour facilité son utilisation
import math as m

reponse = m.sqrt(45)

# Ou encore de seulement importer une fonction précise sans avoir de préfixe
from math import sqrt
reponse = sqrt(12)
```

# Liste et tuples


## Listes
* Les listes sont des collections de plusieurs éléments de même type sous un seul identificateur;
* La liste est construite de cases mémoire consécutives en mémoire;
* À chaque élément de la liste, on associe un indice qui permet de facilement accéder aux cases individuellement;
* Nous regarderons pour commencer que des listes d'une dimension;

## Initialisation de liste
* `[ valeurs ]` - Une liste de valeurs délimitées par des virgules. Construis un tableau avec les valeurs données.
* `list(range(x))` permet de convertir le résultat de la fonction `range` en liste.
* La fonction `len` peut afficher nombre d'éléments d'une liste


```python
liste = [4, 6, 3, 5, 7]
liste_noms = ['Bob', 'Marie', 'Aird']
liste_mixte = [3, True, 'ok']
liste_repeat = ['allo'] * 3 # Donne ['allo', 'allo', 'allo']
liste_range = list(range(4)) # Donne [0, 1, 2, 3]

print(len(liste))
```

## Accès aux éléments de la liste
* L'accès aux éléments de la liste se fait à travers un indice. L'indice est utilisé entre des crochets `[]` suivant l'identificateur de la liste;
* Cette méthode peut être utilisée pour assigner une valeur à une case spécifique.
* **Attention** : Les indices commencent à 0.


```python
x = [3, 2, 5, 6, 7]
print(x[1])

print(x[2])
x[2] = 4
print(x[2])
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

## Découpage d'une liste (slicing)

* Une sous-liste d'une liste peut être générée en utilisant les opérations de découpage.
* Le découpage prend deux indices, un de début et un de fin (la fin sera exclue de la sélection)
* Il est possible d'omettre le début ou la fin.
* Si le début est omis, l'indice 0 est utilisé
* Si la fin est omise, l'indice de fin est la fin de la liste


```python
x = ['a', 'b', 'c', 'd', 'e', 'f']

mid_x = x[2:4] # Contient ['c', 'd']
print(mid_x)

end_x = x[4:] # Contient ['e', 'f']
print(end_x)
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

    [2, 3, 7, 10]


## Tuple
* Le tulpe est très sembable à une liste. La différence fondamental est que le tuple est immuable. Il ne peux pas être modifier après sa création. Les tuples utilisent des parenthèses à la place de crochet carrés des listes à leurs créations.


```python
monTuple = (4, 6, 8, 3)
print(monTuple) #Affiche (4, 6, 8, 3)
print(monTuple[2]) #Affiche 8
monTuple[0] = 10 # Génère une erreur
```

Il est possible de convertir un tuple en liste avec la fonction `list` qui reçoit le tuple et retourne une liste avec les mêmes éléments.

## NumPy

NumPy (Numerical Python) est une bibliothèque Python open source utilisée dans presque tous les domaines de la science et de l'ingénierie. C'est la norme universelle pour travailler avec des données numériques en Python, et c'est au cœur des écosystèmes scientifiques Python et PyData. La majorité des libraires traitant des données sont basés sur les structures de données qui sont introduit avec `NumPy`.

### Installation et importation de NumPy
La libraire `NumPy` est déjà installé dans plusieurs plateforme scientifique comme Google Collab. Il suffit de l'importer comme nous l'avons vu précédement.


```python
import numpy as np
```

Nous raccourcissons le nom importé en `np` pour une meilleure lisibilité du code à l'aide de NumPy. Il s'agit d'une convention largement adoptée que vous devez suivre afin que toute personne travaillant avec votre code puisse facilement la comprendre.

### Quelle est la différence entre une liste Python et un tableau NumPy?
NumPy vous offre une vaste gamme de moyens rapides et efficaces de créer des tableaux et de manipuler des données numériques à l'intérieur de ceux-ci. Alors qu'une liste Python peut contenir différents types de données dans une seule liste, tous les éléments d'un tableau NumPy doivent être homogènes. Les opérations mathématiques censées être effectuées sur des tableaux seraient extrêmement inefficaces si les tableaux n'étaient pas homogènes.

**Pourquoi utiliser NumPy ?**

Les tableaux NumPy sont plus rapides et plus compacts que les listes Python. Un tableau consomme moins de mémoire et est pratique à utiliser. NumPy utilise beaucoup moins de mémoire pour stocker les données et fournit un mécanisme de spécification des types de données. Cela permet d'optimiser encore plus le code.

### Qu'est-ce qu'un tableau?
Un tableau est une structure de données centrale de la bibliothèque `NumPy`. Un tableau dispose d'une grille d'éléments qui peuvent être indexés de différentes manières . Les éléments sont tous du même type, appelés tableau `dtype`.

Une façon d'initialiser les tableaux NumPy est à partir de listes Python, en utilisant des listes imbriquées pour les données à deux dimensions ou plus.


```python
a = np.array([1, 2, 3, 4, 5, 6])
b = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
print(a[0])
print(b[0])
```

La classe `NumPy` `ndarray` est utilisée pour représenter à la fois les matrices et les vecteurs. Un vecteur est un tableau à une seule dimension (il n'y a pas de différence entre les vecteurs ligne et colonne), tandis qu'une matrice fait référence à un tableau à deux dimensions. Pour les tableaux 3D ou de dimension supérieure, le terme tenseur est également couramment utilisé.

# Création de tableau

Pour créer un tableau NumPy, vous pouvez utiliser la fonction np.array().

Tout ce que vous avez à faire pour créer un tableau simple est de lui transmettre une liste. Si vous le souhaitez, vous pouvez également spécifier le type de données dans votre liste.


```python
a = np.array([1, 2, 3])
```

Outre la création d'un tableau à partir d'une séquence d'éléments, vous pouvez facilement créer un tableau rempli de 0's :


```python
np.zeros(2)
```

Ou un tableau rempli de 1's :


```python
np.ones(2)
```

Vous pouvez créer un tableau avec une plage d'éléments :


```python
np.arange(4)
```

Et même un tableau contenant une plage d'intervalles régulièrement espacés. Pour ce faire, vous spécifierez **le premier nombre**, **le dernier nombre** et **la taille du pas**.


```python
np.arange(2, 9, 2)
```

Vous pouvez également utiliser `np.linspace()` pour créer un tableau avec des valeurs espacées linéairement dans un intervalle spécifié :


```python
np.linspace(0, 10, num=5)
```

### Spécification de votre type de données

Bien que le type de données par défaut soit à virgule flottante (`np.float64`), vous pouvez spécifier explicitement le type de données souhaité à l'aide du paramètre nommée `dtype`.


```python
x = np.ones(2, dtype=np.int64)
```

### Ajouter, supprimer et trier des éléments
Trier un élément est simple avec `np.sort()`.


```python
arr = np.array([2, 1, 5, 3, 7, 4, 6, 8])
np.sort(arr) # Attention, on retourne un nouveau tableau
```


```python
a = np.array([1, 2, 3, 4])
>>> b = np.array([5, 6, 7, 8])
```

Vous pouvez les concaténer avec `np.concatenate()`.


```python
np.concatenate((a, b))
```

### Comment connaître la forme et la taille d'un tableau?
`ndarray.ndim` vous indiquera le nombre d'axes, ou dimensions, du tableau.

`ndarray.size` vous dira le nombre total d'éléments du tableau. C'est le produit des éléments de la forme du tableau.

`ndarray.shape` affichera un tuple d'entiers indiquant le nombre d'éléments stockés le long de chaque dimension du tableau. Si, par exemple, vous avez un tableau 2D avec 2 lignes et 3 colonnes, la forme de votre tableau est .(2, 3)

Par exemple, si vous créez ce tableau :


```python
array_example = np.array([[[0, 1, 2, 3],
                           [4, 5, 6, 7]],
                          [[0, 1, 2, 3],
                           [4, 5, 6, 7]],
                          [[0 ,1 ,2, 3],
                           [4, 5, 6, 7]]])

print(array_example.ndim)
print(array_example.size)
print(array_example.shape)
```

### Indexation et découpage
Vous pouvez indexer et découper des tableaux NumPy de la même manière que vous pouvez découper des listes Python.


```python
data = np.array([1, 2, 3])
print(data[1])
print(data[0:2])
print(data[1:])
print(data[-2:])
```

Si vous souhaitez sélectionner des valeurs de votre tableau qui remplissent certaines conditions, c'est simple avec NumPy.


```python
a = np.array([[1 , 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
print(a[a < 5])

five_up = (a >= 5)
print(a[five_up])

divisible_by_2 = a[a%2==0]
print(divisible_by_2)

five_up = (a > 5) | (a == 5)
print(five_up)
```

Vous pouvez utiliser `np.nonzero()` pour imprimer les indices des éléments qui sont, par exemple, inférieurs à 5 :


```python
b = np.nonzero(a < 5)
print(b)
```
