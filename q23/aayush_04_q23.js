$(document).ready(function () {
    $("#loadBtn").click(function () {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users/1",
            method: "GET",
            success: function (data) {
                $("#result").html(
                    "Name: " + data.name + "<br>" +
                    "Email: " + data.email + "<br>" +
                    "City: " + data.address.city
                );
            },
            error: function () {
                $("#result").text("Error loading data");
            }
        });
    });
});