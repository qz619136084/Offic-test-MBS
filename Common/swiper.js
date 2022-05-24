//Referring to HomePage
var swiper = new Swiper("#gallerySliderContainer", {
  effect: "slide",
  preloadImages: false,
  lazy: false,
  autoHeight: false,
  centeredSlides: false,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: $("#gallerySliderContainer").find(".swiper-pagination:eq(0)"),
    clickable: true,
  },
  navigation: {
    nextEl: $(".gallery-slider .swiper-button-next"),
    prevEl: $(".gallery-slider .swiper-button-prev"),
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  },
});
