# Laboratoire 8 — Pointeurs et fonctions

## Consignes

Écrire, compiler et tester chaque programme. Vérifier les adresses affichées.

## Exercices

| N° | Exercice |
|----|----------|
| 1  | Écrire un programme qui affiche la valeur et l'adresse d'une variable (`%p`). |
| 2  | Déclarer un pointeur sur `int`, l'initialiser, puis modifier la variable via le pointeur. |
| 3  | Écrire une fonction `echanger(int *a, int *b)` qui échange deux entiers. |
| 4  | Écrire une fonction `doubler(int *n)` qui double la valeur pointée. |
| 5  | Expliquer pourquoi le passage par valeur ne modifie pas la variable de l'appelant. |
| 6  | Écrire une fonction `mettreAZero(int *p)` qui met la valeur pointée à 0. |
| 7  | Soit `int t[5] = {1,2,3,4,5}; int *p = t;` — afficher `p[0]` et `p[2]`. |
| 8  | Avec le même tableau, afficher `*(p+1)` et `*(p+4)`. |
| 9  | Déclarer un pointeur initialisé à `NULL` et tester s'il est nul. |
| 10 | Écrire une fonction `calcul(a, b, *somme, *produit)` qui retourne somme et produit par pointeurs. |
