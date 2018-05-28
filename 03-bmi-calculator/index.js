const commandLineArgs = require('command-line-args');

const params = [{
    name: 'name',
    alias: 'n',
    type: String
  },
  {
    name: 'height',
    alias: 'h',
    type: Number
  },
  {
    name: 'weight',
    alias: 'w',
    type: Number
  }
];

const options = commandLineArgs(params);
const bmi = options.weight / Math.pow(options.height, 2);
let result = '';

if (bmi < 18) {
  result = 'Peso bajo';
} else if (bmi >= 18 && bmi < 25) {
  result = 'Normal';
} else if (bmi >= 25) {
  result = 'Sobrepeso';
}

console.log(`${options.name} el resultado de tu BMI es ${bmi} lo que indica: ${result}`);