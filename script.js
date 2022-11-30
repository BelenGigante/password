// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var special = "!#$%&()*+,-./:;<=>?@[^_`{|}~";
  var abcs = "mnbvcxzlkjhgfdsapoiuytrewq";
  var numbers = "0123456789";
  var isUppercase = confirm('use uppercase?');
  var isLowercase = confirm("use lowercase?");
  var isSpecial = confirm("use special characters?");
  var isNumber = confirm("use numbers?");
  var passwordLength = 10;
  var outcome= "";
  var password = "";

  if (isUppercase){
    outcome= abcs.substring(Math.floor(Math.random() * numbers.length),Math.floor(Math.random() * numbers.length));
    console.log(outcome.toUpperCase());

  }else{
    
  }
  if (isLowercase) {
    outcome= abcs.substring(Math.floor(Math.random() * numbers.length),Math.floor(Math.random() * numbers.length));
  
    console.log(outcome);
  }else{

  }
  if (isSpecial) {
    outcome= special.substring(Math.floor(Math.random() * numbers.length),Math.floor(Math.random() * numbers.length));
    console.log(outcome);
  }else{

  }
  if (isNumber) {
    var number = Math.floor(Math.random() * abcs.length);
    console.log(number);
  }else{

  }
  //return "";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
