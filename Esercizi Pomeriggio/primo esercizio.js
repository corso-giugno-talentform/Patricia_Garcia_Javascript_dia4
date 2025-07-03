// Crea una funzione CALCOLATRICE che prenda 3 parametri (numero1, numero2, operrazione) e restituisca il risultato. L'operazione può essere +-*/
/*
let numero1 = parseFloat(prompt("Inserisci il primo numero:"));
let numero2 = parseFloat(prompt("Inserisci il secondo numero:"));
let operazione = prompt("Inserisci l'operazione (somma, resta, moltiplicazione, divisione):");
console.log(operazione);
calcolatrice(numero1,numero2,operazione);

function calcolatrice (numero1, numero2,operazione){
    if (operazione === 'somma'){
        somma = numero1+ numero2;
        return console.log('la somma dei numeri è '+somma);
    } else if (operazione === 'resta'){
        resta = numero1- numero2;
        return console.log('la resta dei numeri è '+resta);
    } else if (operazione === 'moltiplicazione'){
        moltiplicazione = numero1 * numero2;
        return console.log('la molteplicazione dei numeri è '+moltiplicazione);
    } else if (operazione === 'divisione'){
        divisone = numero1 / numero2;
        return console.log('la divisione dei numeri è '+divisone);
} else{
    return console.log('opzione no valida');
}
0
}
*/
// con switch
/*
let numero1 = parseFloat(prompt("Inserisci il primo numero:"));
let numero2 = parseFloat(prompt("Inserisci il secondo numero:"));
let operazione = prompt("Inserisci l'operazione (+, -, *, /):");
console.log(operazione);

calcolatrice(numero1,numero2,operazione);


function calcolatrice(numero1, numero2, operazione) {
    let risultato;
    switch (operazione) {
 
        case '+':
            return console.log(risultato = numero1 + numero2);
        case '-':
            return console.log(risultato = numero1 - numero2);
            
        case '*':
            return console.log(risultato = numero1 * numero2);
            
        case '/':
            if (numero2 === 0) {
            return "Errore: Divisione per zero non permessa";
            }
            return risultato = numero1 / numero2;
           
        default:
            return "Errore: Operazione non valida";
    }

   }*/