// Variables are named memory location
// We can define variables with let,const and var

let age = 20;  // age = variable name

let name = "Ronak";

var a = 45; // blocked scope not available

console.log (name)

function add(){
    var a = 20;
    var b = 90;
    var c = a + b;
    console.log(c);
}
add();

// let is a blocked scope variable introduced in ES6
{
    let something = 20;
    console.log(something); // 20
}
//console.log(something); // error

// we can re assign the values of let variable 

const name1 = "Ronak";

//  data types

/* premitive data types: 1. Number
                         2. Undefined 
                         3. null
                         4. boolean
                         5. strings
                         6. symbol
                         7. BigInt - (2^53 -1)
    
    non premitive data types : 1. Arrays
                               2. Objects */
