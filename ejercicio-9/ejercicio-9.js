
const elementosComunes = (array1,array2) => {

    return array1.filter(item => array2.includes(item));
}

console.log(elementosComunes(['cabeza','ojos','brazos','pies'],['cabeza','ojos','patas','cola']));  