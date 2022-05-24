$(function () {
  DYO.waitForElement(
    "a.button_100113765",
    function () {
      $("a.button_100113765").click(function () {
        DY.API("event", {
          name: "MVT-304,MVT-323 Metric: CTR on banners",
          properties: {},
        });
      });
    },
    1,
    100
  );
});
