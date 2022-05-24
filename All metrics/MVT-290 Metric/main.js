$(function () {
  var targetId = 1093682;
  if (if_test_running(targetId)) {
    DYO.waitForElement(
      ".dy-component .card.card-box",
      function () {
        $(".dy-component .card.card-box").click(function () {
          DY.API("event", {
            name: "MVT-290 Metric: click on tiles",
            properties: {},
          });
        });
      },
      1,
      100,
      10
    );
  } else {
    $(".card.card-box").click(function () {
      DY.API("event", {
        name: "MVT-290 Metric: click on tiles",
        properties: {},
      });
    });
  }
  function if_test_running(targetId) {
    var running_test =
      DYO.getUserObjectsAndVariations(); /* 获取在run的test列表 */
    for (let i in running_test) {
      var id = running_test[i].objectId;
      var variation = running_test[i].variations[0];
      if (
        id == targetId /* 要找的test */ &&
        variation != "do_nothing_action" /* 表示control */
      ) {
        return 1;
      }
    }
  }
});
