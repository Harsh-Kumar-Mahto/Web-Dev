// This is an object
const object={
    fullName:"Harsh",
    id:94,
    // function:
    printId:function(){
        console.log("Id= ",this.id);   //this keyword is used to point to the value of t=id inside the object
    },
    // This method can also be used
    // printId(){
    //     console.log("marks= ",this.id);   //this keyword is used to point to the value of t=id inside the object
    // },
};

const Sumit={
    id: 169,
};

Sumit.__proto__=object;  //this is basically inheritance.we gave the reference of object to Sumit
// the methods of object will be included in the prototype property of Sumit

// Class
class Car{
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

// object of class
let fortuner=new Car();
let xuv=new Car();
// xuv.start();  accesing class method by object
fortuner.setBrand("fortuner");
xuv.setBrand("xuv");