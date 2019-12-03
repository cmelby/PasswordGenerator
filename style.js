
// Strings:
var lower = "abcdefghijklmnopqrstuvwxyz";
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!$^&*-=+_?";

//Global varibles used to store the confirms:
// passWd;
upperC;
lowerC;
numericV;
specialC;
newPassWd;

//=======================User Walkthough==================================//
//Prompts & confirms
var passWd = prompt("How many characters do you want to be in your password?"); 
if (passWd < 8) {
    alert("All passwords must be between 8-128 characters.");
    prompt("How many characters do you want to be in your password?");
  }
  else if (passWd > 8 );

var lower = confirm("Click ok to confirm including upper case letters."); 
var caps = confirm("Click ok to confirm including lower case letters."); 
var numeric = confirm("Click ok to confirm including numeric values."); 
var special = confirm("Click ok to confirm including special characters."); 

if (lower === true) {
newPassWd.push(lower);
}



// var upperC = confirm("Click ok to confirm including upper case letters."); 
// var lowerC = confirm("Click ok to confirm including lower case letters."); 
// var numericV = confirm("Click ok to confirm including numeric values."); 
// var specialC = confirm("Click ok to confirm including special characters."); 