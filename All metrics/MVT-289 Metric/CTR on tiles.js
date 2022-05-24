$(function () {
  bindClick();
  $(".dropdown-menu-filter .checkbox input").click(function () {
    setTimeout(function () {
      bindClick();
    }, 330);
  });
  $(".dropdown-menu-filter .filter-clear").click(function () {
    setTimeout(function () {
      bindClick();
    }, 330);
  });
  function bindClick() {
    DYO.waitForElement(
      ".dy-new-layout .card-footer a",
      function () {
        $(".dy-new-layout .card-footer a").click(function () {
          DY.API("event", {
            name: "MVT-289 Metric: CTR on tiles",
            properties: {},
          });
        });
        $(".dy-new-layout").click(function () {
          DY.API("event", {
            name: "MVT-289 Metric: CTR on tiles",
            properties: {},
          });
        });
        $(".dy-new-layout a:contains(See more)").click(function () {
          DY.API("event", {
            name: "MVT-289 Metric: Click on 'See more'",
            properties: {},
          });
        });
      },
      1,
      100
    );
  }
});
