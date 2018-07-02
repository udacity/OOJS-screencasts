let person = (function () {
  let name = 'Veronika';

  return  {
    getName: function () {
      return name;
    },
    setName: function (myName){
      name = myName;
    }
  };
})();

person.name;
// undefined
person.getName;
// 'Veronika'

person.setName('Not Veronika');
person.getName;
// 'Not Veronika'
