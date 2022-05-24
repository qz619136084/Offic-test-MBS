$(function () {
  DYO.waitForElement(
    ".option-box-container .dy-btn.compare-btn",
    function () {
      $(".option-box-container .dy-btn.compare-btn").click(function () {
        $(".tb2 th:gt(0) a").click(function () {
          DY.API("event", {
            name: "MVT-309 Metric: Click on room link",
            properties: {},
          });
        });
      });
    },
    1,
    100
  );
});
