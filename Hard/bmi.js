const tomHeight = 9,
  tomMass = 8;
let tomBmi = tomMass / tomHeight ** 2;

const jerryHeight = 10,
  jerryMass = 45;
let jerryBmi = jerryMass / jerryHeight ** 2;

tomHigherBmi = tomBmi > jerryBmi;

console.log("Is Toms's BMI Higer Than Jerrys? " + tomHigherBmi);
