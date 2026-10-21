"use strict"
{
    /**
     * 33. Programa una función que valide que un texto sea un nombre válido, p.e. miFuncion (“Javier Ferrer”) devolverá verdadero. NOTA: No puede haber números ni caracteres especiales como ¡ o ¿
     */

    const validarNombre = (nombre) => {
        const regExp = /^[a-zA-ZáéíóúÁÉÍÚÓ\s]+$/;
        return regExp.test(nombre);
    }

    console.log(validarNombre("AntonioStarko"));
    console.log(validarNombre("Pedrin*Po+"));
    console.log(validarNombre("Jav2ier Ferrer"));

}