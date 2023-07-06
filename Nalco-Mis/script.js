// This is for the date changes
var currentDate = new Date();
var formattedDate = currentDate.toISOString().substring(0, 10);
document.getElementById("current-date").value = formattedDate;
document.getElementById("rundate").value = formattedDate;

// Calculate the difference gen mwhr
var startInputGenMwhr = document.getElementsByName("ga_mwhr_s")[0];
var endInputGenMwhr = document.getElementsByName("ga_mwhr_e")[0];
var genActInput = document.getElementsByName("gen_act")[0];

startInputGenMwhr.addEventListener("input", calculateDifferenceGenMwhr);
endInputGenMwhr.addEventListener("input", calculateDifferenceGenMwhr);

function calculateDifferenceGenMwhr() {
  var startValue = parseFloat(startInputGenMwhr.value);
  var endValue = parseFloat(endInputGenMwhr.value);
  
  if (!isNaN(startValue) && !isNaN(endValue)) {
    var difference = Math.abs(endValue - startValue);
    genActInput.value = difference;
  }
}

// Calculate the difference gen mvar
var startInputGenMvar = document.getElementsByName("ga_mvar_s")[0];
var endInputGenMvar = document.getElementsByName("ga_mvar_e")[0];
var genReactInput = document.getElementsByName("gen_react")[0];

startInputGenMvar.addEventListener("input", calculateAbsoluteDifferenceGenMvar);
endInputGenMvar.addEventListener("input", calculateAbsoluteDifferenceGenMvar);

function calculateAbsoluteDifferenceGenMvar() {
  var startValue = parseFloat(startInputGenMvar.value);
  var endValue = parseFloat(endInputGenMvar.value);

  if (!isNaN(startValue) && !isNaN(endValue)) {
    var absoluteDifference = Math.abs(endValue - startValue);
    genReactInput.value = absoluteDifference;
  }
}

// Calculate the difference uat mwhr
var startInputUatMwhr = document.getElementsByName("ua_mwhr_s")[0];
var endInputUatMwhr = document.getElementsByName("ua_mwhr_e")[0];
var uatActInput = document.getElementsByName("uat_act")[0];

startInputUatMwhr.addEventListener("input", calculateAbsoluteDifferenceUatMwhr);
endInputUatMwhr.addEventListener("input", calculateAbsoluteDifferenceUatMwhr);

function calculateAbsoluteDifferenceUatMwhr() {
  var startValue = parseFloat(startInputUatMwhr.value);
  var endValue = parseFloat(endInputUatMwhr.value);

  if (!isNaN(startValue) && !isNaN(endValue)) {
    var absoluteDifference = Math.abs(endValue - startValue);
    uatActInput.value = absoluteDifference;
  }
}