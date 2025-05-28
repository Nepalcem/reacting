"use strict";
function newFunc(argument) {
    return argument;
}
const users = [
    { name: "Adam", age: 35 },
    { name: "Kevin", age: 30 },
    { name: "Eva", age: 40 },
];
function genericsOne(array, key) {
    return array.map((el) => el[key]);
}
console.log(genericsOne(users, "name"));
console.log(genericsOne(users, "age"));
