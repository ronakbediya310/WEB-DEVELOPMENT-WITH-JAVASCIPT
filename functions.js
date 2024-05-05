// function definition
function sayMyName(){
    console.log("Ronak");
}

// function calling

sayMyName();

function print(a){
    console.log(a);
}

print(5);
// functions with return keyword;
function getAverage(num1,num2){
    let avg = (num1 + num2 )/2;
    return avg;
}
let avg = getAverage(20,30);
console.log(avg);

// Arrow Functions 

let getExp=(x,y)=>{
    return (x**y);
}
console.log(getExp(2,4));

// callback functions:

// A callback function can be passed as an argument to another function
let arr = [1,2,3,4,5,6];

arr.forEach((val)=>{
    console.log(val);
    console.log(val*val);
});

/*
 arr.forEach((val,idx,arr)=>{

});

*/

/* A function which accepts another function as an parameter or returns a function is called as higher order function. */

// forEach() is a higher order function,which is only used with Arrays not applicable for strings.


// Important Array Methods:

// 1. MAP: creates a new array

let arr2 = [1,6,8,9,0,8];

squaredArr = arr2.map((val)=>{
    return val*val;
});

console.log(squaredArr);

// 2. Filter: Creates a new array of elements filtered based on some conditions;

/*  All Even numbers
   let newArr = arr.filter((val)=> {
    return val % 2 === 0;
   });
*/

// 3. Reduce Method: Performs some operations and reduces an array to a single value;
const nums = [1,2,3,4];

const output = nums.reduce((res,curr)=>{
    return res + curr; // 1 + 2 + 3 + 4 
});
console.log(output); // 10

// Create one array having numbers from 1 to n;
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr3 = [];

rl.question('Enter a number: ', (num) => {
    let arr3 = [];
  
    for (let i = 1; i <= num; i++) {
      arr3.push(i);
    }
    console.log(arr3);
    rl.close();
  });