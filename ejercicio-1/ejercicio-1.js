// Dado un número, devolver su tabla de multiplicar completa.



const multiplicationTable = (num) => {

    let result = `Tabla del ${num} \n` ;

    for (let i = 0; i <= 10; i++) {
        let multiplication = (i * num);

        result += `${i} * ${num} = ${(multiplication)}\n`
    };

    return result

}

console.log(multiplicationTable(2))
console.log(multiplicationTable(5))
