function Hero(name, role) {
  this.name = name;
  this.role = role;

  this.introduce = function () {
    console.log(`My name is ${this.name} and I am a ${this.role}.`);
  };
}

let taylor = new Hero('Taylor', 'mother');

let riley = new Hero('Riley', 'coach');

taylor.name;
riley.role;

taylor.introduce();
riley.introduce();
