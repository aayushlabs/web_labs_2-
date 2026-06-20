let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;

document.getElementById("output").innerHTML =
    "Addition: " + addition + "<br>" +
    "Subtraction: " + subtraction + "<br>" +
    "Multiplication: " + multiplication + "<br>" +
    "Division: " + division;