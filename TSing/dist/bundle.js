"use strict";
(() => {
  // classes.ts
  var Animal = class {
    constructor(name, size, legs) {
      this.name = name;
      this.size = size;
      this.legs = legs;
      this.head = true;
    }
    getAnimalName() {
      console.log(this.name);
    }
    getAnimalSize() {
      console.log(this.size);
    }
    legsCounter() {
      console.log(this.legs);
    }
  };
  var Dog = class extends Animal {
    constructor(name) {
      super(name, "medium", 4);
    }
  };
  var dog = new Dog("Layka");
  dog.getAnimalName();
  dog.getAnimalSize();
  dog.legsCounter();

  // generics.ts
  var users = [
    { name: "Adam", age: 35 },
    { name: "Kevin", age: 30 },
    { name: "Eva", age: 40 }
  ];
  function genericsOne(array, key) {
    return array.map((el) => el[key]);
  }
  console.log(genericsOne(users, "name"));
  console.log(genericsOne(users, "age"));
})();
