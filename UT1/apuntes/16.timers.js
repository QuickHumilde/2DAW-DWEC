"use strict"
{
    // temporizadores
    console.log("1");
    setTimeout( () => {
        console.log("timeout");
    },2000);
    console.log("2");

    // callback
    setTimeout(f,4000);

    setTimeout(f(),5000);

    function f () {
        console.log("timeout f");
    };

    console.log(3);

    let codigo = setInterval(f2, 1000)

    function f2 () {
        console.log("timeout f2");
    };

    setTimeout(f3,10000);

    function f3 () {
        clearInterval(codigo);    
    };
}