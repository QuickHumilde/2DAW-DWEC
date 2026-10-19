"use strict"
{
    let a = "hola";
    var b = "adios";

    function saludar() {
        console.log(a);
        console.log(b);
        let c = "no se ve fuera";
        var d = "tampoco se ve fuera";
    }
    {
        let e = "tamagochi";
        var f = "aguja dinamica";
        console.log(b + " 1");
        console.log(a + " 2");
    }

    saludar();
    //console.log(c);
    //console.log(d);
    //console.log(e)
    console.log(f);

    const g = 10;
    console.log(g);
    //g++;
    //console.log(g);

    let h;
    let i = 10;
    let s = 'esto es un string';
}