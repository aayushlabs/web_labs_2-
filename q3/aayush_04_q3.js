let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

if (num1 > num2) {
    document.getElementById("output").innerHTML =
        "Larger: " + num1 + "<br>Smaller: " + num2;
} else {
    document.getElementById("output").innerHTML =
        "Larger: " + num2 + "<br>Smaller: " + num1;
}