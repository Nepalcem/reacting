"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = exports.Animal = void 0;
class Animal {
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
}
exports.Animal = Animal;
class Dog extends Animal {
    constructor(name) {
        super(name, "medium", 4);
    }
}
exports.Dog = Dog;
const dog = new Dog("Layka");
dog.getAnimalName();
dog.getAnimalSize();
dog.legsCounter();
