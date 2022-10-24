import {Serie} from "./Serie.js";
import {series} from "./data.js";

const seriesTBody: HTMLElement = document.getElementById('series')!;
const seasonsDiv: HTMLElement = document.getElementById('seasonsavg')!;

renderSeriesInTable(series);
averageSeasons(series);


function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<th scope="row">${c.id}</th>
                           <td>${c.nombre}</td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
    seriesTBody.appendChild(trElement);
  });
}

function averageSeasons(series: Serie[]): void{
    let average: number =0;
    let numberSeries: number=0;
    series.forEach(c => {
        average=average+c.seasons;
        numberSeries=numberSeries+1;
      });
    average=average/numberSeries;
    let pElement = document.createElement("p");
    pElement.innerHTML=`Seasons Average: ${average}`;;
    seasonsDiv.appendChild(pElement);
}