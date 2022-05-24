$(function () {
  $(".check_boxes .btn-box .button-cta").click(function () {
    DY.API("event", {
      name: "Click on 'Buy Tickets' button",
      properties: {},
    });
  });
});
