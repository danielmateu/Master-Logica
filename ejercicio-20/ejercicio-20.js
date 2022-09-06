


const anagramas = (firstString, secondString) => {
    let cleanFirstString = firstString.toLowerCase().split('').sort().join('');
    let cleanSecondString = secondString.toLowerCase().split('').sort().join('');

    // console.log(cleanFirstString);

    if(cleanFirstString === cleanSecondString){
        return true
    }else return false 
}

console.log(anagramas('Riesgo', 'Sergio'));    
console.log(anagramas('Daniel', 'Mateu'));  

//Victor version

const limpiarTexto = (texto) => {

    return texto.replace(/[^\w]/gi, '').toLowerCase().split('').sort().join('')
}

const anagramasOk = (texto1, texto2) => {
    return limpiarTexto(texto1) === limpiarTexto(texto2);
}

console.log(anagramasOk('Soy el Rey del mundo!!!','Comeme los huitos'));
console.log(anagramasOk('Sergio','Riesgo!!!'));



