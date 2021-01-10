// Define the numbers and the operation here

// Write if-statements here

const num1 = parseInt(prompt("Enter First Number"));
const opt = prompt("Select one of those Operations:- [ + , * , - , / , % ]");
const num2 = parseInt(prompt("Enter Second Number"));

if (opt === "+") {
  console.log(`${num1}+${num2} = ${num1 + num2}`);
} else if (opt === "-") {
  console.log(`${num1}-${num2} = ${num1 - num2}`);
} else if (opt === "*") {
  console.log(`${num1}*${num2} = ${num1 * num2}`);
} else if (opt === "/") {
  console.log(`${num1}/${num2} = ${num1 / num2}`);
} else if (opt === "%") {
  console.log(`${num1}%${num2} = ${num1 % num2}`);
}
