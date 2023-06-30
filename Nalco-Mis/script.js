// This is for the date changes
var currentDate = new Date();
var formattedDate = currentDate.toISOString().substring(0, 10);
document.getElementById("current-date").value = formattedDate;
document.getElementById("rundate").value = formattedDate;


//Calculate the diffrence gen mwhr
var startInput = document.getElementsByName("ga_mwhr_s")[0];
var endInput = document.getElementsByName("ga_mwhr_e")[0];
var genActInput = document.getElementsByName("gen_act")[0];
startInput.addEventListener("input", calculateDifference);
endInput.addEventListener("input", calculateDifference);
function calculateDifference() {
  var startValue = parseFloat(startInput.value);
  var endValue = parseFloat(endInput.value);
  if (!isNaN(startValue) && !isNaN(endValue)) {
    var difference = endValue - startValue;
    difference = Math.abs(difference);
    genActInput.value = difference;
  }
}


//Calculate the diffrence gen mvar
var startInput = document.getElementsByName("ga_mvar_s")[0];
var endInput = document.getElementsByName("ga_mvar_e")[0];
var genReactInput = document.getElementsByName("gen_react")[0];
startInput.addEventListener("input", calculateAbsoluteDifference);
endInput.addEventListener("input", calculateAbsoluteDifference);
function calculateAbsoluteDifference() {
  var startValue = parseFloat(startInput.value);
  var endValue = parseFloat(endInput.value);
  if (!isNaN(startValue) && !isNaN(endValue)) {
    var absoluteDifference = Math.abs(endValue - startValue);
    genReactInput.value = absoluteDifference;
  }
}


//Calculate the diffrence uat mwhr
var startInput = document.getElementsByName("ua_mwhr_s")[0];
var endInput = document.getElementsByName("ua_mwhr_e")[0];
var uatActInput = document.getElementsByName("uat_act")[0];

startInput.addEventListener("input", calculateAbsoluteDifference);
endInput.addEventListener("input", calculateAbsoluteDifference);

function calculateAbsoluteDifference() {
  var startValue = parseFloat(startInput.value);
  var endValue = parseFloat(endInput.value);

  if (!isNaN(startValue) && !isNaN(endValue)) {
    var absoluteDifference = Math.abs(endValue - startValue);
    uatActInput.value = absoluteDifference;
  }
}


