
const coleccionDePeliculas = [
    { 
        name: 'El señor de los anillos',
        director: 'Peter Jackson',
        vista: true
    },
    { 
        name: 'La liga de la justicia',
        director: 'Zack Snider',
        vista: false
    },
    { 
        name: 'El Hobbit',
        director: 'Peter Jackson',
        vista: true
    },
    { 
        name: 'La cosa',
        director: 'Zack Snider',
        vista: false
    },
];


const misPeliculas = () => {
    for(let pelicula of coleccionDePeliculas){
        let paraMostrar = `${pelicula.name} de ${pelicula.director}`;

        if(pelicula.vista === true){
            console.log(`Ya has visto ${paraMostrar}`);
        }else{
            console.log(`Te falta por ver ${paraMostrar}`);
        }
    }

    return coleccionDePeliculas
}
console.log(misPeliculas());
    

