// Dado un string, ponerlo completo en mayñusculas o minusculas dependiendo de la cantidad de si hay más mayúsculas o minúsculas

// Ejemplo: "Hola Mundo" -> "HOLA MUNDO"
// Ejemplo: "hola mundo" -> "hola mundo"

const toCase = (string) => {
    let upperCase = 0;
    let lowerCase = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            upperCase++;
        } else {
            lowerCase++;
        }
    }
    if (upperCase > lowerCase) {
        return string.toUpperCase();
    } else {
        return string.toLowerCase();
    }
}

console.log(toCase("Hola Mundo"));
console.log(toCase("hola mundo"));
console.log(toCase("HOLA MUNDO"));
console.log(toCase("HOLA mUnDo"));




