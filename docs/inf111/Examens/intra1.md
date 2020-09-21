+++
title = "Exemple d'exercices pour l'intra 1"
menuTitle = "Intra 1"
draft = false
weight = 10
+++

### Exercice 1

* Écrivez une méthode statique qui reçoit un nombre de ligne et affiche un triangle rectangle avec le nombre de lignes reçues.

Par exemple, pour 5 lignes, la méthode affiche
```text
*
**
* *
*  *
*****
```

[Solution](/INF111/sources/TriangleRectangle.java)

### Exercice 2

* Écrivez une première classe `Etudiant` avec les champs suivants :
  * id : numéro d'identification
  * cote : cote de l'étudiant (entre 0 et 4.3)
* Ajoutez les méthodes suivantes à la classe :
  * `getCote` retourne la cote de l'étudiant
  * `moyenneCote` est une méthode **statique** qui reçoit un tableau d'`Etudiant` et retourne la moyenne des cotes du tableau d'étudiants.
  * `trouveID` est une méthode **statique** qui reçoit un tableau d'`Etudiant` et un `id` à trouver. La méthode retourne l'indice à lequel l'`id` à été trouvé. Retourne `-1` si l'`id` n'est pas trouvé.

[Solution](/INF111/sources/Etudiant.java)

### Exercice 3

En considérant que la classe `Etudiant` est déjà écrite et fonctionnelle :

* Écrivez une classe `ListeEtudiant` avec une méthode `main` qui :
  * Saisit la taille d'un groupe.
  * Créez un tableau d'`Etudiant` de la taille du groupe saisie.
    * Les étudiant créé sont généré aléatoirement. Leurs `id` sont des valeurs aléatoire entre 0 et 999 et la cote entre 0 et 4.3.
  * Affiche la moyenne des cotes des étudiants.

[Solution](/INF111/sources/ListeEtudiant.java)

### Exercice 4

Pour le tableau suivant, affichez les itérations de l'algorithme du tri merge.

La première ligne affiche le tableau initiale et les lignes suivantes sont la solution.

| 6 | 5 | 3 | 1 | 8 | 7 | 2 | 4 |
|---|---|---|---|---|---|---|---|
| 5 | 6 | 1 | 3 | 7 | 8 | 2 | 4 |
| 1 | 3 | 5 | 6 | 2 | 4 | 7 | 8 |
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |