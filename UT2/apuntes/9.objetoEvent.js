"use strict"
{
    let boton5 = document.querySelector("#idBoton5");

    let miP1 = document.createElement("p");
    boton5.parentElement.previousElementSibling.previousElementSibling.insertAdjacentElement("afterend",miP1)
    miP1.innerHTML = "PARRAFO AQUI";

    boton5.addEventListener("mousemove", function(evento){
        /*console.log(evento);
        console.log(evento.button); // numero del boton
        console.log(evento.button.x); // respecto a la ventana
        console.log(evento.button.y);
        console.log(evento.button.clientX); // respecto a la ventana
        console.log(evento.button.clientY);

        console.log(evento.button.offsetX);
        console.log(evento.button.offsetY);*/

        miP1.innerHTML = "X= " + evento.x + " Y= " + evento.y;
        miP1.innerHTML += "<br>X= " + evento.clientX + " Y= " + evento.clientY;
        miP1.innerHTML += "<br>X= " + evento.offsetX + " Y= " + evento.offsetY;
        miP1.innerHTML += "<br>X= " + evento.screenX + " Y= " + evento.screenY;
    })

    const mostrarMensaje = (evento) => {
        //console.log(evento.type);
        if (evento.type =="keyup"){
            console.log(evento.code);
            console.log(evento.key);

        } else if (evento.type == "click"){
            /*console.log(evento.x);
            console.log(evento.y);
            console.log(evento.clientX);
            console.log(evento.clientY);
            console.log(evento.screenX);
            console.log(evento.screenY);
            console.log(evento.clientY);
            console.log(evento.button);*/
            console.log(evento.detail);
            console.log(evento.ctrlKey);
            console.log(evento.altKey);
            console.log(evento.shiftKey);
            console.log(evento.target);
            console.log(evento.target.id);

        } else if (evento.type === "dblclick") {
            console.log("doble click");
            this.textContent = "Mecago";
        

        }  else if (evento.type === "contextmenu"){
            evento.preventDefault();
            console.log("boton derecho");
        } 
    }

    boton5.addEventListener("keyup", (evento)=> {mostrarMensaje(evento)});
    boton5.addEventListener("click", (evento)=> {mostrarMensaje(evento)});
    boton5.addEventListener("dblclick", mostrarMensaje);
    boton5.addEventListener("contextmenu", mostrarMensaje, {once: true});

    boton5.addEventListener("contextmenu", function(){alert("click con el boton derecho")}, {capture: true}); // para que se ejecute el 1º cuando se captura varias veces el mismo

    /**
     * LISTA DE EVENTOS:
     *  onfocus: al obtener un foco. 
        onblur: al salir del foco de un elemento.
        onchange: al hacer un cambio en un elemento.
        onclick: al hacer un click en el elemento.
        ondblclick: al hacer doble click en un elemento.
        onkeydown: al pulsar una tecla (sin soltarla).
        onkeyup: al soltar una tecla pulsada.
        onkeypress: al pulsar una tecla.
        onload: al cargarse una página.
        onunload: al descargarse una página (salir de ella).
        onmousedown: al hacer clic de ratón (sin soltarlo).
        onmouseup: al soltar el botón del ratón previamente pulsado.
        onmouseover: al entrar encima de un elemento con el ratón.
        onmouseout: al salir de encima de un elemento con el ratón.
        onsubmit: al enviar los datos de un formulario.
        onreset: al resetear los datos de un formulario.
        onselect: al seleccionar un texto.
        onresize: al modificar el tamaño de la página del navegador. 
        contextmenu: al hacer click con el botón derecho.
     */
}