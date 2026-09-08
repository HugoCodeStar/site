# Laboratoire 9 — Solutions

### Exercice 1 — Somme et moyenne

```c
#include <stdio.h>

int main() {
    int t[5] = {10, 20, 30, 40, 50};
    int somme = 0;

    for (int i = 0; i < 5; i++)
        somme += t[i];

    printf("somme = %d, moyenne = %.1f\n", somme, somme / 5.0);
    return 0;
}
```

### Exercice 2 — Maximum et minimum

```c
#include <stdio.h>

int main() {
    int t[6] = {4, 9, 2, 8, 1, 7};
    int max = t[0], min = t[0];

    for (int i = 1; i < 6; i++) {
        if (t[i] > max) max = t[i];
        if (t[i] < min) min = t[i];
    }
    printf("max = %d, min = %d\n", max, min);   // 9, 1
    return 0;
}
```

### Exercice 3 — Recherche d'un élément

```c
#include <stdio.h>

int main() {
    int t[5] = {3, 8, 1, 6, 4};
    int x = 6, position = -1;

    for (int i = 0; i < 5; i++) {
        if (t[i] == x) {
            position = i;
            break;
        }
    }
    printf("position = %d\n", position);   // 3
    return 0;
}
```

### Exercice 4 — Inverser un tableau

```c
#include <stdio.h>

int main() {
    int t[5] = {1, 2, 3, 4, 5};

    for (int i = 0; i < 5 / 2; i++) {
        int temp = t[i];
        t[i] = t[4 - i];
        t[4 - i] = temp;
    }

    for (int i = 0; i < 5; i++)
        printf("%d ", t[i]);   // 5 4 3 2 1
    printf("\n");
    return 0;
}
```

### Exercice 5 — Matrice 3×3

```c
#include <stdio.h>

int main() {
    int m[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++)
            printf("%d ", m[i][j]);
        printf("\n");
    }
    return 0;
}
```

### Exercice 6 — Somme des lignes

```c
#include <stdio.h>

int main() {
    int m[2][3] = {{1, 2, 3}, {4, 5, 6}};

    for (int i = 0; i < 2; i++) {
        int somme = 0;
        for (int j = 0; j < 3; j++)
            somme += m[i][j];
        printf("somme ligne %d = %d\n", i, somme);   // 6, 15
    }
    return 0;
}
```

### Exercice 7 — Longueur d'une chaîne

```c
#include <stdio.h>

int longueur(char s[]) {
    int i = 0;
    while (s[i] != '\0')
        i++;
    return i;
}

int main() {
    printf("%d\n", longueur("Bonjour"));   // 7
    return 0;
}
```

### Exercice 8 — Copie d'une chaîne

```c
#include <stdio.h>

void copier(char dest[], char src[]) {
    int i = 0;
    while (src[i] != '\0') {
        dest[i] = src[i];
        i++;
    }
    dest[i] = '\0';
}

int main() {
    char a[20], b[] = "Salut";
    copier(a, b);
    printf("%s\n", a);   // Salut
    return 0;
}
```

### Exercice 9 — Comparaison de chaînes

```c
#include <stdio.h>

int comparer(char a[], char b[]) {
    int i = 0;
    while (a[i] != '\0' && b[i] != '\0') {
        if (a[i] != b[i])
            return a[i] - b[i];
        i++;
    }
    return a[i] - b[i];
}

int main() {
    printf("%d\n", comparer("abc", "abc"));   // 0
    printf("%d\n", comparer("abc", "abd"));   // négatif
    return 0;
}
```

### Exercice 10 — Concaténation

```c
#include <stdio.h>

void concatener(char dest[], char src[]) {
    int i = 0, j = 0;
    while (dest[i] != '\0') i++;      // aller à la fin de dest
    while (src[j] != '\0') {
        dest[i] = src[j];
        i++;
        j++;
    }
    dest[i] = '\0';
}

int main() {
    char a[20] = "Bonjour";
    concatener(a, " !");
    printf("%s\n", a);   // Bonjour !
    return 0;
}
```

### Exercice 11 — Compter les voyelles

```c
#include <stdio.h>

int main() {
    char s[] = "programmation";
    int voyelles = 0;

    for (int i = 0; s[i] != '\0'; i++) {
        char c = s[i];
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
            voyelles++;
    }
    printf("voyelles = %d\n", voyelles);
    return 0;
}
```

### Exercice 12 — Inverser une chaîne

```c
#include <stdio.h>
#include <string.h>

int main() {
    char s[] = "abcd";
    int n = strlen(s);

    for (int i = 0; i < n / 2; i++) {
        char temp = s[i];
        s[i] = s[n - 1 - i];
        s[n - 1 - i] = temp;
    }
    printf("%s\n", s);   // dcba
    return 0;
}
```
