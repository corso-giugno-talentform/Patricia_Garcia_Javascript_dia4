/*
let x = 10;
let y = 5;
let z = 3;
let somma;
let somma1;
let somma2;
somma = x+y;
somma1 = somma -z;
somma2 = somma1 + x;
console.log(somma)

for (let i = 1; i <5; i++){
    console.log(i)
    if(i%2===0){
    console.log('Il numero è pari'+ i)
    } else {
        console.log('Il numero è dispari'+ i)
    }
}*/

function controllaPari (a){
    if (a%2===0){
    return true;
    } return false;
}

for (let i = 1; i <100; i++){
    //console.log(i)
    if (controllaPari(i)){
       console.log('Il numero è pari'+ i);
    } else {
        console.log('Il numero è dispari'+ i);
    }
   }

