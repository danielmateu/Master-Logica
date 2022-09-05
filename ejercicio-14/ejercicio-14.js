
//Función clasica

const repiteme = (miString, repeticiones) => {

    let resultado = '';

    for(let i = 0; i < repeticiones; i++){
        resultado += miString
    }

    return resultado

}

console.log(repiteme('dani', 6));

//Función prototipo


String.prototype.repitemeAlt = function(repeticiones) {
    let resultado = '';

    for(let i = 0; i < repeticiones; i++){
        resultado += this
    }

    return resultado;
}

console.log('dani'. repitemeAlt(6));





