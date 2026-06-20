let countries = [
    "Nepal", "India", "China", "USA", "Canada",
    "Brazil", "Japan", "Germany", "France", "Italy",
    "Russia", "Australia", "Mexico", "Spain", "Argentina",
    "Egypt", "Kenya", "Nigeria", "Indonesia", "Thailand",
    "Vietnam", "Pakistan", "Bangladesh", "Sri Lanka", "Bhutan",
    "Malaysia", "Singapore", "Philippines", "South Korea", "North Korea",
    "Turkey", "Greece", "Portugal", "Netherlands", "Belgium",
    "Sweden", "Norway", "Finland", "Denmark", "Switzerland",
    "Austria", "Poland", "Ukraine", "Iran", "Iraq",
    "Saudi Arabia", "UAE", "Qatar", "Israel", "South Africa"
];

let table = document.getElementById("countryTable");
let row;

for (let i = 0; i < countries.length; i++) {
    if (i % 6 === 0) {
        row = table.insertRow();
    }
    let cell = row.insertCell();
    cell.textContent = countries[i];
}