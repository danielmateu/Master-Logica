// Dado un número, devolver su tabla de multiplicar completa.

//Obtener valor input
let input = document.getElementById('input');
let btn = document.getElementById('btn');

//Obtener valor del input
btn.addEventListener('click', () => {
    let num = input.value;
    let result = multiplicationTable(num);

    //Mostrar resultado en el DOM
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `${result}`;
})

// Ejemplo:

// multiplicacion(5) => 5 * 0 = 0

const multiplicationTable = (num) => {
    
        let result = `Tabla del ${num} </br>` ;
    
        for (let i = 0; i <= 10; i++) {
            let multiplication = (i * num);
    
            result += `${i} * ${num} = ${(multiplication)}</br>`
        };
    
        return result
    
}
