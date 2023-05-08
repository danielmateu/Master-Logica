// Dado un numero, devolver su factorial



// Obtener el valor del input
const input = document.getElementById("num");

// Obtener el valor del boton
const button = document.getElementById("button");

// Obtener el valor del resultado
const result = document.getElementById("result");

// obtener el formulario y prevenir el comportamiento por defecto
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Obtener el valor del input
    // const number = input.value;
    const number = parseInt(input.value);

    // Obtener el factorial
    const factorialNumber = factorial(number);

    // Mostrar el resultado
    result.innerHTML = factorialNumber;

});

// funcion para obtener el factorial
const factorial = (number) => {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}




