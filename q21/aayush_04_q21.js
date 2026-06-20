$(document).ready(function () {
    $("#animateBtn").click(function () {
        $("#animateBox").animate({
            left: "300px",
            width: "200px"
        }, 1000);
    });
});