"use strict"
{

    // Set
    let mySet = new Set ();
    mySet.add(1);
    mySet.add(1);
    mySet.add(2);
    mySet.add(3);
    mySet.add({});
    mySet.add({});
    mySet.add("Mmmmmmm días");
    console.log(mySet);

    // recorrer los Set
    mySet.forEach( (elem) => {
        console.log(elem);
    });

    for (let elem of mySet) {
        console.log(elem);
    }

    let myArray = new Array(1,2,3,3,{},{});
    let mySet2 = new Set (myArray);

    mySet2.forEach( (elem) => {
        console.log(elem);
    });

    console.log("--------------------")
    let myArray2 = new Array();
    myArray2 = Array.from(mySet);
    myArray2.map((elem) => {
        console.log(elem);
    });

    console.log(mySet.size);
    mySet.has(1)?console.log("SI"):console.log("NO");
    mySet.delete(1);
    mySet.has(1)?console.log("SI"):console.log("NO");

    mySet.clear();
    console.log(mySet);

    // MAP
    let myMap = new Map ();
    myMap.set ("clave", "valor");
    myMap.set ("name", "Luis");
    myMap.set ("lastname", "Martínez");
    myMap.set ("age", 24);
    console.log(myMap);
    console.log(myMap.size);
    console.log(myMap.has("email")); //false
    console.log(myMap.has("name")); //true

    console.log(myMap.get("name"));
    myMap.set("name", "Luis Enrique");

    myMap.set({},10);
    myMap.set(true,50);
    console.log(myMap);

    myMap.forEach((valor, clave) => {
        console.log(`${clave} - ${valor}`);
    })

    console.log("---------------------");

    for (let [valor, clave] of myMap) {
        console.log(`${valor} - ${clave}`);
    };

    let myMap2 = new Map ([
        ["name", "Pepe"],
        ["surname", "Pérez"],
        ["age", 120]
    ]);

    console.log(myMap2);

    let myKeys = [...myMap2.keys()];
    let myValues = [...myMap2.values()];
    console.log(myKeys);
    console.log(myValues);
}