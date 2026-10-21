"use strict"
{
    /**
     * 1. Email Validation
    Write a function that validates whether a given string is a valid email address. The email should follow the format "user@domain.extension" and can include letters, numbers, periods, and dashes.
     */

    const validateEmail = (email) => {
        let regExp = /^[a-z0-9-_]*@[a-z0-9-_]*\.[a-z-_]*$/;
        
        return regExp.test(email);
    };

    console.log(validateEmail("diego@gmail.com"));
    
}