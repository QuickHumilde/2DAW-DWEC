"use strict"
{
    /*Alt + Z*/
/*Modifica el programa anterior: si los números no son un número o son menores o iguales a
ceros, que los vuelva a pedir.*/

    let num1 = -1
    let num2 = -1;
    let correcto = false

    do{
        num1 = prompt("Dime el primer numero");

        if (num1 > 0 && !isNaN(num1)){
            correcto = true;
        }

    } while(!correcto);

    do{
        num2 = prompt("Dime el segundo numero");

        if (num2 > 0 && !isNaN(num2)){
            correcto = true;
        }

    } while(!correcto);

    if (num1>num2){
        console.log(`${num1} es mayor que ${num2}`);
    } else if(num1<num2){
        console.log(`${num2} es mayor que ${num1}`);
    } else {
        console.log(`Me has dado el numero ${num1} dos veces, asi que son iguales`);
    }

}