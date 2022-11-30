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
  var password = {
    outcome:["","","",""],
  };

  if (isUppercase){
    password.outcome[0]= abcs.substring(Math.floor(Math.random() * numbers.length),Math.floor(Math.random() * numbers.length));
    console.log(password.outcome[0].toUpperCase());

  }else{
    
  }
  if (isLowercase) {
    password.outcome[1]= abcs.substring(Math.floor(Math.random() * numbers.length),Math.floor(Math.random() * numbers.length));
  
    console.log(password.outcome[1]);
  }else{

  }
  if (isSpecial) {
    password.outcome[2]= special.substring(Math.floor(Math.random() * numbers.length),Math.floor(Math.random() * numbers.length));
    console.log(password.outcome[2]);
  }else{

  }
  if (isNumber) {
    password.outcome[3] = Math.floor(Math.random() * abcs.length);
    console.log(password.outcome[3]);
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
 //Add event listener to generate button
generateBtn.addEventListener("click", writePassword);