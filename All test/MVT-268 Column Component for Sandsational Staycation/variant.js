$(function () {
  $("body").addClass("dy-column");
  var waitLoading = setInterval(function () {
    if (!$(".details-block-body+.column-content.offers:has(.loading)").length) {
      var html = $(".details-block-body+.column-content.offers").prop(
        "outerHTML"
      );
      $(".details-block-body+.column-content.offers").remove();
      $(".details-block-body ul:eq(2) li:eq(0) ul").prop("outerHTML", html);
      var swiper = new Swiper("ul .column-content.offers .swiper-container", {
        effect: "slide",
        preloadImages: false,
        lazy: false,
        autoHeight: false,
        centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: $(".column-content.offers .swiper-container").find(
            ".swiper-pagination:eq(0)"
          ),
          clickable: true,
        },
        navigation: {
          prevEl: $(".swiper-nav-buttons .swiper-button-prev"),
          nextEl: $(".swiper-nav-buttons .swiper-button-next"),
        },
        breakpoints: {
          768: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        },
      });

      clearInterval(waitLoading);
    }
  }, 100);
});
