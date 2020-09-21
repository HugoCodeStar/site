public class ExceptionDemo {
    public static void totoNotreMethode(int x) throws InterruptedException{
        System.out.println("Avant");
        if (x < 0){
            throw new TestException("Mauvais stuff");
        }
        System.out.println("Après");

        Thread.sleep(500);
    }

    public static void main(String[] args) {
        try {
            totoNotreMethode(-6);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Fin");
    }
}
