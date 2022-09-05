

const vocales = (myString) => {

    let coincidencias = myString.match(/[aeiou]/gi).length
    
    return `La frase tiene ${coincidencias} vocales`
}

console.log(vocales('daniel mateu pardo'));
    