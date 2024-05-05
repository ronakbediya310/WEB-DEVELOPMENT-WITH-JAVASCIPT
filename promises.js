// async and awaits are better than promises.
// promices are better than callback hell.

function hello(){
    console.log("Hello");
}
setTimeout(hello,2000); // 2s

// callback hell: Nested callbacks stacked bellow one another forming a pyramid structure.
function getData(dataId,getNextData){
    setTimeout(()=>
    {
        console.log("data",dataId);
        if (getNextData){
            getNextData();
        }
    },2000);
}

// complex structure: callback hell (pyramid of doom)
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        });
    });
});

// Promises: promise is "eventual" completion of a task.
// It is an object in js.
// states of promise: 1. pending 2. fullfilled 3. rejected

// Apies return the promises.

// resolve(result) & reject(error)