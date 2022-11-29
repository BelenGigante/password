// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var possibleSpecial = "!#$%&()*+,-./:;<=>?@[^_`{|}~";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var upletters = letters.toUpperCase();
  var isUppercase = confirm('use uppercase');
  var isLowercase = confirm("use lowercase");
  var isSpecial = confirm("use special characters");
  var isNumber = confirm("use numbers");

  if (isUppercase) {
    console.log("uppercase");
  }
  if (isLowercase) {
    console.log("lowercase");
  }
  if (isSpecial) {
    console.log("special");
  }
  if (isNumber) {
    console.log("number");
  }
  return "";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
