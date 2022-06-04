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

const myGrow = dog.growOneYear.bind(dog);
invokeTwice(myGrow)
dog.age;
// 7
