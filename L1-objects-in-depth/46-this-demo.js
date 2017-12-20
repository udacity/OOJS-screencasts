const dog = {
  name: 'Jodi',
  age: 7,
  ageOneYear: function () {
    this.age += 1;
    console.log('Current age: ' + this.age);
  },
  woof: function () {
    console.log(this.name + " says 'woof!'");
  },
  whatIsThis: function () {
    console.log(this);
  }
};

dog.whatIsThis();

dog.woof();

dog.ageOneYear();

dog.age;
