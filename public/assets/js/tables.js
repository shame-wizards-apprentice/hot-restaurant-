$(document).ready(() => {
    // get existing reservations
    $.get("/api/reserve").then(data => displayRes(data, "Table", $("#res-list")));
    $.get("/api/wait").then(data => displayRes(data, "Wait", $("#wait-list")));
});

function displayRes(resDatas, titleText, listEl) {
    resDatas.forEach((resData, i) => {
        const resEl = $("<li>").addClass("list-group-item");
        resEl.data(resData);
        resEl.append($("<h3>").text(`${titleText} #${i + 1}`));
        resEl.append($("<hr>"));
        resEl.append($("<h4>").text(`Name: ${resData.name}`));
        resEl.append($("<h4>").text(`Phone: ${resData.phone}`));
        resEl.append($("<h4>").text(`Email: ${resData.email}`));
        listEl.append(resEl);
    });
}