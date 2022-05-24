$(function () {
  //CTR for recommendation;
  DYO.waitForElement(".dy-component .card-footer p a", function () {
    $(".dy-component .card-footer p a").click(function () {
      DY.API("event", {
        name: "MVT-237 Metric: CTR (recommendation)",
        properties: {},
      });
    });
  });
  //CTR for overall;
  $(window).click(function (e) {
    if (
      !$(e.target).is($("a[data-toggle=tab]")) &&
      ($(e.target).is($("a")) || $(e.target).parents("a").length)
    ) {
      DY.API("event", {
        name: "MVT-237 Metric: CTR (all clickable elements)",
        properties: {},
      });
    }
  });
});
