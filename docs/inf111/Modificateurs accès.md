+++
title = "Modificateurs d'accès et autres"
menuTitle = "Modificateurs"
draft = false
weight = 3050
+++


### Modificateurs d'accès
Par défaut, les champs et méthodes d'une classe sont disponibles à toutes les instances venant du même paquet.

Nous pouvons modifier les accès avec des mots clés.

* `public` - Disponible à tous
* `private` - Disponible à l'instance de l'objet seulement
* `protected` - Disponible aux paquets et à ses sous-classes (nous ne connaissons pas le principe de sous-classes encore)

Pour bien encapsuler nos données, nous voulons que toutes les variables d'instance soit `private` et que toutes méthodes ne devant pas être utilisées à l'extérieur de la classe aussi.

### Autres

D'autres modificateurs sont disponibles:

* `static` - Permet d'avoir des éléments qui appartiennent à la classe plutôt qu'aux instances de la classe
* `final` - Version non modifiable
