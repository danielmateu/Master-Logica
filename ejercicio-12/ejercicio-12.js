


const hastaCero = (numeroDado) => {

    let print, resultado;

    console.log(`--- Del ${numeroDado} al 0 ---`);

    for(let i = numeroDado; i > 0; i-=8){
        // console.log(i)
        resultado = i;

        print = `- nº${i}`;
        console.log(print)
    }

    if(resultado < numeroDado) console.log('- nº0');

    console.log('---END---') 
    return 

}

hastaCero(100);
hastaCero(40)
