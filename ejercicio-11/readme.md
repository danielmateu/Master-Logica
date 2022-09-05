# Dado un texto y una busqueda, censurar todas las coincidencias de la búsqueda en el texto con [-Censurado].

Si el texto y la búsqueda están vacios, mostrar "No puedes leer el texto y la búsqueda" en el caso que ambos parámetros no lleguen.

Ejemplos:

censurado('hola hola', 'hola') // devuelve: [-Censurado] [-Censurado];
censurado() // devuelve: No puedes leer el texto y la búsqueda 
censurado('hola') // No puedes hacer la búsqueda
