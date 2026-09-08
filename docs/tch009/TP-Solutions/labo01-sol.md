# Laboratoire 1 — Solutions

## Partie A — Conversion vers la base 10

### Exercice 1 — `101101₂` en décimal

```
1×2⁵ + 0×2⁴ + 1×2³ + 1×2² + 0×2¹ + 1×2⁰
= 32 + 0 + 8 + 4 + 0 + 1
= 45
```

**Réponse : `45₁₀`**

### Exercice 2 — `1111₂` en décimal

```
1×2³ + 1×2² + 1×2¹ + 1×2⁰
= 8 + 4 + 2 + 1
= 15
```

**Réponse : `15₁₀`**

### Exercice 3 — `11001100₂` en décimal

```
1×2⁷ + 1×2⁶ + 0×2⁵ + 0×2⁴ + 1×2³ + 1×2² + 0×2¹ + 0×2⁰
= 128 + 64 + 0 + 0 + 8 + 4 + 0 + 0
= 204
```

**Réponse : `204₁₀`**

### Exercice 4 — `10101010₂` en décimal

```
1×2⁷ + 0×2⁶ + 1×2⁵ + 0×2⁴ + 1×2³ + 0×2² + 1×2¹ + 0×2⁰
= 128 + 0 + 32 + 0 + 8 + 0 + 2 + 0
= 170
```

**Réponse : `170₁₀`**

### Exercice 5 — `372₈` en décimal

```
3×8² + 7×8¹ + 2×8⁰
= 3×64 + 7×8 + 2×1
= 192 + 56 + 2
= 250
```

**Réponse : `250₁₀`**

### Exercice 6 — `2F₁₆` en décimal

```
2×16¹ + F×16⁰
= 2×16 + 15×1      (F = 15)
= 32 + 15
= 47
```

**Réponse : `47₁₀`**

---

## Partie B — Conversion depuis la base 10

### Exercice 7 — `45₁₀` en binaire

Divisions successives par 2 :

```
45 ÷ 2 = 22, reste 1
22 ÷ 2 = 11, reste 0
11 ÷ 2 =  5, reste 1
 5 ÷ 2 =  2, reste 1
 2 ÷ 2 =  1, reste 0
 1 ÷ 2 =  0, reste 1
```

Restes lus de bas en haut : `101101`

**Réponse : `101101₂`**

### Exercice 8 — `100₁₀` en binaire

```
100 ÷ 2 = 50, reste 0
 50 ÷ 2 = 25, reste 0
 25 ÷ 2 = 12, reste 1
 12 ÷ 2 =  6, reste 0
  6 ÷ 2 =  3, reste 0
  3 ÷ 2 =  1, reste 1
  1 ÷ 2 =  0, reste 1
```

Restes lus de bas en haut : `1100100`

**Réponse : `1100100₂`**

### Exercice 9 — `255₁₀` en binaire

```
255 ÷ 2 = 127, reste 1
127 ÷ 2 =  63, reste 1
 63 ÷ 2 =  31, reste 1
 31 ÷ 2 =  15, reste 1
 15 ÷ 2 =   7, reste 1
  7 ÷ 2 =   3, reste 1
  3 ÷ 2 =   1, reste 1
  1 ÷ 2 =   0, reste 1
```

Restes lus de bas en haut : `11111111`

**Réponse : `11111111₂`**

### Exercice 10 — `64₁₀` en octal

Divisions successives par 8 :

```
64 ÷ 8 = 8, reste 0
 8 ÷ 8 = 1, reste 0
 1 ÷ 8 = 0, reste 1
```

Restes lus de bas en haut : `100`

**Réponse : `100₈`**

### Exercice 11 — `200₁₀` en hexadécimal

Divisions successives par 16 :

```
200 ÷ 16 = 12, reste 8
 12 ÷ 16 =  0, reste 12 (= C)
```

Restes lus de bas en haut : `C8`

**Réponse : `C8₁₆`**

### Exercice 12 — `31₁₀` en hexadécimal

```
31 ÷ 16 = 1, reste 15 (= F)
 1 ÷ 16 = 0, reste 1
```

Restes lus de bas en haut : `1F`

**Réponse : `1F₁₆`**

---

## Partie C — Conversions binaire ↔ octal / hexadécimal

### Exercice 13 — `11001111₂` en hexadécimal

Regroupement par paquets de 4 bits (de la droite) :

```
1100 1111
  C    F
```

**Réponse : `CF₁₆`**

### Exercice 14 — `10011010₂` en octal

Regroupement par paquets de 3 bits (de la droite) :

```
10011010  →  010 011 010
               2   3   2
```

**Réponse : `232₈`**

### Exercice 15 — `111011₂` en octal

Regroupement par paquets de 3 bits :

```
111 011
 7   3
```

**Réponse : `73₈`**

### Exercice 16 — `5A₁₆` en binaire

Chaque chiffre hexadécimal sur 4 bits :

```
5 → 0101
A → 1010

5A₁₆ = 0101 1010₂ = 1011010₂
```

**Réponse : `1011010₂`** (ou `01011010₂`)

### Exercice 17 — `47₈` en binaire

Chaque chiffre octal sur 3 bits :

```
4 → 100
7 → 111

47₈ = 100111₂
```

**Réponse : `100111₂`**

---

## Partie D — Problèmes et conversions mixtes

### Exercice 18 — `3E₁₆` en octal (via le binaire)

Étape 1 : hexadécimal → binaire (4 bits par chiffre) :

```
3 → 0011
E → 1110

3E₁₆ = 0011 1110₂
```

Étape 2 : binaire → octal (regroupement par 3 bits depuis la droite) :

```
00111110₂  →  000 111 110
               0   7   6
```

**Réponse : `76₈`**

### Exercice 19 — Plus grand nombre sur 8 bits (non signé)

Avec 8 bits, le plus grand nombre est composé de huit `1` :

```
11111111₂
= 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1
= 255
```

**Réponse : `11111111₂` = `255₁₀`**

### Exercice 20 — Nombre de valeurs distinctes avec n bits

Avec `n` bits, chaque bit peut prendre 2 valeurs (0 ou 1). Le nombre total de combinaisons
distinctes est donc :

```
2ⁿ
```

Application sur 8 bits :

```
2⁸ = 256 valeurs (de 0 à 255)
```

**Réponse : `2ⁿ` valeurs ; sur 8 bits → `256` valeurs (0 à 255).**
