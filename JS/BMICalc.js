var weight = prompt("Enter your Weight");
var height = prompt("Enter your Height");
var bmi =bmiCalc(weight,height).toFixed(2);
function bmiCalc(weight,height){
    return weight/(Math.pow(height,2));
}
alert("Your BMI is :"+bmi);