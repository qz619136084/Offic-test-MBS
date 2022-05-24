function openLightbox(eleName) {
  $("body").addClass("modal-open").css("padding-right", "17px");
  $("body").append("<div class='modal-backdrop fade'></div>");
  eleName.show();
  setTimeout(function () {
    eleName.addClass("show");
    $(".modal-backdrop").addClass("show");
  }, 10);
}
function closeLightbox(eleName) {
  eleName.removeClass("show");
  $(".modal-backdrop").removeClass("show");
  setTimeout(function () {
    $("body").removeClass("modal-open").css("padding-right", "");
    eleName.hide();
  }, 150);
}
