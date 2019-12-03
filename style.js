
// Strings:
var lower = "abcdefghijklmnopqrstuvwxyz";
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!$^&*-=+_?";

//Global varibles used to store the confirms:
var newPassWd = [];


//=======================User Walkthough==================================//
//Prompts & confirms

pWlenght = prompt("How many characters do you want to be in your password?"); 
if (pWlenght < 8) {
    alert("All passwords must be between 8-128 characters.");
    prompt("How many characters do you want to be in your password?");
    
  }
  else if (pWlenght > 8 ); {

  }
upperC = confirm("Click ok to confirm including upper case letters."); 
lowerC = confirm("Click ok to confirm including lower case letters."); 
numericV = confirm("Click ok to confirm including numeric values."); 
specialC = confirm("Click ok to confirm including special characters."); 


if (upperC === true) {
   (newPassWd.push(caps));
}
 if (lowerC === true) {
    (newPassWd.push(lower));
 }
if (numericV === true) {
    (newPassWd.push(numeric));
 }
if (specialC = true) {
    (newPassWd.push(special));
 }

var genPW = newPassWd[Math.floor(Math.random() * newPassWd.length)]; 

console.log(pWlenght);
console.log(upperC);
console.log(lowerC);
console.log(numericV);
console.log(specialC);
console.log(newPassWd);
console.log(genPW);

// old===========================================================
// newPassWd = (upperC + lowerC + numericV + specialC );

// console.log(newPassWd);


// for (var i = 0, n = newPassWd.length; i < length; ++i) {
// var genPW = newPassWd.charAt(Math.floor(Math.random() * newPassWd.length));
// }
// console.log(genPW);


// var upperC = confirm("Click ok to confirm including upper case letters."); 
// var lowerC = confirm("Click ok to confirm including lower case letters."); 
// var numericV = confirm("Click ok to confirm including numeric values."); 
// var specialC = confirm("Click ok to confirm including special characters."); 

// var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// var newPassWd = caps.concat(upperC)


//old variables
// var pWlenght;
// var upperC;
// var lowerC;
// var numericV;
// var specialC;

//old arrays
// var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
// var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// var special = [ "!", "$", "^", "&", "*", "-", "=", "+", "_", "?" ];


//old function 
// function genPW() {
 
//     var getPW = " ";

//  for (var i = 0, n = newPassWd.length; i < length; ++i) {
//     getPW += newPassWd.charAt(Math.floor(Math.random() * newPassWd.length));
//     }
//     return getPW;
// }
