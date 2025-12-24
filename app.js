let elemC = document.querySelector("#elem-container");
let fixed_img = document.querySelector("#fixed-img");

// Fixed image hover effect
if (elemC && fixed_img) {
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
}

// Hamburger menu toggle
const hamburger = document.querySelector("#hamburger");
const navItems = document.querySelector(".nav-items");

if (hamburger && navItems) {
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navItems.classList.toggle("active");
  });
}

// Swiper JS
function swiperAnimation() {
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: isMobile ? 1.2 : isTablet ? 2 : "auto",
    centeredSlides: false,
    spaceBetween: isMobile ? 20 : isTablet ? 50 : 100,
    freeMode: true,
  });
}

// Loader and Locomotive Scroll
function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
    
   
    setTimeout(function () {
      const mainEl = document.querySelector("#main");
      if (mainEl && window.innerWidth > 1024) {
        scroll = new LocomotiveScroll({
          el: mainEl,
          smooth: true,
        });
      }
    }, 500);
  }, 4200);
}

swiperAnimation();
loaderAnimation();

