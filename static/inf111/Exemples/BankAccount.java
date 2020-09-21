package org.hololink;

/**
 * Compte normal
 */
public class BankAccount {
    double amount;

    public double getAmount() {
        return amount;
    }

    public void deposit(double amount){
        this.amount += amount;
    }

    public void withdraw(double amount){
        this.amount -= amount;
    }
}
