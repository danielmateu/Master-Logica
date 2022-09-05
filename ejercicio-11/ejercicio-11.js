

const censurado = (texto,busqueda) => {

    let resultado = '';

    if(typeof texto === 'string' && typeof busqueda === 'string'){
        let palabras = texto.toLowerCase().split(' ');
        // console.log(palabras)
        
        for(let palabra of palabras) {
            if(palabra === busqueda){
                palabra = '[-CENSURADO]';
            }

            resultado += palabra + ' '; 
        }

    }else{
        resultado = 'No puedes leer el texto y la búsqueda'
    }

    return resultado;
}

console.log(censurado())
console.log(censurado('Hola que tal?'))
console.log(censurado(false,'Zorron'))
console.log(censurado('Hola!!! Soy más feo de lo que tu piensas', 'feo'))    
