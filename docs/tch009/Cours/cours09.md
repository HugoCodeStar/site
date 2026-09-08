# Cours 9 — Tableaux et chaînes de caractères

## 1. Tableaux à une dimension (1D)

Un **tableau** regroupe plusieurs valeurs du même type dans des cases contiguës en mémoire,
indexées à partir de **0**.

```c
int notes[5];                 // tableau de 5 entiers (indices 0 à 4)
notes[0] = 85;
notes[1] = 90;

int t[5] = {10, 20, 30, 40, 50};   // déclaration + initialisation
```

### Parcours d'un tableau

```c
for (int i = 0; i < 5; i++) {
    printf("%d ", t[i]);
}
```

**Attention** : l'indice maximal est `taille - 1`. Accéder à `t[5]` est une erreur
(dépassement de tableau).

## 2. Tableaux à deux dimensions (2D)

Un tableau 2D est un tableau de tableaux (lignes × colonnes).

```c
int matrice[3][4];   // 3 lignes, 4 colonnes

int m[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
```

### Parcours d'un tableau 2D

```c
for (int i = 0; i < 2; i++) {          // lignes
    for (int j = 0; j < 3; j++) {      // colonnes
        printf("%d ", m[i][j]);
    }
    printf("\n");
}
```

## 3. Chaînes de caractères

En C, une chaîne est un **tableau de `char` terminé par le caractère nul `'\0'`**.

```c
char nom[20] = "Alice";
// contenu : 'A' 'l' 'i' 'c' 'e' '\0' ...
```

| Caractère | 'A' | 'l' | 'i' | 'c' | 'e' | '\0' |
|-----------|---|---|---|---|---|---|
| Indice | 0 | 1 | 2 | 3 | 4 | 5 |

Le `'\0'` marque la fin : c'est lui qui permet aux fonctions de connaître la longueur.

### Saisie et affichage

```c
char nom[50];
printf("Nom : ");
scanf("%s", nom);        // pas de & pour une chaîne
printf("Bonjour %s\n", nom);
```

**Attention** : `scanf("%s", …)` s'arrête au premier espace.

### Fonctions de `<string.h>`

| Fonction | Rôle | Exemple |
|----------|------|---------|
| `strlen(s)` | longueur | `strlen("abc")` → 3 |
| `strcpy(d, s)` | copie | `strcpy(dest, src)` |
| `strcmp(a, b)` | comparaison (0 si égales) | `strcmp("ab","ab")` → 0 |
| `strcat(d, s)` | concaténation | `strcat(d, "!")` |

```c
#include <stdio.h>
#include <string.h>

int main() {
    char a[20] = "Bonjour";
    char b[20];
    strcpy(b, a);              // b = "Bonjour"
    strcat(b, " !");           // b = "Bonjour !"
    printf("%s (%d caractères)\n", b, (int)strlen(b));
    return 0;
}
```
