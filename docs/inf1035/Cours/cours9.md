---
title: Programmation orientée-objet
sidebar_label: 9 - POO
sidebar_position: 9
---

## Programmation orientée-objet

* La programmation orientée-objet (POO) est un paradigme de programmation qui permet de conceptualiser des problèmes complexes d'une manière plus humaine.
* On considère les éléments du problème comme étant des entités distinctes (des objets) qui pourront évoluer face à la problématique.
* Cela vient en contraste à la programmation procédurale qui se base sur le flux séquentiel des instructions et de l'utilisation de fonctions avec des entrées et sorties bien définies.

## Les objets

* Un objet représente deux informations :
  * Les données (attributs, variables)
  * Les comportements (méthodes, fonctions)

Par exemple, une alarme aura les informations suivantes:

Attributs:
* current_second (0–59)
* current_minute (0–59)
* current_hour (1–12)
* alarm_time (heure et minute valide)
* alarm_is_set (True, False)

Méthodes:
* set_time
* set_alarm_time 
* set_alarm_on
* set_alarm_off

## Classes
Une classe est un gabarit pour la construction d'objet. On peut aussi le voir comme une recette.

La classe est le code qui pourra décrire les différents objets qui sont créés à partir de la classe. Les objets créés à partir d'une classe sont nommés les instances de la classe.


## Exemple d'une classe

La classe est indiquée par le bloc de code `class` qui va contenir différentes méthodes de la classe.

```python
import random

# Simulation d'une pièce de monaie

class Coin:
    
    # __init__ initialise a 'Face'.
    
    def __init__(self):
        self.sideup = 'Face'
    
    def toss(self):
        # Génération aléatoire de nombre pour
        # "lancer" la pièce
        if random.randint(0, 1) == 0:
            self.sideup = 'Face'
        else:
            self.sideup = 'Pile'

    # Retourne l'état courant de la pièce
    
    def get_sideup(self):
        return self.sideup


```

## Méthodes d'une classe

* Les méthodes sont des définitions de fonctions à l'intérieur d'une classe.
* Chaque fonction doit recevoir le paramètre obligatoire `self`. Le `self` fait référence à l'instance de l'objet à manipuler.

* La méthode `__init__` est spéciale, car c'est la méthode qui sera appelée à l'initialisation d'une nouvelle instance (un objet) de la classe. Elle permet donc d'initialiser les différentes données de l'instance.

* Les attributs sont attachés au `self` et peuvent être ensuite modifié en utilisant l'opérateur `.`.

## Création d'objets à partir d'une classe
Suivant l'exemple de la classe `Coin`:

```python
def main():
    # Création de l'objet avec la méthode init
    my_coin = Coin()

    # Affiche l'état de la pièce
    print('This side is up:', my_coin.get_sideup())

    # Lance la pièce
    print('I am tossing the coin...')
    my_coin.toss()

    # Affiche l'état de la pièce
    print('This side is up:', my_coin.get_sideup())
    
main()

```

## Attributs privés
Il est possible de cacher les attributs pour que ceux-ci ne soient pas accessibles à l'extérieur de la classe.

```python
import random

class Coin:

    def __init__(self):
        self.__sideup = 'Heads'

    def toss(self):
        if random.randint(0, 1) == 0:
            self.__sideup = 'Heads'
        else:
            self.__sideup = 'Tails'

    def get_sideup(self):
        return self.__sideup
```

Les attributs avec deux tirets bas seront cachés à un accès public.

## Multiple instance
Chaque objet aura ses propres valeurs dans les attributs.

```python

def main():
    coin1 = Coin()
    coin2 = Coin()
    coin3 = Coin()

    print('I have three coins with these sides up:')
    print(coin1.get_sideup())
    print(coin2.get_sideup())
    print(coin3.get_sideup())
    print()
    
    print('I am tossing all three coins...')
    print()
    coin1.toss()
    coin2.toss()
    coin3.toss()

    print('Now here are the sides that are up:')
    print(coin1.get_sideup())
    print(coin2.get_sideup())
    print(coin3.get_sideup())
    print()

main()

```

## Accesseurs et mutateurs

Pour avoir un meilleur contrôle sur les données des objets, on utilise habituellement des attributs privés et on expose des méthodes d'accès (get) et de mutation (set) pour travailler sur les attributs.

Par exemple, l'attribut `__sideup` de la classe `Coin` pourrait avoir la méthode `get_sideup` qui retourne la valeur de l'attribut et la méthode `set_sideup` qui reçoit et assigne une nouvelle valeur à l'attribut. Les méthodes d'accès et de mutations permettent d'ajouter de la validation à la modification d'attributs.

