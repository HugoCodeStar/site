# Cours 2 — Représentation binaire des données

## 1. Rappels : bit, octet, n bits

- Un **bit** (binary digit) vaut 0 ou 1.
- Un **octet** = 8 bits.
- Avec **n bits**, on peut représenter **2ⁿ** valeurs différentes.

## 2. Entiers positifs (non signés)

Représentation « binaire pur » : chaque bit est pondéré par une puissance de 2.

**Plage** : avec n bits, de `0` à `2ⁿ − 1`.

| Nombre de bits | Plage (non signé) |
|----------------|-------------------|
| 8 bits (1 octet) | 0 à 255 |
| 16 bits | 0 à 65 535 |
| 32 bits | 0 à 4 294 967 295 |

**Exemple** : `42₁₀` sur 8 bits :

```
42 ÷ 2 = 21 r 0
21 ÷ 2 = 10 r 1
10 ÷ 2 =  5 r 0
 5 ÷ 2 =  2 r 1
 2 ÷ 2 =  1 r 0
 1 ÷ 2 =  0 r 1
→ 101010₂, sur 8 bits : 00101010
```

## 3. Entiers signés (positifs et négatifs)

Trois méthodes historiques, dont seule la dernière est utilisée aujourd'hui.

### 3.1 Signe et magnitude

Le bit le plus significatif indique le signe (0 = positif, 1 = négatif), le reste représente
la magnitude.

- `+5` sur 8 bits → `00000101`
- `−5` sur 8 bits → `10000101`

Inconvénients : deux zéros (`00000000` et `10000000`), addition compliquée.

### 3.2 Complément à un

On inverse tous les bits pour obtenir l'opposé.

- `+5` → `00000101`
- `−5` → `11111010`

Inconvénient : encore deux zéros.

### 3.3 Complément à deux (standard)

**Méthode** : pour obtenir `−N`, on inverse tous les bits de `N` puis on **ajoute 1**.

**Exemple** : `−5` sur 8 bits :

```
+5        = 00000101
inversion = 11111010
   +1     = 11111011
→ −5 = 11111011₂
```

**Vérification** : `11111011` + `00000101` = `100000000` → le 9ᵉ bit déborde, résultat 0. ✓

**Plage du complément à deux sur n bits** : de `−2ⁿ⁻¹` à `2ⁿ⁻¹ − 1`.

| Nombre de bits | Plage (signé) |
|----------------|----------------|
| 8 bits | −128 à 127 |
| 16 bits | −32 768 à 32 767 |
| 32 bits | −2 147 483 648 à 2 147 483 647 |

### 3.4 Décoder un nombre signé

Si le bit de signe est 1, le nombre est négatif : on applique le complément à deux pour
trouver sa valeur absolue.

**Exemple** : `10000001₂` (8 bits, signé) :

```
10000001 → inversion : 01111110 → +1 : 01111111 = 127
→ le nombre est −127
```

## 4. Réels (virgule flottante)

Norme **IEEE 754** : un réel est décomposé en **signe**, **exposant** et **mantisse**.

- `float` : 32 bits (1 signe, 8 exposant, 23 mantisse)
- `double` : 64 bits (1 signe, 11 exposant, 52 mantisse)

```
+6.5 = +110.1₂ = +1.101₂ × 2²
signe = 0 (positif), mantisse = 101, exposant = 2
```

La mantisse est normalisée sous la forme `1.xxxx` (le 1 initial est implicite).

## 5. Caractères

Les caractères sont stockés sous forme de **codes numériques**.

### Table ASCII (extraits)

| Caractère | Code décimal | Code hexa |
|-----------|--------------|-----------|
| espace | 32 | 0x20 |
| `0` | 48 | 0x30 |
| `9` | 57 | 0x39 |
| `A` | 65 | 0x41 |
| `Z` | 90 | 0x5A |
| `a` | 97 | 0x61 |
| `z` | 122 | 0x7A |

**Unicode** étend ASCII pour représenter les caractères de toutes les langues (ex. UTF-8).
