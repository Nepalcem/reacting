// 1. Capitalize First Letters
// Input: "hello world" → Output: "Hello World"
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((el) => {
      return el[0].toUpperCase() + el.slice(1);
    })
    .join(" ");
}

// console.log(capitalizeWords("hello world"));

// Input: "racecar" → true; "hello" → false
function isPalindrome(str) {
  if (str.length % 2 === 1) {
    return (
      str
        .slice(0, Math.floor(str.length / 2))
        .split("")
        .reverse()
        .join("") === str.slice(Math.ceil(str.length / 2))
    );
  } else if (str.length % 2 === 0) {
    return (
      str
        .slice(0, str.length / 2)
        .split("")
        .reverse()
        .join("") === str.slice(str.length / 2)
    );
  }
}

// 3. Count Character Frequency
// Input: "banana" → Output: { b: 1, a: 3, n: 2 }
function charFrequency(str) {
  const strArr = str.split("");
  const result = {};
  for (const element of strArr) {
    if (!result[element]) {
      result[element] = 1;
    } else {
      result[element]++;
    }
  }
  return result;
}

// console.log(charFrequency("banana"));


// 4. Remove Duplicates from Array
// Input: [1, 2, 2, 3] → Output: [1, 2, 3]
function removeDuplicates(arr) {
  const newArr = [];
  arr.forEach(el => {
    if (!newArr.includes(el)) {
      newArr.push(el);
    }
  })
  return newArr;
}

console.log(removeDuplicates([1, 2, 2, 3]));