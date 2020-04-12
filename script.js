
var length;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var choices;

// Special characters 
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// lower alphabet
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Upper alaphabet
var alpha2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var get = document.querySelector("#generate");
get.addEventListener("click",function (){
  pw = writePassword();
  document.getElementById("password").placeholder = pw;
});

// Write password to the #password input
function writePassword() {

  var length = parseInt(prompt("How many characters woud you like in your password?"));
  if (!length) {
    alert("This needs value"); 
   
  } else if (length < 8 || length > 128) {

//wrong inputs prompts
    length = parseInt(prompt("Please choose between 8 and 128"));
  

  } else {
    confirmNumber = confirm("Does it contain numbers?");
    confirmCharacter = confirm("Does it contain special characters?");
    confirmUppercase = confirm("Does it contain Uppercase letters?");
    confirmLowercase = confirm("Does it contain Lowercase letters?");

  };

  //4 negative options

    if(!confirmNumber && !confirmCharacter && !confirmLowercase && !confirmUppercase) {
      choices = alert("You must choose at least one Criteria");
    }

  //4 positivce options

   else if (confirmNumber && confirmCharacter && confirmLowercase && confirmUppercase) {
     choices = character.concat(alpha,alpha2,number);
   }

   //3 postive options

   else if(confirmNumber && confirmCharacter && confirmLowercase) {
    choices = character.concat(number,alpha);
    }
    else if(confirmNumber && confirmCharacter && confirmUppercase) {
      choices = character.concat(number,alpha2);
    }
    else if(confirmCharacter && confirmUppercase && confirmLowercase) {
      choices = character.concat(alpha,alpha2);
    }
    else if(confirmNumber && confirmUppercase && confirmLowercase) {
      choices = alpha.concat(number, alpha2);
    }

  //2 postive options

    else if(confirmUppercase && confirmLowercase) {
      choices = alpha.concat(alpha2);
    }
    else if(confirmUppercase && confirmNumber) {
      choices = number.concat(alpha2);
    }
    else if(confirmLowercase && confirmNumber) {
      choices = number.concat(alpha);
    }
    else if(confirmLowercase && confirmCharacter) {
      choices = character.concat(alpha);
    }
    else if(confirmCharacter && confirmNumber) {
      choices = number.concat(character);
    }
    else if(confirmCharacter && confirmUppercase) {
      choices = alpha2.concat(character);
    }
    
  //1 postive option

    else if(confirmNumber) {
      choices = number;
    }
    else if(confirmCharacter) {
      choices = character;
    }
    else if(confirmLowercase) {
      choices = alpha;
    }
    else if(confirmUppercase) {
      choices = alpha2;
    }
   
   var password = [];

    for (var i = 0; i < length; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
    }
    var pw = password.join("");
    userpassword(pw);
    return pw;

}
function userpassword(pw) {
  document.getElementById("password").textContent = pw;
}


