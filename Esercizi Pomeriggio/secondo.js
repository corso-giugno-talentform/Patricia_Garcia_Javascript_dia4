function multiplo3(a) {
    if (a % 3 === 0) {
        return "Patricia";
    }
    return null;
}

function multiplo5(a) {
    if (a % 5 === 0) {
        return "Garcia";
    }
    return null;
}

function numero() {
    for (let a = 1; a <= 30; a++) {
        let dato1 = multiplo3(a);
        let dato2 = multiplo5(a);
        let dato3 = multiplo3(a) && multiplo5(a);
        
        if (dato3) {
            console.log("Patricia Garcia");
        } else if (dato2) {
            console.log(dato2+' '+a);
        } else if (dato1) {
            console.log(dato1+' '+a);
        } else {
            console.log("no è ne multiplo de 3 ne di 5 "+' '+a); 
        }
    }
}

numero();