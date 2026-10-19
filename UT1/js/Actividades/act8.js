"use strict";
{

    /*Alt + Z*/
    /*8. Mostrar la tabla de multiplicar de un número introducido por pantalla.*/

    let num1 = parseInt(prompt("Dime el numero"));

    for (let index = 1; index <= 10; index++) {
        console.log(`${num1} * ${index} = ${num1*index}`)
    }
    

}