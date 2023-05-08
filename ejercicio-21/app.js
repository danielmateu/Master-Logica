//Dado un string, devolver el número de veces que se repite cada letra

//Ejemplo: "hola" => {h:1, o:1, l:1, a:1}
//Ejemplo: "hola mundo" => {h:1, o:2, l:1, a:1, m:1, u:1, n:1, d:1}

//Solución 1

function countLetters(string) {
    let letters = {};
    for (let i = 0; i < string.length; i++) {
        if (letters[string[i]]) {
        letters[string[i]]++;
        } else {
        letters[string[i]] = 1;
        }
    }
    // console.log({letters});
    return letters;
}

countLetters('asdassdasdsdasdasdasd')

//Solución 2

function countLetters(string) {
    let letters = {};
    for (let i = 0; i < string.length; i++) {
        letters[string[i]] = letters[string[i]] + 1 || 1;
    }
    // console.log({letters});
    return letters;
}

countLetters('asdassdasdsdasdasdasd')

//Solución 3

function countLetters(string) {
    let letters = {};
    for (let i = 0; i < string.length; i++) {
        letters[string[i]] = (letters[string[i]] || 0) + 1;
    }
    // console.log({letters});
    return letters;
}

countLetters('asdassdasdsdasdasdasd')

//Solución 4

function countLetters(string) {
    let letters = {};
    for (let i = 0; i < string.length; i++) {
        letters[string[i]] = (letters[string[i]] += 1) || 1;
    }
    // console.log({letters});
    return letters;
}

countLetters('asdassdasdsdasdasdasd')

