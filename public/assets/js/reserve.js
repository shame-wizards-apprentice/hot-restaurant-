$(document).ready(() => {
    $("#reserve-form").submit(event => {
        event.preventDefault();

        $.post("/api/reserve", {name: $("#input-name").val(),phone: $("#input-phone").val(),email: $("#input-email").val()})
    });
});