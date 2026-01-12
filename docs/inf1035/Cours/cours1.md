---
title: Programmation, instructions, affichage, saisie et variables
sidebar_label: 1 - Bases
sidebar_position: 1
---

## Programmation

* Instructions
* Mémoire
* Algorithme / Contrôle de flux

## Programmation
* Language du cours : Python 3
* Environement de dévelopment
    * Google Collab https://colab.research.google.com/
    * PyCharm
    * Anaconda / Jupyter - https://www.anaconda.com/products/individual

## Anaconda / Jupyter Notebook / Google Collab
* Les notebooks sont un environnement de travail pour les sciences de la données.
* L'application permet la gestion et configuration de plusieurs plateformes des scienses de la donnée basé sur Python, R et d'autres.
* La majorité du travail en Python se fait à l'intérieur de Notebooks qui permet de mélangé documentation, code et visualisation dans un seul fichier. Ce fichier à l'extension `.ipynb` pour `Interactive PYthon NoteBook`. Ce fichier peut être lu par une panoplie d'application.
* Dans notre cas, Google Collab est conseiller pour la session. Celui-ci offre en environnement de notebook en infonuagique. Il existe aussi d'autres applications permettant de lire les Python notebook :
    * PyCharm
    * Datalore
    * VS Code
    * Jupyter Labs/ Notebook (anciennce version de Jupyter Labs)

