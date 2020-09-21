package org.hololink;

public class BasicAccount extends BankAccount{
    @Override
    public void withdraw(double amount){
        if (getAmount() - amount < 0){
            super.withdraw(getAmount());
        } else {
            super.withdraw(amount);
        }
    }
}
