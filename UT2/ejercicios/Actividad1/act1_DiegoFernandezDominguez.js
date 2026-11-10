"use strict"
{
    let h1 = document.createElement("h1");
    h1.textContent = "EJERCICIO 1";
    document.body.append(h1);

    let ulAleatorio = document.createElement("ul");
    ulAleatorio.id = "idUlAleatorio";
    document.body.append(ulAleatorio);

    let botonAñadir = document.createElement("button");
    botonAñadir.id = "idBotonAñadir";
    botonAñadir.textContent = "Añadir";
    document.body.append(botonAñadir);

    let botonBorrar = document.createElement("button");
    botonBorrar.id = "idBotonBorrar";
    botonBorrar.textContent = "Borrar";
    document.body.append(botonBorrar);

    botonAñadir.addEventListener("click", function(evento) {
        let li = document.createElement("li");

        let aleatorin = Math.floor(Math.random() * 100) + 1;

        li.textContent = aleatorin;

        ulAleatorio.append(li);
    });

    botonBorrar.addEventListener("click", function(evento) {
        if (ulAleatorio.lastElementChild != null) {
            ulAleatorio.lastElementChild.remove();
        }
    });
}