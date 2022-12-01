// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var special = "!#$%&()*+,-./:;<=>?@[^_`{|}~";
  var abcs = "mnbvcxzlkjhgfdsapoiuytrewq";
  var numbers = "0123456789";

  var passlength = prompt("how long will your password be?");
  passlength = parseInt(passlength);

  if(isNaN(passlength) || passlength < 8 || passlength > 128){
    alert('Please enter a number between 8 and 128');
    return generatePassword();
  }

  var isUppercase = confirm('use uppercase?');
  var isLowercase = confirm("use lowercase?");
  var isSpecial = confirm("use special characters?");
  var isNumber = confirm("use numbers?");


  var allowedChars = "";
 

  if (isUppercase){
    allowedChars += abcs.toUpperCase();
  }
 
  if (isLowercase) {
    allowedChars += abcs.toLowerCase();
  }

  if (isSpecial) {
    allowedChars += special;
  }

  if (isNumber) {
    allowedChars += numbers;
  }

if(allowedChars.length > 0){

  var pass = "";
  for(var i = 0; i < passlength; i++){
    var randomIndex = Math.floor(Math.random()*allowedChars.length);
    pass = pass + allowedChars[randomIndex];
  }
}else{alert( "Select options to generate password");
    return generatePassword();
}
  
  return pass;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 //Add event listener to generate button
generateBtn.addEventListener("click", writePassword);