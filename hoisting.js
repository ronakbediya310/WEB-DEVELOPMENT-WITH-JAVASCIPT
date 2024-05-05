// works fine
sayMyName("Ronak");
function sayMyName(name){
 console.log(name);
}

// works fine but undefined age value
console.log(age);
var age = 90;

// Error
console.log(age2);
let age2 = 23;
 
// Error
sayHello();
let sayHello = function(){
    console.log("Hello Ronak");
}
// Function call stack LIFO
