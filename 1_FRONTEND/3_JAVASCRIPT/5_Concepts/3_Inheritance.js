class Person{
    constructor(name){
        this.name=name;
        this.species="homo sapiens";
    }
    sleep()
    {
        console.log("Sleep");
    }
    eat()
    {
        console.log("Eat");
    }
    work()
    {
        console.log("Do nothing");
    }
}

class Engineer extends Person{   //all the methods and attributes(including constructor) of person will come in Engineer also
    work(){
        // super.eat(); to access the eat function here,it is necessary to use super
        console.log("Solve problems");   //work function will be overridden(method overriding) 
    }
    constructor(name){
        super(name);    //writing this in child class's constructor is necessary otherwise there is an error
        // to pass the parameter to parent's constructor we can pass it through super.
        console.log("Engineer");
    }
}


let me=new Engineer("Harsh");
me.eat();
me.sleep();
me.work();
