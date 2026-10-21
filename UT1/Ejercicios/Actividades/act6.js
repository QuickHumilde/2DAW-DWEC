"use strict";
{

    /*Alt + Z*/
    /*6. Mostrar todos los números impares que hay entre dos números introducidos por el usuario.*/

    let num1 = parseInt(prompt("Dime el primer numero"));
    let num2 = parseInt(prompt("Dime el segundo numero"));1

    if (num1>num2){
        for (let index = num2 + 1; index < num1; index++) {
            if (index%2 !== 0){
                console.log(index)
            }
        }

    } else if(num1<num2){
        for (let index = num1 + 1; num2 > index; index++) {
            if (index%2 !== 0){
                console.log(index)
            }        
        }

    } else {
        console.log("Son iguales, no hay numeros enteros intermedios")
    }

}