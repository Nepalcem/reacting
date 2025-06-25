// const repeat = function (t) {
//   console.log(`This text appears after ${t} seconds`);
// };

// function debounce(fn, timer) {
//   let timeOut;
//   return function () {
//     clearTimeout(timeOut);
//     timeOut = setTimeout(() => {
//       fn(timer);
//     }, timer);
//   };
// }

// const debounceFunction = debounce(repeat, 2000);

// debounceFunction();
// debounceFunction();
// debounceFunction();

const objectToCopy = { a: 1, b: "text", c: { d: 2, e: "new" } };

function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}



console.log(deepCopy(objectToCopy));