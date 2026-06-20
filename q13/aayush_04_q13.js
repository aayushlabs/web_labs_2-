function setCookie() {
    document.cookie = "username=Aayush; expires=" + 
        new Date(Date.now() + 86400000).toUTCString() + "; path=/";
    document.getElementById("output").textContent = "Cookie has been set!";
}

function readCookie() {
    document.getElementById("output").textContent = "Cookies: " + document.cookie;
}

function deleteCookie() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.getElementById("output").textContent = "Cookie has been deleted!";
}