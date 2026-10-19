"use strict"
{
    function cuentaAtras1(n){
        // caso base
        if (n===0){
            console.log(n);
        } else{ // caso recursivo
            console.log(n);
            cuentaAtras1(n-1);
        }
    }

    //cuentaAtras1(9)

    let cuentaAtras2 = function(n){
        // caso base
        if (n===0){
            console.log(n);
        } else{ // caso recursivo
            console.log(n);
            cuentaAtras1(n-1);
        }
    }
    //cuentaAtras2(10)

    let cuentaAtras3 = (n) => {
        // caso base
        if (n===0){
            console.log(n);
        } else{ // caso recursivo
            console.log(n);
            cuentaAtras1(n-1);
        }
    }

    //cuentaAtras3(10)

    let sumaAtras = (n) => {
        if (n===0){
            return 0;
        } else {
            return n + sumaAtras(n-1)
        }
    }
    let s = sumaAtras(10)
    //console.log(s)

    let parImparRecursiva = (n) => {
        if (n===0){
            return("Par");
        } else if(n===1){
            return("Impar");
        }else{
            return parImparRecursiva(n-2);
        }
    }
    let p = parImparRecursiva(12);

    console.log(p);
}