# Markdown
* Pour la documentation, la format Markdown est utilisé. Celui-ci utilise des balises pour avoir un formatage facile et conviviale qui est initiallement en format texte.
* Veuillez vous référé à la [Documentation de Markdown](https://jupyter-notebook.readthedocs.io/en/stable/examples/Notebook/Working%20With%20Markdown%20Cells.html) pour l'utilisation des différentes balises du format.

## Affichage avec la fonction `print`
* L'affichage de texte utilise la fonction `print` pour présenter une chaine de caractères dans la fenêtre de commande.

~~~python
print('Texte à afficher!')
~~~

## Les chaines de caractères
* Les chaines de caractères (du texte litéral) est délimité par des guillement simple `'` ou double `"`.
* Cette distinction permet de faire la différence entre les instructions et le texte à utiliser dans le programme.
* Deux symbole sont disponible pour facilité l'utlisation de l'autre type de guillemet dans une chaine.
* Il est aussi possible d'utiliser les triples symboles pour délimité une chaine.

~~~python
print('Texte à afficher!')
print('Le "best" texte')
print("Y'en a pas de meilleur texte.")
print("""C'est possible d'avoir du texte avec les deux "quotes" dans une chaine.""")
print("""Même
sur plusieurs
ligne""")
~~~

## Commentaires
* Le hashtag `#` débute une ligne de commentaire;
* Le reste de la ligne après le `#` ne sera pas considéré par python durant l'exécution du code;
* Une ligne vide sera aussi sautée par python;
* Les commentaires sont primordiaux à la programmation;
* Les commentaires sont utilisés en en-tête de fichiers, fonctions et programme ainsi qu’à l’intérieur d’un programme pour aider à comprendre l’intention des instructions.

~~~python
print('Texte à afficher!')
# Utilise le caractère spécial \n pour un saut de ligne
print('Une ligne\net une autre')
print (3 + 6) # print peut aussi afficher le résultat d'une expression
~~~

## **Exemple 1**
* Écrivez un script qui calcule un salaire hebdomadaire à partir d’un nombre d’heures travaillées et un salaire horaire.

```python
# Calcul du salaire
# hebdomadaire d'une personne.

print("Mon salaire hebdomadaire")
print(6 * 20.5)
```

## Variables et instruction d'assignation
* Une variable est la combinaison d’un espace mémoire réservé, un identificateur et une valeur;
* L'assignation utilise l'égalité `=` pour lier la valeur à l'identificateur;

~~~python
nomVariable = 10
print(nomVariable)
~~~

## Assignation et instruction

* L’assignation se fait toujours d’une **expression** à droite vers un identificateur à gauche;
* L'expression sera évaluée avant d'être assignée dans la variable;

~~~python
nomVariable = nomVariable + 5
~~~

* Le contenu d'une variable existante est écrasé lors d'une assignation.

* Une longue instruction peut être coupé sur une deuxième ligne avec le caractère `\`

~~~python
nomVariable = nomVariable + 5 + nomVariable + \
  nomVariable + nomVariable
~~~

## Identificateurs
* Les identificateurs sont utilisés pour identifier les différents éléments que nous ajoutons à notre programme;
* Les identificateurs sont les noms que l’on donne à nos variables, scripts et fonctions;
* Les caractères permis sont :
    * Tout caractère alphanumérique;
    * Le tiret-bas `_`.
* Le premier caractère doit être alphabétique;
* Le nom de la variable ne doit pas être un mot réservé par la syntaxe de python;
* Faites attention! Pour python, les majuscules et minuscules sont des caractères différents;
* Par convention, `camelCase`.

## **Exemple 2**
* Écrivez un script qui calcule un salaire hebdomadaire à partir d’un nombre d’heures travaillées et un salaire horaire. Affichez le salaire brut ainsi que le salaire net après 15% de taxes.
* Utilisez des variables pour le nombre d’heures travaillées, le salaire horaire, le salaire brut et le salaire net.


```python
# Données initiales
heuresTravailler = 18
tauxHoraire = 45

# Calcul du salaire Brut
salaireHebdomadaireBrut = heuresTravailler * tauxHoraire
print("Mon salaire hebdomadaire brut")
print(salaireHebdomadaireBrut)

# Calcul du salaire net
tauxImposition = 0.15
salaireHebdomadaireNet = salaireHebdomadaireBrut - salaireHebdomadaireBrut * tauxImposition
print("Mon salaire hebdomadaire net")
print(salaireHebdomadaireNet)
```

## Type de données
* Quatre types de données seront rencontrés généralement durant ce cours:
    * `int` - entité numérique entière(ex: 3, -4);
    * `float` - entitée numérique flottante (3.542, -0.23);
    * `str` - entité textuelle (ex: 'a', 'Bonjour!');
      - Les chaines de caractères sont délimitées par des guillemets simples ou doubles.
    * `bool` - valeur logique vraie (True) ou fausse (False).

## Saisie avec la fonction `input`
* Une saisie utilise la fonction `input` pour assigner l'entrée d'un utilisateur dans une variable.
* Puisque le retour sera toujours en `str`, il faut le convertir au besoin. 
* La fonction `int` ou `float` permet de convertir la chaine en entier ou en réel.

~~~python
## Saisie d'un nombre
## Doit convertir la valeur
saisi = int(input('Texte à afficher à la saisie: '))

## Saisie d'une chaine de caractères (texte)
saisiChaine = input('Texte à afficher: ')
~~~

## **Exemple 3**
* Écrivez un script qui calcule un salaire hebdomadaire à partir d’un nombre d’heures travaillées et un salaire horaire;
* Faites-la saisie du nombre d’heures travaillées et du salaire horaire au clavier;
* Afficher un message d’information avant d’afficher le salaire.

```python

# Saisit des données initiales
heuresTravailler = float(input("Entrez le nombre d'heures travailler : "))
tauxHoraire = float(input("Entrez le nombre taux horaire : "))

# Calcul du salaire Brut
salaireHebdomadaireBrut = heuresTravailler * tauxHoraire
print("Mon salaire hebdomadaire brut")
print(salaireHebdomadaireBrut)

# Calcul du salaire net
tauxImposition = 0.18
salaireHebdomadaireNet = salaireHebdomadaireBrut - salaireHebdomadaireBrut * tauxImposition
print("Mon salaire hebdomadaire net")
print(salaireHebdomadaireNet)
```

## Affichage d'expression avec `print`
* `print` a la possibilité d'afficher l'évaluation d'une expression;
* Il est possible de découper sur plusieurs ligne l'utilsation du print.
  
~~~python
x = 3;
chaine = 'allo';
print('Chiffre: ', x)
print('Chaine: ', chaine)
print('Chiffre' , x, 
  'et chaine', chaine)
~~~

## Caractère d'échapement

* Les caractères d'échapements permetent d'inséré des éléments non-textuelles dans un affichage de la fonction print.

| Caractère | Description |
| -- | -- |
| `\n` | Saut de ligne
| `\t` | Saut de tabulation horizontale
| `\'` | Affiche un guillemet simple
| `\"` | Affiche un guillemet double
| `\\` | Affiche un backslash

## **Exemple 4**
* Écrivez un script qui calcule un salaire hebdomadaire à partir d’un nombre d’heures travaillées et un salaire horaire.
* Faites-la saisie du nombre d’heures travaillées et du salaire horaire au clavier.
* Afficher un message avec le salaire net.


```python
# Saisit des données initiales
heuresTravailler = float(input("Entrez le nombre d'heures travailler : "))
tauxHoraire = float(input("Entrez le nombre taux horaire : "))

# Calcul du salaire Brut
salaireHebdomadaireBrut = heuresTravailler * tauxHoraire

# Calcul du salaire net
tauxImposition = 0.18
salaireHebdomadaireNet = salaireHebdomadaireBrut - salaireHebdomadaireBrut * tauxImposition

# Affichage final
print("Mon salaire hebdomadaire brut est", salaireHebdomadaireBrut, 
      "et mon salaire net est", salaireHebdomadaireNet)
```
