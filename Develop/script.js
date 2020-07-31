// Assignment Code
function generatePassword() {
    var alphabetsUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialChars = "!@#$%^&*()_+";
    var numeric = "0123456789";
    var password = "";
    var temp = "";
    var guaranteed = "";

    var queshowManyChars = parseInt(prompt("How many characters would you like to enter"));

    if (queshowManyChars >= 8 && queshowManyChars <= 128) {

        //Confirm Dialogs
        var confirmSpecialChars = confirm("Click Ok to confirm the special characters")
        var confirmUppercase = confirm("Click Ok to confirm the Uppercase characters");
        var confirmLowercase = confirm("Click Ok to confirm the lowercase characters");
        var confirmNumeric = confirm("Click Ok to confirm the numeric characters");

        //If the confirm dialog condition is "true"
        if (confirmSpecialChars === true) {
            temp = temp + specialChars;
            guaranteed += specialChars[Math.floor((Math.random() * specialChars.length))];
        }
        if (confirmUppercase === true) {
            temp = temp + alphabetsUppercase;
            guaranteed += alphabetsUppercase[Math.floor((Math.random() * alphabetsUppercase.length))];
        }
        if (confirmLowercase === true) {
            temp = temp + alphabetsUppercase.toLowerCase();
            guaranteed += alphabetsUppercase.toLowerCase()[Math.floor((Math.random() * alphabetsUppercase.length))];
        }
        if (confirmNumeric === true) {
            temp = temp + numeric;
            guaranteed += numeric[Math.floor((Math.random() * numeric.length))];
        }

        var guaranteedLength = guaranteed.length;

        //This loop runs based on the length of the characters the user input
        for (var i = 0; i < queshowManyChars - guaranteedLength; i++) {
            var randomNumber = Math.floor((Math.random() * temp.length));
            guaranteed = guaranteed + temp[randomNumber];
        }

        var res = guaranteed.split("");
        //This algorithm is to swap the variables whatever stored in the "guaranteed" variable
        for (var j = res.length - 1; j > 0; j--) {
            var k = Math.floor(Math.random() * j)
            var finalTemp = res[j];
            res[j] = res[k]
            res[k] = finalTemp;
        }
        password = res.join("");
    } else {
        alert("You need to enter greater than or equal to 8 and lesser than or equal to 128")

    }
    return password;
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