class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Get Coding :)

class Shark extends Animal {
  constructor(name, age, status) {
    super(legs, species);
    this.name = name
    this.age = age
    this.status = status
    this.legs = 4
    this.species = 'dog'
  }
  introduce() {
    super.introduce()
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(legs, species);
    this.name = name
    this.age = age
    this.status = status
    this.legs = 4
    this.species = 'dog'
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master, legs, species) {
    super(legs, species);
    this.name = name
    this.age = age
    this.status = status
    this.master = master
    this.legs = 4
    this.species = 'dog'
  }
  introduce() {
   super.introduce()
  }
  greetMaster(){
    return `Hello ${this.master}`
  }
}

let dogBill = new Dog('Doug', 12, 'Serving his master', 'Eliza')
console.log(dogBill.name)
console.log(dogBill.age)
console.log(dogBill.legs)
console.log(dogBill.species)
console.log(dogBill.status)
console.log(dogBill.introduce())
console.log(dogBill.greetMaster())