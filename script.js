// Global variables 

// Lowercases
const lowerCase = [
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

// Uppercases
const upperCase = [
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

// Numbers
const number = [
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

// Special Characters
const special = [
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

// Final password array
let finalPassword = [];


// Now we have to make a function that takes all the previews paramethers and asks the user if he or she wants this characters on the password
function passwordChoices() {

  // Log the beginning of the function
  console.log('passwordChoices function start!!');

  // Alert the user the start of the application
  alert('Welcome to the passwor generator app!');

  // Variable to ask if the user wants to include lowercases
  let lowerCasesBoolean = confirm(
    'Do you want lowercases in your password?'
  );

  // Log the user answer
  console.log(lowerCasesBoolean);

  // Variable to confirm if the user wants to include uppercases
  let upperCasesBoolean = confirm(
    'Do you want uppercases in your password?'
  );

  // Log the user answer
  console.log(upperCasesBoolean);


  // Variable to confirm if the user wants to include numbers
  let numberCasesBoolean = confirm(
    'Do you want numbers in your password?'
  );

  // Log the user answer
  console.log(numberCasesBoolean);

  // Variable to confirm if the user wants special characters
  let specialCasesBoolean = confirm(
    'Do you want special characters in your password?'
  );

  // Log the user answer
  console.log(specialCasesBoolean);

  // Conditional to evaluate if the user has entered every choices as false or as true, if all false alert the user that at least one is required and restart the program
  if (
    lowerCasesBoolean === false &&
    upperCasesBoolean === false &&
    numberCasesBoolean === false &&
    specialCasesBoolean === false
  ) {
    alert('You have to select at least one character type. Please try again.')
    return;
  };

  // Ask for password length (it has to be between 8 and 128 characters)
  let passwordLength = prompt(
    'Please type your password lenght (notice it has to be between 8 and 128 characters)'
  );

  // Log the user answer
  console.log('passwordLength as string: ', passwordLength);

  // Convert the pw length answer to number so it can be used later
  let pwLengthToNumber = Math.floor(passwordLength);

  // Log the number 
  console.log('passwordLength as number: ', pwLengthToNumber);

  // Conditional statement to confirm that the password length has to be 8 or more characters
  while (pwLengthToNumber < 8 || pwLengthToNumber > 128) {

    passwordLength = prompt('Your password length has to be greater than 8 characters and lesser than 128 characters!!');

    console.log('passwordLength as string: ', passwordLength);

    pwLengthToNumber = Math.floor(passwordLength);

    console.log('passwordLength as number: ', pwLengthToNumber);

  };

  // Store all the user  answers in an object
  const userChoices = {
    hasLowerCases: lowerCasesBoolean,
    hasUpperCases: upperCasesBoolean,
    hasNumbers: numberCasesBoolean,
    hasSpecialCharacters: specialCasesBoolean,
    characters: pwLengthToNumber
  };

  // Log the user choices
  console.log(userChoices);

  // Log the end of the function
  console.log('passwordChoices function end!!');

  return userChoices;

}


// Function to get a random element fom an array
function getRandomElement(array) {

  // Log the Start of the function
  console.log('getRandomElement function start!!');

  const elements = array[Math.floor(Math.random() * array.length)];

  // Log the end of the function
  console.log('getRandomElement function end!!');

  return elements;

}

// Last function to generate the password with the user choices
function generatePassword() {

  // Log the Start of the function
  console.log('generatePassword function start!!');

  // Variable that stores the user choices located on the function passwordChoices()
  const userOptions = passwordChoices();

  // Log he user options
  console.log(userOptions);

  // Array where we are going to store the types of characters that the user is going to chose
  let possibleElections = [];

  // Log possibleElections empty at first
  console.log('Possible Elections: ', possibleElections);

  // Conditional statement that adds array of lowercases characters to the array of posibleElections
  // Then we have to tell the let guaranteedCharacters to get a random element from the array lowercase
  if (userOptions.hasLowerCases) {
    possibleElections.push(lowerCase);
    finalPassword.push(getRandomElement(lowerCase));
  }

  // Log the guaranteed character
  console.log('Guaranteed characters with lower: ' + finalPassword);

  // Conditional statement that adds array of uppercases characters to the array of posibleElections
  // Then we have to tell the let guaranteedCharacters to get a random element from the array uppercase
  if (userOptions.hasUpperCases) {
    possibleElections.push(upperCase);
    finalPassword.push(getRandomElement(upperCase));
  }

  // Log the guaranteed character
  console.log('Guaranteed characters with upper: ' + finalPassword);

  // Conditional statement that adds array of number characters to the array of posibleElections
  // Then we have to tell the let guaranteedCharacters to get a random element from the array number
  if (userOptions.hasNumbers) {
    possibleElections.push(number);
    finalPassword.push(getRandomElement(number));
  }

  // Log the guaranteed character
  console.log('Guaranteed characters with number: ' + finalPassword);

  // Conditional statement that adds array of lowercases characters to the array of special characters
  // Then we have to tell the let guaranteedCharacters to get a random element from the array special
  if (userOptions.hasSpecialCharacters) {
    possibleElections.push(special);
    finalPassword.push(getRandomElement(special));
  }

  // Log the guaranteed character
  console.log('Guaranteed characters with lower: ' + finalPassword);

  // Log all the guaranteed characters
  console.log('Final possible elections: ', finalPassword);

  // Join all the selected arrays
  let joinedElections = possibleElections.join();

  // Split the joined elections to remove the comas
  let splitedElections = joinedElections.split(",");

  // Compare the joined and splitted arrays lengths
  console.log('joined length: ' + joinedElections.length);
  console.log('splitted length: ' + splitedElections.length);


  console.log('Final choices: ' + splitedElections);
  console.log('Final choices Length: ' + splitedElections.length);

  // Loop through the splittedElections array and grab random elements until the userOptions password length is reached 
  while (finalPassword.length < userOptions.characters) {

    for (let index = 0; index < splitedElections.length; index++) {
      // const element = splitedElections[Math.floor(Math.random() * splitedElections.length)];

      // console.log('element: ' + element);

      // if (finalPassword.length == userOptions.characters) {
      //   break;
      // } else {
      //   finalPassword.push(element);
      // }

      if (finalPassword.length == userOptions.characters) {
        break;
      } else {
        finalPassword.push(getRandomElement(splitedElections));
      }

    };

  };

  console.log('Your password is: ', finalPassword);

  console.log('final password length: ' + finalPassword.length);

  // Transform the result into a string and write it in writePassword
  return finalPassword.join('');
}

function clearPassword() {
  
  return finalPassword.length = []
}

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  password = generatePassword();

  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
let clearBtn = document.querySelector("#clear");

// Write password to the #password input
function removePassword() {

  password = clearPassword();

  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
clearBtn.addEventListener("click", removePassword);


