$(function () {
  DYO.waitForElementAsync(".dy-component+.component-section a").then(() => {
    $(".dy-component+.component-section a").click(function () {
      DY.API("event", {
        name: "MVT-341 Metric: Click on 'view more shows'",
        properties: {},
      });
    });
  });
});
 