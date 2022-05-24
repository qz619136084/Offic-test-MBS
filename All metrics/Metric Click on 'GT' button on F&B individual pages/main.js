$(function () {
  $(".sidebar-section .btn.btn-secondary.btn-block").click(function () {
    DY.API("event", {
      name: "*Click on 'GT' button (F&B page)",
      properties: {},
    });
  });
});
