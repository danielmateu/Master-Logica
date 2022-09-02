


const tantoPorCiento = (porCiento, numero) => {

    let operacion = (porCiento*numero)/100;

    let resultado = `El ${porCiento}% de ${numero} es: ${operacion}`; 

    return resultado; 

}

console.log(tantoPorCiento(20,100));
console.log(tantoPorCiento(43,897));