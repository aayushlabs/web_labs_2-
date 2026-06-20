$(document).ready(function () {
    $(".thumbnail").click(function () {
        let newSrc = $(this).attr("src");
        $("#mainImage").attr("src", newSrc);
    });
});