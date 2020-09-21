import javax.swing.*;

public class SwingListenerControllerDemo {

    //Singleton pattern
    private static SwingListenerControllerDemo instance = new SwingListenerControllerDemo();

    private SwingListenerControllerDemo(){}

    public static SwingListenerControllerDemo getInstance(){
        return instance;
    }

    JLabel label;
    JTextField textField;

    public void setLabel(JLabel label) {
        this.label = label;
    }

    public void setTextField(JTextField textField) {
        this.textField = textField;
    }

    public void handleButton(){
        label.setText(textField.getText());
    }
}
