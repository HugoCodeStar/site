+++
title = "Exceptions"
menuTitle = "Exceptions"
draft = false
weight = 9010
+++

Les erreurs de Java doivent être gérés de manière approprié. Nous verrons comment faire la détection et la gestion d'erreur avec les exceptions.

### Lever une exception

Quand une erreur est détecté, il est du devoir du programme de lever une exception (`throw` en anglais). Les exceptions sont définies dans une des libraries fourni par Java et sont des classes à part entière. Le mot clé `throw` est utilisé pour levé un objet de type Throwable.

```java
if (amount > balance){
    throw new IllegalArgumentException("Amount exceeds balance").
}

balance = balance - amount;
```

![table](/inf111/images/throwable.jpg)

### Gestion d'une exception

Les exceptions devraient être géré par vos programmes. Pour faire la gestion d'exceptions, un bloc `try/catch` est utilisé. La partie du `try` va exécuté du code pouvant généré une exception. Si un exception est levé, l'exécution saut directement à la partie `catch` pour faire la gestion de l'exception.

```java
try{
    String filename = . . .;
    Scanner in = new Scanner(new File(filename)); String input = in.next();
    int value = Integer.parseInt(input);
    ...
}
catch (IOException exception){
    exception.printStackTrace();
}
catch (NumberFormatException exception){
    System.out.println(exception.getMessage());
}
```

### Exemple du cours

* [Demo](/INF111/sources/ExceptionDemo.java)
* [Spécialisation d'une exception](/INF111/sources/TestException.java)