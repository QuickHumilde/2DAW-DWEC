"use strict"
{
    /**
     * Write a function that validates whether a password meets the following criteria: at least
    8 characters long, at least one uppercase letter, one lowercase letter, one number, and
    one special character such as @, #, or $
     */

    const passwordValidation = (text) => {
        let regExp = /[A-Za-z0-9\@\#\$]{8,}/;
        
        return regExp.test(text);
    };

    console.log(passwordValidation("Passw0rd#"));
    console.log(passwordValidation("Ab1@#"));
    console.log(passwordValidation("xY9#kLmN#"));
    console.log(passwordValidation("Abcdefg1"));

    
}