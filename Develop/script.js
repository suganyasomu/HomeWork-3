// Assignment Code
function generatePassword() {
    var alphabetsUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialChars = "!@#$%^&*()_+";
    var numeric = "0123456789";
    var password = "";
    var temp = "";


    var questions = parseInt(prompt("How many characters would you like to enter"));




    if (questions >= 8 && questions <= 128) {
        var confirmPassword = confirm("Click Ok to confirm the special characters");


        var confirmUppercase = confirm("Click Ok to confirm the Uppercase characters");

        var confirmLowercase = confirm("Click Ok to confirm the lowercase characters");
        var confirmNumeric = confirm("Click Ok to confirm the numeric characters");
        if (confirmPassword == true) {
            temp = temp + specialChars;
        }
        if (confirmUppercase == true) {
            temp = temp + alphabetsUppercase;
        }
        if (confirmLowercase == true) {
            temp = temp + alphabetsUppercase.toLowerCase();
        }
        if (confirmNumeric == true) {
            temp = temp + numeric;
        }
        for (var i = 0; i < questions; i++) {
            var randomNumber = Math.floor((Math.random() * temp.length));
            password = password + temp[randomNumber];

        }

    } else {
        alert("You need to enter greater than or equal to 8 and lesser than or equal to 128")

    }








    return password;

}

var generateBtn = document.querySelector("#generate");


// for (i = 0; i < numeric.length; i++) {
//     if (numericQuestions == true && numericQuestions == numeric[i]) {
//         console.log("you have selected the value from the list");
//     } else {
//         prompt(numeric);
//         console.log("you have to select value from the list");
//     }
// }

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);