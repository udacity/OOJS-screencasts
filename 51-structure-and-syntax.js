let myModule = (function (){
  function privateMethod (message) {
    console.log(message);
  }

  function publicMethod (message) {
    privateMethod(message);
  }

  return {
    publicMethod: publicMethod
  };
})();

let myModule2 = (function () {
  function privateMethod (message) {
    console.log(message);
  }

  return {
    publicMethod: function (message) {
      privateMethod(message);
    }
  };
})();
