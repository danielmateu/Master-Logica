

const masUsado = (miString) => {

    let mapeoLetras = {};
    let maximoRepeticiones = 0;
    let letraMasRepetida = ''

    for(let letra of miString){
        // console.log(letra)

        if(!mapeoLetras[letra]){
            mapeoLetras[letra] = 1
        }else{
            mapeoLetras[letra]++
        }
    }

    for(let letra in mapeoLetras){
        // console.log(letra)
        if(mapeoLetras[letra] > maximoRepeticiones){
            maximoRepeticiones = mapeoLetras[letra]
            letraMasRepetida = letra;
        }
    }

    return (`
    Número de repeticiones: ${maximoRepeticiones}
    Letra más repetida: ${letraMasRepetida}`);

}
console.log(masUsado('daniel mateu pardo'));

//Version alternativa más eficiente con un solo for:

const mostUsedWord = (myString) => {

    let result = '';
    let max = 0;
    const map = {};

    myString.split('').forEach(word => {
        map[word] = map[word] + 1 || 1;

        if(max < map[word] && !word.includes(' ')){
            result = word;
            max = map[word]
        }
    })

    return `
    Número de repeticiones: ${max} 
    Letra más repetida: ${result}`

}

console.log(mostUsedWord('daniel mateu pardo'))



