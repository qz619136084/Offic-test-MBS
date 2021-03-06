$(function () {
  DYO.waitForElement(
    ".tripadvisor-review-small .collapse-toggle",
    function () {
      $(".tripadvisor-review-small .collapse-toggle span").click(function () {
        if ($(this).closest("a.collapsed").length) {
          DY.API("event", {
            name: "MVT-264 Metric: Click on 'Show more'",
            properties: {},
          });
        }
      });
    },
    1,
    100
  );
  DYO.waitForElement(
    ".col-md-12.mt-3 a.external",
    function () {
      $(".col-md-12.mt-3 a.external").click(function () {
        DY.API("event", {
          name: "MVT-264 Metric: Click on 'View more review'",
          properties: {},
        });
      });
    },
    1,
    100
  );
  DYO.waitForElement(
    ".tripadvisor-review-small .view-more-collapse a",
    function () {
      $(".tripadvisor-review-small .view-more-collapse a").click(function () {
        DY.API("event", {
          name: "MVT-264 Metric: read full review",
          properties: {},
        });
      });
    },
    1,
    100
  );
});
