const number = 3;

function myFunction () {
  const otherNumber = 1;

  function logger() {
    console.log(otherNumber);
  }

  return logger;
}

const result = myFunction();

result();
// 1
