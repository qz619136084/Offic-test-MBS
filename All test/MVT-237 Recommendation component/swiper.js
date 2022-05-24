var swiper = new Swiper(".dy-component .swiper-container", {
  effect: "slide",
  preloadImages: false,
  lazy: false,
  autoHeight: false,
  centeredSlides: false,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: $(".dy-component").find(".swiper-pagination:eq(0)"),
    clickable: true,
  },
  navigation: {
    nextEl: $(".dy-component .swiper-button-next"),
    prevEl: $(".dy-component .swiper-button-prev"),
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  },
});
