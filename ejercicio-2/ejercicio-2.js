


const palindromo = (texto) => {

    let invertido = texto.split('').reverse().join('');

    return invertido === texto;
    
}

console.log(`Es un palindromo? ${palindromo('jose juan')}`);
console.log(`Es un palindromo? ${palindromo('ana ana')}`);










