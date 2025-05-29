// This file defines interfaces and a class that implements them.

interface Person {
  name: string;
  age: number;
  isLoggedIn: boolean;
}

interface Employee {
  salary: number;
  isWorking: boolean;
  department: string;
}

interface Manager extends Person, Employee {
  teamSize: number;
}

class User implements Person, Employee {
  name: string;
  age: number;
  isLoggedIn: boolean;
  salary: number;
  isWorking: boolean;
  department: string;

  constructor(
    name: string,
    age: number,
    isLoggedIn: boolean,
    salary: number,
    isWorking: boolean,
    department: string
  ) {
    this.name = name;
    this.age = age;
    this.isLoggedIn = isLoggedIn;
    this.salary = salary;
    this.isWorking = isWorking;
    this.department = department;
  }
}

//types

type unioinType = string | number | boolean; //union type not available in interfaces
type PersonType = {
  name: string;
  age: number;
  isLoggedIn: boolean;
};

//select type fields from another type
type Name = Pick<PersonType, "name">;
const personName: Name = {
  name: "John",
};
//exclude type fields from another type
type Active = Omit<PersonType, "isLoggedIn">;
const active: Active = {
  name: "John",
  age: 30,
};

//type extending
type EmployeeType = PersonType & {
  salary: number;
  isWorking: boolean;
  department: string;
};

type ManagerType = EmployeeType & {
  teamSize: number;
};
//class implementing
const BigBoss: ManagerType = {
  name: "Alice",
  age: 45,
  isLoggedIn: true,
  salary: 120000,
  isWorking: true,
  department: "Management",
  teamSize: 10,
};
