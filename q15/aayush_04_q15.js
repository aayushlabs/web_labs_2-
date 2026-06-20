let para = document.getElementById("para");

function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
}

function changeParagraphBg() {
    para.style.backgroundColor = "yellow";
}

function hideParagraph() {
    para.style.display = "none";
}

function showParagraph() {
    para.style.display = "block";
}

function increaseFont() {
    let size = parseInt(window.getComputedStyle(para).fontSize);
    para.style.fontSize = (size + 2) + "px";
}

function decreaseFont() {
    let size = parseInt(window.getComputedStyle(para).fontSize);
    para.style.fontSize = (size - 2) + "px";
}

function resetFont() {
    para.style.fontSize = "12pt";
}

function changeColor() {
    para.style.color = "red";
}