function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let container = document.getElementById("container");

for (let i = 0; i <= 100; i++) {
    let span = document.createElement("span");
    span.textContent = i;

    if (isPrime(i)) {
        span.style.backgroundColor = "red";
    } else if (i % 2 === 0) {
        span.style.backgroundColor = "green";
    } else {
        span.style.backgroundColor = "yellow";
    }

    container.appendChild(span);
}