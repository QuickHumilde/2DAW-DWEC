"use strict"
{
    //DECLARAR UN ARRAY
    let myArray = [];
    myArray[0] = 10;
    myArray[1] = 'c';
    myArray[2] = "Juana";
    console.log(myArray);

    let myArray2 = new Array();
    myArray2[0] = 546;
    myArray2[1] = "Wachi wachi";

    console.log(`Mi array chulo tiene ${myArray2.length} elementos`);

    let myArray3 = ["lokete", "castor", "calvo"];

    // clonado de un array
    let myArray4 = myArray3; // por referencia

    console.log(myArray4);
    myArray3[3] = "la madrastra de la cenicienta";
    console.log(myArray4)

    //Arrays bidimensionales
    let myArrayBi1 = new Array ();
    // let myArrayBi1 = [[]];
    myArrayBi1[0] =  [1,2,3];
    myArrayBi1[1] =  [4,5,6];
    console.table(myArrayBi1);

    let numFilas = 2;
    let numColumnas = 3;
    let myArrayBi2 = new Array(numFilas, numColumnas);
    for (let i = 0; i < numFilas ; i++){
        myArrayBi2[i] = new Array(numColumnas);
    }

    console.table(myArrayBi2);
    myArrayBi2[0][0] = null;
    console.table(myArrayBi2);

    let myArrayBi3 = Array.from(Array(numFilas), () => new Array(numColumnas));

    /*for (let i = 0; i<numFilas; i++){
        for (let j = 0; i<numColumnas; j++){
            myArrayBi3[i][j] = 0;
        }
    }*/

    let myArrayBi4 = new Array(numFilas).fill().map( () => new Array(numColumnas))

    console.table(myArrayBi4);

    let myArrayBi5 = [...Array(numFilas)].map (() => Array(numColumnas).fill(0));

    console.log("-----------------------------")
    
    // OPERACIONES CON ARRAYS
    // join
    let elems = ["fuego", "aire", "agua"];
    let str = elems.join("-");
    console.log(str);
    
    // split
    let strNumbers = "1,2,3,4,5,6,7,8,9,10";
    let myArrayNumbers = strNumbers.split(",")
    console.log(myArrayNumbers);
    for (let i = 0; i<myArrayNumbers.length;i++){
        myArrayNumbers[i] = parseInt(myArrayNumbers[i]);
    }
    console.log(myArrayNumbers);

    // push
    let numElemls = elems.push("tierra");
    console.log(elems);

    // pop
    let ultimoElemento = elems.pop();
    console.log(ultimoElemento);
    console.log(elems);

    // shift
    let primerElemento = elems.shift();
    console.log(primerElemento);
    console.log(elems);

    // reverse
    let reversedElems = [...elems].reverse();
    console.log(reversedElems);
    console.log(elems);

    // slice
    let nombres = ["Rita", "Manuel", "Miguel", "Ana", "Vanessa"];
    let nombresSeleccionados = nombres.slice(1,3);
    console.log(nombresSeleccionados);

    nombresSeleccionados = nombres.slice(1);
    console.log(nombresSeleccionados);

    nombresSeleccionados = nombres.slice(-2);
    console.log(nombresSeleccionados);

    // filter 
    const usuarios = [
        {name: "Juan", age:34},
        {name: "Manoli", age:41},
        {name: "JuanFran", age:27}
    ];

    let usuariosMayores = usuarios.filter(function(usuario){
        return usuario.age >= 30;
    });

    let usuariosMayores2 = usuarios.filter((usuario) => usuario.age >= 30);

    console.log(usuariosMayores);
    console.log(usuariosMayores2);

    // find
    let re = /M[a-z]*/i;
    let usuarioEncontrado = usuarios.find((usuario) => re.test(usuario.name));
    console.log(usuarioEncontrado);

    usuarioEncontrado = usuarios.find((usuario) => usuario.name.match(re));
    console.log(usuarioEncontrado);

    // some
    let  esxiste = usuarios.some ((usuario) => usuario.age == 27);
    console.log(true);

    // findIndex
    let index = usuarios.findIndex ((usuario) => usuario.age === 22);
    console.log(index); // -1

    // concat
    const array1 = ["a","b","c"];
    const array2 = ["d","e","f"];
    const array3 = array1.concat (array2);
    console.log(array3);
    const array4 = [...array1, ...array2];
    console.log(array4);

    // reduce (acumulador, valor actual){}, 0
    let sumaEdades = usuarios.reduce((acc, valorActual) => acc += valorActual.age , 0);
    console.log(sumaEdades);

    const misNumeros = [1,2,3,4,5];
    sumaEdades = misNumeros.reduce((acc, va) => acc += va , 0);
    console.log(sumaEdades);

    const miArrayDeArrayConNumeros = [[0,1],[2,3],[4,5]];
    //[0,1,2,3,4,5]

    let miArrayDeNumeros = miArrayDeArrayConNumeros.reduce((acc, va) => acc.concat(va), []);
    console.log(miArrayDeNumeros)

    // includes
    const motos = ["yamaha", "ducati", "suzuki"];
    let incluye = motos.includes("vespa");
    console.log(incluye); // false


    // ITERAR sobre los elementos del array
    //for, foreach, map, for of

    let vector = [1,2,"A", "F", -1, 2.4];
    for (let i = 0; i < vector.length; i++) {
        console.log(vector[i]);
    }

    vector.forEach ( (elem) => console.log(elem));

    vector.forEach ( (elem, pos) => console.log(pos + ": " + elem));

    let valores = vector.map((elem) => {
        console.log(elem)
        return elem;
    });
    console.table(valores)

    valores = vector.map((elem) => elem);
    console.table(valores)

    /**
     const usuarios = [
        {name: "Juan", age:34},
        {name: "Manoli", age:41},
        {name: "JuanFran", age:27}
    ];
     */
    let nuevasEdades = usuarios.map((usuario) => usuario.age*2);
    console.log(nuevasEdades);

    let nuevosUsuarios = usuarios.map((usuario) => {
        usuario.age*=2
        return usuario;
    });

    console.log(nuevosUsuarios)

    let nuevosUsuarios3 = usuarios.map ((usuario) => 
        {return { ...usuario, altura: usuario.age*1.73}}
    );
    console.log(nuevosUsuarios3);

    let nuevosUsuarios4=[];
    for (let usuario of usuarios) {
        console.log(usuario);
        nuevosUsuarios4.push(usuario)
    }
    console.table(nuevosUsuarios4)

}