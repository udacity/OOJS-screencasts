function IceCreamFactory(obj) {
  let isCold = true;

  return Object.assign({}, obj, {
    melt: function () {
      isCold = false;
    },
    isCold: function () {
      return isCold;
    }
  });
}

let iceCream = IceCreamFactory({});

function ConeFactory(obj) {
  let isDry = true;

  return Object.assign({}, obj, {
    soggy: function () {
      isDry = false;
    },
    isDry: function () {
      return isDry;
    }
  });
}

let iceCreamCone = IceCreamFactory(ConeFactory({}));

console.log(iceCreamCone);
