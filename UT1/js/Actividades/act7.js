"use strict";
{

    /*Alt + Z*/
    /*7. Mostrar todos los números divisores de un número introducido por el usuario.*/

    let num1 = parseInt(prompt("Dime el numero"));

    for (let index = 2; index < num1; index++) {
        if (num1%index === 0){
            console.log(index)
        }
    }
    

}