# Laboratoire 2 — Solutions

### Exercice 1 — `42₁₀` en binaire (8 bits)

```
42 ÷ 2 = 21 r 0
21 ÷ 2 = 10 r 1
10 ÷ 2 =  5 r 0
 5 ÷ 2 =  2 r 1
 2 ÷ 2 =  1 r 0
 1 ÷ 2 =  0 r 1
```

Restes de bas en haut : `101010` → sur 8 bits : **`00101010₂`**

### Exercice 2 — `200₁₀` en binaire (8 bits)

```
200 = 128 + 64 + 8
    = 11001000₂
```

**Réponse : `11001000₂`**

### Exercice 3 — Plus grand non signé

- 8 bits : `11111111₂` = **255**
- 16 bits : `1111111111111111₂` = **65 535**

Formule générale : `2ⁿ − 1`.

### Exercice 4 — `−12` en complément à deux (8 bits)

```
12          = 00001100
inversion   = 11110011
      + 1   = 11110100
```

**Réponse : `11110100₂`**

### Exercice 5 — `−1` en complément à deux (8 bits)

```
1           = 00000001
inversion   = 11111110
      + 1   = 11111111
```

**Réponse : `11111111₂`**

### Exercice 6 — Décoder `11110000₂` (signé)

Le bit de signe est 1 → nombre négatif. On applique le complément à deux :

```
11110000 → inversion : 00001111 → +1 : 00010000 = 16
```

**Réponse : `−16`**

### Exercice 7 — Décoder `10000000₂` (signé)

Bit de signe 1 → négatif :

```
10000000 → inversion : 01111111 → +1 : 10000000 = 128
```

**Réponse : `−128`**

### Exercice 8 — Plage des entiers signés

- 8 bits : **−128 à 127**
- 16 bits : **−32 768 à 32 767**

Formule : `−2ⁿ⁻¹` à `2ⁿ⁻¹ − 1`.

### Exercice 9 — Codes ASCII

| Caractère | Décimal | Hexadécimal |
|-----------|---------|-------------|
| `'A'` | 65 | 0x41 |
| `'Z'` | 90 | 0x5A |
| `'a'` | 97 | 0x61 |
| `'z'` | 122 | 0x7A |
| `'0'` | 48 | 0x30 |
| `'9'` | 57 | 0x39 |

### Exercice 10 — Décoder `72 105 33`

```
72 = 'H', 105 = 'i', 33 = '!'
```

**Réponse : `Hi!`**

### Exercice 11 — `255 + 1` sur 8 bits non signés

```
11111111 + 00000001 = 100000000  (9 bits)
```

Le 9ᵉ bit ne tient pas sur 8 bits → **dépassement de capacité (overflow)**.
Résultat sur 8 bits : `00000000`, soit `0`.

### Exercice 12 — Complément à deux de `01101010₂`

```
01101010 → inversion : 10010101 → +1 : 10010110
```

**Réponse : `10010110₂`**
