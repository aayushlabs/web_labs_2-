function calculateAge() {
    let birthYear = Number(document.getElementById("birthYear").value);
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    document.getElementById("result").innerHTML = "Your Age: " + age + " years";
}