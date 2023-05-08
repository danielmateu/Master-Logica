// Dado un numero, mostrar a cuantos años, meses y dias equivale

// Ejemplo: 1000 -> 2 años, 8 meses y 20 dias

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

    // Obtener los años, meses y dias
    const yearsMonthsDaysString = yearsMonthsDays(number);

    // Mostrar el resultado
    result.innerHTML = yearsMonthsDaysString;
});

// funcion para obtener los años, meses y dias
const yearsMonthsDays = (number) => {
    // obtener los años
    const years = Math.floor(number / 365);
    // obtener los meses
    const months = Math.floor((number % 365) / 30);
    // obtener los dias
    const days = Math.floor((number % 365) % 30);

    return `${years} años, ${months} meses y ${days} dias`;

}


