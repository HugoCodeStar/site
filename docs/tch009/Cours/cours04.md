# Cours 4 — Variables, types et opérateurs

## 1. Variables et types fondamentaux

Une **variable** est un emplacement mémoire nommé qui contient une valeur. On doit la
**déclarer** avant de l'utiliser.

```c
int age;          // déclaration
age = 20;         // affectation
int note = 85;    // déclaration + initialisation
```

### Types fondamentaux

| Type | Contenu | Exemple | Spécificateur |
|------|---------|---------|---------------|
| `int` | entier | `42`, `-7` | `%d` |
| `double` | réel | `3.14`, `-2.5` | `%lf` (lecture) / `%f` (affichage) |
| `char` | caractère | `'A'`, `'7'` | `%c` |

### Tailles et plages courantes (64 bits)

| Type | Taille | Plage |
|------|--------|-------|
| `char` | 1 octet | −128 à 127 |
| `int` | 4 octets | −2 147 483 648 à 2 147 483 647 |
| `double` | 8 octets | ≈ ±1.7 × 10³⁰⁸ |

Modificateurs : `short`, `long`, `unsigned` (ex. `unsigned int`, `long int`).

## 2. Entrées / sorties simples

```c
#include <stdio.h>

int main() {
    int age;
    printf("Quel est votre âge ? ");
    scanf("%d", &age);                    // lecture d'un entier
    printf("Vous avez %d ans.\n", age);
    return 0;
}
```

**Important** : `scanf` requiert l'adresse de la variable (`&age`).

| Lecture | Écriture |
|---------|----------|
| `scanf("%d", &i);` | `printf("%d", i);` |
| `scanf("%lf", &d);` | `printf("%f", d);` |
| `scanf(" %c", &c);` | `printf("%c", c);` |

## 3. Opérateurs arithmétiques

| Opérateur | Opération | Exemple |
|-----------|-----------|---------|
| `+` | addition | `a + b` |
| `-` | soustraction | `a - b` |
| `*` | multiplication | `a * b` |
| `/` | division | `a / b` |
| `%` | modulo (reste) | `a % b` |
| `++` / `--` | incrément / décrément | `a++` |

**Attention à la division entière** : `7 / 2` vaut `3` (pas `3.5`) car les deux opérandes
sont des entiers. Pour une division réelle : `7.0 / 2` ou `(double)7 / 2`.

### Précédence des opérateurs

1. `*`, `/`, `%`
2. `+`, `-`
3. les parenthèses `()` permettent de forcer l'ordre.

## 4. Opérateurs booléens et bit-à-bit

### 4.1 Opérateurs logiques (résultat vrai/faux)

| Opérateur | Signification | Exemple |
|-----------|---------------|---------|
| `&&` | ET logique | `(a > 0) && (b > 0)` |
| `\|\|` | OU logique | `(a > 0) \|\| (b > 0)` |
| `!` | NON logique | `!(a > 0)` |

En C, toute valeur **non nulle** est considérée « vraie », et `0` est « faux ».

### 4.2 Opérateurs bit-à-bit (agissent sur chaque bit)

| Opérateur | Opération |
|-----------|-----------|
| `&` | ET bit-à-bit |
| `\|` | OU bit-à-bit |
| `^` | OU exclusif bit-à-bit |
| `~` | complément (inversion) |
| `<<` | décalage à gauche |
| `>>` | décalage à droite |

**Exemples** avec `a = 12` (`1100₂`) et `b = 10` (`1010₂`) :

```
a & b = 1100 & 1010 = 1000 = 8
a | b = 1100 | 1010 = 1110 = 14
a ^ b = 1100 ^ 1010 = 0110 = 6
~a    = ~1100 = ...0011 = -13 (complément à deux)
a << 1 = 11000 = 24   (multiplication par 2)
a >> 1 = 0110 = 6     (division par 2)
```

### 4.3 Différence entre `&&` et `&`

```c
int a = 1, b = 2;
a && b  // → 1 (vrai, car les deux sont non nuls)
a & b   // → 0 (01 & 10 = 00 en binaire)
```
