var name1=prompt("Enter Your Name");
var name2=prompt("Enter your partner number");
var num =Math.random();
num = (num*100)+1;
num = Math.floor(num);
if(num===100){
    alert("These are the results of the calculations by Dr. Love:"+num+"%"+" you love each other like Ram Loves Sita");
}
else{
    alert("These are the results of the calculations by Dr. Love:"+num+"%");
}