$(function () {
  DYO.waitForElement(
    ".search-filters",
    function () {
      $(".search-filters").click(function () {
        DY.API("event", {
          name: "MVT-313 Metric: Click on search label",
          properties: {},
        });
      });
    },
    1,
    100,
    10
  );
});
