import java.util.Random;
import java.util.Scanner;

public class ListeEtudiant {
    public static void main(String[] args) {
        Random r = new Random();
        Scanner sc = new Scanner(System.in);

        System.out.print("Entrez la taille du groupe : ");

        int taille = sc.nextInt();

        Etudiant[] liste = new Etudiant[taille];

        for (int i = 0; i < liste.length; i++) {
            liste[i] = new Etudiant(r.nextInt(1000), r.nextDouble()*4.3);
        }

        double moyenne = Etudiant.moyenneCote(liste);

        System.out.println("La moyenne est " + moyenne);
    }


}
