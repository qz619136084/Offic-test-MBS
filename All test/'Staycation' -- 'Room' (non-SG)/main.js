$(function () {
  //Update EN navbar;
  $(
    "#navbarNavAltMarkup .navbar-nav:not(.navbar-sub) .nav-item:eq(6) a.dropdown-item:contains(Staycation Deals)"
  ).text("Room Deals");
  //Update deals/rooms.html page;
  var waitTab = setInterval(function () {
    if ($(".tabs-nav-scroll-container .nav-link:contains(Staycation)").length) {
      $(".tabs-nav-scroll-container .nav-link:eq(0) h2").text("ROOMS");
      if (url.indexOf("deals/rooms.html") > -1) {
        $(".section-content-title h1").text("ROOM OFFERS & DEALS");
      }
      clearInterval(waitTab);
    }
  }, 100);
});
