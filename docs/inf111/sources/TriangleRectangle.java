public class TriangleRectangle {
    public static void main(String[] args) {
         afficherTriangleRectangle(5);
    }

    public static void afficherTriangleRectangle(int nLigne){

        System.out.println("*");

        for (int i = 0; i < nLigne - 2; i++) {
            System.out.println("*" + " ".repeat(i) + "*");
        }

        System.out.println("*".repeat(nLigne));

    }
}
