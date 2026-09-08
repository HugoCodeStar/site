# Laboratoire 4 — Solutions

### Exercice 1 — Déclaration et affichage

```c
#include <stdio.h>

int main() {
    int entier = 42;
    double reel = 3.14;
    char lettre = 'A';

    printf("%d %f %c\n", entier, reel, lettre);
    return 0;
}
```

Affiche : `42 3.140000 A`

### Exercice 2 — Somme et produit

```c
#include <stdio.h>

int main() {
    int a, b;
    printf("Deux entiers : ");
    scanf("%d %d", &a, &b);
    printf("Somme = %d, Produit = %d\n", a + b, a * b);
    return 0;
}
```

### Exercice 3 — Division et modulo

- `17 / 5` = **3** (division entière, troncature)
- `17 % 5` = **2** (reste)
- `-17 / 5` = **-3** (C tronque vers zéro)
- `-17 % 5` = **-2**

### Exercice 4 — Réel avec deux décimales

```c
#include <stdio.h>

int main() {
    double x;
    printf("Un réel : ");
    scanf("%lf", &x);
    printf("%.2f\n", x);
    return 0;
}
```

### Exercice 5 — Opérateurs bit-à-bit

```
a = 12 = 1100₂
b = 10 = 1010₂

a & b = 1000 = 8
a | b = 1110 = 14
a ^ b = 0110 = 6
```

### Exercice 6 — Décalages

```
12 = 1100₂
12 << 1 = 11000₂ = 24   (multiplication par 2)
12 >> 1 = 0110₂ = 6     (division par 2)
```

### Exercice 7 — `&&` vs `&`

`&&` est un opérateur **logique** (résultat vrai/faux), `&` est **bit-à-bit**.

```c
int a = 1, b = 2;
a && b  // → 1 (vrai : les deux sont non nuls)
a & b   // → 0 (01 & 10 = 00)
```

### Exercice 8 — Expressions logiques

- `(5 > 3) && (2 < 1)` → `1 && 0` = **0**
- `(5 > 3) || (2 < 1)` → `1 || 0` = **1**
- `!(5 > 3)` → `!1` = **0**

### Exercice 9 — Celsius → Fahrenheit

```c
#include <stdio.h>

int main() {
    double c, f;
    printf("Température en Celsius : ");
    scanf("%lf", &c);
    f = c * 9.0 / 5.0 + 32.0;
    printf("%.1f °C = %.1f °F\n", c, f);
    return 0;
}
```

### Exercice 10 — Périmètre et aire d'un cercle

```c
#include <stdio.h>
#define PI 3.141592653589793

int main() {
    double r;
    printf("Rayon : ");
    scanf("%lf", &r);
    printf("Périmètre = %.2f\n", 2 * PI * r);
    printf("Aire = %.2f\n", PI * r * r);
    return 0;
}
```
