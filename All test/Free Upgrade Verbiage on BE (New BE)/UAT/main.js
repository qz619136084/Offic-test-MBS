$(function () {
  var url = window.location.href;
  if (url.indexOf("uat.") > -1) {
    if (url.indexOf("/payment.html") > -1) {
      if (!$(".gr-upgraded-text").length) {
        var checkEl_1 = setInterval(function () {
          if ($(".roomInfoBlock .row.py_10").length) {
            $(".roomInfoBlock .row.py_10").after(
              "<div><p class='gr-upgraded-text' style='margin:0'>This is your room type after the free upgrade</p></div>"
            );
            clearInterval(checkEl_1);
          }
        }, 10);
      }
      if (!$(".upgraded-label").length) {
        var checkEl_2 = setInterval(function () {
          if ($(".roomInfoBlock .d_none:has(img)").length) {
            $(".roomInfoBlock .d_none:has(img)").append(
              "<div class='upgraded-label'>Upgraded</div>"
            );
            $(".roomInfoBlock .d_none:has(img)").css("position", "relative");
            clearInterval(checkEl_2);
          }
        }, 10);
      }
    } else if (url.indexOf("/confirmation.html") > -1) {
      if (!$(".gr-upgraded-text").length) {
        $(".room-detail-confirmation").each(function () {
          $(this)
            .next()
            .after(
              "<div><p class='gr-upgraded-text'>This is your room type after the free upgrade</p></div>"
            );
        });
      }
      if (!$(".upgraded-tip").length) {
        $(".room-detail-confirmation").each(function () {
          $(this)
            .next()
            .children(".card-title")
            .after("<div class='upgraded-tip'>Upgraded</div>");
        });
      }
    }
  }
});
