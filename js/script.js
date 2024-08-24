/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// Chiedere all’utente di inserire una parola


//FASE DI PREPARAZIONE
//dichiarazioni funzioni
function isPalindrome(word){
    //capovolgo la parola
    if (word.revers() === word){
        return console.log(palindroma)}
    //contollo se la parola e uguare
}

//RACCOLGO GLI ELEMENTI DAL DOM

const form = document.getElementById('palindroma-form')
const imputField = document.getElementById('inputText')
const resultElement =  document.getElementById('result')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    //raccolta dati
    const word = imputField.value.trim()

    //validazione

    //fase elaborazione
    isPalindrome()
})


