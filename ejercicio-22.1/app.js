//Dados dos números indicar cual es mayor y menor


const mayorMenor = (num1,num2) => {

    //revisar el tipo
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('Los datos ingresados no son números');
        return;
    }
    //Condicional
    if (num1 > num2) {
        console.log(`El número ${num1} es mayor que el número ${num2}`);
    }else{
        console.log(`El número ${num2} es mayor que el número ${num1}`);
    }
}

//Llamada a la función
mayorMenor(5,10);
