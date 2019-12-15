const path = require("path");
const commandLineArgs = require("command-line-args");

const datastore = require("./datastore");
const utils = require("./utils");

const filename = "data.json";
const filepath = `${path.resolve(".")}/${filename}`;
const items = datastore.load(filepath);
const params = [
  {
    name: "item",
    alias: "i",
    type: String
  },
  {
    name: "completed",
    alias: "c",
    type: Boolean
  },
  {
    name: "date",
    alias: "d",
    type: String
  }
];
const options = commandLineArgs(params);
const { item = "", completed = false, date = "" } = options;

if (item) {
  items.push({ item, completed, date });
  datastore.save(filepath, items);
}

utils.printList(items);
