# Laboratoire 10 — Solutions

### Exercice 1 — Maximum (pseudocode)

```
Algorithme Maximum(t, n)
  max ← t[0]
  pour i de 1 à n−1 faire
    si t[i] > max alors
      max ← t[i]
    fin si
  fin pour
  retourner max
```

### Exercice 2 — Complexité du maximum

On parcourt les `n` éléments une seule fois → **O(n)**.

### Exercice 3 — Recherche séquentielle

```c
int rechercher(int t[], int n, int x) {
    for (int i = 0; i < n; i++)
        if (t[i] == x) return i;
    return -1;
}
```

Pire cas : `x` absent → `n` comparaisons → **O(n)**.

### Exercice 4 — Recherche dichotomique

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

L'espace de recherche est divisé par 2 à chaque itération → **O(log n)**.
(Le tableau doit être **trié**.)

### Exercice 5 — Tri à bulles

```c
void triBulles(int t[], int n) {
    for (int i = 0; i < n - 1; i++)
        for (int j = 0; j < n - 1 - i; j++)
            if (t[j] > t[j + 1]) {
                int temp = t[j];
                t[j] = t[j + 1];
                t[j + 1] = temp;
            }
}
```

Deux boucles imbriquées → environ `n²/2` comparaisons → **O(n²)**.

### Exercice 6 — Double boucle

```
for i = 0 .. n−1      (n itérations)
  for j = 0 .. n−1    (n itérations)
```

Total : `n × n = n²` → **O(n²)**.

### Exercice 7 — Classement

**O(1) < O(log n) < O(n) < O(n²) < O(2ⁿ)**

### Exercice 8 — Boucle simple

`for (i = 0; i < n; i++)` effectue exactement **n itérations** → complexité **O(n)**.

### Exercice 9 — Boucles `j < i`

```
for i = 0 .. n−1
  for j = 0 .. i−1
```

Nombre total d'itérations : `0 + 1 + 2 + … + (n−1) = n(n−1)/2` → **O(n²)**.

### Exercice 10 — Somme des éléments pairs (pseudocode)

```
Algorithme SommePairs(t, n)
  somme ← 0
  pour i de 0 à n−1 faire
    si t[i] mod 2 = 0 alors
      somme ← somme + t[i]
    fin si
  fin pour
  retourner somme
```

Complexité : **O(n)** (un seul parcours).
