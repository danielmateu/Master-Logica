//Dada una cadena de texto y un número, recortar el string mostrando los X primeros números
//Ejemplo: "Hola Mundo", 4 => "Hola"

function cortarString(cadena, numero) {

    //validar que cadena sea string y numero un number
    if (typeof cadena !== "string" || typeof numero !== "number") {
        return "Error: Debe ingresar una cadena de texto y un número";
    }

    return cadena.slice(0, numero);
}

console.log(cortarString('Hola mundo', 2));