class Person {
    constructor(firstName, lastname) {
      this.firstName = firstName;
      this.lastname = lastname;
    }
    get getName() {
      return this.firstName + this.lastname;
    }
    set setName(val) {
      this.firstName = val.split(" ")[0];
      this.lastname = val.split(" ")[1];
    }  
  }
  let obj1 = new Person("John", "Do");
  console.log(obj1.getName) 
  obj1.setName = "Do John";
  console.log(obj1.getName);