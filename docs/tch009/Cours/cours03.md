# Cours 3 — Langage C, premier programme et algèbre booléenne

## 1. Langage et environnement de programmation

### 1.1 Compilateur vs interpréteur

| | Compilateur | Interpréteur |
|---|---|---|
| Fonctionnement | Traduit **tout** le programme en code machine avant l'exécution | Traduit et exécute **ligne par ligne** |
| Exemples | C, C++ (gcc, clang) | Python, JavaScript |
| Performance | Rapide à l'exécution | Plus lent à l'exécution |

Le **C** est un langage **compilé**.

### 1.2 Étapes de la compilation

```
code source (.c) → préprocesseur → compilation → code objet (.o) → édition de liens → exécutable
```

- **Préprocesseur** : traite les directives `#include`, `#define`.
- **Compilation** : traduit en langage machine (code objet).
- **Édition de liens** : assemble le code objet et les librairies en un exécutable.

### 1.3 Programmes et mémoires

Un programme en exécution occupe plusieurs zones mémoire :

| Zone | Contenu |
|------|---------|
| **Code (texte)** | Instructions du programme |
| **Données** | Variables globales et statiques |
| **Pile (stack)** | Variables locales, appels de fonctions |
| **Tas (heap)** | Mémoire allouée dynamiquement (`malloc`) |

## 2. Premier programme en C

```c
#include <stdio.h>   // librairie d'entrées/sorties

int main() {
    printf("Bonjour le monde!\n");
    return 0;
}
```

- `#include <stdio.h>` : inclut les déclarations de la librairie standard d'E/S.
- `int main()` : point d'entrée obligatoire du programme.
- `printf` : affiche à l'écran.
- `\n` : saut de ligne.
- `return 0;` : indique que le programme s'est terminé correctement.

### Spécificateurs de format de `printf`

| Spécificateur | Affichage |
|---------------|-----------|
| `%d` | entier (`int`) |
| `%f` | réel (`double`) |
| `%c` | caractère (`char`) |
| `%s` | chaîne de caractères |

```c
printf("%d et %c\n", 42, 'A');   // affiche : 42 et A
```

## 3. Algèbre booléenne

L'algèbre booléenne manipule des variables qui ne prennent que deux valeurs : **0 (faux)**
ou **1 (vrai)**.

### 3.1 Opérateurs de base

| Opérateur | Symbole logique | Symbole en C |
|-----------|-----------------|--------------|
| NON | `¬` ou `!` | `!` |
| ET | `∧` | `&&` (logique), `&` (bit-à-bit) |
| OU | `∨` | `\|\|` (logique), `\|` (bit-à-bit) |
| OU exclusif | `⊕` | `^` |

### 3.2 Tables de vérité

**NON (négation)**

| A | `¬A` |
|---|------|
| 0 | 1 |
| 1 | 0 |

**ET (conjonction)**

| A | B | `A ∧ B` |
|---|---|---------|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

**OU (disjonction)**

| A | B | `A ∨ B` |
|---|---|---------|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

**OU exclusif (XOR)**

| A | B | `A ⊕ B` |
|---|---|---------|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

### 3.3 Lois importantes

- **Lois de De Morgan** :
  - `¬(A ∧ B) = ¬A ∨ ¬B`
  - `¬(A ∨ B) = ¬A ∧ ¬B`
- **Commutativité** : `A ∧ B = B ∧ A`, `A ∨ B = B ∨ A`
- **Distributivité** : `A ∧ (B ∨ C) = (A ∧ B) ∨ (A ∧ C)`
