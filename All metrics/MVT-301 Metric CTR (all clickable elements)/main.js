$(function () {
  $(window).click(function (e) {
    var target = $(e.target);
    if (
      target.is($("a:not([data-toggle])")) ||
      target.closest("a:not([data-toggle])").length
    ) {
      DY.API("event", {
        name: "MVT-301 Metric: CTR (all clickable elements)",
        properties: {},
      });
    }
  });
});
