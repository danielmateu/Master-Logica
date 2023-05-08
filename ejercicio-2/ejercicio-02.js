//Dado un string, devolver si es un palindromo o no.

//Ejemplo:
//Es un palindromo? false
//Es un palindromo? true

//Obtener el valor del input con id = 'palabra'
const palabra = document.getElementById('palabra')

//Obtener el boton con id = 'btn'
const enviar = document.getElementById('btn')

const mostrarResultado = (e) => {
    e.preventDefault();
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Es un palindromo? ${palindromo(palabra.value)}`;
}

//Funcion para comprobar si es palindromo
const palindromo = (texto) => {
    let invertido = texto.split('').reverse().join('');
    /* Comparing the original string with the reversed string. */
    return invertido === texto;

}

//Evento click
enviar.addEventListener('click', mostrarResultado)


//Source: https://stackoverflow.com/questions/129580













