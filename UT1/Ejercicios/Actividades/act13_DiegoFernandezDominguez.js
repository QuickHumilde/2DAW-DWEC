"use strict";
{

    /*Alt + Z*/
    /*13. Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 */

    const calcFactorial = (numero) => {
        let resultado = 1

        if (numero > 1){
            for (let index = 1; index <= numero; index++) {
                resultado*=index
                    
            }
        }
        return resultado
   }

   const calcFactorialRecursiva = (numero) => {
    let resultado = 1

    if (numero === 0 || numero === 1){
        return 1;
    }
    return numero * calcFactorialRecursiva(numero - 1);
}


   console.log(calcFactorial(5))
   console.log(calcFactorialRecursiva(5))

}