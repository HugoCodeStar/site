+++
title = "Paquetages"
menuTitle = "Paquetages de classes de Java"
draft = false
weight = 3040
+++

Le paquetage (packages) de java permet de consolider différentes classes dans un sous-ensemble donné. Le but est de regrouper les classes avec un lien logique et de favoriser la modularisation.

Nous avons déjà vu certains paquets durant l'importation de classes. `java.util` et `java.awt` sont les paquets qui contenaient respectivement les classes `Scanner` et `Rectangle`.

On peut avoir une hiérarchie de paquets. Elles sont séparées par un point `.`. L'exemple ci-haut contient donc le paquet `java` qui lui contient les paquets `util` et `awt`.

Il nous est possible de mettre nos classes dans un package avec l'instruction `package` suivit d'un nom fourni. 

```java
package org.hololink.examplePackage;
```

Sans nom de paquet, les classes sont dans le package par défaut de Java.