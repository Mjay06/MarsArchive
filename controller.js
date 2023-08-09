import { model, fetchdata, fetchsearch } from "./model.js";
import view from "./view.js";
import searchview from "./searchview.js";


const elementToScrollFrom = document.querySelector(".hero__main__btn");
const elementToScrollTo = document.querySelector(".recentpic");
const navbar = document.querySelector(".hero__head__navres");
const navtoggle = document.querySelector(".navmobile");
const navtext = document.querySelectorAll(".navmobile__text");
Array.from(navtext).forEach((nav) => {
  nav.addEventListener("click", function () {
    navtoggle.style.display = "none";
  });
});
navbar.addEventListener("click", function () {
  if (navtoggle.style.display === "flex") {
    navtoggle.style.display = "none";
  } else {
    navtoggle.style.display = "flex";
  }
});

elementToScrollFrom.addEventListener("click", function () {
  elementToScrollTo.scrollIntoView({ behavior: "smooth" });
});

let slides = document.querySelectorAll(".recentpic__slide__container__slides");

async function controltodaydata() {
  await fetchdata();
  let dataRecieved =
      model.todaysdata.photos.length !== 0
        ? model.todaysdata.photos.splice(1, 10)
        : model.incasedata.photos.splice(11,40)

  view.rendersliderimg(dataRecieved);
  slides = document.querySelectorAll(".recentpic__slide__container__slides");
  gotoslide(0);
}

let count = 0;
function gotoslide(count) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${i * 100 - Number(count) * 100}%) `;
  });

}

function controlSlider() {
  function nextslide() {
    if (count === slides.length - 1) {
      count = 0;
      gotoslide(count);

      return;
    }
    count++;
    gotoslide(count);
  }
  function prevslide() {
    if (count === 0) {

      count = slides.length - 1;
      gotoslide(slides.length - 1);

      return;
    }
    count--;
    gotoslide(count);
  }
  view.addSwitchHandler(prevslide, nextslide);
}

async function search(date, cameraType) {
  searchview.renderloader();
  await fetchsearch(date, cameraType);

  if (model.searchdata.photos.length === 0) {
    searchview.renderfailedsearch();
    return;
  }
  searchview.renderSearch(model.searchdata.photos);
}

searchview.handlesubmit(search);

function init() {
  controltodaydata();
  controlSlider();
}

init();
