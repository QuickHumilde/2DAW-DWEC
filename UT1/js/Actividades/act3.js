"use strict";
{

    /* Alt + Z */
    /* 3. Dada una hora en horas, minutos y segundos, indicar qué hora será pasado un segundo. */

    let horas = prompt("Dime la hora", 0);
    let minutos = prompt("Dime el minuto", 0);
    let segundos = prompt("Dime los segundos", 0);

    let nuevaHoras = horas;
    let nuevosMinutos = minutos;
    let nuevosSegundos = Number(segundos) + 1;

    if (nuevosSegundos >= 60) {
        nuevosSegundos = 0;
        nuevosMinutos = Number(minutos) + 1;
    }

    if (nuevosMinutos >= 60) {
        nuevosMinutos = 0;
        nuevaHoras = Number(horas) + 1;
    }

    if (nuevaHoras >= 24) {
        nuevaHoras = 0;
    }

    console.log(
        String(nuevaHoras).padStart(2, "0") + " : " +
        String(nuevosMinutos).padStart(2, "0") + " : " +
        String(nuevosSegundos).padStart(2, "0")
    );
}
