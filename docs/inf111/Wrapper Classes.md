+++
title = "Wrapper Classes & Auto-boxing"
menuTitle = "Wrapper Classes"
draft = false
weight = 5020
+++

Une limitation des `ArrayList` est qu'elles doivent avoir des objets comme classe générique utilisés.

Pour avoir des valeurs des types primitifs, Java a donc créé des "wrapper classes" qui représente les types primitifs en classe.

| Type | Classe |
| ---  | --- | 
| byte | Byte |
| boolean | Boolean |
| char | Character |
| double | Double |
| float | Float |
| int | Integer |
| long | Long |
| short | Short |

### Autoboxing

Pour faciliter l'utilisation des wrapper classes. Java permet d'assigner des valeurs de type primitif à des objets de wrappers classes et vice-versa et le langage se charge de faire la conversion automatique (autoboxing).