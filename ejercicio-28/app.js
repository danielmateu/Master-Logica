// Dado un numero, devolver true si es capicua y false si no lo es


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

    // Obtener si es capicua
    const capicuaNumber = capicua(number);

    // Mostrar el resultado
    result.innerHTML = capicuaNumber;
    
});

// funcion para valorar si es capicua
const capicua = (number) => {
    
    let capicua = false;
    let numberString = number.toString();
    let numberStringReverse = numberString.split("").reverse().join("");

    if (numberString === numberStringReverse) {
        capicua = true;
    }   

    return capicua;
}








