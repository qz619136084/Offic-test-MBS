$(function () {
  var selectedASM = sessionStorage.getItem("selectedASM");
  if (selectedASM != null) {
    sessionStorage.removeItem("selectedASM");
    $("#buyexhibition").addClass("come-in").addClass("already-visible");
    var position = $("#buyexhibition").offset().top - 70;
    $("html").animate({ scrollTop: position }, 300);
    $(
      "#buyexhibition .select-gallery li:contains(" + selectedASM + ")"
    ).trigger("click");
  }
});
