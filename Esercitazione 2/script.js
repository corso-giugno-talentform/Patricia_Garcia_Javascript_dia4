//Crea un programma che determini la stagione basandosi sul mese (1-12)usando switch statment

let mese = prompt("Inserisci un mese (1-12):");
console.log("Hai inserito il mese: " + mese);
mese = parseInt(mese);
switch (mese) {
    case 1: 
        console.log("Inverno");
        break;
    case 2:
        console.log("Inverno");
        break;
    case 3:
        console.log("Inverno");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Primavera");
        break;
    case 7:
    case 8:
    case 9:     
        console.log("Estate");
        break;
    case 10:
    case 11:
    case 12:
        console.log("Autunno");
        break;

    default:
        console.log("Mese non valido. Inserisci un numero tra 1 e 12.");
        break;
}



// Crea un sistema di valutazione che, data un età, determini la categoria (bambino 0-12), adolescente (13-17), adulto (18-64,anziano+65) controlli per valori negativi 

let eta = prompt("Inserisci la tua età:");
console.log("Hai inserito l'età: " + eta);
eta = parseInt(eta);

if (eta >0 && eta <= 12) {
        console.log(eta)
       console.log('sei un bambino')
    } else if (eta >= 13 && eta <= 17) {
        console.log(eta)
        console.log('sei un adolescente')
    } else if (eta >= 18 && eta <= 64) {
        console.log(eta)
        console.log('sei un adulto')
    } else if (eta >= 65 && eta <110) {
        console.log(eta)
        console.log("sei un'anziano")
    } else {
        console.log(eta)
        console.log('Controlla la tua età');
    }