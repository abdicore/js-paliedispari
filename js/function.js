// TEMPO CORRENTE
//Funzione per recuperare ora attuale

function getCurrentTime(){
    now = new Date ()
    
    const hour = now.getHours()
    const min = now.getMinutes()
    const sec = now.getSeconds()

    return `${hour}:${min}:${sec}.`;

}


//PARI
//Funzione per sapere se un numero e pari ho dispari

function isEven (){
    return Number % 2 === 0;
}

// RANDOM NUMBER
//Funzione per creare un random da 1 a 100 incluso
