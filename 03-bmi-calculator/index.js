var commandLineArgs = require('command-line-args')

var params = [
  { name: 'name', alias: 'n', type: String },
  { name: 'height', alias: 'h', type: Number },
  { name: 'weight', alias: 'w', type: Number }
];

var options = commandLineArgs(params)
var bmi = options.weight / Math.pow(options.height, 2);
var result = '';

if (bmi < 18) {
  result = 'Peso bajo';
} else if (bmi >= 18 && bmi < 25) {
  result = 'Normal';
} else if (bmi >= 25) {
  result = 'Sobrepeso';
}

console.log(`${options.name} el resultado de tu BMI es ${bmi} lo que indica: ${result}`);
