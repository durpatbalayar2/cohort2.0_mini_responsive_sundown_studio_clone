const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

let elemC = document.querySelector("#elem-container");

let fixed_img = document.querySelector("#fixed-img");

elemC.addEventListener("mouseenter", function () {
  fixed_img.style.display = "block";
});

elemC.addEventListener("mouseleave", function () {
  fixed_img.style.display = "none";
});

var elems = document.querySelectorAll("#elem");

elems.forEach(function (val) {
  val.addEventListener("mouseenter", function () {
    let img = val.getAttribute("data-img");
    fixed_img.style.backgroundImage = `url(${img})`;
  });
});

// Sweeper JS

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 100,
  
  });
}

function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4200);
}


swiperAnimation();
loaderAnimation();
