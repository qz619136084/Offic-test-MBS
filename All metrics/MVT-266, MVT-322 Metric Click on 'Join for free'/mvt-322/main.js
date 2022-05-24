$(function () {
  setTimeout(function () {
    var mvt_266_in = 0;
    var running_test = DYO.getUserObjectsAndVariations();
    for (let i in running_test) {
      var id = running_test[i].objectId;
      var variation = running_test[i].variations[0];
      if (id == 1094124 && variation != "do_nothing_action") {
        mvt_266_in = 1;
      }
    }
    if (mvt_266_in) {
      var waitEl = setInterval(function () {
        if ($(".dy-srl-component.mvt-266 a.btn").length) {
          $(".dy-srl-component.mvt-266 a.btn").click(function () {
            DY.API("event", {
              name: "MVT-322 Metric: Click on 'Join for free' button",
              properties: {},
            });
          });
          clearInterval(waitEl);
        }
      }, 100);
    }
  }, 300);
});
