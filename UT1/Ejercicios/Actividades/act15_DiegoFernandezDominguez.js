"use strict";
{

    /*Alt + Z*/
    // 15. Indica si un NIF es válido o no

    /**
     * Un DNI es valido cuando contiene 8 numeros consecutivos al inicio y al final una letra la cual es el resultado del restode numeros entre una lista de caracteres.
     */
    const verificarDNI = (dni) => {
        dni = dni.toUpperCase().trim();
        let valido = false;
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

        if (/^\d{8}[A-Z]$/.test(dni)) {
            const numero = parseInt(dni.substring(0, 8), 10);
            const letra = dni.charAt(8);
        
            if( letras[numero % 23] === letra){
                valido = true;
            }

        } 
        return valido;

    }

    console.log(verificarDNI("30271269A"));
    console.log(verificarDNI("30271269B"));
    console.log(verificarDNI("1234U"));

}