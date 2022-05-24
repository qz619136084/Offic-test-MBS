$(function () {
  $(".room_filters_dropdown").mousedown(function () {
    $(this).mouseup(function () {
      if ($(this).find("ul").css("display") == "none") {
        DY.API("event", {
          name: "MVT-215 Metric: Click on filter",
          properties: {},
        });
      }
      $(this).unbind("mouseup");
    });
  });
  $(".currency_dropdown").mousedown(function () {
    $(this).mouseup(function () {
      if ($(this).find("ul").css("display") == "none") {
        DY.API("event", {
          name: "MVT-215 Metric: Click on filter",
          properties: {},
        });
      }
      $(this).unbind("mouseup");
    });
  });
  $("body").on("click", ".filter_box_mobile", function () {
    DY.API("event", {
      name: "MVT-215 Metric: Click on filter",
      properties: {},
    });
  });
});
