"use strict"
{
 
    /**
     * 40. Programa una función para devolver la edad de una persona dada su fecha de nacimiento en este formato dd/mm/aaa.
     */

    const averiguarEdad = (fecha) => {
        const hoy = new Date();

        let añosDiferencia = hoy.getFullYear() - fecha.getFullYear();
        let mesDiferencia = hoy.getMonth() - fecha.getMonth();

        if (mesDiferencia < 0 || (mesDiferencia === 0 && fecha.getDate() < hoy.getDate())) {
            añosDiferencia--;
        }
          
        return añosDiferencia;

    }

    let fechaNacimiento1 = new Date("2006/07/03");
    let fechaNacimiento2 = new Date("2008/09/13");

    console.log(averiguarEdad(fechaNacimiento1));
    console.log(averiguarEdad(fechaNacimiento2));

}