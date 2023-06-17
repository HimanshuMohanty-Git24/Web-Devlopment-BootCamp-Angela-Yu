var age=prompt("Enter Your Age");
LifeinWeek(age);
function LifeinWeek(age){
    var YearsRem=90-age;
    var days=YearsRem*365;
    var weeks=YearsRem*52;
    var month=YearsRem*12;
    alert("You have:"+days+" Days"+weeks+" weeks"+month+" months left");
}