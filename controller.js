import { model, fetchdata, fetchsearch } from "./model.js";
import view from "./view.js";
import searchview from "./searchview.js"
console.log(view);

let slides = document.querySelectorAll(".recentpic__slide__container__slides");
console.log(slides);
async function controltodaydata() {
  await fetchdata();
  view.rendersliderimg(model.todaysdata.photos.splice(1, 10));
  slides = document.querySelectorAll(".recentpic__slide__container__slides");
  gotoslide(0);
}

let count = 0;
function gotoslide(count) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${i * 100 - Number(count) * 100}%) `;
  });
  console.log("worked");
}


function controlSlider() {
  function nextslide() {
    if (count === slides.length - 1) {
      count = 0;
      gotoslide(count);
      console.log("working next");
      return;
    }
    count++;
    gotoslide(count);
  }
  function prevslide() {
    if (count === 0) {
      console.log(slides.length);
      count = slides.length - 1;
      gotoslide(slides.length - 1);
      console.log("working prev");
      return;
    }
    count--;
    gotoslide(count);
  }
  view.addSwitchHandler(prevslide, nextslide);
}


async function search(date, cameraType){
  await fetchsearch(date, cameraType)
  console.log(model.searchdata)
  searchview.renderSearch(model.searchdata.photos)
}
searchview.handlesubmit(search)

function init() {
  controltodaydata();
  controlSlider()
}

init();
