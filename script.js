// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for password 
var lowerLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var upperLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

var numberCharacters = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0
];

var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "=",
  "-",
  "_"];

var options = [];

var password = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Get the password inputs from the user
function generatePassword() {
  var length = parseInt(prompt("How many characters would you like your password to be?"));
  if (length < 8) {
    alert("Please make sure you're password is between 8 and 120 characters.");
  }
  else if (length > 128) {
    alert("Please make sure you're password is between 8 and 120 characters.");
  }
  else {
    lowerCase = confirm("Do you want lowercase characters in your password?");
    upperCase = confirm("Do you want uppercase characters in your password?");
    numericCharacters = confirm("Do you want numbers in your password?");
    symbolCharacters = confirm("Do you want special characters in your password?");

    // Take the user input and determine which arrays it applies to.

    if (lowerCase === true) {
      options = options.concat(lowerLetters);
    }

    if (upperCase === true) {
      options = options.concat(upperLetters);
    }

    if (numericCharacters === true) {
      options = options.concat(numberCharacters);
    }

    if (symbolCharacters === true) {
      options = options.concat(specialCharacters);
    }
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);