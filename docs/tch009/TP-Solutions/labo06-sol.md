# Laboratoire 6 — Solutions

### Exercice 1 — 1 à 10 avec `while`

```c
#include <stdio.h>

int main() {
    int i = 1;
    while (i <= 10) {
        printf("%d ", i);
        i++;
    }
    printf("\n");
    return 0;
}
```

### Exercice 2 — 1 à 10 avec `for`

```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 10; i++)
        printf("%d ", i);
    printf("\n");
    return 0;
}
```

### Exercice 3 — Somme des n premiers entiers

```c
#include <stdio.h>

int main() {
    int n, somme = 0;
    scanf("%d", &n);

    for (int i = 1; i <= n; i++)
        somme += i;

    printf("somme = %d\n", somme);
    return 0;
}
```

### Exercice 4 — Factorielle

```c
#include <stdio.h>

int main() {
    int n;
    long long fact = 1;
    scanf("%d", &n);

    for (int i = 1; i <= n; i++)
        fact *= i;

    printf("%d! = %lld\n", n, fact);
    return 0;
}
```

### Exercice 5 — Table de multiplication

```c
#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);

    for (int i = 1; i <= 10; i++)
        printf("%d x %d = %d\n", n, i, n * i);
    return 0;
}
```

### Exercice 6 — Validation avec `do…while`

```c
#include <stdio.h>

int main() {
    int n;
    do {
        printf("Entrez un entier positif : ");
        scanf("%d", &n);
    } while (n <= 0);

    printf("Vous avez entré %d\n", n);
    return 0;
}
```

### Exercice 7 — Fonction `somme`

```c
#include <stdio.h>

int somme(int a, int b) {
    return a + b;
}

int main() {
    printf("%d\n", somme(3, 4));   // 7
    return 0;
}
```

### Exercice 8 — Fonction `max2`

```c
#include <stdio.h>

int max2(int a, int b) {
    return (a > b) ? a : b;
}

int main() {
    printf("%d\n", max2(10, 7));   // 10
    return 0;
}
```

### Exercice 9 — Fonction `estPremier`

```c
#include <stdio.h>

int estPremier(int n) {
    if (n < 2) return 0;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}

int main() {
    printf("%d\n", estPremier(17));   // 1 (premier)
    printf("%d\n", estPremier(15));   // 0 (non premier)
    return 0;
}
```

### Exercice 10 — Nombre de chiffres

```c
#include <stdio.h>

int main() {
    int n, compteur = 0;
    scanf("%d", &n);

    if (n == 0) compteur = 1;
    while (n != 0) {
        n = n / 10;
        compteur++;
    }

    printf("nombre de chiffres = %d\n", compteur);
    return 0;
}
```
