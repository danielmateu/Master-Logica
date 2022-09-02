


const escaleras = (numero) => {

    
    let escaleraCompleta = ''

        for (let nivel = 1; nivel <= numero; nivel++) {

            let escalones = '';
            for(let escalon = 1; escalon <= nivel; escalon++){
                escalones += '[-]';
            }
            escaleraCompleta += escalones  + '\n';
        }
        return escaleraCompleta;

}

console.log(escaleras(5));
