const displayBox = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.querySelector(".copyBtn");
let count = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()-_+=[]{};:',./?|</>";

const allCharacter = upperCase + lowerCase + number + symbol;

generateBtn.addEventListener('click', displayPassword);

function displayPassword(){

    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (count > password.length){

        password += allCharacter[Math.floor(Math.random() * allCharacter.length)];

    }

    displayBox.value = password;

}

copyBtn.addEventListener('click', copyPassword);


function copyPassword() {
    displayBox.select();
    document.execCommand("copy");
    displayBox.setSelectionRange(0,0);
    alert("Password copied to clipboard!");

    
    
}

