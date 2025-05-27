"use strict";
const myFunc = function (a, b) {
    return a + b;
};
function myFunc2(name = "TS") {
    return `Hello ${name}`;
}
function sayHelloOptional(...args) {
    return args.reduce((acc, el) => acc + el, 0);
}
const multiply = (x, y) => x / y; // function with type implemented
