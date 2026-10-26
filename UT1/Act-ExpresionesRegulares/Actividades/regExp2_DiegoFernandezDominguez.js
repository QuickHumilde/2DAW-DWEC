"use strict"
{
    /**
    2. Extract Numbers from a String
    Write a function that takes a string and returns an array of all the numbers present in that string. The numbers can be integers or decimals.
     */

    const extractNumberFromString = (text) => {
        let regExp = /[0-9]+(?:\.[0-9]+)?/g;
        
        return text.match(regExp);
    };

    console.log(extractNumberFromString("hola92 ube68 5f6.5rdfddv"));
    
}