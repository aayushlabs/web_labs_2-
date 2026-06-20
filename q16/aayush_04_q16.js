document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // a. Name validation - not empty, no numbers
    let name = document.getElementById("name").value;
    if (name.trim() === "" || /\d/.test(name)) {
        document.getElementById("nameError").textContent = "Name is required and must not contain numbers";
        isValid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // c. Username validation - no spaces/special chars except underscore
    let username = document.getElementById("username").value;
    let usernamePattern = /^[a-zA-Z0-9_]+$/;
    if (username.trim() === "" || !usernamePattern.test(username)) {
        document.getElementById("usernameError").textContent = "Invalid username";
        isValid = false;
    } else {
        document.getElementById("usernameError").textContent = "";
    }

    // d. Phone validation - only numbers, starts with 98/97/96
    let phone = document.getElementById("phone").value;
    let phonePattern = /^(98|97|96)[0-9]{8}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Invalid phone number";
        isValid = false;
    } else {
        document.getElementById("phoneError").textContent = "";
    }

    // e. Gender validation
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById("genderError").textContent = "Please select gender";
        isValid = false;
    } else {
        document.getElementById("genderError").textContent = "";
    }

    // f. Address validation
    let address = document.getElementById("address").value;
    if (address.trim() === "") {
        document.getElementById("addressError").textContent = "Address is required";
        isValid = false;
    } else {
        document.getElementById("addressError").textContent = "";
    }

    // g. Email validation
    let email = document.getElementById("email").value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // h. Password validation - 8 chars, 1 digit, 1 upper, 1 lower, 1 special
    let password = document.getElementById("password").value;
    let passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").textContent = "Password must be 8+ chars with upper, lower, digit, special char";
        isValid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    // i. Course selection validation
    let course = document.getElementById("course").value;
    if (course === "") {
        document.getElementById("courseError").textContent = "Please select a course";
        isValid = false;
    } else {
        document.getElementById("courseError").textContent = "";
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});