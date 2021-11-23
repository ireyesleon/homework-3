// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "b", "e", "f", "g","h","i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var spCharacters = ["!", "#", "@", "&", "$", "%", "/", "?", "¿", "¡"]

function selectCriteria() {
  alert ("Please select your password criteria");
  var length = prompt("Please select your password length between 8 a 128 characters");
  if (length < 8 || length > 128) {
    alert("Your password must be between 8 a 128 characters");
    return;
  }

  if (isNaN(length)) {
    alert("The length should be a number");
    return;
  }

  var passwordLowercase = confirm("Do you want to include a Lowercase?");

  var passwordUppercase = confirm("Do you want to include an Uppercase?");

  var passwordNumber = confirm("Do you want to include a Number?");

  var passwordSpCharacter = confirm("Do you want to include an special character ex. %#&@?");

  if (passwordLowercase === false && 
    passwordUppercase === false && 
    passwordNumber === false && 
    passwordSpCharacter === false) {
      alert("You must select at least one criteria");
      return;
  }

  var userChoices = {
    length: length,
    passwordLowercase: passwordLowercase,
    passwordUppercase: passwordUppercase,
    passwordNumber: passwordNumber,
    passwordSpCharacter: passwordSpCharacter
  };
  return userChoices;
  }
//Function to get random element from user choice arrays.
function random(array) {
  var i = Math.floor(Math.random() * array.length)
  var value = array[i]
  return value;
  }


function generatePassword() {
  //create variable that equals selectCriteria function
  var userResults = selectCriteria(); //loop this
  //create variable that equals an empty array that is going to store the users password
  var finalPassword = [];
  //create variable that equals an empty array that is going to contain the types of characters that the user wants to use.
  var userOptions = [];
  //create variable that equals an empty array that is going to contain one of each of the user choices
  var userCharacters = [];
  //create conditional statement 

  if (userResults.passwordLowercase) {
    userOptions = userOptions.concat(lowercase);
    userCharacters.push(random(lowercase));
  }
  if (userResults.passwordUppercase) {
    userOptions = userOptions.concat(uppercase);
    userCharacters.push(random(uppercase));
  }
  if (userResults.passwordNumber) {
    userOptions = userOptions.concat(numbers);
    userCharacters.push(random(numbers));
  }
  if (userResults.passwordSpCharacter) {
    userOptions = userOptions.concat(spCharacters);
    userCharacters.push(random(spCharacters));
  }

  //do for each var
  for (var i = 0; i < userResults.length; i++) {
    var options = random(userOptions);
    finalPassword.push(options);
  }
  //loop through each userResults and then randomize userOptions and push the options into finalPassword.
  for (var i = 0; i < userCharacters.length; i++) {
    finalPassword[i] = userCharacters[i];
  }
  //loop through userCharacters and create var to hold userCharacters
  return finalPassword.join(""); //making the password a string with the ""
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);