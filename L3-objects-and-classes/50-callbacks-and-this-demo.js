function invokeTwice(cb) {
   cb();
   cb();
}

const dog = {
  age: 5,
  growOneYear: function () {
    this.age += 1;
  }
};

dog.growOneYear();
// (this works as expected)

dog.age;
// 6

invokeTwice(dog.growOneYear);
// undefined

dog.age;
// 6
