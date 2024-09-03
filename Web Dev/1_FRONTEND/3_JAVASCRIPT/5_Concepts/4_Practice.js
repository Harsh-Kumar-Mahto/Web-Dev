// Q. Creating a website of college with properties name and email.And a method viewdata to access the website data.

let data="Secret information";
class User{
    constructor(name,email)
    {
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log(`Name of student ${this.name}\nEmail id: ${this.email}\n${data}`);
    }
}

let stu1=new User("Harsh","abs@gamil.com");

// Q.create new class Admin inheriting User and new method called editData that allows Admin to edit website data.

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data=prompt("Enter new data");
    }
}
let admin1=new Admin("Admin","admin@admin.com");

// Small bit of exception handling at end