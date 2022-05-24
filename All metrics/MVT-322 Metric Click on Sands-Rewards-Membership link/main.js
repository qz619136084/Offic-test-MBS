$(function () {
  setTimeout(function () {
    var n = 0,
      e = DYO.getUserObjectsAndVariations();
    for (let i in e) {
      var t = e[i].objectId,
        o = e[i].variations[0];
      1094124 == t && "do_nothing_action" != o && (n = 1);
    }
    if (n)
      var i = setInterval(function () {
        $(".dy-srl-component.mvt-266 a:not(.btn)").length &&
          ($(".dy-srl-component.mvt-266 a:not(.btn)").click(function () {
            DY.API("event", {
              name: "MVT-322 Metric: Click on Sands-Rewards-Membership link",
              properties: {},
            });
          }),
          clearInterval(i));
      }, 100);
    else
      i = setInterval(function () {
        ($(".notice-box-srl a:not(.btn)").length ||
          $(".notice-box a:not(.btn)").length) &&
          ($(".notice-box a:not(.btn)").click(function () {
            DY.API("event", {
              name: "MVT-322 Metric: Click on Sands-Rewards-Membership link",
              properties: {},
            });
          }),
          $(".notice-box-srl a:not(.btn)").click(function () {
            DY.API("event", {
              name: "MVT-322 Metric: Click on Sands-Rewards-Membership link",
              properties: {},
            });
          }),
          clearInterval(i));
      }, 100);
  }, 500);
});
