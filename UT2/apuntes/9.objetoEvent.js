"use strict"
{
    let boton5 = document.querySelector("#idBoton5");

    let miP1 = document.createElement("p");
    boton5.parentElement.previousElementSibling.previousElementSibling.insertAdjacentElement("afterend",miP1)

    boton5.addEventListener("mousemove", function(evento){
        console.log(evento);
        console.log(evento.button);
        console.log(evento.button.x);
        console.log(evento.button.y);
        console.log(evento.button.clientX);
        console.log(evento.button.clientY);

        console.log(evento.button.offsetX);
        console.log(evento.button.offsetY);

        miP1.textContent = "X= " + evento.x + " Y= " + evento.y;
    })

}