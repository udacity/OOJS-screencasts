function myCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

let counter = myCounter();

counter();
// 1

counter();
// 2

counter.count;
// undefined

count;
// undefined
