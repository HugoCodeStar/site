+++
title = "Principes d'encapsulation avec les paramètres et retours de méthodes"
menuTitle = "Paramètres, retours et contexte"
draft = false
weight = 3010
+++

### Contexte des méthodes

* Les méthodes sont contextualisées à leurs appels. Le contexte permet d'avoir un environnement "fermé" aux informations externes.
* Les variables d'instances sont disponibles à l'intérieur de méthodes.
* Toutes variables locales à la méthode sont détruites après l'appel de la méthode.

### Passage par valeurs

* L'appel de méthodes se fait en envoyant les paramètres. Quand un paramètre est utilisé (paramètres effectifs), la valeur de celui-ci est envoyée à la méthode.
* Les valeurs reçues sont assignées en variables locales aux paramètres identifiés dans la signature de la méthode (paramètres formels).
* Les paramètres de types primitifs seront donc modifiables durant la méthode, mais seront détruits à la fin de l'appel.
* Les paramètres d'objets n'auront pas le même comportement, car ce sont des références


### Retours

* La seule information qui "sort" de la méthode est le retour.
* Comme les paramètres, seule la valeur du retour sera renvoyée.
* On utilise l'instruction `return` pour envoyer une valeur de retour.
* La méthode se termine immédiatement après l'utilisation d'un `return`.