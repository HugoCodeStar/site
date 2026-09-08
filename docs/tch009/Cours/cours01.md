# Cours 1 — Organisation d'un système informatique & bases numériques

## 1. Organisation moderne d'un système informatique

### 1.1 Vue d'ensemble

Un ordinateur moderne est organisé autour du **modèle de von Neumann** : les données et les
programmes sont stockés dans la même mémoire, et un processeur exécute les instructions une
à une.

Composants principaux :

| Composant | Rôle |
|-----------|------|
| **Processeur (CPU)** | Exécute les instructions, effectue les calculs |
| **Mémoire** | Stocke les données et les programmes en cours d'utilisation |
| **Bus internes** | Voies de communication entre les composants |
| **Unités de stockage** | Conservation à long terme des données |
| **Périphériques** | Interaction avec le monde extérieur (entrée/sortie) |


### 1.2 L'unité centrale de traitement (CPU)

Le processeur est composé de :

- **Unité arithmétique et logique (UAL / ALU)** : effectue les opérations arithmétiques
  (addition, soustraction…) et logiques (et, ou, comparaison).
- **Unité de contrôle** : décode les instructions et coordonne les autres composants.
- **Registres** : petites mémoires très rapides situées à l'intérieur du processeur
  (compteur de programme, accumulateur, etc.).
- **Horloge** : cadence l'exécution (fréquence exprimée en GHz).

Le cycle d'exécution d'une instruction : **recherche (fetch) → décodage (decode) →
exécution (execute)**.

### 1.3 La mémoire

La mémoire est organisée en **cellules** (ou cases), chacune ayant une **adresse** unique.
Chaque cellule contient généralement **1 octet** (8 bits).

Types de mémoire :

