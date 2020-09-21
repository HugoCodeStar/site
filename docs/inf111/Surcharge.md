+++
title = "Surcharge de méthodes"
menuTitle = "Surcharge de méthodes (Overloading)"
draft = false
weight = 3030
+++

Il est possible d'avoir des méthodes de mêmes noms avec différents paramètres. La bonne méthode sera sélectionnée dépendamment du nombre de paramètres utilisés à l'appel.

Cela est souvent utilisé avec le constructeur pour fournir plusieurs manières d'initialiser un objet.

```java
public class BankAccount{
    double balance;

    public Bank(){
        balance = 0;
    }

    public Bank(double balance){
        this.balance = balance;
    }
}
```