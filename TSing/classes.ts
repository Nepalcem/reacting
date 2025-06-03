class Animal {
  public name: string;
  protected size: "big" | "small" | "medium";
  protected legs: number;
  private head: boolean;

  constructor(
    name: string,
    size: "big" | "small" | "medium",
    legs: number,
  ) {
    this.name = name;
    this.size = size;
    this.legs = legs;
    this.head = true;
  }

  public getAnimalName() {
    console.log(this.name);
  }

  public getAnimalSize() {
    console.log(this.size);
  }

  legsCounter() {
    console.log(this.legs);
  }
}


class Dog extends Animal{
    constructor(name: string) {
        super(name, "medium", 4);
    }
}

export { Animal, Dog };

const dog = new Dog("Layka");

dog.getAnimalName();
dog.getAnimalSize();
dog.legsCounter();