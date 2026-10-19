"use strict"
{
    function sumar(n1, n2) {
        return n1 + n2;
    };

    let sumar1 = (n1,n2) => {
        console.log("Sumar 1: ")
        return n1+n2;
    };

    console.log(sumar1(10,20));

    let sumar2 = (n1,n2) => n1+n2;

    console.log(sumar2(10,20));
}