let cat = {
  age: 2,
  name: 'Bailey',
  meow: function () {
    console.log('Meow!');
  },
  greet: function (person) {
    console.log('Hello, ' + person + '!');
  }
};

cat.color = 'gray';

cat.sayName = function () {
  console.log(cat.name);
};

console.log(cat);

delete cat.greet;

cat.greet();
// TypeError: cat.greet is not a function

cat.greet;

console.log(cat);
