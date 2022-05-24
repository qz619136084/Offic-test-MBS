$(function () {
  var targetId = 1099135;
  if (if_test_running(targetId)) {
    DYO.waitForElement(
      ".dy-component a",
      function () {
        $(".dy-component a").click(function (e) {
          DY.API("event", {
            name: "MVT-341 Metric: Click on shows CTA",
            properties: {},
          });
        });
      },
      1,
      100
    );
  } else {
    DYO.waitForElement(
      ".column-content.offers a",
      function () {
        $(".column-content.offers a").click(function (e) {
          DY.API("event", {
            name: "MVT-341 Metric: Click on shows CTA",
            properties: {},
          });
        });
      },
      1,
      100
    );
  }
});
function if_test_running(targetId) {
  var running_test = DYO.getUserObjectsAndVariations();
  for (let i in running_test) {
    var id = running_test[i].objectId;
    var variation = running_test[i].variations[0];
    if (id == targetId && variation != "do_nothing_action") {
      return 1;
    }
  }
}
