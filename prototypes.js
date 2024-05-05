// A javascript object is an entity having state and behaviours.
// JS objects have one special property called "Prototype".
// __proto__

const student = {
    fullName:"Ronak Bediya",
    marks:98.8,

    printMarks: function() {
        console.log(this.marks)
    }
}
console.log(student);

let arr =["Apple","Mango","Banana","Grapes"];
console.log(arr);
console.log(typeof arr);
arr.push("litchi");
console.log(arr);

const employee = {
   calcTax() {
      return 10;
   }
}

const Ronak={
   salary: 50000,
   calcTax() {
    return 20;
 }
}

Ronak.__proto__ = employee;

console.log(Ronak);