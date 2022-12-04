// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var special = "!#$%&()*+,-./:;<=>?@[^_`{|}~";
  var abcs = "mnbvcxzlkjhgfdsapoiuytrewq";
  var numbers = "0123456789";
  var check = "";
  var pass= "";
  var passLength = prompt("how long will your password be?");
  passLength = parseInt(passLength);

  if(isNaN(passLength) || passLength < 8 || passLength > 128){
    alert('Please enter a number between 8 and 128');
    return generatePassword();
  }

  var isUppercase = confirm('use uppercase?');
  var isLowercase = confirm("use lowercase?");
  var isSpecial = confirm("use special characters?");
  var isNumber = confirm("use numbers?");
  var any="";

  var allowedChars = "";
 

  if (isUppercase){
    allowedChars += abcs.toUpperCase();
    any = Math.floor(Math.random() * passLength);
    check += allowedChars[any];

  }
 
  if (isLowercase) {
    allowedChars += abcs;
    any = Math.floor(Math.random() * passLength);
    check += abcs[any];

  }

  if (isSpecial) {
    allowedChars += special;
    any = Math.floor(Math.random() * passLength);
    check += special[any];

  }

  if (isNumber) {
    allowedChars += numbers;
    any = Math.floor(Math.random() * passLength);
    check += numbers[any];

  }

if(allowedChars.length > 0){

  for(var i = 0; i < (passLength); i++){
    var randomIndex = Math.floor(Math.random()*allowedChars.length);
    pass = pass + allowedChars[randomIndex];
  }
  return pass.substring(check.length).concat(check);


}else{alert( "Select options to generate password");
    return generatePassword();
}
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 //Add event listener to generate button
generateBtn.addEventListener("click", writePassword);