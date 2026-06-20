let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let num3 = Number(prompt("Enter third number:"));

let largest = num1;
let smallest = num1;

if (num2 > largest) largest = num2;
if (num3 > largest) largest = num3;

if (num2 < smallest) smallest = num2;
if (num3 < smallest) smallest = num3;

document.getElementById("output").innerHTML =
    "Largest: " + largest + "<br>Smallest: " + smallest;