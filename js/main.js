//MAIN HEADER
//SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input"); // 범위를 좁혀서 선택
const searchIcon = searchEl.querySelector("span");

searchEl.addEventListener("click", function () {
  if (searchInputEl.classList.contains("search-trans")) {
    searchInputEl.blur();
    return;
  }
  searchInputEl.classList.add("search-trans");
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합 검색");
});

searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
  searchInputEl.classList.remove("search-trans");
});

//SWIPER
//SWIPER NOTICE
const swiperNotice = new Swiper(
  ".notice .notice-line .inner .inner__left .swiper",
  {
    direction: "vertical",
    loop: true,
    autoplay: true,
  }
);

//SWIPER PROMOTION
const swiperPromotion = new Swiper(".notice .promotion .swiper", {
  direction: "horizontal", //default
  slidesPerView: 3, //한번에 보여줄 아이템 수
  spaceBetween: 10, // 아이템 간 거리
  centeredSlides: true, // 슬라이드 센터 여부
  loop: true,
  touchRatio: 0,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

//SWIPER Autoplay 컨트롤
function controlAutoPlay() {
  if (swiperPromotion.autoplay.running === false) {
    swiperPromotion.autoplay.start();
  } else {
    swiperPromotion.autoplay.stop();
  }
}

//SWIPER TOGGLE
const promotionSection = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion");

promotionToggleBtn.addEventListener("click", function () {
  if (promotionSection.classList.contains("hide")) {
    promotionSection.classList.remove("hide");
    promotionToggleBtn.classList.add("show");
  } else {
    promotionSection.classList.add("hide");
    promotionToggleBtn.classList.remove("show");
  }
});

//ANIMATION
window.onload = function () {
  const visualSection = document.querySelector(".visual");
  visualSection.classList.add("animate");
};

//ANIMATION SCROLL
//ELSALVADOR
window.addEventListener("scroll", function () {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    const elsalvadorSection = document.querySelector(".elsalvador");
    elsalvadorSection.classList.add("animate");
  }

  if (window.scrollY > 500) {
    const ethiopiaSection = document.querySelector(".ethiopia");
    ethiopiaSection.classList.add("animate");
  }

  if (window.scrollY > 1000) {
    const favoriteSection = document.querySelector(".favorite");
    favoriteSection.classList.add("animate");
  }

  if (window.scrollY > 1870) {
    const magazineSection = document.querySelector(".magazine");
    magazineSection.classList.add("animate");
  }

  if (window.scrollY > 2260) {
    const storeSection = document.querySelector(".store");
    storeSection.classList.add("animate");
  }
});
