# Cours 10 — Algorithmique et complexité

## 1. Notion d'algorithme

Un **algorithme** est une suite finie d'étapes précises qui résout un problème. Il se décrit
en **pseudocode**, indépendamment du langage.

```
Algorithme Somme(n)
  somme ← 0
  pour i de 1 à n faire
    somme ← somme + i
  fin pour
  retourner somme
```

Propriétés : **fini**, **précis** (non ambigu), **entrées/sorties** définies.

## 2. Complexité

La **complexité** mesure les ressources consommées par un algorithme en fonction de la taille
`n` des données :

- **Complexité en temps** : nombre d'opérations.
- **Complexité en espace** : mémoire utilisée.

On s'intéresse au **pire cas** et au comportement **asymptotique** (quand n devient grand).

## 3. Notation grand O

La notation **O** décrit l'ordre de grandeur de la complexité.

| Complexité | Nom | Exemple |
|------------|-----|---------|
| O(1) | constante | accès à un élément d'un tableau |
| O(log n) | logarithmique | recherche dichotomique |
| O(n) | linéaire | recherche séquentielle |
| O(n log n) | quasi-linéaire | tri fusion |
| O(n²) | quadratique | tri à bulles, double boucle |
| O(2ⁿ) | exponentielle | certaines récursions naïves |

```
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)
```

## 4. Exemples

### 4.1 Recherche séquentielle — O(n)

```c
int rechercher(int t[], int n, int x) {
    for (int i = 0; i < n; i++) {
        if (t[i] == x) return i;
    }
    return -1;
}
```

Dans le pire cas, on parcourt les `n` éléments → **O(n)**.

### 4.2 Recherche dichotomique — O(log n)

Nécessite un tableau **trié**. On divise l'espace de recherche par 2 à chaque étape.

```c
int dichotomie(int t[], int n, int x) {
    int debut = 0, fin = n - 1;
    while (debut <= fin) {
        int milieu = (debut + fin) / 2;
        if (t[milieu] == x) return milieu;
        if (t[milieu] < x) debut = milieu + 1;
        else fin = milieu - 1;
    }
    return -1;
}
```

→ **O(log n)** car l'espace est divisé par 2 à chaque itération.

### 4.3 Tri à bulles — O(n²)

```c
for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - 1 - i; j++) {
        if (t[j] > t[j + 1]) {
            int temp = t[j];
            t[j] = t[j + 1];
            t[j + 1] = temp;
        }
    }
}
```

Deux boucles imbriquées → **O(n²)**.

### 4.4 Analyser une double boucle

```c
for (int i = 0; i < n; i++)        // n itérations
    for (int j = 0; j < n; j++)    // n itérations chacune
        printf("*");
```

Total ≈ `n × n` opérations → **O(n²)**.
