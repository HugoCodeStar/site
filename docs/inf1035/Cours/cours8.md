---
title: Liste en compréhension, tests unitaires, environnement de développement
sidebar_label: 8 - Liste, Test & IDE
sidebar_position: 8
---

## Liste en compréhension

Une liste en compréhension est un raccourci syntaxique pour créé des liste. Cela permet de faire ce qui est habituellement dans une boucle sur une seule ligne.

```python
squares = []
for x in range(10):
    squares.append(x**2)

# Équivalent avec une liste en compréhension
squares = [x**2 for x in range(10)]
```

## Ajout de condition ou de boucle imbriqués

Il est possible d'avoir après le `for` initial d'autre `for` ou des conditionnelles `if`.

```python
combs = []
for x in [1,2,3]:
    for y in [3,1,4]:
        if x != y:
            combs.append((x, y))

# Équivalent
combs = [(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]
```

## Jupyter Lab/Notebooks

* https://jupyter.org/
* Interface web avec un mélange de texte et d'instruction
* Très utile pour de la visualisation de problème

## IDE

* Les environnements de développement (Integrated Development Environment - IDE) permettent de centraliser dans un application le développement de programme en Python.
* Inversement, il est possible d'executé des script dans la ligne de commande de l'ordinateurs.
* Il existe une panoplie d'IDE. Deux seront regarder aujourd'hui :
  * PyCharm
  * Jupiter Notebook

## PyCharm
* https://www.jetbrains.com/pycharm/
* PyCharm est un IDE pour le développement d'application en python.
  * Gestion de plusieurs fichiers
  * Installation de module externe avec pip
  * Déboguage de code pas à pas

### Déboguage
* Permet de voir chaque pas du programme
* Le programme continue jusqu'au prochain point d'arrêt
* Les structure de données peuvents être évalué localement.

## Test unitaires

* Les tests unitaires est un méthodes standardisé de vérifier le bon fonctionnement des fonctions de notres programmes. 
* Les tests unitaires est des fonctions spécialisé pour vérifier le résultats de d'autres fonctions.

## Tests
* Pour assurer la bonne opération de nos fonctions, des tests seront implémentés;
* Nous utiliserons la libraire `pytest` pour faire nos tests. Il existe d'autres librairies de tests.
* Un test est un script qui, par convention, utilise le nom du programme à tester suivi du mot `test`;
* Le test va convenir des fonctions débutant par le mot `test_` qui seront utilisées par `pytest`;
* La fonction `assert` teste une condition. La fonction ne fait rien si la condition est vraie et génère une erreur si la condition est fausse.
* Le script de tests utilise la fonction `assert` pour faire des appels de la fonction à tester avec des paramètres d'entrées arbitraires;
* Les fonctions de tests n'ont pas de commentaires.

## Exemple de tests
~~~python
# Tests pour des fonctions du module math
import math

def test_factorial():
    assert math.factorial(4) == 24
    assert math.factorial(20) == 2432902008176640000

def test_gcd():
    assert math.gcd(8, 6) == 2
~~~


## Tests de valeurs fractionnaires
* Les valeurs fractionnaires sont plus difficiles à tester, car la comparaison de valeurs fractionnaires est assez difficile;
* Pour tester des valeurs fractionnaires, des valeurs différentielles absolues seront utilisées pour faire le test ou le module `pytest` nous fournit la fonction `approx`.

~~~python
import pytest
import math

# Tests de la fonction sin
assert math.fabs(math.sin(1) - 0.8415) < 0.0001
assert math.fabs(math.sin(2) - 0.9093) < 0.0001 
assert math.fabs(math.sin(1.5) - 0.9975) < 0.0001 

assert math.sin(1) == pytest.approx(0.8414709848)
~~~
