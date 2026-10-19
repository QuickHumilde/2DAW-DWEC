"use strict"
{
    console.log(Math.PI);
    console.log(Math.E);

    let f = 37.8;

    console.log(Math.floor(f));
    console.log(Math.ceil(f));
    console.log(Math.round(f));
    console.log(Math.abs(f));
    console.log(Math.min(1,5,8,3,3,6,5,35,4));
    console.log(Math.max(1,5,8,3,3,6,5,35,4));
    console.log(Math.pow(f,3));
    console.log(Math.sqrt(121));
    console.log(Math.random()); // 0 <= x < 1
    console.log(Math.random()*10); // 0 <= x < 10

    // 0 <= x <= 10
    console.log(Math.round(Math.random()*10));

    // 0 <= x <= 9
    console.log(Math.floor(Math.random()*10));

    // 1 <= x <= 10
    console.log(Math.ceil(Math.random()*10));

    // 10 <= x < 100
    console.log(10+Math.random()*100-10);

    // 10 <= x <= 100
    console.log(Math.ceil(10+Math.random()*(100-10)));

    // 14 <= x <= 51
    console.log(Math.ceil(14+Math.random()*(51-14)));

}