---
title: Fichiers et exceptions
sidebar_label: 5 - Fichiers et exceptions
---

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

## Exercice 1

* Écrivez un programme qui saisit une liste de noms et l'écrit dans un fichier. Le programme continue la saisie jusqu'à ce qu'une saisit soit vide.
  
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

## Exercice 2
* Écrivez un programme qui lit un fichier texte de notes d'évaluations. Chaque note est contenue sur une ligne individuelle du fichier. La fonction trouve la moyenne des notes et l'affiche.

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