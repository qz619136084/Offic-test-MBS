function openLightbox(eleName) {
  $("body").append("<div class='modal-backdrop fade'></div>");
  eleName.show();
  setTimeout(function () {
    eleName.addClass("show");
    $(".modal-backdrop").addClass("show");
    $("body").addClass("modal-open").css("padding-right", "17px");
  }, 10);
}
function closeLightbox(eleName) {
  eleName.removeClass("show");
  $(".modal-backdrop").removeClass("show");
  $("body").removeClass("modal-open").css("padding-right", "");
  setTimeout(function () {
    eleName.hide();
    $(".modal-backdrop").remove();
  }, 150);
}
