const args = process.argv.slice(2);
const [name = "Friend"] = args;
const hour = new Date().getHours();

// Ask for hours range
if (hour >= 6 && hour < 12) {
  console.log(`Good morning ${name}`);
} else if (hour >= 12 && hour < 18) {
  console.log(`Good afternoon ${name}`);
} else if (hour >= 18 && hour < 23) {
  console.log(`Good evening ${name}`);
} else {
  console.log(`Good night ${name}`);
}
