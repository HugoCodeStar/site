# Cours 6 — Structures itératives et introduction aux sous-programmes

## 1. Boucle `while`

Répète un bloc **tant que** la condition est vraie. La condition est testée **avant** chaque
itération (peut ne jamais s'exécuter).

```c
int i = 1;
while (i <= 5) {
    printf("%d ", i);
    i++;
}
// affiche : 1 2 3 4 5
```

## 2. Boucle `do…while`

Répète un bloc **jusqu'à** ce que la condition soit fausse. La condition est testée **après**
chaque itération (le bloc s'exécute **au moins une fois**).

```c
int i = 1;
do {
    printf("%d ", i);
    i++;
} while (i <= 5);
// affiche : 1 2 3 4 5
```

Usage typique : validation d'entrée.

```c
int n;
do {
    printf("Entrez un nombre positif : ");
    scanf("%d", &n);
} while (n <= 0);
```

## 3. Boucle `for`

Regroupe l'initialisation, la condition et l'incrément en une seule ligne.

```c
for (initialisation; condition; incrément) {
    // instructions
}
```

**Exemple** :

```c
for (int i = 0; i < 5; i++) {
    printf("%d ", i);
}
// affiche : 0 1 2 3 4
```

### Cas classiques

- Somme de 1 à n : `for (i = 1; i <= n; i++) somme += i;`
- Factorielle : `for (i = 1; i <= n; i++) fact *= i;`
- Table de multiplication : `for (i = 1; i <= 10; i++) printf("%d x %d = %d\n", n, i, n*i);`

## 4. Choix de la boucle

| Situation | Boucle conseillée |
|-----------|-------------------|
| Nombre d'itérations connu | `for` |
| Condition d'arrêt non connue d'avance | `while` |
| Exécution au moins une fois | `do…while` |

## 5. Introduction aux sous-programmes (fonctions)

Une **fonction** regroupe des instructions sous un nom, reçoit des paramètres et peut
retourner une valeur.

```c
type_retour nom(type param1, type param2) {
    // instructions
    return valeur;
}
```

**Exemple** :

```c
int addition(int a, int b) {
    return a + b;
}

int main() {
    int resultat = addition(3, 4);
    printf("%d\n", resultat);   // affiche 7
    return 0;
}
```

- Le **prototype** déclare la fonction avant son utilisation : `int addition(int a, int b);`
- Une fonction `void` ne retourne rien.
- Une fonction doit être **déclarée avant son appel** (prototype ou définition).
