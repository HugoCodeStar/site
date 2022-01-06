---
title: Programmation en Python
sidebar_label: 1 - Bases
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

## Anaconda / Jupyter Notebook
* Anaconda est un environnement de travail pour les sciences de la données.
* L'application permet la gestion et configuration de plusieurs plateformes des scienses de la donnée basé sur Python, R et d'autres.
* La majorité du travail en Python se fait à l'intérieur de Jupyter Notebooks qui permet de mélangé documentation, code et visualisation dans un seul fichier. Ce fichier à l'extension `.ipynb` pour `Interactive PYthon NoteBook`. Ce fichier peut être lu par une panoplie d'application.
* Dans notre cas, Jupyter Labs est conseiller pour la session. Il existe aussi d'autres applications permettant de lire les Python notebook :
    * PyCharm
    * Datalore
    * VS Code
    * Jupyter Notebook (anciennce version de Jupyter Labs)

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

## Terminaison de ligne avec `print`
Il est possible de supprimer le saut de ligne du print avec le paramètre `end`

~~~python
print('One', end=' ') 
print('Two', end=' ') 
print('Three')
# Affiche 'OneTwoThree'
~~~

## Séparateur d'item avec `print`

Il est aussi possible de change le séparateur d'items qui est l'espace par défault.

~~~python
# Affiche 'One Two Three'. Séparateur d'espace.
print('One', 'Two', 'Three') 

# Affiche 'OneTwoThree'. Séprateur vide.
print('One', 'Two', 'Three', sep='') 

# Affiche 'One,Two,Three'. Séparateur virgule.
print('One', 'Two', 'Three', sep=',')
~~~

## Concaténation de chaine avec `+`

Le `+` peut être utilisé entre deux chaines pour faire la concaténation (collé) entre les deux chaines.

~~~python
# Affiche 'Ceci est un test.'
print('Ceci est ' + 'un test.')
~~~

## Formatage des données avec `format`

La fonction `format` permet de faire le formatage de valeur numérique pour un affichage.

`format` reçoit la valeur à formater et un *spécificateur de formatage*.

~~~python
# Affiche '123.45'
# Le nombre à formater est 123.45678
# Le spécificateur de formatage est '.2f'
# Le .2 indique la précision
# Le f indique que le nombre est un float (point-flottant)
print(format(123.45678, '.2f'))

# Affiche '1.234568e+04'
print(format(12345.6789, 'e'))
# Affiche '1.23e+04'
print(format(12345.6789, '.2e'))

# Affiche '50.000000%'
print(format(0.5, '%'))
# Affiche '50%'
print(format(0.5, '.0%'))
~~~

## Opérations arithmétique

Symbole | Opération        | Description
--------|------------------|------------------------------------------------------------
`+`     | Addition         | Additionne deux nombres
`-`     | Soustraction     | Soustrait deux nombres
`*`     | Multiplication   | Multiplication de deux nombres
`/`     | Division         | Division de deux nombres
`//`    | Division entière | Division de deux nombres, garde seulement la partie entière
`%`     | Modulo           | Trouve le restant d'une division
`**`    | Puissance        | Met un nombre à une puissance

## Opérateurs relationnels
* Les opérateurs relationnels permettent de faire des comparaisons entre deux expressions;
* Les opérateurs donnent toujours un résultat logique booléen(vrai ou faux);
* Les opérateurs sont :
    * `<`, `<=`, `>`, `>=`, `==` (égalité), `!=` (différent de).
* Il est à noter ici que l'opérateur d'égalité utilise `==` car l'assignation utilise déjà le simple `=`.

## Options de la conditionnel `if`
* Plusieurs options sont disponibles avec le if;
~~~python
if expression logique:
    instructions
elif expression logique:
    instructions
else:
    instructions

~~~
* Seul un des blocs d’instructions (décision) du `if` est exécuté
* Le `elif` et le `else` sont facultatifs
* Le `elif` peut être répété à plusieurs reprises avec différentes expressions

## Structure de contrôle itérative `while`
* La boucle `while` répète les instructions jusqu’à ce que la condition soit fausse ;

~~~python
while condition:
    instructions
~~~

* Le `while` est habituellement utilisé quand on ne connait pas le nombre d’itérations à faire.

## Structure de contrôle itératif `for`
* Lorsque le nombre d’itérations est connu, la boucle `for` sera utilisée ;
* La boucle `for` inclut un compteur qui est configuré au début de la boucle ;

~~~python
for x in liste:
    instructions

for x in [4, 56, 3]:
    intructions

for x in range(10):
    instructions
~~~

## Opérateurs logiques
* Les opérateurs logiques opèrent sur des valeurs logiques et retournent des valeurs logiques ;
    * La conjonction ET `and` ;
    * La disjonction OU `or` ;
    * La négation NON `not`.

`A` | `B` |   | `A and B` | `A or B`
----|-----|---|:--------:|:-------:
False  | False  |   | False       | False
False  | True   |   | False       | True
True   | False  |   | False       | True
True   | True   |   | True        | True

`A` | `not A`
----|:---:
False  | True
True   | False

## Fonctions
* Les fonctions sont des séries d'instructions contenues dans un ensemble pouvant être facilement re-utilisé. Par convention, la fonction doit faire une tâche simple et précise;
* Contrairement aux scripts, les fonctions n'auront pas de saisit avec `input` et pas d'affichage avec `print`. Cela à moins d'être expressément demandé.
* Les fonctions peuvent demander des paramètres (ou arguments) d'entrées. Ce sont des informations préalables aux calculs de la fonction;
* Les fonctions peuvent émettre des réponses que l'on appelle retour.

## Présentation d'une fonction minimale
~~~python
def nomFonction():
    instructions

~~~

* Une fonction est au début du fichier;
* La fonction peut ensuite être appelée par son nom d'autres programmes.

## Paramètres d'entrées
* Une fonction peut demander des paramètres d'entrées;
* Ceux-ci seront dans une liste après le nom de la fonction entre parenthèses délimitée par une virgule;
* Les paramètres d'entrées seront fournis par l'appelant de la fonction et peuvent donc être utilisés à l'intérieur des instructions de la fonction sans être assignés préalablement.

~~~python
def fcnAvecIn(var1, var2):
    print(var1 * var2)

~~~

## Retours
* La fonction peut retourner un résultat qui sera utilisable par l'appelant de la fonction.
* Le mot-clé `return` est utilisé quand l'expression de retour est prête à être renvoyée.
* Une fonction qui ne contient pas de retour est aussi nommée une procédure.

~~~python
def fcnAvecRetour():
    instructions
    return expression
~~~

## Modules
* Plusieurs fichiers de python avec différentes fonctions peuvent interagir entre eux. Chaque fichier créé est considéré comme étant un module qu'on peut importer dans pour nos programmes;
* La commande `import` permet d’importer les fonctions d'un autre fichier;
* Le nom du module est le nom du fichier sans son extension `.py`;
* L'utilisation des fonctions du module importer devra être précédée du nom du module et un point.

```python
import mon_module # Du fichier mon_module.py

# Appel de la fonction du module importé.
mon_module.ma_fonction(4, 5)
```

## Modules fournis
* Plusieurs modules sont fournis et nous verrons qu'il existe un très grand écosystème de module pouvant nous faciliter la création de nos programmes.
* Par exemple, le module `math` nous donne plusieurs fonctions mathématiques communes.
* Pour savoir lesquelles et leurs utilisations, il faut consulter leur documentation;
  * https://docs.python.org/3/library/math.html

```python
import math

reponse = math.sqrt(45)
```