# Cours 7 — Programmation modulaire et organisation de projets

## 1. Approches de développement logiciel

### 1.1 Approche descendante (top-down)

On part du problème global, qu'on décompose en sous-problèmes de plus en plus fins.

```
Programme principal
 ├── Saisie des données
 ├── Calcul
 │    ├── Calcul partiel 1
 │    └── Calcul partiel 2
 └── Affichage des résultats
```

On écrit d'abord le `main()` qui appelle des fonctions, puis on implémente ces fonctions.

### 1.2 Approche ascendante (bottom-up)

On construit d'abord les fonctions de base (utilitaires), puis on les assemble en modules
de plus haut niveau.

## 2. Programmation modulaire

Un **module** = un ensemble de fonctions traitant un même sujet (ex. module de calcul,
module d'affichage, module de saisie).

Avantages :
- **Lisibilité** : chaque fonction est courte et claire.
- **Réutilisation** : les modules peuvent servir dans d'autres projets.
- **Maintenance** : on modifie un module sans toucher aux autres.
- **Testabilité** : on teste chaque fonction séparément.

## 3. Organisation de projets en C

Un projet C se compose typiquement de :

- **Fichiers `.c`** : implémentations des fonctions.
- **Fichiers `.h`** (en-têtes) : prototypes, constantes et types.

### Exemple

**calcul.h** (prototypes) :

```c
#ifndef CALCUL_H
#define CALCUL_H

int addition(int a, int b);
int soustraction(int a, int b);

#endif
```

**calcul.c** (implémentation) :

```c
#include "calcul.h"

int addition(int a, int b) {
    return a + b;
}

int soustraction(int a, int b) {
    return a - b;
}
```

**main.c** :

```c
#include <stdio.h>
#include "calcul.h"

int main() {
    printf("%d\n", addition(5, 3));   // 8
    return 0;
}
```

- `#include "calcul.h"` (guillemets) pour les fichiers du projet,
  `#include <stdio.h>` (chevrons) pour les librairies système.
- Les **garde-fous** (`#ifndef` / `#define` / `#endif`) évitent la double inclusion.

## 4. Portée des variables

| Type | Portée | Durée de vie |
|------|--------|--------------|
| **Locale** | Dans la fonction où elle est déclarée | Le temps de la fonction |
| **Globale** | Tout le programme | Toute l'exécution |
| **Statique** (`static`) | Limitée au fichier / persiste entre appels | Toute l'exécution |

```c
int globale = 10;        // visible partout

void f() {
    int locale = 5;      // visible seulement dans f()
    static int compteur = 0;  // conserve sa valeur entre les appels
    compteur++;
}
```

**Bonne pratique** : limiter au maximum les variables globales ; préférer le passage de
paramètres.
