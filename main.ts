import {Serie} from "./Serie.js";
import {series} from "./data.js";

const seriesTBody: HTMLElement = document.getElementById('series')!;
const seasonsDiv: HTMLElement = document.getElementById('seasonsavg')!;
const serieImage: HTMLElement = document.getElementById('serieImage')!;
const serieTitle: HTMLElement = document.getElementById('serieTitle')!;
const serieDescription: HTMLElement = document.getElementById('serieDescription')!;
const serieUrl: HTMLElement = document.getElementById('serieUrl')!;

renderSeriesInTable(series);
averageSeasons(series);

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<th scope="row">${c.id}</th>
                           <td><button class="name-btn" id="btn-${c.id}">${c.nombre}</button></td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
    seriesTBody.appendChild(trElement);
    let button: HTMLElement = document.getElementById("btn-"+c.id)!;
    button.onclick = function(){
      applySerieFilter(c);
    };
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

function applySerieFilter(serie: Serie): void{
  clearCard();

  let image=document.createElement("img");
  image.src="./images/"+serie.id+".jpg";
  image.alt=serie.nombre;
  image.width=350;
  image.height=250;
  serieImage.appendChild(image);

  let title=document.createElement("h4");
  title.textContent=serie.nombre;
  serieTitle.appendChild(title);

  let description=document.createElement("p");
  description.textContent=serie.description;
  serieDescription.appendChild(description);

  let url=document.createElement("a");
  url.href=serie.url;
  url.className="btn btn-primary";
  url.target="_black";
  url.textContent="Visitar pagina";
  serieUrl.appendChild(url);

}

function clearCard():void{
  if (serieImage.lastChild != null){
    serieImage.removeChild(serieImage.lastChild);
  }

  if (serieTitle.lastChild != null){
    serieTitle.removeChild(serieTitle.lastChild);
  }

  if (serieDescription.lastChild != null){
    serieDescription.removeChild(serieDescription.lastChild);
  }

  if (serieUrl.lastChild != null){
    serieUrl.removeChild(serieUrl.lastChild);
  }

}