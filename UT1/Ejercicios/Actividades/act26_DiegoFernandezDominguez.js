"use strict"
{
    /*Alt + Z*/
    // 26. Comprueba que una cadena empieza con las letras “m” o “d” y además termina con las letras “a” o “o”. Realiza el ejercicio con funciones de cadena y con expresiones regulares.

    const cadenaCumpleRequisitos = (texto) => {
        let re = /^[md].*[ao]$/;
        return re.test(texto);
    };

    console.log(cadenaCumpleRequisitos("malo"));
    console.log(cadenaCumpleRequisitos("alo"));
    console.log(cadenaCumpleRequisitos("dada"));

}