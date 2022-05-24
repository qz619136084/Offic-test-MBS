$(function () {
  setTimeout(function () {
    if ($("body.dy-column").length) {
      var waitEl = setInterval(function () {
        if ($("h3+.column-content.offers").length) {
          $("h3+.column-content.offers .card-link").click(function () {
            DY.API("event", {
              name: "MVT-268 Metric: Click on card link",
              properties: {},
            });
          });
          clearInterval(waitEl);
        }
      }, 100);
    } else {
      $("h3:contains(MORE PERKS)+ul a").click(function () {
        DY.API("event", {
          name: "MVT-268 Metric: Click on card link",
          properties: {},
        });
      });
    }
  }, 500);
});
