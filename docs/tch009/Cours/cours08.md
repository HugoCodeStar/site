# Cours 8 — Pointeurs et fonctions

## 1. Adresse mémoire et pointeur

Chaque variable est rangée en mémoire à une **adresse** précise. Un **pointeur** est une
variable qui contient l'adresse d'une autre variable.

- `&x` : adresse de la variable `x`.
- `*p` : valeur pointée par le pointeur `p` (déréférencement).

```c
int x = 42;
int *p = &x;      // p contient l'adresse de x

printf("%p\n", (void*)p);  // affiche l'adresse
printf("%d\n", *p);        // affiche 42 (contenu de x)
```

## 2. Déclaration et initialisation

```c
int *p;        // pointeur vers un int
double *q;     // pointeur vers un double
char *r;       // pointeur vers un char

int x = 10;
p = &x;        // p pointe vers x
```

- Un pointeur **non initialisé** pointe vers une adresse indéterminée : dangereux.
- Convention : initialiser à `NULL` si aucun objet n'est pointé.

## 3. Déréférencement

```c
int x = 10;
int *p = &x;

*p = 20;        // modifie x à travers le pointeur
printf("%d\n", x);   // affiche 20
```

## 4. Passage de paramètres

### 4.1 Passage par valeur (par défaut)

La fonction reçoit une **copie** de la valeur. Les modifications ne sont pas visibles dans
l'appelant.

```c
void incrementer(int n) {
    n = n + 1;   // modifie la copie seulement
}

int main() {
    int a = 5;
    incrementer(a);
    printf("%d\n", a);   // affiche toujours 5
}
```

### 4.2 Passage par référence (via pointeurs)

On transmet l'**adresse** de la variable. La fonction peut alors modifier la variable
d'origine.

```c
void incrementer(int *n) {
    *n = *n + 1;   // modifie la variable pointée
}

int main() {
    int a = 5;
    incrementer(&a);
    printf("%d\n", a);   // affiche 6
}
```

### Exemple classique : échange de deux valeurs

```c
void echanger(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 3, y = 7;
    echanger(&x, &y);   // x = 7, y = 3
}
```

## 5. Pointeurs et tableaux (aperçu)

Le nom d'un tableau est un pointeur vers son premier élément.

```c
int t[5] = {1, 2, 3, 4, 5};
int *p = t;        // équivaut à &t[0]
printf("%d\n", *p);     // 1
printf("%d\n", *(p+1)); // 2  (arithmétique des pointeurs)
```
