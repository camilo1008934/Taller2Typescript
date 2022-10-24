import { series } from "./data.js";
var seriesTBody = document.getElementById('series');
var seasonsDiv = document.getElementById('seasonsavg');
var serieImage = document.getElementById('serieImage');
var serieTitle = document.getElementById('serieTitle');
var serieDescription = document.getElementById('serieDescription');
var serieUrl = document.getElementById('serieUrl');
var serieDefault = series[0];
applySerieFilter(serieDefault);
renderSeriesInTable(series);
averageSeasons(series);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th scope=\"row\">".concat(c.id, "</th>\n                           <td><button class=\"name-btn\" id=\"btn-").concat(c.id, "\">").concat(c.nombre, "</button></td>\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.seasons, "</td>");
        seriesTBody.appendChild(trElement);
        var button = document.getElementById("btn-" + c.id);
        button.onclick = function () {
            applySerieFilter(c);
        };
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
function applySerieFilter(serie) {
    clearCard();
    var image = document.createElement("img");
    image.src = "./images/" + serie.id + ".jpg";
    image.alt = serie.nombre;
    image.width = 350;
    image.height = 250;
    serieImage.appendChild(image);
    var title = document.createElement("h4");
    title.textContent = serie.nombre;
    serieTitle.appendChild(title);
    var description = document.createElement("p");
    description.textContent = serie.description;
    serieDescription.appendChild(description);
    var url = document.createElement("a");
    url.href = serie.url;
    url.className = "btn btn-primary";
    url.target = "_black";
    url.textContent = "Visitar pagina";
    serieUrl.appendChild(url);
}
function clearCard() {
    if (serieImage.lastChild != null) {
        serieImage.removeChild(serieImage.lastChild);
    }
    if (serieTitle.lastChild != null) {
        serieTitle.removeChild(serieTitle.lastChild);
    }
    if (serieDescription.lastChild != null) {
        serieDescription.removeChild(serieDescription.lastChild);
    }
    if (serieUrl.lastChild != null) {
        serieUrl.removeChild(serieUrl.lastChild);
    }
}
