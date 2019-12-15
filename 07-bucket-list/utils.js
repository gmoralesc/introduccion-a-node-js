module.exports.printList = function(items) {
  for (let index = 0; index < items.length; index++) {
    const element = items[index];
    const checked = element.completed ? "[✓]" : "[ ]";
    const duedate = element.date ? new Date(element.date) : "";
    const name = element.item;

    console.log(`${index}. ${checked} ${name} [${duedate}]`);
  }
};
