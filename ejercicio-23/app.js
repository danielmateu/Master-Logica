//Dada una cadena de texto, poner en mayúscula la primera letra de cada palabra en la cadena y devolver la cadena


function capitalize(str) {
    let words = str.split(' ');
    // console.log(words);
    /* Using the map function to iterate over each word in the array and return a new array with the
    first letter of each word capitalized. */
    let capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
}

let entrada = document.getElementById('cadena')

let boton = document.getElementById('btnProbar')
boton.addEventListener('click', () => {
    let cadena = entrada.value;
    let resultado = capitalize(cadena);
    document.getElementById('resultado').innerHTML = resultado;
})

