# Laboratoire 5 — Solutions

### Exercice 1 — Positif / négatif / nul

```c
#include <stdio.h>

int main() {
    int n;
    printf("Un entier : ");
    scanf("%d", &n);

    if (n > 0)
        printf("positif\n");
    else if (n < 0)
        printf("négatif\n");
    else
        printf("nul\n");
    return 0;
}
```

### Exercice 2 — Pair ou impair

```c
#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    if (n % 2 == 0)
        printf("pair\n");
    else
        printf("impair\n");
    return 0;
}
```

### Exercice 3 — Maximum de deux nombres

```c
#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    if (a > b)
        printf("max = %d\n", a);
    else
        printf("max = %d\n", b);
    return 0;
}
```

### Exercice 4 — Maximum de trois nombres

```c
#include <stdio.h>

int main() {
    int a, b, c, max;
    scanf("%d %d %d", &a, &b, &c);

    max = a;
    if (b > max) max = b;
    if (c > max) max = c;

    printf("max = %d\n", max);
    return 0;
}
```

### Exercice 5 — Note en lettre (`if/else if`)

```c
#include <stdio.h>

int main() {
    int note;
    scanf("%d", &note);

    if (note >= 90)
        printf("A\n");
    else if (note >= 80)
        printf("B\n");
    else if (note >= 70)
        printf("C\n");
    else if (note >= 60)
        printf("D\n");
    else
        printf("F\n");
    return 0;
}
```

### Exercice 6 — Note en lettre (`switch`)

```c
#include <stdio.h>

int main() {
    int note;
    scanf("%d", &note);

    switch (note / 10) {
        case 10:
        case 9:  printf("A\n"); break;
        case 8:  printf("B\n"); break;
        case 7:  printf("C\n"); break;
        case 6:  printf("D\n"); break;
        default: printf("F\n");
    }
    return 0;
}
```

### Exercice 7 — Menu

```c
#include <stdio.h>

int main() {
    int choix;
    printf("1. Café\n2. Thé\n3. Chocolat\nChoix : ");
    scanf("%d", &choix);

    switch (choix) {
        case 1: printf("Café\n"); break;
        case 2: printf("Thé\n"); break;
        case 3: printf("Chocolat\n"); break;
        default: printf("Choix invalide\n");
    }
    return 0;
}
```

### Exercice 8 — Maximum avec ternaire

```c
#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    int max = (a > b) ? a : b;
    printf("max = %d\n", max);
    return 0;
}
```

### Exercice 9 — Année bissextile

```c
#include <stdio.h>

int main() {
    int annee;
    scanf("%d", &annee);

    if ((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0)
        printf("bissextile\n");
    else
        printf("non bissextile\n");
    return 0;
}
```

### Exercice 10 — Voyelle ou consonne

```c
#include <stdio.h>

int main() {
    char c;
    scanf(" %c", &c);

    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ||
        c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U')
        printf("voyelle\n");
    else
        printf("consonne\n");
    return 0;
}
```
