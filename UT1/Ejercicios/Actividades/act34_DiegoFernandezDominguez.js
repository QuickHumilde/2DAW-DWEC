"use strict"
{
    /**
     * 34. Programa una función que valide que un texto sea un email válido, p.e. miFuncion (“javier.ferrer@iesmartinezm.es”) devolverá verdadero. NOTA: caracteres, números, puntos guión alto y bajo+@+caracteres, números+.+al menos dos caracteres.
     */

    const validarEmail = (email) => {
        const regExp = /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.+[a-zA-Z]/;
        return regExp.test(email);
    }

    console.log(validarEmail("javier.ferrer@iesmartinezm.es"))

}