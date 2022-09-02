

const impares = (firstNumber, secondNumber) => {

    let par = [];
    let impar = [];
    let counter = 0

    if(firstNumber < secondNumber) {
        for (let i = firstNumber; i <= secondNumber; i++) {
            if(i % 2 === 0){
                impar.push(i);
            }else{
                par.push(i)
            }
        }
        
        return impar.length;

    }else if(firstNumber > secondNumber){
        for (let i = firstNumber; i >= secondNumber; i--) {
            if(i % 2 === 0){
                impar.push(i);
            }else{
                par.push(i)
            }
        }

        return impar.length;
        
    }else return 'Debes de poner números diferentes';;
}
console.log(impares(1,100));
console.log(impares(10,1));
console.log(impares(10,10));

const imparesVictor = (numero1, numero2) => {

    contador = 0;

    while (numero1 < numero2) {

        if(numero1%2!==0) contador++
            // console.log(`El ${numero1} es impar`);

        
        numero1 ++;
    }

    return contador;
}

console.log(imparesVictor(1,10));    
console.log(imparesVictor(1,100));    


const imparesJR = (num1,num2) => {
    let counter = 0;

    if(num1 < num2){
        for(let i = num1; i <= num2; i++){
            i % 2 === 0 && counter++;
        }
    }else if(num1 > num2){
        for(let i = num1; i >= num2; i--){
            i % 2 === 0 && counter++;
        }
        
    }else return 'Debes de poner números diferentes';

    return counter;
}

console.log(imparesJR(1,10));
console.log(imparesJR(100,10));
console.log(imparesJR(10,10));

