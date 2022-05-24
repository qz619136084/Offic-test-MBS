$(function () {
  $("body").on("click", ".dy-new-layout", function () {
    DY.API("event", {
      name: "MVT-288 Metric: Click on card tiles",
      properties: {},
    });
  });
});
