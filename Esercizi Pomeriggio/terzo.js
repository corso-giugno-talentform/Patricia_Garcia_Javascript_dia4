// Scrivere un programma funzionale che, dato un numero in input (MAX) stampi a video
//numeri dispari dopo numeri pari

/*
function numero(max){
    for (let a = 1; a <= max; a++) {
       dispari(a);
    }
    for (let a = 1; a <= max; a++){
        pari(a);
}}


function dispari(a){
     if(a%2 !== 0){
        return console.log('numero dispari'+a)
        } return  null
}

function pari(a){
     if(a%2 === 0){
        return console.log('numero pari'+a)
        } return  null
}

numero(14);
*/




function numero(max){
    for (let a = 1; a <= max; a++) {
        if (a % 2 !== 0) {
            console.log('numero dispari ' + a);
        }
    }

    for (let a = 1; a <= max; a++) {
        if (a % 2 === 0) {
            console.log('numero pari ' + a);
        }
    }
}

numero(14);