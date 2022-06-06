$(function () {
  $(document).click(function (e) {
    var target = $(e.target);
    if (target.is($("a")) || target.closest("a").length) {
      DY.API("event", {
        name: "Metric: CTR on HP",
        properties: {},
      });
    }
  });
});
