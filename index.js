//TO GENERATE RANDOM PASSWORDS

let password1Text = document.getElementById("password1");
let password2Text = document.getElementById("password2");
let password3Text = document.getElementById("password3");
let password4Text = document.getElementById("password4");

let password1 = "";
let password2 = "";
let password3 = "";
let password4 = "";

let charsArray = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength = 12;

//BUTTONS
let passwordButton = document.getElementById("passwords-btn");
passwordButton.addEventListener('click', event => {
    getPasswords();
})

let resetButton = document.getElementById("reset-btn");
resetButton.addEventListener('click', event => {
    resetPasswords();
})


//FUNCTION FOR RANDOM NUMBER
function randomNumber() {
    let randomNumber = Math.floor(Math.random() * charsArray.length);
    return randomNumber
}

//FUNCTION TO GENERATE AND DISPLAY PASSWORDS
function getPasswords() {    
    for (let i = 0; i <= passwordLength; i++) {
        let randomChar1 = randomNumber();
        password1 += charsArray.substring(randomChar1, randomChar1 +1);
        document.getElementById("password1").value = password1;
    }
    
    for (let j = 0; j <= passwordLength; j++) {
        let randomChar2 = randomNumber();
        password2 += charsArray.substring(randomChar2, randomChar2 +1);
        document.getElementById("password2").value = password2;
    }    
    
    for (let k = 0; k <= passwordLength; k++) {
        let randomChar3 = randomNumber();
        password3 += charsArray.substring(randomChar3, randomChar3 +1);
        document.getElementById("password3").value = password3;
    }     
    
     for (let l = 0; l <= passwordLength; l++) {
        let randomChar4 = randomNumber();
        password4 += charsArray.substring(randomChar4, randomChar4 +1);
        document.getElementById("password4").value = password4;
    } 
    
    passwordButton.disabled = true
    
}

//FUNCTION TO RESET ALL ELEMENTS
function resetPasswords() {
    passwordButton.disabled = false;
    password1Text.value = "";
    password2Text.value = "";
    password3Text.value = "";
    password4Text.value = "";
    password1 = "";
    password2 = "";
    password3 = "";
    password4 = ""; 
}