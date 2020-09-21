+++
title = "Tour de Hanoi en Java Swing"
menuTitle = "TP3 - Tour de Hanoi"
draft = false
weight = 30
+++

Le troisième projet est la création d'une application avec les librairies graphiques de Java Swing.

Le projet sera découpé en deux parties:

* La conception de l'interface
* L'ajout d'interactions dans l'interface

### Instructions

* En équipe de deux ou trois.
* Étudiez les méthodes des classes fournies pour bien comprendre leurs fonctionnements.
* Implémentez les classes demandées en vous basant sur la documentation fournie.
* Remise sur Moodle le 16 juillet avant 23h59.

### Description de l'application

Nous voulons faire une application qui nous permet de jouer au jeu des [Tours de Hanoï](https://fr.wikipedia.org/wiki/Tours_de_Hano%C3%AF). Le jeu consiste à avoir 3 tours avec des disques placés en ordre de taille débutant sur un des tours. Le but du jeu est de déplacer tous les disques sur une autre tour en respectant les règles suivantes :

* On déplace un seul disque à la fois.
* On ne peut pas placer un disque sur un disque plus petit.

Il est possible de voir une implémentation du jeu pour se familiariser avec ses règles [à l'adresse suivante](https://www.mathsisfun.com/games/towerofhanoi.html).

## Partie 1 - Conception de l'application

Nous voulons avoir une application qui nous permet de jouer au jeu des tours de Hanoi. L'application finale doit ressembler à ceci :

![table](/inf111/images/TP3/hanoiSwing.png)

### Listes des éléments de l'application

### Tour de Hanoi en JComponent

![table](/inf111/images/TP3/HanoiTowerComponent.png)

**Ce composant vous est fourni** dans une version simple pour la partie 1.
Il représente une des tours de Hanoï.

* Type : JComponent
* Taille : 200 * 350

Téléchargé [ici](/TP3/HanoiTowerComponent.java)

### Tour de Hanoï avec bouton

![table](/inf111/images/TP3/HanoiTowerPanel.png)

Ce panel va inclure le composant de la tour de Hanoi avec un bouton pour sélectionner la tour.

* Type : JPanel
* Taille : 200 * 350
* Layout : BoxLayout en Y

### Liste des tours de Hanoï

![table](/inf111/images/TP3/HanoiTowerListPanel.png)

Ce panel va contenir les 3 tours de Hanoï de notre jeu avec leurs boutons respectifs.

* Type : JPanel
* Taille : 600 * 350
* Layout : BoxLayout en X

### Panneau supérieur de sélection de disques

![table](/inf111/images/TP3/HanoiTopPanel.png)

Ce panel va conserver l'information du disque sélectionné qui pourra bouger entre les tours.

* Type : JPanel
* Taille : 600 * 100
* Layout : BoxLayout en X

L'affichage du disque vous est fourni dans une classe de type JComponent. Cette classe aura plus de fonctionnalité durant la deuxième partie.

Vous pouvez trouver la classe du composant du disque [ici](/TP3/HanoiRingStub.java).

### Application principale

![table](/inf111/images/TP3/hanoiSwing.png)

L'application principale va contenir la liste des tours et le panneau supérieur. L'application va aussi inclure un menu avec une option pour une nouvelle partie et la possibilité de quitter l'application.

* Type : JFrame
* Taille : 600 * 400
* Layout : BroderLayout, les tours seront dans le `CENTER` et le panneau supérieur sera dans le `PAGE_START`

## Partie 2 - Interactions de l'application

La deuxième partie du projet va ajouter les fonctionnalités à notre application.
Pour vous aider, remplacer les fichiers fournis par leurs nouvelles versions qui ajoutent des fonctionnalités reliées aux interactions requises.

* [Fichiers fournis](/TP3/FichiersV2.zip)

### Liste des interactions requises dans l'application

#### Menu

* Le bouton new doit générer une nouvelle partie. Pour se faire, on doit utiliser une boite de dialogue qui demande le nombre d'anneaux pour la partie. Si une mauvaise information est entrée, l'erreur doit être bien gérée et on doit recommencer la saisit. Le nombre maximum d'anneaux est 8. Le dialogue de saisit utilise le `JOptionPane.showInputDialog` et l'affichage d'une boite de dialogue utilise `JOptionPane.showMessageDialog`.
* Le bouton quit va terminer l'application.

#### Select

L'interaction principale du programme vient des boutons select de notre application. Le bouton select à deux fonctionnalités :

* Si un anneau est déjà sélectionné (dans la partie du haut), cet anneau doit être déposé sur la tour sélectionnée.
* Si aucun anneau n'est sélectionné, on doit prendre l'anneau supérieur de la tour et le mettre dans l'anneau sélectionner.

Les erreurs pouvant être générées par différents scénarios doivent être gérées:
* Si on sélectionne une tour vide et qu'aucun anneau n’est sélectionné, on indique que la tour sélectionnée est vide.
* Si on tente de déposer un anneau sur une tour qui contient un anneau plus petit à son sommet, on indique qu'il est impossible de faire cette manoeuvre.

L'affichage d'une boite de dialogue utilise `JOptionPane.showMessageDialog`.

## Vidéo des interactions possibles de l'application
[Vidéo démonstratif des fonctionnalités](https://www.screencast.com/t/mow0Gl5uJ)

### Pondération de correction
Consulter la [grille d'évaluation](/grilleevaluation.pdf) pour avoir plus d'informations.
