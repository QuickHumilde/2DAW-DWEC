"use strict";
{

    /*Alt + Z*/
    /*14. Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800*/

    const calcDescuento = (numero, descuento) => {
        let newDescuento = descuento/100;
        let resto = numero*newDescuento

        return numero-resto
   }

   console.log(calcDescuento(1000,20))

}