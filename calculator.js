// Define the numbers and the operation here

// Write if-statements here


const num1 = prompt("Enter First Number");
const opt = prompt("Enter Operation");
const num2 = prompt("Enter Second Number");


if(opt === "+"){
  console.log(`${num1}+${num2} = ${parseInt(num1) +parseInt (num2)}`);
}else if(opt === "-"){
  console.log(`${num1}-${num2} = ${parseInt(num1) -parseInt (num2)}`);
}else if(opt === "*"){
  console.log(`${num1}*${num2} = ${parseInt(num1) *parseInt (num2)}`);
}