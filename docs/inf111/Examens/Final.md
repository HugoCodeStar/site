+++
title = "Exemple d'exercices pour le final"
menuTitle = "Final"
draft = false
weight = 30
+++

### Note
L'examen final porte sur toute la matière vue dans le cours. Il est donc conseiller de refaire la révision de l'intra 2 pour être bien préparé à l'examen. Les exercices suivants portent sur la matière entre l'intra 2 et l'examen final :

* Les exceptions
* Swing

### Exercice 1

![table](/INF111/images/finalApp.png)

Reproduisez l'application suivante en Swing.
L'application à les caractéristique suivantes:

* Taille : 500 x 100
* Layout : Flow

Ajoutez l'intéraction suivante :

* Quand le boutton est peser, l'application affiche une boite de dialogue. 
* Si un des deux champs de textes est vide, on affiche un message d'erreur. 
* Si les deux champs de textes sont remplis, on affiche le message "Bonjour, prénom nom!".

* Note : Une liste des méthodes des différents composant sera donné à l'examen.

#### Solution
[Source](/INF111/sources/ApplicationRevFinal.java)


### Exercice 2
Avec le code de départ suivant qui calcule la moyenne autour d'une case d'une matrice :

```java
    public static double moyenneCases(double[][] mat, int ligne, int colonne){
        double somme = 0;
        
        for (int i = -1; i <= 1; i++) {
            for (int j = -1; j <= 1; j++) {
                somme += mat[ligne + i][colonne + j]
            }
        }
        
        return somme / 9;
    }
```

Le code suivant va lever une exception `IndexOutOfBoundsException` si on prend une ligne et colonne initiale sur le rebords de la matrice.

Réécrivrez la méthode précédente en ajoutant la gestion d'erreur pour les Exception `IndexOutOfBoundsException`. Utilisez un `try/catch` qui va ajouter la case centrale à la place de chaque case étant à l'extérieur de la matrice.

#### Solution
[Source](/INF111/sources/ExceptionRevFinal.java)