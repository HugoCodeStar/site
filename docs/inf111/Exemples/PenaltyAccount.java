package org.hololink;

public class PenaltyAccount extends BankAccount {
    @Override
    public void withdraw(double amount){
        super.withdraw(amount);
        if (getAmount() < 0){
            super.withdraw(20);
        }
    }
}
