import javax.swing.*;
import java.awt.*;

public class SwingDemo {
    public static void demo1Frame(){
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        frame.setSize(400,500);

        frame.setVisible(true);
        System.out.println("Hello");
    }

    public static void demo2FrameAdd(){
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        frame.setSize(40,200);

        frame.add(new JButton("ok"));
        // Écrase le premier JButton.
        // Le BorderLayout est utilisé par défault.
        frame.add(new JButton("ok2"));

        frame.setVisible(true);
    }

    public static void demo3JPanel(){
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        frame.setSize(40,200);

        JPanel panel = new JPanel();
        // Le JPanel à un Flow Layout par défautl
        panel.add(new JButton("ok"));
        panel.add(new JButton("ok2"));

        // Ajoute le JPanel à notre JFrame
        frame.add(panel);

        frame.setVisible(true);
    }

    public static void demo4JPanelBoxLayout(){
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        frame.setSize(400,200);

        JPanel panel = new JPanel();
        // Le BoxLayout doit indiquer dans quel sens on ajoute les éléments
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));

        panel.add(new JButton("ok"));
        panel.add(new JLabel("un test"));
        panel.add(new JButton("ok"));

        frame.add(panel);

        frame.setVisible(true);
    }

    public static void demo5MenuBar(){
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        frame.setSize(400,200);

        // La bar au dessus de la fenêtre (top-level)
        JMenuBar menuBar = new JMenuBar();

        // Le menu du menuBar, les premier items à clicker
        // au même niveau que file, edit, etc.
        JMenu menu1 = new JMenu("menu 1");
        JMenu menu2 = new JMenu("menu 2");

        // Les sous-items des menus, affiche quand tu clique sur le menu.
        JMenuItem menu1item1 = new JMenuItem("item 1");
        JMenuItem menu1item2 = new JMenuItem("item 2");

        JMenuItem menu2item1 = new JMenuItem("item 1");

        // Construction du menuBar à partir de menu à partir de menuItem
        menu1.add(menu1item1);
        menu1.add(menu1item2);

        menu2.add(menu2item1);

        menuBar.add(menu1);
        menuBar.add(menu2);

        // Ajoute le menuBar construit à notre frame
        frame.setJMenuBar(menuBar);

        frame.setVisible(true);

    }

    public static void demo6multiPanel(){
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        frame.setSize(400,200);

        JPanel mainPanel = new JPanel();

        JPanel panel = new JPanel();
        // Le BoxLayout doit indiquer dans quel sens on ajoute les éléments
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));

        panel.add(new JButton("ok"));
        panel.add(new JLabel("un test"));
        panel.add(new JButton("ok"));

        mainPanel.add(panel);

        JPanel panel2 = new JPanel();
        // Le BoxLayout doit indiquer dans quel sens on ajoute les éléments
        panel2.setLayout(new BoxLayout(panel2, BoxLayout.Y_AXIS));

        panel2.add(new JButton("ok2"));
        panel2.add(new JLabel("deux test"));
        panel2.add(new JButton("ok2"));

        mainPanel.add(panel2);

        frame.add(mainPanel);

        frame.setVisible(true);
    }

    public static void demo7multipanelcustom(){
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        frame.setSize(400,200);

        JPanel panel = new JPanel();
        for (int i = 0; i < 3; i++) {
            panel.add(new MonCustomPanel(" num " + i));
        }

        panel.add(new MonCustomPanel());

        frame.add(panel);

        frame.setMinimumSize(new Dimension(300, 200));
        frame.setVisible(true);
    }

    public static void main(String[] args) {
        //demo1Frame();
        //demo2FrameAdd();
        //demo3JPanel();
        //demo4JPanelBoxLayout();
        //demo5MenuBar();
        //demo6multiPanel();
        demo7multipanelcustom();
    }
}
