// premitive type : Stack  / copy of variable.
// Reference type : Heap / reference to original value.


// stack
let myName = "Ronak";
let anotherName = myName;
console.log(anotherName);
anotherName = "Bediya";
console.log(anotherName);
console.log(myName);


// Heap 
let user = {
    name: "Ronak",
    age: 20
}

let user2 = user;
user2.age = 19;
console.log(user);
console.log(user2);