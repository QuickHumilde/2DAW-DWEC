"use strict"
{
    let fecha = new Date ();
    console.log(fecha);

    let fecha2 = new Date("1979/05/30 14:30:15");
    console.log(fecha2);

    let fecha3 = new Date (1979,5,30,14,30,150);
    console.log(fecha3);

    let fecha4 = new Date(1979,4,30);
    console.log(fecha4);

    let fecha5 = new Date("1979/05/30 14:30:15.857");
    console.log(fecha5.getDay()); // Domingo = 0, lunes = 1, martes = 2, .......
    console.log(fecha5.getDate()); // El dia de la fecha
    console.log(fecha5.getMonth()); // El mes (enero = 0)
    console.log(fecha5.getFullYear()); // El año de la fecha
    console.log(fecha5.getYear()); // El año a partir del 1900
    console.log(fecha5.getHours());
    console.log(fecha5.getMinutes());
    console.log(fecha5.getSeconds());
    console.log(fecha5.getMilliseconds());
    console.log(fecha5.getTimezoneOffset());
    console.log(fecha5.getTime()); // milisegundos desde 01/01/1970 00:00:00

    fecha5.setMonth(11);
    fecha5.setDate(29); // establece el dia
    fecha5.setFullYear(1998);
    fecha5.setHours(20);
    fecha5.setMinutes(20);
    fecha5.setSeconds(20);
    fecha5.setMilliseconds(20);
    console.log(fecha5);

    console.log(fecha.toDateString()); // Wed Oct 07 2026

    console.log(fecha.toDateString().split(" "));

    console.log(fecha.toLocaleDateString()); // 01/12/12

    console.log(fecha.toGMTString()); // Con respecto al meridiando de Greenwitch
    console.log(fecha.toUTCString()); // Con respecto al tiempo universal

}