var char1 = prompt("Enter the first word");
var char2 = char1.split("").reverse().join("");
if (char1 == char2) {
    alert("The word is palindrome");
}
else {
    alert("The word is not palindrome");
}