$("head").append("<style>body.noFlicker .day-rate{opacity:0}</style>");
$(".date-selector").click(function () {
  new Promise((resolve) => {
    var check = setInterval(() => {
      if ($(".loading").css("display") == "none") {
        resolve();
        clearInterval(check);
      }
    }, 100);
  }).then(() => {
    updateCalendarWidget(1);
    //update text;
    $(".datepicker-range-top span").text(
      "Rates shown in S$ inclusive of GST and charges"
    );
  });
});
$(document).mousedown(() => {
  $(document).mouseup((e) => {
    if ($(e.target).closest(".datepicker-container").length) {
      updateCalendarWidget();
    }
    $(document).unbind("mouseup");
  });
});
function updateCalendarWidget(show) {
  $("body").addClass("noFlicker");
  new Promise((resolve) => {
    var check = setInterval(() => {
      if (!$(".ui-datepicker-group").hasClass("updated")) {
        resolve();
        clearInterval(check);
      }
    }, 10);
  }).then(() => {
    $(".day-rate").each(function () {
      var currency = $(this).text().trim().slice(0, 2);
      var oldPrice = $(this).text().trim().slice(2);
      if (oldPrice.length && /[0-9]+/.test($(this).text().trim())) {
        var newPrice = (oldPrice * 1.177).toFixed();
        $(this).text(currency + newPrice);
      }
    });
    $(".ui-datepicker-group").addClass("updated");
    $("body").removeClass("noFlicker");
  });
  if (show) {
    $("body").removeClass("noFlicker");
  }
}
