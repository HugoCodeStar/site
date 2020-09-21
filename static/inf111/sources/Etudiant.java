public class Etudiant {
    private int id;
    private double cote;

    public Etudiant(int id, double cote) {
        this.id = id;
        this.cote = cote;
    }

    public double getCote() {
        return cote;
    }

    public static double moyenneCote(Etudiant[] liste){
        double moyenne = 0;

        for (Etudiant e:
                liste) {
            moyenne += e.getCote();
        }

        return moyenne / liste.length;
    }

    public static int trouveID(Etudiant[] liste, int id){
        for (int i = 0; i < liste.length; i++) {
            if (id == liste[i].id){
                return i;
            }
        }

        return -1;
    }
}
