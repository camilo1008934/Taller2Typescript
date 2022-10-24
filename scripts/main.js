import { series } from "./data.js";
var seriesTBody = document.getElementById('series');
var seasonsDiv = document.getElementById('seasonsavg');
renderSeriesInTable(series);
averageSeasons(series);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th scope=\"row\">".concat(c.id, "</th>\n                           <td>").concat(c.nombre, "</td>\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.seasons, "</td>");
        seriesTBody.appendChild(trElement);
    });
}
function averageSeasons(series) {
    var average = 0;
    var numberSeries = 0;
    series.forEach(function (c) {
        average = average + c.seasons;
        numberSeries = numberSeries + 1;
    });
    average = average / numberSeries;
    var pElement = document.createElement("p");
    pElement.innerHTML = "Seasons Average: ".concat(average);
    ;
    seasonsDiv.appendChild(pElement);
}
