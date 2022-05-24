$(function () {
  $(".rich-text a").click(function (e) {
    e.preventDefault();
    modalOpen();
    $(document).bind("click.modal", function (e) {
      if ($(e.target).is($("#parkingbenefits"))) {
        modalClose();
      }
    });
  });
  $("#parkingbenefits .close").click(function () {
    modalClose();
  });

  function modalOpen() {
    $("#parkingbenefits").show();
    $("body").addClass("modal-open").css("padding-right", "17px");
    setTimeout(function () {
      $("#parkingbenefits").addClass("show");
    }, 5);
  }
  function modalClose() {
    $("#parkingbenefits").removeClass("show");
    setTimeout(function () {
      $("#parkingbenefits").hide();
      $("body").removeClass("modal-open").css("padding-right", "");
    }, 150);
    $(document).unbind("click.modal");
  }
});
