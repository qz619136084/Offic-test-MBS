$(function () {
  DYO.waitForElement(
    ".textlink a.btn-primary",
    function () {
      $(".textlink a.btn-primary").click(function () {
        DY.API("event", {
          name: "MVT-285 Metric: Click on 'Buy Tickets' button",
          properties: {},
        });
        DY.API("event", {
          name: "MVT-285 Metric: Click on buttons",
          properties: {},
        });
      });
    },
    1,
    100,
    30
  );
  DYO.waitForElement(
    ".textlink a:not(.btn-primary)",
    function () {
      $(".textlink a:not(.btn-primary)").click(function () {
        DY.API("event", {
          name: "MVT-285 Metric: Click on 'View Detail' button",
          properties: {},
        });
        DY.API("event", {
          name: "MVT-285 Metric: Click on buttons",
          properties: {},
        });
      });
    },
    1,
    100,
    30
  );
});
