/*

//Crea un programma che determini la stagione basandosi sul mese (1-12)usando switch statment

let mese = prompt("Inserisci un mese (1-12):");
console.log("Hai inserito il mese: " + mese);
mese = parseInt(mese);
switch (mese) {
    case 1: 
        let mese1 = 'Gennaio';        
        console.log("Tuo mese è "+ mese1 + "è la tua stagione è Inverno");
        break;
    case 2:
         let mese2 = 'Febbraio';              
        console.log("Tuo mese è "+ mese2 + "è la tua stagione è Inverno");
        break;
    case 3:
        let mese3 = 'Marzo';      
        console.log("Tuo mese è "+ mese3 + "è la tua stagione è Inverno");
        break;
    case 4:
        let mese4 = 'Aprile';      
        console.log("Tuo mese è "+ mese4 + "è la tua stagione è Primavera");
        break;
    case 5:
        let mese5 = 'Maggio';      
        console.log("Tuo mese è "+ mese5 + "è la tua stagione è Primavera");
        break;
    case 6:
        let mese6 = 'Giugno';      
        console.log("Tuo mese è "+ mese6 + "è la tua stagione è Primavera");
        break;
    case 7:
        let mese7 = 'Luglio';      
        console.log("Tuo mese è "+ mese7 + "è la tua stagione è Verano");
        break;
    case 8:
        let mese8 = 'Agosto';      
        console.log("Tuo mese è "+ mese8 + "è la tua stagione è Verano");
        break;
    case 9:   
        let mese9 = 'Settembre';      
        console.log("Tuo mese è "+ mese9 + "è la tua stagione è Verano");
        break;
    case 10:
        let mese10 = 'Ottobre';      
        console.log("Tuo mese è "+ mese10 + "è la tua stagione è Autunno");
        break;
    case 11:
        let mese11 = 'Novembre';      
        console.log("Tuo mese è "+ mese11 + "è la tua stagione è Autunno");
        break;
    case 12:
        let mese12 = 'Diciembre';      
        console.log("Tuo mese è "+ mese12 + "è la tua stagione è Autunno");
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



*/
