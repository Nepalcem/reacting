const repeat = function (t) {
  console.log(`This text appears after ${t} seconds`);
};

function debounce(fn, timer) {
  let timeOut;
  return function () {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      fn(timer);
    }, timer);
  };
}

const debounceFunction = debounce(repeat, 2000);

debounceFunction();
debounceFunction();
debounceFunction();
