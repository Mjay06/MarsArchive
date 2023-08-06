class searchpicView {
  parentEl = document.querySelector(".searchPic__results");
  formdatasearch = document.querySelector(".searchPic__form");

  renderSearch(data) {
    this.parentEl.innerHTML = "";
    const html = data
      .map((datum) => {
        return `
        <div class="searchPic__results__result">
        <div class="searchPic__results__img">
          <img src="${datum.img_src}" alt="" />
          <div class="searchPic__results__description">
            taken by the ${datum.camera.full_name} on ${datum.earth_date}
          </div>
        </div>
        <div class="searchPic__results__info">
          <h4 class="searchPic__results__info__text">
            Rover name: ${datum.rover.name}
          </h4>
          <h4 class="searchPic__results__info__text">
            Launch Date:  ${datum.rover.landing_date}
          </h4>
          <h4 class="searchPic__results__info__text">
            Landing Date: ${datum.rover.launch_date}
          </h4>
          <h4 style="color: green" class="searchPic__results__info__text">
            Status: ${datum.rover.status}
          </h4>
        </div>
      </div>
        `;
      })
      .join("");
    console.log("cool")
    console.log(html)
    this.parentEl.insertAdjacentHTML("afterbegin", html);
  }

  handlesubmit(search) {
    this.formdatasearch.addEventListener("submit", function (e) {
      e.preventDefault();
      let date = document.querySelector(".searchPic__form__date").value;
      let cameraType = document.querySelector(".searchPic__form__select").value;
      search(date, cameraType);
    });
  }
}

export default new searchpicView();
