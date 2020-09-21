+++
title = "Tableaux"
menuTitle = "Tableaux"
draft = false
weight = 2050
+++

* Les tableaux sont des collections de plusieurs éléments de même type sous un seul identificateur
* Le tableau est construit de cases mémoire consécutives en mémoire
* À chaque élément du tableau, on associe un indice qui permet de facilement accéder aux cases individuellement
* Les tableaux sont statiques, une fois créés, ils ne peuvent changer de taille

### Initialisation
Un nouveau tableau est créé avec le `new`. Les braquettes carrées `[` `]` seront utilisées pour indiquer l'utilisation d'un tableau.

```java
// Tableau de 10 cases de ints
int[] nombres = new int[10];
double[] nombresDirect = {45.4, -56.43, 34.6};

// L'initialisation peut utiliser une taille variable
int taille = sc.nextInt();
double[] nombresReel = new double[taille];
```

### Accès aux éléments du tableau
Les braquettes carrées vont nous permettre de sélectionner une case spécifique du tableau.
Faire attention, **la première case du tableau est la case 0**.

```java
// Parcourir les cases d'un tableau
for (int i = 0; i < nombres.length; i++){
    System.out.println(nombres[i]);
}
```

### Boucle `for` améliorée
Il existe une autre boucle for pour parcourir tous les éléments d'un tableau. La syntaxe est simplifiée, mais il existe des limitations à la boucle.

```java
// Trouvez la somme des éléments
for (double el: nombres) {
    somme += el;
}
```

Les limitations sont les suivantes :

* L'itérateur n'est pas disponible dans la boucle.
* L'ordre des opérations n'est pas précisé. La première itération de la boucle ne va pas nécessairement regarder le premier élément.
* Il est interdit de modifier les éléments du tableau.

### Tableau de deux dimensions
Il est possible de déclarer et d'utiliser des tableaux de deux dimensions en doublant l'utilisation des braquettes carrées. La première paire de braquettes indique la ligne et la deuxième paire la colonne.

Les tableaux de deux dimensions sont rectangulaires. Chaque ligne et colonne seront obligatoirement de même taille.

```java
int[][] tabPosition = new int[10][2];

int[][] counts =
    {
        {1, 2},
        {3, 4}
    };

// Parcourir un tableau de deux dimensions
for (int i = 0; i < counts.length; i++) {
    for (int j = 0; j < counts[0].length; j++) {
        System.out.printf("%8d", counts[i][j]); 
    }
    System.out.println(); 
}
```

### Références
Big Java, Chap 7, 7.1-7.6
Beginning Java, Chap 4, Arrays