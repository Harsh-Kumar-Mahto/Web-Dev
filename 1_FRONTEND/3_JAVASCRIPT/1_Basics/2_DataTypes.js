// 1.Primitive(7):Number,String,Boolean,undefined,null,BigInt,Symbol
// 2.Non-Primitive:Objects(Collection of values),Array,Function

// typeof x;   in the console can be used to get the data type of any variable

// Primitive
a=6;  //number
console.log(a);

b="harsh"  //string
console.log(b);

c=false  //boolean
console.log(c);

let d;     //undefined
console.log(d);

e=null     //null(Typeof says to be object but we consider this to be a different data type)
console.log(e);

f=BigInt("123")  //BigInt
console.log(f);

g=Symbol("!Hello")  //Symbol
console.log(g);

// Non-Primitive
//Objects are declared as const but we can change the vaues of keys by independenty accessing them
const Student={
//  keys:value of the key
    fullName:"Harsh Mahto",
    age:20,
    cgpa:8.1,
    isPass:true,
};

console.log(Student);  //all keys and values will be dispalyed
console.log(Student.age);  //ways to access specific values of keys
console.log(Student["age"]);

Student["age"]++;
console.log(Student["age"]);
