var buttonNumber = document.querySelectorAll(".drum").length;
console.log(buttonNumber);
for (let i = 0; i < buttonNumber; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        alert("I got clicked");
    });
    
}
