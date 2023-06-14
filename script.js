// Assignment Code

// Assigning a class to the element in the HTML (Which is the generate button to give it a function)
var generateBtn = document.querySelector("#generate");

// Function Generate Btn activates 'writePassword' after it gets 'clicked on'
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 

  // User Specify Password Length

function generatePassword() {



  // Criteria of what to include (Using if/if else as learnt in class)
  const useUppercase = window.confirm("Do you want to include Uppercase Characters ?");
  const useLowercase = window.confirm("Do you want to include Lowercase Characters ?");
  const useNumber = window.confirm("Do you want to include Numbers?");
  const useSpecial = window.confirm("Do you want to include Special Characters ?");


  // Definining each Criteria
  const Uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  const Lowercase = ("abcdefghijklmnopqrstuvwxyz")
  const Number = ("0123456789")
  const Special = ("!@#$%^&*()-=_+[]{}|;':,.<>?")

  let generated = "";
  if (useUppercase) {
    generated += Uppercase;
  }
  if (useLowercase) {
    generated += Lowercase;
  }
  if (useNumber) {
    generated += Number;
  }
  if (useSpecial) {
    generated += Special;
  } 
    // If all values are false i will create a window.alert specifying to pick atleast one criteria (Which i want it to repromt the questions again)
  if (!Uppercase && !Lowercase && !Number && !Special) 
  {
    window.alert("Please Select a minimum of one criteria");
    writePassword();
  } 
    
  // Prompt for password length
  let passwordLength = 0;
  // Here it is saying that if the Length of the password isnt between the specified characters it will keep looping and telling you till you follow the criteria for length 
  while (passwordLength < 8 || passwordLength > 128) {
    // parseInt turns the input from user to an integer for example '32' becomes 32 as it needs to compare the value against integers of 8 and 128
    passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128):"));
    // if the user doesnt input a number it sets the value of length back to 0 and because it sets to 0 the prompt will ask again as its not between 8 and 128
    if (isNaN(passwordLength)) {
      passwordLength = 0;
    }
  }

  // Generate the password
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    // charAt returns a character from the class generated // when we times math.random by the length of the generated section we get a random index as we dont want decimals we use math.floor to round the number to the nearest integer 
    // ensuring that we get a valid index within the length of the generated password
    password += generated.charAt(Math.floor(Math.random() * generated.length));
  }
  // we return the string password where calling back to the function function writePassword() which is responsible of returning the value of the password we have generated and replacing it with the HTML element so that it displays on screen.
  return password;
}
  









