const inquirer = require('inquirer');

const datastore = require('./datastore');
const utils = require('./utils');

const filePath = 'data.json';
const items = datastore.load(filePath);

const options = [{
  type: 'input',
  name: 'item',
  message: "What do you want to add?"
}, {
  type: 'input',
  name: 'times',
  message: "How many times do you want do it?"
}, {
  type: 'list',
  name: 'frequency',
  message: "Which will be the frequency?",
  choices: ['Day', 'Week', 'Month', 'Year']
}];

inquirer.prompt(options).then(answers => {
  // This code will be executed just after the user answer all questions
  items.push({
    item: answers.item,
    times: answers.times,
    frequency: answers.frequency
  });

  datastore.save(filePath, items);
  utils.printList(items);
});