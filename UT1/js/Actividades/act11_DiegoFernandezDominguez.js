"use strict";
{

    /*Alt + Z*/
    /* Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.*/

    const esImpar = (numero) => {

        let resultado = false;

        if (numero%2 === 0) {
            resultado = false;
        }

        return resultado;
    };

    let num1 = Number(prompt("Dime un número"));

    if(esImpar(num1)){
        console.log("El numero es par");
    } else {
        console.log("El numero es impar");
    }
}