+++
title = "Saisit"
menuTitle = "Saisit"
draft = false
weight = 80
+++

La saisie utilise un objet de type `Scanner` pour faire des saisies dans la console.
L'objet scanner est déclarer à même la classe pour faciliter sont utilisation à travers les différentes méthodes.

Les méthodes suivantes peuvent recevoir les informations saisies

* `nextDouble()`
* `nextInt()`
* `nextLine()`

```java
import java.util.Scanner;

public class Main {
    public static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
        int i = sc.nextInt();
        double d = sc.nextDouble();
        sc.nextLine(); // Mange le newline
        String s = sc.nextLine();

        System.out.println("String: " + s);
        System.out.println("Double: " + d);
        System.out.println("Int: " + i);
    }
}
```

{{< replit "dullin/Saisit" >}}