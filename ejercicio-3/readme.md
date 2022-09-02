# Dada una palabra, buscada en una frase y devolver cuantas veces aparece en el texto.

- La frase y la palabra deben ser parametros de una funcion

Ejemplos:

coincidencias('hola soy una palabra en una frase, PALABRA', "palabra")
devuelve: 2

coincidencias("soy la frase","Dani")
devuelve: 0

- Cómo solucionar el problema: (Mi solucion)

1- Creamos una funcion con los dos parámetros que nos pide el enunciado
2- Cremos un array de la frase con el método split y mediante un map transformamos todas las palabras a lowerCase(), limpiamos el texto para dejarlo plano con una expresión regular para más adelante hacer la comparación con el método filter.
3-Con la propiedad length, tenemos la cantidad de palabras que se repiten dentro de la frase en función de la palabra dada.

- Cómo solucionar el problema: (Solución de Victor)

1- Limpiamos el texto con el método replace(mediante una expresión regular), y pasamos las palabras a lowerCase.

2- Si el texto limpio incluye la palabra buscada, creamos un array de las palabras con el método split y realizamos un recorrido por el array en el que sumamos las veces que se repite cada palabra. Si la palabra no aparece en la frase, se devolverá 0. Si aparece, se devolverá las veces que aparece en el texto.



