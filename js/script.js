/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//FASE DI PREPARAZIONE
//dichiarazioni funzioni
function isPalindrome(word) {
    // Trasformo la parola in un array di caratteri, capovolgo l'array e lo unisco in una stringa
    let wordReverse = word.split('').reverse().join('');
    // log parola al rovsci
    return console.log(wordReverse);
}

//RACCOLGO GLI ELEMENTI DAL DOM
const form = document.getElementById('palindroma-form');
const inputField = document.getElementById('inputText');  // correggi 'imputField' in 'inputField'
const resultElement = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    //raccolta dati
    const word = inputField.value.trim();  // usa 'inputField' corretto

    //validazione
 

    //fase elaborazione
isPalindrome(word)
});