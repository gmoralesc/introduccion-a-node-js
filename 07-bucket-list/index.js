const path = require("path");
const inquirer = require("inquirer");

const datastore = require("./datastore");
const utils = require("./utils");

const filename = "data.json";
const filepath = `${path.resolve(".")}/${filename}`;
const items = datastore.load(filepath);
const options = [
  {
    type: "input",
    name: "item",
    message: "What do you want to add?"
  },
  {
    type: "confirm",
    name: "completed",
    message: "Is completed?"
  },
  {
    type: "input",
    name: "date",
    message: "Due Date MM/DD/YYYY"
  }
];

inquirer.prompt(options).then(answers => {
  // This code will be executed just after the user answer all questions
  const { item = "", completed = false, date = "" } = answers;
  if (item) {
    items.push({
      item,
      completed,
      date
    });

    datastore.save(filepath, items);
  }

  utils.printList(items);
});
