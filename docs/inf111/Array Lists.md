+++
title = "Array Lists"
menuTitle = "Array Lists"
draft = false
weight = 5010
+++

Un `ArrayList` est un objet qui permet d'emmagasiner une collection d'objets.

Les `ArrayList` offrent deux avantages sur les tableaux :

* Leur taille est dynamique
* Des méthodes sont fournies pour les actions communes.

### Déclaration d'un `ArrayList`

La déclaration utilise la syntaxe de création d'objets avec une modification. On inclut le type d'éléments à avoir en tant que classe générique. 

```
ArrayList<String> names = new ArrayList<String>();
```

### Travailler avec les ArrayList
| Instructions | Actions |
| ---- | --- |
| `ArrayList<String> names = new ArrayList<String>();` | Construis un nouvel objet.
| names.add("Ann"); | Ajoute un élément à la liste |
| System.out.println(names); | Affiche tous les noms ajoutés |
| names.remove(0); | Efface l'élément à l'indice 0 |
| names.set(0, "Bill"); | Remplace un élément à l'indice |
| String name = names.get(i); | Lis un élément à l'indice |
| String last = names.get(names.size() - 1); | Trouve le dernier élément |