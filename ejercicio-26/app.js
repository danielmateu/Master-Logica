// Dado un numero, devolver la serie de fibonacci hasta ese numero

// Ejemplo: 5 -> [0,1,1,2,3,5]

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
    const number = input.value;
    // Obtener la serie de fibonacci
    const fibonacciArray = fibonacci(number);
    // Mostrar el resultado
    result.innerHTML = fibonacciArray;

    // limpiar el resultado i el input a los 5 segundos
    setTimeout(() => {
        result.innerHTML = "";
        input.value = "";
    }, 3000);
});

// Funcion para obtener la serie de fibonacci
const fibonacci = (number) => {
    let array = [0, 1];
    for (let i = 2; i < number; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }
    return array;
}




