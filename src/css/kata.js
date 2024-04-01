// En este ejercicio de practica "kata" aprenderas a iterar sobre un array usando un bucle o no, no se, ya depende de ti.
// Esta kata consiste en contar las pendejadas que dice nuestro querido e increiblemente atractivo Huliatzo

// Recibiras como parametro un array de numeros con la cantidad de estup... de chascarrilos que suelta Julio por hora

// ejemplo const chistes = [4,2,0,5,1,8,7,3]

// El ejercicio es simple. debes sumar todos los valores del array y devolver el total de la suma y ya. Eso es todo, mucho animo, te quiero<3!!

let suma = 0;

function totalChistes(array){
    for (let index = 0; index < array.length ; index++) {
        suma += array[index];  
    }
    return suma;
}
// Ahora te has dado cuenta que cada 2 horas Julio susurra un (1) chiste para el mismo.
// Como tienes un problema con las mates y te fastidia no tener bien las cuentas te toca arreglarlo en la funcion de abajo. 
// Esta funcion recibe un array como parametro, debe corregir el error de cuenta y devolver el array modificado.
//pista: solo necesitas tener en cuenta el array una de cada 2 veces

function arregloDeCuenta(array){
    for (let index = 0; index < array.length ; index+=2) {
        array[index] += 1;  
    }
    return array;
}

module.exports = {
    totalChistes,
    arregloDeCuenta
}