"use strict"
{
    /*Realiza un programa que tenga una imagen de una bola de papel y una papelera vacía. Cuando se arrastre la bola de papel a la papelera vacía, deberá cambiar la imagen de la papelera vacía a una papelera llena
    */

    let papelera = document.querySelector(".papeleraImg");
    let bolaPapel = document.querySelector(".bolaPapel");

    let objetoRecogido = 0;

    bolaPapel.addEventListener("dragstart", (evento) => {
        console.log("mecago")
        objetoRecogido = evento.target;
    })

    papelera.addEventListener("dragover", (evento) => {
        evento.preventDefault();
    })
    
    papelera.addEventListener("drop", (evento) => {
        papelera.src="./img/PapeleraLlena.png"
        bolaPapel.remove();
    })
}