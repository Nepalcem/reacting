function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("sbc"));

const getMax = function (arr) {
  return Math.max(...arr);
};

console.log(getMax([1, 3, 5, 2]));


for (let i = 0; i <= 100; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`i = ${i} FizzBuzz`);
    } else if (i % 3 === 0) {
        console.log(`i = ${i} Fizz`);
    } else if (i % 5 === 0) {
        console.log(`i = ${i} Buzz`);
    } else {
        console.log(`i = ${i}`)
    }
}