| Type | Caractéristiques |
|------|------------------|
| **Registres** | Très rapides, très petite capacité, dans le CPU |
| **Mémoire cache** | Rapide, petite capacité, proche du CPU |
| **Mémoire vive (RAM)** | Volatile (perdue à l'extinction), capacité moyenne |
| **Mémoire morte (ROM)** | Non volatile, contient le démarrage (firmware) |
| **Stockage (disque, SSD)** | Lent, grande capacité, non volatile |

**Hiérarchie mémoire** : plus on s'éloigne du CPU, plus la mémoire est lente, grande et
moins coûteuse.

```
CPU ── registres ── cache ── RAM ── disque/SSD
      (rapide)                         (lent)
      (petite)                         (grand)
```

### 1.4 Les bus internes

Un **bus** est un ensemble de fils conducteurs permettant le transfert de données entre
composants. On distingue trois bus principaux :

- **Bus de données** : transporte les données (bidirectionnel).
- **Bus d'adresses** : transporte l'adresse de la donnée à lire/écrire (unidirectionnel).
- **Bus de contrôle** : transporte les signaux de commande (lecture, écriture, etc.).

La **largeur du bus** (en bits) détermine la quantité d'information transférée en une fois
(ex. bus 64 bits).

### 1.5 Les unités de stockage

- **Disque dur (HDD)** : stockage magnétique, grande capacité, mécanique (lent).
- **SSD** : stockage électronique (mémoire flash), rapide, sans pièces mobiles.
- **Stockage amovible** : clé USB, carte mémoire, etc.

### 1.6 Les périphériques et le transfert de données

Les **périphériques** sont des dispositifs externes connectés à l'ordinateur :

- **Périphériques d'entrée** : clavier, souris, scanner, micro…
- **Périphériques de sortie** : écran, imprimante, haut-parleurs…
- **Périphériques d'entrée/sortie** : écran tactile, disque externe, carte réseau…

Le transfert de données vers/depuis les périphériques se fait via des **interfaces**
(USB, HDMI, SATA, PCIe…) et est géré par des **contrôleurs**.

---

## 2. Bases numériques

### 2.1 Notion de base

Une **base** `b` est un système de numération utilisant `b` symboles (chiffres), de `0` à
`b-1`. Un nombre s'écrit comme une suite de chiffres pondérés par des puissances de la base.

| Base | Nom | Chiffres utilisés |
|------|-----|-------------------|
| **2** | Binaire | 0, 1 |
| **8** | Octal | 0 à 7 |
| **10** | Décimal | 0 à 9 |
| **16** | Hexadécimal | 0 à 9, A (10), B (11), C (12), D (13), E (14), F (15) |

**Formule générale** : un nombre `dₙ…d₂d₁d₀` en base `b` vaut :

```
dₙ·bⁿ + … + d₂·b² + d₁·b¹ + d₀·b⁰
```

**Exemple en base 10** :

```
253₁₀ = 2×10² + 5×10¹ + 3×10⁰ = 200 + 50 + 3 = 253
```

**Exemple en base 2** :

```
1011₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11₁₀
```

### 2.2 Notations

Pour éviter toute ambiguïté, on précise la base :

- **Indice** : `1011₂`, `17₈`, `253₁₀`, `A3₁₆`
- **Préfixes** (courants en programmation) :
  - Binaire : `0b1011` (C ne supporte pas `0b` avant C23 ; on utilise souvent la base 16)
  - Octal : `017` (le `0` initial en C)
  - Hexadécimal : `0xA3` (le `0x` en C)

### 2.3 Conversion vers la base 10

Multiplier chaque chiffre par la puissance de la base correspondant à sa position.

**Exemple hexadécimal → décimal** :

```
A3₁₆ = A×16¹ + 3×16⁰ = 10×16 + 3×1 = 160 + 3 = 163₁₀
```

**Exemple octal → décimal** :

```
17₈ = 1×8¹ + 7×8⁰ = 8 + 7 = 15₁₀
```

### 2.4 Conversion de la base 10 vers une autre base

Méthode des **divisions successives** : diviser le nombre par la base et noter les restes,
puis lire les restes **de bas en haut**.

**Exemple : 25₁₀ vers la base 2**

```
25 ÷ 2 = 12, reste 1
12 ÷ 2 =  6, reste 0
 6 ÷ 2 =  3, reste 0
 3 ÷ 2 =  1, reste 1
 1 ÷ 2 =  0, reste 1
        (on s'arrête quand le quotient est 0)

Lecture des restes de bas en haut : 11001₂
```

**Vérification** : `11001₂ = 16 + 8 + 1 = 25₁₀` ✓

**Exemple : 163₁₀ vers la base 16**

```
163 ÷ 16 = 10, reste 3
 10 ÷ 16 =  0, reste 10 (= A)

Lecture de bas en haut : A3₁₆
```

### 2.5 Conversions particulières : binaire ↔ octal ↔ hexadécimal

Les bases 8 et 16 sont des **puissances de 2** (8 = 2³, 16 = 2⁴), ce qui facilite les
conversions.

**Binaire → hexadécimal** : regrouper les bits par paquets de **4** (de la droite vers la
gauche), puis convertir chaque paquet.

```
1010 0011₂ = A3₁₆
1010₂ = 10 = A   0011₂ = 3
```

**Binaire → octal** : regrouper les bits par paquets de **3**.

```
10 011₂ → on complète : 010 011₂ = 2 3 = 23₈
```

**Hexadécimal → binaire** : remplacer chaque chiffre hexadécimal par son équivalent sur
4 bits.

```
A3₁₆ = 1010 0011₂
```

### 2.6 Table de correspondance (0 à 15)

| Décimal | Binaire | Octal | Hexadécimal |
|---------|---------|-------|-------------|
| 0  | 0000 | 0 | 0 |
| 1  | 0001 | 1 | 1 |
| 2  | 0010 | 2 | 2 |
| 3  | 0011 | 3 | 3 |
| 4  | 0100 | 4 | 4 |
| 5  | 0101 | 5 | 5 |
| 6  | 0110 | 6 | 6 |
| 7  | 0111 | 7 | 7 |
| 8  | 1000 | 10 | 8 |
| 9  | 1001 | 11 | 9 |
| 10 | 1010 | 12 | A |
| 11 | 1011 | 13 | B |
| 12 | 1100 | 14 | C |
| 13 | 1101 | 15 | D |
| 14 | 1110 | 16 | E |
| 15 | 1111 | 17 | F |

---

