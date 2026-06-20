$(document).ready(function () {

    $("#hideBtn").click(function () {
        $("#box").hide();
    });

    $("#showBtn").click(function () {
        $("#box").show();
    });

    $("#toggleBtn").click(function () {
        $("#box").toggle();
    });

    $("#slideUpBtn").click(function () {
        $("#box").slideUp();
    });

    $("#slideDownBtn").click(function () {
        $("#box").slideDown();
    });

    $("#cssBtn").click(function () {
        $("#box").css("background-color", "orange");
    });

});