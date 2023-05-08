
//obtener el valor del input
const input = document.getElementById("input");
const boton = document.getElementById("btn");
//Evento para el botón
boton.addEventListener("click", showResult);

//Dado un string, devolver el número de veces que se repite cada letra

function countLetters(string) {
    let letters = string.split("");
    let result = {};
    letters.forEach( letter => {
        if (result[letter]) {
        result[letter]++;
        } else {
        result[letter] = 1;
        }
    });

    return result;
}


//funcion para mostrar el resultado
function showResult() {
    // console.log('Resultado...');
    const result = countLetters(input.value);
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = JSON.stringify(result);
}








