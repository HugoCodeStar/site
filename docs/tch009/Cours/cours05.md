# Cours 5 — Structures de contrôle conditionnelles

## 1. Opérateurs de comparaison

| Opérateur | Signification |
|-----------|---------------|
| `==` | égal à |
| `!=` | différent de |
| `<` | inférieur à |
| `>` | supérieur à |
| `<=` | inférieur ou égal |
| `>=` | supérieur ou égal |

**Attention** : `=` est l'affectation, `==` est la comparaison.

## 2. Instruction `if` / `else if` / `else`

```c
if (condition) {
    // exécuté si la condition est vraie
} else if (autre_condition) {
    // exécuté si la première est fausse et la seconde vraie
} else {
    // exécuté sinon
}
```

**Exemple** :

```c
int note = 85;

if (note >= 90) {
    printf("A\n");
} else if (note >= 80) {
    printf("B\n");
} else if (note >= 70) {
    printf("C\n");
} else {
    printf("Échec\n");
}
```

Les accolades `{}` sont obligatoires pour un bloc de plusieurs instructions.

## 3. Instruction `switch…case`

Utile pour tester une même expression contre plusieurs valeurs.

```c
switch (expression) {
    case valeur1:
        // instructions
        break;
    case valeur2:
        // instructions
        break;
    default:
        // exécuté si aucun case ne correspond
}
```

**Exemple** (menu) :

```c
int choix = 2;

switch (choix) {
    case 1: printf("Ajouter\n"); break;
    case 2: printf("Supprimer\n"); break;
    case 3: printf("Quitter\n"); break;
    default: printf("Choix invalide\n");
}
```

- `break` empêche de « tomber » dans le `case` suivant.
- Sans `break`, l'exécution continue au `case` suivant.
- `switch` ne fonctionne qu'avec des types entiers (`int`, `char`).

## 4. Opérateur ternaire `?:`

Forme condensée d'un `if/else` :

```c
max = (a > b) ? a : b;
```

Équivalent à :

```c
if (a > b)
    max = a;
else
    max = b;
```

## 5. Conditions imbriquées

```c
if (annee % 4 == 0) {
    if (annee % 100 != 0 || annee % 400 == 0) {
        printf("Bissextile\n");
    }
}
```
