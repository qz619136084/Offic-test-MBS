$(function () {
  DYO.waitForElement(
    ".dy-shopify-section .swiper-button-next",
    function () {
      $(".dy-shopify-section .swiper-button-next").click(function () {
        DY.API("event", {
          name: "MVT-301 Metric: Click on 'next-btn' arrow on shopify section",
          properties: {},
        });
      });
    },
    1,
    100
  );
});
