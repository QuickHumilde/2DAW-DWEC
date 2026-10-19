"use strict";
{

    /*Alt + Z*/
    /* 10. Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */

    const esPrimo = (numero) => {
        if (numero < 2) {
            return false;
        }

        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false;
            }
        }

        return true;
    };

    let num1 = Number(prompt("Dime un número"));

    console.log(esPrimo(num1));

}