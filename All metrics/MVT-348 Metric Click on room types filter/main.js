$(function () {
  setTimeout(() => {
    if ($("body.dy-combined-filter").length) {
      console.log("variant");
      //variant
      DYO.waitForElementAsync(".filter_box_left .dropdown_a", 3).then(() => {
        $(".filter_box_left .dropdown_a").click(() => {
          console.log("click");
          DY.API("event", {
            name: "MVT-348 Metric: Click on room types filter",
            properties: {},
          });
        });
      });
    } else {
      //control
      console.log("control");
      DYO.waitForElementAsync(".filter_box_left .dropdown_a", 2).then(() => {
        $(".filter_box_left .dropdown_a").click(() => {
          console.log("click");
          DY.API("event", {
            name: "MVT-348 Metric: Click on room types filter",
            properties: {},
          });
        });
      });
    }
  }, 300);
});
