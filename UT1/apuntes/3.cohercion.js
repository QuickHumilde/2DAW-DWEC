"use strict"
{
    let a = "15";
    let b = 100;
    console.log(a+b)
    let c = a+b;
    console.log(c);

    console.log(typeof a); // typeof dice el tipo de la variable que lleve delante
    console.log(typeof b);

    if (a < b) { // 15 < 100
        console.log("a es menor que b");
    } else {
        console.log("b es menor que a");
    }
}