# Laboratoire 7 — Solutions

### Exercices 1 à 4 — Module `maths`

**maths.h** (prototypes + garde-fou) :

```c
#ifndef MATHS_H
#define MATHS_H

int carre(int x);
int cube(int x);

#endif
```

**maths.c** (implémentation) :

```c
#include "maths.h"

int carre(int x) {
    return x * x;
}

int cube(int x) {
    return x * x * x;
}
```

**main.c** :

```c
#include <stdio.h>
#include "maths.h"

int main() {
    printf("carre(4) = %d\n", carre(4));   // 16
    printf("cube(3) = %d\n", cube(3));     // 27
    return 0;
}
```

Le garde-fou empêche la double inclusion : si `MATHS_H` est déjà défini, le contenu du
fichier est ignoré.

### Exercice 5 — Fonction `void`

```c
#include <stdio.h>

void afficherMenu() {
    printf("1. Addition\n");
    printf("2. Soustraction\n");
    printf("3. Quitter\n");
}

int main() {
    afficherMenu();
    return 0;
}
```

### Exercice 6 — Variable locale vs globale

```c
#include <stdio.h>

int globale = 10;      // visible partout

void f() {
    int locale = 5;    // visible seulement dans f()
    printf("locale = %d, globale = %d\n", locale, globale);
}

int main() {
    f();
    printf("globale = %d\n", globale);
    /* printf("%d", locale); // ERREUR : locale n'existe pas ici */
    return 0;
}
```

### Exercice 7 — Variable `static`

```c
#include <stdio.h>

void compter() {
    static int n = 0;   // initialisée une seule fois
    n++;
    printf("appel n° %d\n", n);
}

int main() {
    compter();   // appel n° 1
    compter();   // appel n° 2
    compter();   // appel n° 3
    return 0;
}
```

### Exercice 8 — Structure d'une calculatrice (descendante)

```
main()
 ├── afficherMenu()
 ├── lireChoix()  → int
 ├── lireOperandes() → double, double
 ├── calculer(choix, a, b) → double
 │    ├── addition()
 │    ├── soustraction()
 │    ├── multiplication()
 │    └── division()
 └── afficherResultat(r)
```

### Exercice 9 — Rôle de l'édition de liens

L'édition de liens assemble les fichiers objets (`.o`) et les librairies en un seul
**exécutable**, en résolvant les appels de fonctions entre les modules.

### Exercice 10 — Module `conversion`

**conversion.h** :

```c
#ifndef CONVERSION_H
#define CONVERSION_H

double celsiusVersFahrenheit(double c);

#endif
```

**conversion.c** :

```c
#include "conversion.h"

double celsiusVersFahrenheit(double c) {
    return c * 9.0 / 5.0 + 32.0;
}
```

**main.c** :

```c
#include <stdio.h>
#include "conversion.h"

int main() {
    printf("%.1f\n", celsiusVersFahrenheit(0));    // 32.0
    printf("%.1f\n", celsiusVersFahrenheit(100));  // 212.0
    return 0;
}
```
