


const coincidencias = (frase,palabra) => {

    const palabrasRepetidas = frase.split(' ').map(p => p.toLowerCase().replace(/[!¡.,-]/gi, '')).filter(p => p === palabra);

    const repeticiones = palabrasRepetidas.length

    return `Palabras repetidas -> ${repeticiones}`;
    
}

const coincidenciasVictor = ( frase,busqueda) => {
    let textoLimpio = frase.toLowerCase().replace(/[!¡.,-]/gi, '');
    let resultado = 0


    if(textoLimpio.includes(busqueda)){
        let palabras = textoLimpio.split(' ');
        // console.log(palabras);
        let mapa= {};

        for(let palabra of palabras){
            if(mapa[palabra]){
                mapa[palabra]++
            }else{
                mapa[palabra] = 1;
            }
        }

        resultado = mapa[busqueda];
    }else{
        resultado = 0
    }

    return resultado
}


console.log(coincidencias('hola soy una palabra en una frase, PALABRA','palabra'));
// console.log(coincidencias("soy la frase","Dani"));    


console.log((coincidenciasVictor('hola soy una Palabra en una frase, PALABRA!!! ...palabra','palabra')));








