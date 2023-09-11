

//first arg is a string giving description

import { sum } from "../sum"

//callback is the test 

test("Sum function should calculate the sum of two numbers",()=>{
    const result = sum(3,4);
    //you calculated the sum using sum.js file 

    //this line is known as assertion testing the sum method
    expect(result).toBe(7);
    //now you want the result to be 7

});