"use strict";
// This file defines interfaces and a class that implements them.
class User {
    constructor(name, age, isLoggedIn, salary, isWorking, department) {
        this.name = name;
        this.age = age;
        this.isLoggedIn = isLoggedIn;
        this.salary = salary;
        this.isWorking = isWorking;
        this.department = department;
    }
}
const personName = {
    name: "John",
};
const active = {
    name: "John",
    age: 30,
};
//class implementing
const BigBoss = {
    name: "Alice",
    age: 45,
    isLoggedIn: true,
    salary: 120000,
    isWorking: true,
    department: "Management",
    teamSize: 10,
};
