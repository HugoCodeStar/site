# Laboratoire 3 — Solutions

### Exercice 1 — Bonjour + prénom

```c
#include <stdio.h>

int main() {
    printf("Bonjour Alex\n");
    return 0;
}
```

### Exercice 2 — Afficher 42 et 'A'

```c
#include <stdio.h>

int main() {
    printf("%d %c\n", 42, 'A');
    return 0;
}
```

Affiche : `42 A`

### Exercice 3 — Lignes et tabulation

```c
#include <stdio.h>

int main() {
    printf("Première ligne\n");
    printf("Colonne1\tColonne2\n");
    return 0;
}
```

### Exercice 4 — Tables de vérité

**ET** : 0 0 0 1 · **OU** : 0 1 1 1 · **XOR** : 0 1 1 0 · **NON** : 1, 0

| A | B | A∧B | A∨B | A⊕B | ¬A |
|---|---|-----|-----|-----|----|
| 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 |

### Exercice 5 — Évaluations

- `1 ∧ 0` = **0**
- `1 ∨ 0` = **1**
- `1 ⊕ 1` = **0**
- `¬0` = **1**

### Exercice 6 — `A ∧ (B ∨ C)`

```
B ∨ C = 0 ∨ 1 = 1
A ∧ 1 = 1 ∧ 1 = 1
```

**Réponse : `1`**

### Exercice 7 — De Morgan

| A | B | ¬(A∧B) | ¬A∨¬B | Égalité |
|---|---|--------|-------|---------|
| 0 | 0 | 1 | 1 | ✓ |
| 0 | 1 | 1 | 1 | ✓ |
| 1 | 0 | 1 | 1 | ✓ |
| 1 | 1 | 0 | 0 | ✓ |

La loi est vérifiée pour toutes les combinaisons.

### Exercice 8 — Calculs

```c
#include <stdio.h>

int main() {
    printf("%d %d\n", 5 + 3, 5 * 3);
    return 0;
}
```

Affiche : `8 15`

### Exercice 9 — Compilateur vs interpréteur

Le **compilateur** traduit tout le programme en code machine avant l'exécution (rapide à
l'exécution, ex. C). L'**interpréteur** traduit et exécute ligne par ligne (ex. Python).

### Exercice 10 — Table de `(A ∧ B) ∨ ¬A`

| A | B | A∧B | ¬A | (A∧B)∨¬A |
|---|---|-----|----|----------|
| 0 | 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 1 | 1 | 0 | 1 |

Résultat : `1, 1, 0, 1`.
