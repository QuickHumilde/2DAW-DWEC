"use strict";
{

    /*Alt + Z*/
    /*9. Realizar una pequeña calculadora, donde el programa solicite dos números y una operación aritmética simple (+,-,*,/). El programa debe validar que los datos introducidos por el usuario son correctos. Si no lo son, solicitarlos de nuevo, si lo son, mostrar el resultado*/

    let num1 = parseInt(prompt("Dime el primer numero"));
    let num2 = parseInt(prompt("Dime el segundo numero"));

    let signo = prompt("Dime la operacion aritmetica (+,-,*,/)")
    let resultado

    let comprobarSignoYOperar = (signo, num1, num2) => {
        let resultado = 0;

        if (signo === "+") {
            resultado =  num1+num2

        }else if(signo === "-") {
            resultado =  num1-num2

        }else if(signo === "*") {
            resultado =  num1*num2

        }else if(signo === "/") {
            resultado =  num1/num2

        }
        return resultado

    }

    if (num1!== NaN && num2!== NaN ){
        
        resultado = comprobarSignoYOperar(signo, num1, num2)
        if(resultado !== undefined) {
            console.log(resultado)
        } else {
            console.log("Casi crack")
        }

    } else {
        console.log("Casi crack")
    }   

}