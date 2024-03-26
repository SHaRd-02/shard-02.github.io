// Declaring element variables
const inputElement = document.getElementById('input-word');
const buttonElement = document.getElementById('check-button');
const outputElement = document.getElementById('output');

// Function to clean string and check for vowels
function cleanInput(str) {
    const strArray = str.toLowerCase().split('');
    const vowelsArray = [];
    const consonantArray = [];

    for (let i = 0; i < strArray.length; i++) {
        if (['a', 'e', 'i', 'o', 'u'].includes(strArray[i])) {
            vowelsArray.push(strArray[i]);
        }else{
            consonantArray.push(strArray[i]);
        }
    }

    outputElement.innerText = "Your word has " + vowelsArray.length + " vowels.\n";
    outputElement.innerText += "Your word has " + consonantArray.length + " consonants.\n";
    outputElement.innerText += "Vowels: " + vowelsArray + ".\n";
    outputElement.innerText += "Consonants: " + consonantArray + ".\n";
}

buttonElement.onclick = function() {
    cleanInput(inputElement.value);
};
