+++
title = "Structures de contrôles itératives"
menuTitle = "Itérations while/for"
draft = false
weight = 100
+++

### Structure de contrôle itérative `while`
* La boucle `while` répète les instructions jusqu’à ce que la condition soit fausse.

~~~java
while (condition){
    instructions
}
~~~

* Le `while` est habituellement utilisé quand on ne connait pas le nombre d’itérations à faire.

### Structure de contrôle itératif `for`
* Lorsque le nombre d’itérations est connu, la boucle `for` sera utilisée.
* La boucle `for` utilise un compteur qui est configuré au début de la boucle.

~~~java
for (initialization; termination; increment) {
    instruction
}

for(int i = 0; i < 10; i++){
    System.out.println("i est: " + i);
}
~~~

* L'initialisation va être une instruction faite avant le début de la boucle.
* La terminaison est la condition testée pour continuer la boucle à chaque itération.
* L'incrément est une instruction exécutée à chaque itération de la boucle.
* Un compteur est configuré avec ces instructions.