$(function () {
  var url = window.location.href;
  if (url.indexOf("/restaurants/view-all.html") > -1) {
    //control
    DYO.waitForElement(
      ".listing-content-item .card",
      function () {
        $(".listing-content-item .card").click(function () {
          DY.API("event", {
            name: "MVT-306 Metric: Click on CTA to restaurant details page",
            properties: {},
          });
        });
      },
      4
    );
    //CTR for all clickable elements (except which on navbar)
    $(window).click(function (e) {
      var target = $(e.target);
      if (target.is($("a")) || target.closest("a").length) {
        DY.API("event", {
          name: "MVT-306 Metric: CTR (all clickable elements)",
          properties: {},
        });
      }
    });
  } else if (url.indexOf("/restaurants/rooftop-dining.html") > -1) {
    //variant
    DYO.waitForElement(
      ".card-box .card-footer a.btn-secondary",
      function () {
        $(".card-box .card-footer a.btn-secondary").click(function () {
          DY.API("event", {
            name: "MVT-306 Metric: Click on CTA to restaurant details page",
            properties: {},
          });
        });
      },
      1
    );
    //CTR for all clickable elements (except which on navbar)
    $(window).click(function (e) {
      var target = $(e.target);
      if (target.is($(".card-box a")) || target.is($("a.btn-block"))) {
        DY.API("event", {
          name: "MVT-306 Metric: CTR (all clickable elements)",
          properties: {},
        });
      }
    });
  }
});
