window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (timeOutFn) {
    return setTimeout(timeOutFn, 1000 / 60);
  };
window["mbsStickyWidget4277v1"] = function () {
  if (
    document.URL.indexOf("reservation.html") === -1 &&
    typeof jQuery !== typeof undefined &&
    jQuery(".main-nav .nav-button").length &&
    (jQuery(".sidebar-section .btn-book-ticket").length ||
      jQuery(".table_widget").length) &&
    !jQuery(".running4277v1").length
  ) {
    jQuery("body").addClass("running4277v1");
    jQuery(".main-nav .nav-item.dropdown.dropdown-booking a").text(
      "Book a Table"
    );
    checkMobileButton4277v1();
    var winWidth = jQuery(window).width();
    jQuery(window).resize(function () {
      if (jQuery(window).width() != winWidth) {
        winWidth = jQuery(window).width();
        checkMobileButton4277v1();
      }
    });
    if (jQuery(".sidebar-section .btn-book-ticket").length) {
      jQuery(".main-nav .nav-item.dropdown.dropdown-booking").html("");
      jQuery(".sidebar-section .btn-book-ticket")
        .clone(true)
        .appendTo(".main-nav .nav-item.dropdown.dropdown-booking");
      jQuery(".main-nav .nav-item.dropdown.dropdown-booking a").attr(
        "class",
        "btn btn-secondary d-none d-lg-inline-block"
      );
    }
    if (jQuery(".sidebar-block .table_widget").length) {
      jQuery(".main-nav .nav-item.dropdown.dropdown-booking").html("");
      jQuery(".main-nav .nav-item.dropdown.dropdown-booking").html(
        '<a href="#m" class="btn btn-secondary d-none d-lg-inline-block" onclick="return animateToWidget(event);">Book A Table</a>'
      );
    }
    jQuery(window).scroll();
  } else {
    window.requestAnimationFrame(mbsStickyWidget4277v1);
  }
};
window.mbsStickyWidget4277v1();
function animateToWidget(e) {
  e.preventDefault();
  var elem = jQuery(".table-widget-container");
  if (elem.length) {
    jQuery("html, body")
      .stop()
      .animate({ scrollTop: elem.offset().top - 65 }, 500);
  }
  return false;
}
function checkMobileButton4277v1() {
  var chkIntv = setInterval(function () {
    if (
      !jQuery(".bookATableBTN").length &&
      jQuery(".btn-sticky-bottom a.btn-book-ticket").length
    ) {
      clearInterval(chkIntv);
      var clName = "";
      if (jQuery(".main-nav .nav-button").hasClass("show")) {
        clName = "show";
      }
      if (
        jQuery(".btn-sticky-bottom a.btn-book-ticket[href*='https://']").length
      ) {
        jQuery(".btn-sticky-bottom a.btn-book-ticket")
          .clone(true)
          .insertAfter(".main-nav .nav-button")
          .attr(
            "class",
            "btn btn-secondary nav-button bookATableBTN " + clName
          );
      } else {
        jQuery(".main-nav .nav-button").after(
          '<a href="javascript:;" id="sevenRoomsMobile" target="" class="btn btn-secondary nav-button bookATableBTN show" onclick="return animateToWidget(event);">BOOK A TABLE</a>'
        );
      }
      jQuery(".table_widget.section").insertBefore(".btn-sticky-bottom");
    }
  }, 100);
  setTimeout(function () {
    clearInterval(chkIntv);
  }, 15000);
}
