
const invertirNumero = (numero) => {
    console.log(numero)
    const invertirNumero = numero.toString().split('').reverse().join('');

    const stringToNum = parseInt(invertirNumero) * Math.sign(numero);

    return stringToNum
}

console.log(invertirNumero(96))
