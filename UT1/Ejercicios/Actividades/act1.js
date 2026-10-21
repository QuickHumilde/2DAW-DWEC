"use strict"
{
    /*Alt + Z*/
    /*1. Dados dos números indicar cuál es mayor, menor o si son iguales.*/ 

    let num1 = prompt("Dime el primer numero", 0);
    let num2 = prompt("Dime el segundo numero", 0);

    if (num1>num2){
        console.log(`${num1} es mayor que ${num2}`);
    } else if(num1<num2){
        console.log(`${num2} es mayor que ${num1}`);
    } else {
        console.log(`Me has dado el numero ${num1} dos veces, asi que son iguales`);
    }

}