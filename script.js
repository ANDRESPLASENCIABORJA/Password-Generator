//First we have to define globally our variables that are going to be used in our code
//First the variable for the lowercases
var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'ñ',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Variable for the uppercases
var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'Ñ',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Variable for numbers
var number = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
];

//Variable for special characters
var special = [
  '!',
  '"',
  '#',
  '$',
  '%',
  '&',
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  '<',
  '>',
  '=',
  '?',
  '@',
  '[',
  ']',
  '^',
  '_',
  '{',
  '}'
];

// Now we have to make a function that takes all the previews paramethers and asks the user if he or she wants this characters on the password
function passwordChoices() {

  // First one to alert the user where is
  alert('Welcome to the passwor generator app!');

  // Variable to ask if the user wants to include  lowercases
  var lowerCasesBoolean = confirm(
    'Do you want lowercases in your password?'
  );

  // Variable to confirm if the user wants to include uppercases
  var upperCasesBoolean = confirm(
    'Do you want uppercases in your password?'
  );

  // Variable to confirm if the user wants to include numbers
  var numberCasesBoolean = confirm(
    'Do you want numbers in your password?'
  );

  // Variable to confirm special characters
  var specialCasesBoolean = confirm(
    'Do you want special characters in your password?'
  );

  // Six Ask password length it has to be between 8 and 128 characters
  var passwordLength = prompt(
    'Please type your password lenght (notice it has to be between 8 and 128 characters)'
  );

  // Conditional statement to confirm that the password length has to be 8 or more characters
  if (passwordLength < 8) {
    prompt(
      'Your password length has to be greater than 8 characters'
    );
    return;
  };

  // Conditional statement to confirm that the password length has to be less than 128 characters
  if (passwordLength > 128) {
    prompt(
      'Your password length has to be less than 128 characters'
    );
    return;
  };

  // Conditional to evaluate if the user has entered every choices as false or as true
  if (
    lowerCasesBoolean === false &&
    upperCasesBoolean === false &&
    numberCasesBoolean === false &&
    specialCasesBoolean === false
  ) {
    alert('You have to select at least one character type')
    return;
  };

  // Store all the answers in an object
  var userChoices = {
    hasLowerCases: lowerCasesBoolean,
    hasUpperCases: upperCasesBoolean,
    hasNumbers: numberCasesBoolean,
    hasSpecialCharacters: specialCasesBoolean,
    length: passwordLength
  };

  return userChoices;

}

// Function to get a random element fom an array
function getRandomElement(array) {
  var index = Math.floor(Math.random() * array.length)
  var randElement = array[index];

  return randElement;
}

// Last function to generate the password with the user choices
function generatePassword () {
  // Variable that stores the user choices located on the function passwordChoices()
  var userOptions = passwordChoices();

  // Variable to store the password
  var result = [];

  // Array where we are going to store the types of characters that the user is going to choose
  var possibleElections = [];

  // Array to contain to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // Conditional statement that adds array of lowercases characters to the array of posibleElections
  // Then we have to tell the var guaranteedCharacters to get a random element from the array lowercase
  if (userOptions.hasLowerCases) {
    possibleElections = possibleElections + lowerCase;
    guaranteedCharacters.push(getRandomElement(lowerCase));
  }

  // Conditional statement that adds array of uppercases characters to the array of posibleElections
  // Then we have to tell the var guaranteedCharacters to get a random element from the array uppercase
  if (userOptions.hasUpperCases) {
    possibleElections = possibleElections + upperCase;
    guaranteedCharacters.push(getRandomElement(upperCase));
  }

  // Conditional statement that adds array of number characters to the array of posibleElections
  // Then we have to tell the var guaranteedCharacters to get a random element from the array number
  if (userOptions.hasNumbers) {
    possibleElections = possibleElections + number;
    guaranteedCharacters.push(getRandomElement(number));
  }

  // Conditional statement that adds array of lowercases characters to the array of special characters
  // Then we have to tell the var guaranteedCharacters to get a random element from the array special
  if (userOptions.hasSpecialCharacters) {
    possibleElections = possibleElections + special;
    guaranteedCharacters.push(getRandomElement(special));
  }

  // Loop that iterates over the password length from the userChoices object, selectinf random indices from the array of possible characters and concatenating those characters into the result var
  for (var i = 0; i < userOptions.length; i++) {
    var possibleElections = getRandomElement(possibleElections);

    result.push(possibleElections);
  }

  // Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  // Transform the result into a string and write it in writePassword
  return result.join('');
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









