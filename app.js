let luckyNumbers = [];
const max = 10;
let attempts = 1;

intialsCoditions();

function asigneTextElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
}

function verifyIntent() {
    let userNumber = parseInt(document.getElementById('userValue').value);

    if (userNumber === secretNumber) {
        asigneTextElement('p', `You guessed the number in ${attempts} ${ (attempts === 1) ? 'attempt' : 'attempts' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');   
    } else {
        userNumber > secretNumber ? asigneTextElement('p', 'The secret number is lower') : asigneTextElement('p', 'The secret number is higher');
    }
        
    attempts++;
    cleanBox();
}

function cleanBox() {
    document.querySelector('#userValue').value = '';
}

function intialsCoditions() {
    // Reset texts
    asigneTextElement('h1', 'Secret Number Game');
    asigneTextElement('p', `Enter a number between 1 and ${max}`);

    // Generate random number
    secretNumber = randomNumber();

    // Initialize attempt count
    attempts = 1;
}

function restartGame() {
    // Disable restart button
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

    if (luckyNumbers.length == max) {
        asigneTextElement('p', 'All possible numbers have already been drawn');
        return;
    } 

    // Clear input box
    cleanBox();

    // Display interval message
    intialsCoditions();
}

function randomNumber() {
    let lucky = parseInt(Math.floor(Math.random() * max) + 1);
       
    if (luckyNumbers.includes(lucky)) {
        return randomNumber();
    } else {
        luckyNumbers.push(lucky);
        return lucky;
    }
}
