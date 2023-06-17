var guestList = ["Ram","Shyam","Rahul","Modi","Shilu"];
var name=prompt("Enter Your Name:");
if(guestList.includes(name)){
    alert("Your Welcome Mr."+name);
}
else{
    alert("Sorry you are not invited!");
}
