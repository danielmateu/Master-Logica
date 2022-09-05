

const vocales = (myString) => {

    let coincidencias = myString.match(/[aeiou]/gi).length
    
    return `La frase tiene ${coincidencias} vocales`
}

console.log(vocales('daniel mateu pardo'));

//Solución con ciclo for

const vocalesFor = (myString) => {
    let counter = 0;

    let dividedString = myString.toLowerCase().split('');

    for(let word of dividedString){
        if(word === 'a' || word === 'e' || word === 'i' || word === 'o' ||word === 'u') counter++;    
    }
    return `La frase tiene ${counter} vocales`
}

console.log(vocalesFor('daniel mateu pardo')) 
    