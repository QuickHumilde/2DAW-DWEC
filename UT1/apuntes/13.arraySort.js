"use strict"
{
    let myNumbers = [100,4,5,7,99];
    myNumbers.sort();
    console.log(myNumbers);

    // Ordenar array de numeros de menor a mayor
    myNumbers = [100,4,5,7,99];
    myNumbers.sort ((a,b) => {
        if (a<b){
            return -1;
        }
        if (a>b) {
            return 1;
        }
        if (a===b){
            return 0;
        }
    });
    console.log(myNumbers);

    myNumbers = [100,4,5,7,99];

    myNumbers.sort((a,b) => a<b?-1:1);
    console.log(myNumbers);

    myNumbers = [100,4,5,7,99];
    myNumbers.sort((a,b) => a-b);
    console.log(myNumbers);

    // Ordenar array de numeros de mayor a menor
    myNumbers = [100,4,5,7,99];
    myNumbers.sort ((a,b) => {
        if (a<b){
            return 1;
        }
        if (a>b) {
            return -1;
        }
        if (a===b){
            return 0;
        }
    });
    console.log(myNumbers);

    myNumbers = [100,4,5,7,99];
    myNumbers.sort((a,b) => a<b?1:-1);
    console.log(myNumbers);

    myNumbers = [100,4,5,7,99];
    myNumbers.sort((a,b) => b-a);
    console.log(myNumbers);

    // ORDENARA ARRAY DE STRING

    // Alfabeticamente (A-Z)
    let myNames = ["leti", "Sandra", "Maria", "María", "Candela"];
    myNames.sort();
    console.log(myNames);

    myNames = ["Leti", "Sandra", "Maria", "María", "Candela"];
    myNames.sort((a,b) => a.localeCompare(b));
    console.log(myNames);

    // Alfabeticamente (Z-A)
    myNames = ["Leti", "Sandra", "Maria", "María", "Candela"];
    myNames.sort((a,b) => b.localeCompare(a));
    console.log(myNames);

    myNames = ["A","S","M","N","C"];
    myNames.sort().reverse();
    console.log(myNames);



}