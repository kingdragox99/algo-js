class Cat{
    constructor(firstName){
    this.firstName = firstName;
    this.greetingAnimal = "Miou moiuo";
    }
    sayHello() {
        console.log (`${this.greetingAnimal}! I m ${this.firstName}!`);
    }
}

class Dog{
    constructor(firstName, greetingAnimal){
        this.firstName = firstName;
        this.greetingAnimal = greetingAnimal;
    }
    sayHello() {
        console.log (`${this.greetingAnimal}! I m ${this.firstName}!`);
    }
}

let obj1 = new Cat("Coco");
let obj2 = new Dog("Mojo", "Wou wou");
obj1.sayHello();
obj2.sayHello();