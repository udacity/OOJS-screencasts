const iceCreamTotals = {
  Veronika: 600,
  Andrew: 711,
  Jessica: 818,
  David: 9001,
  Richard: 1000000
};

const result = [];

for (const name in iceCreamTotals) {
  result.push(name);
}

console.log(result);
// [ 'Veronika', 'Andrew', 'Jessica', 'David', 'Richard' ]

Object.keys(iceCreamTotals);
// ['Veronika', 'Andrew', 'Jessica', 'David', 'Richard']

Object.values(iceCreamTotals);
// [600, 711, 999, 9001, 1000000]
