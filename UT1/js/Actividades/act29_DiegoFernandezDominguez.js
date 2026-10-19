"use strict"
{
    /*Alt + Z*/
    /**
     *29. Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10
    */

    const convertBinDec = (numerin, base) => {
        if (base === 2) {
            return parseInt(numerin, 2);
        } else if (base === 10) {
            return Number(numerin).toString(2);
        } else {
            return "Base no válida";
        }
    }

    console.log(convertBinDec(100, 2));
    console.log(convertBinDec(4, 10));
}