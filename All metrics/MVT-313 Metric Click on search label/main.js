$(function () {
  DYO.waitForElement(
    ".dy-filter-outer a",
    function () {
      $(".dy-filter-outer a").click(function () {
        DY.API("event", {
          name: "MVT-313 Metric: Click on search label",
          properties: {},
        });
      });
    },
    1,
    100,
    30
  );
});
