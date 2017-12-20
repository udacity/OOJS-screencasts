const returnsAFunction = function () {
  return function () {
    console.log('Hello from inside a function');
  };
};

const newFunction = returnsAFunction();

newFunction();

returnsAFunction()();
