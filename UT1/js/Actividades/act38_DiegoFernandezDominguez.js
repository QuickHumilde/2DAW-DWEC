"use strict"
{
    /**
     * 38. Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }
     */

    const delvolverObjetoArrayOrdenadosMayorMenor = (array) => {
        let mayorMenor = array.sort((a,b) => {
            if (a<b){
                return 1;
            }
            if (a>b) {
                return -1;
            }
            if (a===b){
                return 0;
            }
        })

        let menorMayor = array.sort((b,a) => {
            if (a<b){
                return 1;
            }
            if (a>b) {
                return -1;
            }
            if (a===b){
                return 0;
            }
        })

        return {mayorMenor, menorMayor}
    }

    console.log(delvolverObjetoArrayOrdenadosMayorMenor([7,5,7,8,6]));


}