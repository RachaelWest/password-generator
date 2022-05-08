const charsArray = ["A","B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","^","&","*","(",")","_","+","~","}","{","[","]",":",";","?",">","<",".","/","-","="];

const passwords = document.querySelectorAll(".password-box");
const passwordLength = 15; 
let password; 

//BUTTONS
document.getElementById("passwords-btn").addEventListener('click', () => displayPasswords());

document.getElementById("reset-btn").addEventListener('click',() => resetPasswords());

//FUNCTION TO GENERATE PASSWORDS
 function getPassword(){
    password = "";
    for(let i = 0; i < passwordLength; i++){
        let randomChar = Math.floor(Math.random() * charsArray.length);
        password += charsArray[randomChar];
    }
    return password;
 }

//FUNCTION TO CALL GENERATE PASSWORDS FUNCTION AND THEN DISPLAY PASSWORDS IN DOM
function displayPasswords() {
    passwords.forEach((item) => {
        item.value = getPassword();
    })
}
  
//FUNCTION TO RESET PASSWORD FIELDS   
function resetPasswords() {
    passwords.forEach((item) => {
        item.value = "";
    })
}
