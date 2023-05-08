//Dado un array de enteros y un número, detectar si esa lista de números es una permutación del 1 al número aportado

//Una permutación es una secuencia de números en orden sin que falte ninguno entre ellos

//Ejemplo: [1,2,3,4] es una permutación de 4 Devuelve true
//Ejemplo: [1,2,3,4,5] no es una permutación de 4 Devuelve false
//Ejemplo: [1,2,3,4,5,6,7,8,9,10] es una permutación de 10 Devuelve true
//Ejemplo: [1,2,3,4,5,6,7,8,9,10,11] no es una permutación de 10 Devuelve false

const isPermutation = (array, number) => {
    let result = true; // declare a variable to store the result
    for (let i = 1; i <= number; i++) { // loop through the array
        if (!array.includes(i)) { // if the array does not include the current number
            result = false; // set the result to false
        }
    }
    return result; // return the result
};


console.log(isPermutation([1, 2, 3, 4], 4));