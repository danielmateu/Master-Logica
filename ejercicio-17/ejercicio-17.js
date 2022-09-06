

const buzz = (miNumero) => {

    let resultado = '';

    if(miNumero % 3 === 0 &&  miNumero % 5 === 0){
        resultado = 'BuzzLightyear';
    }else if(miNumero % 3 === 0){
        resultado = 'Buzz';
    }else if(miNumero % 5 === 0){
        resultado = 'LightYear'
    }else{
        return miNumero
    }

    return resultado;
}

// console.log(buzz(15));   

const imprimir = (miNumero) => {
    for (let i = 1; i < miNumero; i++){
        console.log(buzz(i)); 
    }

    return miNumero;

    
}

console.log(imprimir(20));

//Solución sin imprimir la lista de numeros 

const buzzLightyear = (miNumero) => {
    for (let i = 1; i < miNumero; i++){
        if(i % 15 === 0){
            console.log(i,'BuzzLightyear');
        }else if(i % 3 === 0){
            console.log(i,'Buzz');
        }else if(i % 5 === 0){
            console.log(i,'Lightyear');
        }
    }
}

buzzLightyear(20);