


const invertirMetodoEasy = (cadena) => {

    const cadenaInvertida = cadena.split('').reverse().join('');
    return cadenaInvertida;
}

const invertir = (cadena) => {
    let cadenaInvertida = '';

    for(let letra of cadena){
        cadenaInvertida = letra + cadenaInvertida
    }
    return cadenaInvertida;
}


console.log('Texto invertido:',invertir('dani'));

console.log('Texto invertido:',invertirMetodoEasy('silvia'));
