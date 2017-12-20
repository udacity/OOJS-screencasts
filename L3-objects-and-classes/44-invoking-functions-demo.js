const cat = {
  name: 'Bailey'
};

function sayHello(message) {
  console.log(`${this.message}, ${this.name}`);
}

sayHello.call(cat, 'Nice to see you');

sayHello.apply(cat, ['Hello']);
