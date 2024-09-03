class Car{
    constructor(){   //normal constructor other than the default which is automatically generated
        console.log("Creating new object");
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brand=brand;
    }
}

let fortuner=new Car();
let xuv=new Car();


class Car2{
    constructor(brand){   //parameterized constructor
        console.log(`Creating ${brand} object`);
        this.brand=brand;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}

let swift=new Car2("swift");
console.log(swift);   //this will give the name of the class first with all the details inside it
let baleno=new Car2("baleno");
console.log(baleno);