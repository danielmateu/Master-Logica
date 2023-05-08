
//Data una palabra, buscarla en una frase y devolver cuantas veces aparece en el texto

//Ejemplo: "Hola mundo, soy un programador" y la palabra es "programador" devolvería 1


// funcion contarPalabras

const contarPalabras = () => {
    //Obtener el valor de la caja de texto
    let texto = document.getElementById("texto").innerHTML.toLowerCase();
    //Obtener el valor de la caja de texto
    let palabra = document.getElementById("palabra").value.toLowerCase();
    //Contador de palabras
    let contador = 0;
    //Separar el texto en palabras
    let palabras = texto.split(" ");
    console.log(palabras);
    //Recorrer el array de palabras
    for (let i = 0; i < palabras.length; i++) {
        //Si la palabra del array es igual a la palabra buscada
        if (palabras[i] === palabra) {
            //Incrementar el contador
            contador++;
        }
    }
    //Mostrar el resultado
    document.getElementById("resultado").innerHTML = `La palabra ${palabra} aparece ${contador} veces`;
}

//Obtener el boton
let boton = document.getElementById("boton");

//Evento click
boton.addEventListener("click", contarPalabras);


