// a. Select first paragraph using querySelector(tagname)
let firstByTag = document.querySelector("p");
console.log("By tagname:", firstByTag.textContent);

// b. Select paragraph using querySelector('#id')
let firstById = document.querySelector("#first");
console.log("By id:", firstById.textContent);

// c. Select all paragraphs using querySelectorAll(tagname)
let allParagraphs = document.querySelectorAll("p");
console.log("Total paragraphs:", allParagraphs.length);

// d. Loop through nodeList and get text content of each paragraph
allParagraphs.forEach(function (p) {
    console.log("Text:", p.textContent);
});

// e. Set text content to fourth paragraph
allParagraphs[3].textContent = "Fourth Paragraph - Updated";

// f. Set id and class attribute for all paragraphs using different methods
allParagraphs[0].id = "para1";
allParagraphs[1].setAttribute("id", "para2");
allParagraphs[2].className = "para3";
allParagraphs[3].setAttribute("class", "para4");

// g. Change style of each paragraph
allParagraphs[0].style.color = "blue";
allParagraphs[1].style.background = "yellow";
allParagraphs[2].style.border = "1px solid black";
allParagraphs[3].style.fontSize = "20px";

// h. Select all paragraphs, give 1st and 3rd green, 2nd and 4th red
allParagraphs.forEach(function (p, index) {
    if (index === 0 || index === 2) {
        p.style.color = "green";
    } else {
        p.style.color = "red";
    }
});

// i. Set text content, id and class to each paragraph
allParagraphs.forEach(function (p, index) {
    p.textContent = "Paragraph " + (index + 1) + " - Final Text";
    p.id = "p" + (index + 1);
    p.className = "paragraph-item";
});