package org.hololink;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

public class ListeDeNombre {

    public static void main(String[] args) {
        Random r = new Random();

        ArrayList<Integer> nombres = new ArrayList<Integer>();

        for (int i = 0; i < 10; i++) {
            Integer x = r.nextInt(100) + 1;
            nombres.add(x);

            // nombres.add(r.nextInt(100) + 1);
        }

        System.out.println(nombres);

        nombres.remove(Collections.max(nombres));
        nombres.remove(Collections.min(nombres));

        // Integer min = Collections.min(nombres);
        // nombres.remove(min);

        System.out.println(nombres);
    }
}
