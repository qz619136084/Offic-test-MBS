$(function () {
  setTimeout(() => {
    if ($("body.dy-combined-filter").length) {
      //variant
      //mobile
      DYO.waitForElementAsync(".dy-filter-btn").then(() => {
        $(".dy-filter-btn").click(() => {
          bind("#filter_moible .dy-updated-filter input");
        });
      });
      //desktop
      bind("#main_container .dy-updated-filter input");
    } else {
      //control
      //mobile
      DYO.waitForElementAsync(".dy-filter-btn").then(() => {
        $(".dy-filter-btn").click(() => {
          bind("#filter_moible .room_filters_dropdown .dropdown_a+ul li");
        });
      });
      //desktop
      bind(".filter_box_left .dropdown_a+ul li");
    }
  }, 300);
  function bind(el) {
    DYO.waitForElementAsync(el).then(() => {
      $(el).click(function () {
        console.log("click");
        DY.API("event", {
          name: "MVT-348 Metric: Click on room types checkbox",
          properties: {},
        });
      });
    });
  }
});
