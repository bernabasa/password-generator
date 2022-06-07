// Assignment code here
var uppercaseChar;
var lowercaseChar;
var num;
var specialChar;

var createStructure = function(){

  var characters ="";

  uppercaseChar = window.confirm("Are you sure you want to access uppercase characters?");
  if(uppercaseChar) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  
  lowercaseChar = window.confirm("Are you sure you want to access lowercase characters?");
  if(lowercaseChar) {
      characters += "abcdefghijklmnopqrstuvwxyz";
  }

  num = window.confirm("Are you sure you want to accsess the numbers?");
  if(num) {
    characters += "0123456789";
  }
  specialChar = window.confirm("Are you sure you would like to use the special characters?");
  if(specialChar) {
    characters += "#$&()!\"*+,-./:;<=>?@[\\]^_{|}~"
  }

  return characters;
}

//THEN I choose a length of at least 8 characters and no more than 128 characters//
var generatePassword = function() {
    var passwordLength = window.prompt("please choose the length of your password?");

    while(passwordLength > 128 || passwordLength < 8 isNaN(passwordLength)) {
      window.alert("The length of the password has to be from 8 to 128.");
      passwordLength = window.prompt("How many characters do you want it to be?");
       
    }
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);