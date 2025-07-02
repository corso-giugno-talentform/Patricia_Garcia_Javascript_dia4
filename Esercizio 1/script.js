const MAGGIORE = 18;  // valore perno
let eta = 16; 
/*
// if else
if (eta >= MAGGIORE){
    console.log('Sei un maggiorenne')
} else {
    console.log('Sei un minorenne')
}
  
// else if 
if (eta > MAGGIORE){
    console.log('Sei un maggiorenne')
} else if  (eta == MAGGIORE){
    console.log('Hai 18 anni');
} else {
    console.log('Sei minnorenne')
}

// if else
if (eta % 2 == 0 ){
    console.log('il tuo numero '+ eta + ' es '+ 'par')
} else {
    console.log('il tuo numero '+ eta + ' es '+ 'impar')
} 

let edad =  18;
let resultado = edad >= 18 ? "sei maggiorenne" : "sei minorenne";
console.log(resultado);
*/

let mese = 3;
switch (mese){
    case 1:
        console.log('Oggi è lunedì');
        break;
    case 2:
        console.log('Oggi è Martedì');
        break;
    case 3:
        console.log('Oggi è Mercoledì');
        break;
    case 4:
        console.log('Oggi è Giovedì');
        break;
    case 5:
        console.log('Oggi è Venerdì');
        break;
    default:
        console.log('il tuo giorno è fine settimana ossia sabato o domenica')
}