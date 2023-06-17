let year = prompt("Enter the year");
var res = checkYear(year);
function checkYear( year) {
    if (year % 400 == 0)
        return true;

    if (year % 100 == 0)
        return false;

    if (year % 4 == 0)
        return true;
    return false;
}
if(res){
    alert("It's a leap year");
}
else{
    alert("Not a leap year");
}
