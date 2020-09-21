import java.util.ArrayList;
import java.util.Arrays;

public class Intra2Rev {
    // Q1
    public static void removeAll(ArrayList liste, Object val){
        // remove retourne false si aucun élément est trouvé.
        while (liste.remove(val));
    }


    public static void main(String[] args) {
        // Q1
        ArrayList liste = new ArrayList(Arrays.asList(5,7,4,7,2,5,8,9,5));
        System.out.println(liste);
        removeAll(liste, 5);
        System.out.println(liste);

        // Q2
        ModifLinkedList liste2 = new ModifLinkedList();
        liste2.addFirst(5);
        liste2.addFirst(6);
        liste2.addFirst(7);
        liste2.addFirst(3);
        liste2.addFirst(5);
        liste2.addFirst(3);
        liste2.addFirst(5);

        // Compte le nombre d'éléments
        ListIterator iter = liste2.listIterator();
        int n = 0;
        while (iter.hasNext()){
            n++;
            iter.next();
        }
        System.out.println(n);

        liste2.removeAll(5);

        iter = liste2.listIterator();
        n = 0;
        while (iter.hasNext()){
            n++;
            iter.next();
        }
        System.out.println(n);

        // Q3
        Point[] tabPoint = {new Point(3,4), new Point(2,2), new Point(1,1)};
        System.out.println(Arrays.toString(tabPoint));
        Arrays.sort(tabPoint);
        System.out.println(Arrays.toString(tabPoint));
    }
}

// Q2
class ModifLinkedList extends LinkedList{
    public ModifLinkedList() {
        super();
    }

    public void removeAll(Object val){
        ListIterator iter = listIterator();

        while (iter.hasNext()){
            Object o = iter.next();
            if (o.equals(val)){
                iter.remove();
            }
        }
    }
}

// Q3
class Point implements Comparable{
    double x;
    double y;

    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public String toString() {
        return "Point{" +
                "x=" + x +
                ", y=" + y +
                '}';
    }

    @Override
    public int compareTo(Object o) {
        Point p = (Point) o;

        double dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        double dist_p = Math.sqrt(Math.pow(p.x, 2) + Math.pow(p.y, 2));

        if (dist > dist_p){
            return 1;

        } else if (dist < dist_p){
            return -1;
        }

        return 0;
    }
}