public class ExceptionRevFinal {
    public static double moyenneCases(double[][] mat, int ligne, int colonne){
        double somme = 0;

        for (int i = -1; i <= 1; i++) {
            for (int j = -1; j <= 1; j++) {
                somme += mat[ligne + i][colonne + j];
            }
        }

        return somme / 9;
    }

    public static double moyenneCasesAvecException(double[][] mat, int ligne, int colonne){
        double somme = 0;

        for (int i = -1; i <= 1; i++) {
            for (int j = -1; j <= 1; j++) {
                try {
                    somme += mat[ligne + i][colonne + j];
                } catch (IndexOutOfBoundsException e){
                    somme += mat[ligne][colonne];
                }
            }
        }

        return somme / 9;
    }

}
