function Radio(mode) {
  let on = false;

  return {
    mode: mode,
    turnOn: function () {
      on = true;
    },
    isOn: function () {
      return on;
    }
  };
}

let fmRadio = Radio('fm');

fmRadio.on;
//undefined

fmRadio.isOn();
// false

fmRadio.turnOn();

fmRadio.isOn();
