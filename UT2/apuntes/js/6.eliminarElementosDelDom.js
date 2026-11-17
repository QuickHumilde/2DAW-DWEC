"use strict"
{
    /**
     * LOS NODOS REALMENTE NO SE ELIMINAN, SINO QUE SE DESCONECTAN DEL DOM
     * A partir de la página 20.
     * remove ()
     * removeChild (nodoHijo)
     * replaceChild(nodoNuevo,nodoAntiguo)
    */

    let h3Adios = document.querySelector("#idH3");
    h3Adios.remove();

    let miElemento2 = document.querySelector("#idCoches");
    let hijoEliminado = miElemento2.removeChild(miElemento2.children[0]);

    miElemento2.replaceChild(hijoEliminado, miElemento2.children[0]);
    
}