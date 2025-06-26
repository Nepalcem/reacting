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

console.log(capitalizeWords("hello world"));

// Input: "racecar" → true; "hello" → false
function isPalindrome(str) {

  if (str.length % 2 === 1) {
      return str
          .slice(0, Math.floor(str.length / 2))
          .split("")
          .reverse()
          .join("") === str.slice(Math.ceil(str.length / 2));
  } else if (str.length % 2 === 0){
      return str
          .slice(0, str.length / 2)
          .split("")
          .reverse()
          .join("") === str.slice(str.length / 2);
  }
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("braarb"));
