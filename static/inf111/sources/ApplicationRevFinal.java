import javax.swing.*;
import java.awt.event.*;

public class ApplicationRevFinal {
    public static void main(String[] args) {
        JFrame f = new JFrame();
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel p = new JPanel();

        JLabel labelNom = new JLabel("Nom");
        JLabel labelPrenom = new JLabel("Prénom");

        JTextField fieldNom = new JTextField(8);
        JTextField fieldPrenom = new JTextField(8);

        JButton button = new JButton("Valide");

        class GestionBoutton implements ActionListener{
            @Override
            public void actionPerformed(ActionEvent actionEvent) {
                String nom = fieldNom.getText();
                String prenom = fieldPrenom.getText();

                if (nom.isEmpty() || prenom.isEmpty()){
                    JOptionPane.showMessageDialog(f, "Champs vide");
                } else {
                    JOptionPane.showMessageDialog(f, "Bonjour, " + prenom + " " + nom);
                }
            }
        }

        button.addActionListener(new GestionBoutton());

        p.add(labelPrenom);
        p.add(fieldPrenom);
        p.add(labelNom);
        p.add(fieldNom);
        p.add(button);
        f.add(p);

        f.setSize(500, 100);
        f.setVisible(true);
    }
}
