// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
var isUppercase = comfirm("use uppercase");
var isLowercase = comfirm("use lowercase");
var isSpecial = comfirm("use special characters");
var isNumber = comfirm("use numbers");

if (isUppercase){
  console.log("uppercase");
}
if (isLowercase){
  console.log("lowercase");
}
if (isSpecial){
  console.log("special");
}
if (isNumber){
  console.log("number");
}
return "";
}
// Write password to the #password input
/*function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
