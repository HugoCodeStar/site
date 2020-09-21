+++
title = "Exercices de la semaine 2"
menuTitle = "Exercice 2"
draft = true
weight = 999
+++

# Exercice 2

Saisir la largeur et hauteur d'un Rectangle. Créer un objet de type Rectangle et calculer le périmètre du rectangle. Utilisez les méthodes getHeight et getWidth. Affichez le périmètre du rectangle.

Créez un String avec le texte "Mississipi". Remplacez les "i" avec des "ii" avec la méthode replace. Ensuite, remplacer tous les "ss" avec des "s". Afficher la longueur de la chaine finale.

Utilisez la classe StringBuilder pour construire une chaine et la renverser avec la méthode reverse. Créer un objet StringBuilder avec la chaine "Bonjour", renverser la chaine et afficher là.

La classe Random implémente un générateur de nombre pseudo aléatoire, qui produit un nombre d'une séquence aléatoire. Pour générer des nombres entiers, on construit un objet de la classe Random, et on appelle la méthode nextInt. Écrivez un programme qui simule un lancer de dé et affiche le résultat. Chaque exécution doit générer une nouvelle valeur.

Écrivez un programme qui affiche un prix aléatoire entre $10.00 et $19.95.

Écrivez un programme qui construit un Rectangle qui contient un carré positionné avec le point haut gauche à la position (100, 100) et de taille 200. Appelle-les méthode grow et translate qui modifie le carré pour qu'il se positionne au centre du carré original et de la moitié de la taille. Affichez l'objet transformé.
(PICTURE1)

Écrivez un programme qui construit les tableaux avec les valeurs suivantes et les affiches:
* 1 2 3 4 5 6 7 8 9 10
* 0 2 4 6 8 10 12 14 16 18
* 1 4 9 16 25 36 49 65 81 100
* 0 0 0 0 0 0 0 0 0 0
* 0 1 0 1 0 1 0 1 0 1
* 0 1 2 3 4 0 1 2 3 4
ATTENTION : N'assignez pas les valeurs manuellement, utilisez des boucles.

Écrivez un programme qui trouve et affiche la valeur maximum et minimum d'un tableau.

Écrivez un programme qui fait la rotation circulaire des valeurs d'un tableau. Affiche le tableau après la rotation.
(Picture 2)

En ayant deux tableaux représentant des points en x et y dans un plan. Écrivez un programme qui détermine les points en x et y délimitant le plus petit rectangle possible contenant tous les points paraphe.
(Picture 3)

Écrivez un programme qui travaille sur le tableau de deux dimensions suivant:

`int[][] values = new int[4][5];`

* Remplis de 0 et 1 alternativement comme un plateau d'échec
* Remplis la première et dernière ligne de 0
* Trouve la somme de toutes les cases et l'affiche
* Affiche le tableau final


Écrivez un programme qui remplit un tableau de deux dimensions de 0 sauf la première et dernière ligne ainsi que la première et dernière colonne qui sera composée de 1. Affichez le tableau final.

Écrivez un programme qui trouve la somme d'un tableau en ne comptant pas la valeur minimum. **CONTRAINTE** Vous n'avez droit qu'à une seule boucle. Vous devez mettre à jour la somme et la plus petite valeur courant à l'intérieur de la boucle. Affichez le résultat de la somme.

Écrivez un programme qui trouve la somme alternée d'un tableau. La somme alternée alterne entre l'addition et la soustraction pour chaque case du tableau en commençant par l'addition.

Par exemple, le tableau
1 4 9 16 9 7 4 9 11 donne
1–4+9–16+9–7+4–9+11=–2

Écrivez un programme qui fait la saisit de 16 nombres de 1 à 16. Le programme place les chiffres dans une matrice 4x4 et vérifie si la matrice est magique. Une matrice est magique si elle contient les nombres de 1 à 16 et si :

* La somme de chaque ligne est identique
* La somme de chaque colonne est identique
* La somme des diagonales est identique

Écrivez une classe `LightHallwaySwitch` qui simule une lumière qui est contrôlée par deux interrupteurs. Chaque interrupteur peut être à On ou Off et la lumière peut être allumée ou fermée. Un changement de n'importe lequel des interrupteurs change l'état de la lumière.

Implémenter la classe avec ses champs;

Implémenter les méthodes suivantes à la classe:
public int getFirstSwitchState() // 0 for down, 1 for up public int getSecondSwitchState()
public int getLampState() // 0 for off, 1 for on
public void toggleFirstSwitch()
public void toggleSecondSwitch()

Écrit un programme qui teste un cas et affiche le résultat final.


À la classe BankAccount, ajouter la méthode
public void addInterest(double rate)
qui ajoute un intérêt à un solde courant.


Écrivez une classe `SavingsAccount` qui est similaire à `BankAccount,` mais qui contient un champ additionnel `interest` ajouté une méthode `void addInterest()` qui ajoute un intérêt au compte.

Écrivez une classe `Employee`. Un employé contient un nom (`String`) et un salaire (`double`). Implémenté:

* Le constructeur avec deux paramètres 
  * `public Employee(String employeeName, double currentSalary)`
* `public String getName()`
* `public double getSalary()`
* `public void raiseSalary(double byPercent)`


Écrivez une classe `Car` avec les champs suivant:
* Taux de consommation de carburant (en litre/km)
* Un nombre de litres de gaz dans le réservoir à essence

Implémentez un constructeur qui reçoit le taux de consommation et initialise le réservoir à 0.
Implémentez les méthodes suivantes :

* drive
* getGasInTank
* addGas


Écrire une classe `Bug` qui représente un insecte qui se promène sur une ligne horizontale. L'insecte peut bouger vers la gauche ou vers la droite. Initialement, l'insecte se promène vers la droite, mais il peut changer de direction. À chaque mouvement, l'insecte bouge d’une unité dans la direction donnée.

Implémenter les méthodes suivantes :

* public Bug(int initialPosition)
* public void turn() 
* public void move() 
* public int getPosition()

Avec un exemple d'usage :
Bug bugsy = new Bug(10);
bugsy.move(); // Now the position is 11 
bugsy.turn();
bugsy.move(); // Now the position is 10


Implémenté une class `Balloon`, un ballon comment avec un radius de 0. Implémenté les méthodes :

* public void inflate(double amount)
* public double getVolume()

Indice : Utilisez `Math.PI` pour la valeur de pi.


Écrire une classe `Microwave` qui contient 4 boutons:
* Ajoute 30 secondes de cuisson
* Switch la puissance de cuisson entre 1 et 2
* Reset
* Start

Implémenter les méthodes :
* add30Secs
* switchPower
* reset
* start

La méthode start affiche un message qui affiche les message `Cuit pendant ... seconds à la puissance ... .`


Écrivez une classe `Battery` qui modélise une batterie rechargeable. Implémentez les méthodes suivantes:

Le constructeur reçoit une capacité maximale, la batterie commence complètement chargée. Charger la batterie la recharge à sa capacité maximale.

* public Battery(double capacity)
* public void drain(double amount)
* public void charge()
* public getRemainingCapacity()