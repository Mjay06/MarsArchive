class showtodayspic {
  parentEL = document.querySelector(".recentpic__slide__container");
  switcher = document.querySelector(".switcher");
  data;
  rendersliderimg(data) {
    this.data = data;

    this.parentEL.innerHTML = "";
    const html = data
      .map((datum) => {
        return `<div class="recentpic__slide__container__slides">
     <img
       src="${datum.img_src}"
       alt=""
     />
     <div class="recentpic__slide__container__slides__text">
       <h4>taken by the ${datum.camera.full_name} on ${datum.earth_date}</h4>  
       <h4>Rover name: ${datum.rover.name}</h4>
       <h4>Launch Date: ${datum.rover.landing_date}</h4>
       <h4>Landing Date: ${datum.rover.launch_date}</h4>
       <h4 style="color: green">Status: ${datum.rover.status}</h4>
     </div>
   </div>
     `;
      })
      .join("");
    this.parentEL.insertAdjacentHTML("afterbegin", html);
  }
  addSwitchHandler(lefthandler, righthandler) {
    this.switcher.addEventListener("click", function (e) {
      if (e.target.classList.contains("btnleft")) {
        righthandler();
      } else if (e.target.classList.contains("btnright")) {
        lefthandler();
      }
    });
  }
}

export default new showtodayspic();
