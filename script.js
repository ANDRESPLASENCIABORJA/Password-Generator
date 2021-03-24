// Assignment Code
var generateBtn = document.querySelector("#generate");//This is generating the button

// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");//This is the variable that defines the text in the box that is the password generated
  
    var password;
    var lowerCaseString = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];//This is our variable to generate random lower case characters.
    var upperCaseString = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];//This is our variable to generate random upper case characters.    var numbers = [0,1,2,3,4,5,6,7,8,9];//Variable to generate random numbers.
    var specialCharacterString = ['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','^','_','{','}'];//Variable to generate random special characters.
    var numbers = [0,1,2,3,4,5,6,7,8,9];
     
//We have to ask 4 questions to the user so we can generate the correct and secure password, all the following 4 variables are booleans because they are true or false if they are all true then the password will contain all the variables
    var passwordLenght = window.prompt ("Write the number of characters that your password will have, valid numbers from 8 to 128"); 
    while (passwordLenght < 8 || passwordLenght >128) {
        passwordLenght = window.prompt ("Not valid number");
    }
    var lowerCaseBoolean = window.confirm ("Do you want to include lowercases to your password? " );
    var numbersBoolean = window.confirm ("Do you want to include numbers to your password? " );
    var specialBoolean = window.confirm ("Do you want to include special characters to your password? ");
    var upperCaseBoolean = window.confirm ("Do you want to include special characters to your password? ");
    
    
    lowerCaseBoolean  
        password = lowerCaseString [Math.floor(Math.random() * lowerCaseString.length)] 
        console.log (lowerCaseString);
    
    numbersBoolean 
        password = numbers [Math.floor(Math.random() * numbers.length)]
        console.log (numbers);

    specialBoolean 
        password = specialCharacterString [Math.floor(Math.random() * specialCharacterString.length)];
        console.log (specialCharacterString);

    upperCaseBoolean 
        password = upperCaseString [Math.floor(Math.random() * upperCaseString.length)];
        console.log (upperCaseString);

    passwordText.value = password;//The value of the passwordText variable is "password" because is what is going to be showed 
}


  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);









