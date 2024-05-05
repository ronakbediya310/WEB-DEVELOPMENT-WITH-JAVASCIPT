class ToyotaCar {
    constructor(brand){
        this.brand = brand ;

    }
    start(){
        console.log("Inside Start Method");
    }
    stop()
    {
        console.log("Inside Stop Method");
    }
}

let fortuner = new ToyotaCar("fortuner"); // constructor
console.log(fortuner);
fortuner.start();