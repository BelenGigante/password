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
  // var password = {
  //   outcome:["","","",""],
  // };

  if (isUppercase){
    //password.outcome[0]= abcs.substring(Math.floor(Math.random() * 1),Math.floor(Math.random() * 10));
    //console.log(password.outcome[0].toUpperCase());
    allowedChars += abcs.toUpperCase();
  }
  //else{
    
  // }
  if (isLowercase) {
    //password.outcome[1]= abcs.substring(Math.floor(Math.random() * numbers.length),Math.floor(Math.random() * numbers.length));
    //console.log(password.outcome[1]);
    allowedChars += abcs.toLowerCase();
  }
  //else{

  // }
  if (isSpecial) {
  //   password.outcome[2]= special.substring(Math.floor(Math.random() * numbers.length),Math.floor(Math.random() * numbers.length));
  //   console.log(password.outcome[2]);
    allowedChars += special;
  }
  //else{

  // }
  if (isNumber) {
  //   password.outcome[3] = Math.floor(Math.random() * abcs.length);
  //   console.log(password.outcome[3]);
    allowedChars += numbers;
  }

  // allowedChars
  var pass = "";
  for(var i = 0; i < passlength; i++){
    var randomIndex = Math.floor(Math.random()*allowedChars.length);
    pass = pass + allowedChars[randomIndex];
  }

  //else{

  // }
  // var finalPassword = password.outcome.join("");
  
  // return password.outcome.join("");
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