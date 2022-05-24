$(function () {
  $(".sub-nav .nav-link:contains(Manage Booking)").click(function () {
    DY.API("event", {
      name: "Click on 'Manage Booking' on secondary nav-bar",
      properties: {},
    });
  });
  $(".navbar-nav .dropdown-menu .dropdown-item:contains(Manage Booking)").click(
    function () {
      DY.API("event", {
        name: "Click on 'Manage Booking' on dropdown menu",
        properties: {},
      });
    }
  );
});
