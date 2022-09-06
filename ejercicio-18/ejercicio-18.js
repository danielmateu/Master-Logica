


const mostrarDivisiores = (miNumero) => {

    for (let i = 0; i <= miNumero; i++) {
        if(miNumero % i === 0){
            console.log(i);
        }
    }
    

}

mostrarDivisiores(10); 

//Variación Victor

console.log('Variacion Victor');

const divisor = (miNumero, posibleDivisor) => {
    if(miNumero % posibleDivisor === 0){
        return posibleDivisor
    }

    return 0;

}

// console.log(divisor(5));

const mostrarDIvisores = (miNumero) => {
    for (let i = 1; i <= miNumero; i++){
        let esDivisor = divisor(miNumero, i);

        if(esDivisor){
            console.log(esDivisor);
        }
    }
}

mostrarDIvisores(20)
