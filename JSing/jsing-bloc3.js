// 5. Merge Two Sorted Arrays
// js
// Копировать
// Редактировать
// Input: [1, 3, 5], [2, 4, 6] → Output: [1, 2, 3, 4, 5, 6]
function mergeSorted(arr1, arr2) {
  const globalArr = [...arr1, ...arr2];
  return globalArr.sort((a, b) => a - b);
}

// console.log(mergeSorted([1, 3, 5], [2, 4, 6]));

// 7. Parse Query String
// js
// Копировать
// Редактировать
// Input: "?a=1&b=hello"
// Output: { a: "1", b: "hello" }
function parseQuery(queryStr) {
  const obj = {};
  firstString = queryStr.slice(
    queryStr.indexOf("?") + 1,
    queryStr.indexOf("=")
  );
  obj[firstString] = queryStr.slice(
    queryStr.indexOf("=") + 1,
    queryStr.indexOf("&")
    );
    
    secondString = queryStr.slice(
        queryStr.indexOf("&") + 1,
        queryStr.lastIndexOf("=")
    );

    obj[secondString] = queryStr.slice(
        queryStr.lastIndexOf("=")+1,
        queryStr.length
    )
    return obj
}

parseQuery("?a=1&b=hello");
