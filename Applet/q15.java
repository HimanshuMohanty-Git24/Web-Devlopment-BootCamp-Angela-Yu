import java.util.*;
import java.applet.*;
import java.awt.*;
import java.awt.event.*;
public class q15 extends Applet{ 
     public void paint(Graphics obj)
     {
       obj.drawRect(100, 100, 50, 50);
       obj.setColor(Color.red);
       obj.fillRect(100, 100, 50, 50);
       obj.drawRect(100, 150, 50, 50);
       obj.setColor(Color.yellow);
       obj.fillRect(100, 150, 50, 50);
       obj.drawRect(150, 100, 50, 50);
       obj.setColor(Color.green);
       obj.fillRect(150, 100, 50, 50);
       obj.drawRect(150, 150, 50, 50);
       obj.setColor(Color.blue);
       obj.fillRect(150, 150, 50, 50);

       obj.drawArc(50, 100, 75, 100, 90, 180);
       obj.setColor(Color.red);
       obj.fillArc(50, 100, 75, 100, 90, 180);

       obj.drawArc(100, 50, 100, 75, 180, -180);
       obj.setColor(Color.green);
       obj.fillArc(100, 50, 100, 75, 180, -180);

       obj.drawArc(175, 100, 75, 100, 90, -180);
       obj.setColor(Color.blue);
       obj.fillArc(175, 100, 75, 100, 90, -180);

       obj.drawArc(100, 175, 100, 75, 180, 180);
       obj.setColor(Color.yellow);
       obj.fillArc(100, 175, 100, 75, 180, 180);
     }
}