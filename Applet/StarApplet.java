import java.applet.Applet;
import java.awt.Color;
import java.awt.Graphics;
import java.awt.Font;

public class StarApplet extends Applet {

  public void init() {
    setBackground(new Color(204, 153, 255)); // set background color to light purple
  }

  public void paint(Graphics g) {
    // draw the two characters with round heads and stick bodies
    g.setColor(Color.BLACK);
    g.fillOval(100, 100, 50, 50);
    g.fillOval(200, 100, 50, 50);
    g.drawLine(125, 150, 125, 300);
    g.drawLine(225, 150, 225, 300);
    g.drawLine(125, 300, 150, 350);
    g.drawLine(225, 300, 200, 350);
    g.setColor(Color.YELLOW);
    g.fillRect(120, 180, 80, 40); // first card with roll number and name and section
    g.fillRect(220, 180, 80, 40); // second card with JAVA
    g.setColor(Color.BLACK);
    g.setFont(new Font("Arial", Font.BOLD, 12));
    g.drawString("Roll No.:2105719", 130, 200);
    g.drawString("Name:Himanshu", 130, 220);
    g.drawString("Section:CSE26", 130, 240);
    g.drawString("JAVA", 250, 200);
    // draw the stars in the specified pattern
    g.setColor(Color.YELLOW);
    g.fillPolygon(new int[] { 60, 70, 90, 75, 80, 60, 40, 45, 30, 50 },
        new int[] { 60, 85, 85, 100, 120, 105, 120, 100, 85, 85 },
        10); // yellow star
    g.setColor(new Color(0, 0, 153));
    g.fillPolygon(new int[] { 100, 110, 130, 115, 120, 100, 80, 85, 70, 90 },
        new int[] { 80, 105, 105, 120, 140, 125, 140, 120, 105, 105 },
        10); // deep blue star
    g.setColor(Color.YELLOW);
    g.fillPolygon(new int[] { 140, 150, 170, 155, 160, 140, 120, 125, 110, 130 },
        new int[] { 60, 85, 85, 100, 120, 105, 120, 100, 85, 85 },
        10); // yellow star
    g.setColor(new Color(0, 0, 153));
    g.fillPolygon(new int[] { 180, 190, 210, 195, 200, 180, 160, 165, 150, 170 },
        new int[] { 80, 105, 105, 120, 140, 125, 140, 120, 105, 105 },
        10); // deep blue star
  }

}
