const lado = (numero) => {
    let lado = '';

    for (let i = 0; i < numero; i++) {
        lado += '*';
    }

    return lado;
}

const cuadrado = (numero) => {

    // lado arriba

    let dibujo = lado(numero) + '\n';

    let contenido = '';

    //Filas
    for (let i = 2; i < numero; i++) {
        contenido = '*';

        //Contenido hueco
        for (let j = 2; j < numero; j++) {
            contenido += ' ';
        }

        contenido += '*';

        //añadir fila al dibujo
        dibujo += contenido + '\n';
    }

    //Lado Abajo

    dibujo += lado(numero)
    return dibujo
}

const square = (numero, letra) => {
    let arriba = `${letra.repeat(numero)}\n`;
    let abajo = `${letra.repeat(numero)}`;

    for (let i = 0; i < numero - 2; i++) {
        arriba +=  `${letra}${" ".repeat(numero - 2)}${letra}\n`;
    }

    return arriba + abajo;
};

// console.log(lado(4));

console.log(cuadrado(4));
console.log(square(10, '*'));



