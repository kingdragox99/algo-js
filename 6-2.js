class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    sayHello() {
      console.log("Hello, " + this.firstName + " " + this.lastName);
    }
  }

  let obj1 = new Person("John", "Smith");
  let obj2 = new Person("John", "Do");
  let obj3 = new Person("John", "John");
  let obj4 = new Person("John", "Adams");

  obj1.sayHello();
  obj2.sayHello(); 
  obj3.sayHello(); 
  obj4.sayHello(); 