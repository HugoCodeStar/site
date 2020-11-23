---
title: Programmes à faire de l'atelier 6
sidebar_label: 9 - POO
---

## Pet

Écrivez une classe nommée Pet, qui doit avoir les attributs de données suivants:
* `__name` (pour le nom d'un animal domestique)
* `__animal_type` (pour le type d’animal qu’un animal de compagnie est. Les exemples de valeurs sont «Chien», «Chat»,
et «Oiseau»)
* `__age` (pour l'âge de l'animal)
La classe Pet doit avoir une méthode `__init__` qui crée ces attributs. Il devrait également avoir les méthodes suivantes:
* `set_name`
Cette méthode affecte une valeur au champ `__name`.
* `set_animal_type`
Cette méthode affecte une valeur au champ `__animal_type`.
* `set_age`
Cette méthode affecte une valeur au champ `__age`.
* `get_name`
Cette méthode renvoie la valeur du champ de `__name`.
* `get_animal_type`
Cette méthode renvoie la valeur du champ `__animal_type`.
* `get_age`
Cette méthode renvoie la valeur du champ `__age`.

Une fois que vous avez écrit la classe, écrivez un programme qui crée un objet de la classe et invite l'utilisateur à entrer le nom, le type et l'âge de son animal de compagnie. Ces données doivent être stockées en tant qu'attributs de l'objet. Utilisez les méthodes d'accès de l'objet pour récupérer le nom, le type et l'âge de l'animal et afficher ces données à l'écran.

## Car 

Écrivez une classe nommée Car qui possède les attributs de données suivants:
* `__year_model` (pour le modèle de l'année de la voiture)
* `__make` (pour la marque de la voiture)
* `__speed` (pour la vitesse actuelle de la voiture)
La classe Car doit avoir une méthode __init__ qui accepte le modèle d’année de la voiture et qui l’utilise comme arguments. Ces valeurs doivent être affectées aux attributs de données `__year_model` et `__make` de l'objet. Il doit également affecter 0 à l'attribut de données `__speed`.
La classe doit également avoir les méthodes suivantes:
* `accelerate`
La méthode d'accélération doit ajouter 5 à l'attribut de données de vitesse chaque fois qu'elle est appelée.
* `brake`
La méthode de freinage doit soustraire 5 de l'attribut de données de vitesse chaque fois qu'elle est appelée.
* `get_speed`
La méthode `get_speed` doit renvoyer la vitesse actuelle.


Ensuite, concevez un programme qui crée un objet Car, puis appelle la méthode d'accélération cinq fois. Après chaque appel à la méthode d'accélération, obtenez la vitesse actuelle de la voiture et affichez-la. Appelez ensuite la méthode de freinage cinq fois. Après chaque appel à la méthode de freinage, obtenez la vitesse actuelle de la voiture et affichez-la.