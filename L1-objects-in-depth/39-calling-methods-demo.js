let cat = {
  age: 2,
  name: "Bailey",
  meow: function () {
    console.log('Meow!');
  },
  greet: function (person) {
    console.log('Hello, ' + person + '!');
  }
};

cat.age;

cat.meow;

cat.meow();

cat.greet('Andrew');
// 'Hello, Andrew!'
