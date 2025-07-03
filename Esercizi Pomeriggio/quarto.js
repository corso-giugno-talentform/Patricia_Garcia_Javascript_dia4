/**Scrivi un programma che, dato un numero n in input, stampi a video la seguente sequenza di numeri:
Se il numero è divisibile per 3, stampa "Fizz".
Se il numero è divisibile per 5, stampa "Buzz".
Se il numero è divisibile sia per 3 che per 5, stampa "FizzBuzz".
Altrimenti, stampa il numero stesso. */

function numero(n){
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else {
            console.log(i);
        }
    }
}

numero(15);

