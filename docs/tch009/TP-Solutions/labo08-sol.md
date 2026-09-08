# Laboratoire 8 — Solutions

### Exercice 1 — Valeur et adresse

```c
#include <stdio.h>

int main() {
    int x = 42;
    printf("valeur = %d, adresse = %p\n", x, (void*)&x);
    return 0;
}
```

### Exercice 2 — Modifier via un pointeur

```c
#include <stdio.h>

int main() {
    int x = 10;
    int *p = &x;

    printf("avant : %d\n", x);   // 10
    *p = 20;
    printf("après : %d\n", x);   // 20
    return 0;
}
```

### Exercice 3 — `echanger`

```c
#include <stdio.h>

void echanger(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 3, y = 7;
    echanger(&x, &y);
    printf("x = %d, y = %d\n", x, y);   // x = 7, y = 3
    return 0;
}
```

### Exercice 4 — `doubler`

```c
#include <stdio.h>

void doubler(int *n) {
    *n = *n * 2;
}

int main() {
    int a = 5;
    doubler(&a);
    printf("%d\n", a);   // 10
    return 0;
}
```

### Exercice 5 — Passage par valeur vs référence

En passage **par valeur**, la fonction reçoit une **copie** de la variable : toute
modification affecte la copie, pas l'original. En passage **par référence** (pointeur), la
fonction reçoit l'**adresse** et peut modifier l'original.

### Exercice 6 — `mettreAZero`

```c
#include <stdio.h>

void mettreAZero(int *p) {
    *p = 0;
}

int main() {
    int a = 99;
    mettreAZero(&a);
    printf("%d\n", a);   // 0
    return 0;
}
```

### Exercices 7 et 8 — Pointeur et tableau

```c
#include <stdio.h>

int main() {
    int t[5] = {1, 2, 3, 4, 5};
    int *p = t;

    printf("%d %d\n", p[0], p[2]);     // 1 3
    printf("%d %d\n", *(p+1), *(p+4)); // 2 5
    return 0;
}
```

### Exercice 9 — Pointeur `NULL`

```c
#include <stdio.h>

int main() {
    int *p = NULL;
    if (p == NULL)
        printf("pointeur nul\n");
    return 0;
}
```

### Exercice 10 — `calcul` (somme et produit par pointeurs)

```c
#include <stdio.h>

void calcul(int a, int b, int *somme, int *produit) {
    *somme = a + b;
    *produit = a * b;
}

int main() {
    int s, p;
    calcul(4, 5, &s, &p);
    printf("somme = %d, produit = %d\n", s, p);   // 9, 20
    return 0;
}
```
