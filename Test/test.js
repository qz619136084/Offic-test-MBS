$(".date-selector").click(() => {
  if (!$(this).hasClass("updated")) {
    new Promise((resolve) => {
      var check = setInterval(() => {
        if ($(".loading").css("display") == "none") {
          resolve();
          clearInterval(check);
        }
      }, 100);
    }).then(() => {
      updateCalendarWidget();
      $(".date-selector").addClass("updated");
    });
  }
});
$(document).mousedown(() => {
  $(document).mouseup((e) => {
    if ($(e.target).closest(".datepicker-container").length) {
      updateCalendarWidget();
    }
  });
  $(document).unbind("mouseup");
});
function updateCalendarWidget() {
  console.log("updating price");
  $(".day-rate").each(function () {
    if (!$(this).hasClass("updated")) {
      var currency = $(this).text().trim().slice(0, 2);
      var oldPrice = $(this).text().trim().slice(2);
      if (oldPrice.length && /[0-9]+/.test($(this).text().trim())) {
        var newPrice = (oldPrice * 1.177).toFixed();
        $(this).text(currency + newPrice);
        $(this).addClass("updated");
      }
    }
  });
}
//修复重复update的问题