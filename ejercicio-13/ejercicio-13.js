

const  divideArray = (miArray, numeroElementos) => {
    
    let newArray = [];

    for(let elemento of miArray ){

        let finalArray = newArray[newArray.length - 1];

        if(!finalArray || finalArray.length === numeroElementos){
            newArray.push([elemento]);
        }else{
            finalArray.push(elemento);
        }

    }
    return newArray;

}

console.log('Solución 1 ->',divideArray([ 7,8,9,10,5 ] , 2 ));    

//Otra solución:

const divideArrayAlt = (miArray, numeroElementos) => {

    let finalArray = []

    while (miArray.length > 0) {
        let arrayDivided = miArray.splice(0, numeroElementos)

        finalArray.push(arrayDivided);
    }

    return finalArray;

}

console.log('Solución 2 ->',divideArrayAlt([ 7,8,9,10,5 ] , 2))

