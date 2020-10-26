---
title: Chaines de caractères
sidebar_label: 6 - Chaines de caractères
---

## Chaines de caractères
* Les chaine de caractères (`str`) est un type avec plusieurs fonctionnalités imbriquées.
* Plusieurs opérations peuvent faciliter l'utilisation et la création de chaines.
* Plusieurs méthodes sont disponibles pour parcourir, chercher et modifier les chaines.
  
## Parcourir les lettres d'une chaine
* Le `for` peut parcourir chacune des lettres dans une chaine.
* Les chaines peuvent être accédées comme des listes.
* La fonction `len` indique le nombre de caractères dans une chaine.

```python
mot = 'salut'
for lettre in mot:
    print(lettre) # Affiche 's' 'a' 'l' 'u' 't'

print(mot[1]) # Affiche 'a'
print(len(mot)) # Affiche 5
```

## Concaténation et découpage de chaines
* Il est possible de concaténer deux chaines pour en créer une nouvelle avec l'opérateur `+`.
* Il est aussi possible de découper les chaines comme une liste.

```python
mot = 'salut'
autre_mot = 'bonjour'

mega_mot = mot + ' ' + bonjour # Contient 'salut bonjour'
print(mega_mot[2:9]) # Affiche 'lut bon'
```

## L'opération in et les méthodes
* Il est possible de chercher si une chaine est dans une autre avec l'opération `in` et inversement `not in`.

```python
texte = 'allo tout le monde'
if 'tout' in texte:
    print('Le mot "tout" est dans la phrase')
```

## Méthodes de détection des chaines

| Nom       | Description                                                           |
|-----------|-----------------------------------------------------------------------|
| isalnum()   | Tous des caractères alphanumériques.                                  |
| isalpha() | Tous des caractères alphabétiques.                                    |
| isdigit() | Tous des caractères numériques.                                       |
| islower() | Tous des caractères alphabétiques en minuscule.                       |
| isspace() | Tous des caractères d'espacements (espace, saut de ligne, tabulation) |
| isupper() | Tous des caractères alphabétiques en majuscule.                       |

## Méthodes de modification des chaines

| Nom          | Description                                 |
|--------------|---------------------------------------------|
| lower()      | Converti en minuscules.                     |
| lstrip()     | Enlève les espacements à gauche.            |
| lstrip(char) | Enlève le caractère de la gauche.           |
| rstrip()     | Enlève les espacements à droite.            |
| strip()      | Enlève les espacements à gauche et à droite. |
| strip(char)  | Enlève un caractère à gauche et à droite    |
| upper()      | Converti en majuscules.                     |

## Méthodes de recherche et remplacement

| Nom                   | Description                                                       |
|-----------------------|-------------------------------------------------------------------|
| endswith(substring)   | Si se termine avec substring.                                     |
| find(substring)       | Retourne le premier indice ou substring est trouvé. -1 autrement. |
| replace(old, new)     | Remplace l'ancien substring par la nouvelle.                    |
| startswith(substring) | Si se débute avec substring.                                      |

## Découpage à un caractère spécifique

* Il est possible de "splitter" une chaine en une liste de chaine à un délimiteur connu avec la méthode `split`.

```python
chaine = 'salut le monde'
# Coupe aux espaces par défaut.
liste = chaine.split() # Contient ['salut', 'le', 'monde']

date = '11/12/2012'
liste_date = date.split('/') # Contient ['11', '12', '2012']
```
