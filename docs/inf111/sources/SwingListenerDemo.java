import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

public class SwingListenerDemo {

    public static void simpleDemo1(){
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        frame.setSize(150,150);
        JPanel panel = new JPanel();

        JButton button = new JButton("Hello");

        class ButtonListener implements ActionListener{
            @Override
            public void actionPerformed(ActionEvent e) {
                System.out.println("Hello Button");
            }
        }

        button.addActionListener(new ButtonListener());

        panel.add(button);

        frame.add(panel);

        frame.setVisible(true);
    }

    public static void multiActionDemo2(){
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        frame.setSize(300,100);
        JPanel panel = new JPanel();

        JTextField textField = new JTextField(12);

        JLabel label = new JLabel("Empty");

        JButton button = new JButton("Hello");

        class ButtonListener implements ActionListener{
            @Override
            public void actionPerformed(ActionEvent e) {
                label.setText(textField.getText());
            }
        }

        button.addActionListener(new ButtonListener());

        panel.add(textField);
        panel.add(label);
        panel.add(button);

        frame.add(panel);

        frame.setVisible(true);
    }

    public static void controllerDemo3(){
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        frame.setSize(300,100);
        JPanel panel = new JPanel();

        JTextField textField = new JTextField(12);

        JLabel label = new JLabel("Empty");

        JButton button = new JButton("Hello");

        SwingListenerControllerDemo controller = SwingListenerControllerDemo.getInstance();
        controller.setLabel(label);
        controller.setTextField(textField);

        class ButtonListener implements ActionListener{
            @Override
            public void actionPerformed(ActionEvent e) {
                SwingListenerControllerDemo controller = SwingListenerControllerDemo.getInstance();

                controller.handleButton();
            }
        }

        button.addActionListener(new ButtonListener());

        panel.add(textField);
        panel.add(label);
        panel.add(button);

        frame.add(panel);

        frame.setVisible(true);
    }

    public static void mouseEventsDemo4(){
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        frame.setSize(300,100);
        JPanel panel = new JPanel();

        JLabel label = new JLabel("Empty");

        class FrameMouseListener implements MouseListener{
            @Override
            public void mouseClicked(MouseEvent e) {
                label.setText("X :" + e.getX() + "Y : " + e.getY());
            }

            @Override
            public void mousePressed(MouseEvent e) { }

            @Override
            public void mouseReleased(MouseEvent e) { }

            @Override
            public void mouseEntered(MouseEvent e) { }

            @Override
            public void mouseExited(MouseEvent e) { }
        }

        panel.add(label);
        frame.add(panel);

        frame.addMouseListener(new FrameMouseListener());
        frame.setVisible(true);
    }

    public static void main(String[] args) {
        //simpleDemo1();
        //multiActionDemo2();
        //controllerDemo3();
        //mouseEventsDemo4();
    }
}
