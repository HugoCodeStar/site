import javax.swing.*;

public class MonCustomPanel extends JPanel {
    JLabel label = new JLabel();

    public MonCustomPanel() {
        setLayout(new BoxLayout(this, BoxLayout.Y_AXIS));

        add(new JButton("ok"));
        label.setText("un test");
        add(label);
        add(new JButton("ok"));
    }

    public MonCustomPanel(String s){
        this();
        label.setText(s);
    }
}
