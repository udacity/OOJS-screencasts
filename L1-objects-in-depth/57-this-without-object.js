const chameleon = {
  eyes: 2,
  lookAround: function () {
    // debugger
    console.log(`I see you with my ${this.eyes} eyes!`);
  }
};

chameleon.lookAround();

function whoThis () {
  // debugger
  this.trickyish = true;
}

whoThis();
